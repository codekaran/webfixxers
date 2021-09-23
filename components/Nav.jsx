import classes from "./Nav.module.css";
import Link from "next/link";
import { Component } from "react";

class Nav extends Component {
  state = {
    burgerClass: "none",
    mobileMenu: "100%",
    bigLine1Cross: "",
    bigLine2Cross: "",
    smallLineCross: "1",
    pageOffset: "",
    navbarScrollStyle: "0",
    path: "",
    en_class: "",
    nl_class: "",
    drop_down_class: classes.drop_down,
    arrow_class: classes.link_arrow,
  };

  componentDidMount() {
    this.handleResize();
    this.checkLanguage();
    this.setState({ path: this.props.path });
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  }

  checkLanguage = (lang) => {
    let pathLang = lang || this.props.path;
    console.log("path Lang = ", pathLang);
    let en_class = "";
    let nl_class = "";
    if (pathLang === "/en") {
      console.log("english");
      en_class = classes.language_text + " " + classes.active_language;
      nl_class = classes.language_text + " " + classes.inactive_language;
    } else {
      console.log("dutch");
      en_class = classes.language_text + " " + classes.inactive_language;
      nl_class = classes.language_text + " " + classes.active_language;
    }
    this.setState({ en_class, nl_class });
  };

  handleScroll = () => {
    if (window.pageYOffset >= 0) {
      const newValue = window.pageYOffset;
      let oldValue = this.state.pageOffset;
      const val = newValue > oldValue ? "-65px" : "0";
      this.setState({ navbarScrollStyle: val, pageOffset: newValue });
    }
  };
  handleDropDown = () => {
    let drop_down_class =
      this.state.drop_down_class === classes.drop_down
        ? classes.drop_down_click + " " + classes.drop_down
        : classes.drop_down;
    let arrow_class =
      this.state.arrow_class === classes.link_arrow
        ? classes.link_arrow_click + " " + classes.link_arrow
        : classes.link_arrow;
    this.setState({ drop_down_class, arrow_class });
  };

  handleResize = () => {
    let burgerClass = "";
    let mobileMenu = "%";
    if (window.innerWidth < 768) {
      burgerClass = "flex";
      mobileMenu = "100%";
    } else {
      burgerClass = "none";
      mobileMenu = "0%";
    }
    this.setState({ burgerClass, mobileMenu });
  };

  handleBurgerClick = () => {
    if (window.innerWidth < 768) {
      let mobileMenu = this.state.mobileMenu === "0%" ? "100%" : "0%";

      let bigLine1Cross =
        this.state.bigLine1Cross === "" ? "rotate(45deg) translateY(12px)" : "";
      let bigLine2Cross =
        this.state.bigLine2Cross === ""
          ? "rotate(-45deg) translateY(-12px)"
          : "";
      let smallLineCross = this.state.smallLineCross === "1" ? "0" : "1";
      this.setState({
        mobileMenu,
        bigLine1Cross,
        bigLine2Cross,
        smallLineCross,
        drop_down_class: classes.drop_down,
        arrow_class: classes.link_arrow,
      });
    }
  };

  render() {
    return (
      <nav
        style={{ transform: `translateY(${this.state.navbarScrollStyle})` }}
        className={classes.navbar_container}
      >
        <Link href={this.props.path + "/"}>
          <div className={classes.logo_container}>
            <div className={classes.logo}></div>
            <div className={classes.logo_heading}>WebFixxers</div>
          </div>
        </Link>
        <div
          style={{ transform: `translateX(${this.state.mobileMenu})` }}
          className={classes.links}
        >
          <Link href={this.props.path + "/"}>
            <a
              className={classes.link + " " + classes.home_link}
              onClick={this.handleBurgerClick}
            >
              Home
            </a>
          </Link>
          <div className={classes.link + " " + classes.service_link}>
            <Link href={this.props.path + "/services"}>
              <a
                onClick={() => {
                  this.handleBurgerClick();
                }}
              >
                {this.props.path === "/en" ? "Services" : "Diensten"}
              </a>
            </Link>
            <span
              onClick={this.handleDropDown}
              className={this.state.arrow_class}
            ></span>
            <div className={this.state.drop_down_class}>
              <Link href={this.props.path + "/web-design"}>
                <a onClick={this.handleBurgerClick}>Web Design</a>
              </Link>
              <Link href={this.props.path + "/web-shop"}>
                <a onClick={this.handleBurgerClick}>Web Shop</a>
              </Link>
              <Link href={this.props.path + "/seo-sea"}>
                <a onClick={this.handleBurgerClick}>SEO & SEA</a>
              </Link>
            </div>
          </div>
          <Link href={this.props.path + "/about"}>
            <a className={classes.link} onClick={this.handleBurgerClick}>
              {this.props.path === "/en" ? "About" : "Over ons"}
            </a>
          </Link>
          {/* <Link href={this.props.path + "/pricing"}>
            <a className={classes.link} onClick={this.handleBurgerClick}>
              Pricing
            </a>
          </Link> */}
          <Link href={this.props.path + "/contact"}>
            <a className={classes.link} onClick={this.handleBurgerClick}>
              Contact
            </a>
          </Link>
          <div className={classes.language_selector}>
            <div
              onClick={() => {
                this.handleBurgerClick();
                this.props.updateURL(window.location.pathname, "/en");
                this.checkLanguage("/en");
              }}
              className={this.state.en_class}
            >
              EN
            </div>

            <div
              onClick={() => {
                this.handleBurgerClick();
                this.props.updateURL(window.location.pathname, "");
                this.checkLanguage("/");
              }}
              style={{ marginLeft: "5px" }}
              className={this.state.nl_class}
            >
              NL
            </div>
          </div>
        </div>
        <div
          onClick={this.handleBurgerClick}
          style={{ display: this.state.burgerClass }}
          className={classes.burger}
        >
          <div
            style={{ transform: this.state.bigLine1Cross }}
            className={classes.big_line}
          ></div>
          <div
            style={{ opacity: this.state.smallLineCross }}
            className={classes.small_line}
          ></div>
          <div
            style={{ transform: this.state.bigLine2Cross }}
            className={classes.big_line}
          ></div>
        </div>
      </nav>
    );
  }
}

export default Nav;
