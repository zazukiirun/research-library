'use client';

import { zustandStore } from "@/stores/store";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const FavoriteButton = ({ type, id }) => {

    const { useFavoritesStore } = zustandStore()

    const {
        addToFavorites,
        removeFromFavorites,
        album,
        track,
        radio,
        artist,
        playlist,
    } = useFavoritesStore()

    const favorites = {
        album,
        track,
        radio,
        artist,
        playlist,
    }

    const isFavorite = favorites[type].find(favoriteId => favoriteId === id);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();

        isFavorite
            ? removeFromFavorites({ type, id })
            : addToFavorites({ type, id });
    };

    return (
        <button
            className={isFavorite ? `bg-red-400` : 'color-[#CBD5E0]'}
            onClick={handleFavoriteClick}
        >
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
    );
};

export default FavoriteButton;
