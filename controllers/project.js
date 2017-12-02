
const Project = require('../models/Project');

/**
 * Selection page for project
 */
exports.select = (req, res) => {
  res.render('project/select', {
    title: 'Pick a Project Template'
  });
};

/**
 * Brief page
 */
exports.brief = (req, res) => {
  res.render('project/brief', {});
};

/**
 * Inspiration page
 */
exports.inspiration = (req, res) => {
  res.render('project/inspiration', {});
};

/**
 * Designer page
 */
exports.designer = (req, res) => {
  res.render('project/designer', {});
};

/**
 * Milestone page
 */
exports.milestone = (req, res) => {
  res.render('project/milestone', {});
};

/**
 * Congrats page
 */
exports.congrats = (req, res) => {
  res.render('project/congrats', {});
};

/**
 * Status page
 */
exports.status0 = (req, res) => {
  res.render('project/status', {
    stage: 0
  });
};

exports.status1 = (req, res) => {
  res.render('project/status', {
    stage: 1
  });
};

exports.status2 = (req, res) => {
  res.render('project/status', {
    stage: 2
  });
};

exports.status3 = (req, res) => {
  res.render('project/status', {
    stage: 3
  });
};

exports.status4 = (req, res) => {
  res.render('project/status', {
    stage: 4
  });
};


/**
 * Template page for project
 */
exports.template = (req, res) => {
  res.render('project/template.pug', {
    title: 'Template'
  });
};

exports.new = (req, res, next) => {
  const project = new Project({
    type: "Deep Clean" //req.body.type
  });
  project.save((err,proj) => {
    if (err) { console.log(err); return next(err); }
    console.log(proj);
    // JESSE make this redirect to your next stage
    res.redirect('/project/' + proj._id + '/edit');
  });
};
