import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render(){
    const cocktailListStyle = {
        padding: "20px",
        border: "1px solid blue",
        width: "200px",
        height:"600px",
        overflow:"auto"
      }
      
    return (
      <div id="cocktail-list" style={cocktailListStyle}>
        {this.props.cocktails.map(cocktail => {
          return <Cocktail key={cocktail.id} details={cocktail} selectedCocktail={this.props.selectedCocktail}/>
        })}
      </div>
    )
  }
}

export default CocktailsList
