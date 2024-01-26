import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();
  console.log(courseId);
  return (
    <div>
      <p>{courseId}</p>
    </div>
  );
};

export default CourseDetails;
