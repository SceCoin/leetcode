# Write your MySQL query statement below
SELECT a.Name as Employee
FROM Employee AS a JOIN Employee AS b
  ON a.ManagerId = b.id
  AND a.Salary > b.Salary;




# Write your MySQL query statement below
SELECT p1.name as Employee
FROM Employee p1, Employee p2
WHERE p1.ManagerId = p2.Id && p1.Salary > p2.Salary
