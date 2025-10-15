import dotenv from 'dotenv';

async function globalSetup(): Promise<void> {
  dotenv.config();
}

export default globalSetup;
