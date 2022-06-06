import styled from "styled-components";
import { useTheme } from "../utils/provider";
import { sizes } from "../utils/variables";
import { themes } from "../utils/variables";
import { Text } from "./text/Text";

export const Card = ({ style = {} }) => {
  const { theme } = useTheme();
  return (
    <Container sizes={sizes} style={style} background={themes[theme].primary}>
      <Image src="/plant.jpg" />
      <Text />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: ${(props) => props.background};
`;

const Image = styled.img`
  display: flex;
  justify-content: flex-start;
  background: lightgrey;
  width: 100%;
  margin: 0 0 10px 0;
`;