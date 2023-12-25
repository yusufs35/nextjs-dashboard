"use client"
import { logout } from '@/app/lib/actions';
import { PowerIcon } from '@heroicons/react/24/outline';
import React, { FormEvent, SyntheticEvent } from 'react';

const SignoutButton = () => {


    const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => { 
        e.preventDefault();

        if(!confirm("Are you sure to signout?")) return;

        e.currentTarget.submit();

     }



  return (
    <form action={logout} onSubmit={handleSubmit}>
      <button
        type="submit"
        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <PowerIcon className="w-6" />
        <div className="hidden md:block">Sign Out</div>
      </button>
    </form>
  );
};

export default SignoutButton;
