import classes from "./Contact.module.css";
import Header from "../sub_components/Header";
import image_url from "../images/contact_header.png";
import Button from "../sub_components/Button";
import GoogleMap from "../sub_components/GoogleMap";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import parser from "react-html-parser";

const Contact = (props) => {
  console.log(props);
  let { sections, path } = props.text;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };
  const handleCaptcha = () => {
    setIsVerified(true);
  };
  const handleExpired = () => {
    setIsVerified(false);
  };

  const sendMessage = () => {
    console.log(name, email, message, isVerified);
    if (isVerified && name && email && message) {
      window.Email.send({
        SecureToken: "07b5640b-61c5-4879-97fb-c003f9917679",
        To: "info@webfixxers.com",
        From: "info@webfixxers.com",
        Subject: "Email from " + name,
        Body: message + " sender email : " + email,
      })
        .then((message) => alert("message sent"))
        .catch((error) => {
          console.log(error);
        });
    } else if (!isVerified) {
      alert("Please verify you are a human");
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <Header
        heading={parser(sections[0].Heading)}
        image_url={image_url}
      ></Header>
      <div className={classes.contact_form_container}>
        <div className={classes.contact_form_description}>
          <h6 className="small_heading">{parser(sections[1].Heading)}</h6>
          <h3 className="large_heading">{parser(sections[1].SubHeading)}</h3>
          <div className="info">
            <span style={{ fontWeight: "bold" }}>
              {parser(sections[1].IntroPart1)}
            </span>
            <br></br>
            <br></br>
            {parser(sections[1].IntroPart2)}
          </div>
          <div className={classes.border}></div>
          <div className={classes.contact_follow_us}>Follow us</div>
          <div className={classes.social_link}>
            <div className={classes.social_fb}></div>
            <div
              onClick={() => window.open("https://wa.me/32471249262", "_blank")}
              className={classes.social_whatsapp}
            ></div>
            <div className={classes.social_linked}></div>
          </div>
        </div>
        <div className={classes.contact_form}>
          <div>
            <label htmlFor="">Name</label>
            <br></br>
            <input
              onChange={nameChangeHandler}
              className={classes.input_text}
              type="text"
            />
          </div>
          <div style={{ marginTop: "8%" }}>
            <label htmlFor="">Email</label>
            <br></br>
            <input
              onChange={emailChangeHandler}
              className={classes.input_text}
              type="text"
            />
          </div>
          <div style={{ marginTop: "8%" }}>
            <label htmlFor="">Message</label>
            <br></br>
            <textarea
              onChange={messageChangeHandler}
              className={classes.input_text_area}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <ReCAPTCHA
            style={{ marginTop: "5%" }}
            sitekey="6LfZMjscAAAAAJdm3sSX0HstTN9CM7FuCoPXEt7Q"
            onChange={handleCaptcha}
            onExpired={handleExpired}
          />

          <div style={{ marginTop: "8%" }}>
            <Button
              buttonAction={sendMessage}
              buttonText="Send Message"
              backgroundColor="#032436"
              color="white"
            ></Button>
          </div>
        </div>
      </div>

      <div className={classes.contact_connect}>
        <div className={classes.address}>
          <div className={classes.address_icon}></div>
          <h5 className={classes.address_heading}>Address</h5>
          <div className={classes.address_value}>
            Provinciebaan 210,
            <br />
            8880 Ledegem,
            <br />
            Belgium
          </div>
        </div>
        <div className={classes.contact_number}>
          <div className={classes.contact_number_icon}></div>
          <h5 className={classes.contact_number_heading}>Contact Number</h5>
          <div className={classes.contact_number_value}>
            {" "}
            <a href="tel:0471249262">0471249262</a>{" "}
          </div>
        </div>
        <div className={classes.contact_email}>
          <div className={classes.contact_email_icon}></div>
          <h5 className={classes.contact_email_heading}>Email</h5>
          <div className={classes.contact_email_value}>
            <a href="mailto:info@webfixxers.com">info@webfixxers.com</a>
          </div>
        </div>
      </div>

      <GoogleMap></GoogleMap>
    </>
  );
};

export default Contact;
