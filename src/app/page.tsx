'use client'
import {useState} from "react";
import Steps from "@/components/Steps";
import TicketSelection from "@/components/TicketSelection";
import AttendeeDetails from "@/components/AttendeeDetails";
import Ready from "@/components/Ready";

export default function Home() {
  const [step, setStep] = useState(3)
  return (
    <div
      className={'max-w-[700px] bg-[#08252B] lg:bg-[#041E23] flex flex-col gap-10 mx-auto border border-[#0E464F] rounded-[40px] p-10 lg:p-16'}>
      {/*Step start*/}
      <Steps step={step}/>
      {/*Step end*/}

      {/*  event Start*/}
      <form
        className={`${step != 3 ? 'lg:bg-[#08252B] lg:border border-[#0E464F]' : ""} flex flex-col items-center gap-14 rounded-[32px] lg:p-8`}>

        {step === 1 && <TicketSelection setStep={setStep}/>}
        {step === 2 && <AttendeeDetails setStep={setStep}/>}
        {step === 3 && <Ready setStep={setStep}/>}
      </form>
      {/*  event end*/}
    </div>
  );
}
