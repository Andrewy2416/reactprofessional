import React from 'react'
import './about.css'
import ME from '../../assets/profilepicture2.jpg'
import {FaAward} from 'react-icons/fa'
import {FaMoneyBillWave} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h2>Get to Know Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>10+ years as an Entrepenuer</small>
            </article>

            <article className='about__card'>
              <FaMoneyBillWave  className='about__icon'/>
              <h5>Revenue</h5>
              <small>2m+ Generated</small>
            </article>

            <article className='about__card'>
              <AiFillProject  className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            I am a Bay Area-based Full Stack Web Developer and Entrepeneur. I founded
            DYM Enterprises which developed and launched two major e-commerce websites
            that together generated over 2m+ in revenue. I am currently looking to enter
            the Web Development field to combine my skills in Business, Coding, and 
            Customer Service.  
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About