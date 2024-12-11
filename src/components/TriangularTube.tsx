import { BackSide, Mesh, TubeGeometry, Vector3 } from "three"
import { triangleTubeCurve } from "../consts/curve"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const tubeGeometry = new TubeGeometry(triangleTubeCurve, 120, 0.02, 3, false);
const tubeGeometry_o = tubeGeometry.clone();
const splinePoints = triangleTubeCurve.getPoints(120);


export const TriangularTube = () => {

    const tubeRef = useRef<Mesh>(null);

    // for (let i = 0; i < tubeGeometry.faces.length; i++) {
    //     f = this.tubeGeometry.faces[i];
    //     p = this.tubeGeometry.vertices[f.a];
    //     color = new THREE.Color(
    //         "hsl(" +
    //         (Math.floor(
    //             Math.abs(noise.simplex3(p.x * 2, p.y * 4, p.z * 2)) * 80 * 100
    //         ) *
    //             0.01 +
    //             180) +
    //         ",70%,60%)"
    //     );
    //     f.color = color;
    // }

    useFrame(
        (state) => {
            const elapsed = state.clock.getElapsedTime();
            const tubeGeometry = tubeRef.current?.geometry;
            const vertices = tubeGeometry?.getAttribute('position'); 
            const vertice_o = tubeGeometry_o.getAttribute('position');
            let index = 0;
            if (!vertices || !tubeRef.current) return;
            for (let i = 0; i < vertices.array.length; i += 3) {
                index = Math.floor(i / 120); 
                vertices.array[i] += ((vertice_o.array[i] + splinePoints[index].x) - vertices.array[i]) / 15;
                vertices.array[i + 1] += ((vertice_o.array[i + 1] + splinePoints[index].y) - vertices.array[i + 1]) / 15;
                const vector = new Vector3(vertices.array[i], vertices.array[i + 1], vertices.array[i + 2]);
                vector.applyAxisAngle(new Vector3(0, 0, 1), Math.abs(Math.cos(elapsed + vertices.array[i + 2] * 5)) * 0.1);
                vertices.array[i] = vector.x;
                vertices.array[i + 1] = vector.y;
                vertices.array[i + 2] = vector.z;
            }
            vertices.needsUpdate = true;
        },
    );

    return (
        <mesh position={[0, 2, 0]} ref={tubeRef} geometry={tubeGeometry}>
            {/* <tubeGeometry
                args={[triangleTubeCurve, 10, 10, 3, false]}
            /> */}
            <meshStandardMaterial
                side={BackSide}
                shadowSide={BackSide}
                color={[0, 0.5, 1]}
            />
        </mesh>
    )
}