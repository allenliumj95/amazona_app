import dotenv from 'dotenv'

dotenv.config();

console.log(process.env.accessKeyId, process.env.seceretAccessKey)

export default {
  PORT: process.env.PORT || 5000;
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/amazona',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  seceretAccessKey: process.env.seceretAccessKey || 'seceretAccessKey',
  AWS_SDK_LOAD_CONFIG: 1
}