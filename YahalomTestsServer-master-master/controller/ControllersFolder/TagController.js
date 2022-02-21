const container = require("../../containerConfig");

const TagService = container.resolve("TagService");

exports.CreateTag = async (req) => {
  const result = await TagService.createTag(req);
  return result;
};

exports.GetAllTags = async () => {
  const result = await TagService.GetAllTags();
  return result;
};

exports.UpdateTag = async (req) => {
  const result = await TagService.UpdateTag(req);
  return result;
};

exports.DeleteTag = async (req) => {
  const result = await TagService.DeleteTag(req.TagId);
  return result;
};
