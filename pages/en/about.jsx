import AboutElement from "../../components/About";
import Head from "next/head";

const About = (props) => {
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
        <title>About Us</title>
        <link rel="shortcut icon" href="/logo.png" />
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
      <AboutElement text={props.content}></AboutElement>
    </>
  );
};
export async function getStaticProps() {
  let data = {};
  try {
    let res = await fetch(
      "https://webfixxers-cms.herokuapp.com/getData?page=about&lang=en"
    );
    res = await res.json();
    data = JSON.parse(res.data);
    data["path"] = "/en";
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      content: data,
    },
  };
}
export default About;
