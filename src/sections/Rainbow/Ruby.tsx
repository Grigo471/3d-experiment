import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, MeshStandardMaterial, Vector3 } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
    nodes: {
        Ruby: Mesh

    }
    materials: {
        Material: MeshStandardMaterial
    }
}

const xRotSpeed = Math.random();
const yRotSpeed = Math.random();


export const Ruby = ({position}: {position : Vector3}) => {
    const { nodes, materials } = useGLTF("../../../public/models/ruby.gltf") as unknown as GLTFResult;

    const ref = useRef<Mesh>(null);

    useFrame(
        (_, delta) => {
            if (ref.current) {
                ref.current.rotation.x += delta * xRotSpeed;
                ref.current.rotation.y += delta * yRotSpeed;
            }
        },
        // [xRotSpeed, yRotSpeed, position.x, position.y]
    );

    return (
        <group position={position} castShadow receiveShadow>
            <mesh ref={ref} geometry={nodes.Ruby.geometry} scale={0.5} material={materials.Material}/>
        </group>
        
    )
}