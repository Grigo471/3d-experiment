import { CubeCamera, Environment, PerspectiveCamera, useScroll } from "@react-three/drei"
import { Group, PerspectiveCamera as ThreePerspectiveCamera, Vector2 } from "three"
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { linePoints } from "../consts/curve"
import { Tape } from "./Tape"
import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import { Tube } from "./Tube"
import { TextSections } from "./TextSections"
import { TriangularTube } from "./TriangularTube"

export const Experience = () => {

    const cameraGroup = useRef<Group>(null);
    const camera = useRef<ThreePerspectiveCamera>(null);
    const scroll = useScroll();

    useEffect(() => {
        camera.current?.lookAt(0, 2, 0)
    }, [])

    useFrame((_state, delta) => {
        const curPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length),
            linePoints.length - 1
        );
        const curPoint = linePoints[curPointIndex];
        // const pointAhead =
        //     linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

        // const xDisplacement = (pointAhead.x - curPoint.x) * 100;
        // const yDisplacement = (pointAhead.y - curPoint.y) * 100;

        // const angleRotation =
        //     (xDisplacement < 0 ? 1 : -1) *
        //     Math.min(Math.abs(xDisplacement), Math.PI / 3);

        // const targetCameraQuaternion = new Quaternion().setFromEuler(
        //     new Euler(
        //         yDisplacement,
        //         xDisplacement,
        //         cameraGroup.current?.rotation?.z
        //     )
        // );

        // cameraGroup.current?.quaternion?.slerp(targetCameraQuaternion, delta * 2);
        cameraGroup.current?.position?.lerp(curPoint, delta);

        // textSections.forEach((textSection) => {
        //     if (!cameraGroup.current) return;
        //     const distance = textSection.position.distanceTo(
        //         cameraGroup.current.position
        //     );

        //     if (distance < FRICTION_DISTANCE) {
        //         const targetCameraRailPosition = new Vector3(
        //             (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist, 0, 0
        //         );
        //         cameraGroup.current.position.lerp(targetCameraRailPosition, delta);
        //     }
        // });
    });

    return (
        <>
            {/* <OrbitControls
                target={[0, 0.35, 0]}
                maxPolarAngle={1.45}
                enableZoom={false}
            /> */}

            <group ref={cameraGroup}>
                <PerspectiveCamera 
                    position={[0, 2, 0]} 
                    ref={camera} 
                    fov={1} 
                    makeDefault>
                    <hemisphereLight 
                        // args={[0xffffbb, 0x887979, 0.9]}
                        position={[0, 2, 0]}
                    />  
                </PerspectiveCamera>
                
            </group>

            {/* <color args={[0, 0, 0]} attach="background" /> */}

            <CubeCamera resolution={256} frames={Infinity}>
                {(texture) => (
                    <>
                        <Environment map={texture} />
                    </>
                )}
            </CubeCamera>

            <Tape />
            {/* <SpotLights /> */}
            {/* <Rings /> */}
            <Tube />
            <TriangularTube />

            <TextSections />

            <EffectComposer>
                {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} /> */}
                <Bloom
                    blendFunction={BlendFunction.ADD}
                    intensity={1.3} // The bloom intensity.
                    width={300} // render width
                    height={300} // render height
                    kernelSize={5} // blur kernel size
                    luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
                    luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
                />
                <ChromaticAberration
                    radialModulation
                    modulationOffset={1}
                    blendFunction={BlendFunction.NORMAL} // blend mode
                    offset={new Vector2(0.0005, 0.0012)} // color offset
                />
            </EffectComposer>
        </>
    )
}