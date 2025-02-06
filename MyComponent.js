```javascript
//App.js
import React, { useState, useEffect } from 'react';
import MyComponent from './MyComponent';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted!');
  }, [count]); //Added count to dependency array

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>      
      <MyComponent/>
    </div>
  );
}

export default App;


//MyComponent.js
import React, {useEffect} from 'react';

function MyComponent(){
    useEffect(() => {
        console.log("MyComponent Mounted");
    },[]);
    return(
        <div>This is MyComponent</div>
    );
}
export default MyComponent;
```