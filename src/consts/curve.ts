import { CatmullRomCurve3, Vector3 } from "three";
import { CURVE_DISTANCE, LINE_NB_POINTS } from "./consts";

const curveXandY = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
]

export const startingTubePoints = [
    new Vector3(0, 0, 0),
    new Vector3(0, 0, -100),
    new Vector3(0, 0, -1000),
];

export const curvePoints = curveXandY.map((a, i) => new Vector3(a[0], a[1], -i * CURVE_DISTANCE - 1000));

const tubePoints = curvePoints.slice(3);
const tapePoints = curvePoints.slice(0, 4);

export const startingCurve = new CatmullRomCurve3(
    startingTubePoints,
    false,
    "catmullrom",
    0.5
);

export const curve = new CatmullRomCurve3(
    curvePoints,
    false,
    "catmullrom",
    0.5
);

export const tubeCurve = new CatmullRomCurve3(
    tubePoints,
    false,
    "catmullrom",
    0.5
);

export const tapeCurve = new CatmullRomCurve3(
    tapePoints,
    false,
    "catmullrom",
    0.5
);


export const linePoints = startingCurve.getPoints(300).concat(curve.getPoints(LINE_NB_POINTS));

export const triangleTubePoints = () => {
    const points = [];;

    for (let i = 0; i < 5; i += 1) {
        points.push(new Vector3(0, 0, -50 * (i / 4) - 1300));
    }

    // points[4].y = -0.04;

    return points;
}

export const triangleTubeCurve = new CatmullRomCurve3(triangleTubePoints(), false, 'catmullrom');
