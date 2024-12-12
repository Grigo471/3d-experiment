import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react"
import { BufferAttribute, Mesh, Vector2 } from "three";
import { ImprovedNoise } from "three/examples/jsm/Addons.js";

const vUv = new Vector2();
const perlin = new ImprovedNoise();

export const AnimatedPlane = () => {

    const ref = useRef<Mesh>(null);

    useEffect(() => {
        if (ref.current?.geometry) {
            // ref.current.geometry.rotateZ(Math.PI / 4);
            ref.current.geometry.rotateY(Math.PI / 4);
            ref.current.geometry.rotateX(Math.PI / 4);
        }
    }, [])

    useFrame((state) => {
        const elapsed = state.clock.getElapsedTime();
        const vertices = ref.current?.geometry.getAttribute('position');
        const uv = ref.current?.geometry.getAttribute('uv') as BufferAttribute;
        if (!vertices || !uv) return;
        for (let i = 0; i < vertices.array.length; i++) {
            vUv.fromBufferAttribute(uv, i).multiplyScalar(10);
            const y = perlin.noise(vUv.x, vUv.y + elapsed, elapsed * 0.1);
            vertices.setY(i, y);
        }
        vertices.needsUpdate = true;
    });

    return (
        <mesh
            ref={ref}
            position={[0, -10, -100]}
        >
            <planeGeometry 
                args={[100, 2000, 50, 50]}
            />
            <meshBasicMaterial 
                wireframe
                // color={0x00ff69}
                color={[4, 0.1, 0.4]}
            />
        </mesh>
    )
}