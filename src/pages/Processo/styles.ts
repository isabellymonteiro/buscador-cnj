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
  margin: 0;
  height: 100vh; 
  width: 100%;
`

export const ProcContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: clamp(10px, 2vw, 100px);
  font-size: clamp(12px, 1.2vw, 24px);
  justify-content: center;
  align-items: center;

  h1 {
    font-size: clamp(16px, 2.5vw, 40px);
    color: #980404;
    font-weight: 600;
  }

  h2 {
    font-size: clamp(14px, 1.8vw, 30px);
    font-weight: 600;
  }

  .title {
    margin-top: 0;
    margin-bottom: 0;
    padding: clamp(10px, 2vw, 100px);
    display: flex;
    font-weight: 500;
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
  }
`

export const InfoContainer = styled.div`
  display: grid;
  justify-content: center;

  .partes .info-left {
    margin-top: clamp(6px, 2vw, 20px);
  }

  .partes .info-right {
    margin-bottom: clamp(6px, 2vw, 20px);
  }
  
  @media (min-width: 500px) {
    .info-left {
      display: flex;
      justify-content: space-between;
      gap: clamp(60px, 4.5vw, 200px);
    }
  
    .info-right {
      margin-bottom: clamp(6px, 2vw, 20px);
      display: flex;
      justify-content: space-between;
      gap: clamp(60px, 4.5vw, 200px);
    }
  }
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