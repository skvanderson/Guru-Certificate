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
        correct: false,
        explanation: {
          "pt-BR": "Aumentar apenas o timeout não resolve o problema de performance, apenas adia o timeout. Se uma função precisa processar 50.000 pedidos por hora e está falhando, o problema é arquitetural (workflow complexo, falta de desacoplamento), não apenas o timeout. É necessário refatorar a arquitetura, não apenas aumentar limites.",
          "en": "Increasing only the timeout doesn't solve the performance problem, it just delays the timeout. If a function needs to process 50,000 orders per hour and is failing, the problem is architectural (complex workflow, lack of decoupling), not just the timeout. Architecture refactoring is needed, not just increasing limits."
        }
      },
      {
        title: {
          "pt-BR": "Implementar Step Functions para orquestração, SQS para desacoplamento, e otimizar queries DynamoDB com batch operations",
          "en": "Implement Step Functions for orchestration, SQS for decoupling, and optimize DynamoDB queries with batch operations"
        },
        correct: true,
        explanation: {
          "pt-BR": "Step Functions orquestra workflows complexos permitindo que funções Lambda sejam executadas em sequência ou paralelo, evitando timeouts. SQS desacopla componentes permitindo processamento assíncrono e melhor tolerância a falhas. Batch operations no DynamoDB reduzem custos e latência. Esta solução arquitetural resolve o problema de raiz.",
          "en": "Step Functions orchestrates complex workflows allowing Lambda functions to run in sequence or parallel, avoiding timeouts. SQS decouples components allowing asynchronous processing and better fault tolerance. DynamoDB batch operations reduce costs and latency. This architectural solution solves the root problem."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas provisioned concurrency para todas as funções",
          "en": "Use only provisioned concurrency for all functions"
        },
        correct: false,
        explanation: {
          "pt-BR": "Provisioned concurrency elimina cold starts e garante capacidade, mas é caro e não resolve problemas de timeout ou arquitetura. Para 50.000 pedidos/hora, provisioned concurrency em todas as funções seria muito caro e não resolveria o problema de workflows complexos que causam timeouts.",
          "en": "Provisioned concurrency eliminates cold starts and guarantees capacity, but is expensive and doesn't solve timeout or architectural problems. For 50,000 orders/hour, provisioned concurrency for all functions would be very expensive and wouldn't solve the problem of complex workflows causing timeouts."
        }
      },
      {
        title: {
          "pt-BR": "Migrar para EC2 com Auto Scaling",
          "en": "Migrate to EC2 with Auto Scaling"
        },
        correct: false,
        explanation: {
          "pt-BR": "Migrar para EC2 perderia todos os benefícios serverless (sem gerenciamento de servidores, pagamento por uso, escalabilidade automática). EC2 requer gerenciamento de servidores, patches, configuração, e não é mais econômico que Lambda para workloads com picos variáveis. A solução é otimizar a arquitetura serverless, não abandoná-la.",
          "en": "Migrating to EC2 would lose all serverless benefits (no server management, pay-per-use, automatic scaling). EC2 requires server management, patches, configuration, and isn't more economical than Lambda for workloads with variable peaks. The solution is to optimize the serverless architecture, not abandon it."
        }
      }
    ],
    explanation: {
      "pt-BR": "Step Functions orquestra workflows complexos permitindo que funções Lambda sejam executadas em sequência ou paralelo, evitando timeouts. SQS desacopla componentes permitindo processamento assíncrono e melhor tolerância a falhas. Batch operations no DynamoDB reduzem custos e latência. Aumentar timeout apenas adia o problema, provisioned concurrency é caro para todas as funções, e migrar para EC2 perde os benefícios serverless.",
      "en": "Step Functions orchestrates complex workflows allowing Lambda functions to run in sequence or parallel, avoiding timeouts. SQS decouples components allowing asynchronous processing and better fault tolerance. DynamoDB batch operations reduce costs and latency. Increasing timeout only delays the problem, provisioned concurrency is expensive for all functions, and migrating to EC2 loses serverless benefits."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "API Gateway oferece versionamento nativo de APIs (v1, v2, v3), usage plans para rate limiting granular por cliente, Lambda authorizers para autenticação JWT personalizada, e integração nativa com CloudWatch Logs para logging detalhado. Esta combinação atende todos os requisitos: versionamento, rate limiting, autenticação JWT, logging, e suporte a diferentes SLAs através de usage plans.",
          "en": "API Gateway offers native API versioning (v1, v2, v3), usage plans for granular per-client rate limiting, Lambda authorizers for custom JWT authentication, and native integration with CloudWatch Logs for detailed logging. This combination meets all requirements: versioning, rate limiting, JWT authentication, logging, and support for different SLAs through usage plans."
        }
      },
      {
        title: {
          "pt-BR": "Apenas Application Load Balancer com Lambda",
          "en": "Only Application Load Balancer with Lambda"
        },
        correct: false,
        explanation: {
          "pt-BR": "Application Load Balancer não oferece versionamento de APIs, rate limiting granular por cliente, ou autenticação JWT integrada. Você teria que implementar tudo isso manualmente no código Lambda, aumentando complexidade e custos. API Gateway oferece todos esses recursos nativamente.",
          "en": "Application Load Balancer doesn't offer API versioning, granular per-client rate limiting, or integrated JWT authentication. You would have to implement all of this manually in Lambda code, increasing complexity and costs. API Gateway offers all these features natively."
        }
      },
      {
        title: {
          "pt-BR": "API Gateway sem versionamento",
          "en": "API Gateway without versioning"
        },
        correct: false,
        explanation: {
          "pt-BR": "O requisito explicitamente menciona que a API precisa suportar múltiplas versões simultaneamente (v1, v2, v3). API Gateway sem versionamento não atende a este requisito crítico. O versionamento é essencial para manter compatibilidade com clientes existentes enquanto novas versões são lançadas.",
          "en": "The requirement explicitly states that the API needs to support multiple versions simultaneously (v1, v2, v3). API Gateway without versioning doesn't meet this critical requirement. Versioning is essential to maintain compatibility with existing clients while new versions are released."
        }
      },
      {
        title: {
          "pt-BR": "EC2 com nginx como proxy reverso",
          "en": "EC2 with nginx as reverse proxy"
        },
        correct: false,
        explanation: {
          "pt-BR": "EC2 com nginx requer gerenciamento de servidores, configuração manual, patches, escalabilidade manual, e muito mais trabalho operacional. API Gateway é gerenciado, oferece versionamento nativo, rate limiting, autenticação JWT, e logging integrado, sendo muito mais adequado para este caso.",
          "en": "EC2 with nginx requires server management, manual configuration, patches, manual scaling, and much more operational work. API Gateway is managed, offers native versioning, rate limiting, JWT authentication, and integrated logging, being much more suitable for this case."
        }
      }
    ],
    explanation: {
      "pt-BR": "API Gateway oferece versionamento de APIs (v1, v2, v3), usage plans para rate limiting por cliente, Lambda authorizers para autenticação JWT personalizada, e integração com CloudWatch Logs para logging detalhado. Application Load Balancer não oferece versionamento ou rate limiting granular, API Gateway sem versionamento não atende o requisito, e EC2 com nginx requer muito mais gerenciamento.",
      "en": "API Gateway offers API versioning (v1, v2, v3), usage plans for per-client rate limiting, Lambda authorizers for custom JWT authentication, and CloudWatch Logs integration for detailed logging. Application Load Balancer doesn't offer versioning or granular rate limiting, API Gateway without versioning doesn't meet the requirement, and EC2 with nginx requires much more management."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "CodePipeline automatiza o pipeline completo, CodeBuild executa testes automatizados, CodeDeploy gerencia deployments em múltiplos ambientes, SAM/CloudFormation permite infraestrutura como código para 50+ funções Lambda, e Lambda aliases permitem rollback instantâneo trocando entre versões. Esta é a solução completa e nativa AWS para CI/CD serverless.",
          "en": "CodePipeline automates the complete pipeline, CodeBuild runs automated tests, CodeDeploy manages deployments to multiple environments, SAM/CloudFormation enables infrastructure as code for 50+ Lambda functions, and Lambda aliases enable instant rollback by switching between versions. This is the complete and native AWS solution for serverless CI/CD."
        }
      },
      {
        title: {
          "pt-BR": "Deploy manual via console AWS",
          "en": "Manual deployment via AWS console"
        },
        correct: false,
        explanation: {
          "pt-BR": "Deploy manual é propenso a erros humanos, não escala para 20 desenvolvedores e 50+ funções Lambda, não garante testes automatizados ou code review, não suporta múltiplos ambientes de forma consistente, e não oferece rollback rápido. Para uma equipe grande e aplicação complexa, automação é essencial.",
          "en": "Manual deployment is prone to human errors, doesn't scale for 20 developers and 50+ Lambda functions, doesn't guarantee automated tests or code review, doesn't support multiple environments consistently, and doesn't offer fast rollback. For a large team and complex application, automation is essential."
        }
      },
      {
        title: {
          "pt-BR": "Apenas GitHub Actions sem integração AWS",
          "en": "Only GitHub Actions without AWS integration"
        },
        correct: false,
        explanation: {
          "pt-BR": "GitHub Actions pode executar testes e builds, mas sem integração nativa com serviços AWS como CodeDeploy e Lambda aliases, você perderia recursos importantes como rollback rápido e gerenciamento de deployments em múltiplos ambientes. A integração nativa com serviços AWS oferece melhor experiência e recursos específicos para serverless.",
          "en": "GitHub Actions can run tests and builds, but without native integration with AWS services like CodeDeploy and Lambda aliases, you would lose important features like fast rollback and deployment management across multiple environments. Native integration with AWS services offers better experience and serverless-specific features."
        }
      },
      {
        title: {
          "pt-BR": "Jenkins em EC2 sem automação",
          "en": "Jenkins on EC2 without automation"
        },
        correct: false,
        explanation: {
          "pt-BR": "Jenkins em EC2 requer gerenciamento de servidores, patches, escalabilidade manual, e não oferece integração nativa com serviços AWS como Lambda aliases para rollback. CodePipeline é gerenciado, integra-se nativamente com serviços AWS, e oferece melhor experiência para aplicações serverless.",
          "en": "Jenkins on EC2 requires server management, patches, manual scaling, and doesn't offer native integration with AWS services like Lambda aliases for rollback. CodePipeline is managed, natively integrates with AWS services, and offers better experience for serverless applications."
        }
      }
    ],
    explanation: {
      "pt-BR": "CodePipeline automatiza o pipeline CI/CD completo, CodeBuild executa testes automatizados, CodeDeploy gerencia deployments, SAM/CloudFormation permite infraestrutura como código, e Lambda aliases permitem rollback rápido trocando entre versões. Deploy manual é propenso a erros, GitHub Actions sem integração AWS não aproveita serviços nativos, e Jenkins em EC2 requer gerenciamento de infraestrutura.",
      "en": "CodePipeline automates the complete CI/CD pipeline, CodeBuild runs automated tests, CodeDeploy manages deployments, SAM/CloudFormation enables infrastructure as code, and Lambda aliases enable fast rollback by switching between versions. Manual deployment is error-prone, GitHub Actions without AWS integration doesn't leverage native services, and Jenkins on EC2 requires infrastructure management."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "X-Ray rastreia requisições através de múltiplos serviços (Lambda, API Gateway, DynamoDB, SQS) permitindo visualizar o fluxo completo e correlacionar requisições. CloudWatch Logs centraliza logs de todos os serviços, CloudWatch Insights permite queries complexas nos logs, e custom metrics fornecem visibilidade de negócio. Esta combinação oferece observabilidade completa.",
          "en": "X-Ray traces requests across multiple services (Lambda, API Gateway, DynamoDB, SQS) allowing visualization of the complete flow and correlation of requests. CloudWatch Logs centralizes logs from all services, CloudWatch Insights allows complex queries on logs, and custom metrics provide business visibility. This combination offers complete observability."
        }
      },
      {
        title: {
          "pt-BR": "Apenas console.log em cada função",
          "en": "Only console.log in each function"
        },
        correct: false,
        explanation: {
          "pt-BR": "Console.log sozinho não oferece correlação entre serviços, não rastreia requisições através de múltiplos componentes, não permite queries complexas, e não fornece métricas. Para uma aplicação complexa com 30+ funções Lambda e múltiplos serviços, é necessário uma solução de observabilidade integrada como X-Ray e CloudWatch.",
          "en": "Console.log alone doesn't offer correlation between services, doesn't trace requests across multiple components, doesn't allow complex queries, and doesn't provide metrics. For a complex application with 30+ Lambda functions and multiple services, an integrated observability solution like X-Ray and CloudWatch is needed."
        }
      },
      {
        title: {
          "pt-BR": "CloudWatch Logs sem X-Ray",
          "en": "CloudWatch Logs without X-Ray"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudWatch Logs sem X-Ray centraliza logs, mas não mostra o fluxo completo de requisições através de múltiplos serviços. É difícil correlacionar logs de Lambda, API Gateway, DynamoDB e SQS para entender onde ocorrem erros em uma requisição que passa por múltiplos componentes. X-Ray é essencial para rastreamento distribuído.",
          "en": "CloudWatch Logs without X-Ray centralizes logs, but doesn't show the complete flow of requests across multiple services. It's difficult to correlate logs from Lambda, API Gateway, DynamoDB, and SQS to understand where errors occur in a request that passes through multiple components. X-Ray is essential for distributed tracing."
        }
      },
      {
        title: {
          "pt-BR": "Apenas métricas básicas do CloudWatch",
          "en": "Only basic CloudWatch metrics"
        },
        correct: false,
        explanation: {
          "pt-BR": "Métricas básicas do CloudWatch fornecem dados agregados (invocações, erros, duração), mas não fornecem contexto suficiente para debugging de erros intermitentes. Não mostram o fluxo de execução, não correlacionam requisições entre serviços, e não permitem análise detalhada de logs. Para debugging, é necessário X-Ray e CloudWatch Logs/Insights.",
          "en": "Basic CloudWatch metrics provide aggregated data (invocations, errors, duration), but don't provide enough context for debugging intermittent errors. They don't show execution flow, don't correlate requests between services, and don't allow detailed log analysis. For debugging, X-Ray and CloudWatch Logs/Insights are needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "X-Ray rastreia requisições através de múltiplos serviços permitindo visualizar o fluxo completo. CloudWatch Logs centraliza logs, CloudWatch Insights permite queries complexas nos logs, e custom metrics fornecem visibilidade de negócio. Console.log sozinho não oferece correlação entre serviços, CloudWatch Logs sem X-Ray não mostra o fluxo completo, e métricas básicas não fornecem contexto suficiente.",
      "en": "X-Ray traces requests across multiple services allowing visualization of the complete flow. CloudWatch Logs centralizes logs, CloudWatch Insights allows complex queries on logs, and custom metrics provide business visibility. Console.log alone doesn't offer correlation between services, CloudWatch Logs without X-Ray doesn't show the complete flow, and basic metrics don't provide enough context."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "Cognito User Pools suporta autenticação via Google, Facebook e SAML, oferece RBAC, tokens com refresh automático, e funciona offline. Identity Pools fornece credenciais AWS temporárias. Amplify oferece suporte nativo para PWA e sincronização offline. Esta combinação atende todos os requisitos: múltiplos provedores de identidade, RBAC, offline, refresh tokens, e PWA.",
          "en": "Cognito User Pools supports authentication via Google, Facebook, and SAML, offers RBAC, tokens with automatic refresh, and works offline. Identity Pools provides temporary AWS credentials. Amplify offers native support for PWA and offline synchronization. This combination meets all requirements: multiple identity providers, RBAC, offline, refresh tokens, and PWA."
        }
      },
      {
        title: {
          "pt-BR": "Apenas IAM users e roles",
          "en": "Only IAM users and roles"
        },
        correct: false,
        explanation: {
          "pt-BR": "IAM é para autenticação e autorização de recursos AWS, não para usuários finais de aplicações web. IAM não suporta autenticação via Google/Facebook/SAML, não oferece refresh tokens automáticos, não funciona offline, e não é compatível com PWA. Para aplicações web com usuários finais, Cognito é a solução adequada.",
          "en": "IAM is for authentication and authorization of AWS resources, not for end users of web applications. IAM doesn't support authentication via Google/Facebook/SAML, doesn't offer automatic refresh tokens, doesn't work offline, and isn't PWA compatible. For web applications with end users, Cognito is the appropriate solution."
        }
      },
      {
        title: {
          "pt-BR": "Autenticação customizada com JWT manual",
          "en": "Custom authentication with manual JWT"
        },
        correct: false,
        explanation: {
          "pt-BR": "Implementar autenticação customizada com JWT manual requer muito desenvolvimento, manutenção de infraestrutura de autenticação, integração manual com Google/Facebook/SAML, implementação manual de refresh tokens, e não oferece suporte nativo para offline/PWA. Cognito oferece tudo isso de forma gerenciada e integrada.",
          "en": "Implementing custom authentication with manual JWT requires much development, maintenance of authentication infrastructure, manual integration with Google/Facebook/SAML, manual implementation of refresh tokens, and doesn't offer native support for offline/PWA. Cognito offers all of this in a managed and integrated way."
        }
      },
      {
        title: {
          "pt-BR": "AWS Directory Service sem integração",
          "en": "AWS Directory Service without integration"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Directory Service é para integração com Active Directory corporativo, não para autenticação de usuários finais de aplicações web. Não suporta Google/Facebook, não oferece recursos de PWA, não funciona offline, e não é projetado para aplicações web modernas. Cognito é a solução adequada para este caso.",
          "en": "AWS Directory Service is for integration with corporate Active Directory, not for end user authentication in web applications. It doesn't support Google/Facebook, doesn't offer PWA features, doesn't work offline, and isn't designed for modern web applications. Cognito is the appropriate solution for this case."
        }
      }
    ],
    explanation: {
      "pt-BR": "Cognito User Pools gerencia autenticação com provedores sociais (Google, Facebook) e SAML. Identity Pools fornece credenciais AWS temporárias. Amplify facilita desenvolvimento PWA com suporte offline e sincronização. IAM não gerencia usuários finais, JWT manual requer muito desenvolvimento, e Directory Service não oferece integração com PWA ou refresh automático.",
      "en": "Cognito User Pools manages authentication with social providers (Google, Facebook) and SAML. Identity Pools provides temporary AWS credentials. Amplify facilitates PWA development with offline support and synchronization. IAM doesn't manage end users, manual JWT requires much development, and Directory Service doesn't offer PWA integration or automatic refresh."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "Kinesis Data Streams processa dados em tempo real de múltiplas fontes, Lambda transforma e valida dados, S3 armazena dados para batch processing, Glue cataloga e transforma dados, Athena permite queries SQL em S3, e Dead Letter Queues garantem reprocessamento em caso de falha. Esta arquitetura é tolerante a falhas, suporta tempo real e batch, e permite reprocessamento.",
          "en": "Kinesis Data Streams processes real-time data from multiple sources, Lambda transforms and validates data, S3 stores data for batch processing, Glue catalogs and transforms data, Athena allows SQL queries on S3, and Dead Letter Queues ensure reprocessing on failure. This architecture is fault-tolerant, supports real-time and batch, and allows reprocessing."
        }
      },
      {
        title: {
          "pt-BR": "Apenas S3 com processamento manual",
          "en": "Only S3 with manual processing"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 sozinho é apenas armazenamento, não processa dados em tempo real, não oferece transformação automática, não valida dados, e processamento manual não escala para 1TB diário. É necessário uma pipeline de processamento automatizada com serviços como Kinesis, Lambda e Glue para processar volumes grandes de dados.",
          "en": "S3 alone is just storage, doesn't process data in real-time, doesn't offer automatic transformation, doesn't validate data, and manual processing doesn't scale for 1TB daily. An automated processing pipeline with services like Kinesis, Lambda, and Glue is needed to process large data volumes."
        }
      },
      {
        title: {
          "pt-BR": "EC2 com scripts cron",
          "en": "EC2 with cron scripts"
        },
        correct: false,
        explanation: {
          "pt-BR": "EC2 com cron requer gerenciamento de servidores, não é tolerante a falhas (se o servidor falhar, processamento para), não escala automaticamente, não processa em tempo real, e não oferece reprocessamento automático. Para processar 1TB diário com alta disponibilidade, é necessário serviços gerenciados e tolerantes a falhas.",
          "en": "EC2 with cron requires server management, isn't fault-tolerant (if server fails, processing stops), doesn't scale automatically, doesn't process in real-time, and doesn't offer automatic reprocessing. To process 1TB daily with high availability, managed and fault-tolerant services are needed."
        }
      },
      {
        title: {
          "pt-BR": "DynamoDB sem processamento de streams",
          "en": "DynamoDB without stream processing"
        },
        correct: false,
        explanation: {
          "pt-BR": "DynamoDB é um banco NoSQL para dados transacionais, não para processamento de 1TB de logs diários. Sem DynamoDB Streams, não há processamento de eventos em tempo real. DynamoDB não é adequado para analytics e batch processing. Para analytics, é necessário S3, Glue e Athena.",
          "en": "DynamoDB is a NoSQL database for transactional data, not for processing 1TB of daily logs. Without DynamoDB Streams, there's no real-time event processing. DynamoDB isn't suitable for analytics and batch processing. For analytics, S3, Glue, and Athena are needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "Kinesis Data Streams processa dados em tempo real, Lambda transforma e valida dados, S3 armazena dados para batch processing, Glue cataloga e transforma dados, Athena permite queries SQL em S3, e Dead Letter Queues garantem reprocessamento em caso de falha. S3 sozinho não processa em tempo real, EC2 com cron não é tolerante a falhas, e DynamoDB sem streams não processa batch.",
      "en": "Kinesis Data Streams processes data in real-time, Lambda transforms and validates data, S3 stores data for batch processing, Glue catalogs and transforms data, Athena allows SQL queries on S3, and Dead Letter Queues ensure reprocessing on failure. S3 alone doesn't process in real-time, EC2 with cron isn't fault-tolerant, and DynamoDB without streams doesn't process batch."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "ElastiCache Redis oferece cache em memória distribuído para dados dinâmicos (carrinho, sessões, catálogo). CloudFront cacheia conteúdo estático (imagens, descrições) globalmente em edge locations. DynamoDB TTL remove dados expirados automaticamente. Invalidação automática mantém dados atualizados quando preços/estoque mudam. Esta combinação oferece cache multi-camada eficiente.",
          "en": "ElastiCache Redis provides distributed in-memory cache for dynamic data (cart, sessions, catalog). CloudFront caches static content (images, descriptions) globally at edge locations. DynamoDB TTL automatically removes expired data. Automatic invalidation keeps data updated when prices/stock change. This combination offers efficient multi-layer caching."
        }
      },
      {
        title: {
          "pt-BR": "Apenas cache local no navegador",
          "en": "Only local browser cache"
        },
        correct: false,
        explanation: {
          "pt-BR": "Cache local no navegador não escala para 100.000 usuários ativos, não é compartilhado entre dispositivos, não cacheia dados dinâmicos como carrinho e sessões, e não oferece cache distribuído globalmente. Para uma aplicação de e-commerce com escala global, é necessário cache server-side.",
          "en": "Local browser cache doesn't scale for 100,000 active users, isn't shared between devices, doesn't cache dynamic data like cart and sessions, and doesn't offer globally distributed cache. For a global-scale e-commerce application, server-side cache is needed."
        }
      },
      {
        title: {
          "pt-BR": "S3 sem cache",
          "en": "S3 without cache"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 é armazenamento de objetos, não um serviço de cache. S3 sozinho não oferece cache em memória para dados dinâmicos, não cacheia globalmente, e não oferece invalidação automática. Para cache de aplicações, é necessário ElastiCache para dados dinâmicos e CloudFront para conteúdo estático.",
          "en": "S3 is object storage, not a caching service. S3 alone doesn't offer in-memory cache for dynamic data, doesn't cache globally, and doesn't offer automatic invalidation. For application caching, ElastiCache is needed for dynamic data and CloudFront for static content."
        }
      },
      {
        title: {
          "pt-BR": "Apenas ElastiCache sem invalidação",
          "en": "Only ElastiCache without invalidation"
        },
        correct: false,
        explanation: {
          "pt-BR": "ElastiCache sem invalidação serve dados desatualizados, especialmente para dados que mudam frequentemente como preços e estoque. Para uma aplicação de e-commerce, é crítico que dados dinâmicos sejam atualizados. Além disso, CloudFront é necessário para cache global de conteúdo estático (imagens, descrições).",
          "en": "ElastiCache without invalidation serves stale data, especially for data that changes frequently like prices and stock. For an e-commerce application, it's critical that dynamic data is updated. Additionally, CloudFront is needed for global cache of static content (images, descriptions)."
        }
      }
    ],
    explanation: {
      "pt-BR": "ElastiCache Redis oferece cache em memória para dados dinâmicos (carrinho, sessões). CloudFront cacheia conteúdo estático globalmente. DynamoDB TTL remove dados expirados automaticamente. Invalidação automática mantém dados atualizados. Cache local sozinho não escala, S3 não é cache, e ElastiCache sem invalidação serve dados desatualizados.",
      "en": "ElastiCache Redis provides in-memory cache for dynamic data (cart, sessions). CloudFront caches static content globally. DynamoDB TTL automatically removes expired data. Automatic invalidation keeps data updated. Local cache alone doesn't scale, S3 isn't cache, and ElastiCache without invalidation serves stale data."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "EventBridge roteia eventos entre serviços de forma desacoplada, SQS garante entrega com retry automático e permite que sistemas externos processem no seu próprio ritmo, Dead Letter Queues capturam mensagens que falharam após múltiplas tentativas para análise, retry policies configuram tentativas inteligentes, e circuit breaker previne cascata de falhas quando sistemas externos estão indisponíveis. Esta é a arquitetura mais robusta.",
          "en": "EventBridge routes events between services in a decoupled way, SQS guarantees delivery with automatic retry and allows external systems to process at their own pace, Dead Letter Queues capture messages that failed after multiple attempts for analysis, retry policies configure intelligent attempts, and circuit breaker prevents cascade failures when external systems are unavailable. This is the most robust architecture."
        }
      },
      {
        title: {
          "pt-BR": "Chamadas HTTP síncronas diretas",
          "en": "Direct synchronous HTTP calls"
        },
        correct: false,
        explanation: {
          "pt-BR": "Chamadas HTTP síncronas bloqueiam a aplicação, falham se o serviço externo estiver indisponível, não oferecem retry automático, não garantem entrega eventual, e podem causar timeout e cascata de falhas. Para sistemas externos que podem estar indisponíveis, é necessário desacoplamento assíncrono com SQS.",
          "en": "Synchronous HTTP calls block the application, fail if external service is unavailable, don't offer automatic retry, don't guarantee eventual delivery, and can cause timeout and cascade failures. For external systems that may be unavailable, asynchronous decoupling with SQS is needed."
        }
      },
      {
        title: {
          "pt-BR": "Apenas SNS sem retry",
          "en": "Only SNS without retry"
        },
        correct: false,
        explanation: {
          "pt-BR": "SNS é pub/sub para notificações, mas não garante entrega se o endpoint estiver indisponível. SNS tenta entregar, mas se falhar, a mensagem pode ser perdida. Para garantir entrega eventual para sistemas externos, é necessário SQS com retry policies e Dead Letter Queues para capturar mensagens que falharam.",
          "en": "SNS is pub/sub for notifications, but doesn't guarantee delivery if the endpoint is unavailable. SNS tries to deliver, but if it fails, the message may be lost. To guarantee eventual delivery to external systems, SQS with retry policies and Dead Letter Queues is needed to capture failed messages."
        }
      },
      {
        title: {
          "pt-BR": "Webhooks sem garantia de entrega",
          "en": "Webhooks without delivery guarantee"
        },
        correct: false,
        explanation: {
          "pt-BR": "Webhooks são notificações HTTP push, mas não garantem entrega se o endpoint estiver indisponível. Se o sistema externo estiver offline, a notificação é perdida. Para garantir entrega eventual, é necessário usar SQS que armazena mensagens e tenta entregar até conseguir, com retry automático e Dead Letter Queues.",
          "en": "Webhooks are HTTP push notifications, but don't guarantee delivery if the endpoint is unavailable. If the external system is offline, the notification is lost. To guarantee eventual delivery, SQS is needed which stores messages and tries to deliver until successful, with automatic retry and Dead Letter Queues."
        }
      }
    ],
    explanation: {
      "pt-BR": "EventBridge roteia eventos entre serviços, SQS garante entrega com retry automático, Dead Letter Queues capturam mensagens que falharam, retry policies configuram tentativas, e circuit breaker previne cascata de falhas. Chamadas HTTP síncronas bloqueiam e falham se o serviço estiver indisponível, SNS sem retry pode perder mensagens, e webhooks não garantem entrega.",
      "en": "EventBridge routes events between services, SQS guarantees delivery with automatic retry, Dead Letter Queues capture failed messages, retry policies configure attempts, and circuit breaker prevents cascade failures. Synchronous HTTP calls block and fail if service is unavailable, SNS without retry can lose messages, and webhooks don't guarantee delivery."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "Jest executa unit tests localmente, AWS SAM local testa Lambda functions localmente, CodeBuild executa testes automatizados em CI/CD, Test containers testa integrações com serviços AWS, CloudWatch Synthetics monitora end-to-end em produção, e coverage reports garantem qualidade de código. Esta combinação cobre todos os tipos de teste necessários para uma aplicação crítica.",
          "en": "Jest runs unit tests locally, AWS SAM local tests Lambda functions locally, CodeBuild runs automated tests in CI/CD, Test containers tests integrations with AWS services, CloudWatch Synthetics monitors end-to-end in production, and coverage reports ensure code quality. This combination covers all test types needed for a critical application."
        }
      },
      {
        title: {
          "pt-BR": "Apenas testes manuais",
          "en": "Only manual tests"
        },
        correct: false,
        explanation: {
          "pt-BR": "Testes manuais não escalam para 100+ funções Lambda, não são reprodutíveis, não rodam em múltiplos ambientes automaticamente, não garantem cobertura de código, e são propensos a erros humanos. Para uma aplicação crítica que processa transações financeiras e precisa de 99.9% disponibilidade, testes automatizados são essenciais.",
          "en": "Manual tests don't scale for 100+ Lambda functions, aren't reproducible, don't run in multiple environments automatically, don't guarantee code coverage, and are prone to human errors. For a critical application that processes financial transactions and needs 99.9% availability, automated tests are essential."
        }
      },
      {
        title: {
          "pt-BR": "Unit tests sem integration tests",
          "en": "Unit tests without integration tests"
        },
        correct: false,
        explanation: {
          "pt-BR": "Unit tests validam funções isoladamente, mas não testam integrações entre serviços (Lambda, DynamoDB, SQS, etc.). Para uma aplicação serverless com 100+ funções Lambda que interagem entre si, é necessário integration tests para validar o comportamento end-to-end. CloudWatch Synthetics também é necessário para monitoramento contínuo.",
          "en": "Unit tests validate functions in isolation, but don't test integrations between services (Lambda, DynamoDB, SQS, etc.). For a serverless application with 100+ Lambda functions that interact with each other, integration tests are needed to validate end-to-end behavior. CloudWatch Synthetics is also needed for continuous monitoring."
        }
      },
      {
        title: {
          "pt-BR": "Testes apenas em produção",
          "en": "Tests only in production"
        },
        correct: false,
        explanation: {
          "pt-BR": "Testar apenas em produção é extremamente arriscado para uma aplicação crítica que processa transações financeiras. Erros em produção podem causar perda de dados, indisponibilidade, e impacto financeiro. Testes devem rodar em ambientes de desenvolvimento e staging antes de produção. Além disso, é necessário testes automatizados em CI/CD.",
          "en": "Testing only in production is extremely risky for a critical application that processes financial transactions. Errors in production can cause data loss, unavailability, and financial impact. Tests should run in development and staging environments before production. Additionally, automated tests in CI/CD are needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "Jest é framework de testes JavaScript, SAM local permite testar Lambda localmente, CodeBuild executa testes em CI/CD, test containers isolam dependências, CloudWatch Synthetics testa endpoints em produção, e coverage reports mostram cobertura de código. Testes manuais não escalam, unit tests sozinhos não testam integração, e testes apenas em produção é muito arriscado.",
      "en": "Jest is a JavaScript testing framework, SAM local allows testing Lambda locally, CodeBuild runs tests in CI/CD, test containers isolate dependencies, CloudWatch Synthetics tests endpoints in production, and coverage reports show code coverage. Manual tests don't scale, unit tests alone don't test integration, and tests only in production is very risky."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "AWS Organizations gerencia múltiplas contas AWS com governança centralizada e políticas de segurança. Service Catalog padroniza recursos aprovados. CloudFormation permite infraestrutura como código. CodePipeline automatiza deployments. Blue/Green deployments garantem zero downtime. Cost allocation tags rastreiam custos por equipe/ambiente. Esta combinação oferece governança completa, automação e controle de custos.",
          "en": "AWS Organizations manages multiple AWS accounts with centralized governance and security policies. Service Catalog standardizes approved resources. CloudFormation enables infrastructure as code. CodePipeline automates deployments. Blue/Green deployments ensure zero downtime. Cost allocation tags track costs per team/environment. This combination offers complete governance, automation, and cost control."
        }
      },
      {
        title: {
          "pt-BR": "Apenas contas AWS separadas sem governança",
          "en": "Only separate AWS accounts without governance"
        },
        correct: false,
        explanation: {
          "pt-BR": "Contas AWS separadas sem governança são difíceis de gerenciar, não oferecem controle centralizado de custos, não garantem compliance, não padronizam recursos, e cada equipe pode criar recursos diferentes. AWS Organizations é necessário para governança centralizada, políticas de segurança, e controle de custos.",
          "en": "Separate AWS accounts without governance are hard to manage, don't offer centralized cost control, don't guarantee compliance, don't standardize resources, and each team can create different resources. AWS Organizations is needed for centralized governance, security policies, and cost control."
        }
      },
      {
        title: {
          "pt-BR": "Deploy manual sem automação",
          "en": "Manual deployment without automation"
        },
        correct: false,
        explanation: {
          "pt-BR": "Deploy manual não escala para 10 equipes, é propenso a erros humanos, não garante zero downtime, não é reprodutível, e não permite rollback rápido. Para uma empresa com múltiplas equipes e necessidade de zero downtime, automação com CodePipeline e Blue/Green deployments é essencial.",
          "en": "Manual deployment doesn't scale for 10 teams, is prone to human errors, doesn't guarantee zero downtime, isn't reproducible, and doesn't allow fast rollback. For a company with multiple teams and zero downtime requirement, automation with CodePipeline and Blue/Green deployments is essential."
        }
      },
      {
        title: {
          "pt-BR": "Apenas CloudFormation sem CI/CD",
          "en": "Only CloudFormation without CI/CD"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudFormation permite infraestrutura como código, mas sem CI/CD você ainda precisa fazer deploy manualmente, não há automação de testes, não há pipelines de deployment, e não há garantia de zero downtime. CodePipeline é necessário para automatizar o processo completo de CI/CD.",
          "en": "CloudFormation enables infrastructure as code, but without CI/CD you still need to deploy manually, there's no test automation, no deployment pipelines, and no zero downtime guarantee. CodePipeline is needed to automate the complete CI/CD process."
        }
      }
    ],
    explanation: {
      "pt-BR": "AWS Organizations gerencia múltiplas contas AWS com governança centralizada. Service Catalog padroniza recursos. CloudFormation permite infraestrutura como código. CodePipeline automatiza deployments. Blue/Green deployments garantem zero downtime. Cost allocation tags rastreiam custos por equipe. Contas separadas sem governança são difíceis de gerenciar, deploy manual é propenso a erros, e CloudFormation sem CI/CD não automatiza deployments.",
      "en": "AWS Organizations manages multiple AWS accounts with centralized governance. Service Catalog standardizes resources. CloudFormation enables infrastructure as code. CodePipeline automates deployments. Blue/Green deployments ensure zero downtime. Cost allocation tags track costs per team. Separate accounts without governance are hard to manage, manual deployment is error-prone, and CloudFormation without CI/CD doesn't automate deployments."
    }
  },
  {
    id: 11,
    title: {
      "pt-BR": "Lambda - Concorrência e Provisioned Concurrency",
      "en": "Lambda - Concurrency and Provisioned Concurrency"
    },
    description: {
      "pt-BR": "Uma aplicação Lambda precisa processar requisições com latência consistente abaixo de 100ms. A aplicação tem picos previsíveis às 9h e 18h. Durante esses picos, algumas requisições estão sofrendo cold starts que aumentam a latência para 500ms+.",
      "en": "A Lambda application needs to process requests with consistent latency below 100ms. The application has predictable peaks at 9 AM and 6 PM. During these peaks, some requests are experiencing cold starts that increase latency to 500ms+."
    },
    question: {
      "pt-BR": "Qual estratégia resolve melhor o problema de cold starts?",
      "en": "Which strategy best solves the cold start problem?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Aumentar o tamanho da memória de todas as funções",
          "en": "Increase memory size of all functions"
        },
        correct: false,
        explanation: {
          "pt-BR": "Aumentar memória pode reduzir ligeiramente cold starts, mas não os elimina completamente. Cold starts ocorrem quando Lambda precisa inicializar uma nova instância, não apenas quando a memória é baixa. Para eliminar cold starts e garantir latência consistente abaixo de 100ms, Provisioned Concurrency é necessário.",
          "en": "Increasing memory may slightly reduce cold starts, but doesn't eliminate them completely. Cold starts occur when Lambda needs to initialize a new instance, not just when memory is low. To eliminate cold starts and guarantee consistent latency below 100ms, Provisioned Concurrency is needed."
        }
      },
      {
        title: {
          "pt-BR": "Usar Provisioned Concurrency para manter instâncias quentes durante picos",
          "en": "Use Provisioned Concurrency to keep instances warm during peaks"
        },
        correct: true,
        explanation: {
          "pt-BR": "Provisioned Concurrency mantém instâncias Lambda pré-inicializadas e prontas, eliminando completamente cold starts. Para picos previsíveis às 9h e 18h, você pode escalar Provisioned Concurrency automaticamente usando Scheduled Scaling. Isso garante latência consistente abaixo de 100ms durante os picos.",
          "en": "Provisioned Concurrency keeps Lambda instances pre-initialized and ready, completely eliminating cold starts. For predictable peaks at 9 AM and 6 PM, you can automatically scale Provisioned Concurrency using Scheduled Scaling. This guarantees consistent latency below 100ms during peaks."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas On-Demand concurrency",
          "en": "Use only On-Demand concurrency"
        },
        correct: false,
        explanation: {
          "pt-BR": "On-Demand concurrency ainda sofre cold starts quando novas instâncias precisam ser inicializadas. Durante picos, se todas as instâncias quentes estiverem ocupadas, Lambda cria novas instâncias que causam cold starts de 500ms+. Para latência consistente, Provisioned Concurrency é necessário.",
          "en": "On-Demand concurrency still suffers cold starts when new instances need to be initialized. During peaks, if all warm instances are busy, Lambda creates new instances that cause 500ms+ cold starts. For consistent latency, Provisioned Concurrency is needed."
        }
      },
      {
        title: {
          "pt-BR": "Migrar para EC2",
          "en": "Migrate to EC2"
        },
        correct: false,
        explanation: {
          "pt-BR": "Migrar para EC2 perderia todos os benefícios serverless (sem gerenciamento de servidores, pagamento por uso, escalabilidade automática). EC2 requer manter servidores rodando 24/7 (mais caro), gerenciamento de patches e configuração, e não resolve o problema de latência melhor que Provisioned Concurrency.",
          "en": "Migrating to EC2 would lose all serverless benefits (no server management, pay-per-use, automatic scaling). EC2 requires keeping servers running 24/7 (more expensive), patch and configuration management, and doesn't solve the latency problem better than Provisioned Concurrency."
        }
      }
    ],
    explanation: {
      "pt-BR": "Provisioned Concurrency mantém instâncias Lambda pré-inicializadas e prontas para processar requisições, eliminando cold starts. É ideal para picos previsíveis e aplicações que precisam de latência consistente. Aumentar memória pode ajudar mas não elimina cold starts completamente. On-Demand concurrency ainda sofre cold starts. Migrar para EC2 perde os benefícios serverless.",
      "en": "Provisioned Concurrency keeps Lambda instances pre-initialized and ready to process requests, eliminating cold starts. It's ideal for predictable peaks and applications that need consistent latency. Increasing memory may help but doesn't completely eliminate cold starts. On-Demand concurrency still suffers cold starts. Migrating to EC2 loses serverless benefits."
    }
  },
  {
    id: 12,
    title: {
      "pt-BR": "DynamoDB - Design de Tabelas e Partições",
      "en": "DynamoDB - Table Design and Partitions"
    },
    description: {
      "pt-BR": "Uma aplicação precisa armazenar dados de usuários com alta taxa de leitura. A tabela DynamoDB está experimentando throttling e erros de provisioned throughput exceeded. A chave de partição atual é o userId, mas 80% das consultas são por email.",
      "en": "An application needs to store user data with high read rate. The DynamoDB table is experiencing throttling and provisioned throughput exceeded errors. The current partition key is userId, but 80% of queries are by email."
    },
    question: {
      "pt-BR": "Qual estratégia resolve melhor o problema de throttling?",
      "en": "Which strategy best solves the throttling problem?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Aumentar apenas o provisioned read capacity",
          "en": "Only increase provisioned read capacity"
        },
        correct: false,
        explanation: {
          "pt-BR": "Aumentar capacity sozinho não resolve o problema fundamental: se 80% das consultas são por email mas a chave de partição é userId, todas as consultas por email fazem scan completo da tabela, causando throttling. É necessário criar um GSI com email como chave de partição para consultas eficientes.",
          "en": "Increasing capacity alone doesn't solve the fundamental problem: if 80% of queries are by email but the partition key is userId, all email queries do full table scans, causing throttling. A GSI with email as partition key is needed for efficient queries."
        }
      },
      {
        title: {
          "pt-BR": "Criar Global Secondary Index (GSI) com email como chave de partição e usar On-Demand billing",
          "en": "Create Global Secondary Index (GSI) with email as partition key and use On-Demand billing"
        },
        correct: true,
        explanation: {
          "pt-BR": "GSI com email como chave de partição permite consultas diretas por email sem scan, resolvendo o problema de throttling. On-Demand billing escala automaticamente eliminando preocupações com capacity planning. Esta combinação resolve tanto o problema de performance (consultas eficientes) quanto o problema de throttling (escalabilidade automática).",
          "en": "GSI with email as partition key allows direct queries by email without scan, solving the throttling problem. On-Demand billing scales automatically eliminating capacity planning concerns. This combination solves both the performance problem (efficient queries) and the throttling problem (automatic scaling)."
        }
      },
      {
        title: {
          "pt-BR": "Mudar a chave de partição para email",
          "en": "Change partition key to email"
        },
        correct: false,
        explanation: {
          "pt-BR": "Mudar a chave de partição de uma tabela DynamoDB existente requer migração de dados, pode quebrar aplicações que dependem da chave atual, e pode causar downtime. GSI permite consultas por email sem alterar a tabela principal, sendo a solução mais segura e não disruptiva.",
          "en": "Changing the partition key of an existing DynamoDB table requires data migration, can break applications that depend on the current key, and can cause downtime. GSI allows email queries without changing the main table, being the safest and non-disruptive solution."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas Local Secondary Index",
          "en": "Use only Local Secondary Index"
        },
        correct: false,
        explanation: {
          "pt-BR": "LSI (Local Secondary Index) compartilha a mesma chave de partição da tabela principal. Se a chave de partição é userId, LSI não pode ter email como chave de partição. LSI só pode ter chave de ordenação diferente. Para consultas por email, é necessário GSI que pode ter chave de partição diferente.",
          "en": "LSI (Local Secondary Index) shares the same partition key as the main table. If the partition key is userId, LSI cannot have email as partition key. LSI can only have a different sort key. For email queries, GSI is needed which can have a different partition key."
        }
      }
    ],
    explanation: {
      "pt-BR": "GSI com email como chave de partição permite consultas eficientes por email sem alterar a tabela principal. On-Demand billing escala automaticamente eliminando preocupações com throttling. Aumentar capacity sozinho não resolve hot partitions. Mudar a chave de partição quebra dados existentes. LSI não resolve o problema de consultas por email se a chave de partição for userId.",
      "en": "GSI with email as partition key allows efficient queries by email without changing the main table. On-Demand billing scales automatically eliminating throttling concerns. Increasing capacity alone doesn't solve hot partitions. Changing partition key breaks existing data. LSI doesn't solve the email query problem if partition key is userId."
    }
  },
  {
    id: 13,
    title: {
      "pt-BR": "API Gateway - Caching e Throttling",
      "en": "API Gateway - Caching and Throttling"
    },
    description: {
      "pt-BR": "Uma API REST recebe muitas requisições repetidas para dados que mudam raramente. A API está sobrecarregada e alguns clientes estão recebendo erros 429 (Too Many Requests). Os custos de Lambda estão altos devido ao volume de requisições.",
      "en": "A REST API receives many repeated requests for data that rarely changes. The API is overloaded and some clients are receiving 429 errors (Too Many Requests). Lambda costs are high due to request volume."
    },
    question: {
      "pt-BR": "Qual solução resolve melhor os problemas de performance e custo?",
      "en": "Which solution best solves performance and cost problems?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Aumentar apenas o throttling limit",
          "en": "Only increase throttling limit"
        },
        correct: false,
        explanation: {
          "pt-BR": "Aumentar apenas o throttling limit não resolve o problema de custos (mais requisições ainda chegam ao Lambda), não resolve o problema de requisições repetidas (cada requisição ainda executa Lambda), e não otimiza performance. É necessário habilitar cache para reduzir requisições ao Lambda e configurar throttling adequado para controlar tráfego.",
          "en": "Increasing only the throttling limit doesn't solve the cost problem (more requests still reach Lambda), doesn't solve the repeated requests problem (each request still executes Lambda), and doesn't optimize performance. Cache needs to be enabled to reduce requests to Lambda and proper throttling needs to be configured to control traffic."
        }
      },
      {
        title: {
          "pt-BR": "Habilitar API Gateway caching + configurar usage plans com throttling e burst limits",
          "en": "Enable API Gateway caching + configure usage plans with throttling and burst limits"
        },
        correct: true,
        explanation: {
          "pt-BR": "API Gateway caching serve respostas de cache para requisições repetidas, reduzindo drasticamente chamadas ao Lambda e custos. Usage plans com throttling e burst limits controlam tráfego por cliente, prevenindo erros 429 e garantindo que nenhum cliente sobrecarregue a API. Esta combinação resolve problemas de performance, custo e disponibilidade.",
          "en": "API Gateway caching serves cached responses for repeated requests, drastically reducing Lambda calls and costs. Usage plans with throttling and burst limits control traffic per client, preventing 429 errors and ensuring no client overloads the API. This combination solves performance, cost, and availability problems."
        }
      },
      {
        title: {
          "pt-BR": "Desabilitar throttling completamente",
          "en": "Disable throttling completely"
        },
        correct: false,
        explanation: {
          "pt-BR": "Desabilitar throttling completamente pode causar sobrecarga total da API, permitindo que clientes abusivos sobrecarreguem o sistema, causando indisponibilidade para outros clientes, e aumentando custos drasticamente. Throttling é necessário para proteger a API e garantir disponibilidade. Além disso, não resolve o problema de custos de requisições repetidas.",
          "en": "Disabling throttling completely can cause total API overload, allowing abusive clients to overload the system, causing unavailability for other clients, and drastically increasing costs. Throttling is needed to protect the API and ensure availability. Additionally, it doesn't solve the repeated requests cost problem."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas Lambda provisioned concurrency",
          "en": "Use only Lambda provisioned concurrency"
        },
        correct: false,
        explanation: {
          "pt-BR": "Provisioned concurrency elimina cold starts, mas não resolve o problema de requisições repetidas que aumentam custos. Cada requisição repetida ainda executa Lambda e gera custo. Para dados que mudam raramente, cache no API Gateway é essencial para reduzir custos. Provisioned concurrency também não resolve erros 429 (throttling).",
          "en": "Provisioned concurrency eliminates cold starts, but doesn't solve the repeated requests problem that increases costs. Each repeated request still executes Lambda and generates cost. For data that rarely changes, API Gateway cache is essential to reduce costs. Provisioned concurrency also doesn't solve 429 errors (throttling)."
        }
      }
    ],
    explanation: {
      "pt-BR": "API Gateway caching reduz requisições repetidas ao Lambda, diminuindo custos e latência. Usage plans com throttling e burst limits controlam o tráfego por cliente, prevenindo sobrecarga e erros 429. Aumentar throttling apenas adia o problema. Desabilitar throttling pode causar sobrecarga total. Provisioned concurrency não resolve o problema de requisições repetidas.",
      "en": "API Gateway caching reduces repeated requests to Lambda, decreasing costs and latency. Usage plans with throttling and burst limits control traffic per client, preventing overload and 429 errors. Increasing throttling only delays the problem. Disabling throttling can cause total overload. Provisioned concurrency doesn't solve the repeated requests problem."
    }
  },
  {
    id: 14,
    title: {
      "pt-BR": "SQS - Dead Letter Queues e Retry",
      "en": "SQS - Dead Letter Queues and Retry"
    },
    description: {
      "pt-BR": "Uma aplicação usa SQS para processar mensagens de um sistema de pagamentos. Algumas mensagens estão falhando repetidamente e bloqueando o processamento de outras mensagens. A equipe precisa identificar e analisar mensagens que falharam após múltiplas tentativas.",
      "en": "An application uses SQS to process messages from a payment system. Some messages are failing repeatedly and blocking processing of other messages. The team needs to identify and analyze messages that failed after multiple attempts."
    },
    question: {
      "pt-BR": "Qual configuração resolve melhor este problema?",
      "en": "Which configuration best solves this problem?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Aumentar o visibility timeout",
          "en": "Increase visibility timeout"
        },
        correct: false,
        explanation: {
          "pt-BR": "Aumentar visibility timeout apenas adia quando a mensagem volta para a fila, mas não resolve o problema de mensagens que falham repetidamente bloqueando o processamento. Se uma mensagem falha após múltiplas tentativas, ela deve ser movida para DLQ para análise, não apenas ter o timeout aumentado.",
          "en": "Increasing visibility timeout only delays when the message returns to the queue, but doesn't solve the problem of messages that fail repeatedly blocking processing. If a message fails after multiple attempts, it should be moved to DLQ for analysis, not just have the timeout increased."
        }
      },
      {
        title: {
          "pt-BR": "Configurar Dead Letter Queue (DLQ) com maxReceiveCount e habilitar redrive",
          "en": "Configure Dead Letter Queue (DLQ) with maxReceiveCount and enable redrive"
        },
        correct: true,
        explanation: {
          "pt-BR": "DLQ com maxReceiveCount move mensagens que falharam após N tentativas para uma fila separada, isolando-as para análise sem bloquear o processamento de outras mensagens. Redrive permite reprocessar mensagens após correção. Esta é a solução ideal para identificar e analisar mensagens problemáticas.",
          "en": "DLQ with maxReceiveCount moves messages that failed after N attempts to a separate queue, isolating them for analysis without blocking processing of other messages. Redrive allows reprocessing messages after correction. This is the ideal solution to identify and analyze problematic messages."
        }
      },
      {
        title: {
          "pt-BR": "Desabilitar retry completamente",
          "en": "Disable retry completely"
        },
        correct: false,
        explanation: {
          "pt-BR": "Desabilitar retry completamente pode fazer perder mensagens válidas que falharam temporariamente (rede instável, serviço temporariamente indisponível). Retry é essencial para sistemas distribuídos. O problema não é o retry, mas sim mensagens que falham após múltiplas tentativas e devem ser movidas para DLQ.",
          "en": "Disabling retry completely can lose valid messages that temporarily failed (unstable network, temporarily unavailable service). Retry is essential for distributed systems. The problem isn't retry, but messages that fail after multiple attempts and should be moved to DLQ."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas SNS",
          "en": "Use only SNS"
        },
        correct: false,
        explanation: {
          "pt-BR": "SNS é pub/sub para notificações push, não oferece filas persistentes nem Dead Letter Queues da mesma forma que SQS. SNS não garante processamento ordenado nem retry com DLQ. Para processar mensagens de pagamentos que precisam de garantia de entrega e análise de falhas, SQS com DLQ é a solução adequada.",
          "en": "SNS is pub/sub for push notifications, doesn't offer persistent queues or Dead Letter Queues the same way SQS does. SNS doesn't guarantee ordered processing or retry with DLQ. To process payment messages that need delivery guarantee and failure analysis, SQS with DLQ is the appropriate solution."
        }
      }
    ],
    explanation: {
      "pt-BR": "DLQ captura mensagens que falharam após maxReceiveCount tentativas, isolando-as para análise sem bloquear o processamento de outras mensagens. Redrive permite reprocessar mensagens após correção. Aumentar visibility timeout apenas adia o problema. Desabilitar retry pode perder mensagens válidas temporariamente falhas. SNS não oferece DLQ da mesma forma.",
      "en": "DLQ captures messages that failed after maxReceiveCount attempts, isolating them for analysis without blocking processing of other messages. Redrive allows reprocessing messages after correction. Increasing visibility timeout only delays the problem. Disabling retry can lose valid messages that temporarily failed. SNS doesn't offer DLQ in the same way."
    }
  },
  {
    id: 15,
    title: {
      "pt-BR": "Lambda - Layers e Dependências",
      "en": "Lambda - Layers and Dependencies"
    },
    description: {
      "pt-BR": "Uma equipe tem 50 funções Lambda que compartilham as mesmas bibliotecas e dependências. Cada deploy está demorando muito porque as dependências são empacotadas com cada função. A equipe quer reduzir o tamanho dos pacotes e acelerar deployments.",
      "en": "A team has 50 Lambda functions that share the same libraries and dependencies. Each deploy is taking too long because dependencies are packaged with each function. The team wants to reduce package size and speed up deployments."
    },
    question: {
      "pt-BR": "Qual solução resolve melhor este problema?",
      "en": "Which solution best solves this problem?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Incluir todas as dependências em cada pacote",
          "en": "Include all dependencies in each package"
        },
        correct: false,
        explanation: {
          "pt-BR": "Incluir todas as dependências em cada pacote aumenta significativamente o tamanho de cada pacote (pode chegar a dezenas de MB), aumenta o tempo de upload e deployment, e duplica código desnecessariamente. Para 50 funções Lambda, isso multiplica o problema. Lambda Layers é a solução para dependências compartilhadas.",
          "en": "Including all dependencies in each package significantly increases each package size (can reach tens of MB), increases upload and deployment time, and unnecessarily duplicates code. For 50 Lambda functions, this multiplies the problem. Lambda Layers is the solution for shared dependencies."
        }
      },
      {
        title: {
          "pt-BR": "Usar Lambda Layers para dependências compartilhadas e otimizar tamanho do pacote",
          "en": "Use Lambda Layers for shared dependencies and optimize package size"
        },
        correct: true,
        explanation: {
          "pt-BR": "Lambda Layers permite separar dependências compartilhadas em um layer reutilizável e versionado. Cada função referencia o layer, reduzindo drasticamente o tamanho do pacote (apenas código específico da função). Layers são cacheados e reutilizados, acelerando deployments. Esta é a melhor prática para múltiplas funções com dependências compartilhadas.",
          "en": "Lambda Layers allows separating shared dependencies into a reusable and versioned layer. Each function references the layer, drastically reducing package size (only function-specific code). Layers are cached and reused, speeding up deployments. This is best practice for multiple functions with shared dependencies."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas runtime padrão sem dependências",
          "en": "Use only default runtime without dependencies"
        },
        correct: false,
        explanation: {
          "pt-BR": "Runtime padrão não resolve o problema se as funções realmente precisam de bibliotecas específicas (SDKs, frameworks, utilitários). Muitas aplicações precisam de dependências como AWS SDK, bibliotecas de parsing, etc. O problema não é ter dependências, mas sim como gerenciá-las eficientemente com Layers.",
          "en": "Default runtime doesn't solve the problem if functions actually need specific libraries (SDKs, frameworks, utilities). Many applications need dependencies like AWS SDK, parsing libraries, etc. The problem isn't having dependencies, but how to manage them efficiently with Layers."
        }
      },
      {
        title: {
          "pt-BR": "Migrar para containers",
          "en": "Migrate to containers"
        },
        correct: false,
        explanation: {
          "pt-BR": "Migrar para containers (ECS/EKS) adiciona complexidade desnecessária, requer gerenciamento de infraestrutura, e não resolve o problema de dependências compartilhadas melhor que Lambda Layers. Containers são adequados para aplicações complexas, mas para funções Lambda simples com dependências compartilhadas, Layers é a solução mais eficiente.",
          "en": "Migrating to containers (ECS/EKS) adds unnecessary complexity, requires infrastructure management, and doesn't solve the shared dependencies problem better than Lambda Layers. Containers are suitable for complex applications, but for simple Lambda functions with shared dependencies, Layers is the most efficient solution."
        }
      }
    ],
    explanation: {
      "pt-BR": "Lambda Layers permite separar dependências compartilhadas em um layer reutilizável, reduzindo o tamanho de cada pacote e acelerando deployments. Layers podem ser versionados e compartilhados entre múltiplas funções. Incluir dependências em cada pacote aumenta tamanho e tempo de deploy. Runtime padrão não resolve o problema de dependências compartilhadas. Containers não são necessários para este caso.",
      "en": "Lambda Layers allows separating shared dependencies into a reusable layer, reducing each package size and speeding up deployments. Layers can be versioned and shared between multiple functions. Including dependencies in each package increases size and deploy time. Default runtime doesn't solve the shared dependencies problem. Containers aren't necessary for this case."
    }
  },
  {
    id: 16,
    title: {
      "pt-BR": "Step Functions - Orquestração de Workflows",
      "en": "Step Functions - Workflow Orchestration"
    },
    description: {
      "pt-BR": "Uma aplicação precisa processar pedidos em múltiplas etapas: validação, pagamento, estoque, envio. Cada etapa pode falhar e precisa de retry. Algumas etapas podem ser executadas em paralelo. A aplicação precisa de visibilidade do progresso e capacidade de reprocessar etapas falhas.",
      "en": "An application needs to process orders in multiple steps: validation, payment, inventory, shipping. Each step can fail and needs retry. Some steps can be executed in parallel. The application needs visibility of progress and ability to reprocess failed steps."
    },
    question: {
      "pt-BR": "Qual serviço AWS oferece melhor orquestração para este workflow?",
      "en": "Which AWS service offers best orchestration for this workflow?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Lambda com SQS",
          "en": "Lambda with SQS"
        },
        correct: false,
        explanation: {
          "pt-BR": "Lambda com SQS processa mensagens, mas não oferece orquestração visual de workflows, não gerencia estado entre etapas, não oferece execução paralela coordenada, e não fornece visibilidade do progresso de um workflow completo. Para workflows complexos com múltiplas etapas e paralelismo, Step Functions é necessário.",
          "en": "Lambda with SQS processes messages, but doesn't offer visual workflow orchestration, doesn't manage state between steps, doesn't offer coordinated parallel execution, and doesn't provide visibility of complete workflow progress. For complex workflows with multiple steps and parallelism, Step Functions is needed."
        }
      },
      {
        title: {
          "pt-BR": "AWS Step Functions com Express Workflows para processamento paralelo e retry policies",
          "en": "AWS Step Functions with Express Workflows for parallel processing and retry policies"
        },
        correct: true,
        explanation: {
          "pt-BR": "Step Functions oferece orquestração visual de workflows com suporte a estados paralelos (validação e pagamento podem rodar em paralelo), retry automático por etapa, tratamento de erros, visibilidade completa do progresso, e capacidade de reprocessar etapas falhas. Express Workflows processa alta throughput. Esta é a solução ideal para workflows complexos.",
          "en": "Step Functions offers visual workflow orchestration with support for parallel states (validation and payment can run in parallel), automatic retry per step, error handling, complete progress visibility, and ability to reprocess failed steps. Express Workflows processes high throughput. This is the ideal solution for complex workflows."
        }
      },
      {
        title: {
          "pt-BR": "Apenas EventBridge",
          "en": "Only EventBridge"
        },
        correct: false,
        explanation: {
          "pt-BR": "EventBridge roteia eventos entre serviços, mas não oferece orquestração de workflows complexos, não gerencia estado entre etapas, não oferece execução paralela coordenada, e não fornece visibilidade do progresso. EventBridge é para roteamento de eventos, não para orquestração de workflows multi-etapas.",
          "en": "EventBridge routes events between services, but doesn't offer orchestration of complex workflows, doesn't manage state between steps, doesn't offer coordinated parallel execution, and doesn't provide progress visibility. EventBridge is for event routing, not for multi-step workflow orchestration."
        }
      },
      {
        title: {
          "pt-BR": "EC2 com cron jobs",
          "en": "EC2 with cron jobs"
        },
        correct: false,
        explanation: {
          "pt-BR": "EC2 com cron jobs não oferece orquestração de workflows, não gerencia estado, não oferece retry automático, não fornece visibilidade, requer gerenciamento de servidores, e não escala automaticamente. Para workflows complexos com múltiplas etapas, Step Functions oferece todas essas capacidades de forma gerenciada.",
          "en": "EC2 with cron jobs doesn't offer workflow orchestration, doesn't manage state, doesn't offer automatic retry, doesn't provide visibility, requires server management, and doesn't scale automatically. For complex workflows with multiple steps, Step Functions offers all these capabilities in a managed way."
        }
      }
    ],
    explanation: {
      "pt-BR": "Step Functions oferece orquestração visual de workflows com suporte a estados paralelos, retry automático, tratamento de erros, e visibilidade completa do progresso. Express Workflows processa alta throughput. Lambda com SQS não oferece orquestração visual ou gerenciamento de estado. EventBridge não orquestra workflows complexos. EC2 com cron não oferece orquestração ou visibilidade.",
      "en": "Step Functions offers visual workflow orchestration with support for parallel states, automatic retry, error handling, and complete progress visibility. Express Workflows processes high throughput. Lambda with SQS doesn't offer visual orchestration or state management. EventBridge doesn't orchestrate complex workflows. EC2 with cron doesn't offer orchestration or visibility."
    }
  },
  {
    id: 17,
    title: {
      "pt-BR": "API Gateway - CORS e WebSockets",
      "en": "API Gateway - CORS and WebSockets"
    },
    description: {
      "pt-BR": "Uma aplicação web precisa fazer requisições de um domínio (app.example.com) para uma API em outro domínio (api.example.com). A aplicação também precisa de comunicação em tempo real bidirecional para notificações push.",
      "en": "A web application needs to make requests from one domain (app.example.com) to an API on another domain (api.example.com). The application also needs bidirectional real-time communication for push notifications."
    },
    question: {
      "pt-BR": "Qual configuração API Gateway atende melhor estes requisitos?",
      "en": "Which API Gateway configuration best meets these requirements?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "API Gateway REST com CORS habilitado + API Gateway WebSocket",
          "en": "API Gateway REST with CORS enabled + API Gateway WebSocket"
        },
        correct: true,
        explanation: {
          "pt-BR": "API Gateway REST com CORS habilitado permite requisições cross-origin do navegador de app.example.com para api.example.com. API Gateway WebSocket oferece comunicação bidirecional em tempo real para notificações push. Esta combinação atende ambos os requisitos: requisições REST cross-origin e comunicação em tempo real bidirecional.",
          "en": "API Gateway REST with CORS enabled allows cross-origin requests from browser from app.example.com to api.example.com. API Gateway WebSocket offers bidirectional real-time communication for push notifications. This combination meets both requirements: REST cross-origin requests and bidirectional real-time communication."
        }
      },
      {
        title: {
          "pt-BR": "Apenas API Gateway REST",
          "en": "Only API Gateway REST"
        },
        correct: false,
        explanation: {
          "pt-BR": "API Gateway REST sozinho não oferece comunicação bidirecional em tempo real. REST é request-response, onde o cliente sempre inicia a requisição. Para notificações push em tempo real onde o servidor precisa enviar mensagens ao cliente, é necessário WebSocket que oferece comunicação bidirecional.",
          "en": "API Gateway REST alone doesn't offer bidirectional real-time communication. REST is request-response, where the client always initiates the request. For real-time push notifications where the server needs to send messages to the client, WebSocket is needed which offers bidirectional communication."
        }
      },
      {
        title: {
          "pt-BR": "Apenas API Gateway WebSocket",
          "en": "Only API Gateway WebSocket"
        },
        correct: false,
        explanation: {
          "pt-BR": "API Gateway WebSocket sozinho não resolve o problema de requisições REST cross-origin. WebSocket é para comunicação bidirecional em tempo real, mas não substitui requisições REST normais. Para uma aplicação que precisa de ambos (requisições REST cross-origin e WebSocket para notificações), é necessário ambos os serviços.",
          "en": "API Gateway WebSocket alone doesn't solve REST cross-origin requests problem. WebSocket is for bidirectional real-time communication, but doesn't replace normal REST requests. For an application that needs both (REST cross-origin requests and WebSocket for notifications), both services are needed."
        }
      },
      {
        title: {
          "pt-BR": "EC2 com nginx",
          "en": "EC2 with nginx"
        },
        correct: false,
        explanation: {
          "pt-BR": "EC2 com nginx requer configuração manual de CORS, configuração de WebSocket, gerenciamento de servidores, patches, escalabilidade manual, e muito mais trabalho operacional. API Gateway oferece CORS e WebSocket de forma gerenciada, sem necessidade de gerenciar infraestrutura.",
          "en": "EC2 with nginx requires manual CORS configuration, WebSocket configuration, server management, patches, manual scaling, and much more operational work. API Gateway offers CORS and WebSocket in a managed way, without needing to manage infrastructure."
        }
      }
    ],
    explanation: {
      "pt-BR": "API Gateway REST com CORS habilitado permite requisições cross-origin do navegador. API Gateway WebSocket oferece comunicação bidirecional em tempo real para notificações push. Apenas REST não oferece comunicação bidirecional. Apenas WebSocket não resolve requisições REST cross-origin. EC2 com nginx requer muito mais configuração e gerenciamento.",
      "en": "API Gateway REST with CORS enabled allows cross-origin requests from browser. API Gateway WebSocket offers bidirectional real-time communication for push notifications. Only REST doesn't offer bidirectional communication. Only WebSocket doesn't solve REST cross-origin requests. EC2 with nginx requires much more configuration and management."
    }
  },
  {
    id: 18,
    title: {
      "pt-BR": "Lambda - Environment Variables e Secrets",
      "en": "Lambda - Environment Variables and Secrets"
    },
    description: {
      "pt-BR": "Uma aplicação Lambda precisa acessar credenciais de banco de dados e chaves de API. As credenciais mudam periodicamente e precisam ser atualizadas sem redeploy das funções. A aplicação precisa de segurança e rotação automática de secrets.",
      "en": "A Lambda application needs to access database credentials and API keys. Credentials change periodically and need to be updated without function redeployment. The application needs security and automatic secret rotation."
    },
    question: {
      "pt-BR": "Qual solução AWS oferece melhor gerenciamento de secrets?",
      "en": "Which AWS solution offers best secret management?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Hardcodar secrets no código",
          "en": "Hardcode secrets in code"
        },
        correct: false,
        explanation: {
          "pt-BR": "Hardcodar secrets no código é extremamente inseguro: secrets ficam expostos no repositório Git, não podem ser atualizados sem redeploy, não há rotação automática, e viola todas as práticas de segurança. Secrets devem ser armazenados de forma segura e gerenciada, não no código.",
          "en": "Hardcoding secrets in code is extremely insecure: secrets are exposed in Git repository, cannot be updated without redeployment, no automatic rotation, and violates all security practices. Secrets must be stored securely and managed, not in code."
        }
      },
      {
        title: {
          "pt-BR": "AWS Secrets Manager com rotação automática + Lambda environment variables para referência",
          "en": "AWS Secrets Manager with automatic rotation + Lambda environment variables for reference"
        },
        correct: true,
        explanation: {
          "pt-BR": "Secrets Manager armazena secrets de forma segura e criptografada, oferece rotação automática sem redeploy, permite que Lambda acesse secrets via SDK ou environment variables, e fornece auditoria completa. Secrets podem ser atualizados sem redeploy das funções. Esta é a solução mais segura e gerenciada.",
          "en": "Secrets Manager stores secrets securely and encrypted, offers automatic rotation without redeployment, allows Lambda to access secrets via SDK or environment variables, and provides complete auditing. Secrets can be updated without function redeployment. This is the most secure and managed solution."
        }
      },
      {
        title: {
          "pt-BR": "Armazenar secrets em S3",
          "en": "Store secrets in S3"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 não é seguro para armazenar secrets: não oferece rotação automática, não integra nativamente com Lambda, não fornece auditoria de acesso, e requer gerenciamento manual de permissões. Secrets Manager é o serviço específico para gerenciar secrets de forma segura com rotação automática.",
          "en": "S3 isn't secure for storing secrets: doesn't offer automatic rotation, doesn't natively integrate with Lambda, doesn't provide access auditing, and requires manual permission management. Secrets Manager is the specific service for managing secrets securely with automatic rotation."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas environment variables estáticas",
          "en": "Use only static environment variables"
        },
        correct: false,
        explanation: {
          "pt-BR": "Environment variables estáticas requerem redeploy da função Lambda sempre que um secret mudar. Para credenciais que mudam periodicamente, isso é ineficiente e pode causar downtime. Secrets Manager permite atualizar secrets sem redeploy, e oferece rotação automática que environment variables estáticas não oferecem.",
          "en": "Static environment variables require Lambda function redeployment whenever a secret changes. For credentials that change periodically, this is inefficient and can cause downtime. Secrets Manager allows updating secrets without redeployment, and offers automatic rotation that static environment variables don't offer."
        }
      }
    ],
    explanation: {
      "pt-BR": "Secrets Manager armazena secrets de forma segura, oferece rotação automática, e integra com Lambda via environment variables ou SDK. Secrets são criptografados e auditados. Hardcodar secrets é inseguro e expõe credenciais. S3 não é seguro para secrets e não oferece rotação. Environment variables estáticas requerem redeploy para atualizar.",
      "en": "Secrets Manager stores secrets securely, offers automatic rotation, and integrates with Lambda via environment variables or SDK. Secrets are encrypted and audited. Hardcoding secrets is insecure and exposes credentials. S3 isn't secure for secrets and doesn't offer rotation. Static environment variables require redeployment to update."
    }
  },
  {
    id: 19,
    title: {
      "pt-BR": "Lambda - VPC e Conectividade",
      "en": "Lambda - VPC and Connectivity"
    },
    description: {
      "pt-BR": "Uma função Lambda precisa acessar um banco de dados RDS em uma VPC privada. A função está experimentando timeouts e alta latência. A equipe descobriu que a Lambda está usando ENIs (Elastic Network Interfaces) que demoram para ser criadas.",
      "en": "A Lambda function needs to access an RDS database in a private VPC. The function is experiencing timeouts and high latency. The team discovered that Lambda is using ENIs (Elastic Network Interfaces) that take time to be created."
    },
    question: {
      "pt-BR": "Qual estratégia resolve melhor o problema de latência?",
      "en": "Which strategy best solves the latency problem?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Manter Lambda na VPC e aumentar timeout",
          "en": "Keep Lambda in VPC and increase timeout"
        },
        correct: false,
        explanation: {
          "pt-BR": "Aumentar apenas o timeout não resolve o problema de latência causado por criação lenta de ENIs. Quando Lambda precisa criar uma nova ENI na VPC, pode levar 10-15 segundos, causando timeouts. O problema é arquitetural (criação de ENIs), não apenas timeout. É necessário otimizar a conectividade com RDS Proxy ou provisioned concurrency.",
          "en": "Increasing only the timeout doesn't solve the latency problem caused by slow ENI creation. When Lambda needs to create a new ENI in VPC, it can take 10-15 seconds, causing timeouts. The problem is architectural (ENI creation), not just timeout. Connectivity needs to be optimized with RDS Proxy or provisioned concurrency."
        }
      },
      {
        title: {
          "pt-BR": "Mover RDS para público ou usar RDS Proxy para connection pooling + provisioned concurrency para manter ENIs quentes",
          "en": "Move RDS to public or use RDS Proxy for connection pooling + provisioned concurrency to keep ENIs warm"
        },
        correct: true,
        explanation: {
          "pt-BR": "RDS Proxy gerencia connection pooling, reduzindo número de conexões e melhorando performance. Provisioned concurrency mantém ENIs pré-criadas, eliminando cold starts de rede. Se segurança permitir, mover RDS para público elimina necessidade de ENIs. Esta combinação resolve problemas de latência e timeouts.",
          "en": "RDS Proxy manages connection pooling, reducing number of connections and improving performance. Provisioned concurrency keeps ENIs pre-created, eliminating network cold starts. If security allows, moving RDS to public eliminates need for ENIs. This combination solves latency and timeout problems."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas VPC sem otimizações",
          "en": "Use only VPC without optimizations"
        },
        correct: false,
        explanation: {
          "pt-BR": "VPC sem otimizações mantém o problema de criação lenta de ENIs, causando latência alta e timeouts. Cada cold start de rede pode levar 10-15 segundos para criar ENIs. Sem RDS Proxy ou provisioned concurrency, o problema de latência persiste. Otimizações são necessárias para resolver o problema.",
          "en": "VPC without optimizations maintains the slow ENI creation problem, causing high latency and timeouts. Each network cold start can take 10-15 seconds to create ENIs. Without RDS Proxy or provisioned concurrency, the latency problem persists. Optimizations are needed to solve the problem."
        }
      },
      {
        title: {
          "pt-BR": "Migrar para EC2",
          "en": "Migrate to EC2"
        },
        correct: false,
        explanation: {
          "pt-BR": "Migrar para EC2 perderia todos os benefícios serverless (sem gerenciamento de servidores, pagamento por uso, escalabilidade automática). EC2 requer manter servidores rodando 24/7, gerenciamento de patches, e não resolve o problema de latência melhor que RDS Proxy + provisioned concurrency.",
          "en": "Migrating to EC2 would lose all serverless benefits (no server management, pay-per-use, automatic scaling). EC2 requires keeping servers running 24/7, patch management, and doesn't solve the latency problem better than RDS Proxy + provisioned concurrency."
        }
      }
    ],
    explanation: {
      "pt-BR": "RDS Proxy gerencia connection pooling reduzindo overhead de conexões e melhorando performance. Provisioned concurrency mantém ENIs pré-criadas eliminando cold starts de rede. Mover RDS para público pode ser uma opção se segurança permitir. Aumentar timeout apenas adia o problema. VPC sem otimizações mantém latência alta. Migrar para EC2 perde benefícios serverless.",
      "en": "RDS Proxy manages connection pooling reducing connection overhead and improving performance. Provisioned concurrency keeps ENIs pre-created eliminating network cold starts. Moving RDS to public may be an option if security allows. Increasing timeout only delays the problem. VPC without optimizations maintains high latency. Migrating to EC2 loses serverless benefits."
    }
  },
  {
    id: 20,
    title: {
      "pt-BR": "CloudWatch - Logs e Métricas Customizadas",
      "en": "CloudWatch - Logs and Custom Metrics"
    },
    description: {
      "pt-BR": "Uma aplicação Lambda processa transações financeiras e precisa rastrear métricas de negócio específicas: número de transações por minuto, valor total processado, taxa de sucesso. A equipe precisa de alertas quando essas métricas excedem limites.",
      "en": "A Lambda application processes financial transactions and needs to track specific business metrics: number of transactions per minute, total value processed, success rate. The team needs alerts when these metrics exceed thresholds."
    },
    question: {
      "pt-BR": "Qual solução AWS oferece melhor rastreamento de métricas customizadas?",
      "en": "Which AWS solution offers best custom metrics tracking?"
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Apenas CloudWatch Logs",
          "en": "Only CloudWatch Logs"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudWatch Logs armazena logs, mas não oferece agregação eficiente de métricas de negócio (transações/minuto, valor total), não permite alertas baseados em métricas agregadas, e não é otimizado para rastreamento de métricas time-series. Para métricas de negócio, PutMetricData API é necessário.",
          "en": "CloudWatch Logs stores logs, but doesn't offer efficient aggregation of business metrics (transactions/minute, total value), doesn't allow alerts based on aggregated metrics, and isn't optimized for time-series metrics tracking. For business metrics, PutMetricData API is needed."
        }
      },
      {
        title: {
          "pt-BR": "CloudWatch PutMetricData API + CloudWatch Alarms + CloudWatch Dashboards",
          "en": "CloudWatch PutMetricData API + CloudWatch Alarms + CloudWatch Dashboards"
        },
        correct: true,
        explanation: {
          "pt-BR": "PutMetricData API permite publicar métricas customizadas do Lambda (transações/minuto, valor total, taxa de sucesso). CloudWatch Alarms monitora essas métricas e dispara alertas quando limites são excedidos. Dashboards visualizam métricas em tempo real. Esta combinação oferece rastreamento completo de métricas de negócio.",
          "en": "PutMetricData API allows publishing custom metrics from Lambda (transactions/minute, total value, success rate). CloudWatch Alarms monitors these metrics and triggers alerts when thresholds are exceeded. Dashboards visualize metrics in real-time. This combination offers complete business metrics tracking."
        }
      },
      {
        title: {
          "pt-BR": "Apenas console.log",
          "en": "Only console.log"
        },
        correct: false,
        explanation: {
          "pt-BR": "Console.log não é estruturado para métricas, não oferece agregação automática, não permite alertas, e não é otimizado para análise de métricas time-series. Para rastrear métricas de negócio como transações/minuto e valor total, é necessário usar PutMetricData API que estrutura métricas corretamente.",
          "en": "Console.log isn't structured for metrics, doesn't offer automatic aggregation, doesn't allow alerts, and isn't optimized for time-series metrics analysis. To track business metrics like transactions/minute and total value, PutMetricData API is needed which structures metrics correctly."
        }
      },
      {
        title: {
          "pt-BR": "Armazenar métricas em DynamoDB",
          "en": "Store metrics in DynamoDB"
        },
        correct: false,
        explanation: {
          "pt-BR": "DynamoDB não é otimizado para métricas time-series: não oferece agregação automática, não permite alertas nativos, não é eficiente para queries de métricas ao longo do tempo, e não oferece dashboards. CloudWatch é o serviço específico para métricas time-series com agregação e alertas.",
          "en": "DynamoDB isn't optimized for time-series metrics: doesn't offer automatic aggregation, doesn't allow native alerts, isn't efficient for metrics queries over time, and doesn't offer dashboards. CloudWatch is the specific service for time-series metrics with aggregation and alerts."
        }
      }
    ],
    explanation: {
      "pt-BR": "PutMetricData API permite publicar métricas customizadas do Lambda. CloudWatch Alarms monitora métricas e dispara alertas quando limites são excedidos. Dashboards visualizam métricas em tempo real. Logs sozinhos não oferecem agregação ou alertas eficientes. Console.log não é estruturado para métricas. DynamoDB não é otimizado para métricas time-series.",
      "en": "PutMetricData API allows publishing custom metrics from Lambda. CloudWatch Alarms monitors metrics and triggers alerts when thresholds are exceeded. Dashboards visualize metrics in real-time. Logs alone don't offer efficient aggregation or alerts. Console.log isn't structured for metrics. DynamoDB isn't optimized for time-series metrics."
    }
  }
];


