import React from 'react'

export default function Bouton({title,ajout,suppression}) {
    switch (title) {
        case "Ajouter":
            return <button className='btn btn-success rounded w-100 text-center' onClick={ajout}> {title} </button>
        break;
        case "Fermer ajout":
            return <button className='btn btn-success rounded w-100 text-center' onClick={ajout}> {title} </button>
        break;
        case "Modifier":
            return <button className='btn btn-warning rounded' onClick={ajout}> Modifier </button>
        break;
        case "Supprimer":
            return <button className='btn btn-danger rounded' onClick={suppression} > Supprimer </button>
        break;
        default:
            break;
    }
  return (
    <></>
  )
}
