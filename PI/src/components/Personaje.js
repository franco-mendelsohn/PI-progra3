

function Personaje(props) {
    return (  
          <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <img src={""+props.datos.image+""} alt=""/>
            <div class="contenedor-info">
                  <div class="info">
                    <p class="titulo">{props.datos.name}</p>
                    <span class="categoria">{props.datos.status} - {props.datos.species}</span>
                    
                    <span class="categoria">Origin: {props.datos.origin.name}</span>
                  </div>
                  <div class="fondo"></div>
            </div>
          </div>
        </div>

    )};
export default Personaje;