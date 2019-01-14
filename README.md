# Clear eyes
Структура:
```
app/
  |--scss/
     |--global/
     |--blocks/
     |--vendors/ (Стили сторонних библиотек)
     |--variables.scss
     |--functions.scss
     |--mixins.scss
     |--styles.scss
  |--images/
     |--svg-icons/
     |--svg-symbols/ (для объединения в один файл symbols.svg)
  |--js/
     |--plugins/
     |--modules/
     |--jQuery (Подключать отдельно)
     |--script.js
  |--fonts/
  |--blocks (инклюды)

build/
  |--style.css
  |--fonts/
  |--images/
     |--symbols.svg
  |--js
other/
   |--psd
```

## Установка
Установить модули из package.json — `npm install`

## Запуск проекта
`npm start`
## Сборка проекта
`npm run build`
## Удаление папки build
`gulp clean`


Из папки js/plugins/ объединяются js-файлы и помещаются в js/plugins.js
Из папки js/modules/ объединяются js-файлы и помещаются в js/modules.js
Из папки images/svg-symbols/ объединяются svg-файлы и помещаются в images/symbols.svg
