import Header from "../sub_components/Header";
import image_url from "../images/seo_sea_header.png";
import ServiceCommonFirstSection from "../sub_components/ServiceCommonFirstSection";
import ServiceCommonSecondSection from "../sub_components/ServiceCommonSecondSection";

const WebDesign = (props) => {
  let { sections, path } = props.text;
  return (
    <>
      <Header image_url={image_url} heading="Web Shop"></Header>
      <ServiceCommonFirstSection
        related_info={sections[2]}
        Heading={sections[1].Heading}
        SubHeading={sections[1].SubHeading}
        textFirstPart={sections[1].Intro}
      ></ServiceCommonFirstSection>

      {/* second section */}
      <ServiceCommonSecondSection
        text={sections[3]}
      ></ServiceCommonSecondSection>
    </>
  );
};

export default WebDesign;
