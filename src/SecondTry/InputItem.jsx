import React from 'react'

const InputItem = (props) => {

    const styleStateFlag = props.errFlag ? 'success' : 'failed';
  return (
    <div className={`input-item ` + styleStateFlag}>
        <label>{props.label}</label>
        <input name={props.name} type={props.inpuType} placeholder={props.placeholder} minLength={2} onChange={e => props.changeFunc(e.target.value)}  />
        <span>{props.errorMsg}</span>
    </div>
  )
}

export default InputItem