import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 65px;
  background-color: white;
  border-radius: 6px;
  border: none;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  margin-bottom: 13px;
  padding-left: 17px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: var(--lightgray);
  }
`;

export const Submit = styled.button`
  width: 100%;
  height: 65px;
  background-color: var(--blue);
  border-radius: 6px;
  border: none;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: white;
  margin-bottom: 22px;
  cursor: pointer;
  :hover {
    filter: brightness(1.1);
  }
`;
