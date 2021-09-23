import classes from "./HomeTestimonials.module.css";
import parser from "react-html-parser";
const HomeTestimonials = (props) => {
  let { Heading, SubHeading, Intro } = props.text;
  return (
    <div className={classes.testimonials_container}>
      <div className={classes.testimonials_info}>
        <h6 className="small_heading">{parser(Heading)}</h6>
        <h3 className="large_heading">{parser(SubHeading)}</h3>
        <div style={{ color: "white", marginRight: "10%" }} className="info">
          {parser(Intro)}
        </div>
      </div>
      <div className={classes.testimonials_quote}>
        <div className="info">
          “Ik had laatst een website nodig voor mijn autohandel en daarvoor ben
          ik bij webfixxers gekomen. Door de professionele aanpak en snelle hulp
          was het een plezier om met hun te werken. Dank U voor de hulp. Een
          echte aanrader voor professioneel en betaalbaar werk!”
          <div className={classes.client_name}>
            {" "}
            <span className={classes.client_dp}></span> - Wallyn
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
