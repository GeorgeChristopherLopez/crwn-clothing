import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux'
import  CartIcon  from "../cart-icon/cart-icon.component";
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden})=>{
return(
    <div className="header">
        <Link  className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/shop">Contact</Link>
        {currentUser ? 
            <div className="option" onClick={()=> auth.signOut()}>
            Sign Out
            </div>: 
            <Link className="option" to="/signin">
            Sign In
            </Link>}
            <CartIcon/>
        </div>
        {
            hidden ? null :
         <CartDropDown />
        }
     
    </div>

);
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);