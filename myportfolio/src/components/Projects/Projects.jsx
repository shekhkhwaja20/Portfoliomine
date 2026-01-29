import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import chat from "../../assets/chat.png"
 import todo from "../../assets/todo.png"
 import tic from "../../assets/tic.png"

function Projects() {
    useGSAP(()=>{
    gsap.from("#para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 20%",
      }
    })
       gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 20%",
      }
    })
})
  return (
   <div id="projects">
      <h1 id='para'>2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
      <Card title="VIRTUAL ASSISTANT" image={va}/>
      <Card title="AI POWERED FITNESS WEBSITE" image={fw}/>
      <Card title="AI CHATBOT" image={chat}/>
      <Card title="TO-DO LIST"image={todo}/>
      <Card title="TIC-TAC TOE" image={tic}/>
      </div>
   </div>
  )
}

export default Projects