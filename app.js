
// Função para pega a URL PEOPLE do SWAPI
function getDetail() {
   // Criando uma variavel para receber a requisição do lado do cliente.
  var apiURL = "https://swapi.co/api/people/";
  // Requisições do tipo GET
  axios.get(apiURL).then(function(response) {
    // Função o requisições concluída
    showDetail(response.data);
  });
}
// Criando uma variavel para saida de dados
var saida ='';
// Função para tratamento de Dados
function showDetail(data) {
  // For foi criado para fazer a leituras dos dados no maximo 4 linhas de dados .
  for (i = 0; i < 4; i++) {
    // Armazenando na variavel os nomes das requisições solicitadas
    saida += `<li>Nome:    ${data.results[i].name}
                 Altura:   ${data.results[i].height}
                 Sexo:     ${data.results[i].gender}
         Ano de Nascimento ${data.results[i].birth_year}
                      </li>`;

  }
  //Retorna a referência do elemento através do seu ID. index os Dados
  document.getElementById('dadospessoa')
  // Remove todos os elementos filhos, analisa o conteúdo da string
  // recebendo a Variavel de Saida dos dados
      .innerHTML = saida;       
}

function getDetailPlanets() {
  var apiURLPlanets = "https://swapi.co/api/planets/";
  axios.get(apiURLPlanets).then(function(response) {
    showDetailPlanets(response.data);
  });
}
var saidaPlaneta ='';
function showDetailPlanets(data) {
  for (i = 0; i < 4; i++) {
    saidaPlaneta += `<li>Planeta Natal ${data.results[i].name}</li>`;

  }
  document.getElementById('nomeplaneta')
      .innerHTML = saidaPlaneta;
}

var saidaEspecie ='';
function getDetailSpecies() {
  var apiURLPlanets = "https://swapi.co/api/species/";
  axios.get(apiURLPlanets).then(function(response) {
    showDetailSpecies(response.data);
  });
}
function showDetailSpecies(data) {
    for (i = 0; i < 4; i++) {
    saidaEspecie += `<li>Espécie ${data.results[i].name}</li>`;
  }
  document.getElementById('nomeespecie')
      .innerHTML = saidaEspecie;
}

var saidaFilms ='';
function getDetailFilms() {
  var apiURLFilms = "https://swapi.co/api/films/";
  axios.get(apiURLFilms).then(function(response) {
    showDetailFilms(response.data);

  });
}
function showDetailFilms(data) {
  for (i = 0; i < data.results.length; i++) {
    saidaFilms += `<li>Titulos Filmes ${data.results[i].title}</li>`;
  }
  document.getElementById('titulofilms')
      .innerHTML = saidaFilms;  
  }
  


//Chamando as função do objetos
getDetailPlanets();
getDetail();
getDetailSpecies();
getDetailFilms();
