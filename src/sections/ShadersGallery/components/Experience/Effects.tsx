import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import { Vector2 } from "three"

export const Effects = () => {
    return (
        <EffectComposer>
            <Bloom
                blendFunction={BlendFunction.ADD}
                intensity={1} // The bloom intensity.
                width={300} // render width
                height={300} // render height
                kernelSize={5} // blur kernel size
                luminanceThreshold={0.5} // luminance threshold. Raise this value to mask out darker elements in the scene.
                luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
            />
            <ChromaticAberration
                radialModulation
                modulationOffset={1}
                blendFunction={BlendFunction.NORMAL} // blend mode
                offset={new Vector2(0.0005, 0.0012)} // color offset
            />
        </EffectComposer>
    )
}