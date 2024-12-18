import { useGLTF } from "@react-three/drei";
import { DoubleSide, Mesh, ShaderMaterial, Vector2 } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        ship_light_8angles_1: Mesh, 
        ship_light_8angles_2: Mesh, 
        ship_light_8angles_3: Mesh, 
        ship_light_8angles_4: Mesh, 
        ship_light_8angles_5: Mesh, 
        ship_light_8angles_6: Mesh, 
        sail_back_1_1: Mesh, 
        sail_back_1_2: Mesh, 
        sail_front_1_1: Mesh, 
        sail_front_1_2: Mesh, 
        sail_middle_1_1: Mesh, 
        sail_middle_1_2: Mesh, 
    }
}

const shaderMaterial = new ShaderMaterial({                
    vertexShader: vertexShader, 
    fragmentShader: fragmentShader,
    side: DoubleSide,
    uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vector2(640, 800) },
        uDisplace: { value: 0 },
        uSpread: { value: 0 },
        uNoise: { value: 0 },
    }
});


export const Ship = () => {
    const { nodes } = useGLTF("../../../../public/models/ship.gltf") as unknown as GLTFResult;

    useFrame((state) => {
        const elapsedTime = state.clock.getElapsedTime(); 
        shaderMaterial.uniforms.uTime.value = elapsedTime;
    })

    return (
        <group position={[0, 0, 0,]} rotation={[0, Math.PI * 3 / 4 , 0]}>
            <mesh geometry={nodes.ship_light_8angles_1.geometry} material={shaderMaterial} />
            <mesh geometry={nodes.ship_light_8angles_2.geometry} material={shaderMaterial} />
            <mesh geometry={nodes.ship_light_8angles_3.geometry} material={shaderMaterial} />
            <mesh geometry={nodes.ship_light_8angles_4.geometry} material={shaderMaterial} />
            <mesh geometry={nodes.ship_light_8angles_5.geometry} material={shaderMaterial} />
            <mesh geometry={nodes.ship_light_8angles_6.geometry} material={shaderMaterial} />
            <group position={[1.35, 3.03, 1.86,]} >
                <mesh geometry={nodes.sail_back_1_1.geometry} material={shaderMaterial} />
                <mesh geometry={nodes.sail_back_1_2.geometry} material={shaderMaterial} />
            </group>
            <group position={[1.35, 1.6, -3.2,]} >
                <mesh geometry={nodes.sail_front_1_1.geometry} material={shaderMaterial} />
                <mesh geometry={nodes.sail_front_1_2.geometry} material={shaderMaterial} />
            </group>
            <group position={[1.35, 1.6, -1.55,]} >
                <mesh geometry={nodes.sail_middle_1_1.geometry} material={shaderMaterial} />
                <mesh geometry={nodes.sail_middle_1_2.geometry} material={shaderMaterial} />
            </group>
        </group>
        
    )
}