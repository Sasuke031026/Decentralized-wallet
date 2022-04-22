import React, { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../Layout/header";
import Switch from "../../components/Switch";
import Header from "../../components/Home/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./setting.scss";

const Security = () => {
  const [toggle, setValue] = useState(false);
  return (
    <>
      <Layout>
        <Header />
        <div className="setting-general">
          <div className="card">
            <div className="general-title">
              <Link
                to="/setting/land"
                style={{ textAlign: "center", marginLeft: "10px" }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                Security & Privacy
              </Link>
              <Link to="/home">&times;</Link>
            </div>
            <div className="general-content">
              <div className="general-content-item">
                <span>Reveal Secret Recovery Phrase</span>
              </div>
              <div className="general-content-item">
                <button className="sucess-button">
                  Reveal Secret Recovery Phrase
                </button>
              </div>
              <div className="general-content-item">
                <span>Show Incoming Transactions</span>
                <span className="general-content-description">
                  Select this to use Etherscan to show incoming transactions in
                  the transactions list
                </span>
              </div>
              <div className="general-content-item">
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="general-content-item">
                <span>Use Phishing Detection</span>
                <span className="general-content-description">
                  Display a warning for phishing domains targeting Ethereum
                  users
                </span>
              </div>
              <div className="general-content-item">
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="general-content-item">
                <span>Participate in MetaMetrics</span>
                <span className="general-content-description">
                  Participate in MetaMetrics to help us make MetaMask better
                </span>
              </div>
              <div className="general-content-item">
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Security;
