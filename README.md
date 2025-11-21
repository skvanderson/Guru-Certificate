# Guru Certificate - Plataforma de Simulados AWS

Uma plataforma moderna e responsiva para simulados de certificações AWS, desenvolvida com React e seguindo o design system da AWS.

## 🚀 Características

- **Design Moderno**: Interface baseada no design system da AWS com cores oficiais
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Simulados Interativos**: Questões baseadas nos exames oficiais AWS
- **Suporte Multilíngue**: Português e Inglês
- **Timer Integrado**: Controle de tempo para simular condições reais de exame
- **Feedback Personalizado**: Explicações detalhadas para cada alternativa selecionada
- **Navegação Intuitiva**: Interface limpa e fácil de usar
- **Sistema de Autenticação**: Cadastro e login de usuários
- **Perfil do Usuário**: Acompanhamento de progresso e estatísticas detalhadas
- **Sistema de Ranking**: Compare seu desempenho com outros estudantes
- **Hands-On Práticos**: Tutoriais passo a passo para aprender AWS na prática

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript moderno
- **React Router**: Navegação entre páginas
- **Styled Components**: CSS-in-JS para estilização
- **AWS Design System**: Cores e componentes baseados no padrão AWS
- **Responsive Design**: Mobile-first approach
- **LocalStorage**: Armazenamento local de dados do usuário

## 📱 Páginas Disponíveis

- **Home**: Página inicial com apresentação da plataforma
- **Contribuintes**: Informações sobre a equipe e missão
- **Simulados**: Lista de simulados disponíveis
- **Cursos**: Cursos e trilhas de aprendizado
- **Materiais**: Recursos de estudo para download
- **Hands-On**: Tutoriais práticos passo a passo
- **Cadastro/Login**: Sistema de autenticação de usuários
- **Perfil**: Estatísticas detalhadas e histórico de simulados
- **Ranking**: Classificação dos melhores desempenhos
- **Simulados Interativos**: Cloud Practitioner, Solutions Architect e Developer Associate

## 🎯 Simulados Disponíveis

### AWS Cloud Practitioner (CLF-02)
- 20 questões baseadas no exame oficial
- Tempo limite: 40 minutos (2 minutos por questão)
- Nível: Iniciante
- Suporte a português e inglês
- Feedback personalizado para cada alternativa
- Salvamento automático de resultados

### AWS Solutions Architect Associate (SAA)
- 20 questões baseadas no exame oficial
- Tempo limite: 40 minutos (2 minutos por questão)
- Nível: Intermediário
- Foco em arquitetura de soluções escaláveis e seguras
- Feedback personalizado para cada alternativa
- Salvamento automático de resultados

### AWS Developer Associate (DVA)
- 20 questões baseadas no exame oficial
- Tempo limite: 40 minutos (2 minutos por questão)
- Nível: Intermediário
- Foco em desenvolvimento serverless e CI/CD
- Feedback personalizado para cada alternativa
- Salvamento automático de resultados

## 👤 Sistema de Usuários

### Cadastro e Login
- Cadastro rápido com validação de dados
- Login seguro com autenticação
- Sessão persistente com LocalStorage
- Logout e gerenciamento de conta

### Perfil do Usuário
- **Estatísticas Gerais**: Total de simulados, acertos, erros e média de desempenho
- **Estatísticas por Certificação**: Desempenho detalhado por tipo de exame
- **Assuntos para Revisar**: Lista dos tópicos que mais precisam de atenção
- **Análise Detalhada**: Histórico completo de cada simulado realizado
- **Análise Personalizada**: Recomendações baseadas no desempenho
- **Questões Erradas**: Revisão das questões que foram respondidas incorretamente

### Sistema de Ranking
- Ranking geral e por certificação
- Filtros por tipo de exame (Cloud Practitioner, Developer Associate, Solutions Architect)
- Posição do usuário destacada
- Visualização de acertos e desempenho
- Atualização em tempo real

## 🎓 Hands-On Práticos

A plataforma inclui tutoriais práticos passo a passo para aprender AWS na prática:

1. **Como Criar uma Conta AWS** - Guia completo para iniciantes
2. **Criar um Site Estático com S3 e CloudFront** - Hospedagem de sites estáticos
3. **Aplicação de Blog com Lambda e DynamoDB** - Arquitetura serverless
4. **Implantar App Serverless com Amplify** - Deploy completo
5. **Bot de Conversação com Lex e Lambda** - Chatbots inteligentes
6. **Pipeline de CI/CD com CodePipeline** - Automação de deploy
7. **Hospedar App Web em EC2** - Servidores virtuais
8. **Servidor de E-mail com SES** - Envio de emails
9. **API RESTful com API Gateway e Lambda** - APIs serverless
10. **Análise de Dados com Redshift** - Data warehouse
11. **Pipeline de Dados com Glue e S3** - ETL e processamento

Cada tutorial inclui:
- Dificuldade e tempo estimado
- Pré-requisitos necessários
- Informações sobre Free Tier e créditos AWS
- Passo a passo detalhado
- Código de exemplo
- Referências e documentação oficial

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd Guru-Certificate

# Instale as dependências
npm install

# Execute o projeto
npm start
```

O projeto estará disponível em `http://localhost:3000`

### Build para Produção
```bash
npm run build
```

## 🎨 Design System AWS

O projeto utiliza as cores oficiais da AWS:
- **AWS Orange**: #FF9900
- **AWS Blue**: #232F3E
- **AWS Green**: #00A651
- **AWS Red**: #D13212

## 📱 Responsividade

- **Desktop**: Layout completo com sidebar e navegação horizontal
- **Tablet**: Layout adaptado com navegação otimizada
- **Mobile**: Menu hambúrguer e layout vertical

## 🔧 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.js       # Cabeçalho da aplicação
│   ├── Footer.js       # Rodapé da aplicação
│   ├── ExamProtection.js  # Proteção contra cola
│   └── NavigationButtons.js  # Botões de navegação
├── pages/              # Páginas da aplicação
│   ├── Home.js         # Página inicial
│   ├── About.js        # Contribuintes
│   ├── Simulados.js    # Lista de simulados
│   ├── Cursos.js       # Cursos e trilhas
│   ├── Materials.js   # Materiais de estudo
│   ├── Register.js     # Cadastro e login
│   ├── Profile.js      # Perfil do usuário
│   ├── Ranking.js      # Sistema de ranking
│   ├── hands-on/       # Tutoriais práticos
│   │   └── Tutorial.js
│   └── simulados/      # Páginas dos simulados
│       ├── CloudPractitioner.js
│       ├── SolutionsArchitect.js
│       └── DeveloperAssociate.js
├── services/           # Serviços da aplicação
│   └── userService.js  # Gerenciamento de usuários e resultados
├── data/               # Dados da aplicação
│   ├── cloudPractitionerQuestions.js
│   ├── developerAssociateQuestions.js
│   ├── solutionsArchitectQuestions.js
│   └── tutorialsData.js  # Dados dos tutoriais
├── App.js              # Componente principal
├── index.js            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🎯 Funcionalidades dos Simulados

- **Navegação entre questões**: Anterior/Próxima
- **Timer em tempo real**: Contagem regressiva (40 minutos)
- **Seleção de idioma**: Português/Inglês
- **Feedback personalizado**: Explicações detalhadas para cada alternativa selecionada
- **Feedback visual**: Cores para respostas corretas/incorretas
- **Resultado final**: Percentual de acertos e status
- **Validação**: Impede avanço sem resposta
- **Proteção contra cola**: Prevenção de seleção de texto, atalhos e dev tools
- **Salvamento automático**: Resultados salvos automaticamente no perfil

## 📊 Funcionalidades do Perfil

- **Estatísticas Gerais**: Visão consolidada de todos os simulados
- **Estatísticas por Certificação**: Desempenho detalhado por tipo de exame
- **Assuntos para Revisar**: Top 10 assuntos que mais precisam de atenção
- **Histórico Completo**: Todos os simulados realizados com detalhes
- **Análise Personalizada**: Recomendações baseadas no desempenho
- **Questões Erradas**: Revisão detalhada das questões incorretas
- **Análise por Simulado**: Estatísticas individuais de cada prova

## 🏆 Sistema de Ranking

- **Ranking Geral**: Classificação considerando todos os simulados
- **Ranking por Certificação**: Filtros por Cloud Practitioner, Developer Associate e Solutions Architect
- **Posição do Usuário**: Destaque da sua posição no ranking
- **Métricas**: Visualização de acertos e desempenho
- **Atualização em Tempo Real**: Rankings atualizados automaticamente

## 🔒 Segurança

- Sanitização de dados
- Proteção contra XSS
- HTTPS em produção
- Validação de formulários
- Proteção de rotas autenticadas

## 📈 Performance

- Lazy loading de componentes
- Otimização de imagens
- Minificação de CSS/JS
- Cache de recursos estáticos
- Armazenamento local eficiente

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Contribuintes

- **Pedro Paulo** - Full Stack Developer
- **Ivonaldo Micheluti Dias** - Infrastructure & Cloud Expert
- **Wesley Cavalcante** - Developer
- **Taynar Simões** - UX/UI Designer
- **Elizângela Rosa da Silva Costa** - QA & Business Analyst
- **Jefferson Bezerra** - Technology & Innovation Specialist

---

**Guru Certificate** - Desbrave o conhecimento. Transforme o futuro.
