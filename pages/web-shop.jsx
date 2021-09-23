import WebShop from "../components/WebShop";
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
        <link rel="shortcut icon" href="/logo.png" />
        <title>Best webshop for your online shop</title>
        <meta
          name="description"
          content="Verkoop online en groei je zaak naar nieuwe hoogtes."
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
        path: "",
        first_section: {},
        second_section: {
          heading: "WHAT WE DOEN",
          sub_heading: "We starten je onlinewinkel in een paar dagen.",
          intro_part1:
            "De nood om online te verkopen is nog nooit groter geweest, dus waarom niet met een eigen webshop?",
          intro_part2: "Geen grote commissies of kosten. Enkel een basisplan.",
          related_info: [
            {
              heading: "Start met Ecwid",
              text:
                "U kent ecwid waarschijnlijk niet. Maar het is toch een super systeem. Hiermee kunt u voor een lage prijs uw webshop beheren en opstarten. Zo kunt U direct aan de slag met uw verkoop.",
            },
            {
              heading: "gemakkelijke betalingenmet mollie",
              text:
                "Het belangrijkste in elke webshop is de betalingterminal. Hiermee ontvangt U betalingen. Mollie is zeer handig omdat we meer dan alleen bancontact en visa kunnen ontvangen. Dus verkoopt U nationaal of Europees, mollie maakt het allemaal mogelijk.",
            },
            {
              heading: "Op maat gemaakt",
              text:
                "Voor een verdere professionalisering is het nodig om een volledig op maat gemaakte webshop te nemen. Heeft U al een boeking-systeem, boekhouding,kassa,stockbeheerder? Dan kan dit allemaal samengevoegd worden tot 1 werkend geheel. Zo hoeft U enkel maar bezig te zijn met de verkoop.",
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

export default web_shop;
