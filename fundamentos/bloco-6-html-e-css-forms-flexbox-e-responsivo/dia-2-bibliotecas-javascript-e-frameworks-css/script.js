window.onload = function (){
    createStateOptions()  
}

const states = { 
    'AC': 'Acre' ,
    'AL': 'Alagoas',
    'AP': 'Amapá' ,
    'AM': 'Amazonas',
    'BA': 'Bahia' ,
    'CE': 'Ceará' ,
    'DF': 'Distrito Federal' ,
    'ES': 'Espírito Santo' ,
    'GO': 'Goías' ,
    'MA': 'Maranhão' ,
    'MT': 'Mato Grosso' ,
    'MS': 'Mato Grosso do Sul' ,
    'MG': 'Minas Gerais' ,
    'PA': 'Pará' ,
    'PB': 'Paraíba' ,
    'PR': 'Paraná' ,
    'PE': 'Pernambuco' ,
    'PI': 'Piauí' ,
    'RJ': 'Rio de Janeiro' ,
    'RN': 'Rio Grande do Norte' ,
    'RS': 'Rio Grande do Sul' ,
    'RO': 'Rondônia' ,
    'RR': 'Roraíma' ,
    'SC': 'Santa Catarina' ,
    'SP': 'São Paulo' ,
    'SE': 'Sergipe' ,
    'TO': 'Tocantins' 
}


const state = document.getElementById('state');
const startDate = document.getElementById('start-date');
const submit = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');


function createStateOptions(){
    for(let key in states){
        let option = document.createElement('option');
        option.setAttribute('value', key)
        option.innerText = `${key} - ${states[key]}`
        state.appendChild(option)
    }}
    