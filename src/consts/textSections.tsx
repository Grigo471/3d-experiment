import { Vector3 } from "three";
import { curvePoints } from "./curve";

export interface TextSectionInterface {
    cameraRailDist: number;
    position: Vector3;
    title?: string;
    subtitle: string;
}

export const textSections: TextSectionInterface[] = [
    {
        cameraRailDist: -1,
        position: new Vector3(
            curvePoints[1].x - 3,
            curvePoints[1].y,
            curvePoints[1].z
        ),
        subtitle: `Welcome to Wawatmos,
Have a seat and enjoy the ride!`,
    },
    {
        cameraRailDist: 1.5,
        position: new Vector3(
            curvePoints[2].x + 2,
            curvePoints[2].y,
            curvePoints[2].z
        ),
        title: "Services",
        subtitle: `Do you want a drink?
We have a wide range of beverages!`,
    },
    {
        cameraRailDist: -1,
        position: new Vector3(
            curvePoints[3].x - 3,
            curvePoints[3].y,
            curvePoints[3].z
        ),
        title: "Fear of flying?",
        subtitle: `Our flight attendants will help you have a great journey`,
    },
    {
        cameraRailDist: 1.5,
        position: new Vector3(
            curvePoints[4].x + 3.5,
            curvePoints[4].y,
            curvePoints[4].z - 12
        ),
        title: "Movies",
        subtitle: `We provide a large selection of medias, we highly recommend you Porco Rosso during the flight`,
    },
];