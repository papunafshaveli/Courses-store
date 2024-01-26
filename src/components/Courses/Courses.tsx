import React from "react";

import { CourseT } from "../../types/types";
import { CoursesContainer, StyledLink } from "./styles";
import Course from "../Course/Course";
import "react-lazy-load-image-component/src/effects/blur.css";

type CoursesProp = {
  coursesData: CourseT[];
  currency: string;
};

const Courses: React.FC<CoursesProp> = ({ coursesData, currency }) => {
  return (
    <CoursesContainer>
      {coursesData.map((item) => (
        <StyledLink to={`/courses/${item.title}`} key={item.id}>
          <Course currency={currency} item={item} />
        </StyledLink>
      ))}
    </CoursesContainer>
  );
};

export default Courses;
