import { CubeCamera, Environment, PerspectiveCamera, useScroll } from "@react-three/drei"
import { Ground } from "./Ground"
import { Boxes } from "./Boxes"
import { Rings } from "./Rings"
import { CatmullRomCurve3, Euler, Group, Quaternion, Shape, Vector3 } from "three"
import { useMemo, useRef } from "react"
import { LINE_NB_POINTS } from "../consts/consts"
import { useFrame } from "@react-three/fiber"

export const Experience = () => {

    const cameraGroup = useRef<Group>(null);
    const scroll = useScroll();

    const curve = useMemo(() => {
        return new CatmullRomCurve3(
            [
                new Vector3(0, 0, 0),
                new Vector3(0, 0, -10),
                new Vector3(-2, 0, -20),
                new Vector3(-3, 0, -30),
                new Vector3(0, 0, -40),
                new Vector3(5, 0, -50),
                new Vector3(7, 0, -60),
                new Vector3(5, 0, -70),
                new Vector3(0, 0, -80),
                new Vector3(0, 0, -90),
                new Vector3(0, 0, -100),
            ],
            false,
            "catmullrom",
            0.5
        );
    }, []);

    const linePoints = useMemo(() => {
        return curve.getPoints(LINE_NB_POINTS);
    }, [curve]);

    const shape = useMemo(() => {
        const shape = new Shape();
        shape.moveTo(0, -0.2);
        shape.lineTo(0, 0.2);

        return shape;
    }, [curve]);

    useFrame((_state, delta) => {
        const curPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length),
            linePoints.length - 1
        );
        const curPoint = linePoints[curPointIndex];
        const pointAhead =
            linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

        const xDisplacement = (pointAhead.x - curPoint.x) * 80;

        // Math.PI / 2 -> LEFT
        // -Math.PI / 2 -> RIGHT

        const angleRotation =
            (xDisplacement < 0 ? 1 : -1) *
            Math.min(Math.abs(xDisplacement), Math.PI / 3);

        const targetCameraQuaternion = new Quaternion().setFromEuler(
            new Euler(
                cameraGroup.current?.rotation?.x,
                angleRotation,
                cameraGroup.current?.rotation?.z
            )
        );

        cameraGroup.current?.quaternion?.slerp(targetCameraQuaternion, delta * 2);

        cameraGroup.current?.position?.lerp(curPoint, delta * 24);
    });

    return (
        <>
            {/* <OrbitControls
                target={[0, 0.35, 0]}
                maxPolarAngle={1.45}
                enableZoom={false}
            /> */}

            <group ref={cameraGroup}>
                <PerspectiveCamera position={[0, 2, 0]} fov={50} makeDefault />
            </group>

            <color args={[0, 0, 0]} attach="background" />

            <CubeCamera resolution={256} frames={Infinity}>
                {(texture) => (
                    <>
                        <Environment map={texture} />
                    </>
                )}
            </CubeCamera>

            <spotLight
                color={[1, 0.25, 0.7]}
                intensity={150}
                angle={0.6}
                penumbra={0.5}
                position={[5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                color={[0.14, 0.5, 1]}
                intensity={200}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />

            <group position-y={1}>
                <mesh>
                    <extrudeGeometry
                        args={[
                            shape,
                            {
                                steps: LINE_NB_POINTS,
                                bevelEnabled: false,
                                extrudePath: curve,
                            },
                        ]}
                    />
                    <meshStandardMaterial color={"white"} />
                </mesh>
            </group>

            <Ground />
            <Boxes />
            <Rings />
        </>
    )
}