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
INSERT INTO `barber` VALUES ('amir@anjom.com','Amir','Anjomshoaa','$2a$04$vLWKbVBOld1wsErz/DVgmupiSxwIK2pTcixRXTt.2LFlxgN0GnM9q'),('jackson@barber.com','Amir','Jackson','$2a$04$sM7iCAH9bKEfY825ShDjh.TxULUTfHcKKk3Otk1tV712Oqzh2KM26'),('jose@ortiz.com','Jose ','Ortiz','$2a$04$hxS4um0d2PuSgbaZejwMUOTfK2u7J.C3dcUmvGTE52iWNxTVycNK.'),('pedii@barber.com','pedro','roger','$2a$04$3z8wQQolLkVSF41Itp5/ju.lfsMwokTqg7bu4zm16DDy3nvTRK752');
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
INSERT INTO `schedule` VALUES ('amir@anjom.com','Tuesday,Wednesday,Thursday,Friday','13-17'),('jackson@barber.com','Monday,Tuesday,Wednesday,Saturday','9-17'),('jose@ortiz.com','Monday,Tuesday','15-22'),('pedii@barber.com','Monday,Thursday,Saturday','13-18');
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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storeworker`
--

LOCK TABLES `storeworker` WRITE;
/*!40000 ALTER TABLE `storeworker` DISABLE KEYS */;
INSERT INTO `storeworker` VALUES (36,'pedii@barber.com',1),(37,'jose@ortiz.com',1),(35,'amir@anjom.com',2);
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travelworker`
--

LOCK TABLES `travelworker` WRITE;
/*!40000 ALTER TABLE `travelworker` DISABLE KEYS */;
INSERT INTO `travelworker` VALUES (8,'jackson@barber.com',50);
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

-- Dump completed on 2020-05-09 19:12:35
