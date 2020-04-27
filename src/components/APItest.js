import React, {Component} from 'react';
import axios from 'axios';
import APIcard from './APIcard';



class APItest extends Component{


    state={
        products: []
  }

    onClickApi(){
     axios.get("http://localhost:1337/products").then( res=>{
        console.log(res.data);
        this.setState ( {products:res.data})
    })
    //this.state.products
}
      
    
    render() {
    return(
          <div className={"APItest"}>
            
          {this.state.products.map((product) => 
            <APIcard 
            key={product.id}
            title={product.Title} 
            price={product.Price}
            description= {product.Description}
            image={"http://localhost:1337"+product.Media.url}
            />
      )} 
                <button onClick={this.onClickApi.bind(this)}>Hämta</button>

          </div>

    )
      }
}
export default APItest; 