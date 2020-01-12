import React from 'react';

class ItemImage extends React.Component {
    render() {
        let { name, quantity, src } = this.props;
        return (
            <div className="row my-2">
                <div className="col-4">
                    <img src={ src } className="p-1 w-100 border"/>
                    <h5 className="text-center text-primary my-2">{ name } </h5>
                    <p className="text-center text-info my-2">quantity x { quantity } </p>
                </div>
            </div>
        );
    }
}

export default ItemImage;