// memanggil package mongoose
const mongoose = require('mongoose');
// memanggil package config
const config = require('config');
// memanggil koneksi database (mongoURI)
const db = config.get('mongoURI');
// koneksi db dengan "promise" async await
const connectDB = async () => {
try {
await mongoose.connect(db, {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true,
  useFindAndModify: false
});
console.log('MongoDB Connected...')
} catch(err) {
console.error(err.message);
// exit proses with failure
process.exit(1);
}

}
// export module
module.exports = connectDB;