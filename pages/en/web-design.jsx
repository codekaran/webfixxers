import WebDesign from "../../components/WebDesign";
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
        <title>Best WebDesign for your WebSite</title>
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="description"
          content="A good web design can do wonders for your business & we can help you achieve that as we provide the best web designs"
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

export async function getStaticProps() {
  return {
    props: {
      content: {
        path: "/en",
        first_section: {},
        second_section: {
          heading: "WHAT WE DO",
          sub_heading:
            "We design websites to your needs, so that you can display your business on the internet.",
          intro_part1:
            "A website is more than just a marketplace it’s a face of your company. A good website nowadays is as important as a good service. The first thing many people do is to search your company and then come to you personally.",
          intro_part2:
            "So why not make a fully equipped and beautiful website. This allows you to get new customers more easily and keep the standards high for the current ones.",
          related_info: [
            {
              heading: "Your Ideas",
              text:
                "Here at webfixxers we believe that a website should be made together with our clients. In this way we ensure everything is made to your liking. If you need a webshop, website or help. No problem for us. We’ll sculpt and finish the website along the way. So we can offer you the best products, we will need to come together and talk about your needs and wishes. So don’t hesitate to contact us.",
            },
            {
              heading: "Budget",
              text:
                "Not everyone has the same budget. That's why, we at webfixxers offer you a variety of affordable and full fledged multi fuctional websites. When the websites move from being simple to more custom made with multiple windows the cost increases as it is labour intensive. But, don't you worry as we will get everything made for you within your budget so it fits perfect.",
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

export default web_design;
