const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dcuceqwyn", //Your Cloudinary name
  api_key: "885743143488633",  //cloudinary api_key
  api_secret: "7BsDa53syXhfg4A-Sb_kwyG54mM", // cloudinary api_secret
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };