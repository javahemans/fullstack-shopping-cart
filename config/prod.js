const prod = {
  mongoDBURI: process.env.MONGODB_URI,
  sessionSecret: process.env.SESSION_SECRET,
  seed: process.env.seed,
};

console.log('============== START READING PROD ENV ==============');
console.log(prod);
console.log('============== START READING PROD ENV ==============');
module.exports = prod;