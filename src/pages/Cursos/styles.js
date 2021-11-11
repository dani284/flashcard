import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 1rem);
  height: 100%;
  padding: 1rem;

  #content {
    background-color: #f7c8d5;
    border-radius: 2rem;

    padding: 2rem;

    .cursos {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;
