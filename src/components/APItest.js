import React, {Component} from 'react';
import axios from 'axios';

class Apitest extends Component {
     
    state= {dataFromApi:""}


onClickApi() {
    axios
    .get("http://localhost:1337/products")
    .then( (res)=>{
        console.log(res);

        this.setState({dataFromApi_title: res.data[0].title})
    })
}

    render(){
        return(
            <div>
            <button onClick={this.onClickApi.bind(this)}>Hämta</button>
                {this.state.dataFromApi_title}
            </div>
        )
    }


}

export default Apitest;