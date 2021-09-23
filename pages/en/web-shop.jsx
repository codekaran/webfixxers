import WebShop from "../../components/WebShop";
import Head from "next/head";
const web_shop = (props) => {
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
        <title>Build Ecommerce WebSite | WebFixxers</title>
        <link rel="shortcut icon" href="/logo.png" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
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
        <meta
          name="description"
          content="Sell online, get your business global, get personalized shopping experience & increase your margins all you have to do is call us"
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
      <WebShop text={props.content}></WebShop>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      content: {
        path: "/en",
        first_section: {},
        second_section: {
          heading: "WHAT WE DO",
          sub_heading: "We can get your online store started in few days.",
          intro_part1:
            "The need to sell online has never been greater. So why not start with your own website ?",
          intro_part2:
            "No need to pay big commissions to some random company. Make your own website and build your brand. It’s never to late to start a website !",
          related_info: [
            {
              heading: "Get Started wth Ecwid",
              text:
                "Ecwid is not known to many businesses, but it should. This cost effective and easy to use program helps you managing the website. It allows you to put up content and put up new products. It’s great for small companies who don’t need a professional website right away. So let’s get started with selling !",
            },
            {
              heading: "Easy Payments with mollie",
              text:
                "This is the most needed item in any webshop. The payment system. It allows you to sell to anybody and everywhere without any problem. Mollie allows you to sell via many systems besides visa and bank contact.",
            },
            {
              heading: "Get Custom made web Shop",
              text:
                "So you really need a fully equipped webshop with everything you can imagine? No problem, we can do that too. It’s a great undertaking but the best investment you can make for your business.",
            },
          ],
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

export default web_shop;
