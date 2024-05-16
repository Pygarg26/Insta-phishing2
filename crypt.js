function hash (algo, str) {
return crypto.subtle.digest(algo, new TextEncoder().encode(str));
}

  hash('SHA-256', 'Hello').then(hashed => {
  console.log(hashed); // ArrayBuffer
  console.log(hex(hashed)); // 185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969
  console.log(encode64(hashed)); // GF+NsyJx/iX1Yab8k4suJkMG7DBO2lGAB9F2SCY4GWk=
});
