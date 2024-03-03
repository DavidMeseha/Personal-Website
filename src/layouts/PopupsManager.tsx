import React from "react";
import Popup from "../components/Popup";
import UsePopups from "@/hooks/usePopups";

export default function PopupsManager(props: { children: React.ReactNode }) {
  const { graphicProject } = UsePopups();

  return (
    <>
      {graphicProject.show && <Popup />}
      {props.children}
    </>
  );
}
