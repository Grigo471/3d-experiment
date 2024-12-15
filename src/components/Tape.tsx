import { useMemo } from "react";
import { Shape, Vector3 } from "three";
import { sectionsCurves } from "../consts/curve";
import { Sections } from "../consts/types";

const tapeCurve = sectionsCurves[Sections.RAINBOW];

export const Tape = () => {
    const tapeShape = useMemo(() => {
        const shape = new Shape();
        shape.moveTo(1, -1);
        shape.lineTo(0, 1);

        return shape;
    }, []);

    return (
        <mesh 
            castShadow 
            receiveShadow
            position={new Vector3(0, -1, 0)}
        >
            <extrudeGeometry
                args={[
                    tapeShape,
                    // undefined,
                    {
                        steps: 32,
                        extrudePath: tapeCurve,
                    },
                ]}
            />
            <meshStandardMaterial
                color={"red"}
                wireframe
            />
        </mesh>
    )
}