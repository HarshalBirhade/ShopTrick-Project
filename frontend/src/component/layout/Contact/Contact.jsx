import React from "react";

import "./contact.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PublicIcon from "@material-ui/icons/Public";
import FaceIcon from "@material-ui/icons/Face";
import { Country } from "country-state-city";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <>
      <MetaData title="Contact Us" />
      <div className="contactContainer">
        <div className="contactBox">
          <h2 className="contactHeading">Contact Details</h2>

          <form className="contactForm">
            <div>
              <FaceIcon />
              <input type="text" placeholder="Name" required />
            </div>

            <div>
              <MailOutlineIcon />
              <input type="text" placeholder="Mail" required />
            </div>

            <div>
              <PublicIcon />
              <select required>
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <input type="submit" value="Submit" className="contactBtn" />
          </form>
        </div>
        <div className="mapBox">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863106.9576578713!2d70.57511746250002!3d18.994792100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be45411aef65%3A0x9f5046323b7e05c8!2sKnowledgeHut%20UpGrad!5e0!3m2!1sen!2sin!4v1682065165589!5m2!1sen!2sin"
            title="Google Maps"
            height="100%"
            width="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
