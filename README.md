# heroku-babel-express-boilerplate
Simple ExpressJS app boilerplate.

## Features
* Development and production scripts,
* Babel integration,
* Bunyan logger,
* Heroku deployment support,
* Airbnb's ESLint config.

## Development
```bash
npm install --dev
npm run dev

open http://localhost:3000/
```

## Production
```bash
# Build
npm install --dev
npm run build
npm prune --production

# Run
NODE_ENV=production npm start
```

## Deployment to Heroku
```bash
heroku create
git push heroku master

heroku open
```
## License
MIT
