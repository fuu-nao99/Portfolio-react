import * as React from 'react';
import {useWindowDimensions} from './windowSize';

export default function Works() {
    const { width, height } = useWindowDimensions();


    return (
        <div className="works" id="works" style={{ width: width, height: height }}>
            <div class="works-container">
                <h1>Works</h1>
                <ul>
                    <li>
                        <div className="works-item">
                            <h3 className="date">2018年4月</h3>
                            <h2>駒沢大学グローバルメディアスタディーズ学部入学</h2>
                            <p>1年生からJavaScript、HTML、CSSを使ったプログラミング言語学習の講義を専攻。</p>
                        </div>
                    </li>
                    <li>
                        <div className="works-item">
                            <h3 className="date"> 2021年1月</h3>
                            <h2> SEを目指し、Webコンテンツ制作始める。</h2>
                            <p> 2年生からシステムエンジニアを目指し、自宅でもWebサイト作成を始める。</p>
                        </div>
                    </li>
                    <li>
                        <div className="works-item">
                            <h3 className="date">2021年9月</h3>
                            <h2>ソフトウェアの会社でプログラマーアシスタントとして実務経験を積む。</h2>
                            <p>勉強のために入社。フロントエンドの仕事から、バックエンドの仕事まで経験。</p>
                        </div>
                    </li>
                    <li>
                        <div className="works-item">
                            <h3 className="date">2022年3月</h3>
                            <h2>ポートフォリオ作成</h2>
                            <p>React, Vue.js等のフレームワークを勉強中。</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    );
}
