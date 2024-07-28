import { useRef, useState, useEffect } from "react";
import './clearAllTimers'
import clearAllTimers from "./clearAllTimers";

export default function useMusicController( src ) {
  const audioRef = useRef();
  const progressRef = useRef();
  const volumeRef = useRef();
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  let progressId = undefined

  useEffect(() => {
    if (!audioRef.current || !progressRef.current) return;
    setDuration(0);
    setIsPlaying(false);
    
    return () => {
      for(var i = timers.length; i--;)
        clearInterval(timers[i]);
      progressRef.current.value = "0";

      volumeRef.current.value = "0";
    };
  }, [src]);
  useEffect(() => {
    clearAllTimers(window)

  }, []);

  const onLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };
  const formatDuration = (duration) => {
    return Math.floor(duration / 60) + ":" + Math.floor(duration % 60);
  };

  const updateProgress = (time = 10) => {
    clearInterval(progressId)
    progressId = setInterval(() => {
      if (!audioRef.current || !progressRef.current) return;
      progressRef.current.value = (
        (audioRef.current.currentTime * 100.0) /
        duration
      ).toString();
    }, time);
  };
  const onProgressChange = (e) => {
    if (!audioRef.current || !progressRef.current) return;
    progressRef.current.value = e.target.value;
    audioRef.current.currentTime = (Number(e.target.value) / 100) * duration;
  };

  const updateProgressId = () => {
    updateProgress()
    console.log(progressId)
  };

  const toggleVolume = () => {
    if (!audioRef.current) return;
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  const changePlayback = () => {
    if (!audioRef.current) return;
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };
  const forBackAudio = (time = 1) => {
    if (!audioRef.current || !progressRef.current) return;
    audioRef.current.currentTime += time;
    progressRef.current.value = (
      (audioRef.current.currentTime * 100.0) /
      duration
    ).toString();
  };

  const onVolumeChange = (e) => {
    if (!audioRef.current || !volumeRef.current) return;
    volumeRef.current.value = e.target.value;
    audioRef.current.volume = Number(e.target.value) / 100;
  };
  return {
    onVolumeChange,
    forBackAudio,
    changePlayback,
    onProgressChange,
    updateProgress,
    formatDuration,
    onLoadedMetadata,
    updateProgressId,
    toggleVolume,
    progressId,
    isPlaying,
    isMuted,
    audioRef,
    progressRef,
    volumeRef,
  };
}
