
import './TitreLocation.css'

function TitreLocation(props) {

const  Title = props.Title;
const  location  = props.location;


return (
<>
<div className="container-title-location">
		<div  className="title-fiche caract-18p cl_1">{Title}</div>
		<div  className="location-fiche caract-14p">{location}</div>	
</div>	 
</>  
  );
}
export default TitreLocation