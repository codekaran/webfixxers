import Header from "../sub_components/Header";
import parser from "react-html-parser";
import image_url from "../images/services_header.png";
import classes from "./Services.module.css";
import Button from "../sub_components/Button";

import Link from "next/link";

const Services = (props) => {
  console.log(props);
  let { path, sections } = props.text;
  return (
    <>
      <Header
        heading={parser(sections[0].Heading)}
        image_url={image_url}
      ></Header>

      {/* second section */}
      <div className={classes.services_second_section_container}>
        <div className={classes.services_image}></div>
        <div className={classes.services_description}>
          <h6 className="small_heading">{parser(sections[1].Heading)}</h6>

          <h3 className="large_heading">{parser(sections[1].SubHeading)}</h3>
          <div className="info">{parser(sections[1].Intro)}</div>
        </div>
      </div>
      {/* third section */}
      <div className={classes.service_third_section_container}>
        <h6 className="small_heading">{parser(sections[2].Heading)}</h6>
        <h3 className="large_heading">{parser(sections[2].SubHeading)}</h3>
        <div style={{ color: "white" }} className="info">
          {parser(sections[2].Intro)}
        </div>

        <div className={classes.services_third_section_list}>
          <div className={classes.guided}>
            <div className={classes.guided_icon}></div>
            <h5 className={classes.guided_heading}>
              {parser(sections[2].CardHeading1)}
            </h5>
            <div className={classes.guided_value}>
              {parser(sections[2].CardInfo1)}
            </div>
          </div>
          <div className={classes.delivery}>
            <div className={classes.delivery_icon}></div>
            <h5 className={classes.delivery_heading}>
              {parser(sections[2].CardHeading2)}
            </h5>
            <div className={classes.delivery_value}>
              {parser(sections[2].CardInfo2)}
            </div>
          </div>
          <div className={classes.iteration}>
            <div className={classes.iteration_icon}></div>
            <h5 className={classes.iteration_heading}>
              {parser(sections[2].CardHeading3)}
            </h5>
            <div className={classes.iteration_value}>
              {parser(sections[2].CardInfo3)}
            </div>
          </div>
        </div>
      </div>

      {/* fourth section */}

      <div className={classes.services_fourth_section_container}>
        <div className={classes.services_fourth_section_web_design}>
          <div
            className={classes.services_fourth_section_web_design_description}
          >
            <div className={classes.numbering}>01</div>
            <h3 className={classes.services_fourth_section_heading}>
              {parser(sections[3].Heading1)}
            </h3>
            <div className="info">{parser(sections[3].Intro1)}</div>
            <ul className={classes.services_fourth_section_list}>
              <li>
                <div className={classes.pointer}></div>
                {parser(sections[3].SubHeadings1[0])}
              </li>
              <li>
                <div className={classes.pointer}></div>
                {parser(sections[3].SubHeadings1[1])}
              </li>
            </ul>
            <Link href={path + "/web-design"}>
              <a>
                <Button
                  backgroundColor="white"
                  color=""
                  width="210px"
                  height="60px"
                  buttonText="Read More"
                  border="2px solid #032436"
                ></Button>
              </a>
            </Link>
          </div>
          <div className={classes.services_web_design_image}></div>
        </div>
        <div className={classes.services_fourth_section_web_shops}>
          <div className={classes.services_web_shops_image}></div>
          <div
            className={classes.services_fourth_section_web_shops_description}
          >
            <div className={classes.numbering}>02</div>
            <h3 className={classes.services_fourth_section_heading}>
              {parser(sections[3].Heading2)}
            </h3>
            <div className="info">{parser(sections[3].Intro2)}</div>
            <ul className={classes.services_fourth_section_list}>
              <li>
                <div className={classes.pointer}></div>{" "}
                {parser(sections[3].SubHeadings2[0])}
              </li>
              <li>
                <div className={classes.pointer}></div>
                {parser(sections[3].SubHeadings2[1])}
              </li>
              {/* <li>
                <div className={classes.pointer}></div>{" "}
                {parser(sections[3].web_shop_sub_headings)[2]}
              </li> */}
            </ul>
            <Link href={path + "/web-shop"}>
              <a>
                <Button
                  backgroundColor="white"
                  color=""
                  width="210px"
                  height="60px"
                  buttonText="Read More"
                  border="2px solid #032436"
                ></Button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.services_fourth_section_seo_sea}>
          <div className={classes.services_fourth_section_seo_sea_description}>
            <div className={classes.numbering}>03</div>
            <h3 className={classes.services_fourth_section_heading}>
              {parser(sections[3].Heading3)}
            </h3>
            <div className="info">{parser(sections[3].Intro3)}</div>
            <ul className={classes.services_fourth_section_list}>
              <li>
                {" "}
                <div className={classes.pointer}></div>{" "}
                {parser(sections[3].SubHeadings3[0])}
              </li>
              <li>
                {" "}
                <div className={classes.pointer}></div>{" "}
                {parser(sections[3].SubHeadings3[1])}
              </li>
            </ul>
            <Link href={path + "/seo-sea"}>
              <a>
                <Button
                  backgroundColor="white"
                  color=""
                  width="210px"
                  height="60px"
                  buttonText="Read More"
                  border="2px solid #032436"
                ></Button>
              </a>
            </Link>
          </div>
          <div className={classes.services_seo_sea_image}></div>
        </div>

        <div className={classes.services_fourth_section_part}>
          <div className={classes.services_fourth_section_part_description}>
            <h4 className={classes.services_fourth_section_part_heading}>
              {parser(sections[4].Heading)}
            </h4>
            <div className="info">{parser(sections[4].Intro)}</div>
            <Link href={path + "/pricing"}>
              <Button
                buttonText="Learn More"
                backgroundColor="#1C2930"
                color="white"
                margin_top="10%"
              ></Button>
            </Link>
          </div>
          <div className={classes.services_fourth_section_part_image}></div>
        </div>
      </div>
      {/* fifth section */}
      <div className={classes.about_fifth_section}></div>
    </>
  );
};

export default Services;
