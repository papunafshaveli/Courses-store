import styled from "styled-components";

export const SingleCourse = styled.div<{ $currency: string }>`
  margin-top: 50px;

  width: 200px;
  height: 285px;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  background-color: ${({ $currency }) =>
    $currency === "USD"
      ? "#066254"
      : $currency === "EUR"
      ? "#737658"
      : "#84CF39"};

  h2 {
    padding: 15px 10px;
    text-align: center;
  }
`;

export const Description = styled.div`
  background-color: #110714;

  width: 100%;
  height: 90px;

  padding: 10px;

  p {
    color: #e9e7e7;
  }
`;

export const StyledFooter = styled.footer<{ $currency: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  button {
    padding: 5px 16px;

    background-color: ${({ $currency }) =>
      $currency === "USD"
        ? "darkslategrey"
        : $currency === "EUR"
        ? "#88886f"
        : "#64A075"};

    border: none;
    border-radius: 5px;

    cursor: pointer;

    font-weight: 700;

    &:hover {
      background-color: #ded240;
      color: white;
    }
  }

  span {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
