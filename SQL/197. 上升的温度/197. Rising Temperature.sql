# Write your MySQL query statement below
SELECT a.id AS 'id'
FROM Weather as a JOIN Weather as b
    ON DATEDIFF(a.RecordDate, b.RecordDate) = 1
    AND a.Temperature > b.Temperature;
