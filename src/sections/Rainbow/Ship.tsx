import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
    nodes: {
        ship_light_8angles_1: Mesh, 
        ship_light_8angles_2: Mesh, 
        ship_light_8angles_3: Mesh, 
        ship_light_8angles_4: Mesh, 
        ship_light_8angles_5: Mesh, 
        ship_light_8angles_6: Mesh, 
        cannon_front_1_1: Mesh, 
        cannon_front_1_2: Mesh, 
        cannon_front_1001: Mesh, 
        cannon_left_1_1: Mesh, 
        cannon_left_1_2: Mesh, 
        cannon_left_1001_1: Mesh, 
        cannon_left_1001_2: Mesh,  
        cannon_left_1001: Mesh, 
        cannon_right_1001: Mesh, 
        sail_back_1_1: Mesh, 
        sail_back_1_2: Mesh, 
        sail_front_1_1: Mesh, 
        sail_front_1_2: Mesh, 
        sail_middle_1_1: Mesh, 
        sail_middle_1_2: Mesh, 
        steering_1_1: Mesh, 
        steering_1_2: Mesh

    }
    materials: {
        ['wood.019']: MeshStandardMaterial, ['woodDark.001']: MeshStandardMaterial, ['iron.009']: MeshStandardMaterial, ['window.001']: MeshStandardMaterial, ['textile.005']: MeshStandardMaterial, ['_defaultMat.003']: MeshStandardMaterial
    }
}


export const Ship = () => {
    const { nodes, materials } = useGLTF("../../../public/models/ship.gltf") as unknown as GLTFResult;

    return (
        <group position={[0, 5, -20,]} rotation={[0, Math.PI / 4, 0]}>
            <mesh geometry={nodes.ship_light_8angles_1.geometry} material={nodes.ship_light_8angles_1.material} />
            <mesh geometry={nodes.ship_light_8angles_2.geometry} material={materials['woodDark.001']} />
            <mesh geometry={nodes.ship_light_8angles_3.geometry} material={nodes.ship_light_8angles_3.material} />
            <mesh geometry={nodes.ship_light_8angles_4.geometry} material={materials['window.001']} />
            <mesh geometry={nodes.ship_light_8angles_5.geometry} material={nodes.ship_light_8angles_5.material} />
            <mesh geometry={nodes.ship_light_8angles_6.geometry} material={materials['_defaultMat.003']} />
            <group position={[0, 1.44, -3.62,]} >
                <mesh geometry={nodes.cannon_front_1_1.geometry} material={nodes.cannon_front_1_1.material} />
                <mesh geometry={nodes.cannon_front_1_2.geometry} material={nodes.cannon_front_1_2.material} />
                <mesh geometry={nodes.cannon_front_1001.geometry} material={nodes.cannon_front_1001.material} position={[0, 0.28, -0.07,]} rotation={[0.07, 0, 0,]} />
            </group>
            <group position={[-0.76, 1.28, -1.68,]} rotation={[0, Math.PI / 2, 0,]} >
                <mesh geometry={nodes.cannon_left_1_1.geometry} material={nodes.cannon_left_1_1.material} />
                <mesh geometry={nodes.cannon_left_1_2.geometry} material={nodes.cannon_left_1_2.material} />
                <group position={[-0.22, 0.13, 0.26,]} >
                    <mesh geometry={nodes.cannon_left_1001_1.geometry} material={nodes.cannon_left_1001_1.material} />
                    <mesh geometry={nodes.cannon_left_1001_2.geometry} material={nodes.cannon_left_1001_2.material} />
                </group>
                <group position={[0.22, 0.13, 0.26,]} rotation={[Math.PI, 0, Math.PI,]} >
                    <mesh geometry={nodes.cannon_left_1001_1.geometry} material={nodes.cannon_left_1001_1.material} />
                    <mesh geometry={nodes.cannon_left_1001_2.geometry} material={nodes.cannon_left_1001_2.material} />
                </group>
                <group position={[-0.22, 0.13, -0.2,]} >
                    <mesh geometry={nodes.cannon_left_1001_1.geometry} material={nodes.cannon_left_1001_1.material} />
                    <mesh geometry={nodes.cannon_left_1001_2.geometry} material={nodes.cannon_left_1001_2.material} />
                </group>
                <group position={[0.22, 0.13, -0.2,]} rotation={[Math.PI, 0, Math.PI,]} >
                    <mesh geometry={nodes.cannon_left_1001_1.geometry} material={nodes.cannon_left_1001_1.material} />
                    <mesh geometry={nodes.cannon_left_1001_2.geometry} material={nodes.cannon_left_1001_2.material} />
                </group>
                <mesh geometry={nodes.cannon_left_1001.geometry} material={nodes.cannon_left_1001.material} position={[0, 0.44, -0.07,]} rotation={[0.09, 0, 0,]} />
            </group>
            <group position={[0.76, 1.28, -1.68,]} rotation={[0, -Math.PI / 2, 0,]} >
                <mesh geometry={nodes.cannon_left_1_1.geometry} material={nodes.cannon_left_1_1.material} />
                <mesh geometry={nodes.cannon_left_1_2.geometry} material={nodes.cannon_left_1_2.material} />
                <group position={[-0.22, 0.13, 0.26,]} >
                    <mesh geometry={nodes.cannon_left_1001_1.geometry} material={nodes.cannon_left_1001_1.material} />
                    <mesh geometry={nodes.cannon_left_1001_2.geometry} material={nodes.cannon_left_1001_2.material} />
                </group>
                <group position={[0.22, 0.13, 0.26,]} rotation={[Math.PI, 0, Math.PI,]} >
                    <mesh geometry={nodes.cannon_left_1001_1.geometry} material={nodes.cannon_left_1001_1.material} />
                    <mesh geometry={nodes.cannon_left_1001_2.geometry} material={nodes.cannon_left_1001_2.material} />
                </group>
                <group position={[-0.22, 0.13, -0.2,]} >
                    <mesh geometry={nodes.cannon_left_1001_1.geometry} material={nodes.cannon_left_1001_1.material} />
                    <mesh geometry={nodes.cannon_left_1001_2.geometry} material={nodes.cannon_left_1001_2.material} />
                </group>
                <group position={[0.22, 0.13, -0.2,]} rotation={[Math.PI, 0, Math.PI,]} >
                    <mesh geometry={nodes.cannon_left_1001_1.geometry} material={nodes.cannon_left_1001_1.material} />
                    <mesh geometry={nodes.cannon_left_1001_2.geometry} material={nodes.cannon_left_1001_2.material} />
                </group>
                <mesh geometry={nodes.cannon_right_1001.geometry} material={nodes.cannon_right_1001.material} position={[0, 0.44, -0.07,]} rotation={[0.09, 0, 0,]} />
            </group>
            <group position={[1.35, 3.03, 1.86,]} >
                <mesh geometry={nodes.sail_back_1_1.geometry} material={nodes.sail_back_1_1.material} />
                <mesh geometry={nodes.sail_back_1_2.geometry} material={nodes.sail_back_1_2.material} />
            </group>
            <group position={[1.35, 1.6, -3.2,]} >
                <mesh geometry={nodes.sail_front_1_1.geometry} material={nodes.sail_front_1_1.material} />
                <mesh geometry={nodes.sail_front_1_2.geometry} material={nodes.sail_front_1_2.material} />
            </group>
            <group position={[1.35, 1.6, -1.55,]} >
                <mesh geometry={nodes.sail_middle_1_1.geometry} material={nodes.sail_middle_1_1.material} />
                <mesh geometry={nodes.sail_middle_1_2.geometry} material={nodes.sail_middle_1_2.material} />
            </group>
            <group position={[0, 2.78, 1.05,]} >
                <mesh geometry={nodes.steering_1_1.geometry} material={nodes.steering_1_1.material} />
                <mesh geometry={nodes.steering_1_2.geometry} material={nodes.steering_1_2.material} />
            </group>
        </group>
        
    )
}