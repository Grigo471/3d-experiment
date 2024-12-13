import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo, useEffect, useRef } from "react"
import { BufferAttribute, Color, DoubleSide, Mesh, Vector2 } from "three";
import { ImprovedNoise } from "three/examples/jsm/Addons.js";
import { linePoints } from "../consts/curve";

const vUv = new Vector2();
const perlin = new ImprovedNoise();

interface AnimatedPlaneProps {
    position: [number, number, number];
    width: number;
    height: number;
    widthSegments: number;
    heightSegments: number;
    color: Color;
    rotate?: [number, number, number];
    multiplyScalar?: number;
    amplitude?: number;
    wireframe?: boolean;
    animationSpeeds: [yTime: number, yScroll: number, zTime: number, zScroll: number]
}

export const AnimatedPlane = memo((props: AnimatedPlaneProps) => {

    const {
        position,
        width,
        height,
        widthSegments,
        heightSegments,
        rotate,
        color,
        multiplyScalar = 1,
        amplitude = 1,
        animationSpeeds,
        wireframe = true
    } = props;

    const ref = useRef<Mesh>(null);
    const scroll = useScroll();
    const [yTime, yScroll, zTime, zScroll] = animationSpeeds;

    useEffect(() => {
        if (ref.current?.geometry && rotate) {
            ref.current.geometry.rotateX(rotate[0]);
            ref.current.geometry.rotateY(rotate[1]);
            ref.current.geometry.rotateZ(rotate[2]);
        }
    }, [])

    useFrame((state) => {
        const elapsed = state.clock.getElapsedTime();
        const curPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length),
            linePoints.length - 1
        );
        const currPoint = linePoints[curPointIndex];
        const distModifier = currPoint.z < -1000 ? 1 : 0;
        const vertices = ref.current?.geometry.getAttribute('position');
        const uv = ref.current?.geometry.getAttribute('uv') as BufferAttribute;
        if (!vertices || !uv) return;
        for (let i = 0; i < vertices.array.length; i++) {
            vUv.fromBufferAttribute(uv, i).multiplyScalar(multiplyScalar);
            const y = perlin.noise(
                vUv.x, 
                vUv.y - elapsed * yTime + (currPoint.z + 1000) * yScroll * distModifier, 
                - elapsed * zTime+ (currPoint.z + 1000) * zScroll * distModifier
            );
            vertices.setY(i, y * amplitude);
        }
        vertices.needsUpdate = true;
        
    });

    return (
        <mesh
            ref={ref}
            position={position}
            receiveShadow
        >
            <planeGeometry 
                args={[width, height, widthSegments, heightSegments]}
            />
            <meshBasicMaterial 
                wireframe={wireframe}
                side={DoubleSide}
                color={color}
            />
        </mesh>
    )
});