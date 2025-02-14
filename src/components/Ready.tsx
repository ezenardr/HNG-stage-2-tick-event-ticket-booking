import React, {Dispatch, SetStateAction} from 'react';
import Image from "next/image";
import ticket from "@/assets/images/ticket.png"

function Ready({setStep}: { setStep: Dispatch<SetStateAction<string>> }) {
  const informations = {
    name : localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    ticket_type : localStorage.getItem('ticket_type'),
    quantity : localStorage.getItem('quantity'),
    about : localStorage.getItem('about'),
    image : localStorage.getItem('image'),
  }
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
            className={'absolute top-[40%] right-[50%] translate-x-[50%] -translate-y-[50%] w-[260px] h-[446px] border border-[#24A0B5] rounded-[16px] flex flex-col items-center text-center p-4 gap-4 overflow-hidden '}>
            <div>
              <p className={'font-secondary text-white text-[34px] lg:text-[34px]'}>Techember Fest ”25</p>
              <p className={'text-white text-[10px] mb-2 '}>📍 04 Rumens road, Ikoyi, Lagos</p>
              <p className={'text-white text-[10px] '}>📅 March 15, 2025 | 7:00 PM</p>
            </div>
            <div className={'border border-[#24A0B5] rounded-[12px]'}>
              {informations.image && <Image src={informations.image} width={140} height={140} alt={"user image"}/>}
            </div>
            <div className={'grid grid-cols-2  w-full bg-[#08343C] border border-[#133D44] rounded-[8px] overflow-hidden  p-4 '}>
              <div className={'flex flex-col gap-2 py-2 text-left border-r border-b border-[#12464E] '}>
                <span className={'text-[10px]  text-white opacity-[33%] tracking-wide'}>Enter your name</span>
                <span className={'font-bold text-[12px] text-white tracking-wide'}>{informations.name}</span>
              </div>
              <div className={'flex  flex-col text-left pl-4 gap-2 py-2 border-b border-[#12464E]'}>
                <span className={'text-[10px] text-white opacity-[33%] tracking-wide'}>Enter your email*</span>
                <span className={'font-bold text-[12px] text-white tracking-wide'}>{informations.email}</span>
              </div>
              <div className={'flex text-left flex-col gap-2 py-2 border-r border-b border-[#12464E]'}>
                <span className={'text-[10px] text-white opacity-[33%] tracking-wide'}>Ticket Type:</span>
                <span className={'text-[12px] text-white tracking-wide'}>{informations.ticket_type && informations.ticket_type.toUpperCase()}</span>
              </div>
              <div className={'flex flex-col text-left pl-4 py-2 gap-2 border-b border-[#12464E]'}>
                <span className={'text-[10px] text-white opacity-[33%] tracking-wide'}>Ticket for:</span>
                <span className={'text-[12px] text-white tracking-wide'}>{informations.quantity}</span>
              </div>
              <div className={'flex col-start-1 col-end-3 flex-col text-left gap-2 pt-1 '}>
                <span className={'text-[10px] text-white opacity-[33%] tracking-wide'}>Special request?</span>
                <span className={'text-[10px] text-white tracking-wide'}>{informations.about}</span>
              </div>
            </div>
          </div>

          <div className={'text-center w-[236px] absolute bottom-8 right-[50%] translate-x-[50%]'} >
            <Image alt='Barcode Generator TEC-IT'
                   width={200} height={80}
                 className={'h-[80px] w-full'}
                 src='https://barcode.tec-it.com/barcode.ashx?data=REG-VV-1&code=Code128&translate-esc=on'/>
          </div>
        </div>
        {/*ticket start*/}
        {/*actions*/}
        <div
          className={'flex-col-reverse font-primary text-[16px] w-full lg:flex-row  lg:gap-8 flex items-center'}>
          <button type={'button'} onClick={() => {
            setStep('1')
            localStorage.clear()
            window.scrollTo({top: 0, behavior: 'smooth'})
          }}
                  className={'bg-transparent hover:text-white hover:bg-[#19707f] transition-all duration-300 border w-full text-[#24A0B5] border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Book
            Another Ticket
          </button>
          <button type={'button'} onClick={() => {
            setStep('3')
            localStorage.setItem('step', '3')
            window.scrollTo({top: 0, behavior: 'smooth'})
          }}
                  className={'bg-[#24A0B5] mb-4 lg:mb-0 hover:bg-[#19707f] transition-all border w-full text-white border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Download Ticket
          </button>
        </div>
      </>
  );
}

export default Ready;
