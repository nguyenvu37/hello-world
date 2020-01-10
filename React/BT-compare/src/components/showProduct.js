import React from 'react';
import ItemProduct from './itemProduct';

class ShowProduct extends React.Component {
    render() {
        let { todo, HandlerCompare } = this.props;
        let listData = todo.map((todo, index) => {
            return <ItemProduct key={todo.id} todo={todo} HandlerCompare={HandlerCompare}/>
        });
        return (
            <div className="row mt-3">
                {listData}
            </div>
        );
    }
}

export default ShowProduct;