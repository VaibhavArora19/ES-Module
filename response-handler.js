// const path = require('path');
import path from 'path';

// We can export it in two ways.  First way is
// export const responseHandler = (req, res, next) => {...}

const resHandler = (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}


// And the other way is
export default resHandler;