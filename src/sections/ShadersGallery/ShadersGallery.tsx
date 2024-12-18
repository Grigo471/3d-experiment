import { Experience } from "./components/Experience/Experience"
import { Ship } from "./components/Ship/Ship"

export const ShadersGallery = () => {

    return (
        <>
            <Experience />
            <color args={[0, 0, 0]} attach="background" />
            <Ship />
        </>
    )
}