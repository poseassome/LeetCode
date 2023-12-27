# Write your MySQL query statement below
SELECT name, SUM(amount) AS balance FROM Users NATURAL JOIN Transactions
GROUP BY account HAVING balance > 10000;