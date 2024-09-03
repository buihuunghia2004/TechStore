const a = {
  b: 1,
  c: 2,
  d: 3
}

const b = {
}

const ma = Object.keys(a);
ma.map((item) => {
  b[item] = a[item];
})

console.log(b);
