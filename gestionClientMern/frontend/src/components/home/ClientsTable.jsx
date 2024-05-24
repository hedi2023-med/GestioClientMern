import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import PropTypes from 'prop-types';

const ClientTableRow = ({ client, index }) => (
  <tr key={client._id} className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
    <td className="py-4 px-6">{index + 1}</td>
    <td className="py-4 px-6">{client.fullName}</td>
    <td className="py-4 px-6">{client.email}</td>
    <td className="py-4 px-6">{client.phoneNumber}</td>
    <td className="py-4 px-6">
      <div className="flex items-center justify-center space-x-4">
        <InfoLink clientId={client._id} />
        <EditLink clientId={client._id} />
        <DeleteLink clientId={client._id} />
      </div>
    </td>
  </tr>
);

const InfoLink = ({ clientId }) => (
  <Link to={`/deal/${clientId}`} className="text-gray-500 hover:text-blue-500 transition-colors duration-200">
    <BsInfoCircle className="text-2xl" />
  </Link>
);

const EditLink = ({ clientId }) => (
  <Link to={`/clients/edit/${clientId}`} className="text-yellow-500 hover:text-yellow-700 transition-colors duration-200">
    <AiOutlineEdit className="text-2xl" />
  </Link>
);

const DeleteLink = ({ clientId }) => (
  <Link to={`/clients/delete/${clientId}`} className="text-red-500 hover:text-red-700 transition-colors duration-200">
    <MdOutlineDelete className="text-2xl" />
  </Link>
);

const ClientsTable = ({ clients }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-lg">
      <thead className="bg-gray-50">
        <tr>
          <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
          <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
          <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
          <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operations</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {clients.map((client, index) => (
          <ClientTableRow key={client._id} client={client} index={index} />
        ))}
      </tbody>
    </table>
  </div>
);

ClientTableRow.propTypes = {
  client: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

InfoLink.propTypes = {
  clientId: PropTypes.string.isRequired,
};

EditLink.propTypes = {
  clientId: PropTypes.string.isRequired,
};

DeleteLink.propTypes = {
  clientId: PropTypes.string.isRequired,
};

ClientsTable.propTypes = {
  clients: PropTypes.array.isRequired,
};

export default ClientsTable;
