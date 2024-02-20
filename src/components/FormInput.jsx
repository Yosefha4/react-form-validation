import React from 'react'
import "./formInput.css"

const FormInput = (props) => {

const errorState = props.errFlag ? "errorShow" : "errorHide";

console.log("errorState : " , errorState)
  return (
    
    
    <div className='formInput'>
        <span>{props.label}</span>
        <input minLength={2} type={props.type} name={props.name} placeholder={props.placeholder} onChange={e => props.changeFunc(e.target.value)} required />
      <span style={{textAlign:'center'}} className={errorState}>{props.errorMessage}</span>
    </div>
    
  )
}

export default FormInput