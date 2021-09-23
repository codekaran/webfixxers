import ServicesElement from "../../components/Services";

const Services = (props) => {
  data.sections[3]["SubHeadings1"] = ["Easy to use", "Beautiful design"];
  data.sections[3]["SubHeadings2"] = ["Professional webshop", "Ouick setup"];
  data.sections[3]["SubHeadings3"] = [
    "Improve your website",
    "Get more customers",
  ];
  return <ServicesElement text={props.content}></ServicesElement>;
};

export async function getStaticProps() {
  let data = {};
  try {
    let res = await fetch(
      "https://webfixxers-cms.herokuapp.com/getData?page=service&lang=en"
    );
    res = await res.json();
    data = JSON.parse(res.data);
    data["path"] = "/en";
    data.sections[3]["SubHeadings1"] = ["Easy to use", "Beautiful design"];
    data.sections[3]["SubHeadings2"] = ["Professional webshop", "Ouick setup"];
    data.sections[3]["SubHeadings3"] = [
      "Improve your website",
      "Get more customers",
    ];
    console.log(data.sections);
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      content: data,
    },
  };
}

export default Services;
