
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

export const useStore = () => {
  return {
    couterNumber,
    counterPerist
  }
}



