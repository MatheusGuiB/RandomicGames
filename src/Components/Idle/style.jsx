import styled from 'styled-components'

export const StyledIdle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .container {
    .boss {
      text-align: center;
      .bar.life-bar {
        display: flex;
        height: 20px;
        background-color: red;
        border: 5px solid black;
        transition: width 0.5s;
      }
    }
    .content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 80vw;
      .hero {
        text-align: center;
        h4 {
          margin: 0;
        }
        .sword {
          cursor: pointer;
          width: 150px;
          height: auto;
        }
        .sword:hover {
          transform: scale(1.1);
        }
      }
      .shop,
      .hero,
      .money {
        width: 200px;
        height: 200px;
        p {
          font-weight: bold;
        }
      }
      .shop {
        display: flex;
        flex-direction: column;
        .icon {
          width: 30px;
          height: auto;
        }
        .damage,
        .crit {
          width: 200px;
          display: flex;
          text-align: center;
          justify-content: space-between;
          align-items: center;
          .cash {
            font-size: 20px;
          }
          button {
            background-color: lime;
            cursor: pointer;
            width: 150px;
            height: 30px;
          }
          button:hover {
            background-color: #00d300;
          }
        }
      }
    }
  }
`
