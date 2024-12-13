import { BackSide, Vector3 } from "three"
import { startingCurve } from "../consts/curve"

export const StartingTube = () => {
    return (
        <mesh position={new Vector3(0, 0, 0)}>
            <tubeGeometry
                args={[startingCurve, 50, 2, 50, false]}
            />
            <meshStandardMaterial 
                color={[0, 0, 0]} 
                side={BackSide} 
            />
        </mesh>
    )
}