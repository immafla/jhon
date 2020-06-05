import React, { Component } from "react";

import { product } from "../mocks/product";
import "../style/globalStyle.css";

export default class CreateProduct extends Component {
  constructor() {
    super();
    this.getForm = this.getForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      products: product,
    };
  }
  getForm(e){
      e.preventDefault()
        console.log(e)
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
            <form onSubmit={this.getForm}>

                <div className="form-group">
                    <input type="text" className="form-control" id="nombre" aria-describedby="name" placeholder="Ingrese nombre del producto" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" id="referencia" placeholder="Referencia" />
                </div>

                <div className="form-group">
                    <input type="number" className="form-control" id="precio" placeholder="Precio" />
                </div>

                <div className="form-group">
                    <input type="number" className="form-control" id="precio" placeholder="Peso" />
                </div>

                <div className="form-group">
                    <input type="number" className="form-control" id="precio" placeholder="Categoria" />
                </div>

                <div className="form-group">
                    <input type="number" className="form-control" id="precio" placeholder="Stock" />
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>

            </form>
        </div>
    );
  }
}
