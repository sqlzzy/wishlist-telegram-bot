const ALLOWED_USERNAMES = ["Ваш юзернейм"];
const TOKENS = "Ваш токен";
const PATH_TO_FILE_USERS = "./src/json/users.json";
const ERROR_PARSED_JSON = "Ошибка разбора JSON: ";
const MESSAGE_ADD_WISH =
  "В следующем сообщении напиши '/wish ' и далее текст или ссылку на желаемую вещь:";
const MESSAGE_WELCOME =
  "Привет!\nВыбери команду для начала работы со списом желаний:";
const MESSAGE_FILE_EXISTS = "Файл существует";
const MESSAGE_FOLDER_EXISTS = "Директория существует";
const MESSAGE_MANAGE_LIST = "Управляй просмотром списка желаний:";
const MESSAGE_DISPLAY_BUTTONS_LIST =
  "Кнопки управления списком отобразятся, если желаний будет больше 10";
const LIST_TYPES = {
  wishes: {
    item: "Желание",
    items: "списке желаний",
  },
};
const TYPES_OF_WISHES = {
  unrealized: "Неисполненные",
  granted: "Исполненные",
};
const MESSAGE_EMPTY_LIST = "Список пуст";

module.exports = {
  ALLOWED_USERNAMES,
  TOKENS,
  PATH_TO_FILE_USERS,
  ERROR_PARSED_JSON,
  MESSAGE_ADD_WISH,
  MESSAGE_WELCOME,
  MESSAGE_FILE_EXISTS,
  MESSAGE_FOLDER_EXISTS,
  MESSAGE_MANAGE_LIST,
  MESSAGE_DISPLAY_BUTTONS_LIST,
  LIST_TYPES,
  TYPES_OF_WISHES,
  MESSAGE_EMPTY_LIST,
};
