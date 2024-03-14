import React from 'react'

import { useStore } from "@/stores/store";



function ZustandContent() {

  const { couterNumber, counterPerist } = useStore()

  const { number, counter, clearCouter } = couterNumber()
  const { number: numberPersist, counter: counterPersist, clearCouter: clearCouterPersist } = counterPerist()


  return (
    <div>
      <div className="text-green-200 underline-offset-1 underline font-medium text-[24px] text-center">
        Zustand
      </div>

      <div className="mt-2 space-x-4">
        <button className="p-2 border border-orange-300 rounded-lg" onClick={() => { counter(number + 1) }}>counter {number}</button>
        <button className="p-2 border border-orange-600 rounded-lg" onClick={() => { clearCouter() }}>clear counter</button>
        <button className="p-2 border border-red-300 rounded-lg" onClick={() => { counterPersist(numberPersist + 1) }}>couterPersist {numberPersist}</button>
        <button className="p-2 border border-red-600 rounded-lg" onClick={() => { clearCouterPersist() }}>clear counter persist</button>
      </div>

    </div>
  )
}

export default ZustandContent