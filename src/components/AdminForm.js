import React, {Component} from 'react';
import axios from 'axios';

//Skapa produkt till CMS
class AdminForm extends Component {

      state={
         image: " "
    }

    eventChange(e) {
        this.setState({ image: e.target.files[0] });
    
        }

    async onSubmitToApi(e){
        e.preventDefault();

         /* --- Lägga till post (utan bild) --- */
        this.setState({title: e.target.elements.title1.value})

       const res = await axios.post("http://localhost:1337/products", {
            title: e.target.elements.title1.value , 
            description: e.target.elements.description1.value,
            price: e.target.elements.price1.value,
        });
    
        console.log(res)

         /* --- Ladda upp bild och referera till post --- */
        const data = new FormData();
        data.append("files", this.state.image);
        data.append("ref", "product"); // Refererar till table
        data.append("refId", res.data.id); // Hämtat post-id från vår post vi skapade.
        data.append("field", "image"); // Refererar till column i vår table

        const resPic = await axios.post("http://localhost:1337/upload", data);
        console.log(resPic);
  }

  

    render() {
        return (

            <div>

                <form onSubmit={this.onSubmitToApi.bind(this)} className={"form"}>
                <h4 className={"title"}>Lägg till produkt</h4>
                <input type="text" name="title1" placeholder="Name" className={"input"} />
                <input type="text" name="description1" placeholder="Description" className={"input"}  />
                <input type="number" name="price1" placeholder="Price" className={"input"} />
                <input
                  type="file"
                  name="file"
                  onChange={this.eventChange.bind(this)}
                  className={"input"} 
                />
                     <button>Spara</button>
                 </form>

                 

            </div>

        ) 

    }


}

export default AdminForm;