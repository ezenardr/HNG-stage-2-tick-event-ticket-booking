import React, {Dispatch, SetStateAction} from 'react';
import {type FormData} from "@/types/FormData";

function TicketSelection({setStep, setFormData, formData}: {
  setStep: Dispatch<SetStateAction<string>>;
  setFormData: Dispatch<SetStateAction<FormData>>;
  formData: FormData;
}) {
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
      <form className={'w-full'}>
        <p className={'text-[16px] text-white tracking-wide mb-4'}>Select Ticket Type:</p>
        <div
          className={'grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-y-10 border border-[#07373F] rounded-[24px] bg-[#052228] p-6'}>
          <label
            className="relative inline-block border border-[#07373F] cursor-pointer h-[110px] w-full lg:w-[158px] rounded-[12px] bg-transparent transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary-500">
            <input className="peer sr-only" id="ticket_type" name={'ticket_type'} value={'regular'} type="radio"
                   onChange={(e) => setFormData({...formData, ticket_type: e.target.value})}
                   checked={formData.ticket_type === 'regular'}
            />
            <div
              className="absolute rounded-[12px] w-full h-full transition-all  peer-checked:bg-[#12464E] text-[#f8fbfd] flex items-start flex-col p-4">
              <span className={'text-white font-semibold text-[24px] mb-1'}>Free</span>
              <span className={'text-[16px] text-[#fafafa] uppercase text-nowrap'}>Regular Access</span>
              <span className={'text-[14px] text-[#d9d9d9]'}>20/52</span>
            </div>
          </label>
          <label
            className="relative inline-block border border-[#07373F] cursor-pointer h-[110px] w-full lg:w-[158px] rounded-[12px] bg-transparent transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary-500">
            <input className="peer sr-only" id="ticket_type" name={'ticket_type'} value={'vip'} type="radio"
                   onChange={(e) => setFormData({...formData, ticket_type: e.target.value})}
                   checked={formData.ticket_type === 'vip'}
            />
            <div
              className="absolute rounded-[12px] w-full h-full transition-all  peer-checked:bg-[#12464E] text-[#f8fbfd] flex items-start flex-col p-4">
              <span className={'text-white font-semibold text-[24px] mb-1'}>$150</span>
              <span className={'text-[16px] text-[#fafafa] uppercase'}>VIP Access</span>
              <span className={'text-[14px] text-[#d9d9d9]'}>20/52</span>
            </div>
          </label>
          <label
            className="relative inline-block border border-[#07373F] cursor-pointer h-[110px] w-full lg:w-[158px] rounded-[12px] bg-transparent transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary-500">
            <input className="peer sr-only" id="ticket_type" name={'ticket_type'} value={'vvip'} type="radio"
                   onChange={(e) => setFormData({...formData, ticket_type: e.target.value})}
                   checked={formData.ticket_type === 'vvip'}
            />
            <div
              className="absolute rounded-[12px] w-full h-full transition-all  peer-checked:bg-[#12464E] text-[#f8fbfd] flex items-start flex-col p-4">
              <span className={'text-white font-semibold text-[24px] mb-1'}>$150</span>
              <span className={'text-[16px] text-[#fafafa] uppercase'}>VVIP Access</span>
              <span className={'text-[14px] text-[#d9d9d9]'}>20/52</span>
            </div>
          </label>
        </div>
      </form>
      {/*  ticket type end*/}

      <div className={'w-full'}>
        <p className={'text-[16px] text-white tracking-wide mb-4'}>Number of Tickets:</p>
        <select
          className={'w-full border border-[#07373F] bg-transparent py-4 px-4 rounded-[12px] text-[16px] text-white'}
          onChange={e => setFormData({...formData, quantity : Number(e.target.value)})}
        >
          <option value={1} className={'bg-[#08252B]'}>1</option>
          <option value={2} className={'bg-[#08252B]'}>2</option>
          <option value={3} className={'bg-[#08252B]'}>3</option>
        </select>
      </div>

      <div
        className={'flex-col-reverse font-primary text-[16px] w-full lg:flex-row lg:gap-8 flex items-center'}>
        <button
          type={'button'}
          onClick={() =>
            window.scrollTo({top: 0, behavior: 'smooth'})
          }
          className={'bg-transparent hover:border-red-600 hover:text-red-600 transition-all duration-300 border w-full text-[#24A0B5] border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Cancel
        </button>
        <button type={'button'} onClick={() => {
          setStep('2')
          localStorage.setItem('step', '2')
          window.scrollTo({top: 0, behavior: 'smooth'})
        }}
                className={'bg-[#24A0B5] mb-4 lg:mb-0 hover:bg-[#19707f] transition-all border w-full text-white border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Next
        </button>
      </div>
    </>
  );
}

export default TicketSelection;