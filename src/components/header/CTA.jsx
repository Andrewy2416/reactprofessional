import React from 'react'
import Resume from '../../assets/AndrewYunResume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn'>Contact Me</a>
    </div>
  )
}

export default CTA