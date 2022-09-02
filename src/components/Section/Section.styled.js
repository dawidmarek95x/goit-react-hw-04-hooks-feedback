import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 16px 20px;
  border: 1px solid grey;
  border-radius: 15px;
  text-align: center;
  background-color: #EFEFEF;
  box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.6);
  -webkit-box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.6);
  -moz-box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.6);

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`; 

export const Header = styled.h2`
  margin-top: 0;
  padding: 0;
  font-size: 30px;
  font-weight: 500;
`;