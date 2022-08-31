import styled from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 3px 7px;
  border: 1px solid rgb(209, 209, 209);
  border-radius: 5px;
  text-transform: capitalize;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.2);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.2);
  transition: background-color 1200ms;
  margin-right: 10px;

  &:active {
    background-color: ${props => props.positive ? "#89BF53" : "#BE3535"};
    transition: background-color 50ms;
  }
`;

export const LastButton = styled(Button)`
  margin-right: 0;
`;