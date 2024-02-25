
import './Profils.css'

function Profils(props) {

const photoName  = props.photoName;
const nomName    = props.nomName;
const imgAlt     = props.imgAlt;

return (
<>
<div className="profils">				
	<p className="nom-profil caract-12p cl_1">{nomName}</p> 
	<div className="container-photo-profil"><img  className="photo-profil" src={photoName}  alt={imgAlt} /> </div> 			
</div>  
</>  
  );
}
export default Profils