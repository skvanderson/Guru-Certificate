export const solutionsArchitectQuestions = [
  {
    id: 1,
    title: {
      "pt-BR": "Arquitetura de Microserviços - Padrões Avançados",
      "en": "Microservices Architecture - Advanced Patterns"
    },
    description: {
      "pt-BR": "Uma empresa está migrando uma aplicação monolítica para microserviços. A aplicação atual tem 50+ serviços que precisam se comunicar de forma assíncrona. Durante picos de tráfego, alguns serviços falham e causam cascata de falhas. Qual padrão arquitetural AWS resolve melhor este problema?",
      "en": "A company is migrating a monolithic application to microservices. The current application has 50+ services that need to communicate asynchronously. During traffic peaks, some services fail and cause cascade failures. Which AWS architectural pattern best solves this problem?"
    },
    question: {
      "pt-BR": "",
      "en": ""
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "Implementar Circuit Breaker com AWS Lambda e SQS Dead Letter Queues",
          "en": "Implement Circuit Breaker with AWS Lambda and SQS Dead Letter Queues"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Usar apenas API Gateway para roteamento",
          "en": "Use only API Gateway for routing"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Implementar apenas retry automático em todas as chamadas",
          "en": "Implement only automatic retry in all calls"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Usar apenas Application Load Balancer com health checks",
          "en": "Use only Application Load Balancer with health checks"
        },
        correct: false
      }
    ]
  },
  {
    id: 2,
    title: {
      "pt-BR": "Arquitetura Multi-Regional - Disaster Recovery",
      "en": "Multi-Regional Architecture - Disaster Recovery"
    },
    description: {
      "pt-BR": "Uma aplicação crítica de pagamentos processa 1 milhão de transações por dia e precisa de RTO de 15 minutos e RPO de 5 minutos. A aplicação usa RDS MySQL, S3, e Lambda. Qual estratégia de disaster recovery atende melhor estes requisitos?",
      "en": "A critical payment application processes 1 million transactions per day and needs RTO of 15 minutes and RPO of 5 minutes. The application uses RDS MySQL, S3, and Lambda. Which disaster recovery strategy best meets these requirements?"
    },
    question: {
      "pt-BR": "",
      "en": ""
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "RDS Multi-AZ com backup diário e S3 Cross-Region Replication",
          "en": "RDS Multi-AZ with daily backup and S3 Cross-Region Replication"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "RDS Cross-Region Read Replica com failover automático, S3 CRR, e Lambda deployment em múltiplas regiões",
          "en": "RDS Cross-Region Read Replica with automatic failover, S3 CRR, and Lambda deployment in multiple regions"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas backup manual diário em S3",
          "en": "Only daily manual backup to S3"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "RDS Single-AZ com snapshot manual",
          "en": "RDS Single-AZ with manual snapshot"
        },
        correct: false
      }
    ]
  },
  {
    id: 3,
    title: {
      "pt-BR": "Performance e Otimização - Caching Avançado",
      "en": "Performance and Optimization - Advanced Caching"
    },
    description: {
      "pt-BR": "Uma aplicação de streaming de vídeo tem 10 milhões de usuários ativos. O conteúdo é distribuído globalmente, mas 80% do tráfego vem de 3 regiões específicas. Os vídeos têm tamanhos variados (1MB a 2GB) e são acessados de forma imprevisível. Qual estratégia de cache é mais eficiente?",
      "en": "A video streaming application has 10 million active users. Content is distributed globally, but 80% of traffic comes from 3 specific regions. Videos have varying sizes (1MB to 2GB) and are accessed unpredictably. Which caching strategy is most efficient?"
    },
    question: {
      "pt-BR": "",
      "en": ""
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "CloudFront com S3 como origem e cache de 24h para todos os objetos",
          "en": "CloudFront with S3 as origin and 24h cache for all objects"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "CloudFront com S3 como origem, cache diferenciado por tipo de conteúdo, e Lambda@Edge para personalização",
          "en": "CloudFront with S3 as origin, differentiated cache by content type, and Lambda@Edge for customization"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas S3 com transfer acceleration",
          "en": "Only S3 with transfer acceleration"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "ElastiCache Redis em cada região",
          "en": "ElastiCache Redis in each region"
        },
        correct: false
      }
    ]
  },
  {
    id: 4,
    title: {
      "pt-BR": "Segurança Avançada - Zero Trust Architecture",
      "en": "Advanced Security - Zero Trust Architecture"
    },
    description: {
      "pt-BR": "Uma empresa financeira precisa implementar uma arquitetura Zero Trust. A aplicação tem componentes em múltiplas VPCs, APIs internas e externas, e dados sensíveis que precisam de auditoria completa. Qual combinação de serviços AWS implementa melhor Zero Trust?",
      "en": "A financial company needs to implement a Zero Trust architecture. The application has components in multiple VPCs, internal and external APIs, and sensitive data that needs complete auditing. Which combination of AWS services best implements Zero Trust?"
    },
    question: {
      "pt-BR": "",
      "en": ""
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "VPC Endpoints, AWS WAF, e CloudTrail",
          "en": "VPC Endpoints, AWS WAF, and CloudTrail"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "AWS PrivateLink, VPC Endpoints, AWS WAF, AWS Shield, CloudTrail, GuardDuty, e AWS Config com regras customizadas",
          "en": "AWS PrivateLink, VPC Endpoints, AWS WAF, AWS Shield, CloudTrail, GuardDuty, and AWS Config with custom rules"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas Security Groups e NACLs",
          "en": "Only Security Groups and NACLs"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "AWS Cognito e IAM roles",
          "en": "AWS Cognito and IAM roles"
        },
        correct: false
      }
    ]
  },
  {
    id: 5,
    title: {
      "pt-BR": "Arquitetura de Dados - Data Lake e Analytics",
      "en": "Data Architecture - Data Lake and Analytics"
    },
    description: {
      "pt-BR": "Uma empresa de e-commerce precisa processar 100TB de dados diários (logs, transações, comportamento do usuário) para analytics em tempo real e batch. Os dados vêm de múltiplas fontes (APIs, bancos, streams) e precisam ser processados com diferentes latências. Qual arquitetura AWS é mais adequada?",
      "en": "An e-commerce company needs to process 100TB of daily data (logs, transactions, user behavior) for real-time and batch analytics. Data comes from multiple sources (APIs, databases, streams) and needs to be processed with different latencies. Which AWS architecture is most suitable?"
    },
    question: {
      "pt-BR": "",
      "en": ""
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "S3 Data Lake + Kinesis Data Streams + Kinesis Analytics + Redshift Spectrum",
          "en": "S3 Data Lake + Kinesis Data Streams + Kinesis Analytics + Redshift Spectrum"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas RDS com read replicas",
          "en": "Only RDS with read replicas"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "DynamoDB com DynamoDB Streams",
          "en": "DynamoDB with DynamoDB Streams"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "ElastiCache com backup em S3",
          "en": "ElastiCache with S3 backup"
        },
        correct: false
      }
    ]
  },
  {
    id: 6,
    title: {
      "pt-BR": "Serverless Avançado - Event-Driven Architecture",
      "en": "Advanced Serverless - Event-Driven Architecture"
    },
    description: {
      "pt-BR": "Uma aplicação de IoT processa 1 milhão de eventos por minuto de sensores distribuídos globalmente. Cada evento precisa ser validado, transformado, armazenado, e pode disparar ações em tempo real. Alguns eventos são críticos e precisam de processamento garantido. Qual arquitetura serverless é mais robusta?",
      "en": "An IoT application processes 1 million events per minute from globally distributed sensors. Each event needs to be validated, transformed, stored, and can trigger real-time actions. Some events are critical and need guaranteed processing. Which serverless architecture is most robust?"
    },
    question: {
      "pt-BR": "",
      "en": ""
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "IoT Core + SQS + Lambda + DynamoDB",
          "en": "IoT Core + SQS + Lambda + DynamoDB"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "IoT Core + Kinesis Data Streams + Lambda (com DLQ) + DynamoDB + SNS para eventos críticos",
          "en": "IoT Core + Kinesis Data Streams + Lambda (with DLQ) + DynamoDB + SNS for critical events"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas Lambda com API Gateway",
          "en": "Only Lambda with API Gateway"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "S3 + EventBridge + Step Functions",
          "en": "S3 + EventBridge + Step Functions"
        },
        correct: false
      }
    ]
  },
  {
    id: 7,
    title: {
      "pt-BR": "Arquitetura Híbrida - Conectividade Avançada",
      "en": "Hybrid Architecture - Advanced Connectivity"
    },
    description: {
      "pt-BR": "Uma empresa multinacional tem data centers em 5 países e precisa conectar todos à AWS com redundância, baixa latência, e compliance com regulamentações locais. Alguns workloads precisam permanecer on-premises. Qual solução AWS oferece a melhor conectividade híbrida?",
      "en": "A multinational company has data centers in 5 countries and needs to connect all to AWS with redundancy, low latency, and compliance with local regulations. Some workloads need to remain on-premises. Which AWS solution offers the best hybrid connectivity?"
    },
    question: {
      "pt-BR": "",
      "en": ""
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "AWS Direct Connect + VPN como backup + AWS Outposts para workloads críticos",
          "en": "AWS Direct Connect + VPN as backup + AWS Outposts for critical workloads"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas VPN Site-to-Site",
          "en": "Only Site-to-Site VPN"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "AWS Direct Connect sem redundância",
          "en": "AWS Direct Connect without redundancy"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Internet Gateway com criptografia",
          "en": "Internet Gateway with encryption"
        },
        correct: false
      }
    ]
  },
  {
    id: 8,
    title: {
      "pt-BR": "Otimização de Custos - FinOps Avançado",
      "en": "Cost Optimization - Advanced FinOps"
    },
    description: {
      "pt-BR": "Uma empresa tem 500+ contas AWS com recursos distribuídos globalmente. O gasto mensal é de $2M e há desperdício de 30% em recursos subutilizados. A empresa precisa de visibilidade granular, automação de otimização, e controle de orçamento por departamento. Qual solução AWS é mais completa?",
      "en": "A company has 500+ AWS accounts with resources distributed globally. Monthly spending is $2M with 30% waste in underutilized resources. The company needs granular visibility, optimization automation, and budget control by department. Which AWS solution is most complete?"
    },
    question: {
      "pt-BR": "",
      "en": ""
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "AWS Cost Explorer + Trusted Advisor + Budgets",
          "en": "AWS Cost Explorer + Trusted Advisor + Budgets"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "AWS Organizations + Cost Explorer + Budgets + Trusted Advisor + Compute Optimizer + Lambda para automação",
          "en": "AWS Organizations + Cost Explorer + Budgets + Trusted Advisor + Compute Optimizer + Lambda for automation"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas AWS Cost Explorer",
          "en": "Only AWS Cost Explorer"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "CloudWatch com métricas customizadas",
          "en": "CloudWatch with custom metrics"
        },
        correct: false
      }
    ]
  },
  {
    id: 9,
    title: {
      "pt-BR": "Arquitetura de Machine Learning - MLOps",
      "en": "Machine Learning Architecture - MLOps"
    },
    description: {
      "pt-BR": "Uma empresa de fintech precisa implementar um sistema de detecção de fraude em tempo real que processa 10.000 transações por segundo. O modelo ML precisa ser treinado diariamente com novos dados, versionado, e deployado automaticamente. Qual arquitetura AWS suporta melhor este pipeline MLOps?",
      "en": "A fintech company needs to implement a real-time fraud detection system that processes 10,000 transactions per second. The ML model needs to be trained daily with new data, versioned, and deployed automatically. Which AWS architecture best supports this MLOps pipeline?"
    },
    question: {
      "pt-BR": "",
      "en": ""
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "SageMaker + Kinesis Data Streams + Lambda + API Gateway + S3 + CodePipeline",
          "en": "SageMaker + Kinesis Data Streams + Lambda + API Gateway + S3 + CodePipeline"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas EC2 com TensorFlow",
          "en": "Only EC2 with TensorFlow"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "SageMaker sem automação",
          "en": "SageMaker without automation"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Lambda com modelo estático",
          "en": "Lambda with static model"
        },
        correct: false
      }
    ]
  },
  {
    id: 10,
    title: {
      "pt-BR": "Arquitetura de Observabilidade - Distributed Tracing",
      "en": "Observability Architecture - Distributed Tracing"
    },
    description: {
      "pt-BR": "Uma aplicação distribuída com 50+ microserviços está enfrentando problemas de performance difíceis de diagnosticar. As requisições passam por múltiplos serviços e a latência varia entre 100ms e 30s. A equipe precisa de visibilidade completa do fluxo de requisições e métricas de negócio. Qual solução AWS oferece observabilidade completa?",
      "en": "A distributed application with 50+ microservices is facing performance issues that are difficult to diagnose. Requests pass through multiple services and latency varies between 100ms and 30s. The team needs complete visibility of request flow and business metrics. Which AWS solution offers complete observability?"
    },
    question: {
      "pt-BR": "",
      "en": ""
    },
    multiple: false,
    answered: false,
    correct: false,
    alternatives: [
      {
        title: {
          "pt-BR": "CloudWatch + X-Ray + CloudWatch Insights + Custom Metrics",
          "en": "CloudWatch + X-Ray + CloudWatch Insights + Custom Metrics"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Apenas CloudWatch Logs",
          "en": "Only CloudWatch Logs"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "X-Ray sem CloudWatch",
          "en": "X-Ray without CloudWatch"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Apenas métricas de aplicação customizadas",
          "en": "Only custom application metrics"
        },
        correct: false
      }
    ]
  }
];



