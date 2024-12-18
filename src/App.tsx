import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ScrollControls } from '@react-three/drei'
import { ShadersGallery } from './sections/ShadersGallery/ShadersGallery'

function App() {

    return (
        <React.Suspense fallback={null}>
            <Canvas shadows>
                <ScrollControls pages={20} damping={0.25}>
                    {/* <Experience /> */}
                    <ShadersGallery />
                </ScrollControls>
            </Canvas>
        </React.Suspense>
    )
}

export default App
