import React from 'react'
import { Search } from 'lucide-react';
import { Input } from './input';

interface SearchProps {
    search: string;
    setSearch: () => void
}

const SearchInput = ( { search, setSearch }: SearchProps) => {

    return (
        <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className='h-5 w-5 text-gray-400' />
            </span>
            <Input type='text' placeholder='Search...' className='pl-10' value={search} onChange={setSearch} />
        </div>
    )
}

export default SearchInput;