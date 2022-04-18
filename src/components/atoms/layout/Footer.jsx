import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2021 text Inc.</SFooter>;
};

const SFooter = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
