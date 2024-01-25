import styled from "styled-components";

export const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  margin: 0 auto;
`;

export const SingleCourse = styled.div`
  margin-top: 50px;

  width: 200px;
  height: 285px;

  border: none;
  border-radius: 6px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  background-color: antiquewhite;

  h2 {
    padding: 15px 10px;
    text-align: center;
  }

  img {
    width: 100%;
    height: 100px;
    padding: 0 2px;
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

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  button {
    padding: 5px 16px;

    background-color: greenyellow;

    border: none;
    border-radius: 5px;

    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
