import cors from 'cors'
import express from 'express'
import { PrismaClient } from '@prisma/client';
import { ZenStackMiddleware } from '@zenstackhq/server/express';
import RestApiHandler from '@zenstackhq/server/api/rest';

const app = express()


app.use(express.json())


app.use(cors())

// app.get("/", (req, res) => res.send("Express on Vercel"));

 app.listen(3000, () => console.log("Server ready on port 3000."));

const prisma = new PrismaClient();


// Configuration CORS
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? 'https://olympic-ap-imap.vercel.app' : '*',
    optionsSuccessStatus: 200 // pour la compatibilité avec d'anciens navigateurs
  };
  
  app.use(cors(corsOptions));


  const apiHandler = RestApiHandler({ endpoint: `${process.env.API_ENDPOINT || 'http://localhost:3000'}/api` });
app.use('/api', ZenStackMiddleware({ 
    getPrisma: () => prisma,
    handler: apiHandler 
}));

module.exports = app;

export default app;