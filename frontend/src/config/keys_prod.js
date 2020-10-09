module.exports = {
    mongoURI: process.env.REACT_APP_MONGO_URI,
    secretOrKey: process.env.REACT_APP_SECRET_OR_KEY,
    googleMapsApi: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    hikingProjectKey: process.env.REACT_APP_HIKING_PROJECT_API,
    aws: {
      bucketName: process.env.REACT_APP_BUCKETNAME,
      uploadedFileURL: process.env.REACT_APP_FILEURL,
      accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
      region: "ap-northeast-2"
    }
  }