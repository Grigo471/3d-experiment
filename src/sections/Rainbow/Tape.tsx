import { useMemo } from "react";
import { Shape, Vector2, Vector3 } from "three";
import { sectionsCurves } from "../../consts/curve";
import { Sections } from "../../consts/types";
import { MeshReflectorMaterial } from "@react-three/drei";

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
                        steps: 100,
                        extrudePath: tapeCurve,
                    },
                ]}
            />
            <MeshReflectorMaterial
                envMapIntensity={0}
                normalScale={new Vector2(0.15, 0.15)}
                dithering={true}
                color={'red'}
                roughness={0.7}
                blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
                mixBlur={30} // How much blur mixes with surface roughness (default = 1)
                mixStrength={80} // Strength of the reflections
                mixContrast={1} // Contrast of the reflections
                resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
                mirror={0.9} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
                minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
                maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
                depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
                reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
            />
        </mesh>
    )
}