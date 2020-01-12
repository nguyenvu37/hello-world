import React from 'react';
import ItemImage from './itemImage';
import { connect } from 'react-redux';

class ShowOrder extends React.Component {
    render() {
        let { data } = this.props;
        let listData;
        if (data.length > 0) {
            listData = data.map((item, index) => (
                <ItemImage key={ index } name={ item.name } src={ item.src } quantity={ item.quantity } />
            ))
        } else (
            listData = <h1>Information Pizza</h1>
        )
        return (
            <div className="col-7">
                { listData }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    let data = state.todos.filter(item => item.quantity !== 0);
    return {
        data
    }
}

export default connect(mapStateToProps)(ShowOrder);