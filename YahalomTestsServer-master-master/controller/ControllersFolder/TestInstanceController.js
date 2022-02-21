const container = require("../../containerConfig");

const TestInstanceService = container.resolve("TestInstanceService");

exports.CreateTestInstance = async (req) => {
  const result = await TestInstanceService.createTestInstance(req);
  return result;
};

exports.GetAllTestInstances = async () => {
  const result = await TestInstanceService.GetAllTestInstances();
  return result;
};

exports.UpdateTestInstance = async (req) => {
  const result = await TestInstanceService.UpdateTestInstance(req);
  return result;
};

exports.DeleteTestInstance = async (req) => {
  const result = await TestInstanceService.DeleteTestInstance(req.TestInstanceId);
  return result;
};
