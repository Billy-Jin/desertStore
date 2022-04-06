import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import { Route } from "react-router-dom";
import JoinForm from "./components/login/JoinForm";
import { useState } from "react";

const imgList = [
  {
    id: 1,
    title: "수제쿠키",
    category: "cookie",
    image: "./images/dessert/cookie.jpg",
    desc: "장인이 직접 만든 수제 쿠키",
  },
  {
    id: 2,
    title: "딸기케이크",
    category: "dessert",
    image: "./images/dessert/strawberry_cake3.jpg",
    desc: "신선한 딸기가 들어간 달콤한 케이크",
  },
  {
    id: 3,
    title: "티라미수",
    category: "dessert",
    image: "./images/dessert/tiramisu1.jpg",
    desc: "달콤한 티라미수 케이크",
  },
  {
    id: 4,
    title: "마카롱",
    category: "macaron",
    image: "./images/dessert/macaron1.jpg",
    desc: "다양한 맛의 마카롱 세트",
  },
  {
    id: 5,
    title: "뚱카롱",
    category: "macaron",
    image: "./images/dessert/macaron3.jpg",
    desc: "두툼한 마카롱이 끌린다면 뚱카롱",
  },
  {
    id: 6,
    title: "포춘쿠키",
    category: "cookie",
    image: "./images/dessert/fortune_cookie.jpg",
    desc: "포츈 쿠키로 오늘의 행운을 확인하세요!",
  },
  {
    id: 7,
    title: "수제쿠키",
    category: "cookie",
    image: "./images/dessert/cookie.jpg",
    desc: "장인이 직접 만든 수제 쿠키",
  },
  {
    id: 8,
    title: "딸기케이크",
    category: "dessert",
    image: "./images/dessert/strawberry_cake3.jpg",
    desc: "신선한 딸기가 들어간 달콤한 케이크",
  },
  {
    id: 9,
    title: "티라미수",
    category: "dessert",
    image: "./images/dessert/tiramisu1.jpg",
    desc: "달콤한 티라미수 케이크",
  },
  {
    id: 10,
    title: "마카롱",
    category: "dessert",
    image: "./images/dessert/macaron1.jpg",
    desc: "다양한 맛의 마카롱 세트",
  },
  {
    id: 11,
    title: "뚱카롱",
    category: "dessert",
    image: "./images/dessert/macaron3.jpg",
    desc: "두툼한 마카롱이 끌린다면 뚱카롱",
  },
  {
    id: 12,
    title: "포춘쿠키",
    category: "cookie",
    image: "./images/dessert/fortune_cookie.jpg",
    desc: "포츈 쿠키로 오늘의 행운을 확인하세요!",
  },
];

const mainList = [
  {
    id: 1,
    title: "수제쿠키",
    category: "cookie",
    image: "./images/dessert/cookie.jpg",
    desc: "장인이 직접 만든 수제 쿠키",
    price: "",
  },
  {
    id: 2,
    title: "딸기케이크",
    category: "cake",
    image: "./images/dessert/strawberry_cake3.jpg",
    desc: "신선한 딸기가 들어간 달콤한 케이크",
    price: "",
  },
  {
    id: 3,
    title: "티라미수",
    category: "cake",
    image: "./images/dessert/tiramisu1.jpg",
    desc: "달콤한 티라미수 케이크",
    price: "",
  },
  {
    id: 4,
    title: "마카롱",
    category: "macaron",
    image: "./images/dessert/macaron1.jpg",
    desc: "다양한 맛의 마카롱 세트",
    price: "",
  },
  {
    id: 5,
    title: "뚱카롱",
    category: "macaron",
    image: "./images/dessert/macaron3.jpg",
    desc: "두툼한 마카롱이 끌린다면 뚱카롱",
    price: "",
  },
  {
    id: 6,
    title: "포춘쿠키",
    category: "cookie",
    image: "./images/dessert/fortune_cookie.jpg",
    desc: "포츈 쿠키로 오늘의 행운을 확인하세요!",
    price: "",
  },
  {
    id: 7,
    title: "와플",
    category: "dessert",
    image: "./images/dessert/waffle.jpg",
    desc: "커피와 먹기 좋은 와플",
    price: "",
  },
  {
    id: 8,
    title: "케냐 원두",
    category: "drink",
    image: "./images/drink/coffee1.jpg",
    desc: "산미가 있는 케냐 원두",
    price: "",
  },
  {
    id: 9,
    title: "브라질 원두",
    category: "drink",
    image: "./images/drink/coffee2.jpg",
    desc: "고소함이 있는 브라질 원두",
    price: "",
  },
  {
    id: 10,
    title: "우유",
    category: "drink",
    image: "./images/drink/milk.jpg",
    desc: "대관령 젖소 우유",
    price: "",
  },
  {
    id: 11,
    title: "아메리카노",
    category: "drink",
    image: "./images/drink/americano.jpg",
    desc: "아메리카노",
    price: "",
  },
  {
    id: 12,
    title: "카페라떼",
    category: "drink",
    image: "./images/drink/cafe-latte.png",
    desc: "카페라떼",
    price: "",
  },
  {
    id: 13,
    title: "카푸치노",
    category: "drink",
    image: "./images/drink/capuccino.jpg",
    desc: "카푸치노",
    price: "",
  },
  {
    id: 14,
    title: "초코스무디",
    category: "drink",
    image: "./images/drink/chocolate-smoothie.jpg",
    desc: "초코스무디",
    price: "",
  },
  {
    id: 15,
    title: "딸기스무디",
    category: "drink",
    image: "./images/drink/strawberry-smoothie.jpg",
    desc: "딸기스무디",
    price: "",
  },
  {
    id: 16,
    title: "바나나스무디",
    category: "drink",
    image: "./images/drink/banana-smoothie.png",
    desc: "바나나스무디",
    price: "",
  },
  {
    id: 17,
    title: "생과일스무디",
    category: "drink",
    image: "./images/drink/fruit-smoothies.jpg",
    desc: "계절 과일로 만든 스무디",
    price: "",
  },
  {
    id: 18,
    title: "생과일쥬스",
    category: "drink",
    image: "./images/drink/fruit-smoothies.jpg",
    desc: "계절 과일로 만든 쥬스",
    price: "",
  },
  {
    id: 19,
    title: "요거트볼",
    category: "yogurt",
    image: "./images/dessert/yogurt.jpg",
    desc: "그래놀라와 계절과일이 들어간 요거트볼",
    price: "",
  },
  {
    id: 20,
    title: "샌드위치",
    category: "dessert",
    image: "./images/dessert/sandwich.jpg",
    desc: "샌드위치",
    price: "",
  },
  {
    id: 21,
    title: "닭가슴살 샐러드",
    category: "salad",
    image: "./images/salad/chicken-salad.jpg",
    desc: "닭가슴살 샐러드",
    price: "",
  },
  {
    id: 22,
    title: "생연어 샐러드",
    category: "salad",
    image: "./images/salad/smoked-salmon-salad.jpg",
    desc: "생연어 샐러드",
    price: "",
  },
  {
    id: 23,
    title: "구운연어 샐러드",
    category: "salad",
    image: "./images/salad/baked-salmon-salad.jpg",
    desc: "구운연어 샐러드",
    price: "",
  },
  {
    id: 24,
    title: "새우 샐러드",
    category: "salad",
    image: "./images/salad/shirimp-salad.jpg",
    desc: "새우 샐러드",
    price: "",
  },
  {
    id: 25,
    title: "치즈 샐러드",
    category: "salad",
    image: "./images/salad/cheese-salad.jpg",
    desc: "큐브치즈 샐러드",
    price: "",
  },
];
function App() {
  const [testImgs, setTestImgs] = useState(imgList);
  const [mainImgs, setMainImgs] = useState(mainList);
  const categoryData = (category) => {
    setMainImgs(mainList.filter((item) => item.category === category));
  };
  const allData = () => {
    setMainImgs(mainList);
  };
  return (
    <div className='App'>
      <Header categoryData={categoryData} allData={allData} />
      <Route exact path='/loginForm' component={LoginForm} />
      <Route exact path='/joinForm' component={JoinForm} />
      <Route
        exact
        path='/'
        render={() => <Main testImgs={testImgs} mainImgs={mainImgs} />}
      />
      <Footer />
    </div>
  );
}

export default App;
