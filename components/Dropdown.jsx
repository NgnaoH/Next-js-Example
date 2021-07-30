import classes from '../scss/dropdown.module.scss'

const Dropdown = ({children, isShow, className}) => {

  return (
    <div className={`${classes["dropdown"]} ${isShow ? classes["active"] : ""} ${classes[`${className}`]}`}>
      {children}
    </div>
  );
};

export default Dropdown;
