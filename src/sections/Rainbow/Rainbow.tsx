import { Vector3 } from "three"
import { LongPalm } from "./LongPalm"
import { RainbowBackground } from "./RainbowBackground"
import { Tape } from "./Tape"
import { Ruby } from "./Ruby"
import { FoundationStone } from "./FoundationStone"
import { Ground } from "../../components/Ground"
import { TriangularTube } from "../../components/TriangularTube"

export const Rainbow = () => {
    return (
        <>
            <RainbowBackground />
            <LongPalm position={new Vector3(-5, -2, -10)} />
            <LongPalm position={new Vector3(10, -2, -15)} />
            <Ruby position={new Vector3(-2, -1, -15)} />
            <Ruby position={new Vector3(-10, 1, -20)} />
            <FoundationStone />
            <Tape />
            <Ground />
            {/* <Ruins /> */}
            {/* <Ship /> */}
            <TriangularTube />
        </>
    )
}