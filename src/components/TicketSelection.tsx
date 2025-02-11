import React, {Dispatch, SetStateAction} from 'react';

function TicketSelection({setStep}:{setStep: Dispatch<SetStateAction<number>>}) {
  return (
    <>
      {/* event banner start*/}
      <div
        className={'text-[#f8fbfd] bg-gradient-to-br from-[#0c3841] to-[#092227] border border-[#07373F] rounded-[24px] w-full pb-12 text-[16px] flex flex-col items-center text-center'}>
        <p className={'font-secondary text-[48px] lg:text-[62px]'}>Techember Fest ”25</p>
        <p className={'mb-7 tracking-wide max-w-[239px] lg:max-w-[340px]'}>Join us for an unforgettable experience at
          [Event Name]!
          Secure your spot now.</p>
        <div className={'flex flex-col lg:flex-row items-center lg:gap-6 tracking-wide'}>
          <span>📍 [Event Location]</span>
          <span className={'hidden lg:block'}>| |</span>
          <span>March 15, 2025 | 7:00 PM</span>
        </div>
      </div>
      {/* event banner end*/}

      {/*separator start*/}
      <div className={'w-full h-[4px] bg-[#07373F]'}></div>
      {/*separator end*/}

      {/*  ticket type start*/}
      <div className={'w-full'}>
        <p className={'text-[16px] text-white tracking-wide mb-4'}>Select Ticket Type:</p>
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-y-10 border border-[#07373F] rounded-[24px] p-6'}>
          <label
            className="relative inline-block border border-[#07373F] cursor-pointer h-[75px] w-full lg:w-[250px] rounded-[12px] bg-transparent transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary-500">
            <input className="peer sr-only" id="ticket-type" name={'ticket-type'} value={'free'} type="radio"
                   defaultChecked/>
            <div
              className="absolute p-5 rounded-[12px] w-full h-full transition-all  peer-checked:bg-[#197686] text-[#f8fbfd] flex items-start gap-4 justify-between">
              <div className={'flex flex-col gap-2 '}>
                <span className={' text-[16px]'}>REGULAR ACCESS</span>
                <span className={'text-[14px]'}>20 left!</span>
              </div>
              <div
                className={'bg-[#0E464F] w-[80px] border border-[#2BA4B9] text-[#f8fbfd] rounded-[8px] p-2 text-[20px] text-right font-semibold'}>
                Free
              </div>
            </div>
          </label>
          <label
            className="relative inline-block border border-[#07373F] cursor-pointer h-[75px] w-full lg:w-[250px] rounded-[12px] bg-transparent transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary-500">
            <input className="peer sr-only" id="ticket-type" name={'ticket-type'} value={'vip'} type="radio"/>
            <div
              className="absolute p-5 rounded-[12px] w-full h-full transition-all  peer-checked:bg-[#197686] text-[#f8fbfd] flex items-start justify-between
                   gap-4">
              <div className={'flex flex-col gap-2 '}>
                <span className={' text-[16px]'}>VIP ACCESS</span>
                <span className={'text-[14px]'}>20 left!</span>
              </div>
              <div
                className={'bg-[#0E464F] w-[80px] border border-[#2BA4B9] text-[#f8fbfd] rounded-[8px] p-2 text-[20px] text-right font-semibold'}>
                $50
              </div>
            </div>
          </label>
          <label
            className="relative inline-block border border-[#07373F] cursor-pointer h-[75px] w-full lg:w-[250px] rounded-[12px] bg-transparent transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary-500">
            <input className="peer sr-only" id="ticket-type" name={'ticket-type'} value={'vvip'} type="radio"/>
            <div
              className="absolute p-5 rounded-[12px] w-full h-full transition-all  peer-checked:bg-[#197686] text-[#f8fbfd] flex items-start gap-4 justify-between">
              <div className={'flex flex-col gap-2 '}>
                <span className={' text-[16px]'}>VVIP ACCESS</span>
                <span className={'text-[14px]'}>20 left!</span>
              </div>
              <div
                className={'bg-[#0E464F] w-[80px] border border-[#2BA4B9] text-[#f8fbfd] rounded-[8px] p-2 text-[20px] text-right font-semibold'}>
                $150
              </div>
            </div>
          </label>
        </div>
      </div>
      {/*  ticket type end*/}

      <div className={'w-full'}>
        <p className={'text-[16px] text-white tracking-wide mb-4'}>Number of Tickets:</p>
        <select
          className={'w-full border border-[#07373F] bg-transparent py-4 px-4 rounded-[12px] text-[16px] text-white hover:text-black'}>
          <option value={'1'}>1</option>
          <option value={'2'}>2</option>
          <option value={'3'}>3</option>
        </select>
      </div>

      <div
        className={'lg:bg-[#041E23] flex-col-reverse font-primary text-[16px] lg:border border-[#0E464F] rounded-[24px] w-full lg:flex-row flex items-center lg:px-16 lg:gap-12'}>
        <button
          className={'bg-transparent hover:border-red-600 hover:text-red-600 transition-all duration-300 border w-full text-[#24A0B5] border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Cancel
        </button>
        <button type={'button'} onClick={() => {
          setStep(2)
          window.scrollTo({top: 0, behavior: 'smooth'})
        }}
                className={'bg-[#24A0B5] mb-6 lg:mb-0 hover:bg-[#19707f] transition-all border w-full text-white border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Next
        </button>
      </div>
    </>
  );
}

export default TicketSelection;