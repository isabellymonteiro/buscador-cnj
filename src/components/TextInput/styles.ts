import styled from "styled-components";

export const InputContainer = styled.input`
  font-size: clamp(16px, 3vw, 20px);
  padding: 12px;
  margin-bottom: 20px;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  :focus {
    outline-color: #2980b9;
  }
`;