import { FastifyRequest } from "fastify";

const fastify = require('fastify')();
const fastifyCors = require('fastify-cors');

// Register the CORS plugin
fastify.register(fastifyCors, {
    origin: '*', 
    methods: ['GET', 'POST'],  // Allow methods your client will use (GET, POST, etc.)
    allowedHeaders: ['Content-Type'],  
});

interface ZakenParams {
  caseNumber: string;
}

fastify.get('/zaken/:caseNumber', async (request: FastifyRequest<{ Params: ZakenParams }>) => {
  const caseNumber = request.params.caseNumber;
  // Your logic to handle the request and fetch data
  return { caseNumber, data: 'Some data for case ' + caseNumber };
});
