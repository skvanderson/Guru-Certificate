export const cloudPractitionerQuestions = [
  {
    id: 1,
    title: {
      "pt-BR": "Fundamentos AWS - Modelo de responsabilidade compartilhada",
      "en": "AWS Fundamentals - Shared Responsibility Model"
    },
    description: {
      "pt-BR": "Uma equipe vai migrar um banco para o Amazon RDS. Qual responsabilidade continua sendo da AWS, e não do cliente?",
      "en": "A team is migrating a database to Amazon RDS. Which responsibility remains with AWS rather than the customer?"
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
          "pt-BR": "Gerenciamento da infraestrutura física do data center",
          "en": "Managing the physical data center infrastructure"
        },
        correct: true,
        explanation: {
          "pt-BR": "A AWS é responsável pela segurança da nuvem, incluindo instalações físicas, hardware, rede e equipamentos dos data centers. O cliente cuida da segurança na nuvem.",
          "en": "AWS is responsible for security of the cloud, including physical facilities, hardware, networking, and data center equipment. The customer handles security in the cloud."
        }
      },
      {
        title: {
          "pt-BR": "Aplicação de patches no sistema operacional do banco",
          "en": "Applying operating system patches to the database server"
        },
        correct: false,
        explanation: {
          "pt-BR": "Em RDS, o cliente continua responsável por aspectos da configuração da aplicação e pelos dados, mas patches do sistema operacional não são a responsabilidade da AWS nesse modelo de forma geral.",
          "en": "With RDS, the customer remains responsible for application configuration and data, but operating system patching is not generally AWS's responsibility in this model."
        }
      },
      {
        title: {
          "pt-BR": "Definição de regras de acesso ao banco",
          "en": "Defining database access rules"
        },
        correct: false,
        explanation: {
          "pt-BR": "Controle de acesso e configuração de rede continuam sob responsabilidade do cliente, que deve aplicar o princípio do menor privilégio.",
          "en": "Access control and network configuration remain the customer's responsibility, and the principle of least privilege should be applied."
        }
      },
      {
        title: {
          "pt-BR": "Validação de backups e testes de recuperação",
          "en": "Validating backups and recovery tests"
        },
        correct: false,
        explanation: {
          "pt-BR": "A AWS fornece os recursos, mas o cliente precisa definir a estratégia, validar os backups e testar a recuperação de acordo com seus requisitos.",
          "en": "AWS provides the capabilities, but the customer must define the strategy, validate backups, and test recovery according to their requirements."
        }
      }
    ],
    explanation: {
      "pt-BR": "No modelo de responsabilidade compartilhada, a AWS cuida da infraestrutura física e dos componentes que sustentam a nuvem. O cliente administra dados, permissões, configurações e controles dentro da conta.",
      "en": "In the shared responsibility model, AWS handles the physical infrastructure and the components that sustain the cloud. The customer manages data, permissions, configurations, and controls within the account."
    }
  },
  {
    id: 2,
    title: {
      "pt-BR": "Economia da nuvem - Compromissos e elasticidade",
      "en": "Cloud Economics - Commitments and Elasticity"
    },
    description: {
      "pt-BR": "Uma empresa mantém uma aplicação 24/7 com consumo previsível ao longo do ano, mas quer reduzir custos sem perder a capacidade de crescer quando houver aumento de demanda. Qual combinação é mais adequada?",
      "en": "A company runs a 24/7 application with predictable year-round usage, but wants to reduce costs without losing the ability to scale up when demand increases. Which combination is most appropriate?"
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
          "pt-BR": "Usar instâncias On-Demand para todo o consumo",
          "en": "Use On-Demand instances for all usage"
        },
        correct: false,
        explanation: {
          "pt-BR": "On-Demand oferece flexibilidade, mas normalmente não é a opção mais econômica para uma carga estável e previsível ao longo do tempo.",
          "en": "On-Demand offers flexibility, but it is usually not the most cost-effective option for a stable and predictable workload over time."
        }
      },
      {
        title: {
          "pt-BR": "Usar Savings Plans para a carga base e Auto Scaling para variações de demanda",
          "en": "Use Savings Plans for the baseline workload and Auto Scaling for demand spikes"
        },
        correct: true,
        explanation: {
          "pt-BR": "Savings Plans reduzem o custo do consumo previsível, enquanto Auto Scaling ajusta capacidade para picos sem manter recursos ociosos o tempo todo.",
          "en": "Savings Plans reduce the cost of predictable usage, while Auto Scaling adjusts capacity for spikes without keeping idle resources running all the time."
        }
      },
      {
        title: {
          "pt-BR": "Usar Dedicated Hosts para garantir economia",
          "en": "Use Dedicated Hosts to guarantee savings"
        },
        correct: false,
        explanation: {
          "pt-BR": "Dedicated Hosts são voltados a requisitos específicos de licenciamento ou isolamento, e não são a melhor escolha para reduzir custo nessa situação.",
          "en": "Dedicated Hosts are meant for specific licensing or isolation requirements and are not the best choice for reducing cost in this scenario."
        }
      },
      {
        title: {
          "pt-BR": "Usar somente Spot Instances para toda a aplicação",
          "en": "Use only Spot Instances for the entire application"
        },
        correct: false,
        explanation: {
          "pt-BR": "Spot Instances são baratas, mas podem ser interrompidas. Para uma aplicação contínua, usar apenas Spot aumenta o risco de indisponibilidade.",
          "en": "Spot Instances are inexpensive, but they can be interrupted. For a continuous application, using only Spot increases availability risk."
        }
      }
    ],
    explanation: {
      "pt-BR": "Para consumo previsível, Savings Plans ajudam a reduzir custo sem comprometer flexibilidade. Auto Scaling complementa a estratégia ao adaptar capacidade aos picos de uso.",
      "en": "For predictable usage, Savings Plans help reduce cost without sacrificing flexibility. Auto Scaling complements the strategy by adapting capacity to demand spikes."
    }
  },
  {
    id: 3,
    title: {
      "pt-BR": "IAM - Princípio do menor privilégio",
      "en": "IAM - Least Privilege Principle"
    },
    description: {
      "pt-BR": "Uma equipe precisa acessar apenas buckets S3 específicos do projeto, sem abrir permissão para outros serviços ou contas. Qual abordagem atende melhor ao cenário?",
      "en": "A team needs access to only specific project S3 buckets, without granting permission to other services or accounts. Which approach best fits the scenario?"
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
          "pt-BR": "Criar usuários com permissões administrativas",
          "en": "Create users with administrative permissions"
        },
        correct: false,
        explanation: {
          "pt-BR": "Permissões administrativas ampliam demais o acesso e violam o princípio do menor privilégio.",
          "en": "Administrative permissions grant far too much access and violate the principle of least privilege."
        }
      },
      {
        title: {
          "pt-BR": "Compartilhar a credencial root da conta",
          "en": "Share the account root credentials"
        },
        correct: false,
        explanation: {
          "pt-BR": "Credenciais root nunca devem ser compartilhadas. Elas dão controle total e dificultam rastreabilidade e revogação de acesso.",
          "en": "Root credentials should never be shared. They provide full control and make access tracing and revocation difficult."
        }
      },
      {
        title: {
          "pt-BR": "Aplicar políticas IAM específicas com permissões mínimas",
          "en": "Apply specific IAM policies with minimum permissions"
        },
        correct: true,
        explanation: {
          "pt-BR": "Políticas IAM específicas permitem conceder apenas as ações e os recursos necessários, reduzindo risco e seguindo a melhor prática de segurança.",
          "en": "Specific IAM policies let you grant only the required actions and resources, reducing risk and following security best practice."
        }
      },
      {
        title: {
          "pt-BR": "Usar grupos IAM sem políticas associadas",
          "en": "Use IAM groups without attached policies"
        },
        correct: false,
        explanation: {
          "pt-BR": "Grupos sozinhos não concedem acesso. É preciso associar políticas que definam exatamente o que pode ser feito.",
          "en": "Groups alone do not grant access. Policies must be attached to define exactly what can be done."
        }
      }
    ],
    explanation: {
      "pt-BR": "O princípio do menor privilégio é a base do IAM bem configurado. Ele limita cada identidade ao mínimo necessário para executar sua função.",
      "en": "The least privilege principle is the foundation of well-configured IAM. It limits each identity to the minimum needed to perform its function."
    }
  },
  {
    id: 4,
    title: {
      "pt-BR": "Computação - Serverless para picos imprevisíveis",
      "en": "Compute - Serverless for Unpredictable Spikes"
    },
    description: {
      "pt-BR": "Uma API recebe tráfego imprevisível em campanhas e precisa escalar automaticamente, sem gerenciamento de servidores. Qual serviço é o mais indicado?",
      "en": "An API receives unpredictable traffic during campaigns and must scale automatically without server management. Which service is best suited?"
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
          "pt-BR": "Amazon EC2 com Auto Scaling",
          "en": "Amazon EC2 with Auto Scaling"
        },
        correct: false,
        explanation: {
          "pt-BR": "Auto Scaling ajuda na elasticidade, mas ainda há gerenciamento de sistema operacional, capacidade e configuração das instâncias.",
          "en": "Auto Scaling helps with elasticity, but you still manage operating systems, capacity, and instance configuration."
        }
      },
      {
        title: {
          "pt-BR": "Amazon ECS em instâncias gerenciadas",
          "en": "Amazon ECS on managed instances"
        },
        correct: false,
        explanation: {
          "pt-BR": "ECS melhora a orquestração de containers, porém ainda exige gerenciamento de infraestrutura subjacente.",
          "en": "ECS improves container orchestration, but it still requires management of the underlying infrastructure."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Lightsail",
          "en": "Amazon Lightsail"
        },
        correct: false,
        explanation: {
          "pt-BR": "Lightsail é simples de usar, mas não é a melhor resposta para autoescalabilidade serverless em cenários de picos imprevisíveis.",
          "en": "Lightsail is easy to use, but it is not the best answer for serverless auto scaling in unpredictable spike scenarios."
        }
      },
      {
        title: {
          "pt-BR": "AWS Lambda com Amazon API Gateway",
          "en": "AWS Lambda with Amazon API Gateway"
        },
        correct: true,
        explanation: {
          "pt-BR": "Lambda executa código sob demanda sem provisionar servidores, e o API Gateway expõe a API com integração gerenciada e escala automática.",
          "en": "Lambda runs code on demand without provisioning servers, and API Gateway exposes the API with managed integration and automatic scaling."
        }
      }
    ],
    explanation: {
      "pt-BR": "Lambda é a opção mais aderente quando o foco é escalar automaticamente sem administrar servidores. API Gateway complementa o cenário para exposição de endpoints HTTP.",
      "en": "Lambda is the best fit when the goal is automatic scaling without managing servers. API Gateway complements the scenario for HTTP endpoint exposure."
    }
  },
  {
    id: 5,
    title: {
      "pt-BR": "Armazenamento - Acesso imprevisível aos objetos",
      "en": "Storage - Unpredictable Object Access"
    },
    description: {
      "pt-BR": "A equipe armazena documentos por meses, mas o padrão de acesso muda com frequência e não vale a pena mover objetos manualmente entre classes de armazenamento. Qual classe S3 é mais apropriada?",
      "en": "The team stores documents for months, but access patterns change frequently and it is not worth moving objects manually between storage classes. Which S3 class is most appropriate?"
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
          "pt-BR": "S3 Intelligent-Tiering",
          "en": "S3 Intelligent-Tiering"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Intelligent-Tiering move objetos automaticamente entre camadas de acesso frequente e infrequente, reduzindo custo sem exigir intervenção manual.",
          "en": "Intelligent-Tiering automatically moves objects between frequent and infrequent access tiers, reducing cost without manual intervention."
        }
      },
      {
        title: {
          "pt-BR": "S3 Standard",
          "en": "S3 Standard"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 Standard é excelente para acesso frequente, mas pode custar mais do que o necessário quando os padrões de acesso são imprevisíveis.",
          "en": "S3 Standard is great for frequent access, but it can cost more than necessary when access patterns are unpredictable."
        }
      },
      {
        title: {
          "pt-BR": "S3 Glacier Flexible Retrieval",
          "en": "S3 Glacier Flexible Retrieval"
        },
        correct: false,
        explanation: {
          "pt-BR": "Glacier é voltado a arquivamento e recuperação menos frequente, não ao ajuste dinâmico de classes conforme o uso muda.",
          "en": "Glacier is intended for archiving and infrequent retrieval, not for dynamic class adjustment as usage changes."
        }
      },
      {
        title: {
          "pt-BR": "S3 One Zone-Infrequent Access",
          "en": "S3 One Zone-Infrequent Access"
        },
        correct: false,
        explanation: {
          "pt-BR": "Essa classe reduz custo, mas tem menor resiliência por armazenar os dados em uma única zona de disponibilidade.",
          "en": "This class reduces cost, but it has lower resilience because data is stored in a single availability zone."
        }
      }
    ],
    explanation: {
      "pt-BR": "S3 Intelligent-Tiering é a melhor escolha quando o acesso é imprevisível e o objetivo é otimizar custo automaticamente.",
      "en": "S3 Intelligent-Tiering is the best choice when access is unpredictable and the goal is automatic cost optimization."
    }
  },
  {
    id: 6,
    title: {
      "pt-BR": "Banco de dados - Alta disponibilidade regional",
      "en": "Databases - Regional High Availability"
    },
    description: {
      "pt-BR": "Um sistema financeiro relacional não pode parar se uma zona de disponibilidade ficar indisponível. Qual configuração do Amazon RDS é a mais adequada?",
      "en": "A relational financial system cannot stop if one Availability Zone becomes unavailable. Which Amazon RDS configuration is most suitable?"
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
          "pt-BR": "Read Replica",
          "en": "Read Replica"
        },
        correct: false,
        explanation: {
          "pt-BR": "Read Replicas ajudam em leitura e distribuição de carga, mas não são o mecanismo principal de alta disponibilidade automática em caso de falha de AZ.",
          "en": "Read Replicas help with read scaling and load distribution, but they are not the primary automatic high-availability mechanism for AZ failure."
        }
      },
      {
        title: {
          "pt-BR": "RDS Multi-AZ",
          "en": "RDS Multi-AZ"
        },
        correct: true,
        explanation: {
          "pt-BR": "Multi-AZ mantém uma réplica síncrona em outra zona e permite failover automático, o que atende o requisito de disponibilidade.",
          "en": "Multi-AZ keeps a synchronous replica in another AZ and enables automatic failover, which meets the availability requirement."
        }
      },
      {
        title: {
          "pt-BR": "Instância RDS Single-AZ",
          "en": "Single-AZ RDS instance"
        },
        correct: false,
        explanation: {
          "pt-BR": "Single-AZ não oferece redundância entre zonas, portanto não é ideal para sistemas que não podem parar com falha de AZ.",
          "en": "Single-AZ provides no cross-AZ redundancy, so it is not ideal for systems that cannot stop during an AZ failure."
        }
      },
      {
        title: {
          "pt-BR": "Amazon DynamoDB Global Tables",
          "en": "Amazon DynamoDB Global Tables"
        },
        correct: false,
        explanation: {
          "pt-BR": "DynamoDB é um banco NoSQL global, mas não atende ao requisito de banco relacional deste cenário.",
          "en": "DynamoDB is a global NoSQL database, but it does not satisfy the relational database requirement of this scenario."
        }
      }
    ],
    explanation: {
      "pt-BR": "RDS Multi-AZ é a melhor opção para continuidade de uma base relacional quando há falha de uma zona de disponibilidade.",
      "en": "RDS Multi-AZ is the best option for keeping a relational database available when an Availability Zone fails."
    }
  },
  {
    id: 7,
    title: {
      "pt-BR": "Entrega global de conteúdo - Baixa latência",
      "en": "Global Content Delivery - Low Latency"
    },
    description: {
      "pt-BR": "Uma aplicação web com imagens, CSS e JavaScript será acessada por usuários em várias regiões do mundo. A empresa quer menor latência para conteúdo estático. Qual serviço atende melhor?",
      "en": "A web application with images, CSS, and JavaScript will be accessed by users across multiple regions of the world. The company wants lower latency for static content. Which service fits best?"
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
          "pt-BR": "Amazon Route 53",
          "en": "Amazon Route 53"
        },
        correct: false,
        explanation: {
          "pt-BR": "Route 53 é DNS e roteamento, mas não faz cache de conteúdo estático em borda para reduzir latência global.",
          "en": "Route 53 is DNS and routing, but it does not cache static content at the edge to reduce global latency."
        }
      },
      {
        title: {
          "pt-BR": "Elastic Load Balancing",
          "en": "Elastic Load Balancing"
        },
        correct: false,
        explanation: {
          "pt-BR": "ELB distribui tráfego entre alvos, mas não entrega conteúdo globalmente com cache em edge locations.",
          "en": "ELB distributes traffic across targets, but it does not deliver content globally with edge caching."
        }
      },
      {
        title: {
          "pt-BR": "Amazon CloudFront",
          "en": "Amazon CloudFront"
        },
        correct: true,
        explanation: {
          "pt-BR": "CloudFront é uma CDN que distribui conteúdo em edge locations, reduzindo latência e melhorando a experiência para usuários em qualquer região.",
          "en": "CloudFront is a CDN that distributes content through edge locations, reducing latency and improving the experience for users in any region."
        }
      },
      {
        title: {
          "pt-BR": "Amazon EFS",
          "en": "Amazon EFS"
        },
        correct: false,
        explanation: {
          "pt-BR": "EFS é um sistema de arquivos compartilhado, não um serviço de entrega global de conteúdo estático.",
          "en": "EFS is a shared file system, not a global static content delivery service."
        }
      }
    ],
    explanation: {
      "pt-BR": "CloudFront é a opção correta quando o foco é reduzir latência de conteúdo estático por meio de cache na borda.",
      "en": "CloudFront is the right choice when the goal is to reduce static content latency through edge caching."
    }
  },
  {
    id: 8,
    title: {
      "pt-BR": "Banco de dados - Escala horizontal e baixa latência",
      "en": "Databases - Horizontal Scale and Low Latency"
    },
    description: {
      "pt-BR": "Uma aplicação precisa armazenar dados chave-valor com latência de milissegundos, escala automática e esquema flexível. Qual serviço é o mais indicado?",
      "en": "An application needs to store key-value data with millisecond latency, automatic scaling, and flexible schema. Which service is most suitable?"
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
          "pt-BR": "Amazon RDS",
          "en": "Amazon RDS"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS é um banco relacional e não é a escolha principal para chave-valor com escala elástica e esquema flexível.",
          "en": "RDS is a relational database and is not the primary choice for key-value workloads with elastic scale and flexible schema."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Aurora",
          "en": "Amazon Aurora"
        },
        correct: false,
        explanation: {
          "pt-BR": "Aurora é relacional e muito poderoso, mas o cenário pede uma solução NoSQL de chave-valor.",
          "en": "Aurora is relational and very powerful, but the scenario calls for a NoSQL key-value solution."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Redshift",
          "en": "Amazon Redshift"
        },
        correct: false,
        explanation: {
          "pt-BR": "Redshift é um data warehouse analítico, não um banco de baixa latência para operação online.",
          "en": "Redshift is an analytical data warehouse, not a low-latency online database."
        }
      },
      {
        title: {
          "pt-BR": "Amazon DynamoDB",
          "en": "Amazon DynamoDB"
        },
        correct: true,
        explanation: {
          "pt-BR": "DynamoDB entrega baixa latência, escalabilidade automática e modelo flexível para aplicações modernas de alta demanda.",
          "en": "DynamoDB delivers low latency, automatic scaling, and a flexible model for modern high-demand applications."
        }
      }
    ],
    explanation: {
      "pt-BR": "DynamoDB é o serviço mais apropriado quando o objetivo é baixa latência com escala horizontal sem gerenciamento de servidores.",
      "en": "DynamoDB is the most appropriate service when the goal is low latency with horizontal scaling and no server management."
    }
  },
  {
    id: 9,
    title: {
      "pt-BR": "Mensageria - Desacoplamento e confiabilidade",
      "en": "Messaging - Decoupling and Reliability"
    },
    description: {
      "pt-BR": "Uma aplicação precisa desacoplar produtores e consumidores, armazenando mensagens até que o processamento seja concluído. Qual serviço é o mais adequado?",
      "en": "An application needs to decouple producers and consumers, storing messages until processing is completed. Which service is most appropriate?"
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
          "pt-BR": "Amazon SQS",
          "en": "Amazon SQS"
        },
        correct: true,
        explanation: {
          "pt-BR": "SQS é uma fila gerenciada que desacopla componentes e mantém mensagens até que sejam processadas com sucesso.",
          "en": "SQS is a managed queue that decouples components and keeps messages until they are successfully processed."
        }
      },
      {
        title: {
          "pt-BR": "Amazon SNS",
          "en": "Amazon SNS"
        },
        correct: false,
        explanation: {
          "pt-BR": "SNS é pub/sub e faz fanout, mas não é a melhor resposta quando a necessidade principal é fila durável.",
          "en": "SNS is pub/sub and supports fanout, but it is not the best answer when the primary need is a durable queue."
        }
      },
      {
        title: {
          "pt-BR": "Amazon EventBridge",
          "en": "Amazon EventBridge"
        },
        correct: false,
        explanation: {
          "pt-BR": "EventBridge é focado em roteamento de eventos por regras, não em enfileiramento clássico de mensagens.",
          "en": "EventBridge focuses on rule-based event routing, not classic message queuing."
        }
      },
      {
        title: {
          "pt-BR": "AWS Step Functions",
          "en": "AWS Step Functions"
        },
        correct: false,
        explanation: {
          "pt-BR": "Step Functions orquestra fluxos de trabalho, mas não substitui uma fila para buffering e desacoplamento simples.",
          "en": "Step Functions orchestrates workflows, but it does not replace a queue for simple buffering and decoupling."
        }
      }
    ],
    explanation: {
      "pt-BR": "SQS é a escolha correta quando o objetivo é absorver picos, desacoplar serviços e garantir processamento assíncrono confiável.",
      "en": "SQS is the right choice when the goal is to absorb spikes, decouple services, and ensure reliable asynchronous processing."
    }
  },
  {
    id: 10,
    title: {
      "pt-BR": "Arquitetura orientada a eventos - Roteamento por regras",
      "en": "Event-Driven Architecture - Rule-Based Routing"
    },
    description: {
      "pt-BR": "Uma aplicação recebe eventos de vários serviços AWS e também de SaaS externos. A equipe quer filtrar e rotear eventos por regras. Qual serviço atende melhor?",
      "en": "An application receives events from multiple AWS services and also external SaaS. The team wants to filter and route events by rules. Which service fits best?"
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
          "pt-BR": "Amazon SNS",
          "en": "Amazon SNS"
        },
        correct: false,
        explanation: {
          "pt-BR": "SNS faz notificações e fanout, mas não oferece o mesmo nível de roteamento flexível por regras de origem e conteúdo.",
          "en": "SNS does notifications and fanout, but it does not provide the same level of flexible rule-based routing by source and content."
        }
      },
      {
        title: {
          "pt-BR": "Amazon EventBridge",
          "en": "Amazon EventBridge"
        },
        correct: true,
        explanation: {
          "pt-BR": "EventBridge foi projetado para receber eventos, aplicar regras e encaminhar para múltiplos destinos com facilidade.",
          "en": "EventBridge is designed to receive events, apply rules, and route them to multiple destinations with ease."
        }
      },
      {
        title: {
          "pt-BR": "Amazon SQS",
          "en": "Amazon SQS"
        },
        correct: false,
        explanation: {
          "pt-BR": "SQS é ideal para filas, não para roteamento de eventos baseado em regras complexas.",
          "en": "SQS is ideal for queues, not for complex rule-based event routing."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudTrail registra chamadas de API e auditoria, mas não faz integração e roteamento de eventos.",
          "en": "CloudTrail records API calls and auditing data, but it does not perform event integration and routing."
        }
      }
    ],
    explanation: {
      "pt-BR": "EventBridge é o serviço mais adequado para arquiteturas orientadas a eventos que exigem regras de roteamento e integração com múltiplas origens.",
      "en": "EventBridge is the most suitable service for event-driven architectures that require routing rules and integration with multiple sources."
    }
  },
  {
    id: 11,
    title: {
      "pt-BR": "Monitoramento - Métricas, logs e alarmes",
      "en": "Monitoring - Metrics, Logs, and Alarms"
    },
    description: {
      "pt-BR": "A equipe precisa acompanhar métricas, criar alarmes e centralizar logs operacionais de uma aplicação. Qual serviço AWS é o principal para isso?",
      "en": "The team needs to track metrics, create alarms, and centralize operational logs for an application. Which AWS service is the main one for this?"
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
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        correct: false,
        explanation: {
          "pt-BR": "Config avalia conformidade e mudanças de configuração, mas não é o serviço principal para métricas e alarmes.",
          "en": "Config evaluates compliance and configuration changes, but it is not the main service for metrics and alarms."
        }
      },
      {
        title: {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        correct: false,
        explanation: {
          "pt-BR": "Trusted Advisor recomenda melhorias de custo, segurança e desempenho, mas não substitui monitoramento operacional.",
          "en": "Trusted Advisor recommends improvements in cost, security, and performance, but it does not replace operational monitoring."
        }
      },
      {
        title: {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        correct: true,
        explanation: {
          "pt-BR": "CloudWatch concentra métricas, logs e alarmes, sendo a base de observabilidade operacional na AWS.",
          "en": "CloudWatch centralizes metrics, logs, and alarms, making it the core of operational observability in AWS."
        }
      },
      {
        title: {
          "pt-BR": "AWS X-Ray",
          "en": "AWS X-Ray"
        },
        correct: false,
        explanation: {
          "pt-BR": "X-Ray é focado em tracing distribuído e diagnóstico de requisições, não em monitoramento geral completo.",
          "en": "X-Ray focuses on distributed tracing and request diagnostics, not full general monitoring."
        }
      }
    ],
    explanation: {
      "pt-BR": "CloudWatch é o serviço central para monitorar recursos, gerar alarmes e analisar logs em uma operação AWS.",
      "en": "CloudWatch is the central service for monitoring resources, generating alarms, and analyzing logs in an AWS environment."
    }
  },
  {
    id: 12,
    title: {
      "pt-BR": "Governança - Conformidade e drift de configuração",
      "en": "Governance - Compliance and Configuration Drift"
    },
    description: {
      "pt-BR": "Uma empresa quer identificar mudanças de configuração e verificar se recursos seguem regras internas de conformidade. Qual serviço ajuda mais nesse controle contínuo?",
      "en": "A company wants to identify configuration changes and verify whether resources follow internal compliance rules. Which service helps most with continuous control?"
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
          "pt-BR": "AWS Security Hub",
          "en": "AWS Security Hub"
        },
        correct: false,
        explanation: {
          "pt-BR": "Security Hub agrega achados de segurança, mas não é o serviço principal para rastrear mudanças de configuração em recursos.",
          "en": "Security Hub aggregates security findings, but it is not the main service for tracking resource configuration changes."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        correct: false,
        explanation: {
          "pt-BR": "Inspector identifica vulnerabilidades em workloads, mas não é o foco principal em conformidade de configuração.",
          "en": "Inspector identifies workload vulnerabilities, but it is not primarily focused on configuration compliance."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudTrail registra chamadas e eventos de API, mas não avalia conformidade de configuração por regras.",
          "en": "CloudTrail records API calls and events, but it does not evaluate configuration compliance against rules."
        }
      },
      {
        title: {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        correct: true,
        explanation: {
          "pt-BR": "AWS Config monitora configurações dos recursos e avalia conformidade continuamente com base em regras definidas.",
          "en": "AWS Config monitors resource configurations and continuously evaluates compliance based on defined rules."
        }
      }
    ],
    explanation: {
      "pt-BR": "AWS Config é o serviço indicado para rastrear alterações de configuração e validar conformidade de forma contínua.",
      "en": "AWS Config is the service intended to track configuration changes and validate compliance continuously."
    }
  },
  {
    id: 13,
    title: {
      "pt-BR": "Conectividade híbrida - Link dedicado com AWS",
      "en": "Hybrid Connectivity - Dedicated Link to AWS"
    },
    description: {
      "pt-BR": "Uma empresa precisa de conectividade privada e dedicada entre o data center on-premises e a AWS, com maior consistência de desempenho que uma VPN comum. Qual serviço escolher?",
      "en": "A company needs private and dedicated connectivity between its on-premises data center and AWS, with more consistent performance than a regular VPN. Which service should it choose?"
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
          "pt-BR": "AWS Direct Connect",
          "en": "AWS Direct Connect"
        },
        correct: true,
        explanation: {
          "pt-BR": "Direct Connect fornece um enlace dedicado entre o ambiente on-premises e a AWS, com latência mais previsível e maior largura de banda.",
          "en": "Direct Connect provides a dedicated link between on-premises and AWS, with more predictable latency and higher bandwidth."
        }
      },
      {
        title: {
          "pt-BR": "AWS Site-to-Site VPN",
          "en": "AWS Site-to-Site VPN"
        },
        correct: false,
        explanation: {
          "pt-BR": "VPN é útil e segura, mas depende da internet pública e não oferece o mesmo nível de previsibilidade de um enlace dedicado.",
          "en": "VPN is useful and secure, but it relies on the public internet and does not provide the same level of predictability as a dedicated link."
        }
      },
      {
        title: {
          "pt-BR": "AWS Transit Gateway",
          "en": "AWS Transit Gateway"
        },
        correct: false,
        explanation: {
          "pt-BR": "Transit Gateway interconecta redes, mas não é o meio físico de conectividade dedicada entre on-premises e AWS.",
          "en": "Transit Gateway interconnects networks, but it is not the physical dedicated connectivity method between on-premises and AWS."
        }
      },
      {
        title: {
          "pt-BR": "VPC Peering",
          "en": "VPC Peering"
        },
        correct: false,
        explanation: {
          "pt-BR": "VPC Peering conecta VPCs entre si, não o data center on-premises à AWS com enlace dedicado.",
          "en": "VPC Peering connects VPCs to each other, not an on-premises data center to AWS with a dedicated circuit."
        }
      }
    ],
    explanation: {
      "pt-BR": "AWS Direct Connect é a melhor escolha quando a necessidade é conectividade dedicada, privada e com desempenho mais previsível.",
      "en": "AWS Direct Connect is the best choice when the need is dedicated, private connectivity with more predictable performance."
    }
  },
  {
    id: 14,
    title: {
      "pt-BR": "Identidade - Acesso federado a múltiplas contas",
      "en": "Identity - Federated Access to Multiple Accounts"
    },
    description: {
      "pt-BR": "Uma organização quer fornecer acesso centralizado a várias contas AWS para usuários corporativos, com login único e credenciais temporárias. Qual serviço atende melhor?",
      "en": "An organization wants to provide centralized access to multiple AWS accounts for corporate users, with single sign-on and temporary credentials. Which service fits best?"
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
          "pt-BR": "Usuários IAM individuais em cada conta",
          "en": "Individual IAM users in each account"
        },
        correct: false,
        explanation: {
          "pt-BR": "Criar usuários separados em cada conta dificulta gestão centralizada e aumenta o trabalho operacional.",
          "en": "Creating separate users in each account makes centralized management harder and increases operational work."
        }
      },
      {
        title: {
          "pt-BR": "AWS IAM Identity Center",
          "en": "AWS IAM Identity Center"
        },
        correct: true,
        explanation: {
          "pt-BR": "IAM Identity Center centraliza acesso, permite single sign-on e facilita o uso de credenciais temporárias em múltiplas contas.",
          "en": "IAM Identity Center centralizes access, enables single sign-on, and simplifies temporary credentials across multiple accounts."
        }
      },
      {
        title: {
          "pt-BR": "AWS KMS",
          "en": "AWS KMS"
        },
        correct: false,
        explanation: {
          "pt-BR": "KMS gerencia chaves de criptografia, não identidade e acesso de usuários corporativos.",
          "en": "KMS manages encryption keys, not user identity and corporate access."
        }
      },
      {
        title: {
          "pt-BR": "AWS Organizations sozinho",
          "en": "AWS Organizations alone"
        },
        correct: false,
        explanation: {
          "pt-BR": "Organizations ajuda a estruturar contas, mas não substitui a solução de login centralizado para usuários finais.",
          "en": "Organizations helps structure accounts, but it does not replace a centralized login solution for end users."
        }
      }
    ],
    explanation: {
      "pt-BR": "IAM Identity Center é o caminho mais adequado para acesso federado, centralizado e com credenciais temporárias em várias contas AWS.",
      "en": "IAM Identity Center is the most suitable path for federated, centralized access with temporary credentials across multiple AWS accounts."
    }
  },
  {
    id: 15,
    title: {
      "pt-BR": "Criptografia - Gestão de chaves",
      "en": "Encryption - Key Management"
    },
    description: {
      "pt-BR": "Uma equipe quer criptografar dados em repouso e controlar o ciclo de vida das chaves usadas pelos serviços AWS. Qual serviço deve ser usado?",
      "en": "A team wants to encrypt data at rest and control the lifecycle of keys used by AWS services. Which service should be used?"
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
          "pt-BR": "AWS Secrets Manager",
          "en": "AWS Secrets Manager"
        },
        correct: false,
        explanation: {
          "pt-BR": "Secrets Manager armazena segredos como senhas e tokens, mas não é o serviço principal para gerenciar chaves de criptografia.",
          "en": "Secrets Manager stores secrets like passwords and tokens, but it is not the main service for managing encryption keys."
        }
      },
      {
        title: {
          "pt-BR": "AWS Certificate Manager",
          "en": "AWS Certificate Manager"
        },
        correct: false,
        explanation: {
          "pt-BR": "ACM gerencia certificados TLS/SSL, não chaves de criptografia para dados em repouso.",
          "en": "ACM manages TLS/SSL certificates, not encryption keys for data at rest."
        }
      },
      {
        title: {
          "pt-BR": "AWS Key Management Service (KMS)",
          "en": "AWS Key Management Service (KMS)"
        },
        correct: true,
        explanation: {
          "pt-BR": "KMS é o serviço nativo para criar, controlar e auditar chaves de criptografia usadas pelos serviços AWS.",
          "en": "KMS is the native service to create, control, and audit encryption keys used by AWS services."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudHSM",
          "en": "AWS CloudHSM"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudHSM é útil para exigências muito específicas, mas não é a resposta padrão para a maioria dos casos de gestão de chaves.",
          "en": "CloudHSM is useful for very specific requirements, but it is not the standard answer for most key management cases."
        }
      }
    ],
    explanation: {
      "pt-BR": "AWS KMS é o serviço certo para gerenciar chaves usadas na criptografia de dados em repouso em serviços AWS.",
      "en": "AWS KMS is the right service for managing keys used in encrypting data at rest across AWS services."
    }
  },
  {
    id: 16,
    title: {
      "pt-BR": "Custos - Orçamento e alertas",
      "en": "Costs - Budgeting and Alerts"
    },
    description: {
      "pt-BR": "A equipe financeira quer definir um limite mensal de gastos e receber alertas quando o consumo se aproximar ou ultrapassar esse valor. Qual serviço ajuda nisso?",
      "en": "The finance team wants to set a monthly spending limit and receive alerts when consumption approaches or exceeds it. Which service helps with that?"
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
          "pt-BR": "AWS Cost Explorer",
          "en": "AWS Cost Explorer"
        },
        correct: false,
        explanation: {
          "pt-BR": "Cost Explorer ajuda a visualizar e analisar custos, mas não é o principal serviço de alerta por orçamento.",
          "en": "Cost Explorer helps visualize and analyze costs, but it is not the primary budget alert service."
        }
      },
      {
        title: {
          "pt-BR": "AWS Cost and Usage Report",
          "en": "AWS Cost and Usage Report"
        },
        correct: false,
        explanation: {
          "pt-BR": "O CUR gera relatórios detalhados, mas não é o mecanismo mais direto para definir alertas de orçamento.",
          "en": "CUR generates detailed reports, but it is not the most direct mechanism for setting budget alerts."
        }
      },
      {
        title: {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        correct: false,
        explanation: {
          "pt-BR": "Trusted Advisor sugere otimizações, mas não é o serviço central para criar alertas por orçamento mensal.",
          "en": "Trusted Advisor suggests optimizations, but it is not the central service for monthly budget alerts."
        }
      },
      {
        title: {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        correct: true,
        explanation: {
          "pt-BR": "AWS Budgets permite definir limites, acompanhar gastos e disparar alertas conforme o consumo evolui.",
          "en": "AWS Budgets lets you define limits, track spending, and trigger alerts as usage changes."
        }
      }
    ],
    explanation: {
      "pt-BR": "AWS Budgets é o serviço mais indicado para controle proativo de custo com alertas configuráveis.",
      "en": "AWS Budgets is the most suitable service for proactive cost control with configurable alerts."
    }
  },
  {
    id: 17,
    title: {
      "pt-BR": "Well-Architected - Excelência operacional",
      "en": "Well-Architected - Operational Excellence"
    },
    description: {
      "pt-BR": "Qual pilar da AWS Well-Architected Framework enfatiza executar e monitorar workloads, além de melhorar processos continuamente?",
      "en": "Which pillar of the AWS Well-Architected Framework emphasizes running and monitoring workloads and continuously improving processes?"
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
          "pt-BR": "Excelência operacional",
          "en": "Operational Excellence"
        },
        correct: true,
        explanation: {
          "pt-BR": "Esse pilar trata de execução, observabilidade, automação e melhoria contínua dos processos operacionais.",
          "en": "This pillar covers execution, observability, automation, and continuous improvement of operational processes."
        }
      },
      {
        title: {
          "pt-BR": "Segurança",
          "en": "Security"
        },
        correct: false,
        explanation: {
          "pt-BR": "Security trata de proteção de dados, identidades e infraestrutura, mas não é o foco principal da pergunta.",
          "en": "Security deals with protecting data, identities, and infrastructure, but it is not the main focus of the question."
        }
      },
      {
        title: {
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        correct: false,
        explanation: {
          "pt-BR": "Reliability aborda tolerância a falhas e recuperação, mas a questão pede execução e melhoria contínua.",
          "en": "Reliability addresses fault tolerance and recovery, but the question asks about execution and continuous improvement."
        }
      },
      {
        title: {
          "pt-BR": "Otimização de custos",
          "en": "Cost Optimization"
        },
        correct: false,
        explanation: {
          "pt-BR": "Cost Optimization trata de eficiência financeira e não do ciclo operacional de executar e evoluir workloads.",
          "en": "Cost Optimization deals with financial efficiency, not the operational cycle of running and evolving workloads."
        }
      }
    ],
    explanation: {
      "pt-BR": "Excelência operacional é o pilar que orienta a execução consistente, a automação e a melhoria contínua dos sistemas.",
      "en": "Operational Excellence is the pillar that guides consistent execution, automation, and continuous system improvement."
    }
  },
  {
    id: 18,
    title: {
      "pt-BR": "Recuperação de desastres - Estratégia enxuta",
      "en": "Disaster Recovery - Lean Strategy"
    },
    description: {
      "pt-BR": "Uma empresa quer manter uma cópia mínima do ambiente pronta para subir rapidamente após falha, com custo menor que manter toda a infraestrutura ativa. Qual estratégia de DR é essa?",
      "en": "A company wants to keep a minimal copy of the environment ready to scale up quickly after a failure, with lower cost than keeping all infrastructure active. Which DR strategy is this?"
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
          "pt-BR": "Backup e restore",
          "en": "Backup and restore"
        },
        correct: false,
        explanation: {
          "pt-BR": "Backup e restore é mais lento e depende de reconstrução após o desastre, não de uma base mínima já preparada.",
          "en": "Backup and restore is slower and depends on rebuilding after the disaster, not on a minimal baseline already prepared."
        }
      },
      {
        title: {
          "pt-BR": "Pilot light",
          "en": "Pilot light"
        },
        correct: true,
        explanation: {
          "pt-BR": "Pilot light mantém componentes essenciais prontos para expansão rápida, equilibrando custo e tempo de recuperação.",
          "en": "Pilot light keeps essential components ready for rapid expansion, balancing cost and recovery time."
        }
      },
      {
        title: {
          "pt-BR": "Warm standby",
          "en": "Warm standby"
        },
        correct: false,
        explanation: {
          "pt-BR": "Warm standby mantém um ambiente secundário mais completo e ativo do que o descrito no cenário, com custo maior.",
          "en": "Warm standby keeps a more complete and active secondary environment than the scenario describes, at a higher cost."
        }
      },
      {
        title: {
          "pt-BR": "Multi-site active/active",
          "en": "Multi-site active/active"
        },
        correct: false,
        explanation: {
          "pt-BR": "Active/active é a abordagem mais robusta, porém mais cara, e não combina com a meta de custo reduzido.",
          "en": "Active/active is the most robust approach, but it is more expensive and does not match the lower-cost goal."
        }
      }
    ],
    explanation: {
      "pt-BR": "Pilot light é a melhor descrição quando existe um núcleo mínimo pronto para expansão após falha, com custo menor que manter tudo ativo.",
      "en": "Pilot light is the best description when there is a minimal core ready to expand after a failure, at lower cost than keeping everything active."
    }
  },
  {
    id: 19,
    title: {
      "pt-BR": "Balanceamento de carga - Distribuição de tráfego",
      "en": "Load Balancing - Traffic Distribution"
    },
    description: {
      "pt-BR": "Uma aplicação possui várias instâncias em diferentes zonas de disponibilidade e precisa distribuir o tráfego apenas para os destinos saudáveis. Qual serviço deve ser usado?",
      "en": "An application has multiple instances in different Availability Zones and needs to distribute traffic only to healthy targets. Which service should be used?"
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
          "pt-BR": "Amazon Route 53",
          "en": "Amazon Route 53"
        },
        correct: false,
        explanation: {
          "pt-BR": "Route 53 resolve DNS e pode fazer health checks, mas não é o balanceador principal de tráfego de aplicação.",
          "en": "Route 53 resolves DNS and can perform health checks, but it is not the primary application traffic load balancer."
        }
      },
      {
        title: {
          "pt-BR": "Amazon CloudFront",
          "en": "Amazon CloudFront"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudFront distribui conteúdo em edge locations, mas não substitui o balanceamento entre instâncias internas da aplicação.",
          "en": "CloudFront distributes content through edge locations, but it does not replace balancing traffic among internal application instances."
        }
      },
      {
        title: {
          "pt-BR": "Elastic Load Balancing",
          "en": "Elastic Load Balancing"
        },
        correct: true,
        explanation: {
          "pt-BR": "ELB distribui tráfego entre alvos saudáveis e integra-se com múltiplas zonas para alta disponibilidade.",
          "en": "ELB distributes traffic across healthy targets and integrates with multiple zones for high availability."
        }
      },
      {
        title: {
          "pt-BR": "Amazon EC2 Auto Scaling",
          "en": "Amazon EC2 Auto Scaling"
        },
        correct: false,
        explanation: {
          "pt-BR": "Auto Scaling ajusta a quantidade de instâncias, mas não é o componente principal para distribuir requisições entre alvos saudáveis.",
          "en": "Auto Scaling adjusts the number of instances, but it is not the primary component for distributing requests across healthy targets."
        }
      }
    ],
    explanation: {
      "pt-BR": "Elastic Load Balancing é o serviço certo para distribuir requisições entre alvos saudáveis de forma automática.",
      "en": "Elastic Load Balancing is the right service for automatically distributing requests across healthy targets."
    }
  },
  {
    id: 20,
    title: {
      "pt-BR": "DNS global - Roteamento inteligente",
      "en": "Global DNS - Intelligent Routing"
    },
    description: {
      "pt-BR": "A empresa quer gerenciar DNS público, aplicar health checks e direcionar usuários para endpoints adequados em caso de falha. Qual serviço atende melhor?",
      "en": "The company wants to manage public DNS, apply health checks, and direct users to suitable endpoints in case of failure. Which service fits best?"
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
          "pt-BR": "Amazon CloudFront",
          "en": "Amazon CloudFront"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudFront é uma CDN, não um serviço de DNS com roteamento baseado em health checks para o domínio público.",
          "en": "CloudFront is a CDN, not a DNS service with health-check-based routing for a public domain."
        }
      },
      {
        title: {
          "pt-BR": "Elastic Load Balancing",
          "en": "Elastic Load Balancing"
        },
        correct: false,
        explanation: {
          "pt-BR": "ELB faz balanceamento de carga, mas não é o serviço principal para DNS público da organização.",
          "en": "ELB performs load balancing, but it is not the primary service for an organization's public DNS."
        }
      },
      {
        title: {
          "pt-BR": "Amazon VPC",
          "en": "Amazon VPC"
        },
        correct: false,
        explanation: {
          "pt-BR": "VPC cria a rede virtual, mas não resolve o gerenciamento de DNS público com failover e health checks.",
          "en": "VPC creates the virtual network, but it does not solve public DNS management with failover and health checks."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Route 53",
          "en": "Amazon Route 53"
        },
        correct: true,
        explanation: {
          "pt-BR": "Route 53 fornece DNS gerenciado, health checks e políticas de roteamento para alta disponibilidade e failover.",
          "en": "Route 53 provides managed DNS, health checks, and routing policies for high availability and failover."
        }
      }
    ],
    explanation: {
      "pt-BR": "Route 53 é o serviço de DNS gerenciado da AWS, ideal para roteamento inteligente e health checks de domínios públicos.",
      "en": "Route 53 is AWS's managed DNS service, ideal for intelligent routing and health checks for public domains."
    }
  }
];
