import Pricing from "../components/Pricing";

const pricing = (props) => {
  return (
    <>
      <Pricing text={props.content}></Pricing>
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {
      content: {
        meta: {
          title: "",
        },
        path: "",
        second_section: {
          heading: "OUR PACKAGE",
          sub_heading: "Website maintenance, developing & designing pakages",
          intro:
            "There’s no need to overcomplicate website design pricing. We believe in keeping things simple, in order to guarantee the growth of your business. We have best package to offer, it will help you based on the needs of your business. We love designing and developing amazing websites for our clients that deliver high-quality results!",
        },
        third_section: {
          heading: "PACAKGE DETAILS",
          sub_heading: "Complete pakage with all the features",
          intro:
            "Are you looking for affordable website design packages to get designed and developed your website?",
          heading1: "Design",
          intro1:
            "Our package offer a completely unique and custom design well intergrated with your business ideology.",
          heading2: "Develope",
          intro2:
            "Our responsive and reactJS based code provides best experience across all the major browser and platform.",
          heading3: "Maintain",
          intro3:
            "Our Maintance team will handles all the bugs and provides you with 24*7 great services.",
        },
        fourth_section: {
          card_heading: "Package",
          card_amount: "15",
          card_list: [
            "Free 1 Year Website Hosting worth  4 EURO / Month",
            "Upto 5 Pages with Responsive / Mobile Friendly Layout",
            "You own your website code",
            "Search Engine Friendly Code",
            "Design Customization",
            "5 hours of free support",
          ],
          heading:
            "Most suitable for Websites for your online buisness with most amazing features.",
          intro:
            "Our website designers and developers don't just build websites, they build SEO &SEA websites that represent your brand and convey your message in the strongest ways possible. The mobile-friendly websites we build are customized to fit your business and your audience with maximum results. Rest assured that all of the tools needed to convert your online audience into revenue are incorporated into our design process.",
        },
        fifth_section: {},
        sixth_section: {},
      },
    },
  };
}
export default pricing;
