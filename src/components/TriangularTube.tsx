import { BackSide, Float32BufferAttribute, Vector3 } from "three"
import { useFrame } from "@react-three/fiber";
import { ImprovedNoise } from "three/examples/jsm/Addons.js";
import { hslToRgb } from "../utils/hslToRgb";
import { 
    triangularTubeGeometry, triangularTubeGeometry_o, triangularTubeSplinePoints
} from "../consts/triangularTube";
import { useScroll } from "@react-three/drei";
import { linePoints } from "../consts/curve";

const vertices = triangularTubeGeometry.getAttribute('position');
const vertice_o = triangularTubeGeometry_o.getAttribute('position');
const tubeColors = triangularTubeGeometry.getAttribute('color');

export const TriangularTube = () => {

    const scroll = useScroll();

    useFrame(
        (state) => {
            const elapsed = state.clock.getElapsedTime();
            const curPointIndex = Math.min(
                Math.round(scroll.offset * linePoints.length),
                linePoints.length - 1
            );
            const curPoint = linePoints[curPointIndex];

            let index = 0;
            const colors = [];

            if (!vertices) return;

            for (let i = 0; i < vertices.array.length; i += 3) {

                // animation

                index = Math.floor(i / 120); 
                const x = vertices.array[i]; 
                const y = vertices.array[i + 1]; 
                const z = vertices.array[i + 2];
                const splinePoints = triangularTubeSplinePoints[index];
                // Nice spinning effect
                // vertices.array[i] += (splinePoints[index].x) / 15;
                // vertices.array[i + 1] += (splinePoints[index].y) / 15;
                vertices.array[i] += ((vertice_o.array[i] + splinePoints.x) - x) / 12;
                vertices.array[i + 1] += ((vertice_o.array[i + 1] + splinePoints.y) - y) / 12;

                const vector = new Vector3(vertices.array[i], vertices.array[i + 1], vertices.array[i + 2]);
                vector.applyAxisAngle(new Vector3(0, 0, 1), Math.abs(Math.cos(elapsed * 0.2 + z * 2)) * 0.1);
                vertices.array[i] = vector.x;
                vertices.array[i + 1] = vector.y;
                vertices.array[i + 2] = vector.z;

                // colors

                const h = Math.floor(Math.abs(
                    (new ImprovedNoise().noise(x * 0, y * 0, z * 2 + elapsed * 0.1 + curPoint.z * 0.02) * 8000) * 0.07 + 180
                )) / 360;
                const rgb = hslToRgb(h, 0.7, 0.6);
                colors.push(rgb[0]);
                colors.push(rgb[1]);
                colors.push(rgb[2]);
            }
        
            // update

            vertices.needsUpdate = true;
            triangularTubeGeometry?.setAttribute('color', new Float32BufferAttribute(colors, 3));
            tubeColors.needsUpdate = true;
        },
    );

    return (
        <mesh position={[0, 0, -48]} geometry={triangularTubeGeometry}>
            <meshStandardMaterial
                side={BackSide}
                vertexColors
            />
        </mesh>
    )
}