import Contact from "../components/Contact";
import Head from "next/head";

const contact = (props) => {
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
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        <title>Een WebSite voor elk Budget</title>
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="description"
          content="Call us - +32/0/471249262 or email us - info@webfixxers.com for the best prices for your website."
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };`,
          }}
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KCSWVWS"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <Contact text={props.content}></Contact>
    </>
  );
};

export async function getStaticProps() {
  let data = {};
  try {
    let res = await fetch(
      "https://webfixxers-cms.herokuapp.com/getData?page=contact&lang=nl"
    );
    res = await res.json();
    data = JSON.parse(res.data);
    data["path"] = "";
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      content: data,
    },
  };
}

export default contact;
