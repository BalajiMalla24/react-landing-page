import React from 'react'
import { card } from '../assets' 
import styles , {layout } from '../style'
import Button from './Button'

const CardDeal = () => {
    return (
     <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Find a better card deal <br className='sm:block hidden' />
              in few easy steps.
            </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat dolore reiciendis fugit accusantium? Doloremque qui nihil sequi, dolor praesentium ipsam inventore impedit aperiam harum excepturi a, maiores et ut reprehenderit!
                Cupiditate facere voluptatem veniam mollitia inventore praesentium iure perferendis? Aspernatur aliquid dolore, id aperiam mollitia magni facilis quasi iusto, saepe rerum maiores maxime. Nisi cumque alias, inventore saepe eius at?
            </p>
            <Button styles="mt-10"/>
        </div>
    <div className='w-[50%] h-[50%]'>
        <img src={card} alt="card" 
        className='w-[100%] h-[100%]'/>
    </div>
     </section>
    )
}

export default CardDeal
