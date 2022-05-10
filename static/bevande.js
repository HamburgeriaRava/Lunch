var primo = 0

async function FetchAllData() {
    let { data: Bevande, error } = await supabase
  .from('Beverage')
  .select('*');
  
  Bevande.forEach(async (item, index, arr) => {
    console.log(item.Nome)
    addItemsToList(item, 'primi');
  });
  
}


function addItemsToList(piatto, id) {
    var div = document.getElementById(id);
    var _piatto = document.createElement('div');
    var nome = document.createElement('div');
    var prezzo = document.createElement('div');
    var span = document.createElement('span');

    span.style.width = '90%'
    span.style.height = '4px'
    span.style.background = '#FFC83C'
    
    _piatto.className = 'row'
    nome.className = 'pietanza';
    prezzo.className = 'prezzo';
    
    if (primo != 0) {
      div.append(span);

    } else {
      primo = 1
    }

    nome.innerHTML = piatto.Nome;
    prezzo.innerHTML = piatto.Prezzo;
    
    _piatto.append(nome);
    _piatto.append(prezzo);
    div.append(_piatto)
}

var result = FetchAllData();
window.onload = result;


function piatti() {
    window.location.href = "./piatti.html";
}

function panini() {
    window.location.href = "./index.html";
}

function dessert() {
    window.location.href = "./dessert.html";
}

function aperitivi() {
    window.location.href = "./aperitivi.html";
}

function caffetteria() {
    window.location.href = "./caffetteria.html";
}