uniform float uTime;
uniform sampler2D uPositions;
varying vec2 vUv;
varying vec3 vPosition;

float PI = 3.14159265358979;

void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}

