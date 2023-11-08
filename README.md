# WishList Telegram Bot on NodeJs

## О боте

Telegram Бот для создания списков желаний. Пользоваться ботом может только пользователь с юзернеймом, указанным в файле [constants.js](https://github.com/sqlzzy/wishlist-telegram-bot/blob/master/src/commons/constants.js).

## Возможности бота

1) Сортировка желаний по категориям:<br/>
    - исполненные,<br/>
    - неисполненные;<br/>
2) Просмотр списков желаний;<br/>
3) Управление навигацией списка желаний. Выводится по 10 желаний в одном сообщении. При общем кол-ве желаний больше 10, для просмотра следующих появляется клавиатура;
4) Добавление, удаление или отмечание желания, как исполненное.<br/>

## Структура данных

При запуске проекта создается файл src/json/users.json со структурой:<br/>
```[{ username: username, wishes: [] }]```,<br/>
где:<br/>
**username** — юзернейм пользователя;<br/>
**wishes** — список желаний.

Структура желания:<br/>
```{ text: text, isGranted: "0", id: id }```,<br/>
где:<br/>
**text** — текст желания,<br/>
**isGranted** — статус желания (0 — неисполненное, 1 — исполненное),<br/>
**id** — уникальный идентификатор желания.

## Инструкция

1) Склонируйте репозиторий: <br/>
    - HTTPS: ```git clone https://github.com/sqlzzy/wishlist-telegram-bot.git name_your_folder```<br/>;
    - SSH: ```git clone git@github.com:sqlzzy/wishlist-telegram-bot.git name_your_folder```.
2) Создайте токен бота через [@BotFather](https://telegram.me/BotFather);
3) Вставьте [токен бота](https://github.com/sqlzzy/wishlist-telegram-bot/blob/master/src/commons/constants.js#L2) и [свой юзернейм](https://github.com/sqlzzy/wishlist-telegram-bot/blob/master/src/commons/constants.js#L1) в файле [constants.js](https://github.com/sqlzzy/wishlist-telegram-bot/blob/master/src/commons/constants.js);
4) Установите npm-пакеты: ```npm i```;
5) Запуск проекта:<br/>
    - локально: ```npm run dev``` (запустится утилита nodemon. Она будет отслеживать изменения и автоматически перезапускать процесс);<br/>
    - на сервере: ``pm2 start src/server.js`` (менеджер процессов pm2 должен быть предварительно установлен на сервере).<br/>
