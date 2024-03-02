import React from "react";
import Popup from "../components/Popup";

export default function PopupsManager(props: { children: React.ReactNode }) {
  return (
    <>
      <Popup />
      {props.children}
    </>
  );
}
