function secondsToTime(e1, e2, e3) {
  let sum = e1 + e2 + e3;
  let m = Math.floor((sum % 3600) / 60).toString(),
    s = Math.floor(sum % 60)
      .toString()
      .padStart(2, "0");

  console.log(m + ":" + s);
}

secondsToTime(35, 45, 44);
secondsToTime(22, 7, 34);
secondsToTime(50, 50, 49);
secondsToTime(14, 12, 10);
