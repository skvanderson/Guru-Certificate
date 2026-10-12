export const solutionsArchitectQuestions = [
  {
    "id": 1,
    "title": {
      "pt-BR": "Arquitetura resiliente - Falha de AZ",
      "en": "Resilient Architecture - AZ Failure"
    },
    "description": {
      "pt-BR": "Uma aplicação web crítica precisa permanecer disponível mesmo com falha completa de uma Availability Zone.",
      "en": "A critical web application must remain available even if a full Availability Zone fails."
    },
    "question": {
      "pt-BR": "Qual desenho atende melhor ao requisito?",
      "en": "Which design best meets the requirement?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Auto Scaling group abrangendo múltiplas AZs atrás de um Application Load Balancer",
          "en": "Auto Scaling group spanning multiple AZs behind an Application Load Balancer"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Com instâncias distribuídas em várias AZs, o ALB deixa de enviar tráfego para os targets da AZ afetada e o Auto Scaling repõe capacidade nas AZs saudáveis, mantendo o serviço no ar.",
          "en": "With instances spread across several AZs, the ALB stops sending traffic to targets in the failed AZ and Auto Scaling replaces capacity in the healthy AZs, keeping the service online."
        }
      },
      {
        "title": {
          "pt-BR": "Auto Scaling group em uma única AZ atrás de um ALB configurado com subnets em duas AZs",
          "en": "Auto Scaling group in a single AZ behind an ALB configured with subnets in two AZs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Ter os nós do ALB em duas AZs não adianta se todos os targets estão em uma só AZ: se ela falhar, o ALB fica sem nenhum target saudável e a aplicação para.",
          "en": "Having ALB nodes in two AZs does not help if all targets live in one AZ: if that AZ fails, the ALB has no healthy targets left and the application goes down."
        }
      },
      {
        "title": {
          "pt-BR": "Instância EC2 única com auto recovery via alarme de CloudWatch StatusCheckFailed_System",
          "en": "Single EC2 instance with auto recovery via a CloudWatch StatusCheckFailed_System alarm"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O auto recovery move a instância para outro hardware dentro da MESMA AZ; ele trata falhas de host, não a perda de uma Availability Zone inteira.",
          "en": "Auto recovery moves the instance to other hardware within the SAME AZ; it handles host failures, not the loss of an entire Availability Zone."
        }
      },
      {
        "title": {
          "pt-BR": "Auto Scaling group com mínimo e máximo 1 abrangendo duas AZs, sem load balancer",
          "en": "Auto Scaling group with min and max of 1 spanning two AZs, without a load balancer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O ASG relança a instância na outra AZ, mas há indisponibilidade durante o boot e o endpoint (IP) muda sem um balanceador na frente; não há capacidade ativa já rodando na outra AZ.",
          "en": "The ASG relaunches the instance in the other AZ, but there is downtime while it boots and the endpoint (IP) changes without a load balancer in front; no active capacity is already running in the other AZ."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para alta disponibilidade regional, a base é distribuir workload em múltiplas AZs com balanceamento e escala.",
      "en": "For regional high availability, the foundation is distributing workload across multiple AZs with balancing and scaling."
    }
  },
  {
    "id": 2,
    "title": {
      "pt-BR": "Banco de dados relacional - Alta disponibilidade",
      "en": "Relational Database - High Availability"
    },
    "description": {
      "pt-BR": "Uma aplicação usa banco relacional gerenciado e precisa failover automático em caso de falha de AZ.",
      "en": "An application uses a managed relational database and needs automatic failover in case of AZ failure."
    },
    "question": {
      "pt-BR": "Qual opção é a mais adequada?",
      "en": "Which option is most suitable?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "RDS Single-AZ com backups automáticos e restauração point-in-time",
          "en": "RDS Single-AZ with automated backups and point-in-time restore"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A restauração point-in-time cria uma NOVA instância e exige ação manual e troca de endpoint; não existe failover automático entre AZs.",
          "en": "Point-in-time restore creates a NEW instance and requires manual action and an endpoint change; there is no automatic cross-AZ failover."
        }
      },
      {
        "title": {
          "pt-BR": "RDS Multi-AZ com instância standby síncrona em outra AZ",
          "en": "RDS Multi-AZ with a synchronous standby instance in another AZ"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "No Multi-AZ, o RDS replica de forma síncrona para uma standby em outra AZ e, em caso de falha, faz failover automático atualizando o registro DNS do mesmo endpoint.",
          "en": "With Multi-AZ, RDS synchronously replicates to a standby in another AZ and, on failure, fails over automatically by updating the DNS record of the same endpoint."
        }
      },
      {
        "title": {
          "pt-BR": "RDS Single-AZ com Read Replica na mesma região em outra AZ",
          "en": "RDS Single-AZ with an in-Region Read Replica in another AZ"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma Read Replica do RDS usa replicação assíncrona e precisa ser promovida manualmente (com novo endpoint); ela escala leitura, mas não fornece failover automático.",
          "en": "An RDS Read Replica uses asynchronous replication and must be promoted manually (with a new endpoint); it scales reads but does not provide automatic failover."
        }
      },
      {
        "title": {
          "pt-BR": "RDS com Read Replica cross-Region promovida manualmente em desastre",
          "en": "RDS with a cross-Region Read Replica promoted manually during a disaster"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "É uma estratégia de DR regional: a promoção é manual, a replicação é assíncrona e a aplicação precisa ser redirecionada para outra região, o que não atende failover automático de AZ.",
          "en": "This is a regional DR strategy: promotion is manual, replication is asynchronous, and the application must be redirected to another Region, which does not meet automatic AZ failover."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para RDS relacional com failover automático entre AZs, Multi-AZ é a escolha correta.",
      "en": "For relational RDS with automatic cross-AZ failover, Multi-AZ is the correct choice."
    }
  },
  {
    "id": 3,
    "title": {
      "pt-BR": "Escalabilidade de leitura - RDS",
      "en": "Read Scaling - RDS"
    },
    "description": {
      "pt-BR": "Um sistema relacional sofre gargalo em leitura, enquanto a escrita permanece estável.",
      "en": "A relational system has read bottlenecks while write load remains stable."
    },
    "question": {
      "pt-BR": "Qual solução arquitetural é mais adequada?",
      "en": "Which architectural solution is most appropriate?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Escalar verticalmente a instância writer para uma classe maior",
          "en": "Vertically scale the writer instance to a larger instance class"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Scale up aumenta a capacidade de um único nó, tem limite de tamanho e exige modificação da instância; não distribui as leituras horizontalmente, e a escrita nem é o gargalo.",
          "en": "Scaling up increases a single node's capacity, has a size ceiling, and requires modifying the instance; it does not spread reads horizontally, and writes are not the bottleneck."
        }
      },
      {
        "title": {
          "pt-BR": "Habilitar RDS Multi-AZ e direcionar as leituras para a instância standby",
          "en": "Enable RDS Multi-AZ and route read queries to the standby instance"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Em uma implantação Multi-AZ de instância, a standby não aceita conexões de leitura; ela existe apenas para failover, então não adiciona capacidade de leitura.",
          "en": "In a Multi-AZ DB instance deployment, the standby does not accept read connections; it exists only for failover, so it adds no read capacity."
        }
      },
      {
        "title": {
          "pt-BR": "Criar Read Replicas e direcionar as consultas de leitura para elas",
          "en": "Create Read Replicas and route read queries to them"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Read Replicas recebem cópia assíncrona dos dados e atendem consultas de leitura, escalando horizontalmente a leitura sem sobrecarregar o writer.",
          "en": "Read Replicas receive an asynchronous copy of the data and serve read queries, scaling reads horizontally without overloading the writer."
        }
      },
      {
        "title": {
          "pt-BR": "Migrar o volume do writer para io2 com mais IOPS provisionadas",
          "en": "Move the writer's volume to io2 with more provisioned IOPS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Mais IOPS ajuda apenas se o gargalo for I/O de disco, e continua sendo um único nó atendendo todas as leituras; não há escala horizontal de leitura.",
          "en": "More IOPS helps only if the bottleneck is disk I/O, and it is still a single node serving all reads; there is no horizontal read scaling."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para aumento de throughput de leitura em RDS, Read Replicas são abordagem padrão.",
      "en": "For increased RDS read throughput, Read Replicas are the standard approach."
    }
  },
  {
    "id": 4,
    "title": {
      "pt-BR": "Armazenamento de objeto - Acesso global",
      "en": "Object Storage - Global Access"
    },
    "description": {
      "pt-BR": "Usuários globais acessam conteúdo estático com alta latência a partir da região primária.",
      "en": "Global users access static content with high latency from the primary region."
    },
    "question": {
      "pt-BR": "Qual combinação melhora desempenho de entrega?",
      "en": "Which combination improves delivery performance?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "S3 com Transfer Acceleration habilitado no bucket da região primária",
          "en": "S3 with Transfer Acceleration enabled on the primary-region bucket"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Transfer Acceleration otimiza transferências de longa distância (principalmente uploads) pela rede da AWS, mas não faz cache: toda requisição ainda é atendida pelo bucket na região primária.",
          "en": "Transfer Acceleration optimizes long-distance transfers (mainly uploads) over the AWS network, but it does not cache: every request is still served by the bucket in the primary Region."
        }
      },
      {
        "title": {
          "pt-BR": "S3 Cross-Region Replication para um bucket em uma segunda região",
          "en": "S3 Cross-Region Replication to a bucket in a second Region"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A CRR copia objetos para outra região, mas usuários de outros continentes continuam distantes, e seria preciso lógica extra de roteamento; não é uma rede de entrega global com cache.",
          "en": "CRR copies objects to another Region, but users on other continents are still far away and extra routing logic is needed; it is not a global caching delivery network."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Global Accelerator com o bucket S3 registrado como endpoint",
          "en": "AWS Global Accelerator with the S3 bucket registered as an endpoint"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Global Accelerator aceita como endpoints ALB, NLB, instâncias EC2 e Elastic IPs; um bucket S3 não pode ser registrado diretamente, e o serviço não faz cache de conteúdo.",
          "en": "Global Accelerator accepts ALBs, NLBs, EC2 instances, and Elastic IPs as endpoints; an S3 bucket cannot be registered directly, and the service does not cache content."
        }
      },
      {
        "title": {
          "pt-BR": "S3 como origem de uma distribuição Amazon CloudFront",
          "en": "S3 as the origin of an Amazon CloudFront distribution"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "CloudFront faz cache do conteúdo estático em edge locations próximas aos usuários, reduzindo a latência global e a carga sobre a origem S3.",
          "en": "CloudFront caches static content at edge locations close to users, reducing global latency and load on the S3 origin."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para conteúdo estático global, S3 + CloudFront é arquitetura de referência.",
      "en": "For global static content, S3 + CloudFront is a reference architecture."
    }
  },
  {
    "id": 5,
    "title": {
      "pt-BR": "Mensageria - Desacoplamento de microserviços",
      "en": "Messaging - Microservices Decoupling"
    },
    "description": {
      "pt-BR": "Serviços produtores não podem falhar quando consumidores estiverem indisponíveis temporariamente.",
      "en": "Producer services must not fail when consumers are temporarily unavailable."
    },
    "question": {
      "pt-BR": "Qual padrão reduz acoplamento e absorve picos?",
      "en": "Which pattern reduces coupling and absorbs spikes?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Fila Amazon SQS entre produtor e consumidor, com consumo por polling",
          "en": "Amazon SQS queue between producer and consumer, with polling consumption"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O produtor apenas grava na fila, que retém as mensagens (por padrão 4 dias, até 14) enquanto o consumidor está fora; o consumidor processa no próprio ritmo, absorvendo picos.",
          "en": "The producer only writes to the queue, which retains messages (4 days by default, up to 14) while the consumer is down; the consumer processes at its own pace, absorbing spikes."
        }
      },
      {
        "title": {
          "pt-BR": "Tópico Amazon SNS com o consumidor inscrito via endpoint HTTP/S",
          "en": "Amazon SNS topic with the consumer subscribed via an HTTP/S endpoint"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "SNS é push: entrega na taxa do produtor e, se o endpoint estiver fora, faz apenas retentativas limitadas pela política de entrega antes de descartar a mensagem ou enviá-la para DLQ; não funciona como buffer.",
          "en": "SNS is push-based: it delivers at the producer's rate and, if the endpoint is down, only retries as limited by the delivery policy before dropping the message or sending it to a DLQ; it does not act as a buffer."
        }
      },
      {
        "title": {
          "pt-BR": "Invocação síncrona (RequestResponse) da Lambda consumidora pelo produtor",
          "en": "Synchronous (RequestResponse) invocation of the consumer Lambda by the producer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Na invocação síncrona o produtor espera a resposta e recebe diretamente erros ou throttling; em picos ou falhas do consumidor, o produtor também falha.",
          "en": "With synchronous invocation the producer waits for the response and directly receives errors or throttling; during spikes or consumer failures, the producer fails too."
        }
      },
      {
        "title": {
          "pt-BR": "Application Load Balancer na frente dos consumidores com health checks",
          "en": "Application Load Balancer in front of the consumers with health checks"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O ALB distribui requisições entre consumidores saudáveis, mas não armazena nada: se todos estiverem indisponíveis ou saturados, o produtor recebe erro 5xx.",
          "en": "The ALB distributes requests across healthy consumers but stores nothing: if all of them are unavailable or saturated, the producer gets a 5xx error."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Fila intermediária é estratégia clássica para reduzir acoplamento e lidar com picos/falhas temporárias.",
      "en": "An intermediary queue is a classic strategy to reduce coupling and handle spikes/transient failures."
    }
  },
  {
    "id": 6,
    "title": {
      "pt-BR": "Disaster Recovery - RTO e RPO agressivos",
      "en": "Disaster Recovery - Aggressive RTO and RPO"
    },
    "description": {
      "pt-BR": "Um sistema crítico precisa RTO de minutos e RPO mínimo em cenário de desastre regional.",
      "en": "A critical system requires minute-level RTO and minimal RPO under regional disaster scenario."
    },
    "question": {
      "pt-BR": "Qual estratégia tende a atender melhor?",
      "en": "Which strategy tends to fit best?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Backup and restore com AWS Backup copiando os backups para outra região",
          "en": "Backup and restore with AWS Backup copying backups to another Region"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Os dados ficam protegidos em outra região, mas toda a infraestrutura precisa ser recriada e restaurada no desastre; o RTO tende a ser de horas e o RPO depende da frequência dos backups.",
          "en": "Data is protected in another Region, but the entire infrastructure must be recreated and restored during a disaster; RTO tends to be hours and RPO depends on backup frequency."
        }
      },
      {
        "title": {
          "pt-BR": "Warm standby ou multi-site ativo-ativo em outra região com failover automatizado",
          "en": "Warm standby or active-active multi-site in another Region with automated failover"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Com o ambiente já rodando na região secundária, dados replicados continuamente e failover automatizado, o RTO fica em minutos (ou quase zero) e o RPO é mínimo.",
          "en": "With the environment already running in the secondary Region, continuously replicated data, and automated failover, RTO stays in minutes (or near zero) and RPO is minimal."
        }
      },
      {
        "title": {
          "pt-BR": "Pilot light em outra região com servidores de aplicação provisionados manualmente",
          "en": "Pilot light in another Region with application servers provisioned manually"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "No pilot light só o núcleo (ex.: banco replicado) fica ativo; provisionar e escalar a camada de aplicação manualmente no desastre aumenta o RTO além do alvo de minutos.",
          "en": "In pilot light only the core (e.g., the replicated database) stays active; manually provisioning and scaling the application tier during a disaster pushes RTO beyond the minute-level target."
        }
      },
      {
        "title": {
          "pt-BR": "Implantação Multi-AZ na mesma região com failover automático entre AZs",
          "en": "Multi-AZ deployment in the same Region with automatic failover between AZs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Multi-AZ protege contra falha de uma AZ, mas todos os recursos continuam na mesma região; em um desastre regional, não há ambiente para assumir.",
          "en": "Multi-AZ protects against the failure of one AZ, but all resources remain in the same Region; in a regional disaster, there is no environment to take over."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Quanto mais agressivo RTO/RPO, maior necessidade de ambiente quente/ativo e automação de failover.",
      "en": "The more aggressive the RTO/RPO, the greater the need for warm/active environments and automated failover."
    }
  },
  {
    "id": 7,
    "title": {
      "pt-BR": "Segurança em profundidade - Camada web",
      "en": "Defense in Depth - Web Layer"
    },
    "description": {
      "pt-BR": "Uma aplicação pública precisa mitigar ataques comuns de camada 7, como SQLi e XSS.",
      "en": "A public application needs mitigation for common layer-7 attacks like SQLi and XSS."
    },
    "question": {
      "pt-BR": "Qual serviço AWS é mais indicado nessa borda?",
      "en": "Which AWS service is most suitable at this edge layer?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Shield Standard na borda da AWS",
          "en": "AWS Shield Standard at the AWS edge"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Shield Standard mitiga ataques DDoS de camadas 3 e 4 (ex.: SYN/UDP floods); ele não inspeciona o conteúdo das requisições HTTP em busca de SQLi ou XSS.",
          "en": "Shield Standard mitigates layer 3 and 4 DDoS attacks (e.g., SYN/UDP floods); it does not inspect HTTP request content for SQLi or XSS."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon GuardDuty com detecção de ameaças",
          "en": "Amazon GuardDuty with threat detection"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "GuardDuty analisa fontes como CloudTrail, VPC Flow Logs e DNS logs para gerar findings; ele detecta, mas não fica inline bloqueando requisições HTTP maliciosas.",
          "en": "GuardDuty analyzes sources such as CloudTrail, VPC Flow Logs, and DNS logs to generate findings; it detects but does not sit inline blocking malicious HTTP requests."
        }
      },
      {
        "title": {
          "pt-BR": "AWS WAF associado ao CloudFront ou ALB",
          "en": "AWS WAF associated with CloudFront or ALB"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "WAF inspeciona requisições HTTP/S na camada 7 e aplica regras gerenciadas e customizadas (como os conjuntos de SQLi e XSS) para bloquear esses ataques.",
          "en": "WAF inspects HTTP/S requests at layer 7 and applies managed and custom rules (such as the SQLi and XSS rule sets) to block these attacks."
        }
      },
      {
        "title": {
          "pt-BR": "Security groups e network ACLs restritivos",
          "en": "Restrictive security groups and network ACLs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Security groups e NACLs filtram por IP, protocolo e porta (camadas 3/4); não conseguem analisar o payload HTTP para identificar SQLi ou XSS.",
          "en": "Security groups and NACLs filter by IP, protocol, and port (layers 3/4); they cannot analyze the HTTP payload to identify SQLi or XSS."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para proteção de camada 7 em aplicações HTTP, AWS WAF é serviço central.",
      "en": "For layer-7 protection on HTTP applications, AWS WAF is the core service."
    }
  },
  {
    "id": 8,
    "title": {
      "pt-BR": "Governança multi-conta - Estrutura organizacional",
      "en": "Multi-Account Governance - Organizational Structure"
    },
    "description": {
      "pt-BR": "Uma empresa quer separar ambientes por conta, aplicar políticas centralizadas e consolidar faturamento.",
      "en": "A company wants account-based environment separation, centralized policies, and consolidated billing."
    },
    "question": {
      "pt-BR": "Qual serviço suporta esse modelo?",
      "en": "Which service supports this model?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Config com agregador multi-conta",
          "en": "AWS Config with a multi-account aggregator"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Config avalia e agrega a conformidade de recursos entre contas, mas é detectivo: não cria a estrutura de contas, não aplica SCPs preventivas e não consolida faturamento.",
          "en": "Config evaluates and aggregates resource compliance across accounts, but it is detective: it does not create the account structure, enforce preventive SCPs, or consolidate billing."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Resource Access Manager",
          "en": "AWS Resource Access Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "RAM compartilha recursos (ex.: subnets, Transit Gateways) entre contas; não define hierarquia de contas, políticas centrais nem faturamento consolidado.",
          "en": "RAM shares resources (e.g., subnets, Transit Gateways) across accounts; it does not define an account hierarchy, central policies, or consolidated billing."
        }
      },
      {
        "title": {
          "pt-BR": "AWS IAM Identity Center",
          "en": "AWS IAM Identity Center"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Identity Center centraliza o acesso SSO dos usuários às contas, mas não organiza contas em OUs, não aplica SCPs e não consolida faturamento (ele inclusive depende do Organizations para uso multi-conta).",
          "en": "Identity Center centralizes user SSO access to accounts, but it does not organize accounts into OUs, apply SCPs, or consolidate billing (it actually relies on Organizations for multi-account use)."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Organizations",
          "en": "AWS Organizations"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Organizations agrupa contas em OUs, aplica Service Control Policies de forma centralizada e oferece faturamento consolidado, cobrindo os três requisitos.",
          "en": "Organizations groups accounts into OUs, centrally applies Service Control Policies, and provides consolidated billing, covering all three requirements."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para estratégia multi-conta com controle central, AWS Organizations é base arquitetural.",
      "en": "For multi-account strategy with centralized control, AWS Organizations is the architectural foundation."
    }
  },
  {
    "id": 9,
    "title": {
      "pt-BR": "Conectividade híbrida - Throughput previsível",
      "en": "Hybrid Connectivity - Predictable Throughput"
    },
    "description": {
      "pt-BR": "Uma carga de integração on-premises exige conexão dedicada com latência previsível e largura de banda estável.",
      "en": "An on-prem integration workload requires dedicated connectivity with predictable latency and stable bandwidth."
    },
    "question": {
      "pt-BR": "Qual serviço atende melhor?",
      "en": "Which service best fits?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Direct Connect",
          "en": "AWS Direct Connect"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Direct Connect estabelece um enlace de rede dedicado e privado entre o data center e a AWS, com largura de banda contratada e latência mais consistente que a internet.",
          "en": "Direct Connect establishes a dedicated, private network link between the data center and AWS, with committed bandwidth and more consistent latency than the internet."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Site-to-Site VPN",
          "en": "AWS Site-to-Site VPN"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A VPN Site-to-Site cria túneis IPsec criptografados, mas trafega pela internet pública; cada túnel tem limite de throughput e a latência varia com a internet.",
          "en": "Site-to-Site VPN creates encrypted IPsec tunnels, but it travels over the public internet; each tunnel has a throughput limit and latency varies with internet conditions."
        }
      },
      {
        "title": {
          "pt-BR": "Accelerated Site-to-Site VPN com Global Accelerator",
          "en": "Accelerated Site-to-Site VPN with Global Accelerator"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A aceleração leva o tráfego para a rede global da AWS no edge mais próximo, o que melhora o desempenho, mas o trecho até o edge ainda é internet pública; não é um circuito dedicado.",
          "en": "Acceleration moves traffic onto the AWS global network at the nearest edge, which improves performance, but the segment to the edge is still the public internet; it is not a dedicated circuit."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Client VPN",
          "en": "AWS Client VPN"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Client VPN é para acesso remoto de usuários individuais (clientes OpenVPN) à VPC, não para integração site-a-site com banda estável entre data center e AWS.",
          "en": "Client VPN is for remote access by individual users (OpenVPN clients) to the VPC, not for site-to-site integration with stable bandwidth between a data center and AWS."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Quando a prioridade é desempenho de rede previsível entre on-prem e AWS, Direct Connect é preferível.",
      "en": "When predictable network performance between on-prem and AWS is the priority, Direct Connect is preferred."
    }
  },
  {
    "id": 10,
    "title": {
      "pt-BR": "Data Lake - Consulta sem ETL pesado",
      "en": "Data Lake - Query Without Heavy ETL"
    },
    "description": {
      "pt-BR": "A empresa armazena dados em S3 e precisa executar consultas SQL ad hoc sem provisionar cluster permanente.",
      "en": "The company stores data in S3 and needs ad-hoc SQL queries without provisioning permanent clusters."
    },
    "question": {
      "pt-BR": "Qual serviço atende melhor?",
      "en": "Which service is most suitable?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Redshift (cluster provisionado) com Redshift Spectrum",
          "en": "Amazon Redshift (provisioned cluster) with Redshift Spectrum"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Spectrum consulta dados no S3, mas exige um cluster Redshift provisionado e ativo para executar as queries, contrariando o requisito de não manter cluster permanente.",
          "en": "Spectrum queries data in S3, but it requires a provisioned, running Redshift cluster to execute queries, which contradicts the requirement of no permanent cluster."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Athena",
          "en": "Amazon Athena"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Athena é serverless: consulta dados diretamente no S3 com SQL padrão, usando o Glue Data Catalog como metastore, e cobra pelo volume de dados escaneado.",
          "en": "Athena is serverless: it queries data directly in S3 with standard SQL, using the Glue Data Catalog as its metastore, and charges per amount of data scanned."
        }
      },
      {
        "title": {
          "pt-BR": "Cluster Amazon EMR com Trino (Presto)",
          "en": "Amazon EMR cluster with Trino (Presto)"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Trino no EMR executa SQL sobre S3, mas exige provisionar, dimensionar e gerenciar um cluster, justamente o que o cenário quer evitar.",
          "en": "Trino on EMR runs SQL over S3, but it requires provisioning, sizing, and managing a cluster, which is exactly what the scenario wants to avoid."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Glue Data Catalog com crawlers",
          "en": "AWS Glue Data Catalog with crawlers"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Crawlers descobrem o schema e registram tabelas no Data Catalog, mas o catálogo guarda apenas metadados; ele não executa consultas SQL por conta própria.",
          "en": "Crawlers discover schemas and register tables in the Data Catalog, but the catalog only stores metadata; it does not execute SQL queries on its own."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para SQL ad hoc em S3 sem cluster, Athena é a opção padrão.",
      "en": "For ad-hoc SQL on S3 without clusters, Athena is the standard option."
    }
  },
  {
    "id": 11,
    "title": {
      "pt-BR": "Observabilidade - Métricas e alarmes",
      "en": "Observability - Metrics and Alarms"
    },
    "description": {
      "pt-BR": "Uma arquitetura distribuída precisa alertar automaticamente quando latência e erro ultrapassarem limites definidos.",
      "en": "A distributed architecture must automatically alert when latency and error rates exceed defined thresholds."
    },
    "question": {
      "pt-BR": "Qual serviço é central para isso?",
      "en": "Which service is central for this?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS X-Ray",
          "en": "AWS X-Ray"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "X-Ray coleta traces e gera service maps para analisar latência entre componentes, mas os alarmes por limite de métrica são criados e disparados no CloudWatch.",
          "en": "X-Ray collects traces and builds service maps to analyze latency between components, but threshold-based metric alarms are created and triggered in CloudWatch."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudTrail registra chamadas de API feitas na conta (quem fez o quê e quando) para auditoria; não mede latência nem taxa de erro da aplicação.",
          "en": "CloudTrail records API calls made in the account (who did what and when) for auditing; it does not measure application latency or error rates."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "CloudWatch coleta métricas como latência e erros 5xx e permite alarmes com thresholds que disparam notificações (SNS) ou ações automáticas.",
          "en": "CloudWatch collects metrics such as latency and 5xx errors and supports threshold alarms that trigger notifications (SNS) or automated actions."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EventBridge",
          "en": "Amazon EventBridge"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "EventBridge roteia eventos entre serviços com base em regras, mas não calcula métricas nem avalia limites de latência; ele pode apenas reagir a mudanças de estado de alarmes do CloudWatch.",
          "en": "EventBridge routes events between services based on rules, but it does not compute metrics or evaluate latency thresholds; it can only react to CloudWatch alarm state changes."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Monitoramento operacional em AWS se apoia principalmente em CloudWatch.",
      "en": "Operational monitoring on AWS primarily relies on CloudWatch."
    }
  },
  {
    "id": 12,
    "title": {
      "pt-BR": "Backup e retenção - Governança de custo",
      "en": "Backup and Retention - Cost Governance"
    },
    "description": {
      "pt-BR": "A empresa quer política central para backups de múltiplas contas e serviços, com retenção padronizada.",
      "en": "The company wants centralized backup policy across multiple accounts and services with standardized retention."
    },
    "question": {
      "pt-BR": "Qual serviço simplifica essa estratégia?",
      "en": "Which service simplifies this strategy?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Data Lifecycle Manager",
          "en": "Amazon Data Lifecycle Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "DLM automatiza a criação e retenção de snapshots EBS e AMIs, mas não cobre outros serviços como RDS, DynamoDB ou EFS nem oferece uma política central única multi-serviço.",
          "en": "DLM automates creation and retention of EBS snapshots and AMIs, but it does not cover other services such as RDS, DynamoDB, or EFS, nor provide a single central multi-service policy."
        }
      },
      {
        "title": {
          "pt-BR": "Regras de S3 Lifecycle",
          "en": "S3 Lifecycle rules"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Lifecycle rules movem objetos entre classes de armazenamento e expiram versões, mas atuam apenas em buckets S3 e não fazem backup de outros serviços.",
          "en": "Lifecycle rules transition objects between storage classes and expire versions, but they only act on S3 buckets and do not back up other services."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Elastic Disaster Recovery",
          "en": "AWS Elastic Disaster Recovery"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Elastic Disaster Recovery replica continuamente servidores para recuperação rápida em desastre, mas não é uma ferramenta de políticas de backup e retenção padronizadas entre serviços.",
          "en": "Elastic Disaster Recovery continuously replicates servers for fast disaster recovery, but it is not a tool for standardized backup and retention policies across services."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Backup",
          "en": "AWS Backup"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "AWS Backup centraliza backup plans com agendamento e retenção para vários serviços (EBS, RDS, DynamoDB, EFS etc.) e, integrado ao Organizations, aplica backup policies em múltiplas contas.",
          "en": "AWS Backup centralizes backup plans with scheduling and retention for many services (EBS, RDS, DynamoDB, EFS, etc.) and, integrated with Organizations, applies backup policies across multiple accounts."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para padronizar backup/retention em larga escala, AWS Backup reduz esforço operacional e melhora governança.",
      "en": "To standardize backup/retention at scale, AWS Backup reduces operational effort and improves governance."
    }
  },
  {
    "id": 13,
    "title": {
      "pt-BR": "Aplicação global - Roteamento DNS por latência",
      "en": "Global Application - Latency-Based DNS Routing"
    },
    "description": {
      "pt-BR": "Uma aplicação em múltiplas regiões deve direcionar usuário para endpoint com menor latência.",
      "en": "A multi-region application must route users to the lowest-latency endpoint."
    },
    "question": {
      "pt-BR": "Qual recurso AWS é mais adequado?",
      "en": "Which AWS feature is most suitable?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Route 53 com política de roteamento por latência",
          "en": "Route 53 with latency-based routing policy"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O roteamento por latência responde com o registro da região que tem a menor latência medida pela AWS entre a rede do usuário e as regiões configuradas.",
          "en": "Latency-based routing answers with the record for the Region with the lowest latency measured by AWS between the user's network and the configured Regions."
        }
      },
      {
        "title": {
          "pt-BR": "Route 53 com política de roteamento weighted",
          "en": "Route 53 with weighted routing policy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Weighted distribui as respostas conforme pesos fixos definidos pelo administrador (ex.: 70/30), sem considerar a latência de cada usuário até cada região.",
          "en": "Weighted routing distributes answers according to fixed weights set by the administrator (e.g., 70/30), without considering each user's latency to each Region."
        }
      },
      {
        "title": {
          "pt-BR": "Route 53 com política de roteamento geolocation",
          "en": "Route 53 with geolocation routing policy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Geolocation escolhe o registro pela localização de origem da consulta DNS (país/continente), definida por regras fixas; a região mapeada nem sempre é a de menor latência.",
          "en": "Geolocation selects the record by the DNS query's origin location (country/continent) based on fixed rules; the mapped Region is not always the lowest-latency one."
        }
      },
      {
        "title": {
          "pt-BR": "Route 53 com política de roteamento multivalue answer",
          "en": "Route 53 with multivalue answer routing policy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Multivalue answer retorna até oito registros saudáveis escolhidos aleatoriamente; melhora disponibilidade, mas não seleciona o endpoint pela latência do usuário.",
          "en": "Multivalue answer returns up to eight healthy records chosen at random; it improves availability but does not select the endpoint by user latency."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para distribuir usuários por desempenho regional, Route 53 com política de latência é opção clássica.",
      "en": "To distribute users by regional performance, Route 53 latency policy is a classic option."
    }
  },
  {
    "id": 14,
    "title": {
      "pt-BR": "Segurança de dados - Criptografia em repouso",
      "en": "Data Security - Encryption at Rest"
    },
    "description": {
      "pt-BR": "A organização precisa padronizar controle de chaves para criptografia em vários serviços AWS.",
      "en": "The organization needs standardized key control for encryption across AWS services."
    },
    "question": {
      "pt-BR": "Qual serviço centraliza essa gestão?",
      "en": "Which service centralizes this management?"
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
        "correct": false,
        "explanation": {
          "pt-BR": "Secrets Manager armazena e rotaciona segredos como credenciais de banco e API keys (criptografando-os com KMS), mas não é o serviço de chaves usado pelos demais serviços AWS para criptografia em repouso.",
          "en": "Secrets Manager stores and rotates secrets such as database credentials and API keys (encrypting them with KMS), but it is not the key service used by other AWS services for encryption at rest."
        }
      },
      {
        "title": {
          "pt-BR": "AWS KMS",
          "en": "AWS KMS"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "KMS cria, rotaciona e controla o uso de chaves via key policies, com integração nativa a S3, EBS, RDS, DynamoDB e outros serviços para criptografia em repouso.",
          "en": "KMS creates, rotates, and controls key usage via key policies, with native integration with S3, EBS, RDS, DynamoDB, and other services for encryption at rest."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Certificate Manager",
          "en": "AWS Certificate Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "ACM provisiona e renova certificados TLS para criptografia em trânsito (ex.: ALB, CloudFront); não gerencia chaves de criptografia de dados em repouso.",
          "en": "ACM provisions and renews TLS certificates for encryption in transit (e.g., ALB, CloudFront); it does not manage keys for encrypting data at rest."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudHSM",
          "en": "AWS CloudHSM"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudHSM fornece HSMs dedicados e gerenciados pelo cliente; os serviços AWS não se integram diretamente a ele para criptografia em repouso (só via custom key store do KMS), e a operação fica a cargo do cliente.",
          "en": "CloudHSM provides dedicated, customer-managed HSMs; AWS services do not integrate with it directly for encryption at rest (only via a KMS custom key store), and operations are the customer's responsibility."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Em arquitetura AWS, KMS é o núcleo da governança de chaves para dados em repouso.",
      "en": "In AWS architecture, KMS is the core of key governance for data at rest."
    }
  },
  {
    "id": 15,
    "title": {
      "pt-BR": "Migração de banco - Mudança mínima de código",
      "en": "Database Migration - Minimal Code Changes"
    },
    "description": {
      "pt-BR": "Uma aplicação PostgreSQL em data center será migrada para AWS com mínimo impacto no código e operação gerenciada.",
      "en": "An on-prem PostgreSQL application will migrate to AWS with minimal code impact and managed operations."
    },
    "question": {
      "pt-BR": "Qual destino é mais aderente?",
      "en": "Which target is most aligned?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Aurora MySQL-Compatible",
          "en": "Amazon Aurora MySQL-Compatible"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "É gerenciado, mas troca o engine de PostgreSQL para MySQL, exigindo adaptar SQL, tipos de dados, funções e drivers da aplicação.",
          "en": "It is managed, but it changes the engine from PostgreSQL to MySQL, requiring changes to the application's SQL, data types, functions, and drivers."
        }
      },
      {
        "title": {
          "pt-BR": "PostgreSQL autogerenciado em Amazon EC2",
          "en": "Self-managed PostgreSQL on Amazon EC2"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Mantém o mesmo engine e quase nenhuma mudança de código, mas patching, backups, alta disponibilidade e sistema operacional ficam por conta da equipe; não é operação gerenciada.",
          "en": "It keeps the same engine and almost no code changes, but patching, backups, high availability, and the operating system are the team's responsibility; it is not managed operations."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon RDS for PostgreSQL",
          "en": "Amazon RDS for PostgreSQL"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Mantém o mesmo engine PostgreSQL (drivers, SQL e extensões suportadas) e a AWS assume backups, patching e alta disponibilidade, unindo mínima mudança de código e operação gerenciada.",
          "en": "It keeps the same PostgreSQL engine (drivers, SQL, and supported extensions) while AWS handles backups, patching, and high availability, combining minimal code changes with managed operations."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Redshift",
          "en": "Amazon Redshift"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Apesar de ter origem no PostgreSQL, Redshift é um data warehouse colunar para OLAP, com diferenças de SQL e sem foco em transações OLTP; exigiria reescrever partes da aplicação.",
          "en": "Although derived from PostgreSQL, Redshift is a columnar data warehouse for OLAP, with SQL differences and no focus on OLTP transactions; it would require rewriting parts of the application."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Quando a meta é mínima mudança de código em PostgreSQL, RDS for PostgreSQL é escolha natural.",
      "en": "When minimal code change for PostgreSQL is the goal, RDS for PostgreSQL is the natural choice."
    }
  },
  {
    "id": 16,
    "title": {
      "pt-BR": "Custos - Carga previsível contínua",
      "en": "Costs - Continuous Predictable Workload"
    },
    "description": {
      "pt-BR": "Uma workload de compute roda 24x7 com perfil estável por longo período.",
      "en": "A compute workload runs 24x7 with a stable long-term profile."
    },
    "question": {
      "pt-BR": "Qual estratégia tende a reduzir custo sem perder capacidade?",
      "en": "Which strategy tends to reduce cost without losing capacity?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "On-Demand com Auto Scaling ajustando a capacidade",
          "en": "On-Demand with Auto Scaling adjusting capacity"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Auto Scaling ajuda cargas variáveis, mas aqui o uso é estável 24x7: a capacidade praticamente não muda e tudo continua sendo cobrado pelo preço On-Demand, sem desconto.",
          "en": "Auto Scaling helps variable workloads, but here usage is steady 24x7: capacity barely changes and everything is still billed at On-Demand prices, with no discount."
        }
      },
      {
        "title": {
          "pt-BR": "Spot Instances diversificadas para 100% da carga",
          "en": "Diversified Spot Instances for 100% of the workload"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Spot tem o maior desconto, mas a AWS pode interromper instâncias com aviso de dois minutos; usar Spot para toda a carga contínua arrisca perder capacidade.",
          "en": "Spot has the largest discount, but AWS can interrupt instances with a two-minute notice; using Spot for the entire continuous workload risks losing capacity."
        }
      },
      {
        "title": {
          "pt-BR": "Dedicated Hosts On-Demand para toda a carga",
          "en": "On-Demand Dedicated Hosts for the entire workload"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Dedicated Hosts atendem requisitos de licenciamento por socket/core ou compliance, mas sob demanda custam mais que instâncias compartilhadas e não reduzem o custo da carga.",
          "en": "Dedicated Hosts address per-socket/per-core licensing or compliance requirements, but On-Demand they cost more than shared instances and do not reduce workload cost."
        }
      },
      {
        "title": {
          "pt-BR": "Savings Plans ou Reserved Instances para o baseline previsível",
          "en": "Savings Plans or Reserved Instances for the predictable baseline"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Com compromisso de 1 ou 3 anos, Savings Plans e RIs oferecem desconto significativo sobre On-Demand sem risco de interrupção, ideal para carga estável 24x7.",
          "en": "With a 1- or 3-year commitment, Savings Plans and RIs provide significant discounts over On-Demand with no interruption risk, ideal for steady 24x7 workloads."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Em carga estável de longo prazo, compromissos de consumo trazem melhor eficiência de custo.",
      "en": "For long-term stable workloads, consumption commitments provide better cost efficiency."
    }
  },
  {
    "id": 17,
    "title": {
      "pt-BR": "Well-Architected - Pilar de confiabilidade",
      "en": "Well-Architected - Reliability Pillar"
    },
    "description": {
      "pt-BR": "Uma revisão arquitetural precisa focar em recuperação automática, tolerância a falhas e testes de resiliência.",
      "en": "An architecture review must focus on automatic recovery, fault tolerance, and resilience testing."
    },
    "question": {
      "pt-BR": "Qual pilar está mais relacionado a esses objetivos?",
      "en": "Which pillar is most related to these goals?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O pilar de confiabilidade cobre recuperação automática de falhas, arquitetura tolerante a falhas e testes de resiliência (como game days e fault injection).",
          "en": "The reliability pillar covers automatic failure recovery, fault-tolerant architecture, and resilience testing (such as game days and fault injection)."
        }
      },
      {
        "title": {
          "pt-BR": "Eficiência de performance",
          "en": "Performance Efficiency"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Esse pilar trata de selecionar e ajustar recursos para atender à demanda com eficiência (tipos de instância, cache, escala); não é focado em recuperação de falhas.",
          "en": "This pillar is about selecting and tuning resources to meet demand efficiently (instance types, caching, scaling); it is not focused on failure recovery."
        }
      },
      {
        "title": {
          "pt-BR": "Excelência operacional",
          "en": "Operational Excellence"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Foca em processos de operação: runbooks, observabilidade, deploys em pequenas mudanças e melhoria contínua; recuperação automática e tolerância a falhas são o núcleo de outro pilar.",
          "en": "It focuses on operating processes: runbooks, observability, small incremental deployments, and continuous improvement; automatic recovery and fault tolerance are the core of another pillar."
        }
      },
      {
        "title": {
          "pt-BR": "Segurança",
          "en": "Security"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Trata de identidade, detecção, proteção de infraestrutura e de dados e resposta a incidentes de segurança, e não de tolerância a falhas da carga de trabalho.",
          "en": "It addresses identity, detection, infrastructure and data protection, and security incident response, not workload fault tolerance."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Quando o tema é continuidade e tolerância a falhas, o pilar-chave é Confiabilidade.",
      "en": "When the topic is continuity and fault tolerance, the key pillar is Reliability."
    }
  },
  {
    "id": 18,
    "title": {
      "pt-BR": "Containers em Kubernetes gerenciado",
      "en": "Containers on Managed Kubernetes"
    },
    "description": {
      "pt-BR": "A organização precisa de Kubernetes gerenciado com integração AWS e alta escalabilidade.",
      "en": "The organization needs managed Kubernetes with AWS integration and high scalability."
    },
    "question": {
      "pt-BR": "Qual serviço AWS é o mais apropriado?",
      "en": "Which AWS service is most appropriate?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon ECS com AWS Fargate",
          "en": "Amazon ECS with AWS Fargate"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "ECS é um orquestrador de containers gerenciado e proprietário da AWS; não expõe a API do Kubernetes nem executa manifests e ferramentas do ecossistema Kubernetes.",
          "en": "ECS is a managed, AWS-proprietary container orchestrator; it does not expose the Kubernetes API or run Kubernetes manifests and ecosystem tooling."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EKS",
          "en": "Amazon EKS"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "EKS oferece control plane Kubernetes gerenciado e altamente disponível, com integração a IAM, VPC, ELB e Auto Scaling.",
          "en": "EKS provides a managed, highly available Kubernetes control plane, integrated with IAM, VPC, ELB, and Auto Scaling."
        }
      },
      {
        "title": {
          "pt-BR": "AWS App Runner",
          "en": "AWS App Runner"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "App Runner executa aplicações web em containers sem gerenciar infraestrutura, mas não oferece um cluster nem a API do Kubernetes.",
          "en": "App Runner runs containerized web applications without managing infrastructure, but it does not provide a cluster or the Kubernetes API."
        }
      },
      {
        "title": {
          "pt-BR": "Kubernetes autogerenciado em EC2 com kOps",
          "en": "Self-managed Kubernetes on EC2 with kOps"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "É Kubernetes de fato, mas o control plane (etcd, API server, upgrades) é operado pela própria equipe; não é um serviço gerenciado.",
          "en": "It is real Kubernetes, but the control plane (etcd, API server, upgrades) is operated by the team itself; it is not a managed service."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para Kubernetes gerenciado em AWS, EKS é a resposta direta.",
      "en": "For managed Kubernetes on AWS, EKS is the direct answer."
    }
  },
  {
    "id": 19,
    "title": {
      "pt-BR": "Failover de aplicação - DNS com saúde",
      "en": "Application Failover - DNS with Health"
    },
    "description": {
      "pt-BR": "A empresa quer redirecionar tráfego para ambiente secundário quando o primário estiver indisponível.",
      "en": "The company wants to redirect traffic to a secondary environment when primary is unavailable."
    },
    "question": {
      "pt-BR": "Qual combinação é mais aderente?",
      "en": "Which combination is most aligned?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Alarme do CloudWatch notificando a equipe via SNS para trocar o DNS",
          "en": "CloudWatch alarm notifying the team via SNS to change DNS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Detecta a falha, mas a troca de registro DNS fica manual e depende de alguém agir, o que aumenta o tempo de indisponibilidade; não há redirecionamento automático.",
          "en": "It detects the failure, but the DNS record change is manual and depends on someone acting, which increases downtime; there is no automatic redirection."
        }
      },
      {
        "title": {
          "pt-BR": "Route 53 com política weighted 100/0 sem health checks",
          "en": "Route 53 with a 100/0 weighted policy without health checks"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Sem health checks associados, o Route 53 continua respondendo com o registro de peso 100 mesmo com o primário fora; seria preciso alterar os pesos manualmente.",
          "en": "Without associated health checks, Route 53 keeps answering with the weight-100 record even when the primary is down; the weights would have to be changed manually."
        }
      },
      {
        "title": {
          "pt-BR": "Route 53 com health checks e política de failover primário/secundário",
          "en": "Route 53 with health checks and primary/secondary failover policy"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Route 53 monitora o endpoint primário com health checks e, quando ele fica unhealthy, passa a responder automaticamente com o registro secundário.",
          "en": "Route 53 monitors the primary endpoint with health checks and, when it becomes unhealthy, automatically starts answering with the secondary record."
        }
      },
      {
        "title": {
          "pt-BR": "Route 53 com política simple retornando os IPs dos dois ambientes",
          "en": "Route 53 with a simple policy returning the IPs of both environments"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A política simple não suporta health checks: devolve todos os valores em ordem aleatória, então clientes continuam recebendo o IP do primário indisponível.",
          "en": "The simple policy does not support health checks: it returns all values in random order, so clients keep receiving the unavailable primary's IP."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para failover orientado a DNS com detecção de saúde, Route 53 é a solução clássica.",
      "en": "For DNS-driven failover with health detection, Route 53 is the classic solution."
    }
  },
  {
    "id": 20,
    "title": {
      "pt-BR": "Edge e proteção DDoS",
      "en": "Edge and DDoS Protection"
    },
    "description": {
      "pt-BR": "Uma aplicação pública precisa de proteção gerenciada contra ataques DDoS com integração à borda da AWS.",
      "en": "A public application needs managed DDoS protection integrated at AWS edge."
    },
    "question": {
      "pt-BR": "Qual serviço é mais apropriado para essa finalidade específica?",
      "en": "Which service is most appropriate for this specific purpose?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS WAF com regras rate-based",
          "en": "AWS WAF with rate-based rules"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Regras rate-based ajudam contra floods HTTP de camada 7, mas o WAF não mitiga ataques volumétricos de camadas 3/4; o serviço gerenciado dedicado a DDoS é outro.",
          "en": "Rate-based rules help against layer-7 HTTP floods, but WAF does not mitigate layer 3/4 volumetric attacks; the managed service dedicated to DDoS is a different one."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "GuardDuty detecta ameaças analisando logs (CloudTrail, VPC Flow Logs, DNS) e gera findings, mas não absorve nem mitiga tráfego de ataque na borda.",
          "en": "GuardDuty detects threats by analyzing logs (CloudTrail, VPC Flow Logs, DNS) and generates findings, but it does not absorb or mitigate attack traffic at the edge."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Network Firewall",
          "en": "AWS Network Firewall"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Network Firewall é um firewall stateful implantado dentro da VPC para inspeção e filtragem de tráfego; não atua nas edge locations da AWS para mitigar DDoS.",
          "en": "Network Firewall is a stateful firewall deployed inside the VPC for traffic inspection and filtering; it does not operate at AWS edge locations to mitigate DDoS."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Shield",
          "en": "AWS Shield"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Shield oferece proteção gerenciada contra DDoS integrada à borda (CloudFront, Route 53, Global Accelerator): o Standard é automático e o Advanced adiciona detecção avançada e suporte do Shield Response Team.",
          "en": "Shield provides managed DDoS protection integrated at the edge (CloudFront, Route 53, Global Accelerator): Standard is automatic and Advanced adds enhanced detection and Shield Response Team support."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para mitigação DDoS gerenciada em AWS, Shield é o serviço mais direto e especializado.",
      "en": "For managed DDoS mitigation on AWS, Shield is the most direct and specialized service."
    }
  }
];
