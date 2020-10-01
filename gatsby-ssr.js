
import React from "react";
import LayoutWrapper from "./src/LayoutWrapper";

export const wrapPageElement = ({ element }) => (
  <LayoutWrapper>{element}</LayoutWrapper>
);

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setPostBodyComponents([
    <div id="tk"></div>,
  ])
}