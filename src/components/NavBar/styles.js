import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 6rem;
  position: fixed;
  top: 0;
  left: 0;

  padding: 1rem;
`;

export const Bar = styled.div`
  width: calc(100% - 1rem);
  height: 100%;
  background-color: #f7c8d5;
  border-radius: 2rem;
  box-shadow: 0 0 10px -5px black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;

  .link {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7c8d5;

    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    transition: 300ms ease;

    &:hover {
      filter: brightness(0.9);
      font-size: 1.3rem;
      font-weight: bold;
    }
  }
`;
