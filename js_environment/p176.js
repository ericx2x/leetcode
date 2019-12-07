# Write your MySQL query statement below
SELECT
    (SELECT DISTINCT
            Salary
        FROM
            Employee
        ORDER BY Salary DESC
        LIMIT 1 OFFSET 1)  AS SecondHighestSalary
;

/* TODO: Do this problem again no looking... after understanding what a 'temp table' is in mysql
 * * This was some weird mysql problem. I didn't know what offset was but I also don't understand why I had to wrap it in another select?
 *
 *
 *
 * */
