import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, Mesh, Vector3 } from "three";

function Box({ color }: { color: Color}) {
    const box = useRef<Mesh>(null);
    const time = useRef(0);
    const [position, setPosition] = useState(getInitialPosition());
    const [xRotSpeed] = useState(() => Math.random());
    const [yRotSpeed] = useState(() => Math.random());
    const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05);

    function getInitialPosition() {
        const v = new Vector3((Math.random() * 2 - 1) * 3, Math.random() * 2.5 + 0.1, (Math.random() * 2 - 1) * 15);
        if (v.x < 0) v.x -= 1.75;
        if (v.x > 0) v.x += 1.75;

        return v;
    }

    function resetPosition() {
        const v = new Vector3((Math.random() * 2 - 1) * 3, Math.random() * 2.5 + 0.1, Math.random() * 10 + 10);
        if (v.x < 0) v.x -= 1.75;
        if (v.x > 0) v.x += 1.75;

        setPosition(v);
    }

    useFrame(
        (_, delta) => {
            time.current += delta * 1.2;
            const newZ = position.z - (time.current);

            if (newZ < -10) {
                resetPosition();
                time.current = 0;
            }

            box.current?.position.set(
                position.x,
                position.y,
                newZ,
            )
            if (box.current) {
                box.current.rotation.x += delta * xRotSpeed;
                box.current.rotation.y += delta * yRotSpeed;
            }
        },
        // [xRotSpeed, yRotSpeed, position.x, position.y]
    );

    return (
        <mesh
            ref={box}
            rotation-x={Math.PI * 0.5}
            scale={scale}
            castShadow
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} envMapIntensity={0.15} />
        </mesh>
    );
}

export function Boxes() {
    return <>
        {Array(100).fill(0).map((_, i) => 
            <Box 
                key={i} 
                color={i % 2 === 0 ? new Color(0.4, 0.1, 0.1) : new Color(0.05, 0.15, 0.4)} 
            />)
        }
    </>
}