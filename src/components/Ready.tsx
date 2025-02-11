import React, {Dispatch, SetStateAction} from 'react';

function Ready({setStep}: { setStep: Dispatch<SetStateAction<number>> }) {
  return (
      <>
        {/*actions*/}
        <div
          className={'flex-col-reverse font-primary text-[16px] w-full lg:flex-row gap-8 flex items-center'}>
          <button type={'button'} onClick={() => {
            setStep(1)
            window.scrollTo({top: 0, behavior: 'smooth'})
          }}
                  className={'bg-transparent hover:border-red-600 hover:text-red-600 transition-all duration-300 border w-full text-[#24A0B5] border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Book Another Ticket
          </button>
          <button type={'button'} onClick={() => {
            setStep(3)
            window.scrollTo({top: 0, behavior: 'smooth'})
          }}
                  className={'bg-[#24A0B5] mb-6 lg:mb-0 hover:bg-[#19707f] transition-all border w-full text-white border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Download Ticket
          </button>
        </div>
      </>
  );
}

export default Ready;