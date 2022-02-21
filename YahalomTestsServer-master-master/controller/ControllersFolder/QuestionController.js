const container = require("../../containerConfig");

const QuestionService = container.resolve("QuestionService");

exports.CreateQuestion = async (req) => {
  const result = await QuestionService.createQuestion(req);
  return result;
};

exports.GetAllQuestions = async () => {
  const result = await QuestionService.GetAllQuestions();
  return result;
};

exports.UpdateQuestion = async (req) => {
  const result = await QuestionService.UpdateQuestion(req);
  return result;
};

exports.DeleteQuestion = async (req) => {
  const result = await QuestionService.DeleteQuestion(req.QuestionId);
  return result;
};
