import styled from "styled-components";

export const UIFieldInput = ({
  field,
  form: { touched, errors },
  label,
  type = "text",
  id,
  withFeedbackLabel,
  withLabel,
  placeholder,
  color = "primary",
  props,
}) => {
  return (
    <>
      {withLabel && <label htmlFor={id}>{label}</label>}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        color={color}
        {...props}
        {...field}
      />
      {withFeedbackLabel && (
        <StyledFeedbackLabel
          color={color}
          errors={touched[field.name] && errors[field.name] && true}
        >
          {touched[field.name] && errors[field.name]
            ? errors[field.name]
            : `Please enter ${label}`}
        </StyledFeedbackLabel>
      )}
    </>
  );
};

export const UIInput = ({
  label,
  type = "text",
  id,
  withLabel,
  placeholder,
  color = "primary",
  props,
}) => {
  return (
    <>
      {withLabel && <label htmlFor={id}>{label}</label>}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        color={color}
        {...props}
      />
    </>
  );
};

const StyledInput = styled.input`
  border: 1px solid ${(props) => `var(--${props.color}-color)`};
  border-radius: 4px;
  padding: 0 ${(props) => props.size || "0.75rem"};
  width: 100%;
  height: 3rem;
  font-size: inherit;
  &:focus {
    outline: none;
    border: 2px solid ${(props) => `var(--${props.color}-color-dark)`};
  }
`;

const StyledFeedbackLabel = styled.small`
  color: ${(props) =>
    props.errors ? "var(--color-danger)" : `var(--${props.color}-color-dark)`};
`;
