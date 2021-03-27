import Header from "./components/Header";
import Footer from "./components/Footer";
import Personaje from "./components/Personaje";
import database from "./rickandmorty.json"





function App() {
  return (
    <body>
    <div>
    <Header/>
    <div class="contenedor">
    <div class="contenedor-cards">  
    {
       database.map(function(dato, idx) {
        return < Personaje datos={dato} key={idx}/>
      })
                }
    </div>
    </div>

    <Footer/>
     </div>
     </body>
  )};

export default App;
