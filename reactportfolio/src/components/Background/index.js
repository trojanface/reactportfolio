import React from 'react'
import "./style.css"
import Circles from './components/Circles'

//TODO Ensure the background repeats and is in the background

export default function Background() {
    return (
        <>
        <Circles />
        <div style={{zIndex:-1}} className="contentContainer mobgrid">
            <svg  className="bckgrndDots" width="100%" height="100%">
                <defs>
                    <pattern id="polka-dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">

                        <line  x1="16.5" y1="25" x2="33.5" y2="25" strokeWidth="2">
                        </line>
                        <line x1="25" y1="16.5" x2="25" y2="33.5" strokeWidth="2">
                        </line>
                    </pattern>
                </defs>

                <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"></rect>
            </svg>
        </div>
        </>
    )
}
