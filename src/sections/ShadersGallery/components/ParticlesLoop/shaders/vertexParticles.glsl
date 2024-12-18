uniform float uTime;
uniform sampler2D uPositions;
varying vec2 vUv;
varying vec3 vPosition;

float PI = 3.14159265358979;

void main() {
    vUv = uv;
    vec4 pos = texture2D( uPositions, uv );

    float radius = 0.5 - length(pos.xy) + (uTime + 100.0) * 0.1 * pos.z;
    float angle = atan(pos.y, pos.x) + (uTime + 100.0) * 0.5 * pos.z;

    vec3 targetPos = vec3(cos(angle), sin(angle), pos.z) * radius;

    vec4 targetmvPosition = viewMatrix * modelMatrix * vec4(targetPos.xyz, 1.0);

    gl_PointSize = 5.0 * ( 1.0 / - targetmvPosition.z );
    gl_Position = projectionMatrix * targetmvPosition;
}