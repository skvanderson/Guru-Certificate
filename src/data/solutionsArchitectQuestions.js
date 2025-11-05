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
        correct: true,
        explanation: {
          "pt-BR": "Circuit Breaker previne cascata de falhas interrompendo chamadas quando um serviço está falhando, evitando que falhas se propaguem. SQS Dead Letter Queues captura mensagens que falharam após múltiplas tentativas para análise posterior. Lambda pode implementar circuit breaker pattern. Esta combinação resolve o problema de cascata de falhas em microserviços.",
          "en": "Circuit Breaker prevents cascade failures by interrupting calls when a service is failing, preventing failures from propagating. SQS Dead Letter Queues captures messages that failed after multiple attempts for later analysis. Lambda can implement circuit breaker pattern. This combination solves the cascade failure problem in microservices."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas API Gateway para roteamento",
          "en": "Use only API Gateway for routing"
        },
        correct: false,
        explanation: {
          "pt-BR": "API Gateway faz roteamento de requisições HTTP, mas não previne cascata de falhas nem gerencia comunicação assíncrona entre 50+ serviços. Quando um serviço falha, API Gateway apenas retorna erro, mas não interrompe chamadas para evitar propagação de falhas. Circuit Breaker é necessário para prevenir cascata.",
          "en": "API Gateway routes HTTP requests, but doesn't prevent cascade failures or manage asynchronous communication between 50+ services. When a service fails, API Gateway just returns error, but doesn't interrupt calls to prevent failure propagation. Circuit Breaker is needed to prevent cascade."
        }
      },
      {
        title: {
          "pt-BR": "Implementar apenas retry automático em todas as chamadas",
          "en": "Implement only automatic retry in all calls"
        },
        correct: false,
        explanation: {
          "pt-BR": "Retry automático sozinho pode piorar a situação: se um serviço está falhando, retries repetidos aumentam a carga sobre o serviço já sobrecarregado, acelerando a cascata de falhas. É necessário Circuit Breaker para interromper chamadas quando um serviço está falhando, não apenas fazer mais tentativas.",
          "en": "Automatic retry alone can worsen the situation: if a service is failing, repeated retries increase load on the already overloaded service, accelerating cascade failures. Circuit Breaker is needed to interrupt calls when a service is failing, not just make more attempts."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas Application Load Balancer com health checks",
          "en": "Use only Application Load Balancer with health checks"
        },
        correct: false,
        explanation: {
          "pt-BR": "Application Load Balancer com health checks ajuda a remover instâncias não saudáveis, mas não resolve comunicação assíncrona entre serviços nem previne cascata de falhas. Para 50+ serviços que se comunicam de forma assíncrona, é necessário Circuit Breaker e Dead Letter Queues para gerenciar falhas.",
          "en": "Application Load Balancer with health checks helps remove unhealthy instances, but doesn't solve asynchronous communication between services or prevent cascade failures. For 50+ services that communicate asynchronously, Circuit Breaker and Dead Letter Queues are needed to manage failures."
        }
      }
    ],
    explanation: {
      "pt-BR": "Circuit Breaker previne cascata de falhas interrompendo chamadas quando um serviço está falhando. SQS Dead Letter Queues captura mensagens que falharam após múltiplas tentativas para análise. Lambda pode implementar circuit breaker pattern. Apenas API Gateway não resolve falhas de cascata. Apenas retry automático pode piorar a situação. Load Balancer com health checks ajuda mas não resolve comunicação assíncrona entre serviços.",
      "en": "Circuit Breaker prevents cascade failures by interrupting calls when a service is failing. SQS Dead Letter Queues captures messages that failed after multiple attempts for analysis. Lambda can implement circuit breaker pattern. Only API Gateway doesn't solve cascade failures. Only automatic retry can worsen the situation. Load Balancer with health checks helps but doesn't solve asynchronous communication between services."
    }
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
        correct: false,
        explanation: {
          "pt-BR": "RDS Multi-AZ apenas em uma região não atende RTO de 15 minutos nem RPO de 5 minutos se a região inteira falhar. Backup diário tem RPO muito alto (até 24 horas). Para uma aplicação crítica de pagamentos que precisa de RTO de 15 minutos e RPO de 5 minutos, é necessário replicação cross-region com failover automático.",
          "en": "RDS Multi-AZ only in one region doesn't meet 15-minute RTO or 5-minute RPO if the entire region fails. Daily backup has very high RPO (up to 24 hours). For a critical payment application that needs 15-minute RTO and 5-minute RPO, cross-region replication with automatic failover is needed."
        }
      },
      {
        title: {
          "pt-BR": "RDS Cross-Region Read Replica com failover automático, S3 CRR, e Lambda deployment em múltiplas regiões",
          "en": "RDS Cross-Region Read Replica with automatic failover, S3 CRR, and Lambda deployment in multiple regions"
        },
        correct: true,
        explanation: {
          "pt-BR": "RDS Cross-Region Read Replica com failover automático oferece RPO baixo (5 minutos) através de replicação assíncrona contínua e RTO rápido (15 minutos) com failover automático. S3 CRR replica dados entre regiões. Lambda em múltiplas regiões garante disponibilidade. Esta é a única solução que atende RTO de 15 minutos e RPO de 5 minutos.",
          "en": "RDS Cross-Region Read Replica with automatic failover offers low RPO (5 minutes) through continuous asynchronous replication and fast RTO (15 minutes) with automatic failover. S3 CRR replicates data between regions. Lambda in multiple regions ensures availability. This is the only solution that meets 15-minute RTO and 5-minute RPO."
        }
      },
      {
        title: {
          "pt-BR": "Apenas backup manual diário em S3",
          "en": "Only daily manual backup to S3"
        },
        correct: false,
        explanation: {
          "pt-BR": "Backup manual diário tem RPO muito alto (até 24 horas de perda de dados) e RTO muito alto (horas para restaurar e configurar). Para uma aplicação crítica de pagamentos que precisa de RTO de 15 minutos e RPO de 5 minutos, backup manual é completamente inadequado. É necessário replicação contínua e failover automático.",
          "en": "Daily manual backup has very high RPO (up to 24 hours of data loss) and very high RTO (hours to restore and configure). For a critical payment application that needs 15-minute RTO and 5-minute RPO, manual backup is completely inadequate. Continuous replication and automatic failover are needed."
        }
      },
      {
        title: {
          "pt-BR": "RDS Single-AZ com snapshot manual",
          "en": "RDS Single-AZ with manual snapshot"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS Single-AZ não tem redundância, e snapshot manual tem RPO muito alto e RTO muito alto (horas). Para uma aplicação crítica que processa 1 milhão de transações por dia e precisa de RTO de 15 minutos e RPO de 5 minutos, é necessário replicação cross-region com failover automático, não snapshots manuais.",
          "en": "RDS Single-AZ has no redundancy, and manual snapshot has very high RPO and RTO (hours). For a critical application that processes 1 million transactions per day and needs 15-minute RTO and 5-minute RPO, cross-region replication with automatic failover is needed, not manual snapshots."
        }
      }
    ],
    explanation: {
      "pt-BR": "RDS Cross-Region Read Replica com failover automático oferece RPO baixo (5 minutos) e RTO rápido (15 minutos) através de replicação assíncrona e failover automático. S3 CRR replica dados entre regiões. Lambda em múltiplas regiões garante disponibilidade. RDS Multi-AZ apenas em uma região não atende RTO/RPO. Backup manual tem RTO muito alto. Single-AZ não tem redundância.",
      "en": "RDS Cross-Region Read Replica with automatic failover offers low RPO (5 minutes) and fast RTO (15 minutes) through asynchronous replication and automatic failover. S3 CRR replicates data between regions. Lambda in multiple regions ensures availability. RDS Multi-AZ only in one region doesn't meet RTO/RPO. Manual backup has very high RTO. Single-AZ has no redundancy."
    }
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
        correct: false,
        explanation: {
          "pt-BR": "Cache de 24h uniforme para todos os objetos não é eficiente: vídeos grandes (2GB) podem não ser acessados novamente, desperdiçando espaço de cache. Vídeos pequenos (1MB) podem ser acessados frequentemente e precisariam de cache mais longo. Cache uniforme não otimiza custos nem performance para conteúdo variável e acesso imprevisível.",
          "en": "Uniform 24h cache for all objects isn't efficient: large videos (2GB) may not be accessed again, wasting cache space. Small videos (1MB) may be accessed frequently and would need longer cache. Uniform cache doesn't optimize costs or performance for variable content and unpredictable access."
        }
      },
      {
        title: {
          "pt-BR": "CloudFront com S3 como origem, cache diferenciado por tipo de conteúdo, e Lambda@Edge para personalização",
          "en": "CloudFront with S3 as origin, differentiated cache by content type, and Lambda@Edge for customization"
        },
        correct: true,
        explanation: {
          "pt-BR": "CloudFront com cache diferenciado otimiza TTL baseado no tipo de conteúdo (vídeos populares podem ter cache mais longo, thumbnails pequenos também). Lambda@Edge permite personalização de respostas e cache inteligente baseado em comportamento do usuário e região. Esta combinação oferece otimização de custos e performance para 10 milhões de usuários.",
          "en": "CloudFront with differentiated cache optimizes TTL based on content type (popular videos can have longer cache, small thumbnails too). Lambda@Edge allows response customization and intelligent caching based on user behavior and region. This combination offers cost and performance optimization for 10 million users."
        }
      },
      {
        title: {
          "pt-BR": "Apenas S3 com transfer acceleration",
          "en": "Only S3 with transfer acceleration"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 Transfer Acceleration acelera uploads, mas não oferece cache, não otimiza distribuição global, e não oferece edge locations para reduzir latência. Para 10 milhões de usuários distribuídos globalmente, é necessário CloudFront que oferece cache em edge locations, reduzindo latência e custos de transferência.",
          "en": "S3 Transfer Acceleration speeds up uploads, but doesn't offer cache, doesn't optimize global distribution, and doesn't offer edge locations to reduce latency. For 10 million globally distributed users, CloudFront is needed which offers cache at edge locations, reducing latency and transfer costs."
        }
      },
      {
        title: {
          "pt-BR": "ElastiCache Redis em cada região",
          "en": "ElastiCache Redis in each region"
        },
        correct: false,
        explanation: {
          "pt-BR": "ElastiCache Redis não escala globalmente como CloudFront: requer provisionamento em cada região, não oferece edge locations automaticamente, não otimiza distribuição global, e é mais caro para conteúdo estático grande. Para streaming de vídeo com 10 milhões de usuários, CloudFront é muito mais eficiente e escalável.",
          "en": "ElastiCache Redis doesn't scale globally like CloudFront: requires provisioning in each region, doesn't automatically offer edge locations, doesn't optimize global distribution, and is more expensive for large static content. For video streaming with 10 million users, CloudFront is much more efficient and scalable."
        }
      }
    ],
    explanation: {
      "pt-BR": "CloudFront com cache diferenciado otimiza por tipo de conteúdo (vídeos grandes vs thumbnails pequenos). Lambda@Edge permite personalização de conteúdo por região/usuário. Cache uniforme de 24h não é eficiente para diferentes tipos. S3 Transfer Acceleration não oferece cache. ElastiCache Redis não escala globalmente como CloudFront.",
      "en": "CloudFront with differentiated cache optimizes by content type (large videos vs small thumbnails). Lambda@Edge allows content personalization by region/user. Uniform 24h cache isn't efficient for different types. S3 Transfer Acceleration doesn't offer cache. ElastiCache Redis doesn't scale globally like CloudFront."
    }
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
        correct: false,
        explanation: {
          "pt-BR": "Esta combinação cobre conectividade privada (VPC Endpoints), proteção de APIs (WAF) e auditoria (CloudTrail), mas não é completa para Zero Trust: falta detecção de ameaças (GuardDuty), proteção DDoS (Shield), compliance contínuo (Config), e conectividade privada entre VPCs (PrivateLink). Zero Trust requer camadas múltiplas de segurança e verificação contínua.",
          "en": "This combination covers private connectivity (VPC Endpoints), API protection (WAF) and auditing (CloudTrail), but isn't complete for Zero Trust: lacks threat detection (GuardDuty), DDoS protection (Shield), continuous compliance (Config), and private connectivity between VPCs (PrivateLink). Zero Trust requires multiple security layers and continuous verification."
        }
      },
      {
        title: {
          "pt-BR": "AWS PrivateLink, VPC Endpoints, AWS WAF, AWS Shield, CloudTrail, GuardDuty, e AWS Config com regras customizadas",
          "en": "AWS PrivateLink, VPC Endpoints, AWS WAF, AWS Shield, CloudTrail, GuardDuty, and AWS Config with custom rules"
        },
        correct: true,
        explanation: {
          "pt-BR": "Esta combinação implementa Zero Trust completo: PrivateLink para conectividade privada entre VPCs sem expor tráfego à internet, VPC Endpoints para acesso seguro a serviços AWS, WAF para proteção de APIs, Shield para proteção DDoS, CloudTrail para auditoria completa, GuardDuty para detecção contínua de ameaças, e Config para compliance e governança. Esta é a arquitetura Zero Trust mais completa.",
          "en": "This combination implements complete Zero Trust: PrivateLink for private connectivity between VPCs without exposing traffic to internet, VPC Endpoints for secure AWS service access, WAF for API protection, Shield for DDoS protection, CloudTrail for complete auditing, GuardDuty for continuous threat detection, and Config for compliance and governance. This is the most complete Zero Trust architecture."
        }
      },
      {
        title: {
          "pt-BR": "Apenas Security Groups e NACLs",
          "en": "Only Security Groups and NACLs"
        },
        correct: false,
        explanation: {
          "pt-BR": "Security Groups e NACLs são apenas controles de rede básicos, não implementam Zero Trust que requer verificação contínua, detecção de ameaças, auditoria, compliance, e proteção em múltiplas camadas. Zero Trust não é apenas controle de rede, mas uma arquitetura de segurança abrangente com monitoramento e verificação contínua.",
          "en": "Security Groups and NACLs are only basic network controls, don't implement Zero Trust which requires continuous verification, threat detection, auditing, compliance, and multi-layer protection. Zero Trust isn't just network control, but a comprehensive security architecture with continuous monitoring and verification."
        }
      },
      {
        title: {
          "pt-BR": "AWS Cognito e IAM roles",
          "en": "AWS Cognito and IAM roles"
        },
        correct: false,
        explanation: {
          "pt-BR": "Cognito e IAM cobrem autenticação e autorização, mas não implementam Zero Trust completo que requer: conectividade privada (PrivateLink, VPC Endpoints), proteção de APIs (WAF), proteção DDoS (Shield), detecção de ameaças (GuardDuty), auditoria (CloudTrail), e compliance (Config). Zero Trust é mais que autenticação, é uma arquitetura completa.",
          "en": "Cognito and IAM cover authentication and authorization, but don't implement complete Zero Trust which requires: private connectivity (PrivateLink, VPC Endpoints), API protection (WAF), DDoS protection (Shield), threat detection (GuardDuty), auditing (CloudTrail), and compliance (Config). Zero Trust is more than authentication, it's a complete architecture."
        }
      }
    ],
    explanation: {
      "pt-BR": "Zero Trust requer verificação contínua: PrivateLink para conectividade privada, VPC Endpoints para acesso seguro a serviços AWS, WAF para proteção de APIs, Shield para DDoS, CloudTrail para auditoria, GuardDuty para detecção de ameaças, e Config para compliance. Apenas VPC Endpoints/WAF/CloudTrail não é completo. Security Groups/NACLs sozinhos não implementam Zero Trust. Cognito/IAM não cobrem toda a arquitetura.",
      "en": "Zero Trust requires continuous verification: PrivateLink for private connectivity, VPC Endpoints for secure AWS service access, WAF for API protection, Shield for DDoS, CloudTrail for auditing, GuardDuty for threat detection, and Config for compliance. Only VPC Endpoints/WAF/CloudTrail isn't complete. Security Groups/NACLs alone don't implement Zero Trust. Cognito/IAM don't cover entire architecture."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "S3 Data Lake armazena 100TB de dados de múltiplas fontes de forma escalável e econômica. Kinesis Data Streams processa dados em tempo real. Kinesis Analytics analisa streams em tempo real. Redshift Spectrum permite queries SQL em S3 para analytics batch. Esta arquitetura suporta tanto processamento em tempo real quanto batch para 100TB diários.",
          "en": "S3 Data Lake stores 100TB of data from multiple sources in a scalable and economical way. Kinesis Data Streams processes real-time data. Kinesis Analytics analyzes streams in real-time. Redshift Spectrum allows SQL queries on S3 for batch analytics. This architecture supports both real-time and batch processing for 100TB daily."
        }
      },
      {
        title: {
          "pt-BR": "Apenas RDS com read replicas",
          "en": "Only RDS with read replicas"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS não é adequado para processar 100TB diários de dados de múltiplas fontes: é caro para este volume, não suporta analytics em tempo real, não é otimizado para data lake, e não processa streams. Para analytics de 100TB diários de múltiplas fontes, é necessário S3 Data Lake com Kinesis para tempo real e Redshift Spectrum para batch.",
          "en": "RDS isn't suitable for processing 100TB daily of data from multiple sources: it's expensive for this volume, doesn't support real-time analytics, isn't optimized for data lake, and doesn't process streams. For 100TB daily analytics from multiple sources, S3 Data Lake with Kinesis for real-time and Redshift Spectrum for batch is needed."
        }
      },
      {
        title: {
          "pt-BR": "DynamoDB com DynamoDB Streams",
          "en": "DynamoDB with DynamoDB Streams"
        },
        correct: false,
        explanation: {
          "pt-BR": "DynamoDB é um banco NoSQL transacional, não um data lake. DynamoDB Streams processa eventos, mas não é adequado para analytics de 100TB diários. DynamoDB é caro para armazenar 100TB e não oferece analytics batch eficiente. Para analytics de dados grandes de múltiplas fontes, S3 Data Lake é necessário.",
          "en": "DynamoDB is a transactional NoSQL database, not a data lake. DynamoDB Streams processes events, but isn't suitable for 100TB daily analytics. DynamoDB is expensive for storing 100TB and doesn't offer efficient batch analytics. For large data analytics from multiple sources, S3 Data Lake is needed."
        }
      },
      {
        title: {
          "pt-BR": "ElastiCache com backup em S3",
          "en": "ElastiCache with S3 backup"
        },
        correct: false,
        explanation: {
          "pt-BR": "ElastiCache é um serviço de cache em memória, não um data lake. Não é adequado para armazenar 100TB diários, não processa streams, não oferece analytics em tempo real ou batch. ElastiCache é para cache de dados acessados frequentemente, não para analytics de grandes volumes de dados de múltiplas fontes.",
          "en": "ElastiCache is an in-memory caching service, not a data lake. It isn't suitable for storing 100TB daily, doesn't process streams, doesn't offer real-time or batch analytics. ElastiCache is for caching frequently accessed data, not for analytics of large data volumes from multiple sources."
        }
      }
    ],
    explanation: {
      "pt-BR": "S3 Data Lake armazena dados em escala petabyte. Kinesis Data Streams processa dados em tempo real. Kinesis Analytics analisa streams. Redshift Spectrum consulta dados em S3 sem mover para Redshift. RDS não escala para 100TB diários. DynamoDB não é otimizado para analytics. ElastiCache é cache, não armazenamento de dados.",
      "en": "S3 Data Lake stores data at petabyte scale. Kinesis Data Streams processes data in real-time. Kinesis Analytics analyzes streams. Redshift Spectrum queries data in S3 without moving to Redshift. RDS doesn't scale to 100TB daily. DynamoDB isn't optimized for analytics. ElastiCache is cache, not data storage."
    }
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
        correct: false,
        explanation: {
          "pt-BR": "SQS não escala para 1 milhão de eventos por minuto: tem limite de throughput muito menor que Kinesis. Para processar 1 milhão de eventos/minuto de sensores IoT distribuídos globalmente, é necessário Kinesis Data Streams que oferece alta throughput e processamento em tempo real. SQS é adequado para volumes menores.",
          "en": "SQS doesn't scale to 1 million events per minute: has much lower throughput limit than Kinesis. To process 1 million events/minute from globally distributed IoT sensors, Kinesis Data Streams is needed which offers high throughput and real-time processing. SQS is suitable for smaller volumes."
        }
      },
      {
        title: {
          "pt-BR": "IoT Core + Kinesis Data Streams + Lambda (com DLQ) + DynamoDB + SNS para eventos críticos",
          "en": "IoT Core + Kinesis Data Streams + Lambda (with DLQ) + DynamoDB + SNS for critical events"
        },
        correct: true,
        explanation: {
          "pt-BR": "IoT Core conecta sensores, Kinesis Data Streams processa 1 milhão de eventos/minuto com alta throughput, Lambda valida e transforma eventos, DLQ garante processamento de eventos críticos que falharam, DynamoDB armazena dados, e SNS notifica eventos críticos em tempo real. Esta arquitetura é robusta e escalável.",
          "en": "IoT Core connects sensors, Kinesis Data Streams processes 1 million events/minute with high throughput, Lambda validates and transforms events, DLQ ensures processing of critical events that failed, DynamoDB stores data, and SNS notifies critical events in real-time. This architecture is robust and scalable."
        }
      },
      {
        title: {
          "pt-BR": "Apenas Lambda com API Gateway",
          "en": "Only Lambda with API Gateway"
        },
        correct: false,
        explanation: {
          "pt-BR": "Lambda com API Gateway não processa IoT Core diretamente: IoT Core precisa de integração com Kinesis ou SQS para processar eventos de sensores. API Gateway é para APIs REST, não para streaming de eventos IoT em alta escala. Para 1 milhão de eventos/minuto, é necessário Kinesis Data Streams.",
          "en": "Lambda with API Gateway doesn't process IoT Core directly: IoT Core needs integration with Kinesis or SQS to process sensor events. API Gateway is for REST APIs, not for high-scale IoT event streaming. For 1 million events/minute, Kinesis Data Streams is needed."
        }
      },
      {
        title: {
          "pt-BR": "S3 + EventBridge + Step Functions",
          "en": "S3 + EventBridge + Step Functions"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 não processa eventos em tempo real (é armazenamento), EventBridge não processa 1 milhão de eventos/minuto (tem limites de throughput), e Step Functions orquestra workflows mas não processa streams de IoT. Para processar 1 milhão de eventos/minuto de sensores IoT em tempo real, é necessário Kinesis Data Streams.",
          "en": "S3 doesn't process events in real-time (it's storage), EventBridge doesn't process 1 million events/minute (has throughput limits), and Step Functions orchestrates workflows but doesn't process IoT streams. To process 1 million events/minute from IoT sensors in real-time, Kinesis Data Streams is needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "Kinesis Data Streams processa milhões de eventos por minuto com alta throughput. DLQ garante processamento de eventos críticos. SNS notifica eventos críticos em tempo real. SQS não escala para 1 milhão/minuto. Lambda com API Gateway não processa IoT Core diretamente. S3/EventBridge não processa em tempo real.",
      "en": "Kinesis Data Streams processes millions of events per minute with high throughput. DLQ ensures critical event processing. SNS notifies critical events in real-time. SQS doesn't scale to 1 million/minute. Lambda with API Gateway doesn't process IoT Core directly. S3/EventBridge doesn't process in real-time."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "Direct Connect oferece conexão dedicada de baixa latência e alta largura de banda entre data centers e AWS. VPN como backup garante redundância se Direct Connect falhar. Outposts executa workloads AWS on-premises para compliance com regulamentações locais. Esta combinação oferece conectividade híbrida robusta com redundância e compliance.",
          "en": "Direct Connect offers dedicated low-latency and high-bandwidth connection between data centers and AWS. VPN as backup ensures redundancy if Direct Connect fails. Outposts runs AWS workloads on-premises for compliance with local regulations. This combination offers robust hybrid connectivity with redundancy and compliance."
        }
      },
      {
        title: {
          "pt-BR": "Apenas VPN Site-to-Site",
          "en": "Only Site-to-Site VPN"
        },
        correct: false,
        explanation: {
          "pt-BR": "VPN Site-to-Site sozinha não oferece baixa latência garantida (depende da internet pública), não oferece largura de banda dedicada, e não executa workloads AWS on-premises para compliance local. Para uma empresa multinacional com requisitos de baixa latência e compliance, é necessário Direct Connect e Outposts.",
          "en": "Site-to-Site VPN alone doesn't offer guaranteed low latency (depends on public internet), doesn't offer dedicated bandwidth, and doesn't run AWS workloads on-premises for local compliance. For a multinational company with low latency and compliance requirements, Direct Connect and Outposts are needed."
        }
      },
      {
        title: {
          "pt-BR": "AWS Direct Connect sem redundância",
          "en": "AWS Direct Connect without redundancy"
        },
        correct: false,
        explanation: {
          "pt-BR": "Direct Connect sem redundância é um ponto único de falha: se a conexão falhar, toda a conectividade entre data centers e AWS é perdida. Para uma empresa multinacional com data centers críticos em 5 países, redundância é essencial. VPN como backup garante continuidade em caso de falha do Direct Connect.",
          "en": "Direct Connect without redundancy is a single point of failure: if the connection fails, all connectivity between data centers and AWS is lost. For a multinational company with critical data centers in 5 countries, redundancy is essential. VPN as backup ensures continuity in case of Direct Connect failure."
        }
      },
      {
        title: {
          "pt-BR": "Internet Gateway com criptografia",
          "en": "Internet Gateway with encryption"
        },
        correct: false,
        explanation: {
          "pt-BR": "Internet Gateway é para conectar VPCs à internet pública, não conecta data centers on-premises à AWS. Não oferece baixa latência garantida, não oferece largura de banda dedicada, e não atende requisitos de conectividade híbrida. Para conectar data centers on-premises à AWS, é necessário Direct Connect ou VPN.",
          "en": "Internet Gateway is for connecting VPCs to public internet, doesn't connect on-premises data centers to AWS. Doesn't offer guaranteed low latency, doesn't offer dedicated bandwidth, and doesn't meet hybrid connectivity requirements. To connect on-premises data centers to AWS, Direct Connect or VPN is needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "Direct Connect oferece conexão dedicada de baixa latência. VPN como backup garante redundância. Outposts executa workloads AWS on-premises para compliance local. Apenas VPN não oferece baixa latência garantida. Direct Connect sem redundância é risco único. Internet Gateway não conecta on-premises.",
      "en": "Direct Connect offers dedicated low-latency connection. VPN as backup ensures redundancy. Outposts runs AWS workloads on-premises for local compliance. Only VPN doesn't offer guaranteed low latency. Direct Connect without redundancy is single point of failure. Internet Gateway doesn't connect on-premises."
    }
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
        correct: false,
        explanation: {
          "pt-BR": "Esta combinação fornece visibilidade (Cost Explorer), recomendações (Trusted Advisor) e controle de orçamento (Budgets), mas não automatiza otimizações. Para 500+ contas com 30% de desperdício, é necessário automação com Lambda para aplicar otimizações automaticamente e Compute Optimizer para recomendações de instâncias. Sem automação, otimizações ficam manuais.",
          "en": "This combination provides visibility (Cost Explorer), recommendations (Trusted Advisor) and budget control (Budgets), but doesn't automate optimizations. For 500+ accounts with 30% waste, automation with Lambda is needed to automatically apply optimizations and Compute Optimizer for instance recommendations. Without automation, optimizations remain manual."
        }
      },
      {
        title: {
          "pt-BR": "AWS Organizations + Cost Explorer + Budgets + Trusted Advisor + Compute Optimizer + Lambda para automação",
          "en": "AWS Organizations + Cost Explorer + Budgets + Trusted Advisor + Compute Optimizer + Lambda for automation"
        },
        correct: true,
        explanation: {
          "pt-BR": "Organizations gerencia 500+ contas, Cost Explorer fornece visibilidade granular por departamento, Budgets controla gastos com alertas, Trusted Advisor identifica otimizações, Compute Optimizer recomenda otimizações de instâncias automaticamente, e Lambda automatiza ações de otimização. Esta combinação oferece FinOps completo com automação.",
          "en": "Organizations manages 500+ accounts, Cost Explorer provides granular visibility by department, Budgets controls spending with alerts, Trusted Advisor identifies optimizations, Compute Optimizer automatically recommends instance optimizations, and Lambda automates optimization actions. This combination offers complete FinOps with automation."
        }
      },
      {
        title: {
          "pt-BR": "Apenas AWS Cost Explorer",
          "en": "Only AWS Cost Explorer"
        },
        correct: false,
        explanation: {
          "pt-BR": "Cost Explorer sozinho apenas mostra custos, não identifica otimizações, não controla orçamentos, não gerencia múltiplas contas, não automatiza ações, e não oferece recomendações de otimização. Para uma empresa com 500+ contas e 30% de desperdício, é necessário um conjunto completo de ferramentas com automação.",
          "en": "Cost Explorer alone only shows costs, doesn't identify optimizations, doesn't control budgets, doesn't manage multiple accounts, doesn't automate actions, and doesn't offer optimization recommendations. For a company with 500+ accounts and 30% waste, a complete set of tools with automation is needed."
        }
      },
      {
        title: {
          "pt-BR": "CloudWatch com métricas customizadas",
          "en": "CloudWatch with custom metrics"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudWatch monitora métricas de performance, mas não otimiza custos, não identifica recursos subutilizados, não gerencia orçamentos, e não automatiza otimizações. Para FinOps e otimização de custos, é necessário serviços específicos como Cost Explorer, Trusted Advisor, Compute Optimizer e Budgets.",
          "en": "CloudWatch monitors performance metrics, but doesn't optimize costs, doesn't identify underutilized resources, doesn't manage budgets, and doesn't automate optimizations. For FinOps and cost optimization, specific services like Cost Explorer, Trusted Advisor, Compute Optimizer and Budgets are needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "Organizations gerencia múltiplas contas. Cost Explorer fornece visibilidade granular. Budgets controla gastos. Trusted Advisor identifica otimizações. Compute Optimizer recomenda otimizações de instâncias. Lambda automatiza ações de otimização. Apenas Cost Explorer/Trusted Advisor/Budgets não automatiza. Apenas Cost Explorer não é suficiente. CloudWatch não otimiza custos.",
      "en": "Organizations manages multiple accounts. Cost Explorer provides granular visibility. Budgets controls spending. Trusted Advisor identifies optimizations. Compute Optimizer recommends instance optimizations. Lambda automates optimization actions. Only Cost Explorer/Trusted Advisor/Budgets doesn't automate. Only Cost Explorer isn't sufficient. CloudWatch doesn't optimize costs."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "SageMaker gerencia ciclo de vida completo de ML: treinamento diário, versionamento de modelos, e deployment automático. Kinesis processa 10.000 transações/segundo em tempo real. Lambda integra componentes. API Gateway expõe inferência. S3 armazena modelos e dados. CodePipeline automatiza pipeline MLOps completo. Esta é a arquitetura MLOps mais completa.",
          "en": "SageMaker manages complete ML lifecycle: daily training, model versioning, and automatic deployment. Kinesis processes 10,000 transactions/second in real-time. Lambda integrates components. API Gateway exposes inference. S3 stores models and data. CodePipeline automates complete MLOps pipeline. This is the most complete MLOps architecture."
        }
      },
      {
        title: {
          "pt-BR": "Apenas EC2 com TensorFlow",
          "en": "Only EC2 with TensorFlow"
        },
        correct: false,
        explanation: {
          "pt-BR": "EC2 com TensorFlow requer muito gerenciamento: provisionamento de instâncias, configuração de frameworks, gerenciamento de treinamento, versionamento manual de modelos, deployment manual, e não escala automaticamente para 10.000 transações/segundo. SageMaker oferece tudo isso de forma gerenciada com automação completa.",
          "en": "EC2 with TensorFlow requires much management: instance provisioning, framework configuration, training management, manual model versioning, manual deployment, and doesn't scale automatically to 10,000 transactions/second. SageMaker offers all of this in a managed way with complete automation."
        }
      },
      {
        title: {
          "pt-BR": "SageMaker sem automação",
          "en": "SageMaker without automation"
        },
        correct: false,
        explanation: {
          "pt-BR": "SageMaker sem automação não atende requisitos: o modelo precisa ser treinado diariamente com novos dados e deployado automaticamente. Sem CodePipeline ou automação, você teria que fazer treinamento e deployment manualmente diariamente, o que não escala e é propenso a erros. Automação é essencial para MLOps.",
          "en": "SageMaker without automation doesn't meet requirements: the model needs to be trained daily with new data and deployed automatically. Without CodePipeline or automation, you would have to do training and deployment manually daily, which doesn't scale and is error-prone. Automation is essential for MLOps."
        }
      },
      {
        title: {
          "pt-BR": "Lambda com modelo estático",
          "en": "Lambda with static model"
        },
        correct: false,
        explanation: {
          "pt-BR": "Lambda com modelo estático não permite retreino diário com novos dados, não versiona modelos, não escala automaticamente para 10.000 transações/segundo, e não oferece pipeline MLOps. Para detecção de fraude que precisa de retreino diário e deployment automático, SageMaker com automação é necessário.",
          "en": "Lambda with static model doesn't allow daily retraining with new data, doesn't version models, doesn't scale automatically to 10,000 transactions/second, and doesn't offer MLOps pipeline. For fraud detection that needs daily retraining and automatic deployment, SageMaker with automation is needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "SageMaker gerencia ciclo de vida completo de ML: treinamento, versionamento, e deployment. Kinesis processa transações em tempo real. Lambda integra componentes. API Gateway expõe inferência. S3 armazena modelos e dados. CodePipeline automatiza pipeline. EC2 com TensorFlow requer muito gerenciamento. SageMaker sem automação não atende requisitos. Lambda com modelo estático não permite retreino.",
      "en": "SageMaker manages complete ML lifecycle: training, versioning, and deployment. Kinesis processes transactions in real-time. Lambda integrates components. API Gateway exposes inference. S3 stores models and data. CodePipeline automates pipeline. EC2 with TensorFlow requires much management. SageMaker without automation doesn't meet requirements. Lambda with static model doesn't allow retraining."
    }
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
        correct: true,
        explanation: {
          "pt-BR": "CloudWatch monitora métricas e logs de todos os 50+ microserviços. X-Ray rastreia requisições através de múltiplos serviços mostrando latência de cada componente (identificando por que latência varia entre 100ms e 30s). CloudWatch Insights permite queries complexas em logs. Custom Metrics rastreia métricas de negócio. Esta combinação oferece observabilidade completa.",
          "en": "CloudWatch monitors metrics and logs from all 50+ microservices. X-Ray traces requests across multiple services showing latency of each component (identifying why latency varies between 100ms and 30s). CloudWatch Insights allows complex queries on logs. Custom Metrics tracks business metrics. This combination offers complete observability."
        }
      },
      {
        title: {
          "pt-BR": "Apenas CloudWatch Logs",
          "en": "Only CloudWatch Logs"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudWatch Logs sozinho não mostra correlação entre serviços, não rastreia requisições através de múltiplos microserviços, não mostra onde está a latência (100ms vs 30s), e não oferece métricas de negócio. Para diagnosticar problemas de performance em uma aplicação distribuída, X-Ray é essencial para rastreamento distribuído.",
          "en": "CloudWatch Logs alone doesn't show correlation between services, doesn't trace requests across multiple microservices, doesn't show where latency is (100ms vs 30s), and doesn't offer business metrics. To diagnose performance issues in a distributed application, X-Ray is essential for distributed tracing."
        }
      },
      {
        title: {
          "pt-BR": "X-Ray sem CloudWatch",
          "en": "X-Ray without CloudWatch"
        },
        correct: false,
        explanation: {
          "pt-BR": "X-Ray mostra rastreamento de requisições, mas sem CloudWatch você perde métricas de performance, logs detalhados, e capacidade de fazer queries complexas nos logs. Para observabilidade completa de uma aplicação distribuída com 50+ microserviços, é necessário combinar X-Ray (rastreamento) com CloudWatch (métricas e logs).",
          "en": "X-Ray shows request tracing, but without CloudWatch you lose performance metrics, detailed logs, and ability to do complex queries on logs. For complete observability of a distributed application with 50+ microservices, combining X-Ray (tracing) with CloudWatch (metrics and logs) is needed."
        }
      },
      {
        title: {
          "pt-BR": "Apenas métricas de aplicação customizadas",
          "en": "Only custom application metrics"
        },
        correct: false,
        explanation: {
          "pt-BR": "Métricas customizadas sozinhas não mostram o fluxo de requisições através de múltiplos serviços, não rastreiam onde a latência ocorre, não correlacionam logs entre serviços, e não oferecem visibilidade completa do sistema distribuído. Para diagnosticar problemas de performance em microserviços, X-Ray e CloudWatch são necessários.",
          "en": "Custom metrics alone don't show request flow across multiple services, don't trace where latency occurs, don't correlate logs between services, and don't offer complete visibility of the distributed system. To diagnose performance issues in microservices, X-Ray and CloudWatch are needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "CloudWatch monitora métricas e logs. X-Ray rastreia requisições através de serviços distribuídos mostrando latência de cada componente. CloudWatch Insights permite queries complexas em logs. Custom Metrics rastreia métricas de negócio. Apenas CloudWatch Logs não mostra correlação entre serviços. X-Ray sem CloudWatch perde contexto de métricas. Apenas métricas customizadas não mostra fluxo de requisições.",
      "en": "CloudWatch monitors metrics and logs. X-Ray traces requests across distributed services showing latency of each component. CloudWatch Insights allows complex queries on logs. Custom Metrics tracks business metrics. Only CloudWatch Logs doesn't show correlation between services. X-Ray without CloudWatch loses metric context. Only custom metrics doesn't show request flow."
    }
  },
  {
    id: 11,
    title: {
      "pt-BR": "Arquitetura Multi-Regional - Active-Active",
      "en": "Multi-Regional Architecture - Active-Active"
    },
    description: {
      "pt-BR": "Uma aplicação global precisa estar disponível em múltiplas regiões com latência baixa para usuários em diferentes continentes. A aplicação precisa sincronizar dados entre regiões e rotear tráfego para a região mais próxima. Qual arquitetura AWS oferece melhor performance global?",
      "en": "A global application needs to be available in multiple regions with low latency for users in different continents. The application needs to synchronize data between regions and route traffic to the nearest region. Which AWS architecture offers best global performance?"
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
          "pt-BR": "Route 53 com geolocation routing + CloudFront + DynamoDB Global Tables + Application Load Balancer em múltiplas regiões",
          "en": "Route 53 with geolocation routing + CloudFront + DynamoDB Global Tables + Application Load Balancer in multiple regions"
        },
        correct: true,
        explanation: {
          "pt-BR": "Route 53 com geolocation routing roteia tráfego para a região mais próxima do usuário. CloudFront cacheia conteúdo estático globalmente em edge locations. DynamoDB Global Tables replica dados entre regiões automaticamente. ALB em múltiplas regiões garante disponibilidade. Esta arquitetura oferece performance global com latência baixa e sincronização automática de dados.",
          "en": "Route 53 with geolocation routing routes traffic to the region closest to the user. CloudFront caches static content globally at edge locations. DynamoDB Global Tables automatically replicates data between regions. ALB in multiple regions ensures availability. This architecture offers global performance with low latency and automatic data synchronization."
        }
      },
      {
        title: {
          "pt-BR": "Apenas CloudFront",
          "en": "Only CloudFront"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudFront cacheia conteúdo estático, mas não roteia tráfego para múltiplas regiões ativas, não sincroniza dados entre regiões, e não oferece aplicação ativa em múltiplas regiões. Para uma aplicação global que precisa estar disponível em múltiplas regiões com sincronização de dados, Route 53, DynamoDB Global Tables e ALB em múltiplas regiões são necessários.",
          "en": "CloudFront caches static content, but doesn't route traffic to multiple active regions, doesn't synchronize data between regions, and doesn't offer active application in multiple regions. For a global application that needs to be available in multiple regions with data synchronization, Route 53, DynamoDB Global Tables and ALB in multiple regions are needed."
        }
      },
      {
        title: {
          "pt-BR": "Apenas Route 53",
          "en": "Only Route 53"
        },
        correct: false,
        explanation: {
          "pt-BR": "Route 53 roteia tráfego, mas sozinho não cacheia conteúdo estático globalmente (CloudFront), não sincroniza dados entre regiões (DynamoDB Global Tables), e não oferece aplicação ativa em múltiplas regiões (ALB). Para performance global, é necessário combinar Route 53 com CloudFront, Global Tables e ALB em múltiplas regiões.",
          "en": "Route 53 routes traffic, but alone doesn't cache static content globally (CloudFront), doesn't synchronize data between regions (DynamoDB Global Tables), and doesn't offer active application in multiple regions (ALB). For global performance, combining Route 53 with CloudFront, Global Tables and ALB in multiple regions is needed."
        }
      },
      {
        title: {
          "pt-BR": "RDS em uma única região",
          "en": "RDS in a single region"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS em uma única região não oferece latência baixa para usuários em outros continentes, não sincroniza dados entre regiões automaticamente, e não oferece disponibilidade global. Para uma aplicação global que precisa estar disponível em múltiplas regiões com baixa latência, é necessário DynamoDB Global Tables ou RDS Cross-Region Read Replica, não RDS em uma única região.",
          "en": "RDS in a single region doesn't offer low latency for users in other continents, doesn't automatically synchronize data between regions, and doesn't offer global availability. For a global application that needs to be available in multiple regions with low latency, DynamoDB Global Tables or RDS Cross-Region Read Replica is needed, not RDS in a single region."
        }
      }
    ],
    explanation: {
      "pt-BR": "Route 53 com geolocation routing direciona usuários para a região mais próxima. CloudFront cacheia conteúdo estático globalmente. DynamoDB Global Tables replica dados entre regiões automaticamente. ALB em múltiplas regiões distribui carga. Apenas CloudFront não resolve latência de APIs dinâmicas. Apenas Route 53 não sincroniza dados. RDS em uma região não oferece latência baixa global.",
      "en": "Route 53 with geolocation routing directs users to nearest region. CloudFront caches static content globally. DynamoDB Global Tables automatically replicates data between regions. ALB in multiple regions distributes load. Only CloudFront doesn't solve latency for dynamic APIs. Only Route 53 doesn't synchronize data. RDS in one region doesn't offer global low latency."
    }
  },
  {
    id: 12,
    title: {
      "pt-BR": "Segurança - Network Segmentation Avançada",
      "en": "Security - Advanced Network Segmentation"
    },
    description: {
      "pt-BR": "Uma empresa precisa isolar ambientes de produção, desenvolvimento e staging em uma conta AWS. Cada ambiente precisa de acesso à internet, mas produção não deve acessar desenvolvimento. A empresa precisa de auditoria completa de tráfego de rede.",
      "en": "A company needs to isolate production, development, and staging environments in one AWS account. Each environment needs internet access, but production shouldn't access development. The company needs complete network traffic auditing."
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
          "pt-BR": "VPCs separadas por ambiente + VPC Flow Logs + Transit Gateway para conectividade + Security Groups com regras restritivas",
          "en": "Separate VPCs per environment + VPC Flow Logs + Transit Gateway for connectivity + Security Groups with restrictive rules"
        },
        correct: true,
        explanation: {
          "pt-BR": "VPCs separadas isolam ambientes completamente (produção não pode acessar desenvolvimento). VPC Flow Logs audita todo tráfego de rede para compliance. Transit Gateway conecta VPCs de forma segura e centralizada permitindo acesso à internet. Security Groups com regras restritivas impedem acesso entre ambientes. Esta é a arquitetura de segmentação mais robusta.",
          "en": "Separate VPCs completely isolate environments (production cannot access development). VPC Flow Logs audits all network traffic for compliance. Transit Gateway connects VPCs securely and centrally allowing internet access. Restrictive Security Groups prevent access between environments. This is the most robust segmentation architecture."
        }
      },
      {
        title: {
          "pt-BR": "Apenas Security Groups",
          "en": "Only Security Groups"
        },
        correct: false,
        explanation: {
          "pt-BR": "Security Groups sozinhos não oferecem isolamento suficiente entre ambientes na mesma VPC: há risco de configuração incorreta, não há auditoria de tráfego (VPC Flow Logs), e não há separação completa de rede. Para isolar produção de desenvolvimento completamente, VPCs separadas são necessárias.",
          "en": "Security Groups alone don't offer sufficient isolation between environments in the same VPC: there's risk of incorrect configuration, no traffic auditing (VPC Flow Logs), and no complete network separation. To completely isolate production from development, separate VPCs are needed."
        }
      },
      {
        title: {
          "pt-BR": "Subnets na mesma VPC",
          "en": "Subnets in same VPC"
        },
        correct: false,
        explanation: {
          "pt-BR": "Subnets na mesma VPC compartilham recursos (VPC endpoints, NAT Gateways, etc.) e não oferecem isolamento completo. Uma configuração incorreta de Security Groups ou NACLs pode permitir acesso entre ambientes. Para isolamento completo e auditoria, VPCs separadas são necessárias.",
          "en": "Subnets in the same VPC share resources (VPC endpoints, NAT Gateways, etc.) and don't offer complete isolation. An incorrect Security Groups or NACLs configuration can allow access between environments. For complete isolation and auditing, separate VPCs are needed."
        }
      },
      {
        title: {
          "pt-BR": "Apenas NACLs",
          "en": "Only NACLs"
        },
        correct: false,
        explanation: {
          "pt-BR": "NACLs sozinhos não oferecem auditoria completa de tráfego (VPC Flow Logs), não oferecem isolamento completo entre ambientes (subnets na mesma VPC), e não oferecem conectividade centralizada (Transit Gateway). Para segmentação de rede completa com auditoria, VPCs separadas com VPC Flow Logs são necessárias.",
          "en": "NACLs alone don't offer complete traffic auditing (VPC Flow Logs), don't offer complete isolation between environments (subnets in same VPC), and don't offer centralized connectivity (Transit Gateway). For complete network segmentation with auditing, separate VPCs with VPC Flow Logs are needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "VPCs separadas isolam ambientes completamente. VPC Flow Logs audita todo tráfego de rede. Transit Gateway conecta VPCs de forma segura e centralizada. Security Groups restritivos impedem acesso entre ambientes. Apenas Security Groups não oferece isolamento suficiente. Subnets na mesma VPC compartilham recursos. Apenas NACLs não oferece auditoria completa.",
      "en": "Separate VPCs completely isolate environments. VPC Flow Logs audits all network traffic. Transit Gateway connects VPCs securely and centrally. Restrictive Security Groups prevent access between environments. Only Security Groups doesn't offer sufficient isolation. Subnets in same VPC share resources. Only NACLs doesn't offer complete auditing."
    }
  },
  {
    id: 13,
    title: {
      "pt-BR": "Performance - Auto Scaling Avançado",
      "en": "Performance - Advanced Auto Scaling"
    },
    description: {
      "pt-BR": "Uma aplicação web tem padrões de tráfego imprevisíveis com picos súbitos. A aplicação precisa escalar rapidamente durante picos e reduzir custos durante períodos de baixo tráfego. A latência deve permanecer baixa mesmo durante escalonamento.",
      "en": "A web application has unpredictable traffic patterns with sudden spikes. The application needs to scale quickly during peaks and reduce costs during low traffic periods. Latency must remain low even during scaling."
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
          "pt-BR": "EC2 Auto Scaling com Predictive Scaling + Target Tracking Policies + Application Load Balancer com connection draining",
          "en": "EC2 Auto Scaling with Predictive Scaling + Target Tracking Policies + Application Load Balancer with connection draining"
        },
        correct: true,
        explanation: {
          "pt-BR": "Predictive Scaling usa machine learning para prever picos e escala proativamente antes que ocorram, mantendo latência baixa. Target Tracking Policies mantém métricas (CPU, latência) dentro de limites. ALB com connection draining permite terminação graciosa de instâncias sem perder conexões. Esta combinação oferece escalonamento inteligente e eficiente.",
          "en": "Predictive Scaling uses machine learning to predict peaks and scales proactively before they occur, keeping latency low. Target Tracking Policies keeps metrics (CPU, latency) within limits. ALB with connection draining allows graceful instance termination without losing connections. This combination offers intelligent and efficient scaling."
        }
      },
      {
        title: {
          "pt-BR": "Apenas instâncias fixas",
          "en": "Only fixed instances"
        },
        correct: false,
        explanation: {
          "pt-BR": "Instâncias fixas não escalam durante picos (causando alta latência), não reduzem custos durante períodos de baixo tráfego (recursos ficam ociosos), e não se adaptam a padrões de tráfego imprevisíveis. Para uma aplicação com picos súbitos, auto-scaling é essencial para manter latência baixa e otimizar custos.",
          "en": "Fixed instances don't scale during peaks (causing high latency), don't reduce costs during low traffic periods (resources remain idle), and don't adapt to unpredictable traffic patterns. For an application with sudden spikes, auto-scaling is essential to keep latency low and optimize costs."
        }
      },
      {
        title: {
          "pt-BR": "Auto Scaling apenas com step scaling",
          "en": "Auto Scaling only with step scaling"
        },
        correct: false,
        explanation: {
          "pt-BR": "Step scaling apenas reage a métricas após picos ocorrerem, não prevê picos futuros. Para padrões de tráfego imprevisíveis com picos súbitos, Predictive Scaling é necessário para escalar proativamente antes dos picos, mantendo latência baixa. Step scaling sozinho pode não escalar rápido o suficiente.",
          "en": "Step scaling only reacts to metrics after peaks occur, doesn't predict future peaks. For unpredictable traffic patterns with sudden spikes, Predictive Scaling is needed to scale proactively before peaks, keeping latency low. Step scaling alone may not scale fast enough."
        }
      },
      {
        title: {
          "pt-BR": "Apenas Classic Load Balancer",
          "en": "Only Classic Load Balancer"
        },
        correct: false,
        explanation: {
          "pt-BR": "Classic Load Balancer não oferece recursos avançados do ALB: não tem connection draining avançado, não oferece roteamento baseado em conteúdo/caminho, não suporta WebSockets eficientemente, e é menos eficiente. ALB oferece melhor performance e recursos para aplicações modernas com auto-scaling.",
          "en": "Classic Load Balancer doesn't offer ALB advanced features: doesn't have advanced connection draining, doesn't offer content/path-based routing, doesn't efficiently support WebSockets, and is less efficient. ALB offers better performance and features for modern applications with auto-scaling."
        }
      }
    ],
    explanation: {
      "pt-BR": "Predictive Scaling prevê picos e escala proativamente. Target Tracking Policies mantém métricas dentro de limites. ALB com connection draining permite terminação graciosa de instâncias. Instâncias fixas não escalam e são caras. Step scaling sozinho não prevê picos. Classic Load Balancer não oferece recursos avançados de ALB.",
      "en": "Predictive Scaling predicts peaks and scales proactively. Target Tracking Policies keeps metrics within limits. ALB with connection draining allows graceful instance termination. Fixed instances don't scale and are expensive. Step scaling alone doesn't predict peaks. Classic Load Balancer doesn't offer ALB advanced features."
    }
  },
  {
    id: 14,
    title: {
      "pt-BR": "Banco de Dados - Multi-Master e Replicação",
      "en": "Database - Multi-Master and Replication"
    },
    description: {
      "pt-BR": "Uma aplicação global precisa de escrita em múltiplas regiões com consistência eventual. O banco de dados precisa tolerar falhas de região inteira e manter disponibilidade. As escritas devem ser distribuídas para reduzir latência.",
      "en": "A global application needs write capability in multiple regions with eventual consistency. The database needs to tolerate entire region failures and maintain availability. Writes must be distributed to reduce latency."
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
          "pt-BR": "DynamoDB Global Tables com replicação automática multi-regional",
          "en": "DynamoDB Global Tables with automatic multi-regional replication"
        },
        correct: true,
        explanation: {
          "pt-BR": "DynamoDB Global Tables oferece escrita em múltiplas regiões com replicação automática, consistência eventual, tolerância a falhas de região inteira, e distribuição de escritas para reduzir latência. Esta é a única solução que permite escrita global distribuída com alta disponibilidade e tolerância a falhas regionais.",
          "en": "DynamoDB Global Tables offers write capability in multiple regions with automatic replication, eventual consistency, tolerance to entire region failures, and write distribution to reduce latency. This is the only solution that allows distributed global writes with high availability and regional failure tolerance."
        }
      },
      {
        title: {
          "pt-BR": "RDS Multi-AZ em uma região",
          "en": "RDS Multi-AZ in one region"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS Multi-AZ apenas em uma região não oferece escrita em múltiplas regiões, não tolera falhas de região inteira, e não distribui escritas globalmente para reduzir latência. Para uma aplicação global que precisa de escrita em múltiplas regiões, DynamoDB Global Tables é necessário.",
          "en": "RDS Multi-AZ only in one region doesn't offer write capability in multiple regions, doesn't tolerate entire region failures, and doesn't distribute writes globally to reduce latency. For a global application that needs write capability in multiple regions, DynamoDB Global Tables is needed."
        }
      },
      {
        title: {
          "pt-BR": "RDS Read Replica em múltiplas regiões",
          "en": "RDS Read Replica in multiple regions"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS Read Replica é apenas para leitura, não permite escrita em múltiplas regiões. Todas as escritas devem ir para a região primária, não distribuindo escritas para reduzir latência. Para escrita global distribuída, DynamoDB Global Tables é necessário, não Read Replicas.",
          "en": "RDS Read Replica is read-only, doesn't allow write capability in multiple regions. All writes must go to the primary region, not distributing writes to reduce latency. For distributed global writes, DynamoDB Global Tables is needed, not Read Replicas."
        }
      },
      {
        title: {
          "pt-BR": "Apenas DynamoDB sem Global Tables",
          "en": "Only DynamoDB without Global Tables"
        },
        correct: false,
        explanation: {
          "pt-BR": "DynamoDB sem Global Tables é apenas em uma região, não oferece escrita em múltiplas regiões, não replica dados automaticamente entre regiões, e não tolera falhas de região inteira. Para escrita global distribuída, Global Tables é necessário para habilitar replicação multi-regional.",
          "en": "DynamoDB without Global Tables is only in one region, doesn't offer write capability in multiple regions, doesn't automatically replicate data between regions, and doesn't tolerate entire region failures. For distributed global writes, Global Tables is needed to enable multi-regional replication."
        }
      }
    ],
    explanation: {
      "pt-BR": "DynamoDB Global Tables oferece replicação automática multi-regional com escrita em múltiplas regiões e consistência eventual. Tolerante a falhas de região. RDS Multi-AZ apenas em uma região não oferece escrita global. RDS Read Replica é apenas leitura. DynamoDB sem Global Tables é apenas em uma região.",
      "en": "DynamoDB Global Tables offers automatic multi-regional replication with write capability in multiple regions and eventual consistency. Tolerant to region failures. RDS Multi-AZ only in one region doesn't offer global writes. RDS Read Replica is read-only. DynamoDB without Global Tables is only in one region."
    }
  },
  {
    id: 15,
    title: {
      "pt-BR": "Arquitetura de Containers - ECS e Kubernetes",
      "en": "Container Architecture - ECS and Kubernetes"
    },
    description: {
      "pt-BR": "Uma empresa precisa executar aplicações containerizadas em escala com alta disponibilidade. A aplicação precisa de auto-scaling baseado em métricas customizadas, service discovery, e integração com serviços AWS. A equipe prefere gerenciamento mínimo.",
      "en": "A company needs to run containerized applications at scale with high availability. The application needs auto-scaling based on custom metrics, service discovery, and integration with AWS services. The team prefers minimal management."
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
          "pt-BR": "Amazon ECS com Fargate + Service Discovery + Auto Scaling baseado em CloudWatch Metrics + Application Load Balancer",
          "en": "Amazon ECS with Fargate + Service Discovery + Auto Scaling based on CloudWatch Metrics + Application Load Balancer"
        },
        correct: true,
        explanation: {
          "pt-BR": "ECS Fargate elimina gerenciamento de servidores (serverless containers). Service Discovery permite serviços se encontrarem automaticamente via DNS. Auto Scaling baseado em CloudWatch Metrics escala baseado em métricas customizadas. ALB distribui tráfego e integra com serviços AWS. Esta combinação oferece containers com gerenciamento mínimo e alta disponibilidade.",
          "en": "ECS Fargate eliminates server management (serverless containers). Service Discovery allows services to find each other automatically via DNS. Auto Scaling based on CloudWatch Metrics scales based on custom metrics. ALB distributes traffic and integrates with AWS services. This combination offers containers with minimal management and high availability."
        }
      },
      {
        title: {
          "pt-BR": "EKS sem gerenciamento",
          "en": "EKS without management"
        },
        correct: false,
        explanation: {
          "pt-BR": "EKS requer mais gerenciamento que ECS Fargate: gerenciamento do cluster Kubernetes, nodes, patches, escalabilidade de nodes, e configuração de networking. Para uma equipe que prefere gerenciamento mínimo, ECS Fargate é mais adequado pois elimina gerenciamento de infraestrutura completamente.",
          "en": "EKS requires more management than ECS Fargate: Kubernetes cluster management, nodes, patches, node scaling, and networking configuration. For a team that prefers minimal management, ECS Fargate is more suitable as it completely eliminates infrastructure management."
        }
      },
      {
        title: {
          "pt-BR": "EC2 com Docker manual",
          "en": "EC2 with manual Docker"
        },
        correct: false,
        explanation: {
          "pt-BR": "EC2 com Docker manual requer muito gerenciamento: provisionamento de instâncias, configuração de Docker, orquestração manual, gerenciamento de escalabilidade, patches, e não oferece service discovery ou integração nativa com serviços AWS. Para containers em escala com gerenciamento mínimo, ECS Fargate é necessário.",
          "en": "EC2 with manual Docker requires much management: instance provisioning, Docker configuration, manual orchestration, scaling management, patches, and doesn't offer service discovery or native integration with AWS services. For containers at scale with minimal management, ECS Fargate is needed."
        }
      },
      {
        title: {
          "pt-BR": "ECS sem Fargate",
          "en": "ECS without Fargate"
        },
        correct: false,
        explanation: {
          "pt-BR": "ECS sem Fargate requer gerenciamento de instâncias EC2: provisionamento, configuração, patches, escalabilidade de instâncias, e monitoramento. Para uma equipe que prefere gerenciamento mínimo, Fargate elimina toda essa sobrecarga, permitindo focar apenas nos containers e aplicações.",
          "en": "ECS without Fargate requires EC2 instance management: provisioning, configuration, patches, instance scaling, and monitoring. For a team that prefers minimal management, Fargate eliminates all this overhead, allowing focus only on containers and applications."
        }
      }
    ],
    explanation: {
      "pt-BR": "ECS Fargate elimina gerenciamento de servidores. Service Discovery permite serviços se encontrarem automaticamente. Auto Scaling baseado em CloudWatch Metrics escala baseado em métricas customizadas. ALB distribui tráfego. EKS requer mais gerenciamento. EC2 com Docker manual requer muito gerenciamento. ECS sem Fargate requer gerenciamento de instâncias.",
      "en": "ECS Fargate eliminates server management. Service Discovery allows services to find each other automatically. Auto Scaling based on CloudWatch Metrics scales based on custom metrics. ALB distributes traffic. EKS requires more management. EC2 with manual Docker requires much management. ECS without Fargate requires instance management."
    }
  },
  {
    id: 16,
    title: {
      "pt-BR": "Backup e Disaster Recovery - Estratégias Avançadas",
      "en": "Backup and Disaster Recovery - Advanced Strategies"
    },
    description: {
      "pt-BR": "Uma aplicação crítica precisa de backup contínuo com RPO de 1 minuto e RTO de 5 minutos. Os dados devem ser replicados para múltiplas regiões e o sistema deve fazer failover automático em caso de falha regional.",
      "en": "A critical application needs continuous backup with RPO of 1 minute and RTO of 5 minutes. Data must be replicated to multiple regions and the system must automatically failover in case of regional failure."
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
          "pt-BR": "RDS Continuous Backups + Cross-Region Automated Backups + Multi-AZ + Route 53 health checks para failover",
          "en": "RDS Continuous Backups + Cross-Region Automated Backups + Multi-AZ + Route 53 health checks for failover"
        },
        correct: true,
        explanation: {
          "pt-BR": "RDS Continuous Backups oferece RPO de 1 minuto através de backups contínuos. Cross-Region Automated Backups replica dados para múltiplas regiões automaticamente. Multi-AZ oferece alta disponibilidade. Route 53 health checks detecta falhas regionais e faz failover automático em 5 minutos. Esta combinação atende RPO de 1 minuto e RTO de 5 minutos.",
          "en": "RDS Continuous Backups offers 1 minute RPO through continuous backups. Cross-Region Automated Backups automatically replicates data to multiple regions. Multi-AZ offers high availability. Route 53 health checks detects regional failures and automatically fails over in 5 minutes. This combination meets 1 minute RPO and 5 minute RTO."
        }
      },
      {
        title: {
          "pt-BR": "Apenas snapshots manuais diários",
          "en": "Only daily manual snapshots"
        },
        correct: false,
        explanation: {
          "pt-BR": "Snapshots manuais diários têm RPO muito alto (até 24 horas de perda de dados) e RTO muito alto (horas para restaurar e configurar). Para uma aplicação crítica que precisa de RPO de 1 minuto e RTO de 5 minutos, snapshots manuais são completamente inadequados. É necessário backups contínuos e failover automático.",
          "en": "Daily manual snapshots have very high RPO (up to 24 hours of data loss) and very high RTO (hours to restore and configure). For a critical application that needs 1 minute RPO and 5 minute RTO, manual snapshots are completely inadequate. Continuous backups and automatic failover are needed."
        }
      },
      {
        title: {
          "pt-BR": "RDS Single-AZ sem backup",
          "en": "RDS Single-AZ without backup"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS Single-AZ sem backup não tem redundância, não tem backup, não replica dados para outras regiões, e não oferece failover. Para uma aplicação crítica que precisa de RPO de 1 minuto e RTO de 5 minutos, é necessário Multi-AZ, backups contínuos, e replicação cross-region.",
          "en": "RDS Single-AZ without backup has no redundancy, no backup, doesn't replicate data to other regions, and doesn't offer failover. For a critical application that needs 1 minute RPO and 5 minute RTO, Multi-AZ, continuous backups, and cross-region replication are needed."
        }
      },
      {
        title: {
          "pt-BR": "Apenas S3 backup",
          "en": "Only S3 backup"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 backup sozinho não oferece RTO de 5 minutos: restaurar de S3 requer tempo para baixar e restaurar dados, configurar instâncias, e não oferece failover automático. Para RTO de 5 minutos, é necessário backups contínuos com replicação cross-region e failover automático com Route 53.",
          "en": "S3 backup alone doesn't offer 5 minute RTO: restoring from S3 requires time to download and restore data, configure instances, and doesn't offer automatic failover. For 5 minute RTO, continuous backups with cross-region replication and automatic failover with Route 53 are needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "RDS Continuous Backups oferece RPO de 1 minuto. Cross-Region Automated Backups replica para múltiplas regiões. Multi-AZ oferece alta disponibilidade. Route 53 health checks detecta falhas e faz failover automático. Snapshots manuais têm RPO muito alto. Single-AZ sem backup não tem redundância. S3 backup sozinho não oferece RTO de 5 minutos.",
      "en": "RDS Continuous Backups offers 1 minute RPO. Cross-Region Automated Backups replicates to multiple regions. Multi-AZ offers high availability. Route 53 health checks detects failures and automatically fails over. Manual snapshots have very high RPO. Single-AZ without backup has no redundancy. S3 backup alone doesn't offer 5 minute RTO."
    }
  },
  {
    id: 17,
    title: {
      "pt-BR": "Arquitetura de Streaming - Kinesis e Analytics",
      "en": "Streaming Architecture - Kinesis and Analytics"
    },
    description: {
      "pt-BR": "Uma aplicação precisa processar 1 milhão de eventos por segundo de IoT devices, aplicar transformações em tempo real, e armazenar resultados para análise. A aplicação precisa de processamento com baixa latência e alta throughput.",
      "en": "An application needs to process 1 million events per second from IoT devices, apply real-time transformations, and store results for analysis. The application needs processing with low latency and high throughput."
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
          "pt-BR": "Kinesis Data Streams + Kinesis Data Firehose + Kinesis Analytics + S3 + Lambda para transformações",
          "en": "Kinesis Data Streams + Kinesis Data Firehose + Kinesis Analytics + S3 + Lambda for transformations"
        },
        correct: true,
        explanation: {
          "pt-BR": "Kinesis Data Streams processa 1 milhão de eventos/segundo com baixa latência e alta throughput. Kinesis Data Firehose carrega dados transformados em S3 automaticamente. Kinesis Analytics analisa streams em tempo real. Lambda aplica transformações. S3 armazena resultados para análise. Esta arquitetura oferece processamento de streaming completo.",
          "en": "Kinesis Data Streams processes 1 million events/second with low latency and high throughput. Kinesis Data Firehose automatically loads transformed data to S3. Kinesis Analytics analyzes streams in real-time. Lambda applies transformations. S3 stores results for analysis. This architecture offers complete streaming processing."
        }
      },
      {
        title: {
          "pt-BR": "Apenas SQS",
          "en": "Only SQS"
        },
        correct: false,
        explanation: {
          "pt-BR": "SQS não escala para 1 milhão de eventos por segundo: tem limite de throughput muito menor que Kinesis Data Streams. Para processar 1 milhão de eventos/segundo de IoT devices com baixa latência, é necessário Kinesis Data Streams que oferece alta throughput e processamento em tempo real.",
          "en": "SQS doesn't scale to 1 million events per second: has much lower throughput limit than Kinesis Data Streams. To process 1 million events/second from IoT devices with low latency, Kinesis Data Streams is needed which offers high throughput and real-time processing."
        }
      },
      {
        title: {
          "pt-BR": "S3 com Lambda triggers",
          "en": "S3 with Lambda triggers"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 com Lambda triggers não processa eventos em tempo real: S3 é armazenamento, não processa streams, e Lambda triggers são para objetos já armazenados, não para streaming de eventos em tempo real. Para processar 1 milhão de eventos/segundo em tempo real, é necessário Kinesis Data Streams.",
          "en": "S3 with Lambda triggers doesn't process events in real-time: S3 is storage, doesn't process streams, and Lambda triggers are for already stored objects, not for real-time event streaming. To process 1 million events/second in real-time, Kinesis Data Streams is needed."
        }
      },
      {
        title: {
          "pt-BR": "DynamoDB Streams",
          "en": "DynamoDB Streams"
        },
        correct: false,
        explanation: {
          "pt-BR": "DynamoDB Streams processa mudanças em tabelas DynamoDB, não processa eventos diretamente de IoT devices. DynamoDB Streams não escala para 1 milhão de eventos/segundo e não é otimizado para processamento de streaming de IoT. Para processar eventos de IoT devices em alta escala, Kinesis Data Streams é necessário.",
          "en": "DynamoDB Streams processes changes in DynamoDB tables, doesn't process events directly from IoT devices. DynamoDB Streams doesn't scale to 1 million events/second and isn't optimized for IoT streaming processing. To process IoT device events at high scale, Kinesis Data Streams is needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "Kinesis Data Streams processa milhões de eventos por segundo com baixa latência. Kinesis Data Firehose carrega dados em S3 automaticamente. Kinesis Analytics analisa streams em tempo real. Lambda transforma dados. SQS não escala para 1 milhão/segundo. S3 com Lambda triggers não processa em tempo real. DynamoDB Streams não processa IoT diretamente.",
      "en": "Kinesis Data Streams processes millions of events per second with low latency. Kinesis Data Firehose automatically loads data to S3. Kinesis Analytics analyzes streams in real-time. Lambda transforms data. SQS doesn't scale to 1 million/second. S3 with Lambda triggers doesn't process in real-time. DynamoDB Streams doesn't process IoT directly."
    }
  },
  {
    id: 18,
    title: {
      "pt-BR": "Segurança - Encryption e Key Management",
      "en": "Security - Encryption and Key Management"
    },
    description: {
      "pt-BR": "Uma aplicação financeira precisa criptografar todos os dados em repouso e em trânsito. As chaves de criptografia precisam ser rotacionadas automaticamente e o acesso deve ser auditado. A aplicação precisa de compliance com regulamentações financeiras.",
      "en": "A financial application needs to encrypt all data at rest and in transit. Encryption keys need to be rotated automatically and access must be audited. The application needs compliance with financial regulations."
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
          "pt-BR": "AWS KMS com rotação automática + CloudTrail para auditoria + TLS/SSL para dados em trânsito + encryption at rest habilitado em todos os serviços",
          "en": "AWS KMS with automatic rotation + CloudTrail for auditing + TLS/SSL for data in transit + encryption at rest enabled on all services"
        },
        correct: true,
        explanation: {
          "pt-BR": "KMS gerencia chaves centralizadamente com rotação automática para compliance. CloudTrail audita todos os acessos a chaves para compliance financeiro. TLS/SSL criptografa dados em trânsito. Encryption at rest em todos os serviços (RDS, S3, DynamoDB, EBS) protege dados armazenados. Esta combinação oferece segurança completa e compliance.",
          "en": "KMS manages keys centrally with automatic rotation for compliance. CloudTrail audits all key access for financial compliance. TLS/SSL encrypts data in transit. Encryption at rest on all services (RDS, S3, DynamoDB, EBS) protects stored data. This combination offers complete security and compliance."
        }
      },
      {
        title: {
          "pt-BR": "Apenas KMS sem rotação",
          "en": "Only KMS without rotation"
        },
        correct: false,
        explanation: {
          "pt-BR": "KMS sem rotação automática não atende compliance com regulamentações financeiras que exigem rotação periódica de chaves. Além disso, falta auditoria (CloudTrail), proteção de dados em trânsito (TLS/SSL), e encryption at rest em todos os serviços. Para uma aplicação financeira, rotação automática e auditoria são essenciais.",
          "en": "KMS without automatic rotation doesn't meet compliance with financial regulations that require periodic key rotation. Additionally, lacks auditing (CloudTrail), data in transit protection (TLS/SSL), and encryption at rest on all services. For a financial application, automatic rotation and auditing are essential."
        }
      },
      {
        title: {
          "pt-BR": "Chaves hardcoded no código",
          "en": "Hardcoded keys in code"
        },
        correct: false,
        explanation: {
          "pt-BR": "Chaves hardcoded no código são extremamente inseguras: ficam expostas no repositório Git, não podem ser rotacionadas facilmente, não há auditoria de acesso, e viola todas as práticas de segurança e compliance. Para uma aplicação financeira, chaves devem ser gerenciadas por KMS com rotação automática.",
          "en": "Hardcoded keys in code are extremely insecure: exposed in Git repository, cannot be easily rotated, no access auditing, and violates all security and compliance practices. For a financial application, keys must be managed by KMS with automatic rotation."
        }
      },
      {
        title: {
          "pt-BR": "Apenas SSL/TLS",
          "en": "Only SSL/TLS"
        },
        correct: false,
        explanation: {
          "pt-BR": "SSL/TLS protege dados em trânsito, mas não protege dados em repouso (armazenados em RDS, S3, DynamoDB, etc.), não gerencia chaves de criptografia, não oferece rotação de chaves, e não oferece auditoria. Para uma aplicação financeira, é necessário encryption at rest, gerenciamento de chaves (KMS), e auditoria (CloudTrail).",
          "en": "SSL/TLS protects data in transit, but doesn't protect data at rest (stored in RDS, S3, DynamoDB, etc.), doesn't manage encryption keys, doesn't offer key rotation, and doesn't offer auditing. For a financial application, encryption at rest, key management (KMS), and auditing (CloudTrail) are needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "KMS gerencia chaves centralizadamente com rotação automática. CloudTrail audita todos os acessos a chaves. TLS/SSL criptografa dados em trânsito. Encryption at rest em todos os serviços protege dados armazenados. KMS sem rotação não atende compliance. Chaves hardcoded são inseguras. Apenas SSL/TLS não protege dados em repouso.",
      "en": "KMS manages keys centrally with automatic rotation. CloudTrail audits all key access. TLS/SSL encrypts data in transit. Encryption at rest on all services protects stored data. KMS without rotation doesn't meet compliance. Hardcoded keys are insecure. Only SSL/TLS doesn't protect data at rest."
    }
  },
  {
    id: 19,
    title: {
      "pt-BR": "Arquitetura de Eventos - EventBridge e SQS",
      "en": "Event Architecture - EventBridge and SQS"
    },
    description: {
      "pt-BR": "Uma aplicação de microserviços precisa desacoplar componentes e permitir que múltiplos serviços reajam a eventos. Alguns eventos precisam de processamento garantido, outros são fire-and-forget. A aplicação precisa de roteamento de eventos baseado em regras.",
      "en": "A microservices application needs to decouple components and allow multiple services to react to events. Some events need guaranteed processing, others are fire-and-forget. The application needs event routing based on rules."
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
          "pt-BR": "EventBridge para roteamento de eventos + SQS para processamento garantido + Dead Letter Queues para falhas",
          "en": "EventBridge for event routing + SQS for guaranteed processing + Dead Letter Queues for failures"
        },
        correct: true,
        explanation: {
          "pt-BR": "EventBridge roteia eventos baseado em regras para múltiplos serviços (fire-and-forget). SQS garante processamento de eventos críticos com retry automático. Dead Letter Queues captura eventos que falharam após múltiplas tentativas. Esta combinação oferece desacoplamento completo: roteamento de eventos (EventBridge) e processamento garantido (SQS).",
          "en": "EventBridge routes events based on rules to multiple services (fire-and-forget). SQS guarantees processing of critical events with automatic retry. Dead Letter Queues captures events that failed after multiple attempts. This combination offers complete decoupling: event routing (EventBridge) and guaranteed processing (SQS)."
        }
      },
      {
        title: {
          "pt-BR": "Apenas SNS",
          "en": "Only SNS"
        },
        correct: false,
        explanation: {
          "pt-BR": "SNS é pub/sub para notificações, mas não oferece roteamento baseado em regras complexas (EventBridge), não garante processamento de eventos críticos da mesma forma que SQS, e não oferece Dead Letter Queues. Para uma aplicação que precisa de roteamento de eventos e processamento garantido, EventBridge e SQS são necessários.",
          "en": "SNS is pub/sub for notifications, but doesn't offer complex rule-based routing (EventBridge), doesn't guarantee processing of critical events the same way SQS does, and doesn't offer Dead Letter Queues. For an application that needs event routing and guaranteed processing, EventBridge and SQS are needed."
        }
      },
      {
        title: {
          "pt-BR": "Chamadas HTTP diretas",
          "en": "Direct HTTP calls"
        },
        correct: false,
        explanation: {
          "pt-BR": "Chamadas HTTP diretas acoplam serviços fortemente: se um serviço falhar, todos os serviços que dependem dele falham, não há desacoplamento, não há roteamento de eventos baseado em regras, e não há processamento garantido. Para uma arquitetura de microserviços desacoplada, EventBridge e SQS são necessários.",
          "en": "Direct HTTP calls tightly couple services: if a service fails, all services that depend on it fail, there's no decoupling, no rule-based event routing, and no guaranteed processing. For a decoupled microservices architecture, EventBridge and SQS are needed."
        }
      },
      {
        title: {
          "pt-BR": "Apenas SQS",
          "en": "Only SQS"
        },
        correct: false,
        explanation: {
          "pt-BR": "SQS garante processamento de eventos, mas não oferece roteamento de eventos baseado em regras complexas (EventBridge), não permite que múltiplos serviços reajam ao mesmo evento facilmente, e não oferece roteamento fire-and-forget eficiente. Para roteamento de eventos, EventBridge é necessário.",
          "en": "SQS guarantees event processing, but doesn't offer complex rule-based event routing (EventBridge), doesn't allow multiple services to react to the same event easily, and doesn't offer efficient fire-and-forget routing. For event routing, EventBridge is needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "EventBridge roteia eventos baseado em regras complexas permitindo múltiplos consumidores. SQS garante processamento de eventos críticos. DLQ captura eventos que falharam. SNS não oferece roteamento baseado em regras complexas. Chamadas HTTP diretas acoplam serviços. Apenas SQS não oferece roteamento de eventos.",
      "en": "EventBridge routes events based on complex rules allowing multiple consumers. SQS guarantees processing of critical events. DLQ captures failed events. SNS doesn't offer routing based on complex rules. Direct HTTP calls couple services. Only SQS doesn't offer event routing."
    }
  },
  {
    id: 20,
    title: {
      "pt-BR": "Arquitetura de Observabilidade - Logs, Métricas e Traces",
      "en": "Observability Architecture - Logs, Metrics and Traces"
    },
    description: {
      "pt-BR": "Uma aplicação distribuída complexa precisa de observabilidade completa: logs centralizados, métricas de performance, traces distribuídos, e alertas proativos. A equipe precisa identificar rapidamente problemas e entender o impacto no negócio.",
      "en": "A complex distributed application needs complete observability: centralized logs, performance metrics, distributed traces, and proactive alerts. The team needs to quickly identify problems and understand business impact."
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
          "pt-BR": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Alarms + CloudWatch Dashboards + CloudWatch Insights",
          "en": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Alarms + CloudWatch Dashboards + CloudWatch Insights"
        },
        correct: true,
        explanation: {
          "pt-BR": "CloudWatch Logs centraliza logs de todos os serviços. CloudWatch Metrics rastreia métricas de performance. X-Ray rastreia requisições distribuídas mostrando latência de cada componente. Alarms alerta proativamente sobre problemas. Dashboards visualiza métricas em tempo real. Insights permite queries complexas em logs. Esta combinação oferece observabilidade completa (logs, métricas, traces, alertas).",
          "en": "CloudWatch Logs centralizes logs from all services. CloudWatch Metrics tracks performance metrics. X-Ray traces distributed requests showing latency of each component. Alarms proactively alerts about problems. Dashboards visualizes metrics in real-time. Insights allows complex queries on logs. This combination offers complete observability (logs, metrics, traces, alerts)."
        }
      },
      {
        title: {
          "pt-BR": "Apenas console.log",
          "en": "Only console.log"
        },
        correct: false,
        explanation: {
          "pt-BR": "Console.log não oferece observabilidade estruturada: logs não são centralizados, não há métricas, não há traces distribuídos, não há alertas, não há dashboards, e não há queries complexas. Para uma aplicação distribuída complexa, é necessário observabilidade completa com CloudWatch e X-Ray.",
          "en": "Console.log doesn't offer structured observability: logs aren't centralized, no metrics, no distributed traces, no alerts, no dashboards, and no complex queries. For a complex distributed application, complete observability with CloudWatch and X-Ray is needed."
        }
      },
      {
        title: {
          "pt-BR": "Apenas CloudWatch Logs",
          "en": "Only CloudWatch Logs"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudWatch Logs sozinho não mostra traces distribuídos (X-Ray), não oferece métricas de performance (CloudWatch Metrics), não oferece alertas proativos (CloudWatch Alarms), e não oferece visualização em tempo real (Dashboards). Para observabilidade completa, é necessário combinar Logs com Metrics, X-Ray, Alarms e Dashboards.",
          "en": "CloudWatch Logs alone doesn't show distributed traces (X-Ray), doesn't offer performance metrics (CloudWatch Metrics), doesn't offer proactive alerts (CloudWatch Alarms), and doesn't offer real-time visualization (Dashboards). For complete observability, combining Logs with Metrics, X-Ray, Alarms and Dashboards is needed."
        }
      },
      {
        title: {
          "pt-BR": "Apenas X-Ray",
          "en": "Only X-Ray"
        },
        correct: false,
        explanation: {
          "pt-BR": "X-Ray mostra traces distribuídos, mas sozinho não oferece logs centralizados (CloudWatch Logs), não oferece métricas de performance (CloudWatch Metrics), não oferece alertas proativos (CloudWatch Alarms), e não oferece queries complexas em logs (CloudWatch Insights). Para observabilidade completa, é necessário combinar X-Ray com CloudWatch.",
          "en": "X-Ray shows distributed traces, but alone doesn't offer centralized logs (CloudWatch Logs), doesn't offer performance metrics (CloudWatch Metrics), doesn't offer proactive alerts (CloudWatch Alarms), and doesn't offer complex queries on logs (CloudWatch Insights). For complete observability, combining X-Ray with CloudWatch is needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "CloudWatch Logs centraliza logs de todos os serviços. CloudWatch Metrics rastreia métricas de performance. X-Ray rastreia requisições distribuídas. Alarms alerta proativamente sobre problemas. Dashboards visualiza métricas em tempo real. Insights permite queries complexas em logs. Console.log não oferece observabilidade estruturada. Apenas Logs não mostra traces. Apenas X-Ray não mostra métricas.",
      "en": "CloudWatch Logs centralizes logs from all services. CloudWatch Metrics tracks performance metrics. X-Ray traces distributed requests. Alarms proactively alerts about problems. Dashboards visualizes metrics in real-time. Insights allows complex queries on logs. Console.log doesn't offer structured observability. Only Logs doesn't show traces. Only X-Ray doesn't show metrics."
    }
  }
];



