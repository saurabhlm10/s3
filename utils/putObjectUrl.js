const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const s3Client = require("../config/s3Client");

async function putObject(filename, contentType) {
  const command = new PutObjectCommand({
    Bucket: "example.saurabhsuryavanshi.com",
    Key: "uploads/" + filename,
    ContentType: contentType,
  });

  const url = await getSignedUrl(s3Client, command);
  return url;
}

module.exports = { putObject };
