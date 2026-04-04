const Background = () => {
  return (
    <div className="scene">
      <div className="bg"></div>
      <div className="storm-tint"></div>
      <div className="mist"></div>
      <div className="mist2"></div>
      <div className="cloud-glow"></div>
      <div className="rain-layer" id="rain"></div>
      <div className="splash" id="splash"></div>
      <div className="flash"></div>
      <div className="bolt-wrap">
        <svg width="90" height="260" viewBox="0 0 90 260">
        
          <polyline points="62,0 22,128 50,128 10,260"
            stroke="rgba(200,220,255,0.45)" stroke-width="14"
            fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          
          <polyline points="62,0 22,128 50,128 10,260"
            stroke="white" stroke-width="3"
            fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      
      <div className="bolt-wrap2">
        <svg width="60" height="200" viewBox="0 0 60 200">
          <polyline points="44,0 16,96 36,96 8,200"
            stroke="rgba(200,220,255,0.40)" stroke-width="10"
            fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="44,0 16,96 36,96 8,200"
            stroke="white" stroke-width="2.2"
            fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      
      <div className="ripple-layer" id="ripples"></div>

      <div className="eye"></div>

      
      <div className="vignette"></div>
      <div className="corner-dark"></div>     
    </div>

  );
};

export default Background;