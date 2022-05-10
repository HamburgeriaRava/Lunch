var primo = 0
async function FetchAllData() {
    let { data: Panini, error } = await supabase
  .from('Panini')
  .select('*');
  
  Panini.forEach(async (item, index, arr) => {
    console.log(item.Nome)
    addItemsToList(item);
  });

  let { data: Fried, errorFried } = await supabase
  .from('Fried')
  .select('*');
  
  Fried.forEach(async (item, index, arr) => {
    console.log(item.Nome)
    addItemsToListFried(item, 'primi');
  });
}

function addItemsToList(panino) {
    var div = document.getElementById('component');
    var _panino = document.createElement('div');
    var title = document.createElement('div');
    var name = document.createElement('div');
    var img = document.createElement('img');
    var price = document.createElement('div');
    var description = document.createElement('div');
    
    _panino.className = 'panino'
    title.className = 'titolo';
    name.className = 'foto';
    price.className = 'prezzo';
    description.className = 'descrizione';


    title.innerHTML = panino.Nome;
    description.innerHTML = panino.Ingredienti;
    price.innerHTML = panino.Prezzo;
    img.src = 'static/img/panino.png'
    
    _panino.append(title);
    name.append(img);
    _panino.append(name);
    _panino.append(price);
    _panino.append(description);
    div.append(_panino)
    // title.append(name);
    // title.append(price);
    // _panino.append(title);
    // _panino.append(description);
    // div.append(_panino);
}

function addItemsToListFried(piatto, id) {
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
    prezzo.className = 'prezzo2';
    
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

function bevande() {
    window.location.href = "./bevande.html";
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
