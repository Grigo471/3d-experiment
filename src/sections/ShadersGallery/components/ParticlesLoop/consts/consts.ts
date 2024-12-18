import { BufferAttribute, BufferGeometry, DataTexture, FloatType, NearestFilter, RGBAFormat } from "three";

const particlesSize = 128;
const count = particlesSize ** 2;

const data = new Float32Array(particlesSize ** 2 * 4);

for (let i = 0; i < particlesSize; i++) {
    for (let j = 0; j < particlesSize; j++) {
        const index = (i + j * particlesSize) * 4;
        const theta = Math.random() * Math.PI * 2;
        const r = 0.5 * Math.random();
        data[index] = r * Math.cos(theta);
        data[index + 1] = r * Math.sin(theta);
        data[index + 2] = r * Math.sin(theta);
        data[index + 3] = 1.;
    }
}

export const particlesTexture = new DataTexture(data, particlesSize, particlesSize, RGBAFormat, FloatType);
particlesTexture.magFilter = NearestFilter;
particlesTexture.minFilter = NearestFilter;
particlesTexture.needsUpdate = true;

export const particlesGeomerty = new BufferGeometry();
const positions = new Float32Array(count * 3);
const uv = new Float32Array(count * 2);

for (let i = 0; i < particlesSize; i++) {
    for (let j = 0; j < particlesSize; j++) {
        const index = (i + j * particlesSize);
        positions[index * 3] = Math.random();
        positions[index * 3 + 1] = Math.random();
        positions[index * 3 + 2] = Math.random();
        uv[index * 2] = i / particlesSize;
        uv[index * 2 + 1] = j / particlesSize;
    }
}

particlesGeomerty.setAttribute('position', new BufferAttribute(positions, 3));
particlesGeomerty.setAttribute('uv', new BufferAttribute(uv, 3));