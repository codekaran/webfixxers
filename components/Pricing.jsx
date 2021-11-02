import Header from "../sub_components/Header";
import classes from "./Pricing.module.scss";
import header_image from "../images/pricing_header.png";
import Para from "../sub_components/Para";
import Card from "../sub_components/Card";
import icon1 from "../images/pricing_heading1.png";
import icon2 from "../images/pricing_heading2.png";
import icon3 from "../images/pricing_heading3.png";
import ImageContent from "../sub_components/ImageContent";

import { useEffect, useState } from "react";

const Pricing = (props) => {
  let { second_section, third_section, fourth_section } = props.text;
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  let [cardWidth, setCardWidth] = useState("60%");

  const handleResize = () => {
    console.log("hello");
    if (window.innerWidth < 769) {
      setCardWidth("100%");
    } else {
      setCardWidth("60%");
    }
  };
  let card_array = [
    {
      image: icon1.src,
      heading: third_section.heading1,
      info: third_section.intro1,
    },
    {
      image: icon2.src,
      heading: third_section.heading2,
      info: third_section.intro2,
    },
    {
      image: icon3.src,
      heading: third_section.heading3,
      info: third_section.intro3,
    },
  ];
  let package_list = (
    <ul className={classes.package_list}>
      {fourth_section.card_list.map((value) => {
        return (
          <div key={value} className={classes.list_container}>
            <span className={classes.pointer}>&#8226;</span>
            <li key={value}>{value}</li>
          </div>
        );
      })}
    </ul>
  );
  console.log(card_array);
  return (
    <div className={classes.pricing_container}>
      <Header image_url={header_image} heading="Pricing"></Header>
      <div className={classes.second_section}>
        <Para
          heading={second_section.heading}
          sub_heading={second_section.sub_heading}
          info1={second_section.intro}
          text_color="#666666"
          heading_color="black"
          align="flex-start"
          lineHeight="40px"
        ></Para>
      </div>
      <div className={classes.third_section}>
        <div className={classes.intro}>
          <Para
            heading={third_section.heading}
            sub_heading={third_section.sub_heading}
            info1={third_section.intro}
            text_color="white"
            heading_color="white"
            align="center"
            lineHeight="40px"
          ></Para>
        </div>
        <div className={classes.card_container}>
          {card_array.map((value) => {
            return (
              <div key={value.heading}>
                <Card
                  text_align="center"
                  card_image={value.image}
                  heading={value.heading}
                  info={value.info}
                  width="20px"
                  height="20px"
                  text_color="white"
                  heading_color="white"
                ></Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.fourth_section}>
        <ImageContent>
          <Card
            border="1px solid black"
            card_width={cardWidth}
            text_align="left"
            card_image=""
            heading={fourth_section.card_heading}
            info={package_list}
            text_color="black"
            heading_color="black"
            borderRadius="4px"
            padding="20px"
          ></Card>
          <Para
            heading=""
            sub_heading={fourth_section.heading}
            info1={fourth_section.intro}
            text_color="#666666"
            heading_color="black"
            align="center"
            lineHeight="40px"
          ></Para>
        </ImageContent>
      </div>
    </div>
  );
};

export default Pricing;
