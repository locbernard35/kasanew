import './Home.css' 

import Header       from '../../Components/Header/Header'
import BannerDyn    from '../../Components/BannerDyn/BannerDyn'
import CartsHome    from '../../Components/CartsHome/CartsHome'
import Footer       from '../../Components/Footer/Footer'

function Home() {  

//Components=>BannerDyn Config:
const imgs2         = 'BannerApropos.svg';
const linkpublic    = '/images/Banner';//publ
const path          = `${linkpublic}/${imgs2}`;
const BanerTxtempty = "Chez vous, partout et ailleurs";

//Jsx 
return (  
<div className="Home">		
  <div className="main-container-home"> 
    <Header/>  
    <main>
      <section>
          <BannerDyn  BannerDynImg1={path} BannerDynTxt1={BanerTxtempty}/>   
      </section>
      <section>
          <CartsHome/>  
      </section>
    </main>	           
  </div>
    <Footer/>
</div>
  );
}
export default Home