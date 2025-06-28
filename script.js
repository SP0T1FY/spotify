   // Dados a serem enviados no corpo da solicitaÃ§Ã£o
   const requestData = {
    access_token: "XXXXX",
    clickid: "XXXXX",
    event_name: "EVENT_XXXXX",
    is_attributed: 1,
    mmpcode: "PL",
    pixelId: "XXXXX",
    pixelSdkVersion: "9.9.9",
    properties: {
    content_id: "XXXXX",
    content_type: "XXXXX",
    content_name: "XXXXX"
    },
    testFlag: false,
    third_party: "XXX",
    trackFlag: true // ou false
};

const notifications = [
    { name: "Ana Ximenes", action: "realizar um saque de", amount: "R$421" },
    { name: "Caio alves", action: "fazer uma avaliação de", amount: "R$30" },
    { name: "junior gomes", action: "realizar um saque de", amount: "R$743" },
    { name: "Mariana almeida", action: "fazer uma avaliação de", amount: "R$20" },
    { name: "Weslley serejo", action: "realizar um saque de", amount: "R$541" },
    { name: "cecilia moraes", action: "fazer uma avaliação de", amount: "R$22" },
    { name: "sidnney nunes", action: "realizar um saque de", amount: "R$474" },
    { name: "maria vitória", action: "fazer uma avaliação de", amount: "R$57" },
    { name: "Danyllo Moreira", action: "realizar um saque de", amount: "R$651" },
    { name: "vitória silva", action: "fazer uma avaliação de", amount: "R$47" },
    { name: "myllena", action: "realizar um saque de", amount: "R$424" },
    { name: "receba soares", action: "fazer uma avaliação de", amount: "R$49" },
    
  ];
  
  function showNotification(notification) {
    const container = document.getElementById("notification-container");
    const notificationElement = document.createElement("div");
    notificationElement.classList.add("notification");
  
    // Formatação com valor em negrito e verde
    notificationElement.innerHTML = `${notification.name} acabou de ${notification.action} <span class="amount">${notification.amount}</span>`;
    container.appendChild(notificationElement);
  
    setTimeout(() => {
      notificationElement.remove();
    }, 6000); // Duração da notificação na tela (6 segundos)
  }
  
  function startNotifications() {
    let index = 0;
    setInterval(() => {
      showNotification(notifications[index]);
      index = (index + 1) % notifications.length;
    }, 6500); // Intervalo entre notificações (8 segundos)
  }
  
  document.addEventListener("DOMContentLoaded", startNotifications);


const inicioDiv = document.getElementById('inicio');
const saqueDiv = document.getElementById('saque');
const loginDiv = document.getElementById('login');
const bonusDiv = document.getElementById('bonus');

function playAudio() {
    var audio = document.getElementById("meuAudio");
    audio.play();
}

// FunÃ§Ã£o para definir um cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue}; ${expires}; path=/`;
}

// FunÃ§Ã£o para obter o valor de um cookie
function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}


let valor = parseFloat(getCookie('valor')) || 100.00;

function atualizarValor(val = valor) {
let valorSpan = document.getElementById('valor-saldo-box');
// const valorSpanMoney = document.getElementById('valor-money');
    console.log("teste", val)
    valorSpan.textContent = `R$ ${val.toFixed(2)}`;
    // valorSpanMoney.textContent = `R$ ${valor.toFixed(2)}`;
    setCookie('valor', val.toFixed(2), 365); // Armazena o valor como um cookie vÃ¡lido por 1 ano
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarValor();
});

// Array com os valores desejados
let valoresDesejados = [8.50, 14.50, 27, 43, 47.50, 32, 32.50, 27, 30, 59.50];

// FunÃ§Ã£o para aumentar o valor
function aumentarValor() {
    // Se ainda houver valores no a

    if (valoresDesejados.length > 0) {
        // Retira o prÃ³ximo valor do array
        const valorIncremento = valoresDesejados.shift();

        // Adiciona o valor ao total
        valor = valor + valorIncremento;
        console.log("aumentar valor", valorIncremento, valor)
        // Atualiza e verifica o valor
        atualizarValor(valor);
        verificarValor();
    }
}  


function mostrarPagina(pagina) {
  inicioDiv.style.display = pagina === 'inicio' ? 'block' : 'none';
  saqueDiv.style.display = pagina === 'saque' ? 'block' : 'none';
  loginDiv.style.display = pagina === 'login' ? 'block' : 'none';
  bonusDiv.style.display = pagina === 'bonus' ? 'block' : 'none';
}



function trocarDiv(esconderId, mostrarId) {
  document.getElementById(esconderId).style.display = 'none';
  document.getElementById(mostrarId).style.display = 'block';
}

// Atualizar o valor exibido inicialmente




//--------------------------------- Ad 1 ---------------------------------


function showPopupB1() {
    document.getElementById('B1').disabled = true;
    document.getElementById('popupB1').style.display = 'block';
}

function closePopupB1() {
    document.getElementById('popupB1').style.display = 'none';
    document.getElementById('B1').disabled = true;
}   

// Carregando B1
    function showLoadingB1() {
        var button = document.getElementById("B1");
            showPopupB1();
            playAudio();
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                closePopupB1();
                aumentarValor();
                trocarDiv('ad1', 'ad2');
            }, 4000); // 3 segundos
        }


//--------------------------------- Ad 2 ---------------------------------


function showPopupB2() {
    document.getElementById('popupB2').style.display = 'block';
    document.getElementById('B2').disabled = true;
}

function closePopupB2() {
    document.getElementById('popupB2').style.display = 'none';
    document.getElementById('B2').disabled = true;
}   

// Carregando B2
    function showLoadingB2() {
        var button = document.getElementById("B2");
            showPopupB2();
            playAudio();
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                closePopupB2();
                aumentarValor();
                trocarDiv('ad2', 'ad3');
            }, 4000); // 3 segundos
        }

    
//--------------------------------- Ad 3 ---------------------------------


function showPopupB3() {
    document.getElementById('popupB3').style.display = 'block';
    document.getElementById('B3').disabled = true;
}

function closePopupB3() {
    document.getElementById('popupB3').style.display = 'none';
    document.getElementById('B3').disabled = true;
}   


    function showLoadingB3() {
        var button = document.getElementById("B3");
            showPopupB3();
            playAudio();
            setTimeout(function () {
                closePopupB3();
                aumentarValor();
                trocarDiv('ad3', 'ad4');
            }, 4000); 
        }


//--------------------------------- Ad 4 ---------------------------------


function showPopupB4() {
    document.getElementById('popupB4').style.display = 'block';
    document.getElementById('B4').disabled = true;
}

function closePopupB4() {
    document.getElementById('popupB4').style.display = 'none';
    document.getElementById('B4').disabled = true;
}   


    function showLoadingB4() {
        var button = document.getElementById("B4");
            showPopupB4();
            playAudio();
            setTimeout(function () {
                closePopupB4();
                aumentarValor();
                trocarDiv('ad4', 'ad5');
            }, 4000); 
        }


//--------------------------------- Ad 5 ---------------------------------


function showPopupB5() {
    document.getElementById('popupB5').style.display = 'block';
    document.getElementById('B5').disabled = true;
}

function closePopupB5() {
    document.getElementById('popupB5').style.display = 'none';
    document.getElementById('B5').disabled = true;
}   


    function showLoadingB5() {
        var button = document.getElementById("B5");
            showPopupB5();
            playAudio();
            setTimeout(function () {
                closePopupB5();
                aumentarValor();
                trocarDiv('ad5', 'ad6');
            }, 4000);
        }

    
//--------------------------------- Ad 6 ---------------------------------


function showPopupB6() {
    document.getElementById('popupB6').style.display = 'block';
    document.getElementById('B6').disabled = true;
}

function closePopupB6() {
    document.getElementById('popupB6').style.display = 'none';
    document.getElementById('B6').disabled = true;
}   


    function showLoadingB6() {
        var button = document.getElementById("B6");
            showPopupB6();
            playAudio();
            setTimeout(function () {
                closePopupB6();
                aumentarValor();
                trocarDiv('ad6', 'ad7');
            }, 4000);
        }

//--------------------------------- Ad 7 ---------------------------------


function showPopupB7() {
    document.getElementById('popupB7').style.display = 'block';
    document.getElementById('B7').disabled = true;
}

function closePopupB7() {
    document.getElementById('popupB7').style.display = 'none';
    document.getElementById('B7').disabled = true;
}   


    function showLoadingB7() {
        var button = document.getElementById("B7");
            showPopupB7();
            playAudio();
            setTimeout(function () {
                closePopupB7();
                aumentarValor();
                trocarDiv('ad7', 'ad8');
            }, 4000);
        }


//--------------------------------- Ad 8 ---------------------------------


function showPopupB8() {
    document.getElementById('popupB8').style.display = 'block';
    document.getElementById('B8').disabled = true;
}

function closePopupB8() {
    document.getElementById('popupB8').style.display = 'none';
    document.getElementById('B8').disabled = true;
}   


    function showLoadingB8() {
        var button = document.getElementById("B8");
            showPopupB8();
            playAudio();
            setTimeout(function () {
                closePopupB8();
                aumentarValor();
                trocarDiv('ad8', 'ad9');
            }, 4000);
        }


//--------------------------------- Ad 9 ---------------------------------

function showLoadingB9() {
    var button = document.getElementById("B9");
        document.getElementById('popupB9').style.display = 'block';
        playAudio();
        setTimeout(function () {
            document.getElementById('popupB9').style.display = 'none';
            aumentarValor();
            aumentarValor();
            trocarDiv('ad9', 'ad10');
        }, 4000);
    }



//--------------------------------- Ad 10 ---------------------------------


    function showLoadingB10() {
        var button = document.getElementById("B10");
            document.getElementById('popupB10').style.display = 'block';
            playAudio();
            setTimeout(function () {
                document.getElementById('popupB10').style.display = 'none';
                aumentarValor();
                trocarDiv('ad10', 'popupL');
            }, 4000);
        }


//---------------------------- BotÃ£o chave PIX ---------------------------
 
 
let activeButton = null;

function toggleButton(buttonNumber) {
  const buttons = document.querySelectorAll('.square-button');

  if (activeButton !== null) {
   buttons[activeButton - 1].classList.remove('active');
  }

  if (activeButton === buttonNumber) {
    activeButton = null;
  } else {
    buttons[buttonNumber - 1].classList.add('active');
    activeButton = buttonNumber;
  }
} 
 
 
    
    
    
    
    
    
    

// Popup SAQUE

function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}  

// Popup LIMITE DIÃRIO

function showPopupL() {
  document.getElementById('popupL').style.display = 'block';
}

function closePopupL() {
  document.getElementById('popupL').style.display = 'none';
}  



// POPUP Limite diÃ¡rio quando bate X valor
function verificarValor() {
    if (valor >= 420 && valor < 475) {
        // Popup para valor >= 1362.60 e < 2725.20
        showPopupL();
    } else if (valor >= 940 && valor < 950) {
        // Popup para valor >= 2725.20 e < 4087.8
        showPopupL();
    } else if (valor >= 1400) {
        // Popup para valor >= 4087.8
        showPopupL();
    }
    
}




function fecharPopupEAgendarReaparecimento() {
    var popupButtonContainer = document.querySelector(".popup-buttonL-container");
    popupButtonContainer.style.display = "none"; // Oculta o botÃ£o

    // Define um temporizador para mostrar o botÃ£o apÃ³s 10 segundos
    setTimeout(function() {
        popupButtonContainer.style.display = "block";
    }, 86400000); // 24 horas

    // Aqui vocÃª tambÃ©m deve adicionar a funÃ§Ã£o para fechar o popup
    closePopupL();
}

// Chama a funÃ§Ã£o para mostrar o botÃ£o apÃ³s 10 segundos (10000 milissegundos)
setTimeout(function() {
    var botaoContainer = document.querySelector(".popup-buttonL-container");
    botaoContainer.style.display = "block";
}, 86400000); // 24 horas


// Script botÃ£o login
function showLoading() {
  var button = document.getElementById("prosseguir-button");
  button.disabled = true; // Desabilitar o botÃ£o enquanto a animaÃ§Ã£o ocorre

  button.innerHTML = '<span class="loading-spinner"></span> Carregando...';

  // Simulando um atraso de 3 segundos para a animaÃ§Ã£o
  setTimeout(function() {
    // Redirecionar apÃ³s o atraso
    mostrarPagina('inicio');
  }, 2000); // 2 segundos
}




function formatarValor(input) {
  // Remove todos os caracteres nÃ£o numÃ©ricos
  var valor = input.value.replace(/[^0-9]/g, '');
  
  // Divide o valor em parte inteira e decimal
  var parteInteira = valor.slice(0, -2);
  var centavos = valor.slice(-2);
  
  // Reconstroi o valor formatado
  input.value = parteInteira + '.' + centavos;
}

function verificarCampos() {
    var email = document.getElementById("email").value;
    var emailValido = /\S+@\S+\.\S+/;

    if (email === "") {
        alert("Insira seu e-mail para logar!");
    } else if (!emailValido.test(email)) {
        alert("Insira um e-mail vÃ¡lido!");
    } else {
        // Se o campo estiver preenchido e for um e-mail vÃ¡lido, redireciona para a prÃ³xima pÃ¡gina
        showLoading();
    }
}


function showPopupInicio() {
    document.getElementById('popupinicio').style.display = 'block';
  }

function closePopupInicio() {
    document.getElementById('popupinicio').style.display = 'none';
}


function in1() {
    closePopupInicio();
    showPopupInicio2();

        // Agendar a exibiÃ§Ã£o do prÃ³ximo apÃ³s 5 segundos
        setTimeout(function() {
            closePopupInicio2();
            showPopupInicio3();
        }, 10000);
}    









function showPopupVideo() {
    document.getElementById('popupvideo').style.display = 'block';
  }

function closePopupVideo() {
    document.getElementById('popupvideo').style.display = 'none';
}

function video() {
    closePopup();
    showPopupVideo();
}   




      
function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");
  
    const allQuestions = document.querySelectorAll(".question");
    allQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        otherQuestion.nextElementSibling.classList.remove("active");
      }
    });
  }
  
  
  
  // ----------------- TESTE ANUNCIO 1 -----------------

  document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.rating-container');
  
    containers.forEach(function (container) {
      const buttons = container.querySelectorAll('.rating-button');
  
      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          // Remove a classe 'active' apenas do conjunto de botÃµes dentro do mesmo container
          buttons.forEach(function (btn) {
            btn.classList.remove('active');
          });
  
          // Adiciona a classe 'active' apenas ao botÃ£o clicado
          button.classList.add('active');
        });
      });
    });
  });
  
  

  // function toggleCard(clickedElement) {
//     const allCards = document.querySelectorAll('.card__grade');
//     allCards.forEach(card => {
//         card.classList.remove('active');
//     });

//     clickedElement.classList.add('active');
// }

function toggleCard(clickedElement) {
    const allCards = document.querySelectorAll('.card__grade');
    
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Adicione um switch para lidar com diferentes ações
    switch (clickedElement.id) {
        case 'card__grade1':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade2':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade3':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade4':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade5':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-solid fa-star active', '#ffd700');
            break;
        // Adicione mais casos conforme necessário
        default:
            // Ação padrão, se nenhum caso corresponder
            console.log("Nenhum caso correspondente");
    }
}

function updateStars(elementId, className, color) {
    const starElement = document.getElementById(elementId);
    if (starElement) {
        starElement.className = className;
        starElement.style.color = color; // Adiciona a cor amarela
    } else {
        console.error("Elemento não encontrado com ID: " + elementId);
    }
}

// Adicione um evento de clique aos elementos que deseja controlar
const cards = document.querySelectorAll('.card__grade');

cards.forEach(card => {
    card.addEventListener('click', function() {
        toggleCard(this); // "this" se refere ao elemento clicado
    });
});