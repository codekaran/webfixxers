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

export async function getStaticProps() {
  let data = {};
  try {
    let res = await fetch(
      "https://webfixxers-cms.herokuapp.com/getData?page=service&lang=nl"
    );
    res = await res.json();
    data = JSON.parse(res.data);
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

export default services;
