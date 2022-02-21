const container = require("../../containerConfig");

const CompanyService = container.resolve("CompanyService");

exports.CreateCompany = async (req) => {
  const result = await CompanyService.createCompany(req);
  return result;
};

exports.GetAllCompanys = async () => {
  const result = await CompanyService.GetAllCompanys();
  return result;
};

exports.UpdateCompany = async (req) => {
  const result = await CompanyService.UpdateCompany(req);
  return result;
};

exports.DeleteCompany = async (req) => {
  const result = await CompanyService.DeleteCompany(req.CompanyId);
  return result;
};