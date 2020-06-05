import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { product } from "../mocks/product";
import "../style/globalStyle.css";

export default class EditProduct extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.getForm = this.getForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      products: product,
    };
  }
  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
        [name]: value
    });
  }
  getForm(e){
    e.preventDefault()
    if(!this.state.nombreProducto){
      alert("Nombre de producto es obligatorio");
      return false
    }
    if(!this.state.referencia){
      alert("Referencia de producto es obligatorio");
      return false
    }
    if(!this.state.precio){
      alert("Precio de producto es obligatorio");
      return false
    }
    if(!this.state.peso){
      alert("Peso de producto es obligatorio");
      return false
    }
    if(!this.state.categoria){
      alert("Categoria de producto es obligatorio");
      return false
    }
    if(!this.state.stock){
      alert("Stock de producto es obligatorio");
      return false
    }

    let data = {
      nombreProducto : this.state.nombreProducto,
      referencia : this.state.referencia,
      precio : this.state.precio,
      peso : this.state.peso,
      categoria : this.state.categoria,
      stock : this.state.stock
    }
    console.log(data)

    fetch('http://localhost/curso-laravel/inventario_producto/public/registro', {
      method: 'POST',  
      body: JSON.stringify(data),  
      headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
  }
    
  handleEdit(e) {
    console.log(e.currentTarget.name)
    // aqui edit
  }
  handleDelete() {
    // aqui delete
  }

  render() {
    return (
        <div className="container mt-4">
          <div className="row mb-4">
            <Link to="/"><button className="btn btn-primary">Atras </button></Link>
          </div>
          <div className="row">
            <div className="card" style={{width: "100%"}}>
              <div className="card-header">
                Editar producto
            </div>
              <form onSubmit={this.getForm} className="container mt-4">
                <div className="row form-group">
                  <div className="col-md-4 col-sm-4 col-xs-12 data-required">
                    <input type="text" required="true" className="form-control" name="nombreProducto" aria-describedby="name" placeholder="Ingrese nombre del producto" onChange={this.handleChange} />
                  </div>

                  <div className="col-md-4 col-sm-4 col-xs-12 data-required">
                    <input type="text" className="form-control" name="referencia" placeholder="Referencia" onChange={this.handleChange} />
                  </div>

                  <div className="col-md-4 col-sm-4 col-xs-12 data-required">
                    <input type="number" className="form-control" name="precio" placeholder="Precio" onChange={this.handleChange}/>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-4 col-sm-4 col-xs-12 data-required">
                    <input type="number" className="form-control" name="peso" placeholder="Peso" onChange={this.handleChange}/>
                  </div>

                  <div className="col-md-4 col-sm-4 col-xs-12 data-required">
                    <input type="number" className="form-control" name="categoria" placeholder="Categoria" onChange={this.handleChange}/>
                  </div>

                  <div className="col-md-4 col-sm-4 col-xs-12 data-required">
                    <input type="number" className="form-control" name="stock" placeholder="Stock" onChange={this.handleChange} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mb-4">Guardar</button>
              </form>
            </div>
          </div>
        </div>

    );
  }
}
