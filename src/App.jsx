import React, { useState, useEffect } from 'react';
import { getEnvelopCoverRotate, getEnvelopTranslate } from './data/envelop';
import { getLetterScale } from './data/letter';
import { getImageRoseTranslate, getImagePenTranslate } from './data/image';
import { getBackgroundColor, getHelloTranslate } from './data/bg';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="page-container">
        <div className="page" style={getBackgroundColor(scrollY)}>
          <img className="rose" style={getImageRoseTranslate(scrollY)} src="img/rose.png" alt="rose" />
          <img className="pen" style={getImagePenTranslate(scrollY)} src="img/pen.png" alt="pen" />
          <view className="hello" style={getHelloTranslate(scrollY)}>
            <h1 className="title">您好，世界上最伟大的妈妈：</h1>
            <p className="content">您亲爱的好大儿给你寄了一封贺卡</p>
            <p className="subtitle">请下滑查收！</p>
          </view>
          <div className="letter" style={getLetterScale(scrollY)}>
            <div className="title">妈妈：母亲节快乐！</div>
            <div className="subtitle">妈妈是全世界最好的妈妈（骄傲脸）</div>
            <div className="footer">——钱昕凯</div>
          </div>
          <div className="envelop" style={getEnvelopTranslate(scrollY)}>
            <div className="letter-inside"></div>
            <svg className="adjust-svg background" width="400" height="200">
              <rect width="400" height="200" fill="gray" />
            </svg>
            <svg className="adjust-svg cover" width="400" height="200">
              <polygon fill='pink' style={getEnvelopCoverRotate(scrollY)} strokeLinejoin="round" points="0,0 200,125 400,0"/>
            </svg>
            <svg className="adjust-svg border" width="400" height="200">
              <polygon className="triangle" fill='pink' strokeLinejoin="round" points="0,0 0,200 400,200"/>
              <polygon className="triangle" fill='pink' strokeLinejoin="round" points="400,0 400,200 0,200"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
