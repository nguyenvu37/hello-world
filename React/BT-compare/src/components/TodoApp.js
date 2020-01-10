import React from 'react';
import ShowProduct from './showProduct';
import HeaderApp from './headerApp';
import ShowInformation from './showInformation';


class TodoApp extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    color:["bg-danger", "bg-success", "bg-primary"],
                    compare: false,
                    condition: "Fresh",
                    description: "Two Cherries",
                    image: "http://react-compare-app.surge.sh/images/Cherry.png",
                    name: "Cherry",
                    price: "$1.99"
                },
                {
                    id: 2,
                    color:["bg-success", "bg-primary"],
                    compare: false,
                    condition: "Frozen",
                    description: "Giant orange",
                    image: "http://react-compare-app.surge.sh/images/Orange.png",
                    name: "Orange",
                    price: "$2.99"
                },
                {
                    id: 3,
                    color:["bg-danger"],
                    compare: false,
                    condition: "Frozen",
                    description: "Mixed Nuts",
                    image: "http://react-compare-app.surge.sh/images/Nuts.png",
                    name: "Nuts",
                    price: "$1.00"
                },
                {
                    id: 4,
                    color:["bg-primary"],
                    compare: false,
                    condition: "Fresh",
                    description: "Just Strawberry",
                    image: "http://react-compare-app.surge.sh/images/Strawberry.png",
                    name: "Strawberry",
                    price: "$1.49"
                }
            ],
            arrProducts: [],
            compared: false
        }
    }

    HandlerCompare = (e) => {
        let { todos, arrProducts } = this.state;
        let product = todos.find(item => item.id == e.target.id);
        // let product = todos[index];
        console.log(product);

        if (product.compare === false) {
            product.compare = true;
            arrProducts.push(product);
            console.log(product);
            return this.setState({
                arrProducts: arrProducts
            })
        }
        
        if (product.compare === true) {
            product.compare = false;
            let index = arrProducts.findIndex(item => item.id == e.target.id)
            arrProducts.splice(index, 1);
            console.log('product', arrProducts);
            return this.setState({
                arrProducts: arrProducts
            })
        }
    }
    render() {
        return (
            <div className="container">
                <HeaderApp/>
                <ShowProduct todo={ this.state.todos } HandlerCompare={this.HandlerCompare} />
                {this.state.arrProducts.length < 2 ? "" : <ShowInformation products={ this.state.arrProducts } />}
            </div>
        );
    }
}

export default TodoApp;