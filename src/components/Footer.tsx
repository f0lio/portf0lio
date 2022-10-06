import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { MaxWidthWrapper } from "./common/Containers";
import { SocialLink } from "./common/Links";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center">
      <MaxWidthWrapper>
        <hr className="w-full border border-primary-1/40" />
        <div className="grid w-full grid-cols-1 gap-4 px-1 pb-10 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <div
              className="flex w-full flex-row flex-wrap justify-center gap-6
			   px-8 pt-8 text-secondary md:flex-col md:justify-start md:gap-4 md:px-0"
            >
              <SocialLink
                label="F0lio"
                href="https://www.twitter.com/f0lio"
                icon={FaTwitter}
              />
              <SocialLink
                label="F0lio"
                href="https://www.github.com/f0lio"
                icon={FaGithub}
              />
              <SocialLink
                label="Omar Magoury"
                href="https://www.linkedin.com/in/omar-magoury"
                icon={FaLinkedin}
              />
              {/* <SocialLink
                href="mailto:contact@f0lio.me"
                label="contact@f0lio.me"
                icon={HiMail}
                className="line-through"
              /> */}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
