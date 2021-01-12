# Write your MySQL query statement below
# 这题是求并集
SELECT unique_id, name
FROM Employees
LEFT JOIN EmployeeUNI ON Employees.id = EmployeeUNI.id

