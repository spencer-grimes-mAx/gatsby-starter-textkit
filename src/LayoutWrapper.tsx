
import React from "react";
import { Auth0Provider } from './containers/Auth0Provider';
// Include Apollo here, optionally
// On Logout, user will be sent to the root domain

const LayoutWrapper: React.FunctionComponent<{}> = ({ children }) => {
  return (
    
      <Auth0Provider
          domain={process.env.AUTH0_DOMAIN}
          client_id={process.env.AUTH0_CLIENT_ID}
          audience={process.env.AUTH0_AUDIENCE}
          redirect_uri={process.env.AUTH0_CALLBACK_URL}
          onRedirectCallback={process.env.AUTH0_CALLBACK_URL}
      >
           {children}
           
      </Auth0Provider>
  );
};

export default LayoutWrapper;