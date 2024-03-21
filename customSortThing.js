function customSort(order, s) {
  const orderMap = new Map();
  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i);
  }

  const customCompare = (a, b) => {
    const indexA = orderMap.has(a) ? orderMap.get(a) : Infinity;
    const indexB = orderMap.has(b) ? orderMap.get(b) : Infinity;
    return indexA - indexB;
  };

  return s.split("").sort(customCompare).join("");
}

const order = "bcafg",
  s = "abcd";
console.log(customSort(order, s)); //Output : "cbad"
