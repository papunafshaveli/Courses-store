import styled from "styled-components";

export const CourseDetailsContainer = styled.div`
  animation: color 30s infinite linear;

  @keyframes color {
    0% {
      background: #349ad9;
    }
    20% {
      background: #065921;
    }
    40% {
      background: #098d9a;
    }
    60% {
      background: #fcca00;
    }
    80% {
      background: #6949a0;
    }
    100% {
      background: #9789af;
    }
  }

  min-height: 100vh;

  padding: 20px 5%;
`;

export const StyledHeader = styled.header`
  button {
    padding: 6px 18px;

    border: none;
    border-radius: 5px;

    cursor: pointer;

    font-size: 1.8rem;
    font-weight: 600;

    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;

export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Welcome = styled.div`
  background-color: grey;

  padding: 10px;

  margin-top: 150px;
  border: 5px;

  h1 {
    text-align: center;
    color: white;
  }
`;

export const Description = styled.div`
  padding: 20px;
  background-color: #9a94a4;

  p {
    font-size: 1.4rem;
  }
`;

export const H1 = styled.div`
  padding: 10px;
  background-color: #88886f;

  b {
    color: brown;
  }
`;
