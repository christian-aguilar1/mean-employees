const employeesController = {};

employeesController.getEmployees = (req, res) => {
  res.send("get all employees");
};
employeesController.getEmployee = (req, res) => {
  res.send("get one employee");
};
employeesController.createEmployee = (req, res) => {
  res.send("create one employee");
};
employeesController.updateEmployee = (req, res) => {
  res.send("update one employee");
};
employeesController.deleteEmployee = (req, res) => {
  res.send("delete one employee");
};

module.exports = employeesController;
