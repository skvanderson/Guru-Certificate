document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado');
    
    // Inicializa as variáveis
    let indiceAtual = 0;
    let acertos = 0;
    let tempoTotal = 1800; // 30 minutos em segundos
    let tempoRestante = tempoTotal;
    let timerInterval;
    let currentLanguage = 'pt-BR';
    let tempoExpirado = false;

    // Obtém os elementos do DOM
    var titulo = document.getElementById("questao-titulo");
    var descricao = document.getElementById("descricao");
    var pergunta = document.getElementById("pergunta");
    var ulAlternativas = document.getElementById("alternativas-content");
    const statusQuestao = document.getElementById('status');
    const questionCounter = document.getElementById('question-counter');
    const btnVoltar = document.getElementById('btnVoltar');
    const btnTranslate = document.getElementById('btnTranslate');
    const timerElement = document.getElementById('timer');

    console.log('Elementos do DOM obtidos:', {
        titulo: !!titulo,
        descricao: !!descricao,
        pergunta: !!pergunta,
        ulAlternativas: !!ulAlternativas,
        statusQuestao: !!statusQuestao,
        questionCounter: !!questionCounter,
        btnVoltar: !!btnVoltar,
        btnTranslate: !!btnTranslate,
        timerElement: !!timerElement
    });

    // Translation dictionary
    const translations = {
        'pt-BR': {
            'btnVoltar': 'Voltar',
            'btnAnterior': 'Anterior',
            'btnProxima': 'Próxima',
            'btnFinalizar': 'Finalizar',
            'btnFecharModal': 'Fechar',
            'tempoRestante': 'Tempo restante: ',
            'acertou': 'Acertou Míseravi!',
            'errou': 'Que Pena, Tente outra vez',
            'resultadoFinal': 'Resultado Final',
            'tempoEsgotado': 'Tempo Esgotado!\nVocê acertou ',
            'questoes': ' questões (',
            'deAcertos': '% de acertos).\nStatus: ',
            'aprovado': 'Aprovado',
            'reprovado': 'Reprovado',
            'acertouQuestoes': 'Você acertou ',
            'de': ' de ',
            'perguntas': ' perguntas.\n(',
            'atencao': 'Atenção',
            'selecioneUma': 'Selecione uma questão!',
            'selecioneDuas': 'Selecione duas questões',
            'resposta': 'Resposta'
        },
        'en': {
            'btnVoltar': 'Back',
            'btnAnterior': 'Previous',
            'btnProxima': 'Next',
            'btnFinalizar': 'Finish',
            'btnFecharModal': 'Close',
            'tempoRestante': 'Time remaining: ',
            'acertou': 'You got it right!',
            'errou': 'Sorry, try again',
            'resultadoFinal': 'Final Result',
            'tempoEsgotado': 'Time\'s up!\nYou got ',
            'questoes': ' questions right (',
            'deAcertos': '% correct).\nStatus: ',
            'aprovado': 'Approved',
            'reprovado': 'Failed',
            'acertouQuestoes': 'You got ',
            'de': ' out of ',
            'perguntas': ' questions right.\n(',
            'atencao': 'Attention',
            'selecioneUma': 'Please select one question!',
            'selecioneDuas': 'Please select two questions',
            'resposta': 'Answer'
        }
    };

    function updateQuestionCounter() {
        questionCounter.textContent = `${indiceAtual + 1}/${questoes.length}`;
    }

    function updateButtonTexts() {
        document.getElementById('btnVoltar').textContent = translations[currentLanguage]['btnVoltar'];
        document.getElementById('btnAnterior').textContent = translations[currentLanguage]['btnAnterior'];
        document.getElementById('btnProxima').textContent = translations[currentLanguage]['btnProxima'];
        document.getElementById('btnFinalizar').textContent = translations[currentLanguage]['btnFinalizar'];
        document.getElementById('btnFecharModal').textContent = translations[currentLanguage]['btnFecharModal'];
        document.getElementById('timer').textContent = translations[currentLanguage]['tempoRestante'] + formatTime(tempoRestante);
    }

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'pt-BR' ? 'en' : 'pt-BR';
        btnTranslate.textContent = currentLanguage === 'pt-BR' ? 'EN' : 'PT';
        carregarQuestao();
        updateButtonTexts();
    }

    // Add event listener for back button
    btnVoltar.addEventListener('click', function() {
        window.location.href = '/main/simulados.html';
    });

    // Add event listener for translation button
    btnTranslate.addEventListener('click', toggleLanguage);

    function carregarQuestao() {
        console.log('Carregando questão:', indiceAtual);
        
        const questao = questoes[indiceAtual];
        if (!questao) {
            console.error('Erro: questão não encontrada para índice', indiceAtual);
            return;
        }

        // Update question counter
        updateQuestionCounter();

        // Set content based on current language
        titulo.innerText = questao.titulo[currentLanguage] || questao.titulo['pt-BR'];
        descricao.innerText = questao.descricao[currentLanguage] || questao.descricao['pt-BR'];
        pergunta.innerText = questao.pergunta[currentLanguage] || questao.pergunta['pt-BR'];

        // Limpa as alternativas anteriores
        ulAlternativas.innerHTML = "";
        statusQuestao.innerText = "";

        // Adiciona o status da questão se já foi respondida
        if (questao.respondida) {
            if (questao.correta) {
                statusQuestao.innerText = translations[currentLanguage]['acertou'];
                statusQuestao.classList.add('correta');
                statusQuestao.classList.remove('incorreta');
            } else {
                statusQuestao.innerText = translations[currentLanguage]['errou'];
                statusQuestao.classList.remove('correta');
                statusQuestao.classList.add('incorreta');
            }
        }

        // Cria as alternativas
        console.log('Criando alternativas para a questão:', questao.alternativas);
        questao.alternativas.forEach((alt, index) => {
            var li = document.createElement("li");
            var input = document.createElement("input");
            var h4 = document.createElement("h4");
            
            input.type = questao.multipla ? "checkbox" : "radio";
            input.name = `q${indiceAtual + 1}`;
            input.value = alt.titulo[currentLanguage] || alt.titulo['pt-BR'];
            h4.innerText = alt.titulo[currentLanguage] || alt.titulo['pt-BR'];
            
            // Se a questão foi respondida, desabilita as alternativas
            input.disabled = questao.respondida;

            // Se a questão foi respondida, marca a resposta selecionada
            if (questao.respondida && questao.respostasSelecionadas) {
                if (questao.multipla) {
                    if (questao.respostasSelecionadas.includes(alt.titulo[currentLanguage] || alt.titulo['pt-BR'])) {
                        input.checked = true;
                    }
                } else {
                    if (questao.respostasSelecionadas[0] === alt.titulo[currentLanguage] || alt.titulo['pt-BR']) {
                        input.checked = true;
                    }
                }
            }

            li.style.display = "flex";
            h4.style.marginLeft = "10px";

            li.appendChild(input);
            li.appendChild(h4);
            ulAlternativas.appendChild(li);
        });

        // Atualiza os textos dos botões
        updateButtonTexts();

        // Atualiza o status da questão
        if (questao.respondida) {
            statusQuestao.textContent = questao.correta ? translations[currentLanguage]['acertou'] : translations[currentLanguage]['errou'];
            statusQuestao.className = 'question-status ' + (questao.correta ? 'correct' : 'incorrect');
        } else {
            statusQuestao.textContent = '';
            statusQuestao.className = 'question-status';
        }

        // Atualiza os botões de navegação
        document.getElementById('btnAnterior').disabled = indiceAtual === 0;
        document.getElementById('btnProxima').textContent = indiceAtual === questoes.length - 1 ? translations[currentLanguage]['btnFinalizar'] : translations[currentLanguage]['btnProxima'];
    }

    document.getElementById("btnProxima").addEventListener("click", () => {
        let questao = questoes[indiceAtual];
        let respostasSelecionadas;

        // Valida se o número de respostas selecionadas está correto
        if(questao.multipla)
            respostasSelecionadas = Array.from(ulAlternativas.querySelectorAll('input[type="checkbox"]:checked'));
        else
            respostasSelecionadas = Array.from(ulAlternativas.querySelectorAll('input[type="radio"]:checked'));
        
        if (questao.multipla && !questao.respondida && respostasSelecionadas.length != 2) {
            exibirModal(translations[currentLanguage]['atencao'], translations[currentLanguage]['selecioneDuas'], "alerta");
            return;
        }

        if (!questao.multipla && !questao.respondida && respostasSelecionadas.length < 1) {
            exibirModal(translations[currentLanguage]['atencao'], translations[currentLanguage]['selecioneUma'], "alerta");
            return;
        }

        verificarQuestao(questao, respostasSelecionadas);
        
        if (indiceAtual + 1 >= questoes.length) {
            finalizarSimulado();
            return;
        }

        indiceAtual++;
        carregarQuestao();
    });

    document.getElementById("btnAnterior").addEventListener("click", () => {
        if (indiceAtual > 0) {
            indiceAtual--;
            carregarQuestao();
        }
    });

    document.getElementById('btnFinalizar').addEventListener('click', finalizarSimulado);

    function verificarQuestao(questao, respostasSelecionadas) {
        // Filtra as alternativas corretas
        let alternativasCorretas = questao.alternativas.filter(alt => alt.correta);
        
        // Extrai os títulos das alternativas corretas
        let titulosCorretos = alternativasCorretas.map(alt => alt.titulo[currentLanguage] || alt.titulo['pt-BR']);
    
        // Verifica se as respostas selecionadas estão entre as corretas
        let respostasValidas = respostasSelecionadas.every(resp => 
            titulosCorretos.includes(resp.value)
        );
    
        // Verifica se o número de respostas é o correto
        let todasCorretas = respostasSelecionadas.length === titulosCorretos.length && respostasValidas;
        
        // Armazena as respostas selecionadas
        questao.respostasSelecionadas = respostasSelecionadas.map(resp => resp.value);
        
        questao.correta = todasCorretas;
        
        if (todasCorretas)
            acertos++;
            
        exibirModal(translations[currentLanguage]['resposta'], todasCorretas ? translations[currentLanguage]['acertou'] : translations[currentLanguage]['errou'], todasCorretas ? "correta" : "incorreta");
        questoes[indiceAtual].respondida = true;
    }

    function finalizarSimulado() {
        const porcentagemAcertos = (acertos / questoes.length) * 100;
        const statusFinal = porcentagemAcertos >= 70 ? translations[currentLanguage]['aprovado'] : translations[currentLanguage]['reprovado'];
        
        let mensagemFinal;
        if (tempoExpirado) {
            mensagemFinal = translations[currentLanguage]['tempoEsgotado'] + 
                          acertos + 
                          translations[currentLanguage]['questoes'] + 
                          porcentagemAcertos.toFixed(2) + 
                          translations[currentLanguage]['deAcertos'] + 
                          statusFinal;
        } else {
            mensagemFinal = translations[currentLanguage]['acertouQuestoes'] + 
                          acertos + 
                          translations[currentLanguage]['de'] + 
                          questoes.length + 
                          translations[currentLanguage]['perguntas'] + 
                          porcentagemAcertos.toFixed(2) + 
                          translations[currentLanguage]['deAcertos'] + 
                          statusFinal;
        }

        document.getElementById('btnAnterior').disabled = true;
        document.getElementById('btnProxima').disabled = true;
        document.getElementById('btnFinalizar').disabled = true;
        document.getElementById('btnTranslate').disabled = true;

        exibirModal(translations[currentLanguage]['resultadoFinal'], mensagemFinal, statusFinal === translations[currentLanguage]['aprovado'] ? "aprovado" : "reprovado", true);
    }
            
    function exibirModal(titulo, mensagem, classeEstilo, recarregar = false) {
        // Setar o titulo
        const modalTitulo = document.getElementById('modal-titulo');
        modalTitulo.textContent = titulo;

        // Setar a mensagem
        const mensagemModal = document.getElementById('modal-mensagem');
        mensagemModal.textContent = mensagem;

        if (classeEstilo != "")
            mensagemModal.classList.add(classeEstilo);

        // Exibir o modal
        const modal = document.getElementById('modal');
        modal.style.display = 'block';

        // Fechar o modal ao clicar no botão "Fechar"
        document.getElementById('btnFecharModal').addEventListener('click', function() {
            modal.style.display = 'none';
            if (classeEstilo != "")
                mensagemModal.classList.remove(classeEstilo);

            if(recarregar)
                window.location.reload();
        });

        // Fechar o modal ao clicar no "X"
        document.querySelector('.modal .close').addEventListener('click', function() {
            modal.style.display = 'none';
            if (classeEstilo != "")
                mensagemModal.classList.remove(classeEstilo);
        });
    
        // Fechar o modal ao clicar fora da área do modal
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                if (classeEstilo != "")
                    mensagemModal.classList.remove(classeEstilo);
            }
        });
    }

    function formatTime(ms) {
        const minutos = Math.floor(ms / 60);
        const segundos = ms % 60;
        return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    }

    function atualizarTimer() {
        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            tempoExpirado = true;
            document.getElementById('btnFinalizar').click(); // Simula um clique no botão Finalizar
        } else {
            tempoRestante--;
            document.getElementById('timer').textContent = translations[currentLanguage]['tempoRestante'] + formatTime(tempoRestante);
        }
    }

    function iniciarTimer() {
        timerInterval = setInterval(atualizarTimer, 1000);
    }

    // Verifica se as questões foram carregadas
    if (typeof questoes === 'undefined' || !questoes || questoes.length === 0) {
        console.error('Questões não foram carregadas corretamente');
        return;
    }

    console.log('Questões carregadas:', questoes.length);
    
    // Carrega a primeira questão
    carregarQuestao();
    
    // Inicia o timer
    iniciarTimer();
});