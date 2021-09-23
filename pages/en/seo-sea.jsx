import SEO_SEA from "../../components/SEO_SEA";
import Head from "next/head";
import axios from "axios";

const seo_sea = (props) => {
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
        <link rel="shortcut icon" href="/logo.png" />
        <title>SEO & SEA for your website | WebFixxers</title>
        <meta
          name="description"
          content="SEO agency with best SEO experts to make your website rank top in google & local SEO support for local business as well"
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
      <SEO_SEA text={props.content}></SEO_SEA>
    </>
  );
};
export async function getStaticProps() {
  let blogs = [
    {
      heading: "SEO",
      text:
        "SEO is about helping search engines understand and present content.",
    },
    {
      heading: "SEA",
      text:
        "This stands for search engine advertisement. So basically making an advertisement with google. This cost money but can be used to increase the importance of the website and business. Maybe do a campaign or just try to sell more, everything is possible.",
    },
    {
      heading: "Get Good Ranking",
      text:
        "We can guide you to use all these instruments in the best way. Maybe you want to start a campaign and don’t know how to start or you want to focus on a certain keywords. Don’t hesitate to contact us.",
    },
  ];
  // let res = await axios.get("http://localhost:8888/wp-json/wp/v2/seo-blog");
  // let data = res.data;
  // for (let i in data) {
  //   console.log(data[i].title);

  //   blogs.push({
  //     heading: data[i].title.rendered,
  //     text: data[i].content.rendered,
  //   });
  // }
  // console.log(blogs);

  return {
    props: {
      content: {
        path: "/en",
        first_section: {},
        second_section: {
          heading: "WHAT WE DO",
          sub_heading: "We can make your website more visible.",
          intro_part1:
            "Need more costumers? Well there’s seo for that. In this way we can make your website more visible.",
          intro_part2: "",
          related_info: blogs,
        },
        third_section: {
          heading: "OUR APPROACH",
          sub_heading: "Creativity and Insights",
          intro:
            "By thinking outside of the box we find new and innovative solutions to make you stand out.",
          concept_info: "We suggest our idea and work it out.",
          build_info: "Along the way we change everything to your needs.",
          test_info: "Finally we review and correct everything.",
        },

        fourth_section: {},
      },
    },
  };
}
export default seo_sea;
