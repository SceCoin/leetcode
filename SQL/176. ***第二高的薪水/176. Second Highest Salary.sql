# 解法一
# Write your MySQL query statement below
select ifnull(
(select distinct salary as SecondHighestSalary
from Employee
order by salary desc
limit 1, 1), null) as SecondHighestSalary


# 解法二
# Write your MySQL query statement below
select max(distinct salary) as SecondHighestSalary
from Employee
where salary < (select max(distinct salary)
                from Employee);
