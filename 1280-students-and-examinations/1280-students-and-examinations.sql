# Write your MySQL query statement below
SELECT s.Student_id, s.Student_name, sbj.subject_name, COUNT(e.subject_name) AS attended_exams FROM Students AS s JOIN Subjects AS sbj 
LEFT JOIN Examinations AS e 
  ON s.student_id = e.student_id AND sbj.subject_name = e.subject_name
GROUP BY s.student_id, sbj.subject_name 
ORDER BY s.student_id, sbj.subject_name;