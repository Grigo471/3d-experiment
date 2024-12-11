import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, Mesh, MeshStandardMaterial } from "three";

export function Rings() {
    const itemsRef = useRef<Mesh[]>([]);
    const radius = 1;

    useFrame((state) => {
        const elapsed = state.clock.getElapsedTime();

        for (let i = 0; i < itemsRef.current.length; i++) {
            const mesh = itemsRef.current[i];
            const z = (i - 7) * 3.5 + ((elapsed * 0.4) % 3.5) * 2;
            const dist = Math.abs(z);
            mesh.position.set(0, radius, -z);
            mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

            let colorScale = 1;
            if (dist > 2) {
                colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
            }
            colorScale *= 0.5;

            if (i % 2 == 1) {     
                (mesh.material as MeshStandardMaterial).emissive = new Color(6, 0.15, 0.7).multiplyScalar(colorScale);
            } else {
                (mesh.material as MeshStandardMaterial).emissive = new Color(0.1, 0.7, 3).multiplyScalar(colorScale);
            }
        }
    });

    return (
        <>
            {Array(14).fill(0).map((_, i) => (
                <mesh
                    castShadow
                    receiveShadow
                    position={[0, radius, 0]}
                    key={i}
                    ref={(el: Mesh) => (itemsRef.current[i] = el)}
                >
                    <torusGeometry args={[radius, 0.05, 16, 100]} />
                    <meshStandardMaterial emissive={[4, 0.1, 0.4]} color={[0, 0, 0]} />
                </mesh>
            ))}
        </>
    );
}