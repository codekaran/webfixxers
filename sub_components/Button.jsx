import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.buttonAction}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        width: props.width,
        height: props.height,
        border: props.border,
        marginTop: props.margin_top,
      }}
      className={classes.button}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
