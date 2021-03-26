import React from "react";

import styled from "styled-components";

const IconWrapp = styled.img.attrs((props) => ({
  src: props.url,
}))`
  display: inline-block;
`;

const Icon = ({ url, ...props }) => {
  return <IconWrapp url={url} {...props} />;
};

export default Icon;
