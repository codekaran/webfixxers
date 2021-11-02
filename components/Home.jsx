import classes from "./Home.module.css";
import parser from "react-html-parser";
import HomeBenefits from "../sub_components/HomeBenefits";
import HomeServices from "../sub_components/HomeServices";
import HomeAbout from "../sub_components/HomeAbout";
import HomeClients from "../sub_components/HomeClients";
import HomeTestimonials from "../sub_components/HomeTestimonials";

const Home = (props) => {
  console.log(props);
  let { sections } = props.text;
  function handleServiceClick() {
    // this.handleClickBurger();
    if (document.getElementById("services")) {
      var target_pos = document
        .getElementById("services")
        .getBoundingClientRect().top;

      console.log(target_pos);
      var start_pos = window.pageYOffset;
      var duration = 1000;
      console.log(target_pos + " " + start_pos);
      if (start_pos > target_pos) {
        target_pos -= 60;
      }
      var startTime = null;
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, start_pos, target_pos, duration);
        window.scrollTo(0, run);
        if (timeElapsed <= duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
      requestAnimationFrame(animation);
    }
  }
  return (
    <div className={classes.home_container}>
      <div className={classes.home_image_container}>
        <div className={classes.overlay}>
          <h4 className={classes.city_text}>
            {props.text.meta.title.split("|")[0]}
          </h4>
          <div className={classes.home_heading}>
            {parser(sections[0].Heading)}
          </div>
          <button onClick={handleServiceClick} className={classes.home_button}>
            {parser(sections[0].ButtonText)}
          </button>
        </div>
        <div className={classes.home_image}></div>
      </div>
      <HomeBenefits text={sections[1]}></HomeBenefits>
      <HomeServices text={sections[2]}></HomeServices>
      <HomeAbout text={sections[3]}></HomeAbout>
      <HomeClients text={sections[4]}></HomeClients>
      <HomeTestimonials text={sections[5]}></HomeTestimonials>
    </div>
  );
};

export default Home;
