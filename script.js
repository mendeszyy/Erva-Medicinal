function mostrarCuriosidade() {
  const curiosidades = [
    "A camomila já era usada pelos egípcios como planta sagrada para rituais de cura.",
    "Na Grécia antiga, o alecrim era associado à memória e aos estudos.",
    "A hortelã é usada em diversas culturas como repelente natural contra insetos.",
    "O chá de erva-doce é conhecido popularmente como calmante leve para bebês.",
    "Muitas ervas medicinais são cultivadas facilmente em pequenos vasos em casa.",
    "Na Idade Média, ervas eram usadas como 'remédios da natureza' em mosteiros.",
    "Algumas ervas medicinais também são usadas na culinária, unindo sabor e saúde."
  ];

  const sorteio = Math.floor(Math.random() * curiosidades.length);
  document.getElementById("texto-curiosidade").textContent = curiosidades[sorteio];
}
