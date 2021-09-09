import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Button, Box, Input } from '@chakra-ui/react';
import ProgressA from './ProgressA/index.jsx';

function App() {
  // 2. Use at the root of your app
  const [progress, setProgress] = useState(10);
  return (
    <ChakraProvider>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <Button
            onClick={() => setProgress(i * 10)}
            m="25px"
            display="block"
            key={i}
          >
            {i}0%
          </Button>
        ))}
      </Box>
      <ProgressA progress={progress} />
      <Input
        w="90%"
        display="block"
        margin="0 auto"
        type="range"
        value={progress}
        onChange={(e) => {
          setProgress(e.target.value);
        }}
      />
    </ChakraProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
