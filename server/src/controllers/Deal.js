const Deal = require('../models/Deal');


  exports.create= async (request, response) => {
        const { clientId } = request.params
        console.log(request)
        try {
            if (
                !request.body.title ||
                !request.body.startDate ||
                !request.body.amount ||
                !request.body.startDate
            ) {
                return response.status(400).send({
                    message: 'Send all required fields: title, startDate, startDate, amount',
                });
            }
            const newDeal= {
                ...request.body,
                clientId: clientId, 
            };
    
            const deal = await Deal.create(newDeal);
        
            return response.status(201).send(deal);
        } catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message });
        }
    },
    exports.getByClientId= async (request, response) => {
        const { clientId } = request.params
        try {
            const result = await Deal.find({clientId});
        
            return response.status(200).json({
              count: result.length,
              data: result,
            });
          } catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message });
          }
    },
    exports.getById= async (request, response) => {
      const { DealId } = request.params
      try {
          const result = await Deal.findById(DealId);
      
          return response.status(200).json({
            data: result,
          });
        } catch (error) {
          console.log(error.message);
          response.status(500).send({ message: error.message });
        }
  },
    exports.update= async (request, response) => {


        try {
            if (
                !request.body.title ||
                !request.body.startDate ||
                !request.body.amount ||
                !request.body.startDate
              ) {
                return response.status(400).send({
                  message: 'Send all required fields: title, startDate, startDate,amount',
                });
              }
        
            const { DealId } = request.params;
        
            const result = await Deal.findByIdAndUpdate(DealId, request.body);
        
            if (!result) {
              return response.status(404).json({ message: 'Deal not found' });
            }
        
            return response.status(200).send({ message: 'Deal updated successfully' });
          } catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message });
          }
    },
    exports.delete= async (request, response) => {
        try {
            const { DealId } = request.params;
        
            const result = await Deal.findByIdAndDelete(DealId);
        
            if (!result) {
              return response.status(404).json({ message: 'Deal not found' });
            }
        
            return response.status(200).send({ message: 'Deal deleted successfully' });
          } catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message });
          }
    }