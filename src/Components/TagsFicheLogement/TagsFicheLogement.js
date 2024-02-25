import './TagsFicheLogement.css'

function TagsFicheLogement(props) {

let tagsJs = props.tagsJs; 

return ( 
<>
<div className='container-tags'>
  {tagsJs.map((tagsJsMap2) => (

  <div className='container-tags_1' key={tagsJsMap2.toString()}>        
    <p className="container-tags_1_1-txt caract-10p cl_b">{tagsJsMap2}</p> 
  </div>    

   ))}
</div>
</>
  );
}
export default TagsFicheLogement
