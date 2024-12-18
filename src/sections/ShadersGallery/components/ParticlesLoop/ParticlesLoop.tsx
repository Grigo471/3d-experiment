import { ShaderMaterial } from "three";
import fragmentShader from './shaders/fragment.glsl';
import vertexParticles from './shaders/vertexParticles.glsl';
import { particlesGeomerty, particlesTexture } from "./consts/consts";
import { useFrame } from "@react-three/fiber";

const shaderMaterial = new ShaderMaterial({
    vertexShader: vertexParticles,
    fragmentShader: fragmentShader,
    uniforms: {
        uPositions: { value: particlesTexture },
        uTime: { value: 0.0 },
    }
});

export const ParticlesLoop = () => {

    useFrame(({ clock }) => {
        shaderMaterial.uniforms.uTime.value = clock.getElapsedTime();
    })

    return (
        <points
            position={[0, 0, -1]}
            material={shaderMaterial}
            geometry={particlesGeomerty}
        />
    )
}