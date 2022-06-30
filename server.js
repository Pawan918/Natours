const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`);
process.on('uncaughtException', (err) => {
  console.log('UNHANDLER EXCEPTION!SHUTTING DOWN😡😡');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require(`./app`);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con.connection);
    console.log('DB connection is succesful');
  });
// console.log(process.env);
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLER REJECTION!SHUTTING DOWN😡😡');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
