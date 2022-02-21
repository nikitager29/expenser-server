const container = require("../../containerConfig");

const AnswerService = container.resolve("AnswerService");

exports.CreateAnswer = async (req) => {
  const result = await AnswerService.createAnswer(req);
  return result;
};

exports.GetAllAnswers = async () => {
  const result = await AnswerService.GetAllAnswers();
  return result;
};

exports.UpdateAnswer = async (req) => {
  const result = await AnswerService.UpdateAnswer(req);
  return result;
};

exports.DeleteAnswer = async (req) => {
  const result = await AnswerService.DeleteAnswer(req.AnswerId);
  return result;
};