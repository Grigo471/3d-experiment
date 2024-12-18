uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 0.7 * vDisplacement * u_intensity;

    vec2 color2 = abs(vUv - 0.5) * 3.0  * (1.0 - distort);

    vec3 color = vec3(color2, abs(cos(u_time)) * 0.7 + 0.3);
  
    gl_FragColor = vec4(color, 1.0);
}