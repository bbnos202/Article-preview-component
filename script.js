const targetDiv = document.getElementById("share");
const btn = document.getElementById("btn-fas");
btn.onclick = function desktop () {
    
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
  if (btn.style.color == "var(--Desaturated-Dark-Blue)") {
    btn.style.color = "var(--Light-Grayish-Blue)";
  } else {
    btn.style.color = "var(--Desaturated-Dark-Blue)";
  }
  if (btn.style.backgroundColor == "var(--Light-Grayish-Blue)") {
    btn.style.backgroundColor = "var(--Desaturated-Dark-Blue)";
  } else {
    btn.style.backgroundColor = "var(--Light-Grayish-Blue)";
  }
};


const targetDivm = document.getElementById("share-m");
const btnm = document.getElementById("btn-fas-m");
btnm.onclick = function mobile () {
    
    if (targetDivm.style.display == "none") {
      targetDivm.style.display = "block";
    } else {
      targetDivm.style.display = "none";
    }
    if (btnm.style.color == "var(--Desaturated-Dark-Blue)") {
      btnm.style.color = "var(--Light-Grayish-Blue)";
    } else {
      btnm.style.color = "var(--Desaturated-Dark-Blue)";
    }
    if (btnm.style.backgroundColor == "var(--Light-Grayish-Blue)") {
      btnm.style.backgroundColor = "var(--Desaturated-Dark-Blue)";
    } else {
      btnm.style.backgroundColor = "var(--Light-Grayish-Blue)";
    }
  };