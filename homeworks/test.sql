-- Delete Failed, Update Worked and also Updated all the FK in other tables. Select Grabs all of them to Present
-- 1 DELETE FROM `barber` WHERE (`email` = 'pedro@pedro.com');
UPDATE `barber` SET `email` = 'pedroo@pedro.com' WHERE (`email` = 'pedro@pedro.com');
select * from barber B, schedule S, booking BB, review R where B.email = 'pedroo@pedro.com' and B.email = S.barberEmail and B.email=BB.barberEmail;

-- Test for the User Table. Deleting, Updating  and Selecting all PK where they are FK
DELETE FROM `user` WHERE (`email` = 'shane@shane.com');
UPDATE `user` SET `email` = 'jackkk@sfsu.com' WHERE (`email` = 'jack@sfsu.com');
select * from user U, appointments A, booking B where U.email='rkisog@sfsu.com' and U.email = A.userEmail and U.email = B.userEmail

