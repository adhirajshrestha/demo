import React from 'react'
import './Left.css'

const Left = () => {
  return (
   <div className='wholeee'>
    <div className='whole'>
      <div className='wholetoo'>
      <h1 className='richard'>Hi! I am <br/>Richard Brian</h1>
      <p className='designing'>Designing user interfaces for 7 years <br/>as a product designer</p>

      <div className='hireee'>
         <button className="hire-me">Hire me</button>
         <div className='main-project'>
          <button className="projects">Projects</button>
         </div>
      </div>

      <div>
        <p className='clientnum'><b>+84</b></p>
        <p className='clients'>Clients on work <br/>worldwide</p>
      </div>
      
      <div className='project'>
        <div>
        <p className='num'>572</p>
        <p className='projects'> Projects Done</p>
        </div>

        <div className='contacts'>
          <p className='contact'>Contact</p>
          <p className='mail'>Heloo@richardbrian.com</p>
        </div>
      </div>

     

      </div>
    </div>
    <div className='mainbottom'>
        <div className='maintoo'>
            <div className='statistics'> Project <br/>Statistics 2022</div>
        
            <div className='know'>
               <button className='more'>Know More</button>
            </div>
        </div>
        <div className='work'>
           <p className='website'>Website Design 75</p><br/>
           <p className='mobile'>Mobile App Design 64</p><br/>
           <p className='brand'>Brand Identity 75</p>
        </div>
      </div>
    </div>   
  )
}

export default Left;
