import classes from "./ServiceCommonSecondSection.module.css";

const ServiceCommonSecondSection = (props) => {
  let {
    heading,
    sub_heading,
    intro,
    concept_info,
    build_info,
    test_info,
  } = props.text;
  return (
    <div className={classes.seo_second_section_container}>
      <h6 className="small_heading">{heading}</h6>
      <h3 style={{ textAlign: "center" }} className="large_heading">
        {sub_heading}
      </h3>
      <div style={{ textAlign: "center", color: "white" }} className="info">
        {intro}
        {/* <br></br>
        farm-to-table tousled next level irony freegan franzen brooklyn. */}
      </div>

      <div className={classes.services_second_section_list}>
        <div className={classes.concept}>
          <div className={classes.concept_icon}></div>
          <h5 className={classes.concept_heading}>Concept</h5>
          <div className={classes.concept_value}>{concept_info}</div>
        </div>
        <div className={classes.build}>
          <div className={classes.build_icon}></div>
          <h5 className={classes.build_heading}>Build</h5>
          <div className={classes.build_value}>{build_info}</div>
        </div>
        <div className={classes.test}>
          <div className={classes.test_icon}></div>
          <h5 className={classes.test_heading}>Test</h5>
          <div className={classes.test_value}>{test_info}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCommonSecondSection;
