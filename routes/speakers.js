const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (req, res) => {
    const speakers = await speakersService.getList();
    const allArtworks = await speakersService.getAllArtwork();

    res.render('layout', { pageTitle: 'Speakers', template: 'speakers', speakers, allArtworks });
  });

  router.get('/:shortname', async (req, res) => {
    const speaker = await speakersService.getSpeaker(req.params.shortname);
    const speakerArtworks = await speakersService.getArtworkForSpeaker(req.params.shortname);

    res.render('layout', {
      pageTitle: 'Speakers',
      template: 'speakers-detail',
      speaker,
      speakerArtworks,
    });
  });

  return router;
};
