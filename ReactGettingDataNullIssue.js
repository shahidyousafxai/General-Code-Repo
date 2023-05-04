//If you're setting state in React and immediately trying to access the state, 
//you may run into issues where the state hasn't updated yet. This is because state updates are asynchronous in React.
//To solve this issue, you can use the useEffect hook to perform an action after the state has updated. Here's an example:

import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This code will run after the state has updated
    console.log(data);
  }, [data]);

  useEffect(() => {
    // This code will run once, when the component mounts
    fetchData();
  }, []);

  function fetchData() {
    // This function updates the state
    setData('my data');
  }

  return (
    <div>{data}</div>
  );
}
