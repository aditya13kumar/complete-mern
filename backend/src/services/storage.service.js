const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey:process.env.IMG_PRIVATE_KEY,
    publicKey:process.env.IMGKIT_PUBLIC_KEY,
    IMGKIT_URL_ENDPOINT:process.env.IMGKIT_URL_ENDPOINT
});

async function uploadImg(file){
    const response = await imagekit.files.upload({
        file:file.buffer.toString('base64'),
        fileName:file.originalname
    })
    console.log(response);
}

module.exports ={uploadImg};