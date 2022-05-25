import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.css";
import ButtonSection from "../../molecules/buttonSection";

export default function TextSection() {
  return (
    <>
      <h1 className="section-title">Pemandian Sikabu</h1>
      <h6 className="pt-2 pb-5 fs-5 section-desc">
        Close to the city and the cool air with beautiful landscape provides an
        experience that you don't feel with your family. many more that we
        provide for your satisfaction and comfort, what are you waiting for,
        come and feel the fun
      </h6>
      <ButtonSection text='Order Now' />
    </>
  );
}
