export const solutionsArchitectFlashcards = [
  {
    id: 1,
    category: { 'pt-BR': 'Banco de Dados', en: 'Database' },
    front: { 'pt-BR': 'Qual a diferença entre RDS Multi-AZ e Read Replicas?', en: 'What is the difference between RDS Multi-AZ and Read Replicas?' },
    back: {
      'pt-BR': 'Multi-AZ mantém uma réplica em standby síncrona em outra AZ para failover automático em caso de falha (alta disponibilidade). Read Replicas são réplicas assíncronas usadas para escalar leitura, podendo ficar em outras regiões.',
      en: 'Multi-AZ keeps a synchronous standby replica in another AZ for automatic failover in case of failure (high availability). Read Replicas are asynchronous replicas used to scale reads, and can be placed in other regions.'
    }
  },
  {
    id: 2,
    category: { 'pt-BR': 'Armazenamento', en: 'Storage' },
    front: { 'pt-BR': 'Quais são as principais classes de armazenamento do S3?', en: 'What are the main S3 storage classes?' },
    back: {
      'pt-BR': 'Standard (acesso frequente), Intelligent-Tiering (move automaticamente entre camadas), Standard-IA e One Zone-IA (acesso infrequente), Glacier Instant/Flexible/Deep Archive (arquivamento de longo prazo com custo decrescente e recuperação mais lenta).',
      en: 'Standard (frequent access), Intelligent-Tiering (moves automatically between tiers), Standard-IA and One Zone-IA (infrequent access), and Glacier Instant/Flexible/Deep Archive (long-term archiving with decreasing cost and slower retrieval).'
    }
  },
  {
    id: 3,
    category: { 'pt-BR': 'Rede', en: 'Networking' },
    front: { 'pt-BR': 'Qual a diferença entre VPC Peering e Transit Gateway?', en: 'What is the difference between VPC Peering and Transit Gateway?' },
    back: {
      'pt-BR': 'VPC Peering conecta duas VPCs diretamente ponto a ponto, sem transitividade (não roteia através de uma terceira VPC). Transit Gateway atua como um hub central que conecta e roteia tráfego entre muitas VPCs e conexões on-premises de forma transitiva.',
      en: 'VPC Peering connects two VPCs directly, point-to-point, without transitivity (it doesn\'t route through a third VPC). Transit Gateway acts as a central hub that connects and routes traffic between many VPCs and on-premises connections transitively.'
    }
  },
  {
    id: 4,
    category: { 'pt-BR': 'Rede', en: 'Networking' },
    front: { 'pt-BR': 'Qual a diferença entre AWS Direct Connect e Site-to-Site VPN?', en: 'What is the difference between AWS Direct Connect and Site-to-Site VPN?' },
    back: {
      'pt-BR': 'Direct Connect é uma conexão de rede privada e dedicada entre o data center do cliente e a AWS, com latência mais previsível e maior largura de banda. Site-to-Site VPN cria um túnel criptografado sobre a internet pública, mais rápido de configurar, porém sujeito à variabilidade da internet.',
      en: 'Direct Connect is a dedicated, private network connection between the customer\'s data center and AWS, with more predictable latency and higher bandwidth. Site-to-Site VPN creates an encrypted tunnel over the public internet, faster to set up, but subject to internet variability.'
    }
  },
  {
    id: 5,
    category: { 'pt-BR': 'Computação', en: 'Compute' },
    front: { 'pt-BR': 'Qual a diferença entre um Launch Template e um Auto Scaling Group?', en: 'What is the difference between a Launch Template and an Auto Scaling Group?' },
    back: {
      'pt-BR': 'O Launch Template define a configuração das instâncias a serem criadas (AMI, tipo, rede, etc.). O Auto Scaling Group usa esse template para gerenciar quantas instâncias existem, adicionando ou removendo conforme políticas de escala.',
      en: 'A Launch Template defines the configuration of the instances to be created (AMI, type, network, etc.). An Auto Scaling Group uses that template to manage how many instances exist, adding or removing them based on scaling policies.'
    }
  },
  {
    id: 6,
    category: { 'pt-BR': 'Rede', en: 'Networking' },
    front: { 'pt-BR': 'Qual a diferença entre Application Load Balancer (ALB) e Network Load Balancer (NLB)?', en: 'What is the difference between Application Load Balancer (ALB) and Network Load Balancer (NLB)?' },
    back: {
      'pt-BR': 'ALB opera na camada 7 (HTTP/HTTPS), roteando com base em conteúdo como path e host header. NLB opera na camada 4 (TCP/UDP), oferecendo latência ultrabaixa e suporte a IP estático/milhões de requisições por segundo.',
      en: 'ALB operates at layer 7 (HTTP/HTTPS), routing based on content such as path and host header. NLB operates at layer 4 (TCP/UDP), offering ultra-low latency and support for static IP/millions of requests per second.'
    }
  },
  {
    id: 7,
    category: { 'pt-BR': 'Rede', en: 'Networking' },
    front: { 'pt-BR': 'O que é Origin Access Control (OAC) no CloudFront?', en: 'What is Origin Access Control (OAC) in CloudFront?' },
    back: {
      'pt-BR': 'Mecanismo que permite ao CloudFront acessar um bucket S3 privado com segurança, sem que o bucket precise ser público, aplicando o princípio de menor privilégio na entrega de conteúdo.',
      en: 'A mechanism that lets CloudFront securely access a private S3 bucket without the bucket needing to be public, applying the principle of least privilege to content delivery.'
    }
  },
  {
    id: 8,
    category: { 'pt-BR': 'Rede', en: 'Networking' },
    front: { 'pt-BR': 'Cite três políticas de roteamento do Route 53.', en: 'Name three Route 53 routing policies.' },
    back: {
      'pt-BR': 'Simple (uma resposta fixa), Failover (rota para um recurso secundário se o primário falhar em health check), Latency-based (rota para a região com menor latência) — também existem Weighted, Geolocation e Geoproximity.',
      en: 'Simple (a single fixed answer), Failover (routes to a secondary resource if the primary fails a health check), Latency-based (routes to the region with lowest latency) — Weighted, Geolocation, and Geoproximity also exist.'
    }
  },
  {
    id: 9,
    category: { 'pt-BR': 'Recuperação de Desastres', en: 'Disaster Recovery' },
    front: { 'pt-BR': 'Cite as quatro estratégias clássicas de disaster recovery, da mais barata/lenta à mais cara/rápida.', en: 'Name the four classic disaster recovery strategies, from cheapest/slowest to most expensive/fastest.' },
    back: {
      'pt-BR': 'Backup and Restore, Pilot Light, Warm Standby e Multi-Site Active/Active — o custo e a velocidade de recuperação aumentam nessa ordem.',
      en: 'Backup and Restore, Pilot Light, Warm Standby, and Multi-Site Active/Active — cost and recovery speed increase in that order.'
    }
  },
  {
    id: 10,
    category: { 'pt-BR': 'Recuperação de Desastres', en: 'Disaster Recovery' },
    front: { 'pt-BR': 'Qual a diferença entre RTO e RPO?', en: 'What is the difference between RTO and RPO?' },
    back: {
      'pt-BR': 'RTO (Recovery Time Objective) é o tempo máximo aceitável para restaurar o serviço após uma falha. RPO (Recovery Point Objective) é a quantidade máxima aceitável de dados que se pode perder, medida em tempo desde o último backup.',
      en: 'RTO (Recovery Time Objective) is the maximum acceptable time to restore service after a failure. RPO (Recovery Point Objective) is the maximum acceptable amount of data loss, measured in time since the last backup.'
    }
  },
  {
    id: 11,
    category: { 'pt-BR': 'Armazenamento', en: 'Storage' },
    front: { 'pt-BR': 'Para que serve o AWS Backup?', en: 'What is AWS Backup used for?' },
    back: {
      'pt-BR': 'Serviço centralizado que automatiza e gerencia backups de múltiplos serviços AWS (EBS, RDS, DynamoDB, EFS, etc.) a partir de políticas únicas, em vez de configurar backup separadamente em cada serviço.',
      en: 'A centralized service that automates and manages backups of multiple AWS services (EBS, RDS, DynamoDB, EFS, etc.) from unified policies, instead of configuring backup separately in each service.'
    }
  },
  {
    id: 12,
    category: { 'pt-BR': 'Armazenamento', en: 'Storage' },
    front: { 'pt-BR': 'Para que serve o AWS Storage Gateway?', en: 'What is AWS Storage Gateway used for?' },
    back: {
      'pt-BR': 'Conecta ambientes on-premises ao armazenamento em nuvem da AWS, oferecendo acesso local com baixa latência (via cache) enquanto os dados são armazenados de forma durável no S3.',
      en: 'Connects on-premises environments to AWS cloud storage, providing low-latency local access (via caching) while data is stored durably in S3.'
    }
  },
  {
    id: 13,
    category: { 'pt-BR': 'Armazenamento', en: 'Storage' },
    front: { 'pt-BR': 'Qual a diferença entre Amazon EFS e Amazon EBS?', en: 'What is the difference between Amazon EFS and Amazon EBS?' },
    back: {
      'pt-BR': 'EBS é um volume de bloco anexado a uma única instância EC2 por vez (dentro de uma AZ). EFS é um sistema de arquivos de rede que pode ser montado simultaneamente por múltiplas instâncias em várias AZs.',
      en: 'EBS is a block volume attached to a single EC2 instance at a time (within one AZ). EFS is a network file system that can be mounted simultaneously by multiple instances across several AZs.'
    }
  },
  {
    id: 14,
    category: { 'pt-BR': 'Análise de Dados', en: 'Data Analytics' },
    front: { 'pt-BR': 'Qual a diferença entre Amazon Redshift e Amazon Athena?', en: 'What is the difference between Amazon Redshift and Amazon Athena?' },
    back: {
      'pt-BR': 'Redshift é um data warehouse gerenciado com cluster provisionado (ou serverless) otimizado para consultas analíticas complexas e recorrentes. Athena consulta dados diretamente no S3 usando SQL, sem provisionar infraestrutura, ideal para consultas ad hoc esporádicas.',
      en: 'Redshift is a managed data warehouse with a provisioned (or serverless) cluster optimized for complex, recurring analytical queries. Athena queries data directly in S3 using SQL, without provisioning infrastructure, ideal for occasional ad-hoc queries.'
    }
  },
  {
    id: 15,
    category: { 'pt-BR': 'Segurança', en: 'Security' },
    front: { 'pt-BR': 'O que é criptografia envelope (envelope encryption) no KMS?', en: 'What is envelope encryption in KMS?' },
    back: {
      'pt-BR': 'Técnica em que uma chave de dados (data key) criptografa o dado em si, e essa chave de dados é, por sua vez, criptografada por uma chave mestra (KMS key) armazenada com segurança — evitando enviar grandes volumes de dados ao KMS.',
      en: 'A technique in which a data key encrypts the data itself, and that data key is, in turn, encrypted by a master key (KMS key) stored securely — avoiding sending large volumes of data to KMS.'
    }
  },
  {
    id: 16,
    category: { 'pt-BR': 'Segurança', en: 'Security' },
    front: { 'pt-BR': 'Qual a diferença entre AWS WAF e AWS Shield?', en: 'What is the difference between AWS WAF and AWS Shield?' },
    back: {
      'pt-BR': 'WAF (Web Application Firewall) filtra tráfego HTTP/HTTPS com regras contra ataques como SQL injection e XSS. Shield protege contra ataques de negação de serviço (DDoS) na camada de rede/transporte (Standard é gratuito; Advanced oferece proteção e suporte adicionais).',
      en: 'WAF (Web Application Firewall) filters HTTP/HTTPS traffic with rules against attacks like SQL injection and XSS. Shield protects against denial-of-service (DDoS) attacks at the network/transport layer (Standard is free; Advanced offers additional protection and support).'
    }
  },
  {
    id: 17,
    category: { 'pt-BR': 'Fundamentos', en: 'Fundamentals' },
    front: { 'pt-BR': 'Qual a diferença entre alta disponibilidade e tolerância a falhas?', en: 'What is the difference between high availability and fault tolerance?' },
    back: {
      'pt-BR': 'Alta disponibilidade minimiza o tempo de indisponibilidade (pode haver uma breve interrupção durante failover). Tolerância a falhas significa que o sistema continua operando sem interrupção perceptível mesmo com a falha de um componente.',
      en: 'High availability minimizes downtime (there may be a brief interruption during failover). Fault tolerance means the system keeps operating without noticeable interruption even when a component fails.'
    }
  },
  {
    id: 18,
    category: { 'pt-BR': 'Rede', en: 'Networking' },
    front: { 'pt-BR': 'Qual a diferença entre AWS Global Accelerator e Amazon CloudFront?', en: 'What is the difference between AWS Global Accelerator and Amazon CloudFront?' },
    back: {
      'pt-BR': 'CloudFront é uma CDN otimizada para cache de conteúdo (estático/dinâmico) na borda. Global Accelerator roteia tráfego TCP/UDP pela rede backbone privada da AWS até o endpoint mais próximo, sendo mais indicado para tráfego não cacheável, como jogos ou VoIP.',
      en: 'CloudFront is a CDN optimized for caching content (static/dynamic) at the edge. Global Accelerator routes TCP/UDP traffic over AWS\'s private backbone network to the nearest endpoint, better suited for non-cacheable traffic, like gaming or VoIP.'
    }
  },
  {
    id: 19,
    category: { 'pt-BR': 'Governança', en: 'Governance' },
    front: { 'pt-BR': 'O que são Service Control Policies (SCPs) no AWS Organizations?', en: 'What are Service Control Policies (SCPs) in AWS Organizations?' },
    back: {
      'pt-BR': 'Políticas que definem os limites máximos de permissões para contas dentro de uma organização — mesmo que uma permissão IAM permita uma ação, uma SCP pode bloqueá-la para toda a conta ou unidade organizacional.',
      en: 'Policies that define the maximum permission boundaries for accounts within an organization — even if an IAM permission allows an action, an SCP can block it for the entire account or organizational unit.'
    }
  },
  {
    id: 20,
    category: { 'pt-BR': 'Fundamentos', en: 'Fundamentals' },
    front: { 'pt-BR': 'Por que sustentabilidade foi adicionada como pilar do Well-Architected Framework?', en: 'Why was sustainability added as a pillar of the Well-Architected Framework?' },
    back: {
      'pt-BR': 'Para orientar arquitetos a minimizar o impacto ambiental das cargas de trabalho na nuvem — otimizando uso de recursos, escolhendo regiões com energia mais limpa e eliminando desperdício de capacidade não utilizada.',
      en: 'To guide architects in minimizing the environmental impact of cloud workloads — optimizing resource usage, choosing regions with cleaner energy, and eliminating waste from unused capacity.'
    }
  }
];
