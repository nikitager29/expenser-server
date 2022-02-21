const container = require("../../containerConfig");

const FieldService = container.resolve("FieldOfStudyIdService");

exports.CreateField = async (req) => {
  const result = await FieldService.createField(req);
  return result;
};

exports.GetAllFields = async () => {
  const result = await FieldService.GetAllFields();
  return result;
};

exports.UpdateField = async (req) => {
  const result = await FieldService.UpdateField(req);
  return result;
};

exports.DeleteField = async (req) => {
  const result = await FieldService.DeleteField(req.FieldOfStudyId);
  return result;
};