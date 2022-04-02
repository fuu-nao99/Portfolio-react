import React, {useEffect} from 'react'
import {useWindowDimensions} from './windowSize'
import Aos from "aos";
import "aos/dist/aos.css"

export default function Skills() {
  const { width, height } = useWindowDimensions();

  useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

  return (
    <div className="skills" id="skills" style={{ width: width, height: height }} >
      <div className="skills-container">
        <h1 data-aos="fade-right">Skills</h1>
        <ul>
            <li data-aos="fade-right">
                <div className="skills-item">
                    <h2>言語《実務経験あり》</h2>
                    <p>HTML / CSS / JavaScript / TypeScript / C# / VB.NET </p>
                </div>
            </li>
            <li data-aos="fade-right">
                <div className="skills-item">
                    <h2>言語《制作経験あり》</h2>
                    <p>HTML / CSS / JavaScript / TypeScript</p>
                </div>
            </li>
            <li data-aos="fade-right">
                <div className="skills-item">
                    <h2>フレームワーク《制作経験あり》</h2>
                    <p>React / Vue.js / jQuery</p>
                </div>
            </li>
            <li data-aos="fade-right">
                <div className="skills-item">
                    <h2>言語《勉強中》</h2>
                    <p>Ruby / Ruby on Rails / PHP</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
}