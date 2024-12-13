import { Color, Float32BufferAttribute, TubeGeometry } from "three";
import { triangleTubeCurve } from "./curve";
import { ImprovedNoise } from "three/examples/jsm/Addons.js";

const createTriangularTubeGeometry = () => {
    const geometry = new TubeGeometry(triangleTubeCurve, 120, 1, 3, false);
    const colors = [];
    const vertices = geometry.getAttribute('position').array;

    for (let i = 0; i < vertices.length; i += 3) {
        const color = new Color(
            "hsl(" +
            (Math.floor(
                Math.abs(new ImprovedNoise().noise(
                    vertices[i] * 2, vertices[i + 1] * 4, vertices[i + 2] * 2
                )) * 80 * 100
            ) * 0.01 + 180) +
            ",70%,60%)"
        );
        colors.push(color.r);
        colors.push(color.g);
        colors.push(color.b);
    }
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

    return geometry;
}

export const triangularTubeGeometry = createTriangularTubeGeometry();
export const triangularTubeGeometry_o = triangularTubeGeometry.clone();
export const triangularTubeSplinePoints = triangleTubeCurve.getPoints(120);
