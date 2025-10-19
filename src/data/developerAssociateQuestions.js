export const developerAssociateQuestions = [
  {
    id: 1,
    title: {
      "pt-BR": "Desenvolvimento Serverless - Lambda e API Gateway",
      "en": "Serverless Development - Lambda and API Gateway"
    },
    description: {
      "pt-BR": "Uma aplicação de e-commerce processa 50.000 pedidos por hora durante picos. Cada pedido precisa ser validado, processado, e notificações enviadas. A aplicação usa Lambda, API Gateway, e DynamoDB. Durante picos, algumas funções Lambda estão atingindo timeout (15s) e causando falhas.",
      "en": "An e-commerce application processes 50,000 orders per hour during peaks. Each order needs to be validated, processed, and notifications sent. The application uses Lambda, API Gateway, and DynamoDB. During peaks, some Lambda functions are hitting timeout (15s) and causing failures."
    },
    question: {
      "pt-BR": "Qual é a melhor estratégia para otimizar a performance da aplicação?",
      "en": "What is the best strategy to optimize application performance?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Aumentar o timeout das funções Lambda para 30 segundos",
          "en": "Increase Lambda function timeout to 30 seconds"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Implementar Step Functions para orquestração, SQS para desacoplamento, e otimizar queries DynamoDB com batch operations",
          "en": "Implement Step Functions for orchestration, SQS for decoupling, and optimize DynamoDB queries with batch operations"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Usar apenas provisioned concurrency para todas as funções",
          "en": "Use only provisioned concurrency for all functions"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Migrar para EC2 com Auto Scaling",
          "en": "Migrate to EC2 with Auto Scaling"
        },
        correct: false
      }
    ]
  },
  {
    id: 2,
    title: {
      "pt-BR": "Desenvolvimento de APIs - Versionamento e Controle de Acesso",
      "en": "API Development - Versioning and Access Control"
    },
    description: {
      "pt-BR": "Uma empresa tem uma API REST usada por 100+ clientes externos. A API precisa suportar múltiplas versões simultaneamente (v1, v2, v3), rate limiting por cliente, autenticação JWT, e logging detalhado. Alguns clientes têm contratos SLA diferentes.",
      "en": "A company has a REST API used by 100+ external clients. The API needs to support multiple versions simultaneously (v1, v2, v3), rate limiting per client, JWT authentication, and detailed logging. Some clients have different SLA contracts."
    },
    question: {
      "pt-BR": "Qual arquitetura AWS atende melhor estes requisitos?",
      "en": "Which AWS architecture best meets these requirements?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "API Gateway com usage plans, API keys, Lambda authorizers, e CloudWatch Logs",
          "en": "API Gateway with usage plans, API keys, Lambda authorizers, and CloudWatch Logs"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas Application Load Balancer com Lambda",
          "en": "Only Application Load Balancer with Lambda"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "API Gateway sem versionamento",
          "en": "API Gateway without versioning"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "EC2 com nginx como proxy reverso",
          "en": "EC2 with nginx as reverse proxy"
        },
        correct: false
      }
    ]
  },
  {
    id: 3,
    title: {
      "pt-BR": "Desenvolvimento de Aplicações - CI/CD e Deployment",
      "en": "Application Development - CI/CD and Deployment"
    },
    description: {
      "pt-BR": "Uma equipe de 20 desenvolvedores trabalha em uma aplicação serverless com 50+ funções Lambda. O código está em múltiplos repositórios Git. Cada deploy deve passar por testes automatizados, code review, e deployment em múltiplos ambientes (dev, staging, prod). A aplicação precisa de rollback rápido em caso de problemas.",
      "en": "A team of 20 developers works on a serverless application with 50+ Lambda functions. Code is in multiple Git repositories. Each deploy must go through automated tests, code review, and deployment to multiple environments (dev, staging, prod). The application needs fast rollback in case of issues."
    },
    question: {
      "pt-BR": "Qual pipeline CI/CD é mais adequado?",
      "en": "Which CI/CD pipeline is most suitable?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "AWS CodePipeline + CodeBuild + CodeDeploy + SAM/CloudFormation + Lambda aliases para rollback",
          "en": "AWS CodePipeline + CodeBuild + CodeDeploy + SAM/CloudFormation + Lambda aliases for rollback"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Deploy manual via console AWS",
          "en": "Manual deployment via AWS console"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Apenas GitHub Actions sem integração AWS",
          "en": "Only GitHub Actions without AWS integration"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Jenkins em EC2 sem automação",
          "en": "Jenkins on EC2 without automation"
        },
        correct: false
      }
    ]
  },
  {
    id: 4,
    title: {
      "pt-BR": "Desenvolvimento de Aplicações - Monitoramento e Debugging",
      "en": "Application Development - Monitoring and Debugging"
    },
    description: {
      "pt-BR": "Uma aplicação serverless complexa com 30+ funções Lambda, API Gateway, DynamoDB, e SQS está apresentando erros intermitentes difíceis de rastrear. Os logs estão espalhados em diferentes serviços e é difícil correlacionar requisições que passam por múltiplos componentes. A equipe precisa de visibilidade completa do fluxo de execução.",
      "en": "A complex serverless application with 30+ Lambda functions, API Gateway, DynamoDB, and SQS is experiencing intermittent errors that are difficult to trace. Logs are scattered across different services and it's difficult to correlate requests that pass through multiple components. The team needs complete visibility of execution flow."
    },
    question: {
      "pt-BR": "Qual solução AWS oferece melhor observabilidade?",
      "en": "Which AWS solution offers the best observability?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "AWS X-Ray + CloudWatch Logs + CloudWatch Insights + Custom metrics",
          "en": "AWS X-Ray + CloudWatch Logs + CloudWatch Insights + Custom metrics"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas console.log em cada função",
          "en": "Only console.log in each function"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "CloudWatch Logs sem X-Ray",
          "en": "CloudWatch Logs without X-Ray"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Apenas métricas básicas do CloudWatch",
          "en": "Only basic CloudWatch metrics"
        },
        correct: false
      }
    ]
  },
  {
    id: 5,
    title: {
      "pt-BR": "Desenvolvimento de Aplicações - Segurança e Autenticação",
      "en": "Application Development - Security and Authentication"
    },
    description: {
      "pt-BR": "Uma aplicação web precisa suportar autenticação de usuários via Google, Facebook, e SAML corporativo. A aplicação também precisa de autorização baseada em roles (RBAC) e deve funcionar offline com sincronização posterior. Os tokens devem ter refresh automático e a aplicação precisa ser compatível com PWA.",
      "en": "A web application needs to support user authentication via Google, Facebook, and corporate SAML. The application also needs role-based authorization (RBAC) and must work offline with later synchronization. Tokens must have automatic refresh and the application needs to be PWA compatible."
    },
    question: {
      "pt-BR": "Qual solução AWS atende melhor estes requisitos?",
      "en": "Which AWS solution best meets these requirements?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Amazon Cognito com User Pools, Identity Pools, e Amplify para PWA",
          "en": "Amazon Cognito with User Pools, Identity Pools, and Amplify for PWA"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas IAM users e roles",
          "en": "Only IAM users and roles"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Autenticação customizada com JWT manual",
          "en": "Custom authentication with manual JWT"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "AWS Directory Service sem integração",
          "en": "AWS Directory Service without integration"
        },
        correct: false
      }
    ]
  },
  {
    id: 6,
    title: {
      "pt-BR": "Desenvolvimento de Aplicações - Processamento de Dados",
      "en": "Application Development - Data Processing"
    },
    description: {
      "pt-BR": "Uma aplicação de analytics precisa processar 1TB de dados de logs diariamente. Os dados vêm de múltiplas fontes (APIs, bancos, streams) e precisam ser transformados, validados, e armazenados. A aplicação precisa de processamento em tempo real para alertas e processamento batch para relatórios. O sistema deve ser tolerante a falhas e reprocessar dados em caso de erro.",
      "en": "An analytics application needs to process 1TB of log data daily. Data comes from multiple sources (APIs, databases, streams) and needs to be transformed, validated, and stored. The application needs real-time processing for alerts and batch processing for reports. The system must be fault-tolerant and reprocess data in case of error."
    },
    question: {
      "pt-BR": "Qual arquitetura AWS é mais robusta?",
      "en": "Which AWS architecture is most robust?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Kinesis Data Streams + Lambda + S3 + Glue + Athena + Dead Letter Queues para reprocessamento",
          "en": "Kinesis Data Streams + Lambda + S3 + Glue + Athena + Dead Letter Queues for reprocessing"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas S3 com processamento manual",
          "en": "Only S3 with manual processing"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "EC2 com scripts cron",
          "en": "EC2 with cron scripts"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "DynamoDB sem processamento de streams",
          "en": "DynamoDB without stream processing"
        },
        correct: false
      }
    ]
  },
  {
    id: 7,
    title: {
      "pt-BR": "Desenvolvimento de Aplicações - Caching e Performance",
      "en": "Application Development - Caching and Performance"
    },
    description: {
      "pt-BR": "Uma aplicação de e-commerce tem 1 milhão de produtos e 100.000 usuários ativos. A aplicação precisa de cache para catálogo de produtos, carrinho de compras, e sessões de usuário. Alguns dados mudam frequentemente (preços, estoque) e outros são estáticos (descrições, imagens). A aplicação precisa de cache distribuído globalmente.",
      "en": "An e-commerce application has 1 million products and 100,000 active users. The application needs caching for product catalog, shopping cart, and user sessions. Some data changes frequently (prices, stock) and others are static (descriptions, images). The application needs globally distributed cache."
    },
    question: {
      "pt-BR": "Qual estratégia de cache é mais eficiente?",
      "en": "Which caching strategy is most efficient?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "ElastiCache Redis + CloudFront + DynamoDB TTL + Cache invalidation automática",
          "en": "ElastiCache Redis + CloudFront + DynamoDB TTL + Automatic cache invalidation"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas cache local no navegador",
          "en": "Only local browser cache"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "S3 sem cache",
          "en": "S3 without cache"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Apenas ElastiCache sem invalidação",
          "en": "Only ElastiCache without invalidation"
        },
        correct: false
      }
    ]
  },
  {
    id: 8,
    title: {
      "pt-BR": "Desenvolvimento de Aplicações - Integração e Eventos",
      "en": "Application Development - Integration and Events"
    },
    description: {
      "pt-BR": "Uma aplicação de marketplace conecta vendedores e compradores. Quando um pedido é feito, múltiplos sistemas precisam ser notificados: sistema de pagamento, estoque, logística, e notificações. Alguns sistemas são externos e podem estar indisponíveis. A aplicação precisa garantir que todas as notificações sejam entregues eventualmente.",
      "en": "A marketplace application connects sellers and buyers. When an order is placed, multiple systems need to be notified: payment system, inventory, logistics, and notifications. Some systems are external and may be unavailable. The application needs to ensure all notifications are eventually delivered."
    },
    question: {
      "pt-BR": "Qual padrão de integração é mais robusto?",
      "en": "Which integration pattern is most robust?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "EventBridge + SQS + Dead Letter Queues + Retry policies + Circuit breaker pattern",
          "en": "EventBridge + SQS + Dead Letter Queues + Retry policies + Circuit breaker pattern"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Chamadas HTTP síncronas diretas",
          "en": "Direct synchronous HTTP calls"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Apenas SNS sem retry",
          "en": "Only SNS without retry"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Webhooks sem garantia de entrega",
          "en": "Webhooks without delivery guarantee"
        },
        correct: false
      }
    ]
  },
  {
    id: 9,
    title: {
      "pt-BR": "Desenvolvimento de Aplicações - Testes e Qualidade",
      "en": "Application Development - Testing and Quality"
    },
    description: {
      "pt-BR": "Uma equipe desenvolve uma aplicação serverless crítica com 100+ funções Lambda. A aplicação precisa de 99.9% de disponibilidade e processa transações financeiras. A equipe precisa de testes automatizados que cubram unit tests, integration tests, e end-to-end tests. Os testes devem rodar em múltiplos ambientes e gerar relatórios de cobertura.",
      "en": "A team develops a critical serverless application with 100+ Lambda functions. The application needs 99.9% availability and processes financial transactions. The team needs automated tests that cover unit tests, integration tests, and end-to-end tests. Tests must run in multiple environments and generate coverage reports."
    },
    question: {
      "pt-BR": "Qual estratégia de teste é mais completa?",
      "en": "Which testing strategy is most complete?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Jest + AWS SAM local + CodeBuild + Test containers + CloudWatch Synthetics + Coverage reports",
          "en": "Jest + AWS SAM local + CodeBuild + Test containers + CloudWatch Synthetics + Coverage reports"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas testes manuais",
          "en": "Only manual tests"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Unit tests sem integration tests",
          "en": "Unit tests without integration tests"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Testes apenas em produção",
          "en": "Tests only in production"
        },
        correct: false
      }
    ]
  },
  {
    id: 10,
    title: {
      "pt-BR": "Desenvolvimento de Aplicações - DevOps e Infraestrutura",
      "en": "Application Development - DevOps and Infrastructure"
    },
    description: {
      "pt-BR": "Uma empresa tem 10 equipes de desenvolvimento trabalhando em aplicações serverless. Cada equipe precisa de ambientes isolados (dev, staging, prod) com recursos compartilhados (VPC, RDS, ElastiCache). A empresa precisa de governança, controle de custos, e compliance. As aplicações precisam ser deployadas com zero downtime.",
      "en": "A company has 10 development teams working on serverless applications. Each team needs isolated environments (dev, staging, prod) with shared resources (VPC, RDS, ElastiCache). The company needs governance, cost control, and compliance. Applications need to be deployed with zero downtime."
    },
    question: {
      "pt-BR": "Qual solução AWS oferece melhor governança e automação?",
      "en": "Which AWS solution offers the best governance and automation?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "AWS Organizations + Service Catalog + CloudFormation + CodePipeline + Blue/Green deployments + Cost allocation tags",
          "en": "AWS Organizations + Service Catalog + CloudFormation + CodePipeline + Blue/Green deployments + Cost allocation tags"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas contas AWS separadas sem governança",
          "en": "Only separate AWS accounts without governance"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Deploy manual sem automação",
          "en": "Manual deployment without automation"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Apenas CloudFormation sem CI/CD",
          "en": "Only CloudFormation without CI/CD"
        },
        correct: false
      }
    ]
  }
];


