import { CurveType, Vector3 } from "three";

export enum Sections {
    // START = 'START',
    RAINBOW = 'RAINBOW',
    // RINGS = 'RINGS',
    // RETROWAVE = 'RETROWAVE'
}

export interface CurveParams {
    points: Vector3[];
    closed: boolean;
    curveType: CurveType;
    tension: number;
}