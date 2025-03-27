import fastify, { FastifyRequest } from 'fastify';
import fastifyCors from 'fastify-cors';

const app = fastify();

app.options

app.register(fastifyCors, {
  origin: '*', // Allow all origins
});

app.get("/", async (request, reply) => {
  return { message: "Hello, World!" };
});

// Handle all routes with proper logging
app.listen({ port: 3003, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error('Error starting Fastify server:', err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});

