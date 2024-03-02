const { DeleteObjectCommand } = require("@aws-sdk/client-s3");
const s3Client = require("../config/s3Client");

async function deleteObject(key) {
  const command = new DeleteObjectCommand({
    Bucket: "example.saurabhsuryavanshi.com",
    Key: key,
  });

  const result = await s3Client.send(command);
  console.log(result);
}

module.exports = { deleteObject };
