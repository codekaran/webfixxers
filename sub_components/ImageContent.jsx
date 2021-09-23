import { Children } from "react";
import classes from "./ImageContent.module.scss";
import { useState } from "react";

// props - 'height','backgroundColor','image'

const ImageContent = (props) => {
  console.log(props.children);
  return (
    <div
      style={{
        // height: `${props.height}`,
        backgroundColor: `${props.backgroundColor}`,
      }}
      className={classes.container}
    >
      <div className={classes.text}>{props.children[1]}</div>
      <div className={classes.card}>{props.children[0]}</div>
    </div>
  );
};

export default ImageContent;
