import React from "react";
import Layouts from "../_layouts/layout";
import ContactMap from "../_components/contactmap";
import ContactUs from "../_components/contactus";
import Newletter from "../_components/newletter";

const Contact = () => {
  return (
    <Layouts>
      <main>
        <ContactMap />
        <ContactUs />
        <Newletter />
      </main>
    </Layouts>
  );
};

export default Contact;
