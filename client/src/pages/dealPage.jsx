import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import DealCard from '../components/home/DealCard';  // 

const Deals = () => {
  const { id } = useParams(); 
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/deal/${id}`) 
      .then((response) => {
        setDeals(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]); 

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Deals List</h1>
          <Link
            to={`/deal/create/${id}`}
            className="flex items-center bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors duration-300"
          >
            <MdOutlineAddBox className="text-3xl mr-2" />
            <span className="text-lg">Add Deal</span>
          </Link>
        </div>
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <svg
              className="animate-spin h-8 w-8 text-sky-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 20a8 8 0 100-16v4a4 4 0 110 8z"
              ></path>
            </svg>
            <span className="ml-4 text-sky-500 text-xl">Loading...</span>
          </div>
        ) : (
          <DealCard deals={deals} />
        )}
      </div>
    </div>
  );
};

export default Deals;
