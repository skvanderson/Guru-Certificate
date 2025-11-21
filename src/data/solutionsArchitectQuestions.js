export const solutionsArchitectQuestions = [
  {
    id: 1,
    title: {
      "pt-BR": "Arquitetura de Microserviços - Padrões Avançados",
      "en": "Microservices Architecture - Advanced Patterns"
    },
    description: {
      "pt-BR": "Uma empresa financeira está migrando uma aplicação monolítica crítica para uma arquitetura de microserviços distribuída. A aplicação possui 50+ microserviços que se comunicam via mensageria assíncrona, processando 500.000 transações por minuto. Durante picos de tráfego (Black Friday, eventos sazonais), alguns serviços downstream apresentam latência elevada ou falhas intermitentes, causando cascata de timeouts e falhas em serviços upstream. A arquitetura atual usa SQS Standard Queues com retry exponencial, mas ainda sofre com propagação de falhas. Qual padrão arquitetural AWS resolve melhor este problema considerando throughput alto, baixa latência e resiliência?",
      "en": "A financial company is migrating a critical monolithic application to a distributed microservices architecture. The application has 50+ microservices communicating via asynchronous messaging, processing 500,000 transactions per minute. During traffic peaks (Black Friday, seasonal events), some downstream services experience high latency or intermittent failures, causing cascading timeouts and failures in upstream services. The current architecture uses SQS Standard Queues with exponential retry, but still suffers from failure propagation. Which AWS architectural pattern best solves this problem considering high throughput, low latency, and resilience?"
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
          "pt-BR": "Implementar Circuit Breaker com AWS Lambda, SQS FIFO Queues e Dead Letter Queues",
          "en": "Implement Circuit Breaker with AWS Lambda, SQS FIFO Queues and Dead Letter Queues"
        },
        correct: false,
        explanation: {
          "pt-BR": "SQS FIFO Queues garantem ordem de mensagens, mas têm throughput limitado (3.000 mensagens/segundo por fila) e latência mais alta que Standard Queues. Para processar 500.000 transações/minuto (8.333/segundo), FIFO Queues não escalam adequadamente. Além disso, FIFO Queues são mais caras e não são necessárias quando a ordem não é crítica. Standard Queues com Circuit Breaker e DLQ oferecem melhor throughput e latência para este caso.",
          "en": "SQS FIFO Queues guarantee message order, but have limited throughput (3,000 messages/second per queue) and higher latency than Standard Queues. To process 500,000 transactions/minute (8,333/second), FIFO Queues don't scale adequately. Additionally, FIFO Queues are more expensive and not necessary when order isn't critical. Standard Queues with Circuit Breaker and DLQ offer better throughput and latency for this case."
        }
      },
      {
        title: {
          "pt-BR": "Implementar Circuit Breaker com AWS Lambda, SQS Standard Queues com retry exponencial e SNS para notificações",
          "en": "Implement Circuit Breaker with AWS Lambda, SQS Standard Queues with exponential retry and SNS for notifications"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa SQS Standard Queues (escalável) e Circuit Breaker (previne cascata), mas falta Dead Letter Queues para capturar mensagens que falharam após múltiplas tentativas. SNS para notificações não resolve o problema de cascata de falhas nem oferece análise de mensagens falhadas. DLQ é essencial para identificar padrões de falha e reprocessar mensagens críticas. Sem DLQ, mensagens que falharam são perdidas ou ficam em loop infinito.",
          "en": "This solution uses SQS Standard Queues (scalable) and Circuit Breaker (prevents cascade), but lacks Dead Letter Queues to capture messages that failed after multiple attempts. SNS for notifications doesn't solve cascade failure problem nor offers analysis of failed messages. DLQ is essential to identify failure patterns and reprocess critical messages. Without DLQ, failed messages are lost or stuck in infinite loop."
        }
      },
      {
        title: {
          "pt-BR": "Implementar Circuit Breaker com AWS Lambda, SQS Standard Queues, Dead Letter Queues e Step Functions para orquestração",
          "en": "Implement Circuit Breaker with AWS Lambda, SQS Standard Queues, Dead Letter Queues and Step Functions for orchestration"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui Circuit Breaker, SQS Standard Queues e DLQ (componentes corretos), mas adiciona Step Functions desnecessariamente. Step Functions é para orquestração de workflows complexos, não para prevenir cascata de falhas em comunicação assíncrona entre microserviços. Para comunicação assíncrona de alta throughput (500.000 transações/minuto), Step Functions adiciona latência e custo desnecessários. A solução correta é Circuit Breaker + SQS Standard + DLQ, sem Step Functions.",
          "en": "This solution includes Circuit Breaker, SQS Standard Queues and DLQ (correct components), but unnecessarily adds Step Functions. Step Functions is for orchestrating complex workflows, not for preventing cascade failures in asynchronous communication between microservices. For high-throughput asynchronous communication (500,000 transactions/minute), Step Functions adds unnecessary latency and cost. The correct solution is Circuit Breaker + SQS Standard + DLQ, without Step Functions."
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
      "pt-BR": "Uma aplicação crítica de pagamentos processa 1 milhão de transações por dia com picos de 50.000 transações/hora durante eventos. A aplicação armazena dados transacionais em RDS MySQL Multi-AZ, arquivos de configuração e logs em S3, e processa eventos via Lambda functions. A empresa precisa garantir RTO de 15 minutos e RPO de 5 minutos mesmo em caso de falha de região inteira. A aplicação deve manter consistência transacional e não pode perder dados financeiros. Considerando que algumas transações são críticas e precisam de replicação síncrona, enquanto outras podem tolerar replicação assíncrona, qual estratégia de disaster recovery atende melhor estes requisitos?",
      "en": "A critical payment application processes 1 million transactions per day with peaks of 50,000 transactions/hour during events. The application stores transactional data in RDS MySQL Multi-AZ, configuration files and logs in S3, and processes events via Lambda functions. The company needs to guarantee RTO of 15 minutes and RPO of 5 minutes even in case of entire region failure. The application must maintain transactional consistency and cannot lose financial data. Considering that some transactions are critical and need synchronous replication, while others can tolerate asynchronous replication, which disaster recovery strategy best meets these requirements?"
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
          "pt-BR": "RDS Multi-AZ com Continuous Backups, S3 Cross-Region Replication e Lambda deployment em múltiplas regiões com Route 53 failover",
          "en": "RDS Multi-AZ with Continuous Backups, S3 Cross-Region Replication and Lambda deployment in multiple regions with Route 53 failover"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS Multi-AZ com Continuous Backups oferece RPO baixo (até 5 minutos) e RTO rápido dentro da mesma região, mas se a região inteira falhar, não há failover automático para outra região. Route 53 pode fazer failover de DNS, mas RDS Multi-AZ não replica automaticamente para outra região - você precisaria restaurar de backup cross-region, o que leva muito mais que 15 minutos. Para RTO de 15 minutos em caso de falha regional, é necessário RDS Cross-Region Read Replica com failover automático, não apenas Multi-AZ.",
          "en": "RDS Multi-AZ with Continuous Backups offers low RPO (up to 5 minutes) and fast RTO within the same region, but if the entire region fails, there's no automatic failover to another region. Route 53 can do DNS failover, but RDS Multi-AZ doesn't automatically replicate to another region - you would need to restore from cross-region backup, which takes much more than 15 minutes. For 15-minute RTO in case of regional failure, RDS Cross-Region Read Replica with automatic failover is needed, not just Multi-AZ."
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
          "pt-BR": "RDS Cross-Region Read Replica com failover manual, S3 CRR, e Lambda deployment em múltiplas regiões",
          "en": "RDS Cross-Region Read Replica with manual failover, S3 CRR, and Lambda deployment in multiple regions"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS Cross-Region Read Replica replica dados assincronamente (RPO de ~5 minutos), mas failover manual não atende RTO de 15 minutos: requer intervenção humana, configuração manual de DNS, promoção manual da réplica, e verificação de integridade, o que pode levar 30-60 minutos. Para RTO de 15 minutos, failover automático é essencial. Além disso, Read Replica é apenas para leitura - para escrita após failover, é necessário promover manualmente, o que adiciona latência.",
          "en": "RDS Cross-Region Read Replica replicates data asynchronously (RPO of ~5 minutes), but manual failover doesn't meet 15-minute RTO: requires human intervention, manual DNS configuration, manual replica promotion, and integrity verification, which can take 30-60 minutes. For 15-minute RTO, automatic failover is essential. Additionally, Read Replica is read-only - for writes after failover, manual promotion is needed, which adds latency."
        }
      },
      {
        title: {
          "pt-BR": "RDS Cross-Region Automated Backups com restauração automática, S3 CRR, Lambda em múltiplas regiões e Route 53 health checks",
          "en": "RDS Cross-Region Automated Backups with automatic restoration, S3 CRR, Lambda in multiple regions and Route 53 health checks"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS Cross-Region Automated Backups replica backups para outra região, mas restauração automática de backup não atende RTO de 15 minutos: restaurar um backup de RDS leva 15-30 minutos dependendo do tamanho do banco, mais tempo para configurar instâncias e promover. Para 1 milhão de transações/dia, o banco pode ter vários GB, tornando a restauração muito lenta. Cross-Region Read Replica com failover automático é muito mais rápido (promoção em segundos) que restaurar de backup.",
          "en": "RDS Cross-Region Automated Backups replicates backups to another region, but automatic backup restoration doesn't meet 15-minute RTO: restoring an RDS backup takes 15-30 minutes depending on database size, plus time to configure instances and promote. For 1 million transactions/day, the database may have several GB, making restoration very slow. Cross-Region Read Replica with automatic failover is much faster (promotion in seconds) than restoring from backup."
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
      "pt-BR": "Uma plataforma de streaming de vídeo tem 10 milhões de usuários ativos simultâneos, servindo 500TB de conteúdo diariamente. O conteúdo inclui vídeos longos (2GB, 4K), thumbnails (500KB), transcodificações múltiplas (720p, 1080p, 4K), e metadados JSON. 80% do tráfego vem de 3 regiões específicas (América do Norte, Europa, Ásia), mas há picos sazonais em outras regiões. Os padrões de acesso são imprevisíveis: vídeos virais podem ter 100x aumento de tráfego em horas, enquanto conteúdo antigo raramente é acessado. A empresa precisa otimizar custos de transferência (que representam 40% do custo total) e manter latência abaixo de 200ms para 95% das requisições. Qual estratégia de cache é mais eficiente considerando TTL dinâmico, invalidação inteligente e otimização de custos?",
      "en": "A video streaming platform has 10 million concurrent active users, serving 500TB of content daily. Content includes long videos (2GB, 4K), thumbnails (500KB), multiple transcodings (720p, 1080p, 4K), and JSON metadata. 80% of traffic comes from 3 specific regions (North America, Europe, Asia), but there are seasonal peaks in other regions. Access patterns are unpredictable: viral videos can have 100x traffic increase in hours, while old content is rarely accessed. The company needs to optimize transfer costs (which represent 40% of total cost) and maintain latency below 200ms for 95% of requests. Which caching strategy is most efficient considering dynamic TTL, intelligent invalidation and cost optimization?"
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
          "pt-BR": "CloudFront com S3 como origem, cache diferenciado por tipo de conteúdo (vídeos 7 dias, thumbnails 30 dias), e invalidação manual via API",
          "en": "CloudFront with S3 as origin, differentiated cache by content type (videos 7 days, thumbnails 30 days), and manual invalidation via API"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa cache diferenciado (correto), mas invalidação manual via API não escala para conteúdo viral que precisa de atualização imediata quando há picos de tráfego. Para vídeos virais com 100x aumento de tráfego em horas, invalidação manual é lenta e propensa a erros. Lambda@Edge permite invalidação automática baseada em padrões de acesso, comportamento do usuário e região, otimizando cache dinamicamente. Além disso, cache fixo de 7 dias para vídeos não se adapta a padrões de acesso imprevisíveis - vídeos populares podem precisar de cache mais longo, enquanto vídeos antigos podem ter cache mais curto.",
          "en": "This solution uses differentiated cache (correct), but manual invalidation via API doesn't scale for viral content that needs immediate updates when there are traffic spikes. For viral videos with 100x traffic increase in hours, manual invalidation is slow and error-prone. Lambda@Edge allows automatic invalidation based on access patterns, user behavior and region, dynamically optimizing cache. Additionally, fixed 7-day cache for videos doesn't adapt to unpredictable access patterns - popular videos may need longer cache, while old videos may have shorter cache."
        }
      },
      {
        title: {
          "pt-BR": "CloudFront com S3 como origem, cache uniforme de 24h, Lambda@Edge para personalização de headers, e ElastiCache Redis para cache de metadados",
          "en": "CloudFront with S3 as origin, uniform 24h cache, Lambda@Edge for header customization, and ElastiCache Redis for metadata cache"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa CloudFront e Lambda@Edge (componentes corretos), mas cache uniforme de 24h não otimiza custos: vídeos grandes (2GB) raramente acessados desperdiçam espaço de cache, enquanto thumbnails pequenos (500KB) frequentemente acessados precisariam de cache mais longo. ElastiCache Redis para metadados adiciona complexidade e custo desnecessários - CloudFront pode cachear metadados JSON eficientemente. Para otimizar os 40% de custos de transferência, cache diferenciado por tipo de conteúdo é essencial, não cache uniforme.",
          "en": "This solution uses CloudFront and Lambda@Edge (correct components), but uniform 24h cache doesn't optimize costs: rarely accessed large videos (2GB) waste cache space, while frequently accessed small thumbnails (500KB) would need longer cache. ElastiCache Redis for metadata adds unnecessary complexity and cost - CloudFront can efficiently cache JSON metadata. To optimize the 40% transfer costs, differentiated cache by content type is essential, not uniform cache."
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
          "pt-BR": "CloudFront com S3 como origem, cache diferenciado por tipo de conteúdo, Lambda@Edge para personalização e invalidação inteligente, e CloudFront Origin Shield para cache adicional",
          "en": "CloudFront with S3 as origin, differentiated cache by content type, Lambda@Edge for customization and intelligent invalidation, and CloudFront Origin Shield for additional cache"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes corretos (cache diferenciado, Lambda@Edge), mas adiciona Origin Shield que pode não ser necessário para este caso. Origin Shield é útil quando há muitas edge locations fazendo requisições para a origem, mas para 80% do tráfego vindo de 3 regiões, o benefício é limitado e adiciona latência extra (uma camada adicional de cache). Para otimizar latência abaixo de 200ms para 95% das requisições, cache direto em edge locations sem Origin Shield é mais eficiente. A solução correta é cache diferenciado + Lambda@Edge, sem Origin Shield.",
          "en": "This solution includes all correct components (differentiated cache, Lambda@Edge), but adds Origin Shield which may not be necessary for this case. Origin Shield is useful when there are many edge locations making requests to origin, but for 80% of traffic coming from 3 regions, the benefit is limited and adds extra latency (an additional cache layer). To optimize latency below 200ms for 95% of requests, direct cache at edge locations without Origin Shield is more efficient. The correct solution is differentiated cache + Lambda@Edge, without Origin Shield."
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
      "pt-BR": "Uma empresa financeira multinacional precisa implementar uma arquitetura Zero Trust completa para atender regulamentações GDPR, PCI-DSS e SOX. A aplicação possui 15 VPCs distribuídas em 5 regiões AWS, com 200+ microserviços que se comunicam via APIs REST e gRPC. Há APIs públicas expostas via internet, APIs privadas entre VPCs, e integrações com sistemas on-premises via Direct Connect. A empresa processa 5 milhões de transações financeiras diárias com dados altamente sensíveis (PII, dados de cartão de crédito). Todos os acessos precisam ser verificados continuamente, não apenas na autenticação inicial. A arquitetura deve prevenir lateral movement entre VPCs, detectar ameaças em tempo real, e manter auditoria completa de todas as ações para compliance. Qual combinação de serviços AWS implementa melhor Zero Trust considerando verificação contínua, segmentação de rede, detecção de ameaças e compliance?",
      "en": "A multinational financial company needs to implement a complete Zero Trust architecture to meet GDPR, PCI-DSS and SOX regulations. The application has 15 VPCs distributed across 5 AWS regions, with 200+ microservices communicating via REST and gRPC APIs. There are public APIs exposed via internet, private APIs between VPCs, and integrations with on-premises systems via Direct Connect. The company processes 5 million financial transactions daily with highly sensitive data (PII, credit card data). All access must be continuously verified, not just at initial authentication. The architecture must prevent lateral movement between VPCs, detect threats in real-time, and maintain complete audit trail of all actions for compliance. Which combination of AWS services best implements Zero Trust considering continuous verification, network segmentation, threat detection and compliance?"
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
          "pt-BR": "AWS PrivateLink, VPC Endpoints, AWS WAF, AWS Shield Advanced, CloudTrail, e GuardDuty",
          "en": "AWS PrivateLink, VPC Endpoints, AWS WAF, AWS Shield Advanced, CloudTrail, and GuardDuty"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta combinação cobre conectividade privada (PrivateLink, VPC Endpoints), proteção de APIs (WAF), proteção DDoS (Shield Advanced), auditoria (CloudTrail) e detecção de ameaças (GuardDuty), mas falta AWS Config para compliance contínuo e governança. Para atender regulamentações GDPR, PCI-DSS e SOX, é necessário Config com regras customizadas para verificar continuamente conformidade de recursos, detectar mudanças não autorizadas, e gerar relatórios de compliance. Sem Config, não há verificação contínua de conformidade de configurações, o que é essencial para Zero Trust e compliance financeiro.",
          "en": "This combination covers private connectivity (PrivateLink, VPC Endpoints), API protection (WAF), DDoS protection (Shield Advanced), auditing (CloudTrail) and threat detection (GuardDuty), but lacks AWS Config for continuous compliance and governance. To meet GDPR, PCI-DSS and SOX regulations, Config with custom rules is needed to continuously verify resource compliance, detect unauthorized changes, and generate compliance reports. Without Config, there's no continuous verification of configuration compliance, which is essential for Zero Trust and financial compliance."
        }
      },
      {
        title: {
          "pt-BR": "AWS PrivateLink, VPC Endpoints, AWS WAF, AWS Shield Standard, CloudTrail, GuardDuty, e AWS Config com regras padrão",
          "en": "AWS PrivateLink, VPC Endpoints, AWS WAF, AWS Shield Standard, CloudTrail, GuardDuty, and AWS Config with default rules"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes necessários, mas AWS Shield Standard oferece proteção DDoS básica apenas, não Shield Advanced que oferece proteção DDoS avançada, proteção contra ataques sofisticados, e suporte 24/7 do DRT (DDoS Response Team). Para uma empresa financeira processando 5 milhões de transações diárias, Shield Advanced é essencial. Além disso, Config com regras padrão pode não atender requisitos específicos de GDPR, PCI-DSS e SOX - regras customizadas são necessárias para verificar compliance específico do setor financeiro.",
          "en": "This solution includes all necessary components, but AWS Shield Standard offers only basic DDoS protection, not Shield Advanced which offers advanced DDoS protection, protection against sophisticated attacks, and 24/7 support from DRT (DDoS Response Team). For a financial company processing 5 million daily transactions, Shield Advanced is essential. Additionally, Config with default rules may not meet specific GDPR, PCI-DSS and SOX requirements - custom rules are needed to verify financial sector-specific compliance."
        }
      },
      {
        title: {
          "pt-BR": "AWS PrivateLink, VPC Endpoints, AWS WAF, AWS Shield Advanced, CloudTrail, GuardDuty, AWS Config com regras customizadas, e AWS Security Hub para agregação",
          "en": "AWS PrivateLink, VPC Endpoints, AWS WAF, AWS Shield Advanced, CloudTrail, GuardDuty, AWS Config with custom rules, and AWS Security Hub for aggregation"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes essenciais para Zero Trust (PrivateLink, VPC Endpoints, WAF, Shield Advanced, CloudTrail, GuardDuty, Config com regras customizadas) e adiciona Security Hub. Security Hub agrega findings de múltiplos serviços de segurança, mas não é um requisito obrigatório para implementar Zero Trust - é uma ferramenta de visibilidade adicional. A solução correta é a mesma sem Security Hub, pois Security Hub não adiciona proteção, apenas centraliza informações. Para Zero Trust completo, os componentes essenciais são suficientes.",
          "en": "This solution includes all essential components for Zero Trust (PrivateLink, VPC Endpoints, WAF, Shield Advanced, CloudTrail, GuardDuty, Config with custom rules) and adds Security Hub. Security Hub aggregates findings from multiple security services, but isn't a mandatory requirement to implement Zero Trust - it's an additional visibility tool. The correct solution is the same without Security Hub, as Security Hub doesn't add protection, only centralizes information. For complete Zero Trust, the essential components are sufficient."
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
      "pt-BR": "Uma empresa de e-commerce global precisa processar 100TB de dados diários de múltiplas fontes heterogêneas: 50 milhões de eventos de clickstream por hora via APIs, 10TB de logs de aplicação de 500+ microserviços, 30TB de dados transacionais de RDS e DynamoDB, 20TB de dados de comportamento do usuário de sistemas externos, e 40TB de dados de marketing e campanhas. Os dados precisam ser processados em tempo real (latência < 1 segundo) para personalização de recomendações e detecção de fraude, e em batch (latência de horas) para relatórios analíticos e machine learning. A arquitetura deve suportar queries SQL complexas sobre dados históricos, processamento de streams em tempo real, e armazenamento econômico de dados não estruturados. Qual arquitetura AWS é mais adequada considerando throughput alto, processamento híbrido (real-time + batch), e otimização de custos?",
      "en": "A global e-commerce company needs to process 100TB of daily data from multiple heterogeneous sources: 50 million clickstream events per hour via APIs, 10TB of application logs from 500+ microservices, 30TB of transactional data from RDS and DynamoDB, 20TB of user behavior data from external systems, and 40TB of marketing and campaign data. Data needs to be processed in real-time (latency < 1 second) for recommendation personalization and fraud detection, and in batch (hours latency) for analytical reports and machine learning. The architecture must support complex SQL queries on historical data, real-time stream processing, and economical storage of unstructured data. Which AWS architecture is most suitable considering high throughput, hybrid processing (real-time + batch), and cost optimization?"
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
          "pt-BR": "S3 Data Lake + Kinesis Data Firehose + Kinesis Analytics + Redshift Spectrum + Glue para ETL",
          "en": "S3 Data Lake + Kinesis Data Firehose + Kinesis Analytics + Redshift Spectrum + Glue for ETL"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa S3 Data Lake (correto), Kinesis Analytics (tempo real), Redshift Spectrum (batch), mas Kinesis Data Firehose não processa streams em tempo real - ele apenas carrega dados em S3 com latência de minutos. Para processar 50 milhões de eventos/hora com latência < 1 segundo para personalização e detecção de fraude, é necessário Kinesis Data Streams que oferece processamento de streams em tempo real com baixa latência. Firehose é adequado para carregar dados em S3, mas não para processamento em tempo real.",
          "en": "This solution uses S3 Data Lake (correct), Kinesis Analytics (real-time), Redshift Spectrum (batch), but Kinesis Data Firehose doesn't process streams in real-time - it only loads data to S3 with minutes latency. To process 50 million events/hour with latency < 1 second for personalization and fraud detection, Kinesis Data Streams is needed which offers real-time stream processing with low latency. Firehose is suitable for loading data to S3, but not for real-time processing."
        }
      },
      {
        title: {
          "pt-BR": "S3 Data Lake + Kinesis Data Streams + Kinesis Analytics + Redshift (cluster dedicado) + Glue para ETL",
          "en": "S3 Data Lake + Kinesis Data Streams + Kinesis Analytics + Redshift (dedicated cluster) + Glue for ETL"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa Kinesis Data Streams (correto para tempo real), mas Redshift cluster dedicado requer mover dados de S3 para Redshift, o que adiciona custo de armazenamento duplicado e latência. Para 100TB diários, manter dados em S3 e usar Redshift Spectrum para queries SQL é muito mais econômico - você paga apenas por queries executadas, não por armazenamento duplicado. Redshift cluster dedicado é caro para este volume e não é necessário quando Redshift Spectrum pode consultar dados diretamente em S3.",
          "en": "This solution uses Kinesis Data Streams (correct for real-time), but Redshift dedicated cluster requires moving data from S3 to Redshift, which adds duplicate storage cost and latency. For 100TB daily, keeping data in S3 and using Redshift Spectrum for SQL queries is much more economical - you only pay for executed queries, not duplicate storage. Redshift dedicated cluster is expensive for this volume and not necessary when Redshift Spectrum can query data directly in S3."
        }
      },
      {
        title: {
          "pt-BR": "S3 Data Lake + Kinesis Data Streams + Kinesis Analytics + Redshift Spectrum + Athena para queries ad-hoc",
          "en": "S3 Data Lake + Kinesis Data Streams + Kinesis Analytics + Redshift Spectrum + Athena for ad-hoc queries"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes corretos (S3 Data Lake, Kinesis Data Streams para tempo real, Kinesis Analytics, Redshift Spectrum para batch), mas adiciona Athena que é redundante. Athena e Redshift Spectrum ambos consultam dados em S3 usando SQL, mas Redshift Spectrum é mais adequado para queries analíticas complexas e workloads batch, enquanto Athena é para queries ad-hoc exploratórias. Para uma arquitetura de data lake completa, Redshift Spectrum é suficiente para analytics batch, e Athena adiciona complexidade e custo desnecessários. A solução correta é S3 + Kinesis Data Streams + Kinesis Analytics + Redshift Spectrum, sem Athena.",
          "en": "This solution includes all correct components (S3 Data Lake, Kinesis Data Streams for real-time, Kinesis Analytics, Redshift Spectrum for batch), but adds Athena which is redundant. Both Athena and Redshift Spectrum query data in S3 using SQL, but Redshift Spectrum is more suitable for complex analytical queries and batch workloads, while Athena is for exploratory ad-hoc queries. For a complete data lake architecture, Redshift Spectrum is sufficient for batch analytics, and Athena adds unnecessary complexity and cost. The correct solution is S3 + Kinesis Data Streams + Kinesis Analytics + Redshift Spectrum, without Athena."
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
      "pt-BR": "Uma aplicação de IoT industrial processa 1 milhão de eventos por minuto de 500.000 sensores distribuídos globalmente em 50 países. Cada evento contém telemetria de sensores (temperatura, pressão, vibração), metadados de localização, timestamp, e status do dispositivo. Os eventos precisam ser validados (schema validation, range checks), transformados (normalização, enriquecimento com dados de referência), armazenados em banco de dados para análise histórica, e podem disparar ações em tempo real (alertas críticos, acionamento de atuadores). Alguns eventos são críticos (anomalias de segurança, falhas de equipamento) e precisam de processamento garantido com retry automático e Dead Letter Queue. A aplicação deve tolerar falhas de dispositivos individuais, latência variável de rede, e picos de tráfego durante manutenções programadas. Qual arquitetura serverless é mais robusta considerando throughput alto, processamento garantido, e resiliência a falhas?",
      "en": "An industrial IoT application processes 1 million events per minute from 500,000 sensors distributed globally across 50 countries. Each event contains sensor telemetry (temperature, pressure, vibration), location metadata, timestamp, and device status. Events need to be validated (schema validation, range checks), transformed (normalization, enrichment with reference data), stored in database for historical analysis, and can trigger real-time actions (critical alerts, actuator activation). Some events are critical (security anomalies, equipment failures) and need guaranteed processing with automatic retry and Dead Letter Queue. The application must tolerate individual device failures, variable network latency, and traffic spikes during scheduled maintenance. Which serverless architecture is most robust considering high throughput, guaranteed processing, and failure resilience?"
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
          "pt-BR": "IoT Core + Kinesis Data Streams + Lambda (com retry automático) + DynamoDB + SNS para eventos críticos",
          "en": "IoT Core + Kinesis Data Streams + Lambda (with automatic retry) + DynamoDB + SNS for critical events"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa Kinesis Data Streams (correto para alta throughput) e Lambda com retry automático, mas falta Dead Letter Queue (DLQ) para capturar eventos críticos que falharam após múltiplas tentativas. Para eventos críticos de segurança e falhas de equipamento que precisam de processamento garantido, DLQ é essencial para identificar padrões de falha, reprocessar eventos críticos manualmente, e evitar perda de dados importantes. Retry automático sozinho não garante que eventos críticos sejam processados - se um evento falhar após todas as tentativas, ele é perdido sem DLQ.",
          "en": "This solution uses Kinesis Data Streams (correct for high throughput) and Lambda with automatic retry, but lacks Dead Letter Queue (DLQ) to capture critical events that failed after multiple attempts. For critical security and equipment failure events that need guaranteed processing, DLQ is essential to identify failure patterns, manually reprocess critical events, and avoid loss of important data. Automatic retry alone doesn't guarantee critical events are processed - if an event fails after all attempts, it's lost without DLQ."
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
          "pt-BR": "IoT Core + Kinesis Data Firehose + Lambda + DynamoDB + SNS para eventos críticos + DLQ",
          "en": "IoT Core + Kinesis Data Firehose + Lambda + DynamoDB + SNS for critical events + DLQ"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui DLQ (correto), mas usa Kinesis Data Firehose que não processa streams em tempo real - Firehose apenas carrega dados em S3 com latência de minutos. Para processar 1 milhão de eventos/minuto com ações em tempo real (alertas críticos, acionamento de atuadores), é necessário Kinesis Data Streams que oferece processamento de streams com latência de segundos. Firehose é adequado para carregar dados históricos em S3, mas não para processamento em tempo real que requer baixa latência.",
          "en": "This solution includes DLQ (correct), but uses Kinesis Data Firehose which doesn't process streams in real-time - Firehose only loads data to S3 with minutes latency. To process 1 million events/minute with real-time actions (critical alerts, actuator activation), Kinesis Data Streams is needed which offers stream processing with seconds latency. Firehose is suitable for loading historical data to S3, but not for real-time processing that requires low latency."
        }
      },
      {
        title: {
          "pt-BR": "IoT Core + Kinesis Data Streams + Lambda (com DLQ) + DynamoDB + SNS para eventos críticos + Step Functions para orquestração",
          "en": "IoT Core + Kinesis Data Streams + Lambda (with DLQ) + DynamoDB + SNS for critical events + Step Functions for orchestration"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes corretos (IoT Core, Kinesis Data Streams, Lambda com DLQ, DynamoDB, SNS), mas adiciona Step Functions desnecessariamente. Step Functions é para orquestração de workflows complexos com múltiplas etapas, não para processamento de streams de IoT em tempo real. Para processar 1 milhão de eventos/minuto de sensores, Kinesis Data Streams + Lambda é suficiente - Step Functions adiciona latência e custo desnecessários. A solução correta é IoT Core + Kinesis Data Streams + Lambda (com DLQ) + DynamoDB + SNS, sem Step Functions.",
          "en": "This solution includes all correct components (IoT Core, Kinesis Data Streams, Lambda with DLQ, DynamoDB, SNS), but unnecessarily adds Step Functions. Step Functions is for orchestrating complex multi-step workflows, not for real-time IoT stream processing. To process 1 million events/minute from sensors, Kinesis Data Streams + Lambda is sufficient - Step Functions adds unnecessary latency and cost. The correct solution is IoT Core + Kinesis Data Streams + Lambda (with DLQ) + DynamoDB + SNS, without Step Functions."
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
      "pt-BR": "Uma empresa multinacional de manufatura tem data centers críticos em 5 países (EUA, Alemanha, Japão, Brasil, Índia) processando dados sensíveis de produção industrial. A empresa precisa conectar todos os data centers à AWS com redundância (99.99% disponibilidade), baixa latência (< 50ms para aplicações críticas), e compliance com regulamentações locais (GDPR na Europa, LGPD no Brasil, etc.). Alguns workloads críticos de controle industrial precisam permanecer on-premises por requisitos de latência ultra-baixa (< 10ms) e compliance regulatório. A empresa processa 10TB de dados diários entre on-premises e AWS, com picos de 500GB/hora durante operações de manufatura. A conectividade deve tolerar falhas de link, ter failover automático, e suportar múltiplos protocolos (TCP, UDP, HTTP/HTTPS). Qual solução AWS oferece a melhor conectividade híbrida considerando redundância, baixa latência, compliance e failover automático?",
      "en": "A multinational manufacturing company has critical data centers in 5 countries (USA, Germany, Japan, Brazil, India) processing sensitive industrial production data. The company needs to connect all data centers to AWS with redundancy (99.99% availability), low latency (< 50ms for critical applications), and compliance with local regulations (GDPR in Europe, LGPD in Brazil, etc.). Some critical industrial control workloads need to remain on-premises due to ultra-low latency requirements (< 10ms) and regulatory compliance. The company processes 10TB of daily data between on-premises and AWS, with peaks of 500GB/hour during manufacturing operations. Connectivity must tolerate link failures, have automatic failover, and support multiple protocols (TCP, UDP, HTTP/HTTPS). Which AWS solution offers the best hybrid connectivity considering redundancy, low latency, compliance and automatic failover?"
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
          "pt-BR": "VPN Site-to-Site com múltiplos links + AWS Outposts para workloads críticos",
          "en": "Site-to-Site VPN with multiple links + AWS Outposts for critical workloads"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa Outposts (correto para workloads on-premises), mas VPN Site-to-Site mesmo com múltiplos links não oferece baixa latência garantida (< 50ms) nem largura de banda dedicada - depende da internet pública com latência variável. Para processar 10TB diários com picos de 500GB/hora e latência < 50ms para aplicações críticas, Direct Connect é necessário para oferecer conexão dedicada de baixa latência. VPN pode ser usado como backup, mas não como solução principal para requisitos de baixa latência e alta throughput.",
          "en": "This solution uses Outposts (correct for on-premises workloads), but Site-to-Site VPN even with multiple links doesn't offer guaranteed low latency (< 50ms) nor dedicated bandwidth - depends on public internet with variable latency. To process 10TB daily with peaks of 500GB/hour and latency < 50ms for critical applications, Direct Connect is needed to offer dedicated low-latency connection. VPN can be used as backup, but not as primary solution for low latency and high throughput requirements."
        }
      },
      {
        title: {
          "pt-BR": "AWS Direct Connect sem redundância + AWS Outposts para workloads críticos",
          "en": "AWS Direct Connect without redundancy + AWS Outposts for critical workloads"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa Direct Connect e Outposts (componentes corretos), mas Direct Connect sem redundância é um ponto único de falha crítico. Para uma empresa multinacional com data centers em 5 países processando dados críticos de manufatura, se a conexão Direct Connect falhar, toda a conectividade é perdida. Para 99.99% de disponibilidade, redundância é essencial - VPN como backup garante continuidade em caso de falha do Direct Connect, permitindo failover automático e mantendo conectividade mesmo durante manutenções ou falhas de link.",
          "en": "This solution uses Direct Connect and Outposts (correct components), but Direct Connect without redundancy is a critical single point of failure. For a multinational company with data centers in 5 countries processing critical manufacturing data, if the Direct Connect connection fails, all connectivity is lost. For 99.99% availability, redundancy is essential - VPN as backup ensures continuity in case of Direct Connect failure, allowing automatic failover and maintaining connectivity even during maintenance or link failures."
        }
      },
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
          "pt-BR": "AWS Direct Connect + VPN como backup + AWS Outposts para workloads críticos + Transit Gateway para conectividade centralizada",
          "en": "AWS Direct Connect + VPN as backup + AWS Outposts for critical workloads + Transit Gateway for centralized connectivity"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui Direct Connect, VPN como backup e Outposts (componentes corretos), mas adiciona Transit Gateway que é para conectar múltiplas VPCs, não para conectar data centers on-premises à AWS. Transit Gateway não melhora conectividade híbrida entre on-premises e AWS - ele é para roteamento entre VPCs. Para conectar data centers on-premises à AWS, Direct Connect e VPN são suficientes. Transit Gateway adiciona complexidade e custo desnecessários para este caso de uso. A solução correta é Direct Connect + VPN como backup + Outposts, sem Transit Gateway.",
          "en": "This solution includes Direct Connect, VPN as backup and Outposts (correct components), but adds Transit Gateway which is for connecting multiple VPCs, not for connecting on-premises data centers to AWS. Transit Gateway doesn't improve hybrid connectivity between on-premises and AWS - it's for routing between VPCs. To connect on-premises data centers to AWS, Direct Connect and VPN are sufficient. Transit Gateway adds unnecessary complexity and cost for this use case. The correct solution is Direct Connect + VPN as backup + Outposts, without Transit Gateway."
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
      "pt-BR": "Uma empresa multinacional tem 500+ contas AWS organizadas em 50+ OUs (Organizational Units) distribuídas globalmente em 12 regiões. O gasto mensal total é de $2M com desperdício identificado de 30% ($600K/mês) em recursos subutilizados: instâncias EC2 com utilização média de 15%, volumes EBS não anexados, snapshots antigos, Load Balancers sem tráfego, e instâncias RDS subdimensionadas. A empresa precisa de visibilidade granular por departamento, região, projeto e tag, automação de otimização (downsizing automático, terminação de recursos ociosos), controle de orçamento com alertas proativos, e recomendações de otimização baseadas em machine learning. A solução deve integrar com processos de aprovação existentes e suportar múltiplas moedas. Qual solução AWS é mais completa considerando FinOps, automação e governança de custos?",
      "en": "A multinational company has 500+ AWS accounts organized in 50+ OUs (Organizational Units) distributed globally across 12 regions. Total monthly spending is $2M with identified waste of 30% ($600K/month) in underutilized resources: EC2 instances with 15% average utilization, unattached EBS volumes, old snapshots, Load Balancers without traffic, and undersized RDS instances. The company needs granular visibility by department, region, project and tag, optimization automation (automatic downsizing, termination of idle resources), budget control with proactive alerts, and optimization recommendations based on machine learning. The solution must integrate with existing approval processes and support multiple currencies. Which AWS solution is most complete considering FinOps, automation and cost governance?"
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
          "pt-BR": "AWS Organizations + Cost Explorer + Budgets + Trusted Advisor + Compute Optimizer + Lambda para automação + Service Catalog",
          "en": "AWS Organizations + Cost Explorer + Budgets + Trusted Advisor + Compute Optimizer + Lambda for automation + Service Catalog"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes essenciais para FinOps (Organizations, Cost Explorer, Budgets, Trusted Advisor, Compute Optimizer, Lambda), mas adiciona Service Catalog que não é necessário para otimização de custos. Service Catalog é para padronização de recursos e governança, não para identificar ou otimizar recursos subutilizados. Para uma empresa com 30% de desperdício ($600K/mês), focar em otimização de custos é prioritário - Service Catalog adiciona complexidade sem contribuir diretamente para redução de custos. A solução correta é Organizations + Cost Explorer + Budgets + Trusted Advisor + Compute Optimizer + Lambda, sem Service Catalog.",
          "en": "This solution includes all essential components for FinOps (Organizations, Cost Explorer, Budgets, Trusted Advisor, Compute Optimizer, Lambda), but adds Service Catalog which isn't necessary for cost optimization. Service Catalog is for resource standardization and governance, not for identifying or optimizing underutilized resources. For a company with 30% waste ($600K/month), focusing on cost optimization is priority - Service Catalog adds complexity without directly contributing to cost reduction. The correct solution is Organizations + Cost Explorer + Budgets + Trusted Advisor + Compute Optimizer + Lambda, without Service Catalog."
        }
      },
      {
        title: {
          "pt-BR": "AWS Organizations + Cost Explorer + Budgets + Trusted Advisor + Lambda para automação (sem Compute Optimizer)",
          "en": "AWS Organizations + Cost Explorer + Budgets + Trusted Advisor + Lambda for automation (without Compute Optimizer)"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui Organizations, Cost Explorer, Budgets, Trusted Advisor e Lambda (componentes corretos), mas falta Compute Optimizer que é essencial para recomendações de otimização de instâncias baseadas em machine learning. Para identificar instâncias EC2 com 15% de utilização e recomendar downsizing, e identificar instâncias RDS subdimensionadas, Compute Optimizer analisa padrões de uso históricos e oferece recomendações específicas. Sem Compute Optimizer, você perderia recomendações automatizadas de otimização de instâncias, deixando de identificar oportunidades de economia significativas.",
          "en": "This solution includes Organizations, Cost Explorer, Budgets, Trusted Advisor and Lambda (correct components), but lacks Compute Optimizer which is essential for machine learning-based instance optimization recommendations. To identify EC2 instances with 15% utilization and recommend downsizing, and identify undersized RDS instances, Compute Optimizer analyzes historical usage patterns and offers specific recommendations. Without Compute Optimizer, you would miss automated instance optimization recommendations, failing to identify significant savings opportunities."
        }
      },
      {
        title: {
          "pt-BR": "AWS Organizations + Cost Explorer + Budgets + Trusted Advisor + Compute Optimizer (sem automação Lambda)",
          "en": "AWS Organizations + Cost Explorer + Budgets + Trusted Advisor + Compute Optimizer (without Lambda automation)"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os serviços de visibilidade e recomendações (Organizations, Cost Explorer, Budgets, Trusted Advisor, Compute Optimizer), mas falta Lambda para automação de ações de otimização. Para 500+ contas com 30% de desperdício ($600K/mês), automação é essencial: Lambda pode automaticamente aplicar recomendações do Compute Optimizer (downsizing de instâncias), terminar recursos ociosos identificados pelo Trusted Advisor, e executar ações de otimização em escala. Sem automação, todas as otimizações precisariam ser aplicadas manualmente, o que não escala para 500+ contas e deixa desperdício continuar.",
          "en": "This solution includes all visibility and recommendation services (Organizations, Cost Explorer, Budgets, Trusted Advisor, Compute Optimizer), but lacks Lambda for automation of optimization actions. For 500+ accounts with 30% waste ($600K/month), automation is essential: Lambda can automatically apply Compute Optimizer recommendations (instance downsizing), terminate idle resources identified by Trusted Advisor, and execute optimization actions at scale. Without automation, all optimizations would need to be applied manually, which doesn't scale for 500+ accounts and allows waste to continue."
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
      "pt-BR": "Uma empresa de fintech precisa implementar um sistema de detecção de fraude em tempo real que processa 10.000 transações por segundo (864 milhões de transações/dia) com latência de inferência < 100ms. O modelo ML de deep learning (TensorFlow) precisa ser treinado diariamente com 50GB de novos dados transacionais, versionado com controle de linha de base, A/B testado em produção com 5% do tráfego, e deployado automaticamente apenas se o novo modelo superar o modelo atual em métricas de precisão (F1-score > 0.95). O pipeline MLOps deve suportar rollback automático se o modelo em produção degradar, monitoramento de drift de dados, e retreino automático quando drift é detectado. A arquitetura deve processar dados de múltiplas fontes (APIs REST, streams Kinesis, bancos de dados), suportar múltiplos frameworks (TensorFlow, PyTorch), e manter histórico completo de experimentos. Qual arquitetura AWS suporta melhor este pipeline MLOps considerando automação completa, versionamento, A/B testing e monitoramento?",
      "en": "A fintech company needs to implement a real-time fraud detection system that processes 10,000 transactions per second (864 million transactions/day) with inference latency < 100ms. The deep learning ML model (TensorFlow) needs to be trained daily with 50GB of new transactional data, versioned with baseline control, A/B tested in production with 5% of traffic, and deployed automatically only if the new model outperforms the current model on precision metrics (F1-score > 0.95). The MLOps pipeline must support automatic rollback if the production model degrades, data drift monitoring, and automatic retraining when drift is detected. The architecture must process data from multiple sources (REST APIs, Kinesis streams, databases), support multiple frameworks (TensorFlow, PyTorch), and maintain complete experiment history. Which AWS architecture best supports this MLOps pipeline considering complete automation, versioning, A/B testing and monitoring?"
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
          "pt-BR": "SageMaker + Kinesis Data Streams + Lambda + API Gateway + S3 + CodePipeline + SageMaker Model Registry para versionamento",
          "en": "SageMaker + Kinesis Data Streams + Lambda + API Gateway + S3 + CodePipeline + SageMaker Model Registry for versioning"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui SageMaker, Kinesis, Lambda, API Gateway, S3, CodePipeline e Model Registry (componentes corretos), mas Model Registry sozinho não oferece A/B testing em produção nem rollback automático. Para A/B testar modelos com 5% do tráfego e fazer rollback automático se o modelo degradar, é necessário SageMaker Endpoint Configurations com traffic splitting e CloudWatch alarms para monitorar métricas de performance. Model Registry gerencia versões, mas não gerencia deployment com A/B testing e rollback automático.",
          "en": "This solution includes SageMaker, Kinesis, Lambda, API Gateway, S3, CodePipeline and Model Registry (correct components), but Model Registry alone doesn't offer A/B testing in production nor automatic rollback. To A/B test models with 5% of traffic and automatically rollback if model degrades, SageMaker Endpoint Configurations with traffic splitting and CloudWatch alarms to monitor performance metrics are needed. Model Registry manages versions, but doesn't manage deployment with A/B testing and automatic rollback."
        }
      },
      {
        title: {
          "pt-BR": "SageMaker + Kinesis Data Streams + Lambda + API Gateway + S3 + CodePipeline + SageMaker Endpoint Configurations com traffic splitting",
          "en": "SageMaker + Kinesis Data Streams + Lambda + API Gateway + S3 + CodePipeline + SageMaker Endpoint Configurations with traffic splitting"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui SageMaker, Kinesis, Lambda, API Gateway, S3, CodePipeline e Endpoint Configurations com traffic splitting (componentes corretos), mas falta monitoramento de drift de dados e retreino automático quando drift é detectado. Para detectar drift e retreinar automaticamente, é necessário SageMaker Model Monitor que monitora dados de entrada e saída do modelo, detecta drift, e pode disparar retreino automático via EventBridge. Sem Model Monitor, você não detectaria mudanças nos padrões de dados que degradam a performance do modelo ao longo do tempo.",
          "en": "This solution includes SageMaker, Kinesis, Lambda, API Gateway, S3, CodePipeline and Endpoint Configurations with traffic splitting (correct components), but lacks data drift monitoring and automatic retraining when drift is detected. To detect drift and automatically retrain, SageMaker Model Monitor is needed which monitors model input and output data, detects drift, and can trigger automatic retraining via EventBridge. Without Model Monitor, you wouldn't detect changes in data patterns that degrade model performance over time."
        }
      },
      {
        title: {
          "pt-BR": "SageMaker + Kinesis Data Streams + Lambda + API Gateway + S3 + CodePipeline + SageMaker Model Registry + Model Monitor + Endpoint Configurations",
          "en": "SageMaker + Kinesis Data Streams + Lambda + API Gateway + S3 + CodePipeline + SageMaker Model Registry + Model Monitor + Endpoint Configurations"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes do SageMaker (Model Registry, Model Monitor, Endpoint Configurations), mas adiciona componentes redundantes ou desnecessários. Model Registry e Endpoint Configurations podem ser suficientes - Model Registry gerencia versionamento e aprovação de modelos, enquanto Endpoint Configurations gerencia deployment com A/B testing. Model Monitor é útil mas pode ser configurado separadamente. A solução correta é SageMaker + Kinesis + Lambda + API Gateway + S3 + CodePipeline, que já inclui as funcionalidades essenciais de MLOps do SageMaker.",
          "en": "This solution includes all SageMaker components (Model Registry, Model Monitor, Endpoint Configurations), but adds redundant or unnecessary components. Model Registry and Endpoint Configurations may be sufficient - Model Registry manages versioning and model approval, while Endpoint Configurations manages deployment with A/B testing. Model Monitor is useful but can be configured separately. The correct solution is SageMaker + Kinesis + Lambda + API Gateway + S3 + CodePipeline, which already includes essential SageMaker MLOps functionality."
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
      "pt-BR": "Uma aplicação distribuída crítica com 50+ microserviços em produção está enfrentando problemas de performance intermitentes difíceis de diagnosticar. As requisições passam por 8-12 serviços em média (API Gateway → Lambda → SQS → Lambda → DynamoDB → Lambda → SNS → Lambda → RDS), e a latência P95 varia entre 100ms e 30s de forma imprevisível. Durante picos de tráfego (10.000 req/s), alguns serviços apresentam timeouts, outros têm alta latência, e a equipe não consegue identificar qual serviço está causando o gargalo. A aplicação processa transações financeiras críticas e precisa de observabilidade completa: logs centralizados de todos os serviços, métricas de performance (latência, throughput, erro rate), traces distribuídos mostrando o caminho completo de cada requisição, alertas proativos quando métricas excedem thresholds, dashboards em tempo real, e métricas de negócio customizadas (transações processadas, receita por minuto). A equipe precisa identificar rapidamente qual serviço está causando latência de 30s e correlacionar logs entre serviços para debugging. Qual solução AWS oferece observabilidade completa considerando logs, métricas, traces, alertas e dashboards?",
      "en": "A critical distributed application with 50+ microservices in production is facing intermittent performance issues that are difficult to diagnose. Requests pass through 8-12 services on average (API Gateway → Lambda → SQS → Lambda → DynamoDB → Lambda → SNS → Lambda → RDS), and P95 latency varies unpredictably between 100ms and 30s. During traffic peaks (10,000 req/s), some services experience timeouts, others have high latency, and the team cannot identify which service is causing the bottleneck. The application processes critical financial transactions and needs complete observability: centralized logs from all services, performance metrics (latency, throughput, error rate), distributed traces showing complete path of each request, proactive alerts when metrics exceed thresholds, real-time dashboards, and custom business metrics (processed transactions, revenue per minute). The team needs to quickly identify which service is causing 30s latency and correlate logs between services for debugging. Which AWS solution offers complete observability considering logs, metrics, traces, alerts and dashboards?"
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
          "pt-BR": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Insights + CloudWatch Alarms (sem Dashboards)",
          "en": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Insights + CloudWatch Alarms (without Dashboards)"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui Logs, Metrics, X-Ray, Insights e Alarms (componentes corretos), mas falta CloudWatch Dashboards que são essenciais para visualização em tempo real de métricas de múltiplos serviços. Para uma equipe que precisa identificar rapidamente problemas de performance durante picos de tráfego (10.000 req/s), dashboards oferecem visão consolidada de latência, throughput e erro rate de todos os 50+ microserviços em uma única tela. Sem dashboards, a equipe precisaria consultar métricas individualmente, tornando diagnóstico muito mais lento.",
          "en": "This solution includes Logs, Metrics, X-Ray, Insights and Alarms (correct components), but lacks CloudWatch Dashboards which are essential for real-time visualization of metrics from multiple services. For a team that needs to quickly identify performance issues during traffic peaks (10,000 req/s), dashboards offer consolidated view of latency, throughput and error rate from all 50+ microservices in a single screen. Without dashboards, the team would need to consult metrics individually, making diagnosis much slower."
        }
      },
      {
        title: {
          "pt-BR": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Insights + CloudWatch Alarms + CloudWatch Dashboards + Custom Metrics",
          "en": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Insights + CloudWatch Alarms + CloudWatch Dashboards + Custom Metrics"
        },
        correct: true,
        explanation: {
          "pt-BR": "CloudWatch monitora métricas e logs de todos os 50+ microserviços. X-Ray rastreia requisições através de múltiplos serviços mostrando latência de cada componente (identificando por que latência varia entre 100ms e 30s). CloudWatch Insights permite queries complexas em logs. Custom Metrics rastreia métricas de negócio. Esta combinação oferece observabilidade completa.",
          "en": "CloudWatch monitors metrics and logs from all 50+ microservices. X-Ray traces requests across multiple services showing latency of each component (identifying why latency varies between 100ms and 30s). CloudWatch Insights allows complex queries on logs. Custom Metrics tracks business metrics. This combination offers complete observability."
        }
      },
      {
        title: {
          "pt-BR": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Insights + CloudWatch Dashboards (sem Alarms)",
          "en": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Insights + CloudWatch Dashboards (without Alarms)"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui Logs, Metrics, X-Ray, Insights e Dashboards (componentes corretos), mas falta CloudWatch Alarms que são essenciais para alertas proativos quando métricas excedem thresholds. Para uma aplicação crítica que processa transações financeiras, se latência P95 exceder 5s ou erro rate exceder 1%, a equipe precisa ser notificada imediatamente. Sem Alarms, problemas só seriam detectados quando alguém verificar dashboards manualmente, o que pode levar a perda de receita e experiência ruim do usuário.",
          "en": "This solution includes Logs, Metrics, X-Ray, Insights and Dashboards (correct components), but lacks CloudWatch Alarms which are essential for proactive alerts when metrics exceed thresholds. For a critical application processing financial transactions, if P95 latency exceeds 5s or error rate exceeds 1%, the team needs to be notified immediately. Without Alarms, problems would only be detected when someone manually checks dashboards, which can lead to revenue loss and poor user experience."
        }
      },
      {
        title: {
          "pt-BR": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Insights + CloudWatch Alarms + CloudWatch Dashboards + Prometheus para métricas adicionais",
          "en": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Insights + CloudWatch Alarms + CloudWatch Dashboards + Prometheus for additional metrics"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes essenciais do CloudWatch (Logs, Metrics, X-Ray, Insights, Alarms, Dashboards), mas adiciona Prometheus desnecessariamente. CloudWatch Metrics já oferece métricas customizadas e suporta métricas de negócio via PutMetricData API. Prometheus adiciona complexidade (requer servidor Prometheus, configuração de scraping, integração com CloudWatch), custo adicional, e não é necessário quando CloudWatch já oferece todas as funcionalidades necessárias. Para observabilidade completa de aplicações AWS, CloudWatch é suficiente - Prometheus é redundante.",
          "en": "This solution includes all essential CloudWatch components (Logs, Metrics, X-Ray, Insights, Alarms, Dashboards), but unnecessarily adds Prometheus. CloudWatch Metrics already offers custom metrics and supports business metrics via PutMetricData API. Prometheus adds complexity (requires Prometheus server, scraping configuration, CloudWatch integration), additional cost, and isn't necessary when CloudWatch already offers all needed functionality. For complete observability of AWS applications, CloudWatch is sufficient - Prometheus is redundant."
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
      "pt-BR": "Uma aplicação global de e-commerce precisa estar disponível em múltiplas regiões (América do Norte, Europa, Ásia-Pacífico) com latência baixa (< 200ms P95) para usuários em diferentes continentes. A aplicação processa 50 milhões de requisições/dia, serve conteúdo estático (imagens, CSS, JS) e dinâmico (APIs REST), e precisa sincronizar dados transacionais (pedidos, carrinho, inventário) entre regiões com consistência eventual. Durante eventos globais (Black Friday), o tráfego pode aumentar 10x em múltiplas regiões simultaneamente. A arquitetura deve rotear tráfego automaticamente para a região mais próxima do usuário, cachear conteúdo estático globalmente, sincronizar dados de inventário entre regiões em tempo quase real (< 5 minutos), e manter disponibilidade mesmo se uma região inteira falhar. Qual arquitetura AWS oferece melhor performance global considerando roteamento inteligente, cache global, sincronização de dados e alta disponibilidade?",
      "en": "A global e-commerce application needs to be available in multiple regions (North America, Europe, Asia-Pacific) with low latency (< 200ms P95) for users in different continents. The application processes 50 million requests/day, serves static content (images, CSS, JS) and dynamic content (REST APIs), and needs to synchronize transactional data (orders, cart, inventory) between regions with eventual consistency. During global events (Black Friday), traffic can increase 10x in multiple regions simultaneously. The architecture must automatically route traffic to the region closest to the user, cache static content globally, synchronize inventory data between regions in near real-time (< 5 minutes), and maintain availability even if an entire region fails. Which AWS architecture offers best global performance considering intelligent routing, global caching, data synchronization and high availability?"
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
          "pt-BR": "Route 53 com geolocation routing + CloudFront + RDS Cross-Region Read Replica + Application Load Balancer em múltiplas regiões",
          "en": "Route 53 with geolocation routing + CloudFront + RDS Cross-Region Read Replica + Application Load Balancer in multiple regions"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa Route 53, CloudFront e ALB (componentes corretos), mas RDS Cross-Region Read Replica é apenas para leitura, não permite escrita em múltiplas regiões, e não sincroniza dados automaticamente com latência < 5 minutos. Para sincronizar dados de inventário entre regiões em tempo quase real com consistência eventual, DynamoDB Global Tables é necessário - ele replica dados automaticamente entre regiões com latência de segundos, permitindo escrita em múltiplas regiões. RDS Read Replica não atende requisitos de sincronização rápida e escrita global.",
          "en": "This solution uses Route 53, CloudFront and ALB (correct components), but RDS Cross-Region Read Replica is read-only, doesn't allow writes in multiple regions, and doesn't automatically synchronize data with < 5 minute latency. To synchronize inventory data between regions in near real-time with eventual consistency, DynamoDB Global Tables is needed - it automatically replicates data between regions with seconds latency, allowing writes in multiple regions. RDS Read Replica doesn't meet fast synchronization and global write requirements."
        }
      },
      {
        title: {
          "pt-BR": "Route 53 com geolocation routing + CloudFront + DynamoDB Global Tables + Application Load Balancer em múltiplas regiões + ElastiCache Global Datastore",
          "en": "Route 53 with geolocation routing + CloudFront + DynamoDB Global Tables + Application Load Balancer in multiple regions + ElastiCache Global Datastore"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes essenciais (Route 53, CloudFront, DynamoDB Global Tables, ALB), mas adiciona ElastiCache Global Datastore desnecessariamente. CloudFront já cacheia conteúdo estático globalmente em edge locations, e DynamoDB Global Tables sincroniza dados transacionais. ElastiCache Global Datastore é para cache de dados em memória entre regiões, mas para uma aplicação de e-commerce, CloudFront para conteúdo estático e DynamoDB Global Tables para dados transacionais são suficientes. ElastiCache adiciona complexidade e custo sem benefício proporcional.",
          "en": "This solution includes all essential components (Route 53, CloudFront, DynamoDB Global Tables, ALB), but unnecessarily adds ElastiCache Global Datastore. CloudFront already caches static content globally at edge locations, and DynamoDB Global Tables synchronizes transactional data. ElastiCache Global Datastore is for in-memory data cache between regions, but for an e-commerce application, CloudFront for static content and DynamoDB Global Tables for transactional data are sufficient. ElastiCache adds complexity and cost without proportional benefit."
        }
      },
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
          "pt-BR": "Route 53 com latency-based routing + CloudFront + DynamoDB Global Tables + Application Load Balancer em múltiplas regiões",
          "en": "Route 53 with latency-based routing + CloudFront + DynamoDB Global Tables + Application Load Balancer in multiple regions"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa Route 53 com latency-based routing (correto para rotear para região com menor latência), CloudFront, DynamoDB Global Tables e ALB (componentes corretos), mas latency-based routing pode não ser ideal para todos os casos. Geolocation routing direciona usuários para a região geograficamente mais próxima, que geralmente tem menor latência, e oferece mais controle sobre roteamento baseado em localização. Para uma aplicação global que precisa rotear baseado em localização geográfica do usuário (não apenas latência medida), geolocation routing é mais apropriado que latency-based routing.",
          "en": "This solution uses Route 53 with latency-based routing (correct for routing to region with lowest latency), CloudFront, DynamoDB Global Tables and ALB (correct components), but latency-based routing may not be ideal for all cases. Geolocation routing directs users to the geographically closest region, which usually has lowest latency, and offers more control over location-based routing. For a global application that needs to route based on user's geographic location (not just measured latency), geolocation routing is more appropriate than latency-based routing."
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
      "pt-BR": "Uma empresa financeira precisa isolar completamente ambientes de produção, desenvolvimento e staging em uma única conta AWS para otimizar custos. Cada ambiente possui 20+ recursos (EC2, RDS, Lambda, S3 buckets) e precisa de acesso à internet para APIs externas e atualizações. Produção processa dados financeiros sensíveis (PCI-DSS) e não deve ter qualquer acesso de rede a desenvolvimento ou staging. A empresa precisa de auditoria completa de tráfego de rede para compliance (todos os pacotes devem ser logados), segmentação de rede granular, e conectividade centralizada para facilitar gerenciamento. A arquitetura deve prevenir lateral movement entre ambientes, suportar múltiplos protocolos (TCP, UDP, HTTP/HTTPS), e permitir compartilhamento de recursos AWS gerenciados (como VPC Endpoints) quando apropriado. Qual arquitetura AWS oferece melhor segmentação de rede considerando isolamento completo, auditoria e conectividade centralizada?",
      "en": "A financial company needs to completely isolate production, development, and staging environments in a single AWS account to optimize costs. Each environment has 20+ resources (EC2, RDS, Lambda, S3 buckets) and needs internet access for external APIs and updates. Production processes sensitive financial data (PCI-DSS) and must not have any network access to development or staging. The company needs complete network traffic auditing for compliance (all packets must be logged), granular network segmentation, and centralized connectivity to facilitate management. The architecture must prevent lateral movement between environments, support multiple protocols (TCP, UDP, HTTP/HTTPS), and allow sharing of managed AWS resources (like VPC Endpoints) when appropriate. Which AWS architecture offers best network segmentation considering complete isolation, auditing and centralized connectivity?"
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
          "pt-BR": "VPCs separadas por ambiente + Security Groups com regras restritivas + NACLs + VPC Flow Logs (sem Transit Gateway)",
          "en": "Separate VPCs per environment + Security Groups with restrictive rules + NACLs + VPC Flow Logs (without Transit Gateway)"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui VPCs separadas, Security Groups, NACLs e VPC Flow Logs (componentes corretos), mas falta Transit Gateway que é essencial para conectividade centralizada e gerenciamento simplificado. Para uma empresa com 3 ambientes (produção, desenvolvimento, staging) que precisam de acesso à internet e compartilhamento de recursos AWS gerenciados, Transit Gateway conecta VPCs de forma segura e centralizada, facilitando gerenciamento de rotas, políticas de roteamento, e permitindo compartilhamento de VPC Endpoints. Sem Transit Gateway, cada VPC precisaria de seu próprio NAT Gateway e VPC Endpoints, aumentando custos e complexidade.",
          "en": "This solution includes separate VPCs, Security Groups, NACLs and VPC Flow Logs (correct components), but lacks Transit Gateway which is essential for centralized connectivity and simplified management. For a company with 3 environments (production, development, staging) that need internet access and sharing of managed AWS resources, Transit Gateway connects VPCs securely and centrally, facilitating route management, routing policies, and allowing sharing of VPC Endpoints. Without Transit Gateway, each VPC would need its own NAT Gateway and VPC Endpoints, increasing costs and complexity."
        }
      },
      {
        title: {
          "pt-BR": "Subnets separadas na mesma VPC + Security Groups com regras restritivas + NACLs + VPC Flow Logs + Transit Gateway",
          "en": "Separate subnets in same VPC + Security Groups with restrictive rules + NACLs + VPC Flow Logs + Transit Gateway"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui Security Groups, NACLs, VPC Flow Logs e Transit Gateway (componentes corretos), mas subnets na mesma VPC não oferecem isolamento completo necessário para compliance PCI-DSS. Subnets compartilham recursos (VPC Endpoints, NAT Gateways, Route Tables), e uma configuração incorreta de Security Groups ou NACLs pode permitir acesso acidental entre ambientes. Para uma empresa financeira que processa dados sensíveis e precisa garantir que produção não acesse desenvolvimento, VPCs separadas são necessárias para isolamento completo de rede, não apenas subnets.",
          "en": "This solution includes Security Groups, NACLs, VPC Flow Logs and Transit Gateway (correct components), but subnets in the same VPC don't offer complete isolation needed for PCI-DSS compliance. Subnets share resources (VPC Endpoints, NAT Gateways, Route Tables), and an incorrect Security Groups or NACLs configuration can allow accidental access between environments. For a financial company that processes sensitive data and needs to guarantee production doesn't access development, separate VPCs are needed for complete network isolation, not just subnets."
        }
      },
      {
        title: {
          "pt-BR": "VPCs separadas por ambiente + VPC Flow Logs + Transit Gateway para conectividade + Security Groups com regras restritivas + AWS Config para auditoria de configurações",
          "en": "Separate VPCs per environment + VPC Flow Logs + Transit Gateway for connectivity + Security Groups with restrictive rules + AWS Config for configuration auditing"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes essenciais para segmentação de rede (VPCs separadas, VPC Flow Logs, Transit Gateway, Security Groups), mas adiciona AWS Config que não é necessário para segmentação de rede e auditoria de tráfego. AWS Config audita configurações de recursos, não tráfego de rede. VPC Flow Logs já oferece auditoria completa de tráfego de rede (todos os pacotes são logados). Para segmentação de rede com auditoria, VPCs separadas + VPC Flow Logs + Transit Gateway + Security Groups são suficientes - AWS Config adiciona complexidade sem contribuir para isolamento de rede.",
          "en": "This solution includes all essential components for network segmentation (separate VPCs, VPC Flow Logs, Transit Gateway, Security Groups), but adds AWS Config which isn't necessary for network segmentation and traffic auditing. AWS Config audits resource configurations, not network traffic. VPC Flow Logs already offers complete network traffic auditing (all packets are logged). For network segmentation with auditing, separate VPCs + VPC Flow Logs + Transit Gateway + Security Groups are sufficient - AWS Config adds complexity without contributing to network isolation."
        }
      },
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
      "pt-BR": "Uma aplicação web crítica de e-commerce tem padrões de tráfego altamente imprevisíveis com picos súbitos de até 20x o tráfego normal em minutos (ex: eventos virais, campanhas de marketing, Black Friday). A aplicação processa 100.000 requisições/minuto normalmente, mas pode atingir 2 milhões de requisições/minuto durante picos. A aplicação precisa escalar rapidamente (adicionar instâncias em < 2 minutos) durante picos para manter latência P95 < 200ms, e reduzir custos automaticamente durante períodos de baixo tráfego (noite, fins de semana) quando o tráfego cai para 10.000 requisições/minuto. A latência deve permanecer baixa (< 200ms P95) mesmo durante escalonamento, e as conexões ativas não devem ser perdidas quando instâncias são removidas durante scale-down. A arquitetura deve prever picos futuros baseado em padrões históricos e escalar proativamente antes que ocorram. Qual arquitetura AWS oferece melhor auto-scaling considerando escalonamento proativo, redução de custos e manutenção de latência baixa?",
      "en": "A critical e-commerce web application has highly unpredictable traffic patterns with sudden spikes of up to 20x normal traffic in minutes (e.g., viral events, marketing campaigns, Black Friday). The application processes 100,000 requests/minute normally, but can reach 2 million requests/minute during peaks. The application needs to scale quickly (add instances in < 2 minutes) during peaks to maintain P95 latency < 200ms, and automatically reduce costs during low traffic periods (night, weekends) when traffic drops to 10,000 requests/minute. Latency must remain low (< 200ms P95) even during scaling, and active connections must not be lost when instances are removed during scale-down. The architecture must predict future peaks based on historical patterns and scale proactively before they occur. Which AWS architecture offers best auto-scaling considering proactive scaling, cost reduction and maintaining low latency?"
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
          "pt-BR": "EC2 Auto Scaling com Step Scaling + Target Tracking Policies + Application Load Balancer com connection draining",
          "en": "EC2 Auto Scaling with Step Scaling + Target Tracking Policies + Application Load Balancer with connection draining"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa Step Scaling, Target Tracking Policies e ALB (componentes corretos), mas Step Scaling apenas reage a métricas após picos ocorrerem, não prevê picos futuros. Para uma aplicação com picos súbitos de 20x em minutos, Step Scaling pode não escalar rápido o suficiente (< 2 minutos) para manter latência < 200ms. Predictive Scaling usa machine learning para prever picos baseado em padrões históricos e escala proativamente antes que ocorram, mantendo latência baixa mesmo durante picos súbitos. Para padrões de tráfego imprevisíveis, Predictive Scaling é essencial.",
          "en": "This solution uses Step Scaling, Target Tracking Policies and ALB (correct components), but Step Scaling only reacts to metrics after peaks occur, doesn't predict future peaks. For an application with sudden 20x spikes in minutes, Step Scaling may not scale fast enough (< 2 minutes) to maintain latency < 200ms. Predictive Scaling uses machine learning to predict peaks based on historical patterns and scales proactively before they occur, keeping latency low even during sudden spikes. For unpredictable traffic patterns, Predictive Scaling is essential."
        }
      },
      {
        title: {
          "pt-BR": "EC2 Auto Scaling com Predictive Scaling + Step Scaling + Application Load Balancer (sem Target Tracking Policies)",
          "en": "EC2 Auto Scaling with Predictive Scaling + Step Scaling + Application Load Balancer (without Target Tracking Policies)"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa Predictive Scaling (correto para prever picos) e ALB (correto), mas falta Target Tracking Policies que são essenciais para manter métricas (CPU, latência) dentro de limites definidos automaticamente. Para uma aplicação que precisa manter latência P95 < 200ms, Target Tracking Policies ajusta automaticamente o número de instâncias baseado na métrica de latência, garantindo que a latência permaneça dentro do limite mesmo durante variações de tráfego. Sem Target Tracking Policies, você precisaria configurar manualmente múltiplos alarmes CloudWatch, o que é mais complexo e menos eficiente.",
          "en": "This solution uses Predictive Scaling (correct for predicting peaks) and ALB (correct), but lacks Target Tracking Policies which are essential for keeping metrics (CPU, latency) within defined limits automatically. For an application that needs to maintain P95 latency < 200ms, Target Tracking Policies automatically adjusts the number of instances based on latency metric, ensuring latency remains within limit even during traffic variations. Without Target Tracking Policies, you would need to manually configure multiple CloudWatch alarms, which is more complex and less efficient."
        }
      },
      {
        title: {
          "pt-BR": "EC2 Auto Scaling com Predictive Scaling + Target Tracking Policies + Classic Load Balancer com connection draining",
          "en": "EC2 Auto Scaling with Predictive Scaling + Target Tracking Policies + Classic Load Balancer with connection draining"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa Predictive Scaling e Target Tracking Policies (componentes corretos), mas Classic Load Balancer não oferece connection draining avançado como ALB. Para uma aplicação crítica que precisa manter conexões ativas durante scale-down, ALB oferece connection draining mais eficiente que Classic Load Balancer. Além disso, ALB oferece melhor performance, roteamento baseado em conteúdo/caminho, e suporte eficiente a WebSockets. Para aplicações modernas com auto-scaling, ALB é superior a Classic Load Balancer.",
          "en": "This solution uses Predictive Scaling and Target Tracking Policies (correct components), but Classic Load Balancer doesn't offer advanced connection draining like ALB. For a critical application that needs to maintain active connections during scale-down, ALB offers more efficient connection draining than Classic Load Balancer. Additionally, ALB offers better performance, content/path-based routing, and efficient WebSocket support. For modern applications with auto-scaling, ALB is superior to Classic Load Balancer."
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
      "pt-BR": "Uma aplicação global de gaming precisa de escrita em múltiplas regiões (América do Norte, Europa, Ásia) com consistência eventual para dados de jogadores (inventário, progresso, conquistas). O banco de dados processa 500.000 escritas/segundo globalmente, com usuários escrevendo em suas respectivas regiões. O banco de dados precisa tolerar falhas de região inteira e manter disponibilidade (99.99%), permitindo que jogadores continuem jogando mesmo se uma região falhar. As escritas devem ser distribuídas para reduzir latência (< 50ms P95 para escritas locais), e dados devem ser replicados entre regiões automaticamente com latência de replicação < 1 segundo. Durante eventos globais (lançamentos de jogos), o tráfego pode aumentar 10x em múltiplas regiões simultaneamente. Qual arquitetura AWS oferece melhor suporte para escrita multi-regional com consistência eventual, tolerância a falhas regionais e baixa latência?",
      "en": "A global gaming application needs write capability in multiple regions (North America, Europe, Asia) with eventual consistency for player data (inventory, progress, achievements). The database processes 500,000 writes/second globally, with users writing in their respective regions. The database needs to tolerate entire region failures and maintain availability (99.99%), allowing players to continue playing even if a region fails. Writes must be distributed to reduce latency (< 50ms P95 for local writes), and data must be automatically replicated between regions with replication latency < 1 second. During global events (game launches), traffic can increase 10x in multiple regions simultaneously. Which AWS architecture offers best support for multi-regional writes with eventual consistency, regional failure tolerance and low latency?"
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
          "pt-BR": "DynamoDB Global Tables com replicação automática multi-regional + RDS Multi-AZ em cada região para dados relacionais",
          "en": "DynamoDB Global Tables with automatic multi-regional replication + RDS Multi-AZ in each region for relational data"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa DynamoDB Global Tables (correto para escrita multi-regional), mas adiciona RDS Multi-AZ desnecessariamente. Para uma aplicação de gaming que precisa de escrita em múltiplas regiões com consistência eventual, DynamoDB Global Tables sozinho é suficiente - ele replica dados automaticamente entre regiões com latência < 1 segundo. RDS Multi-AZ não oferece escrita multi-regional e adiciona complexidade e custo desnecessários. Para dados de jogadores (inventário, progresso, conquistas) que são NoSQL, DynamoDB Global Tables é a solução completa, não é necessário RDS.",
          "en": "This solution uses DynamoDB Global Tables (correct for multi-regional writes), but unnecessarily adds RDS Multi-AZ. For a gaming application that needs writes in multiple regions with eventual consistency, DynamoDB Global Tables alone is sufficient - it automatically replicates data between regions with < 1 second latency. RDS Multi-AZ doesn't offer multi-regional writes and adds unnecessary complexity and cost. For player data (inventory, progress, achievements) which is NoSQL, DynamoDB Global Tables is the complete solution, RDS is not needed."
        }
      },
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
          "pt-BR": "DynamoDB Global Tables com replicação automática multi-regional + ElastiCache Global Datastore para cache",
          "en": "DynamoDB Global Tables with automatic multi-regional replication + ElastiCache Global Datastore for cache"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa DynamoDB Global Tables (correto para escrita multi-regional), mas adiciona ElastiCache Global Datastore desnecessariamente. DynamoDB Global Tables já oferece baixa latência (< 50ms P95) para escritas locais e replicação automática entre regiões. ElastiCache Global Datastore é para cache de dados em memória, mas para uma aplicação de gaming que processa 500.000 escritas/segundo, DynamoDB Global Tables sozinho oferece performance suficiente. ElastiCache adiciona complexidade e custo sem benefício proporcional para este caso de uso.",
          "en": "This solution uses DynamoDB Global Tables (correct for multi-regional writes), but unnecessarily adds ElastiCache Global Datastore. DynamoDB Global Tables already offers low latency (< 50ms P95) for local writes and automatic replication between regions. ElastiCache Global Datastore is for in-memory data caching, but for a gaming application processing 500,000 writes/second, DynamoDB Global Tables alone offers sufficient performance. ElastiCache adds complexity and cost without proportional benefit for this use case."
        }
      },
      {
        title: {
          "pt-BR": "DynamoDB sem Global Tables com replicação manual via Lambda + S3 para backup",
          "en": "DynamoDB without Global Tables with manual replication via Lambda + S3 for backup"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução tenta replicar dados manualmente via Lambda, mas não oferece escrita em múltiplas regiões (DynamoDB sem Global Tables é apenas em uma região), não replica automaticamente com latência < 1 segundo (replicação manual via Lambda tem latência muito maior), e não tolera falhas de região inteira automaticamente. Para uma aplicação global que precisa de escrita em múltiplas regiões, tolerância a falhas regionais e replicação automática, DynamoDB Global Tables é necessário - ele oferece tudo isso de forma gerenciada, não requer Lambda ou replicação manual.",
          "en": "This solution attempts to manually replicate data via Lambda, but doesn't offer writes in multiple regions (DynamoDB without Global Tables is only in one region), doesn't automatically replicate with < 1 second latency (manual replication via Lambda has much higher latency), and doesn't automatically tolerate entire region failures. For a global application that needs writes in multiple regions, regional failure tolerance and automatic replication, DynamoDB Global Tables is needed - it offers all of this in a managed way, doesn't require Lambda or manual replication."
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
      "pt-BR": "Uma empresa de fintech precisa executar 30+ microserviços containerizados (Docker) em escala com alta disponibilidade (99.99%). A aplicação processa 1 milhão de requisições/dia, precisa de auto-scaling baseado em métricas customizadas de negócio (transações por segundo, latência de processamento de pagamentos), service discovery para que microserviços se encontrem automaticamente via DNS, e integração nativa com serviços AWS (S3, DynamoDB, SQS, SNS). A equipe de desenvolvimento prefere gerenciamento mínimo de infraestrutura para focar em desenvolvimento de features. A arquitetura deve suportar deployment contínuo, rollback rápido, e escalonamento automático de 10 a 500 containers baseado em demanda. Qual arquitetura AWS oferece melhor suporte para containers em escala com gerenciamento mínimo, auto-scaling baseado em métricas customizadas e service discovery?",
      "en": "A fintech company needs to run 30+ containerized microservices (Docker) at scale with high availability (99.99%). The application processes 1 million requests/day, needs auto-scaling based on custom business metrics (transactions per second, payment processing latency), service discovery for microservices to find each other automatically via DNS, and native integration with AWS services (S3, DynamoDB, SQS, SNS). The development team prefers minimal infrastructure management to focus on feature development. The architecture must support continuous deployment, fast rollback, and automatic scaling from 10 to 500 containers based on demand. Which AWS architecture offers best support for containers at scale with minimal management, auto-scaling based on custom metrics and service discovery?"
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
          "pt-BR": "Amazon ECS com Fargate + Service Discovery + Auto Scaling baseado em CloudWatch Metrics (sem Application Load Balancer)",
          "en": "Amazon ECS with Fargate + Service Discovery + Auto Scaling based on CloudWatch Metrics (without Application Load Balancer)"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa ECS Fargate, Service Discovery e Auto Scaling baseado em CloudWatch Metrics (componentes corretos), mas falta Application Load Balancer que é essencial para distribuir tráfego entre containers, integrar com serviços AWS (S3, DynamoDB, SQS, SNS), e oferecer health checks para auto-scaling. Para uma aplicação que processa 1 milhão de requisições/dia e precisa escalar de 10 a 500 containers, ALB distribui tráfego eficientemente e oferece integração nativa com serviços AWS. Sem ALB, você precisaria configurar roteamento manual ou usar outros load balancers, perdendo integração nativa com AWS.",
          "en": "This solution uses ECS Fargate, Service Discovery and Auto Scaling based on CloudWatch Metrics (correct components), but lacks Application Load Balancer which is essential for distributing traffic between containers, integrating with AWS services (S3, DynamoDB, SQS, SNS), and offering health checks for auto-scaling. For an application that processes 1 million requests/day and needs to scale from 10 to 500 containers, ALB efficiently distributes traffic and offers native integration with AWS services. Without ALB, you would need to configure manual routing or use other load balancers, losing native AWS integration."
        }
      },
      {
        title: {
          "pt-BR": "Amazon ECS com Fargate + Service Discovery + Auto Scaling baseado em métricas padrão (CPU, memória) + Application Load Balancer",
          "en": "Amazon ECS with Fargate + Service Discovery + Auto Scaling based on standard metrics (CPU, memory) + Application Load Balancer"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa ECS Fargate, Service Discovery e ALB (componentes corretos), mas Auto Scaling baseado apenas em métricas padrão (CPU, memória) não atende requisitos. Para uma aplicação de fintech que precisa escalar baseado em métricas customizadas de negócio (transações por segundo, latência de processamento de pagamentos), é necessário Auto Scaling baseado em CloudWatch Custom Metrics. Métricas padrão (CPU, memória) não refletem carga de negócio - uma aplicação pode ter CPU baixa mas alta carga de transações, necessitando mais containers.",
          "en": "This solution uses ECS Fargate, Service Discovery and ALB (correct components), but Auto Scaling based only on standard metrics (CPU, memory) doesn't meet requirements. For a fintech application that needs to scale based on custom business metrics (transactions per second, payment processing latency), Auto Scaling based on CloudWatch Custom Metrics is needed. Standard metrics (CPU, memory) don't reflect business load - an application can have low CPU but high transaction load, needing more containers."
        }
      },
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
          "pt-BR": "Amazon ECS com Fargate + Service Discovery + Auto Scaling baseado em CloudWatch Metrics + Application Load Balancer + EKS para orquestração adicional",
          "en": "Amazon ECS with Fargate + Service Discovery + Auto Scaling based on CloudWatch Metrics + Application Load Balancer + EKS for additional orchestration"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes corretos (ECS Fargate, Service Discovery, Auto Scaling baseado em CloudWatch Metrics, ALB), mas adiciona EKS desnecessariamente. ECS Fargate e EKS são plataformas de orquestração de containers concorrentes - não é necessário usar ambos. EKS requer mais gerenciamento (cluster Kubernetes, nodes, patches) e adiciona complexidade sem benefício. Para uma equipe que prefere gerenciamento mínimo, ECS Fargate sozinho é suficiente - EKS adiciona sobrecarga desnecessária.",
          "en": "This solution includes all correct components (ECS Fargate, Service Discovery, Auto Scaling based on CloudWatch Metrics, ALB), but unnecessarily adds EKS. ECS Fargate and EKS are competing container orchestration platforms - it's not necessary to use both. EKS requires more management (Kubernetes cluster, nodes, patches) and adds complexity without benefit. For a team that prefers minimal management, ECS Fargate alone is sufficient - EKS adds unnecessary overhead."
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
      "pt-BR": "Uma aplicação crítica de saúde processa 100.000 registros médicos por hora e precisa de backup contínuo com RPO de 1 minuto e RTO de 5 minutos para atender regulamentações HIPAA. Os dados incluem registros de pacientes em RDS PostgreSQL (500GB), imagens médicas em S3 (10TB), e logs de auditoria em CloudWatch Logs (1TB/mês). Os dados devem ser replicados para múltiplas regiões (pelo menos 2 regiões) e o sistema deve fazer failover automático em caso de falha regional sem perda de dados. A aplicação processa transações críticas que não podem ser perdidas, e o failover deve ser transparente para usuários (sem interrupção de serviço). Qual arquitetura AWS oferece melhor suporte para backup contínuo, replicação multi-regional e failover automático considerando RPO de 1 minuto e RTO de 5 minutos?",
      "en": "A critical healthcare application processes 100,000 medical records per hour and needs continuous backup with RPO of 1 minute and RTO of 5 minutes to meet HIPAA regulations. Data includes patient records in RDS PostgreSQL (500GB), medical images in S3 (10TB), and audit logs in CloudWatch Logs (1TB/month). Data must be replicated to multiple regions (at least 2 regions) and the system must automatically failover in case of regional failure without data loss. The application processes critical transactions that cannot be lost, and failover must be transparent to users (no service interruption). Which AWS architecture offers best support for continuous backup, multi-regional replication and automatic failover considering 1 minute RPO and 5 minute RTO?"
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
          "pt-BR": "RDS Continuous Backups + Cross-Region Automated Backups + Multi-AZ + Route 53 health checks para failover + S3 Cross-Region Replication + CloudWatch Logs export para S3",
          "en": "RDS Continuous Backups + Cross-Region Automated Backups + Multi-AZ + Route 53 health checks for failover + S3 Cross-Region Replication + CloudWatch Logs export to S3"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes corretos para RDS (Continuous Backups, Cross-Region Automated Backups, Multi-AZ, Route 53), S3 CRR e exportação de CloudWatch Logs, mas Cross-Region Automated Backups não oferece failover automático rápido o suficiente para RTO de 5 minutos. Para RTO de 5 minutos, é necessário RDS Cross-Region Read Replica com failover automático, não apenas Automated Backups. Automated Backups são para restauração, não para failover rápido - restaurar de backup leva 15-30 minutos. Read Replica pode ser promovida em segundos, atendendo RTO de 5 minutos.",
          "en": "This solution includes all correct components for RDS (Continuous Backups, Cross-Region Automated Backups, Multi-AZ, Route 53), S3 CRR and CloudWatch Logs export, but Cross-Region Automated Backups doesn't offer fast enough automatic failover for 5 minute RTO. For 5 minute RTO, RDS Cross-Region Read Replica with automatic failover is needed, not just Automated Backups. Automated Backups are for restoration, not for fast failover - restoring from backup takes 15-30 minutes. Read Replica can be promoted in seconds, meeting 5 minute RTO."
        }
      },
      {
        title: {
          "pt-BR": "RDS Continuous Backups + Cross-Region Read Replica com failover automático + Multi-AZ + Route 53 health checks + S3 Cross-Region Replication (sem exportação de CloudWatch Logs)",
          "en": "RDS Continuous Backups + Cross-Region Read Replica with automatic failover + Multi-AZ + Route 53 health checks + S3 Cross-Region Replication (without CloudWatch Logs export)"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes corretos para RDS (Continuous Backups, Cross-Region Read Replica com failover automático, Multi-AZ, Route 53) e S3 CRR, mas falta exportação de CloudWatch Logs para S3 em outra região. Para uma aplicação de saúde que precisa de auditoria completa (HIPAA), logs de CloudWatch devem ser replicados para outra região para garantir que logs de auditoria não sejam perdidos em caso de falha regional. Sem exportação de logs, você perderia histórico de auditoria crítico para compliance.",
          "en": "This solution includes all correct components for RDS (Continuous Backups, Cross-Region Read Replica with automatic failover, Multi-AZ, Route 53) and S3 CRR, but lacks CloudWatch Logs export to S3 in another region. For a healthcare application that needs complete auditing (HIPAA), CloudWatch logs must be replicated to another region to ensure audit logs aren't lost in case of regional failure. Without log export, you would lose critical audit history for compliance."
        }
      },
      {
        title: {
          "pt-BR": "RDS Continuous Backups + Cross-Region Read Replica com failover automático + Multi-AZ + Route 53 health checks + S3 Cross-Region Replication + CloudWatch Logs export para S3 + DynamoDB Global Tables para metadados",
          "en": "RDS Continuous Backups + Cross-Region Read Replica with automatic failover + Multi-AZ + Route 53 health checks + S3 Cross-Region Replication + CloudWatch Logs export to S3 + DynamoDB Global Tables for metadata"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes corretos para RDS, S3 e CloudWatch Logs, mas adiciona DynamoDB Global Tables desnecessariamente. Para uma aplicação que armazena dados em RDS PostgreSQL (500GB) e S3 (10TB), DynamoDB Global Tables não é necessário - RDS Cross-Region Read Replica e S3 CRR já oferecem replicação multi-regional. DynamoDB Global Tables é para dados NoSQL, não para dados relacionais ou objetos. Adicionar DynamoDB Global Tables para metadados adiciona complexidade e custo sem benefício proporcional.",
          "en": "This solution includes all correct components for RDS, S3 and CloudWatch Logs, but unnecessarily adds DynamoDB Global Tables. For an application that stores data in RDS PostgreSQL (500GB) and S3 (10TB), DynamoDB Global Tables isn't necessary - RDS Cross-Region Read Replica and S3 CRR already offer multi-regional replication. DynamoDB Global Tables is for NoSQL data, not for relational data or objects. Adding DynamoDB Global Tables for metadata adds complexity and cost without proportional benefit."
        }
      },
      {
        title: {
          "pt-BR": "RDS Continuous Backups + Cross-Region Read Replica com failover automático + Multi-AZ + Route 53 health checks + S3 Cross-Region Replication + CloudWatch Logs export para S3",
          "en": "RDS Continuous Backups + Cross-Region Read Replica with automatic failover + Multi-AZ + Route 53 health checks + S3 Cross-Region Replication + CloudWatch Logs export to S3"
        },
        correct: true,
        explanation: {
          "pt-BR": "RDS Continuous Backups oferece RPO de 1 minuto através de backups contínuos. Cross-Region Read Replica com failover automático oferece RTO de 5 minutos - a réplica pode ser promovida em segundos quando a região primária falha, muito mais rápido que restaurar de backup (15-30 minutos). Multi-AZ oferece alta disponibilidade dentro da região. Route 53 health checks detecta falhas regionais e faz failover automático. S3 Cross-Region Replication replica imagens médicas (10TB) para múltiplas regiões. CloudWatch Logs export para S3 garante que logs de auditoria (1TB/mês) sejam replicados para compliance HIPAA. Esta combinação atende RPO de 1 minuto e RTO de 5 minutos com replicação completa de todos os dados.",
          "en": "RDS Continuous Backups offers 1 minute RPO through continuous backups. Cross-Region Read Replica with automatic failover offers 5 minute RTO - the replica can be promoted in seconds when the primary region fails, much faster than restoring from backup (15-30 minutes). Multi-AZ offers high availability within the region. Route 53 health checks detects regional failures and automatically fails over. S3 Cross-Region Replication replicates medical images (10TB) to multiple regions. CloudWatch Logs export to S3 ensures audit logs (1TB/month) are replicated for HIPAA compliance. This combination meets 1 minute RPO and 5 minute RTO with complete replication of all data."
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
      "pt-BR": "Uma aplicação de monitoramento industrial precisa processar 1 milhão de eventos por segundo de 200.000 sensores IoT distribuídos em 100 fábricas, aplicar transformações em tempo real (normalização, enriquecimento com dados de referência, cálculos de agregação), e armazenar resultados para análise histórica e machine learning. Cada evento contém telemetria (temperatura, pressão, vibração, consumo de energia), metadados de localização, timestamp, e status do sensor. A aplicação precisa de processamento com baixa latência (< 100ms do recebimento até armazenamento) e alta throughput (1M eventos/segundo = 86.4 bilhões de eventos/dia). Os dados transformados precisam ser armazenados em formato otimizado para analytics (Parquet) em S3, e análises em tempo real precisam ser executadas sobre os streams para detectar anomalias e disparar alertas. Qual arquitetura AWS oferece melhor suporte para processamento de streaming em alta escala com baixa latência, transformações em tempo real e armazenamento otimizado para análise?",
      "en": "An industrial monitoring application needs to process 1 million events per second from 200,000 IoT sensors distributed across 100 factories, apply real-time transformations (normalization, enrichment with reference data, aggregation calculations), and store results for historical analysis and machine learning. Each event contains telemetry (temperature, pressure, vibration, energy consumption), location metadata, timestamp, and sensor status. The application needs processing with low latency (< 100ms from receipt to storage) and high throughput (1M events/second = 86.4 billion events/day). Transformed data must be stored in analytics-optimized format (Parquet) in S3, and real-time analyses must be executed on streams to detect anomalies and trigger alerts. Which AWS architecture offers best support for high-scale streaming processing with low latency, real-time transformations and analytics-optimized storage?"
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
          "pt-BR": "Kinesis Data Streams processa 1 milhão de eventos/segundo com baixa latência (< 100ms) e alta throughput, suportando 200.000 sensores IoT. Kinesis Data Firehose carrega dados transformados em S3 automaticamente em formato Parquet otimizado para analytics. Kinesis Analytics analisa streams em tempo real para detectar anomalias e disparar alertas. Lambda aplica transformações em tempo real (normalização, enriquecimento, agregação). S3 armazena resultados para análise histórica e machine learning. Esta arquitetura oferece processamento de streaming completo escalando para 86.4 bilhões de eventos/dia.",
          "en": "Kinesis Data Streams processes 1 million events/second with low latency (< 100ms) and high throughput, supporting 200,000 IoT sensors. Kinesis Data Firehose automatically loads transformed data to S3 in Parquet format optimized for analytics. Kinesis Analytics analyzes streams in real-time to detect anomalies and trigger alerts. Lambda applies real-time transformations (normalization, enrichment, aggregation). S3 stores results for historical analysis and machine learning. This architecture offers complete streaming processing scaling to 86.4 billion events/day."
        }
      },
      {
        title: {
          "pt-BR": "Kinesis Data Streams + Kinesis Data Firehose + Kinesis Analytics + S3 + Lambda para transformações + Glue para ETL adicional",
          "en": "Kinesis Data Streams + Kinesis Data Firehose + Kinesis Analytics + S3 + Lambda for transformations + Glue for additional ETL"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes corretos (Kinesis Data Streams, Firehose, Analytics, S3, Lambda), mas adiciona Glue desnecessariamente. Glue é para ETL batch em dados já armazenados em S3, não para processamento de streaming em tempo real. Para uma aplicação que precisa processar 1 milhão de eventos/segundo com latência < 100ms, Lambda já aplica transformações em tempo real no stream. Glue adiciona complexidade e latência desnecessária - ele é para transformações batch em dados históricos, não para streaming em tempo real. A solução correta é Kinesis Data Streams + Firehose + Analytics + S3 + Lambda, sem Glue.",
          "en": "This solution includes all correct components (Kinesis Data Streams, Firehose, Analytics, S3, Lambda), but unnecessarily adds Glue. Glue is for batch ETL on data already stored in S3, not for real-time streaming processing. For an application that needs to process 1 million events/second with < 100ms latency, Lambda already applies real-time transformations on the stream. Glue adds unnecessary complexity and latency - it's for batch transformations on historical data, not for real-time streaming. The correct solution is Kinesis Data Streams + Firehose + Analytics + S3 + Lambda, without Glue."
        }
      },
      {
        title: {
          "pt-BR": "Kinesis Data Streams + Kinesis Data Firehose + Kinesis Analytics + S3 + Lambda para transformações + Redshift para análise adicional",
          "en": "Kinesis Data Streams + Kinesis Data Firehose + Kinesis Analytics + S3 + Lambda for transformations + Redshift for additional analysis"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes corretos (Kinesis Data Streams, Firehose, Analytics, S3, Lambda), mas adiciona Redshift desnecessariamente. Para uma aplicação que precisa processar 1 milhão de eventos/segundo em tempo real e armazenar em S3 para análise histórica, Redshift adiciona complexidade e custo significativo. Kinesis Analytics já oferece análise em tempo real sobre streams, e S3 com Redshift Spectrum pode consultar dados históricos quando necessário. Redshift cluster dedicado é caro para este caso e não é necessário quando Kinesis Analytics + S3 já oferecem análise em tempo real e histórico. A solução correta é Kinesis Data Streams + Firehose + Analytics + S3 + Lambda, sem Redshift.",
          "en": "This solution includes all correct components (Kinesis Data Streams, Firehose, Analytics, S3, Lambda), but unnecessarily adds Redshift. For an application that needs to process 1 million events/second in real-time and store in S3 for historical analysis, Redshift adds complexity and significant cost. Kinesis Analytics already offers real-time analysis on streams, and S3 with Redshift Spectrum can query historical data when needed. Dedicated Redshift cluster is expensive for this case and not necessary when Kinesis Analytics + S3 already offer real-time and historical analysis. The correct solution is Kinesis Data Streams + Firehose + Analytics + S3 + Lambda, without Redshift."
        }
      },
      {
        title: {
          "pt-BR": "Kinesis Data Streams + Kinesis Data Firehose + Kinesis Analytics + S3 + Lambda para transformações + DynamoDB para armazenamento adicional",
          "en": "Kinesis Data Streams + Kinesis Data Firehose + Kinesis Analytics + S3 + Lambda for transformations + DynamoDB for additional storage"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes corretos (Kinesis Data Streams, Firehose, Analytics, S3, Lambda), mas adiciona DynamoDB desnecessariamente. Para uma aplicação que precisa armazenar dados transformados para análise histórica e machine learning, S3 já oferece armazenamento escalável e econômico em formato Parquet. DynamoDB é para dados transacionais com acesso rápido, não para armazenamento de dados históricos para analytics. Para 86.4 bilhões de eventos/dia, S3 é muito mais econômico que DynamoDB para armazenamento histórico. DynamoDB adiciona custo significativo sem benefício proporcional para análise histórica. A solução correta é Kinesis Data Streams + Firehose + Analytics + S3 + Lambda, sem DynamoDB.",
          "en": "This solution includes all correct components (Kinesis Data Streams, Firehose, Analytics, S3, Lambda), but unnecessarily adds DynamoDB. For an application that needs to store transformed data for historical analysis and machine learning, S3 already offers scalable and economical storage in Parquet format. DynamoDB is for transactional data with fast access, not for historical data storage for analytics. For 86.4 billion events/day, S3 is much more economical than DynamoDB for historical storage. DynamoDB adds significant cost without proportional benefit for historical analysis. The correct solution is Kinesis Data Streams + Firehose + Analytics + S3 + Lambda, without DynamoDB."
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
      "pt-BR": "Segurança - Encryption e Key Management Avançado",
      "en": "Security - Advanced Encryption and Key Management"
    },
    description: {
      "pt-BR": "Uma instituição financeira multinacional processa 50 milhões de transações diárias com dados altamente sensíveis (PII, dados bancários, informações de cartão de crédito) distribuídos em 8 regiões AWS. A aplicação armazena dados em múltiplos serviços: RDS PostgreSQL (2TB de dados transacionais), DynamoDB (500GB de dados de sessão e cache), S3 (50TB de documentos e relatórios), EBS volumes (1TB de dados temporários), e ElastiCache Redis (100GB de dados em memória). A empresa precisa atender múltiplas regulamentações simultaneamente: PCI-DSS (requer rotação de chaves a cada 90 dias), GDPR (requer criptografia de dados pessoais), SOX (requer auditoria completa de acesso a dados financeiros), e regulamentações locais em cada país. As chaves de criptografia devem ser rotacionadas automaticamente sem downtime, o acesso a chaves deve ser auditado em tempo real, e a arquitetura deve suportar múltiplos algoritmos de criptografia (AES-256, RSA-4096) para diferentes tipos de dados. A solução deve permitir revogação imediata de acesso em caso de violação de segurança, manter histórico completo de todas as operações de chaves para compliance, e suportar envelope encryption para otimizar performance. Qual arquitetura AWS oferece gerenciamento de chaves mais completo considerando rotação automática, auditoria em tempo real, compliance multi-regulamentação e suporte a múltiplos algoritmos?",
      "en": "A multinational financial institution processes 50 million daily transactions with highly sensitive data (PII, banking data, credit card information) distributed across 8 AWS regions. The application stores data in multiple services: RDS PostgreSQL (2TB of transactional data), DynamoDB (500GB of session and cache data), S3 (50TB of documents and reports), EBS volumes (1TB of temporary data), and ElastiCache Redis (100GB of in-memory data). The company needs to meet multiple regulations simultaneously: PCI-DSS (requires key rotation every 90 days), GDPR (requires encryption of personal data), SOX (requires complete auditing of access to financial data), and local regulations in each country. Encryption keys must be rotated automatically without downtime, key access must be audited in real-time, and the architecture must support multiple encryption algorithms (AES-256, RSA-4096) for different data types. The solution must allow immediate access revocation in case of security breach, maintain complete history of all key operations for compliance, and support envelope encryption to optimize performance. Which AWS architecture offers most complete key management considering automatic rotation, real-time auditing, multi-regulation compliance and support for multiple algorithms?"
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
          "pt-BR": "AWS KMS com rotação automática + CloudTrail para auditoria + TLS/SSL para dados em trânsito + encryption at rest habilitado em todos os serviços + AWS Secrets Manager para segredos",
          "en": "AWS KMS with automatic rotation + CloudTrail for auditing + TLS/SSL for data in transit + encryption at rest enabled on all services + AWS Secrets Manager for secrets"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui KMS com rotação automática, CloudTrail, TLS/SSL e encryption at rest (componentes corretos), mas adiciona Secrets Manager que não é necessário para gerenciamento de chaves de criptografia. Secrets Manager é para armazenar segredos (senhas, tokens, API keys), não para gerenciar chaves de criptografia usadas para criptografar dados. KMS já gerencia chaves de criptografia para todos os serviços AWS (RDS, S3, DynamoDB, EBS). Para uma arquitetura de gerenciamento de chaves completa, KMS + CloudTrail + TLS/SSL + encryption at rest são suficientes - Secrets Manager adiciona complexidade sem contribuir para gerenciamento de chaves de criptografia.",
          "en": "This solution includes KMS with automatic rotation, CloudTrail, TLS/SSL and encryption at rest (correct components), but adds Secrets Manager which isn't necessary for encryption key management. Secrets Manager is for storing secrets (passwords, tokens, API keys), not for managing encryption keys used to encrypt data. KMS already manages encryption keys for all AWS services (RDS, S3, DynamoDB, EBS). For a complete key management architecture, KMS + CloudTrail + TLS/SSL + encryption at rest are sufficient - Secrets Manager adds complexity without contributing to encryption key management."
        }
      },
      {
        title: {
          "pt-BR": "AWS KMS com rotação automática + CloudTrail para auditoria + TLS/SSL para dados em trânsito + encryption at rest habilitado em todos os serviços",
          "en": "AWS KMS with automatic rotation + CloudTrail for auditing + TLS/SSL for data in transit + encryption at rest enabled on all services"
        },
        correct: true,
        explanation: {
          "pt-BR": "KMS gerencia chaves centralizadamente com rotação automática (atende PCI-DSS de 90 dias) e suporta múltiplos algoritmos (AES-256, RSA-4096) para diferentes tipos de dados. CloudTrail audita todos os acessos a chaves em tempo real (atende SOX e GDPR). TLS/SSL criptografa dados em trânsito. Encryption at rest em todos os serviços (RDS, S3, DynamoDB, EBS, ElastiCache) protege dados armazenados em todas as 8 regiões. KMS permite revogação imediata de acesso e mantém histórico completo de operações. Esta combinação oferece segurança completa e compliance multi-regulamentação.",
          "en": "KMS manages keys centrally with automatic rotation (meets PCI-DSS 90-day requirement) and supports multiple algorithms (AES-256, RSA-4096) for different data types. CloudTrail audits all key access in real-time (meets SOX and GDPR). TLS/SSL encrypts data in transit. Encryption at rest on all services (RDS, S3, DynamoDB, EBS, ElastiCache) protects stored data across all 8 regions. KMS allows immediate access revocation and maintains complete operation history. This combination offers complete security and multi-regulation compliance."
        }
      },
      {
        title: {
          "pt-BR": "AWS KMS com rotação automática + CloudTrail para auditoria + TLS/SSL para dados em trânsito + encryption at rest habilitado em todos os serviços + AWS CloudHSM para chaves críticas",
          "en": "AWS KMS with automatic rotation + CloudTrail for auditing + TLS/SSL for data in transit + encryption at rest enabled on all services + AWS CloudHSM for critical keys"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes corretos (KMS, CloudTrail, TLS/SSL, encryption at rest), mas adiciona CloudHSM desnecessariamente. CloudHSM é um hardware dedicado para requisitos de compliance muito específicos (FIPS 140-2 Level 3), mas para a maioria dos casos de uso financeiros, KMS já oferece gerenciamento de chaves completo com rotação automática, auditoria e suporte a múltiplos algoritmos. CloudHSM adiciona complexidade (gerenciamento de hardware dedicado), custo significativo, e não é necessário para atender PCI-DSS, GDPR e SOX - KMS é suficiente. A solução correta é KMS + CloudTrail + TLS/SSL + encryption at rest, sem CloudHSM.",
          "en": "This solution includes all correct components (KMS, CloudTrail, TLS/SSL, encryption at rest), but unnecessarily adds CloudHSM. CloudHSM is dedicated hardware for very specific compliance requirements (FIPS 140-2 Level 3), but for most financial use cases, KMS already offers complete key management with automatic rotation, auditing and support for multiple algorithms. CloudHSM adds complexity (dedicated hardware management), significant cost, and isn't necessary to meet PCI-DSS, GDPR and SOX - KMS is sufficient. The correct solution is KMS + CloudTrail + TLS/SSL + encryption at rest, without CloudHSM."
        }
      },
      {
        title: {
          "pt-BR": "AWS KMS com rotação manual + CloudTrail para auditoria + TLS/SSL para dados em trânsito + encryption at rest habilitado em todos os serviços",
          "en": "AWS KMS with manual rotation + CloudTrail for auditing + TLS/SSL for data in transit + encryption at rest enabled on all services"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui KMS, CloudTrail, TLS/SSL e encryption at rest (componentes corretos), mas rotação manual não atende requisitos de compliance. Para uma instituição financeira que precisa atender PCI-DSS (rotação a cada 90 dias), GDPR e SOX, rotação manual é propensa a erros humanos, pode ser esquecida, e não escala para 8 regiões com múltiplos serviços. Para 50 milhões de transações diárias distribuídas em múltiplas regiões, rotação automática é essencial para garantir compliance contínuo sem downtime e sem risco de esquecimento. Rotação automática do KMS garante que chaves sejam rotacionadas exatamente a cada 90 dias sem intervenção manual.",
          "en": "This solution includes KMS, CloudTrail, TLS/SSL and encryption at rest (correct components), but manual rotation doesn't meet compliance requirements. For a financial institution that needs to meet PCI-DSS (rotation every 90 days), GDPR and SOX, manual rotation is prone to human errors, can be forgotten, and doesn't scale for 8 regions with multiple services. For 50 million daily transactions distributed across multiple regions, automatic rotation is essential to ensure continuous compliance without downtime and without risk of forgetting. KMS automatic rotation ensures keys are rotated exactly every 90 days without manual intervention."
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
      "pt-BR": "Arquitetura de Eventos - Event-Driven Avançado",
      "en": "Event Architecture - Advanced Event-Driven"
    },
    description: {
      "pt-BR": "Uma plataforma de e-commerce global com 200+ microserviços processa 10 milhões de eventos por minuto durante picos (Black Friday, eventos sazonais). A arquitetura precisa suportar múltiplos padrões de processamento: eventos críticos de pagamento que requerem processamento garantido com exactly-once semantics e retry automático, eventos de analytics que são fire-and-forget mas precisam de alta throughput, eventos de notificações que precisam ser entregues a múltiplos consumidores simultaneamente, e eventos de auditoria que devem ser persistidos para compliance. A aplicação precisa de roteamento de eventos baseado em regras complexas (filtros por tipo de evento, origem, região, prioridade), suporte a transformações de eventos em tempo real, integração com sistemas externos via webhooks, e capacidade de reprocessar eventos históricos para análise. Durante falhas parciais, eventos críticos não podem ser perdidos e devem ser reprocessados automaticamente, enquanto eventos não-críticos podem ser descartados após timeout. A arquitetura deve suportar event sourcing para reconstruir estado de aplicação, manter ordem de eventos quando necessário, e oferecer visibilidade completa do fluxo de eventos através de múltiplos serviços. Qual arquitetura AWS oferece melhor suporte para processamento de eventos em alta escala considerando múltiplos padrões, roteamento complexo, processamento garantido e reprocessamento?",
      "en": "A global e-commerce platform with 200+ microservices processes 10 million events per minute during peaks (Black Friday, seasonal events). The architecture needs to support multiple processing patterns: critical payment events requiring guaranteed processing with exactly-once semantics and automatic retry, analytics events that are fire-and-forget but need high throughput, notification events that need to be delivered to multiple consumers simultaneously, and audit events that must be persisted for compliance. The application needs event routing based on complex rules (filters by event type, origin, region, priority), support for real-time event transformations, integration with external systems via webhooks, and ability to reprocess historical events for analysis. During partial failures, critical events cannot be lost and must be automatically reprocessed, while non-critical events can be discarded after timeout. The architecture must support event sourcing to reconstruct application state, maintain event order when necessary, and offer complete visibility of event flow across multiple services. Which AWS architecture offers best support for high-scale event processing considering multiple patterns, complex routing, guaranteed processing and reprocessing?"
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
          "pt-BR": "EventBridge para roteamento de eventos + SQS para processamento garantido + Dead Letter Queues para falhas + SNS para notificações múltiplas",
          "en": "EventBridge for event routing + SQS for guaranteed processing + Dead Letter Queues for failures + SNS for multiple notifications"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui EventBridge, SQS e DLQ (componentes corretos), mas adiciona SNS que pode ser redundante. EventBridge já pode rotear eventos para múltiplos consumidores simultaneamente através de regras, e SQS pode garantir processamento de eventos críticos. SNS é útil para notificações push (email, SMS, mobile), mas para uma arquitetura de eventos entre microserviços, EventBridge + SQS já oferece roteamento e processamento garantido. SNS adiciona complexidade adicional sem benefício proporcional para este caso de uso específico de eventos entre microserviços.",
          "en": "This solution includes EventBridge, SQS and DLQ (correct components), but adds SNS which may be redundant. EventBridge can already route events to multiple consumers simultaneously through rules, and SQS can guarantee processing of critical events. SNS is useful for push notifications (email, SMS, mobile), but for an event architecture between microservices, EventBridge + SQS already offers routing and guaranteed processing. SNS adds additional complexity without proportional benefit for this specific microservices event use case."
        }
      },
      {
        title: {
          "pt-BR": "EventBridge para roteamento de eventos + SQS para processamento garantido + Dead Letter Queues para falhas",
          "en": "EventBridge for event routing + SQS for guaranteed processing + Dead Letter Queues for failures"
        },
        correct: true,
        explanation: {
          "pt-BR": "EventBridge roteia eventos baseado em regras complexas (tipo, origem, região, prioridade) para múltiplos serviços simultaneamente (fire-and-forget para analytics, notificações). SQS garante processamento de eventos críticos (pagamentos) com exactly-once semantics e retry automático. Dead Letter Queues captura eventos que falharam após múltiplas tentativas, permitindo reprocessamento manual e análise de falhas. EventBridge suporta transformações de eventos e integração com webhooks. Esta combinação oferece desacoplamento completo, processamento garantido para eventos críticos, e alta throughput para eventos não-críticos, escalando para 10 milhões de eventos/minuto.",
          "en": "EventBridge routes events based on complex rules (type, origin, region, priority) to multiple services simultaneously (fire-and-forget for analytics, notifications). SQS guarantees processing of critical events (payments) with exactly-once semantics and automatic retry. Dead Letter Queues captures events that failed after multiple attempts, allowing manual reprocessing and failure analysis. EventBridge supports event transformations and webhook integration. This combination offers complete decoupling, guaranteed processing for critical events, and high throughput for non-critical events, scaling to 10 million events/minute."
        }
      },
      {
        title: {
          "pt-BR": "EventBridge para roteamento de eventos + SQS FIFO para processamento garantido + Dead Letter Queues para falhas",
          "en": "EventBridge for event routing + SQS FIFO for guaranteed processing + Dead Letter Queues for failures"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução usa EventBridge e DLQ (componentes corretos), mas SQS FIFO tem throughput limitado (3.000 mensagens/segundo por fila) e latência mais alta que SQS Standard. Para processar 10 milhões de eventos/minuto (166.667/segundo) durante picos, SQS FIFO não escala adequadamente - seria necessário múltiplas filas FIFO, aumentando complexidade. SQS Standard oferece throughput ilimitado e latência mais baixa, sendo mais adequado para alta escala. FIFO é necessário apenas quando ordem exata de eventos é crítica - para a maioria dos eventos de e-commerce, ordem eventual é suficiente e Standard Queues oferecem melhor performance.",
          "en": "This solution uses EventBridge and DLQ (correct components), but SQS FIFO has limited throughput (3,000 messages/second per queue) and higher latency than SQS Standard. To process 10 million events/minute (166,667/second) during peaks, SQS FIFO doesn't scale adequately - multiple FIFO queues would be needed, increasing complexity. SQS Standard offers unlimited throughput and lower latency, being more suitable for high scale. FIFO is needed only when exact event order is critical - for most e-commerce events, eventual order is sufficient and Standard Queues offer better performance."
        }
      },
      {
        title: {
          "pt-BR": "EventBridge para roteamento de eventos + SQS para processamento garantido + Dead Letter Queues para falhas + Step Functions para orquestração de workflows",
          "en": "EventBridge for event routing + SQS for guaranteed processing + Dead Letter Queues for failures + Step Functions for workflow orchestration"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui EventBridge, SQS e DLQ (componentes corretos), mas adiciona Step Functions desnecessariamente. Step Functions é para orquestração de workflows complexos com múltiplas etapas sequenciais, não para processamento de eventos em alta escala entre microserviços. Para uma plataforma que processa 10 milhões de eventos/minuto, Step Functions adiciona latência e custo significativos. EventBridge + SQS já oferece roteamento de eventos e processamento garantido - Step Functions é para workflows de negócio, não para arquitetura de eventos entre microserviços. A solução correta é EventBridge + SQS + DLQ, sem Step Functions.",
          "en": "This solution includes EventBridge, SQS and DLQ (correct components), but unnecessarily adds Step Functions. Step Functions is for orchestrating complex multi-step workflows, not for high-scale event processing between microservices. For a platform processing 10 million events/minute, Step Functions adds significant latency and cost. EventBridge + SQS already offers event routing and guaranteed processing - Step Functions is for business workflows, not for event architecture between microservices. The correct solution is EventBridge + SQS + DLQ, without Step Functions."
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
      "pt-BR": "Arquitetura de Observabilidade - Observabilidade Completa em Escala",
      "en": "Observability Architecture - Complete Observability at Scale"
    },
    description: {
      "pt-BR": "Uma plataforma de fintech crítica com 150+ microserviços distribuídos em 5 regiões AWS processa 100 milhões de requisições diárias com picos de 50.000 requisições/segundo. A aplicação possui arquitetura complexa: API Gateway → Lambda → SQS → Lambda → DynamoDB → Lambda → SNS → Lambda → RDS, com requisições passando por 10-15 serviços em média. Durante incidentes, a latência P95 pode variar de 200ms a 30 segundos de forma imprevisível, e a equipe precisa identificar qual serviço específico está causando degradação em menos de 2 minutos. A aplicação precisa de observabilidade completa: logs centralizados de todos os serviços com retenção de 90 dias para compliance, métricas de performance em tempo real (latência, throughput, erro rate) com granularidade de 1 minuto, traces distribuídos mostrando o caminho completo de cada requisição com spans detalhados, alertas proativos baseados em thresholds dinâmicos e anomalias detectadas por machine learning, dashboards em tempo real com métricas de negócio customizadas (transações processadas, receita por minuto, taxa de conversão), e capacidade de correlacionar logs, métricas e traces para debugging rápido. A solução deve suportar queries complexas em logs (CloudWatch Insights), análise de padrões de erro, identificação de dependências entre serviços, e métricas de SLA (99.9% disponibilidade). Qual arquitetura AWS oferece observabilidade mais completa considerando logs, métricas, traces, alertas, dashboards e análise em escala?",
      "en": "A critical fintech platform with 150+ microservices distributed across 5 AWS regions processes 100 million daily requests with peaks of 50,000 requests/second. The application has complex architecture: API Gateway → Lambda → SQS → Lambda → DynamoDB → Lambda → SNS → Lambda → RDS, with requests passing through 10-15 services on average. During incidents, P95 latency can vary unpredictably from 200ms to 30 seconds, and the team needs to identify which specific service is causing degradation in less than 2 minutes. The application needs complete observability: centralized logs from all services with 90-day retention for compliance, real-time performance metrics (latency, throughput, error rate) with 1-minute granularity, distributed traces showing complete path of each request with detailed spans, proactive alerts based on dynamic thresholds and anomalies detected by machine learning, real-time dashboards with custom business metrics (processed transactions, revenue per minute, conversion rate), and ability to correlate logs, metrics and traces for rapid debugging. The solution must support complex log queries (CloudWatch Insights), error pattern analysis, service dependency identification, and SLA metrics (99.9% availability). Which AWS architecture offers most complete observability considering logs, metrics, traces, alerts, dashboards and analysis at scale?"
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
          "pt-BR": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Alarms + CloudWatch Dashboards + CloudWatch Insights + Prometheus para métricas adicionais",
          "en": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Alarms + CloudWatch Dashboards + CloudWatch Insights + Prometheus for additional metrics"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes essenciais do CloudWatch (Logs, Metrics, X-Ray, Insights, Alarms, Dashboards), mas adiciona Prometheus desnecessariamente. CloudWatch Metrics já oferece métricas customizadas via PutMetricData API, suporta métricas de negócio, e escala para 100 milhões de requisições diárias. Prometheus adiciona complexidade (requer servidor Prometheus, configuração de scraping, integração com CloudWatch), custo adicional, e não é necessário quando CloudWatch já oferece todas as funcionalidades necessárias para observabilidade completa. Para observabilidade de aplicações AWS em escala, CloudWatch é suficiente - Prometheus é redundante e adiciona overhead operacional.",
          "en": "This solution includes all essential CloudWatch components (Logs, Metrics, X-Ray, Insights, Alarms, Dashboards), but unnecessarily adds Prometheus. CloudWatch Metrics already offers custom metrics via PutMetricData API, supports business metrics, and scales to 100 million daily requests. Prometheus adds complexity (requires Prometheus server, scraping configuration, CloudWatch integration), additional cost, and isn't necessary when CloudWatch already offers all needed functionality for complete observability. For observability of AWS applications at scale, CloudWatch is sufficient - Prometheus is redundant and adds operational overhead."
        }
      },
      {
        title: {
          "pt-BR": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Alarms + CloudWatch Dashboards + CloudWatch Insights",
          "en": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Alarms + CloudWatch Dashboards + CloudWatch Insights"
        },
        correct: true,
        explanation: {
          "pt-BR": "CloudWatch Logs centraliza logs de todos os 150+ microserviços com retenção de 90 dias para compliance. CloudWatch Metrics rastreia métricas de performance em tempo real (latência, throughput, erro rate) com granularidade de 1 minuto e suporta métricas customizadas de negócio. X-Ray rastreia requisições distribuídas mostrando latência de cada componente (identificando qual serviço causa latência de 30s em < 2 minutos). CloudWatch Alarms alerta proativamente baseado em thresholds e anomalias. Dashboards visualiza métricas em tempo real com métricas de negócio. Insights permite queries complexas em logs para correlacionar logs, métricas e traces. Esta combinação oferece observabilidade completa escalando para 100 milhões de requisições diárias.",
          "en": "CloudWatch Logs centralizes logs from all 150+ microservices with 90-day retention for compliance. CloudWatch Metrics tracks real-time performance metrics (latency, throughput, error rate) with 1-minute granularity and supports custom business metrics. X-Ray traces distributed requests showing latency of each component (identifying which service causes 30s latency in < 2 minutes). CloudWatch Alarms proactively alerts based on thresholds and anomalies. Dashboards visualizes real-time metrics with business metrics. Insights allows complex log queries to correlate logs, metrics and traces. This combination offers complete observability scaling to 100 million daily requests."
        }
      },
      {
        title: {
          "pt-BR": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Alarms + CloudWatch Dashboards (sem CloudWatch Insights)",
          "en": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Alarms + CloudWatch Dashboards (without CloudWatch Insights)"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui Logs, Metrics, X-Ray, Alarms e Dashboards (componentes corretos), mas falta CloudWatch Insights que é essencial para queries complexas em logs e correlação entre logs, métricas e traces. Para uma equipe que precisa identificar rapidamente qual serviço está causando degradação em menos de 2 minutos, Insights permite queries SQL-like em logs para encontrar padrões de erro, correlacionar logs entre múltiplos serviços, e identificar a causa raiz de problemas. Sem Insights, a equipe precisaria analisar logs manualmente ou usar ferramentas externas, tornando diagnóstico muito mais lento. Para observabilidade completa em escala, Insights é essencial.",
          "en": "This solution includes Logs, Metrics, X-Ray, Alarms and Dashboards (correct components), but lacks CloudWatch Insights which is essential for complex log queries and correlation between logs, metrics and traces. For a team that needs to quickly identify which service is causing degradation in less than 2 minutes, Insights allows SQL-like queries on logs to find error patterns, correlate logs between multiple services, and identify root cause of problems. Without Insights, the team would need to manually analyze logs or use external tools, making diagnosis much slower. For complete observability at scale, Insights is essential."
        }
      },
      {
        title: {
          "pt-BR": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Alarms + CloudWatch Dashboards + CloudWatch Insights + Elasticsearch para análise de logs",
          "en": "CloudWatch Logs + CloudWatch Metrics + X-Ray + CloudWatch Alarms + CloudWatch Dashboards + CloudWatch Insights + Elasticsearch for log analysis"
        },
        correct: false,
        explanation: {
          "pt-BR": "Esta solução inclui todos os componentes essenciais do CloudWatch (Logs, Metrics, X-Ray, Insights, Alarms, Dashboards), mas adiciona Elasticsearch desnecessariamente. CloudWatch Insights já oferece análise de logs com queries SQL-like, suporta queries complexas, e integra nativamente com CloudWatch Logs. Elasticsearch adiciona complexidade (requer cluster Elasticsearch, configuração de índices, exportação de logs do CloudWatch), custo significativo, e não é necessário quando CloudWatch Insights já oferece análise de logs completa. Para observabilidade de aplicações AWS, CloudWatch Insights é suficiente - Elasticsearch é redundante e adiciona overhead operacional e financeiro.",
          "en": "This solution includes all essential CloudWatch components (Logs, Metrics, X-Ray, Insights, Alarms, Dashboards), but unnecessarily adds Elasticsearch. CloudWatch Insights already offers log analysis with SQL-like queries, supports complex queries, and natively integrates with CloudWatch Logs. Elasticsearch adds complexity (requires Elasticsearch cluster, index configuration, log export from CloudWatch), significant cost, and isn't necessary when CloudWatch Insights already offers complete log analysis. For observability of AWS applications, CloudWatch Insights is sufficient - Elasticsearch is redundant and adds operational and financial overhead."
        }
      }
    ],
    explanation: {
      "pt-BR": "CloudWatch Logs centraliza logs de todos os serviços. CloudWatch Metrics rastreia métricas de performance. X-Ray rastreia requisições distribuídas. Alarms alerta proativamente sobre problemas. Dashboards visualiza métricas em tempo real. Insights permite queries complexas em logs. Console.log não oferece observabilidade estruturada. Apenas Logs não mostra traces. Apenas X-Ray não mostra métricas.",
      "en": "CloudWatch Logs centralizes logs from all services. CloudWatch Metrics tracks performance metrics. X-Ray traces distributed requests. Alarms proactively alerts about problems. Dashboards visualizes metrics in real-time. Insights allows complex queries on logs. Console.log doesn't offer structured observability. Only Logs doesn't show traces. Only X-Ray doesn't show metrics."
    }
  }
];



