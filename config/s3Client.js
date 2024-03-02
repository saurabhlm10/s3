const dotenv = require("dotenv");
dotenv.config();

const { S3Client } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_ACCESS_KEY_SECRET,
  },
});

module.exports = s3Client;
