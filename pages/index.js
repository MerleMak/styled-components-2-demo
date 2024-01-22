import styled from "styled-components";
import Button from "../components/Button";

const FlexContainer = styled.section`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-start;
  // it's possible to set a default value for a prop, like in this example with $direction = "row"
  flex-direction: ${({ $direction = "row" }) =>
    $direction === "row" ? "row" : "column"};
`;

export default function HomePage() {
  return (
    <div>
      <h1>Styled Components with Props</h1>
      <h2>Props using ternary</h2>
      <FlexContainer>
        <Button>Button</Button>
        <Button $backgroundcolor="danger">Button Danger</Button>
      </FlexContainer>
      <h2>Using Css-Block (Complex Component)</h2>
      <FlexContainer $direction="column">
        <Button $variant="text">Button - Text</Button>
        <Button $variant="outlined">Button - Outlined</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
    </div>
  );
}
