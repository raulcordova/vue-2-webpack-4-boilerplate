import AWS from "aws-sdk";


let albumBucketName = "dev-podcast-ec";
let bucketRegion = "us-east-1";
let IdentityPoolId = "us-east-1:1be39274-00b9-4160-94f1-e01b8b660006";

AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});


const uploadS3 = function (file, rootFile, functionCallBack) {

    //let file = this.archivoNormal;
    // let albumPhotosKey = encodeURIComponent(albumName) + "//";
    // let photoKey = albumPhotosKey + fileName;

    let fileName = file.name;
    let photoKey = rootFile + '/' + fileName;

    //console.log(photoKey);
    //console.log(file);

    let params = {
        Bucket: albumBucketName,
        Key: photoKey,
        ContentType: file.type,
        CacheControl: "max-age=300",
        Body: file
    };
    let upload = new AWS.S3.ManagedUpload({
        params: params
    });


    upload.on('httpUploadProgress', function (evt) {
        console.log('Progress:', evt.loaded, '/', evt.total);
        if (evt.loaded == evt.total) {
            functionCallBack();
        }
    }).send(function (err, data) {
        console.log('file');
        console.log(err, data);
        console.log('////file');
    });
    return upload;
}
export default uploadS3;