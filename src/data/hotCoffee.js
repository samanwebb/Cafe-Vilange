import espressoRobusta from "../assets/images-optimized/hot-caffee-caf/espresso-robusta.webp";
import espressoSpecial from "../assets/images-optimized/hot-caffee-caf/special-espresso.webp";
import espressoConPanna from "../assets/images-optimized/hot-caffee-caf/espresso-con-panna.webp";
import cappuccino from "../assets/images-optimized/hot-caffee-caf/cappuccino.webp";
import latte from "../assets/images-optimized/hot-caffee-caf/latte.webp";
import hazelnutLatte from "../assets/images-optimized/hot-caffee-caf/hazelnut-latte.webp";
import mocha from "../assets/images-optimized/hot-caffee-caf/mocha.webp";
import caramelMacchiato from "../assets/images-optimized/hot-caffee-caf/caramel-macchiato.webp";
import americano from "../assets/images-optimized/hot-caffee-caf/americano.webp";

const hotCoffee = [
  {
    id: 1,
    name: "اسپرسو روبوستا",
    englishName: "Espresso Robusta",
    image: espressoRobusta,
    price: "95,000",
    desc: "",
    ingredients: "دانه قهوه روبوستا و آب",
    caffeine: "مقدار کافئین: زیاد",
    bitterness: "★★★★★",
  },

  {
    id: 2,
    name: "اسپرسو اسپشیال",
    englishName: "Espresso Special",
    image: espressoSpecial,
    price: "110,000",
    desc: "",
    ingredients: "ترکیب دانه‌های قهوه اسپشیال و آب",
    caffeine: "مقدار کافئین: زیاد",
    bitterness: "★★★★☆",
  },

  {
    id: 3,
    name: "اسپرسو کن پانا",
    englishName: "Espresso Con Panna",
    image: espressoConPanna,
    price: "120,000",
    desc: "",
    ingredients: "اسپرسو و خامه فرم گرفته",
    caffeine: "مقدار کافئین: زیاد",
    bitterness: "★★★★☆",
  },

  {
    id: 4,
    name: "کاپوچینو",
    englishName: "Cappuccino",
    image: cappuccino,
    price: "145,000",
    desc: "",
    ingredients: "اسپرسو، شیر بخار داده شده و فوم شیر",
    caffeine: "مقدار کافئین: متوسط",
    bitterness: "★★★☆☆",
  },

  {
    id: 5,
    name: "لاته",
    englishName: "Latte",
    image: latte,
    price: "150,000",
    desc: "",
    ingredients: "اسپرسو و شیر بخار داده شده",
    caffeine: "مقدار کافئین: متوسط",
    bitterness: "★★☆☆☆",
  },

  {
    id: 6,
    name: "لاته فندق",
    englishName: "Hazelnut Latte",
    image: hazelnutLatte,
    price: "165,000",
    desc: "",
    ingredients: "اسپرسو، شیر و سیروپ فندق",
    caffeine: "مقدار کافئین: متوسط",
    bitterness: "★★☆☆☆",
  },

  {
    id: 7,
    name: "موکا",
    englishName: "Mocha",
    image: mocha,
    price: "170,000",
    desc: "",
    ingredients: "اسپرسو، شکلات و شیر بخار داده شده",
    caffeine: "مقدار کافئین: متوسط",
    bitterness: "★★★☆☆",
  },

  {
    id: 8,
    name: "کارامل ماکیاتو",
    englishName: "Caramel Macchiato",
    image: caramelMacchiato,
    price: "175,000",
    desc: "",
    ingredients: "اسپرسو، شیر و سس کارامل",
    caffeine: "مقدار کافئین: متوسط",
    bitterness: "★★☆☆☆",
  },

  {
    id: 9,
    name: "آمریکانو",
    englishName: "Americano",
    image: americano,
    price: "120,000",
    desc: "",
    ingredients: "اسپرسو و آب داغ",
    caffeine: "مقدار کافئین: زیاد",
    bitterness: "★★★★☆",
  },
];

export default hotCoffee;
