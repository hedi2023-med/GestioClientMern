import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import { format } from 'date-fns';

const DealSingleCard = ({ deal }) => {


  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      <div className='flex justify-start items-center gap-x-2'>
        <h2 className='my-1'>{deal.title}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <h2 className='my-1'>{format(new Date(deal.startDate), 'yyyy-MM-dd')}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
      <h2 className='my-1'>{format(new Date(deal.closeDate), 'yyyy-MM-dd')}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <h2 className='my-1'>$ {deal.amount}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <Link to={`/deal/edit/${deal._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        <Link to={`/deal/delete/${deal._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>
    </div>
  );
};

export default DealSingleCard;
