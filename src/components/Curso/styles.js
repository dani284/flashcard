import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  background-color: snow;
  padding: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 100ms ease;

  &:hover {
    filter: brightness(0.85);
    transform: scale(1.05);
  }
`;
