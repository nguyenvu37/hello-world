import React, { Component } from 'react';
import ShowOrder from './showOrder';
import MenuOrder from './menuOrder';
import AppHeader from './headerPage';

class PageOrder extends Component {
    render() {
        return (
            <div className="container-fluid">
                    <AppHeader/>
                <div className="container">
                    <div className="row">
                        <ShowOrder/>
                        <MenuOrder/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageOrder;