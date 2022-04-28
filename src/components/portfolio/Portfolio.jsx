import React from 'react'
import IMG1 from '../../assets/moneyorganizer.jpg'
import IMG2 from '../../assets/socialnetwork.jpg'
import IMG3 from '../../assets/techblog.jpg'
import IMG4 from '../../assets/extensionpass.jpg'
import IMG5 from '../../assets/notetaker.jpg'
import IMG6 from '../../assets/exommerce.jpg'

import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMG1} alt=""/>
          </div>
          <h3>Budget Tracker</h3>
          <a href="https://github.com/Andrewy2416/moneyorganizer" className='btn' target='_blank'>Github</a>
          <a href="https://stormy-peak-38446.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMG2} alt=""/>
          </div>
          <h3>Social Network API</h3>
          <a href="https://github.com/Andrewy2416/Coolfriendnetwork" className='btn' target='_blank'>Github</a>
          <a href="https://www.youtube.com/watch?v=qZfWdZ4VjKY" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMG3} alt=""/>
          </div>
          <h3>Tech Blog</h3>
          <a href="https://github.com/Andrewy2416/awesometechblog" className='btn' target='_blank'>Github</a>
          <a href="https://lit-lake-58357.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMG4} alt=""/>
          </div>
          <h3>Extension Pass</h3>
          <a href="https://github.com/Andrewy2416/extension-pass" className='btn' target='_blank'>Github</a>
          <a href="https://whispering-plains-41505.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMG5} alt=""/>
          </div>
          <h3>Note Taker</h3>
          <a href="https://github.com/Andrewy2416/moneyorganizer" className='btn' target='_blank'>Github</a>
          <a href="https://stormy-peak-38446.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMG6} alt=""/>
          </div>
          <h3>Team Profile Generator</h3>
          <a href="https://github.com/Andrewy2416/teamprofilegenerator" className='btn' target='_blank'>Github</a>
          <a href="https://www.youtube.com/watch?v=B0GIEf_kNkA" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio