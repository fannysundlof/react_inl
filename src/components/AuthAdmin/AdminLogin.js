
import React, {Component} from "react";
import axios from "axios";


class AdminLogin extends Component {

    state= {
     condition: true,
     user: ""
    }

     onClickRegister(){
     this.setState({condition:false})
    }

    onClickLogin(){
    this.setState({condition:true})
    }

    onSubmitLogin(e){
    e.preventDefault();
        axios.post('http://localhost:1337/auth/local', {
        identifier: e.target.elements.username.value,
        password: e.target.elements.password.value,
        })
    .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    this.props.userCredential(response.data.user, response.data.jwt)
    })
    .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
    });
    }

 onSubmitRegister(e){
     e.preventDefault();
     axios
  .post('http://localhost:1337/auth/local/register', {
    username: e.target.elements.username.value,
    email: e.target.elements.email.value,
    password: e.target.elements.password.value,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    this.props.userCredential(response.data.user, response.data.jwt)
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
 }
    render(){
        return (
          <div className="margin">
            {this.state.condition && (
              <div>
                <h2>Logga in Admin</h2>
                <form onSubmit={this.onSubmitLogin.bind(this)} className={"form"}>
                  <input type="text" name="username" placeholder="Username" className={"input"}/>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={"input"}
                  />
                  <button>Login</button>
                </form>
                <button onClick={this.onClickRegister.bind(this)} className={"contact_btn"}>Register</button>
              </div>
            )}

            {!this.state.condition && (
              <div>
                <h2>Registera Admin</h2>

                <form onSubmit={this.onSubmitRegister.bind(this)} className={"form"}>
                  <input type="text" name="username" placeholder="Username" className={"input"}/>
                  <input type="email" name="email" placeholder="Email" className={"input"}/>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={"input"}
                  />

                  <button>Register</button>
                </form>
                <h3>Har du redan ett konto?</h3>
                <button onClick={this.onClickLogin.bind(this)} className={"contact_btn"}>Login</button>
              </div>
            )}

            
            
          </div>
        );
    }
}

export default AdminLogin;