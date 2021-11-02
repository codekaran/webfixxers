import Services from "../components/Services";
import Head from "next/head";

const services = (props) => {
  return (
    <>
      <Head>
        <title>Best Web Sites | Web Shops | SEO & SEA</title>
      </Head>
      <Services text={props.content}></Services>
    </>
  );
};

export async function getStaticProps({ locale }) {
  let data = {};
  const lang = locale === "nl" ? "nl" : "en";
  try {
    let res = await fetch(
      "http://localhost:8000/getData?page=seo-sea&lang=" + lang
    );
    res = await res.json();
    data = JSON.parse(res.data);
    if (lang === "nl") {
      data["path"] = "";
      data.sections[3]["SubHeadings1"] = [
        "Hoge gebruiksvriendelijkheid",
        "Mooi design",
      ];
      data.sections[3]["SubHeadings2"] = [
        "Professionele webshop",
        "Snelle installatie",
      ];
      data.sections[3]["SubHeadings3"] = [
        "Verbeter je website",
        "Krijg meer klanten",
      ];
    } else if (lang === "en") {
      data["path"] = "/en";
      data.sections[3]["SubHeadings1"] = ["Easy to use", "Beautiful design"];
      data.sections[3]["SubHeadings2"] = [
        "Professional webshop",
        "Ouick setup",
      ];
      data.sections[3]["SubHeadings3"] = [
        "Improve your website",
        "Get more customers",
      ];
    }

    console.log(data.sections);
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      content: data,
    },
    revalidate: 1,
  };
}

export default services;
