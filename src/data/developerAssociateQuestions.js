export const developerAssociateQuestions = [
  {
    "id": 1,
    "title": {
      "pt-BR": "Serverless - Lambda em picos de carga",
      "en": "Serverless - Lambda Under Peak Load"
    },
    "description": {
      "pt-BR": "Uma API baseada em AWS Lambda começa a falhar durante campanhas porque chamadas a serviços downstream ficam lentas. A equipe quer reduzir timeouts e desacoplar o processamento sem perder eventos.",
      "en": "An AWS Lambda-based API starts failing during campaigns because downstream calls become slow. The team wants to reduce timeouts and decouple processing without losing events."
    },
    "question": {
      "pt-BR": "Qual abordagem é a mais adequada?",
      "en": "Which approach is the most suitable?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Enviar tarefas para Amazon SQS e processar de forma assíncrona com Lambda",
          "en": "Send tasks to Amazon SQS and process asynchronously with Lambda"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "SQS desacopla produtor e consumidor, reduz timeouts na camada síncrona e permite retry controlado sem perder mensagens.",
          "en": "SQS decouples producer and consumer, reduces synchronous layer timeouts, and enables controlled retries without message loss."
        }
      },
      {
        "title": {
          "pt-BR": "Aumentar timeout do Lambda para o máximo em todas as funções",
          "en": "Increase Lambda timeout to maximum for all functions"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Isso apenas mascara o problema e mantém o acoplamento; o gargalo downstream continua.",
          "en": "This only masks the issue and keeps tight coupling; the downstream bottleneck remains."
        }
      },
      {
        "title": {
          "pt-BR": "Migrar toda a API para EC2 imediatamente",
          "en": "Migrate the entire API to EC2 immediately"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Não ataca a causa principal e adiciona complexidade operacional desnecessária.",
          "en": "It does not address the root cause and adds unnecessary operational complexity."
        }
      },
      {
        "title": {
          "pt-BR": "Desabilitar retries para evitar enfileiramento",
          "en": "Disable retries to avoid queue buildup"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Sem retries, falhas transitórias causam perda de processamento e pioram a confiabilidade.",
          "en": "Without retries, transient failures lead to lost processing and worse reliability."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para carga variável e dependências lentas, desacoplamento com SQS e processamento assíncrono é a estratégia padrão e mais robusta.",
      "en": "For variable load and slow dependencies, SQS decoupling with asynchronous processing is the standard and most robust strategy."
    }
  },
  {
    "id": 2,
    "title": {
      "pt-BR": "API Gateway - Controle por consumidor",
      "en": "API Gateway - Consumer-Level Control"
    },
    "description": {
      "pt-BR": "Uma API pública possui clientes com SLAs diferentes. A equipe precisa limitar requisições por cliente e manter observabilidade por chave de uso.",
      "en": "A public API has clients with different SLAs. The team needs per-client throttling and observability by usage key."
    },
    "question": {
      "pt-BR": "Qual configuração atende melhor?",
      "en": "Which configuration fits best?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "API Gateway com Lambda Authorizer, sem Usage Plans",
          "en": "API Gateway with Lambda Authorizer, without Usage Plans"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O authorizer ajuda na autenticação, mas sem Usage Plans não há controle nativo de quota e throttle por cliente.",
          "en": "The authorizer helps with authentication, but without Usage Plans there is no native quota and throttle control per client."
        }
      },
      {
        "title": {
          "pt-BR": "API Gateway com Usage Plans, API Keys e métricas no CloudWatch",
          "en": "API Gateway with Usage Plans, API Keys, and CloudWatch metrics"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Usage Plans permitem limites por cliente e API Keys permitem rastreabilidade e medição separada.",
          "en": "Usage Plans enable per-client limits and API Keys provide separate traceability and measurement."
        }
      },
      {
        "title": {
          "pt-BR": "AWS WAF com regras de taxa no endpoint",
          "en": "AWS WAF with rate-based rules on the endpoint"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "WAF ajuda a mitigar abuso, mas não substitui os planos de uso e a gestão de API Keys por consumidor.",
          "en": "WAF helps mitigate abuse, but it does not replace usage plans and API key management per consumer."
        }
      },
      {
        "title": {
          "pt-BR": "ALB com autenticação JWT no backend e sticky sessions",
          "en": "ALB with backend JWT authentication and sticky sessions"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Isso não entrega rate limiting nativo por consumidor nem rastreabilidade por chave de uso.",
          "en": "This does not provide native per-consumer rate limiting or traceability by usage key."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para APIs com múltiplos consumidores e SLAs diferentes, API Gateway com Usage Plans e API Keys é a solução mais apropriada.",
      "en": "For APIs with multiple consumers and different SLAs, API Gateway with Usage Plans and API Keys is the most appropriate solution."
    }
  },
  {
    "id": 3,
    "title": {
      "pt-BR": "DynamoDB - Chave de partição",
      "en": "DynamoDB - Partition Key Design"
    },
    "description": {
      "pt-BR": "Uma tabela DynamoDB apresenta throttling concentrado em poucas partições. O time identificou que a chave de partição atual causa hot partitions.",
      "en": "A DynamoDB table shows throttling concentrated in a few partitions. The team identified that the current partition key causes hot partitions."
    },
    "question": {
      "pt-BR": "Qual ajuste tende a resolver o problema?",
      "en": "Which adjustment is most likely to solve the issue?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Adicionar um cache de leitura sem mudar a chave de partição",
          "en": "Add a read cache without changing the partition key"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Cache pode reduzir latência de leitura, mas não corrige hot partitions nem distribui melhor escrita.",
          "en": "Caching can reduce read latency, but it does not fix hot partitions or better distribute writes."
        }
      },
      {
        "title": {
          "pt-BR": "Migrar para RDS sem revisar o modelo de acesso",
          "en": "Migrate to RDS without reviewing the access model"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Trocar de banco sem corrigir padrão de acesso tende a mover o problema, não resolvê-lo.",
          "en": "Changing database without fixing access pattern tends to move the problem, not solve it."
        }
      },
      {
        "title": {
          "pt-BR": "Redesenhar a partition key para maior cardinalidade e melhor dispersão",
          "en": "Redesign the partition key for higher cardinality and better distribution"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A principal prática em DynamoDB para evitar hot partitions é distribuir escrita/leitura por uma chave mais uniforme.",
          "en": "The key DynamoDB practice to avoid hot partitions is distributing read/write traffic with a more uniform key."
        }
      },
      {
        "title": {
          "pt-BR": "Desativar Auto Scaling da tabela",
          "en": "Disable table Auto Scaling"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Desativar escalabilidade piora o cenário e não trata a causa da concentração.",
          "en": "Disabling scaling worsens the scenario and does not address concentration root cause."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Em DynamoDB, modelagem por padrão de acesso e escolha correta de chaves são decisivas para escala consistente.",
      "en": "In DynamoDB, access-pattern modeling and correct key design are decisive for consistent scale."
    }
  },
  {
    "id": 4,
    "title": {
      "pt-BR": "SQS - Falhas recorrentes de mensagens",
      "en": "SQS - Recurring Message Failures"
    },
    "description": {
      "pt-BR": "Algumas mensagens falham repetidamente no consumidor e bloqueiam o fluxo da fila principal.",
      "en": "Some messages repeatedly fail in the consumer and block the main queue flow."
    },
    "question": {
      "pt-BR": "Qual recurso deve ser aplicado para isolar essas mensagens?",
      "en": "Which feature should be applied to isolate these messages?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Aumentar o Visibility Timeout indefinidamente",
          "en": "Increase Visibility Timeout indefinitely"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Isso atrasa reprocessamento, mas não separa mensagens problemáticas.",
          "en": "This delays reprocessing but does not isolate problematic messages."
        }
      },
      {
        "title": {
          "pt-BR": "Remover retries automáticos",
          "en": "Remove automatic retries"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Sem retries, falhas transitórias deixam de ser recuperadas.",
          "en": "Without retries, transient failures are no longer recoverable."
        }
      },
      {
        "title": {
          "pt-BR": "Usar SNS para substituir a fila",
          "en": "Use SNS to replace the queue"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "SNS é pub/sub, não substitui o comportamento de fila com isolamento de mensagens venenosas.",
          "en": "SNS is pub/sub and does not replace queue behavior for poison-message isolation."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar Dead Letter Queue com maxReceiveCount",
          "en": "Configure a Dead Letter Queue with maxReceiveCount"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "DLQ remove mensagens com falha recorrente da fila principal, mantendo throughput e permitindo análise posterior.",
          "en": "A DLQ removes repeatedly failing messages from the main queue, preserving throughput and enabling later analysis."
        }
      }
    ],
    "explanation": {
      "pt-BR": "DLQ é a prática recomendada para lidar com mensagens que excedem tentativas de processamento.",
      "en": "DLQ is the recommended practice for handling messages that exceed processing attempts."
    }
  },
  {
    "id": 5,
    "title": {
      "pt-BR": "SNS e fanout - Notificação para múltiplos destinos",
      "en": "SNS and Fanout - Notifications to Multiple Targets"
    },
    "description": {
      "pt-BR": "Após confirmar um pedido, a aplicação precisa notificar simultaneamente faturamento, expedição e analytics, com baixo acoplamento.",
      "en": "After order confirmation, the application must notify billing, shipping, and analytics simultaneously with low coupling."
    },
    "question": {
      "pt-BR": "Qual serviço é mais aderente para esse fanout?",
      "en": "Which service best fits this fanout scenario?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon SNS com múltiplas assinaturas",
          "en": "Amazon SNS with multiple subscriptions"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "SNS publica uma vez e entrega a vários assinantes (SQS, Lambda, HTTP), reduzindo acoplamento.",
          "en": "SNS publishes once and delivers to multiple subscribers (SQS, Lambda, HTTP), reducing coupling."
        }
      },
      {
        "title": {
          "pt-BR": "Uma única fila SQS compartilhada por todos",
          "en": "A single shared SQS queue for all consumers"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Isso cria competição entre consumidores em vez de fanout independente para cada domínio.",
          "en": "This creates consumer competition rather than independent fanout per domain."
        }
      },
      {
        "title": {
          "pt-BR": "Step Functions apenas",
          "en": "Step Functions only"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Pode orquestrar fluxo, mas não é a opção mais simples e direta para fanout de eventos.",
          "en": "It can orchestrate flow, but it is not the simplest direct option for event fanout."
        }
      },
      {
        "title": {
          "pt-BR": "CloudWatch Events sem destinos",
          "en": "CloudWatch Events without targets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Sem configuração de roteamento e assinantes, não atende o caso de notificação múltipla.",
          "en": "Without routing and subscriber setup, it does not satisfy multiple-notification needs."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Quando o mesmo evento precisa chegar a vários consumidores independentes, SNS é a escolha clássica.",
      "en": "When the same event must reach multiple independent consumers, SNS is the classic choice."
    }
  },
  {
    "id": 6,
    "title": {
      "pt-BR": "Step Functions - Orquestração resiliente",
      "en": "Step Functions - Resilient Orchestration"
    },
    "description": {
      "pt-BR": "Uma operação envolve validação, cobrança, emissão de nota e notificação. Cada etapa pode falhar e precisa de tentativas e tratamento por estado.",
      "en": "An operation involves validation, charging, invoice issuing, and notification. Each step may fail and needs retries and state-based handling."
    },
    "question": {
      "pt-BR": "Qual serviço foi projetado para esse tipo de coordenação?",
      "en": "Which service is designed for this type of coordination?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Redshift Serverless",
          "en": "Amazon Redshift Serverless"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Redshift Serverless é para analytics, mas a pergunta pede consulta ad hoc simples diretamente sobre S3 sem cluster.",
          "en": "Redshift Serverless is for analytics, but the question asks for simple ad-hoc querying directly on S3 without a cluster."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Step Functions",
          "en": "AWS Step Functions"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Step Functions modela estados, retries, fallbacks e trilha de execução para processos distribuídos.",
          "en": "Step Functions models states, retries, fallbacks, and execution tracking for distributed processes."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ElastiCache",
          "en": "Amazon ElastiCache"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "ElastiCache acelera acesso, mas não executa consultas SQL sobre o data lake.",
          "en": "ElastiCache speeds up access, but does not execute SQL queries over the data lake."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Glue ETL job",
          "en": "AWS Glue ETL job"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Glue ajuda transformação, mas a pergunta busca consulta SQL ad hoc sem pipeline de ETL permanente.",
          "en": "Glue helps transformation, but the question seeks ad-hoc SQL querying without a permanent ETL pipeline."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Fluxos com múltiplas etapas e tratamento de falhas por estado são casos clássicos para Step Functions.",
      "en": "Multi-step flows with state-based failure handling are classic Step Functions use cases."
    }
  },
  {
    "id": 7,
    "title": {
      "pt-BR": "CI/CD - Pipeline para Lambda",
      "en": "CI/CD - Pipeline for Lambda"
    },
    "description": {
      "pt-BR": "A equipe quer automatizar build, testes e deploy de uma função Lambda com promoção entre ambientes.",
      "en": "The team wants to automate build, tests, and deployment of a Lambda function with environment promotion."
    },
    "question": {
      "pt-BR": "Qual combinação de serviços AWS é mais adequada?",
      "en": "Which combination of AWS services is most suitable?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "EC2 Manual Deploy + SSH",
          "en": "Manual EC2 Deploy + SSH"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Processo manual aumenta risco, reduz rastreabilidade e não atende boa prática de automação.",
          "en": "Manual process increases risk, reduces traceability, and does not meet automation best practices."
        }
      },
      {
        "title": {
          "pt-BR": "S3 + CloudFront",
          "en": "S3 + CloudFront"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Essa dupla atende estático/CDN, não orquestra pipeline de entrega de backend.",
          "en": "This pair serves static/CDN use cases, not backend delivery pipeline orchestration."
        }
      },
      {
        "title": {
          "pt-BR": "CodeCommit, CodeBuild e CodePipeline",
          "en": "CodeCommit, CodeBuild, and CodePipeline"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Esses serviços cobrem versionamento, build/test e orquestração de deploy contínuo.",
          "en": "These services cover version control, build/test, and continuous deployment orchestration."
        }
      },
      {
        "title": {
          "pt-BR": "CloudTrail + Trusted Advisor",
          "en": "CloudTrail + Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "São serviços de auditoria/recomendação, não pipeline CI/CD.",
          "en": "They are auditing/recommendation services, not CI/CD pipeline tooling."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para entrega contínua em AWS, CodePipeline integrado a CodeBuild (e repositório) é o caminho padrão.",
      "en": "For continuous delivery on AWS, CodePipeline integrated with CodeBuild (and repo) is the standard path."
    }
  },
  {
    "id": 8,
    "title": {
      "pt-BR": "IAM - Permissões para EC2 acessar S3",
      "en": "IAM - Permissions for EC2 to Access S3"
    },
    "description": {
      "pt-BR": "Uma aplicação em EC2 precisa ler objetos em um bucket S3 sem armazenar chaves de acesso no servidor.",
      "en": "An EC2-based application must read objects from S3 without storing access keys on the server."
    },
    "question": {
      "pt-BR": "Qual é a melhor prática?",
      "en": "What is the best practice?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Salvar Access Key no arquivo de configuração da aplicação",
          "en": "Store Access Key in application config file"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Expor credenciais estáticas no host é prática insegura e dificulta rotação.",
          "en": "Exposing static credentials on host is insecure and complicates rotation."
        }
      },
      {
        "title": {
          "pt-BR": "Criar usuário root para a aplicação",
          "en": "Create a root user for the application"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Conta root não deve ser usada por aplicações e viola princípios de segurança.",
          "en": "Root account must not be used by applications and violates security principles."
        }
      },
      {
        "title": {
          "pt-BR": "Usar Security Group com saída liberada",
          "en": "Use Security Group with open egress"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Security Group controla rede, não concede autorização IAM para API S3.",
          "en": "Security Group controls networking, not IAM authorization to S3 APIs."
        }
      },
      {
        "title": {
          "pt-BR": "Associar IAM Role à instância EC2 com política de menor privilégio",
          "en": "Attach an IAM Role to EC2 with least-privilege policy"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "IAM Role entrega credenciais temporárias automaticamente e evita segredo estático no servidor.",
          "en": "IAM Role provides temporary credentials automatically and avoids static secrets on the server."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para workloads em EC2, IAM Role com menor privilégio é a forma correta de acesso a serviços AWS.",
      "en": "For EC2 workloads, least-privilege IAM Role is the correct way to access AWS services."
    }
  },
  {
    "id": 9,
    "title": {
      "pt-BR": "Segredos - Rotação automática",
      "en": "Secrets - Automatic Rotation"
    },
    "description": {
      "pt-BR": "A aplicação usa credenciais de banco e a equipe quer armazenar segredo com criptografia e rotação automática.",
      "en": "The application uses database credentials and the team wants encrypted secret storage with automatic rotation."
    },
    "question": {
      "pt-BR": "Qual serviço é o mais indicado?",
      "en": "Which service is most appropriate?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Secrets Manager",
          "en": "AWS Secrets Manager"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Secrets Manager foi desenhado para segredos sensíveis com integração de rotação e auditoria.",
          "en": "Secrets Manager is designed for sensitive secrets with integrated rotation and auditing."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Systems Manager Session Manager",
          "en": "AWS Systems Manager Session Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Session Manager é para acesso administrativo a instâncias, não armazenamento de segredos.",
          "en": "Session Manager is for administrative instance access, not secret storage."
        }
      },
      {
        "title": {
          "pt-BR": "CloudFront Signed URLs",
          "en": "CloudFront Signed URLs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Signed URLs controlam acesso a conteúdo, não rotação de credenciais de banco.",
          "en": "Signed URLs control content access, not database credential rotation."
        }
      },
      {
        "title": {
          "pt-BR": "AMI privada com variáveis em texto",
          "en": "Private AMI with plaintext variables"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Armazenar segredo em texto no host é inseguro e dificulta governança.",
          "en": "Storing secrets in plaintext on host is insecure and hard to govern."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Quando o requisito inclui segredo sensível e rotação automatizada, Secrets Manager é a melhor escolha.",
      "en": "When requirements include sensitive secret storage and automated rotation, Secrets Manager is the best choice."
    }
  },
  {
    "id": 10,
    "title": {
      "pt-BR": "Observabilidade - Tracing distribuído",
      "en": "Observability - Distributed Tracing"
    },
    "description": {
      "pt-BR": "Uma API de microserviços tem latência variável e a equipe precisa identificar em qual serviço a requisição está degradando.",
      "en": "A microservices API has variable latency and the team needs to identify which service is causing degradation."
    },
    "question": {
      "pt-BR": "Qual serviço AWS ajuda mais nesse diagnóstico ponta a ponta?",
      "en": "Which AWS service helps most with end-to-end diagnosis?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Config foca em conformidade de configuração, não tracing de requisição.",
          "en": "Config focuses on configuration compliance, not request tracing."
        }
      },
      {
        "title": {
          "pt-BR": "AWS X-Ray",
          "en": "AWS X-Ray"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "X-Ray rastreia chamadas entre serviços e revela gargalos de latência por segmento.",
          "en": "X-Ray traces calls across services and reveals latency bottlenecks by segment."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Artifact",
          "en": "AWS Artifact"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Artifact fornece documentos de compliance, não telemetria de aplicação.",
          "en": "Artifact provides compliance documents, not application telemetry."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Cognito",
          "en": "Amazon Cognito"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Cognito resolve identidade de usuários, não tracing de microserviços.",
          "en": "Cognito handles user identity, not microservices tracing."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para analisar caminho de requisição em arquitetura distribuída, X-Ray é o serviço específico.",
      "en": "To analyze request path in distributed architecture, X-Ray is the specific service."
    }
  },
  {
    "id": 11,
    "title": {
      "pt-BR": "CloudFormation - Detecção de drift",
      "en": "CloudFormation - Drift Detection"
    },
    "description": {
      "pt-BR": "Recursos foram alterados manualmente no console e a equipe quer detectar divergência em relação ao template IaC.",
      "en": "Resources were manually changed in console and the team wants to detect divergence from the IaC template."
    },
    "question": {
      "pt-BR": "Qual recurso usar?",
      "en": "Which feature should be used?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "CloudFront Invalidation",
          "en": "CloudFront Invalidation"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Invalidation limpa cache CDN, sem relação com drift de infraestrutura.",
          "en": "Invalidation clears CDN cache, unrelated to infrastructure drift."
        }
      },
      {
        "title": {
          "pt-BR": "S3 Lifecycle",
          "en": "S3 Lifecycle"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Lifecycle gerencia retenção de objetos, não consistência de stack.",
          "en": "Lifecycle manages object retention, not stack consistency."
        }
      },
      {
        "title": {
          "pt-BR": "CloudFormation Drift Detection",
          "en": "CloudFormation Drift Detection"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Drift Detection compara estado real com o estado definido no template, evidenciando diferenças.",
          "en": "Drift Detection compares actual state with template-defined state and highlights differences."
        }
      },
      {
        "title": {
          "pt-BR": "Route 53 Health Check",
          "en": "Route 53 Health Check"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Health check monitora endpoints, não divergência de template.",
          "en": "Health checks monitor endpoints, not template divergence."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Quando há suspeita de alteração manual fora do IaC, Drift Detection é o mecanismo correto.",
      "en": "When out-of-band manual changes are suspected, Drift Detection is the correct mechanism."
    }
  },
  {
    "id": 12,
    "title": {
      "pt-BR": "Containers - Execução sem gerenciar servidores",
      "en": "Containers - Run Without Managing Servers"
    },
    "description": {
      "pt-BR": "Uma equipe quer executar containers com escalabilidade automática sem administrar hosts EC2.",
      "en": "A team wants to run containers with auto scaling without managing EC2 hosts."
    },
    "question": {
      "pt-BR": "Qual opção atende melhor?",
      "en": "Which option best fits?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "EKS em nós autogerenciados",
          "en": "EKS on self-managed nodes"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Ainda há gestão de nós e maior esforço operacional.",
          "en": "You still manage nodes and face higher operational effort."
        }
      },
      {
        "title": {
          "pt-BR": "ECS com EC2 Launch Type",
          "en": "ECS with EC2 Launch Type"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Continua exigindo gestão da camada de instâncias.",
          "en": "It still requires managing the instance layer."
        }
      },
      {
        "title": {
          "pt-BR": "Lightsail Containers",
          "en": "Lightsail Containers"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Pode servir casos simples, mas não é a resposta principal para orquestração produtiva escalável.",
          "en": "It may fit simple use cases, but it is not the primary answer for scalable production orchestration."
        }
      },
      {
        "title": {
          "pt-BR": "ECS com AWS Fargate",
          "en": "ECS with AWS Fargate"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Fargate elimina gestão de servidores e permite foco no deploy do container.",
          "en": "Fargate removes server management and lets the team focus on container deployment."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para containers sem gestão de hosts, Fargate é a opção mais direta na trilha de Developer Associate.",
      "en": "For containers without host management, Fargate is the most direct option in the Developer Associate track."
    }
  },
  {
    "id": 13,
    "title": {
      "pt-BR": "EventBridge - Roteamento por regra",
      "en": "EventBridge - Rule-Based Routing"
    },
    "description": {
      "pt-BR": "Eventos de diferentes fontes devem ser roteados para consumidores distintos com filtros por tipo e origem.",
      "en": "Events from different sources must be routed to distinct consumers with filters by type and source."
    },
    "question": {
      "pt-BR": "Qual serviço é indicado para esse padrão?",
      "en": "Which service is indicated for this pattern?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon EventBridge",
          "en": "Amazon EventBridge"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "EventBridge recebe eventos de várias fontes e aplica regras de roteamento para múltiplos destinos.",
          "en": "EventBridge receives events from multiple sources and applies routing rules to multiple targets."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ECR",
          "en": "Amazon ECR"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "ECR é registro de imagens de container.",
          "en": "ECR is a container image registry."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Glue Data Catalog",
          "en": "AWS Glue Data Catalog"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Data Catalog organiza metadados analíticos, não roteamento operacional de eventos.",
          "en": "Data Catalog organizes analytics metadata, not operational event routing."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Organizations",
          "en": "AWS Organizations"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Organizations governa contas, não fluxo de eventos de aplicação.",
          "en": "Organizations governs accounts, not application event flows."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para integrar múltiplas origens com filtragem e roteamento por regras, EventBridge é a melhor escolha.",
      "en": "To integrate multiple sources with filtering and rule-based routing, EventBridge is the best choice."
    }
  },
  {
    "id": 14,
    "title": {
      "pt-BR": "S3 - Upload seguro direto do cliente",
      "en": "S3 - Secure Client Direct Upload"
    },
    "description": {
      "pt-BR": "Um frontend precisa enviar arquivos para S3 sem expor credenciais AWS no navegador.",
      "en": "A frontend needs to upload files to S3 without exposing AWS credentials in the browser."
    },
    "question": {
      "pt-BR": "Qual padrão é mais recomendado?",
      "en": "Which pattern is most recommended?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Enviar Access Key ao frontend",
          "en": "Send Access Key to frontend"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Expor chave no cliente é risco crítico de segurança.",
          "en": "Exposing key on client is a critical security risk."
        }
      },
      {
        "title": {
          "pt-BR": "Gerar URL pré-assinada no backend e enviar ao cliente",
          "en": "Generate pre-signed URL in backend and return to client"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Presigned URL permite upload temporário com permissões limitadas sem divulgar credenciais permanentes.",
          "en": "A pre-signed URL enables temporary limited upload permissions without exposing permanent credentials."
        }
      },
      {
        "title": {
          "pt-BR": "Deixar bucket público para escrita",
          "en": "Make bucket publicly writable"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Permissão pública de escrita é altamente insegura.",
          "en": "Public write permission is highly insecure."
        }
      },
      {
        "title": {
          "pt-BR": "Usar CloudTrail para subir arquivo",
          "en": "Use CloudTrail to upload files"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudTrail audita chamadas, não é mecanismo de upload.",
          "en": "CloudTrail audits calls, it is not an upload mechanism."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Uploads de cliente para S3 devem usar URL pré-assinada com expiração curta e escopo mínimo.",
      "en": "Client-to-S3 uploads should use short-lived pre-signed URLs with minimal scope."
    }
  },
  {
    "id": 15,
    "title": {
      "pt-BR": "Cache de API - Redução de latência",
      "en": "API Caching - Latency Reduction"
    },
    "description": {
      "pt-BR": "Uma API de leitura recebe alto volume de requisições idênticas e o backend está sobrecarregado.",
      "en": "A read-heavy API receives high volume of identical requests and backend is overloaded."
    },
    "question": {
      "pt-BR": "Qual ação tende a trazer ganho imediato?",
      "en": "Which action tends to bring immediate gain?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Aumentar apenas logs em nível debug",
          "en": "Only increase debug-level logs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Mais log não reduz carga de requisição repetida.",
          "en": "More logging does not reduce repeated request load."
        }
      },
      {
        "title": {
          "pt-BR": "Remover compressão das respostas",
          "en": "Remove response compression"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Isso pode até piorar latência e consumo de banda.",
          "en": "This may even worsen latency and bandwidth usage."
        }
      },
      {
        "title": {
          "pt-BR": "Habilitar cache no API Gateway para endpoints elegíveis",
          "en": "Enable API Gateway cache for eligible endpoints"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Cache reduz chamadas repetidas ao backend e melhora latência para leituras frequentes.",
          "en": "Caching reduces repeated backend calls and improves latency for frequent reads."
        }
      },
      {
        "title": {
          "pt-BR": "Forçar todos os clientes a revalidar token por chamada",
          "en": "Force all clients to revalidate token on every call"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Não endereça diretamente o gargalo de dados repetidos.",
          "en": "It does not directly address repeated-data bottleneck."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para APIs de leitura com repetição alta, cache é alavanca direta de performance e custo.",
      "en": "For read APIs with high repetition, caching is a direct performance and cost lever."
    }
  },
  {
    "id": 16,
    "title": {
      "pt-BR": "Idempotência - Reprocessamento seguro",
      "en": "Idempotency - Safe Reprocessing"
    },
    "description": {
      "pt-BR": "Um endpoint de pagamento pode receber retries do cliente por timeout de rede. O sistema precisa evitar cobrança duplicada.",
      "en": "A payment endpoint may receive client retries due to network timeouts. The system must avoid duplicate charges."
    },
    "question": {
      "pt-BR": "Qual prática é mais indicada?",
      "en": "Which practice is most appropriate?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Desabilitar retry no cliente",
          "en": "Disable client retries"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Retentativas são necessárias em ambientes distribuídos e não devem ser removidas por completo.",
          "en": "Retries are necessary in distributed environments and should not be fully removed."
        }
      },
      {
        "title": {
          "pt-BR": "Aumentar timeout para 5 minutos",
          "en": "Increase timeout to 5 minutes"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Timeout maior não garante ausência de duplicidade.",
          "en": "Longer timeout does not guarantee absence of duplication."
        }
      },
      {
        "title": {
          "pt-BR": "Usar sessões sticky em load balancer",
          "en": "Use sticky sessions on load balancer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Sticky sessions não resolvem idempotência de operação de negócio.",
          "en": "Sticky sessions do not solve business-operation idempotency."
        }
      },
      {
        "title": {
          "pt-BR": "Implementar chave de idempotência persistida por operação",
          "en": "Implement a persisted idempotency key per operation"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A chave de idempotência permite reconhecer retries e impedir execução duplicada de transações críticas.",
          "en": "An idempotency key allows recognizing retries and preventing duplicate execution of critical transactions."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Em pagamentos e operações críticas, idempotência é requisito central para consistência sob falhas e retries.",
      "en": "For payments and critical operations, idempotency is central for consistency under failures and retries."
    }
  },
  {
    "id": 17,
    "title": {
      "pt-BR": "VPC Endpoint - Acesso privado ao S3",
      "en": "VPC Endpoint - Private Access to S3"
    },
    "description": {
      "pt-BR": "Instâncias em sub-rede privada precisam acessar S3 sem sair para internet pública.",
      "en": "Instances in private subnet need to access S3 without traversing public internet."
    },
    "question": {
      "pt-BR": "Qual recurso resolve isso de forma nativa?",
      "en": "Which native feature solves this?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Gateway VPC Endpoint para S3",
          "en": "Gateway VPC Endpoint for S3"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O endpoint de gateway para S3 permite acesso privado, sem NAT para esse tráfego.",
          "en": "Gateway endpoint for S3 enables private access without NAT for this traffic."
        }
      },
      {
        "title": {
          "pt-BR": "Internet Gateway",
          "en": "Internet Gateway"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Internet Gateway expõe rota pública; não atende ao requisito de tráfego privado.",
          "en": "Internet Gateway exposes public routing; it does not meet private-traffic requirement."
        }
      },
      {
        "title": {
          "pt-BR": "Elastic IP",
          "en": "Elastic IP"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Elastic IP é endereço público fixo, sem relação com rota privada para S3.",
          "en": "Elastic IP is a fixed public address, unrelated to private routing to S3."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Global Accelerator",
          "en": "AWS Global Accelerator"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Global Accelerator melhora rota global, não substitui endpoint privado para serviço AWS.",
          "en": "Global Accelerator improves global routing, it does not replace private endpoint access to AWS services."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para acesso privado de VPC ao S3, endpoint de gateway é o padrão recomendado.",
      "en": "For private VPC-to-S3 access, gateway endpoint is the recommended standard."
    }
  },
  {
    "id": 18,
    "title": {
      "pt-BR": "CloudWatch Logs Insights - Investigação rápida",
      "en": "CloudWatch Logs Insights - Fast Investigation"
    },
    "description": {
      "pt-BR": "Após erro em produção, a equipe precisa consultar logs estruturados rapidamente com filtros e agregações.",
      "en": "After a production incident, the team needs to query structured logs quickly with filters and aggregations."
    },
    "question": {
      "pt-BR": "Qual recurso AWS atende melhor?",
      "en": "Which AWS feature best fits?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Cost Explorer",
          "en": "AWS Cost Explorer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Cost Explorer analisa custos, não consulta de logs técnicos.",
          "en": "Cost Explorer analyzes costs, not technical log queries."
        }
      },
      {
        "title": {
          "pt-BR": "CloudWatch Logs Insights",
          "en": "CloudWatch Logs Insights"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Logs Insights fornece linguagem de consulta para filtrar, agrupar e analisar logs de forma interativa.",
          "en": "Logs Insights provides a query language to filter, aggregate, and analyze logs interactively."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Budgets é para controle financeiro, não troubleshooting de aplicação.",
          "en": "Budgets is for financial control, not application troubleshooting."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Shield",
          "en": "AWS Shield"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Shield protege contra DDoS, não oferece consulta analítica de logs operacionais.",
          "en": "Shield protects against DDoS, not operational log analytics querying."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para investigação operacional rápida em logs, CloudWatch Logs Insights é a ferramenta adequada.",
      "en": "For fast operational investigation in logs, CloudWatch Logs Insights is the right tool."
    }
  },
  {
    "id": 19,
    "title": {
      "pt-BR": "RDS - Leitura escalável",
      "en": "RDS - Read Scalability"
    },
    "description": {
      "pt-BR": "Um banco relacional está com gargalo de leitura, enquanto escrita permanece estável no primário.",
      "en": "A relational database faces read bottlenecks while writes remain stable on primary."
    },
    "question": {
      "pt-BR": "Qual estratégia é mais adequada para aliviar leituras?",
      "en": "Which strategy is most suitable to offload reads?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Desabilitar índices para acelerar consultas",
          "en": "Disable indexes to speed up queries"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Remover índices costuma piorar consultas de leitura.",
          "en": "Removing indexes usually worsens read queries."
        }
      },
      {
        "title": {
          "pt-BR": "Forçar todas as leituras no writer",
          "en": "Force all reads on writer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Centralizar no primário aumenta o gargalo existente.",
          "en": "Centralizing on primary increases the existing bottleneck."
        }
      },
      {
        "title": {
          "pt-BR": "Criar Read Replicas e direcionar tráfego de leitura",
          "en": "Create Read Replicas and route read traffic"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Read Replicas são projetadas para escalar leitura em bancos relacionais gerenciados.",
          "en": "Read Replicas are designed to scale reads in managed relational databases."
        }
      },
      {
        "title": {
          "pt-BR": "Trocar para EFS para consultas SQL",
          "en": "Switch to EFS for SQL queries"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "EFS é sistema de arquivos, não mecanismo de escala de leitura SQL relacional.",
          "en": "EFS is a file system, not a relational SQL read scaling mechanism."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para aliviar leitura em RDS, a prática padrão é escalar horizontalmente com réplicas de leitura.",
      "en": "To offload reads in RDS, the standard practice is horizontal scaling via read replicas."
    }
  },
  {
    "id": 20,
    "title": {
      "pt-BR": "Resiliência - Retry com backoff",
      "en": "Resilience - Retry with Backoff"
    },
    "description": {
      "pt-BR": "Uma integração HTTP externa falha intermitentemente. O time quer aumentar taxa de sucesso sem sobrecarregar o parceiro.",
      "en": "An external HTTP integration fails intermittently. The team wants to increase success rate without overloading partner systems."
    },
    "question": {
      "pt-BR": "Qual estratégia de cliente é mais adequada?",
      "en": "Which client strategy is most appropriate?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Retry infinito imediato sem intervalo",
          "en": "Immediate infinite retries without interval"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Isso tende a amplificar falha e causar efeito cascata.",
          "en": "This tends to amplify failures and cause cascading effects."
        }
      },
      {
        "title": {
          "pt-BR": "Sem retry em nenhuma falha",
          "en": "No retry on any failure"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Falhas transitórias deixariam de ser recuperadas automaticamente.",
          "en": "Transient failures would no longer be automatically recovered."
        }
      },
      {
        "title": {
          "pt-BR": "Retry linear fixo com alta frequência",
          "en": "High-frequency fixed linear retries"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Ainda pode gerar pressão excessiva em incidentes.",
          "en": "It can still generate excessive pressure during incidents."
        }
      },
      {
        "title": {
          "pt-BR": "Retry exponencial com jitter e limite de tentativas",
          "en": "Exponential backoff with jitter and retry limit"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Backoff exponencial com jitter reduz colisões de retry e melhora recuperação sem sobrecarga.",
          "en": "Exponential backoff with jitter reduces retry collisions and improves recovery without overload."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Retry controlado com backoff e jitter é uma prática essencial de resiliência em integrações distribuídas.",
      "en": "Controlled retries with backoff and jitter are essential resilience practices in distributed integrations."
    }
  }
];
