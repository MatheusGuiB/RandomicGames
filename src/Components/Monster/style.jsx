import styled from 'styled-components'

export const StyledMonster = styled.div`
  wrapper {
    width: 700px;
    height: 700px;
  }

  .monster {
    height: 300px;
    width: 300px;
    background: cornflowerblue;
    border-radius: 50%;
    margin: 80px auto;
    box-shadow: inset -30px -30px rgba(0, 0, 0, 0.06);
    .eyebrow1 {
      width: 70px;
      height: 10px;
      background-color: black;
      margin-left: 60px;
      float: left;
      position: relative;
      top: 50px;
      transform: rotate(25deg);
      animation: eyebrows 1s infinite alternate;
    }
    .eyebrow2 {
      width: 70px;
      height: 10px;
      background-color: black;
      margin-left: 35px;
      float: left;
      position: relative;
      top: 50px;
      transform: rotate(-25deg);
      animation: eyebrows 1s infinite alternate;
    }
    .eye {
      float: left;
      height: 40px;
      width: 20px;
      background: black;
      border-radius: 50%;
      margin-top: 70px;
      margin-left: 84px;
      animation: blink 1s cubic-bezier(1, 0.01, 1, -0.08) alternate infinite
        both;
    }
    .mouth {
      height: 100px;
      width: 180px;
      background: black;
      position: relative;
      top: 150px;
      left: 60px;
      border-radius: 20px 20px 50% 50%;
      .tooth1 {
        position: absolute;
        left: 15px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 40px solid white;
        float: left;
        margin-left: 20px;
      }
      .tooth2 {
        position: absolute;
        left: 80px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 40px solid white;
        float: left;
        margin-left: 20px;
      }
    }
  }
  .drop {
    position: relative;
    top: 80px;
    left: 165px;
    width: 30px;
    height: 30px;

    border: 0 solid rgba(0, 0, 0, 1);
    border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    transform: rotate(-45deg);
    background: crimson;
    animation: blooddrop 2s infinite;
  }

  @keyframes blink {
    100% {
      transform: rotateX(180deg);
    }
  }

  @keyframes blooddrop {
    0% {
      opacity: 0;
    }
    100% {
      transform: translateY(50px) rotate(-45deg);
      opacity: 1;
    }
  }

  @keyframes eyebrows {
    100% {
      top: 30px;
    }
  }
`
