import classes from "./HomeClients.module.css";
import parser from "react-html-parser";
const HomeClients = (props) => {
  let { Heading, SubHeading } = props.text;
  return (
    <div className={classes.home_clients_container}>
      <h6 className="small_heading">{parser(Heading)}</h6>
      <h3 className="large_heading">{parser(SubHeading)}</h3>
      <div className={classes.client_list}>
        <div className={classes.client_container}>
          <div className={classes.client_logo}></div>
          <div className={classes.client_name}>Wallyn Car Export</div>
        </div>
        <div className={classes.client_container}>
          <div className={classes.client_logo}></div>
          <div className={classes.client_name}>Wallyn Car Export</div>
        </div>
        <div className={classes.client_container}>
          <div className={classes.client_logo}></div>
          <div className={classes.client_name}>Wallyn Car Export</div>
        </div>
        <div className={classes.client_container}>
          <div className={classes.client_logo}></div>
          <div className={classes.client_name}>Wallyn Car Export</div>
        </div>
      </div>
    </div>
  );
};

export default HomeClients;
