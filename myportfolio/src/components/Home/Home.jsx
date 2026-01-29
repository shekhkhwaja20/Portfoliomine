import React from 'react'
import './Home.css'
import me from "../../assets/myimg.png"
import TypingEffect, { Typewriter } from "react-simple-typewriter"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Home() {
  useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line1",{
      y:100,
      duration:1,
      opacity:0
    })
      tl1.from(".line2",{
      y:100,
      duration:1,
      opacity:0
    })
      tl1.from(".line3",{
      y:100,
      duration:1,
      opacity:0
    })
gsap.from(".righthome img",{
  x:200,
  duration:1,
  opacity:0
})
    
  })
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