'use client';

import { useRef, useState } from 'react';
import useWavesurfer from '@/hooks/useWaveSurfer';
import VolumeSlider from './VolumeSlider';
import { formatDuration } from '@/utils/formatters';
import { MdSkipPrevious, MdSkipNext, MdPlayArrow, MdPause, MdVolumeUp, MdVolumeMute } from 'react-icons/md';
import { zustandStore } from '@/stores/store';

const Player = () => {

    const waveContainerRef = useRef(null);

    const [duration, setDuration] = useState(0)
    const [currentTimeAudio, setCurrentTimeAudio] = useState(0)

    const [showMobilePlayer, setShowMobilePlayer] = useState(false)

    const { useSongsStore } = zustandStore()

    const {

        playNextSong,
        playPreviousSong,
        entities,
        activeEntity

    } = useSongsStore()

    let album,
        title,
        artist,
        audioSrc
    // duration;

    if (entities[activeEntity]) {
        ({
            album,
            title,
            artist,
            preview: audioSrc,
            // duration
        } = entities[activeEntity]);
    }

    const { handlePlayPause, isPlaying, setAudioVolume, audioVolume } = useWavesurfer(
        waveContainerRef,
        audioSrc,
        () => playNextSong(),
        (durationAudio) => setDuration(durationAudio),
        (currentTime) => setCurrentTimeAudio(currentTime),
    );

    const formattedDuration = formatDuration(duration);
    const formattedCurrent = formatDuration(currentTimeAudio);

    return (
        <>
            <div className={`flex h-[5vh] mx-0 my-auto items-center ${audioSrc ? '' : ' color-[#CBD5E0]'}`}>
                <img className={`${audioSrc ? 'rounded-sm' : 'invisible'}`} src={album?.cover} alt='' />

                <div className='w-[16.5%]'>
                    <span className='color-[#fff] text-[0.9em] line-clamp-2'>{title}</span>
                    <span className='artist-name'>{artist?.name}</span>
                </div>

                <div className='flex gap-4 md:ml-6 ml-[0.5em] justify-center'>
                    <button onClick={() => playPreviousSong()}>
                        <MdSkipPrevious />
                    </button>

                    <button
                        className='p-1.5 rounded-full bg-sky-700'
                        onClick={audioSrc && handlePlayPause}
                    >
                        {
                            isPlaying ?
                                <MdPause /> :
                                <MdPlayArrow />
                        }
                    </button>

                    <button onClick={() => playNextSong()}>
                        <MdSkipNext />
                    </button>
                </div>

                <span className='color-[#fff] ml-4 text-[0.9em]'>{formattedCurrent}</span>

                <div className='h-full w-300 flex-1 mx-10' ref={waveContainerRef}></div>

                <span className='color-[#fff] mr-3 text-[0.9em]'>{formattedDuration}</span>

                <div className='relative flex gap-2 items-center px-1vw'>
                    <button className='flex' onClick={() => setAudioVolume((prev) => ({ ...prev, isMuted: prev.value <= 0 ? true : !prev.isMuted }))}>
                        {audioVolume.isMuted ? <MdVolumeMute /> : <MdVolumeUp />}
                    </button>

                    {
                        audioSrc &&
                        <VolumeSlider
                            audioVolume={audioVolume}
                            onChange={([value]) => { setAudioVolume({ isMuted: value <= 0 ? true : false, value }) }}
                        />
                    }
                </div>
            </div>
        </>
    );
};

export default Player;
