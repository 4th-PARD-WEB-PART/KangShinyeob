import { RegisterPage } from './Pages/RegisterPage/RegisterPage';
import { FeedPage } from './Pages/FeedPage/FeedPage';
import { Route, Routes, useNavigate } from "react-router-dom";
import { DetailPage } from './Pages/DetailPage/DetailPage';
import Header from './Layouts/Header';

function MyRouter() {
  return (
    <Routes>
      <Route path='/' element={<RegisterPage />} />
      <Route element={<Header />} > {/* 중첩 라우터 */}
        <Route path='/feed' element={<FeedPage />} />
        <Route path='/detail/:author_id' element={<DetailPage />} /> {/* 디테일 페이지보다 개인 프로필 페이지같은거 구현할 때 쓰면 될듯 일단 그냥 써봄 */}
      </Route>
    </Routes>
  );
}

export default MyRouter;