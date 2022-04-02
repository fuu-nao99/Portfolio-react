import React, {useEffect} from 'react'
import MyIcon from '../Images/my_avatar.jpg'
import {useWindowDimensions} from './windowSize'
import Aos from "aos";
import "aos/dist/aos.css"


const Profile = () => {
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);

  return (
    <div className="profile" id="profile" style={{ width: width, height: height }}>
      <h1 data-aos="fade-up">Profile</h1>
        <div className="profile-content">
          <div data-aos="fade-up" className="profile-img">
            <img src={MyIcon} alt="MyIcon" />
          </div>
          <div data-aos="fade-up" className="profile-text">
            <p>藤村 直樹</p>
            <p>Naoki Fujimura</p>
            <br></br>
            <p>駒沢大学GMS学部に通う大学4年生。</p>
            <p>Webコンテンツ制作の講義を専攻。</p>
            <p>(使用言語: HTML, CSS, JavaScript)</p>
            <br></br>
            <p>プログラマーアシスタントとして大学生バイトの実務経験あり。</p>
            <p>(使用言語: JavaScript, C#, VB.NET, Blazor)</p>
            <br></br>
            <p>強み：圧倒的探究心、勉強意欲</p>
            <br></br>
            <p>趣味：ダンス, キックボクシング, サーフィン</p>
          </div>
        </div>
    </div>
  );
}
  
export default Profile;
