# lulz 0.0.1
#
Скрипт для скрытия не помещающехся пунктов меню в навигации
#
# Эксплуатация

```javascript
    buildHiddenMenu({
        wrapperList: $('.wrapper-list'),
        hiddenMenu: $('<ul class="hidden-list"/>'),
        triggerMenu: $('.trigger-menu'),
        navigationMenu: $('.navigation')
    });
```
