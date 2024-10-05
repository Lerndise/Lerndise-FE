"use client";
import * as React from 'react'
import SearchInput from './ui/search';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { BellDot, ChevronDown } from 'lucide-react';

const Header = () => {
    const [search, setSearch] = React.useState<string>("")

    const user = {
        name: "CH",
        imgSrc: "https://github.com/shadcn.png",
        fullName: "Coded Hola"
    }
  return (
    <header className='flex justify-between w-full p-4'>
        <div className='w-8/12 ml-4 items-start mt-4 bg-white-a700'>
            <SearchInput search={search} setSearch={() => setSearch} />
        </div>
        <div className='flex w-60 p-2 mt-2'>
            <div className='mr-4 mt-2'>
                <BellDot />
            </div>
            <div className='ml-2 cursor-pointer' >
                <Avatar>
                    <AvatarImage src={user.imgSrc} />
                    <AvatarFallback>{user.name}</AvatarFallback>
                </Avatar>
            </div>
            <div className='flex mt-2 ml-2'>
                <h4>{user.fullName}</h4>
                <ChevronDown />
            </div>
        </div>
    </header>
  );
}

export default Header;