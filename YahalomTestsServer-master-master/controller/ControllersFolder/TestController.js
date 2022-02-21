const container = require("../../containerConfig");

const testService = container.resolve("TestService")

exports.CreateTest = async (req) => {
  const result = await testService.createTest(req);
  return result;
};

exports.GetAllTests = async () => {
  const result = await testService.GetAllTests();
  return result;
};

exports.UpdateTest = async (req) => {
  const result = await testService.UpdateTest(req);
  return result;
};

exports.DeleteTest = async (req) => {
  const result = await testService.DeleteTest(req.TestId);
  return result;
};
