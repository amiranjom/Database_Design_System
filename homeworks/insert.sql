use freshfade;
INSERT INTO `services` (`id`, `typeOf`) VALUES ('1', 'Haircut, Shower, Massage, Facial');
INSERT INTO `services` (`id`, `typeOf`) VALUES ('2', 'Haircut Only');
INSERT INTO `services` (`id`, `typeOf`) VALUES ('3', 'Saloon, Facial, Pedi');
INSERT INTO `location` (`id`, `Address`, `serviceId`) VALUES ('1', 'Mission, San Francisco, 94132', '1');
INSERT INTO `location` (`id`, `Address`, `serviceId`) VALUES ('2', 'ChestNut, Los Angles, 35226', '2');
INSERT INTO `location` (`id`, `Address`, `serviceId`) VALUES ('3', 'Ocean Ave, San Francsico, 94122', '2');
INSERT INTO `user` (`email`, `firstName`, `lastName`) VALUES ('jack@sfsu.com', 'Jack', 'Longman');
INSERT INTO `user` (`email`, `firstName`, `lastName`) VALUES ('shane@shane.com', 'Shane', 'Knack');
INSERT INTO `user` (`email`, `firstName`, `lastName`) VALUES ('rkisog@sfsu.com', 'Jose', 'Wade');
INSERT INTO `bankcards` (`id`, `userEmail`, `cardNumber`) VALUES ('1', 'jack@sfsu.com', '55223366552');
INSERT INTO `bankcards` (`id`, `userEmail`, `cardNumber`) VALUES ('2', 'shane@shane.com', '25452558569');
INSERT INTO `bankcards` (`id`, `userEmail`, `cardNumber`) VALUES ('3', 'rkisog@sfsu.com', '11222355151');
INSERT INTO `barber` (`email`, `firstName`, `lastName`) VALUES ('ed@sfsu.com', 'Ed', 'Khan');
INSERT INTO `barber` (`email`, `firstName`, `lastName`) VALUES ('pedro@pedro.com', 'Pedro', 'Jan');
INSERT INTO `barber` (`email`, `firstName`, `lastName`) VALUES ('jorge@sfsu.com', 'Jorge', 'Wade');
INSERT INTO `schedule` (`barberEmail`, `days`, `times`) VALUES ('ed@sfsu.com', 'Mon,Tue,Fri', '8:00 - 20:00');
INSERT INTO `schedule` (`barberEmail`, `days`, `times`) VALUES ('jorge@sfsu.com', 'Tue,Wed,Thur,Sun', '7:00 - 18:00');
INSERT INTO `schedule` (`barberEmail`, `days`, `times`) VALUES ('pedro@pedro.com', 'Mon,Tue,Sat', '10:00 - 20:00');
INSERT INTO `storeworker` (`id`, `barberEmail`, `locationId`) VALUES ('1', 'ed@sfsu.com', '1');
INSERT INTO `storeworker` (`id`, `barberEmail`, `locationId`) VALUES ('2', 'jorge@sfsu.com', '2');
INSERT INTO `storeworker` (`id`, `barberEmail`, `locationId`) VALUES ('3', 'pedro@pedro.com', '3');
INSERT INTO `booking` (`id`, `userEmail`, `BarberEmail`, `date`) VALUES ('1', 'jack@sfsu.com', 'jorge@sfsu.com', '2020-03-06 19:00:00');
INSERT INTO `booking` (`id`, `userEmail`, `BarberEmail`, `date`) VALUES ('2', 'rkisog@sfsu.com', 'jorge@sfsu.com', '2020-03-11 19:00:00');
INSERT INTO `booking` (`id`, `userEmail`, `BarberEmail`, `date`) VALUES ('3', 'shane@shane.com', 'pedro@pedro.com', '2020-03-05 13:30:00');
INSERT INTO `appointments` (`userEmail`, `date`, `bookingId`) VALUES ('jack@sfsu.com', '2020-03-09 18:00:00', '1');
INSERT INTO `appointments` (`userEmail`, `date`, `bookingId`) VALUES ('rkisog@sfsu.com', '2020-03-11 19:00:00', '2');
INSERT INTO `appointments` (`userEmail`, `date`, `bookingId`) VALUES ('shane@shane.com', '2020-03-05 13:30:00', '3');
INSERT INTO `review` (`userEmail`, `barberEmail`, `stars`, `text`) VALUES ('jack@sfsu.com', 'ed@sfsu.com', '5', 'Perfect Job!!');
INSERT INTO `review` (`userEmail`, `barberEmail`, `stars`, `text`) VALUES ('rkisog@sfsu.com', 'jorge@sfsu.com', '4', 'Love my new hair');
INSERT INTO `review` (`userEmail`, `barberEmail`, `stars`, `text`) VALUES ('shane@shane.com', 'jorge@sfsu.com', '4', 'Amazing Service');
INSERT INTO `payment` (`bookingId`, `userEmail`, `barberEmail`, `cardId`, `amount`, `date`) VALUES ('1', 'jack@sfsu.com', 'jorge@sfsu.com', '1', '25', '2020-03-06 19:00:00');
INSERT INTO `payment` (`bookingId`, `userEmail`, `barberEmail`, `cardId`, `amount`, `date`) VALUES ('2', 'rkisog@sfsu.com', 'jorge@sfsu.com', '3', '50', '2020-03-06 19:00:00');
INSERT INTO `payment` (`bookingId`, `userEmail`, `barberEmail`, `cardId`, `amount`, `date`) VALUES ('3', 'shane@shane.com', 'pedro@pedro.com', '2', '35', '2020-03-06 19:00:00');
INSERT INTO `directdeposit` (`barberEmail`, `accountNumber`, `dateRecieved`) VALUES ('ed@sfsu.com', '2522262554', '2020-06-01');
INSERT INTO `directdeposit` (`barberEmail`, `accountNumber`, `dateRecieved`) VALUES ('jorge@sfsu.com', '2144256688', '2020-05-13');
INSERT INTO `directdeposit` (`barberEmail`, `accountNumber`, `dateRecieved`) VALUES ('pedro@pedro.com', '1555668849', '2020-05-16');
INSERT INTO `travelworker` (`id`, `barberEmail`, `rangeMile`) VALUES ('1', 'ed@sfsu.com', '50');
INSERT INTO `travelworker` (`id`, `barberEmail`, `rangeMile`) VALUES ('2', 'jorge@sfsu.com', '35');
INSERT INTO `travelworker` (`id`, `barberEmail`, `rangeMile`) VALUES ('3', 'pedro@pedro.com', '75');




