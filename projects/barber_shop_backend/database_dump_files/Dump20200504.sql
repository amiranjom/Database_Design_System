-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: freshfade
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `userEmail` varchar(75) NOT NULL,
  `date` datetime NOT NULL,
  `bookingId` int(11) NOT NULL,
  PRIMARY KEY (`userEmail`),
  KEY `userEmail_idx` (`userEmail`),
  KEY `bookingId_idx` (`bookingId`),
  CONSTRAINT `FkAppointBookingId` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FkAppointUserEmail` FOREIGN KEY (`userEmail`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES ('jack@sfsu.com','2020-03-09 18:00:00',1),('rkisog@sfsu.com','2020-03-11 19:00:00',2),('shane@shane.com','2020-03-05 13:30:00',3);
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bankcards`
--

DROP TABLE IF EXISTS `bankcards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bankcards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userEmail` varchar(75) NOT NULL,
  `cardNumber` varchar(75) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userEmail_idx` (`userEmail`),
  CONSTRAINT `FkBankCardsUserEmail` FOREIGN KEY (`userEmail`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bankcards`
--

LOCK TABLES `bankcards` WRITE;
/*!40000 ALTER TABLE `bankcards` DISABLE KEYS */;
INSERT INTO `bankcards` VALUES (1,'jack@sfsu.com','55223366552'),(2,'shane@shane.com','25452558569'),(3,'rkisog@sfsu.com','11222355151');
/*!40000 ALTER TABLE `bankcards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `barber`
--

DROP TABLE IF EXISTS `barber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `barber` (
  `email` varchar(45) NOT NULL,
  `firstName` tinytext NOT NULL,
  `lastName` tinytext NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barber`
--

LOCK TABLES `barber` WRITE;
/*!40000 ALTER TABLE `barber` DISABLE KEYS */;
INSERT INTO `barber` VALUES ('aa@saa.com','lala','lalal','$2a$04$exchhSTs/iUQzrJGcPnFpewCT7W0HE.iv1azmuSQEzYLKiVc2SVnm'),('aasad@asda.com','lala','lala','$2a$04$CGI8BAB8XPBkwrgEtDx5MeACmbUQb75bznjv05IibM2mSRwPBOVBC'),('ada@adass.com','llala','ada','$2a$04$w7TFQiTrfiWBRbs8uBRjsulIkjrrh8Z1uyD765eXk4PN8a6yApcc6'),('ada@asdaa.com','lalal','akam','$2a$04$oi74QoDJi6JijgdNpWIZ5O9exkZyIGAOrEMxDoVjjni7H/jURwD6q'),('alala@adaa.com','alal','alal','$2a$04$oMqz95SvpwroWfJjSSXJU.We.USMfqwZheUs/W2kMykkd4pTnZDQG'),('amir@amir.com','akka','aaa','$2a$04$5/b37bJ1dTYqLleraczS6uwNqMpmz8mQ.4DV39MtsY8tUzwHguUJ2'),('amirr@amir.com','oaka','kakka','$2a$04$YWzLdprbTdGj.ChGQhO7lO3f43ByukMggP1NNZ5vGqS.qhES8qdqS'),('asldal@smms.com','lalal','lalal','$2a$04$i1e5oCD47mbRRL09oCJOhewsXTpXT5ze/T56a5Za9kIt5y7zPzVBa'),('aww@sa.com','kak','akak','$2a$04$1EulkYPoBaG6hkkicb6sQeDtyt4YykVqVm.gyPA7icDBTnqnixy72'),('da@aac.com','lalal','aiia','$2a$04$1LKlpfWT6TrRfkD8E/S0/eMvV9xhk6V0WcQXt5VVcY0g2Fxwt659W'),('dada@ad.com','lalald','adad','$2a$04$XtpQIE3/e/v/rXc/FXcjhOmBCMrCdUifbzLIuRkVsJjCJdKnF.sSi'),('ed@sfsu.com','Ed','Khan','password'),('iisaid2ada@sac.com','lal','kaksd','$2a$04$0e/YL.uX7T8Z4.q3.broq.uZZOvaiDk/tYmPr4i5Cp.baDKX6NkDe'),('is2a@ss.com','isia','sia','$2a$04$itmGyPjs1chph21l0PlJoeoSAjoEE.TUJxQhQl2sLoE7mKmNrJQc.'),('jack@jack.com','Kate','jack','$2a$04$.oyqRW6vo7hOozMyklKuMObGErA7nmFiBozcxszsHB/1eirJOdabS'),('jack@jackkkkk.com','jack','jack','$2a$04$ihXJXGPizOw3VHl5c1M3p.l/kEkNwAt48S/8yhxeFH1ScL3aeaUyG'),('jacko@j.com','jackob','jackob','$2a$04$RI7OG/l.1mOAMscajF61teSxAl4tAKBlHRcqDsUDXw4IuLMW1BJGa'),('jacksss@oo.com','jackie','johnson','$2a$04$Vnd1OC9yks8Gf5TGXpdmn.GBQ6nk0jnR/xJd52iDrMobR/Udwctf2'),('jorge@sfsu.com','Jorge','Wade','password'),('kadkak@adcom.com','kakdk','kakdak','$2a$04$NHG52JVpEYWWEw42TOEvFOedculnBMcfQyN3DNMgs7Ou94J7Xdpe.'),('kjak@ada.com','lalal','laa','$2a$04$2u2Z0Aym59lsAG7LVlwugO4E5enYLKuf6qHWOYHGFdZPkn6O4.Ezq'),('lalala@aa.com','llsa','lala','$2a$04$IUwELJMmn9DwVolphDnuoO21T4crEeB82Q3uaOlM6u2XfeWqj0l3q'),('lll22@sa.com','lalal','allal','$2a$04$G7MOqpr8GPZV6P8LhGExeuehhIrk6gc.RYEi8fukighUYrmGVFYj6'),('pedro@pedro.com','Pedro','Jan','password'),('reza@reza.com','reza','reza','$2a$04$Kc0X5e3urAhDGt7quqMJ2uZRl48QzFm9IiAjtF8rhSIbE6E6rfk62'),('reza@rezazz.com','Reza','Anjomshoaa','$2a$04$9kvQPk8gFmuGs/IrnmcpouCffwewLd.E0eRoXrFizYw05HQhcsENG'),('rkisog@yahoo.com','Amir','Reza','$2a$04$NN/pvpJd8sWVbt/Dnt.Fy.zJRIRvj6wmBDo9JzPX2qijWPSL3DTMS'),('sad2sd@ada.com','JKoashq','pj','$2a$04$iW7wmHxh7Wum5wx53XseC.Ue.1OlvgbvHcn3rtcedl5wDPvnqg5nG'),('ssskaa@asdod.com','Howday','Boooou','$2a$04$FEvTHnVwzLvxDWj5ptMyqe0rc2FWchYk5kDmTGmoGImvveyX5s68a');
/*!40000 ALTER TABLE `barber` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userEmail` varchar(45) NOT NULL,
  `BarberEmail` varchar(45) NOT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FkBookingUserEmail_idx` (`userEmail`),
  KEY `FkbookingBarberEmail_idx` (`BarberEmail`),
  CONSTRAINT `FkBookingUserEmail` FOREIGN KEY (`userEmail`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FkbookingBarberEmail` FOREIGN KEY (`BarberEmail`) REFERENCES `barber` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,'jack@sfsu.com','jorge@sfsu.com','2020-03-06 19:00:00'),(2,'rkisog@sfsu.com','jorge@sfsu.com','2020-03-11 19:00:00'),(3,'shane@shane.com','pedro@pedro.com','2020-03-05 13:30:00');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `directdeposit`
--

DROP TABLE IF EXISTS `directdeposit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `directdeposit` (
  `barberEmail` varchar(75) NOT NULL,
  `accountNumber` varchar(45) DEFAULT NULL,
  `dateRecieved` date DEFAULT NULL,
  PRIMARY KEY (`barberEmail`),
  CONSTRAINT `FKDirectDepositBarberEmail` FOREIGN KEY (`barberEmail`) REFERENCES `barber` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `directdeposit`
--

LOCK TABLES `directdeposit` WRITE;
/*!40000 ALTER TABLE `directdeposit` DISABLE KEYS */;
INSERT INTO `directdeposit` VALUES ('ed@sfsu.com','2522262554','2020-06-01'),('jorge@sfsu.com','2144256688','2020-05-13'),('pedro@pedro.com','1555668849','2020-05-16');
/*!40000 ALTER TABLE `directdeposit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Address` longtext NOT NULL,
  `serviceId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FkLocationServiceId_idx` (`serviceId`),
  CONSTRAINT `FkLocationServiceId` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'2588 Mission, San Francisco, 94132',1),(2,'1699 Chestnut, San Francisco, 35226',2),(3,'300 Ocean Ave, San Francsico, 94122',2);
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `bookingId` int(11) NOT NULL,
  `userEmail` varchar(75) NOT NULL,
  `barberEmail` varchar(75) NOT NULL,
  `cardId` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`bookingId`),
  KEY `userEmail_idx` (`userEmail`),
  KEY `cardId_idx` (`cardId`),
  KEY `FkPaymentBarberEmail_idx` (`barberEmail`),
  KEY `FkBookingId_idx` (`bookingId`),
  CONSTRAINT `FkBookingId` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FkPaymentBarberEmail` FOREIGN KEY (`barberEmail`) REFERENCES `barber` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FkPaymentCardId` FOREIGN KEY (`cardId`) REFERENCES `bankcards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FkPaymentUserEmail` FOREIGN KEY (`userEmail`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,'jack@sfsu.com','jorge@sfsu.com',1,25,'2020-03-06 19:00:00'),(2,'rkisog@sfsu.com','jorge@sfsu.com',3,50,'2020-03-06 19:00:00'),(3,'shane@shane.com','pedro@pedro.com',2,35,'2020-03-06 19:00:00');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `userEmail` varchar(75) NOT NULL,
  `barberEmail` varchar(75) NOT NULL,
  `stars` int(11) NOT NULL,
  `text` longtext,
  PRIMARY KEY (`barberEmail`,`userEmail`),
  KEY `userEmail_idx` (`userEmail`),
  KEY `barberEmail_idx` (`barberEmail`),
  CONSTRAINT `FkReviewBarberEmail` FOREIGN KEY (`barberEmail`) REFERENCES `barber` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FkReviewUserEmail` FOREIGN KEY (`userEmail`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES ('jack@sfsu.com','ed@sfsu.com',5,'Perfect Job!!'),('rkisog@sfsu.com','jorge@sfsu.com',4,'Love my new hair'),('shane@shane.com','jorge@sfsu.com',4,'Amazing Service');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `barberEmail` varchar(75) NOT NULL,
  `days` longtext NOT NULL,
  `times` longtext NOT NULL,
  PRIMARY KEY (`barberEmail`),
  CONSTRAINT `FkScheduleBarberEmail` FOREIGN KEY (`barberEmail`) REFERENCES `barber` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES ('aa@saa.com','Thursday,Wednesday','9-22'),('aasad@asda.com','Wednesday,Thursday,Friday','12-22'),('ada@adass.com','Thursday,Friday,Saturday','12-22'),('ada@asdaa.com','Monday,Saturday,Sunday','9-19'),('amir@amir.com','Monday,Tuesday,Wednesday','14-22'),('amirr@amir.com','Thursday','11-22'),('da@aac.com','Wednesday,Thursday,Friday','15-22'),('dada@ad.com','Wednesday,Thursday,Friday','11-22'),('ed@sfsu.com','Mon,Tue,Fri','8:00 - 20:00'),('iisaid2ada@sac.com','Tuesday,Wednesday,Thursday','16-22'),('jack@jack.com','Monday,Tuesday,Friday','12-22'),('jack@jackkkkk.com','Wednesday,Friday','12-22'),('jacko@j.com','Thursday,Wednesday','12-22'),('jacksss@oo.com','Tuesday,Thursday','14-22'),('jorge@sfsu.com','Tue,Wed,Thur,Sun','7:00 - 18:00'),('kadkak@adcom.com','Thursday,Wednesday','12-22'),('kjak@ada.com','Monday,Wednesday','0'),('lalala@aa.com','Tuesday,Wednesday,Thursday','17-22'),('lll22@sa.com','Tuesday,Wednesday,Thursday','8-22'),('pedro@pedro.com','Mon,Tue,Sat','10:00 - 20:00'),('reza@reza.com','Monday,Tuesday,Wednesday','7-22'),('reza@rezazz.com','Wednesday,Thursday,Friday','10-22'),('rkisog@yahoo.com','Monday,Tuesday,Friday','10-22'),('sad2sd@ada.com','Monday,Tuesday,Wednesday','18-22'),('ssskaa@asdod.com','Thursday,Friday','14-22');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeOf` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Haircut, Shower, Massage, Facial'),(2,'Haircut Only'),(3,'Saloon, Facial, Pedi');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storeworker`
--

DROP TABLE IF EXISTS `storeworker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storeworker` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `barberEmail` varchar(45) NOT NULL,
  `locationId` int(11) NOT NULL,
  PRIMARY KEY (`id`,`barberEmail`),
  KEY `FkStoreWorkerBarberEmail_idx` (`barberEmail`),
  KEY `FkStoreLocationId_idx` (`locationId`),
  CONSTRAINT `FkStoreLocationId` FOREIGN KEY (`locationId`) REFERENCES `location` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FkStoreWorkerBarberEmail` FOREIGN KEY (`barberEmail`) REFERENCES `barber` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storeworker`
--

LOCK TABLES `storeworker` WRITE;
/*!40000 ALTER TABLE `storeworker` DISABLE KEYS */;
INSERT INTO `storeworker` VALUES (1,'ed@sfsu.com',1),(4,'rkisog@yahoo.com',1),(14,'aasad@asda.com',1),(15,'ada@adass.com',1),(17,'lalala@aa.com',1),(18,'kjak@ada.com',1),(21,'jacksss@oo.com',1),(2,'jorge@sfsu.com',2),(5,'amir@amir.com',2),(7,'reza@reza.com',2),(8,'jack@jack.com',2),(9,'reza@rezazz.com',2),(10,'jack@jackkkkk.com',2),(12,'lll22@sa.com',2),(16,'dada@ad.com',2),(19,'da@aac.com',2),(20,'iisaid2ada@sac.com',2),(22,'ssskaa@asdod.com',2),(3,'pedro@pedro.com',3),(11,'jacko@j.com',3),(13,'kadkak@adcom.com',3);
/*!40000 ALTER TABLE `storeworker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `travelworker`
--

DROP TABLE IF EXISTS `travelworker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travelworker` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `barberEmail` varchar(45) NOT NULL,
  `rangeMile` int(11) NOT NULL,
  PRIMARY KEY (`id`,`barberEmail`),
  KEY `FkStoreWorkerBarberEmail_idx` (`barberEmail`),
  CONSTRAINT `FkTravelWorkerBarberEmail0` FOREIGN KEY (`barberEmail`) REFERENCES `barber` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travelworker`
--

LOCK TABLES `travelworker` WRITE;
/*!40000 ALTER TABLE `travelworker` DISABLE KEYS */;
INSERT INTO `travelworker` VALUES (1,'ed@sfsu.com',50),(2,'jorge@sfsu.com',35),(3,'pedro@pedro.com',75),(4,'amirr@amir.com',50),(5,'aa@saa.com',50);
/*!40000 ALTER TABLE `travelworker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `email` varchar(75) NOT NULL,
  `firstName` tinytext NOT NULL,
  `lastName` tinytext NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('jack@sfsu.com','Jack','Longman','password'),('rkisog@sfsu.com','Jose','Wade','password'),('shane@shane.com','Shane','Knack','password');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-04 11:13:23
