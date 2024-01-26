import { useParams } from "react-router-dom";
import styled from "styled-components";

const CourseDetails = () => {
  const { courseId } = useParams();
  console.log(courseId);
  return (
    <CourseDetailsContainer>
      <h1>{courseId}</h1>
    </CourseDetailsContainer>
  );
};

export default CourseDetails;

const CourseDetailsContainer = styled.div`
  background-color: #88886f;

  height: 100vh;
`;
