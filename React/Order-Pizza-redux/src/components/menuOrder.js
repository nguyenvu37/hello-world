import React, { Component } from 'react';
import ItemMenu from './itemMenu';
import { connect } from 'react-redux';
import { checkout, resetPizza } from '../actions/todos';


class MenuOrder extends Component {
    Total = () => {
        console.log(this.props.todos);
        let dataTotal = this.props.todos;
        let arrTotal = dataTotal.map((item, index) => item.price * item.quantity);
        let total = arrTotal.reduce((acc, curr) => acc + curr).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return total;
    }
    render() {
        let styleItem = {
            width: '480px'
        }
        let { todos } = this.props;
        let listData = todos.map((todo, index) => {
            return <ItemMenu 
                key={ todo.id } 
                index={ index } 
                todo={ todo }
                />
        })
        return (
            <div className="col-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row my-2">
                            <h4 className="col-4 p-2 text-left">Your pizza</h4>
                            <span className="col-2 p-2 bg-info text-light">{ this.Total() }$</span>
                            <button 
                                className="btn btn-outline-warning ml-auto"
                                onClick = { () =>  this.props.ResetPizza() }
                            >Reset pizza</button>
                        </div>
                        <div className="row">
                            { listData }
                        </div>
                        <div className="row p-3 border border-secondary my-1">
                            <span className="text-left text-danger">Total</span>
                            <span className="text-right text-info ml-auto">{ this.Total() }$</span>
                        </div>
                        <div className="row border border-secondary p-3 my-1">
                            <button 
                                className="btn btn-primary"
                                onClick={ () => this.props.Checkout() }
                            >Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Checkout: () => dispatch(checkout()),
        ResetPizza: () => dispatch(resetPizza())
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuOrder);