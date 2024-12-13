import { GradientTexture, Sphere } from "@react-three/drei"
import { BackSide } from "three"

export const Background = () => {
    return (
        <>
            <Sphere
                scale={[500, 500, 500]}
            >
                <meshBasicMaterial side={BackSide}>
                    <GradientTexture
                        stops={[0.4, 0.5, 0.55, 0.75]} // As many stops as you want
                        colors={['#ff2975', '#ff901f', 'black',  '#2de2e6']} // Colors need to match the number of stops
                    />
                </meshBasicMaterial>
            </Sphere>
        </>
    )
}