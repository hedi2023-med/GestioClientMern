import React, { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';

const CreateDeal = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    startDate: '',
    closeDate: '',
    amount: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/deal/create/${id}`, formData); // Assuming the route for creating deals is '/deal/create'
      navigate(`/deal/${id}`);
    } catch (error) {
      console.error('Error creating deal', error);
    }
  };

  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'>
      <div className='w-[600px] max-w-full h-[600px] max-h-full bg-white p-4 rounded-lg overflow-auto'>
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl'>Create Deal</h2>
          <button onClick={() => navigate(`/deal/${id}`)}>
            <AiOutlineClose className='text-red-700 hover:text-red-500 text-2xl' />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Title
            </label>
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Start Date
            </label>
            <input
              type='date'
              name='startDate'
              value={formData.startDate}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Close Date
            </label>
            <input
              type='date'
              name='closeDate'
              value={formData.closeDate}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Amount
            </label>
            <input
              type='number'
              name='amount'
              value={formData.amount}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Create
            </button>
            <button
              type='button'
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              onClick={() => navigate(`/deal/${id}`)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDeal;
