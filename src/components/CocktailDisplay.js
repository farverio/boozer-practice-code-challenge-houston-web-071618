import React from 'react'

const CocktailDisplay = (props) => {
  return (
    <div id="cocktail-display">
      <h1>{props.cocktail.name}</h1>
      <h3>{props.cocktail.description}</h3>
      <p>{props.cocktail.instructions}</p>
    </div>
  )
}

export default CocktailDisplay
