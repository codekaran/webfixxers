import classes from "./HomeAbout.module.css";
import Link from "next/link";
import parser from "react-html-parser";

const HomeAbout = (props) => {
  return (
    <div className={classes.home_about_container}>
      <div className={classes.about_image}></div>
      <div className={classes.about_info}>
        <h6 className="small_heading">{parser(props.text.Heading)}</h6>
        <h3 className="large_heading">{parser(props.text.SubHeading)}</h3>
        <div style={{ color: "white" }} className="info">
          {parser(props.text.Intro)}
        </div>
        <Link href="/about">
          <button className={classes.home_button}>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeAbout;
