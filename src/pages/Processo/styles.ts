import styled from 'styled-components'

export const Loading = styled.div`
  display: flex;
  height: 100vh; 
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: clamp(18px, 2vw, 30px);
  font-weight: 500;

  img {
    margin-right: clamp(10px, 1.5vw, 30px);
    animation: spin 2s linear infinite;
    width: clamp(20px, 2vw, 40px);
    height: clamp(20px, 2vw, 40px);
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

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