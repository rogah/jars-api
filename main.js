import app from './server';
import { info } from './logger';

app.listen(app.get('port'), () => {
  info('listening on port %d', app.get('port'));
});
