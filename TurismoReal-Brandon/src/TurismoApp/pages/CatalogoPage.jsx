import { useState, useEffect } from "react";
import axios from "axios";
import { DeptosCard } from "../components/DeptosCard";
import { HiSearch } from "react-icons/hi";



export const CatalogoPage = () => {

  const [data, setData] = useState([]);
  const [tablaDeptos, setTablaDeptos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const baseUrl="https://webapirestturismoreal.azurewebsites.net/api/Catalogo"


  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
        setData(response.data);
        setTablaDeptos(response.data);
    }).catch(error=>{
        console.log(error);
    })
}

const handleChange=e=>{

  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const replaceSpecialChars = (str) => {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaDeptos.filter((elemento)=>{
    if(replaceSpecialChars(elemento.region.toString().toLowerCase()).includes(replaceSpecialChars(terminoBusqueda.toLowerCase()))
    ){
      return elemento;
    }
  });
  setData(resultadosBusqueda);
}

useEffect(()=>{
  peticionGet();
},[])

  return (
    <>
       <div className="container">
         <div className="row catalogo">
           <div className="col-12 titulo">
             <h1>Catalogo departamentos</h1>
           </div>
           <div className="col-3 filtro">
             <div className="filtro1"><h5>Buscador por Region</h5></div>
        
                <div className="containerInput">
                  <input className="container-1" value={busqueda} placeholder="Escriba una region de chile"  onChange={handleChange}/>
                </div>
           </div>
           <div className="col-9">
           <span className="icon"><i className="fa fa-search"></i></span><font></font>
             <div className="row rows-cols-1 row-cols-md-3 g-3 contenedorCard">
               {data.map((deptos) => (
                 <DeptosCard key={deptos.id} {...deptos}>Filtrar</DeptosCard>
               ))}
             </div>
           </div>
         </div>
       </div>
     </>
    )
  };