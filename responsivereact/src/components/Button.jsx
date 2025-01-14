import React from 'react'

const Button = ({styles}) => {
    return (
       <button type='button'
       className={`bg-blue-gradient py-4 px-6 rounded-lg 
       font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
        Get started
       </button>
    )
}

export default Button
