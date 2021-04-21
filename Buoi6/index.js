
function caculate() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    if (!a || !b || !c) {
      alert("Nhập đầy đủ a, b, c!");
      return;
    }
    if (a == 0) {
      document.getElementById("result").innerText = "Nhập a > 0";
      return;
    }
    let result = "";
    let delta = b * b - 4 * a * c;
    if (delta > 0) {
      let x1 = (Math.sqrt(delta) - b) / (2 * a);
      let x2 = -(Math.sqrt(delta) + b) / (2 * a);
      result = `Phương trình có 2 nghiệm là: \r\nx1=${x1} \r\nx2=${x2}`;
    } else if (delta == 0) {
      let x = -b / (2 * a);
      result = `Phương trình có 1 nghiệm kép là: x=${x}`;
    } else {
      result = "Phương trình vô nghiệm";
    }
    document.getElementById("result").innerText = result;
  }