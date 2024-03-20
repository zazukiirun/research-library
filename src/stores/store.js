
import { create } from "zustand";
import { persist } from 'zustand/middleware'

const couterNumber = create((set) => ({
  number: 0,
  counter: (value) => set(() => ({ number: value })),
  clearCouter: () => set(() => ({
    number: 0
  }))
}));

const couterPersist = persist((set) => ({
  number: 0,
  counter: (value) => set(() => ({ number: value })),
  clearCouter: () => set(() => ({
    number: 0
  }))
}), {
  name: 'counterState'
});

const counterPerist = create(couterPersist)

const useSongsStore = create((set) => ({
  entities: [],
  activeEntity: null,
  playSong: (payload) => set((state) => ({
    entities: payload.playlist,
    activeEntity: payload.index
  })),
  playNextSong: () => set((state) => {
    const { entities, activeEntity } = state;
    const isLastSong = entities.length - 1 <= activeEntity;

    if (isLastSong) {
      return { activeEntity: 0 };
    }

    return { activeEntity: activeEntity + 1 };
  }),
  playPreviousSong: () => set((state) => {
    const { entities, activeEntity } = state;

    if (activeEntity <= 0) {
      return { activeEntity: entities.length - 1 };
    }

    return { activeEntity: activeEntity - 1 };
  }),
}));


const useFavoritesStore = create((set) => ({
  album: [],
  track: [],
  radio: [],
  artist: [],
  playlist: [],
  addToFavorites: ({ type, id }) =>
    set((state) => ({ [type]: [...state[type], id] })),
  removeFromFavorites: ({ type, id }) =>
    set((state) => ({
      [type]: state[type].filter((favoriteId) => favoriteId !== id),
    })),
}))


export const zustandStore = () => {
  return {
    couterNumber,
    counterPerist,
    useSongsStore,
    useFavoritesStore
  }
}



