import WebDesign from "../components/WebDesign";
import Head from "next/head";

const web_design = (props) => {
  return (
    <>
      <Head>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCSWVWS');`,
          }}
        />
        <title>De beste designs voor uw website</title>
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="description"
          content="Een goede website kan wonderen doen. Laat ons u helpen om het meeste uit uw website te halen."
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-027PSJQNC4"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-027PSJQNC4');`,
          }}
        />
      </Head>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KCSWVWS"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <WebDesign text={props.content}></WebDesign>
    </>
  );
};

function formatData(data) {
  let arr = [];
  let dataToBeFormatted = data.sections[2];
  let i = 1;

  let len = Object.entries(dataToBeFormatted).length / 2;

  while (true) {
    arr.push({
      Heading: dataToBeFormatted["Heading" + i],
      Intro: dataToBeFormatted["Intro" + i],
    });
    i += 1;
    if (i > len) {
      break;
    }
  }
  data.sections[2] = arr;
  console.log(data.sections[2]);
  return data;
}

export async function getStaticProps({ locale }) {
  let data = {};
  let formattedData = {};
  const lang = locale === "nl" ? "nl" : "en";
  try {
    let res = await fetch(
      "http://localhost:8000/getData?website=webfixxers&page=web-design&lang=" +
        lang
    );
    res = await res.json();
    data = JSON.parse(res.data);
    data["path"] = "";
    formattedData = formatData(data);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      content: formattedData,
    },
    // revalidate: 1,
  };
}

export default web_design;
