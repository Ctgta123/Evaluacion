export const Registro = () => {
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="style.css" />
        <title>Formulario Registro</title>
        <section className="form-register">
          <h4>Formulario Registro</h4>
          <input className="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre" />
          <input className="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido" />
          <input className="controls" type="text" name="correo" id="correo" placeholder="Ingrese su Correo" />
          <input className="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña" />
          <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
          <input className="botons" type="submit" defaultValue="Registrar" />
          <p><a href="#">¿Ya tengo Cuenta?</a></p>
        </section>
      </div>
     </>
    )
  };
