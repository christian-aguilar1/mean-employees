const employeesController = {};
const Employee = require("../models/Employee");

employeesController.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

employeesController.getEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
};

employeesController.createEmployee = async (req, res) => {
  await new Employee(req.body).save((err, employee) => {
    if (err) {
      res.status(500).send({ message: "Error en la petición" });
    } else {
      if (!employee) {
        res.status(404).send({ message: "No se ha podido crear el empleado" });
      } else {
        res.status(200).send({ employee });
      }
    }
  });
};

employeesController.updateEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Empleado updated" });
};

employeesController.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Empleado deleted" });
};

module.exports = employeesController;
