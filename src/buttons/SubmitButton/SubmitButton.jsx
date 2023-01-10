import React from 'react'
import "./SubmitButton.css"
import ButtonVector from "../../assets/ButtonVector.svg"
const SubmitButton = () => {
  return (
    <>
        <button className="text">Start New Project
        <img className='button_vector' alt=''  src={ButtonVector} ></img>
        </button>
        <div className="text">
          Start New Project
        <img className='button_vector' alt=''  src={ButtonVector} ></img>
        </div>
    </>
  )
}

export default SubmitButton
