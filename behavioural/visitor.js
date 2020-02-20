function Employee(name, salary)
{
  this.name = name
  this.salary = salary
}

Employee.prototype = {
  getSalary: function()
  {
    return this.salary
  },
  setSalary: function(sal)
  {
    this.salary = sal
  },
  accept: function(visitorFunction)
  {
    // reference to current employee
    visitorFunction(this)
  }
}
/////////////////////////////////////////////

const hunor = new Employee("Hunor", 10000)
console.log(hunor.getSalary())

// visitor function
function ExtraSalary(emp)
{
  emp.setSalary(emp.getSalary() * 2)
}

hunor.accept(ExtraSalary)
console.log(hunor.getSalary())