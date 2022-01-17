const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addNight = (obj, key, value) => {
     const newKey = key;
     const newValue = value;
     obj[newKey] = newValue

   }

   addNight(lesson2, 'turno', 'noite')
   console.log(lesson2)

   const showKeys = (obj) => {
       console.log(Object.keys(obj))
   }

   showKeys(lesson1)

   const objLength = (obj) => {
       console.log(Object.keys(obj).length);
   }

   objLength(lesson3)

   const objValues = (obj) => {
     console.log(Object.values(obj))
   }

   objValues(lesson1)

 let allLessons = Object.assign({lesson1}, {lesson2}, {lesson3});

 const allStudents = (allLessons) => {
    const arr = [allLessons.lesson1.numeroEstudantes, allLessons.lesson2.numeroEstudantes, allLessons.lesson3.numeroEstudantes];
    return console.log(arr.reduce((a, b) => a + b))
 }
  
allStudents(allLessons)

const getValueByNumber = (obj, n) => {
    const objArr = Object.keys(obj);
    return console.log(obj[objArr[n]])
}

getValueByNumber(lesson1, 0)


const verifyPair = (obj, key, value) => {
    const entries = Object.entries(obj);
    
    for(let i = 0; i < entries.length; i++) {
        if(entries[i][0] === key && entries[i][1] === value) {return console.log(true)} 
    }
    return console.log(false)
}

verifyPair(lesson3, 'materia', 'Maria Clara');