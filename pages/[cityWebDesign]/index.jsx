import Home from "../../components/Home";
import Head from "next/head";

const index = (props) => {
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
        <title>{props.content.meta.title}</title>
        <meta name="description" content={props.content.meta.description} />
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
        <script
          dangerouslySetInnerHTML={{
            __html: `var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };`,
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
      <Home text={props.content}></Home>
    </>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          cityWebDesign: "webdesign-ledegem",
        },
        locale: "en",
      },
      {
        params: {
          cityWebDesign: "webdesign-ledegem",
        },
        locale: "nl",
      },
      {
        params: {
          cityWebDesign: "webdesign-roeselare",
        },
        locale: "en",
      },
      {
        params: {
          cityWebDesign: "webdesign-roeselare",
        },
        locale: "nl",
      },
    ],
  };
}
export async function getStaticProps(context) {
  let title = "";
  let description = "";
  const lang = context.locale === "nl" ? "nl" : "en";
  if (context.params.cityWebDesign === "webdesign-roeselare") {
    title = "WebDesign Roeselare | WebFixxers";
    description =
      "Super webdesign in Roeselare. Wij maken 1top designs 2 seo en sea hulp 3verkoop online met ecwid of uw eigen webshop";
  } else if (context.params.cityWebDesign === "webdesign-ledegem") {
    title = "WebDesign Ledegem | WebFixxers";
    description =
      "Super webdesign in Ledegem. Wij maken 1top designs 2 seo en sea hulp 3verkoop online met ecwid of uw eigen webshop";
  }
  let data = {};
  try {
    let res = await fetch(
      "http://localhost:8000/getData?website=webfixxers&page=home&lang=" + lang
    );
    res = await res.json();
    console.log(res);
    data = JSON.parse(res.data);
    console.log(res);
    data["path"] = "";
    data.meta.title = title;
    data.meta.description = description;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      content: data,
    },
  };
}

export default index;
