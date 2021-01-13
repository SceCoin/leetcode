# Write your MySQL query statement below
SELECT
  query_name,
  ROUND(avg(rating / position), 2) as quality,
  ROUND(sum(if(rating < 3, 1, 0)) * 100 / COUNT(*), 2) poor_query_percentage
FROM Queries
GROUP BY query_name
