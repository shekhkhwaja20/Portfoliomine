import React from 'react'
import './Home.css'
import me from "../../assets/myimg.png"
import TypingEffect, { Typewriter } from "react-simple-typewriter"
function Home() {
  return (
    <div id="home">
          <div className="lefthome">
            <div className="homedetails">
              <div className="line1">I'M </div>
              <div className="line2">SHEKH KHWAJA</div>
              <div className="line3">
                <Typewriter
                 words={['WEB DEVELOPER',"SOFTWARE DEVELOPER","HEART HACKER"]}
                 loop={0}
                cursor
                 cursorStyle="_"
                 typeSpeed={70}
                 deleteSpeed={50}
                 delaySpeed={1000}
                 />
              </div>
              <button>HIRE ME</button>
            </div>

          </div>
          <div className="righthome">
              <img src={me} alt="" />
          </div>
    </div>
  )
}

export default Home