# Write your MySQL query statement below
SELECT NAME Employee FROM Employee E WHERE salary > (SELECT salary FROM Employee WHERE id = E.managerId);