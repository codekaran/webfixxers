import classes from "./BottomContact.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomContact = (props) => {
  // console.log(props);
  let router = useRouter();
  console.log(router.locale);
  return (
    <div className={classes.bottom_contact_container}>
      <div className={classes.section}>
        <div className={classes.logo_container}>
          <div className={classes.logo}></div>
          <Link href="/">
            <div className={classes.section_heading}>WebFixxers</div>
          </Link>
        </div>
        <div className={classes.social_contact}>
          <div
            onClick={() => window.open("https://wa.me/32471249262", "_blank")}
            className={classes.footer_whatsapp}
          ></div>
          <div className={classes.footer_linkedIn}></div>
          <div className={classes.footer_fb}></div>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.section_heading}>Links</div>
        <div className={classes.links}>
          <Link href="/">Home</Link>
          <Link href="/services">
            {router.locale === "en" ? "Services" : "Diensten"}
          </Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">
            {router.locale === "en" ? "About" : "Over ons"}
          </Link>
          <Link href="/contact">Contact</Link>
          <Link href="/seo-sea">SEO & SEA</Link>
          <Link href="/web-design">Web Design</Link>
          <Link href="/web-shop">Web Shop</Link>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.section_heading}>Address</div>
        <div className={classes.section_value}>
          Provinciebaan 210, <br></br>8880 Ledegem,<br></br> Belgium<br></br>{" "}
          <a className={classes.contact_hover} href="tel:0471249262">
            Contact: 0471249262
          </a>{" "}
          <br />{" "}
          <a
            className={classes.contact_hover}
            href="mailto:info@webfixxers.com"
          >
            Email: info@webfixxers.com
          </a>
        </div>
      </div>
      <div className={classes.bottom_text}>
        Copyrights@2021. All rights are reserved.
      </div>
    </div>
  );
};

export default BottomContact;
