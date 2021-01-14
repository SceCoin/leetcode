# Write your MySQL query statement below
select c.name as country
from calls, person, country c
where (caller_id = id or callee_id = id) and country_code = left(phone_number, 3)
group by country_code
having avg(duration) > (select avg(duration) from calls)
