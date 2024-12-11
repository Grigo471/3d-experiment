import { Text } from "@react-three/drei";
import { textSections } from "../consts/textSections";
import { memo } from "react";

export const TextSections = memo(() => {
    return textSections.map(({title, subtitle, position}, index) => (
        <group position={position} key={index}>
            {!!title && (
                <Text
                    color="white"
                    anchorX={"left"}
                    anchorY="bottom"
                    fontSize={0.52}
                    maxWidth={2.5}
                    lineHeight={1}
                >
                    {title}
                    <meshStandardMaterial
                        color={"white"}
                        emissive={'yellow'}
                    />
                </Text>
            )}

            <Text
                color="white"
                anchorX={"left"}
                anchorY="top"
                fontSize={0.2}
                maxWidth={2.5}
            >
                {subtitle}
                <meshStandardMaterial
                    color={"white"}
                    emissive={"white"}
                />
            </Text>
        </group>))
});