const app = require('./app');
require('./database')

app.listen(4000, () => console.log('server on port'))