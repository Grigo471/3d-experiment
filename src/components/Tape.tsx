import { useMemo } from "react";
import { LINE_NB_POINTS } from "../consts/consts"
import { Shape } from "three";
import { tapeCurve } from "../consts/curve";

export const Tape = () => {
    const tapeShape = useMemo(() => {
        const shape = new Shape();
        shape.moveTo(0, -1);
        shape.lineTo(0, 1);

        return shape;
    }, []);

    return (
        <mesh castShadow receiveShadow>
            <extrudeGeometry
                args={[
                    tapeShape,
                    // undefined,
                    {
                        steps: LINE_NB_POINTS,
                        extrudePath: tapeCurve,
                    },
                ]}
            />
            <meshStandardMaterial
                color={"red"}
            />
        </mesh>
    )
}