import React from "react";

export default function SectionTitle({ children }) {
  return (
    <div className="text-uppercase col-12 font-weight-bold text-center p-1 m-1 border-bottom">
      {children}
    </div>
  );
}
