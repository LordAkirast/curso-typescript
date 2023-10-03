import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv';

// Carregue as variáveis de ambiente do arquivo .env para testes
dotenv.config();

const prisma = new PrismaClient();

export default prisma;