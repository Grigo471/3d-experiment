import vertexShader from './shaders/vertex.ts';
import fragmentShader from './shaders/fragment.ts';
import { DoubleSide, Mesh, ShaderMaterial, Vector2 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export const Torus = () => {

    const ref = useRef<Mesh>(null);

    useFrame((state) => {
        const elapsedTime = state.clock.getElapsedTime();
        const torus = ref.current;
        if (!torus) return;
        const material = torus.material as ShaderMaterial; 
        material.uniforms.uTime.value = (elapsedTime / 2) % 2000;
        torus.rotation.z = Math.sin(elapsedTime) / 4 + elapsedTime / 20;
    })

    return (
        <mesh position={[-10, 5, -30]} ref={ref}>
            <sphereGeometry args={[3, 100, 100]}/>
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                side={DoubleSide}
                uniforms={{
                    uTime: { value: 0 },
                    uResolution: { value: new Vector2() },
                    uDisplace: { value: 5 },
                    uSpread: { value: 1 },
                    uNoise: { value: 8 },
                }}
            />
        </mesh>
    )
}