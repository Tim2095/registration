import classes from './header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes['header-links']}>
        <li className={classes['header-link']}><a href="#">SignUp</a></li>
        <li className={classes['header-link']}><a href="#">SignIn</a></li>
      </div>
    </header>
  );
};

export default Header;
