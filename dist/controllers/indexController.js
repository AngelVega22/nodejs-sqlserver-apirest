"use strict";

exports.index = function (req, res, next) {
  res.send({
    Express: 'Working'
  });
};