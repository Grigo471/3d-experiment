import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Experience } from './components/Experience'
import { ScrollControls } from '@react-three/drei'

function App() {

    return (
        <React.Suspense fallback={null}>
            <Canvas shadows>
                <ScrollControls pages={20} damping={0.25}>
                    <Experience />
                </ScrollControls>
            </Canvas>
        </React.Suspense>
    )
}

export default App
