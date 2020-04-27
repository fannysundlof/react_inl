import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props)
    

    this.state = {
        name: undefined,
        appointmentTime: undefined,
        mobile: undefined
    }

    }

    handleNameOnChange=(e) =>{
        this.setState({name: e.target.value}) 
    }

    handleTimeOnChange=(e) =>{
        this.setState({appointmentTime: e.target.value}) 
    }
    handleMobileOnChange=(e) =>{
        this.setState({mobile: e.target.value}) 
    }

    handleOnSubmit(e) {
        e.preventDefault()

    }

   render() {
       return(
           <div>
           <form onSubmit={this.handleOnSubmit} className={"form"}>
                <input type={"text"} className={"input"} placeholder={"Namn"} onChange={this.handleNameOnChange}></input>
                <input type={"text"} className={"input"} placeholder={"Tid"} onChange={this.handleTimeOnChange}></input>
                <input type={"number"} className={"input"} placeholder={"Tel"} onChange={this.handleMobileOnChange}></input>
                <button type={"submit"} onSubmit={this.handleOnSubmit}>Boka</button>
            </form>
            <div> {this.state.name} </div>
            <div> {this.state.appointmentTime} </div>
            <div> {this.state.mobile} </div>
           </div>
       )
   }

}

export default Form;