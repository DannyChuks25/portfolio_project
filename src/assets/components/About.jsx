import { div } from 'motion/react-client'
import React from 'react'
import css_logo from "../IMAGES/css- download.png"
import html_logo  from "../IMAGES/html img2.png"
import js_logo  from "../IMAGES/js-download.png"
import py_logo from "../IMAGES/py-download.jpeg"
import node_logo from "../IMAGES/nodejs-download.png"
import react_logo from "../IMAGES/react-download.png"
import { useState, useEffect, useRef } from 'react'

const About = () => {
    const skillImg = [
        {id: 1, fileImg: html_logo, fileAlt: "html logo"},
        {id: 2, fileImg: css_logo, fileAlt: "css logo"},
        {id: 3, fileImg: js_logo, fileAlt: "js logo"},
        {id: 4, fileImg: py_logo, fileAlt: "python logo"},
        {id: 5, fileImg: react_logo, fileAlt: "react logo"},
        {id: 6, fileImg: node_logo, fileAlt: "nodejs logo"},
    ]
    const [isPaused, setIsPaused] = useState(false);
    const trackRef = useRef(null);
    const position = useRef(0);
    const requestRef = useRef(null);

    useEffect(() => {
        const speed = 0.3;
        const animate = () => {
            if(!isPaused && trackRef.current){
                position.current -= speed;
                if(Math.abs(position.current) >= trackRef.current.scrollWidth / 2){
                    position.current = 0;
                }
                trackRef.current.style.transform =  `translateX(${position.current}px)`;
            }
            requestRef.current = requestAnimationFrame(animate);
        }
        requestRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef.current);

    }, [isPaused]);

  return (
    <div className='flex justify-center '>
        <div className='text-white h-[87vh] w-[1000px] mt-[40px] p-4'>
            <div className='about-me'>
                <h1 className='text-center text-lg md:text-xl mb-3'>About Me</h1>
                <p className='text-center'>Studied at the Federal University of Technology, Owerri. <br /> 1 Year experience in web development. <br /> Dedicated to learning. I look forwards to working with you and achieving great things.
                </p>
            </div>
            <div id='skills' className='text-center mt-[100px]'>
                <h1 className='text-xl md:text-2xl mb-3'>Skills</h1>

                <div className='flex justify-center mb-[40px]'>
                <div className='relative overflow-hidden w-[450px] grid place--center' 
                        onMouseEnter={()=>setIsPaused(true)}
                        onMouseLeave={()=>{setIsPaused(false)}}>
                        <div ref={trackRef}
                        className='skill-img flex justify-center gap-x-3 '>
                            {
                                skillImg.concat(skillImg).map(img => (
                                    <img key={img.id} src={img.fileImg} alt={img.fileAlt} />
                                ))
                            }
                        </div>    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
