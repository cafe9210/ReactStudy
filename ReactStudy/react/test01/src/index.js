import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './context/color';
import SelectColors from './components/SelectColors';

ReactDOM.render(
  <ColorProvider>,
    <div>
      <SelectColors/>
      <ColorBox/>
    </div>
  </ColorProvider>,
  document.getElementById('root')
);

//md src/components   Bpp.js
//md src/modules      bpp.js
//md src/containers   BppContainer.js

//type NUL > src/components/Bpp.js
//type NUL > src/modules/bpp.js
//type NUL > src/containers/BppContainer.js