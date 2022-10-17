import React from "react";
import { FaFacebookMessenger,FaTwitter,FaWhatsapp,FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-100 py-4 flex-shrink-0 footer">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-white">Turismo Real</h5>
                    <div className="letra2">
                        <p className="letra2">Porque nos importa que puedas usar tu tiempo como realmente quieres, siempre podrás contar con nosotros. Tenemos equipos trabajando en cada uno de nuestros edificios para solucionar cualquier requerimiento que tengas.</p>
                        <p className="letra2">&copy; Copyrights. Todos los derechos reservados.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="nececita">
                    <h5 className="h1 text-white">¿Necesitas Algo? ¡Sólo avísanos!</h5>

                    <h6 className="letra2">Queremos que tu única preocupación sea disfrutar tu nuevo hogar.</h6>
                    <h6 className="letra2">  Siguenos en nuestras redes sociales:</h6>
                </div>

                <div className="redes">
                <FaFacebookMessenger className='face'  />
                <FaTwitter className='twit'  />
                <FaWhatsapp className='whas'  />
                <FaInstagram className='inst'  />
                </div>
                </div>
            </div>
            
        </div>
    </footer>
  )
}
