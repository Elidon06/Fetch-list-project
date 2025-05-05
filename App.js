
import React from 'react';
import FetchDataComponent from './FetchDataComponent';

const App = () => {
  const renderUser = (user) => <div>{user.name} - {user.email}</div>;

  return (
    <div>
      <h1>User List</h1>
      <FetchDataComponent renderItem={renderUser} />
    </div>
  );
};

export default App;
