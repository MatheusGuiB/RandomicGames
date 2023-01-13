import styled from 'styled-components'

export const AsideStyle = styled.aside`
  height: 8%;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 0.5px solid #01010113;

  .nav-bar {
    height: 100%;
    width: 100%;
  }
  .li-bar {
    width: 100%;
    justify-content: space-around;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100%;
    align-items: center;
  }
  .li-bar li {
  }
  .li-bar li p {
    display: none;
  }

  .logo {
    display: none;
  }

  .li-search {
    display: none;
  }

  .li-heart {
    display: none;
  }

  .nav-icons {
    width: 25px;
    height: 25px;
  }
  .nav-img {
    border-radius: 100%;
  }
`
