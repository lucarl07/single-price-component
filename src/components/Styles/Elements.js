import styled from "styled-components";
import Colors from "./Colors";

export const Container = styled.main `
  display: grid;
  grid-template-columns: 320px 320px;
  grid-template-rows: 220px 260px;
  margin: 0 auto;
  width: 640px;
  height: 480px;
  background-color: ${Colors.white};
  border-radius: 0.75rem;
`;

export const GridArea = styled.section `
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 2.5rem;
  color: ${Colors.white};
`;

export const Button = styled.button `
  cursor: pointer;
  height: 48px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.125);
  background-color: ${Colors.brightYellow};
  color: ${Colors.white};
  font-weight: 700;
  font-size: 1rem;
`;