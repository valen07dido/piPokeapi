import React from 'react'

const Card = (props) => {
    const {id,name,tipos,image}=props

  return (
    <div>
        <h2>{id}</h2>
        <h1>{name}</h1>
        {tipos.forEach(element => {
          <h3>{element}</h3>
        })}
        <img src={image} alt={name} />

    </div>
  )
}

export default Card