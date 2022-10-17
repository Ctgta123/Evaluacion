import React from "react";
//libreria
import axios from 'axios';
import { Link } from "react-router-dom";


export class Login extends React.Component{
  


  constructor(props){
    super(props);
  }

  state={
    form:{
      email : "",
      password : ""
      
    },
    error:false,
    errorMsg:"Error,Reintente nuevamente!"
  }

  manejadorSubmit =e=>{
    e.preventDefault();
    
  }

  manejadorChange = async e=>{
    await  this.setState({
      form:{
         ...this.state.form,
         [e.target.name]:  e.target.value
      }
    })
    console.log(this.state.form);
    
  }

  manejadorBoton=()=>{
    axios({
      method: 'post',
      url: 'https://webapirestturismoreal.azurewebsites.net/api/Login',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
  }).then( response =>{
      if(response.data.status === "ok"){
        localStorage.setItem("token",response.data.result.token)
        const { Link } = this.props;
        history.push("/dashboard");
      }else{
        this.setState({
          error : true,
          errorMsg : response.data.result.error_msg
        })
      }
    }).catch( error =>{
      console.log(error);
      this.setState({
        error : true,
        errorMsg : "Error: Al conectar con la Api Rest"
      })
    })
  }
  
  
  render(){
    return(
      <React.Fragment>
             <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
              <img className="logo2"  src="src\Logo\Logo.png"/>
              </div>

              <form onSubmit={this.manejadorSubmit}>
                <input type="text"  className="fadeIn second" name="email" placeholder="Correo Electronico" onChange={this.manejadorChange}/>
                <input type="password"  className="fadeIn third" name="password" placeholder="password" onChange={this.manejadorChange}/>
                <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton}/>
              </form>
              <div id="formFooter">
                <Link to="/Registro">Registrarse</Link>
              </div>
              <div id="formFooter">
                <a className="underlineHover" href="#">Olvidaste Tu contraseña?</a>
              </div>
           {this.state.error === true &&
              <div className="alert alert-secondary" role="alert">
                {this.state.errorMsg}
              </div>
           }
            </div>
          </div>
      </React.Fragment>
      
    )
  }
}

export default Login