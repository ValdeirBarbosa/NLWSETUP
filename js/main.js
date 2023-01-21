const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener('change',save)

function add() {

   const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
    
    const dayExists =  nlwSetup.dayExists(today)
    if(dayExists ){
      // alert(` A data ${today}, já esta inclusa! 🚫`)
    }else{
      nlwSetup.addDay(today)
      // alert(`${today} adicionaod com exito ✅`)
    }
  }


function save(){
  localStorage.setItem('NLWSetup@habist',JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habist")) ||{}
nlwSetup.setData(data)
nlwSetup.load()






























































// const data = {
//   run: ["01-01","02-01", "06-01"],
//   water: ["01-01","02-01", "06-01"],
//   food: ["01-01","02-01", "06-01"],
//   takePills: ["01-01", "03-01", "04-01"],
//   journal: ["01-01","02-01", "06-01"],
// }

// nlwSetup.setData(data)
// nlwSetup.load()
