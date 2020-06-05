import React, { Component } from "react";
import { product } from "../mocks/product";
import axios from 'axios';
import "../style/globalStyle.css";

export default class ListProduct extends Component {
  constructor() {
    super();
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      //products: [{}],
      products: product,
    };
  }

  handleEdit(e,p) {
    console.log(e.currentTarget.name)
    console.log(p)
    // aqui edit
  }
  handleDelete() {
    // aqui delete
  }

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log('de axios',res.data)
        //this.setState({ products: res.detalle });
      })
  }

  render() {
    return (
      <div className="col-12">
        <div className="my-2 title-section">Listado de productos</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Referencia</th>
              <th scope="col">Precio</th>
              <th scope="col">Peso</th>
              <th scope="col">Categoria</th>
              <th scope="col">Stock</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.nombreProducto}</td>
                <td>{product.referencia}</td>
                <td>{product.precio}</td>
                <td>{product.peso}</td>
                <td>{product.categoria}</td>
                <td>{product.stock}</td>
                <td>
                  <div className="d-flex">
                    <img
                      name={product.id}
                      onClick={(event) => this.handleEdit(event, product)}
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