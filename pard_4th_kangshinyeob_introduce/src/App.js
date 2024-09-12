import profile_pic from './img/profile_pic.jpeg';

import './App.css';

function App() {
  return (
    <div className='entire_div'>
      <nav>
        <ul id="sideNav">
          <li className='navi'><a href="#main">👨🏻‍💻</a></li>
          <li className='navi'><a href="#page_imgs">🎞️</a></li>
        </ul>
      </nav>

      <section id='main'>
        <div className='profile_pic_div'>
          <img className='profile_pic' alt="pic myself" src={profile_pic}></img>
        </div>

        <div className='profile_text'>
          <h1>Corkang</h1>

          <p>안녕하세요! 전산심화전공 21학번 강신엽입니다</p>

          <p>MBTI는 ENTP이고, <span className='point'>운동</span>과 <span className='point'>새로운 것에 도전하는 일</span>을 즐깁니다</p>

          <p>닉네임 <span className='point'>corkang</span>은 여호수아 1:9에서 Be strong and courageous의 cor(courageous)과 이름을 더해 만들었습니다</p>
          <p>Have I not commanded you? Be strong and courageous. <br/>Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.”</p>

          <p>이번 학기에 PARD를 통해 <span className='point'>React</span>와 <span className='point'>Web</span>을 배우는 것은 물론, <span className='point'>github 장인</span>이라는 타이틀과 <span className='point'>많은 친구들</span>까지 얻어가고 싶습니다 🌝 </p>

          <p>연락은 010.2003.1581 (IG) @corkang, (email) corkang19@gmail.com 으로 부탁드립니다</p>
            
          <p>감사합니다!</p>
        </div>
      </section>

      <section id='page_imgs'>

        <img className='imgs' alt="crossift pic" src={require('./img/crossfit.jpeg')}></img>
        <img className='imgs' alt="burger pic" src={require('./img/food_burger.jpeg')}></img>
        <img className='imgs' alt='football team pic' src={require('./img/football.jpeg')}></img>
        <img className='imgs' alt='guitar pic' src={require('./img/guitar.jpeg')}></img>
        <img className='imgs' alt='ramen pic' src={require('./img/food_ramen.jpeg')}></img>
        <img className='imgs' alt='book pic' src={require('./img/read.jpeg')}></img>
        <img className='imgs' alt='running statistic pic' src={require('./img/run.jpeg')}></img>
        <img className='imgs' alt='snowboard pic' src={require('./img/snowboard.jpeg')}></img>
        <img className='imgs' alt='surf pic' src={require('./img/surf.jpeg')}></img>
      </section>
    </div>
  );
}

export default App;
