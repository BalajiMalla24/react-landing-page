import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedbackcard from './FeedbackCard'
const Testimonials = () => {
    return (
       <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

       <div className='z-[0] absolute w-[70%] h-[70%] rounded-full blue__gradient -right-[50%]'/>

       <div className='w-full flex justify-between md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] items-center'>
          <h1 className={styles.heading2}>What people are
            <br className='sm:block hidden'/>saying about us
        </h1>
         <div className='w-full md:mt-0 mt-6 '>
           <p className={`${styles.paragraph}
           max-w-[450px]`}>
            Everything yoou need to accept card payments and 
            grow your business anywhere on the planet.

           </p>
         </div>
       </div>
       <div className='flex flex-wrap sm:justify-start justify-center
       w-full feedback-container relative z-[1]'>
         {feedback.map(( card)=>(
            <Feedbackcard key={card.id} {...card}/>
         ))}
       </div>
       </section>
    )
}

export default Testimonials
