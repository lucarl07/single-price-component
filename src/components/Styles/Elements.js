import styled from "styled-components";
import Colors from "./Colors";

export const Container = styled.main `
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 240px 240px;
  margin: 0 auto;
  width: 600px;
  height: 480px;
  background-color: ${Colors.white};
  border-radius: 0.75rem;
`;

export const GridArea = styled.section `
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 2rem;
`;