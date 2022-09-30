import React from "react";

import Link from "@components/common/Link";
// import Draggable from "react-draggable";

const DockItem = ({ children, href }) => {
  return (
    <div>
      <button className="rounded-md border-2 px-3 py-2 shadow-sm hover:shadow-md">
        <Link href={href}>{children}</Link>
      </button>
    </div>
  );
};

const Dock = () => {
  return (
    <footer className="flex justify-center">
      <ul className="flex justify-center gap-x-4">
        <DockItem href="/">Home</DockItem>
        <DockItem href="/projects">Projects</DockItem>
        <DockItem href="/photos">Photos</DockItem>
        <DockItem href="/stuff">Stuff</DockItem>
      </ul>
    </footer>
  );
};

export default Dock;
