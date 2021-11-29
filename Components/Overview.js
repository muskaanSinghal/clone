import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckCircle,
  faHome,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

const Overview = React.forwardRef((props, ref) => {
  const element = document.querySelector("#overview");

  return (
    <div ref={ref} data-spy="scroll" data-target="#navSection">
      <section id="overview">
        <h2>An Overview:</h2>
        <p className="text-justify">
          The structure of the one person company (OPC) in recent times was
          launched as a refinement of the structure of a sole proprietorship
          firm. In an OPC, a single promoter gains full authority over the
          company thereby, restricting his/her liability towards their
          contributions to the enterprise. Therefore, the said person will be
          the sole shareholder and director (however, a director nominee is
          present, but has zero power until the real director proves incapable
          of carrying on). Also, there can be no opportunity for contributing to
          employee stock options or equity funding. Additionally, if an OPC has
          an average turnover of ₹2 crores thrice in a row and over or acquires
          a paid-up fund of ₹50 lakh and over, it has to be converted to a
          private limited company or public limited company within six months.
        </p>
      </section>
      <section>
        <section className="benifits">
          <h2>Benefits of OPC Registration</h2>
          <ul>
            <li>
              <h3>
                <FontAwesomeIcon icon={faHome} />
                Limited Liability
              </h3>
              <p>
                The directors' personal property is always safe in a private
                limited company, no matter the debts of the business.
              </p>
            </li>
            <li>
              <h3>
                {" "}
                <FontAwesomeIcon icon={faCheck} />
                Continuous Existence
              </h3>
              <p>
                Sole Proprietorships come to an end with the death of the
                proprietor. As an OPC company has a separate legal identity, it
                would pass on to the nominee director and, therefore, continue
                to exist.
              </p>
            </li>
            <li>
              <h3>
                <FontAwesomeIcon icon={faRupeeSign} />
                Greater Credibility
              </h3>
              <p>
                As an OPC needs to have its books audited annually, it has
                greater credibility among vendors and lending institutions.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Documents Required for OPC Registration</h2>
          <ul>
            <li>PAN card or passport</li>
            <li>Passport, for NRIs and foreign nationals</li>
            <li>Scanned transcript of driver's license or voter’s ID</li>
            <li>
              Updated gas or electricity invoice/bank account statement/mobile
              or landline phone invoice
            </li>
            <li>Specimen signature or impression</li>
            <li>Passport-size photo.</li>
          </ul>

          <p>
            <b>Please Note: </b>
            The OPC director must self-attest to the first three documents. All
            paperwork for a foreign citizen or NRI must be notarised (if they
            are currently residing in India or a non-commonwealth country) or
            apostilled (if living in a commonwealth country at present).
          </p>
        </section>

        <section>
          <h2>Documents Necessary for the Registered Office</h2>
          <ul>
            <li>
              Scanned transcript of current bank account statement/phone or
              mobile invoice/gas or electricity invoice
            </li>
            <li>
              Scanned transcript of rental agreement written in the English
              language
            </li>
            <li>
              Scanned transcript of a no-objection certificate from the
              concerned property landowner
            </li>
            <li>
              Scanned transcript of property or sale deed printed in English (if
              the property is owned).
            </li>
          </ul>

          <p>
            <b>Note :</b>
            Your registered office space needs to be a commercial premises;
            however, it can be the sole director’s place of residence as well.
          </p>
        </section>
        <section>
          <h2>Process for One Person Company Incorporation</h2>
          <ul>
            <li>
              <b>Step 1:</b>
              Check eligibility and documents
            </li>
            <li>
              <b>Step 2:</b>
              Apply for DSC & DIN of all the directors
            </li>
            <li>
              <b>Step 3:</b>
              Application for name reservation
            </li>
            <li>
              <b>Step 4:</b>
              File Spice+ form for company incorporation
            </li>
            <li>
              <b>Step 5:</b>
              Apply PAN and TAN for your new company
            </li>
            <li>
              <b>Step 6:</b>
              RoC issues a certificate of incorporation with a PAN and TAN
            </li>
            <li>
              <b>Step 7:</b>
              Open bank account and start operation.
            </li>
          </ul>
        </section>
        <section>
          <h2>Package Inclusion</h2>
          <ul>
            <li>Directors identification number for 1 director</li>
            <li>
              sDigital signature certificate for 1 director (If the shareholders
              are different from directors, then additional DSC is required for
              shareholders)
            </li>
            <li>sGuidance for choosing the company name</li>
            <li>sPAN and TAN</li>
            <li>
              sDrafting the memorandum & articles of association, RoC filing
              fees for an authorized capital, government stamp duty, and
              certificate of incorporation
            </li>
            <li>sName approval certificate</li>
            <li>sGST registration</li>
            <li>sPF registration</li>
            <li>sESI registration</li>
            <li>sPT registration (only applicable in Maharashtra)</li>
            <li>
              sDBS or ICICI zero balance current account [powered by
              Vakilsearch].
            </li>
          </ul>
        </section>
        <section>
          <h2>Why Vakilsearch?</h2>
          <ul>
            <li>
              For your one person company, we submit an application for name
              approval
            </li>
            <li>
              We draft the MoA (Memorandum of Association) and AoA (Articles of
              Association)
            </li>
            <li>
              We file the incorporation documents with the MCA for you. The PAN
              and TAN are allocated simultaneously
            </li>
            <li>
              We will keep you informed about the status of your OPC
              Registration.
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
});

export default Overview;
