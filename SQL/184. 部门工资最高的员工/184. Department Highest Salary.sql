# Write your MySQL query statement below
SELECT
  Department.Name as Department,
  Employee.Name as Employee,
  Salary
FROM Employee
JOIN Department ON Department.Id = Employee.DepartmentId
WHERE
  (Employee.DepartmentId, Salary) in
(
  SELECT DepartmentId, MAX(Salary)
  FROM Employee
  GROUP BY DepartmentId
)
