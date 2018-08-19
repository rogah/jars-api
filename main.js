// @flow

import app from './server';

app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}!`);
});