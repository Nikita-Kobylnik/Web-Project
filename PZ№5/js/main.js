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

/*Валидация форм */
var selector = document.getElementById("tel");
var im = new Inputmask("+38 (999) 999-99-99");
im.mask(selector);
//
const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
});

function checkEmail() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setErrorFor(email, "Поле не может быть путсным");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "footer__email error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "footer__email success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
//

const formPopup = document.getElementById("formPopup");
const year = document.getElementById("year");
const brand = document.getElementById("brand");
const VIN = document.getElementById("VIN");
const namePart = document.getElementById("namePart");
const tel = document.getElementById("tel");

formPopup.addEventListener("submit", (e) => {
  e.preventDefault();
  checkPopup();
});

function checkPopup() {
  const yearValue = year.value;
  const brandValue = brand.value;
  const VINvalue = VIN.value;
  const namePartValue = namePart.value;
  const telValue = tel.value;

  let lettersNumbers = /^[0-9A-Za-z]+$/;

  if (yearValue === "") {
    year.style.borderColor = "red";
  } else {
    year.style.borderColor = "#2ecc71";
  }

  if (brandValue === "") {
    brand.style.borderColor = "red";
  } else {
    brand.style.borderColor = "#2ecc71";
  }

  if (VINvalue === "") {
    VIN.style.borderColor = "red";
  } else if (!VINvalue.match(lettersNumbers)) {
    VIN.style.borderColor = "red";
  } else if (VINvalue.length < 15) {
    VIN.style.borderColor = "red";
  } else {
    VIN.style.borderColor = "#2ecc71";
  }

  if (namePartValue === "") {
    namePart.style.borderColor = "red";
  } else {
    namePart.style.borderColor = "#2ecc71";
  }

  if (telValue === "") {
    tel.style.borderColor = "red";
  } else {
    tel.style.borderColor = "#2ecc71";
  }
}
