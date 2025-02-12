import React, {Dispatch, SetStateAction} from 'react';
import Image from "next/image";
import ticket from "@/assets/images/ticket.png"
import user from "@/assets/images/user.png"

function Ready({setStep}: { setStep: Dispatch<SetStateAction<number>> }) {
  return (
      <>

        <div className={'flex flex-col gap-3'}>
          <span className={'font-alatsi text-center text-[24px] lg:text-[32px] text-[#fff] tracking-wide'}>Your Ticket is Booked!</span>
          <span className={'text-white text-center text-[16px]'}>You can download or Check your email for a copy</span>
        </div>

        {/*ticket start*/}
        <div className={'relative'}>
          <Image src={ticket} alt='ticket template'/>
          <div
            className={'absolute top-[40%] right-[50%] translate-x-[50%] -translate-y-[50%] w-[260px] h-[446px] border border-[#24A0B5] rounded-[16px] flex flex-col items-center text-center p-4 gap-4 '}>
            <div>
              <p className={'font-secondary text-white text-[34px] lg:text-[34px]'}>Techember Fest ”25</p>
              <p className={'text-white text-[10px] mb-2 '}>📍 04 Rumens road, Ikoyi, Lagos</p>
              <p className={'text-white text-[10px] '}>📅 March 15, 2025 | 7:00 PM</p>
            </div>
            <div className={'border border-[#24A0B5] rounded-[12px]'}>
              <Image src={user} alt={"user image"}/>
            </div>
            <div className={'grid grid-cols-2  w-full bg-[#08343C] border border-[#133D44] rounded-[8px]  p-4 '}>
              <div className={'flex flex-col gap-2 py-2 text-left border-r border-b border-[#12464E] '}>
                <span className={'text-[10px]  text-white opacity-[33%] tracking-wide'}>Enter your name</span>
                <span className={'font-bold text-[12px] text-white tracking-wide'}>AVI Chukwu</span>
              </div>
              <div className={'flex  flex-col text-left pl-4 gap-2 py-2 border-b border-[#12464E]'}>
                <span className={'text-[10px] text-white opacity-[33%] tracking-wide'}>Enter your email*</span>
                <span className={'font-bold text-[12px] text-white tracking-wide'}>user@email.com</span>
              </div>
              <div className={'flex text-left flex-col gap-2 py-2 border-r border-b border-[#12464E]'}>
                <span className={'text-[10px] text-white opacity-[33%] tracking-wide'}>Ticket Type:</span>
                <span className={'text-[12px] text-white tracking-wide'}>VIP</span>
              </div>
              <div className={'flex flex-col text-left pl-4 py-2 gap-2 border-b border-[#12464E]'}>
                <span className={'text-[10px] text-white opacity-[33%] tracking-wide'}>Ticket for:</span>
                <span className={'text-[12px] text-white tracking-wide'}>1</span>
              </div>
              <div className={'flex col-start-1 col-end-3 flex-col text-left gap-2 pt-1 '}>
                <span className={'text-[10px] text-white opacity-[33%] tracking-wide'}>Special request?</span>
                <span className={'text-[10px] text-white tracking-wide'}>Nil ? Or the users sad story they write in there gets this whole space, Max of three rows</span>
              </div>
            </div>
          </div>

          <div className={'text-center w-[236px] absolute bottom-8 right-[50%] translate-x-[50%]'} >
            <img alt='Barcode Generator TEC-IT'
                 src='https://barcode.tec-it.com/barcode.ashx?data=ABC-abc-1234&code=Code128&translate-esc=on'/>
          </div>
        </div>
        {/*ticket start*/}
        {/*actions*/}
        <div
          className={'flex-col-reverse font-primary text-[16px] w-full lg:flex-row  lg:gap-8 flex items-center'}>
          <button type={'button'} onClick={() => {
            setStep(1)
            window.scrollTo({top: 0, behavior: 'smooth'})
          }}
                  className={'bg-transparent hover:border-red-600 hover:text-red-600 transition-all duration-300 border w-full text-[#24A0B5] border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Book
            Another Ticket
          </button>
          <button type={'button'} onClick={() => {
            setStep(3)
            window.scrollTo({top: 0, behavior: 'smooth'})
          }}
                  className={'bg-[#24A0B5] mb-4 lg:mb-0 hover:bg-[#19707f] transition-all border w-full text-white border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Download Ticket
          </button>
        </div>
      </>
  );
}

export default Ready;
