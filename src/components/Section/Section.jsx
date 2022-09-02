import PropTypes from "prop-types";
import { Header, Wrapper } from "./Section.styled";

export const Section = ({title, children}) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      {children}
    </Wrapper>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired
}

export default Section;