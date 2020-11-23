import React, { useEffect } from 'react';
import './Entry.scss';

const Entry = () => { 
  useEffect(() => {
    // tlHello = new TimelineLite({ paused: true});
		// tlHello.staggerFrom($("#hello_h > *"), 0.6, {drawSVG:"0%", ease:Power3.easeOut},  0.2, 0.8);
		// tlHello.staggerFrom($("#hello_e > *"), 0.6, {drawSVG:"0%", ease:Power3.easeOut},  0.2, "-=0.7");
		// tlHello.staggerFrom($("#hello_l1 > *"), 0.6, {drawSVG:"0%", ease:Power3.easeOut},  0.4, "-=1.2");
		// tlHello.staggerFrom($("#hello_l2 > *"), 0.6, {drawSVG:"0%", ease:Power3.easeOut},  0.4, "-=1");
		// tlHello.staggerFrom($("#hello_o > *"), 1.2, {drawSVG:"0%", ease:Power3.easeOut},  0.2, "-=1.2");
		// tlHello.staggerFrom($("#hello_dot > *"), 0.6, {scale:0, transformOrigin:"50% 50%", ease:Power3.easeOut },  0.2, "-=0.8");
		// tlHello.staggerFrom($(".hello-scrolldown"), 1.2, {bottom:-50, ease:Power3.easeOut },  0.2, "-=0.8");

  
  }, []);
  return (
  <div className="section" id="Entry">
    <section className="hello"  style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
      <h1 id="hello_h1">
        <svg xmlns="http://www.w3.org/2000/svg" width="428" height="343" viewBox="0 0 428.83 343.87">
          <g id="hello_h">
            <line className="line" x1="21.5" y1="0.01" x2="21.5" y2="152.01" style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></line>
            <line className="line" x1="21.5" y1="74.01" x2="103.17" y2="74.01"  style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></line>
            <line className="line" x1="103.17" y1="0.01" x2="103.17" y2="152.01"  style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></line>
          </g>
          <g id="hello_e">
            <line className="line" x1="168.17" y1="0.01" x2="168.17" y2="152.01"  style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></line>
            <line className="line" x1="168.17" y1="19.5" x2="245.83" y2="19.5"  style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></line>
            <line className="line" x1="168.17" y1="76.01" x2="240.83" y2="76.01"  style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></line>
            <line className="line" x1="168.17" y1="131.5" x2="245.83" y2="131.5"  style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></line>
          </g>
          <g id="hello_l1">
            <line className="line" x1="21.5" y1="186.68" x2="21.5" y2="338.68"  style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></line>
            <line className="line" x1="21.5" y1="318.17" x2="94.17" y2="318.17"  style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></line>
          </g>
          <g id="hello_l2">
            <line className="line" x1="128.5" y1="186.68" x2="128.5" y2="338.68"  style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></line>
            <line className="line" x1="128.5" y1="318.17" x2="201.17" y2="318.17"  style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></line>
          </g>
          <g id="hello_o">
            <circle className="line" cx="283.51" cy="262.69" r="60.68"  style={{ strokeDashoffset: '2e-05', strokeDasharray: 'none'}}></circle>
          </g>
          <g id="hello_dot">
            <circle className="dot" cx="403.17" cy="316.01" r="25.67" data-svg-origin="403.17000007629395 316.00999641418457" style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}></circle>
          </g>
        </svg>
        <p>I am Denis.</p>
      </h1>
      </section>
  </div>
  );
}

export default Entry;