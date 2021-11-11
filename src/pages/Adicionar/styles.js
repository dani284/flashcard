import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 1rem);
  height: 100%;
  padding: 1rem;

  #content {
    background-color: #f7c8d5;
    border-radius: 2rem;
    box-shadow: 0 0 10px -5px black;

    padding: 2rem;

    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
    }

    .text {
      padding: 1.5rem;
      border-bottom: 1px solid #1a8180;
      outline: none;
      background: transparent;
      margin: 2rem 0 2rem 0;
      font-size: 1.5rem;
    }

    .radioButton {
      margin: 2rem;
    }

    .sendButton {
      padding: 1rem;
      background-color: #1a8180;
      color: white;
      width: 100%;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.1s ease;

      &:hover {
        filter: brightness(0.85);
      }
    }
  }
`;
