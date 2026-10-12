export const developerAssociateFlashcards = [
  {
    id: 1,
    category: { 'pt-BR': 'Serverless', en: 'Serverless' },
    front: { 'pt-BR': 'Qual a diferença entre concorrência reservada e provisionada no Lambda?', en: 'What is the difference between reserved and provisioned concurrency in Lambda?' },
    back: {
      'pt-BR': 'Concorrência reservada garante um número máximo de execuções simultâneas para uma função (sem cold start extra). Concorrência provisionada mantém ambientes de execução já inicializados e "aquecidos", eliminando o cold start.',
      en: 'Reserved concurrency guarantees a maximum number of simultaneous executions for a function (without extra cold start handling). Provisioned concurrency keeps execution environments already initialized and "warm," eliminating cold start.'
    }
  },
  {
    id: 2,
    category: { 'pt-BR': 'API', en: 'API' },
    front: { 'pt-BR': 'O que é o Amazon API Gateway?', en: 'What is Amazon API Gateway?' },
    back: {
      'pt-BR': 'Serviço gerenciado para criar, publicar e proteger APIs REST, HTTP e WebSocket, atuando como porta de entrada entre clientes e serviços de backend (como Lambda).',
      en: 'A managed service for creating, publishing, and securing REST, HTTP, and WebSocket APIs, acting as the front door between clients and backend services (such as Lambda).'
    }
  },
  {
    id: 3,
    category: { 'pt-BR': 'Banco de Dados', en: 'Database' },
    front: { 'pt-BR': 'O que são partition key e sort key no DynamoDB?', en: 'What are partition key and sort key in DynamoDB?' },
    back: {
      'pt-BR': 'A partition key determina em qual partição física o item é armazenado (hash da chave); a sort key (opcional) ordena os itens que compartilham a mesma partition key, formando uma chave composta.',
      en: 'The partition key determines which physical partition an item is stored in (hash of the key); the sort key (optional) orders items that share the same partition key, forming a composite key.'
    }
  },
  {
    id: 4,
    category: { 'pt-BR': 'Mensageria', en: 'Messaging' },
    front: { 'pt-BR': 'Qual a diferença entre filas SQS Standard e FIFO?', en: 'What is the difference between SQS Standard and FIFO queues?' },
    back: {
      'pt-BR': 'Standard oferece throughput praticamente ilimitado, mas entrega "pelo menos uma vez" sem garantir ordem. FIFO garante ordem exata e entrega exatamente uma vez, com throughput limitado (até 3.000 msg/s com batching).',
      en: 'Standard offers virtually unlimited throughput but delivers "at least once" without guaranteeing order. FIFO guarantees exact order and exactly-once delivery, with limited throughput (up to 3,000 msg/s with batching).'
    }
  },
  {
    id: 5,
    category: { 'pt-BR': 'Mensageria', en: 'Messaging' },
    front: { 'pt-BR': 'Para que serve o Amazon SNS?', en: 'What is Amazon SNS used for?' },
    back: {
      'pt-BR': 'Serviço de notificação pub/sub que publica uma mensagem uma vez e a entrega a múltiplos assinantes (SQS, Lambda, HTTP, e-mail) simultaneamente, permitindo fanout de eventos.',
      en: 'A pub/sub notification service that publishes a message once and delivers it to multiple subscribers (SQS, Lambda, HTTP, email) simultaneously, enabling event fanout.'
    }
  },
  {
    id: 6,
    category: { 'pt-BR': 'Orquestração', en: 'Orchestration' },
    front: { 'pt-BR': 'Para que serve o AWS Step Functions?', en: 'What is AWS Step Functions used for?' },
    back: {
      'pt-BR': 'Orquestra fluxos de trabalho compostos por múltiplas etapas (ex: várias funções Lambda), modelando estados, retries automáticos e tratamento de falhas por meio de máquinas de estado visuais.',
      en: 'Orchestrates workflows composed of multiple steps (e.g., several Lambda functions), modeling states, automatic retries, and failure handling through visual state machines.'
    }
  },
  {
    id: 7,
    category: { 'pt-BR': 'CI/CD', en: 'CI/CD' },
    front: { 'pt-BR': 'Qual a diferença entre deployment in-place e blue/green no AWS CodeDeploy?', en: 'What is the difference between in-place and blue/green deployment in AWS CodeDeploy?' },
    back: {
      'pt-BR': 'No in-place, a nova versão substitui a aplicação diretamente nas instâncias existentes (com downtime parcial). No blue/green, um novo conjunto de instâncias é criado com a nova versão, e o tráfego só é roteado para ele após validação, permitindo rollback rápido.',
      en: 'In in-place, the new version replaces the application directly on existing instances (with partial downtime). In blue/green, a new set of instances is created with the new version, and traffic is only routed to it after validation, allowing fast rollback.'
    }
  },
  {
    id: 8,
    category: { 'pt-BR': 'CI/CD', en: 'CI/CD' },
    front: { 'pt-BR': 'O que é o AWS CodePipeline?', en: 'What is AWS CodePipeline?' },
    back: {
      'pt-BR': 'Serviço de entrega contínua (CI/CD) que automatiza as etapas de build, teste e deploy de uma aplicação, integrando-se com CodeCommit, CodeBuild, CodeDeploy e ferramentas de terceiros.',
      en: 'A continuous delivery (CI/CD) service that automates the build, test, and deploy stages of an application, integrating with CodeCommit, CodeBuild, CodeDeploy, and third-party tools.'
    }
  },
  {
    id: 9,
    category: { 'pt-BR': 'Plataforma', en: 'Platform' },
    front: { 'pt-BR': 'O que é o AWS Elastic Beanstalk?', en: 'What is AWS Elastic Beanstalk?' },
    back: {
      'pt-BR': 'Plataforma como serviço (PaaS) que provisiona automaticamente a infraestrutura (EC2, load balancer, Auto Scaling) para rodar uma aplicação, deixando o desenvolvedor focado apenas no código.',
      en: 'A platform as a service (PaaS) that automatically provisions the infrastructure (EC2, load balancer, Auto Scaling) to run an application, letting the developer focus only on the code.'
    }
  },
  {
    id: 10,
    category: { 'pt-BR': 'Observabilidade', en: 'Observability' },
    front: { 'pt-BR': 'Para que serve o AWS X-Ray?', en: 'What is AWS X-Ray used for?' },
    back: {
      'pt-BR': 'Rastreia requisições de ponta a ponta em aplicações distribuídas (incluindo microsserviços), ajudando a identificar gargalos de performance e erros entre os componentes.',
      en: 'Traces requests end-to-end across distributed applications (including microservices), helping identify performance bottlenecks and errors between components.'
    }
  },
  {
    id: 11,
    category: { 'pt-BR': 'Observabilidade', en: 'Observability' },
    front: { 'pt-BR': 'Qual a diferença entre CloudWatch Logs, Metrics e Alarms?', en: 'What is the difference between CloudWatch Logs, Metrics, and Alarms?' },
    back: {
      'pt-BR': 'Logs armazena registros de eventos textuais da aplicação; Metrics coleta séries temporais numéricas (ex: uso de CPU); Alarms monitora uma métrica e dispara ações (como notificações) quando um limite é ultrapassado.',
      en: 'Logs stores textual application event records; Metrics collects numeric time-series data (e.g., CPU usage); Alarms monitors a metric and triggers actions (like notifications) when a threshold is crossed.'
    }
  },
  {
    id: 12,
    category: { 'pt-BR': 'Segurança', en: 'Security' },
    front: { 'pt-BR': 'Qual a diferença entre Cognito User Pools e Identity Pools?', en: 'What is the difference between Cognito User Pools and Identity Pools?' },
    back: {
      'pt-BR': 'User Pools são diretórios de usuários que cuidam de cadastro, login e emissão de tokens JWT. Identity Pools trocam esses tokens (ou de provedores externos) por credenciais temporárias da AWS para acessar outros serviços.',
      en: 'User Pools are user directories that handle sign-up, sign-in, and issuing JWT tokens. Identity Pools exchange those tokens (or ones from external providers) for temporary AWS credentials to access other services.'
    }
  },
  {
    id: 13,
    category: { 'pt-BR': 'Segurança', en: 'Security' },
    front: { 'pt-BR': 'Para que serve o AWS KMS?', en: 'What is AWS KMS used for?' },
    back: {
      'pt-BR': 'Serviço gerenciado para criar e controlar chaves criptográficas usadas para criptografar dados em outros serviços AWS (S3, EBS, RDS, etc.) e nas próprias aplicações.',
      en: 'A managed service for creating and controlling cryptographic keys used to encrypt data in other AWS services (S3, EBS, RDS, etc.) and in applications themselves.'
    }
  },
  {
    id: 14,
    category: { 'pt-BR': 'Configuração', en: 'Configuration' },
    front: { 'pt-BR': 'Qual a diferença entre Systems Manager Parameter Store e Secrets Manager?', en: 'What is the difference between Systems Manager Parameter Store and Secrets Manager?' },
    back: {
      'pt-BR': 'Parameter Store guarda configurações e parâmetros (com opção de criptografia), com custo baixo/gratuito. Secrets Manager é voltado a segredos sensíveis (senhas, chaves de API) e oferece rotação automática nativa.',
      en: 'Parameter Store stores configuration values and parameters (with optional encryption), at low/no cost. Secrets Manager is geared toward sensitive secrets (passwords, API keys) and offers native automatic rotation.'
    }
  },
  {
    id: 15,
    category: { 'pt-BR': 'Armazenamento', en: 'Storage' },
    front: { 'pt-BR': 'Para que servem as URLs pré-assinadas (pre-signed URLs) do S3?', en: 'What are S3 pre-signed URLs used for?' },
    back: {
      'pt-BR': 'Concedem acesso temporário e com tempo de expiração a um objeto privado do S3 (upload ou download), sem exigir que quem acessa tenha credenciais AWS próprias.',
      en: 'They grant temporary, time-limited access to a private S3 object (upload or download), without requiring the accessor to have their own AWS credentials.'
    }
  },
  {
    id: 16,
    category: { 'pt-BR': 'Banco de Dados', en: 'Database' },
    front: { 'pt-BR': 'O que são DynamoDB Streams?', en: 'What are DynamoDB Streams?' },
    back: {
      'pt-BR': 'Capturam, em ordem cronológica, um registro das alterações (inserções, atualizações, exclusões) feitas nos itens de uma tabela, permitindo acioná-las via Lambda para processamento em tempo real.',
      en: 'They capture, in chronological order, a record of changes (inserts, updates, deletes) made to a table\'s items, allowing them to trigger Lambda for real-time processing.'
    }
  },
  {
    id: 17,
    category: { 'pt-BR': 'Serverless', en: 'Serverless' },
    front: { 'pt-BR': 'Para que servem as Lambda Layers?', en: 'What are Lambda Layers used for?' },
    back: {
      'pt-BR': 'Permitem empacotar bibliotecas, dependências ou código compartilhado separadamente do código da função, para reutilizar entre múltiplas funções Lambda e manter o pacote de deploy da função enxuto.',
      en: 'They let you package libraries, dependencies, or shared code separately from the function code, to reuse across multiple Lambda functions and keep the function\'s deployment package lean.'
    }
  },
  {
    id: 18,
    category: { 'pt-BR': 'Mensageria', en: 'Messaging' },
    front: { 'pt-BR': 'Para que serve o Amazon EventBridge?', en: 'What is Amazon EventBridge used for?' },
    back: {
      'pt-BR': 'Barramento de eventos serverless que roteia eventos entre serviços AWS, aplicações SaaS parceiras e código próprio, com base em regras de filtragem, sem acoplar produtores e consumidores.',
      en: 'A serverless event bus that routes events between AWS services, partner SaaS applications, and custom code, based on filtering rules, without coupling producers and consumers.'
    }
  },
  {
    id: 19,
    category: { 'pt-BR': 'Containers', en: 'Containers' },
    front: { 'pt-BR': 'Qual a diferença entre uma Task e um Service no Amazon ECS?', en: 'What is the difference between a Task and a Service in Amazon ECS?' },
    back: {
      'pt-BR': 'Uma Task é uma instância em execução de uma definição de container (Task Definition), geralmente efêmera. Um Service mantém um número desejado de Tasks rodando continuamente, reiniciando-as se falharem.',
      en: 'A Task is a running instance of a container definition (Task Definition), usually short-lived. A Service keeps a desired number of Tasks running continuously, restarting them if they fail.'
    }
  },
  {
    id: 20,
    category: { 'pt-BR': 'Serverless', en: 'Serverless' },
    front: { 'pt-BR': 'Como as variáveis de ambiente são usadas em funções Lambda?', en: 'How are environment variables used in Lambda functions?' },
    back: {
      'pt-BR': 'Permitem armazenar configurações (como nomes de tabelas, URLs, flags) fora do código da função, podendo ser criptografadas com KMS e alteradas sem precisar reimplantar o código.',
      en: 'They let you store configuration (such as table names, URLs, flags) outside the function code, can be encrypted with KMS, and can be changed without needing to redeploy the code.'
    }
  }
];
