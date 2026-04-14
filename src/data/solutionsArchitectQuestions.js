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
          "pt-BR": "ALB distribuindo para instâncias em múltiplas AZs com Auto Scaling",
          "en": "ALB distributing to instances across multiple AZs with Auto Scaling"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Distribuição multi-AZ com balanceamento e escala automática reduz ponto único de falha e melhora disponibilidade.",
          "en": "Multi-AZ distribution with load balancing and auto scaling reduces single points of failure and improves availability."
        }
      },
      {
        "title": {
          "pt-BR": "Uma instância grande em uma única AZ",
          "en": "One large instance in a single AZ"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Mantém ponto único de falha dentro da AZ.",
          "en": "Keeps a single point of failure within the AZ."
        }
      },
      {
        "title": {
          "pt-BR": "Somente backup diário sem redundância ativa",
          "en": "Daily backup only without active redundancy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Backup ajuda recuperação, mas não garante continuidade imediata de serviço.",
          "en": "Backup helps recovery, but does not guarantee immediate service continuity."
        }
      },
      {
        "title": {
          "pt-BR": "CloudFront sem redundância de origem",
          "en": "CloudFront without origin redundancy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CDN não substitui arquitetura resiliente na camada de origem.",
          "en": "CDN does not replace resilient origin-layer architecture."
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
          "pt-BR": "RDS Single-AZ com snapshots automáticos",
          "en": "RDS Single-AZ with automated snapshots"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Snapshots ajudam recuperação, mas não entregam failover automático entre zonas.",
          "en": "Snapshots help recovery, but do not provide automatic cross-AZ failover."
        }
      },
      {
        "title": {
          "pt-BR": "RDS Multi-AZ",
          "en": "RDS Multi-AZ"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Multi-AZ mantém standby sincronizado e failover automático para alta disponibilidade.",
          "en": "Multi-AZ keeps synchronized standby and automatic failover for high availability."
        }
      },
      {
        "title": {
          "pt-BR": "Aurora Global Database",
          "en": "Aurora Global Database"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Aurora Global Database é voltado a failover multi-região, não é a resposta direta para failover de AZ nesta pergunta.",
          "en": "Aurora Global Database is aimed at multi-region failover, not the direct answer for AZ failover in this question."
        }
      },
      {
        "title": {
          "pt-BR": "Cross-Region Read Replica com failover manual",
          "en": "Cross-Region Read Replica with manual failover"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Isso melhora resiliência regional, mas ainda depende de intervenção e não é a menor latência de recuperação para falha de AZ.",
          "en": "This improves regional resilience, but it still depends on intervention and is not the fastest recovery for AZ failure."
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
          "pt-BR": "Aumentar somente CPU do writer",
          "en": "Only increase writer CPU"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Ajuda temporariamente, mas não resolve escala horizontal de leitura.",
          "en": "It helps temporarily, but does not solve horizontal read scaling."
        }
      },
      {
        "title": {
          "pt-BR": "Adicionar Amazon ElastiCache para consultas quentes sem mudar o banco",
          "en": "Add Amazon ElastiCache for hot queries without changing the database"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Cache reduz latência, mas não substitui a necessidade de leitura escalável no próprio banco relacional.",
          "en": "Cache reduces latency, but it does not replace the need for scalable reads in the relational database itself."
        }
      },
      {
        "title": {
          "pt-BR": "Criar Read Replicas e direcionar consultas de leitura",
          "en": "Create Read Replicas and route read queries"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Read Replicas ampliam capacidade de leitura sem impactar o nó primário de escrita.",
          "en": "Read Replicas increase read capacity without impacting the primary write node."
        }
      },
      {
        "title": {
          "pt-BR": "Desativar índices",
          "en": "Disable indexes"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Remover índices tende a degradar leituras.",
          "en": "Removing indexes tends to degrade reads."
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
          "pt-BR": "S3 + CloudTrail",
          "en": "S3 + CloudTrail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudTrail audita eventos, não otimiza entrega global de conteúdo.",
          "en": "CloudTrail audits events, it does not optimize global content delivery."
        }
      },
      {
        "title": {
          "pt-BR": "EBS + Route 53",
          "en": "EBS + Route 53"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "EBS não é armazenamento de distribuição web global.",
          "en": "EBS is not a global web distribution storage layer."
        }
      },
      {
        "title": {
          "pt-BR": "NAT Gateway + SQS",
          "en": "NAT Gateway + SQS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Não é um padrão de aceleração de conteúdo estático para usuários finais.",
          "en": "This is not a static content acceleration pattern for end users."
        }
      },
      {
        "title": {
          "pt-BR": "S3 como origem com CloudFront",
          "en": "S3 origin with CloudFront"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "CloudFront usa edge locations para reduzir latência global e aliviar origem S3.",
          "en": "CloudFront uses edge locations to reduce global latency and offload S3 origin."
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
          "pt-BR": "Fila SQS entre produtor e consumidor",
          "en": "SQS queue between producer and consumer"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "SQS desacopla ritmo de produção e consumo, aumentando resiliência e estabilidade.",
          "en": "SQS decouples production and consumption rates, increasing resilience and stability."
        }
      },
      {
        "title": {
          "pt-BR": "Chamada síncrona obrigatória entre serviços",
          "en": "Mandatory synchronous service call"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Síncrono aumenta acoplamento e propagação de falhas.",
          "en": "Synchronous calls increase coupling and failure propagation."
        }
      },
      {
        "title": {
          "pt-BR": "Salvar eventos em arquivo local",
          "en": "Store events in local file"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Não é solução distribuída confiável para arquitetura em nuvem.",
          "en": "It is not a reliable distributed cloud-architecture solution."
        }
      },
      {
        "title": {
          "pt-BR": "Aumentar timeout de todas as APIs",
          "en": "Increase timeout for all APIs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Timeout maior não resolve desacoplamento estrutural.",
          "en": "Longer timeout does not solve structural decoupling."
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
          "pt-BR": "Backup e restore manual",
          "en": "Backup and manual restore"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Costuma ter RTO mais alto por depender de restauração completa.",
          "en": "Usually has higher RTO due to full restoration dependency."
        }
      },
      {
        "title": {
          "pt-BR": "Multi-site ativo-ativo ou standby quente com failover automatizado",
          "en": "Active-active multi-site or warm standby with automated failover"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Estratégias com ambiente já operacional e failover automatizado entregam menor RTO/RPO.",
          "en": "Strategies with pre-operational environment and automated failover deliver lower RTO/RPO."
        }
      },
      {
        "title": {
          "pt-BR": "Pilot light sem automação de failover",
          "en": "Pilot light without failover automation"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Pode reduzir custo, mas pode não cumprir tempos mais agressivos.",
          "en": "It may reduce cost, but may not meet aggressive timing goals."
        }
      },
      {
        "title": {
          "pt-BR": "Somente snapshots semanais",
          "en": "Weekly snapshots only"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Não atende requisito crítico de perda mínima e retomada rápida.",
          "en": "It does not meet critical minimal-loss and fast-recovery requirements."
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
          "pt-BR": "AWS IAM",
          "en": "AWS IAM"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "IAM controla identidades, não bloqueio direto de padrões HTTP maliciosos.",
          "en": "IAM controls identities, not direct blocking of malicious HTTP patterns."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Budgets monitora custo, não segurança de tráfego web.",
          "en": "Budgets monitors costs, not web traffic security."
        }
      },
      {
        "title": {
          "pt-BR": "AWS WAF",
          "en": "AWS WAF"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "WAF aplica regras gerenciadas/customizadas para bloquear vetores comuns de ataque web.",
          "en": "WAF applies managed/custom rules to block common web attack vectors."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon SQS",
          "en": "Amazon SQS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "SQS é fila de mensagens, não firewall de aplicação web.",
          "en": "SQS is a messaging queue, not a web application firewall."
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
          "pt-BR": "AWS Systems Manager",
          "en": "AWS Systems Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Systems Manager gerencia operações de recursos, não estrutura de organizações.",
          "en": "Systems Manager manages resource operations, not organizational account structure."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Inspector é scanner de vulnerabilidades.",
          "en": "Inspector is a vulnerability scanner."
        }
      },
      {
        "title": {
          "pt-BR": "AWS IAM Identity Center sozinho",
          "en": "AWS IAM Identity Center alone"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Ajuda acesso centralizado, mas não substitui governança estrutural de contas.",
          "en": "It helps centralized access but does not replace structural account governance."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Organizations",
          "en": "AWS Organizations"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Organizations permite OU, SCPs e billing consolidado para governança multi-conta.",
          "en": "Organizations enables OUs, SCPs, and consolidated billing for multi-account governance."
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
          "pt-BR": "Direct Connect oferece enlace dedicado, com desempenho mais previsível que VPN sobre internet pública.",
          "en": "Direct Connect provides a dedicated link with more predictable performance than VPN over public internet."
        }
      },
      {
        "title": {
          "pt-BR": "VPC Peering",
          "en": "VPC Peering"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Peering conecta VPCs, não data center on-premises com enlace dedicado.",
          "en": "Peering connects VPCs, not on-prem data centers with dedicated circuits."
        }
      },
      {
        "title": {
          "pt-BR": "CloudFront",
          "en": "CloudFront"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudFront é CDN, não conectividade de rede privada híbrida.",
          "en": "CloudFront is CDN, not private hybrid network connectivity."
        }
      },
      {
        "title": {
          "pt-BR": "Elastic Load Balancing",
          "en": "Elastic Load Balancing"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "ELB distribui tráfego de aplicação, não estabelece circuito dedicado.",
          "en": "ELB distributes application traffic, it does not establish dedicated circuits."
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
          "pt-BR": "Amazon EC2",
          "en": "Amazon EC2"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Exigiria gestão de infraestrutura para algo que pode ser serverless.",
          "en": "It would require infrastructure management for a use case that can be serverless."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Athena",
          "en": "Amazon Athena"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Athena consulta dados em S3 via SQL serverless, sem gerenciar infraestrutura.",
          "en": "Athena queries S3 data via serverless SQL without infrastructure management."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon RDS",
          "en": "Amazon RDS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "RDS não é ideal para analytics ad hoc direto em data lake S3.",
          "en": "RDS is not ideal for ad-hoc analytics directly over S3 data lake."
        }
      },
      {
        "title": {
          "pt-BR": "AWS IAM",
          "en": "AWS IAM"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "IAM trata permissões, não execução de consultas analíticas.",
          "en": "IAM handles permissions, not analytical query execution."
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
          "pt-BR": "AWS Artifact",
          "en": "AWS Artifact"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Artifact fornece documentação de compliance.",
          "en": "Artifact provides compliance documentation."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Advisor dá recomendações periódicas, não monitoramento operacional contínuo.",
          "en": "Trusted Advisor gives periodic recommendations, not continuous operational monitoring."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudWatch",
          "en": "AWS CloudWatch"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "CloudWatch agrega métricas/logs e permite alarmes acionáveis.",
          "en": "CloudWatch aggregates metrics/logs and enables actionable alarms."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Organizations",
          "en": "AWS Organizations"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Organizations governa contas, não métricas de aplicação em tempo real.",
          "en": "Organizations governs accounts, not real-time application metrics."
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
          "pt-BR": "AWS Batch",
          "en": "AWS Batch"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Batch é orquestração de jobs computacionais, não política de backup corporativa.",
          "en": "Batch orchestrates compute jobs, not enterprise backup policy."
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
          "pt-BR": "AWS WAF",
          "en": "AWS WAF"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "WAF é proteção de camada web, não backup.",
          "en": "WAF is web-layer protection, not backup."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Backup",
          "en": "AWS Backup"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "AWS Backup centraliza políticas, agendamento e retenção em vários serviços e contas.",
          "en": "AWS Backup centralizes policies, scheduling, and retention across services and accounts."
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
          "pt-BR": "Roteamento por latência no Route 53 direciona usuários para região com melhor tempo de resposta.",
          "en": "Latency-based routing in Route 53 directs users to the region with best response time."
        }
      },
      {
        "title": {
          "pt-BR": "Route 53 com política weighted routing",
          "en": "Route 53 with weighted routing policy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Weighted routing distribui tráfego, mas não escolhe automaticamente a região de menor latência por usuário.",
          "en": "Weighted routing distributes traffic, but it does not automatically pick the lowest-latency region per user."
        }
      },
      {
        "title": {
          "pt-BR": "Route 53 com política geolocation",
          "en": "Route 53 with geolocation policy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Geolocation roteia por localização, mas o enunciado pede escolha por latência observada.",
          "en": "Geolocation routes by location, but the question asks for selection by observed latency."
        }
      },
      {
        "title": {
          "pt-BR": "CloudFront origin failover sem política de DNS",
          "en": "CloudFront origin failover without DNS policy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Pode ajudar disponibilidade de origem, mas não substitui roteamento DNS por latência.",
          "en": "It can help origin availability, but it does not replace latency-based DNS routing."
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
          "pt-BR": "AWS Systems Manager Parameter Store sem KMS",
          "en": "AWS Systems Manager Parameter Store without KMS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Pode armazenar parâmetros, mas não substitui gestão central de chaves de criptografia.",
          "en": "It can store parameters, but does not replace centralized encryption key management."
        }
      },
      {
        "title": {
          "pt-BR": "AWS KMS",
          "en": "AWS KMS"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "KMS é o serviço padrão para criação, rotação e controle de chaves criptográficas gerenciadas.",
          "en": "KMS is the standard service for creating, rotating, and controlling managed encryption keys."
        }
      },
      {
        "title": {
          "pt-BR": "CloudWatch Logs",
          "en": "CloudWatch Logs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudWatch Logs é observabilidade, não gestão de chaves.",
          "en": "CloudWatch Logs is observability, not key management."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Athena",
          "en": "Amazon Athena"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Athena é consulta SQL em S3, não gestão de criptografia.",
          "en": "Athena is SQL querying on S3, not encryption management."
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
          "pt-BR": "Amazon DynamoDB",
          "en": "Amazon DynamoDB"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Mudança para NoSQL exigiria adaptação significativa de modelo e código.",
          "en": "Switching to NoSQL would require significant model and code changes."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ElastiCache",
          "en": "Amazon ElastiCache"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "ElastiCache é camada de cache, não banco transacional primário.",
          "en": "ElastiCache is a caching layer, not a primary transactional database."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon RDS for PostgreSQL",
          "en": "Amazon RDS for PostgreSQL"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "RDS PostgreSQL preserva engine e reduz esforço operacional com serviço gerenciado.",
          "en": "RDS PostgreSQL preserves engine compatibility and reduces operational effort with managed service."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon OpenSearch",
          "en": "Amazon OpenSearch"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "OpenSearch é busca/analytics, não substituto direto para PostgreSQL transacional.",
          "en": "OpenSearch is search/analytics, not a direct replacement for transactional PostgreSQL."
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
          "pt-BR": "Somente On-Demand para toda a base",
          "en": "Only On-Demand for the entire baseline"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "On-Demand oferece flexibilidade, mas costuma ser mais caro para carga previsível constante.",
          "en": "On-Demand offers flexibility but is usually costlier for steady predictable workloads."
        }
      },
      {
        "title": {
          "pt-BR": "Spot para 100% da carga crítica",
          "en": "Spot for 100% of critical workload"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Spot pode ser interrompida e não é ideal como única base de carga crítica.",
          "en": "Spot can be interrupted and is not ideal as sole baseline for critical load."
        }
      },
      {
        "title": {
          "pt-BR": "Desligar instâncias aleatoriamente para economizar",
          "en": "Randomly stop instances to save cost"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Estratégia sem previsibilidade operacional e com alto risco de indisponibilidade.",
          "en": "A strategy with no operational predictability and high availability risk."
        }
      },
      {
        "title": {
          "pt-BR": "Savings Plans ou Reserved para baseline previsível",
          "en": "Savings Plans or Reserved for predictable baseline"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Compromissos de uso reduzem custo da carga estável mantendo provisionamento adequado.",
          "en": "Usage commitments reduce cost of stable workload while maintaining proper provisioning."
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
      "pt-BR": "Uma revisão arquitetural precisa focar recuperação automática, tolerância a falhas e testes de resiliência.",
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
          "pt-BR": "O pilar de confiabilidade aborda recuperação de falhas, escalabilidade e continuidade operacional.",
          "en": "The reliability pillar addresses failure recovery, scalability, and operational continuity."
        }
      },
      {
        "title": {
          "pt-BR": "Otimização de custos",
          "en": "Cost Optimization"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "É importante, mas não é o foco principal de tolerância a falhas.",
          "en": "Important, but not the primary focus for fault tolerance."
        }
      },
      {
        "title": {
          "pt-BR": "Excelência operacional",
          "en": "Operational Excellence"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Relaciona-se a processos e operação, porém a pergunta enfatiza resiliência/falhas.",
          "en": "It relates to processes and operations, but the question emphasizes resilience/failures."
        }
      },
      {
        "title": {
          "pt-BR": "Sustentabilidade",
          "en": "Sustainability"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Não é a principal dimensão para o cenário apresentado.",
          "en": "It is not the primary dimension for the presented scenario."
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
          "pt-BR": "Amazon ECS",
          "en": "Amazon ECS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "ECS é orquestrador de containers da AWS, mas não Kubernetes nativo.",
          "en": "ECS is AWS container orchestrator, but not native Kubernetes."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EKS",
          "en": "Amazon EKS"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "EKS oferece Kubernetes gerenciado com integração de serviços AWS.",
          "en": "EKS provides managed Kubernetes with AWS service integration."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Lambda",
          "en": "AWS Lambda"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Lambda é execução serverless de funções, não cluster Kubernetes.",
          "en": "Lambda is serverless function execution, not a Kubernetes cluster."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon S3",
          "en": "Amazon S3"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "S3 é armazenamento de objetos.",
          "en": "S3 is object storage."
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
          "pt-BR": "CloudWatch sozinho",
          "en": "CloudWatch alone"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Monitora, mas não executa roteamento DNS de failover por si só.",
          "en": "It monitors, but does not perform DNS failover routing by itself."
        }
      },
      {
        "title": {
          "pt-BR": "IAM role rotation",
          "en": "IAM role rotation"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Sem relação com roteamento/failover de tráfego de usuários.",
          "en": "Unrelated to user traffic routing/failover."
        }
      },
      {
        "title": {
          "pt-BR": "Route 53 com health checks e política de failover",
          "en": "Route 53 with health checks and failover policy"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Route 53 pode monitorar endpoints e alternar DNS automaticamente quando detectar indisponibilidade.",
          "en": "Route 53 can monitor endpoints and automatically switch DNS when unavailability is detected."
        }
      },
      {
        "title": {
          "pt-BR": "EBS snapshot",
          "en": "EBS snapshot"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Snapshot não executa failover de rota para aplicação online.",
          "en": "Snapshot does not perform route failover for online applications."
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
          "pt-BR": "AWS Glue",
          "en": "AWS Glue"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Glue é serviço de ETL e catálogo de dados.",
          "en": "Glue is an ETL and data catalog service."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon SES",
          "en": "Amazon SES"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "SES é envio de e-mail, não proteção contra DDoS.",
          "en": "SES is an email service, not DDoS protection."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Backup",
          "en": "AWS Backup"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Backup trata retenção e recuperação, não mitigação de ataque de borda.",
          "en": "Backup handles retention and recovery, not edge attack mitigation."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Shield",
          "en": "AWS Shield"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Shield oferece proteção gerenciada contra DDoS para recursos expostos na AWS.",
          "en": "Shield provides managed DDoS protection for exposed AWS resources."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para mitigação DDoS gerenciada em AWS, Shield é o serviço mais direto e especializado.",
      "en": "For managed DDoS mitigation on AWS, Shield is the most direct and specialized service."
    }
  }
];
