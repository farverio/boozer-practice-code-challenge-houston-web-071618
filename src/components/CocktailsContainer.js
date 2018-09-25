import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {
  state = {
    cocktails: [],
    isLoading: true,
    selectedCocktail: null
  }
  
  getCocktails = () => {
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
      .then(res => res.json())
      .then(cocktails => this.setState({
        cocktails, isLoading: false, selectedCocktail: cocktails[0]
      }))
  }
  
  componentDidMount() {
    this.getCocktails()
  }
  
  addCocktail = (cocktailData) => {
    const tempCocktails = this.state.cocktails.slice()
    tempCocktails.push({
      id: 500,
      name: cocktailData.name,
      description: cocktailData.description,
      instructions: cocktailData.instructions
    })
    
    this.setState({
      ...this.state,
      cocktails: tempCocktails
    })
  }
  
  selectedCocktail = (selectedCocktail) => {
    this.setState({
      ...this.state,
      selectedCocktail: selectedCocktail
    })
  }

  render() {
    return (
      <div className="container">
        <table><tr>
        {this.state.isLoading ? <h1>Loading</h1> : <div>
          <td><CocktailsList cocktails={this.state.cocktails} selectedCocktail={this.selectedCocktail}/></td>
          <td><CocktailDisplay cocktail={this.state.selectedCocktail}/></td>
        </div>
        }
        <td><Form addCocktail={this.addCocktail}/></td>
        </tr></table>
      </div>
    )
  }
}

export default CocktailsContainer
