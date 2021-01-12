# Write your MySQL query statement below
# 思路: 先求出每日人流量大于100的情况
# SELECT *
# FROM Stadium
# WHERE people >= 100

with t1 as (
select
    id,
    visit_date,
    people,
#求出差值，因为id一定不会相同，所以使用最熟悉的rank就好
    id-rank() over(order by id) rk
from stadium
where people >= 100
)
select
    id,
    visit_date,
    people
from t1
#where条件过滤出条数大于3的
where rk in (
select rk from t1 group by rk having count(1) >= 3);
