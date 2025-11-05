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

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript moderno
- **React Router**: Navegação entre páginas
- **Styled Components**: CSS-in-JS para estilização
- **AWS Design System**: Cores e componentes baseados no padrão AWS
- **Responsive Design**: Mobile-first approach

## 📱 Páginas Disponíveis

- **Home**: Página inicial com apresentação da plataforma
- **Quem Somos**: Informações sobre a equipe e missão
- **Simulados**: Lista de simulados disponíveis
- **Guia de Cloud**: Conceitos fundamentais de cloud computing
- **Materiais**: Recursos de estudo para download
- **Simulados Interativos**: Cloud Practitioner e Solutions Architect

## 🎯 Simulados Disponíveis

### AWS Cloud Practitioner (CLF-02)
- 20 questões baseadas no exame oficial
- Tempo limite: 40 minutos (2 minutos por questão)
- Nível: Iniciante
- Suporte a português e inglês
- Feedback personalizado para cada alternativa

### AWS Solutions Architect Associate (SAA)
- 20 questões baseadas no exame oficial
- Tempo limite: 40 minutos (2 minutos por questão)
- Nível: Intermediário
- Foco em arquitetura de soluções escaláveis e seguras
- Feedback personalizado para cada alternativa

### AWS Developer Associate (DVA)
- 20 questões baseadas no exame oficial
- Tempo limite: 40 minutos (2 minutos por questão)
- Nível: Intermediário
- Foco em desenvolvimento serverless e CI/CD
- Feedback personalizado para cada alternativa

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
│   └── Footer.js       # Rodapé da aplicação
├── pages/              # Páginas da aplicação
│   ├── Home.js         # Página inicial
│   ├── About.js        # Quem somos
│   ├── Simulados.js    # Lista de simulados
│   ├── CloudGuide.js   # Guia de cloud
│   ├── Materials.js    # Materiais de estudo
│   └── simulados/      # Páginas dos simulados
│       ├── CloudPractitioner.js
│       ├── SolutionsArchitect.js
│       └── DeveloperAssociate.js
├── data/               # Dados da aplicação
│   ├── cloudPractitionerQuestions.js
│   ├── developerAssociateQuestions.js
│   └── solutionsArchitectQuestions.js
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

## 🔒 Segurança

- Sanitização de dados
- Proteção contra XSS
- HTTPS em produção

## 📈 Performance

- Lazy loading de componentes
- Otimização de imagens
- Minificação de CSS/JS
- Cache de recursos estáticos

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

- **Sharlles Anderson** - DevOps & Cloud Specialist
- **Pedro Paulo** - Full Stack Developer
- **Ivonaldo Micheluti Dias** - Infrastructure & Cloud Expert
- **Wesley Cavalcante** - Developer
- **Taynar Simões** - UX/UI Designer
- **Elizângela Rosa da Silva Costa** - QA & Business Analyst
- **Jefferson Bezerra** - Technology & Innovation Specialist

---

**Guru Certificate** - Desbrave o conhecimento. Transforme o futuro.