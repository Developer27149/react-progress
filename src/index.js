import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Button } from '@chakra-ui/react';
import ProgressA from './ProgressA/index.jsx';

function App() {
  // 2. Use at the root of your app
  const [progress, setProgress] = useState(0);
  return (
    <ChakraProvider>
      <Button
        onClick={() => setProgress(progress + 10)}
        m="100px auto"
        display="block"
      >
        +10
      </Button>
      <ProgressA progress={progress} />
      <Button
        onClick={() => setProgress(progress - 20)}
        m="100px auto"
        display="block"
      >
        -20
      </Button>
    </ChakraProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
