/**
 * Selection page for project
 */
exports.select = (req, res) => {
  res.render('project/select', {
    title: 'Pick a Project Template'
  });
};
