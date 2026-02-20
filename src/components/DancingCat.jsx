import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

export default function DancingCat({ isPlaying, speed, currentDance }) {
  const animationStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: `${2 / speed}s`,
  };

  return (
    <div className="dancing-cat-wrapper">
      <div
        className={`cat-container dance-${currentDance}`}
        style={animationStyle}
        aria-label="춤추는 고양이"
        role="img"
      >
        <img
          src={catSvg}
          alt="고양이"
          className="cat-image"
          draggable={false}
        />
        {/* 음표 이펙트 */}
        {isPlaying && (
          <div className="music-notes" aria-hidden="true">
            <span className="note note-1">♪</span>
            <span className="note note-2">♫</span>
            <span className="note note-3">♩</span>
            <span className="note note-4">♬</span>
          </div>
        )}
      </div>
      {/* 그림자 */}
      <div className={`cat-shadow ${isPlaying ? 'shadow-animate' : ''}`} />
    </div>
  );
}
