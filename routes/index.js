const express = require('express');
const speakerRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (req, res) => {
    const topSpeakers = await speakersService.getList();
    const artworks = await speakersService.getAllArtwork();

    res.render('layout', { pageTitle: 'Welcome', template: 'index', topSpeakers, artworks });
  });

  router.use('/speakers', speakerRoute(params));
  router.use('/feedbacks', feedbackRoute(params));

  return router;
};
