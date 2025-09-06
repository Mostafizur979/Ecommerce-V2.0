import Link from 'next/link';
import React from 'react';


const Breadcrum = ({crums}) => {
  return (
    <div className='w-full flex gap-2 items-center py-4'>
      {
        crums?.map(((crum, idx) => {
          return <div className='flex items-center gap-2' key={idx}>
            {
              crum?.href ? <Link href={crum?.href}>

                <p className='text-[14px] text-[#111111] cursor-pointer'>{crum?.title}</p>
              </Link> : <p className='text-dg-shadow-text text-sm'>{crum?.title}</p>
            }
            {
              !crum?.isCurrent && <p className='text-[14px] text-[#111111]'>/</p>
            }
          </div>
        }))
      }
    </div>
  )
}

export default Breadcrum