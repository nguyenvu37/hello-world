import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increase, descrease } from '../actions/todos';

class ItemMenu extends Component {
    constructor () {
        super();
        this.state = {
            quantity: 0
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        if (state.quantity !== props.todo.quantity) {
          return {
            quantity: props.todo.quantity
          }
        }
        return null;
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let styleItem = {
            width: '480px'
        };
        let { todo, handlerIncrease, handlerDescrease } = this.props;
        return (
            <div style={ styleItem } className="p-3 border border-secondary mt-1">
                <div className="row">
                    <div className="col-4">
                        <p className="text-left text-success">{ todo.name }</p>
                        <p className="text-left text-info">{ todo.price }$</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-6">
                        <div className="form-inline">
                            <button 
                                className="btn btn-danger"
                                onClick={ () => handlerDescrease(todo.id) }
                                id={ todo.id }
                            >-</button>
                            <input 
                                type="number"
                                className="form-control-inline p-1 col-4 text-info"
                                name="quantity"
                                id={ todo.id }
                                value={ this.state.quantity }
                                onChange={ this.onChange }
                            ></input>
                            <button 
                                className="btn btn-success"
                                onClick={ () => handlerIncrease(todo.id) }
                                id={ todo.id }
                            >+</button>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerIncrease: (id)=>dispatch(increase(id)),
        handlerDescrease: (id)=>dispatch(descrease(id))
    }
}


export default connect(null, mapDispatchToProps)(ItemMenu);