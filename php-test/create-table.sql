CREATE TABLE `tb_logs` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `rule` varchar(222) NULL,
  `status` varchar(222) NULL,
  `ip` varchar(222) NULL,
  `client info` text NULL,
  `timeadd` int(11) NULL
);