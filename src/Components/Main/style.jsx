import styled from 'styled-components'

export const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .container {
    width: 500px;
    height: 500px;
    background-color: #dddddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    button {
      height: 100px;
      width: 100px;
      border-radius: 50px;
      border: none;
      background-color: red;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
    button:hover {
      transform: scale(1.05);
    }
  }
`
