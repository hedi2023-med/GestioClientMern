const Client = require('../models/ClientModel');

const ClientController = {
  create: async (request, response) => {
      try {
          if (
              !request.body.fullName ||
              !request.body.email ||
              !request.body.phoneNumber
          ) {
              return response.status(400).send({
                  message: 'Send all required fields: fullName, email, phoneNumber',
              });
          }
          const newClient = {
              fullName: request.body.fullName,
              email: request.body.email,
              phoneNumber: request.body.phoneNumber,
          };
      
          const client = await Client.create(newClient);
      
          return response.status(201).send(client);
      } catch (error) {
          console.log(error.message);
          response.status(500).send({ message: error.message });
      }
  },
  getAll: async (request, response) => {

      try {
          const Clients = await Client.find({});
      
          return response.status(200).json({
            count: Clients.length,
            data: Clients,
          });
        } catch (error) {
          console.log(error.message);
          response.status(500).send({ message: error.message });
        }

  },
  getById: async (request, response) => {
      try {
          const { clientId } = request.params;
          console.log(clientId)
          const client = await Client.findById(clientId);
      
          return response.status(200).json(client);
        } catch (error) {
          console.log(error.message);
          response.status(500).send({ message: error.message });
        }
  },
  Update: async (request, response) => {
      try {
          if (
            !request.body.fullName ||
            !request.body.email ||
            !request.body.phoneNumber
          ) {
            return response.status(400).send({
              message: 'Send all required fields: fullName, email, phoneNumber',
            });
          }
      
          const { clientId } = request.params;
      
          const result = await Client.findByIdAndUpdate(clientId, request.body);
      
          if (!result) {
            return response.status(404).json({ message: 'Client not found' });
          }
      
          return response.status(200).send({ message: 'Client updated successfully' });
        } catch (error) {
          console.log(error.message);
          response.status(500).send({ message: error.message });
        }
  },
  delete: async (request, response) => {
      try {
          const { clientId } = request.params;
      
          const result = await Client.findByIdAndDelete(clientId);
      
          if (!result) {
            return response.status(404).json({ message: 'Client not found' });
          }
      
          return response.status(200).send({ message: 'Client deleted successfully' });
        } catch (error) {
          console.log(error.message);
          response.status(500).send({ message: error.message });
        }
  }
};

module.exports = ClientController;
