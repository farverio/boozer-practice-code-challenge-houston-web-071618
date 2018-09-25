import React from 'react'

const Cocktail = (props) => {
  
  const handleClick = (e) => {
    props.selectedCocktail(props.details)
  }
  
  return (
    <li><a href="javascript:void(0)" onClick={handleClick}>{props.details.name}</a></li>
  )
}

export default Cocktail
