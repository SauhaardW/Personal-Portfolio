import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import{SiCss3} from 'react-icons/si'
import{SiJavascript} from 'react-icons/si'
import{FaReact} from 'react-icons/fa'
import{SiTailwindcss} from 'react-icons/si'
import{FaVuejs} from 'react-icons/fa'
import{FaNodeJs} from 'react-icons/fa'
import{AiOutlineConsoleSql} from 'react-icons/ai'
import{SiDotnet} from 'react-icons/si'
import{FaPython} from 'react-icons/fa'
import{SiFirebase} from 'react-icons/si'


const Experience = () => {
    return (
        <section id='experience'>
            <h2 className='title'>My Skills</h2> 

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3 className='experience_header'>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <AiFillHtml5 className='icon'/>
                            <h4>HTML</h4>

                        </article>
                        <article className='experience_details'>
                            <SiCss3 className='icon'/>
                            <h4>CSS</h4>

                        </article>
                        <article className='experience_details'>
                            <SiJavascript className='icon'/>
                            <h4>JavaScript</h4>

                        </article>
                        <article className='experience_details'>
                            <FaReact className='icon'/>
                            <h4>React</h4>

                        </article>
                        <article className='experience_details'>
                            <SiTailwindcss className='icon'/>
                            <h4>Tailwind</h4>

                        </article>
                        <article className='experience_details'>
                            <FaVuejs className='icon'/>
                            <h4>Vue.js</h4>

                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                    <h3 className='experience_header'>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaNodeJs className='icon'/>
                            <h4>Node.js</h4>

                        </article>
                        <article className='experience_details'>
                            <AiOutlineConsoleSql className='icon'/>
                            <h4>SQL</h4>

                        </article>
                        <article className='experience_details'>
                            <FaPython className='icon'/>
                            <h4>Python</h4>

                        </article>
                        <article className='experience_details'>
                            <SiDotnet className='icon'/>
                            <h4>.Net</h4>

                        </article>
                        <article className='experience_details'>
                            <SiFirebase className='icon'/>
                            <h4>Firebase</h4>

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
