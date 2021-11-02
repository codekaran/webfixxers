import classes from "./HomeService.module.css";
import Link from "next/link";
import parser from "react-html-parser";

const HomeService = (props) => {
  let {
    CardHeading1,
    CardHeading2,
    CardHeading3,
    CardInfo1,
    CardInfo2,
    CardInfo3,

    Heading,
    SubHeading,
    Intro,
  } = props.text;
  return (
    <div className={classes.home_services_container} id="services">
      <div className={classes.home_services_description}>
        <h6 className="small_heading">{parser(Heading)}</h6>
        <h1 className="large_heading">{parser(SubHeading)}</h1>
        <div className={classes.services_intro}>{parser(Intro)}</div>
      </div>
      <div className={classes.service_card_container}>
        <Link href="/web-design">
          <div className={classes.card}>
            <div className={classes.card_image1}></div>
            <div className={classes.card_description}>
              <h4 className={classes.card_heading}>{parser(CardHeading1)}</h4>
              <div className="info">{parser(CardInfo1)}</div>
              <div className={classes.learn_more_link}>Learn More</div>
            </div>
          </div>
        </Link>
        <Link href="/web-shop">
          <div className={classes.card}>
            <div className={classes.card_image2}></div>
            <div className={classes.card_description}>
              <h4 className={classes.card_heading}>{parser(CardHeading2)}</h4>
              <div className="info">{parser(CardInfo2)}</div>
              <div className={classes.learn_more_link}>Learn More</div>
            </div>
          </div>
        </Link>
        <Link href="/seo-sea">
          <div className={classes.card}>
            <div className={classes.card_image3}></div>
            <div className={classes.card_description}>
              <h4 className={classes.card_heading}>{parser(CardHeading3)}</h4>
              <div className="info">{parser(CardInfo3)}</div>
              <div className={classes.learn_more_link}>Learn More</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
