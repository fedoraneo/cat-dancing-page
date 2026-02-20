import '../styles/controls.css';

const DANCE_MOVES = [
  { id: 'bounce', label: '점프', emoji: '🐱' },
  { id: 'spin',   label: '회전', emoji: '🌀' },
  { id: 'wave',   label: '흔들기', emoji: '🌊' },
  { id: 'disco',  label: '디스코', emoji: '✨' },
];

const SPEEDS = [
  { value: 0.5, label: '느리게' },
  { value: 1,   label: '보통' },
  { value: 2,   label: '빠르게' },
  { value: 3,   label: '초고속' },
];

export default function AnimationControls({
  isPlaying,
  speed,
  currentDance,
  onTogglePlay,
  onChangeSpeed,
  onChangeDance,
}) {
  return (
    <div className="controls" role="region" aria-label="애니메이션 컨트롤">
      {/* 재생/정지 버튼 */}
      <button
        className={`btn-play ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onTogglePlay}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '정지' : '재생'}
      >
        <span className="btn-icon">{isPlaying ? '⏸' : '▶️'}</span>
        <span className="btn-text">{isPlaying ? '정지' : '재생'}</span>
      </button>

      {/* 댄스 선택 */}
      <div className="control-group">
        <label className="control-label">댄스 종류</label>
        <div className="dance-buttons" role="group" aria-label="댄스 선택">
          {DANCE_MOVES.map(({ id, label, emoji }) => (
            <button
              key={id}
              className={`btn-dance ${currentDance === id ? 'active' : ''}`}
              onClick={() => onChangeDance(id)}
              aria-pressed={currentDance === id}
            >
              <span>{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 속도 조절 */}
      <div className="control-group">
        <label className="control-label">속도</label>
        <div className="speed-buttons" role="group" aria-label="속도 선택">
          {SPEEDS.map(({ value, label }) => (
            <button
              key={value}
              className={`btn-speed ${speed === value ? 'active' : ''}`}
              onClick={() => onChangeSpeed(value)}
              aria-pressed={speed === value}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
