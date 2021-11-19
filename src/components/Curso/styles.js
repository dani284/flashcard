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

  .botoesDiv {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    button {
      color: rgba(0, 0, 0, 0.85);
      background-color: transparent;
      cursor: pointer;

      transition: 0.1s ease;

      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;
