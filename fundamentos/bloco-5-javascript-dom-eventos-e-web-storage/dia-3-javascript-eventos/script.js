function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  

/* Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];   
    
  for(let i = 0; i < dezDaysList.length; i++){
      let days = dezDaysList[i];
      let daysLi = document.createElement('li');
      
      daysLi.setAttribute('class', 'day');
      daysLi.innerText = days;

      if(daysLi.innerText === '24' || daysLi.innerText === '25'|| daysLi.innerText === '31'){daysLi.classList.add("holiday")};
      if(daysLi.innerText === '4' || daysLi.innerText === '11'|| daysLi.innerText === '18' || daysLi.innerText === '25'){daysLi.classList.add("friday")}
      
      document.querySelector('#days').appendChild(daysLi);
  }

/*Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" */

let holidaysBtn = document.createElement('button');

holidaysBtn.innerText = 'Feriados';
holidaysBtn.setAttribute('id', 'btn-holiday');

document.querySelector('.buttons-container').appendChild(holidaysBtn);

/*Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" */

 holidaysBtn.addEventListener('click', function(){
     let holidays = document.querySelectorAll('.holiday');     
     for(let i = 0; i < holidays.length; i++){
         let days = holidays[i];
         days.classList.toggle('red-bg')
     }
 })

 /* Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

let fridayBtn = document.createElement('button');

fridayBtn.innerText = "Sexta-feira";
fridayBtn.setAttribute('id', 'btn-friday');

document.querySelector('.buttons-container').appendChild(fridayBtn);

/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.*/

fridayBtn.addEventListener('click', function(){
    let fridays = document.querySelectorAll('.friday');     
    for(let i = 0; i < fridays.length; i++){
        let days = fridays[i];
        days.classList.toggle('green-bg')
    }
})
 /* Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. */

let monthDays = document.querySelectorAll('.day');

for(let i = 0; i < monthDays.length; i++){
    let days = monthDays[i];
    days.addEventListener('mouseover', function(){
        days.style.fontSize = "28px"
    })
}
for(let i = 0; i < monthDays.length; i++){
    let days = monthDays[i];
    days.addEventListener('mouseout', function(){
        days.style.fontSize = "20px"
    })
}

/* Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
 */

let task = document.createElement('span');
task.innerText = "cozinhar"

document.querySelector('.my-tasks').appendChild(task)

/*Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
 */

let subTitle = document.createElement('div')

subTitle.style.backgroundColor = "white";
subTitle.classList.add('task');

document.querySelector('.my-tasks').appendChild(subTitle)

/* Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada. */

let taskSelect = document.querySelector('.my-tasks div');
taskSelect.addEventListener('click', function(){
    taskSelect.classList.toggle('task-selected')
})