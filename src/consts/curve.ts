import { CatmullRomCurve3, Vector3 } from "three";
import { LINE_NB_POINTS } from "./consts";
import { CurveParams, Sections } from "./types";

export const sectionsCurvesParams: Record<Sections, CurveParams> = {
    // [Sections.START]: {
    //     points: [
    //         new Vector3(0, 0, 0),
    //         new Vector3(0, 0, -20),
    //         new Vector3(0, 0, -100),
    //     ],
    //     closed: false,
    //     curveType: 'catmullrom',
    //     tension: 0.5
    // },
    [Sections.RAINBOW]: {
        points: [
            new Vector3(0, 0, 0),
            new Vector3(0, 0, -10),
            new Vector3(3, 0, -20),
            new Vector3(1, 1, -24),
            new Vector3(0, -1, -28),
            new Vector3(-1, 0, -36),
            new Vector3(0, 1, -40),
            new Vector3(1, 0, -44),
            new Vector3(0, 0, -48),
            new Vector3(0, 0, -65),
            new Vector3(0, 0, -100),
            new Vector3(0, 0, -150),
        ],
        closed: false,
        curveType: 'catmullrom',
        tension: 0.5
    },
    // [Sections.RINGS]: {
    //     points: [
    //         new Vector3(0, 0, -700),
    //         new Vector3(0, 0, -800),
    //         new Vector3(0, 0, -900),
    //     ],
    //     closed: false,
    //     curveType: 'catmullrom',
    //     tension: 0.5
    // },
    // [Sections.RETROWAVE]: {
    //     points: [
    //         new Vector3(0, 0, -900),
    //         new Vector3(0, 0, -1000),
    //         new Vector3(0, 0, -1100),
    //         new Vector3(0, 0, -1200),
    //     ],
    //     closed: false,
    //     curveType: 'catmullrom',
    //     tension: 0.5
    // },
}

export const lookAtCurve = new CatmullRomCurve3([
    new Vector3(0, 2, -10),
    new Vector3(-5, 1, -20),
    new Vector3(-10, 5, -30),
    new Vector3(10, 1, -34),
    new Vector3(0, 0, -38),
    new Vector3(-1, 0, -46),
    new Vector3(0, 1, -50),
    new Vector3(0, 0, -54),
    new Vector3(0, 0, -58),
    new Vector3(0, 0, -70),
]);

export const lookAtPoints = lookAtCurve.getPoints(12000);

export const sectionsCurves = Object.fromEntries(
    Object.entries(sectionsCurvesParams).map(
        ([key, {points, closed, curveType, tension}]) => [key, new CatmullRomCurve3(
            points, closed, curveType, tension 
        )]
    )
);

export const linePoints = Object.entries(sectionsCurves).reduce(
    (arr, [key, curve]) => arr.concat(curve.getPoints(LINE_NB_POINTS[key as Sections])), [] as Vector3[]
)

export const triangleTubePoints = () => {
    const points = [];;

    for (let i = 0; i < 5; i += 1) {
        points.push(new Vector3(0, 0, -50 * (i / 4)));
    }

    // points[4].y = -0.04;

    return points;
}

export const triangleTubeCurve = new CatmullRomCurve3(triangleTubePoints(), false, 'catmullrom');
