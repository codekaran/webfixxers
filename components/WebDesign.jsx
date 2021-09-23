import Header from "../sub_components/Header";
import image_url from "../images/seo_sea_header.png";
import ServiceCommonFirstSection from "../sub_components/ServiceCommonFirstSection";
import ServiceCommonSecondSection from "../sub_components/ServiceCommonSecondSection";
import BottomContact from "../sub_components/BottomContact";
const WebDesign = (props) => {
  let {
    heading,
    sub_heading,
    intro_part1,
    intro_part2,
    related_info,
  } = props.text.second_section;

  return (
    <>
      <Header image_url={image_url} heading="Web Design"></Header>
      <ServiceCommonFirstSection
        related_info={related_info}
        heading={heading}
        sub_heading={sub_heading}
        textFirstPart={intro_part1}
        textSecondPart={intro_part2}
      ></ServiceCommonFirstSection>

      {/* second section */}
      <ServiceCommonSecondSection
        text={props.text.third_section}
      ></ServiceCommonSecondSection>
      <BottomContact path={props.text.path}></BottomContact>
    </>
  );
};

export default WebDesign;
