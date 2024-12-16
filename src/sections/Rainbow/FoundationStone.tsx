import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
    nodes: {
        formation_stone: Mesh

    }
    materials: {
        ['stone.001']: MeshStandardMaterial
    }
}


export const FoundationStone = () => {
    const { nodes, materials } = useGLTF("../../../public/models/foundationStone.gltf") as unknown as GLTFResult;

    return (
        <group castShadow receiveShadow>
            <mesh 
                geometry={nodes.formation_stone.geometry} 
                position={[-20, -2, -30]} 
                material={materials['stone.001']}
                rotation={[Math.PI, Math.PI / 2, Math.PI,]}
                scale={15}
            />
                
        </group>
        
    )
}