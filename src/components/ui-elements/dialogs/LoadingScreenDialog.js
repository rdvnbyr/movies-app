import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import RippleSVG from "../../../assets/svg/dual-ring.svg";

export function LoadingScreenDialog() {
  return ReactDOM.createPortal(
    <BackdropWrapper>
      <div>
        <img src={RippleSVG} alt="Ripple-Effect" />
        <i className="fas fa-utensils"></i>
      </div>
    </BackdropWrapper>,
    document.getElementById("loading-screen-dialog")
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const BackdropWrapper = styled.div`
  background: var(--color-dark);
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  & div {
    position: relative;
    & img {
      animation: ${rotate} 1.25s ease-in-out infinite;
    }
    & i {
      position: absolute;
      top: 38%;
      left: 39%;
      transform: translateX(-50%, -50%);
      font-size: 60px;
      color: var(--primary-color);
    }
  }
`;
