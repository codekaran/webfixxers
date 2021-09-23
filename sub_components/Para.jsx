import classes from "./Para.module.scss";

const Para = (props) => {
  let info = (
    <div
      style={{
        color: `${props.text_color}`,
        lineHeight: `${props.lineHeight}`,
      }}
      className={classes.info}
    >
      {props.info1}
    </div>
  );
  if (props.info2) {
    info = (
      <div
        style={{
          color: `${props.text_color}`,
          lineHeight: `${props.lineHeight}`,
        }}
        className={classes.info}
      >
        {props.info1}
        <br />
        <br />
        {props.info2}
      </div>
    );
  }
  return (
    <div
      style={{
        alignItems: `${props.align}`,
      }}
      className={classes.intro_container}
    >
      <h6 className={classes.heading}>{props.heading}</h6>
      <h4
        style={{ color: `${props.heading_color}` }}
        className={classes.sub_heading}
      >
        {props.sub_heading}
      </h4>
      {info}
    </div>
  );
};

export default Para;
