import classes from "./Card.module.scss";

const Card = (props) => {
  console.log(props);
  return (
    <div
      style={{
        border: `${props.border}`,
        width: `${props.card_width}`,
        height: `${props.card_height}`,
        borderRadius: `${props.borderRadius}`,
        padding: `${props.padding}`,
      }}
      className={
        props.text_align === "center"
          ? classes.card_container_center
          : classes.card_container_left
      }
    >
      <div
        style={{
          backgroundImage: `url(${props.card_image})`,
          width: `${props.width}`,
          height: `${props.height}`,
        }}
        className={classes.card_image}
      ></div>
      <h4
        style={{ color: `${props.heading_color}` }}
        className={classes.card_heading}
      >
        {props.heading}
      </h4>
      <div
        style={{ color: `${props.text_color}` }}
        className={classes.card_info}
      >
        {props.info}
      </div>
    </div>
  );
};

export default Card;
