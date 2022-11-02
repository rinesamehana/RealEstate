import CartIcon from "./CartIcon";
import classes from './HeaderButton.module.css';
import {useState} from  'react';
import { Link } from "react-router-dom";
import HouseItem from "../../pages/list/HouseItem";

const HeaderButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const btnClasses = `${classes.button} ${btnIsHighlighted? classes.bump: ''}`;
    return (
      <Link to='/favorite'>
        <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}> <CartIcon/> </span>
        <span>Your Cart</span>
      </button>
      </Link>
    );
}
export default HeaderButton;