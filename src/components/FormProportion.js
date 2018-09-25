import React from 'react'

const FormProportion = (props) => {
  return (
    <div className="container">
    <p>Ingredient Name<br/>
    <input type="text" onChange={props.handleProportionChange} placeholder={props.data.ingredient}/>
    </p>
    
    <p>Quantity<br/>
    <input type="text" onChange={props.handleProportionChange} placeholder={props.data.quantity}/>
    </p>
    </div>
  )
}

export default FormProportion
