import { Sphere, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { BackSide, CanvasTexture, Color } from "three"
import { useRef } from "react"
import { ImprovedNoise } from "three/examples/jsm/Addons.js";
import { hslToRgb } from "../../utils/hslToRgb";
import { linePoints } from "../../consts/curve";

const stops = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

const getCanvas = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 16
    canvas.height = 1024
    return canvas
};

const canvas = getCanvas();

export const RainbowBackground = () => {

    const gl = useThree((state) => state.gl);
    const ref = useRef<CanvasTexture>(null);
    const scroll = useScroll();

    useFrame(() => {
        const context = canvas.getContext("2d");
        if (!context) return;
        const gradient = context.createLinearGradient(0, 0, 0, 1024);
        const curPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length),
            linePoints.length - 1
        );

        const tempColor = new Color();
        let i = stops.length;
        while (i--) {
            const h = Math.floor(Math.abs(
                (new ImprovedNoise().noise(
                    i  + curPointIndex * 0.0001, 
                    i + 0.1 + curPointIndex * 0.0001, 
                    0
                ) * 8000) * 0.07 + 180
            )) / 360;
            const rgb = hslToRgb(h, 0.9, 0.4);
            gradient.addColorStop(stops[i], tempColor.set(
                rgb[0], rgb[1], rgb[2]
            ).getStyle())
        }
        context.save()
        context.fillStyle = gradient
        context.fillRect(0, 0, 16, 1024);
        context.restore();
        if (ref.current) ref.current.needsUpdate = true;
    })

    return (
        <>
            <Sphere
                scale={[60, 60, 60]}
            >
                <meshBasicMaterial opacity={0.1} side={BackSide}>
                    <canvasTexture ref={ref} colorSpace={gl.outputColorSpace} args={[canvas]} attach="map" />
                </meshBasicMaterial>
            </Sphere>
        </>
    )
}