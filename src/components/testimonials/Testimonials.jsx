import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/jeremy.jpg'
import AVTR2 from '../../assets/bitreplay.jpg'


const Testimonials = () => {
  return (
    <section id='testimonials'>
     <h5>Reviews and Articles</h5>
     <h2>Reviews</h2>

     <div className="container testimonials__container">
       <article className="testimonial">
         <div className="client__avatar">
           <img src={AVTR1} alt="Avatar One"/>
          </div>
         <h5 className='client__name'>Jeremy Huynh</h5>
           <small className='client__review'>
           Andrew was the bedrock for the projects I worked with him. His knowledge of the back-end was instrumental in 
           making sure that our deployments were smooth, and his ability to problem solve around the issues we faced on 
           the fly has enabled us to meet our deadlines for our major projects. I would highly recommend him for any full-stack 
           development role that he would be applying to.
           </small>

       </article>
       <h2>Articles</h2>
       <article className="testimonial">
         <div className="client__avatar">
           <img src={AVTR2} alt="Avatar Two"/>
           </div>
         <h5 className='client__name'>8BitDigi</h5>
           <small className='client__review'>
           Andrew was the bedrock for the projects I worked with him. His knowledge of the back-end was instrumental in 
           making sure that our deployments were smooth, and his ability to problem solve around the issues we faced on 
           the fly has enabled us to meet our deadlines for our major projects. I would highly recommend him for any full-stack 
           development role that he would be applying to.
           </small>

       </article>
     </div>
    </section>
  )
}

export default Testimonials