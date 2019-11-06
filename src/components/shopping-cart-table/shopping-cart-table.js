import React from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.css';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>BYN {total}</td>
                <td>
                    <button onClick={() => onDelete(id)}
                            className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button onClick={() => onIncrease(id)}
                            className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle"></i>
                    </button>
                    <button onClick={() => onDecrease(id)}
                            className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle"></i>
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead >
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                { items.map(renderRow) }
                </tbody>
            </table>
            <div className="total">
                Total: BYN {total}
            </div>
        </div>
    );
};

const mapStateToProps = ({cartItems: items, orderTotal: total}) => {
    return {
        items,
        total
    };
};
const mapDispatchToProps = () => {
    return {
        onDelete: (id) => console.log(`Deleted id: ${id}`),
        onIncrease: (id) => console.log(`+ 1 id: ${id}`),
        onDecrease: (id) => console.log(`- 1 id: ${id}`),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
