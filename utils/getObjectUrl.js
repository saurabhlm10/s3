const s3Client = require("../config/s3Client");

const { GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

async function getObjectUrl(key) {
  const command = new GetObjectCommand({
    Bucket: "example.saurabhsuryavanshi.com",
    Key: key,
  });

  const url = await getSignedUrl(s3Client, command);
  return url;
}

module.exports = { getObjectUrl };
