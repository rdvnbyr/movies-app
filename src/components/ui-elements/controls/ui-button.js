import styled from "styled-components";

export const UIButton = (props) => {
  if (props.href) {
    return (
      <StyledButton as="a" href={props.href} {...props}>
        {props.text}
      </StyledButton>
    );
  }
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

const StyledButton = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #f7f7f7;
  border: 0;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  font-family: inherit;
  padding: 0 2.25rem;
  height: 3.5rem;
  cursor: pointer;
  background: transparent;
  outline: none;
  transition-property: background, box-shadow;
  transition-duration: 0.35s;
  background: ${(props) => `var(--btn-color-${props.color})`};
  &:hover {
    background: ${(props) => `var(--btn-color-${props.color}-hover)`};
  }
  &:disabled {
    background: var(--color-dark-gray);
    border: 1px solid var(--color-dark-gray);
    cursor: not-allowed;
  }
  &:focus,
  &:active {
    background: ${(props) => `var(--btn-color-${props.color}-active)`};
    box-shadow: 0 0 0 2px ${(props) => `var(--btn-color-${props.color}-active)`};
  }
`;
