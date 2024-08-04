import classes from './header.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setHeader,  } from '../reducers/headerReducer';
const Header = () => {

  const dispatch = useDispatch()
  const onChooseLoginAction = (e, login) => {
    e.preventDefault()
    dispatch(setHeader(login))
  }


  return (
    <header className={classes.header}>
      <div className={classes['header-links']}>
        <li className={classes['header-link']}><a href="#" onClick={((e) => onChooseLoginAction(e,'signup'))}>SignUp</a></li>
        <li className={classes['header-link']}><a href="#" onClick={((e) => onChooseLoginAction(e,'login'))}>SignIn</a></li>
      </div>
    </header>
  );
};

export default Header;
