# Write your MySQL query statement below
SELECT Name as Customers
FROM Customers
LEFT JOIN Orders
ON Orders.CustomerId = Customers.Id
WHERE CustomerId IS NULL



# Write your MySQL query statement below
select customers.name as 'Customers'
from customers
where customers.id not in
(
  select customerid from orders
)
