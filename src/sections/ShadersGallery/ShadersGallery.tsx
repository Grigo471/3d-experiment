import { ParticlesLoop } from "./components/ParticlesLoop/ParticlesLoop"
import { OrbitControls } from "@react-three/drei"

export const ShadersGallery = () => {

    return (
        <>
            <OrbitControls
                maxPolarAngle={1.45}
            />
            {/* <Experience /> */}
            <color args={[0, 0, 0]} attach="background" />
            {/* <Blob /> */}
            <ParticlesLoop />
            {/* <Ship /> */}
        </>
    )
}