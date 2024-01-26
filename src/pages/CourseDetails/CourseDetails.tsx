import { useNavigate, useParams } from "react-router-dom";

import {
  CourseDetailsContainer,
  Description,
  H1,
  StyledHeader,
  StyledMain,
  Welcome,
} from "./styles";

const CourseDetails = () => {
  const { courseId } = useParams();
  console.log(courseId);
  const navigate = useNavigate();
  return (
    <CourseDetailsContainer>
      <StyledHeader>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          back
        </button>
      </StyledHeader>
      <StyledMain>
        <Welcome>
          <H1>
            <h1>
              Welcome to the Course - <b>{courseId}</b>
            </h1>
          </H1>
          <Description>
            <p>
              <b>Course Description: </b> Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Optio iure possimus labore earum
              veritatis blanditiis quibusdam? Officia, assumenda autem cumque
              voluptates facilis aspernatur ut, officiis optio facere incidunt
              voluptas iste? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dolore, molestias nulla architecto officia amet obcaecati
              ullam veritatis. Animi harum veniam eaque! Ex a enim voluptatem
              ratione sit expedita nesciunt est. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Cumque necessitatibus atque aut
              nobis ipsam. Quas aliquid nobis quia natus quo mollitia
              perspiciatis ut, doloremque veniam dolor nemo laudantium dolores
              minus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis qui a, doloremque quos eum cum, saepe sunt debitis
              quaerat quasi nemo facilis autem omnis aspernatur. Nihil accusamus
              placeat odit nulla. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Esse beatae nihil ad! Perferendis rem vero,
              nulla veniam totam corrupti itaque illum eaque voluptas,
              voluptatem quae! Officia veniam ducimus quas rerum. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sed vero dolor
              doloremque quibusdam saepe dolorem veritatis, officia ipsum
              necessitatibus, ipsam quia molestias recusandae? Quis expedita
              debitis quas, sunt non fugiat.
            </p>
          </Description>
        </Welcome>
      </StyledMain>
    </CourseDetailsContainer>
  );
};

export default CourseDetails;
