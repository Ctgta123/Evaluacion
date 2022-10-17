import Carousel from 'react-bootstrap/Carousel';
import { FaShower, FaWifi, FaTv, FaUtensils, FaTemperatureHigh, FaWheelchair } from "react-icons/fa";


export const DeptoPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3" style={{ background: "#f1f1f1" }}>
          <h3>Arriendo</h3>
          <h3>9999</h3>
          <h6>por noche</h6>
          <hr />
          <form action="reserva" id="reserva">
            <label>
              <i>Check In</i>
            </label>
            <br />
            <input
              type="date"
              placeholder="DD MM YYYY"
              name="checkin"
              id="checkin"
            />
            <br />
            <label>
              <i>Check Out</i>
            </label>
            <br />
            <input
              type="date"
              placeholder="DD MM YYYY"
              name="checkout"
              id="checkout"
            />
            <br />
            <label>
              <i>Acompañantes</i>
            </label>
            <br />
            <input
              type="number"
              placeholder="1"
              name="acompañantes"
              id="acompañantes"
            />
            <br />

            <button className="btn btn-success btnReserva" type="submit">
              <i>Reservar</i>
            </button>
          </form>
        </div>
        <div className="col-9">
          <h2>DEPARTAMENTO 1</h2>
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../src/TurismoApp/data/img/depto.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../src/TurismoApp/data/img/depto.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../src/TurismoApp/data/img/depto.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <br />
    <h4>Descripcion</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora autem nulla perspiciatis dolorum id 
      voluptatem magnam cumque ab at eveniet accusantium animi veritatis, pariatur, vel asperiores dicta, dolor labore officiis!</p>
    <h6>Metodos de pago: TransBank</h6>
      <hr />
    <div className="row">
    <h4>Comodidades</h4>
    <div className="col-6">
      <p>
        <FaShower/>
         <label className='txtComodidades'>Ducha</label>
      </p>
      <p>
        <FaWifi/>
        <label className='txtComodidades'>WiFi</label>
      </p>
      <p>
        <FaTv/>
        <label className='txtComodidades'>TV</label>
      </p>
    </div>
    <div className="col-6" >
    <p>
        <FaUtensils/>
        <label className='txtComodidades'>Cocina</label>
      </p>
      <p>
        <FaTemperatureHigh/>
        <label className='txtComodidades'>Calefaccion</label> 
      </p>
      <p>
        <FaWheelchair/>
        <label className='txtComodidades'>Accesible</label>
      </p>
    </div>
    </div>
        </div>
      </div>
    </div>
  );
};
