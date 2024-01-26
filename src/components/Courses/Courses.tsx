import React from "react";

import { CourseT } from "../../types/types";
import { CoursesContainer } from "./styles";
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
        <Course currency={currency} item={item} key={item.id} />
      ))}
    </CoursesContainer>
  );
};

export default Courses;
