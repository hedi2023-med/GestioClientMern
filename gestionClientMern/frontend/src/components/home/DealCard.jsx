import DealSingleCard from './DealSingleCard';  // Corrected import name

const DealCard = ({ deals }) => {
  // Add a defensive check for deals
  if (!deals || !Array.isArray(deals)) {
    return <div>No deals available.</div>;
  }

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {deals.map((deal) => (
        <DealSingleCard key={deal._id} deal={deal} />
      ))}
    </div>
  );
};

export default DealCard;
