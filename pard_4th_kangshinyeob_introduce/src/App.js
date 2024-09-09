import profile_pic from './img/profile_pic.jpeg';

import './App.css';

function App() {
  return (
    <div className='entire_div'>
      <nav>
        <ul>
          <li><a href="#">👨🏻‍💻</a></li>
          <li><a href="#">🏈</a></li>
          <li><a href="#">🏄🏻‍♂️</a></li>
          <li><a href="#">👀</a></li>
        </ul>
      </nav>

      <section className='main'>
        <div className='pic_prpfile'>
          <img className="pic_profile" alt="picture myself" src={profile_pic}></img>
        </div>

        <div>
          <h1>Corkang</h1>

          <p>안녕하세요! 전산심화전공 21학번 강신엽입니다</p>

          <p>MBTI는 ENTP이고, <span>운동</span>과 <span>새로운 것에 도전하는 일</span>을 즐깁니다</p>

          <p>닉네임 corkang은 <span>여호수아 1:9</span>에서 Be strong and courageous의 cor(courageous)과 이름을 더해 만들었습니다</p>
          <p>Have I not commanded you? Be strong and courageous. <br/>Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.”</p>

          <p>이번 학기에 PARD를 통해 React와 Web을 배우는 것은 물론, github 장인이라는 타이틀과 많은 친구까지 얻어가고 싶습니다 🌝 </p>

          <p>연락은 010.2003.1581 (IG) @corkang, (email) corkang19@gmail.com 으로 부탁드립니다</p>
            
          <p>감사합니다!</p>
        </div>
      </section>
    </div>
  );
}

export default App;
