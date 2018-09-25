import React, { Component } from 'react'
import FormProportion from './FormProportion'

class Form extends Component {
  state = {
    name: "",
    description: "",
    instructions: "",
    proportionObjectsArray: [{}]
  }
  
  handleNewProportionClick = (e) => {
    e.preventDefault()
    const tempState = this.state.proportionObjectsArray.slice()
    tempState.push({})
    
    this.setState({proportionObjectsArray: tempState})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    
    this.props.addCocktail(this.state)

    this.setState({proportionObjectsArray: [{}]})  
  }
  
  handleChange = (e) => {
    const target = e.target.name
    const value = e.target.value
    
    this.setState({
      [target]: value
    })
  }
  
  handleProportionChange = (e) => {
    const target = e.target.name
    const value = e.target.value
    
    this.setState({
      [target]: value
    })
  }
  
  render(){
    return (
      <form>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

        <p>Description</p>
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>

        <p>Instructions</p>
        <input type="text" name="instructions" value={this.state.instructions} onChange={this.handleChange}/>

        <h3>Proportions</h3>
        
        {this.state.proportionObjectsArray.map(proportionObject => {
          return <FormProportion data={proportionObject} handleProportionChange={this.handleProportionChange}/>
        })}
        
        <p><button onClick={this.handleNewProportionClick}> + </button></p>

        <input type="submit" onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default Form
