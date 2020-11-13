/*Анимация при скроле */
const animItems = document.querySelectorAll("._anim-items"); //Все объекты, которые будут поддаваться анимации

if (animItems.length > 0) {
  //Проверка на наличие объектов
  window.addEventListener("scroll", animOnScroll); //Добавление события при скроле
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight; //Высотка объекта
      const animItemOffset = offset(animItem).top; //Позиция объекта относительно верха страницы
      const animStart = 10; //Коэффициент регулировки старта анимации

      let animITemPoint = window.innerHeight - animItemHeight / animStart; //Высота окна браузера - высота аним.объекта / на коэфф

      if (animItemHeight > window.innerHeight) {
        //Если аним.объект выше окна браузера
        animITemPoint = window.innerHeight - animItemHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animITemPoint && //Кол-во проскроленых пикселей > позиция объекта - точка старта
        pageYOffset < animItemOffset + animItemHeight // или позиция объекта + высота объекта
      ) {
        animItem.classList.add("_active"); //Добавление класса для анимации
      } else {
        if (!animItem.classList.contains("_anim_no-hide")) {
          // Блокировка повторного анимирования
          animItem.classList.remove("_active"); // Удаление
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}
/*Валидация формы(телефон) */
var selector = document.getElementById("tel");

var im = new Inputmask("+38 (999) 999-99-99");
im.mask(selector);
