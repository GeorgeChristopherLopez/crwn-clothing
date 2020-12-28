import {ReactComponent as ShoppingItem  } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-icon.styles.scss';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({toggleCartHidden, itemCount})=> (
    <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingItem className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProp = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
     itemCount: selectCartItemsCount
})


export default connect(
    mapStateToProps, 
    mapDispatchToProp
    )(CartIcon);