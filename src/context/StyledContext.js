import { createContext } from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";

const StyleContext = createContext();

export function StyleProvider({ children }) {
  const value = {};
  return (
    <StyleContext.Provider value={value}>
      <StyleWrapper>{children}</StyleWrapper>
    </StyleContext.Provider>
  );
}

const StyleWrapper = styled.div`
  --primary-color: #FF6363;
  --primary-color-dark: ${darken(0.125, "#FF6363")};
  --primary-color-light: ${lighten(0.09, "#FF6363")};

  --secondary-color: #FFAC41;
  --secondary-color-dark: ${darken(0.125, "#FFAC41")};
  --secondary-color-light: ${lighten(0.09, "#FFAC41")};

  --alternate-color: #202040;
  --alternate-color-dark: ${darken(0.125, "#202040")};
  --alternate-color-light: ${lighten(0.09, "#202040")};

  --info-color: #0092ca;
  --info-color-dark: ${darken(0.125, "#0092ca")};
  --info-color-light: ${lighten(0.09, "#0092ca")};

  --warning-color: #543864;
  --warning-color-dark: ${darken(0.125, "#543864")};
  --warning-color-light: ${lighten(0.09, "#543864")};

  --success-color: #2eb872;
  --success-color-dark: ${darken(0.125, "#2eb872")};
  --success-color-light: ${lighten(0.09, "#2eb872")};

  --danger-color: #e84545;
  --danger-color-dark: ${darken(0.125, "#e84545")};
  --danger-color-light: ${lighten(0.09, "#e84545")};

  --color-dark: #282d32;
  --color-light: #f5e5e8;
  --color-dark-gray: #282d32;
  --color-light-gray: #f0f5f9;
  --color-danger: #e84545;

  --btn-color-primary: #FF6363;
  --btn-color-primary-hover: ${darken(0.125, "#FF6363")};
  --btn-color-primary-active: ${lighten(0.08, "#FF6363")};

  --btn-color-secondary: #FFAC41;
  --btn-color-secondary-hover: ${darken(0.125, "#FFAC41")};
  --btn-color-secondary-active: ${lighten(0.08, "#FFAC41")};

  --btn-color-info: #0092ca;
  --btn-color-info-hover: ${darken(0.125, "#0092ca")};
  --btn-color-info-active: ${lighten(0.08, "#0092ca")};

  --btn-color-warning: #ffd460;
  --btn-color-warning-hover: ${darken(0.125, "#ffd460")};
  --btn-color-warning-active: ${lighten(0.08, "#ffd460")};

  --btn-color-danger: #e84545;
  --btn-color-danger-hover: ${darken(0.125, "#e84545")};
  --btn-color-danger-active: ${lighten(0.08, "#e84545")};

  --btn-color-success: #2eb872;
  --btn-color-success-hover: ${darken(0.125, "#2eb872")};
  --btn-color-success-active: ${lighten(0.08, "#2eb872")};

  --btn-color-alternate: #202040;
  --btn-color-alternate-hover: ${darken(0.125, "#202040")};
  --btn-color-alternate-active: ${lighten(0.08, "#202040")};
`;
