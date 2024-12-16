import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial, Vector3 } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
    nodes: {
        Group_154: Mesh, Group_152: Mesh
    }
    materials: {
        ['leaves.001']: MeshStandardMaterial, ['wood.011']: MeshStandardMaterial
    }
}


export const LongPalm = ({position}: {position : Vector3}) => {
    const { nodes } = useGLTF("../../../public/models/longPalm.gltf") as unknown as GLTFResult;

    return (
        <group position={position} castShadow receiveShadow>
            <mesh geometry={nodes.Group_154.geometry} position={[0.6, 2.2, -0.5]}>
                <meshStandardMaterial color={'white'} emissive={'pink'} />
            </mesh>
            <mesh geometry={nodes.Group_152.geometry}>
                <meshStandardMaterial color={[0.1, 0.3, 0.5]} />
            </mesh>
        </group>
        
    )
}