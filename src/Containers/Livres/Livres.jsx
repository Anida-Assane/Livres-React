import React from 'react'
//import Bouton from '../../Components/Bouton/Bouton'
import Onlivre from '../../Components/Onelivre/Onlivre'
export default function Livres() {
    const [meslivres,setMeslivres]=React.useState([
        {
            id:1,
            Titre:"titre1",
            Auteur:"Auteur1",
            Nombredepages:"X pages",
        },
        {
            id:2,
            Titre:"titre2",
            Auteur:"Auteur2",
            Nombredepages:"X pages",
        }
        ,
        {
            id:3,
            Titre:"titre3",
            Auteur:"Auteur3",
            Nombredepages:"X pages",
        } ,
        {
            id:4,
            Titre:"titre34",
            Auteur:"Auteur4",
            Nombredepages:"X pages",
        }
    ])
    function handleSuppression(id){
      const findindex=meslivres.findIndex(livre=>{
       return livre.id===id;
      })
      const newlivre=[...meslivres];
      newlivre.splice(findindex,1)
      console.log(newlivre);
      setMeslivres(newlivre)
    }
  return (
      <div className='container'>
        <table className="table">
          <thead>
            <tr>
        <th scope="col" className='text-center'>id</th>
        <th scope="col" className='text-center'>Titre</th>
        <th scope="col" className='text-center'>Auteur</th>
        <th scope="col" className='text-center'>Nombre de pages</th>
        <th scope="col-2" className='text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
      {
        meslivres.map(livre=>(
            <Onlivre 
            id={livre.id} 
            key={livre.id}
            titre={livre.Titre} 
            auteur={livre.Auteur} 
            nbr={livre.Nombredepages}
            suppression={()=>handleSuppression(livre.id)}
            />
          ))
      }
     
          </tbody>
        </table>
      </div>
)
}