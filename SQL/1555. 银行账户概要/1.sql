# Write your MySQL query statement below
SELECT
  u.user_id,
  u.user_name,
  ifnull((sum((if(paid_by=user_id,-1,1)*amount))+credit),credit) as credit,
  if((sum((if(paid_by=user_id,-1,1)*amount))+credit) < 0,'Yes','No') as credit_limit_breached
FROM Users u
LEFT JOIN  Transactions t ON u.user_id = t.paid_by OR u.user_id = t.paid_to
GROUP BY u.user_id
