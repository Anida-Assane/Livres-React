import React from 'react'
import classes from "./Titre.module.css"
export default function TitreComponent(props) {
  const h1css=`${classes.policeTitre} bg-primary text-center text-white py-2 mt-2 rounded`
  document.title="Liste des livres"
  return (
    <div>
    <h1 className={h1css}>{props.title}</h1>
    </div>
  )
}
