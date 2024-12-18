import { Shape, Vector3 } from "three"
import { lookAtCurve } from "../../consts/curve"

const shape = new Shape();
shape.moveTo(0, -0.1);
shape.lineTo(0, 0.1);

export const LookAtTrajectory = () => {
    return (
        <mesh 
            castShadow 
            receiveShadow
            position={new Vector3(0, -1, 0)}
        >
            <extrudeGeometry
                args={[
                    shape,
                    // undefined,
                    {
                        steps: 100,
                        extrudePath: lookAtCurve,
                    },
                ]}
            />
            <meshStandardMaterial
                color={"white"}
            />
        </mesh>
    )
}