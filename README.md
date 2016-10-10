# lulz 0.0.1
#
Скрипт для скрытия не помещающехся пунктов меню в навигации
#
# Вызов функции

```javascript
    buildHiddenMenu({
        wrapperList: $('.wrapper-list'), //класс навигации
        hiddenMenu: $('<ul class="hidden-list"/>'), //класс скрывающеёся навигации
        triggerMenu: $('.trigger-menu'), //класс кнопки
        navigationMenu: $('.navigation'), //обёртка навигации
        topPosition: 20 //позиции пункта меню
    });
```
