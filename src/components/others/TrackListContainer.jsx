'use client';
import React from 'react';
import TrackListItem from '../list-items/TrackListItem';

const TrackListContainer = ({ header, tracks }) => {
    return (
        <div className='flex flex-col h-full overflow-hidden text-text-light'>
            <ul>
                {
                    tracks.map((track, index) =>
                        <TrackListItem
                            key={track.id}
                            index={index}
                            playlist={tracks}
                            track={track}
                        />
                    )
                }
            </ul>
        </div>
    );
};

export default TrackListContainer;