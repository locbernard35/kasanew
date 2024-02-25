
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  Home                                      from './Pages/Home/Home'
import  Erreur                                    from './Pages/Erreur_404/Erreur'
import  APropos                                   from './Pages/A_Propos/APropos'
import  FicheLogement                             from './Pages/FicheLogement/FicheLogement'

function App() {
return (  
<>     

<Router>
    <Routes>
      <Route path="/"                                    element={<Home/>} />
      <Route path="*"                                    element={<Erreur/>}/>
      <Route path="/erreur"                              element={<Erreur/>}/>
      <Route path="/a_propos"                            element={<APropos/>}/>          
      <Route path="/FicheLogement/:AdminId"              element={<FicheLogement />} />
  </Routes>
</Router>

</>
  );
}
export default App;
