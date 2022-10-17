import React from 'react'
import { Link } from 'react-router-dom';

export const DeptosCard = ({id,region,comuna,calle,numero,piso,estado,precio,directorio}) => {
  return (
    <>
    <div className="card col-4 cartaDepto">
            <img className="card-img-top imgCard" src={directorio} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{ region }</h5>
                <small className="card-categoria">{ comuna }</small>
                <p className="card-text">{ calle }</p>
                <span>Precio por dia: { precio }</span>
            </div>
            <div className="card-footer">
                <Link to="/DeptoPage">Reservar</Link>
            </div>
        </div>
    </>
  )
}
