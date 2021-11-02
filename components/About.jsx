import Header from "../sub_components/Header";
import classes from "./About.module.css";
import PorgressBar from "../sub_components/ProgressBar";
import BottomContact from "../sub_components/BottomContact";
import image_url from "../images/about_header.png";
import Link from "next/link";
import parser from "react-html-parser";

const About = (props) => {
  console.log(props);
  let { sections } = props.text;
  return (
    <>
      <Header
        heading={parser(sections[0].Heading)}
        image_url={image_url}
      ></Header>
      {/* second section */}
      <div className={classes.about_second_section_container}>
        <div className={classes.about_description}>
          <h6 className="small_heading">{parser(sections[1].Heading)}</h6>
          <h3 className="large_heading">{parser(sections[1].SubHeading)}</h3>
          <div className="info">
            {parser(sections[1].IntroPart1)}
            <br></br>
            <br></br>
            <br></br> {parser(sections[1].IntroPart2)}
          </div>
        </div>
        <div className={classes.about_image}></div>
      </div>

      {/* third section */}

      <div className={classes.about_third_section}>
        <div className={classes.about_description}>
          <h6 className="small_heading">{parser(sections[2].Heading)}</h6>
          <h3 className="large_heading">{parser(sections[2].SubHeading)}</h3>
          <div style={{ color: "white" }} className="info">
            {parser(sections[2].IntroPart1)}
            <br></br>
            <br></br>
            <br></br>
            {parser(sections[2].IntroPart2)}
          </div>
        </div>
        <div className={classes.progress_bar_container}>
          <div className={classes.progress_bar_description}>
            <div className={classes.progress_bar_info}>
              {parser(sections[2].SubHeading1)}
              <span className={classes.progress_percent}>80%</span>
            </div>
            <PorgressBar width="80%"></PorgressBar>
          </div>
          <div className={classes.progress_bar_description}>
            <div className={classes.progress_bar_info}>
              {parser(sections[2].SubHeading2)}
              <span className={classes.progress_percent}>92%</span>
            </div>
            <PorgressBar width="92%"></PorgressBar>
          </div>
          <div className={classes.progress_bar_description}>
            <div className={classes.progress_bar_info}>
              {parser(sections[2].SubHeading3)}
              <span className={classes.progress_percent}>78%</span>
            </div>
            <PorgressBar width="78%"></PorgressBar>
          </div>
        </div>
      </div>

      {/* fourth section */}

      <div className={classes.about_fourth_section}>
        <div className="small_heading">{parser(sections[3].Heading)}</div>
        <div className="large_heading">{parser(sections[3].SubHeading)}</div>
        <div className={classes.about_card_container}>
          <Link href="/web-design">
            <div className={classes.card}>
              <div className={classes.card_image}></div>
              <div className={classes.card_description}>
                <h4 className={classes.card_heading}>
                  {parser(sections[3].CardHeading1)}
                </h4>
                <div className="info">{parser(sections[3].CardInfo1)}</div>
              </div>
              <div className={classes.learn_more_link}>Learn More</div>
            </div>
          </Link>
          <Link href="/web-shop">
            <div className={classes.card}>
              <div className={classes.card_image}></div>
              <div className={classes.card_description}>
                <h4 className={classes.card_heading}>
                  {parser(sections[3].CardHeading2)}
                </h4>
                <div className="info">{parser(sections[3].CardInfo2)}</div>
              </div>
              <div className={classes.learn_more_link}>Learn More</div>
            </div>
          </Link>
          <Link href="/seo-sea">
            <div className={classes.card}>
              <div className={classes.card_image}></div>
              <div className={classes.card_description}>
                <h4 className={classes.card_heading}>
                  {parser(sections[3].CardHeading3)}
                </h4>
                <div className="info">{parser(sections[3].CardInfo3)}</div>
              </div>
              <div className={classes.learn_more_link}>Learn More</div>
            </div>
          </Link>
        </div>
        <div className={classes.about_fourth_section_part}>
          <div className={classes.about_fourth_section_part_description}>
            <h4 className={classes.about_fourth_section_part_heading}>
              {parser(sections[4].Heading)}
            </h4>
            <div className="info">{parser(sections[4].Intro)}</div>
            <Link href="/pricing">
              <button className={classes.home_button}>Learn More</button>
            </Link>
          </div>
          <div className={classes.about_fourth_section_part_image}></div>
        </div>
      </div>
      {/* fifth section */}
      <div className={classes.about_fifth_section}></div>
    </>
  );
};

export default About;
