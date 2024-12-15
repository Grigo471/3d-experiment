// import { Vector3 } from "three";
// import { sectionsCurvesParams } from "./curve";
// import { Sections } from "./types";

// export interface TextSectionInterface {
//     cameraRailDist: number;
//     position: Vector3;
//     title?: string;
//     subtitle: string;
// }

// const curvePoints = sectionsCurvesParams[Sections.RETROWAVE].points;

// export const textSections: TextSectionInterface[] = [
//     {
//         cameraRailDist: -1,
//         position: new Vector3(
//             curvePoints[1].x - 3,
//             curvePoints[1].y,
//             curvePoints[1].z
//         ),
//         subtitle: `Welcome to Wawatmos,
// Have a seat and enjoy the ride!`,
//     },
//     {
//         cameraRailDist: 1.5,
//         position: new Vector3(
//             curvePoints[2].x + 2,
//             curvePoints[2].y,
//             curvePoints[2].z
//         ),
//         title: "Services",
//         subtitle: `Do you want a drink?
// We have a wide range of beverages!`,
//     },
//     {
//         cameraRailDist: -1,
//         position: new Vector3(
//             curvePoints[3].x - 3,
//             curvePoints[3].y,
//             curvePoints[3].z
//         ),
//         title: "Fear of flying?",
//         subtitle: `Our flight attendants will help you have a great journey`,
//     },
// ];