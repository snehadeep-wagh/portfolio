import "./Intro.css"
import React from "react";
import linkedin from "../../img/linkedin.png"
import instagram from "../../img/instagram.png"
import github from "../../img/github.png"
import avatar from "../../img/avatar.png"
import glassemoji from "../../img/glassesimoji.png"
import humble from "../../img/humble.png"

const Intro = () => {
    return (
        <div className="intro">
            {/* Left container */}
            <div className="i-left">
                {/* intro */}
                <div className="i-name">
                    <span className="i-t-name">Hy! I Am</span>
                    <span className="i-m-name">Snehadeep Wagh</span>
                    <span className="i-b-name">I am a final-year CSE undergraduate student from PICT, Pune. A passionate coder, and enthusiastic learner who is enhancing his skills and understanding in Data Structures, Algorithms, OOP concepts(C++), and Problem Solving.</span>
                </div>
                {/* Hire me button */}
                <button className="button i-button">Hire me</button>

                {/* Social platforms */}
                <div className="i-l-img">
                    <img src={github} alt="github" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>
            {/* Right Container */}
            <div className="i-right">
                
                <img src={avatar} alt="avatar" id="i-avatar-id" />
                <img src={glassemoji} alt="avatar" id="i-glassemoji-id" />
                <img src={humble} alt="avatar" id="i-humble-id" />

                {/* right blur image*/}
                <div className="i-blur"
                    style={
                        {
                            background: "rgba(238, 210, 255)",
                            right: "-8%",
                            top: "3%"
                        }}
                ></div>

                {/* left blur image*/}
                <div className="i-blur"
                    style={
                        {
                            background: "#C1F5FF",
                            width: "20rem",
                            top: "45%"
                        }}
                ></div>

            </div>
        </div>
    );
}

export default Intro;