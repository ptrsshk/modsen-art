# Tестовое задание Modsen Art Museum

## Предисловие

В результате выполнения этого тестового задания я приобрел новые навыки и усовершенствовал существующие. Таким образом, не смотря на то что опыта работы с typescript у меня было не так много - работая над этим проектом я прокачал свое понимание и сейчас чувстую себя гораздо более fluent в этой теме. Предоставленная API мне понравилась, имеет подробную документацию и очень широкий функционал, работать с ней оказалось комфортно. Дизайн макет мне показался непроработанным ибо многие аспекты от непригодности некоторых частей к адаптиву до отсутствия указаний по реализации например кейса когда на сервере отсутствует картинка отрисовываемая в большой карточке в секции с пагинацией. Однако макет позволил применить собственный опыт в дизайне интерфейсов и проявить фантазию в реализации не описанных фич. Выбор технологий лаконичен однако у меня возникли трудности при попытке подружить две библиотеки для работы с формами - yup для валидации и react-hook-form для работы с формами. Безусловно это положительный опыт ведь на проектах никогда, к сожалению, не бывает все гладко. На реализацию Error boundary, бургер-меню, полноценного адаптива и тестирования у меня, к сожалению, не хватило времени т.к. приступил к выполнению тестового таска с запазданием в 2 дня по личным причинам.

## Содержание

- [Техническое задание](#Техническое-задание)
- [API](#API)
- [Необходимый функционал](#Необходимый-функционал)
- [Пример графического представления](#Пример-графического-представления)
- [Используемые технологии](#Используемые-технологии)
- [Тестирование](#Тестирование)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Реализовать приложение для отображения каталога с картинами.

## API:

Использованный API:
[Art API](https://api.artic.edu/docs/#introduction)

## Необходимый функционал [Реализовано]

- [Реализовано] Получение данных о картинах с внешнего API;
- [Реализовано] Отображение списка картин с возможностью пагинации;
- [Реализовано] Реализация формы поиска с валидацией введенных данных;
- [Реализовано] Использование роутинга для разделения страниц приложения;
- [Реализовано] Реализация дебаунса для поисковой формы с помощью кастомного хука;
- [Реализовано] Возможность добавления картины в список избранных с сохранением их в SessionStorage;
- [Реализовано] Возможность просмотра более детальной информации о картине и возврате на главную страницу;
- [Реализовано] Интерфейс для просмотра списка избранных и возможности удаления из списка;
- [Реализовано] Реализация возможности сортировки картин по различным критериям (по названию произведения) (продумать самостоятельно).

## Пример графического представления

Ссылка на макет: ["Modsen Art Museum"](https://www.figma.com/file/XSLT4bMToK5tOdbXBBuqhP/Trainee-task-1?type=design&node-id=0-1&mode=design&t=tthepIdFQRlAXlVS-0).

### Так же проект предполагает [Реализовано]

- [Реализовано] При загрузке товаров необходимо реализовать Loader;
- [Реализовано] Оптимизацию дизайна под мобильные устройства (до 360px);
- [Реализовано] Реализацию burger-menu;
- [Реализовано] Обработку ошибок через паттерн **_Error Boundaries_**;
- [Реализовано] Использование TypeScript для типизирования и уменьшения количества потенциальных багов;
- [Реализовано]Использование алиасов для импортирования файлов;
- [Реализовано] Покрытие тестами 35% функциональности приложения;
- [Реализовано] Организацию файловой структуры react приложения. Ссылка на структуру: [Структура проекта](https://github.com/mkrivel/structure);
- [Реализовано] Деплой приложения на платформу Vercel или Netlify;
- [Реализовано] Настройку конфигурации eslint, prettier, husky, commitlint;
- [Реализовано] Использование корректного GitFlow в проекте;
- [Реализовано] Использование сторонних библиотек для стилей - запрещены, кроме рекомендуемых в пункте “Используемые технологии”.

## Описание экранов

Главная страница представляет собой информационную часть приложения, в которой можно выполнить поиск и отсортировать получаемые данные. Также на главной странице необходимо реализовать пагинацию по трем картинам. При клике на выбранную картину должен осуществляться переход на страницу с детальной информацией, чтобы изучить произведение подробнее(необходимо самостоятельно добавить кнопку возврата на главную страницу). Понравившиеся произведения можно поместить в избранное, чтобы иметь быстрый доступ к их изучению и просмотру.

## Требуемые технологии

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- **_eslint_** - линтер для JavaScript кода;
- **_prettier_** - инструмент для автоформатирования кода;
- **_yarn_** - менеджер пакетов;
- **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов;
- **_typescript_** - строго типизированный язык для уменьшения количества потенциальных багов;
- **_SCSS_** - препроцессор, который служит для быстрого написания CSS стилей;
- **_jest_** - библиотека для unit-тестирования;
- **_react-router-dom_** - библиотека для навигации между разными частями веб-приложения;
- **_yup_** - библиотека для валидации форм;
- **_react-hook-form_** - библиотека для обработки элемента ввода формы.
