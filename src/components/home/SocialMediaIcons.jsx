/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { socialMediaLinks } from "../../portfolio";

const SocialIcons = () => {
  return (
    <div className="mb-3">
      {socialMediaLinks.map((item) => {
        return (
          <a href={item.link} className="icon-button github" target="_blank">
            <span
              className="iconify"
              data-icon={item.IconifyClassname}
              data-inline="false"
              style={{
                backgroundColor: item.bgColor,
              }}
            ></span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
