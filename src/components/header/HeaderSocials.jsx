import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/andrewy2416/" target="_black"><AiOutlineLinkedin/></a>
        <a href="https://github.com/Andrewy2416" target="_black"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials