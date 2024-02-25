import './APropos.css' 
import Header       from '../../Components/Header/Header'
import InfoAPropos  from '../../Components/InfoAPropos/InfoAPropos'
import Footer       from '../../Components/Footer/Footer'
import BannerDyn   from '../../Components/BannerDyn/BannerDyn'

function APropos() {

//Components =>BannerDyn Config:
const imgs2         = 'BannerHome.svg';
const linkpublic    = '/images/Banner';//=>public
const path          = `${linkpublic}/${imgs2}`;
const BanerTxtempty = "";

return (
<>
<div className="HomeCompos1">		
  <div className="main-container-Apropos">  
    <Header/>    
    <main>	
      <section>
        <BannerDyn  BannerDynImg1={path} BannerDynTxt1={BanerTxtempty}/>      
      </section> 
      <section>            
        <InfoAPropos />
       </section>
    </main>		  
  
  </div>
    <Footer/>
</div>











</>
   )
 }
 
 export default APropos