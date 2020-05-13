import React, {Component} from "react";
import firebase from "../Firebase/FirebaseConfig";


class UserLogin extends Component {

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
 
        const email= e.target.elements.email.value;
        const password = e.target.elements.password.value;
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res=> this.props.userCredential(res.user.email))
    }

    onSubmitRegister(e){
        e.preventDefault();
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res=> this.props.userCredential(res.user.email))
            
    }

    render(){
        return (
          <div className="margin">
            {this.state.condition && (
              <div>
                <h2>Logga in user</h2>
                <form onSubmit={this.onSubmitLogin.bind(this)}>
                  <input type="text" name="email" placeholder="email" />
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                  <button>Login</button>
                </form>
              </div>
            )}

            {!this.state.condition && (
              <div>
                <h2>Registera</h2>

                <form onSubmit={this.onSubmitRegister.bind(this)}>
                  <input type="text" name="username" placeholder="username" />
                  <input type="email" name="email" placeholder="Email" />
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                  />

                  <button>Register</button>
                </form>
              </div>
            )}

            <button onClick={this.onClickLogin.bind(this)}>Login</button>
            <button onClick={this.onClickRegister.bind(this)}>Register</button>
          </div>
        );
    }
}

export default UserLogin;







  
  