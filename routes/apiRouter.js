const express = require('express');
const apiRouter = express.Router();
const {getRequestHeader} = require('../controllers/apiController');

function router() {

  apiRouter.get('/whoami', getRequestHeader);

  return apiRouter;

}

module.exports = router();