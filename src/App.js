import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    //BEM naming convantion
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/c80818f600134e30df549f3bcfcb60da/5f554bf4/video/tos/useast2a/tos-useast2a-pve-0068/9c48b59a2d894391927eb038f05a824f/?a=1233&br=3368&bt=1684&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200906145155010190208043070724A2&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzgzd29weHVvdjMzZTczM0ApN2hkaTdpaWU7NzloOWk5M2dscWRpXl5xZm5fLS1fMTZzczQxLWM2NDExMzVhMTQtNmM6Yw%3D%3D&vl=&vr="
          channel="mehmetcan"
          description="MERN STACK Developer"
          song="Sen affetsen ben affetmem"
          likes={123}
          messages={11}
          shares={23}
        />
        <Video
          url="https://v16m.tiktokcdn.com/c80818f600134e30df549f3bcfcb60da/5f554bf4/video/tos/useast2a/tos-useast2a-pve-0068/9c48b59a2d894391927eb038f05a824f/?a=1233&br=3368&bt=1684&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200906145155010190208043070724A2&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzgzd29weHVvdjMzZTczM0ApN2hkaTdpaWU7NzloOWk5M2dscWRpXl5xZm5fLS1fMTZzczQxLWM2NDExMzVhMTQtNmM6Yw%3D%3D&vl=&vr="
          channel="mehmetcan"
          description="MERN STACK Developer"
          song="Sen affetsen ben affetmem"
          likes={123}
          messages={11}
          shares={23}
        />
      </div>

      {/* app container */}
      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
