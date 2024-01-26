import { LazyLoadImage } from "react-lazy-load-image-component";
import { Description, SingleCourse, StyledFooter } from "./styles";
import { CourseT } from "../../types/types";

const Course = ({ currency, item }: { currency: string; item: CourseT }) => {
  return (
    <SingleCourse $currency={currency}>
      <h2>{item.title}</h2>

      <LazyLoadImage
        src={item.img}
        width="100%"
        height="100px"
        effect="blur"
        delayMethod="debounce"
        delayTime={300}
      />
      <Description>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          perspiciatis quos animi, quia accusantium eius ipsum nostrum? Tenetur,
          similique, architecto repellendus a ducimus maxime laboriosam error,
          neque accusamus quo aut!
        </p>
      </Description>
      <StyledFooter $currency={currency}>
        <span>
          {currency === "USD"
            ? item.price + " USD"
            : currency === "EUR"
            ? (item.price * 0.92).toFixed(2) + " EUR"
            : (item.price * 0.79).toFixed(2) + " GBP"}
        </span>
        <button>BUY</button>
      </StyledFooter>
    </SingleCourse>
  );
};

export default Course;
