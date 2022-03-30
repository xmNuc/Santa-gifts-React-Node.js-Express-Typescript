-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 30 Mar 2022, 03:00
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `santa_gifts`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `children`
--

CREATE TABLE `children` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `name` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `giftId` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `children`
--

INSERT INTO `children` (`id`, `name`, `giftId`) VALUES
('00934790-74da-11ec-967e-54ab3ae1ad30', 'Ben', 'd43037de-74ce-11ec-967e-54ab3ae1ad30'),
('014ba1cf-765d-40b5-b92c-c042f0c261e0', 'Nelson', 'fda52ac8-e0f5-4cbd-8cb2-7ffe907bed22'),
('7b30e7aa-36df-4970-80cb-a1a8fee0639b', 'Jozefff', NULL),
('bd290935-74d9-11ec-967e-54ab3ae1ad30', 'Ann', '179598b3-7c9c-4aa2-9cfd-6150b72c8b78'),
('c1e2ec4f-74d9-11ec-967e-54ab3ae1ad30', 'Tom', '58e00fd2-7566-44a0-8a66-80f5f0f94491'),
('cb3b2450-74d9-11ec-967e-54ab3ae1ad30', 'Katrin', 'd43037de-74ce-11ec-967e-54ab3ae1ad30');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `gifts`
--

CREATE TABLE `gifts` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `name` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `count` int(6) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `gifts`
--

INSERT INTO `gifts` (`id`, `name`, `count`) VALUES
('179598b3-7c9c-4aa2-9cfd-6150b72c8b78', 'Toy bout', 2),
('58e00fd2-7566-44a0-8a66-80f5f0f94491', 'Shit', 4),
('d43037de-74ce-11ec-967e-54ab3ae1ad30', 'Dollhouse', 5),
('ebcab8bc-74ce-11ec-967e-54ab3ae1ad30', 'Toy car', 3),
('fda52ac8-e0f5-4cbd-8cb2-7ffe907bed22', 'Barbie doll', 5);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `children`
--
ALTER TABLE `children`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_choldren_gifts` (`giftId`);

--
-- Indeksy dla tabeli `gifts`
--
ALTER TABLE `gifts`
  ADD PRIMARY KEY (`id`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `children`
--
ALTER TABLE `children`
  ADD CONSTRAINT `FK_choldren_gifts` FOREIGN KEY (`giftId`) REFERENCES `gifts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
