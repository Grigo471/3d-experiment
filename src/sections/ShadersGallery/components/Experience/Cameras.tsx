import { PerspectiveCamera, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { curvePoints, lookAtPoints } from "../../consts/curve";

export const Cameras = () => {

    const scroll = useScroll();

    useFrame(({ camera }) => {

        const currPointIndex = Math.min(
            Math.round(scroll.offset * curvePoints.length),
            curvePoints.length - 1
        );
        const currPoint = curvePoints[currPointIndex];
        camera.position.lerp(currPoint, 0.1);
    
        const currLookatIndex = Math.min(
            Math.round(scroll.offset * lookAtPoints.length),
            lookAtPoints.length - 1
        );
        const lookAtPoint = lookAtPoints[currLookatIndex];
        const nextLookAtPoint = lookAtPoints[currLookatIndex + 1];
    
        const lookAt = lookAtPoint.lerp(nextLookAtPoint, 0.00001);
        camera.lookAt(lookAtPoint.clone().add(lookAt));
    });

    return (
        <>
            <PerspectiveCamera
                position={[0, 0, 0]} 
                fov={50} 
                makeDefault
            >
                <hemisphereLight
                    args={['white', 'white', 1]}
                    position={[0, 2, 0]}
                />  
            </PerspectiveCamera>
        </>
        
    )
}