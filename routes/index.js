const express = require('express');
const speakerRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (req, res) => {
    if (!req.session.visitCount) {
      req.session.visitCount = 0;
    }

    req.session.visitCount += 1;
    console.log(`Number of Visits ${req.session.visitCount}`);

    res.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', speakerRoute(params));
  router.use('/feedbacks', feedbackRoute(params));

  return router;
};
