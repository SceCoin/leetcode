# Write your MySQL query statement below
SELECT Department.Name as Department, a.Name as Employee, a.Salary
FROM (
  SELECT *,
    dense_rank() over (partition by DepartmentId order by Salary desc) as ranking
  FROM Employee) as a
JOIN Department ON a.DepartmentId = Department.id
WHERE ranking <= 3
