import * as React from "react";

const Footer = ({ bgColor, textColor }) => {
  return (
    <footer className={`h-12 mt-4 flex justify-center items-center ${bgColor} ${textColor}`}>
      <p>© {new Date().getFullYear()}, Nick Petalas</p>
    </footer>
  );
};

export default Footer;
