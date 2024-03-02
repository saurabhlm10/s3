const { deleteObject } = require("./utils/deleteObject");
const { getObjectUrl } = require("./utils/getObjectUrl");
const { putObject } = require("./utils/putObjectUrl");

async function init() {
  console.log(
    "URL for video1709403075012",
    await getObjectUrl("uploads/video1709403075012")
  );

  //   deleteObject("SampleVideo_1280x720_1mb.mp4");

  //   console.log(
  //     "URL for uploading file",
  //     await putObject("video" + Date.now(), "video/mp4")
  //   );
}

init();
