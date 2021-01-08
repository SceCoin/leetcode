# Write your MySQL query statement below
SELECT Request_at as Day,
       ROUND(COUNT(IF(Status != 'completed', TRUE, NULL)) / COUNT(*), 2) AS 'Cancellation Rate'
FROM Trips
WHERE (Request_at BETWEEN '2013-10-01' AND '2013-10-03')
      AND Client_id NOT IN (SELECT Users_Id FROM Users WHERE Banned = 'Yes')
GROUP BY Request_at;



# Write your MySQL query statement below
SELECT
  request_at as 'Day', round(avg(Status!='completed'), 2) as 'Cancellation Rate'
FROM Trips t
JOIN Users u1 ON (t.Client_Id = u1.Users_Id AND u1.banned = 'No')
JOIN users u2 ON (t.Driver_Id = u2.Users_Id AND u2.banned = 'No')
WHERE request_at Between '2013-10-01' AND '2013-10-03'
GROUP BY request_at
