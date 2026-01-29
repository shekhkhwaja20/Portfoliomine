import React from 'react'
import './Home.css'
import me from "../../assets/myimg.png"
import TypingEffect from "react-typing-effect"
function Home() {
  return (
    <div id="home">
          <div className="lefthome">
            <div className="homedetails">
              <div className="line1">I'M </div>
              <div className="line2">SHEKH KHWAJA</div>
              <div className="line3">
                <TypingEffect
                text={["WEB DEVELOPER","SOFTWARE DEVELOPER","HEARTHACKER"]}
                 speed={100}
                 eraseSpeed={50}
                 eraseDelay={1000}
                 typingDelay={500}
                 cursor='_'
                />
              </div>
            </div>

          </div>
          <div className="righthome">
              <img src={me} alt="" />
          </div>
    </div>
  )
}

export default Home