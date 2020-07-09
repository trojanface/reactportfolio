import React from 'react'
import "./style.css"
// import "./script"
export default function Circles() {
    return (
        <div>
            <svg id="EVICircle" width="60vw" height="240vh">
                <circle className="glowCircle spinR" stroke="rgba(231, 231, 231,0.52)"
                    strokeWidth="25vw" fill="transparent" r="35vw" cx="55vw" cy="110vh" />
                <circle className="glowCircle spinL" stroke="rgba(212, 212, 212,0.52)"
                    strokeWidth="40vw" fill="transparent" r="30vw" cx="55vw" cy="110vh" />
                <circle id="wedge1" className="wedgeClass glowCircle" 
                    stroke="rgba(200, 200, 200,0.77)" strokeWidth="30vw" fill="transparent" r="40vw" cx="55vw" cy="110vh" />
                <circle id="wedge2" className="wedgeClass glowCircle" 
                    stroke="rgba(212, 212, 212,0.77)" strokeWidth="30vw" fill="transparent" r="37.9vw" cx="55vw" cy="110vh" />
                <circle id="wedge3" className="wedgeClass glowCircle"
                    stroke="rgba(231, 231, 231,0.74)" strokeWidth="25vw" fill="transparent" r="35.5vw" cx="55vw" cy="110vh" />
                <circle strokeWidth="40" fill="rgba(212, 212, 212,0.37)" r="20vw" cx="55vw" cy="110vh" />
                <circle id="pBar1" className="wedgeClass glowCircle"
                    stroke="rgba(200, 200, 200,0.79)" strokeWidth="0.5vw" fill="transparent" r="38vw" cx="55vw" cy="110vh" />
                <circle id="pBar2" className="wedgeClass glowCircle" 
                    stroke="rgba(255, 198, 132,0.79)" strokeWidth="1vw" fill="transparent" r="35vw" cx="55vw" cy="110vh" />
                <circle className="spinR glowCircle"  stroke="rgba(231, 231, 231,0.78)"
                    strokeWidth="1.5vw" fill="transparent" r="41.5vw" cx="55vw" cy="110vh" />
                <circle id="pBar4" className="wedgeClass glowCircle"  stroke="rgba(87, 0, 0,0.39)"
                    strokeWidth="3.5vw" fill="transparent" r="41.5vw" cx="55vw" cy="110vh" />
                <circle id="pBar3" className="wedgeClass glowCircle" 
                    stroke="rgba(200, 200, 200,0.79)" strokeWidth="1vw" fill="transparent" r="45vw" cx="55vw" cy="110vh" />
                <circle id="pBar5" className="spinR wedgeClass glowCircle"
                    stroke="rgba(255, 198, 132,0.73)" strokeWidth="0.8vw" fill="transparent" r="16vw" cx="55vw" cy="110vh" />
                <circle id="pBar6" className="wedgeClass glowCircle" 
                    stroke="rgba(255, 198, 132,0.73)" strokeWidth="0.3vw" fill="transparent" r="13vw" cx="55vw" cy="110vh" />
            </svg>
        </div>
    )
}
