
import './FicheLogement.css' 

import TagsFicheLogement    from '../../Components/TagsFicheLogement/TagsFicheLogement'
import SliderHome           from '../../Components/SliderHome/SliderHome'
import Description          from '../../Components/Description/Description'
import Equipements          from '../../Components/Equipements/Equipements'
import Rating               from '../../Components/Rating/Rating'
import Header               from '../../Components/Header/Header'
import Footer               from '../../Components/Footer/Footer'
import Profils              from '../../Components/Profils/Profils'
import TitreLocation        from '../../Components/TitreLocation/TitreLocation'            

//Components>>
import { useParams }        from 'react-router-dom'
import data                 from '../../ServeurDb/logements.json'

//Procces>>
//Récup clé (id) Url:=>Get
//Controle si la clé existe in  bd json=>true flase=>Redirection page home
//Filtré      =>  logements.json 
//Convert Object in Tab[]
//Clone       => New tab[] => via map() 
//Extraction  =>value
//récup  en JSX 

function FicheLogement() {

const {AdminId}   = useParams();//récup=> Id

//Filtre le data all:
let datafiltre    =  data.find(parm => parm.id === AdminId);//return=> Objet{}  =>filtre

//flase=> id in data:
if( datafiltre === undefined){	
window.location.href = "http://localhost:3000/erreur";//redirect =>erreur page !
}

let dataTab       =  Object.entries(datafiltre);//format =>Tab  
let dataNew       =  dataTab.map((dataNewMap) => (dataNewMap));//clone Tab[]

//Extration-All Clé tab[]=>json:
let Title          =  dataNew[1][1];
let location       =  dataNew[7][1];
let tagsJs         =  dataNew[9][1];
let nomName        =  dataNew[5][1]["name"]; 
let photoName      =  dataNew[5][1]["picture"];
let ratingChaine   =  dataNew[6][1]; 
let rating         =  parseInt(ratingChaine);
let description    =  dataNew[4][1]; 
let equipements    =  dataNew[8][1];
let pictures       =  dataNew[3][1]; 
let imgAlt         = "/images/atl/imgErreur.jpg";  

//props sont en lecture seule=>props
return (   
<>
<div className="Page-fichelogements"> 
		<div className="main-container-fichelogements">     
   				<Header/>  
 	 		<main>		
				<SliderHome datapictures ={pictures}/>
    			<div className='Mobile-fichelogements'>
					<TitreLocation   Title={Title} location={location}/>
					<TagsFicheLogement  tagsJs={tagsJs}/>
					<div className='container-rating-profile'>
						<div className='rating-profile-left'>
							<Rating  rating={rating}/>
						</div>		
						<div className='rating-profile-Right'>
							<Profils    nomName={nomName} photoName={photoName} imgAlt={imgAlt}/>
						</div>
					</div>	
    				<Description  description={description}/>
					<Equipements  equipements={equipements}/>
				</div>
				<div className='Desktop-fichelogements'>
					<div className='ficheinfo'>
           				<div className='ficheinfo-left'>		   		
		        			 <TitreLocation   Title={Title} location={location}/>
							 <TagsFicheLogement  tagsJs={tagsJs}/>	
		  		 		</div>
		  			 	<div className='ficheinfo-right'>		   					   
		   					<Profils    nomName={nomName} photoName={photoName} imgAlt={imgAlt}/>
				 			<div className='container-rating'>
				 				<Rating  rating={rating}/>
				 			</div>	
		   				</div>
	 				</div>
     				<div className='container-decription'>
     					<div className='container-decription-left'>
							<Description  description={description}/>
						</div>
	  					<div className='container-decription-right'>
							<Equipements  equipements={equipements}/>
						</div>
		  		 	</div> 
				</div>
			</main>	
		</div>
    <Footer/>
</div>
</>
  );
}
export default FicheLogement


