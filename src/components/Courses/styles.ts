import styled from "styled-components";
import { device } from "../../device/device";
import { Link } from "react-router-dom";

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    margin: 0 auto;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
