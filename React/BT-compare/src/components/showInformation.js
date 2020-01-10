import React, { Component } from 'react';
import './showInformation.css';

class ShowInformation extends Component {

    render() {
        let { products } = this.props;
        let name = products.map((product) =>{
            return <th key={product.id} className="h5">{ product.name }</th>
        });
        let price = products.map((product) =>{
            return <td key={product.id} className="h5">{ product.price }</td>
        });
        let colors = products.map((product) =>{
            return <td key={product.id}>
                {product.color.map((item, index) =>
                <span key={index} className={item} />
                )}
            </td>
        })
        let condition = products.map((product) =>{
            return <td key={product.id} className={product.condition === "Frozen" ? "bg-danger" : "bg-success"}>
                    { product.condition }
                    </td>
        });
        
        return (
            <div className="row compare">
                <div className="col-12 mt-3 text-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                {name}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="price">
                                <th scope="row" className="h4 text-left ml-5">Price</th>
                                {price}
                            </tr>
                            <tr className="colors">
                                <th scope="row" className="h4 text-left ml-5">Colors</th>
                                {colors}
                            </tr>
                            <tr className="condition">
                                <th scope="row" className="h4 text-left ml-5">Condition</th>
                                {condition}
                            </tr>
                        </tbody> 
                    </table>
                </div>
            </div>
        );
    }
}

export default ShowInformation;