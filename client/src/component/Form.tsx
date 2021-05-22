import React from "react";
import styled from "styled-components";

interface Props {}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
`;

const Form: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <FormWrapper>{children}</FormWrapper>
    </Wrapper>
  );
};

export default Form;
