// 해당 파일은 React가 아니다. Javascript 다. Component 가 아니라 단순히, 연결만 해주는 역할만 한다.

import ReactDOM from 'react-dom'; // 'react-dom' 이라는 라이브러리에서 ReactDOM 이라는 Class 함수 컴포넌트를 import 해와라.
import React from 'react';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render( 
    <App />,
  document.getElementById('root')
); // | 1. 'react-dom'이라는 라이브러리에서 가져온 ReactDOM이라는 내장Class 함수의, 뷰포트에 그리는 역할을 하는 render 내장 메서드를 사용해서,
   // | 	뷰포트에 그려라. 
   // | 2. 어떤것을? render 내장 메서드 내부에 개발자가 JSX형식으로 구현한 내용을.
   // |	   ( 내용 : app.jsx 파일에 구현해놓은 <App /> = App 이라는 이름의 일반함수 )
   // | 3. 어디에? HTML의 'root' 라는 것을 id 로 가지고 있는 HTML Real DOM 요소안에. 