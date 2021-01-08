# Write your MySQL query statement below
SELECT
  (CASE
    WHEN MOD(id, 2) != 0 AND counts != id THEN id + 1
    WHEN MOD(id, 2) != 0 AND counts = id THEN id
    ELSE id - 1
  END) as id, student
FROM seat, (SELECT COUNT(*) AS counts FROM seat) AS b
ORDER BY id ASC;
