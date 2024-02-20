import { BASENAME } from "shared/router";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter basename={BASENAME}>
    {component()}
  </BrowserRouter>
);
