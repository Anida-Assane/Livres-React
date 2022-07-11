import React from 'react'
import FormAjout from './Containers/FormAjout/FormAjout'
import Bouton from './Components/Bouton/Bouton'
import TitreComponent from './Components/Titre/TitreComponent'
import Livres from './Containers/Livres/Livres'
export default function App() {
  const[etatajout,setEtatajout]=React.useState(false)
  function ajout() {
    setEtatajout(!etatajout)
  }
  let titre=""
  if (etatajout==false) {
     titre="Ajouter"
  }else{
     titre ="Fermer ajout"
  }
  return ( 
    <div className="container">
      <TitreComponent title="Page listant les livres"/>
      <Livres/>
      {etatajout==true && <FormAjout/>}
      <Bouton title={titre} ajout={ajout}/>
    </div>
  )
}
