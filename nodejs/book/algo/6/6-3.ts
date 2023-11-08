function koch(d, p1, p2) {
  if (d === 0) {
    return;
  }

  koch(d-1, p1, s);
  console.log(s);

  koch(d-1, s, u);
  console.log(u);

  koch(d-1, u, t);
  console.log(t);

  koch(d-1, t, p2);
}
