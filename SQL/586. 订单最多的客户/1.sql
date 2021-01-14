# Write your MySQL query statement below
select customer_number
FROM orders
GROUP BY customer_number
ORDER BY count(*) desc
limit 1
