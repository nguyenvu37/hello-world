import React from 'react';
import './iteamProduct.css';

class ItemProduct extends React.Component {

    render() {
        let { todo, HandlerCompare } = this.props;
        return (
            <div className="col-sm-6 col-md-3">
                <div className="product">
                    <img src={todo.image}/>
                    <div className="image_overlay"></div>
                    <div className="view_details">Compare</div>
                    <div className="stats">
                        <div className="stats-container">
                            <span className="product_name col-6 text-left">{todo.name}</span>
                            <span className="product_price col-6 text-right">{todo.price}</span>
                            <p className="col-12">
                                {todo.description}
                            </p>
                            <button 
                                className={todo.compare === true 
                                    ? "btn btn-outline-danger m-auto" 
                                    : "btn btn-outline-success m-auto"} 
                                id={todo.id} 
                                onClick={ HandlerCompare }>
                                {todo.compare===true ? "Remove" : "Compare"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemProduct;