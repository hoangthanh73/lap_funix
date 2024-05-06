import React from 'react';
import ReactDOM from 'react-dom/client';

// nhập provider ttuwf thư viện redux
import { Provider } from 'react-redux';

// Nhập store từ store đã khởi tạo
import store from './store';


import './index.css';
import App from './App';

// Bọc toàn bộ trang web vào provider, gán thuộc tính store bằng giá trị store đã khởi tạo
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
