import './InfoAPropos.css'
import InfoAProposChildren from '../../Components/InfoAProposChildren/InfoAProposChildren'

function InfoAPropos() { 

 //data type tab[]
 //appele> Components => InfoAProposChildren props => recup data
 const titresInfoAPropos = ['Fiabilité','Respect','Service','Sécurité'];
 const ContentInfoAPropos= ['les annonces postées sur Kasa garantissent une Fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont réguliérement vérifiées par nos équipes.','La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportemen discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plaforme.','La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportemen discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plaforme.','La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'];

//jsx
return (
  <>
     <div className="InfoAPropos-G"> 

     <InfoAProposChildren  titresInfoAPropos={titresInfoAPropos[0]}  ContentInfoAPropos={ContentInfoAPropos[0]}/>
     <InfoAProposChildren  titresInfoAPropos={titresInfoAPropos[1]}  ContentInfoAPropos={ContentInfoAPropos[1]}/>
     <InfoAProposChildren  titresInfoAPropos={titresInfoAPropos[2]}  ContentInfoAPropos={ContentInfoAPropos[2]}/>
     <InfoAProposChildren  titresInfoAPropos={titresInfoAPropos[3]}  ContentInfoAPropos={ContentInfoAPropos[3]}/> 

     </div>

 </>
  );
}
export default InfoAPropos