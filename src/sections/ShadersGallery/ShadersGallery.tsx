import { OrbitControls } from "@react-three/drei"
import { Blob } from "./components/Blob/Blob"

export const ShadersGallery = () => {

    return (
        <>
            <OrbitControls
                maxPolarAngle={1.45}
            />
            {/* <Experience /> */}
            <color args={[0, 0, 0]} attach="background" />
            <Blob />
            {/* <Ship /> */}
        </>
    )
}