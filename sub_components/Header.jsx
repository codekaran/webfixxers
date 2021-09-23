import classes from "./Header.module.css";

const Header = (props) => {
  // console.log(props);
  return (
    <div className={classes.header_container}>
      <div className={classes.header_overlay}>
        <h1 className={classes.header_heading}>{props.heading}</h1>
      </div>
      <div
        style={{
          background: `url(${props.image_url.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={classes.header_image}
      ></div>
    </div>
  );
};

export default Header;
