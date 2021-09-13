-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 13 2021 г., 14:41
-- Версия сервера: 5.7.29
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `sheeps`
--

-- --------------------------------------------------------

--
-- Структура таблицы `countdead`
--

CREATE TABLE `countdead` (
  `id` int(11) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `countdead`
--

INSERT INTO `countdead` (`id`, `count`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `day`
--

CREATE TABLE `day` (
  `id` int(11) NOT NULL,
  `day` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `day`
--

INSERT INTO `day` (`id`, `day`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `dead_sheeps_list`
--

CREATE TABLE `dead_sheeps_list` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `log`
--

CREATE TABLE `log` (
  `id` int(11) NOT NULL,
  `history` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `max_min_list`
--

CREATE TABLE `max_min_list` (
  `id` int(11) NOT NULL,
  `num` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `max_min_list`
--

INSERT INTO `max_min_list` (`id`, `num`) VALUES
(1, ''),
(2, '');

-- --------------------------------------------------------

--
-- Структура таблицы `sheeps_list`
--

CREATE TABLE `sheeps_list` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `sheeps_pen_list`
--

CREATE TABLE `sheeps_pen_list` (
  `id` int(11) NOT NULL,
  `mas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sheeps_pen_list`
--

INSERT INTO `sheeps_pen_list` (`id`, `mas`) VALUES
(1, ''),
(2, ''),
(3, ''),
(4, '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `countdead`
--
ALTER TABLE `countdead`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `day`
--
ALTER TABLE `day`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `dead_sheeps_list`
--
ALTER TABLE `dead_sheeps_list`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `max_min_list`
--
ALTER TABLE `max_min_list`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sheeps_list`
--
ALTER TABLE `sheeps_list`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sheeps_pen_list`
--
ALTER TABLE `sheeps_pen_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `countdead`
--
ALTER TABLE `countdead`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `day`
--
ALTER TABLE `day`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `dead_sheeps_list`
--
ALTER TABLE `dead_sheeps_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `max_min_list`
--
ALTER TABLE `max_min_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `sheeps_list`
--
ALTER TABLE `sheeps_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `sheeps_pen_list`
--
ALTER TABLE `sheeps_pen_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
