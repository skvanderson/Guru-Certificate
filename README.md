# Guru Certificate - Plataforma de Simulados AWS

Uma plataforma moderna e responsiva para simulados de certificações AWS, desenvolvida com React e seguindo o design system da AWS.

## 🚀 Características

- **Design Moderno**: Interface baseada no design system da AWS com cores oficiais
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Simulados Interativos**: Questões baseadas nos exames oficiais AWS
- **Suporte Multilíngue**: Português e Inglês
- **Timer Integrado**: Controle de tempo para simular condições reais de exame
- **Feedback Imediato**: Respostas corretas/incorretas com explicações
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
- 65 questões baseadas no exame oficial
- Tempo limite: 90 minutos
- Nível: Iniciante
- Suporte a português e inglês

### AWS Solutions Architect Associate (SAA)
- 65 questões baseadas no exame oficial
- Tempo limite: 130 minutos
- Nível: Intermediário
- Foco em arquitetura de soluções

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
│       └── SolutionsArchitect.js
├── data/               # Dados da aplicação
│   └── questoes.js     # Banco de questões
├── App.js              # Componente principal
├── index.js            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🎯 Funcionalidades dos Simulados

- **Navegação entre questões**: Anterior/Próxima
- **Timer em tempo real**: Contagem regressiva
- **Seleção de idioma**: Português/Inglês
- **Feedback visual**: Cores para respostas corretas/incorretas
- **Resultado final**: Percentual de acertos e status
- **Validação**: Impede avanço sem resposta

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

- **Ivonaldo** - Fundador & CEO
- **Liz** - CTO
- **Wesley** - Lead Developer
- **Taynar** - UX/UI Designer
- **Ivonildo** - Content Specialist

## 📞 Contato

- Website: [Guru Certificate](https://gurucertificate.com)
- Email: contato@gurucertificate.com
- LinkedIn: [Guru Certificate](https://linkedin.com/company/guru-certificate)

---

**Guru Certificate** - Desbrave o conhecimento. Transforme o futuro.