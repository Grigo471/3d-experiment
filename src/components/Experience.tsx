import { CubeCamera, Environment, PerspectiveCamera, useScroll } from "@react-three/drei"
import { Group, Shape, PerspectiveCamera as ThreePerspectiveCamera, Vector2, Vector3 } from "three"
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import { Background } from "./Background"
import { Tape } from "./Tape"
import { linePoints, lookAtCurve, lookAtPoints } from "../consts/curve"


export const Experience = () => {

    const cameraGroup = useRef<Group>(null);
    const camera = useRef<ThreePerspectiveCamera>(null);
    const scroll = useScroll();

    const tapeShape = useMemo(() => {
        const shape = new Shape();
        shape.moveTo(0, -0.1);
        shape.lineTo(0, 0.1);
    
        return shape;
    }, []);

    // useEffect(() => {
    //     camera.current?.lookAt(0, 0, -20)
    // }, [])

    useFrame(({ camera }) => {
        const currPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length),
            linePoints.length - 1
        );
        const currLookatIndex = Math.min(
            Math.round(scroll.offset * lookAtPoints.length),
            lookAtPoints.length - 1
        );
        const lookAtPoint = lookAtPoints[currLookatIndex + 1000];

        const currPoint = linePoints[currPointIndex];

        // const xDisplacement = (pointAhead.x - currPoint.x) * 100;
        // const yDisplacement = (pointAhead.y - currPoint.y) * 100;

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


        // cameraGroup.current?.quaternion?.slerp(targetCameraQuaternion, delta);
        cameraGroup.current?.position.lerp(currPoint, 0.1);
        camera.lookAt(lookAtPoint);
    });

    return (
        <>
            {/* <OrbitControls
            // target={[0, 0.35, 0]}
            // maxPolarAngle={1.45}
                enableZoom={false}
            /> */}
            {/* 
            <Text3D 
                font={'../../public/fonts/3dfont.json'}
                height={1}
                size={2}
                position={[-1, -1, sectionsCurvesParams[Sections.START].points[1].z / 2]}
                material={new MeshBasicMaterial({color: 'yellow'})}
            >
                G
            </Text3D> */}

            <group ref={cameraGroup}>
                {/* <Stars
                    count={2000}
                    fade
                    speed={1}
                    radius={50}
                    depth={50}
                    saturation={0}
                /> */}
                <PerspectiveCamera 
                    position={[0, 0, 0]} 
                    ref={camera} 
                    fov={50} 
                    makeDefault>
                    <hemisphereLight 
                    // args={[0xffffbb, 0x887979, 0.9]}
                        position={[0, 2, 0]}
                    />  
                </PerspectiveCamera>
                <Background />
            </group>

            <color args={[0, 0, 0]} attach="background" />

            <CubeCamera resolution={256} frames={Infinity}>
                {(texture) => (
                    <>
                        <Environment map={texture}>
                
                        </Environment>
                    </>
                )}
            </CubeCamera>

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
                            extrudePath: lookAtCurve,
                        },
                    ]}
                />
                <meshStandardMaterial
                    color={"white"}
                />
            </mesh>

            <Tape />
            {/* <SpotLights /> */}
            {/* <Rings /> */}
            {/* <Tube /> */}
            {/* <TriangularTube /> */}

            {/* <StartingTube /> */}

            {/* <AnimatedPlane
                position={[0, -10, -1000]}
                width={300}
                height={2000}
                widthSegments={32}
                heightSegments={100}
                rotate={[Math.PI / 4, 0, 0]}
                multiplyScalar={10}
                color={new Color('#2de2e6')}
                amplitude={10}
                animationSpeeds={[0.2, 0.1, 0.02, 0.01]}
            /> */}
            {/* <TextSections /> */}

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