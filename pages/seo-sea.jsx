import SEO_SEA from "../components/SEO_SEA";
import Head from "next/head";

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
        <title>SEO & SEA voor uw WebSite</title>
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="description"
          content="WebFixxers SEO tool. Stijg naar de top van google en laat je concurrenten achter."
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
  return {
    props: {
      content: {
        path: "",
        first_section: {},
        second_section: {
          heading: "WHAT WE DOEN",
          sub_heading: "Wij maken je website beter zichtbaar.",
          intro_part1: "Meer klanten nodig? Geen probleem.",
          intro_part2: "",
          related_info: [
            {
              heading: "SEO",
              text:
                "SEO helpt zoekmachines je website beter begrijpen en voorstellen aan klanten. Zo kan je door de juiste woorden te gebruiken je doelgroep bereiken.",
            },
            {
              heading: "SEA",
              text:
                "SEA is simpelweg reclame maken via google. Door een budget op te stellen kan je nieuwe klanten binnenhalen en je verkoop opkrikken.",
            },
            {
              heading: "Gode Ranking",
              text:
                "Samen met deze instrumenten kan je jezelf onhoog halen in google en goed zichtbaar zijn op het internet.",
            },
          ],
        },
        third_section: {
          heading: "Onze aanpak",
          sub_heading: "Creativiteit en inzichten",
          intro:
            "Met ons out of the box denken maken we je uitstaan van de rest.",
          concept_info: "We stellen een idee voor en werken het samen uit.",
          build_info: "Samen maken we alles op maat voor uw noden.",
          test_info: "Uiteindelijk zetten we nog de puntjes op de i.",
        },

        fourth_section: {},
      },
    },
  };
}
export default seo_sea;
