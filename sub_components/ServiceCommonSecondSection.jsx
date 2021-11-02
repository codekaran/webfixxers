import classes from "./ServiceCommonSecondSection.module.css";
import parser from "react-html-parser";
const ServiceCommonSecondSection = (props) => {
  let {
    Heading,
    SubHeading,
    Intro,
    CardHeading1,
    CardInfo1,
    CardHeading2,
    CardInfo2,
    CardHeading3,
    CardInfo3,
  } = props.text;
  return (
    <div className={classes.seo_second_section_container}>
      <h6 className="small_heading">{parser(Heading)}</h6>
      <h3 style={{ textAlign: "center" }} className="large_heading">
        {parser(SubHeading)}
      </h3>
      <div style={{ textAlign: "center", color: "white" }} className="info">
        {parser(Intro)}
        {/* <br></br>
        farm-to-table tousled next level irony freegan franzen brooklyn. */}
      </div>

      <div className={classes.services_second_section_list}>
        <div className={classes.concept}>
          <div className={classes.concept_icon}></div>
          <h5 className={classes.concept_heading}>{parser(CardHeading1)}</h5>
          <div className={classes.concept_value}>{parser(CardInfo1)}</div>
        </div>
        <div className={classes.build}>
          <div className={classes.build_icon}></div>
          <h5 className={classes.build_heading}>{parser(CardHeading2)}</h5>
          <div className={classes.build_value}>{parser(CardInfo2)}</div>
        </div>
        <div className={classes.test}>
          <div className={classes.test_icon}></div>
          <h5 className={classes.test_heading}>{parser(CardHeading3)}</h5>
          <div className={classes.test_value}>{parser(CardInfo3)}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCommonSecondSection;
