import {ReactComponent as ShoppingItem  } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden})=> (
    <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingItem className='shopping-icon'/>
    <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProp = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    null, 
    mapDispatchToProp
    )(CartIcon);