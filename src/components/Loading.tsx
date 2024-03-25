import React from "react";
import { StartEnd } from "./Icons";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="icon-container">
        <div className="start">
          <StartEnd />
        </div>
        <div className="mid"></div>
        <div className="end">
          <StartEnd />
        </div>
      </div>
    </div>
  );
}
