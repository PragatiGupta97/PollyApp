const dropboxV2Api = require('dropbox-v2-api');
const Fs = require('fs');

module.exports = uploadFile = (token, pathToFile, pathToUpload) => {
  // create session ref:
  const dropbox = dropboxV2Api.authenticate({
    token: token
  });

  dropbox({
    resource: 'files/upload',
    parameters: {
      path: pathToUpload,
      mode: "overwrite"
    },
    readStream: Fs.createReadStream(pathToFile)
  }, (err, result, response) => {
    //upload completed
    if (err)
      console.log(err);
    else
      console.log(result);
  });
}


