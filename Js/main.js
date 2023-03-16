//월세 카테고리 클릭시 보이게하기
const mblock = () => {
  document.getElementById("M-rent").style.display = "block";
  document.getElementById("Y-rent").style.display = "none";
  document.getElementById("sell").style.display = "none";
};

//월세 카테고리 클릭시 보이게하기
const yblock = () => {
  document.getElementById("M-rent").style.display = "none";
  document.getElementById("Y-rent").style.display = "block";
  document.getElementById("sell").style.display = "none";
};

const sblock = () => {
  document.getElementById("M-rent").style.display = "none";
  document.getElementById("Y-rent").style.display = "none";
  document.getElementById("sell").style.display = "block";
};

// 수도권 월세 중개수수료 계산식
const aCalculator = (event) => {
  //알럿창이 뜨고 확인버튼을 누르면 입력된 값이 사라져서 달아놓음
  event.preventDefault();
  //parseFloat은 문자열을 숫자로 바꿔줌
  const aInput = parseFloat(document.getElementById("aInput").value) * 10000;
  if (aInput === null) {
    alert("보증금을 입력해주세요");
    return;
  }
  const bInput = parseFloat(document.getElementById("bInput").value) * 10000;
  if (bInput === null) {
    alert("월세를 입력해주세요");
    return;
  }
  //보증금 + 월세(100)이 5천만원보다 작으면
  if (aInput + bInput * 100 < 50000000) {
    // 보증금 + (월세*70)을하고
    const a = bInput * 70 + aInput;
    //계산한금액이 5천만원보다 미만
    if (a < 50000000) {
      //수수료율은 0.05임 부가세는 별도
      alert(`중개수수료는 ${a * 0.005}이고 부가세는 ${a * 0.005 * 0.1}입니다`);
      // 중개수수료가 20만원보다 크거나 같으면 수수료는 20만원임
      if (a * 0.005 >= 200000) {
        alert("중개수수료는 20만원이고 부가세는 2만원 입니다");
      }
      return;
    }
  }
  // 보증금 + (월세 * 100)의 합이 오천만원 이상이거나 1억 미만이면
  if (aInput + bInput * 100 >= 50000000 && aInput + bInput * 100 < 100000000) {
    // 보증금 + (월세*100)을하고
    const a = bInput * 100 + aInput;
    // 중개수수료가 30만원보다 크거나 같으면 수수료는 30만원임
    if (a * 0.004 <= 30) {
      alert("중개수수료는 30만원이고 부가세는 3만원입니다.");
      return;
    }
    // 중개수수료가 30보다 작으면 아래의 중개수수료임
    alert(
      `중개수수료는 ${a * 0.004}원 이고 부가세는 ${a * 0.004 * 0.1}원 입니다`
    );
    return;
  }
  // 중개수수료가 1억이상이거나 6억미만이면
  if (
    aInput + bInput * 100 >= 100000000 &&
    aInput + bInput * 100 <= 600000000
  ) {
    // 보증금 + (월세*100)을하고
    const a = bInput * 100 + aInput;
    alert(
      `중개수수료는 ${a * 0.003}원 이고 부가세는 ${a * 0.003 * 0.1}원 입니다`
    );
  }
  // 중개수수료가 6억이상이거나 12억미만이면
  if (
    aInput + bInput * 100 >= 600000000 &&
    aInput + bInput * 100 <= 1200000000
  ) {
    // 보증금 + (월세*100)을하고
    const a = bInput * 100 + aInput;
    alert(
      `중개수수료는 ${a * 0.004}원이고 부가세는 ${a * 0.004 * 0.1}원 입니다`
    );
  } // 중개수수료가 12억이상이거나 15억미만이면
  if (
    aInput + bInput * 100 >= 1200000000 &&
    aInput + bInput * 100 <= 1500000000
  ) {
    // 보증금 + (월세*100)을하고
    const a = bInput * 100 + aInput;
    alert(
      `중개수수료는 ${a * 0.005}원이고 부가세는 ${a * 0.005 * 0.1}원 입니다`
    );
  } else if (aInput + bInput * 100 > 1500000000) {
    const a = bInput * 100 + aInput;
    alert(
      `중개수수료는 ${a * 0.006}원이고 부가세는 ${a * 0.006 * 0.1}원 입니다`
    );
  }
};
// 수도권 전세 계산기
