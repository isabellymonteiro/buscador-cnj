import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; 
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const NotFound = styled.div`
  display: flex;
  font-size: clamp(18px, 2vw, 40px);
  font-weight: 500;
  margin: clamp(30px, 10vw, 100px) clamp(20px, 7vw, 100px);
  align-items: center;

  button {
    margin-right: clamp(6px, 2vw, 20px);
    padding: 6px;
  }

  img {
    margin: 0;
    width: clamp(16px, 2vw, 40px);
    height: clamp(16px, 2vw, 40px);
  }
`