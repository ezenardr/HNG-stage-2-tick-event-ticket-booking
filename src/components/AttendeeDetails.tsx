import React, {Dispatch, SetStateAction, useState} from 'react';
import type {FormData} from "@/types/FormData";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ticketFormSchema, TypeTicketFormSchema} from "@/types/AttendeeDetails";
import Image from "next/image";
import {supabaseClient} from "@/lib/supabase";

function AttendeeDetails({setStep, setFormData, formData}: {
  setStep: Dispatch<SetStateAction<string>>;
  setFormData: Dispatch<SetStateAction<FormData>>;
  formData: FormData;
}) {

  const {register, trigger, setValue, handleSubmit, formState: {errors}} = useForm<TypeTicketFormSchema>({
      resolver: zodResolver(ticketFormSchema),
      defaultValues: {
        about: localStorage.getItem('about') || '',
        name: localStorage.getItem('name') || '',
        email: localStorage.getItem('email') || '',
      }
    }
  )
  const [uploading, setUploading] = useState(false);
  // const [imageUrl, setImageUrl] = useState<string | null>(localStorage.getItem('image'));
  const [preview, setPreview] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file);
      trigger("image"); // Validate field
      setPreview(URL.createObjectURL(file)); // Generate preview URL
    }
  };
  async function uploadImage(file: File) {
    setUploading(true);
    const imageFile = file;

      const { data } = await supabaseClient.storage
        .from("images")
        .upload(`${imageFile.name}`, imageFile);
      if (data) {
        supabaseClient.storage
          .from("images")
          .createSignedUrl(data.path, 126227808)
          .then(({ data }) => {
            if (data) {
              // setImageUrl(data.signedUrl)
              localStorage.setItem('image', data.signedUrl)
              setPreview(null)
            }
          });
      }
  }

  async function submitHandler(data: TypeTicketFormSchema) {
    setFormData({...formData, name: data.name, email: data.email, about: data.about});
    localStorage.setItem('name', data.name)
    localStorage.setItem('email', data.email)
    localStorage.setItem('about', data.about ?? "")
    localStorage.setItem('ticket_type', formData.ticket_type)
    localStorage.setItem('quantity', String(formData.quantity))
    if(data.image){
      await uploadImage(data.image)
    }
    setTimeout(()=>{
      setUploading(false);
      setStep('3')
      localStorage.setItem('step', '3')
      window.scrollTo({top: 0, behavior: 'smooth'})
    }, 3000)

  }

  return (
    <form className={'w-full  flex flex-col items-center gap-14 lg:p-8'} onSubmit={handleSubmit(submitHandler)}>
      {uploading && <div className="card">
          <div className="loader">
              <p>loading</p>
              <div className="words">
                  <span className="word">ticket</span>
                  <span className="word">picture</span>
                  <span className="word">ui</span>
                  <span className="word">informations</span>
                  <span className="word">ticket</span>
              </div>
          </div>
      </div>}
      {/*upload image start*/}
      <div
        className={'bg-[#052228] lg:bg-[#052228] flex flex-col gap-12 w-full border border-[#07373F] rounded-[24px] p-8 pb-16'}>
        <span className={'text-[16px]  text-white tracking-wide pb-4'}>Upload Profile Photo</span>
        <div className={"bg-[#052228]lg:bg-[#041c20] relative  h-[200px] flex justify-center "}>
          <div
            className={'bg-[#0E464F] border-4 border-[#24A0B5]  flex flex-col gap-4 justify-center items-center w-[240px] rounded-[32px] h-[240px] absolute -top-10 overflow-hidden'}>
            {preview && <Image width={240} height={240}
                              src={preview}
                              alt="Preview"
            />}
            {(!preview) &&  <>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M25.2639 14.816C24.6812 10.2266 20.7505 6.66663 16.0052 6.66663C12.3305 6.66663 9.13854 8.81463 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6666C2.67188 22.3426 5.66254 25.3333 9.33854 25.3333H10.6719V22.6666H9.33854C7.13321 22.6666 5.33854 20.872 5.33854 18.6666C5.33854 16.7946 6.93721 14.9906 8.90254 14.6453L9.67721 14.5093L9.93321 13.7653C10.8705 11.0306 13.1972 9.33329 16.0052 9.33329C19.6812 9.33329 22.6719 12.324 22.6719 16V17.3333H24.0052C25.4759 17.3333 26.6719 18.5293 26.6719 20C26.6719 21.4706 25.4759 22.6666 24.0052 22.6666H21.3385V25.3333H24.0052C26.9465 25.3333 29.3385 22.9413 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7046C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z"
                        fill="#FAFAFA"/>
                    <path d="M17.3385 18.6666V13.3333H14.6719V18.6666H10.6719L16.0052 25.3333L21.3385 18.6666H17.3385Z"
                          fill="#FAFAFA"/>
                </svg>
                <span
                    className={'text-white text-[16px] max-w-[192px] text-center'}>Drag & drop or click to upload</span></>}
            <input type={'file'} accept={'image/*'}
                   className={'opacity-0 absolute w-full h-full cursor-pointer'}
                   onChange={handleFileChange}/>
          </div>
        </div>
      </div>

      {errors.image && <span className={'text-[12px] text-red-500 tracking-wide pl-3'}>{errors.image.message}</span>}
      {/*upload image end*/}

      {/*separator start*/}
      <div className={'w-full h-[4px] bg-[#07373F]'}></div>
      {/*separator end*/}

      <div className={'w-full flex flex-col gap-2'}>
        <label htmlFor={'name'} className={'text-[16px] tracking-wide text-white'}>Enter your name</label>
        <input type={'text'} id={'name'} {...register('name')}
               className={'rounded-[12px] text-white text-[16px] border border-[#07373F] py-5 bg-transparent px-3'}/>
        {errors.name && <span className={'text-[12px] text-red-500 tracking-wide pl-3'}>{errors.name.message}</span>}

      </div>

      <div className={'w-full flex flex-col gap-2'}>
        <label htmlFor={'email'} className={'text-[16px] tracking-wide text-white'}>Enter your email *</label>
        <div
          className={'rounded-[12px] flex items-center gap-4 text-white text-[16px] border border-[#07373F]  bg-transparent pl-3'}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z"
              fill="white"/>
          </svg>
          <input type={'email'} id={'email'} {...register('email')}
                 className={'rounded-[12px] w-full text-white text-[16px] py-5 bg-transparent px-3'}/>
        </div>
        {errors.email && <span className={'text-[12px] text-red-500 tracking-wide pl-3'}>{errors.email.message}</span>}

      </div>

      <div className={'w-full flex flex-col gap-2'}>
        <label htmlFor={'about'} className={'text-[16px] tracking-wide text-white'}>Special request?</label>
        <textarea id={'about'}
                  {...register('about')}
                  placeholder={'Textarea'} maxLength={15}
                  className={'rounded-[12px] h-[127px] resize-none text-white text-[16px] border border-[#07373F] py-5 bg-transparent px-3'}/>
        {errors.about && <span className={'text-[12px] text-red-500 tracking-wide pl-3'}>{errors.about.message}</span>}
      </div>

      {/*actions*/}
      <div
        className={'flex-col-reverse font-primary text-[16px] w-full lg:flex-row lg:gap-8 flex items-center'}>
        <button type={'button'} onClick={() => {
          setStep('1')
          localStorage.setItem('step', '1')
        }}
                className={'bg-transparent hover:border-red-600 hover:text-red-600 transition-all duration-300 border w-full text-[#24A0B5] border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Back
        </button>
        <button type={'submit'}
                className={'bg-[#24A0B5] mb-4 lg:mb-0 hover:bg-[#19707f] transition-all border w-full text-white border-[#24A0B5] rounded-[8px] py-4 tracking-wide '}>Get
          My Free Ticket
        </button>
      </div>
    </form>
  );
}

export default AttendeeDetails;