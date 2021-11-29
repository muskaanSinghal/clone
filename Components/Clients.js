import startup from "./Images/startup.png";
import springboard from "./Images/springboard.png";
import oyo from "./Images/oyo.png";
import chakra from "./Images/chakra.png";
import dbs from "./Images/dbs.png";
import uber from "./Images/uber.png";
import ficci from "./Images/ficci.png";
import ap from "./Images/ap.png";
import "./CSS/style.css";

const Clients = function () {
  return (
    <div className="d-flex flex-column justify-content-around align-items-center clientsContainer">
      <h2>Trusted by 400,000 clients and counting, including …</h2>
      <div className="clients d-flex -flex-row justify-content-around align-items-center">
        <span>
          <img src={startup} />
        </span>
        <span>
          <img src={springboard} />
        </span>
        <span>
          <img src={oyo} />
        </span>
        <span>
          <img src={chakra} />
        </span>
        <span>
          <img src={dbs} />
        </span>
        <span>
          <img src={uber} />
        </span>
        <span>
          <img src={ficci} />
        </span>
        <span>
          <img src={ap} />
        </span>
      </div>
    </div>
  );
};

export default Clients;
