-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema FreshFade
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema FreshFade
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `FreshFade` ;
USE `FreshFade` ;

-- -----------------------------------------------------
-- Table `FreshFade`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`User` (
  `email` VARCHAR(75) NOT NULL,
  `firstName` TEXT(25) NOT NULL,
  `lastName` TEXT(25) NOT NULL,
  PRIMARY KEY (`email`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`Barber`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`Barber` (
  `email` VARCHAR(45) NOT NULL,
  `firstName` TEXT(25) NOT NULL,
  `lastName` TEXT(25) NOT NULL,
  PRIMARY KEY (`email`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`Booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`Booking` (
  `id` INT NOT NULL,
  `userEmail` VARCHAR(45) NOT NULL,
  `BarberEmail` VARCHAR(45) NOT NULL,
  `date` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `FkBookingUserEmail_idx` (`userEmail` ASC) VISIBLE,
  INDEX `FkbookingBarberEmail_idx` (`BarberEmail` ASC) VISIBLE,
  CONSTRAINT `FkBookingUserEmail`
    FOREIGN KEY (`userEmail`)
    REFERENCES `FreshFade`.`User` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FkbookingBarberEmail`
    FOREIGN KEY (`BarberEmail`)
    REFERENCES `FreshFade`.`Barber` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`Appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`Appointments` (
  `userEmail` VARCHAR(75) NOT NULL,
  `date` DATETIME NOT NULL,
  `bookingId` INT NOT NULL,
  INDEX `userEmail_idx` (`userEmail` ASC) VISIBLE,
  INDEX `bookingId_idx` (`bookingId` ASC) VISIBLE,
  PRIMARY KEY (`userEmail`),
  CONSTRAINT `FkAppointUserEmail`
    FOREIGN KEY (`userEmail`)
    REFERENCES `FreshFade`.`User` (`email`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FkAppointBookingId`
    FOREIGN KEY (`bookingId`)
    REFERENCES `FreshFade`.`Booking` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`Review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`Review` (
  `userEmail` VARCHAR(75) NOT NULL,
  `barberEmail` VARCHAR(75) NOT NULL,
  `stars` INT NOT NULL,
  `text` LONGTEXT NULL,
  INDEX `userEmail_idx` (`userEmail` ASC) VISIBLE,
  INDEX `barberEmail_idx` (`barberEmail` ASC) VISIBLE,
  PRIMARY KEY (`barberEmail`, `userEmail`),
  CONSTRAINT `FkReviewUserEmail`
    FOREIGN KEY (`userEmail`)
    REFERENCES `FreshFade`.`User` (`email`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FkReviewBarberEmail`
    FOREIGN KEY (`barberEmail`)
    REFERENCES `FreshFade`.`Barber` (`email`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`bankCards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`bankCards` (
  `id` INT NOT NULL,
  `userEmail` VARCHAR(75) NOT NULL,
  `cardNumber` VARCHAR(75) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userEmail_idx` (`userEmail` ASC) VISIBLE,
  CONSTRAINT `FkBankCardsUserEmail`
    FOREIGN KEY (`userEmail`)
    REFERENCES `FreshFade`.`User` (`email`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`Payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`Payment` (
  `bookingId` INT NOT NULL,
  `userEmail` VARCHAR(75) NULL,
  `barberEmail` VARCHAR(75) NOT NULL,
  `cardId` INT NOT NULL,
  `amount` INT NOT NULL,
  `date` DATETIME NOT NULL,
  INDEX `userEmail_idx` (`userEmail` ASC) VISIBLE,
  INDEX `cardId_idx` (`cardId` ASC) VISIBLE,
  INDEX `FkPaymentBarberEmail_idx` (`barberEmail` ASC) VISIBLE,
  INDEX `FkBookingId_idx` (`bookingId` ASC) VISIBLE,
  PRIMARY KEY (`bookingId`),
  CONSTRAINT `FkPaymentUserEmail`
    FOREIGN KEY (`userEmail`)
    REFERENCES `FreshFade`.`User` (`email`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FkPaymentCardId`
    FOREIGN KEY (`cardId`)
    REFERENCES `FreshFade`.`bankCards` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FkPaymentBarberEmail`
    FOREIGN KEY (`barberEmail`)
    REFERENCES `FreshFade`.`Barber` (`email`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FkBookingId`
    FOREIGN KEY (`bookingId`)
    REFERENCES `FreshFade`.`Booking` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`DirectDeposit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`DirectDeposit` (
  `barberEmail` VARCHAR(75) NOT NULL,
  `accountNumber` VARCHAR(45) NULL,
  `dateRecieved` DATE NULL,
  PRIMARY KEY (`barberEmail`),
  CONSTRAINT `FKDirectDepositBarberEmail`
    FOREIGN KEY (`barberEmail`)
    REFERENCES `FreshFade`.`Barber` (`email`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`Schedule`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`Schedule` (
  `barberEmail` VARCHAR(75) NOT NULL,
  `days` LONGTEXT NOT NULL,
  `times` LONGTEXT NOT NULL,
  PRIMARY KEY (`barberEmail`),
  CONSTRAINT `FkScheduleBarberEmail`
    FOREIGN KEY (`barberEmail`)
    REFERENCES `FreshFade`.`Barber` (`email`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`Services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`Services` (
  `id` INT NOT NULL,
  `typeOf` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`Location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`Location` (
  `id` INT NOT NULL,
  `Address` LONGTEXT NOT NULL,
  `serviceId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FkLocationServiceId_idx` (`serviceId` ASC) VISIBLE,
  CONSTRAINT `FkLocationServiceId`
    FOREIGN KEY (`serviceId`)
    REFERENCES `FreshFade`.`Services` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`StoreWorker`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`StoreWorker` (
  `id` INT NOT NULL,
  `barberEmail` VARCHAR(45) NOT NULL,
  `locationId` INT NOT NULL,
  PRIMARY KEY (`id`, `barberEmail`),
  INDEX `FkStoreWorkerBarberEmail_idx` (`barberEmail` ASC) VISIBLE,
  INDEX `FkStoreLocationId_idx` (`locationId` ASC) VISIBLE,
  CONSTRAINT `FkStoreWorkerBarberEmail`
    FOREIGN KEY (`barberEmail`)
    REFERENCES `FreshFade`.`Barber` (`email`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FkStoreLocationId`
    FOREIGN KEY (`locationId`)
    REFERENCES `FreshFade`.`Location` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FreshFade`.`TravelWorker`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FreshFade`.`TravelWorker` (
  `id` INT NOT NULL,
  `barberEmail` VARCHAR(45) NOT NULL,
  `rangeMile` INT NOT NULL,
  PRIMARY KEY (`id`, `barberEmail`),
  INDEX `FkStoreWorkerBarberEmail_idx` (`barberEmail` ASC) VISIBLE,
  CONSTRAINT `FkTravelWorkerBarberEmail0`
    FOREIGN KEY (`barberEmail`)
    REFERENCES `FreshFade`.`Barber` (`email`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
