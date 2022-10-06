import React, { useState } from "react";

import classNames from "classnames";
import { motion } from "framer-motion";
import Head from "next/head";

import { MaxWidthWrapper } from "@components/common/Containers";

import Footer from "./Footer";
import Navbar from "./Navbar";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0.2 } },
  exit: { opacity: 0 },
};

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Toaster
        toastOptions={{ position: "top-left", style: { color: "#f00" } }}
      /> */}
      <Head>
        <title>{props.pageTitle}</title>
        <meta
          name="description"
          content={props.description || "Omar Magoury website"}
        />
        <meta
          name="keywords"
          content={props.keywords || "portfolio, developer, resume"}
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          data-domain="portf0lio.vercel.app"
          src="https://plausible.io/js/plausible.js"
        />
      </Head>
      <div
        className={classNames(
          "relative min-h-screen w-full flex-col justify-center bg-black",
          {
            "h-screen overflow-hidden": isOpen,
          }
        )}
      >
        <Navbar
          pageName={props.pageName}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          className="flex w-full flex-col items-center justify-center px-8 py-16"
        >
          <MaxWidthWrapper>{props.children}</MaxWidthWrapper>
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
