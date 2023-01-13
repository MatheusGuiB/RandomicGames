import styled from 'styled-components'

export const DivHeaderOut = styled.div`
  position: fixed;
  top: 0;
  width: 100%;

  .div-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 0.5px solid #01010113;
    height: 60px;
  }

  .div-header div {
    background-color: #f1f1f1;
    align-items: center;
    padding-left: 4px;
    display: flex;
    border-radius: 8px;
  }

  .lupa {
    width: 15px;
    height: 15px;
    margin-left: 8px;
    opacity: 0.7;
  }

  .top-search {
    border-style: none;
    background-color: #f1f1f1;
    width: 75%;
    height: 35px;
    margin-left: 15px;
    opacity: 0.7;
  }
  .top-heart {
    width: 25px;
    height: 25px;
  }
`
