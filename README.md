# Guru Certificate — Plataforma de Estudos AWS

Plataforma de preparação para certificações AWS com simulados, flashcards e projetos práticos. Desenvolvida em React, com interface responsiva e identidade visual inspirada na AWS.

## Funcionalidades

- Simulados de Cloud Practitioner, Solutions Architect Associate e Developer Associate, com questões e explicações em português e inglês.
- Prática de Cloud Practitioner organizada por domínio.
- Flashcards bilíngues para revisão nas três trilhas.
- Cadastro e login locais, perfil com histórico e estatísticas dos simulados.
- Ranking público, com filtros por certificação e classificação por desempenho.
- Catálogo de cursos, trilhas de formação e recursos de treinamento.
- Projetos hands-on com instruções, exemplos de código e referências.
- Páginas renovadas, navegação para flashcards e animações de entrada ao rolar a página.

## Simulados

| Trilha | Referência da trilha | Questões na plataforma | Tempo limite |
| --- | --- | --- | --- |
| Cloud Practitioner | CLF-C02 | 65 | 90 minutos |
| Solutions Architect Associate | SAA-C03 | 20 | 40 minutos |
| Developer Associate | DVA-C02 | 20 | 40 minutos |

Os bancos de questões abordam cenários de uso de serviços AWS. Os simulados oferecem:

- Alternância entre português e inglês.
- Contagem regressiva e encerramento ao esgotar o tempo.
- Navegação entre questões, com resposta obrigatória para avançar.
- Feedback imediato, indicação da alternativa correta e explicações.
- Bloqueio da resposta após a seleção.
- Resultado final com percentual de acertos; o critério interno de aprovação é 70%.
- Registro do resultado no perfil quando há um usuário conectado.
- Restrições de interação implementadas pelo componente `ExamProtection`.

Os percentuais exibidos são métricas de estudo da plataforma, sem equivalência com a pontuação oficial dos exames AWS.

### Cloud Practitioner por domínio

Além do simulado completo, é possível estudar as questões de cada domínio separadamente:

| Domínio | Peso indicado no catálogo |
| --- | --- |
| Conceitos de Nuvem | 24% |
| Segurança e Conformidade | 30% |
| Tecnologia e Serviços na Nuvem | 34% |
| Faturamento, Precificação e Suporte | 12% |

A prática utiliza as questões do banco de Cloud Practitioner filtradas pelo domínio, com alternância de idioma, feedback imediato, resumo de acertos e opção de reiniciar. Essas sessões não possuem cronômetro e não são registradas no histórico ou no ranking.

## Flashcards

Cada trilha possui **20 cartões**, totalizando **60 flashcards**:

- Cloud Practitioner.
- Solutions Architect Associate.
- Developer Associate.

A sessão permite virar o cartão por clique, toque, Enter ou espaço, alternar entre português e inglês, navegar, pular cartões e embaralhar a ordem. Após revelar a resposta, o estudante pode marcar **Já Sabia** ou **Preciso Revisar**.

Ao concluir, a sessão mostra a quantidade de cartões em cada avaliação e permite embaralhar e repetir. As avaliações ficam apenas no estado da sessão; não são salvas no perfil.

## Usuários, perfil e ranking

O cadastro valida duplicidade de nome de usuário ou e-mail e exige senha com pelo menos seis caracteres. O login usa nome de usuário e senha; a sessão permanece no navegador até o logout ou a remoção dos dados locais.

O perfil reúne histórico de simulados, estatísticas gerais e por certificação, questões erradas e assuntos para revisar.

O ranking pode ser consultado sem login. A classificação ocorre **dentro de cada certificação**, pelo maior percentual obtido pelo usuário (`bestPercentage`). Em caso de empate, o total acumulado de acertos (`totalCorrect`) é usado como desempate. A visualização geral reúne as trilhas e preserva a posição dentro de cada uma.

### Persistência local

A implementação atual funciona no navegador, sem backend de autenticação ou banco de dados remoto. Usuários, sessão e resultados são armazenados em `localStorage`, nas chaves:

- `guru_certificate_users`
- `guru_certificate_current_user`
- `guru_certificate_results`

O histórico e o ranking refletem os dados desse navegador e não são sincronizados entre dispositivos. As senhas também são armazenadas localmente em texto simples; a autenticação atual é demonstrativa e precisa de uma implementação de backend adequada para uso com contas reais em produção.

## Cursos e hands-on

A página de cursos apresenta oportunidades de formação, links para Escola da Nuvem e Campinho Digital, além de recursos do AWS Skill Builder, Cloud Quest e microcredenciais.

A página de materiais reúne **10 projetos práticos** e um guia para criar uma conta AWS:

1. Criar uma conta AWS.
2. Hospedar um site estático com S3 e CloudFront.
3. Construir um blog com Lambda e DynamoDB.
4. Implantar um aplicativo serverless com Amplify.
5. Criar um bot com Lex e Lambda.
6. Configurar um pipeline de CI/CD com CodePipeline.
7. Hospedar um aplicativo web em EC2.
8. Enviar e-mails com SES.
9. Criar uma API RESTful com API Gateway e Lambda.
10. Realizar análise de dados com Redshift.
11. Implementar um pipeline de dados com Glue e S3.

Os tutoriais incluem dificuldade, tempo estimado, pré-requisitos, orientações sobre custos e créditos, etapas práticas e referências. A aba adicional de tutoriais do AWS re/Start está indicada como **conteúdo em breve**.

## Tecnologias

- React 18 e React DOM.
- React Router 6.
- Styled Components 5.
- Create React App, com `react-scripts` 5.
- CSS com variáveis de cores, espaçamento e tipografia.
- `IntersectionObserver` para animações do componente `Reveal`.
- `localStorage` para persistência local.

## Executar localmente

É necessário ter Node.js e npm instalados, em versões compatíveis com as dependências do projeto.

```bash
git clone https://github.com/skvanderson/Guru-Certificate.git
cd Guru-Certificate
npm ci
npm start
```

A aplicação fica disponível em `http://localhost:3000`.

### Comandos

```bash
# Servidor de desenvolvimento
npm start

# Build de produção, gerado na pasta build/
npm run build

# Executar o runner de testes
npm test
```

Se `react-scripts` não for encontrado, instale as dependências com `npm ci` antes de executar os comandos.

O arquivo `vercel.json` configura o build estático, o redirecionamento das rotas para `index.html`, cabeçalhos HTTP e cache dos arquivos estáticos.

## Rotas principais

| Caminho | Conteúdo |
| --- | --- |
| `/` | Página inicial |
| `/contribuintes` | Equipe e apresentação do projeto |
| `/quem-somos` | Redirecionamento para contribuintes |
| `/simulados` | Catálogo de simulados |
| `/simulado/cloud-practitioner` | Simulado completo de Cloud Practitioner |
| `/simulado/cloud-practitioner/dominios` | Catálogo de domínios |
| `/simulado/cloud-practitioner/dominio/:domainId` | Prática por domínio |
| `/simulado/solutions-architect` | Simulado de Solutions Architect |
| `/simulado/developer-associate` | Simulado de Developer Associate |
| `/flashcards` | Catálogo de flashcards |
| `/flashcards/:examType` | Sessão de flashcards |
| `/cursos` | Cursos e trilhas de formação |
| `/materiais` | Projetos hands-on |
| `/hands-on/tutorial/:id` | Tutorial prático |
| `/cadastro` | Cadastro e login |
| `/perfil` | Perfil e histórico |
| `/ranking` | Ranking por certificação |

Nos flashcards, `examType` pode ser `cloud-practitioner`, `solutions-architect` ou `developer-associate`. Na prática por domínio, `domainId` pode ser `cloud-concepts`, `security-compliance`, `cloud-technology-services` ou `billing-pricing-support`.

## Estrutura do projeto

```text
src/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Reveal.js
│   ├── ExamProtection.js
│   └── NavigationButtons.js
├── data/
│   ├── cloudPractitionerQuestions.js
│   ├── cloudPractitionerDomains.js
│   ├── cloudPractitionerFlashcards.js
│   ├── developerAssociateQuestions.js
│   ├── developerAssociateFlashcards.js
│   ├── solutionsArchitectQuestions.js
│   ├── solutionsArchitectFlashcards.js
│   └── tutorialsData.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Simulados.js
│   ├── Flashcards.js
│   ├── Cursos.js
│   ├── Materials.js
│   ├── Register.js
│   ├── Profile.js
│   ├── Ranking.js
│   ├── flashcards/FlashcardSession.js
│   ├── hands-on/Tutorial.js
│   └── simulados/
│       ├── CloudPractitioner.js
│       ├── CloudPractitionerDomains.js
│       ├── CloudPractitionerDomainSession.js
│       ├── SolutionsArchitect.js
│       └── DeveloperAssociate.js
├── services/userService.js
├── App.js
├── index.js
└── index.css
```

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch: `git checkout -b feature/minha-funcionalidade`.
3. Implemente a alteração e confira o build.
4. Crie um commit e envie sua branch.
5. Abra um pull request descrevendo a alteração e as verificações realizadas.

## Contribuintes

- Sharlles Anderson.
- Pedro Paulo.
- Ivonaldo Micheluti Dias.
- Wesley Cavalcante.
- Taynar Simões.
- Elizângela Rosa da Silva Costa.
- Jefferson Bezerra.

---

**Guru Certificate** — Desbrave o conhecimento. Transforme o futuro.
