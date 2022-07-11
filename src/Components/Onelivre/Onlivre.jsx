import React from 'react'
import Bouton from '../Bouton/Bouton'
export default function Onlivre({id,titre,auteur,nbr,suppression}) {
  return (
    <tr>
            <th scope="row" className='text-center'>{id}</th>
            <td className='text-center'>{titre}</td>
            <td className='text-center'>{auteur}</td>
            <td className='text-center'>{nbr}</td>
            <td className='text-center d-flex justify-content-around'>
            <Bouton title="Modifier"/>
            <Bouton title="Supprimer" suppression={suppression}/>
            </td>
            </tr>
  )
}
