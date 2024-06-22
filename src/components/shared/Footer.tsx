import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-16 flex justify-center items-center text-white bg-cafe-secondary">
      © 2024 &nbsp;{" "}
      <a href="https://stencukpage.com" className="hover:underline">
        {" "}
        Alexandr Stenčuk{" "}
      </a>{" "}
      . All Rights Reserved.
    </footer>
  );
}
