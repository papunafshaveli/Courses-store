import { CourseT } from "../../types/types";
import {
  CoursesContainer,
  Description,
  SingleCourse,
  StyledFooter,
} from "./styles";

type CoursesProp = {
  coursesData: CourseT[];
  currency: string;
};

const Courses: React.FC<CoursesProp> = ({ coursesData, currency }) => {
  return (
    <CoursesContainer>
      {coursesData.map((item) => (
        <SingleCourse key={item.id}>
          <h2>{item.title}</h2>

          <img src={item.img} alt="Course image" />
          <Description>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              perspiciatis quos animi, quia accusantium eius ipsum nostrum?
              Tenetur, similique, architecto repellendus a ducimus maxime
              laboriosam error, neque accusamus quo aut!
            </p>
          </Description>
          <StyledFooter>
            <span>
              {currency === "USD"
                ? item.price + " USD"
                : currency === "EUR"
                ? item.price + " EUR"
                : item.price + " GBP"}
            </span>
            <button>BUY</button>
          </StyledFooter>
        </SingleCourse>
      ))}
    </CoursesContainer>
  );
};

export default Courses;
