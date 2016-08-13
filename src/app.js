import express from 'express';
import bunyan from 'bunyan';
import expressBunyanLogger from 'express-bunyan-logger';
import packageJson from '../package.json';

const PORT = process.env.PORT || 3000;
const DEV = process.env.NODE_ENV !== 'production';

const log = bunyan.createLogger({
  name: packageJson.name,
});

const app = express();

if (DEV) {
  app.use(expressBunyanLogger({
    parseUA: false,
    immediate: true,
  }));
  app.use(expressBunyanLogger.errorLogger());
}

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  log.info(`listening on port ${PORT}`);
});
