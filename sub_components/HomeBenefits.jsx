import classes from "./HomeBenefits.module.css";
import parser from "react-html-parser";
const HomeBenefits = (props) => {
  let {
    CardHeading1,
    CardHeading2,
    CardHeading3,
    CardInfo1,
    CardInfo2,
    CardInfo3,
  } = props.text;
  return (
    <div className={classes.home_benefits_container}>
      <div className={classes.benefit}>
        <div className={classes.benefit_image}></div>
        <div className={classes.benefit_heading}>{parser(CardHeading1)}</div>
        <div className={classes.benefit_subheading}>{parser(CardInfo1)}</div>
      </div>
      <div className={classes.benefit}>
        <div className={classes.benefit_image_two}></div>
        <div className={classes.benefit_heading}>{parser(CardHeading2)}</div>
        <div className={classes.benefit_subheading}>{parser(CardInfo2)}</div>
      </div>
      <div className={classes.benefit}>
        <div className={classes.benefit_image}></div>
        <div className={classes.benefit_heading}>{parser(CardHeading3)}</div>
        <div className={classes.benefit_subheading}>{parser(CardInfo3)}</div>
      </div>
    </div>
  );
};

export default HomeBenefits;
