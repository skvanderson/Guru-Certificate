export const cloudPractitionerFlashcards = [
  {
    id: 1,
    category: { 'pt-BR': 'Computação', en: 'Compute' },
    front: { 'pt-BR': 'O que é o Amazon EC2?', en: 'What is Amazon EC2?' },
    back: {
      'pt-BR': 'Serviço que fornece capacidade de computação redimensionável na nuvem, em forma de máquinas virtuais (instâncias), pagas por uso.',
      en: 'A service that provides resizable compute capacity in the cloud, in the form of virtual machines (instances), paid by usage.'
    }
  },
  {
    id: 2,
    category: { 'pt-BR': 'Armazenamento', en: 'Storage' },
    front: { 'pt-BR': 'O que é o Amazon S3?', en: 'What is Amazon S3?' },
    back: {
      'pt-BR': 'Serviço de armazenamento de objetos altamente durável e escalável, usado para guardar arquivos como imagens, backups e dados de aplicações.',
      en: 'A highly durable and scalable object storage service, used to store files such as images, backups, and application data.'
    }
  },
  {
    id: 3,
    category: { 'pt-BR': 'Fundamentos', en: 'Fundamentals' },
    front: { 'pt-BR': 'O que é o Modelo de Responsabilidade Compartilhada?', en: 'What is the Shared Responsibility Model?' },
    back: {
      'pt-BR': 'Modelo em que a AWS é responsável pela "segurança DA nuvem" (infraestrutura física, hardware, rede) e o cliente é responsável pela "segurança NA nuvem" (dados, configurações, permissões, aplicações).',
      en: 'A model where AWS is responsible for "security OF the cloud" (physical infrastructure, hardware, networking) and the customer is responsible for "security IN the cloud" (data, configurations, permissions, applications).'
    }
  },
  {
    id: 4,
    category: { 'pt-BR': 'Fundamentos', en: 'Fundamentals' },
    front: { 'pt-BR': 'Quais são os 6 pilares do AWS Well-Architected Framework?', en: 'What are the 6 pillars of the AWS Well-Architected Framework?' },
    back: {
      'pt-BR': 'Excelência Operacional, Segurança, Confiabilidade, Eficiência de Performance, Otimização de Custos e Sustentabilidade.',
      en: 'Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.'
    }
  },
  {
    id: 5,
    category: { 'pt-BR': 'Infraestrutura Global', en: 'Global Infrastructure' },
    front: { 'pt-BR': 'Qual a diferença entre uma Região e uma Zona de Disponibilidade (AZ)?', en: 'What is the difference between a Region and an Availability Zone (AZ)?' },
    back: {
      'pt-BR': 'Uma Região é uma área geográfica com múltiplos data centers isolados. Cada Zona de Disponibilidade é um ou mais data centers dentro de uma região, com energia e rede independentes, usada para alta disponibilidade.',
      en: 'A Region is a geographic area with multiple isolated data centers. Each Availability Zone is one or more data centers within a region, with independent power and networking, used for high availability.'
    }
  },
  {
    id: 6,
    category: { 'pt-BR': 'Banco de Dados', en: 'Database' },
    front: { 'pt-BR': 'O que é o Amazon RDS?', en: 'What is Amazon RDS?' },
    back: {
      'pt-BR': 'Serviço gerenciado de banco de dados relacional (MySQL, PostgreSQL, SQL Server, entre outros) no qual a AWS cuida de patches, backups e replicação.',
      en: 'A managed relational database service (MySQL, PostgreSQL, SQL Server, and others) where AWS handles patching, backups, and replication.'
    }
  },
  {
    id: 7,
    category: { 'pt-BR': 'Computação', en: 'Compute' },
    front: { 'pt-BR': 'O que é o AWS Lambda?', en: 'What is AWS Lambda?' },
    back: {
      'pt-BR': 'Serviço de computação serverless que executa código em resposta a eventos, sem que o cliente precise provisionar ou gerenciar servidores, cobrado pelo tempo de execução.',
      en: 'A serverless compute service that runs code in response to events, without the customer needing to provision or manage servers, billed by execution time.'
    }
  },
  {
    id: 8,
    category: { 'pt-BR': 'Rede', en: 'Networking' },
    front: { 'pt-BR': 'Para que serve o Elastic Load Balancing (ELB)?', en: 'What is Elastic Load Balancing (ELB) used for?' },
    back: {
      'pt-BR': 'Distribui automaticamente o tráfego de entrada entre múltiplos destinos (instâncias EC2, containers, funções Lambda) para aumentar disponibilidade e tolerância a falhas.',
      en: 'Automatically distributes incoming traffic across multiple targets (EC2 instances, containers, Lambda functions) to increase availability and fault tolerance.'
    }
  },
  {
    id: 9,
    category: { 'pt-BR': 'Computação', en: 'Compute' },
    front: { 'pt-BR': 'O que faz o Auto Scaling?', en: 'What does Auto Scaling do?' },
    back: {
      'pt-BR': 'Ajusta automaticamente o número de instâncias de acordo com a demanda, adicionando recursos em picos de uso e removendo quando a demanda cai, otimizando custo e desempenho.',
      en: 'Automatically adjusts the number of instances according to demand, adding resources during usage spikes and removing them when demand drops, optimizing cost and performance.'
    }
  },
  {
    id: 10,
    category: { 'pt-BR': 'Rede', en: 'Networking' },
    front: { 'pt-BR': 'O que é uma Amazon VPC?', en: 'What is an Amazon VPC?' },
    back: {
      'pt-BR': 'Uma rede virtual privada e isolada logicamente dentro da nuvem AWS, onde você controla faixas de IP, sub-redes, tabelas de rotas e gateways de rede.',
      en: 'A logically isolated private virtual network within the AWS cloud, where you control IP ranges, subnets, route tables, and network gateways.'
    }
  },
  {
    id: 11,
    category: { 'pt-BR': 'Segurança', en: 'Security' },
    front: { 'pt-BR': 'O que é o AWS IAM?', en: 'What is AWS IAM?' },
    back: {
      'pt-BR': 'Serviço de gerenciamento de identidade e acesso que controla, de forma granular, quem pode se autenticar e quais ações pode executar sobre quais recursos da conta AWS.',
      en: 'An identity and access management service that granularly controls who can authenticate and what actions they can perform on which AWS account resources.'
    }
  },
  {
    id: 12,
    category: { 'pt-BR': 'Suporte e Custos', en: 'Support and Costs' },
    front: { 'pt-BR': 'Quais são os 4 planos de suporte da AWS?', en: 'What are the 4 AWS Support plans?' },
    back: {
      'pt-BR': 'Basic (gratuito), Developer, Business e Enterprise (On-Ramp/padrão), com níveis crescentes de tempo de resposta, acesso a engenheiros de suporte e ao Trusted Advisor completo.',
      en: 'Basic (free), Developer, Business, and Enterprise (On-Ramp/standard), with increasing levels of response time, access to support engineers, and full Trusted Advisor.'
    }
  },
  {
    id: 13,
    category: { 'pt-BR': 'Suporte e Custos', en: 'Support and Costs' },
    front: { 'pt-BR': 'Quais são os principais modelos de precificação do EC2?', en: 'What are the main EC2 pricing models?' },
    back: {
      'pt-BR': 'On-Demand (paga pelo uso, sem compromisso), Reserved Instances/Savings Plans (desconto por compromisso de 1-3 anos) e Spot Instances (capacidade ociosa com grande desconto, mas pode ser interrompida).',
      en: 'On-Demand (pay as you go, no commitment), Reserved Instances/Savings Plans (discount for a 1-3 year commitment), and Spot Instances (spare capacity at a steep discount, but can be interrupted).'
    }
  },
  {
    id: 14,
    category: { 'pt-BR': 'Suporte e Custos', en: 'Support and Costs' },
    front: { 'pt-BR': 'O que é o AWS Free Tier?', en: 'What is the AWS Free Tier?' },
    back: {
      'pt-BR': 'Conjunto de ofertas gratuitas (sempre gratuitas, 12 meses gratuitos ou testes de curto prazo) que permite experimentar diversos serviços AWS dentro de certos limites de uso, sem custo.',
      en: 'A set of free offers (always free, 12 months free, or short-term trials) that lets you try various AWS services within certain usage limits at no cost.'
    }
  },
  {
    id: 15,
    category: { 'pt-BR': 'Rede', en: 'Networking' },
    front: { 'pt-BR': 'O que é o Amazon CloudFront?', en: 'What is Amazon CloudFront?' },
    back: {
      'pt-BR': 'Serviço de rede de distribuição de conteúdo (CDN) que entrega dados, vídeos e APIs com baixa latência a partir de localizações de borda espalhadas globalmente.',
      en: 'A content delivery network (CDN) service that delivers data, videos, and APIs with low latency from edge locations spread globally.'
    }
  },
  {
    id: 16,
    category: { 'pt-BR': 'Rede', en: 'Networking' },
    front: { 'pt-BR': 'Para que serve o Amazon Route 53?', en: 'What is Amazon Route 53 used for?' },
    back: {
      'pt-BR': 'É o serviço de DNS (Sistema de Nomes de Domínio) da AWS, que também oferece registro de domínios e políticas de roteamento (como failover e latência).',
      en: 'It is AWS\'s DNS (Domain Name System) service, which also offers domain registration and routing policies (such as failover and latency-based routing).'
    }
  },
  {
    id: 17,
    category: { 'pt-BR': 'Governança', en: 'Governance' },
    front: { 'pt-BR': 'Para que serve o AWS Organizations?', en: 'What is AWS Organizations used for?' },
    back: {
      'pt-BR': 'Permite gerenciar centralmente várias contas AWS, agrupando-as, aplicando políticas de controle de serviço (SCPs) e consolidando o faturamento em uma única conta de pagamento.',
      en: 'Lets you centrally manage multiple AWS accounts, grouping them, applying service control policies (SCPs), and consolidating billing into a single payer account.'
    }
  },
  {
    id: 18,
    category: { 'pt-BR': 'Suporte e Custos', en: 'Support and Costs' },
    front: { 'pt-BR': 'O que o AWS Trusted Advisor verifica?', en: 'What does AWS Trusted Advisor check?' },
    back: {
      'pt-BR': 'Analisa a conta em cinco categorias — otimização de custos, desempenho, segurança, tolerância a falhas e limites de serviço — e recomenda boas práticas.',
      en: 'It analyzes the account across five categories — cost optimization, performance, security, fault tolerance, and service limits — and recommends best practices.'
    }
  },
  {
    id: 19,
    category: { 'pt-BR': 'Suporte e Custos', en: 'Support and Costs' },
    front: { 'pt-BR': 'Qual a diferença entre AWS Budgets e AWS Cost Explorer?', en: 'What is the difference between AWS Budgets and AWS Cost Explorer?' },
    back: {
      'pt-BR': 'O Cost Explorer visualiza e analisa gastos passados e projeta tendências futuras; o AWS Budgets permite definir limites de gasto/uso e alertar quando eles forem ultrapassados.',
      en: 'Cost Explorer visualizes and analyzes past spending and projects future trends; AWS Budgets lets you set spending/usage thresholds and alerts you when they are exceeded.'
    }
  },
  {
    id: 20,
    category: { 'pt-BR': 'Fundamentos', en: 'Fundamentals' },
    front: { 'pt-BR': 'Qual a diferença entre Capex e Opex no contexto de nuvem?', en: 'What is the difference between Capex and Opex in the cloud context?' },
    back: {
      'pt-BR': 'Capex (despesa de capital) é o investimento antecipado em infraestrutura própria; Opex (despesa operacional) é pagar pelo uso conforme consome — a nuvem troca Capex por Opex, eliminando investimento inicial pesado.',
      en: 'Capex (capital expenditure) is upfront investment in owned infrastructure; Opex (operational expenditure) is paying as you consume — the cloud trades Capex for Opex, eliminating heavy upfront investment.'
    }
  }
];
