export const cloudPractitionerQuestions = [
  {
    id: 1,
    title: {
      "pt-BR": "Fundamentos AWS - Modelo de Responsabilidade Compartilhada",
      "en": "AWS Fundamentals - Shared Responsibility Model"
    },
    description: {
      "pt-BR": "Uma empresa está migrando seu banco de dados para o Amazon RDS. De acordo com o modelo de responsabilidade compartilhada da AWS, qual das seguintes responsabilidades é da AWS?",
      "en": "A company is migrating their database to Amazon RDS. According to AWS Shared Responsibility Model, which of the following responsibilities belongs to AWS?"
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
          "pt-BR": "Configuração de patches de sistema operacional no servidor de banco de dados",
          "en": "Configuring operating system patches on the database server"
        },
        correct: false,
        explanation: {
          "pt-BR": "A configuração de patches do sistema operacional é responsabilidade do cliente na nuvem, não da AWS. No modelo de responsabilidade compartilhada, o cliente é responsável por gerenciar patches do sistema operacional, aplicações e dados.",
          "en": "Configuring operating system patches is the customer's responsibility in the cloud, not AWS's. In the shared responsibility model, the customer is responsible for managing operating system patches, applications, and data."
        }
      },
      {
        title: {
          "pt-BR": "Gerenciamento da infraestrutura física dos data centers",
          "en": "Managing the physical infrastructure of data centers"
        },
        correct: true,
        explanation: {
          "pt-BR": "A AWS é responsável pela segurança DA nuvem, incluindo a infraestrutura física dos data centers, hardware, software, rede e instalações. Esta é uma responsabilidade fundamental da AWS no modelo de responsabilidade compartilhada.",
          "en": "AWS is responsible for security OF the cloud, including the physical infrastructure of data centers, hardware, software, networking, and facilities. This is a fundamental AWS responsibility in the shared responsibility model."
        }
      },
      {
        title: {
          "pt-BR": "Configuração de regras de firewall para o banco de dados",
          "en": "Configuring firewall rules for the database"
        },
        correct: false,
        explanation: {
          "pt-BR": "A configuração de regras de firewall é responsabilidade do cliente. Embora a AWS forneça ferramentas como Security Groups, o cliente é quem deve configurar e gerenciar essas regras de acordo com suas necessidades de segurança.",
          "en": "Configuring firewall rules is the customer's responsibility. Although AWS provides tools like Security Groups, the customer must configure and manage these rules according to their security needs."
        }
      },
      {
        title: {
          "pt-BR": "Backup e recuperação dos dados da aplicação",
          "en": "Backup and recovery of application data"
        },
        correct: false,
        explanation: {
          "pt-BR": "O backup e recuperação dos dados da aplicação é responsabilidade do cliente. A AWS fornece serviços como S3 e serviços de backup, mas o cliente é responsável por configurar, gerenciar e testar seus backups e estratégias de recuperação.",
          "en": "Backup and recovery of application data is the customer's responsibility. AWS provides services like S3 and backup services, but the customer is responsible for configuring, managing, and testing their backups and recovery strategies."
        }
      }
    ],
    explanation: {
      "pt-BR": "No modelo de responsabilidade compartilhada da AWS, a AWS é responsável pela segurança DA nuvem (infraestrutura física, hardware, software, rede e instalações dos data centers). O cliente é responsável pela segurança NA nuvem (dados, configurações, patches do sistema operacional, gerenciamento de acesso e firewall). Portanto, o gerenciamento da infraestrutura física dos data centers é responsabilidade da AWS.",
      "en": "In AWS Shared Responsibility Model, AWS is responsible for security OF the cloud (physical infrastructure, hardware, software, networking, and data center facilities). The customer is responsible for security IN the cloud (data, configurations, operating system patches, access management, and firewall). Therefore, managing the physical infrastructure of data centers is AWS's responsibility."
    }
  },
  {
    id: 2,
    title: {
      "pt-BR": "Economia na Nuvem - Princípios de Otimização de Custos",
      "en": "Cloud Economics - Cost Optimization Principles"
    },
    description: {
      "pt-BR": "Uma startup está desenvolvendo uma aplicação web que terá picos de tráfego durante o horário comercial (9h às 18h) e baixo tráfego durante a noite. Qual estratégia de custo seria mais eficiente?",
      "en": "A startup is developing a web application that will have traffic peaks during business hours (9 AM to 6 PM) and low traffic at night. Which cost strategy would be most efficient?"
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
          "pt-BR": "Usar instâncias On-Demand para toda a aplicação",
          "en": "Use On-Demand instances for the entire application"
        },
        correct: false,
        explanation: {
          "pt-BR": "Instâncias On-Demand são mais caras e não oferecem economia para carga previsível. Para uma aplicação com padrão de tráfego previsível (picos durante horário comercial), usar apenas On-Demand não é a estratégia mais econômica, pois você paga o preço completo mesmo durante períodos de baixo uso.",
          "en": "On-Demand instances are more expensive and don't offer savings for predictable workloads. For an application with predictable traffic patterns (peaks during business hours), using only On-Demand is not the most economical strategy, as you pay full price even during low usage periods."
        }
      },
      {
        title: {
          "pt-BR": "Usar Reserved Instances para a base e Spot Instances para picos",
          "en": "Use Reserved Instances for baseline and Spot Instances for peaks"
        },
        correct: true,
        explanation: {
          "pt-BR": "Esta é a estratégia mais eficiente: Reserved Instances garantem economia de até 75% na carga base previsível, enquanto Spot Instances podem economizar até 90% nos picos de tráfego. Esta combinação otimiza custos mantendo a flexibilidade necessária.",
          "en": "This is the most efficient strategy: Reserved Instances guarantee up to 75% savings on predictable baseline load, while Spot Instances can save up to 90% on traffic peaks. This combination optimizes costs while maintaining necessary flexibility."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas Spot Instances para economizar",
          "en": "Use only Spot Instances to save money"
        },
        correct: false,
        explanation: {
          "pt-BR": "Spot Instances podem ser interrompidas a qualquer momento quando a AWS precisar da capacidade. Usar apenas Spot Instances para uma aplicação web crítica pode causar interrupções inesperadas e afetar a disponibilidade do serviço, não sendo adequado para cargas de trabalho que precisam de confiabilidade.",
          "en": "Spot Instances can be interrupted at any time when AWS needs the capacity. Using only Spot Instances for a critical web application can cause unexpected interruptions and affect service availability, not being suitable for workloads that need reliability."
        }
      },
      {
        title: {
          "pt-BR": "Usar Dedicated Hosts para garantir performance",
          "en": "Use Dedicated Hosts to ensure performance"
        },
        correct: false,
        explanation: {
          "pt-BR": "Dedicated Hosts são caros e normalmente usados para requisitos de conformidade ou licenciamento específico. Para uma aplicação web comum, Dedicated Hosts são desnecessários e aumentam significativamente os custos sem benefícios proporcionais de performance ou segurança.",
          "en": "Dedicated Hosts are expensive and typically used for compliance requirements or specific licensing. For a common web application, Dedicated Hosts are unnecessary and significantly increase costs without proportional performance or security benefits."
        }
      }
    ],
    explanation: {
      "pt-BR": "A estratégia mais eficiente combina Reserved Instances para a carga base (garantindo economia de até 75% em relação a On-Demand) e Spot Instances para lidar com picos de tráfego (economia de até 90%). On-Demand é mais caro para carga previsível, Spot Instances sozinhas podem ser interrompidas, e Dedicated Hosts são caros e desnecessários para este caso.",
      "en": "The most efficient strategy combines Reserved Instances for baseline load (saving up to 75% compared to On-Demand) and Spot Instances to handle traffic peaks (saving up to 90%). On-Demand is more expensive for predictable load, Spot Instances alone can be interrupted, and Dedicated Hosts are expensive and unnecessary for this case."
    }
  },
  {
    id: 3,
    title: {
      "pt-BR": "Segurança - IAM e Controle de Acesso",
      "en": "Security - IAM and Access Control"
    },
    description: {
      "pt-BR": "Uma empresa precisa permitir que desenvolvedores acessem apenas buckets S3 específicos para seus projetos, sem acesso a outros recursos AWS. Qual é a melhor prática de segurança?",
      "en": "A company needs to allow developers to access only specific S3 buckets for their projects, without access to other AWS resources. What is the best security practice?"
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
          "pt-BR": "Criar um usuário IAM com permissões de administrador",
          "en": "Create an IAM user with administrator permissions"
        },
        correct: false,
        explanation: {
          "pt-BR": "Permissões de administrador dão acesso total a todos os recursos AWS, violando completamente o princípio do menor privilégio. Isso expõe a conta a riscos de segurança graves, pois desenvolvedores teriam acesso a recursos além dos buckets S3 necessários.",
          "en": "Administrator permissions give full access to all AWS resources, completely violating the principle of least privilege. This exposes the account to serious security risks, as developers would have access to resources beyond the necessary S3 buckets."
        }
      },
      {
        title: {
          "pt-BR": "Usar o princípio do menor privilégio com políticas IAM específicas",
          "en": "Use the principle of least privilege with specific IAM policies"
        },
        correct: true,
        explanation: {
          "pt-BR": "O princípio do menor privilégio garante que usuários recebam apenas as permissões mínimas necessárias. Políticas IAM específicas permitem acesso granular apenas aos buckets S3 necessários, sem acesso a outros recursos AWS, seguindo as melhores práticas de segurança.",
          "en": "The principle of least privilege ensures users receive only the minimum permissions necessary. Specific IAM policies allow granular access only to necessary S3 buckets, without access to other AWS resources, following security best practices."
        }
      },
      {
        title: {
          "pt-BR": "Compartilhar as credenciais de root da conta",
          "en": "Share the root account credentials"
        },
        correct: false,
        explanation: {
          "pt-BR": "Compartilhar credenciais de root é uma prática extremamente insegura. A conta root tem acesso total e irrestrito a todos os recursos AWS. Não há rastreabilidade de ações, não é possível revogar acesso individual, e viola completamente todas as práticas de segurança recomendadas pela AWS.",
          "en": "Sharing root account credentials is an extremely insecure practice. The root account has full and unrestricted access to all AWS resources. There's no traceability of actions, cannot revoke individual access, and completely violates all security practices recommended by AWS."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas grupos IAM sem políticas específicas",
          "en": "Use only IAM groups without specific policies"
        },
        correct: false,
        explanation: {
          "pt-BR": "Grupos IAM sem políticas específicas não fornecem as permissões necessárias. Para que os desenvolvedores acessem buckets S3 específicos, é necessário anexar políticas IAM que definam exatamente quais buckets e ações são permitidas. Grupos sozinhos não garantem acesso controlado.",
          "en": "IAM groups without specific policies don't provide the necessary permissions. For developers to access specific S3 buckets, it's necessary to attach IAM policies that define exactly which buckets and actions are allowed. Groups alone don't guarantee controlled access."
        }
      }
    ],
    explanation: {
      "pt-BR": "O princípio do menor privilégio é uma prática fundamental de segurança que garante que usuários recebam apenas as permissões necessárias para realizar suas tarefas. Políticas IAM específicas permitem acesso granular a buckets S3 específicos, enquanto permissões de administrador ou credenciais compartilhadas violam princípios de segurança e podem causar brechas de segurança.",
      "en": "The principle of least privilege is a fundamental security practice that ensures users receive only the permissions necessary to perform their tasks. Specific IAM policies allow granular access to specific S3 buckets, while administrator permissions or shared credentials violate security principles and can cause security breaches."
    }
  },
  {
    id: 4,
    title: {
      "pt-BR": "Tecnologia - Serviços de Computação",
      "en": "Technology - Compute Services"
    },
    description: {
      "pt-BR": "Uma empresa de e-commerce precisa de uma solução que escale automaticamente durante o Black Friday, quando o tráfego pode aumentar 10x. Qual serviço AWS oferece escalabilidade automática sem gerenciamento de servidores?",
      "en": "An e-commerce company needs a solution that automatically scales during Black Friday, when traffic can increase 10x. Which AWS service offers automatic scalability without server management?"
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
          "pt-BR": "Amazon EC2 com Auto Scaling Groups",
          "en": "Amazon EC2 with Auto Scaling Groups"
        },
        correct: false,
        explanation: {
          "pt-BR": "EC2 com Auto Scaling Groups ainda requer gerenciamento de servidores (patches, sistema operacional, configuração). Embora ofereça escalabilidade automática, não é totalmente serverless e requer mais configuração e manutenção do que soluções serverless.",
          "en": "EC2 with Auto Scaling Groups still requires server management (patches, operating system, configuration). Although it offers automatic scaling, it's not fully serverless and requires more configuration and maintenance than serverless solutions."
        }
      },
      {
        title: {
          "pt-BR": "AWS Lambda com API Gateway",
          "en": "AWS Lambda with API Gateway"
        },
        correct: true,
        explanation: {
          "pt-BR": "AWS Lambda com API Gateway é uma arquitetura completamente serverless que escala automaticamente de zero a milhares de requisições simultâneas sem qualquer gerenciamento de servidores. Durante o Black Friday, Lambda escala automaticamente processando cada requisição de forma independente.",
          "en": "AWS Lambda with API Gateway is a completely serverless architecture that automatically scales from zero to thousands of simultaneous requests without any server management. During Black Friday, Lambda automatically scales processing each request independently."
        }
      },
      {
        title: {
          "pt-BR": "Amazon ECS com Fargate",
          "en": "Amazon ECS with Fargate"
        },
        correct: false,
        explanation: {
          "pt-BR": "ECS Fargate elimina a necessidade de gerenciar servidores, mas ainda requer gerenciamento de containers e configuração de tarefas. Lambda é mais apropriado para escalabilidade automática sem gerenciamento, especialmente para APIs e processamento de eventos.",
          "en": "ECS Fargate eliminates the need to manage servers, but still requires container management and task configuration. Lambda is more appropriate for automatic scaling without management, especially for APIs and event processing."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Lightsail",
          "en": "Amazon Lightsail"
        },
        correct: false,
        explanation: {
          "pt-BR": "Lightsail é uma solução simplificada para aplicações simples, mas não escala automaticamente e requer gerenciamento de servidores. Não é adequado para picos de tráfego como Black Friday, onde é necessária escalabilidade automática e serverless.",
          "en": "Lightsail is a simplified solution for simple applications, but doesn't scale automatically and requires server management. It's not suitable for traffic peaks like Black Friday, where automatic and serverless scalability is needed."
        }
      }
    ],
    explanation: {
      "pt-BR": "AWS Lambda com API Gateway é uma arquitetura serverless que escala automaticamente sem necessidade de gerenciamento de servidores. Durante o Black Friday, Lambda pode processar milhares de requisições simultâneas escalando automaticamente. EC2 requer gerenciamento de servidores, ECS Fargate ainda tem alguns aspectos de gerenciamento, e Lightsail não escala automaticamente da mesma forma.",
      "en": "AWS Lambda with API Gateway is a serverless architecture that automatically scales without server management. During Black Friday, Lambda can process thousands of simultaneous requests by automatically scaling. EC2 requires server management, ECS Fargate still has some management aspects, and Lightsail doesn't scale automatically in the same way."
    }
  },
  {
    id: 5,
    title: {
      "pt-BR": "Arquitetura - Alta Disponibilidade e Tolerância a Falhas",
      "en": "Architecture - High Availability and Fault Tolerance"
    },
    description: {
      "pt-BR": "Uma aplicação crítica de saúde precisa ter 99.99% de disponibilidade. A aplicação está atualmente em uma única instância EC2 em uma Availability Zone. Qual é a melhor estratégia para melhorar a disponibilidade?",
      "en": "A critical health application needs 99.99% availability. The application is currently on a single EC2 instance in one Availability Zone. What is the best strategy to improve availability?"
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
          "pt-BR": "Aumentar o tamanho da instância EC2",
          "en": "Increase the EC2 instance size"
        },
        correct: false,
        explanation: {
          "pt-BR": "Aumentar apenas o tamanho da instância melhora performance (CPU, memória), mas não melhora disponibilidade. A aplicação ainda estará em uma única instância em uma única Availability Zone, mantendo um ponto único de falha. Para 99.99% de disponibilidade, é necessária redundância em múltiplas AZs.",
          "en": "Increasing only the instance size improves performance (CPU, memory), but doesn't improve availability. The application will still be on a single instance in a single Availability Zone, maintaining a single point of failure. For 99.99% availability, redundancy across multiple AZs is needed."
        }
      },
      {
        title: {
          "pt-BR": "Distribuir a aplicação em múltiplas Availability Zones com Load Balancer",
          "en": "Distribute the application across multiple Availability Zones with Load Balancer"
        },
        correct: true,
        explanation: {
          "pt-BR": "Distribuir em múltiplas AZs com Load Balancer oferece alta disponibilidade e tolerância a falhas. Se uma AZ falhar, o Load Balancer automaticamente redireciona o tráfego para instâncias em outras AZs, garantindo continuidade do serviço. Esta é a melhor prática para alcançar 99.99% de disponibilidade.",
          "en": "Distributing across multiple AZs with Load Balancer provides high availability and fault tolerance. If one AZ fails, the Load Balancer automatically redirects traffic to instances in other AZs, ensuring service continuity. This is the best practice to achieve 99.99% availability."
        }
      },
      {
        title: {
          "pt-BR": "Usar apenas uma instância maior em uma AZ diferente",
          "en": "Use only a larger instance in a different AZ"
        },
        correct: false,
        explanation: {
          "pt-BR": "Ter apenas uma instância maior em outra AZ ainda é um ponto único de falha. Se essa instância falhar, a aplicação ficará indisponível. Para alta disponibilidade, é necessário ter múltiplas instâncias em múltiplas AZs com Load Balancer para distribuir carga e tolerar falhas.",
          "en": "Having only a larger instance in another AZ is still a single point of failure. If that instance fails, the application will be unavailable. For high availability, multiple instances across multiple AZs with Load Balancer are needed to distribute load and tolerate failures."
        }
      },
      {
        title: {
          "pt-BR": "Configurar apenas backup automático",
          "en": "Configure only automatic backup"
        },
        correct: false,
        explanation: {
          "pt-BR": "Backup automático protege contra perda de dados, mas não previne tempo de inatividade. Se a instância falhar, a aplicação ficará indisponível até que o backup seja restaurado, o que pode levar horas. Para alta disponibilidade, é necessário redundância em tempo real, não apenas backups.",
          "en": "Automatic backup protects against data loss, but doesn't prevent downtime. If the instance fails, the application will be unavailable until the backup is restored, which can take hours. For high availability, real-time redundancy is needed, not just backups."
        }
      }
    ],
    explanation: {
      "pt-BR": "Distribuir a aplicação em múltiplas Availability Zones com Load Balancer oferece alta disponibilidade e tolerância a falhas. Se uma AZ falhar, o Load Balancer redireciona o tráfego para instâncias em outras AZs. Aumentar o tamanho da instância não melhora disponibilidade, apenas uma instância maior em outra AZ ainda é um ponto único de falha, e backup não previne tempo de inatividade.",
      "en": "Distributing the application across multiple Availability Zones with Load Balancer provides high availability and fault tolerance. If one AZ fails, the Load Balancer redirects traffic to instances in other AZs. Increasing instance size doesn't improve availability, only a larger instance in another AZ is still a single point of failure, and backup doesn't prevent downtime."
    }
  },
  {
    id: 6,
    title: {
      "pt-BR": "Armazenamento - S3 e Classes de Armazenamento",
      "en": "Storage - S3 and Storage Classes"
    },
    description: {
      "pt-BR": "Uma empresa de mídia precisa armazenar vídeos antigos que são acessados raramente (menos de 1 vez por ano), mas devem estar disponíveis em até 12 horas quando solicitados. Qual classe de armazenamento S3 é mais adequada?",
      "en": "A media company needs to store old videos that are rarely accessed (less than once per year), but must be available within 12 hours when requested. Which S3 storage class is most suitable?"
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
          "pt-BR": "S3 Standard",
          "en": "S3 Standard"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 Standard é a classe mais cara e é projetada para dados acessados frequentemente. Para dados que são acessados menos de 1 vez por ano, usar S3 Standard seria um desperdício de custos, pois você pagaria pelo armazenamento mais caro sem aproveitar os benefícios de acesso rápido.",
          "en": "S3 Standard is the most expensive class and is designed for frequently accessed data. For data accessed less than once per year, using S3 Standard would be a waste of costs, as you'd pay for the most expensive storage without benefiting from fast access."
        }
      },
      {
        title: {
          "pt-BR": "S3 Glacier Flexible Retrieval",
          "en": "S3 Glacier Flexible Retrieval"
        },
        correct: true,
        explanation: {
          "pt-BR": "S3 Glacier Flexible Retrieval é ideal para dados raramente acessados que precisam estar disponíveis em até 12 horas. Oferece economia de custos significativa (até 68% mais barato que S3 Standard) mantendo a disponibilidade necessária dentro do requisito de 12 horas.",
          "en": "S3 Glacier Flexible Retrieval is ideal for rarely accessed data that needs to be available within 12 hours. Offers significant cost savings (up to 68% cheaper than S3 Standard) while maintaining necessary availability within the 12-hour requirement."
        }
      },
      {
        title: {
          "pt-BR": "S3 Intelligent-Tiering",
          "en": "S3 Intelligent-Tiering"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 Intelligent-Tiering move objetos automaticamente entre classes baseado em padrões de acesso, mas tem custos de monitoramento e não é necessário para dados com padrão de acesso tão previsível (menos de 1 vez por ano). Para dados com padrão tão claro, é melhor escolher diretamente a classe adequada.",
          "en": "S3 Intelligent-Tiering automatically moves objects between classes based on access patterns, but has monitoring costs and isn't necessary for data with such a predictable access pattern (less than once per year). For data with such a clear pattern, it's better to directly choose the appropriate class."
        }
      },
      {
        title: {
          "pt-BR": "S3 Glacier Deep Archive",
          "en": "S3 Glacier Deep Archive"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 Glacier Deep Archive tem o custo mais baixo, mas tem tempo de recuperação muito longo (12-48 horas), o que não atende ao requisito de disponibilidade em até 12 horas. Glacier Flexible Retrieval oferece melhor equilíbrio entre custo e tempo de recuperação.",
          "en": "S3 Glacier Deep Archive has the lowest cost, but has very long recovery time (12-48 hours), which doesn't meet the 12-hour availability requirement. Glacier Flexible Retrieval offers better balance between cost and recovery time."
        }
      }
    ],
    explanation: {
      "pt-BR": "S3 Glacier Flexible Retrieval é ideal para dados raramente acessados que precisam estar disponíveis em até 12 horas. Oferece economia de custos significativa comparado ao S3 Standard, mantendo a disponibilidade necessária. S3 Standard é caro para dados raramente acessados, Intelligent-Tiering não é necessário para dados tão raramente acessados, e Deep Archive tem tempo de recuperação muito longo (12-48 horas).",
      "en": "S3 Glacier Flexible Retrieval is ideal for rarely accessed data that needs to be available within 12 hours. It offers significant cost savings compared to S3 Standard while maintaining necessary availability. S3 Standard is expensive for rarely accessed data, Intelligent-Tiering is not necessary for such rarely accessed data, and Deep Archive has very long recovery time (12-48 hours)."
    }
  },
  {
    id: 7,
    title: {
      "pt-BR": "Rede - VPC e Conectividade",
      "en": "Networking - VPC and Connectivity"
    },
    description: {
      "pt-BR": "Uma empresa precisa conectar sua rede local (on-premises) à AWS de forma segura e com largura de banda dedicada. Qual serviço AWS oferece uma conexão de rede privada dedicada?",
      "en": "A company needs to connect their local network (on-premises) to AWS securely and with dedicated bandwidth. Which AWS service offers a dedicated private network connection?"
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
          "pt-BR": "AWS VPN",
          "en": "AWS VPN"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS VPN usa a internet pública para criar conexões, o que significa latência variável e não oferece largura de banda dedicada. Para uma empresa que precisa de conexão segura com largura de banda dedicada, VPN não atende aos requisitos de desempenho e garantia de largura de banda.",
          "en": "AWS VPN uses public internet to create connections, which means variable latency and doesn't offer dedicated bandwidth. For a company that needs secure connection with dedicated bandwidth, VPN doesn't meet the performance and bandwidth guarantee requirements."
        }
      },
      {
        title: {
          "pt-BR": "AWS Direct Connect",
          "en": "AWS Direct Connect"
        },
        correct: true,
        explanation: {
          "pt-BR": "AWS Direct Connect oferece uma conexão de rede privada dedicada entre o data center on-premises e a AWS, com largura de banda garantida (1Gbps, 10Gbps ou 100Gbps), baixa latência consistente e maior segurança. Esta é a solução ideal para empresas que precisam de conectividade dedicada e segura.",
          "en": "AWS Direct Connect offers a dedicated private network connection between on-premises data center and AWS, with guaranteed bandwidth (1Gbps, 10Gbps, or 100Gbps), consistent low latency, and greater security. This is the ideal solution for companies that need dedicated and secure connectivity."
        }
      },
      {
        title: {
          "pt-BR": "Internet Gateway",
          "en": "Internet Gateway"
        },
        correct: false,
        explanation: {
          "pt-BR": "Internet Gateway é um componente da VPC que permite comunicação entre instâncias na VPC e a internet. Ele não conecta redes on-premises à AWS e não oferece conexão dedicada ou largura de banda garantida.",
          "en": "Internet Gateway is a VPC component that allows communication between instances in the VPC and the internet. It doesn't connect on-premises networks to AWS and doesn't offer dedicated connection or guaranteed bandwidth."
        }
      },
      {
        title: {
          "pt-BR": "NAT Gateway",
          "en": "NAT Gateway"
        },
        correct: false,
        explanation: {
          "pt-BR": "NAT Gateway permite que instâncias em subnets privadas façam chamadas de saída para a internet, mas não conecta redes on-premises à AWS. Ele é usado para tráfego de saída de instâncias privadas, não para conexão dedicada entre data centers.",
          "en": "NAT Gateway allows instances in private subnets to make outbound calls to the internet, but doesn't connect on-premises networks to AWS. It's used for outbound traffic from private instances, not for dedicated connection between data centers."
        }
      }
    ],
    explanation: {
      "pt-BR": "AWS Direct Connect oferece uma conexão de rede privada dedicada entre o data center on-premises e a AWS, com largura de banda garantida, baixa latência e maior segurança. AWS VPN usa internet pública com latência variável, Internet Gateway não conecta on-premises, e NAT Gateway é para tráfego de saída de instâncias privadas.",
      "en": "AWS Direct Connect offers a dedicated private network connection between on-premises data center and AWS, with guaranteed bandwidth, low latency, and greater security. AWS VPN uses public internet with variable latency, Internet Gateway doesn't connect on-premises, and NAT Gateway is for outbound traffic from private instances."
    }
  },
  {
    id: 8,
    title: {
      "pt-BR": "Monitoramento - CloudWatch e Observabilidade",
      "en": "Monitoring - CloudWatch and Observability"
    },
    description: {
      "pt-BR": "Uma aplicação web está apresentando lentidão ocasional. O administrador precisa identificar rapidamente quando a CPU de uma instância EC2 excede 80% por mais de 5 minutos. Qual serviço AWS pode ser usado para isso?",
      "en": "A web application is experiencing occasional slowness. The administrator needs to quickly identify when an EC2 instance CPU exceeds 80% for more than 5 minutes. Which AWS service can be used for this?"
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
          "pt-BR": "AWS Config monitora e registra configurações de recursos AWS ao longo do tempo, mas não monitora métricas de performance como CPU em tempo real. Config é usado para auditoria de conformidade e histórico de configurações, não para alertas de métricas de performance.",
          "en": "AWS Config monitors and records AWS resource configurations over time, but doesn't monitor performance metrics like CPU in real-time. Config is used for compliance auditing and configuration history, not for performance metric alerts."
        }
      },
      {
        title: {
          "pt-BR": "Amazon CloudWatch com alarmes",
          "en": "Amazon CloudWatch with alarms"
        },
        correct: true,
        explanation: {
          "pt-BR": "Amazon CloudWatch coleta métricas de EC2 (incluindo CPU) e permite criar alarmes que notificam quando métricas excedem limites definidos. Você pode configurar um alarme para CPU > 80% por mais de 5 minutos e receber notificações via SNS, email ou outras ações.",
          "en": "Amazon CloudWatch collects EC2 metrics (including CPU) and allows creating alarms that notify when metrics exceed defined thresholds. You can configure an alarm for CPU > 80% for more than 5 minutes and receive notifications via SNS, email, or other actions."
        }
      },
      {
        title: {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Trusted Advisor oferece recomendações sobre otimização de custos, segurança, performance e confiabilidade, mas não monitora métricas em tempo real nem envia alertas quando métricas excedem limites. Ele fornece recomendações baseadas em análises periódicas, não monitoramento contínuo.",
          "en": "AWS Trusted Advisor provides recommendations on cost optimization, security, performance, and reliability, but doesn't monitor real-time metrics or send alerts when metrics exceed thresholds. It provides recommendations based on periodic analyses, not continuous monitoring."
        }
      },
      {
        title: {
          "pt-BR": "AWS Systems Manager",
          "en": "AWS Systems Manager"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Systems Manager é usado para gerenciar instâncias EC2 (patches, configurações, inventário), mas não é um serviço de monitoramento de métricas. Ele não monitora CPU em tempo real nem envia alertas quando métricas excedem limites.",
          "en": "AWS Systems Manager is used to manage EC2 instances (patches, configurations, inventory), but it's not a metric monitoring service. It doesn't monitor CPU in real-time or send alerts when metrics exceed thresholds."
        }
      }
    ],
    explanation: {
      "pt-BR": "Amazon CloudWatch com alarmes permite monitorar métricas em tempo real e configurar alertas quando métricas excedem limites definidos. Pode criar alarmes que notificam quando CPU excede 80% por mais de 5 minutos. AWS Config monitora configurações, Trusted Advisor oferece recomendações, e Systems Manager é para gerenciamento de instâncias, não monitoramento de métricas.",
      "en": "Amazon CloudWatch with alarms allows real-time metric monitoring and configuring alerts when metrics exceed defined thresholds. Can create alarms that notify when CPU exceeds 80% for more than 5 minutes. AWS Config monitors configurations, Trusted Advisor provides recommendations, and Systems Manager is for instance management, not metric monitoring."
    }
  },
  {
    id: 9,
    title: {
      "pt-BR": "Banco de Dados - RDS e NoSQL",
      "en": "Database - RDS and NoSQL"
    },
    description: {
      "pt-BR": "Uma aplicação de e-commerce precisa de um banco de dados que possa escalar horizontalmente para lidar com milhões de produtos e milhares de consultas simultâneas. Qual serviço AWS é mais adequado?",
      "en": "An e-commerce application needs a database that can scale horizontally to handle millions of products and thousands of concurrent queries. Which AWS service is most suitable?"
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
          "pt-BR": "Amazon RDS MySQL",
          "en": "Amazon RDS MySQL"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS MySQL escala verticalmente (aumentando o tamanho da instância), não horizontalmente. Para lidar com milhões de produtos e milhares de consultas simultâneas, seria necessário múltiplas instâncias com complexidade de sincronização. DynamoDB escala horizontalmente automaticamente, sendo mais adequado para este caso.",
          "en": "RDS MySQL scales vertically (increasing instance size), not horizontally. To handle millions of products and thousands of concurrent queries, multiple instances would be needed with synchronization complexity. DynamoDB scales horizontally automatically, being more suitable for this case."
        }
      },
      {
        title: {
          "pt-BR": "Amazon DynamoDB",
          "en": "Amazon DynamoDB"
        },
        correct: true,
        explanation: {
          "pt-BR": "Amazon DynamoDB é um banco de dados NoSQL gerenciado que escala horizontalmente automaticamente para lidar com milhões de itens e milhares de consultas simultâneas sem necessidade de provisionamento ou gerenciamento de servidores. É ideal para aplicações de e-commerce que precisam de alta performance e escalabilidade.",
          "en": "Amazon DynamoDB is a managed NoSQL database that automatically scales horizontally to handle millions of items and thousands of concurrent queries without needing to provision or manage servers. It's ideal for e-commerce applications that need high performance and scalability."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Redshift",
          "en": "Amazon Redshift"
        },
        correct: false,
        explanation: {
          "pt-BR": "Amazon Redshift é um data warehouse projetado para análise de dados e business intelligence, não para aplicações transacionais de e-commerce. Ele é otimizado para consultas analíticas complexas em grandes volumes de dados históricos, não para operações OLTP (Online Transaction Processing).",
          "en": "Amazon Redshift is a data warehouse designed for data analysis and business intelligence, not for transactional e-commerce applications. It's optimized for complex analytical queries on large volumes of historical data, not for OLTP (Online Transaction Processing) operations."
        }
      },
      {
        title: {
          "pt-BR": "Amazon ElastiCache",
          "en": "Amazon ElastiCache"
        },
        correct: false,
        explanation: {
          "pt-BR": "Amazon ElastiCache é um serviço de cache em memória (Redis ou Memcached), não um banco de dados principal. Ele é usado para acelerar aplicações armazenando dados frequentemente acessados em memória, mas não substitui um banco de dados persistente para armazenar milhões de produtos.",
          "en": "Amazon ElastiCache is an in-memory caching service (Redis or Memcached), not a primary database. It's used to accelerate applications by storing frequently accessed data in memory, but doesn't replace a persistent database for storing millions of products."
        }
      }
    ],
    explanation: {
      "pt-BR": "Amazon DynamoDB é um banco de dados NoSQL gerenciado que escala horizontalmente automaticamente para lidar com milhões de itens e milhares de consultas simultâneas. RDS MySQL escala verticalmente, Redshift é para data warehouse, e ElastiCache é um cache em memória, não um banco de dados principal.",
      "en": "Amazon DynamoDB is a managed NoSQL database that automatically scales horizontally to handle millions of items and thousands of concurrent queries. RDS MySQL scales vertically, Redshift is for data warehouse, and ElastiCache is an in-memory cache, not a primary database."
    }
  },
  {
    id: 10,
    title: {
      "pt-BR": "Segurança - Criptografia e Compliance",
      "en": "Security - Encryption and Compliance"
    },
    description: {
      "pt-BR": "Uma empresa financeira precisa garantir que todos os dados sensíveis sejam criptografados em repouso e em trânsito. Qual serviço AWS oferece gerenciamento centralizado de chaves de criptografia?",
      "en": "A financial company needs to ensure that all sensitive data is encrypted at rest and in transit. Which AWS service offers centralized encryption key management?"
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
          "pt-BR": "AWS Secrets Manager armazena e gerencia segredos (senhas, tokens, chaves de API), mas não gerencia chaves de criptografia usadas para criptografar dados em repouso e em trânsito. KMS é o serviço específico para gerenciamento de chaves de criptografia.",
          "en": "AWS Secrets Manager stores and manages secrets (passwords, tokens, API keys), but doesn't manage encryption keys used to encrypt data at rest and in transit. KMS is the specific service for encryption key management."
        }
      },
      {
        title: {
          "pt-BR": "AWS Key Management Service (KMS)",
          "en": "AWS Key Management Service (KMS)"
        },
        correct: true,
        explanation: {
          "pt-BR": "AWS KMS oferece gerenciamento centralizado de chaves de criptografia, permitindo criar, gerenciar e controlar o uso de chaves para criptografar dados em repouso (S3, EBS, RDS) e em trânsito. KMS integra-se com muitos serviços AWS para criptografia automática e é essencial para compliance financeiro.",
          "en": "AWS KMS offers centralized encryption key management, allowing creating, managing, and controlling the use of keys to encrypt data at rest (S3, EBS, RDS) and in transit. KMS integrates with many AWS services for automatic encryption and is essential for financial compliance."
        }
      },
      {
        title: {
          "pt-BR": "AWS Certificate Manager",
          "en": "AWS Certificate Manager"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Certificate Manager gerencia certificados SSL/TLS para criptografar dados em trânsito (HTTPS), mas não gerencia chaves de criptografia para dados em repouso. Ele é usado para certificados de domínio, não para gerenciamento centralizado de chaves de criptografia.",
          "en": "AWS Certificate Manager manages SSL/TLS certificates to encrypt data in transit (HTTPS), but doesn't manage encryption keys for data at rest. It's used for domain certificates, not for centralized encryption key management."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudHSM",
          "en": "AWS CloudHSM"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS CloudHSM é um serviço de hardware dedicado para requisitos de compliance específicos (FIPS 140-2 Level 3), mas não é necessário para a maioria dos casos de uso. KMS oferece gerenciamento de chaves mais simples e integrado, enquanto CloudHSM é para requisitos de compliance muito específicos.",
          "en": "AWS CloudHSM is a dedicated hardware service for specific compliance requirements (FIPS 140-2 Level 3), but isn't necessary for most use cases. KMS offers simpler and more integrated key management, while CloudHSM is for very specific compliance requirements."
        }
      }
    ],
    explanation: {
      "pt-BR": "AWS Key Management Service (KMS) oferece gerenciamento centralizado de chaves de criptografia para criptografar dados em repouso e em trânsito. KMS permite criar, gerenciar e controlar o uso de chaves de criptografia em toda a AWS. Secrets Manager armazena segredos, Certificate Manager gerencia certificados SSL/TLS, e CloudHSM é para requisitos de compliance específicos com hardware dedicado.",
      "en": "AWS Key Management Service (KMS) offers centralized encryption key management to encrypt data at rest and in transit. KMS allows creating, managing, and controlling the use of encryption keys across AWS. Secrets Manager stores secrets, Certificate Manager manages SSL/TLS certificates, and CloudHSM is for specific compliance requirements with dedicated hardware."
    }
  },
  {
    id: 11,
    title: {
      "pt-BR": "Fundamentos AWS - Well-Architected Framework",
      "en": "AWS Fundamentals - Well-Architected Framework"
    },
    description: {
      "pt-BR": "Uma empresa quer garantir que sua arquitetura na AWS siga as melhores práticas. Qual framework da AWS fornece diretrizes para construir sistemas seguros, de alta performance, resilientes e eficientes?",
      "en": "A company wants to ensure their AWS architecture follows best practices. Which AWS framework provides guidelines for building secure, high-performance, resilient, and efficient systems?"
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
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Trusted Advisor oferece recomendações automatizadas sobre otimização de custos, segurança e performance, mas não é um framework completo de diretrizes arquiteturais. Well-Architected Framework fornece uma estrutura abrangente baseada em cinco pilares para revisar e melhorar arquiteturas.",
          "en": "AWS Trusted Advisor provides automated recommendations on cost optimization, security, and performance, but isn't a complete architectural guidelines framework. Well-Architected Framework provides a comprehensive structure based on five pillars for reviewing and improving architectures."
        }
      },
      {
        title: {
          "pt-BR": "AWS Well-Architected Framework",
          "en": "AWS Well-Architected Framework"
        },
        correct: true,
        explanation: {
          "pt-BR": "O AWS Well-Architected Framework fornece diretrizes abrangentes baseadas em cinco pilares: excelência operacional, segurança, confiabilidade, eficiência de performance e otimização de custos. É o framework oficial da AWS para construir e revisar arquiteturas que seguem as melhores práticas.",
          "en": "The AWS Well-Architected Framework provides comprehensive guidelines based on five pillars: operational excellence, security, reliability, performance efficiency, and cost optimization. It's the official AWS framework for building and reviewing architectures that follow best practices."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudFormation",
          "en": "AWS CloudFormation"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS CloudFormation é uma ferramenta de infraestrutura como código que permite criar e gerenciar recursos AWS de forma programática, mas não é um framework de diretrizes arquiteturais. É usado para implementar infraestrutura, não para definir princípios arquiteturais.",
          "en": "AWS CloudFormation is an infrastructure as code tool that allows creating and managing AWS resources programmatically, but isn't an architectural guidelines framework. It's used to implement infrastructure, not to define architectural principles."
        }
      },
      {
        title: {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Config monitora e registra configurações de recursos para auditoria e conformidade, mas não fornece diretrizes para construir arquiteturas. É um serviço de auditoria de configurações, não um framework arquitetural.",
          "en": "AWS Config monitors and records resource configurations for auditing and compliance, but doesn't provide guidelines for building architectures. It's a configuration auditing service, not an architectural framework."
        }
      }
    ],
    explanation: {
      "pt-BR": "O AWS Well-Architected Framework fornece um conjunto de diretrizes para revisar e melhorar arquiteturas na nuvem, baseado em cinco pilares: excelência operacional, segurança, confiabilidade, eficiência de performance e otimização de custos. Trusted Advisor oferece recomendações, CloudFormation é para infraestrutura como código, e Config é para auditoria de configurações.",
      "en": "The AWS Well-Architected Framework provides a set of guidelines for reviewing and improving cloud architectures, based on five pillars: operational excellence, security, reliability, performance efficiency, and cost optimization. Trusted Advisor provides recommendations, CloudFormation is for infrastructure as code, and Config is for configuration auditing."
    }
  },
  {
    id: 12,
    title: {
      "pt-BR": "Armazenamento - S3 Lifecycle Policies",
      "en": "Storage - S3 Lifecycle Policies"
    },
    description: {
      "pt-BR": "Uma empresa precisa armazenar logs de aplicação que são acessados frequentemente no primeiro mês, depois raramente por 6 meses, e depois devem ser arquivados. Qual recurso do S3 permite automatizar essa transição entre classes de armazenamento?",
      "en": "A company needs to store application logs that are accessed frequently in the first month, then rarely for 6 months, and then should be archived. Which S3 feature allows automating this transition between storage classes?"
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
          "pt-BR": "S3 Transfer Acceleration",
          "en": "S3 Transfer Acceleration"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 Transfer Acceleration melhora a velocidade de upload de objetos para S3 usando CloudFront edge locations, mas não automatiza transições entre classes de armazenamento. Ele é usado para otimizar transferências, não para gerenciar ciclo de vida de objetos.",
          "en": "S3 Transfer Acceleration improves upload speed of objects to S3 using CloudFront edge locations, but doesn't automate transitions between storage classes. It's used to optimize transfers, not to manage object lifecycle."
        }
      },
      {
        title: {
          "pt-BR": "S3 Lifecycle Policies",
          "en": "S3 Lifecycle Policies"
        },
        correct: true,
        explanation: {
          "pt-BR": "S3 Lifecycle Policies permitem automatizar a transição de objetos entre classes de armazenamento baseado em regras de tempo ou tags. Você pode configurar para mover objetos de Standard para Standard-IA após 30 dias, e para Glacier após 6 meses, otimizando custos automaticamente.",
          "en": "S3 Lifecycle Policies allow automating the transition of objects between storage classes based on time rules or tags. You can configure to move objects from Standard to Standard-IA after 30 days, and to Glacier after 6 months, automatically optimizing costs."
        }
      },
      {
        title: {
          "pt-BR": "S3 Versioning",
          "en": "S3 Versioning"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 Versioning mantém múltiplas versões de objetos para proteção contra exclusões acidentais, mas não automatiza transições entre classes de armazenamento. Ele é usado para rastreamento de versões, não para gerenciamento de ciclo de vida e otimização de custos.",
          "en": "S3 Versioning maintains multiple versions of objects for protection against accidental deletions, but doesn't automate transitions between storage classes. It's used for version tracking, not for lifecycle management and cost optimization."
        }
      },
      {
        title: {
          "pt-BR": "S3 Cross-Region Replication",
          "en": "S3 Cross-Region Replication"
        },
        correct: false,
        explanation: {
          "pt-BR": "S3 Cross-Region Replication replica objetos automaticamente entre regiões para disaster recovery e compliance, mas não muda classes de armazenamento baseado em tempo. Ele é usado para replicação geográfica, não para otimização de custos através de transições de classe.",
          "en": "S3 Cross-Region Replication automatically replicates objects between regions for disaster recovery and compliance, but doesn't change storage classes based on time. It's used for geographic replication, not for cost optimization through class transitions."
        }
      }
    ],
    explanation: {
      "pt-BR": "S3 Lifecycle Policies permitem automatizar a transição de objetos entre classes de armazenamento baseado em regras definidas (tempo, tags, etc.). Você pode configurar para mover objetos de Standard para Standard-IA após 30 dias, e para Glacier após 6 meses. Transfer Acceleration melhora uploads, Versioning mantém versões de objetos, e Cross-Region Replication replica entre regiões.",
      "en": "S3 Lifecycle Policies allow automating the transition of objects between storage classes based on defined rules (time, tags, etc.). You can configure to move objects from Standard to Standard-IA after 30 days, and to Glacier after 6 months. Transfer Acceleration improves uploads, Versioning maintains object versions, and Cross-Region Replication replicates between regions."
    }
  },
  {
    id: 13,
    title: {
      "pt-BR": "Segurança - CloudTrail e Auditoria",
      "en": "Security - CloudTrail and Auditing"
    },
    description: {
      "pt-BR": "Uma empresa precisa rastrear todas as chamadas de API feitas na conta AWS para fins de auditoria e compliance. Qual serviço AWS registra continuamente chamadas de API e eventos de conta?",
      "en": "A company needs to track all API calls made to the AWS account for auditing and compliance purposes. Which AWS service continuously logs API calls and account events?"
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
          "pt-BR": "AWS CloudWatch",
          "en": "AWS CloudWatch"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS CloudWatch monitora métricas e logs de aplicações e serviços AWS, mas não registra especificamente chamadas de API e eventos de conta para auditoria. CloudTrail é o serviço específico para auditoria de API calls e eventos de conta.",
          "en": "AWS CloudWatch monitors metrics and logs from applications and AWS services, but doesn't specifically log API calls and account events for auditing. CloudTrail is the specific service for auditing API calls and account events."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        correct: true,
        explanation: {
          "pt-BR": "AWS CloudTrail registra continuamente todas as chamadas de API feitas na conta AWS e eventos de conta, fornecendo um histórico completo de atividade para auditoria, compliance e segurança. É essencial para rastrear quem fez o quê, quando e onde na conta AWS.",
          "en": "AWS CloudTrail continuously logs all API calls made to the AWS account and account events, providing a complete history of activity for auditing, compliance, and security. It's essential for tracking who did what, when, and where in the AWS account."
        }
      },
      {
        title: {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Config monitora e registra configurações de recursos AWS ao longo do tempo para auditoria de conformidade, mas não registra chamadas de API. Config rastreia mudanças de configuração, não ações de API.",
          "en": "AWS Config monitors and records AWS resource configurations over time for compliance auditing, but doesn't log API calls. Config tracks configuration changes, not API actions."
        }
      },
      {
        title: {
          "pt-BR": "AWS X-Ray",
          "en": "AWS X-Ray"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS X-Ray rastreia requisições em aplicações distribuídas para análise de performance e debugging, mas não registra chamadas de API da conta AWS para auditoria. X-Ray é para observabilidade de aplicações, não para auditoria de API calls.",
          "en": "AWS X-Ray traces requests in distributed applications for performance analysis and debugging, but doesn't log AWS account API calls for auditing. X-Ray is for application observability, not for API call auditing."
        }
      }
    ],
    explanation: {
      "pt-BR": "AWS CloudTrail registra continuamente chamadas de API e eventos de conta AWS, fornecendo um histórico completo de atividade para auditoria, compliance e segurança. CloudWatch monitora métricas e logs, Config monitora configurações de recursos, e X-Ray rastreia requisições em aplicações distribuídas.",
      "en": "AWS CloudTrail continuously logs API calls and AWS account events, providing a complete history of activity for auditing, compliance, and security. CloudWatch monitors metrics and logs, Config monitors resource configurations, and X-Ray traces requests in distributed applications."
    }
  },
  {
    id: 14,
    title: {
      "pt-BR": "Computação - Containers e ECS",
      "en": "Compute - Containers and ECS"
    },
    description: {
      "pt-BR": "Uma empresa quer executar aplicações containerizadas sem gerenciar servidores. Qual serviço AWS permite executar containers Docker sem provisionar ou gerenciar servidores?",
      "en": "A company wants to run containerized applications without managing servers. Which AWS service allows running Docker containers without provisioning or managing servers?"
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
          "pt-BR": "Amazon EC2",
          "en": "Amazon EC2"
        },
        correct: false,
        explanation: {
          "pt-BR": "Amazon EC2 requer que você provisione e gerencie servidores, instale Docker, configure clusters, e gerencie a infraestrutura. Para executar containers sem gerenciar servidores, ECS Fargate é a melhor opção, pois elimina a necessidade de gerenciar a infraestrutura subjacente.",
          "en": "Amazon EC2 requires you to provision and manage servers, install Docker, configure clusters, and manage infrastructure. To run containers without managing servers, ECS Fargate is the best option, as it eliminates the need to manage underlying infrastructure."
        }
      },
      {
        title: {
          "pt-BR": "Amazon ECS com Fargate",
          "en": "Amazon ECS with Fargate"
        },
        correct: true,
        explanation: {
          "pt-BR": "Amazon ECS com Fargate é um serviço serverless para containers que permite executar containers Docker sem provisionar ou gerenciar servidores. Você apenas define seus containers e o Fargate gerencia toda a infraestrutura, incluindo provisionamento, escalabilidade e manutenção.",
          "en": "Amazon ECS with Fargate is a serverless container service that allows running Docker containers without provisioning or managing servers. You just define your containers and Fargate manages all infrastructure, including provisioning, scalability, and maintenance."
        }
      },
      {
        title: {
          "pt-BR": "AWS Lambda",
          "en": "AWS Lambda"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Lambda executa funções serverless (código), não containers Docker completos. Lambda é para executar código em resposta a eventos, não para executar aplicações containerizadas completas. Para containers Docker, ECS Fargate é a solução adequada.",
          "en": "AWS Lambda executes serverless functions (code), not full Docker containers. Lambda is for executing code in response to events, not for running complete containerized applications. For Docker containers, ECS Fargate is the appropriate solution."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Lightsail",
          "en": "Amazon Lightsail"
        },
        correct: false,
        explanation: {
          "pt-BR": "Amazon Lightsail oferece instâncias e containers simplificados, mas ainda requer algum gerenciamento de servidores e não é totalmente serverless como ECS Fargate. Lightsail é mais adequado para aplicações simples e pequenas, não para containers sem gerenciamento de servidores.",
          "en": "Amazon Lightsail offers simplified instances and containers, but still requires some server management and isn't fully serverless like ECS Fargate. Lightsail is more suitable for simple and small applications, not for containers without server management."
        }
      }
    ],
    explanation: {
      "pt-BR": "Amazon ECS com Fargate é um serviço serverless para containers que permite executar containers Docker sem provisionar ou gerenciar servidores. Você apenas define seus containers e o Fargate gerencia a infraestrutura. EC2 requer gerenciamento de servidores, Lambda é para funções serverless (não containers completos), e Lightsail é para aplicações simples.",
      "en": "Amazon ECS with Fargate is a serverless container service that allows running Docker containers without provisioning or managing servers. You just define your containers and Fargate manages the infrastructure. EC2 requires server management, Lambda is for serverless functions (not full containers), and Lightsail is for simple applications."
    }
  },
  {
    id: 15,
    title: {
      "pt-BR": "Rede - Content Delivery Network",
      "en": "Networking - Content Delivery Network"
    },
    description: {
      "pt-BR": "Uma aplicação web global precisa entregar conteúdo estático (imagens, vídeos, CSS) para usuários ao redor do mundo com baixa latência. Qual serviço AWS é uma CDN (Content Delivery Network) global?",
      "en": "A global web application needs to deliver static content (images, videos, CSS) to users around the world with low latency. Which AWS service is a global CDN (Content Delivery Network)?"
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
          "pt-BR": "Amazon Route 53 é um serviço de DNS (Domain Name System) que roteia tráfego de internet para recursos AWS, mas não é uma CDN. Ele resolve nomes de domínio para endereços IP, mas não entrega conteúdo estático de edge locations para reduzir latência global.",
          "en": "Amazon Route 53 is a DNS (Domain Name System) service that routes internet traffic to AWS resources, but it's not a CDN. It resolves domain names to IP addresses, but doesn't deliver static content from edge locations to reduce global latency."
        }
      },
      {
        title: {
          "pt-BR": "Amazon CloudFront",
          "en": "Amazon CloudFront"
        },
        correct: true,
        explanation: {
          "pt-BR": "Amazon CloudFront é a CDN global da AWS que entrega conteúdo estático e dinâmico de edge locations ao redor do mundo, reduzindo significativamente a latência para usuários globais. É ideal para entregar imagens, vídeos, CSS e outros arquivos estáticos com baixa latência.",
          "en": "Amazon CloudFront is AWS's global CDN that delivers static and dynamic content from edge locations around the world, significantly reducing latency for global users. It's ideal for delivering images, videos, CSS, and other static files with low latency."
        }
      },
      {
        title: {
          "pt-BR": "AWS Global Accelerator",
          "en": "AWS Global Accelerator"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Global Accelerator melhora a performance e disponibilidade de aplicações usando a rede global da AWS, mas não é uma CDN. Ele otimiza o roteamento de tráfego para aplicações, não entrega conteúdo estático de cache. Para conteúdo estático, CloudFront é a solução.",
          "en": "AWS Global Accelerator improves application performance and availability using AWS's global network, but it's not a CDN. It optimizes traffic routing for applications, not static content delivery from cache. For static content, CloudFront is the solution."
        }
      },
      {
        title: {
          "pt-BR": "Amazon API Gateway",
          "en": "Amazon API Gateway"
        },
        correct: false,
        explanation: {
          "pt-BR": "Amazon API Gateway é um serviço para criar, publicar e gerenciar APIs REST e WebSocket, mas não é uma CDN. Ele gerencia endpoints de API, autenticação, rate limiting e versionamento, mas não entrega conteúdo estático de edge locations globalmente.",
          "en": "Amazon API Gateway is a service for creating, publishing, and managing REST and WebSocket APIs, but it's not a CDN. It manages API endpoints, authentication, rate limiting, and versioning, but doesn't deliver static content from global edge locations."
        }
      }
    ],
    explanation: {
      "pt-BR": "Amazon CloudFront é a CDN global da AWS que entrega conteúdo estático e dinâmico de edge locations ao redor do mundo, reduzindo latência e melhorando a experiência do usuário. Route 53 é DNS, Global Accelerator melhora performance de aplicações, e API Gateway é para gerenciar APIs REST.",
      "en": "Amazon CloudFront is AWS's global CDN that delivers static and dynamic content from edge locations around the world, reducing latency and improving user experience. Route 53 is DNS, Global Accelerator improves application performance, and API Gateway is for managing REST APIs."
    }
  },
  {
    id: 16,
    title: {
      "pt-BR": "Banco de Dados - RDS e Multi-AZ",
      "en": "Database - RDS and Multi-AZ"
    },
    description: {
      "pt-BR": "Uma aplicação crítica precisa de um banco de dados RDS com alta disponibilidade e failover automático em caso de falha. Qual configuração do RDS oferece replicação síncrona e failover automático?",
      "en": "A critical application needs an RDS database with high availability and automatic failover in case of failure. Which RDS configuration offers synchronous replication and automatic failover?"
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
          "pt-BR": "RDS Single-AZ",
          "en": "RDS Single-AZ"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS Single-AZ não oferece redundância nem failover automático. Se a instância falhar, a aplicação ficará indisponível até que uma nova instância seja criada e restaurada a partir de backup, o que pode levar muito tempo. Para alta disponibilidade, é necessário Multi-AZ.",
          "en": "RDS Single-AZ doesn't offer redundancy or automatic failover. If the instance fails, the application will be unavailable until a new instance is created and restored from backup, which can take a long time. For high availability, Multi-AZ is needed."
        }
      },
      {
        title: {
          "pt-BR": "RDS Multi-AZ",
          "en": "RDS Multi-AZ"
        },
        correct: true,
        explanation: {
          "pt-BR": "RDS Multi-AZ cria uma réplica síncrona em outra Availability Zone com failover automático. Se a instância primária falhar, o RDS automaticamente promove a réplica para primária em menos de 60 segundos, garantindo alta disponibilidade sem perda de dados.",
          "en": "RDS Multi-AZ creates a synchronous replica in another Availability Zone with automatic failover. If the primary instance fails, RDS automatically promotes the replica to primary in less than 60 seconds, ensuring high availability without data loss."
        }
      },
      {
        title: {
          "pt-BR": "RDS Read Replica",
          "en": "RDS Read Replica"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS Read Replica é assíncrono e usado principalmente para distribuir carga de leitura, não para failover automático. Uma Read Replica não pode substituir automaticamente a instância primária em caso de falha. Multi-AZ é necessário para failover automático.",
          "en": "RDS Read Replica is asynchronous and primarily used for distributing read load, not for automatic failover. A Read Replica cannot automatically replace the primary instance in case of failure. Multi-AZ is needed for automatic failover."
        }
      },
      {
        title: {
          "pt-BR": "RDS Snapshot",
          "en": "RDS Snapshot"
        },
        correct: false,
        explanation: {
          "pt-BR": "RDS Snapshot é um backup pontual que protege contra perda de dados, mas não oferece failover automático nem alta disponibilidade. Se a instância falhar, é necessário restaurar manualmente do snapshot, causando downtime significativo.",
          "en": "RDS Snapshot is a point-in-time backup that protects against data loss, but doesn't offer automatic failover or high availability. If the instance fails, it's necessary to manually restore from snapshot, causing significant downtime."
        }
      }
    ],
    explanation: {
      "pt-BR": "RDS Multi-AZ cria uma réplica síncrona em outra Availability Zone com failover automático em caso de falha da instância primária. Single-AZ não tem redundância, Read Replica é assíncrono e usado para leitura (não failover automático), e Snapshot é backup pontual.",
      "en": "RDS Multi-AZ creates a synchronous replica in another Availability Zone with automatic failover if the primary instance fails. Single-AZ has no redundancy, Read Replica is asynchronous and used for reading (not automatic failover), and Snapshot is a point-in-time backup."
    }
  },
  {
    id: 17,
    title: {
      "pt-BR": "Segurança - WAF e Proteção de Aplicações",
      "en": "Security - WAF and Application Protection"
    },
    description: {
      "pt-BR": "Uma aplicação web precisa proteger-se contra ataques comuns como SQL injection, XSS e requisições maliciosas. Qual serviço AWS oferece proteção contra ataques web comuns?",
      "en": "A web application needs protection against common attacks like SQL injection, XSS, and malicious requests. Which AWS service offers protection against common web attacks?"
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
          "pt-BR": "AWS Shield",
          "en": "AWS Shield"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Shield protege contra ataques DDoS (Distributed Denial of Service) na camada de rede e transporte, mas não protege contra ataques de aplicação como SQL injection e XSS. WAF é o serviço específico para proteger aplicações web contra ataques de aplicação.",
          "en": "AWS Shield protects against DDoS (Distributed Denial of Service) attacks at network and transport layers, but doesn't protect against application attacks like SQL injection and XSS. WAF is the specific service for protecting web applications against application attacks."
        }
      },
      {
        title: {
          "pt-BR": "AWS WAF (Web Application Firewall)",
          "en": "AWS WAF (Web Application Firewall)"
        },
        correct: true,
        explanation: {
          "pt-BR": "AWS WAF protege aplicações web contra ataques comuns como SQL injection, cross-site scripting (XSS), e outros exploits de aplicação. Ele pode ser integrado com CloudFront, Application Load Balancer ou API Gateway para filtrar e bloquear requisições maliciosas antes que cheguem à aplicação.",
          "en": "AWS WAF protects web applications against common attacks like SQL injection, cross-site scripting (XSS), and other application exploits. It can be integrated with CloudFront, Application Load Balancer, or API Gateway to filter and block malicious requests before they reach the application."
        }
      },
      {
        title: {
          "pt-BR": "AWS GuardDuty",
          "en": "AWS GuardDuty"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS GuardDuty é um serviço de detecção de ameaças que monitora atividades suspeitas e comportamentos maliciosos usando machine learning, mas não protege ativamente contra ataques de aplicação web como WAF faz. Ele detecta ameaças, não bloqueia ataques em tempo real.",
          "en": "AWS GuardDuty is a threat detection service that monitors suspicious activities and malicious behaviors using machine learning, but doesn't actively protect against web application attacks like WAF does. It detects threats, doesn't block attacks in real-time."
        }
      },
      {
        title: {
          "pt-BR": "AWS Inspector",
          "en": "AWS Inspector"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Inspector avalia vulnerabilidades de segurança e desvios de melhores práticas em instâncias EC2 e aplicações, mas não protege ativamente contra ataques em tempo real. Ele fornece relatórios de vulnerabilidades, não proteção ativa contra ataques como SQL injection e XSS.",
          "en": "AWS Inspector assesses security vulnerabilities and deviations from best practices in EC2 instances and applications, but doesn't actively protect against real-time attacks. It provides vulnerability reports, not active protection against attacks like SQL injection and XSS."
        }
      }
    ],
    explanation: {
      "pt-BR": "AWS WAF (Web Application Firewall) protege aplicações web contra ataques comuns como SQL injection, cross-site scripting (XSS), e outros exploits. Shield protege contra DDoS, GuardDuty detecta ameaças de segurança, e Inspector avalia vulnerabilidades de segurança.",
      "en": "AWS WAF (Web Application Firewall) protects web applications against common attacks like SQL injection, cross-site scripting (XSS), and other exploits. Shield protects against DDoS, GuardDuty detects security threats, and Inspector assesses security vulnerabilities."
    }
  },
  {
    id: 18,
    title: {
      "pt-BR": "Monitoramento - CloudWatch Logs",
      "en": "Monitoring - CloudWatch Logs"
    },
    description: {
      "pt-BR": "Uma equipe de desenvolvimento precisa centralizar e analisar logs de múltiplas aplicações Lambda para debugging. Qual serviço AWS permite coletar, monitorar e analisar logs de aplicações?",
      "en": "A development team needs to centralize and analyze logs from multiple Lambda applications for debugging. Which AWS service allows collecting, monitoring, and analyzing application logs?"
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
          "pt-BR": "Amazon S3",
          "en": "Amazon S3"
        },
        correct: false,
        explanation: {
          "pt-BR": "Amazon S3 pode armazenar logs como arquivos, mas não oferece análise em tempo real, busca, filtros ou monitoramento de logs. S3 é um serviço de armazenamento, não uma plataforma de análise de logs. CloudWatch Logs é específico para coletar, monitorar e analisar logs.",
          "en": "Amazon S3 can store logs as files, but doesn't offer real-time analysis, search, filters, or log monitoring. S3 is a storage service, not a log analysis platform. CloudWatch Logs is specific for collecting, monitoring, and analyzing logs."
        }
      },
      {
        title: {
          "pt-BR": "Amazon CloudWatch Logs",
          "en": "Amazon CloudWatch Logs"
        },
        correct: true,
        explanation: {
          "pt-BR": "Amazon CloudWatch Logs permite coletar, monitorar e analisar logs de aplicações Lambda e outros serviços AWS. Oferece busca em tempo real, filtros, métricas baseadas em logs e integração com outros serviços AWS para alertas e ações automáticas.",
          "en": "Amazon CloudWatch Logs allows collecting, monitoring, and analyzing logs from Lambda applications and other AWS services. Offers real-time search, filters, log-based metrics, and integration with other AWS services for alerts and automatic actions."
        }
      },
      {
        title: {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS CloudTrail registra chamadas de API e eventos de conta AWS para auditoria, mas não coleta logs de aplicações Lambda. CloudTrail é para auditoria de ações na conta AWS, não para logs de aplicações. CloudWatch Logs é o serviço para logs de aplicações.",
          "en": "AWS CloudTrail logs API calls and AWS account events for auditing, but doesn't collect logs from Lambda applications. CloudTrail is for auditing actions in the AWS account, not for application logs. CloudWatch Logs is the service for application logs."
        }
      },
      {
        title: {
          "pt-BR": "Amazon Kinesis",
          "en": "Amazon Kinesis"
        },
        correct: false,
        explanation: {
          "pt-BR": "Amazon Kinesis é um serviço de streaming de dados em tempo real para processar grandes volumes de dados, mas não é um serviço de coleta e análise de logs de aplicações. Kinesis é para processamento de streams de dados, não para gerenciamento de logs de aplicações.",
          "en": "Amazon Kinesis is a real-time data streaming service for processing large volumes of data, but it's not an application log collection and analysis service. Kinesis is for processing data streams, not for managing application logs."
        }
      }
    ],
    explanation: {
      "pt-BR": "Amazon CloudWatch Logs permite coletar, monitorar e analisar logs de aplicações e serviços AWS. Oferece busca, filtros e métricas baseadas em logs. S3 pode armazenar logs mas não oferece análise em tempo real, CloudTrail é para auditoria de API, e Kinesis é para streaming de dados.",
      "en": "Amazon CloudWatch Logs allows collecting, monitoring, and analyzing logs from applications and AWS services. Offers search, filters, and log-based metrics. S3 can store logs but doesn't offer real-time analysis, CloudTrail is for API auditing, and Kinesis is for data streaming."
    }
  },
  {
    id: 19,
    title: {
      "pt-BR": "Economia - Reserved Instances vs On-Demand",
      "en": "Economics - Reserved Instances vs On-Demand"
    },
    description: {
      "pt-BR": "Uma empresa sabe que vai usar instâncias EC2 continuamente por 1 ano. Qual opção oferece a maior economia de custos comparado a On-Demand?",
      "en": "A company knows they will use EC2 instances continuously for 1 year. Which option offers the greatest cost savings compared to On-Demand?"
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
          "pt-BR": "On-Demand Instances",
          "en": "On-Demand Instances"
        },
        correct: false,
        explanation: {
          "pt-BR": "On-Demand Instances são a opção mais cara para uso contínuo. Você paga o preço completo por hora sem desconto. Para uma carga de trabalho que será usada continuamente por 1 ano, On-Demand não oferece economia comparado a Reserved Instances.",
          "en": "On-Demand Instances are the most expensive option for continuous use. You pay the full hourly price without discount. For a workload that will be used continuously for 1 year, On-Demand doesn't offer savings compared to Reserved Instances."
        }
      },
      {
        title: {
          "pt-BR": "Reserved Instances (1 ano, All Upfront)",
          "en": "Reserved Instances (1 year, All Upfront)"
        },
        correct: true,
        explanation: {
          "pt-BR": "Reserved Instances com pagamento All Upfront (1 ano) oferece até 75% de economia comparado a On-Demand. Ao fazer um compromisso de 1 ano e pagar tudo adiantado, você obtém o maior desconto possível. Esta é a melhor opção para cargas de trabalho previsíveis e contínuas.",
          "en": "Reserved Instances with All Upfront payment (1 year) offers up to 75% savings compared to On-Demand. By committing to 1 year and paying everything upfront, you get the maximum discount possible. This is the best option for predictable and continuous workloads."
        }
      },
      {
        title: {
          "pt-BR": "Spot Instances",
          "en": "Spot Instances"
        },
        correct: false,
        explanation: {
          "pt-BR": "Spot Instances podem oferecer economia de até 90%, mas podem ser interrompidas a qualquer momento quando a AWS precisar da capacidade. Para uma carga de trabalho contínua que precisa de confiabilidade, Spot Instances não são adequadas devido ao risco de interrupção.",
          "en": "Spot Instances can offer up to 90% savings, but can be interrupted at any time when AWS needs the capacity. For a continuous workload that needs reliability, Spot Instances are not suitable due to the risk of interruption."
        }
      },
      {
        title: {
          "pt-BR": "Dedicated Instances",
          "en": "Dedicated Instances"
        },
        correct: false,
        explanation: {
          "pt-BR": "Dedicated Instances são mais caras que On-Demand e são usadas principalmente para requisitos de compliance e isolamento de hardware. Para uma carga de trabalho comum que precisa de economia de custos, Dedicated Instances não são a melhor opção.",
          "en": "Dedicated Instances are more expensive than On-Demand and are primarily used for compliance requirements and hardware isolation. For a common workload that needs cost savings, Dedicated Instances are not the best option."
        }
      }
    ],
    explanation: {
      "pt-BR": "Reserved Instances com pagamento All Upfront (1 ano) oferece até 75% de economia comparado a On-Demand. Spot Instances podem ser mais baratas mas podem ser interrompidas, o que não é ideal para carga contínua. Dedicated Instances são mais caras e usadas para compliance. On-Demand é a opção mais cara para uso contínuo.",
      "en": "Reserved Instances with All Upfront payment (1 year) offers up to 75% savings compared to On-Demand. Spot Instances can be cheaper but can be interrupted, which is not ideal for continuous load. Dedicated Instances are more expensive and used for compliance. On-Demand is the most expensive option for continuous use."
    }
  },
  {
    id: 20,
    title: {
      "pt-BR": "Fundamentos - AWS Free Tier",
      "en": "Fundamentals - AWS Free Tier"
    },
    description: {
      "pt-BR": "Um desenvolvedor está começando a usar AWS e quer testar serviços sem custo. Qual programa da AWS oferece acesso gratuito a muitos serviços AWS por 12 meses após criar uma conta?",
      "en": "A developer is starting to use AWS and wants to test services at no cost. Which AWS program offers free access to many AWS services for 12 months after creating an account?"
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
          "pt-BR": "AWS Support Basic",
          "en": "AWS Support Basic"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Support Basic é o nível de suporte gratuito que inclui acesso a documentação e fóruns, mas não oferece acesso gratuito a serviços AWS por 12 meses. Free Tier é o programa específico que oferece acesso gratuito a muitos serviços AWS por 12 meses após criar uma conta.",
          "en": "AWS Support Basic is the free support level that includes access to documentation and forums, but doesn't offer free access to AWS services for 12 months. Free Tier is the specific program that offers free access to many AWS services for 12 months after creating an account."
        }
      },
      {
        title: {
          "pt-BR": "AWS Free Tier",
          "en": "AWS Free Tier"
        },
        correct: true,
        explanation: {
          "pt-BR": "AWS Free Tier oferece acesso gratuito a muitos serviços AWS por 12 meses após criar uma conta, incluindo instâncias EC2 (750 horas/mês), S3 (5GB), Lambda (1M requisições/mês), e muitos outros serviços com limites específicos. É ideal para desenvolvedores que querem testar AWS sem custo.",
          "en": "AWS Free Tier offers free access to many AWS services for 12 months after creating an account, including EC2 instances (750 hours/month), S3 (5GB), Lambda (1M requests/month), and many other services with specific limits. It's ideal for developers who want to test AWS at no cost."
        }
      },
      {
        title: {
          "pt-BR": "AWS Credits",
          "en": "AWS Credits"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Credits são créditos promocionais que podem ser aplicados a contas AWS, mas não são um programa permanente de acesso gratuito. Free Tier é um programa estruturado que oferece acesso gratuito a serviços específicos por 12 meses, enquanto créditos são temporários e promocionais.",
          "en": "AWS Credits are promotional credits that can be applied to AWS accounts, but aren't a permanent free access program. Free Tier is a structured program that offers free access to specific services for 12 months, while credits are temporary and promotional."
        }
      },
      {
        title: {
          "pt-BR": "AWS Activate",
          "en": "AWS Activate"
        },
        correct: false,
        explanation: {
          "pt-BR": "AWS Activate é um programa específico para startups que oferece créditos, suporte e recursos, mas não é o programa geral de acesso gratuito para novos desenvolvedores. Free Tier é o programa universal que qualquer desenvolvedor pode usar ao criar uma conta AWS.",
          "en": "AWS Activate is a specific program for startups that offers credits, support, and resources, but isn't the general free access program for new developers. Free Tier is the universal program that any developer can use when creating an AWS account."
        }
      }
    ],
    explanation: {
      "pt-BR": "AWS Free Tier oferece acesso gratuito a muitos serviços AWS por 12 meses após criar uma conta, incluindo instâncias EC2, S3, Lambda, e outros serviços com limites específicos. Support Basic é nível de suporte gratuito, Credits são créditos promocionais, e Activate é programa para startups.",
      "en": "AWS Free Tier offers free access to many AWS services for 12 months after creating an account, including EC2 instances, S3, Lambda, and other services with specific limits. Support Basic is free support level, Credits are promotional credits, and Activate is a program for startups."
    }
  }
];



