import React from "react";
import homePageData from "../data/HomePagdData.json";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="m-0 text-center">
          copyright © {new Date().toDateString().split(" ")[3]}&nbsp;
          {homePageData.contact.contactInfo[0].email}
        </p>
      </div>
    </footer>
  );
}
