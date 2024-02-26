const protein = document.getElementById("protein");
const result = document.getElementById("result");

let needProtein;

// document.innertext

const hitungNutrisi = () => {
  let umur = document.getElementById("umur").value;
  let gelas = document.getElementById("gelas").value;
  if (umur >= 0 && umur <= 17) {
    needProtein = 100;
  } else if (umur > 17 && umur <= 50) {
    needProtein = 200;
  } else {
    needProtein = 300;
  }

  





  protein.innerHTML = `Umur Anda adalah ${umur} tahun, sehingga kebutuhan nutrisi yang harus dipenuhi dalam satu hari adalah ${needProtein} mg  per hari.`;

  result.innerHTML = `Jika hari ini Anda meminum ${gelas} gelas maka anda sudah mendapatkan ${
    gelas * 2
  }mg protein, sehingga kebutuhan protein yang harus dipenuhi adalah  ${needProtein-gelas*2}mg protein `;
};

// console.log(drink);
