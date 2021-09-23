import Button from "./Button";
import classes from "./ServiceCommonFirstSection.module.css";

const ServiceCommonFirstSection = (props) => {
  return (
    <div className={classes.seo_first_section_container}>
      <h6 className="small_heading">{props.heading}</h6>
      <h3 className="large_heading"> {props.sub_heading}</h3>
      <div className="info">
        {props.textFirstPart}
        <br></br>
        <br></br>
        {props.textSecondPart}
      </div>
      <div className={classes.sub_headings}>
        <ul className={classes.services_fourth_section_list1}>
          {props.related_info.map((value) => (
            <li key={value.heading}>
              <div className={classes.list_heading_container}>
                <div className={classes.pointer}></div>
                <div className={classes.list_heading}>{value.heading}</div>
              </div>
              <div
                className={classes.list_text}
                dangerouslySetInnerHTML={{ __html: value.text }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.button}>
        <Button
          backgroundColor="white"
          border="3px solid #032436"
          buttonText="Lets Work Together"
          margin_top="5%"
        ></Button>
      </div>
    </div>
  );
};

export default ServiceCommonFirstSection;
