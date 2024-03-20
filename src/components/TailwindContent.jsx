import React from 'react'
import Divivder from './divider/Divivder'

function TailwindContent() {
  return (
    <div>
      <div className="text-orange-200 underline-offset-1 underline font-medium text-[24px] text-center">
        Tailwind
      </div>

      <Divivder />
      <div className="text-sky-200 underline-offset-1 underline text-center">Flex & Shrink</div>
      <div class="flex justify-center">
        <div class="flex-1 w-14 h-14 bg-purple-300 rounded-lg drop-shadow-4xl">
          01
        </div>
        <div class="shrink-0 w-64 h-14 bg-purple-300 rounded-lg drop-shadow-4xl">
          02
        </div>
        <div class="flex-1 w-14 h-14 bg-purple-300 rounded-lg drop-shadow-4xl">
          03
        </div>
      </div>

      <Divivder />

      <div className="text-sky-200 underline-offset-1 underline text-center">Grid Cols Start/End</div>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4 rounded-l">
          <div className='flex flex-col bg-purple-300 rounded-lg h-48 drop-shadow-4xl'>
            <div className=''>
              xxx
            </div>
            <div className=''>
              xxx
            </div>
            <div className=''>
              xxx
            </div>
          </div>
        </div>
        <div class="col-start-1 col-end-3 bg-purple-400 rounded-lg">
          <div className='flex flex-col bg-purple-300 rounded-lg h-48 drop-shadow-4xl'>
            <div className=''>
              xxx
            </div>
            <div className=''>
              xxx
            </div>
            <div className=''>
              xxx
            </div>
          </div>
        </div>
        <div class="col-end-7 col-span-2 bg-purple-400 rounded-l">
          <div className='flex flex-col bg-purple-300 rounded-lg h-48 drop-shadow-4xl'>
            <div className=''>
              xxx
            </div>
            <div className=''>
              xxx
            </div>
            <div className=''>
              xxx
            </div>
          </div>
        </div>
        <div class="col-start-1 col-end-7 bg-purple-400 rounded-l">
          <div className='flex flex-col bg-purple-300 rounded-lg h-48 drop-shadow-3xl'>
            <div className=''>
              xxx
            </div>
            <div className=''>
              xxx
            </div>
            <div className=''>
              xxx
            </div>
          </div>
        </div>
      </div>

      <Divivder />

      <div className="text-sky-200 underline-offset-1 underline text-center">Grid Cols 12</div>
      <div className="grid grid-cols-12 grid-flow-col gap-4">
        <div className="col-span-2 bg-purple-300 rounded-lg h-48 drop-shadow-3xl">01</div>
        <div className="col-span-8 bg-purple-300 rounded-lg h-48 drop-shadow-3xl">02</div>
        <div className="col-span-2 bg-purple-300 rounded-lg h-48 drop-shadow-3xl">03</div>
      </div>
    </div >
  )
}

export default TailwindContent