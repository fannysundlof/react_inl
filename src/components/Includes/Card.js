import React, { Component } from "react";

import firebase from "../Firebase/FirebaseConfig";

class Card extends Component  {

    state = {
        user: "" || localStorage.getItem("user"),
        displayName: ""
     }


onClickSave() {

    const db = firebase.firestore();
    const docRef = db.collection("booking")
    .doc(firebase.auth().currentUser.uid.toString())
    
    docRef.set({
        id: this.props.id,
        name: this.props.title,
        description: this.props.description,
        price: this.props.price

    })

    alert("Tillagd i bokingar")
}

componentDidMount(){
    firebase.auth()
    .onAuthStateChanged(

        user=>{ if(user) { this.setState({

        user: user.email, 
        displayName: user.displayName
        
        })} else {

        this.setState({user: localStorage.getItem("user")})
        } 

        }
        
    )
}


render () {

    const loggedIn = this.state.user || localStorage.getItem("user");

    return (
    

        <div className={"products__cards"}>
            <div className={"product__card"}>
            
                <img
                className={"product__card-img"}
                src={this.props.image}
                alt={"bild"}
                />
                <h2 className={"product__card-name"}>{this.props.title}</h2>
                <div className={"product__card-desc"}>
                    <p className={"product__card-text"}>{this.props.description}</p>
                </div>
          <p className={"product__card-price"}>{this.props.price}</p>

          {!loggedIn ? 

          (<p>Logga in för att boka</p>)

          : 

          (<button className={"product__card-btn"} onClick={this.onClickSave.bind(this)}>Boka</button>)
          }
        </div>
        </div>
        
        
    )
    }
}

export default Card;