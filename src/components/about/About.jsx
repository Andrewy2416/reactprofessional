import React from 'react'
import './about.css'
import ME from '../../assets/profilepic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

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
              <small>7+ years in Business</small>
            </article>

            <article className='about__card'>
              <FiUsers  className='about__icon'/>
              <h5>Customers Served</h5>
              <small>7+ years in Business</small>
            </article>

            <article className='about__card'>
              <AiFillProject  className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores obcaecati odio, 
            porro neque repellendus quaerat illo ut fugit provident exercitationem error, 
            corrupti magnam nemo velit cumque et quas rem? Ipsa!
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About