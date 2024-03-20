import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const options = {
  progressColor: '#8E7AB5',
  waveColor: '#9094a7',
  fillParent: true,
  responsive: true,
  autoplay: true,
  // cursorWidth: 1,
  // barHeight: 1.5,
  // barGap: 0.5,
};

const useWavesurfer = (waveContainerRef, audioSrc, onFinish, getDuration, getCurrentTime) => {
  const waveSurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioVolume, setAudioVolume] = useState({ isMuted: false, value: 0.2, });

  useEffect(() => {
    waveSurferRef.current = WaveSurfer.create({
      ...options,
      url: audioSrc,
      container: waveContainerRef.current,
      height: waveContainerRef.current.clientHeight,
    });

    waveSurferRef.current.on('play', () => setIsPlaying(true));
    waveSurferRef.current.on('pause', () => setIsPlaying(false));
    waveSurferRef.current.on('finish', () => onFinish());

    waveSurferRef.current.on('loading', (percent) => console.log(percent));

    waveSurferRef.current.on('audioprocess', (currentTime) => getCurrentTime(currentTime));

    waveSurferRef.current.on('ready', (currentTime) => getDuration(currentTime));

    waveSurferRef.current.setVolume(audioVolume.isMuted ? 0 : audioVolume.value);

    return () => {
      waveSurferRef.current.destroy();
    };
  }, [audioSrc]);

  waveSurferRef?.current?.setVolume(audioVolume.isMuted ? 0 : audioVolume.value);

  return {
    handlePlayPause: () => waveSurferRef?.current?.playPause(),
    audioVolume,
    setAudioVolume,
    isPlaying,
  }
};

export default useWavesurfer;
