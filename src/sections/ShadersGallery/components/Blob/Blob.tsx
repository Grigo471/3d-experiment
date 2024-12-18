import { MathUtils, ShaderMaterial } from "three";
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const shaderMaterial = new ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        u_intensity: {
            value: 0.3,
        },
        u_time: {
            value: 0.0,
        },
    }
});

export const Blob = () => {

    const hover = useRef(false);

    useFrame(({ clock }) => {
        shaderMaterial.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

        shaderMaterial.uniforms.u_intensity.value = MathUtils.lerp(
            shaderMaterial.uniforms.u_intensity.value,
            hover.current ? 0.85 : 0.3,
            0.09
        );
    });

    return (
        <mesh
            scale={1.5}
            onPointerOver={() => (hover.current = true)}
            onPointerOut={() => (hover.current = false)}
            material={shaderMaterial}
        >
            <icosahedronGeometry 
                args={[2, 20]}
            />
        </mesh>
    )
}