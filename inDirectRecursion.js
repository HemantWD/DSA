let money = 100;
let totalApple = 0;

function buyApple(x) {
  if (x > 0) {
    buyMore(x);
  } else {
    console.log("Not Enough Money", totalApple, "Apple");
  }
}

function buyMore(x) {
  totalApple++;
  let priceOfApple = 25;
  buyApple(x - priceOfApple);
  console.log(x);
}
buyApple(money);
