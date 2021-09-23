import classes from "./ProgressBar.module.css";

const PorgressBar = (props) => {
  return (
    <div className={classes.outer_section}>
      <div
        style={{ width: props.width }}
        className={classes.inner_section}
      ></div>
    </div>
  );
};

export default PorgressBar;
