//월세 카테고리 클릭시 보이게하기
const mblock = () => {
  document.getElementById("M-rent").style.display = "block";
  document.getElementById("Y-rent").style.display = "none";
  document.getElementById("sell").style.display = "none";
  document.getElementById("M-rentSpan").style.background = "#3478f6";
  document.getElementById("Y-rentSpan").style.background = "gray";
  document.getElementById("SellSpan").style.background = "gray";
  document.getElementById("aInput").focus();
};

//전세카테고리 클릭시 보이게하기
const yblock = () => {
  document.getElementById("M-rent").style.display = "none";
  document.getElementById("Y-rent").style.display = "block";
  document.getElementById("sell").style.display = "none";
  document.getElementById("Y-rentSpan").style.background = "#3478f6";
  document.getElementById("M-rentSpan").style.background = "gray";
  document.getElementById("SellSpan").style.background = "gray";
  document.getElementById("cInput").focus();
};
//매매 카테고리 클릭시 보이게하기
const sblock = () => {
  document.getElementById("M-rent").style.display = "none";
  document.getElementById("Y-rent").style.display = "none";
  document.getElementById("sell").style.display = "block";
  document.getElementById("SellSpan").style.background = "#3478f6";
  document.getElementById("Y-rentSpan").style.background = "gray";
  document.getElementById("M-rentSpan").style.background = "gray";
  document.getElementById("dInput").focus();
};

// 수도권 월세 중개수수료 계산식
const aCalculator = (event) => {
  //알럿창이 뜨고 확인버튼을 누르면 입력된 값이 사라져서 달아놓음
  event.preventDefault();
  //parseFloat은 문자열을 숫자로 바꿔줌
  const aInput = parseFloat(document.getElementById("aInput").value) * 10000;
  if (document.getElementById("aInput").value === "") {
    alert("보증금을 입력해주세요");
    document.getElementById("aInput").focus();
    return;
  }
  const bInput = parseFloat(document.getElementById("bInput").value) * 10000;
  if (document.getElementById("bInput").value === "") {
    alert("월세를 입력해주세요");
    document.getElementById("bInput").focus();
    return;
  }
  console.log("aInput", aInput, typeof aInput);
  console.log("bInput", bInput, typeof bInput);
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
const bCalculator = (event) => {
  event.preventDefault();
  const cInput = parseFloat(document.getElementById("cInput").value) * 10000;
  if (document.getElementById("cInput").value === "") {
    alert("전세금을 입력해주세요");
    document.getElementById("cInput").focus();
    return;
  }
  //5천만원 미만은 0.5% 최대 20만원
  if (cInput <= 50000000) {
    if (cInput * 0.005 >= 200000) {
      alert("중개수수료는 200,000원이고 부가세는 20,000원 입니다");
    } else {
      alert(
        `중개수수료는 ${cInput * 0.005}이고 부가세는 ${
          cInput * 0.005 * 0.1
        }입니다`
      );
    }
  }
  //5천만원이상 1억미만은 0.4% 최대 30만원
  if (cInput > 50000000 && cInput < 100000000) {
    if (cInput * 0.004 >= 300000) {
      alert("중개수수료는 300,000원이고 부가세는 30,000원 입니다");
    } else {
      alert(
        `중개수수료는 ${cInput * 0.004}이고 부가세는 ${
          cInput * 0.004 * 0.1
        }입니다`
      );
    }
  }
  //1억원이상 6억미만은 0.3%
  if (cInput >= 100000000 && cInput < 600000000) {
    alert(
      `중개수수료는 ${cInput * 0.003}이고 부가세는 ${
        cInput * 0.003 * 0.1
      }입니다`
    );
  }
  //3억원이상 6억미만은 0.3%
  if (cInput >= 600000000 && cInput < 1200000000) {
    alert(
      `중개수수료는 ${cInput * 0.004}이고 부가세는 ${
        cInput * 0.004 * 0.1
      }입니다`
    );
  }
  //12억원이상 15억미만은 0.3%
  if (cInput >= 1200000000 && cInput < 1500000000) {
    alert(
      `중개수수료는 ${cInput * 0.005}이고 부가세는 ${
        cInput * 0.005 * 0.1
      }입니다`
    );
  }
  //6억원이상 0.8% 이내 협의
  if (cInput >= 1500000000) {
    alert(
      `중개수수료는 ${cInput * 0.006}이고 부가세는 ${
        cInput * 0.006 * 0.1
      }이내로 협의가 가능합니다.`
    );
  }
};

//수도권 매매 계산기
const dCalculator = (event) => {
  event.preventDefault();
  const dInput = parseFloat(document.getElementById("dInput").value) * 10000;
  if (document.getElementById("dInput").value === "") {
    alert("매매금을 입력해주세요");
    document.getElementById("dInput").focus();
    return;
  }

  //5천만원 미만은 0.6% 최대 25만원
  if (dInput <= 50000000) {
    if (dInput * 0.006 >= 250000) {
      alert("중개수수료는 250,000원이고 부가세는 25,000원 입니다");
    } else {
      alert(
        `중개수수료는 ${dInput * 0.006}이고 부가세는 ${
          dInput * 0.006 * 0.1
        }입니다`
      );
    }
  }

  //5천만원이상 2억미만은 0.5% 최대 80만원
  if (dInput > 50000000 && dInput <= 200000000) {
    if (dInput * 0.005 >= 800000) {
      alert("중개수수료는 800,000원이고 부가세는 80,000원 입니다");
    } else {
      alert(
        `중개수수료는 ${dInput * 0.005}이고 부가세는 ${
          dInput * 0.005 * 0.1
        }입니다`
      );
    }
  }
  //2억이상 9억미만 은 0.4%
  if (dInput >= 200000000 && dInput < 900000000) {
    alert(
      `중개수수료는 ${dInput * 0.004}이고 부가세는 ${
        dInput * 0.004 * 0.1
      }입니다`
    );
  }
  //9억이상 12억미만 은 0.5%
  if (dInput >= 900000000 && dInput < 1200000000) {
    alert(
      `중개수수료는 ${dInput * 0.005}이고 부가세는 ${
        dInput * 0.005 * 0.1
      }입니다`
    );
  }
  //12억 이상 15억 미만 0.6%
  if (dInput >= 1200000000 && dInput < 1500000000) {
    alert(
      `중개수수료는 ${dInput * 0.006}이고 부가세는 ${
        dInput * 0.006 * 0.1
      }입니다`
    );
  }
  //9억원이상 0.8% 이내 협의

  if (dInput >= 1500000000) {
    alert(
      `중개수수료는 ${dInput * 0.007}이고 부가세는 ${
        dInput * 0.007 * 0.1
      }이내로 협의가 가능합니다.`
    );
  }
};
