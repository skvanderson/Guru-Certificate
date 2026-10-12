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
          "pt-BR": "Publicar as tarefas em uma fila Amazon SQS e processá-las de forma assíncrona com uma função Lambda consumidora",
          "en": "Publish the tasks to an Amazon SQS queue and process them asynchronously with a consumer Lambda function"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A fila desacopla a API do downstream lento: a API responde logo após enfileirar, as mensagens ficam retidas até serem processadas e falhas são retentadas (com DLQ) sem perda de eventos.",
          "en": "The queue decouples the API from the slow downstream: the API responds right after enqueuing, messages are retained until processed, and failures are retried (with a DLQ) without losing events."
        }
      },
      {
        "title": {
          "pt-BR": "Aumentar o timeout e a memória da função Lambda para absorver a latência maior das chamadas downstream",
          "en": "Increase the Lambda function timeout and memory to absorb the higher latency of downstream calls"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A chamada continua síncrona e acoplada ao downstream; além disso, a integração do API Gateway tem timeout padrão de 29 s, então o cliente ainda recebe erro mesmo que a função rode mais tempo.",
          "en": "The call remains synchronous and coupled to the downstream; also, the API Gateway integration has a default 29-second timeout, so the client still gets an error even if the function runs longer."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar reserved concurrency na função Lambda para limitar execuções simultâneas contra o serviço downstream",
          "en": "Configure reserved concurrency on the Lambda function to cap concurrent executions against the downstream service"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Protege o downstream, mas em invocação síncrona as requisições acima do limite são rejeitadas com throttling (429), ou seja, os eventos da campanha são recusados em vez de retidos para processamento posterior.",
          "en": "It protects the downstream, but with synchronous invocation requests above the limit are throttled (429), so campaign events are rejected instead of being retained for later processing."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar provisioned concurrency na função Lambda para manter ambientes pré-inicializados durante as campanhas",
          "en": "Configure provisioned concurrency on the Lambda function to keep pre-initialized environments during campaigns"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Provisioned concurrency elimina cold starts, mas o problema é a lentidão dos serviços downstream; as chamadas continuam síncronas e sujeitas aos mesmos timeouts.",
          "en": "Provisioned concurrency removes cold starts, but the problem is slow downstream services; calls stay synchronous and subject to the same timeouts."
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
          "pt-BR": "API Gateway com Lambda Authorizer por cliente e throttling configurado no nível do estágio (stage)",
          "en": "API Gateway with a per-client Lambda Authorizer and throttling configured at the stage level"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O authorizer identifica o cliente, mas o throttling de estágio é compartilhado por todos os consumidores; não há quota nem limites distintos por cliente, nem medição de uso por chave.",
          "en": "The authorizer identifies the client, but stage throttling is shared by all consumers; there are no per-client quotas or distinct limits, and no usage metering by key."
        }
      },
      {
        "title": {
          "pt-BR": "API Gateway com Usage Plans associados a API Keys por cliente e acompanhamento de uso por chave",
          "en": "API Gateway with Usage Plans tied to per-client API Keys and usage tracking per key"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Usage Plans definem rate, burst e quota por API Key, permitindo limites diferentes por SLA, e o API Gateway registra o uso de cada chave para medição e observabilidade.",
          "en": "Usage Plans define rate, burst, and quota per API Key, allowing different limits per SLA, and API Gateway records each key's usage for metering and observability."
        }
      },
      {
        "title": {
          "pt-BR": "AWS WAF associado ao estágio do API Gateway com regras rate-based agregadas por endereço IP",
          "en": "AWS WAF associated with the API Gateway stage using rate-based rules aggregated by IP address"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Regras rate-based limitam por IP (ou chave de agregação de requisição), não por contrato de cliente; não oferecem quotas por período nem relatório de uso por API Key, e um cliente com vários IPs escapa do limite.",
          "en": "Rate-based rules limit per IP (or request aggregation key), not per client contract; they offer no per-period quotas or usage reports per API Key, and a client with many IPs escapes the limit."
        }
      },
      {
        "title": {
          "pt-BR": "API Gateway com Cognito User Pool Authorizer e reserved concurrency nas funções Lambda de backend",
          "en": "API Gateway with a Cognito User Pool Authorizer and reserved concurrency on the backend Lambda functions"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Cognito resolve autenticação e reserved concurrency limita a função como um todo, não cada cliente; um consumidor pesado consome a concorrência de todos e não há medição por chave de uso.",
          "en": "Cognito handles authentication and reserved concurrency limits the function as a whole, not each client; a heavy consumer uses up everyone's concurrency and there is no metering by usage key."
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
          "pt-BR": "Adicionar DynamoDB Accelerator (DAX) na frente da tabela mantendo a chave de partição atual",
          "en": "Add DynamoDB Accelerator (DAX) in front of the table while keeping the current partition key"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "DAX armazena leituras em cache, mas as escritas passam direto (write-through) para a mesma partição quente, e leituras fortemente consistentes não usam o cache; a concentração continua.",
          "en": "DAX caches reads, but writes go straight through (write-through) to the same hot partition, and strongly consistent reads bypass the cache; the concentration remains."
        }
      },
      {
        "title": {
          "pt-BR": "Criar um Global Secondary Index usando a mesma partition key para distribuir as leituras",
          "en": "Create a Global Secondary Index using the same partition key to spread reads"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um GSI com a mesma partition key herda a mesma distribuição desigual; além disso, throttling de escrita no GSI pode gerar throttling nas escritas da tabela base.",
          "en": "A GSI with the same partition key inherits the same skewed distribution; also, write throttling on the GSI can cause write throttling on the base table."
        }
      },
      {
        "title": {
          "pt-BR": "Redesenhar a partition key com maior cardinalidade, como write sharding por sufixo",
          "en": "Redesign the partition key for higher cardinality, such as suffix-based write sharding"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Hot partitions surgem quando poucos valores de chave concentram o tráfego; uma chave de alta cardinalidade distribui leituras e escritas entre partições.",
          "en": "Hot partitions happen when few key values concentrate traffic; a high-cardinality key distributes reads and writes across partitions."
        }
      },
      {
        "title": {
          "pt-BR": "Migrar a tabela para o modo de capacidade on-demand mantendo a chave de partição atual",
          "en": "Switch the table to on-demand capacity mode while keeping the current partition key"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "On-demand ajusta a capacidade da tabela, mas cada partição continua limitada (~3.000 RCU e 1.000 WCU); uma chave quente segue sofrendo throttling.",
          "en": "On-demand adjusts table capacity, but each partition is still limited (~3,000 RCU and 1,000 WCU); a hot key keeps getting throttled."
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
          "pt-BR": "Aumentar o Visibility Timeout da fila para dar mais tempo de processamento ao consumidor",
          "en": "Increase the queue Visibility Timeout to give the consumer more processing time"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Só ajuda quando a falha é por processamento lento; uma mensagem venenosa falha de novo e volta à fila a cada expiração, sem nunca ser isolada.",
          "en": "It only helps when failures come from slow processing; a poison message fails again and returns to the queue on every expiration, never being isolated."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar DelaySeconds na fila (delay queue) para adiar a reentrega das mensagens com falha",
          "en": "Configure DelaySeconds on the queue (delay queue) to postpone redelivery of failed messages"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O delay da fila vale apenas para a primeira entrega de mensagens novas, não para reentregas após falha, e não remove as mensagens problemáticas da fila principal.",
          "en": "The queue delay only applies to the first delivery of new messages, not to redeliveries after failure, and it does not remove problematic messages from the main queue."
        }
      },
      {
        "title": {
          "pt-BR": "Converter para uma fila FIFO com Message Group ID para ordenar o reprocessamento das mensagens",
          "en": "Convert to a FIFO queue with Message Group ID to order message reprocessing"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "FIFO garante ordem por grupo, o que piora o cenário: uma mensagem com falha bloqueia as seguintes do mesmo grupo até ser processada ou removida.",
          "en": "FIFO guarantees per-group ordering, which worsens the scenario: a failing message blocks the following messages of the same group until it is processed or removed."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar uma Dead Letter Queue via redrive policy com maxReceiveCount adequado",
          "en": "Configure a Dead Letter Queue via redrive policy with a suitable maxReceiveCount"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Ao exceder maxReceiveCount, o SQS move a mensagem para a DLQ, liberando a fila principal e preservando a mensagem para análise e redrive posterior.",
          "en": "Once maxReceiveCount is exceeded, SQS moves the message to the DLQ, unblocking the main queue and keeping the message for analysis and later redrive."
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
          "pt-BR": "Um tópico Amazon SNS com uma assinatura (fila SQS ou Lambda) para cada serviço consumidor",
          "en": "An Amazon SNS topic with one subscription (SQS queue or Lambda) per consuming service"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O produtor publica uma única vez e o SNS entrega uma cópia a cada assinante; novos consumidores são adicionados sem alterar o produtor.",
          "en": "The producer publishes once and SNS delivers a copy to each subscriber; new consumers are added without changing the producer."
        }
      },
      {
        "title": {
          "pt-BR": "Uma única fila Amazon SQS Standard consumida em paralelo pelos três serviços",
          "en": "A single Amazon SQS Standard queue consumed in parallel by the three services"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Consumidores de uma mesma fila competem pelas mensagens: cada mensagem é processada por apenas um deles, então nem todos os domínios recebem o pedido.",
          "en": "Consumers of the same queue compete for messages: each message is processed by only one of them, so not every domain receives the order."
        }
      },
      {
        "title": {
          "pt-BR": "Uma fila Amazon SQS FIFO com um Message Group ID distinto para cada domínio consumidor",
          "en": "An Amazon SQS FIFO queue with a distinct Message Group ID for each consuming domain"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Cada mensagem pertence a um único grupo e é entregue uma vez; o produtor teria de enviar três cópias e conhecer cada consumidor, o que é acoplamento, não fanout.",
          "en": "Each message belongs to a single group and is delivered once; the producer would have to send three copies and know each consumer, which is coupling, not fanout."
        }
      },
      {
        "title": {
          "pt-BR": "Invocação assíncrona do Lambda com Destinations (OnSuccess) apontando para os três serviços",
          "en": "Asynchronous Lambda invocation with Destinations (OnSuccess) pointing to the three services"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Lambda Destinations aceitam apenas um destino OnSuccess e um OnFailure por função, portanto não entregam o mesmo evento a três consumidores.",
          "en": "Lambda Destinations accept only one OnSuccess and one OnFailure destination per function, so they cannot deliver the same event to three consumers."
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
          "pt-BR": "Uma única função Lambda executando as etapas em sequência com blocos try/catch no código",
          "en": "A single Lambda function running the steps sequentially with try/catch blocks in code"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Fica limitada a 15 minutos, não guarda estado por etapa e um retry reexecuta a função inteira (inclusive a cobrança); não há histórico visual de qual etapa falhou.",
          "en": "It is limited to 15 minutes, keeps no per-step state, and a retry re-runs the whole function (including the charge); there is no visual history of which step failed."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Step Functions com estados Task e políticas Retry e Catch definidas por etapa",
          "en": "AWS Step Functions with Task states and Retry and Catch policies defined per step"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Step Functions mantém o estado da execução, aplica retries e fallbacks (Catch) por estado e registra o histórico de cada etapa do processo distribuído.",
          "en": "Step Functions keeps execution state, applies retries and fallbacks (Catch) per state, and records the history of each step in the distributed process."
        }
      },
      {
        "title": {
          "pt-BR": "Filas Amazon SQS encadeadas entre as etapas, cada uma com sua própria Dead Letter Queue",
          "en": "Amazon SQS queues chained between the steps, each with its own Dead Letter Queue"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Desacopla e isola falhas por etapa, mas não existe um estado central da operação; fallback, compensação e rastreio ponta a ponta precisam ser codificados manualmente.",
          "en": "It decouples and isolates failures per step, but there is no central operation state; fallback, compensation, and end-to-end tracking must be coded manually."
        }
      },
      {
        "title": {
          "pt-BR": "Regras do Amazon EventBridge encadeando eventos entre funções Lambda de cada etapa",
          "en": "Amazon EventBridge rules chaining events between the Lambda functions of each step"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "É coreografia: o EventBridge roteia eventos e retenta a entrega ao alvo, mas não mantém estado da execução nem coordena retries de negócio e fallback entre etapas.",
          "en": "It is choreography: EventBridge routes events and retries target delivery, but it keeps no execution state and does not coordinate business retries and fallback across steps."
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
          "pt-BR": "AWS CodeBuild acionado por webhook, com deploy via AWS CLI dentro do próprio buildspec",
          "en": "AWS CodeBuild triggered by webhook, deploying via AWS CLI inside the buildspec itself"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Automatiza build e deploy, mas um único projeto de build não modela estágios de promoção entre ambientes, aprovações manuais nem visibilidade do fluxo de entrega.",
          "en": "It automates build and deploy, but a single build project does not model promotion stages across environments, manual approvals, or delivery flow visibility."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CodeDeploy com deployment group para Lambda e AWS CodeArtifact para os pacotes",
          "en": "AWS CodeDeploy with a Lambda deployment group and AWS CodeArtifact for packages"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CodeDeploy faz o deslocamento de tráfego entre versões do Lambda e CodeArtifact hospeda dependências, mas nenhum dos dois executa build/testes nem orquestra a promoção entre ambientes.",
          "en": "CodeDeploy shifts traffic between Lambda versions and CodeArtifact hosts dependencies, but neither runs build/tests nor orchestrates promotion across environments."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CodeCommit, AWS CodeBuild e AWS CodePipeline com estágios por ambiente",
          "en": "AWS CodeCommit, AWS CodeBuild, and AWS CodePipeline with per-environment stages"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Repositório, build/testes e um pipeline que orquestra os estágios de deploy e promoção entre ambientes cobrem todo o ciclo pedido.",
          "en": "Repository, build/tests, and a pipeline orchestrating deploy and promotion stages across environments cover the whole requested lifecycle."
        }
      },
      {
        "title": {
          "pt-BR": "AWS SAM CLI executando sam build e sam deploy a partir da máquina do desenvolvedor",
          "en": "AWS SAM CLI running sam build and sam deploy from the developer's machine"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "SAM simplifica empacotar e implantar Lambda, mas executado localmente é um processo manual, sem testes automatizados obrigatórios nem promoção controlada entre ambientes.",
          "en": "SAM simplifies packaging and deploying Lambda, but run locally it is a manual process with no enforced automated tests or controlled environment promotion."
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
          "pt-BR": "Criar um usuário IAM de menor privilégio e gravar suas access keys em variáveis de ambiente",
          "en": "Create a least-privilege IAM user and store its access keys in environment variables"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A política pode ser restrita, mas as access keys continuam sendo credenciais estáticas de longo prazo no servidor, exatamente o que o requisito proíbe, e exigem rotação manual.",
          "en": "The policy may be restricted, but the access keys are still long-term static credentials on the server, exactly what the requirement forbids, and need manual rotation."
        }
      },
      {
        "title": {
          "pt-BR": "Guardar as access keys de um usuário IAM no Secrets Manager e lê-las ao iniciar a aplicação",
          "en": "Keep an IAM user's access keys in Secrets Manager and read them at application startup"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Para ler o Secrets Manager a instância já precisa de credenciais, e as chaves obtidas continuam sendo credenciais de longo prazo; a solução nativa é a role da instância.",
          "en": "To read Secrets Manager the instance already needs credentials, and the retrieved keys are still long-term credentials; the native solution is the instance role."
        }
      },
      {
        "title": {
          "pt-BR": "Criar um Gateway VPC Endpoint para S3 com endpoint policy restrita ao bucket da aplicação",
          "en": "Create a Gateway VPC Endpoint for S3 with an endpoint policy restricted to the application bucket"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O endpoint define o caminho de rede e sua política apenas restringe o que passa por ele; as requisições ainda precisam ser assinadas com credenciais IAM, que ele não fornece.",
          "en": "The endpoint defines the network path and its policy only restricts what goes through it; requests still must be signed with IAM credentials, which it does not provide."
        }
      },
      {
        "title": {
          "pt-BR": "Associar uma IAM Role à instância via instance profile com política de menor privilégio",
          "en": "Attach an IAM Role to the instance via an instance profile with a least-privilege policy"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A role entrega credenciais temporárias rotacionadas automaticamente pelo metadata da instância, que o SDK usa sem nenhum segredo armazenado no servidor.",
          "en": "The role delivers temporary, automatically rotated credentials through instance metadata, which the SDK uses without any secret stored on the server."
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
          "pt-BR": "AWS Secrets Manager com rotação automática configurada via função Lambda de rotação",
          "en": "AWS Secrets Manager with automatic rotation configured via a rotation Lambda function"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Secrets Manager criptografa o segredo com KMS e rotaciona credenciais de banco automaticamente (com templates prontos para RDS), atualizando também o banco.",
          "en": "Secrets Manager encrypts the secret with KMS and rotates database credentials automatically (with ready-made templates for RDS), also updating the database."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Systems Manager Parameter Store com parâmetros SecureString criptografados via KMS",
          "en": "AWS Systems Manager Parameter Store with SecureString parameters encrypted via KMS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Parameter Store armazena o valor criptografado, mas não possui rotação automática nativa de credenciais; a troca da senha no banco e no parâmetro seria manual ou customizada.",
          "en": "Parameter Store stores the value encrypted, but it has no native automatic credential rotation; changing the password in the database and parameter would be manual or custom."
        }
      },
      {
        "title": {
          "pt-BR": "AWS KMS com chave gerenciada pelo cliente e rotação automática de chave habilitada",
          "en": "AWS KMS with a customer managed key and automatic key rotation enabled"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A rotação do KMS troca o material criptográfico da chave, não a senha do banco; a credencial em si continuaria a mesma e precisaria ser guardada em outro lugar.",
          "en": "KMS rotation changes the key's cryptographic material, not the database password; the credential itself would stay the same and still need to be stored elsewhere."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Certificate Manager com renovação automática dos certificados emitidos",
          "en": "AWS Certificate Manager with automatic renewal of issued certificates"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "ACM gerencia e renova certificados TLS, mas não armazena nem rotaciona credenciais de usuário e senha de banco de dados.",
          "en": "ACM manages and renews TLS certificates, but it does not store or rotate database username and password credentials."
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
          "pt-BR": "Amazon CloudWatch Metrics com alarmes de latência configurados por serviço",
          "en": "Amazon CloudWatch Metrics with latency alarms configured per service"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Métricas mostram a latência agregada de cada serviço isoladamente, mas não correlacionam uma mesma requisição entre os serviços para indicar onde ela degradou.",
          "en": "Metrics show each service's aggregate latency in isolation, but they do not correlate the same request across services to show where it degraded."
        }
      },
      {
        "title": {
          "pt-BR": "AWS X-Ray com instrumentação via SDK e visualização do mapa de serviços",
          "en": "AWS X-Ray with SDK instrumentation and service map visualization"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "X-Ray propaga um trace ID entre os serviços e mostra segmentos e subsegmentos com a latência de cada salto, apontando o serviço que degrada a requisição.",
          "en": "X-Ray propagates a trace ID across services and shows segments and subsegments with each hop's latency, pointing to the service degrading the request."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail com trilha registrando eventos de gerenciamento e de dados",
          "en": "AWS CloudTrail with a trail recording management and data events"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudTrail registra chamadas às APIs da AWS (quem fez o quê), não o caminho e a latência das requisições entre os microserviços da aplicação.",
          "en": "CloudTrail records AWS API calls (who did what), not the path and latency of requests between the application's microservices."
        }
      },
      {
        "title": {
          "pt-BR": "VPC Flow Logs publicados no CloudWatch Logs para as sub-redes da aplicação",
          "en": "VPC Flow Logs published to CloudWatch Logs for the application subnets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Flow Logs capturam metadados de tráfego IP (origem, destino, bytes, aceito/rejeitado), sem informação de latência por requisição nem correlação entre chamadas.",
          "en": "Flow Logs capture IP traffic metadata (source, destination, bytes, accept/reject), with no per-request latency or correlation between calls."
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
          "pt-BR": "CloudFormation Change Sets gerados para a stack",
          "en": "CloudFormation Change Sets generated for the stack"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Change Sets comparam um template novo com o estado registrado da stack antes de um update; não detectam alterações feitas diretamente nos recursos fora do CloudFormation.",
          "en": "Change Sets compare a new template with the stack's recorded state before an update; they do not detect changes made directly to resources outside CloudFormation."
        }
      },
      {
        "title": {
          "pt-BR": "CloudFormation Stack Policy aplicada à stack",
          "en": "CloudFormation Stack Policy applied to the stack"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Stack Policy impede que updates da própria stack alterem recursos protegidos; não bloqueia nem detecta mudanças manuais feitas no console.",
          "en": "A Stack Policy prevents the stack's own updates from changing protected resources; it neither blocks nor detects manual changes made in the console."
        }
      },
      {
        "title": {
          "pt-BR": "CloudFormation Drift Detection executada na stack",
          "en": "CloudFormation Drift Detection run on the stack"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Drift Detection compara a configuração real de cada recurso com a esperada pelo template e aponta os recursos MODIFIED ou DELETED.",
          "en": "Drift Detection compares each resource's actual configuration with the template's expected one and flags MODIFIED or DELETED resources."
        }
      },
      {
        "title": {
          "pt-BR": "CloudFormation Rollback Triggers configurados na stack",
          "en": "CloudFormation Rollback Triggers configured on the stack"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Rollback Triggers monitoram alarmes do CloudWatch durante create/update e revertem a operação se dispararem; não verificam divergência dos recursos em relação ao template.",
          "en": "Rollback Triggers watch CloudWatch alarms during create/update and roll back if they fire; they do not check resource divergence from the template."
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
          "pt-BR": "Amazon EKS com managed node groups e Cluster Autoscaler",
          "en": "Amazon EKS with managed node groups and Cluster Autoscaler"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Managed node groups automatizam o ciclo de vida dos nós, mas eles continuam sendo instâncias EC2 na sua conta, com AMIs, capacidade e atualizações sob sua responsabilidade.",
          "en": "Managed node groups automate node lifecycle, but nodes are still EC2 instances in your account, with AMIs, capacity, and updates under your responsibility."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ECS com EC2 launch type e capacity provider com Auto Scaling group",
          "en": "Amazon ECS with EC2 launch type and a capacity provider backed by an Auto Scaling group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O capacity provider escala as instâncias automaticamente, mas a equipe ainda administra os hosts EC2 (AMI, patches, tipo de instância), o que o requisito quer evitar.",
          "en": "The capacity provider scales instances automatically, but the team still manages the EC2 hosts (AMI, patches, instance type), which the requirement wants to avoid."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Elastic Beanstalk com plataforma Docker em ambiente com Auto Scaling",
          "en": "AWS Elastic Beanstalk with the Docker platform in an Auto Scaling environment"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Beanstalk automatiza o provisionamento, mas os containers rodam em instâncias EC2 criadas na sua conta, que continuam sendo hosts a gerenciar e atualizar.",
          "en": "Beanstalk automates provisioning, but containers run on EC2 instances created in your account, which are still hosts to manage and update."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ECS com AWS Fargate e Service Auto Scaling nas tarefas",
          "en": "Amazon ECS with AWS Fargate and Service Auto Scaling on tasks"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Com Fargate não há instâncias para gerenciar: a AWS provisiona a computação por tarefa, e o Service Auto Scaling ajusta a quantidade de tarefas.",
          "en": "With Fargate there are no instances to manage: AWS provisions compute per task, and Service Auto Scaling adjusts the number of tasks."
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
          "pt-BR": "Amazon EventBridge com regras e event patterns por source e detail-type",
          "en": "Amazon EventBridge with rules and event patterns on source and detail-type"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "EventBridge recebe eventos de aplicações, serviços AWS e parceiros SaaS e usa event patterns para filtrar por origem/tipo e rotear a múltiplos alvos.",
          "en": "EventBridge ingests events from applications, AWS services, and SaaS partners and uses event patterns to filter by source/type and route to multiple targets."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Step Functions com estado Choice direcionando cada tipo de evento",
          "en": "AWS Step Functions with a Choice state directing each event type"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Choice decide ramos dentro de uma execução já iniciada; seria preciso iniciar uma execução por evento e não há ingestão nativa de múltiplas fontes como em um barramento de eventos.",
          "en": "Choice picks branches inside an already started execution; you would need to start one execution per event and there is no native multi-source ingestion like an event bus."
        }
      },
      {
        "title": {
          "pt-BR": "Application Load Balancer com regras de listener por path e cabeçalho HTTP",
          "en": "Application Load Balancer with listener rules by path and HTTP header"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "ALB roteia requisições HTTP síncronas para target groups; não é um barramento de eventos assíncrono nem recebe eventos de serviços AWS para filtragem por origem.",
          "en": "ALB routes synchronous HTTP requests to target groups; it is not an asynchronous event bus and does not receive AWS service events for source-based filtering."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon SQS com uma fila por consumidor e filtragem feita no código consumidor",
          "en": "Amazon SQS with one queue per consumer and filtering done in consumer code"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "SQS não roteia por conteúdo: o produtor precisaria conhecer e enviar para cada fila, e a filtragem por tipo/origem ficaria espalhada no código dos consumidores.",
          "en": "SQS does not route by content: the producer would need to know and send to each queue, and type/source filtering would be scattered across consumer code."
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
          "pt-BR": "Embutir no frontend as access keys de um usuário IAM restrito a s3:PutObject",
          "en": "Embed in the frontend the access keys of an IAM user restricted to s3:PutObject"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Mesmo com permissão mínima, as chaves ficam visíveis a qualquer usuário do navegador e são de longo prazo, permitindo uploads arbitrários até serem revogadas.",
          "en": "Even with minimal permission, the keys are visible to any browser user and are long-term, allowing arbitrary uploads until revoked."
        }
      },
      {
        "title": {
          "pt-BR": "Gerar no backend uma URL pré-assinada do S3 com expiração curta e retorná-la ao cliente",
          "en": "Generate an S3 pre-signed URL with short expiration in the backend and return it to the client"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A URL é assinada pelo backend com suas credenciais e concede apenas aquele upload por tempo limitado, sem expor credenciais ao navegador.",
          "en": "The URL is signed by the backend with its credentials and grants only that upload for a limited time, without exposing credentials to the browser."
        }
      },
      {
        "title": {
          "pt-BR": "Bucket policy permitindo s3:PutObject público restrito pela condição aws:Referer",
          "en": "Bucket policy allowing public s3:PutObject restricted by the aws:Referer condition"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cabeçalho Referer é definido pelo cliente e pode ser forjado; a AWS alerta que essa condição não protege contra acesso não autorizado, então o bucket fica gravável publicamente.",
          "en": "The Referer header is set by the client and can be forged; AWS warns this condition does not protect against unauthorized access, so the bucket is effectively publicly writable."
        }
      },
      {
        "title": {
          "pt-BR": "Habilitar S3 Transfer Acceleration no bucket e enviar os arquivos direto do navegador",
          "en": "Enable S3 Transfer Acceleration on the bucket and upload files directly from the browser"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Transfer Acceleration só acelera a transferência pela rede de borda; a requisição ainda precisa ser autorizada, então não resolve como autenticar o upload sem expor credenciais.",
          "en": "Transfer Acceleration only speeds up transfer via edge locations; the request still needs authorization, so it does not solve how to authenticate the upload without exposing credentials."
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
          "pt-BR": "Aumentar os limites de throttling (rate e burst) do estágio no API Gateway",
          "en": "Increase the stage throttling limits (rate and burst) on API Gateway"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Limites maiores deixam passar ainda mais requisições ao backend já sobrecarregado; nada evita o processamento repetido das mesmas leituras.",
          "en": "Higher limits let even more requests reach the already overloaded backend; nothing prevents repeated processing of the same reads."
        }
      },
      {
        "title": {
          "pt-BR": "Habilitar compressão de payload (minimumCompressionSize) na API do API Gateway",
          "en": "Enable payload compression (minimumCompressionSize) on the API Gateway API"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A compressão reduz o tamanho transferido ao cliente, mas cada requisição continua sendo encaminhada e processada integralmente pelo backend.",
          "en": "Compression reduces the size transferred to the client, but every request is still forwarded to and fully processed by the backend."
        }
      },
      {
        "title": {
          "pt-BR": "Habilitar o cache de estágio do API Gateway com TTL para os endpoints GET elegíveis",
          "en": "Enable API Gateway stage caching with a TTL for eligible GET endpoints"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Respostas idênticas são servidas do cache durante o TTL, sem chamar o backend, reduzindo carga e latência imediatamente.",
          "en": "Identical responses are served from cache during the TTL without calling the backend, reducing load and latency immediately."
        }
      },
      {
        "title": {
          "pt-BR": "Habilitar cache de resultados do Lambda Authorizer com TTL de autorização",
          "en": "Enable Lambda Authorizer result caching with an authorization TTL"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Esse cache guarda apenas a política de autorização do token; a integração com o backend continua sendo chamada em toda requisição.",
          "en": "This cache only stores the token's authorization policy; the backend integration is still called on every request."
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
          "pt-BR": "Configurar os retries do cliente com backoff exponencial, jitter e limite de tentativas",
          "en": "Configure client retries with exponential backoff, jitter, and an attempt limit"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Reduz a pressão das retentativas, mas se a primeira requisição já foi processada e só a resposta se perdeu, o retry cobra novamente.",
          "en": "It reduces retry pressure, but if the first request was already processed and only the response was lost, the retry charges again."
        }
      },
      {
        "title": {
          "pt-BR": "Aumentar o timeout da integração do API Gateway e da função de pagamento",
          "en": "Increase the API Gateway integration timeout and the payment function timeout"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Diminui a frequência de timeouts, mas falhas de rede após o processamento continuam ocorrendo e o servidor não tem como reconhecer a requisição repetida.",
          "en": "It lowers timeout frequency, but network failures after processing still happen and the server has no way to recognize the repeated request."
        }
      },
      {
        "title": {
          "pt-BR": "Colocar uma fila Amazon SQS Standard entre o endpoint e o processador de pagamentos",
          "en": "Place an Amazon SQS Standard queue between the endpoint and the payment processor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A fila desacopla, mas SQS Standard entrega pelo menos uma vez e pode duplicar mensagens; retries do cliente viram novas mensagens, então a duplicidade persiste.",
          "en": "The queue decouples, but SQS Standard delivers at least once and may duplicate messages; client retries become new messages, so duplication persists."
        }
      },
      {
        "title": {
          "pt-BR": "Exigir chave de idempotência por operação e persistir o resultado com escrita condicional",
          "en": "Require an idempotency key per operation and persist the result with a conditional write"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O servidor grava a chave (ex.: DynamoDB com condition expression) e, ao receber um retry com a mesma chave, retorna o resultado anterior em vez de cobrar de novo.",
          "en": "The server records the key (e.g., DynamoDB with a condition expression) and, on a retry with the same key, returns the previous result instead of charging again."
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
          "pt-BR": "Gateway VPC Endpoint para S3 associado às tabelas de rotas das sub-redes privadas",
          "en": "Gateway VPC Endpoint for S3 associated with the private subnets' route tables"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O endpoint de gateway adiciona uma rota (prefix list) para o S3 nas tabelas de rotas, mantendo o tráfego na rede da AWS sem NAT nem Internet Gateway.",
          "en": "The gateway endpoint adds a route (prefix list) to S3 in the route tables, keeping traffic on the AWS network without NAT or an Internet Gateway."
        }
      },
      {
        "title": {
          "pt-BR": "NAT Gateway em sub-rede pública com rota 0.0.0.0/0 a partir das sub-redes privadas",
          "en": "NAT Gateway in a public subnet with a 0.0.0.0/0 route from the private subnets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Permite o acesso, mas o tráfego sai pelo Internet Gateway até os endpoints públicos do S3, além de gerar custo de processamento de dados no NAT.",
          "en": "It enables access, but traffic exits through the Internet Gateway to S3's public endpoints, and it adds NAT data-processing charges."
        }
      },
      {
        "title": {
          "pt-BR": "Egress-only Internet Gateway com rota IPv6 a partir das sub-redes privadas",
          "en": "Egress-only Internet Gateway with an IPv6 route from the private subnets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Oferece saída apenas para IPv6 pela internet, bloqueando conexões de entrada; o tráfego até o S3 continua passando por caminho público.",
          "en": "It provides IPv6-only outbound internet access while blocking inbound connections; traffic to S3 still goes over a public path."
        }
      },
      {
        "title": {
          "pt-BR": "VPC Peering entre a VPC da aplicação e uma VPC na mesma região do bucket",
          "en": "VPC Peering between the application VPC and a VPC in the bucket's region"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O S3 não reside em uma VPC do cliente, e peering não é transitivo para endpoints de outra VPC; não cria rota privada até o serviço S3.",
          "en": "S3 does not live in a customer VPC, and peering is not transitive to another VPC's endpoints; it does not create a private route to the S3 service."
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
          "pt-BR": "CloudWatch Logs metric filters com alarmes associados aos log groups",
          "en": "CloudWatch Logs metric filters with alarms attached to the log groups"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Metric filters geram métricas apenas de eventos ingeridos após sua criação, com padrões predefinidos; não permitem consultas ad hoc com agregações sobre o histórico do incidente.",
          "en": "Metric filters only produce metrics from events ingested after they are created, with predefined patterns; they do not allow ad hoc aggregated queries over the incident history."
        }
      },
      {
        "title": {
          "pt-BR": "CloudWatch Logs Insights com consultas sobre os log groups da aplicação",
          "en": "CloudWatch Logs Insights with queries over the application log groups"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Logs Insights oferece uma linguagem de consulta interativa com filter, stats e parse, descobrindo campos de logs JSON automaticamente sobre dados já armazenados.",
          "en": "Logs Insights provides an interactive query language with filter, stats, and parse, automatically discovering JSON log fields over already stored data."
        }
      },
      {
        "title": {
          "pt-BR": "CloudWatch Logs subscription filter enviando os eventos para uma função Lambda",
          "en": "CloudWatch Logs subscription filter sending events to a Lambda function"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Subscription filters encaminham em tempo quase real apenas eventos novos; exigiria código próprio para analisar e não consulta os logs já gravados do incidente.",
          "en": "Subscription filters forward only new events in near real time; it would require custom analysis code and does not query the incident's already stored logs."
        }
      },
      {
        "title": {
          "pt-BR": "CloudWatch Logs Live Tail acompanhando os log groups da aplicação",
          "en": "CloudWatch Logs Live Tail following the application log groups"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Live Tail exibe eventos em streaming conforme chegam, com filtro simples; não faz agregações nem consultas sobre o histórico já armazenado.",
          "en": "Live Tail streams events as they arrive with simple filtering; it does not aggregate or query the already stored history."
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
          "pt-BR": "Habilitar Multi-AZ (instância standby) e direcionar as leituras para o standby",
          "en": "Enable Multi-AZ (standby instance) and route reads to the standby"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Em uma implantação Multi-AZ de instância, o standby serve apenas para failover e não aceita conexões de leitura.",
          "en": "In a Multi-AZ DB instance deployment, the standby is only for failover and does not accept read connections."
        }
      },
      {
        "title": {
          "pt-BR": "Aumentar a classe da instância primária (scale up) para absorver as leituras",
          "en": "Upgrade the primary instance class (scale up) to absorb the reads"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Escala vertical adia o problema, tem limite e custo crescente, e mantém leituras e escritas competindo no mesmo nó em vez de aliviar o primário.",
          "en": "Vertical scaling postpones the problem, has a ceiling and growing cost, and keeps reads and writes competing on the same node instead of offloading the primary."
        }
      },
      {
        "title": {
          "pt-BR": "Criar Read Replicas e direcionar as consultas de leitura da aplicação a elas",
          "en": "Create Read Replicas and route the application's read queries to them"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Read Replicas recebem replicação assíncrona do primário e atendem consultas de leitura, escalando leitura horizontalmente sem afetar as escritas.",
          "en": "Read Replicas receive asynchronous replication from the primary and serve read queries, scaling reads horizontally without affecting writes."
        }
      },
      {
        "title": {
          "pt-BR": "Colocar o Amazon RDS Proxy na frente da instância primária do banco",
          "en": "Put Amazon RDS Proxy in front of the primary database instance"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "RDS Proxy faz pooling e reaproveitamento de conexões, mas todas as consultas continuam sendo executadas pela mesma instância primária.",
          "en": "RDS Proxy pools and reuses connections, but all queries are still executed by the same primary instance."
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
          "pt-BR": "Retry imediato, sem intervalo, com limite de 10 tentativas por requisição",
          "en": "Immediate retries with no interval, limited to 10 attempts per request"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O limite evita loops infinitos, mas retries sem espera disparam rajadas contra o parceiro justamente quando ele está instável.",
          "en": "The limit avoids infinite loops, but retries without waiting fire bursts at the partner exactly when it is unstable."
        }
      },
      {
        "title": {
          "pt-BR": "Retry com intervalo fixo de 1 segundo e sem limite de tentativas",
          "en": "Retries at a fixed 1-second interval with no attempt limit"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Todos os clientes retentam no mesmo ritmo, gerando ondas sincronizadas, e sem limite a pressão continua indefinidamente durante incidentes longos.",
          "en": "All clients retry at the same pace, creating synchronized waves, and without a limit the pressure continues indefinitely during long incidents."
        }
      },
      {
        "title": {
          "pt-BR": "Backoff exponencial sem jitter e sem limite máximo de tentativas",
          "en": "Exponential backoff without jitter and without a maximum attempt limit"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O intervalo cresce, mas sem jitter os clientes que falharam juntos retentam nos mesmos instantes (thundering herd), e sem limite as tentativas nunca param.",
          "en": "The interval grows, but without jitter clients that failed together retry at the same moments (thundering herd), and without a limit attempts never stop."
        }
      },
      {
        "title": {
          "pt-BR": "Backoff exponencial com jitter e limite máximo de tentativas",
          "en": "Exponential backoff with jitter and a maximum attempt limit"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O intervalo crescente alivia o parceiro, o jitter dessincroniza os clientes e o limite evita pressão indefinida, aumentando a taxa de sucesso.",
          "en": "Growing intervals relieve the partner, jitter desynchronizes clients, and the limit avoids indefinite pressure, raising the success rate."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Retry controlado com backoff e jitter é uma prática essencial de resiliência em integrações distribuídas.",
      "en": "Controlled retries with backoff and jitter are essential resilience practices in distributed integrations."
    }
  }
];
