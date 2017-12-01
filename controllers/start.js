/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('start', {
    title: 'Start'
  });
};
