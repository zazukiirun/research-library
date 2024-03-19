'use client';

import React from 'react';
import { formatDuration } from '@/utils/formatters';


import { zustandStore } from '@/stores/store';
import FavoriteButton from '../others/FavoriteButton';

const TrackListItem = ({ index, playlist, track: { id, title, duration, artist, album, type } }) => {
   
    const { useSongsStore } = zustandStore()

    const {

        playSong,

    } = useSongsStore()

    const formattedDuration = formatDuration(duration);

    return (
        <li
            className='flex p-2.8 gap-4 items-center rounded-full cursor-pointer transition duration-150 ease-out hover:bg-[#0e1a41]'
            onClick={() => playSong({ index, playlist })}
        >
            <img className='w-12 h-12 rounded-full' src={album.cover_medium} alt="" />

            <div className='flex flex-1 gap-8 items-center'>
                <div>
                    <strong className='line-clamp-2'>{title}</strong>

                    <div
                        className='font-normal text-[0.8em] line-clamp-2'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {artist.name}
                    </div>
                </div>

                <span>{formattedDuration}</span>

                <FavoriteButton id={id} type={type} />
            </div>
        </li>
    );
};

export default TrackListItem;