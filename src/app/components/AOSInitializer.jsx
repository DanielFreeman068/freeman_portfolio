// components/AOSInitializer.jsx
'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInitializer() {
    useEffect(() => {
        AOS.init({
        duration: 1000, // animation duration in ms
        once: true, // animate only once
        })
    }, [])

    return null
}
