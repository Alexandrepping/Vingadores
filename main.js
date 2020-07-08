class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}

class Vingador extends Pessoa {
  constructor(
    nome,
    altura,
    peso,
    poderes,
    temArmadura,
    temArma,
    isMembroFundador,
    isImortal
  ) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.temArma = temArma;
    this.isMembroFundador = isMembroFundador;
    this.isImortal = isImortal;
  }

  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[1]}`);
  }

  criar() {
    alert(
      `${this.nome} está criando com sua super ${this.poderes[4]} uma ${this.poderes[0]} que poderá ter ${this.poderes[1]} e ${this.poderes[2]} tudo isso graças a sua ${this.poderes[3]}`
    );
  }
}

const thor = new Vingador(
  "Thor",
  "1.85",
  "100kg",
  ["Deus do Trovão", "Super força", "Vôo", "Longevidade"],
  true,
  false,
  false
);

const iron_man = new Vingador(
  "Tony Stark",
  "1.79",
  "83kg",
  ["Armadura Motorizada", "super Força", "Vôo", "Riqueza", "inteligência"],
  true,
  true,
  false
);

document.getElementById("lutar").onclick = function () {
  thor.lutar();
};

document.getElementById("criar").onclick = function () {
  iron_man.criar();
};
