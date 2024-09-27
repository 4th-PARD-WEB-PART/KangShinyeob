import './App.css';
import styled from "styled-components";

import { RegisterPage } from './Pages/RegisterPage/RegisterPage';
import { FeedPage } from './Pages/FeedPage/FeedPage';

function App() {
  return (
    <div>
      {/* <RegisterPage /> */}
      <FeedPage />
    </div>
  );
}

export default App;