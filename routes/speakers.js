const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (req, res) => {
    const speakers = await speakersService.getList();
    const artworks = await speakersService.getAllArtwork();

    res.render('layout', { pageTitle: 'Speakers', template: 'speakers', speakers, artworks });
  });

  router.get('/:shortname', async (req, res) => {
    const speaker = await speakersService.getSpeaker(req.params.shortname);
    const artworks = await speakersService.getArtworkForSpeaker(req.params.shortname);

    res.render('layout', {
      pageTitle: 'Speakers',
      template: 'speakers-detail',
      speaker,
      artworks,
    });
  });

  return router;
};
