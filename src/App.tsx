import { authProvider } from 'authProvider/authProvider';
import React from 'react';
import { Admin} from 'react-admin';

const App: React.FC = () => {

  return (
    <Admin authProvider={authProvider} >
      // ...
    </Admin>
  );
};

export default App;
