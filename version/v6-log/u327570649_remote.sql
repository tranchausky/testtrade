-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `tb_device`;
CREATE TABLE `tb_device` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(222) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `info_device` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `tb_logs`;
CREATE TABLE `tb_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_device` int(11) DEFAULT NULL,
  `numberFalse` varchar(222) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastPrices` varchar(111) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `money` varchar(222) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `way` varchar(222) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_win` varchar(222) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `time` varchar(222) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `log` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `request` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `tb_request`;
CREATE TABLE `tb_request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_log` int(11) DEFAULT NULL,
  `request` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- 2021-02-27 04:52:16
