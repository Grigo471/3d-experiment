uniform float uTime;
uniform sampler2D uPositions;
varying vec2 vUv;
varying vec3 vPosition;

float PI = 3.14159265358979;

void main() {
    vec4 pos = texture2D(uPositions, vUv);

    gl_FragColor = vec4(1., 1., 1.0, 1.0);
}