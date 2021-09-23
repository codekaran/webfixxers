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

export async function getStaticProps() {
  return {
    props: {
      content: {
        path: "",
        first_section: {},
        second_section: {
          heading: "WAT WE DOEN",
          sub_heading:
            "wij maken websites op maat, om uw zaak op het internet te profileren.",
          intro_part1:
            "A website is more than just a marketplace it’s a face of your company. A good website nowadays is as important as a good service. The first thing many people do is to search your company and then come to you personally.",
          intro_part2:
            "So why not make a fully equipped and beautiful website. This allows you to get new customers more easily and keep the standards high for the current ones.",
          related_info: [
            {
              heading: "Your Ideas",
              text:
                "Wij bij webfixxers geloven dat een website gemaakt wordt door de klant en ons. Wij vragen daarom om met ons een goed gesprek te hebben over uw noden. De design, de zaak, de noden en wat U graag heeft. Het moet allemaal besproken worden zodat wij uw een top website kunnen leveren. Wees daarom niet bang om ons te contacteren. Wij zijn altijd open voor vragen.",
            },
            {
              heading: "Budget",
              text:
                "Wij geloven dat het internet voor iedereen is. Juist daarom maken we websites beschikbaar voor iedereen. Van een goedkope website naar de meest geavanceerde webshop mogelijk. Wij willen een zo goed mogelijke dienst verlenen aan de beste prijs. Dus neem met ons contact en we beantwoorden al uw vragen.",
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

export default web_design;
