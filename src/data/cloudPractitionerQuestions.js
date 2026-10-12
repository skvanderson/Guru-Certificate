export const cloudPractitionerQuestions = [
  {
    id: 1,
    domain: 'security-compliance',
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
          "pt-BR": "Manutenção do hardware físico e das instalações que hospedam o banco",
          "en": "Maintaining the physical hardware and facilities that host the database"
        },
        correct: true,
        explanation: {
          "pt-BR": "No RDS, a AWS é responsável pela segurança da nuvem: instalações físicas, servidores, storage e rede que executam as instâncias de banco. Isso nunca é transferido ao cliente.",
          "en": "With RDS, AWS is responsible for security of the cloud: the physical facilities, servers, storage, and network that run the database instances. This is never transferred to the customer."
        }
      },
      {
        title: {
          "pt-BR": "Criação e rotação das credenciais do usuário master do banco",
          "en": "Creating and rotating the database master user credentials"
        },
        correct: false,
        explanation: {
          "pt-BR": "O cliente define o usuário master e sua senha na criação da instância e decide como rotacioná-la (manualmente ou via integração com o Secrets Manager que ele próprio configura). A AWS não gerencia essas credenciais por conta própria.",
          "en": "The customer defines the master user and password when creating the instance and decides how to rotate it (manually or through a Secrets Manager integration they configure). AWS does not manage these credentials on its own."
        }
      },
      {
        title: {
          "pt-BR": "Definição das regras de Security Group que liberam acesso ao banco",
          "en": "Defining the Security Group rules that allow access to the database"
        },
        correct: false,
        explanation: {
          "pt-BR": "Security Groups associados à instância RDS são configurados pelo cliente. Decidir quais portas e origens podem se conectar ao banco é segurança na nuvem, portanto responsabilidade do cliente.",
          "en": "Security Groups attached to the RDS instance are configured by the customer. Deciding which ports and sources can connect to the database is security in the cloud, so it is the customer's responsibility."
        }
      },
      {
        title: {
          "pt-BR": "Configuração do período de retenção dos backups automatizados",
          "en": "Configuring the retention period for automated backups"
        },
        correct: false,
        explanation: {
          "pt-BR": "A AWS executa os backups automatizados, mas é o cliente quem define o período de retenção (de 0 a 35 dias) e a janela de backup de acordo com seus requisitos de recuperação.",
          "en": "AWS runs the automated backups, but the customer sets the retention period (0 to 35 days) and the backup window according to their recovery requirements."
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
    domain: 'billing-pricing-support',
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
          "pt-BR": "Instâncias On-Demand para a carga base e Auto Scaling para os picos",
          "en": "On-Demand Instances for the baseline and Auto Scaling for spikes"
        },
        correct: false,
        explanation: {
          "pt-BR": "Auto Scaling atende aos picos, mas pagar On-Demand pela carga base 24/7 desperdiça o desconto que um compromisso de uso (Savings Plans ou Reserved Instances) daria para um consumo previsível.",
          "en": "Auto Scaling handles spikes, but paying On-Demand for a 24/7 baseline wastes the discount a usage commitment (Savings Plans or Reserved Instances) would provide for predictable consumption."
        }
      },
      {
        title: {
          "pt-BR": "Savings Plans para a carga base e Auto Scaling para os picos",
          "en": "Savings Plans for the baseline and Auto Scaling for spikes"
        },
        correct: true,
        explanation: {
          "pt-BR": "Savings Plans dão desconto em troca de um compromisso de gasto por hora que cobre a carga previsível, enquanto o Auto Scaling adiciona capacidade (cobrada On-Demand) só durante os picos.",
          "en": "Savings Plans provide a discount in exchange for an hourly spend commitment covering the predictable load, while Auto Scaling adds capacity (billed On-Demand) only during spikes."
        }
      },
      {
        title: {
          "pt-BR": "Reserved Instances de 3 anos dimensionadas para a capacidade de pico",
          "en": "3-year Reserved Instances sized for the peak capacity"
        },
        correct: false,
        explanation: {
          "pt-BR": "Reserved Instances são cobradas durante todo o prazo, usadas ou não. Dimensioná-las pelo pico faz a empresa pagar 24/7 por capacidade que fica ociosa fora dos períodos de alta demanda.",
          "en": "Reserved Instances are billed for the entire term whether used or not. Sizing them for the peak makes the company pay 24/7 for capacity that sits idle outside high-demand periods."
        }
      },
      {
        title: {
          "pt-BR": "Spot Instances para a carga base e On-Demand para os picos",
          "en": "Spot Instances for the baseline and On-Demand for spikes"
        },
        correct: false,
        explanation: {
          "pt-BR": "Spot Instances podem ser interrompidas pela AWS com aviso de apenas dois minutos. Colocar a carga base de uma aplicação 24/7 em Spot compromete a disponibilidade justamente da parte que precisa estar sempre ativa.",
          "en": "Spot Instances can be interrupted by AWS with only a two-minute notice. Placing the baseline of a 24/7 application on Spot jeopardizes availability of exactly the part that must always be running."
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
    domain: 'security-compliance',
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
          "pt-BR": "Anexar a política gerenciada AmazonS3FullAccess ao grupo IAM da equipe",
          "en": "Attach the AmazonS3FullAccess managed policy to the team's IAM group"
        },
        correct: false,
        explanation: {
          "pt-BR": "AmazonS3FullAccess concede todas as ações do S3 sobre todos os buckets da conta, não apenas os do projeto. O escopo de recursos é amplo demais e viola o menor privilégio.",
          "en": "AmazonS3FullAccess grants every S3 action on every bucket in the account, not only the project buckets. The resource scope is far too broad and violates least privilege."
        }
      },
      {
        title: {
          "pt-BR": "Anexar a política gerenciada AmazonS3ReadOnlyAccess ao grupo IAM da equipe",
          "en": "Attach the AmazonS3ReadOnlyAccess managed policy to the team's IAM group"
        },
        correct: false,
        explanation: {
          "pt-BR": "Essa política usa \"Resource\": \"*\" e permite listar e ler objetos de qualquer bucket da conta. Mesmo sendo somente leitura, ela expõe buckets que não pertencem ao projeto.",
          "en": "This policy uses \"Resource\": \"*\" and allows listing and reading objects in any bucket in the account. Even though it is read-only, it exposes buckets that do not belong to the project."
        }
      },
      {
        title: {
          "pt-BR": "Anexar ao grupo IAM uma política restrita aos ARNs dos buckets do projeto",
          "en": "Attach to the team's IAM group a policy scoped to the project buckets' ARNs"
        },
        correct: true,
        explanation: {
          "pt-BR": "Uma política customizada com apenas as ações necessárias e o elemento Resource restrito aos ARNs dos buckets do projeto concede exatamente o acesso exigido, aplicando o menor privilégio.",
          "en": "A customer managed policy with only the required actions and a Resource element restricted to the project buckets' ARNs grants exactly the access needed, applying least privilege."
        }
      },
      {
        title: {
          "pt-BR": "Criar uma SCP no AWS Organizations permitindo apenas o serviço Amazon S3",
          "en": "Create an SCP in AWS Organizations that allows only the Amazon S3 service"
        },
        correct: false,
        explanation: {
          "pt-BR": "SCPs não concedem permissões; apenas definem o limite máximo do que identidades da conta podem fazer. Ainda seria preciso uma política IAM, e a SCP não restringiria o acesso aos buckets específicos do projeto.",
          "en": "SCPs do not grant permissions; they only set the maximum boundary of what identities in the account can do. An IAM policy would still be required, and the SCP would not restrict access to the specific project buckets."
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
    domain: 'cloud-technology-services',
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
          "pt-BR": "Amazon EC2 com Auto Scaling atrás de um Application Load Balancer",
          "en": "Amazon EC2 with Auto Scaling behind an Application Load Balancer"
        },
        correct: false,
        explanation: {
          "pt-BR": "A arquitetura escala horizontalmente, mas a equipe continua responsável por AMIs, patches do sistema operacional, tipos de instância e tempo de inicialização das instâncias, ou seja, há servidores para gerenciar.",
          "en": "This architecture scales horizontally, but the team remains responsible for AMIs, OS patching, instance types, and instance launch time, meaning there are still servers to manage."
        }
      },
      {
        title: {
          "pt-BR": "Amazon ECS com tipo de inicialização EC2 atrás de um Application Load Balancer",
          "en": "Amazon ECS with the EC2 launch type behind an Application Load Balancer"
        },
        correct: false,
        explanation: {
          "pt-BR": "No tipo de inicialização EC2, os containers rodam em instâncias do cluster que o cliente provisiona, atualiza e escala. O ECS orquestra os containers, mas não elimina o gerenciamento de servidores.",
          "en": "With the EC2 launch type, containers run on cluster instances that the customer provisions, patches, and scales. ECS orchestrates the containers but does not remove server management."
        }
      },
      {
        title: {
          "pt-BR": "AWS Elastic Beanstalk com ambiente do tipo load-balanced",
          "en": "AWS Elastic Beanstalk with a load-balanced environment"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Elastic Beanstalk automatiza o provisionamento, mas cria instâncias EC2 e um grupo de Auto Scaling na conta do cliente. Ainda há capacidade de instâncias para dimensionar, e a escala depende do tempo de subida de novas VMs.",
          "en": "Elastic Beanstalk automates provisioning, but it creates EC2 instances and an Auto Scaling group in the customer's account. There is still instance capacity to size, and scaling depends on how fast new VMs boot."
        }
      },
      {
        title: {
          "pt-BR": "AWS Lambda integrado a um endpoint do Amazon API Gateway",
          "en": "AWS Lambda integrated with an Amazon API Gateway endpoint"
        },
        correct: true,
        explanation: {
          "pt-BR": "O API Gateway expõe a API HTTP de forma gerenciada e o Lambda executa o código por requisição, escalando automaticamente a concorrência sem nenhum servidor para provisionar ou manter.",
          "en": "API Gateway exposes the HTTP API as a managed service and Lambda runs the code per request, automatically scaling concurrency with no servers to provision or maintain."
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
    domain: 'cloud-technology-services',
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
          "pt-BR": "S3 Intelligent-Tiering com suas camadas de acesso automáticas",
          "en": "S3 Intelligent-Tiering with its automatic access tiers"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Intelligent-Tiering monitora o acesso de cada objeto e o move automaticamente entre camadas de acesso frequente e infrequente, e de volta quando é acessado, sem taxa de recuperação nessas camadas.",
          "en": "Intelligent-Tiering monitors each object's access and automatically moves it between frequent and infrequent access tiers, and back when accessed, with no retrieval fees in those tiers."
        }
      },
      {
        title: {
          "pt-BR": "S3 Standard com regra de ciclo de vida fixa para Standard-IA",
          "en": "S3 Standard with a fixed lifecycle rule to Standard-IA"
        },
        correct: false,
        explanation: {
          "pt-BR": "Regras de ciclo de vida fazem a transição com base na idade do objeto, não no acesso real, e nunca devolvem o objeto para o Standard. Se o documento voltar a ser muito acessado, paga taxas de recuperação do Standard-IA.",
          "en": "Lifecycle rules transition objects based on object age, not actual access, and never move them back to Standard. If a document becomes frequently accessed again, it incurs Standard-IA retrieval fees."
        }
      },
      {
        title: {
          "pt-BR": "S3 Standard-Infrequent Access para todos os documentos",
          "en": "S3 Standard-Infrequent Access for all documents"
        },
        correct: false,
        explanation: {
          "pt-BR": "Standard-IA tem armazenamento mais barato, mas cobra por GB recuperado e tem duração mínima de 30 dias. Com padrões de acesso que mudam com frequência, os períodos de muito acesso podem tornar essa classe mais cara.",
          "en": "Standard-IA has cheaper storage but charges per GB retrieved and has a 30-day minimum storage duration. With frequently changing access patterns, periods of heavy access can make this class more expensive."
        }
      },
      {
        title: {
          "pt-BR": "S3 Glacier Instant Retrieval para todos os documentos",
          "en": "S3 Glacier Instant Retrieval for all documents"
        },
        correct: false,
        explanation: {
          "pt-BR": "Glacier Instant Retrieval devolve dados em milissegundos, mas foi feito para dados acessados cerca de uma vez por trimestre: tem duração mínima de 90 dias e custo de recuperação maior que o Standard-IA.",
          "en": "Glacier Instant Retrieval returns data in milliseconds, but it is designed for data accessed about once per quarter: it has a 90-day minimum storage duration and higher retrieval costs than Standard-IA."
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
    domain: 'cloud-technology-services',
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
          "pt-BR": "Read Replica do RDS em outra zona de disponibilidade",
          "en": "RDS Read Replica in another Availability Zone"
        },
        correct: false,
        explanation: {
          "pt-BR": "Read Replicas do RDS usam replicação assíncrona e não têm failover automático: se a AZ primária falhar, a réplica precisa ser promovida manualmente e pode ter perdido as últimas transações.",
          "en": "RDS Read Replicas use asynchronous replication and have no automatic failover: if the primary AZ fails, the replica must be promoted manually and may be missing the latest transactions."
        }
      },
      {
        title: {
          "pt-BR": "Implantação RDS Multi-AZ com instância standby",
          "en": "RDS Multi-AZ deployment with a standby instance"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Multi-AZ mantém uma standby com replicação síncrona em outra AZ e faz failover automático, atualizando o endpoint DNS, sem intervenção manual.",
          "en": "Multi-AZ keeps a synchronously replicated standby in another AZ and performs automatic failover by updating the DNS endpoint, with no manual intervention."
        }
      },
      {
        title: {
          "pt-BR": "Instância Single-AZ com backups automatizados habilitados",
          "en": "Single-AZ instance with automated backups enabled"
        },
        correct: false,
        explanation: {
          "pt-BR": "Backups automatizados permitem restauração point-in-time, mas a restauração cria uma nova instância e leva tempo. Durante a falha da AZ o sistema ficaria parado até a restauração terminar.",
          "en": "Automated backups allow point-in-time restore, but restoring creates a new instance and takes time. During the AZ failure the system would be down until the restore completes."
        }
      },
      {
        title: {
          "pt-BR": "Snapshots do RDS copiados periodicamente para outra região",
          "en": "RDS snapshots periodically copied to another Region"
        },
        correct: false,
        explanation: {
          "pt-BR": "Cópias de snapshot entre regiões são uma estratégia de recuperação de desastres, não de alta disponibilidade: exigem restauração manual, geram indisponibilidade e perdem os dados gravados após o último snapshot.",
          "en": "Cross-Region snapshot copies are a disaster recovery strategy, not high availability: they require a manual restore, cause downtime, and lose data written after the last snapshot."
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
    domain: 'cloud-technology-services',
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
          "pt-BR": "Amazon Route 53 com política de roteamento por latência",
          "en": "Amazon Route 53 with a latency-based routing policy"
        },
        correct: false,
        explanation: {
          "pt-BR": "O roteamento por latência só direciona o DNS para a região de menor latência entre as que já têm a aplicação implantada. Ele não armazena conteúdo em cache e não reduz latência sem que a empresa replique a origem em várias regiões.",
          "en": "Latency-based routing only points DNS to the lowest-latency Region among those where the application is already deployed. It does not cache content and does not reduce latency unless the company replicates the origin in several Regions."
        }
      },
      {
        title: {
          "pt-BR": "AWS Global Accelerator na frente do Application Load Balancer",
          "en": "AWS Global Accelerator in front of the Application Load Balancer"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Global Accelerator usa IPs anycast e a rede global da AWS para levar o tráfego até o endpoint, mas não faz cache: toda requisição de imagem, CSS ou JavaScript ainda é atendida pela origem na região.",
          "en": "Global Accelerator uses anycast IPs and the AWS global network to carry traffic to the endpoint, but it does not cache: every image, CSS, or JavaScript request is still served by the origin in the Region."
        }
      },
      {
        title: {
          "pt-BR": "Amazon CloudFront na frente da origem atual da aplicação",
          "en": "Amazon CloudFront in front of the application's existing origin"
        },
        correct: true,
        explanation: {
          "pt-BR": "CloudFront é a CDN da AWS: armazena em cache o conteúdo estático nas edge locations próximas aos usuários, que passam a receber os arquivos sem ir até a região de origem.",
          "en": "CloudFront is the AWS CDN: it caches static content at edge locations close to users, who then receive the files without reaching the origin Region."
        }
      },
      {
        title: {
          "pt-BR": "S3 Cross-Region Replication para buckets em várias regiões",
          "en": "S3 Cross-Region Replication to buckets in several Regions"
        },
        correct: false,
        explanation: {
          "pt-BR": "A replicação copia objetos para outras regiões, mas não direciona cada usuário ao bucket mais próximo nem usa edge locations. Cobre apenas algumas regiões, com custo de armazenamento duplicado.",
          "en": "Replication copies objects to other Regions, but it does not route each user to the nearest bucket or use edge locations. It covers only a few Regions, with duplicated storage cost."
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
    domain: 'cloud-technology-services',
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
          "pt-BR": "Amazon RDS for MySQL com Read Replicas",
          "en": "Amazon RDS for MySQL with Read Replicas"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS é relacional, com esquema fixo definido em tabelas. Read Replicas escalam apenas leituras; as escritas continuam limitadas à instância primária, que escala verticalmente.",
          "en": "RDS is relational, with a fixed schema defined in tables. Read Replicas only scale reads; writes remain limited to the primary instance, which scales vertically."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Aurora Serverless v2 compatível com MySQL",
          "en": "Amazon Aurora Serverless v2, MySQL-compatible"
        },
        correct: false,
        explanation: {
          "pt-BR": "Aurora Serverless v2 ajusta capacidade automaticamente, mas continua sendo um banco relacional compatível com MySQL/PostgreSQL, com esquema rígido e escritas concentradas em uma instância writer.",
          "en": "Aurora Serverless v2 adjusts capacity automatically, but it is still a MySQL/PostgreSQL-compatible relational database with a rigid schema and writes concentrated on a single writer instance."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Redshift Serverless com capacidade automática",
          "en": "Amazon Redshift Serverless with automatic capacity"
        },
        correct: false,
        explanation: {
          "pt-BR": "Redshift Serverless dispensa o gerenciamento de clusters, mas é um data warehouse colunar para consultas analíticas, não um banco para leituras e gravações de itens chave-valor em milissegundos.",
          "en": "Redshift Serverless removes cluster management, but it is a columnar data warehouse for analytical queries, not a database for millisecond key-value item reads and writes."
        }
      },
      {
        title: {
          "pt-BR": "Amazon DynamoDB com capacidade sob demanda",
          "en": "Amazon DynamoDB with on-demand capacity"
        },
        correct: true,
        explanation: {
          "pt-BR": "DynamoDB é um banco NoSQL chave-valor e de documentos com latência de milissegundos de um dígito, esquema flexível por item e escala horizontal automática, que no modo sob demanda acompanha o tráfego sem planejamento de capacidade.",
          "en": "DynamoDB is a NoSQL key-value and document database with single-digit millisecond latency, flexible per-item schema, and automatic horizontal scaling, which in on-demand mode follows traffic without capacity planning."
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
    domain: 'cloud-technology-services',
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
          "pt-BR": "Amazon SQS com consumidores fazendo polling da fila",
          "en": "Amazon SQS with consumers polling the queue"
        },
        correct: true,
        explanation: {
          "pt-BR": "SQS armazena as mensagens de forma durável (por até 14 dias) e só as remove quando o consumidor as exclui após processar, desacoplando o ritmo de produtores e consumidores.",
          "en": "SQS stores messages durably (for up to 14 days) and only removes them when the consumer deletes them after processing, decoupling the pace of producers and consumers."
        }
      },
      {
        title: {
          "pt-BR": "Amazon SNS com assinaturas HTTP para os consumidores",
          "en": "Amazon SNS with HTTP subscriptions for consumers"
        },
        correct: false,
        explanation: {
          "pt-BR": "SNS faz push das mensagens para os assinantes e não as mantém armazenadas para consumo posterior. Se o endpoint estiver indisponível, após esgotar a política de novas tentativas a mensagem é descartada ou enviada a uma DLQ.",
          "en": "SNS pushes messages to subscribers and does not keep them stored for later consumption. If the endpoint is unavailable, once the retry policy is exhausted the message is discarded or sent to a DLQ."
        }
      },
      {
        title: {
          "pt-BR": "Amazon EventBridge com regras apontando para os consumidores",
          "en": "Amazon EventBridge with rules targeting the consumers"
        },
        correct: false,
        explanation: {
          "pt-BR": "EventBridge roteia eventos para alvos e tenta reentregar por até 24 horas, mas não funciona como um buffer onde o consumidor busca as mensagens no seu ritmo até concluir o processamento.",
          "en": "EventBridge routes events to targets and retries delivery for up to 24 hours, but it does not act as a buffer from which the consumer pulls messages at its own pace until processing is complete."
        }
      },
      {
        title: {
          "pt-BR": "AWS Step Functions encadeando produtor e consumidor",
          "en": "AWS Step Functions chaining producer and consumer"
        },
        correct: false,
        explanation: {
          "pt-BR": "Step Functions orquestra etapas de um fluxo de trabalho com estado, mas as etapas são invocadas diretamente pela máquina de estados. Não há uma fila que armazene mensagens independentes para consumidores escalarem separadamente.",
          "en": "Step Functions orchestrates stateful workflow steps, but each step is invoked directly by the state machine. There is no queue storing independent messages so consumers can scale separately."
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
    domain: 'cloud-technology-services',
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
          "pt-BR": "Amazon SNS com políticas de filtro nas assinaturas",
          "en": "Amazon SNS with subscription filter policies"
        },
        correct: false,
        explanation: {
          "pt-BR": "Filtros do SNS selecionam mensagens por atributos ou conteúdo, mas o SNS não tem fontes de eventos de parceiros SaaS nem recebe eventos de serviços AWS por padrão: cada origem precisa publicar explicitamente no tópico.",
          "en": "SNS filters select messages by attributes or content, but SNS has no SaaS partner event sources and does not receive AWS service events by default: every source must explicitly publish to the topic."
        }
      },
      {
        title: {
          "pt-BR": "Amazon EventBridge com regras em um barramento de eventos",
          "en": "Amazon EventBridge with rules on an event bus"
        },
        correct: true,
        explanation: {
          "pt-BR": "EventBridge recebe eventos de serviços AWS e de parceiros SaaS nativamente, e suas regras filtram por origem e conteúdo do evento para encaminhá-lo a múltiplos alvos.",
          "en": "EventBridge natively receives events from AWS services and SaaS partners, and its rules filter by event source and content to route each event to multiple targets."
        }
      },
      {
        title: {
          "pt-BR": "Amazon SQS com filas separadas por tipo de evento",
          "en": "Amazon SQS with separate queues per event type"
        },
        correct: false,
        explanation: {
          "pt-BR": "SQS não avalia regras: o produtor é quem decide em qual fila publicar. Isso transfere a lógica de roteamento para cada origem, e o SQS não tem integração nativa com fontes SaaS.",
          "en": "SQS does not evaluate rules: the producer decides which queue to publish to. This pushes routing logic into every source, and SQS has no native integration with SaaS sources."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Kinesis Data Streams com múltiplos consumidores",
          "en": "Amazon Kinesis Data Streams with multiple consumers"
        },
        correct: false,
        explanation: {
          "pt-BR": "Kinesis é voltado a ingestão de streams em alto volume e ordenados por shard. Cada consumidor lê todos os registros e precisa filtrar por conta própria; não há roteamento por regras nem fontes SaaS nativas.",
          "en": "Kinesis is built for high-volume stream ingestion ordered per shard. Each consumer reads all records and must filter on its own; there is no rule-based routing and no native SaaS sources."
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
    domain: 'cloud-technology-services',
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
          "pt-BR": "AWS Config com regras gerenciadas habilitadas",
          "en": "AWS Config with managed rules enabled"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Config registra o estado de configuração dos recursos e avalia conformidade. Ele não coleta métricas de desempenho da aplicação, não centraliza logs operacionais e não cria alarmes sobre métricas.",
          "en": "AWS Config records resource configuration state and evaluates compliance. It does not collect application performance metrics, centralize operational logs, or create metric alarms."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudTrail com uma trilha para todas as regiões",
          "en": "AWS CloudTrail with a multi-Region trail"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudTrail registra chamadas de API feitas na conta (quem fez o quê e quando) para auditoria. Ele não coleta métricas como CPU ou latência, nem os logs gerados pela própria aplicação.",
          "en": "CloudTrail records API calls made in the account (who did what and when) for auditing. It does not collect metrics such as CPU or latency, nor the logs produced by the application itself."
        }
      },
      {
        title: {
          "pt-BR": "Amazon CloudWatch com o agente unificado nas instâncias",
          "en": "Amazon CloudWatch with the unified agent on instances"
        },
        correct: true,
        explanation: {
          "pt-BR": "CloudWatch coleta métricas de serviços e do agente, centraliza logs no CloudWatch Logs e permite criar alarmes com ações, sendo o serviço principal de monitoramento operacional.",
          "en": "CloudWatch collects metrics from services and from the agent, centralizes logs in CloudWatch Logs, and lets you create alarms with actions, making it the main operational monitoring service."
        }
      },
      {
        title: {
          "pt-BR": "AWS X-Ray com instrumentação do SDK na aplicação",
          "en": "AWS X-Ray with SDK instrumentation in the application"
        },
        correct: false,
        explanation: {
          "pt-BR": "X-Ray rastreia requisições entre componentes distribuídos para identificar gargalos e erros. Ele não é o serviço para criar alarmes sobre métricas nem para centralizar logs operacionais.",
          "en": "X-Ray traces requests across distributed components to identify bottlenecks and errors. It is not the service for creating metric alarms or centralizing operational logs."
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
    domain: 'security-compliance',
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
          "pt-BR": "AWS Security Hub com padrões de segurança habilitados",
          "en": "AWS Security Hub with security standards enabled"
        },
        correct: false,
        explanation: {
          "pt-BR": "Security Hub agrega achados e executa controles de padrões predefinidos (como CIS e AWS Foundational Security Best Practices), inclusive dependendo do AWS Config para isso. Não é ele que registra o histórico de configuração nem avalia regras internas próprias.",
          "en": "Security Hub aggregates findings and runs controls from predefined standards (such as CIS and AWS Foundational Security Best Practices), even relying on AWS Config to do so. It is not what records configuration history or evaluates your own internal rules."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Inspector com varredura contínua habilitada",
          "en": "Amazon Inspector with continuous scanning enabled"
        },
        correct: false,
        explanation: {
          "pt-BR": "Inspector procura vulnerabilidades de software (CVEs) e exposição de rede em EC2, imagens de container e funções Lambda. Ele não rastreia mudanças de configuração de recursos nem avalia regras de conformidade.",
          "en": "Inspector looks for software vulnerabilities (CVEs) and network exposure in EC2, container images, and Lambda functions. It does not track resource configuration changes or evaluate compliance rules."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudTrail com uma trilha organizacional",
          "en": "AWS CloudTrail with an organization trail"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudTrail mostra quem chamou qual API e quando, mas não mantém o estado de configuração resultante de cada recurso nem avalia se ele está conforme uma regra.",
          "en": "CloudTrail shows who called which API and when, but it does not keep each resource's resulting configuration state or evaluate whether it complies with a rule."
        }
      },
      {
        title: {
          "pt-BR": "AWS Config com regras gerenciadas e personalizadas",
          "en": "AWS Config with managed and custom rules"
        },
        correct: true,
        explanation: {
          "pt-BR": "AWS Config registra continuamente a configuração e o histórico de mudanças dos recursos e avalia cada um contra regras gerenciadas ou personalizadas, apontando os não conformes.",
          "en": "AWS Config continuously records resource configurations and change history and evaluates each resource against managed or custom rules, flagging noncompliant ones."
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
    domain: 'cloud-technology-services',
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
          "pt-BR": "AWS Direct Connect terminando em um Virtual Private Gateway",
          "en": "AWS Direct Connect terminating on a virtual private gateway"
        },
        correct: true,
        explanation: {
          "pt-BR": "Direct Connect estabelece um circuito de rede privado entre o data center e a AWS, sem passar pela internet pública, com largura de banda dedicada e latência mais consistente.",
          "en": "Direct Connect establishes a private network circuit between the data center and AWS, bypassing the public internet, with dedicated bandwidth and more consistent latency."
        }
      },
      {
        title: {
          "pt-BR": "AWS Site-to-Site VPN com dois túneis IPsec redundantes",
          "en": "AWS Site-to-Site VPN with two redundant IPsec tunnels"
        },
        correct: false,
        explanation: {
          "pt-BR": "Os dois túneis dão redundância e criptografia, mas o tráfego continua trafegando pela internet pública, cuja latência e largura de banda variam. Não é um enlace dedicado.",
          "en": "The two tunnels provide redundancy and encryption, but traffic still travels over the public internet, whose latency and bandwidth vary. It is not a dedicated link."
        }
      },
      {
        title: {
          "pt-BR": "AWS Client VPN com autenticação via Active Directory",
          "en": "AWS Client VPN with Active Directory authentication"
        },
        correct: false,
        explanation: {
          "pt-BR": "Client VPN conecta usuários individuais (dispositivos com cliente OpenVPN) à AWS pela internet. É acesso remoto de usuários, não um enlace entre o data center e a AWS.",
          "en": "Client VPN connects individual users (devices running an OpenVPN client) to AWS over the internet. It is remote user access, not a link between the data center and AWS."
        }
      },
      {
        title: {
          "pt-BR": "AWS Transit Gateway com anexos de VPN acelerada",
          "en": "AWS Transit Gateway with accelerated VPN attachments"
        },
        correct: false,
        explanation: {
          "pt-BR": "A VPN acelerada usa o Global Accelerator para entrar na rede da AWS pela edge location mais próxima, mas continua sendo um túnel IPsec cujo trecho inicial passa pela internet pública. Melhora, mas não iguala um circuito dedicado.",
          "en": "Accelerated VPN uses Global Accelerator to enter the AWS network at the nearest edge location, but it is still an IPsec tunnel whose first leg crosses the public internet. It improves performance but does not match a dedicated circuit."
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
    domain: 'security-compliance',
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
          "pt-BR": "Usuários IAM individuais com MFA em cada conta",
          "en": "Individual IAM users with MFA in each account"
        },
        correct: false,
        explanation: {
          "pt-BR": "MFA melhora a segurança, mas usuários IAM têm credenciais de longo prazo por conta: o funcionário teria um login diferente em cada conta, sem single sign-on nem gestão centralizada.",
          "en": "MFA improves security, but IAM users have long-term credentials per account: the employee would have a different login in each account, with no single sign-on or central management."
        }
      },
      {
        title: {
          "pt-BR": "AWS IAM Identity Center integrado ao diretório corporativo",
          "en": "AWS IAM Identity Center integrated with the corporate directory"
        },
        correct: true,
        explanation: {
          "pt-BR": "IAM Identity Center conecta o diretório corporativo, oferece um portal de single sign-on e atribui permission sets às contas da organização, emitindo credenciais temporárias em cada acesso.",
          "en": "IAM Identity Center connects the corporate directory, provides a single sign-on portal, and assigns permission sets to the organization's accounts, issuing temporary credentials on each access."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Cognito com user pools para os funcionários",
          "en": "Amazon Cognito with user pools for employees"
        },
        correct: false,
        explanation: {
          "pt-BR": "Cognito é voltado à autenticação de usuários finais de aplicações web e mobile. Ele não oferece acesso SSO de funcionários ao console e à CLI de várias contas AWS com permission sets.",
          "en": "Cognito is aimed at authenticating end users of web and mobile applications. It does not provide workforce SSO into the console and CLI of multiple AWS accounts with permission sets."
        }
      },
      {
        title: {
          "pt-BR": "AWS Organizations com SCPs aplicadas às contas",
          "en": "AWS Organizations with SCPs applied to the accounts"
        },
        correct: false,
        explanation: {
          "pt-BR": "Organizations agrupa contas e SCPs limitam o máximo de permissões, mas nenhum dos dois cria identidades, autentica usuários ou fornece login único.",
          "en": "Organizations groups accounts and SCPs cap the maximum permissions, but neither creates identities, authenticates users, or provides single sign-on."
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
    domain: 'security-compliance',
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
          "pt-BR": "AWS Secrets Manager com rotação automática",
          "en": "AWS Secrets Manager with automatic rotation"
        },
        correct: false,
        explanation: {
          "pt-BR": "Secrets Manager armazena e rotaciona segredos como senhas de banco e chaves de API. Ele próprio usa o KMS para criptografar os segredos e não é o serviço que fornece as chaves de criptografia em repouso dos outros serviços.",
          "en": "Secrets Manager stores and rotates secrets such as database passwords and API keys. It itself uses KMS to encrypt secrets and is not the service that provides at-rest encryption keys for other services."
        }
      },
      {
        title: {
          "pt-BR": "AWS Certificate Manager com certificados públicos",
          "en": "AWS Certificate Manager with public certificates"
        },
        correct: false,
        explanation: {
          "pt-BR": "ACM provisiona e renova certificados TLS usados para criptografia em trânsito (HTTPS). Ele não gerencia as chaves usadas para criptografar dados em repouso em S3, EBS ou RDS.",
          "en": "ACM provisions and renews TLS certificates used for encryption in transit (HTTPS). It does not manage the keys used to encrypt data at rest in S3, EBS, or RDS."
        }
      },
      {
        title: {
          "pt-BR": "AWS KMS com chaves gerenciadas pelo cliente",
          "en": "AWS KMS with customer managed keys"
        },
        correct: true,
        explanation: {
          "pt-BR": "KMS é integrado nativamente à maioria dos serviços AWS para criptografia em repouso, e as chaves gerenciadas pelo cliente permitem controlar políticas, rotação, desativação e exclusão, com uso auditado no CloudTrail.",
          "en": "KMS is natively integrated with most AWS services for encryption at rest, and customer managed keys let you control policies, rotation, disabling, and deletion, with usage audited in CloudTrail."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudHSM com um cluster de HSMs dedicados",
          "en": "AWS CloudHSM with a dedicated HSM cluster"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudHSM oferece HSMs single-tenant usados pela aplicação via PKCS#11, JCE ou CNG. Os serviços AWS não o usam diretamente para criptografia em repouso; isso só ocorre através do KMS com custom key store.",
          "en": "CloudHSM provides single-tenant HSMs used by applications through PKCS#11, JCE, or CNG. AWS services do not use it directly for encryption at rest; that only happens through KMS with a custom key store."
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
    domain: 'billing-pricing-support',
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
          "pt-BR": "AWS Cost Explorer com previsão de gastos",
          "en": "AWS Cost Explorer with spend forecasting"
        },
        correct: false,
        explanation: {
          "pt-BR": "Cost Explorer visualiza custos históricos e projeta gastos futuros, mas não permite definir um limite mensal nem envia alertas quando o consumo se aproxima dele.",
          "en": "Cost Explorer visualizes historical costs and forecasts future spending, but it does not let you set a monthly limit or send alerts when usage approaches it."
        }
      },
      {
        title: {
          "pt-BR": "AWS Cost and Usage Report entregue no Amazon S3",
          "en": "AWS Cost and Usage Report delivered to Amazon S3"
        },
        correct: false,
        explanation: {
          "pt-BR": "O CUR entrega os dados de faturamento mais detalhados em arquivos no S3 para análise, mas é apenas uma fonte de dados: não define limites nem gera notificações.",
          "en": "CUR delivers the most detailed billing data as files in S3 for analysis, but it is only a data source: it does not define limits or generate notifications."
        }
      },
      {
        title: {
          "pt-BR": "AWS Cost Anomaly Detection com monitores por serviço",
          "en": "AWS Cost Anomaly Detection with per-service monitors"
        },
        correct: false,
        explanation: {
          "pt-BR": "Cost Anomaly Detection usa machine learning para alertar sobre gastos fora do padrão histórico. Ele não compara o consumo com um valor mensal fixo definido pela equipe financeira.",
          "en": "Cost Anomaly Detection uses machine learning to alert on spending that deviates from historical patterns. It does not compare usage against a fixed monthly amount set by the finance team."
        }
      },
      {
        title: {
          "pt-BR": "AWS Budgets com um orçamento de custo mensal",
          "en": "AWS Budgets with a monthly cost budget"
        },
        correct: true,
        explanation: {
          "pt-BR": "AWS Budgets permite definir um valor mensal e configurar alertas por e-mail ou SNS com base no gasto real ou previsto, por exemplo ao atingir 80% e 100% do orçamento.",
          "en": "AWS Budgets lets you set a monthly amount and configure email or SNS alerts based on actual or forecasted spend, for example at 80% and 100% of the budget."
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
    domain: 'cloud-concepts',
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
          "pt-BR": "Esse pilar trata de executar e monitorar sistemas, usar operações como código, fazer mudanças pequenas e frequentes e refinar os procedimentos operacionais continuamente.",
          "en": "This pillar covers running and monitoring systems, performing operations as code, making small frequent changes, and continuously refining operating procedures."
        }
      },
      {
        title: {
          "pt-BR": "Eficiência de desempenho",
          "en": "Performance Efficiency"
        },
        correct: false,
        explanation: {
          "pt-BR": "Eficiência de desempenho também envolve monitoramento, mas com foco em usar os recursos computacionais de forma eficiente e escolher os tipos e tamanhos certos conforme a demanda muda, não em melhorar processos operacionais.",
          "en": "Performance Efficiency also involves monitoring, but its focus is using computing resources efficiently and choosing the right types and sizes as demand changes, not improving operational processes."
        }
      },
      {
        title: {
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        correct: false,
        explanation: {
          "pt-BR": "Confiabilidade trata da capacidade de a carga de trabalho executar sua função corretamente e se recuperar de falhas, com foco em tolerância a falhas, cotas e recuperação, não na melhoria contínua dos processos de operação.",
          "en": "Reliability covers a workload's ability to perform its function correctly and recover from failures, focusing on fault tolerance, quotas, and recovery, not on continuously improving operating processes."
        }
      },
      {
        title: {
          "pt-BR": "Sustentabilidade",
          "en": "Sustainability"
        },
        correct: false,
        explanation: {
          "pt-BR": "Sustentabilidade também fala em melhoria contínua, mas o objetivo é reduzir o impacto ambiental e o consumo de energia das cargas de trabalho, não executar e monitorar operações.",
          "en": "Sustainability also mentions continuous improvement, but its goal is reducing the environmental impact and energy consumption of workloads, not running and monitoring operations."
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
    domain: 'cloud-concepts',
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
          "pt-BR": "Nessa estratégia só existem backups; toda a infraestrutura precisa ser recriada e os dados restaurados após o desastre. Não há um núcleo mínimo já em execução, por isso o RTO é o mais alto.",
          "en": "In this strategy only backups exist; the entire infrastructure must be recreated and data restored after the disaster. There is no minimal core already running, so RTO is the highest."
        }
      },
      {
        title: {
          "pt-BR": "Pilot light",
          "en": "Pilot light"
        },
        correct: true,
        explanation: {
          "pt-BR": "Pilot light mantém apenas o núcleo essencial ativo (como dados replicados), com os servidores de aplicação desligados ou inexistentes até o failover, quando são provisionados e escalados.",
          "en": "Pilot light keeps only the essential core active (such as replicated data), with application servers off or not yet created until failover, when they are provisioned and scaled."
        }
      },
      {
        title: {
          "pt-BR": "Warm standby",
          "en": "Warm standby"
        },
        correct: false,
        explanation: {
          "pt-BR": "Warm standby mantém uma cópia completa e funcional do ambiente rodando em escala reduzida, já capaz de atender tráfego. Isso vai além de uma cópia mínima e custa mais que o pilot light.",
          "en": "Warm standby keeps a complete, functional copy of the environment running at reduced scale, already able to serve traffic. That goes beyond a minimal copy and costs more than pilot light."
        }
      },
      {
        title: {
          "pt-BR": "Multi-site active/active",
          "en": "Multi-site active/active"
        },
        correct: false,
        explanation: {
          "pt-BR": "Active/active mantém ambientes em escala total atendendo tráfego em mais de um local ao mesmo tempo. Tem o menor RTO, mas é a estratégia mais cara, o oposto de uma cópia mínima.",
          "en": "Active/active keeps full-scale environments serving traffic in more than one location at the same time. It has the lowest RTO, but it is the most expensive strategy, the opposite of a minimal copy."
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
    domain: 'cloud-technology-services',
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
          "pt-BR": "Amazon Route 53 com roteamento multivalor e health checks",
          "en": "Amazon Route 53 with multivalue routing and health checks"
        },
        correct: false,
        explanation: {
          "pt-BR": "O roteamento multivalor devolve até oito registros saudáveis, mas atua no nível de DNS: os clientes fazem cache das respostas pelo TTL e escolhem o IP, então não há distribuição por requisição entre os alvos.",
          "en": "Multivalue routing returns up to eight healthy records, but it works at the DNS level: clients cache responses for the TTL and pick the IP, so there is no per-request distribution across targets."
        }
      },
      {
        title: {
          "pt-BR": "Amazon CloudFront com um grupo de origens para failover",
          "en": "Amazon CloudFront with an origin group for failover"
        },
        correct: false,
        explanation: {
          "pt-BR": "Um grupo de origens tem uma origem primária e uma secundária usada apenas em caso de falha. Ele não reparte requisições entre várias instâncias em diferentes AZs.",
          "en": "An origin group has a primary origin and a secondary one used only on failure. It does not spread requests across multiple instances in different AZs."
        }
      },
      {
        title: {
          "pt-BR": "Elastic Load Balancing com um Application Load Balancer",
          "en": "Elastic Load Balancing with an Application Load Balancer"
        },
        correct: true,
        explanation: {
          "pt-BR": "O ELB distribui cada requisição entre os alvos registrados em várias AZs e, com base em health checks, envia tráfego apenas para os destinos saudáveis.",
          "en": "ELB distributes each request across registered targets in multiple AZs and, based on health checks, sends traffic only to healthy targets."
        }
      },
      {
        title: {
          "pt-BR": "Amazon EC2 Auto Scaling com health checks do EC2",
          "en": "Amazon EC2 Auto Scaling with EC2 health checks"
        },
        correct: false,
        explanation: {
          "pt-BR": "Auto Scaling substitui instâncias com falha e ajusta a quantidade de instâncias, mas não recebe nem distribui as requisições dos usuários entre elas.",
          "en": "Auto Scaling replaces failed instances and adjusts the number of instances, but it does not receive or distribute user requests among them."
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
    domain: 'cloud-technology-services',
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
          "pt-BR": "Amazon CloudFront com domínio personalizado e origin failover",
          "en": "Amazon CloudFront with a custom domain and origin failover"
        },
        correct: false,
        explanation: {
          "pt-BR": "CloudFront pode alternar entre origens, mas é uma CDN: não hospeda zonas DNS públicas. O domínio personalizado ainda precisa de um provedor de DNS que aponte para a distribuição.",
          "en": "CloudFront can switch between origins, but it is a CDN: it does not host public DNS zones. The custom domain still needs a DNS provider pointing to the distribution."
        }
      },
      {
        title: {
          "pt-BR": "AWS Global Accelerator com health checks nos endpoints",
          "en": "AWS Global Accelerator with endpoint health checks"
        },
        correct: false,
        explanation: {
          "pt-BR": "Global Accelerator fornece IPs anycast estáticos e desvia tráfego de endpoints não saudáveis, mas não é um serviço de DNS: não gerencia zonas nem registros do domínio público.",
          "en": "Global Accelerator provides static anycast IPs and diverts traffic away from unhealthy endpoints, but it is not a DNS service: it does not manage the public domain's zones or records."
        }
      },
      {
        title: {
          "pt-BR": "Elastic Load Balancing com balanceamento entre zonas",
          "en": "Elastic Load Balancing with cross-zone load balancing"
        },
        correct: false,
        explanation: {
          "pt-BR": "O ELB verifica a saúde dos alvos dentro de uma região e fornece um nome DNS próprio, mas não gerencia o DNS público da empresa nem direciona usuários para endpoints em outras regiões.",
          "en": "ELB checks target health within a single Region and provides its own DNS name, but it does not manage the company's public DNS or direct users to endpoints in other Regions."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Route 53 com política de roteamento de failover",
          "en": "Amazon Route 53 with a failover routing policy"
        },
        correct: true,
        explanation: {
          "pt-BR": "Route 53 hospeda zonas DNS públicas, executa health checks e, com a política de failover, responde com o endpoint secundário quando o primário fica indisponível.",
          "en": "Route 53 hosts public DNS zones, runs health checks, and, with the failover routing policy, answers with the secondary endpoint when the primary becomes unavailable."
        }
      }
    ],
    explanation: {
      "pt-BR": "Route 53 é o serviço de DNS gerenciado da AWS, ideal para roteamento inteligente e health checks de domínios públicos.",
      "en": "Route 53 is AWS's managed DNS service, ideal for intelligent routing and health checks for public domains."
    }
  },
  {
    id: 21,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Conceitos de nuvem - Ajuste de capacidade à demanda",
      "en": "Cloud Concepts - Matching Capacity to Demand"
    },
    description: {
      "pt-BR": "Um site de venda de ingressos recebe 20 vezes mais acessos quando as vendas abrem e volta ao tráfego normal poucas horas depois. A empresa quer que os recursos sejam adicionados e removidos automaticamente, pagando só pela capacidade usada. Qual característica da nuvem descreve esse comportamento?",
      "en": "A ticketing website receives 20 times more traffic when sales open and returns to normal traffic a few hours later. The company wants resources to be added and removed automatically, paying only for the capacity used. Which cloud characteristic describes this behavior?"
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
          "pt-BR": "Escalabilidade, que permite ao sistema crescer para suportar mais carga",
          "en": "Scalability, which allows the system to grow to handle more load"
        },
        correct: false,
        explanation: {
          "pt-BR": "Escalabilidade é a capacidade de acomodar mais carga adicionando recursos ao longo do tempo. Ela não implica, por si só, ajustar a capacidade automaticamente nos dois sentidos, liberando recursos quando a demanda cai, que é o ponto central do cenário.",
          "en": "Scalability is the ability to accommodate more load by adding resources over time. By itself it does not imply automatically adjusting capacity in both directions and releasing resources when demand drops, which is the core of the scenario."
        }
      },
      {
        title: {
          "pt-BR": "Elasticidade, que ajusta os recursos para cima e para baixo conforme a demanda",
          "en": "Elasticity, which adjusts resources up and down according to demand"
        },
        correct: true,
        explanation: {
          "pt-BR": "Elasticidade é a capacidade de adquirir recursos quando necessário e liberá-los quando não são mais usados, de forma automática. Assim a empresa atende ao pico e deixa de pagar pela capacidade extra logo depois.",
          "en": "Elasticity is the ability to acquire resources when needed and release them when they are no longer used, automatically. This way the company serves the peak and stops paying for the extra capacity right afterward."
        }
      },
      {
        title: {
          "pt-BR": "Alta disponibilidade, que mantém o sistema acessível na maior parte do tempo",
          "en": "High availability, which keeps the system accessible most of the time"
        },
        correct: false,
        explanation: {
          "pt-BR": "Alta disponibilidade trata de minimizar o tempo de indisponibilidade, normalmente com redundância entre zonas. Ela não descreve o aumento e a redução automáticos de capacidade em função do volume de acessos.",
          "en": "High availability is about minimizing downtime, usually through redundancy across zones. It does not describe automatically increasing and decreasing capacity based on traffic volume."
        }
      },
      {
        title: {
          "pt-BR": "Tolerância a falhas, que mantém o sistema operando mesmo com falhas de componentes",
          "en": "Fault tolerance, which keeps the system running even when components fail"
        },
        correct: false,
        explanation: {
          "pt-BR": "Tolerância a falhas garante que o sistema continue funcionando quando um componente falha, por meio de redundância. O cenário não envolve falhas, e sim variação de demanda e pagamento proporcional ao uso.",
          "en": "Fault tolerance ensures the system keeps working when a component fails, through redundancy. The scenario does not involve failures, but rather demand variation and paying in proportion to usage."
        }
      }
    ],
    explanation: {
      "pt-BR": "Elasticidade é ajustar automaticamente a capacidade à demanda nos dois sentidos, enquanto escalabilidade é a capacidade de crescer para suportar mais carga.",
      "en": "Elasticity is automatically adjusting capacity to demand in both directions, while scalability is the ability to grow to handle more load."
    }
  },
  {
    id: 22,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Well-Architected - Identidade, rastreabilidade e proteção de dados",
      "en": "Well-Architected - Identity, Traceability, and Data Protection"
    },
    description: {
      "pt-BR": "Após uma revisão do AWS Well-Architected, a equipe recebeu estas recomendações: implementar uma base sólida de identidade, habilitar rastreabilidade, aplicar controles em todas as camadas e proteger dados em trânsito e em repouso. A qual pilar essas recomendações pertencem?",
      "en": "After an AWS Well-Architected review, the team received these recommendations: implement a strong identity foundation, enable traceability, apply controls at all layers, and protect data in transit and at rest. Which pillar do these recommendations belong to?"
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
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        correct: false,
        explanation: {
          "pt-BR": "O pilar Confiabilidade foca em recuperação automática de falhas, testes de procedimentos de recuperação e gestão de capacidade. Identidade, rastreabilidade e proteção de dados não são seus princípios de design.",
          "en": "The Reliability pillar focuses on automatic recovery from failure, testing recovery procedures, and capacity management. Identity, traceability, and data protection are not its design principles."
        }
      },
      {
        title: {
          "pt-BR": "Excelência Operacional",
          "en": "Operational Excellence"
        },
        correct: false,
        explanation: {
          "pt-BR": "Excelência Operacional trata de executar operações como código, fazer mudanças pequenas e reversíveis e aprender com falhas operacionais. Não é o pilar que define controles de identidade e proteção de dados.",
          "en": "Operational Excellence is about performing operations as code, making small reversible changes, and learning from operational failures. It is not the pillar that defines identity controls and data protection."
        }
      },
      {
        title: {
          "pt-BR": "Eficiência de Performance",
          "en": "Performance Efficiency"
        },
        correct: false,
        explanation: {
          "pt-BR": "Eficiência de Performance trata de selecionar e usar os recursos computacionais de forma eficiente, como adotar serverless e experimentar com frequência. Não aborda identidade nem proteção de dados.",
          "en": "Performance Efficiency is about selecting and using computing resources efficiently, such as adopting serverless and experimenting often. It does not address identity or data protection."
        }
      },
      {
        title: {
          "pt-BR": "Segurança",
          "en": "Security"
        },
        correct: true,
        explanation: {
          "pt-BR": "Base sólida de identidade, rastreabilidade, segurança em todas as camadas e proteção de dados em trânsito e em repouso são princípios de design do pilar Segurança do Well-Architected Framework.",
          "en": "A strong identity foundation, traceability, security at all layers, and protecting data in transit and at rest are design principles of the Security pillar of the Well-Architected Framework."
        }
      }
    ],
    explanation: {
      "pt-BR": "O pilar Segurança reúne os princípios de proteger informações, sistemas e ativos, incluindo identidade, rastreabilidade e proteção de dados.",
      "en": "The Security pillar gathers the principles for protecting information, systems, and assets, including identity, traceability, and data protection."
    }
  },
  {
    id: 23,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Well-Architected - Recuperação e capacidade",
      "en": "Well-Architected - Recovery and Capacity"
    },
    description: {
      "pt-BR": "Uma empresa quer que sua carga de trabalho se recupere automaticamente de falhas, que os procedimentos de recuperação sejam testados regularmente e que a escala horizontal aumente a disponibilidade agregada. Qual pilar do Well-Architected Framework trata desses princípios?",
      "en": "A company wants its workload to recover automatically from failures, its recovery procedures to be tested regularly, and horizontal scaling to increase aggregate availability. Which Well-Architected Framework pillar covers these principles?"
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
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        correct: true,
        explanation: {
          "pt-BR": "Recuperar-se automaticamente de falhas, testar procedimentos de recuperação, escalar horizontalmente e parar de adivinhar capacidade são princípios de design do pilar Confiabilidade.",
          "en": "Automatically recovering from failure, testing recovery procedures, scaling horizontally, and stopping guessing capacity are design principles of the Reliability pillar."
        }
      },
      {
        title: {
          "pt-BR": "Eficiência de Performance",
          "en": "Performance Efficiency"
        },
        correct: false,
        explanation: {
          "pt-BR": "Eficiência de Performance trata de escolher os tipos e tamanhos certos de recursos e usar tecnologias avançadas para atender aos requisitos de desempenho. Recuperação de falhas e testes de recuperação pertencem a outro pilar.",
          "en": "Performance Efficiency is about choosing the right resource types and sizes and using advanced technologies to meet performance requirements. Failure recovery and recovery testing belong to another pillar."
        }
      },
      {
        title: {
          "pt-BR": "Segurança",
          "en": "Security"
        },
        correct: false,
        explanation: {
          "pt-BR": "O pilar Segurança foca em identidade, rastreabilidade e proteção de dados. Embora a resposta a incidentes seja parte dele, recuperação automática de falhas e disponibilidade agregada não são seus princípios.",
          "en": "The Security pillar focuses on identity, traceability, and data protection. Although incident response is part of it, automatic failure recovery and aggregate availability are not its principles."
        }
      },
      {
        title: {
          "pt-BR": "Sustentabilidade",
          "en": "Sustainability"
        },
        correct: false,
        explanation: {
          "pt-BR": "Sustentabilidade trata de reduzir o impacto ambiental das cargas de trabalho, maximizando a utilização dos recursos. Não define práticas de recuperação de falhas.",
          "en": "Sustainability is about reducing the environmental impact of workloads by maximizing resource utilization. It does not define failure recovery practices."
        }
      }
    ],
    explanation: {
      "pt-BR": "O pilar Confiabilidade garante que a carga de trabalho execute sua função corretamente e se recupere de falhas de forma consistente.",
      "en": "The Reliability pillar ensures the workload performs its intended function correctly and recovers from failures consistently."
    }
  },
  {
    id: 24,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Well-Architected - Escolha e evolução de recursos",
      "en": "Well-Architected - Choosing and Evolving Resources"
    },
    description: {
      "pt-BR": "Uma equipe quer selecionar os tipos de instância e de banco mais adequados aos requisitos da aplicação, adotar arquiteturas serverless e revisar essas escolhas à medida que a AWS lança novas tecnologias. Qual pilar do Well-Architected Framework descreve essa abordagem?",
      "en": "A team wants to select the instance and database types best suited to the application's requirements, adopt serverless architectures, and revisit these choices as AWS launches new technologies. Which Well-Architected Framework pillar describes this approach?"
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
          "pt-BR": "Otimização de Custos",
          "en": "Cost Optimization"
        },
        correct: false,
        explanation: {
          "pt-BR": "Otimização de Custos foca em evitar gastos desnecessários, atribuir despesas e adotar o modelo de consumo. O cenário prioriza atender aos requisitos técnicos da aplicação com os recursos mais adequados, não reduzir a fatura.",
          "en": "Cost Optimization focuses on avoiding unnecessary spending, attributing expenses, and adopting a consumption model. The scenario prioritizes meeting the application's technical requirements with the most suitable resources, not reducing the bill."
        }
      },
      {
        title: {
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        correct: false,
        explanation: {
          "pt-BR": "Confiabilidade trata de recuperação de falhas e disponibilidade. Escolher os tipos de recurso de melhor desempenho e revisar essas escolhas com novas tecnologias não é seu foco.",
          "en": "Reliability is about failure recovery and availability. Choosing the best-performing resource types and revisiting those choices with new technologies is not its focus."
        }
      },
      {
        title: {
          "pt-BR": "Eficiência de Performance",
          "en": "Performance Efficiency"
        },
        correct: true,
        explanation: {
          "pt-BR": "Eficiência de Performance trata de usar recursos computacionais de forma eficiente para atender aos requisitos e manter essa eficiência conforme a demanda e as tecnologias evoluem, incluindo usar serverless e experimentar com frequência.",
          "en": "Performance Efficiency is about using computing resources efficiently to meet requirements and maintaining that efficiency as demand and technologies evolve, including using serverless and experimenting often."
        }
      },
      {
        title: {
          "pt-BR": "Excelência Operacional",
          "en": "Operational Excellence"
        },
        correct: false,
        explanation: {
          "pt-BR": "Excelência Operacional foca em processos de operação, automação de mudanças e melhoria contínua dos procedimentos. Não trata da seleção do tipo de recurso mais adequado ao desempenho da aplicação.",
          "en": "Operational Excellence focuses on operational processes, automating changes, and continuously improving procedures. It does not cover selecting the resource type best suited to the application's performance."
        }
      }
    ],
    explanation: {
      "pt-BR": "O pilar Eficiência de Performance orienta a escolha e a evolução dos recursos certos para atender aos requisitos de desempenho.",
      "en": "The Performance Efficiency pillar guides choosing and evolving the right resources to meet performance requirements."
    }
  },
  {
    id: 25,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Well-Architected - Gestão financeira da nuvem",
      "en": "Well-Architected - Cloud Financial Management"
    },
    description: {
      "pt-BR": "Uma empresa quer implementar gestão financeira da nuvem, adotar o modelo de pagar apenas pelo que consome e atribuir os gastos de cada carga de trabalho aos respectivos donos de negócio. Qual pilar do Well-Architected Framework trata desses princípios?",
      "en": "A company wants to implement cloud financial management, adopt a pay-only-for-what-you-consume model, and attribute each workload's spending to its business owners. Which Well-Architected Framework pillar covers these principles?"
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
          "pt-BR": "Sustentabilidade",
          "en": "Sustainability"
        },
        correct: false,
        explanation: {
          "pt-BR": "Sustentabilidade busca reduzir o impacto ambiental, como a energia consumida pelas cargas de trabalho. Gestão financeira e atribuição de gastos a donos de negócio não são seus princípios.",
          "en": "Sustainability seeks to reduce environmental impact, such as the energy consumed by workloads. Financial management and attributing spending to business owners are not its principles."
        }
      },
      {
        title: {
          "pt-BR": "Otimização de Custos",
          "en": "Cost Optimization"
        },
        correct: true,
        explanation: {
          "pt-BR": "Implementar gestão financeira da nuvem, adotar o modelo de consumo, medir a eficiência geral e analisar e atribuir despesas são princípios de design do pilar Otimização de Custos.",
          "en": "Implementing cloud financial management, adopting a consumption model, measuring overall efficiency, and analyzing and attributing expenditure are design principles of the Cost Optimization pillar."
        }
      },
      {
        title: {
          "pt-BR": "Excelência Operacional",
          "en": "Operational Excellence"
        },
        correct: false,
        explanation: {
          "pt-BR": "Excelência Operacional trata de como operar e monitorar sistemas e melhorar processos. Embora use métricas, não é o pilar dedicado à gestão financeira e à atribuição de custos.",
          "en": "Operational Excellence is about how to operate and monitor systems and improve processes. Although it uses metrics, it is not the pillar dedicated to financial management and cost attribution."
        }
      },
      {
        title: {
          "pt-BR": "Eficiência de Performance",
          "en": "Performance Efficiency"
        },
        correct: false,
        explanation: {
          "pt-BR": "Eficiência de Performance foca em usar os recursos certos para atender aos requisitos de desempenho. Atribuição de gastos e modelo de consumo pertencem a outro pilar.",
          "en": "Performance Efficiency focuses on using the right resources to meet performance requirements. Spending attribution and the consumption model belong to another pillar."
        }
      }
    ],
    explanation: {
      "pt-BR": "O pilar Otimização de Custos orienta a entregar valor de negócio ao menor preço, com gestão financeira e visibilidade dos gastos.",
      "en": "The Cost Optimization pillar guides delivering business value at the lowest price point, with financial management and spending visibility."
    }
  },
  {
    id: 26,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Well-Architected - Impacto ambiental",
      "en": "Well-Architected - Environmental Impact"
    },
    description: {
      "pt-BR": "Uma empresa definiu metas para reduzir a pegada de carbono de suas cargas de trabalho. Ela quer maximizar a utilização dos recursos, preferir serviços gerenciados e adotar hardware mais eficiente em energia. Qual pilar do Well-Architected Framework trata desses objetivos?",
      "en": "A company has set goals to reduce the carbon footprint of its workloads. It wants to maximize resource utilization, prefer managed services, and adopt more energy-efficient hardware. Which Well-Architected Framework pillar covers these goals?"
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
          "pt-BR": "Otimização de Custos",
          "en": "Cost Optimization"
        },
        correct: false,
        explanation: {
          "pt-BR": "Maximizar a utilização costuma reduzir custos, mas o objetivo declarado é reduzir a pegada de carbono. Otimização de Custos mede sucesso em gasto, não em impacto ambiental.",
          "en": "Maximizing utilization often reduces costs, but the stated goal is to reduce the carbon footprint. Cost Optimization measures success in spending, not in environmental impact."
        }
      },
      {
        title: {
          "pt-BR": "Eficiência de Performance",
          "en": "Performance Efficiency"
        },
        correct: false,
        explanation: {
          "pt-BR": "Eficiência de Performance busca atender aos requisitos de desempenho com os recursos certos. Metas de carbono e redução de impacto ambiental são tratadas por outro pilar.",
          "en": "Performance Efficiency seeks to meet performance requirements with the right resources. Carbon goals and reducing environmental impact are handled by another pillar."
        }
      },
      {
        title: {
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        correct: false,
        explanation: {
          "pt-BR": "Confiabilidade trata de disponibilidade e recuperação de falhas. Não define metas de redução de consumo de energia nem de pegada de carbono.",
          "en": "Reliability is about availability and failure recovery. It does not define goals for reducing energy consumption or carbon footprint."
        }
      },
      {
        title: {
          "pt-BR": "Sustentabilidade",
          "en": "Sustainability"
        },
        correct: true,
        explanation: {
          "pt-BR": "O pilar Sustentabilidade foca em minimizar o impacto ambiental das cargas de trabalho, com princípios como estabelecer metas, maximizar a utilização, usar serviços gerenciados e adotar hardware mais eficiente.",
          "en": "The Sustainability pillar focuses on minimizing the environmental impact of workloads, with principles such as setting goals, maximizing utilization, using managed services, and adopting more efficient hardware."
        }
      }
    ],
    explanation: {
      "pt-BR": "O pilar Sustentabilidade trata de reduzir o impacto ambiental das cargas de trabalho executadas na nuvem.",
      "en": "The Sustainability pillar is about reducing the environmental impact of workloads running in the cloud."
    }
  },
  {
    id: 27,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Migração - Prazo curto e sem alterações",
      "en": "Migration - Short Deadline and No Changes"
    },
    description: {
      "pt-BR": "Uma empresa precisa migrar 200 máquinas virtuais do seu data center para a AWS em três meses, antes do fim do contrato de hospedagem. Não há tempo nem orçamento para alterar o código ou a arquitetura das aplicações. Qual estratégia de migração é mais adequada?",
      "en": "A company needs to migrate 200 virtual machines from its data center to AWS within three months, before its hosting contract ends. There is no time or budget to change the applications' code or architecture. Which migration strategy is most appropriate?"
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
          "pt-BR": "Replatform, fazendo pequenas otimizações como trocar o banco por um serviço gerenciado",
          "en": "Replatform, making small optimizations such as moving the database to a managed service"
        },
        correct: false,
        explanation: {
          "pt-BR": "Replatform introduz ajustes pontuais para aproveitar a nuvem, o que exige algum esforço de alteração e teste. Com prazo curto e nenhum orçamento para mudanças, mover as VMs como estão é mais rápido.",
          "en": "Replatform introduces targeted adjustments to take advantage of the cloud, which requires some change and testing effort. With a short deadline and no budget for changes, moving the VMs as they are is faster."
        }
      },
      {
        title: {
          "pt-BR": "Refactor, redesenhando as aplicações para usar serviços nativos da nuvem",
          "en": "Refactor, redesigning the applications to use cloud-native services"
        },
        correct: false,
        explanation: {
          "pt-BR": "Refactor exige reescrever ou reprojetar as aplicações, o que leva mais tempo e custa mais. Contradiz a restrição de não alterar código nem arquitetura dentro de três meses.",
          "en": "Refactor requires rewriting or redesigning the applications, which takes more time and costs more. It contradicts the constraint of not changing code or architecture within three months."
        }
      },
      {
        title: {
          "pt-BR": "Rehost, movendo as máquinas virtuais para instâncias EC2 sem alterações",
          "en": "Rehost, moving the virtual machines to EC2 instances without changes"
        },
        correct: true,
        explanation: {
          "pt-BR": "Rehost (lift-and-shift) move as cargas como estão, sem alterar código, e pode ser automatizado com o AWS Application Migration Service. É a estratégia mais rápida para cumprir um prazo curto.",
          "en": "Rehost (lift-and-shift) moves workloads as they are, without changing code, and can be automated with AWS Application Migration Service. It is the fastest strategy to meet a short deadline."
        }
      },
      {
        title: {
          "pt-BR": "Repurchase, substituindo as aplicações por produtos SaaS equivalentes",
          "en": "Repurchase, replacing the applications with equivalent SaaS products"
        },
        correct: false,
        explanation: {
          "pt-BR": "Repurchase troca a aplicação por outro produto, exigindo migração de dados, adaptação de processos e treinamento. Para 200 VMs em três meses sem mudanças, não é a opção viável.",
          "en": "Repurchase replaces the application with another product, requiring data migration, process adaptation, and training. For 200 VMs in three months without changes, it is not a viable option."
        }
      }
    ],
    explanation: {
      "pt-BR": "Rehost (lift-and-shift) é a estratégia mais rápida quando é preciso migrar sem alterar código ou arquitetura.",
      "en": "Rehost (lift-and-shift) is the fastest strategy when you need to migrate without changing code or architecture."
    }
  },
  {
    id: 28,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Migração - Modernização da arquitetura",
      "en": "Migration - Architecture Modernization"
    },
    description: {
      "pt-BR": "Uma aplicação monolítica não consegue escalar partes específicas do sistema e cada nova funcionalidade leva meses para ser entregue. A empresa aceita investir um esforço significativo de desenvolvimento para dividi-la em microsserviços com serviços serverless. Qual estratégia de migração ela está adotando?",
      "en": "A monolithic application cannot scale specific parts of the system, and each new feature takes months to deliver. The company is willing to invest significant development effort to split it into microservices using serverless services. Which migration strategy is it adopting?"
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
          "pt-BR": "Rehost",
          "en": "Rehost"
        },
        correct: false,
        explanation: {
          "pt-BR": "Rehost move a aplicação como está para a nuvem. O monólito continuaria com as mesmas limitações de escala e de velocidade de entrega que motivaram o projeto.",
          "en": "Rehost moves the application to the cloud as is. The monolith would keep the same scaling and delivery-speed limitations that motivated the project."
        }
      },
      {
        title: {
          "pt-BR": "Replatform",
          "en": "Replatform"
        },
        correct: false,
        explanation: {
          "pt-BR": "Replatform faz apenas otimizações pontuais, como trocar o banco por um serviço gerenciado, mantendo a arquitetura central. Não divide o monólito em microsserviços.",
          "en": "Replatform only makes targeted optimizations, such as moving the database to a managed service, while keeping the core architecture. It does not split the monolith into microservices."
        }
      },
      {
        title: {
          "pt-BR": "Retain",
          "en": "Retain"
        },
        correct: false,
        explanation: {
          "pt-BR": "Retain significa manter a aplicação onde está, sem migrá-la por enquanto. Não resolveria os problemas de escala nem de agilidade descritos.",
          "en": "Retain means keeping the application where it is, without migrating it for now. It would not solve the scaling or agility problems described."
        }
      },
      {
        title: {
          "pt-BR": "Refactor (Re-architect)",
          "en": "Refactor (Re-architect)"
        },
        correct: true,
        explanation: {
          "pt-BR": "Refactor/Re-architect reprojeta a aplicação usando recursos nativos da nuvem, como microsserviços e serverless. Exige mais esforço, mas é o que atende a necessidades de escala e agilidade difíceis de obter na arquitetura atual.",
          "en": "Refactor/Re-architect redesigns the application using cloud-native features such as microservices and serverless. It requires more effort, but it meets scaling and agility needs that are hard to achieve with the current architecture."
        }
      }
    ],
    explanation: {
      "pt-BR": "Refactor/Re-architect é usado quando o negócio precisa de recursos nativos da nuvem que a arquitetura atual não permite obter.",
      "en": "Refactor/Re-architect is used when the business needs cloud-native capabilities that the current architecture cannot deliver."
    }
  },
  {
    id: 29,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Cloud Adoption Framework - Perspectivas",
      "en": "Cloud Adoption Framework - Perspectives"
    },
    description: {
      "pt-BR": "A iniciativa de nuvem de uma empresa está travada porque os funcionários não têm habilidades em nuvem e a cultura organizacional resiste às mudanças. Qual perspectiva do AWS Cloud Adoption Framework (AWS CAF) trata de capacitação, gestão de mudança organizacional e cultura?",
      "en": "A company's cloud initiative has stalled because employees lack cloud skills and the organizational culture resists change. Which AWS Cloud Adoption Framework (AWS CAF) perspective addresses training, organizational change management, and culture?"
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
          "pt-BR": "Perspectiva de Pessoas",
          "en": "People perspective"
        },
        correct: true,
        explanation: {
          "pt-BR": "A perspectiva de Pessoas do AWS CAF cobre capacidades como evolução da cultura, gestão de mudança organizacional, capacitação da força de trabalho e design da organização.",
          "en": "The AWS CAF People perspective covers capabilities such as culture evolution, organizational change management, workforce transformation, and organization design."
        }
      },
      {
        title: {
          "pt-BR": "Perspectiva de Governança",
          "en": "Governance perspective"
        },
        correct: false,
        explanation: {
          "pt-BR": "A perspectiva de Governança trata de gestão de programas e portfólio, gestão de riscos, benefícios e finanças da nuvem. Não é a que foca em habilidades e cultura das pessoas.",
          "en": "The Governance perspective covers program and portfolio management, risk management, benefits, and cloud financial management. It is not the one focused on people's skills and culture."
        }
      },
      {
        title: {
          "pt-BR": "Perspectiva de Plataforma",
          "en": "Platform perspective"
        },
        correct: false,
        explanation: {
          "pt-BR": "A perspectiva de Plataforma trata da arquitetura e da construção da plataforma de nuvem, como provisionamento e engenharia de dados. Não aborda capacitação nem mudança cultural.",
          "en": "The Platform perspective covers the architecture and building of the cloud platform, such as provisioning and data engineering. It does not address training or cultural change."
        }
      },
      {
        title: {
          "pt-BR": "Perspectiva de Operações",
          "en": "Operations perspective"
        },
        correct: false,
        explanation: {
          "pt-BR": "A perspectiva de Operações trata de observabilidade, gestão de incidentes e entrega dos serviços de nuvem no nível acordado. Não é voltada à transformação cultural e de habilidades.",
          "en": "The Operations perspective covers observability, incident management, and delivering cloud services at the agreed level. It is not aimed at cultural and skills transformation."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS CAF organiza a transformação em seis perspectivas; a de Pessoas é a que trata de cultura, capacitação e mudança organizacional.",
      "en": "The AWS CAF organizes transformation into six perspectives; the People perspective is the one that covers culture, training, and organizational change."
    }
  },
  {
    id: 30,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Economia da nuvem - Modelo de despesas",
      "en": "Cloud Economics - Expense Model"
    },
    description: {
      "pt-BR": "A cada três anos, uma empresa faz uma grande compra antecipada de servidores, o que imobiliza caixa em equipamentos que muitas vezes ficam subutilizados. O diretor financeiro quer passar a pagar pela computação apenas quando ela for consumida. Qual vantagem da nuvem atende a esse objetivo?",
      "en": "Every three years, a company makes a large upfront server purchase, which ties up cash in equipment that often sits underutilized. The CFO wants to start paying for computing only when it is consumed. Which cloud advantage meets this goal?"
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
          "pt-BR": "Beneficiar-se de economias de escala massivas",
          "en": "Benefit from massive economies of scale"
        },
        correct: false,
        explanation: {
          "pt-BR": "Economias de escala explicam por que a AWS consegue cobrar preços unitários menores. A questão, porém, é sobre substituir o investimento antecipado por pagamento conforme o uso, que é outra vantagem.",
          "en": "Economies of scale explain why AWS can charge lower unit prices. The question, however, is about replacing the upfront investment with pay-as-you-go payments, which is a different advantage."
        }
      },
      {
        title: {
          "pt-BR": "Parar de gastar dinheiro operando data centers",
          "en": "Stop spending money running data centers"
        },
        correct: false,
        explanation: {
          "pt-BR": "Essa vantagem trata de deixar de gastar esforço com tarefas como instalar racks, energia e refrigeração para focar no negócio. O cenário é sobre o modelo financeiro de compra antecipada, não sobre o esforço operacional.",
          "en": "This advantage is about no longer spending effort on tasks such as racking, power, and cooling so you can focus on the business. The scenario is about the upfront purchase financial model, not operational effort."
        }
      },
      {
        title: {
          "pt-BR": "Trocar despesa de capital (CapEx) por despesa variável (OpEx)",
          "en": "Trade capital expense (CapEx) for variable expense (OpEx)"
        },
        correct: true,
        explanation: {
          "pt-BR": "Na nuvem, em vez de investir antecipadamente em data centers e servidores, a empresa paga apenas pelos recursos que consome, transformando CapEx em despesa operacional variável.",
          "en": "In the cloud, instead of investing upfront in data centers and servers, the company pays only for the resources it consumes, turning CapEx into a variable operating expense."
        }
      },
      {
        title: {
          "pt-BR": "Tornar-se global em minutos",
          "en": "Go global in minutes"
        },
        correct: false,
        explanation: {
          "pt-BR": "Tornar-se global em minutos trata de implantar aplicações em várias regiões do mundo rapidamente. Não responde à necessidade de eliminar compras antecipadas de hardware.",
          "en": "Going global in minutes is about deploying applications in multiple regions around the world quickly. It does not address the need to eliminate upfront hardware purchases."
        }
      }
    ],
    explanation: {
      "pt-BR": "Trocar CapEx por OpEx significa substituir investimentos antecipados em infraestrutura por pagamento variável conforme o consumo.",
      "en": "Trading CapEx for OpEx means replacing upfront infrastructure investments with variable pay-as-you-consume payments."
    }
  },
  {
    id: 31,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Economia da nuvem - Preços unitários menores",
      "en": "Cloud Economics - Lower Unit Prices"
    },
    description: {
      "pt-BR": "Um gestor pergunta por que a AWS consegue oferecer custos variáveis menores do que a empresa conseguiria operando seu próprio data center, e por que já reduziu seus preços diversas vezes ao longo dos anos. Qual vantagem da nuvem explica isso?",
      "en": "A manager asks why AWS can offer lower variable costs than the company could achieve running its own data center, and why AWS has reduced its prices many times over the years. Which cloud advantage explains this?"
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
          "pt-BR": "Parar de adivinhar a capacidade necessária",
          "en": "Stop guessing capacity"
        },
        correct: false,
        explanation: {
          "pt-BR": "Parar de adivinhar capacidade trata de evitar superprovisionamento ou falta de recursos, ajustando-os à demanda. Não explica por que o preço unitário da AWS é menor.",
          "en": "Stopping guessing capacity is about avoiding overprovisioning or running short of resources by adjusting them to demand. It does not explain why AWS's unit price is lower."
        }
      },
      {
        title: {
          "pt-BR": "Beneficiar-se de economias de escala massivas",
          "en": "Benefit from massive economies of scale"
        },
        correct: true,
        explanation: {
          "pt-BR": "Como agrega o uso de centenas de milhares de clientes, a AWS obtém economias de escala que se traduzem em preços pagos conforme o uso menores e em reduções de preço repassadas aos clientes.",
          "en": "Because it aggregates usage from hundreds of thousands of customers, AWS achieves economies of scale that translate into lower pay-as-you-go prices and price reductions passed on to customers."
        }
      },
      {
        title: {
          "pt-BR": "Aumentar a velocidade e a agilidade",
          "en": "Increase speed and agility"
        },
        correct: false,
        explanation: {
          "pt-BR": "Velocidade e agilidade tratam de disponibilizar recursos em minutos para que as equipes experimentem mais rápido. Não é a razão de a AWS ter custos unitários menores.",
          "en": "Speed and agility are about making resources available in minutes so teams can experiment faster. They are not the reason AWS has lower unit costs."
        }
      },
      {
        title: {
          "pt-BR": "Trocar despesa de capital por despesa variável",
          "en": "Trade capital expense for variable expense"
        },
        correct: false,
        explanation: {
          "pt-BR": "Essa vantagem muda a forma de pagamento, de investimento antecipado para pagamento conforme o uso. Ela não explica, por si só, por que o preço de cada unidade consumida é menor.",
          "en": "This advantage changes the form of payment from upfront investment to pay-as-you-go. By itself, it does not explain why the price of each consumed unit is lower."
        }
      }
    ],
    explanation: {
      "pt-BR": "Economias de escala permitem à AWS oferecer preços unitários menores porque o uso de muitos clientes é agregado.",
      "en": "Economies of scale allow AWS to offer lower unit prices because usage from many customers is aggregated."
    }
  },
  {
    id: 32,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Recuperação de desastres - Ambiente reduzido em execução",
      "en": "Disaster Recovery - Scaled-Down Running Environment"
    },
    description: {
      "pt-BR": "Uma empresa precisa de um RTO de poucos minutos para seu sistema de pedidos. Ela aceita manter em outra região uma cópia completa e funcional do ambiente de produção, rodando continuamente em capacidade reduzida, que pode receber tráfego imediatamente e ser ampliada durante o desastre. Qual estratégia de DR é essa?",
      "en": "A company needs an RTO of a few minutes for its ordering system. It accepts keeping in another region a complete, functional copy of the production environment, running continuously at reduced capacity, which can receive traffic immediately and be scaled up during a disaster. Which DR strategy is this?"
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
          "pt-BR": "Pilot light",
          "en": "Pilot light"
        },
        correct: false,
        explanation: {
          "pt-BR": "No pilot light apenas o núcleo, normalmente os dados replicados, fica ativo; os servidores de aplicação ficam desligados e precisam ser iniciados. Isso não corresponde a um ambiente completo já em execução pronto para receber tráfego.",
          "en": "In pilot light only the core, usually the replicated data, is active; the application servers are off and must be started. This does not match a complete environment already running and ready to receive traffic."
        }
      },
      {
        title: {
          "pt-BR": "Warm standby",
          "en": "Warm standby"
        },
        correct: true,
        explanation: {
          "pt-BR": "No warm standby, uma versão reduzida porém totalmente funcional do ambiente roda sempre na região de recuperação. Ela pode atender tráfego de imediato e é escalada para a capacidade total durante o desastre.",
          "en": "In warm standby, a scaled-down but fully functional version of the environment always runs in the recovery region. It can serve traffic immediately and is scaled to full capacity during a disaster."
        }
      },
      {
        title: {
          "pt-BR": "Backup e restauração",
          "en": "Backup and restore"
        },
        correct: false,
        explanation: {
          "pt-BR": "Backup e restauração não mantém ambiente em execução; os recursos são recriados a partir dos backups após o desastre. O RTO costuma ser de horas, não de poucos minutos.",
          "en": "Backup and restore does not keep a running environment; resources are recreated from backups after the disaster. The RTO is usually hours, not a few minutes."
        }
      },
      {
        title: {
          "pt-BR": "Multi-site ativo/ativo",
          "en": "Multi-site active/active"
        },
        correct: false,
        explanation: {
          "pt-BR": "No multi-site ativo/ativo as duas regiões atendem tráfego de produção em capacidade total ao mesmo tempo. O cenário descreve um ambiente de recuperação em capacidade reduzida, que é mais barato.",
          "en": "In multi-site active/active both regions serve production traffic at full capacity at the same time. The scenario describes a recovery environment at reduced capacity, which is cheaper."
        }
      }
    ],
    explanation: {
      "pt-BR": "Warm standby mantém uma cópia reduzida e funcional do ambiente sempre em execução, equilibrando custo e RTO baixo.",
      "en": "Warm standby keeps a scaled-down, functional copy of the environment always running, balancing cost and a low RTO."
    }
  },
  {
    id: 33,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Recuperação de desastres - RTO e RPO próximos de zero",
      "en": "Disaster Recovery - Near-Zero RTO and RPO"
    },
    description: {
      "pt-BR": "Uma plataforma de pagamentos não pode ficar indisponível nem perder transações, exigindo RTO e RPO próximos de zero. A empresa aceita pagar mais para que duas regiões atendam tráfego de produção simultaneamente. Qual estratégia de DR é mais adequada?",
      "en": "A payments platform cannot go down or lose transactions, requiring near-zero RTO and RPO. The company is willing to pay more so that two regions serve production traffic simultaneously. Which DR strategy is most appropriate?"
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
          "pt-BR": "Warm standby",
          "en": "Warm standby"
        },
        correct: false,
        explanation: {
          "pt-BR": "No warm standby a região de recuperação roda em capacidade reduzida e precisa ser escalada e receber o failover. Isso gera um RTO de minutos, e a região secundária não atende a produção simultaneamente.",
          "en": "In warm standby the recovery region runs at reduced capacity and must be scaled up and receive the failover. This produces an RTO of minutes, and the secondary region does not serve production simultaneously."
        }
      },
      {
        title: {
          "pt-BR": "Pilot light",
          "en": "Pilot light"
        },
        correct: false,
        explanation: {
          "pt-BR": "No pilot light apenas os dados ficam replicados e os servidores de aplicação precisam ser iniciados durante o desastre. O RTO é maior e não há atendimento simultâneo em duas regiões.",
          "en": "In pilot light only the data is replicated, and the application servers must be started during the disaster. The RTO is higher, and there is no simultaneous serving from two regions."
        }
      },
      {
        title: {
          "pt-BR": "Backup e restauração",
          "en": "Backup and restore"
        },
        correct: false,
        explanation: {
          "pt-BR": "Backup e restauração é a estratégia mais barata, mas o RPO depende da frequência dos backups e o RTO costuma ser de horas. Não atende a requisitos próximos de zero.",
          "en": "Backup and restore is the cheapest strategy, but the RPO depends on backup frequency and the RTO is usually hours. It does not meet near-zero requirements."
        }
      },
      {
        title: {
          "pt-BR": "Multi-site ativo/ativo",
          "en": "Multi-site active/active"
        },
        correct: true,
        explanation: {
          "pt-BR": "No multi-site ativo/ativo a carga roda em capacidade total em várias regiões ao mesmo tempo. Se uma região falha, o tráfego segue nas demais, oferecendo o menor RTO e RPO, com o maior custo.",
          "en": "In multi-site active/active the workload runs at full capacity in multiple regions at the same time. If one region fails, traffic continues in the others, providing the lowest RTO and RPO, at the highest cost."
        }
      }
    ],
    explanation: {
      "pt-BR": "Multi-site ativo/ativo é a estratégia de DR com menor RTO e RPO, pois várias regiões atendem produção ao mesmo tempo.",
      "en": "Multi-site active/active is the DR strategy with the lowest RTO and RPO, because multiple regions serve production at the same time."
    }
  },
  {
    id: 34,
    domain: 'cloud-concepts',
    title: {
      "pt-BR": "Benefícios da nuvem - Expansão geográfica",
      "en": "Cloud Benefits - Geographic Expansion"
    },
    description: {
      "pt-BR": "Uma startup brasileira quer lançar sua aplicação para usuários na Europa e na Ásia na mesma semana, com baixa latência para esses clientes, sem construir nem alugar data centers nessas regiões. Qual vantagem da nuvem torna isso possível?",
      "en": "A Brazilian startup wants to launch its application to users in Europe and Asia in the same week, with low latency for those customers, without building or leasing data centers in those regions. Which cloud advantage makes this possible?"
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
          "pt-BR": "Beneficiar-se de economias de escala massivas",
          "en": "Benefit from massive economies of scale"
        },
        correct: false,
        explanation: {
          "pt-BR": "Economias de escala explicam os preços unitários menores da AWS. Não tratam da capacidade de implantar a aplicação rapidamente em outros continentes.",
          "en": "Economies of scale explain AWS's lower unit prices. They do not address the ability to quickly deploy the application on other continents."
        }
      },
      {
        title: {
          "pt-BR": "Tornar-se global em minutos",
          "en": "Go global in minutes"
        },
        correct: true,
        explanation: {
          "pt-BR": "Com Regiões da AWS espalhadas pelo mundo, a empresa pode implantar a aplicação perto dos usuários em outros continentes em poucos cliques, sem construir infraestrutura física própria.",
          "en": "With AWS Regions spread around the world, the company can deploy the application close to users on other continents in a few clicks, without building its own physical infrastructure."
        }
      },
      {
        title: {
          "pt-BR": "Parar de adivinhar a capacidade necessária",
          "en": "Stop guessing capacity"
        },
        correct: false,
        explanation: {
          "pt-BR": "Parar de adivinhar capacidade trata de ajustar a quantidade de recursos à demanda real. Não resolve a necessidade de estar geograficamente perto de usuários em outros continentes.",
          "en": "Stopping guessing capacity is about adjusting the amount of resources to actual demand. It does not solve the need to be geographically close to users on other continents."
        }
      },
      {
        title: {
          "pt-BR": "Trocar despesa de capital por despesa variável",
          "en": "Trade capital expense for variable expense"
        },
        correct: false,
        explanation: {
          "pt-BR": "Essa vantagem trata do modelo de pagamento conforme o uso. Embora evite o investimento em data centers, não é a vantagem que descreve a implantação rápida em várias regiões do mundo.",
          "en": "This advantage is about the pay-as-you-go payment model. Although it avoids investing in data centers, it is not the advantage that describes rapid deployment in multiple regions of the world."
        }
      }
    ],
    explanation: {
      "pt-BR": "Tornar-se global em minutos permite implantar aplicações em várias regiões do mundo rapidamente, oferecendo baixa latência aos usuários.",
      "en": "Going global in minutes allows deploying applications in multiple regions of the world quickly, providing low latency to users."
    }
  },
  {
    id: 35,
    domain: 'security-compliance',
    title: {
      "pt-BR": "IAM - Credenciais para aplicações no EC2",
      "en": "IAM - Credentials for Applications on EC2"
    },
    description: {
      "pt-BR": "Uma aplicação executada em uma instância EC2 precisa ler objetos de um bucket S3. Um desenvolvedor sugeriu criar credenciais para a aplicação acessar o bucket. Qual é a forma mais segura de fornecer essas permissões?",
      "en": "An application running on an EC2 instance needs to read objects from an S3 bucket. A developer suggested creating credentials for the application to access the bucket. What is the most secure way to provide these permissions?"
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
          "pt-BR": "Access keys de um IAM user gravadas no arquivo de configuração da aplicação",
          "en": "IAM user access keys written in the application's configuration file"
        },
        correct: false,
        explanation: {
          "pt-BR": "Access keys de IAM user são credenciais de longo prazo. Gravadas em arquivo, podem vazar em repositórios ou backups e continuam válidas até alguém rotacioná-las manualmente.",
          "en": "IAM user access keys are long-term credentials. Written in a file, they can leak through repositories or backups and remain valid until someone rotates them manually."
        }
      },
      {
        title: {
          "pt-BR": "Access keys de um IAM user definidas como variáveis de ambiente da instância",
          "en": "IAM user access keys set as environment variables on the instance"
        },
        correct: false,
        explanation: {
          "pt-BR": "Mudar o local de armazenamento não muda a natureza da credencial: continuam sendo chaves de longo prazo que precisam ser distribuídas e rotacionadas manualmente, com risco de exposição.",
          "en": "Changing where they are stored does not change the nature of the credential: they are still long-term keys that must be distributed and rotated manually, with exposure risk."
        }
      },
      {
        title: {
          "pt-BR": "Access keys de um IAM user guardadas no Secrets Manager e rotacionadas manualmente",
          "en": "IAM user access keys stored in Secrets Manager and rotated manually"
        },
        correct: false,
        explanation: {
          "pt-BR": "Guardar as chaves no Secrets Manager melhora o armazenamento, mas a aplicação ainda depende de credenciais de longo prazo de um usuário. Para serviços AWS acessando outros serviços, a boa prática é evitar chaves de longo prazo.",
          "en": "Storing the keys in Secrets Manager improves storage, but the application still depends on a user's long-term credentials. For AWS services accessing other services, the best practice is to avoid long-term keys."
        }
      },
      {
        title: {
          "pt-BR": "Uma IAM role associada à instância EC2 por meio de um instance profile",
          "en": "An IAM role attached to the EC2 instance through an instance profile"
        },
        correct: true,
        explanation: {
          "pt-BR": "Uma IAM role associada à instância fornece credenciais temporárias, entregues pelo serviço de metadados e rotacionadas automaticamente. Nenhuma chave de longo prazo precisa ser armazenada ou distribuída.",
          "en": "An IAM role attached to the instance provides temporary credentials, delivered by the metadata service and rotated automatically. No long-term keys need to be stored or distributed."
        }
      }
    ],
    explanation: {
      "pt-BR": "IAM roles fornecem credenciais temporárias e são a forma recomendada de dar permissões a aplicações em serviços AWS, em vez de access keys de longo prazo de IAM users.",
      "en": "IAM roles provide temporary credentials and are the recommended way to grant permissions to applications on AWS services, instead of long-term IAM user access keys."
    }
  },
  {
    id: 36,
    domain: 'security-compliance',
    title: {
      "pt-BR": "IAM - Acesso entre contas a um bucket",
      "en": "IAM - Cross-Account Access to a Bucket"
    },
    description: {
      "pt-BR": "Uma empresa precisa permitir que a conta AWS de um parceiro leia objetos de um bucket S3 específico, sem criar usuários para o parceiro dentro da conta da empresa. Qual tipo de política atende a esse requisito?",
      "en": "A company needs to allow a partner's AWS account to read objects from a specific S3 bucket, without creating users for the partner inside the company's account. Which type of policy meets this requirement?"
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
          "pt-BR": "Uma bucket policy que concede leitura à conta do parceiro como principal",
          "en": "A bucket policy that grants read access to the partner's account as a principal"
        },
        correct: true,
        explanation: {
          "pt-BR": "Bucket policies são políticas baseadas em recurso: ficam anexadas ao bucket e especificam quais principals, inclusive de outras contas, podem acessá-lo. O parceiro usa suas próprias identidades.",
          "en": "Bucket policies are resource-based policies: they are attached to the bucket and specify which principals, including those from other accounts, can access it. The partner uses its own identities."
        }
      },
      {
        title: {
          "pt-BR": "Uma política baseada em identidade anexada a um novo IAM user da empresa",
          "en": "An identity-based policy attached to a new IAM user in the company's account"
        },
        correct: false,
        explanation: {
          "pt-BR": "Políticas baseadas em identidade só podem ser anexadas a usuários, grupos ou roles da própria conta. Isso exigiria criar um usuário para o parceiro e compartilhar suas credenciais, o que o requisito proíbe.",
          "en": "Identity-based policies can only be attached to users, groups, or roles in the same account. This would require creating a user for the partner and sharing its credentials, which the requirement forbids."
        }
      },
      {
        title: {
          "pt-BR": "Uma Service Control Policy aplicada à conta da empresa no AWS Organizations",
          "en": "A Service Control Policy applied to the company's account in AWS Organizations"
        },
        correct: false,
        explanation: {
          "pt-BR": "SCPs apenas definem o máximo de permissões disponível para as contas da organização; elas nunca concedem acesso. Não permitiriam que uma conta externa lesse o bucket.",
          "en": "SCPs only define the maximum permissions available to accounts in the organization; they never grant access. They would not allow an external account to read the bucket."
        }
      },
      {
        title: {
          "pt-BR": "Um permissions boundary anexado às roles que acessam o bucket",
          "en": "A permissions boundary attached to the roles that access the bucket"
        },
        correct: false,
        explanation: {
          "pt-BR": "Permissions boundaries limitam o máximo de permissões que uma identidade da conta pode ter, mas não concedem acesso por si só e não se aplicam a principals de outra conta.",
          "en": "Permissions boundaries limit the maximum permissions an identity in the account can have, but they do not grant access by themselves and do not apply to principals from another account."
        }
      }
    ],
    explanation: {
      "pt-BR": "Políticas baseadas em recurso, como bucket policies, ficam anexadas ao recurso e podem conceder acesso a principals de outras contas.",
      "en": "Resource-based policies, such as bucket policies, are attached to the resource and can grant access to principals from other accounts."
    }
  },
  {
    id: 37,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Conta root - Boas práticas",
      "en": "Root Account - Best Practices"
    },
    description: {
      "pt-BR": "Uma empresa acabou de criar sua conta AWS e vai começar a provisionar recursos. Qual prática é recomendada em relação ao usuário root da conta?",
      "en": "A company has just created its AWS account and will start provisioning resources. Which practice is recommended regarding the account's root user?"
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
          "pt-BR": "Criar access keys para o root e usá-las nos scripts de automação da equipe",
          "en": "Create access keys for the root user and use them in the team's automation scripts"
        },
        correct: false,
        explanation: {
          "pt-BR": "O root tem acesso irrestrito que não pode ser limitado por políticas IAM. Access keys do root em scripts ampliam muito o impacto de um vazamento; a recomendação é não criar access keys para o root.",
          "en": "The root user has unrestricted access that cannot be limited by IAM policies. Root access keys in scripts greatly increase the impact of a leak; the recommendation is not to create access keys for root."
        }
      },
      {
        title: {
          "pt-BR": "Ativar MFA no root e usá-lo apenas nas tarefas que exigem esse usuário",
          "en": "Enable MFA on the root user and use it only for tasks that require that user"
        },
        correct: true,
        explanation: {
          "pt-BR": "A boa prática é proteger o root com MFA e senha forte, criar identidades administrativas separadas para o trabalho diário e usar o root somente em tarefas que só ele pode executar, como alterar o plano de suporte.",
          "en": "The best practice is to protect root with MFA and a strong password, create separate administrative identities for daily work, and use root only for tasks only it can perform, such as changing the support plan."
        }
      },
      {
        title: {
          "pt-BR": "Compartilhar a senha do root entre os administradores para acessos de emergência",
          "en": "Share the root password among administrators for emergency access"
        },
        correct: false,
        explanation: {
          "pt-BR": "Compartilhar a senha do root elimina a rastreabilidade de quem fez cada ação e aumenta a chance de vazamento. Cada administrador deve ter sua própria identidade com as permissões necessárias.",
          "en": "Sharing the root password removes traceability of who performed each action and increases the chance of a leak. Each administrator should have their own identity with the necessary permissions."
        }
      },
      {
        title: {
          "pt-BR": "Usar o root nas tarefas diárias, desde que a senha seja trocada todo mês",
          "en": "Use root for daily tasks, as long as the password is changed every month"
        },
        correct: false,
        explanation: {
          "pt-BR": "Trocar a senha com frequência não compensa o risco de usar no dia a dia uma identidade com poderes irrestritos. A recomendação é não usar o root em tarefas rotineiras.",
          "en": "Changing the password frequently does not offset the risk of using an identity with unrestricted power for daily work. The recommendation is not to use root for routine tasks."
        }
      }
    ],
    explanation: {
      "pt-BR": "O usuário root deve ser protegido com MFA, não deve ter access keys e só deve ser usado nas poucas tarefas que o exigem.",
      "en": "The root user should be protected with MFA, should not have access keys, and should be used only for the few tasks that require it."
    }
  },
  {
    id: 38,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Segurança de rede - Bloqueio na sub-rede",
      "en": "Network Security - Blocking at the Subnet"
    },
    description: {
      "pt-BR": "A aplicação pública de uma empresa está recebendo tráfego malicioso de um intervalo de IPs específico. A equipe quer bloquear explicitamente esse intervalo no nível da sub-rede, para todas as instâncias, mantendo o acesso do restante da internet. Qual recurso deve usar?",
      "en": "A company's public application is receiving malicious traffic from a specific IP range. The team wants to explicitly block that range at the subnet level, for all instances, while keeping access for the rest of the internet. Which feature should it use?"
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
          "pt-BR": "Security Groups das instâncias, restringindo as regras de entrada",
          "en": "The instances' Security Groups, restricting the inbound rules"
        },
        correct: false,
        explanation: {
          "pt-BR": "Security Groups atuam no nível da instância, são stateful e só suportam regras de permissão. Não é possível negar explicitamente um intervalo enquanto se permite o restante da internet.",
          "en": "Security Groups operate at the instance level, are stateful, and only support allow rules. It is not possible to explicitly deny a range while allowing the rest of the internet."
        }
      },
      {
        title: {
          "pt-BR": "Uma Network ACL associada à sub-rede, com uma regra de negação",
          "en": "A Network ACL associated with the subnet, with a deny rule"
        },
        correct: true,
        explanation: {
          "pt-BR": "Network ACLs atuam no nível da sub-rede, são stateless e suportam regras de permissão e de negação avaliadas por ordem numérica. Uma regra de negação bloqueia o intervalo para todas as instâncias da sub-rede.",
          "en": "Network ACLs operate at the subnet level, are stateless, and support both allow and deny rules evaluated in numerical order. A deny rule blocks the range for all instances in the subnet."
        }
      },
      {
        title: {
          "pt-BR": "A tabela de rotas da sub-rede, sem rota para o intervalo de IPs",
          "en": "The subnet's route table, with no route to the IP range"
        },
        correct: false,
        explanation: {
          "pt-BR": "Tabelas de rotas definem para onde o tráfego de saída é encaminhado, não filtram tráfego de entrada pela origem. Remover uma rota não impede que os pacotes maliciosos cheguem às instâncias.",
          "en": "Route tables define where outbound traffic is forwarded; they do not filter inbound traffic by source. Removing a route does not prevent the malicious packets from reaching the instances."
        }
      },
      {
        title: {
          "pt-BR": "Mover as instâncias para uma sub-rede privada com NAT Gateway",
          "en": "Move the instances to a private subnet with a NAT Gateway"
        },
        correct: false,
        explanation: {
          "pt-BR": "Em uma sub-rede privada as instâncias deixam de receber conexões iniciadas pela internet; o NAT Gateway só permite saída. Isso bloquearia todos os usuários legítimos, não apenas o intervalo malicioso.",
          "en": "In a private subnet the instances no longer receive connections initiated from the internet; the NAT Gateway only allows outbound traffic. This would block all legitimate users, not just the malicious range."
        }
      }
    ],
    explanation: {
      "pt-BR": "Network ACLs são stateless, atuam na sub-rede e permitem regras de negação; Security Groups são stateful, atuam na instância e só têm regras de permissão.",
      "en": "Network ACLs are stateless, operate at the subnet, and allow deny rules; Security Groups are stateful, operate at the instance, and only have allow rules."
    }
  },
  {
    id: 39,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Governança multi-conta - Guardrails",
      "en": "Multi-Account Governance - Guardrails"
    },
    description: {
      "pt-BR": "Uma empresa com dezenas de contas no AWS Organizations quer garantir que nenhuma conta, nem mesmo seus administradores, consiga desativar o AWS CloudTrail ou usar regiões fora da Europa. Qual recurso deve ser usado?",
      "en": "A company with dozens of accounts in AWS Organizations wants to ensure that no account, not even its administrators, can disable AWS CloudTrail or use regions outside Europe. Which feature should be used?"
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
          "pt-BR": "Políticas IAM restritivas criadas em cada conta membro",
          "en": "Restrictive IAM policies created in each member account"
        },
        correct: false,
        explanation: {
          "pt-BR": "Políticas IAM são gerenciadas dentro de cada conta, então os administradores locais poderiam alterá-las ou removê-las. Não oferecem um controle central que eles não consigam contornar.",
          "en": "IAM policies are managed within each account, so local administrators could change or remove them. They do not provide a central control that they cannot bypass."
        }
      },
      {
        title: {
          "pt-BR": "Regras do AWS Config aplicadas em todas as contas",
          "en": "AWS Config rules applied in all accounts"
        },
        correct: false,
        explanation: {
          "pt-BR": "Regras do AWS Config avaliam e reportam recursos não conformes depois que a mudança acontece. Elas detectam o problema, mas não impedem a chamada de API que desativa o CloudTrail.",
          "en": "AWS Config rules evaluate and report noncompliant resources after the change happens. They detect the problem but do not prevent the API call that disables CloudTrail."
        }
      },
      {
        title: {
          "pt-BR": "Service Control Policies (SCPs) aplicadas às unidades organizacionais",
          "en": "Service Control Policies (SCPs) applied to the organizational units"
        },
        correct: true,
        explanation: {
          "pt-BR": "SCPs definem o máximo de permissões disponível para as contas da organização e se aplicam a todos os usuários e roles delas, inclusive administradores. Uma negação na SCP não pode ser contornada dentro da conta.",
          "en": "SCPs define the maximum permissions available to the organization's accounts and apply to all their users and roles, including administrators. A deny in an SCP cannot be bypassed within the account."
        }
      },
      {
        title: {
          "pt-BR": "Permissions boundaries anexados aos usuários administradores",
          "en": "Permissions boundaries attached to the administrator users"
        },
        correct: false,
        explanation: {
          "pt-BR": "Permissions boundaries são definidos por identidade dentro de cada conta. Um administrador com permissões suficientes poderia removê-los ou criar novas identidades sem eles.",
          "en": "Permissions boundaries are set per identity within each account. An administrator with sufficient permissions could remove them or create new identities without them."
        }
      }
    ],
    explanation: {
      "pt-BR": "SCPs são guardrails centrais do AWS Organizations que limitam o que qualquer identidade das contas membro pode fazer.",
      "en": "SCPs are central AWS Organizations guardrails that limit what any identity in the member accounts can do."
    }
  },
  {
    id: 40,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Conformidade - Relatórios de auditoria da AWS",
      "en": "Compliance - AWS Audit Reports"
    },
    description: {
      "pt-BR": "Um auditor externo pediu à empresa cópias dos relatórios SOC 2 e dos certificados ISO 27001 da AWS para validar os controles da infraestrutura do provedor. Onde a empresa obtém esses documentos por conta própria?",
      "en": "An external auditor asked the company for copies of AWS's SOC 2 reports and ISO 27001 certificates to validate the provider's infrastructure controls. Where can the company obtain these documents on its own?"
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
          "pt-BR": "AWS Audit Manager",
          "en": "AWS Audit Manager"
        },
        correct: false,
        explanation: {
          "pt-BR": "O AWS Audit Manager automatiza a coleta de evidências sobre o uso que o cliente faz da AWS para suas próprias auditorias. Não é o portal que disponibiliza os relatórios de conformidade da própria AWS.",
          "en": "AWS Audit Manager automates evidence collection about the customer's own AWS usage for their audits. It is not the portal that provides AWS's own compliance reports."
        }
      },
      {
        title: {
          "pt-BR": "AWS Security Hub",
          "en": "AWS Security Hub"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Security Hub agrega descobertas de segurança e verifica a conta do cliente contra padrões de boas práticas. Não oferece download dos relatórios SOC nem dos certificados ISO da AWS.",
          "en": "Security Hub aggregates security findings and checks the customer's account against best-practice standards. It does not offer downloads of AWS's SOC reports or ISO certificates."
        }
      },
      {
        title: {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        correct: false,
        explanation: {
          "pt-BR": "O AWS Config registra e avalia a configuração dos recursos do cliente. Ele não fornece documentos de auditoria de terceiros sobre a infraestrutura da AWS.",
          "en": "AWS Config records and evaluates the configuration of the customer's resources. It does not provide third-party audit documents about AWS's infrastructure."
        }
      },
      {
        title: {
          "pt-BR": "AWS Artifact",
          "en": "AWS Artifact"
        },
        correct: true,
        explanation: {
          "pt-BR": "O AWS Artifact é o portal self-service para baixar relatórios de conformidade da AWS, como SOC e certificações ISO, e para aceitar acordos como o BAA.",
          "en": "AWS Artifact is the self-service portal to download AWS compliance reports, such as SOC reports and ISO certifications, and to accept agreements such as the BAA."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS Artifact oferece acesso sob demanda aos relatórios de conformidade e acordos da AWS.",
      "en": "AWS Artifact provides on-demand access to AWS compliance reports and agreements."
    }
  },
  {
    id: 41,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Proteção contra DDoS - Suporte especializado",
      "en": "DDoS Protection - Specialized Support"
    },
    description: {
      "pt-BR": "Uma empresa de jogos online sofreu ataques DDoS de grande escala. Ela quer detecção avançada, acesso 24/7 a uma equipe especializada de resposta a DDoS e proteção de custos contra cobranças de escalonamento causadas pelos ataques. Qual solução atende?",
      "en": "An online gaming company suffered large-scale DDoS attacks. It wants advanced detection, 24/7 access to a specialized DDoS response team, and cost protection against scaling charges caused by the attacks. Which solution meets this?"
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
          "pt-BR": "AWS Shield Advanced",
          "en": "AWS Shield Advanced"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Shield Advanced adiciona detecção e mitigação avançadas, acesso 24/7 ao Shield Response Team e proteção de custos para cobranças de escalonamento de recursos protegidos durante ataques DDoS.",
          "en": "Shield Advanced adds advanced detection and mitigation, 24/7 access to the Shield Response Team, and cost protection for scaling charges on protected resources during DDoS attacks."
        }
      },
      {
        title: {
          "pt-BR": "AWS Shield Standard",
          "en": "AWS Shield Standard"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Shield Standard é automático e sem custo, protegendo contra os ataques mais comuns nas camadas de rede e transporte. Não inclui acesso à equipe de resposta nem proteção de custos.",
          "en": "Shield Standard is automatic and free, protecting against the most common network and transport layer attacks. It does not include access to the response team or cost protection."
        }
      },
      {
        title: {
          "pt-BR": "AWS WAF com regras de limite de taxa",
          "en": "AWS WAF with rate-based rules"
        },
        correct: false,
        explanation: {
          "pt-BR": "Regras de limite de taxa do WAF ajudam a mitigar inundações de requisições HTTP, mas o WAF sozinho não oferece equipe especializada 24/7 nem proteção de custos contra ataques.",
          "en": "WAF rate-based rules help mitigate HTTP request floods, but WAF alone does not offer a 24/7 specialized team or cost protection against attacks."
        }
      },
      {
        title: {
          "pt-BR": "Amazon GuardDuty com proteção de rede",
          "en": "Amazon GuardDuty with network protection"
        },
        correct: false,
        explanation: {
          "pt-BR": "O GuardDuty detecta ameaças analisando logs e gera descobertas, mas não mitiga ataques DDoS nem oferece equipe de resposta ou proteção de custos.",
          "en": "GuardDuty detects threats by analyzing logs and generates findings, but it does not mitigate DDoS attacks or offer a response team or cost protection."
        }
      }
    ],
    explanation: {
      "pt-BR": "O Shield Standard é gratuito e automático; o Shield Advanced é pago e adiciona equipe de resposta 24/7, detecção avançada e proteção de custos.",
      "en": "Shield Standard is free and automatic; Shield Advanced is paid and adds a 24/7 response team, advanced detection, and cost protection."
    }
  },
  {
    id: 42,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Segurança de aplicações web - Filtragem de requisições",
      "en": "Web Application Security - Request Filtering"
    },
    description: {
      "pt-BR": "Uma aplicação web atrás de um Application Load Balancer está recebendo requisições com tentativas de SQL injection e cross-site scripting. A equipe quer bloquear essas requisições com base no conteúdo HTTP antes que cheguem à aplicação. Qual serviço deve usar?",
      "en": "A web application behind an Application Load Balancer is receiving requests containing SQL injection and cross-site scripting attempts. The team wants to block these requests based on HTTP content before they reach the application. Which service should it use?"
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
          "pt-BR": "AWS Shield Standard",
          "en": "AWS Shield Standard"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Shield Standard protege contra ataques DDoS comuns nas camadas de rede e transporte. Não inspeciona o conteúdo das requisições HTTP em busca de padrões de SQL injection ou XSS.",
          "en": "Shield Standard protects against common DDoS attacks at the network and transport layers. It does not inspect HTTP request content for SQL injection or XSS patterns."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Inspector procura vulnerabilidades de software e exposição de rede em instâncias EC2, imagens de container e funções Lambda. Ele não bloqueia requisições em tempo real.",
          "en": "Inspector looks for software vulnerabilities and network exposure in EC2 instances, container images, and Lambda functions. It does not block requests in real time."
        }
      },
      {
        title: {
          "pt-BR": "AWS WAF",
          "en": "AWS WAF"
        },
        correct: true,
        explanation: {
          "pt-BR": "O AWS WAF é um firewall de aplicação web que se integra ao ALB, CloudFront e API Gateway, com regras que inspecionam requisições HTTP e bloqueiam padrões como SQL injection e XSS.",
          "en": "AWS WAF is a web application firewall that integrates with ALB, CloudFront, and API Gateway, with rules that inspect HTTP requests and block patterns such as SQL injection and XSS."
        }
      },
      {
        title: {
          "pt-BR": "Security Group do Application Load Balancer",
          "en": "The Application Load Balancer's Security Group"
        },
        correct: false,
        explanation: {
          "pt-BR": "Security Groups filtram por protocolo, porta e origem. Eles não analisam o conteúdo das requisições HTTP, então não distinguem uma requisição legítima de uma tentativa de SQL injection na mesma porta.",
          "en": "Security Groups filter by protocol, port, and source. They do not analyze HTTP request content, so they cannot distinguish a legitimate request from a SQL injection attempt on the same port."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS WAF protege aplicações web filtrando requisições HTTP com regras contra ataques como SQL injection e XSS.",
      "en": "AWS WAF protects web applications by filtering HTTP requests with rules against attacks such as SQL injection and XSS."
    }
  },
  {
    id: 43,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Detecção de ameaças - Monitoramento contínuo",
      "en": "Threat Detection - Continuous Monitoring"
    },
    description: {
      "pt-BR": "Uma empresa quer detectar continuamente atividades maliciosas nas suas contas, como instâncias se comunicando com endereços de mineração de criptomoedas ou chamadas de API incomuns, analisando CloudTrail, VPC Flow Logs e logs de DNS, sem instalar agentes. Qual serviço atende?",
      "en": "A company wants to continuously detect malicious activity in its accounts, such as instances communicating with cryptocurrency-mining addresses or unusual API calls, by analyzing CloudTrail, VPC Flow Logs, and DNS logs, without installing agents. Which service meets this?"
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
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Inspector avalia cargas de trabalho em busca de vulnerabilidades de software conhecidas (CVEs) e exposição de rede. Não analisa CloudTrail e logs de DNS para detectar comportamento malicioso em andamento.",
          "en": "Inspector assesses workloads for known software vulnerabilities (CVEs) and network exposure. It does not analyze CloudTrail and DNS logs to detect ongoing malicious behavior."
        }
      },
      {
        title: {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        correct: true,
        explanation: {
          "pt-BR": "O GuardDuty é um serviço de detecção de ameaças que usa inteligência de ameaças e machine learning sobre CloudTrail, VPC Flow Logs e logs de DNS para identificar atividades maliciosas, sem agentes.",
          "en": "GuardDuty is a threat detection service that uses threat intelligence and machine learning on CloudTrail, VPC Flow Logs, and DNS logs to identify malicious activity, without agents."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Macie",
          "en": "Amazon Macie"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Macie descobre e classifica dados sensíveis armazenados no S3. Não monitora tráfego de rede nem chamadas de API em busca de ameaças.",
          "en": "Macie discovers and classifies sensitive data stored in S3. It does not monitor network traffic or API calls for threats."
        }
      },
      {
        title: {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        correct: false,
        explanation: {
          "pt-BR": "O AWS Config registra configurações de recursos e avalia a conformidade com regras. Não detecta comunicação com endereços maliciosos nem padrões anômalos de API.",
          "en": "AWS Config records resource configurations and evaluates compliance with rules. It does not detect communication with malicious addresses or anomalous API patterns."
        }
      }
    ],
    explanation: {
      "pt-BR": "O Amazon GuardDuty faz detecção inteligente e contínua de ameaças analisando logs da conta, sem necessidade de agentes.",
      "en": "Amazon GuardDuty performs intelligent, continuous threat detection by analyzing account logs, with no need for agents."
    }
  },
  {
    id: 44,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Segurança - Visão centralizada de descobertas",
      "en": "Security - Centralized View of Findings"
    },
    description: {
      "pt-BR": "Uma empresa já usa GuardDuty, Inspector e Macie em várias contas. A equipe de segurança quer um painel único que agregue e priorize as descobertas desses serviços e execute verificações automáticas contra padrões como o CIS AWS Foundations Benchmark. Qual serviço atende?",
      "en": "A company already uses GuardDuty, Inspector, and Macie across several accounts. The security team wants a single dashboard that aggregates and prioritizes findings from these services and runs automated checks against standards such as the CIS AWS Foundations Benchmark. Which service meets this?"
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
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        correct: false,
        explanation: {
          "pt-BR": "O GuardDuty gera suas próprias descobertas de ameaças, mas não agrega descobertas do Inspector e do Macie nem executa verificações contra padrões como o CIS.",
          "en": "GuardDuty generates its own threat findings, but it does not aggregate findings from Inspector and Macie or run checks against standards such as CIS."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        correct: false,
        explanation: {
          "pt-BR": "O CloudTrail registra as chamadas de API realizadas nas contas para auditoria. Não consolida descobertas de outros serviços de segurança nem avalia a postura contra padrões.",
          "en": "CloudTrail records the API calls made in the accounts for auditing. It does not consolidate findings from other security services or assess posture against standards."
        }
      },
      {
        title: {
          "pt-BR": "AWS Security Hub",
          "en": "AWS Security Hub"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Security Hub centraliza e prioriza descobertas de serviços como GuardDuty, Inspector e Macie em várias contas e executa verificações automáticas contra padrões como CIS e AWS Foundational Security Best Practices.",
          "en": "Security Hub centralizes and prioritizes findings from services such as GuardDuty, Inspector, and Macie across accounts and runs automated checks against standards such as CIS and AWS Foundational Security Best Practices."
        }
      },
      {
        title: {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Trusted Advisor oferece recomendações em categorias como custo, segurança e limites de serviço, mas não agrega descobertas do GuardDuty, Inspector e Macie em um painel de segurança.",
          "en": "Trusted Advisor offers recommendations in categories such as cost, security, and service limits, but it does not aggregate GuardDuty, Inspector, and Macie findings into a security dashboard."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS Security Hub oferece uma visão centralizada da postura de segurança, agregando descobertas e verificando padrões de conformidade.",
      "en": "AWS Security Hub provides a centralized view of security posture by aggregating findings and checking compliance standards."
    }
  },
  {
    id: 45,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Proteção de dados - Dados sensíveis no S3",
      "en": "Data Protection - Sensitive Data in S3"
    },
    description: {
      "pt-BR": "Uma empresa armazena milhões de arquivos em centenas de buckets S3 e precisa descobrir quais deles contêm dados pessoais, como números de cartão de crédito e documentos de identificação, para atender à LGPD. Qual serviço automatiza essa descoberta?",
      "en": "A company stores millions of files in hundreds of S3 buckets and needs to find out which of them contain personal data, such as credit card numbers and identification documents, to comply with data protection laws. Which service automates this discovery?"
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
          "pt-BR": "Amazon Macie",
          "en": "Amazon Macie"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Macie usa machine learning e correspondência de padrões para descobrir e classificar dados sensíveis, como PII e dados financeiros, em buckets S3, além de avaliar a segurança e o acesso desses buckets.",
          "en": "Macie uses machine learning and pattern matching to discover and classify sensitive data, such as PII and financial data, in S3 buckets, and also evaluates the security and access of those buckets."
        }
      },
      {
        title: {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        correct: false,
        explanation: {
          "pt-BR": "A proteção de S3 do GuardDuty detecta padrões de acesso suspeitos aos buckets, mas não analisa o conteúdo dos objetos para identificar dados pessoais.",
          "en": "GuardDuty S3 protection detects suspicious access patterns to buckets, but it does not analyze object contents to identify personal data."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Inspector procura vulnerabilidades em EC2, imagens de container e funções Lambda. Não verifica o conteúdo de objetos no S3 em busca de dados sensíveis.",
          "en": "Inspector looks for vulnerabilities in EC2, container images, and Lambda functions. It does not scan S3 object contents for sensitive data."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Detective",
          "en": "Amazon Detective"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Detective ajuda a investigar a causa raiz de descobertas de segurança, correlacionando logs e comportamentos. Não classifica o conteúdo dos arquivos armazenados no S3.",
          "en": "Detective helps investigate the root cause of security findings by correlating logs and behavior. It does not classify the contents of files stored in S3."
        }
      }
    ],
    explanation: {
      "pt-BR": "O Amazon Macie descobre e protege dados sensíveis armazenados no S3 usando machine learning.",
      "en": "Amazon Macie discovers and protects sensitive data stored in S3 using machine learning."
    }
  },
  {
    id: 46,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Criptografia - Dados entre usuário e aplicação",
      "en": "Encryption - Data Between User and Application"
    },
    description: {
      "pt-BR": "Uma aplicação web recebe dados de login e pagamento enviados pelos navegadores dos clientes. O requisito é impedir que esses dados sejam interceptados enquanto trafegam pela internet até a aplicação. Qual medida atende diretamente a esse requisito?",
      "en": "A web application receives login and payment data sent from customers' browsers. The requirement is to prevent this data from being intercepted while it travels over the internet to the application. Which measure directly meets this requirement?"
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
          "pt-BR": "Criptografar os volumes EBS das instâncias com chaves do AWS KMS",
          "en": "Encrypt the instances' EBS volumes with AWS KMS keys"
        },
        correct: false,
        explanation: {
          "pt-BR": "Criptografar volumes EBS protege os dados em repouso, gravados em disco. Não protege os dados enquanto trafegam entre o navegador e a aplicação.",
          "en": "Encrypting EBS volumes protects data at rest, written to disk. It does not protect data while it travels between the browser and the application."
        }
      },
      {
        title: {
          "pt-BR": "Ativar a criptografia do lado do servidor (SSE-S3) nos buckets S3",
          "en": "Enable server-side encryption (SSE-S3) on the S3 buckets"
        },
        correct: false,
        explanation: {
          "pt-BR": "SSE-S3 criptografa os objetos quando são armazenados no bucket, ou seja, em repouso. Não impede a interceptação dos dados no caminho do navegador até a aplicação.",
          "en": "SSE-S3 encrypts objects when they are stored in the bucket, that is, at rest. It does not prevent interception of data on the way from the browser to the application."
        }
      },
      {
        title: {
          "pt-BR": "Criptografar a instância do banco Amazon RDS com chaves do KMS",
          "en": "Encrypt the Amazon RDS database instance with KMS keys"
        },
        correct: false,
        explanation: {
          "pt-BR": "A criptografia do RDS com KMS protege o storage, os backups e os snapshots em repouso. O risco descrito ocorre antes, durante o tráfego pela internet.",
          "en": "RDS encryption with KMS protects storage, backups, and snapshots at rest. The risk described happens earlier, while traffic travels over the internet."
        }
      },
      {
        title: {
          "pt-BR": "Usar HTTPS com certificados TLS emitidos pelo AWS Certificate Manager",
          "en": "Use HTTPS with TLS certificates issued by AWS Certificate Manager"
        },
        correct: true,
        explanation: {
          "pt-BR": "HTTPS/TLS criptografa os dados em trânsito entre o navegador e a aplicação, impedindo que sejam lidos se interceptados. O ACM emite e renova certificados para uso em serviços como ALB e CloudFront.",
          "en": "HTTPS/TLS encrypts data in transit between the browser and the application, preventing it from being read if intercepted. ACM issues and renews certificates for use with services such as ALB and CloudFront."
        }
      }
    ],
    explanation: {
      "pt-BR": "Criptografia em trânsito (TLS) protege os dados enquanto trafegam; criptografia em repouso (como com o KMS) protege os dados armazenados.",
      "en": "Encryption in transit (TLS) protects data while it travels; encryption at rest (such as with KMS) protects stored data."
    }
  },
  {
    id: 47,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Conformidade - Dados de saúde",
      "en": "Compliance - Health Data"
    },
    description: {
      "pt-BR": "Uma empresa de saúde dos EUA quer processar informações de saúde protegidas (PHI) na AWS, em conformidade com a HIPAA. O que a empresa precisa fazer?",
      "en": "A US healthcare company wants to process protected health information (PHI) on AWS in compliance with HIPAA. What does the company need to do?"
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
          "pt-BR": "Nada, pois a conformidade da infraestrutura da AWS é herdada integralmente pela aplicação",
          "en": "Nothing, because the AWS infrastructure compliance is fully inherited by the application"
        },
        correct: false,
        explanation: {
          "pt-BR": "O cliente herda os controles da infraestrutura física, mas continua responsável por configurar seus serviços, acessos e dados de forma conforme. A conformidade da aplicação não é automática.",
          "en": "The customer inherits the physical infrastructure controls but remains responsible for configuring its services, access, and data in a compliant way. Application compliance is not automatic."
        }
      },
      {
        title: {
          "pt-BR": "Aceitar o BAA com a AWS, usar serviços qualificados pela HIPAA e configurar seus controles",
          "en": "Accept the BAA with AWS, use HIPAA-eligible services, and configure its own controls"
        },
        correct: true,
        explanation: {
          "pt-BR": "Para HIPAA, o cliente aceita o Business Associate Addendum (BAA), por exemplo pelo AWS Artifact, processa PHI apenas em serviços qualificados e configura criptografia, acessos e logs sob sua responsabilidade.",
          "en": "For HIPAA, the customer accepts the Business Associate Addendum (BAA), for example through AWS Artifact, processes PHI only in eligible services, and configures encryption, access, and logging under its responsibility."
        }
      },
      {
        title: {
          "pt-BR": "Solicitar que a AWS audite e certifique as aplicações da empresa para a HIPAA",
          "en": "Ask AWS to audit and certify the company's applications for HIPAA"
        },
        correct: false,
        explanation: {
          "pt-BR": "A AWS não audita nem certifica as aplicações dos clientes. Garantir e demonstrar a conformidade das próprias aplicações é responsabilidade do cliente, que pode contratar seus auditores.",
          "en": "AWS does not audit or certify customers' applications. Ensuring and demonstrating the compliance of its own applications is the customer's responsibility, which may hire its own auditors."
        }
      },
      {
        title: {
          "pt-BR": "Usar qualquer serviço AWS, desde que os dados fiquem em uma região dos EUA",
          "en": "Use any AWS service, as long as the data stays in a US region"
        },
        correct: false,
        explanation: {
          "pt-BR": "A localização dos dados não torna um serviço adequado à HIPAA. Apenas os serviços qualificados pela HIPAA, cobertos pelo BAA, podem ser usados para processar PHI.",
          "en": "Data location does not make a service suitable for HIPAA. Only HIPAA-eligible services, covered by the BAA, may be used to process PHI."
        }
      }
    ],
    explanation: {
      "pt-BR": "Na conformidade, a AWS cuida dos controles da infraestrutura, e o cliente precisa usar serviços elegíveis e configurar os controles de sua responsabilidade para cada programa.",
      "en": "In compliance, AWS handles the infrastructure controls, and the customer must use eligible services and configure the controls under its responsibility for each program."
    }
  },
  {
    id: 48,
    domain: 'security-compliance',
    title: {
      "pt-BR": "IAM - Auditoria de credenciais",
      "en": "IAM - Credential Auditing"
    },
    description: {
      "pt-BR": "A equipe de segurança precisa de um relatório que liste todos os IAM users da conta com o status de suas senhas, access keys (incluindo último uso e última rotação) e dispositivos MFA, para auditar credenciais antigas ou sem MFA. Qual recurso fornece isso?",
      "en": "The security team needs a report listing all IAM users in the account with the status of their passwords, access keys (including last use and last rotation), and MFA devices, to audit old credentials or users without MFA. Which feature provides this?"
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
          "pt-BR": "IAM Access Analyzer",
          "en": "IAM Access Analyzer"
        },
        correct: false,
        explanation: {
          "pt-BR": "O IAM Access Analyzer identifica recursos compartilhados com entidades externas e ajuda a validar políticas. Não gera um inventário do status de senhas, access keys e MFA de cada usuário.",
          "en": "IAM Access Analyzer identifies resources shared with external entities and helps validate policies. It does not generate an inventory of each user's password, access key, and MFA status."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        correct: false,
        explanation: {
          "pt-BR": "O CloudTrail registra as chamadas de API feitas pelas identidades. Seria preciso processar muitos eventos para inferir o uso das credenciais, e ele não informa diretamente idade das chaves nem status de MFA.",
          "en": "CloudTrail records API calls made by identities. Many events would need to be processed to infer credential usage, and it does not directly report key age or MFA status."
        }
      },
      {
        title: {
          "pt-BR": "IAM credential report",
          "en": "IAM credential report"
        },
        correct: true,
        explanation: {
          "pt-BR": "O credential report do IAM é um arquivo CSV que lista todos os usuários da conta e o status de suas credenciais: senha, access keys com último uso e rotação, e MFA. É usado em auditorias e junto com a política de senhas da conta.",
          "en": "The IAM credential report is a CSV file listing all users in the account and the status of their credentials: password, access keys with last use and rotation, and MFA. It is used for audits along with the account password policy."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Inspector avalia vulnerabilidades de software em EC2, containers e Lambda. Não audita credenciais de usuários IAM.",
          "en": "Inspector assesses software vulnerabilities in EC2, containers, and Lambda. It does not audit IAM user credentials."
        }
      }
    ],
    explanation: {
      "pt-BR": "O IAM credential report lista todos os usuários e o status de suas credenciais, facilitando auditorias de segurança.",
      "en": "The IAM credential report lists all users and the status of their credentials, making security audits easier."
    }
  },
  {
    id: 49,
    domain: 'security-compliance',
    title: {
      "pt-BR": "Governança multi-conta - Landing zone",
      "en": "Multi-Account Governance - Landing Zone"
    },
    description: {
      "pt-BR": "Uma empresa quer montar rapidamente um ambiente multi-conta seguindo boas práticas, com contas dedicadas para logs e auditoria, guardrails preventivos e detectivos já configurados e um processo padronizado para criar novas contas. Qual serviço atende?",
      "en": "A company wants to quickly set up a multi-account environment following best practices, with dedicated log and audit accounts, preventive and detective guardrails already configured, and a standardized process for creating new accounts. Which service meets this?"
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
          "pt-BR": "AWS Control Tower",
          "en": "AWS Control Tower"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Control Tower automatiza a criação de uma landing zone com AWS Organizations, contas de log e auditoria, controles (guardrails) preventivos e detectivos e o Account Factory para padronizar a criação de contas.",
          "en": "Control Tower automates the creation of a landing zone with AWS Organizations, log and audit accounts, preventive and detective controls (guardrails), and Account Factory to standardize account creation."
        }
      },
      {
        title: {
          "pt-BR": "AWS Organizations configurado manualmente",
          "en": "AWS Organizations configured manually"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Organizations fornece a estrutura de contas, OUs e SCPs, mas montar contas de log, auditoria e guardrails com ele exige configuração manual. Não entrega uma landing zone pronta rapidamente.",
          "en": "Organizations provides the account structure, OUs, and SCPs, but setting up log accounts, audit accounts, and guardrails with it requires manual configuration. It does not quickly deliver a ready-made landing zone."
        }
      },
      {
        title: {
          "pt-BR": "AWS Service Catalog",
          "en": "AWS Service Catalog"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Service Catalog permite publicar portfólios de produtos aprovados para os usuários provisionarem. Sozinho, não cria contas de log e auditoria nem aplica guardrails multi-conta.",
          "en": "Service Catalog allows publishing portfolios of approved products for users to provision. By itself, it does not create log and audit accounts or apply multi-account guardrails."
        }
      },
      {
        title: {
          "pt-BR": "AWS Config com conformance packs",
          "en": "AWS Config with conformance packs"
        },
        correct: false,
        explanation: {
          "pt-BR": "Conformance packs agrupam regras do Config para avaliar conformidade, atuando de forma detectiva. Não criam a estrutura de contas nem os controles preventivos da landing zone.",
          "en": "Conformance packs group Config rules to evaluate compliance, acting in a detective way. They do not create the account structure or the landing zone's preventive controls."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS Control Tower configura e governa uma landing zone multi-conta segura com base em boas práticas.",
      "en": "AWS Control Tower sets up and governs a secure multi-account landing zone based on best practices."
    }
  },
  {
    id: 50,
    domain: 'cloud-technology-services',
    title: {
      "pt-BR": "Redes - Ambiente de rede isolado",
      "en": "Networking - Isolated Network Environment"
    },
    description: {
      "pt-BR": "Uma empresa quer lançar seus recursos AWS em uma rede isolada logicamente, na qual ela define o próprio intervalo de IPs, cria sub-redes públicas e privadas e configura tabelas de rotas e gateways. Qual serviço fornece isso?",
      "en": "A company wants to launch its AWS resources in a logically isolated network in which it defines its own IP range, creates public and private subnets, and configures route tables and gateways. Which service provides this?"
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
        correct: false,
        explanation: {
          "pt-BR": "O Direct Connect cria uma conexão de rede dedicada entre o ambiente on-premises e a AWS. Ele não define a rede virtual, as sub-redes e as rotas onde os recursos são lançados.",
          "en": "Direct Connect creates a dedicated network connection between the on-premises environment and AWS. It does not define the virtual network, subnets, and routes where resources are launched."
        }
      },
      {
        title: {
          "pt-BR": "AWS Site-to-Site VPN",
          "en": "AWS Site-to-Site VPN"
        },
        correct: false,
        explanation: {
          "pt-BR": "A Site-to-Site VPN cria túneis criptografados pela internet entre uma rede on-premises e a AWS. Ela conecta redes, mas não é a rede isolada onde os recursos são lançados.",
          "en": "Site-to-Site VPN creates encrypted tunnels over the internet between an on-premises network and AWS. It connects networks, but it is not the isolated network where resources are launched."
        }
      },
      {
        title: {
          "pt-BR": "Amazon VPC",
          "en": "Amazon VPC"
        },
        correct: true,
        explanation: {
          "pt-BR": "A Amazon VPC é uma rede virtual isolada logicamente na AWS, onde o cliente define o bloco CIDR, cria sub-redes em diferentes AZs e controla roteamento, gateways e regras de segurança.",
          "en": "Amazon VPC is a logically isolated virtual network in AWS, where the customer defines the CIDR block, creates subnets in different AZs, and controls routing, gateways, and security rules."
        }
      },
      {
        title: {
          "pt-BR": "AWS Transit Gateway",
          "en": "AWS Transit Gateway"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Transit Gateway é um hub que interconecta várias VPCs e redes on-premises. Ele pressupõe que as redes já existam; não é o serviço que cria a rede isolada com sub-redes.",
          "en": "Transit Gateway is a hub that interconnects multiple VPCs and on-premises networks. It assumes the networks already exist; it is not the service that creates the isolated network with subnets."
        }
      }
    ],
    explanation: {
      "pt-BR": "A Amazon VPC permite provisionar uma seção isolada logicamente da AWS com controle total do ambiente de rede.",
      "en": "Amazon VPC allows provisioning a logically isolated section of AWS with full control over the network environment."
    }
  },
  {
    id: 51,
    domain: 'cloud-technology-services',
    title: {
      "pt-BR": "Computação - Quantidade de instâncias conforme a carga",
      "en": "Compute - Instance Count Based on Load"
    },
    description: {
      "pt-BR": "A frota de instâncias EC2 de uma aplicação fica com CPU acima de 80% no horário comercial e quase ociosa à noite. A empresa quer que instâncias sejam lançadas automaticamente quando a CPU subir, encerradas quando ela cair e substituídas se ficarem não saudáveis. Qual serviço atende?",
      "en": "An application's EC2 fleet runs above 80% CPU during business hours and is nearly idle at night. The company wants instances to be launched automatically when CPU rises, terminated when it drops, and replaced if they become unhealthy. Which service meets this?"
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
          "pt-BR": "Amazon EC2 Auto Scaling",
          "en": "Amazon EC2 Auto Scaling"
        },
        correct: true,
        explanation: {
          "pt-BR": "O EC2 Auto Scaling ajusta a quantidade de instâncias de um grupo com base em políticas, como uma métrica de CPU, e substitui instâncias que falham nas verificações de saúde, mantendo a capacidade desejada.",
          "en": "EC2 Auto Scaling adjusts the number of instances in a group based on policies, such as a CPU metric, and replaces instances that fail health checks, maintaining the desired capacity."
        }
      },
      {
        title: {
          "pt-BR": "Elastic Load Balancing",
          "en": "Elastic Load Balancing"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Elastic Load Balancing distribui o tráfego entre as instâncias registradas e deixa de enviar requisições às não saudáveis, mas não lança nem encerra instâncias para ajustar a capacidade.",
          "en": "Elastic Load Balancing distributes traffic across registered instances and stops sending requests to unhealthy ones, but it does not launch or terminate instances to adjust capacity."
        }
      },
      {
        title: {
          "pt-BR": "Alarmes do Amazon CloudWatch",
          "en": "Amazon CloudWatch alarms"
        },
        correct: false,
        explanation: {
          "pt-BR": "Alarmes do CloudWatch monitoram a métrica de CPU e disparam ações, mas sozinhos não gerenciam uma frota de instâncias. Eles costumam ser o gatilho de políticas de escalonamento do Auto Scaling.",
          "en": "CloudWatch alarms monitor the CPU metric and trigger actions, but on their own they do not manage an instance fleet. They are commonly the trigger for Auto Scaling scaling policies."
        }
      },
      {
        title: {
          "pt-BR": "AWS Compute Optimizer",
          "en": "AWS Compute Optimizer"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Compute Optimizer analisa o histórico de uso e recomenda tipos e tamanhos de instância mais adequados. Ele não adiciona nem remove instâncias automaticamente conforme a carga.",
          "en": "Compute Optimizer analyzes usage history and recommends more suitable instance types and sizes. It does not automatically add or remove instances based on load."
        }
      }
    ],
    explanation: {
      "pt-BR": "O EC2 Auto Scaling fornece elasticidade ajustando automaticamente o número de instâncias à demanda e substituindo instâncias não saudáveis.",
      "en": "EC2 Auto Scaling provides elasticity by automatically adjusting the number of instances to demand and replacing unhealthy instances."
    }
  },
  {
    id: 52,
    domain: 'cloud-technology-services',
    title: {
      "pt-BR": "Containers - Execução sem gerenciar servidores",
      "en": "Containers - Running Without Managing Servers"
    },
    description: {
      "pt-BR": "Uma equipe empacotou sua aplicação em imagens Docker e quer executá-la na AWS sem provisionar, aplicar patches ou escalar instâncias EC2 para hospedar os containers. Qual opção atende?",
      "en": "A team has packaged its application into Docker images and wants to run it on AWS without provisioning, patching, or scaling EC2 instances to host the containers. Which option meets this?"
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
          "pt-BR": "Amazon ECS com o tipo de inicialização EC2",
          "en": "Amazon ECS with the EC2 launch type"
        },
        correct: false,
        explanation: {
          "pt-BR": "Com o tipo de inicialização EC2, os containers rodam em instâncias do cluster que o cliente precisa provisionar, atualizar e escalar. Isso contraria o requisito de não gerenciar servidores.",
          "en": "With the EC2 launch type, containers run on cluster instances that the customer must provision, update, and scale. This contradicts the requirement of not managing servers."
        }
      },
      {
        title: {
          "pt-BR": "Amazon ECS com AWS Fargate",
          "en": "Amazon ECS with AWS Fargate"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Fargate é um mecanismo de computação serverless para containers: o cliente define CPU e memória das tarefas e a AWS gerencia a infraestrutura subjacente, sem instâncias para administrar.",
          "en": "Fargate is a serverless compute engine for containers: the customer defines task CPU and memory, and AWS manages the underlying infrastructure, with no instances to administer."
        }
      },
      {
        title: {
          "pt-BR": "Instâncias Amazon EC2 com o Docker instalado",
          "en": "Amazon EC2 instances with Docker installed"
        },
        correct: false,
        explanation: {
          "pt-BR": "Rodar Docker diretamente em instâncias EC2 exige gerenciar sistema operacional, patches, escala e a própria orquestração dos containers, exatamente o que a equipe quer evitar.",
          "en": "Running Docker directly on EC2 instances requires managing the operating system, patches, scaling, and container orchestration itself, exactly what the team wants to avoid."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Elastic Container Registry (ECR)",
          "en": "Amazon Elastic Container Registry (ECR)"
        },
        correct: false,
        explanation: {
          "pt-BR": "O ECR é um registro gerenciado para armazenar e versionar imagens de container. Ele guarda as imagens, mas não executa os containers.",
          "en": "ECR is a managed registry to store and version container images. It stores the images but does not run the containers."
        }
      }
    ],
    explanation: {
      "pt-BR": "O Amazon ECS com Fargate executa containers sem que o cliente precise gerenciar servidores ou clusters de instâncias.",
      "en": "Amazon ECS with Fargate runs containers without the customer needing to manage servers or instance clusters."
    }
  },
  {
    id: 53,
    domain: 'cloud-technology-services',
    title: {
      "pt-BR": "Implantação - Foco apenas no código",
      "en": "Deployment - Focus Only on Code"
    },
    description: {
      "pt-BR": "Uma equipe de desenvolvedores quer apenas enviar o código de uma aplicação web Java e deixar que a AWS provisione automaticamente as instâncias, o balanceador de carga, o Auto Scaling e o monitoramento, mantendo acesso aos recursos criados. Qual serviço atende?",
      "en": "A team of developers wants to just upload the code of a Java web application and let AWS automatically provision the instances, load balancer, Auto Scaling, and monitoring, while keeping access to the created resources. Which service meets this?"
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
          "pt-BR": "AWS CloudFormation",
          "en": "AWS CloudFormation"
        },
        correct: false,
        explanation: {
          "pt-BR": "O CloudFormation provisiona recursos a partir de templates, mas a equipe precisaria descrever cada instância, balanceador e grupo de Auto Scaling. Ele não parte apenas do código da aplicação.",
          "en": "CloudFormation provisions resources from templates, but the team would need to describe each instance, load balancer, and Auto Scaling group. It does not start from just the application code."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Lightsail",
          "en": "Amazon Lightsail"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Lightsail oferece servidores virtuais e recursos simplificados a preço fixo. Ele não provisiona automaticamente balanceador e Auto Scaling a partir do envio do código da aplicação.",
          "en": "Lightsail offers virtual servers and simplified resources at a fixed price. It does not automatically provision a load balancer and Auto Scaling from an uploaded application code."
        }
      },
      {
        title: {
          "pt-BR": "Instâncias EC2 criadas a partir de uma AMI personalizada",
          "en": "EC2 instances created from a custom AMI"
        },
        correct: false,
        explanation: {
          "pt-BR": "Uma AMI padroniza a instância, mas a equipe continuaria configurando manualmente balanceador, Auto Scaling, monitoramento e o processo de implantação.",
          "en": "An AMI standardizes the instance, but the team would still manually configure the load balancer, Auto Scaling, monitoring, and the deployment process."
        }
      },
      {
        title: {
          "pt-BR": "AWS Elastic Beanstalk",
          "en": "AWS Elastic Beanstalk"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Elastic Beanstalk recebe o código e provisiona automaticamente capacidade, balanceamento de carga, Auto Scaling e monitoramento de saúde, enquanto o cliente mantém controle sobre os recursos subjacentes.",
          "en": "Elastic Beanstalk takes the code and automatically provisions capacity, load balancing, Auto Scaling, and health monitoring, while the customer keeps control over the underlying resources."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS Elastic Beanstalk é uma plataforma que implanta e escala aplicações a partir do código, cuidando da infraestrutura automaticamente.",
      "en": "AWS Elastic Beanstalk is a platform that deploys and scales applications from code, handling the infrastructure automatically."
    }
  },
  {
    id: 54,
    domain: 'cloud-technology-services',
    title: {
      "pt-BR": "Automação - Ambientes idênticos e versionados",
      "en": "Automation - Identical, Versioned Environments"
    },
    description: {
      "pt-BR": "Uma empresa quer descrever toda a sua infraestrutura (VPC, instâncias, bancos e permissões) em arquivos YAML versionados no Git e usá-los para criar ambientes idênticos de teste e produção em várias regiões. Qual serviço atende?",
      "en": "A company wants to describe its entire infrastructure (VPC, instances, databases, and permissions) in YAML files versioned in Git and use them to create identical test and production environments in multiple regions. Which service meets this?"
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
          "pt-BR": "AWS CloudFormation",
          "en": "AWS CloudFormation"
        },
        correct: true,
        explanation: {
          "pt-BR": "O CloudFormation é o serviço de infraestrutura como código da AWS: templates em YAML ou JSON descrevem os recursos, que são criados como stacks de forma repetível em qualquer conta e região.",
          "en": "CloudFormation is AWS's infrastructure as code service: YAML or JSON templates describe the resources, which are created as stacks repeatably in any account and region."
        }
      },
      {
        title: {
          "pt-BR": "AWS Elastic Beanstalk",
          "en": "AWS Elastic Beanstalk"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Elastic Beanstalk provisiona automaticamente o ambiente de uma aplicação a partir do código. Ele não se destina a descrever toda a infraestrutura, como VPCs e permissões, em templates.",
          "en": "Elastic Beanstalk automatically provisions an application's environment from code. It is not intended to describe the entire infrastructure, such as VPCs and permissions, in templates."
        }
      },
      {
        title: {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        correct: false,
        explanation: {
          "pt-BR": "O AWS Config registra a configuração dos recursos existentes e avalia sua conformidade. Ele não cria recursos a partir de arquivos de definição.",
          "en": "AWS Config records the configuration of existing resources and evaluates their compliance. It does not create resources from definition files."
        }
      },
      {
        title: {
          "pt-BR": "AWS Systems Manager",
          "en": "AWS Systems Manager"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Systems Manager gerencia operações em recursos existentes, como aplicação de patches, execução de comandos e parâmetros. Não é o serviço usado para provisionar a infraestrutura completa a partir de templates.",
          "en": "Systems Manager manages operations on existing resources, such as patching, running commands, and parameters. It is not the service used to provision the full infrastructure from templates."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS CloudFormation permite modelar e provisionar recursos como código, de forma repetível e versionável.",
      "en": "AWS CloudFormation allows modeling and provisioning resources as code, in a repeatable and versionable way."
    }
  },
  {
    id: 55,
    domain: 'cloud-technology-services',
    title: {
      "pt-BR": "Migração de dados - Grande volume com pouca banda",
      "en": "Data Migration - Large Volume with Limited Bandwidth"
    },
    description: {
      "pt-BR": "Uma empresa precisa transferir 80 TB de arquivos do seu data center para o Amazon S3 em poucas semanas. O link de internet disponível é limitado e a transferência por ele levaria vários meses. Qual solução é mais adequada?",
      "en": "A company needs to transfer 80 TB of files from its data center to Amazon S3 within a few weeks. The available internet link is limited, and transferring over it would take several months. Which solution is most appropriate?"
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
          "pt-BR": "AWS DataSync pela conexão de internet existente",
          "en": "AWS DataSync over the existing internet connection"
        },
        correct: false,
        explanation: {
          "pt-BR": "O DataSync automatiza e acelera transferências online, mas continua limitado pela banda do link. Com a conexão atual, a transferência levaria meses.",
          "en": "DataSync automates and accelerates online transfers, but it is still limited by the link's bandwidth. With the current connection, the transfer would take months."
        }
      },
      {
        title: {
          "pt-BR": "Amazon S3 Transfer Acceleration",
          "en": "Amazon S3 Transfer Acceleration"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Transfer Acceleration usa as Edge Locations para otimizar o caminho até o S3 em longas distâncias, mas não aumenta a banda do link da empresa, que é o gargalo.",
          "en": "Transfer Acceleration uses Edge Locations to optimize the path to S3 over long distances, but it does not increase the company's link bandwidth, which is the bottleneck."
        }
      },
      {
        title: {
          "pt-BR": "Dispositivos AWS Snowball Edge",
          "en": "AWS Snowball Edge devices"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Snowball Edge é um dispositivo físico enviado ao cliente para copiar os dados localmente e devolvê-los à AWS, que os carrega no S3. Evita depender do link de internet para grandes volumes.",
          "en": "Snowball Edge is a physical device shipped to the customer to copy data locally and return it to AWS, which loads it into S3. It avoids depending on the internet link for large volumes."
        }
      },
      {
        title: {
          "pt-BR": "Uma nova conexão AWS Direct Connect",
          "en": "A new AWS Direct Connect connection"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Direct Connect oferece banda dedicada, mas o provisionamento de um novo circuito pode levar semanas ou meses e gera custo recorrente, o que não se justifica para uma migração única com prazo curto.",
          "en": "Direct Connect offers dedicated bandwidth, but provisioning a new circuit can take weeks or months and incurs recurring cost, which is not justified for a one-time migration with a short deadline."
        }
      }
    ],
    explanation: {
      "pt-BR": "A família AWS Snow transfere grandes volumes de dados offline quando a transferência pela rede seria lenta demais.",
      "en": "The AWS Snow family transfers large volumes of data offline when a network transfer would be too slow."
    }
  },
  {
    id: 56,
    domain: 'cloud-technology-services',
    title: {
      "pt-BR": "Inteligência artificial - Análise de imagens",
      "en": "Artificial Intelligence - Image Analysis"
    },
    description: {
      "pt-BR": "Um aplicativo de rede social quer identificar objetos e rostos nas fotos enviadas pelos usuários e moderar automaticamente conteúdo impróprio. A equipe não tem especialistas em machine learning. Qual serviço atende?",
      "en": "A social networking app wants to identify objects and faces in photos uploaded by users and automatically moderate inappropriate content. The team has no machine learning experts. Which service meets this?"
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
          "pt-BR": "Amazon SageMaker AI",
          "en": "Amazon SageMaker AI"
        },
        correct: false,
        explanation: {
          "pt-BR": "O SageMaker AI é usado para construir, treinar e implantar modelos de machine learning próprios. Resolver esse caso com ele exigiria a expertise em ML que a equipe não tem.",
          "en": "SageMaker AI is used to build, train, and deploy your own machine learning models. Solving this case with it would require the ML expertise the team does not have."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Rekognition",
          "en": "Amazon Rekognition"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Rekognition é um serviço de IA pré-treinado que analisa imagens e vídeos por API, detectando objetos, rostos e conteúdo impróprio, sem necessidade de conhecimento em machine learning.",
          "en": "Rekognition is a pre-trained AI service that analyzes images and videos via API, detecting objects, faces, and inappropriate content, with no machine learning knowledge required."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Textract",
          "en": "Amazon Textract"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Textract extrai texto, formulários e tabelas de documentos digitalizados. Ele não identifica objetos e rostos nem modera conteúdo visual.",
          "en": "Textract extracts text, forms, and tables from scanned documents. It does not identify objects and faces or moderate visual content."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Comprehend",
          "en": "Amazon Comprehend"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Comprehend usa processamento de linguagem natural para analisar texto, como sentimento e entidades. Ele não analisa o conteúdo de imagens.",
          "en": "Comprehend uses natural language processing to analyze text, such as sentiment and entities. It does not analyze image content."
        }
      }
    ],
    explanation: {
      "pt-BR": "O Amazon Rekognition adiciona análise de imagens e vídeos às aplicações por API, sem exigir expertise em machine learning.",
      "en": "Amazon Rekognition adds image and video analysis to applications via API, without requiring machine learning expertise."
    }
  },
  {
    id: 57,
    domain: 'cloud-technology-services',
    title: {
      "pt-BR": "Análise de dados - Consultas históricas complexas",
      "en": "Analytics - Complex Historical Queries"
    },
    description: {
      "pt-BR": "Analistas executam consultas complexas que agregam cinco anos de dados de vendas de várias fontes, e isso está deixando lento o banco transacional que atende os pedidos online. A empresa quer um serviço próprio para esse tipo de análise (OLAP). Qual é o mais adequado?",
      "en": "Analysts run complex queries that aggregate five years of sales data from multiple sources, and this is slowing down the transactional database that serves online orders. The company wants a dedicated service for this type of analysis (OLAP). Which is most appropriate?"
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
          "pt-BR": "Amazon DynamoDB",
          "en": "Amazon DynamoDB"
        },
        correct: false,
        explanation: {
          "pt-BR": "O DynamoDB é um banco NoSQL chave-valor otimizado para acessos transacionais de baixa latência. Não é adequado para consultas analíticas com agregações e junções sobre anos de dados.",
          "en": "DynamoDB is a key-value NoSQL database optimized for low-latency transactional access. It is not suited for analytical queries with aggregations and joins over years of data."
        }
      },
      {
        title: {
          "pt-BR": "Amazon ElastiCache",
          "en": "Amazon ElastiCache"
        },
        correct: false,
        explanation: {
          "pt-BR": "O ElastiCache é um cache em memória que acelera leituras frequentes de dados. Não armazena nem processa grandes históricos para consultas analíticas complexas.",
          "en": "ElastiCache is an in-memory cache that speeds up frequent data reads. It does not store or process large histories for complex analytical queries."
        }
      },
      {
        title: {
          "pt-BR": "Amazon RDS com implantação Multi-AZ",
          "en": "Amazon RDS with a Multi-AZ deployment"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Multi-AZ mantém uma instância standby para alta disponibilidade, e o banco continua sendo transacional (OLTP). Não oferece o processamento colunar e paralelo necessário para análises em grande escala.",
          "en": "Multi-AZ keeps a standby instance for high availability, and the database remains transactional (OLTP). It does not offer the columnar, parallel processing needed for large-scale analytics."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Redshift",
          "en": "Amazon Redshift"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Redshift é um data warehouse gerenciado com armazenamento colunar e processamento paralelo, projetado para consultas analíticas (OLAP) sobre grandes volumes de dados de várias fontes, separando essa carga do banco OLTP.",
          "en": "Redshift is a managed data warehouse with columnar storage and parallel processing, designed for analytical (OLAP) queries over large volumes of data from multiple sources, separating this load from the OLTP database."
        }
      }
    ],
    explanation: {
      "pt-BR": "O Amazon Redshift é o data warehouse da AWS para análises OLAP, enquanto bancos como o RDS atendem cargas transacionais (OLTP).",
      "en": "Amazon Redshift is AWS's data warehouse for OLAP analytics, while databases such as RDS serve transactional (OLTP) workloads."
    }
  },
  {
    id: 58,
    domain: 'cloud-technology-services',
    title: {
      "pt-BR": "Infraestrutura global - Componentes",
      "en": "Global Infrastructure - Components"
    },
    description: {
      "pt-BR": "Uma empresa precisa: manter os dados em um país específico por exigência legal, proteger a aplicação contra a falha de um data center e entregar conteúdo em cache perto dos usuários. Qual associação entre requisito e componente da infraestrutura global está correta?",
      "en": "A company needs to: keep data in a specific country due to legal requirements, protect the application against the failure of a data center, and deliver cached content close to users. Which mapping between requirement and global infrastructure component is correct?"
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
          "pt-BR": "Região para residência, múltiplas AZs para falhas e Edge Locations para cache",
          "en": "Region for residency, multiple AZs for failures, and Edge Locations for caching"
        },
        correct: true,
        explanation: {
          "pt-BR": "A Região define a área geográfica onde os dados ficam; as AZs são data centers isolados dentro da Região que protegem contra falhas locais; e as Edge Locations fazem cache de conteúdo perto dos usuários.",
          "en": "The Region defines the geographic area where data resides; AZs are isolated data centers within the Region that protect against local failures; and Edge Locations cache content close to users."
        }
      },
      {
        title: {
          "pt-BR": "Edge Location para residência, múltiplas Regiões para falhas e AZs para cache",
          "en": "Edge Location for residency, multiple Regions for failures, and AZs for caching"
        },
        correct: false,
        explanation: {
          "pt-BR": "Edge Locations são pontos de presença para CDN e DNS, não locais para hospedar a carga principal e seus dados. AZs também não são usadas para cache perto dos usuários finais.",
          "en": "Edge Locations are points of presence for CDN and DNS, not places to host the main workload and its data. AZs are also not used for caching close to end users."
        }
      },
      {
        title: {
          "pt-BR": "AZ para residência, múltiplas Edge Locations para falhas e Regiões para cache",
          "en": "AZ for residency, multiple Edge Locations for failures, and Regions for caching"
        },
        correct: false,
        explanation: {
          "pt-BR": "A residência de dados é definida pela escolha da Região, e as Edge Locations não hospedam a aplicação para protegê-la contra falhas de data center. Regiões também não são pontos de cache.",
          "en": "Data residency is defined by the choice of Region, and Edge Locations do not host the application to protect it against data center failures. Regions are also not caching points."
        }
      },
      {
        title: {
          "pt-BR": "Região para residência, múltiplas Edge Locations para falhas e AZs para cache",
          "en": "Region for residency, multiple Edge Locations for failures, and AZs for caching"
        },
        correct: false,
        explanation: {
          "pt-BR": "A Região está correta para residência, mas a proteção contra falha de data center vem de distribuir a aplicação entre AZs, e o cache perto dos usuários é feito nas Edge Locations, não nas AZs.",
          "en": "The Region is correct for residency, but protection against data center failure comes from spreading the application across AZs, and caching close to users is done at Edge Locations, not AZs."
        }
      }
    ],
    explanation: {
      "pt-BR": "Regiões são áreas geográficas, AZs são data centers isolados dentro de uma Região e Edge Locations aproximam conteúdo dos usuários.",
      "en": "Regions are geographic areas, AZs are isolated data centers within a Region, and Edge Locations bring content closer to users."
    }
  },
  {
    id: 59,
    domain: 'cloud-technology-services',
    title: {
      "pt-BR": "Armazenamento - Arquivos compartilhados entre instâncias",
      "en": "Storage - Files Shared Across Instances"
    },
    description: {
      "pt-BR": "Várias instâncias EC2 Linux, distribuídas em diferentes Zonas de Disponibilidade, precisam ler e gravar os mesmos arquivos ao mesmo tempo por meio de um sistema de arquivos compartilhado que cresce automaticamente. Qual serviço de armazenamento atende?",
      "en": "Several Linux EC2 instances, spread across different Availability Zones, need to read and write the same files at the same time through a shared file system that grows automatically. Which storage service meets this?"
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
          "pt-BR": "Amazon EBS com volumes gp3",
          "en": "Amazon EBS with gp3 volumes"
        },
        correct: false,
        explanation: {
          "pt-BR": "Um volume EBS gp3 é armazenamento em bloco anexado a uma única instância na mesma AZ. Não oferece um sistema de arquivos compartilhado entre instâncias de AZs diferentes.",
          "en": "An EBS gp3 volume is block storage attached to a single instance in the same AZ. It does not offer a file system shared across instances in different AZs."
        }
      },
      {
        title: {
          "pt-BR": "Amazon EBS io2 com Multi-Attach",
          "en": "Amazon EBS io2 with Multi-Attach"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Multi-Attach permite anexar um volume io1/io2 a várias instâncias, mas apenas dentro da mesma AZ e exigindo um sistema de arquivos com suporte a cluster. Não atende instâncias em AZs diferentes.",
          "en": "Multi-Attach allows attaching an io1/io2 volume to multiple instances, but only within the same AZ and requiring a cluster-aware file system. It does not serve instances in different AZs."
        }
      },
      {
        title: {
          "pt-BR": "Instance store das instâncias EC2",
          "en": "The EC2 instances' instance store"
        },
        correct: false,
        explanation: {
          "pt-BR": "O instance store é armazenamento em bloco temporário, fisicamente ligado ao host de cada instância. Os dados não são compartilhados e se perdem quando a instância é parada ou encerrada.",
          "en": "Instance store is temporary block storage physically attached to each instance's host. The data is not shared and is lost when the instance is stopped or terminated."
        }
      },
      {
        title: {
          "pt-BR": "Amazon EFS",
          "en": "Amazon EFS"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Amazon EFS é um sistema de arquivos NFS gerenciado e elástico que pode ser montado simultaneamente por milhares de instâncias em várias AZs, crescendo e diminuindo automaticamente.",
          "en": "Amazon EFS is a managed, elastic NFS file system that can be mounted simultaneously by thousands of instances across multiple AZs, growing and shrinking automatically."
        }
      }
    ],
    explanation: {
      "pt-BR": "O Amazon EFS fornece um sistema de arquivos compartilhado em rede, enquanto o Amazon EBS fornece volumes de bloco ligados a instâncias em uma AZ.",
      "en": "Amazon EFS provides a shared network file system, while Amazon EBS provides block volumes attached to instances in one AZ."
    }
  },
  {
    id: 60,
    domain: 'billing-pricing-support',
    title: {
      "pt-BR": "Suporte AWS - Escolha do plano",
      "en": "AWS Support - Choosing a Plan"
    },
    description: {
      "pt-BR": "Uma empresa roda cargas de produção na AWS e precisa de acesso 24/7 a engenheiros de suporte por telefone e chat, resposta em menos de 1 hora quando um sistema de produção cair e acesso a todas as verificações do Trusted Advisor. Ela não precisa de um Technical Account Manager. Qual é o plano de menor custo que atende?",
      "en": "A company runs production workloads on AWS and needs 24/7 phone and chat access to support engineers, a response in under 1 hour when a production system goes down, and access to all Trusted Advisor checks. It does not need a Technical Account Manager. Which is the lowest-cost plan that meets this?"
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
          "pt-BR": "Developer",
          "en": "Developer"
        },
        correct: false,
        explanation: {
          "pt-BR": "O plano Developer oferece acesso por e-mail em horário comercial e tempos de resposta de horas. Não inclui suporte 24/7 por telefone e chat nem resposta em 1 hora para produção fora do ar.",
          "en": "The Developer plan offers email access during business hours and response times measured in hours. It does not include 24/7 phone and chat support or a 1-hour response for a production system down."
        }
      },
      {
        title: {
          "pt-BR": "Business",
          "en": "Business"
        },
        correct: true,
        explanation: {
          "pt-BR": "O plano Business inclui acesso 24/7 a engenheiros por telefone, chat e e-mail, resposta em menos de 1 hora para sistema de produção fora do ar e o conjunto completo de verificações do Trusted Advisor.",
          "en": "The Business plan includes 24/7 access to engineers by phone, chat, and email, a response in under 1 hour for a production system down, and the full set of Trusted Advisor checks."
        }
      },
      {
        title: {
          "pt-BR": "Enterprise On-Ramp",
          "en": "Enterprise On-Ramp"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Enterprise On-Ramp atende os requisitos, mas acrescenta um pool de TAMs e respostas mais rápidas para sistemas críticos, com custo maior. Não é o plano de menor custo para o cenário.",
          "en": "Enterprise On-Ramp meets the requirements, but it adds a pool of TAMs and faster responses for critical systems, at a higher cost. It is not the lowest-cost plan for the scenario."
        }
      },
      {
        title: {
          "pt-BR": "Enterprise",
          "en": "Enterprise"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Enterprise inclui TAM designado e resposta em 15 minutos para sistemas críticos. Atende os requisitos, mas é o plano mais caro e inclui serviços que a empresa disse não precisar.",
          "en": "Enterprise includes a designated TAM and a 15-minute response for critical systems. It meets the requirements, but it is the most expensive plan and includes services the company said it does not need."
        }
      }
    ],
    explanation: {
      "pt-BR": "O plano Business é o de menor custo com suporte técnico 24/7 e resposta em até 1 hora para sistemas de produção fora do ar.",
      "en": "The Business plan is the lowest-cost plan with 24/7 technical support and a response within 1 hour for production systems down."
    }
  },
  {
    id: 61,
    domain: 'billing-pricing-support',
    title: {
      "pt-BR": "Otimização de custos - Recursos ociosos",
      "en": "Cost Optimization - Idle Resources"
    },
    description: {
      "pt-BR": "Uma empresa quer receber recomendações automáticas que identifiquem instâncias EC2 com baixa utilização, volumes EBS subutilizados e Elastic IPs não associados, para reduzir desperdícios na conta. Qual serviço fornece essas verificações?",
      "en": "A company wants to receive automated recommendations that identify low-utilization EC2 instances, underutilized EBS volumes, and unassociated Elastic IPs, to reduce waste in the account. Which service provides these checks?"
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
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        correct: false,
        explanation: {
          "pt-BR": "O AWS Budgets alerta quando custos ou uso ultrapassam ou devem ultrapassar limites definidos. Ele não inspeciona os recursos para apontar quais estão ociosos.",
          "en": "AWS Budgets alerts when costs or usage exceed or are forecast to exceed defined thresholds. It does not inspect resources to point out which ones are idle."
        }
      },
      {
        title: {
          "pt-BR": "AWS Cost and Usage Report",
          "en": "AWS Cost and Usage Report"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Cost and Usage Report entrega dados detalhados de cobrança em arquivos no S3 para análise. Ele não gera recomendações sobre recursos ociosos.",
          "en": "The Cost and Usage Report delivers detailed billing data as files in S3 for analysis. It does not generate recommendations about idle resources."
        }
      },
      {
        title: {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Trusted Advisor inspeciona a conta e oferece verificações de otimização de custos, como instâncias EC2 com baixa utilização, volumes EBS subutilizados e Elastic IPs não associados, além de outras categorias.",
          "en": "Trusted Advisor inspects the account and offers cost optimization checks, such as low-utilization EC2 instances, underutilized EBS volumes, and unassociated Elastic IPs, in addition to other categories."
        }
      },
      {
        title: {
          "pt-BR": "AWS Pricing Calculator",
          "en": "AWS Pricing Calculator"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Pricing Calculator estima o custo de arquiteturas planejadas. Ele não analisa os recursos já existentes na conta.",
          "en": "Pricing Calculator estimates the cost of planned architectures. It does not analyze resources already in the account."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS Trusted Advisor inspeciona a conta e recomenda ações em custo, segurança, desempenho, tolerância a falhas e limites de serviço.",
      "en": "AWS Trusted Advisor inspects the account and recommends actions for cost, security, performance, fault tolerance, and service limits."
    }
  },
  {
    id: 62,
    domain: 'billing-pricing-support',
    title: {
      "pt-BR": "Free Tier - Tipos de oferta",
      "en": "Free Tier - Offer Types"
    },
    description: {
      "pt-BR": "Uma startup quer usar o AWS Lambda de forma contínua dentro de um limite mensal gratuito de requisições que não expira após um período desde a criação da conta. A qual tipo de oferta gratuita da AWS isso corresponde?",
      "en": "A startup wants to use AWS Lambda continuously within a monthly free request limit that does not expire after a period since account creation. Which type of AWS free offer does this correspond to?"
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
          "pt-BR": "Ofertas de 12 meses gratuitos a partir da criação da conta",
          "en": "12-month free offers starting from account creation"
        },
        correct: false,
        explanation: {
          "pt-BR": "Ofertas de 12 meses gratuitos têm prazo: deixam de valer após o período contado a partir da criação da conta. O cenário pede um limite que não expira.",
          "en": "12-month free offers have a deadline: they stop applying after the period counted from account creation. The scenario asks for a limit that does not expire."
        }
      },
      {
        title: {
          "pt-BR": "Testes gratuitos de curto prazo ao ativar um serviço",
          "en": "Short-term free trials when activating a service"
        },
        correct: false,
        explanation: {
          "pt-BR": "Testes de curto prazo começam quando o serviço é ativado e duram um período limitado. Não oferecem um limite mensal contínuo.",
          "en": "Short-term trials start when the service is activated and last for a limited period. They do not offer a continuous monthly limit."
        }
      },
      {
        title: {
          "pt-BR": "Créditos promocionais da AWS aplicados à fatura",
          "en": "AWS promotional credits applied to the bill"
        },
        correct: false,
        explanation: {
          "pt-BR": "Créditos promocionais são consumidos conforme o uso e têm data de validade. Não são um limite gratuito mensal permanente.",
          "en": "Promotional credits are consumed with usage and have an expiration date. They are not a permanent monthly free limit."
        }
      },
      {
        title: {
          "pt-BR": "Ofertas Always Free com limite mensal de uso",
          "en": "Always Free offers with a monthly usage limit"
        },
        correct: true,
        explanation: {
          "pt-BR": "Ofertas Always Free não expiram e estão disponíveis para todos os clientes dentro de limites mensais, como 1 milhão de requisições por mês no AWS Lambda.",
          "en": "Always Free offers do not expire and are available to all customers within monthly limits, such as 1 million requests per month on AWS Lambda."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS Free Tier combina ofertas Always Free, que não expiram, com ofertas de duração limitada, como testes de curto prazo.",
      "en": "The AWS Free Tier combines Always Free offers, which do not expire, with limited-duration offers such as short-term trials."
    }
  },
  {
    id: 63,
    domain: 'billing-pricing-support',
    title: {
      "pt-BR": "Gestão de custos - Análise do histórico",
      "en": "Cost Management - Historical Analysis"
    },
    description: {
      "pt-BR": "A equipe financeira quer visualizar em gráficos os custos dos últimos 12 meses, filtrando por serviço, conta e tag, e obter uma previsão dos gastos para os próximos meses com base nesse histórico. Qual serviço atende?",
      "en": "The finance team wants to view the costs of the last 12 months in charts, filtering by service, account, and tag, and get a forecast of spending for the coming months based on that history. Which service meets this?"
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
        correct: true,
        explanation: {
          "pt-BR": "O Cost Explorer oferece uma interface para visualizar e analisar custos e uso históricos, com filtros por serviço, conta e tag, e gera previsões de gastos futuros com base no histórico.",
          "en": "Cost Explorer provides an interface to view and analyze historical costs and usage, with filters by service, account, and tag, and it generates forecasts of future spending based on history."
        }
      },
      {
        title: {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Budgets define limites de custo ou uso e envia alertas quando eles são ou devem ser ultrapassados. Não é a ferramenta para explorar o histórico de custos em gráficos com filtros.",
          "en": "Budgets sets cost or usage limits and sends alerts when they are, or are forecast to be, exceeded. It is not the tool for exploring cost history in charts with filters."
        }
      },
      {
        title: {
          "pt-BR": "AWS Pricing Calculator",
          "en": "AWS Pricing Calculator"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Pricing Calculator estima custos de arquiteturas que ainda serão implantadas. Ele não usa o histórico real de gastos da conta.",
          "en": "Pricing Calculator estimates costs for architectures yet to be deployed. It does not use the account's actual spending history."
        }
      },
      {
        title: {
          "pt-BR": "AWS Cost and Usage Report",
          "en": "AWS Cost and Usage Report"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Cost and Usage Report entrega os dados mais detalhados de cobrança em arquivos no S3, mas não oferece visualização em gráficos nem previsão; outras ferramentas seriam necessárias para analisá-los.",
          "en": "The Cost and Usage Report delivers the most detailed billing data as files in S3, but it does not offer chart visualization or forecasting; other tools would be needed to analyze it."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS Cost Explorer permite visualizar, analisar e prever custos e uso da AWS ao longo do tempo.",
      "en": "AWS Cost Explorer allows viewing, analyzing, and forecasting AWS costs and usage over time."
    }
  },
  {
    id: 64,
    domain: 'billing-pricing-support',
    title: {
      "pt-BR": "Faturamento - Várias contas",
      "en": "Billing - Multiple Accounts"
    },
    description: {
      "pt-BR": "Uma empresa tem cinco contas AWS pagas separadamente. O uso de S3 de cada conta, isoladamente, não atinge as faixas de preço com desconto por volume. Qual ação permite que a empresa se beneficie dessas faixas e receba uma única fatura?",
      "en": "A company has five AWS accounts billed separately. Each account's S3 usage, on its own, does not reach the volume discount pricing tiers. Which action allows the company to benefit from these tiers and receive a single bill?"
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
          "pt-BR": "Aplicar tags de alocação de custos aos recursos de cada conta",
          "en": "Apply cost allocation tags to the resources in each account"
        },
        correct: false,
        explanation: {
          "pt-BR": "Tags de alocação de custos ajudam a atribuir gastos a projetos e equipes nos relatórios, mas não somam o uso das contas para alcançar faixas de desconto nem unificam a fatura.",
          "en": "Cost allocation tags help attribute spending to projects and teams in reports, but they do not combine usage across accounts to reach discount tiers or unify the bill."
        }
      },
      {
        title: {
          "pt-BR": "Criar um orçamento no AWS Budgets para cada conta",
          "en": "Create a budget in AWS Budgets for each account"
        },
        correct: false,
        explanation: {
          "pt-BR": "Orçamentos monitoram gastos e enviam alertas, mas não mudam a forma de cobrança. Cada conta continuaria com sua fatura e suas próprias faixas de preço.",
          "en": "Budgets monitor spending and send alerts, but they do not change how billing works. Each account would keep its own bill and its own pricing tiers."
        }
      },
      {
        title: {
          "pt-BR": "Usar o faturamento consolidado do AWS Organizations",
          "en": "Use AWS Organizations consolidated billing"
        },
        correct: true,
        explanation: {
          "pt-BR": "Com o faturamento consolidado, a conta de gerenciamento paga por todas as contas membro em uma única fatura, e o uso é agregado, alcançando faixas de desconto por volume mais cedo.",
          "en": "With consolidated billing, the management account pays for all member accounts on a single bill, and usage is aggregated, reaching volume discount tiers sooner."
        }
      },
      {
        title: {
          "pt-BR": "Ativar o Cost Explorer em cada uma das contas",
          "en": "Enable Cost Explorer in each of the accounts"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Cost Explorer apenas visualiza e analisa os custos de cada conta. Ele não agrega o uso entre contas para fins de preço nem gera uma fatura única.",
          "en": "Cost Explorer only views and analyzes each account's costs. It does not aggregate usage across accounts for pricing purposes or produce a single bill."
        }
      }
    ],
    explanation: {
      "pt-BR": "O faturamento consolidado do AWS Organizations unifica a fatura e agrega o uso das contas para aproveitar descontos por volume.",
      "en": "AWS Organizations consolidated billing unifies the bill and aggregates account usage to take advantage of volume discounts."
    }
  },
  {
    id: 65,
    domain: 'billing-pricing-support',
    title: {
      "pt-BR": "Planejamento de custos - Antes da implantação",
      "en": "Cost Planning - Before Deployment"
    },
    description: {
      "pt-BR": "Uma empresa está planejando migrar uma aplicação para a AWS e quer estimar o custo mensal da arquitetura proposta (EC2, RDS e S3) antes de criar qualquer recurso, compartilhando a estimativa com a diretoria. Qual ferramenta deve usar?",
      "en": "A company is planning to migrate an application to AWS and wants to estimate the monthly cost of the proposed architecture (EC2, RDS, and S3) before creating any resources, sharing the estimate with management. Which tool should it use?"
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
          "pt-BR": "O Cost Explorer analisa e prevê custos com base no uso histórico da conta. Como nenhum recurso foi criado ainda, não há histórico para estimar a nova arquitetura.",
          "en": "Cost Explorer analyzes and forecasts costs based on the account's historical usage. Since no resources have been created yet, there is no history to estimate the new architecture."
        }
      },
      {
        title: {
          "pt-BR": "AWS Pricing Calculator",
          "en": "AWS Pricing Calculator"
        },
        correct: true,
        explanation: {
          "pt-BR": "O Pricing Calculator permite modelar os serviços da arquitetura planejada e estimar seu custo mensal antes da implantação, gerando estimativas que podem ser compartilhadas por link ou exportadas.",
          "en": "Pricing Calculator allows modeling the services of the planned architecture and estimating its monthly cost before deployment, producing estimates that can be shared via link or exported."
        }
      },
      {
        title: {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Budgets acompanha gastos reais contra limites definidos e envia alertas. Ele não calcula quanto uma arquitetura ainda não implantada vai custar.",
          "en": "Budgets tracks actual spending against defined limits and sends alerts. It does not calculate how much an architecture not yet deployed will cost."
        }
      },
      {
        title: {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        correct: false,
        explanation: {
          "pt-BR": "O Trusted Advisor inspeciona recursos já existentes na conta e recomenda otimizações. Ele não estima o custo de uma arquitetura planejada.",
          "en": "Trusted Advisor inspects resources already in the account and recommends optimizations. It does not estimate the cost of a planned architecture."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS Pricing Calculator estima o custo de soluções na AWS antes da implantação.",
      "en": "AWS Pricing Calculator estimates the cost of solutions on AWS before deployment."
    }
  }
];
