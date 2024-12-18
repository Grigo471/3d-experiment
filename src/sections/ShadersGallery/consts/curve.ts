import { CatmullRomCurve3, Vector3 } from "three";

export const CURVE_POINTS = 12000;
export const LOOK_AT_POINTS = 120000;

export const curve = new CatmullRomCurve3([
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
]);

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

export const curvePoints = curve.getPoints(LOOK_AT_POINTS);
export const lookAtPoints = lookAtCurve.getPoints(CURVE_POINTS);