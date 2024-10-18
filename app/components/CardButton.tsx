import React from 'react'
type LinkButtonProps = {
    Icon: React.ReactNode;
    title: string
};
const CardButton: React.FC<LinkButtonProps> = ({ title, Icon }) => {
    return (
        <button className='flex flex-row py-2 px-4 md:py-3 gap-x-1 items-center text-blue border w-min text-nowrap rounded-full border-blue'><p className='md:font-medium text-sm md:text-base'>{title}</p> {Icon}</button>
    )
}

export default CardButton