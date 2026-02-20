import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import './styles/global.css';

export default function App() {
  const { isPlaying, speed, currentDance, togglePlay, changeSpeed, changeDance } = useAnimation();

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} speed={speed} currentDance={currentDance} />
      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        currentDance={currentDance}
        onTogglePlay={togglePlay}
        onChangeSpeed={changeSpeed}
        onChangeDance={changeDance}
      />
    </Layout>
  );
}
