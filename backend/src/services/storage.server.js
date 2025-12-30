const ImageKit = require("imagekit");

const imageKit = new ImageKit({
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT
});


async function uploadFile(file, fileName) {
        const response = await imageKit.upload({
            file: file, //required
            fileName: fileName, //required
        });
        return response;
    }

module.exports = {
    uploadFile
};