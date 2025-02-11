import React from 'react';

function Steps({step = 1} :{step:number}) {
  return (
    <>
      {step === 1 && (
        <div className={'flex flex-col gap-5 lg:gap-3'}>
          <div className={'flex flex-col lg:flex-row items-start gap-1 lg:items-center justify-between'}>
            <span className={'font-primary text-[32px] text-white tracking-wide'}>Ticket Selection</span>
            <span className={'text-[16px] text-white'}>Step 1/3</span>
          </div>
          <div className={'grid grid-cols-3'}>
            <div className={'h-[4px] bg-[#24A0B5] rounded-[5px]'}></div>
            <div className={'h-[4px] bg-[#0E464F]'}></div>
            <div className={'h-[4px] bg-[#0E464F] rounded-r-[5px]'}></div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={'flex flex-col gap-5 lg:gap-3'}>
          <div className={'flex flex-col lg:flex-row items-start gap-1 lg:items-center justify-between'}>
            <span className={'font-primary text-[32px] text-white tracking-wide'}>Attendee Details</span>
            <span className={'text-[16px] text-white'}>Step 2/3</span>
          </div>
          <div className={'grid grid-cols-3'}>
            <div className={'h-[4px] bg-[#24A0B5] rounded-l-[5px]'}></div>
            <div className={'h-[4px] bg-[#24A0B5] rounded-r-[5px]'}></div>
            <div className={'h-[4px] bg-[#0E464F] rounded-r-[5px]'}></div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className={'flex flex-col gap-5 lg:gap-3'}>
          <div className={'flex flex-col lg:flex-row items-start gap-1 lg:items-center justify-between'}>
            <span className={'font-primary text-[32px] text-white tracking-wide'}>Ready</span>
            <span className={'text-[16px] text-white'}>Step 3/3</span>
          </div>
          <div className={'grid grid-cols-3'}>
            <div className={'h-[4px] bg-[#24A0B5] rounded-l-[5px]'}></div>
            <div className={'h-[4px] bg-[#24A0B5] '}></div>
            <div className={'h-[4px] bg-[#24A0B5] rounded-r-[5px]'}></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Steps;