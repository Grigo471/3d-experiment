import { CatmullRomCurve3, Vector3 } from "three";
import { CURVE_DISTANCE, LINE_NB_POINTS } from "./consts";

const curveXandY = [
    [0, 0],
    [0, 0],
    [2,0],
    [-2, 0],
    [2, 0],
    [0, 5],
    [0, 10],
    [0, 5],
    [2, 0]
]

export const curvePoints = curveXandY.map((a, i) => new Vector3(a[0], a[1], -i * CURVE_DISTANCE));

const tubePoints = curvePoints.slice(3);
const tapePoints = curvePoints.slice(0, 4);

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

export const linePoints = curve.getPoints(LINE_NB_POINTS);

