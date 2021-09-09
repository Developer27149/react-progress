import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Input } from '@chakra-ui/react';
import MyProgress from './MyProgress/index.jsx';

function App() {
  // 2. Use at the root of your app
  const [progress, setProgress] = useState(10);
  return (
    <ChakraProvider>
      <MyProgress progress={progress} />
      <Input
        size="sm"
        variant="filled"
        w={['90vw', '80vw', '70vw', '600px']}
        display="block"
        margin="0 auto"
        type="range"
        value={progress}
        bg="teal.50"
        onChange={(e) => {
          setProgress(e.target.value);
        }}
      />
    </ChakraProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
