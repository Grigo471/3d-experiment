import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
    nodes: {
        Cube049: Mesh, Cube049_1: Mesh

    }
    materials: {
        lightGrey: MeshStandardMaterial, Grey: MeshStandardMaterial
    }
}

export const Ruins = () => {
    const { nodes, materials } = useGLTF("../../../public/models/ruins.gltf") as unknown as GLTFResult;

    return (
        <group castShadow receiveShadow scale={1.2} position={[0, 0, -45]} rotation={[0, - Math.PI, 0]}>
            <mesh geometry={nodes.Cube049.geometry} material={materials.lightGrey} />
            <mesh geometry={nodes.Cube049_1.geometry} material={materials.Grey} />  
        </group>
        
    )
}