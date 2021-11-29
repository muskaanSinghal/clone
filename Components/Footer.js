import vakil from "./Images/vakil.svg";
const Footer = function () {
  return (
    <div className="footer">
      <h4 className="mx-5">
        <img src={vakil} className="thumbnail" />
      </h4>
      <div className="d-flex flex-row justify-content-around align-items-center">
        <div>
          <h5>Start a business</h5>
          <hr />

          <ul>
            <li>Private Limited Company</li>
            <li>Limited Liability Partnership</li>
            <li>One Person Company</li>
            <li>Partnership Firm</li>
            <li>Proprietorship Firm</li>
          </ul>
        </div>

        <div>
          <h5>Trademark & Copyright</h5>
          <hr />

          <ul>
            <li>Trademark Registration</li>
            <li> Trademark Objection </li>
            <li> Trademark Assignment</li>
            <li>Trademark Renewal</li>
            <li> Copyright Registration</li>
          </ul>
        </div>
        <div>
          <h5>Govt & Tax Registration</h5>
          <hr />

          <ul>
            <li>GST Registration</li>
            <li> TDS Return Importer </li>
            <li>Exporter Code Professional</li>
            <li>Tax Registration</li>
            <li> Shops & Establishments Registration</li>
          </ul>
        </div>
        <div>
          <h5>Legal documentation</h5>
          <hr />

          <ul>
            <li> Non-Disclosure Agreement</li>
            <li>Founders Agreement</li>
            <li>Term Sheet</li>
            <li>Shareholders Agreement</li>
            <li>Share Purchase Agreement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
