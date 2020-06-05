import React, { Component } from "react";

import { product } from "../mocks/product";
import "../style/globalStyle.css";

export default class ListProduct extends Component {
  constructor() {
    super();
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      products: product,
    };
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
      <div className="col-12">
        <div className="my-2 title-section">Listado de productos</div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Referencia</th>
              <th scope="col">Precio</th>
              <th scope="col">Peso</th>
              <th scope="col">Categoria</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.ref}</td>
                <td>{product.price}</td>
                <td>{product.peso}</td>
                <td>{product.category}</td>
                <td>
                  <div className="d-flex">
                    <img
                      name={product.id}
                      onClick={this.handleEdit}
                      height="20px"
                      className="mx-1"
                      src="https://image.flaticon.com/icons/svg/1159/1159633.svg"
                    />
                    <img
                      onClick={this.handleDelete}
                      height="20px"
                      src="https://image.flaticon.com/icons/png/512/61/61848.png"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
