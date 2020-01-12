import React from 'react';

class AppHeader extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">ORDER PIZZA APP</h1>
                    <p className="lead">App Manager</p>
                </div>
            </div>
        );
    }
}

export default AppHeader;