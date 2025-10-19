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
        correct: false
      },
      {
        title: {
          "pt-BR": "Gerenciamento da infraestrutura física dos data centers",
          "en": "Managing the physical infrastructure of data centers"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Configuração de regras de firewall para o banco de dados",
          "en": "Configuring firewall rules for the database"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Backup e recuperação dos dados da aplicação",
          "en": "Backup and recovery of application data"
        },
        correct: false
      }
    ]
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
        correct: false
      },
      {
        title: {
          "pt-BR": "Usar Reserved Instances para a base e Spot Instances para picos",
          "en": "Use Reserved Instances for baseline and Spot Instances for peaks"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Usar apenas Spot Instances para economizar",
          "en": "Use only Spot Instances to save money"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Usar Dedicated Hosts para garantir performance",
          "en": "Use Dedicated Hosts to ensure performance"
        },
        correct: false
      }
    ]
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
        correct: false
      },
      {
        title: {
          "pt-BR": "Usar o princípio do menor privilégio com políticas IAM específicas",
          "en": "Use the principle of least privilege with specific IAM policies"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Compartilhar as credenciais de root da conta",
          "en": "Share the root account credentials"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Usar apenas grupos IAM sem políticas específicas",
          "en": "Use only IAM groups without specific policies"
        },
        correct: false
      }
    ]
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
        correct: false
      },
      {
        title: {
          "pt-BR": "AWS Lambda com API Gateway",
          "en": "AWS Lambda with API Gateway"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Amazon ECS com Fargate",
          "en": "Amazon ECS with Fargate"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Amazon Lightsail",
          "en": "Amazon Lightsail"
        },
        correct: false
      }
    ]
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
        correct: false
      },
      {
        title: {
          "pt-BR": "Distribuir a aplicação em múltiplas Availability Zones com Load Balancer",
          "en": "Distribute the application across multiple Availability Zones with Load Balancer"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Usar apenas uma instância maior em uma AZ diferente",
          "en": "Use only a larger instance in a different AZ"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Configurar apenas backup automático",
          "en": "Configure only automatic backup"
        },
        correct: false
      }
    ]
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
        correct: false
      },
      {
        title: {
          "pt-BR": "S3 Glacier Flexible Retrieval",
          "en": "S3 Glacier Flexible Retrieval"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "S3 Intelligent-Tiering",
          "en": "S3 Intelligent-Tiering"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "S3 Glacier Deep Archive",
          "en": "S3 Glacier Deep Archive"
        },
        correct: false
      }
    ]
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
        correct: false
      },
      {
        title: {
          "pt-BR": "AWS Direct Connect",
          "en": "AWS Direct Connect"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Internet Gateway",
          "en": "Internet Gateway"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "NAT Gateway",
          "en": "NAT Gateway"
        },
        correct: false
      }
    ]
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
        correct: false
      },
      {
        title: {
          "pt-BR": "Amazon CloudWatch com alarmes",
          "en": "Amazon CloudWatch with alarms"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "AWS Systems Manager",
          "en": "AWS Systems Manager"
        },
        correct: false
      }
    ]
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
        correct: false
      },
      {
        title: {
          "pt-BR": "Amazon DynamoDB",
          "en": "Amazon DynamoDB"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "Amazon Redshift",
          "en": "Amazon Redshift"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "Amazon ElastiCache",
          "en": "Amazon ElastiCache"
        },
        correct: false
      }
    ]
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
        correct: false
      },
      {
        title: {
          "pt-BR": "AWS Key Management Service (KMS)",
          "en": "AWS Key Management Service (KMS)"
        },
        correct: true
      },
      {
        title: {
          "pt-BR": "AWS Certificate Manager",
          "en": "AWS Certificate Manager"
        },
        correct: false
      },
      {
        title: {
          "pt-BR": "AWS CloudHSM",
          "en": "AWS CloudHSM"
        },
        correct: false
      }
    ]
  }
];



