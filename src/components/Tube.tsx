import { BackSide, Vector3 } from "three";
import { tubeCurve } from "../consts/curve";

export const Tube = () => {

    return (
        <mesh position={new Vector3(0, 2, 0)}>
            <tubeGeometry
                args={[tubeCurve, 50, 2, 10, false]}
            />
            <meshStandardMaterial 
                emissive={[1, 0.2, 0.6]} 
                color={[0, 1, 0]} 
                wireframe
                side={BackSide} 
            />
        </mesh>
    )
}