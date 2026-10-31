// Banco adicional da PR #2, sem repetir o banco original.
export const cloudPractitionerQuestions2 = [
  {
    "id": 66,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Uma empresa precisa auditar seus recursos AWS e documentar todas as alterações feitas nas configurações. Qual serviço utilizar?",
      "en": "A company needs to audit its AWS resources and document all configuration changes. Which service should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
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
          "pt-BR": "O AWS Artifact disponibiliza relatórios e documentos de conformidade da AWS, como certificações e acordos. Ele não mantém o histórico das configurações dos recursos da conta.",
          "en": "AWS Artifact provides AWS compliance reports and documents, such as certifications and agreements. It does not maintain a history of resource configurations in the account."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Inspector avalia continuamente recursos compatíveis em busca de vulnerabilidades de software e exposição não intencional à rede. Ele não é o serviço para registrar alterações de configuração.",
          "en": "Amazon Inspector continuously assesses supported resources for software vulnerabilities and unintended network exposure. It is not the service for recording configuration changes."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Config registra configurações dos recursos e suas alterações ao longo do tempo, além de permitir avaliar recursos com regras de conformidade. Isso fornece o histórico de auditoria de configuração solicitado.",
          "en": "AWS Config records resource configurations and their changes over time, and can evaluate resources against compliance rules. This provides the requested configuration audit history."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch coleta métricas, logs e eventos e pode gerar alarmes para monitoramento operacional. Ele não mantém o histórico de configuração dos recursos com o propósito de auditoria oferecido pelo AWS Config.",
          "en": "Amazon CloudWatch collects metrics, logs, and events and can raise alarms for operational monitoring. It does not maintain resource configuration history for auditing in the way AWS Config does."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Config registra e acompanha as configurações dos recursos AWS ao longo do tempo, permitindo auditar alterações e avaliar conformidade. O AWS CloudTrail registra atividade de API, enquanto Artifact fornece documentos de conformidade, Inspector avalia vulnerabilidades e CloudWatch monitora métricas e eventos.",
      "en": "AWS Config records and tracks AWS resource configurations over time, enabling change audits and compliance evaluation. AWS CloudTrail records API activity, while Artifact provides compliance documents, Inspector assesses vulnerabilities, and CloudWatch monitors metrics and events."
    }
  },
  {
    "id": 67,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Qual serviço AWS pode criar cópias de recursos em diferentes regiões usando templates de infraestrutura?",
      "en": "Which AWS service can create copies of resources in different Regions using infrastructure templates?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon ElastiCache",
          "en": "Amazon ElastiCache"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon ElastiCache fornece caches em memória gerenciados para reduzir a latência de acesso a dados. Não é uma ferramenta para criar cópias de arquiteturas usando templates de infraestrutura.",
          "en": "Amazon ElastiCache provides managed in-memory caches to reduce data-access latency. It is not a tool for reproducing architectures with infrastructure templates."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Systems Manager",
          "en": "AWS Systems Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Systems Manager ajuda a operar e administrar recursos, como nós gerenciados e parâmetros de configuração. Não descreve e replica pilhas de recursos entre regiões como o CloudFormation.",
          "en": "AWS Systems Manager helps operate and administer resources, such as managed nodes and configuration parameters. It does not describe and replicate resource stacks across Regions like CloudFormation."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CloudTrail registra chamadas de API e outras atividades da conta para auditoria e investigação. Ele não provisiona recursos a partir de templates.",
          "en": "AWS CloudTrail records API calls and other account activity for auditing and investigation. It does not provision resources from templates."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudFormation",
          "en": "AWS CloudFormation"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS CloudFormation usa templates para definir e provisionar pilhas de recursos de forma repetível, inclusive em regiões diferentes. Assim, equipes podem criar cópias consistentes da infraestrutura desejada.",
          "en": "AWS CloudFormation uses templates to define and provision resource stacks repeatably, including in different Regions. Teams can therefore create consistent copies of the desired infrastructure."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS CloudFormation provisiona e gerencia conjuntos de recursos descritos em templates, permitindo reproduzir uma infraestrutura em diferentes regiões. ElastiCache é cache gerenciado, Systems Manager apoia operações e gerenciamento de nós, e CloudTrail registra atividade de API, não define infraestrutura como código.",
      "en": "AWS CloudFormation provisions and manages sets of resources described in templates, allowing infrastructure to be reproduced across Regions. ElastiCache is a managed cache, Systems Manager supports operations and node management, and CloudTrail records API activity rather than defining infrastructure as code."
    }
  },
  {
    "id": 68,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Modelo de responsabilidade compartilhada",
      "en": "Shared responsibility model"
    },
    "description": {
      "pt-BR": "Qual responsabilidade é compartilhada entre o cliente e a AWS?",
      "en": "Which responsibility is shared between the customer and AWS?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Fornecer chave de criptografia do lado cliente",
          "en": "Provide a client-side encryption key"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente é responsável por proteger seus dados e escolher e gerenciar mecanismos e chaves de criptografia do lado do cliente. A AWS oferece serviços de criptografia, mas não fornece a chave privada controlada pelo cliente.",
          "en": "The customer is responsible for protecting its data and choosing and managing customer-side encryption mechanisms and keys. AWS offers encryption services but does not provide the customer's controlled private key."
        }
      },
      {
        "title": {
          "pt-BR": "Oferecer conscientização e treinamento",
          "en": "Provide awareness and training"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A conscientização e o treinamento de segurança envolvem a AWS, que protege e treina sua força de trabalho e oferece orientações e recursos de segurança, e o cliente, que treina seus próprios funcionários. Por isso, essa atividade é compartilhada.",
          "en": "Security awareness and training involve AWS, which protects and trains its workforce and provides security guidance and resources, and the customer, which trains its own employees. The responsibility is therefore shared."
        }
      },
      {
        "title": {
          "pt-BR": "Controlar data centers físicos",
          "en": "Manage physical data centers"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A proteção física das instalações e dos data centers é responsabilidade da AWS como parte da segurança da nuvem. O cliente não controla esses locais.",
          "en": "Physical protection of facilities and data centers is AWS's responsibility as part of security of the cloud. The customer does not control these locations."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar instância EC2",
          "en": "Configure an EC2 instance"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente configura e protege o sistema operacional, as aplicações e as regras de rede de suas instâncias Amazon EC2, conforme o modelo de implantação. A AWS protege a infraestrutura subjacente, mas não escolhe a configuração da instância do cliente.",
          "en": "The customer configures and secures the operating system, applications, and network rules for its Amazon EC2 instances, depending on the deployment model. AWS secures the underlying infrastructure but does not choose the customer's instance configuration."
        }
      }
    ],
    "explanation": {
      "pt-BR": "A conscientização e o treinamento de segurança dependem tanto da infraestrutura e orientação oferecidas pela AWS quanto da capacitação dos funcionários do cliente, portanto são uma responsabilidade compartilhada. A segurança física dos data centers cabe à AWS; chaves de dados e configuração de instâncias EC2 ficam sob controle do cliente.",
      "en": "Security awareness and training depend on both AWS-provided infrastructure and guidance and the customer's employee training, making them a shared responsibility. Physical data center security belongs to AWS, while data keys and EC2 instance configuration are controlled by the customer."
    }
  },
  {
    "id": 69,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Qual ferramenta ajuda a determinar se é preciso solicitar aumento da quota de serviço de VPC?",
      "en": "Which tool helps determine whether a VPC service quota increase should be requested?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Service Catalog",
          "en": "AWS Service Catalog"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Service Catalog permite organizar e distribuir produtos de infraestrutura aprovados para usuários. Ele não analisa a utilização atual das quotas de serviço para recomendar aumentos.",
          "en": "AWS Service Catalog lets organizations organize and distribute approved infrastructure products to users. It does not analyze current service quota usage to recommend increases."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Health Dashboard",
          "en": "AWS Health Dashboard"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Health Dashboard apresenta eventos e avisos sobre a saúde dos serviços e recursos AWS, inclusive eventos específicos da conta. Não é a ferramenta de análise de utilização de quotas do Trusted Advisor.",
          "en": "AWS Health Dashboard presents events and notices about the health of AWS services and resources, including account-specific events. It is not the Trusted Advisor tool for analyzing quota utilization."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor analisa a conta em relação a verificações de boas práticas, incluindo quotas e limites de serviço. Suas verificações ajudam a perceber quando a capacidade disponível pode exigir um pedido de aumento.",
          "en": "AWS Trusted Advisor analyzes an account against best-practice checks, including service quotas and limits. Its checks help identify when available capacity may require an increase request."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Cost and Usage Report",
          "en": "AWS Cost and Usage Report"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Cost and Usage Report fornece dados detalhados de custos e consumo dos serviços para análise financeira. Ele não é voltado a acompanhar limites de recursos de VPC.",
          "en": "AWS Cost and Usage Report provides detailed service cost and usage data for financial analysis. It is not designed to track VPC resource limits."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Trusted Advisor verifica práticas recomendadas e pode mostrar o uso de quotas e limites de serviço, ajudando a identificar quando solicitar um aumento para recursos de VPC. Service Catalog disponibiliza produtos aprovados, Health Dashboard informa eventos que afetam serviços e Cost and Usage Report detalha custos e uso faturável.",
      "en": "AWS Trusted Advisor checks best practices and can show service quota and limit usage, helping identify when to request an increase for VPC resources. Service Catalog provides approved products, Health Dashboard reports events affecting services, and Cost and Usage Report details costs and billable usage."
    }
  },
  {
    "id": 70,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual princípio de design se aplica ao dimensionamento correto (right sizing) da infraestrutura AWS?",
      "en": "Which design principle applies to right-sizing AWS infrastructure?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Escalar horizontalmente",
          "en": "Scale horizontally"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Escalar horizontalmente significa adicionar ou remover instâncias para atender à demanda. Isso melhora a capacidade de escala, mas não é, por si só, o princípio de adequar o tamanho dos recursos para reduzir custos.",
          "en": "Horizontal scaling means adding or removing instances to meet demand. It improves scalability, but is not itself the principle of sizing resources appropriately to reduce cost."
        }
      },
      {
        "title": {
          "pt-BR": "Fazer mudanças frequentes e reversíveis",
          "en": "Make frequent, reversible changes"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Fazer mudanças frequentes e reversíveis permite experimentar e desfazer alterações com menor risco. Esse princípio trata da agilidade operacional, não do ajuste de capacidade visando economia.",
          "en": "Making frequent, reversible changes enables experimentation and safer rollbacks. This principle concerns operational agility, not capacity adjustment for savings."
        }
      },
      {
        "title": {
          "pt-BR": "Executar operações como código",
          "en": "Perform operations as code"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Executar operações como código automatiza e padroniza atividades operacionais por meio de código. Isso não descreve diretamente a seleção de tipos e tamanhos de recursos pelo custo e pela demanda.",
          "en": "Performing operations as code automates and standardizes operational activities through code. It does not directly describe selecting resource types and sizes based on cost and demand."
        }
      },
      {
        "title": {
          "pt-BR": "Otimizar para fins de custo",
          "en": "Optimize for cost"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Otimizar para fins de custo significa escolher e ajustar recursos para atender à necessidade sem pagar por capacidade excessiva. O right sizing aplica esse princípio ao adequar tamanho e tipo de instância ao uso observado.",
          "en": "Optimizing for cost means choosing and adjusting resources to meet needs without paying for excess capacity. Right-sizing applies this principle by matching instance size and type to observed usage."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O dimensionamento correto ajusta os recursos à carga real, reduzindo capacidade ociosa e gastos desnecessários; por isso, aplica o princípio de otimizar para fins de custo. Escalabilidade horizontal, mudanças reversíveis e operações como código são princípios úteis, mas não expressam diretamente a motivação de custo do right sizing.",
      "en": "Right-sizing matches resources to actual workload, reducing idle capacity and unnecessary spending; it therefore applies the principle of optimizing for cost. Horizontal scaling, reversible changes, and operations as code are useful principles, but they do not directly express the cost rationale for right-sizing."
    }
  },
  {
    "id": 71,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Um profissional pretende replicar dados entre várias áreas geográficas para recuperação de desastres. Qual componente usar?",
      "en": "A professional wants to replicate data across multiple geographic areas for disaster recovery. Which component should be used?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Contas AWS",
          "en": "Contas AWS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Contas AWS separam administração, permissões e faturamento, e podem ser usadas em estratégias de isolamento. Elas não são, por si, locais geográficos para replicar dados.",
          "en": "AWS accounts separate administration, permissions, and billing, and can be used in isolation strategies. They are not geographic locations for replicating data."
        }
      },
      {
        "title": {
          "pt-BR": "Edge Locations",
          "en": "Edge Locations"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Edge Locations são pontos de presença usados por serviços como o Amazon CloudFront para aproximar conteúdo dos usuários. Não são regiões de armazenamento e recuperação de desastres regionais.",
          "en": "Edge Locations are points of presence used by services such as Amazon CloudFront to bring content closer to users. They are not Regions for regional disaster-recovery storage."
        }
      },
      {
        "title": {
          "pt-BR": "Availability Zones",
          "en": "Availability Zones"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "As Zonas de disponibilidade são locais isolados dentro de uma Região e ajudam a obter alta disponibilidade e resiliência contra falhas locais. Para separar cópias por áreas geográficas distintas, a escolha adequada são Regiões diferentes.",
          "en": "Availability Zones are isolated locations within a Region and help provide high availability and resilience to local failures. To separate copies across distinct geographic areas, use different Regions."
        }
      },
      {
        "title": {
          "pt-BR": "Regiões AWS",
          "en": "AWS Regions"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "As Regiões AWS são áreas geográficas independentes, cada uma com várias Zonas de disponibilidade. Replicar dados entre regiões separa cópias geograficamente e ajuda a recuperar workloads após uma interrupção regional.",
          "en": "AWS Regions are independent geographic areas, each with multiple Availability Zones. Replicating data across Regions separates copies geographically and helps recover workloads after a regional disruption."
        }
      }
    ],
    "explanation": {
      "pt-BR": "As Regiões AWS são áreas geográficas distintas, e a replicação entre regiões pode manter dados em locais separados para apoiar recuperação de desastres regionais. Zonas de disponibilidade são locais isolados dentro de uma mesma região, Edge Locations atendem principalmente à entrega de conteúdo, e contas AWS são limites administrativos e de cobrança.",
      "en": "AWS Regions are distinct geographic areas, and cross-Region replication can keep data in separate locations to support regional disaster recovery. Availability Zones are isolated locations within one Region, Edge Locations primarily serve content delivery, and AWS accounts are administrative and billing boundaries."
    }
  },
  {
    "id": 72,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço computacional da AWS é serverless?",
      "en": "Which AWS compute service is serverless?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Lambda",
          "en": "AWS Lambda"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Lambda executa funções em resposta a eventos e gerencia automaticamente a infraestrutura de computação subjacente. O cliente paga pelo uso de execução, sem administrar servidores.",
          "en": "AWS Lambda runs functions in response to events and automatically manages the underlying compute infrastructure. Customers pay for execution usage without administering servers."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon RDS",
          "en": "Amazon RDS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon RDS facilita a configuração, operação e escalabilidade de bancos de dados relacionais gerenciados. Seu propósito é banco de dados, não execução geral de código serverless como serviço de computação.",
          "en": "Amazon RDS simplifies the setup, operation, and scaling of managed relational databases. Its purpose is database management, not general serverless code execution as a compute service."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ECS",
          "en": "Amazon ECS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon ECS é um serviço de orquestração para executar e gerenciar contêineres. O ECS pode ser usado com opções de infraestrutura diferentes, mas a alternativa não é o serviço de funções serverless indicado aqui.",
          "en": "Amazon ECS is an orchestration service for running and managing containers. ECS can be used with different infrastructure options, but it is not the serverless functions service sought here."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EC2",
          "en": "Amazon EC2"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon EC2 fornece instâncias de máquinas virtuais, cuja escolha, configuração e administração cabem ao cliente. Embora elimine a compra de hardware, não é serverless porque o cliente ainda gerencia as instâncias.",
          "en": "Amazon EC2 provides virtual machine instances whose selection, configuration, and administration are the customer's responsibility. Although it eliminates hardware purchasing, it is not serverless because customers still manage instances."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Lambda executa código sem que o cliente provisione ou administre servidores, sendo um serviço de computação serverless. RDS é um serviço gerenciado de banco de dados, ECS orquestra contêineres e EC2 fornece máquinas virtuais cuja capacidade de computação o cliente administra.",
      "en": "AWS Lambda runs code without requiring the customer to provision or manage servers, making it a serverless compute service. RDS is a managed database service, ECS orchestrates containers, and EC2 provides virtual machines whose compute capacity the customer manages."
    }
  },
  {
    "id": 73,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "IAM e identidades",
      "en": "IAM and identities"
    },
    "description": {
      "pt-BR": "Quais são características de usuários e grupos do IAM? (Selecione duas.)",
      "en": "Which statements describe IAM users and groups? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Grupos contêm somente usuários e não são aninhados",
          "en": "Groups contain only users and cannot be nested"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Um grupo do IAM é uma coleção de usuários, não de grupos; portanto, grupos não são aninhados. Essa é uma característica correta dos grupos do IAM.",
          "en": "An IAM group is a collection of users, not groups, so groups cannot be nested. This is a correct characteristic of IAM groups."
        }
      },
      {
        "title": {
          "pt-BR": "Usuário pode integrar apenas um grupo",
          "en": "A user can belong to only one group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um usuário do IAM pode pertencer a mais de um grupo, recebendo permissões associadas a cada grupo. A afirmação de que só pode integrar um grupo está incorreta.",
          "en": "An IAM user can belong to more than one group and receive permissions associated with each group. The claim that a user can belong to only one group is incorrect."
        }
      },
      {
        "title": {
          "pt-BR": "Usuário pode integrar vários grupos",
          "en": "A user can belong to multiple groups"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Um usuário do IAM pode ser membro de vários grupos ao mesmo tempo, o que facilita organizar funções e permissões. Essa é uma característica correta do IAM.",
          "en": "An IAM user can be a member of multiple groups at the same time, which helps organize roles and permissions. This is a correct IAM characteristic."
        }
      },
      {
        "title": {
          "pt-BR": "Todos os usuários entram num grupo padrão",
          "en": "All users join a default group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O IAM não adiciona automaticamente todos os usuários a um grupo padrão. Administradores escolhem explicitamente a associação a grupos e as permissões correspondentes.",
          "en": "IAM does not automatically add every user to a default group. Administrators explicitly choose group membership and the corresponding permissions."
        }
      },
      {
        "title": {
          "pt-BR": "Grupos podem conter outros grupos",
          "en": "Groups can contain other groups"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Grupos do IAM não podem conter outros grupos; eles contêm usuários. A estrutura de grupos aninhados descrita não é suportada.",
          "en": "IAM groups cannot contain other groups; they contain users. The nested-group structure described is not supported."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No IAM, grupos organizam usuários para atribuição coletiva de permissões e podem conter usuários, mas não outros grupos. Um usuário pode pertencer a vários grupos; não há grupo padrão ao qual todos os novos usuários sejam adicionados automaticamente.",
      "en": "In IAM, groups organize users for collective permission assignment and can contain users, but not other groups. A user can belong to multiple groups; there is no default group to which all new users are automatically added."
    }
  },
  {
    "id": 74,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Qual serviço ajuda a evitar ataques DDoS na camada de rede?",
      "en": "Which service helps prevent DDoS attacks at the network layer?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon GuardDuty analisa fontes de dados e sinais para detectar ameaças e atividades suspeitas na conta. Ele não é o serviço de mitigação DDoS de rede.",
          "en": "Amazon GuardDuty analyzes data sources and signals to detect threats and suspicious account activity. It is not the network DDoS mitigation service."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Firewall Manager",
          "en": "AWS Firewall Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Firewall Manager administra centralmente políticas de firewall e segurança para várias contas e recursos. Ele pode gerenciar políticas do Shield, mas o serviço que fornece proteção DDoS é o AWS Shield.",
          "en": "AWS Firewall Manager centrally manages firewall and security policies across multiple accounts and resources. It can manage Shield policies, but AWS Shield is the service that provides DDoS protection."
        }
      },
      {
        "title": {
          "pt-BR": "AWS WAF",
          "en": "AWS WAF"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS WAF ajuda a proteger aplicações Web filtrando solicitações HTTP e HTTPS por regras, atuando na camada de aplicação. Para proteção contra ataques DDoS de rede, a opção apropriada é o AWS Shield.",
          "en": "AWS WAF helps protect web applications by filtering HTTP and HTTPS requests with rules at the application layer. For network-layer DDoS protection, AWS Shield is the appropriate choice."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Shield",
          "en": "AWS Shield"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Shield é um serviço gerenciado de proteção contra DDoS para recursos AWS compatíveis. O Shield Standard oferece proteção automática contra ataques comuns de rede e transporte.",
          "en": "AWS Shield is a managed DDoS protection service for supported AWS resources. Shield Standard provides automatic protection against common network- and transport-layer attacks."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Shield fornece proteção gerenciada contra ataques Distributed Denial of Service (DDoS), incluindo proteção contra ataques comuns de rede e transporte. GuardDuty detecta ameaças, Firewall Manager centraliza políticas de segurança e AWS WAF filtra solicitações HTTP e HTTPS na camada de aplicação.",
      "en": "AWS Shield provides managed protection against Distributed Denial of Service (DDoS) attacks, including common network- and transport-layer attacks. GuardDuty detects threats, Firewall Manager centrally manages security policies, and AWS WAF filters HTTP and HTTPS requests at the application layer."
    }
  },
  {
    "id": 75,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Well-Architected e resiliência",
      "en": "Well-Architected and resilience"
    },
    "description": {
      "pt-BR": "Quais princípios aumentam a confiabilidade (Reliability)? (Selecione duas.)",
      "en": "Which principles improve reliability? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Recuperar-se automaticamente de falhas",
          "en": "Recover automatically from failures"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A recuperação automática detecta falhas e restaura a operação sem depender de intervenção manual imediata, reduzindo o impacto de interrupções. Esse é um princípio recomendado para workloads confiáveis.",
          "en": "Automatic recovery detects failures and restores operation without relying on immediate manual intervention, reducing the impact of disruptions. This is a recommended principle for reliable workloads."
        }
      },
      {
        "title": {
          "pt-BR": "Adotar modelo de consumo",
          "en": "Adopt a consumption model"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Adotar um modelo de consumo permite pagar pelos recursos conforme o uso e é principalmente um princípio de otimização de custos. Sozinho, não aumenta a capacidade de recuperação diante de falhas.",
          "en": "Adopting a consumption model allows customers to pay for resources as they use them and is primarily a cost-optimization principle. By itself, it does not improve recovery from failures."
        }
      },
      {
        "title": {
          "pt-BR": "Usar arquitetura monolítica",
          "en": "Use a monolithic architecture"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma arquitetura monolítica reúne componentes em uma unidade mais acoplada e não é uma prática recomendada específica para aumentar confiabilidade. O desenho deve considerar isolamento de falhas e recuperação, que não decorrem automaticamente de um monólito.",
          "en": "A monolithic architecture groups components into a more tightly coupled unit and is not a specific recommended practice for improving reliability. Design should consider fault isolation and recovery, neither of which follows automatically from a monolith."
        }
      },
      {
        "title": {
          "pt-BR": "Testar procedimentos de recuperação",
          "en": "Test recovery procedures"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Testar procedimentos de recuperação verifica se os planos funcionam e ajuda a revelar falhas antes de um incidente real. Isso reduz o risco de uma recuperação não funcionar quando necessária.",
          "en": "Testing recovery procedures verifies that plans work and helps uncover failures before a real incident. This reduces the risk of recovery not working when needed."
        }
      },
      {
        "title": {
          "pt-BR": "Avaliar eficiência geral",
          "en": "Evaluate overall efficiency"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Avaliar eficiência geral pode ajudar a revisar um workload, mas não identifica por si só se ele resiste a falhas ou se pode se recuperar delas. A confiabilidade exige práticas concretas, como recuperação automática e testes de recuperação.",
          "en": "Evaluating overall efficiency can help review a workload, but does not by itself establish whether it withstands or recovers from failures. Reliability requires concrete practices such as automatic recovery and recovery testing."
        }
      }
    ],
    "explanation": {
      "pt-BR": "A confiabilidade é reforçada ao projetar workloads para detectar falhas e recuperar-se automaticamente, e ao testar regularmente os procedimentos de recuperação. Modelo de consumo está ligado à otimização de custos, arquitetura monolítica não é um princípio de confiabilidade, e avaliar eficiência geral é vago e não substitui testes de recuperação.",
      "en": "Reliability improves when workloads are designed to detect failures and recover automatically, and when recovery procedures are tested regularly. A consumption model is associated with cost optimization, a monolithic architecture is not a reliability principle, and evaluating overall efficiency is vague and does not replace recovery testing."
    }
  },
  {
    "id": 76,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Well-Architected e resiliência",
      "en": "AWS Well-Architected and resilience"
    },
    "description": {
      "pt-BR": "Uma equipe quer revisar a arquitetura de suas cargas de trabalho com base nas melhores práticas do AWS Well-Architected Framework, identificar riscos altos e médios e acompanhar o plano de melhoria. Qual serviço deve usar?",
      "en": "A team wants to review the architecture of its workloads against the best practices of the AWS Well-Architected Framework, identify high and medium risks, and track the improvement plan. Which service should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor executa verificações automáticas nos recursos da conta e recomenda melhorias em custo, desempenho, segurança, tolerância a falhas e limites de serviço. Ele não conduz uma revisão guiada por perguntas do Framework nem registra o plano de melhoria de uma carga de trabalho.",
          "en": "AWS Trusted Advisor runs automated checks on the account's resources and recommends improvements in cost, performance, security, fault tolerance and service limits. It does not run a review guided by the Framework's questions or record an improvement plan for a workload."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Cost Explorer",
          "en": "AWS Cost Explorer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Cost Explorer permite visualizar e analisar custos e uso ao longo do tempo. Ele cobre apenas a dimensão de custos e não avalia a arquitetura segundo os pilares do Well-Architected Framework.",
          "en": "AWS Cost Explorer lets you visualize and analyze costs and usage over time. It covers only the cost dimension and does not evaluate the architecture against the pillars of the Well-Architected Framework."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Well-Architected Tool",
          "en": "AWS Well-Architected Tool"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Well-Architected Tool, disponível no console, permite registrar uma carga de trabalho, responder às perguntas baseadas nas melhores práticas do Well-Architected Framework e receber a identificação de riscos altos (HRI, High Risk Issues) e médios (MRI, Medium Risk Issues). Também permite definir o status de melhoria e compartilhar a carga de trabalho com outras contas, atendendo exatamente ao que a equipe pede.",
          "en": "The AWS Well-Architected Tool, available in the console, lets you register a workload, answer questions based on the Well-Architected Framework best practices and get high risk issues (HRIs) and medium risk issues (MRIs) identified. It also lets you set the improvement status and share the workload with other accounts, which is exactly what the team asks for."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Config registra o histórico de configuração dos recursos e avalia a conformidade com regras. Ele monitora configurações, mas não faz uma revisão de arquitetura segundo as melhores práticas do Framework.",
          "en": "AWS Config records the configuration history of resources and evaluates compliance with rules. It tracks configurations, but does not perform an architecture review against the Framework best practices."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Well-Architected Tool é o serviço do console que guia a revisão de uma carga de trabalho com perguntas baseadas nas melhores práticas do Well-Architected Framework, aponta riscos altos e médios e acompanha o plano de melhoria. O Trusted Advisor verifica recursos da conta, o Cost Explorer analisa apenas custos e o AWS Config avalia conformidade de configurações; nenhum deles conduz essa revisão de arquitetura.",
      "en": "The AWS Well-Architected Tool is the console service that guides a workload review with questions based on the Well-Architected Framework best practices, points out high and medium risks and tracks the improvement plan. Trusted Advisor checks account resources, Cost Explorer analyzes only costs and AWS Config evaluates configuration compliance; none of them runs this architecture review."
    }
  },
  {
    "id": 77,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Qual serviço monitora CPU e tráfego de rede das instâncias EC2?",
      "en": "Which service monitors CPU and network traffic for EC2 instances?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Inspector identifica vulnerabilidades e exposições de rede em recursos compatíveis. Não é o serviço de monitoramento de métricas de desempenho como CPU e tráfego.",
          "en": "Amazon Inspector identifies vulnerabilities and network exposure in supported resources. It is not the service for monitoring performance metrics such as CPU and traffic."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch coleta e apresenta métricas de EC2, incluindo utilização de CPU e bytes ou pacotes de rede, e permite criar alarmes. É o serviço de monitoramento operacional pedido.",
          "en": "Amazon CloudWatch collects and presents EC2 metrics, including CPU utilization and network bytes or packets, and allows alarms to be created. It is the requested operational monitoring service."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Config acompanha configurações e alterações dos recursos AWS e pode verificar conformidade com regras. Ele não é o serviço principal para métricas de CPU e rede.",
          "en": "AWS Config tracks AWS resource configurations and changes and can check compliance against rules. It is not the primary service for CPU and network metrics."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CloudTrail registra atividade da conta, como chamadas de API feitas por usuários e serviços. Esse histórico de auditoria não substitui as métricas de desempenho do CloudWatch.",
          "en": "AWS CloudTrail records account activity, such as API calls made by users and services. This audit history does not replace CloudWatch performance metrics."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon CloudWatch monitora métricas operacionais de instâncias EC2, incluindo métricas padrão como utilização de CPU e tráfego de rede, e pode acionar alarmes. Inspector avalia vulnerabilidades, Config registra configurações de recursos e CloudTrail registra chamadas de API.",
      "en": "Amazon CloudWatch monitors operational metrics for EC2 instances, including standard metrics such as CPU utilization and network traffic, and can trigger alarms. Inspector assesses vulnerabilities, Config records resource configurations, and CloudTrail records API calls."
    }
  },
  {
    "id": 78,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Banco de dados e análise",
      "en": "Databases and analytics"
    },
    "description": {
      "pt-BR": "Qual serviço analisa petabytes de dados estruturados e semiestruturados com SQL para BI, inclusive dados no S3?",
      "en": "Which service analyzes petabytes of structured and semi-structured data using SQL for BI, including data in S3?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Neptune",
          "en": "Amazon Neptune"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Neptune é um banco de dados de grafos gerenciado, adequado a dados com relações complexas, como redes sociais. Ele não é um data warehouse para análises SQL de petabytes de dados variados.",
          "en": "Amazon Neptune is a managed graph database suited to data with complex relationships, such as social networks. It is not a data warehouse for SQL analytics on petabytes of varied data."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon RDS",
          "en": "Amazon RDS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon RDS simplifica a operação de bancos de dados relacionais para aplicações transacionais. Embora ofereça suporte a SQL, não é o data warehouse analítico projetado para esse tipo de consulta em escala de petabytes.",
          "en": "Amazon RDS simplifies operating relational databases for transactional applications. Although it supports SQL, it is not the analytical data warehouse designed for this kind of petabyte-scale query."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Redshift",
          "en": "Amazon Redshift"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Redshift é um serviço de data warehouse otimizado para consultas analíticas SQL em grandes volumes de dados estruturados e semiestruturados. Com o Redshift Spectrum, também é possível consultar dados diretamente no Amazon S3.",
          "en": "Amazon Redshift is a data warehouse service optimized for SQL analytics on large volumes of structured and semi-structured data. Redshift Spectrum also enables querying data directly in Amazon S3."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon DynamoDB",
          "en": "Amazon DynamoDB"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon DynamoDB é um banco NoSQL gerenciado de chave-valor e documentos, projetado para acesso de baixa latência em escala. Não é um data warehouse relacional para análises SQL em petabytes.",
          "en": "Amazon DynamoDB is a managed NoSQL key-value and document database designed for low-latency access at scale. It is not a relational data warehouse for petabyte-scale SQL analytics."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Redshift é um data warehouse em nuvem que executa análises SQL em grande escala sobre dados estruturados e semiestruturados, podendo consultar dados no Amazon S3 por meio do Redshift Spectrum. Neptune é banco de grafos, RDS é banco relacional transacional gerenciado e DynamoDB é banco NoSQL de chave-valor e documentos.",
      "en": "Amazon Redshift is a cloud data warehouse that runs large-scale SQL analytics on structured and semi-structured data and can query data in Amazon S3 through Redshift Spectrum. Neptune is a graph database, RDS is a managed transactional relational database, and DynamoDB is a NoSQL key-value and document database."
    }
  },
  {
    "id": 79,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Modelo de responsabilidade compartilhada",
      "en": "Shared responsibility model"
    },
    "description": {
      "pt-BR": "No modelo de responsabilidade compartilhada, quais tarefas são da AWS? (Selecione duas.)",
      "en": "Under the shared responsibility model, which tasks are AWS's responsibility? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Atualizar hipervisor",
          "en": "Update the hypervisor"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A AWS mantém e atualiza o hipervisor que sustenta a infraestrutura de virtualização da nuvem. Essa camada subjacente é responsabilidade da AWS.",
          "en": "AWS maintains and updates the hypervisor that supports the cloud virtualization infrastructure. This underlying layer is AWS's responsibility."
        }
      },
      {
        "title": {
          "pt-BR": "Criptografar dados do cliente",
          "en": "Encrypt customer data"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente é responsável por classificar e proteger seus dados e por escolher opções de criptografia adequadas, conforme os serviços usados. A AWS fornece recursos de criptografia, mas a proteção dos dados do cliente permanece sob sua responsabilidade.",
          "en": "The customer is responsible for classifying and protecting its data and choosing appropriate encryption options, depending on the services used. AWS provides encryption capabilities, but protecting customer data remains the customer's responsibility."
        }
      },
      {
        "title": {
          "pt-BR": "Definir firewall dentro da VPC",
          "en": "Configure the firewall within the VPC"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente define e administra controles de tráfego da VPC, como grupos de segurança e listas de controle de acesso à rede, conforme sua arquitetura. Esses controles de rede não são configurados pela AWS em nome do cliente.",
          "en": "The customer defines and manages VPC traffic controls, such as security groups and network access control lists, according to its architecture. AWS does not configure these network controls on the customer's behalf."
        }
      },
      {
        "title": {
          "pt-BR": "Aplicar patches no SO de EC2",
          "en": "Patch the EC2 operating system"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Para instâncias EC2, o cliente é responsável por gerenciar o sistema operacional convidado, incluindo a aplicação de patches, salvo serviços gerenciados que alterem essa divisão. A AWS mantém a infraestrutura física e de virtualização subjacente.",
          "en": "For EC2 instances, the customer is responsible for managing the guest operating system, including applying patches, except where managed services change that division. AWS maintains the underlying physical and virtualization infrastructure."
        }
      },
      {
        "title": {
          "pt-BR": "Garantir segurança física das instalações",
          "en": "Ensure the physical security of facilities"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A AWS controla a segurança física de seus data centers, incluindo instalações e infraestrutura física. Essa tarefa está na camada de segurança da nuvem, sob responsabilidade da AWS.",
          "en": "AWS controls the physical security of its data centers, including facilities and physical infrastructure. This task falls under security of the cloud and is AWS's responsibility."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No modelo de responsabilidade compartilhada, a AWS protege a infraestrutura da nuvem, incluindo hipervisores e segurança física das instalações. O cliente normalmente protege e criptografa seus dados, configura controles de rede da VPC e aplica patches ao sistema operacional de suas instâncias EC2.",
      "en": "Under the Shared Responsibility Model, AWS secures the infrastructure of the cloud, including hypervisors and the physical security of facilities. The customer typically protects and encrypts its data, configures VPC network controls, and patches the operating system on its EC2 instances."
    }
  },
  {
    "id": 80,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Como colocar duas EC2 em data centers separados com baixa latência entre eles?",
      "en": "How can two EC2 instances be placed in separate data centers with low latency between them?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Em duas regiões com VPC Peering",
          "en": "In two Regions with VPC peering"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Duas Regiões são áreas geográficas distintas, normalmente muito mais distantes entre si do que duas Zonas de disponibilidade na mesma Região. VPC Peering fornece conectividade privada, mas não garante baixa latência entre regiões separadas.",
          "en": "Two Regions are distinct geographic areas, typically much farther apart than two Availability Zones in the same Region. VPC peering provides private connectivity but does not guarantee low latency between separate Regions."
        }
      },
      {
        "title": {
          "pt-BR": "Em duas AZs da mesma região",
          "en": "In two Availability Zones in the same Region"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "As Zonas de disponibilidade são data centers ou grupos de data centers isolados dentro de uma Região e interligados por rede redundante de baixa latência. Distribuir as duas instâncias entre Zonas distintas atende à separação física e à conectividade rápida.",
          "en": "Availability Zones are isolated data centers or groups of data centers within a Region, interconnected by a redundant low-latency network. Distributing the two instances across separate Zones provides physical separation and fast connectivity."
        }
      },
      {
        "title": {
          "pt-BR": "Uma on premises e outra via VPN",
          "en": "One on premises and the other over a VPN"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma conexão VPN entre uma instalação on premises e a AWS fornece conectividade criptografada pela rede, mas acrescenta dependências de internet ou de conectividade externa. Essa arquitetura não oferece a proximidade e a latência previsível entre duas Zonas na mesma Região.",
          "en": "A VPN connection between an on-premises facility and AWS provides encrypted network connectivity, but adds internet or external-connectivity dependencies. This architecture does not provide the proximity and predictable latency between two Zones in the same Region."
        }
      },
      {
        "title": {
          "pt-BR": "Em cluster placement group",
          "en": "In a cluster placement group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um cluster placement group posiciona instâncias próximas para obter baixa latência e alta largura de banda entre elas. Essa proximidade não corresponde ao requisito de colocá-las em data centers separados, pois o grupo tende a mantê-las juntas na mesma Zona de disponibilidade.",
          "en": "A cluster placement group places instances close together to achieve low latency and high throughput between them. That proximity does not meet the requirement to place them in separate data centers, since the group tends to keep them together in the same Availability Zone."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Zonas de disponibilidade são locais distintos e isolados dentro da mesma Região, conectados por uma rede redundante de baixa latência; distribuir instâncias entre elas separa os data centers e mantém conectividade rápida. Um cluster placement group otimiza a baixa latência ao posicionar instâncias próximas, não em data centers separados; regiões diferentes e uma VPN não oferecem a mesma proximidade regional.",
      "en": "Availability Zones are distinct, isolated locations within the same Region, connected by a redundant low-latency network; placing instances across them separates data centers while maintaining fast connectivity. A cluster placement group optimizes low latency by placing instances close together, not in separate data centers; different Regions and a VPN do not provide the same regional proximity."
    }
  },
  {
    "id": 81,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Numa reserva de host dedicado EC2, qual pagamento fornece maior desconto?",
      "en": "For an EC2 Dedicated Host reservation, which payment option provides the greatest discount?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Sem pagamento antecipado",
          "en": "No upfront payment"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Na opção sem pagamento antecipado, não há custo inicial da reserva, mas as cobranças recorrentes são maiores do que na opção paga integralmente no início. Por isso, ela não oferece o maior desconto.",
          "en": "With the no-upfront option, there is no initial reservation payment, but recurring charges are higher than with the all-upfront option. It therefore does not provide the largest discount."
        }
      },
      {
        "title": {
          "pt-BR": "Sob demanda por hora",
          "en": "Hourly On-Demand payment"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Instâncias ou hosts sob demanda são cobrados pelo uso sem compromisso de reserva de longo prazo. Essa modalidade não é uma opção de pagamento antecipado de reserva e geralmente custa mais do que uma reserva com pagamento integral.",
          "en": "On-Demand instances or hosts are billed for usage without a long-term reservation commitment. This is not an upfront reservation payment option and generally costs more than an all-upfront reservation."
        }
      },
      {
        "title": {
          "pt-BR": "Pagamento antecipado parcial",
          "en": "Partial upfront payment"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O pagamento antecipado parcial combina uma entrada menor com cobranças ao longo do prazo da reserva. Seu desconto é menor que o da opção com pagamento antecipado total.",
          "en": "The partial-upfront option combines a smaller initial payment with charges over the reservation term. Its discount is smaller than the all-upfront option's discount."
        }
      },
      {
        "title": {
          "pt-BR": "Pagamento antecipado total",
          "en": "All upfront payment"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O pagamento antecipado total quita a reserva no início do prazo e, entre as opções de pagamento disponíveis, normalmente proporciona o maior desconto. A contrapartida é o maior desembolso inicial.",
          "en": "All-upfront payment pays for the reservation at the start of the term and generally provides the largest discount among the available payment options. The tradeoff is the largest initial outlay."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Uma reserva de Dedicated Host com pagamento antecipado total tem o maior desconto entre as opções de pagamento antecipado disponíveis, em troca do pagamento integral no início do prazo. Pagamentos parciais ou sem entrada oferecem descontos menores, e o preço sob demanda não é uma opção de pagamento de reserva.",
      "en": "An EC2 Dedicated Host reservation with all upfront payment provides the largest discount among the upfront payment options in exchange for paying the full amount at the start of the term. Partial or no-upfront payments provide smaller discounts, and On-Demand pricing is not a reservation payment option."
    }
  },
  {
    "id": 82,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Uma aplicação precisa enviar, armazenar e receber mensagens em ordem FIFO. Qual serviço usar?",
      "en": "An application needs to send, store, and receive messages in FIFO order. Which service should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Step Functions",
          "en": "AWS Step Functions"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Step Functions coordena etapas de workflows distribuídos e gerencia transições e estados. Ele não é uma fila de mensagens para armazenamento e recebimento ordenado.",
          "en": "AWS Step Functions coordinates steps in distributed workflows and manages transitions and state. It is not a message queue for ordered storage and retrieval."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon SNS",
          "en": "Amazon SNS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon SNS é um serviço de publicação e assinatura que distribui mensagens a vários assinantes. Embora ofereça tópicos FIFO, não é uma fila para consumidores obterem e processarem mensagens armazenadas como o Amazon SQS FIFO.",
          "en": "Amazon SNS is a publish-subscribe service that distributes messages to multiple subscribers. Although it offers FIFO topics, it is not a queue for consumers to retrieve and process stored messages like Amazon SQS FIFO."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Kinesis Data Streams",
          "en": "Amazon Kinesis Data Streams"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Kinesis Data Streams coleta e processa fluxos de registros em tempo real, preservando a ordem por shard. É adequado a streaming de dados, mas não é a fila de mensagens FIFO gerenciada solicitada.",
          "en": "Amazon Kinesis Data Streams collects and processes real-time record streams, preserving order per shard. It is suited to data streaming, but it is not the requested managed FIFO message queue."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon SQS",
          "en": "Amazon SQS"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon SQS FIFO armazena mensagens em filas e preserva a ordem de envio e recebimento dentro de cada grupo de mensagens, com deduplicação. É indicado quando aplicações precisam de processamento de mensagens em sequência previsível.",
          "en": "Amazon SQS FIFO stores messages in queues and preserves send and receive order within each message group, with deduplication. It is suited to applications that need messages processed in a predictable sequence."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon SQS FIFO é uma fila gerenciada que armazena mensagens e preserva a ordem dentro de cada grupo de mensagens, atendendo à necessidade de enviar, armazenar e receber em ordem. Step Functions orquestra workflows, SNS distribui mensagens para assinantes e Kinesis Data Streams processa fluxos de registros, não funciona como uma fila FIFO de mensagens.",
      "en": "Amazon SQS FIFO is a managed queue that stores messages and preserves order within each message group, meeting the need to send, store, and receive messages in order. Step Functions orchestrates workflows, SNS distributes messages to subscribers, and Kinesis Data Streams processes record streams rather than acting as an FIFO message queue."
    }
  },
  {
    "id": 83,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Well-Architected e resiliência",
      "en": "Well-Architected and resilience"
    },
    "description": {
      "pt-BR": "Quais afirmações sobre regiões e zonas de disponibilidade são verdadeiras? (Selecione duas.)",
      "en": "Which statements about Regions and Availability Zones are true? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Regiões levam AWS para instalações locais",
          "en": "Regions bring AWS to on-premises locations"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Outposts estende serviços e infraestrutura da AWS a instalações locais; Regiões, por si só, são áreas geográficas da infraestrutura AWS na nuvem.",
          "en": "AWS Outposts extends AWS services and infrastructure to on-premises locations; Regions themselves are geographic areas of AWS cloud infrastructure."
        }
      },
      {
        "title": {
          "pt-BR": "Uma AZ contém várias regiões",
          "en": "An Availability Zone contains multiple Regions"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma Zona de Disponibilidade é composta por um ou mais datacenters, não por várias Regiões; várias AZs formam uma Região.",
          "en": "An Availability Zone consists of one or more data centers, not multiple Regions; multiple AZs make up a Region."
        }
      },
      {
        "title": {
          "pt-BR": "Regiões localizam-se pelo mundo",
          "en": "Regions are located around the world"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "As Regiões são áreas geográficas separadas distribuídas globalmente, permitindo escolher onde implantar recursos e atender requisitos de localização.",
          "en": "Regions are separate geographic areas distributed worldwide, allowing customers to choose where to deploy resources and meet location requirements."
        }
      },
      {
        "title": {
          "pt-BR": "Regiões estão sempre separadas por 100 km",
          "en": "Regions are always 100 km apart"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A AWS não define uma separação universal de 100 km entre todas as Regiões; a distância varia conforme a localização geográfica.",
          "en": "AWS does not define a universal 100 km separation between every Region; distances vary by geographic location."
        }
      },
      {
        "title": {
          "pt-BR": "Regiões consistem em várias AZs",
          "en": "Regions consist of multiple Availability Zones"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Uma Região contém várias Zonas de Disponibilidade independentes, o que permite distribuir recursos para aumentar a disponibilidade e a resiliência.",
          "en": "A Region contains multiple independent Availability Zones, allowing resources to be distributed for greater availability and resilience."
        }
      }
    ],
    "explanation": {
      "pt-BR": "As Regiões são áreas geográficas distintas distribuídas pelo mundo, e cada Região é composta por várias Zonas de Disponibilidade (AZs). Uma AZ não contém várias Regiões, e não há uma regra universal de distância fixa de 100 km entre Regiões; instalações locais são viabilizadas por ofertas como AWS Outposts e Local Zones.",
      "en": "AWS Regions are distinct geographic areas around the world, and each Region consists of multiple Availability Zones (AZs). An AZ does not contain multiple Regions, and there is no universal fixed 100 km separation rule between Regions; on-premises and nearby deployments are addressed by offerings such as AWS Outposts and Local Zones."
    }
  },
  {
    "id": 84,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço monitora ações no console, SDKs e CLI da conta AWS?",
      "en": "Which service monitors actions in the AWS account console, SDKs, and CLI?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Inspector avalia continuamente vulnerabilidades e exposição de workloads compatíveis; ele não é o serviço principal para registrar ações da conta.",
          "en": "Amazon Inspector continuously assesses vulnerabilities and exposure for supported workloads; it is not the primary service for recording account actions."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS CloudTrail registra eventos de gerenciamento e outras atividades da conta, permitindo auditar ações originadas no console, em SDKs e na CLI.",
          "en": "AWS CloudTrail records management events and other account activity, making it possible to audit actions originating in the console, SDKs, and the CLI."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor oferece verificações e recomendações sobre custo, segurança, desempenho, tolerância a falhas e limites de serviço; não é um log de ações da conta.",
          "en": "AWS Trusted Advisor provides checks and recommendations for cost, security, performance, fault tolerance, and service limits; it is not an account activity log."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch coleta e monitora métricas, logs e alarmes operacionais, mas não é o serviço de auditoria das chamadas feitas pelos usuários na conta.",
          "en": "Amazon CloudWatch collects and monitors metrics, logs, and operational alarms, but it is not the service for auditing users' API actions in the account."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS CloudTrail registra a atividade da conta, incluindo ações realizadas no Console de Gerenciamento da AWS e chamadas feitas por SDKs e pela interface de linha de comando (CLI). Os outros serviços têm funções diferentes: monitoramento de métricas, recomendações ou avaliação de vulnerabilidades.",
      "en": "AWS CloudTrail records account activity, including actions in the AWS Management Console and calls made through software development kits (SDKs) and the command line interface (CLI). The other services serve different purposes, such as metrics monitoring, recommendations, or vulnerability assessment."
    }
  },
  {
    "id": 85,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "IAM e identidades",
      "en": "IAM and identities"
    },
    "description": {
      "pt-BR": "Qual serviço detecta interrupção nos servidores de site e redireciona usuários para endpoints alternativos?",
      "en": "Which service detects website server outages and redirects users to alternate endpoints?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon GuardDuty analisa fontes de telemetria para detectar ameaças à segurança; não realiza failover de DNS para o site.",
          "en": "Amazon GuardDuty analyzes telemetry sources to detect security threats; it does not perform DNS failover for a website."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Route 53",
          "en": "Amazon Route 53"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Route 53 é um serviço de DNS que pode usar verificações de integridade e políticas de roteamento para enviar usuários a endpoints saudáveis quando outro falha.",
          "en": "Amazon Route 53 is a DNS service that can use health checks and routing policies to send users to healthy endpoints when another endpoint fails."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor verifica a configuração da conta e recomenda melhorias; ele não monitora endpoints de site nem redireciona consultas do Sistema de Nomes de Domínio (DNS).",
          "en": "AWS Trusted Advisor checks account configuration and recommends improvements; it does not monitor website endpoints or redirect Domain Name System (DNS) queries."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudFront",
          "en": "Amazon CloudFront"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon CloudFront é uma rede de entrega de conteúdo que acelera a distribuição de conteúdo; não substitui o roteamento DNS de failover do Route 53.",
          "en": "Amazon CloudFront is a content delivery network that accelerates content delivery; it does not replace Route 53 failover DNS routing."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Route 53 pode verificar a integridade de endpoints com verificações de integridade e direcionar consultas do Sistema de Nomes de Domínio (DNS) para endpoints alternativos usando roteamento de failover. GuardDuty detecta ameaças, Trusted Advisor fornece recomendações e CloudFront distribui conteúdo, mas esses não são o serviço DNS de failover descrito.",
      "en": "Amazon Route 53 can check endpoint health and route Domain Name System (DNS) queries to alternate endpoints with failover routing. GuardDuty detects threats, Trusted Advisor provides recommendations, and CloudFront delivers content, but these are not the DNS failover service described."
    }
  },
  {
    "id": 86,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Qual ferramenta ajuda a visualizar, entender e gerenciar gastos AWS ao longo do tempo?",
      "en": "Which tool helps visualize, understand, and manage AWS spending over time?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch monitora métricas, logs e alarmes de recursos e aplicações; a análise histórica e a visualização de custos são funções do Cost Explorer.",
          "en": "Amazon CloudWatch monitors resource and application metrics, logs, and alarms; historical cost analysis and visualization are provided by Cost Explorer."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Budgets define orçamentos e pode enviar alertas quando custos, uso ou reservas atingem limites; não é a ferramenta principal de análise visual de gastos ao longo do tempo.",
          "en": "AWS Budgets sets budgets and can send alerts when costs, usage, or reservations reach thresholds; it is not the primary tool for visual analysis of spending over time."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor apresenta verificações e recomendações de otimização, incluindo oportunidades relacionadas a custos, mas não oferece a análise temporal de gastos do Cost Explorer.",
          "en": "AWS Trusted Advisor provides checks and optimization recommendations, including cost-related opportunities, but not Cost Explorer's time-based spending analysis."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Cost Explorer",
          "en": "AWS Cost Explorer"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Cost Explorer permite explorar custos e uso com filtros, gráficos e previsões, apoiando a identificação de tendências e o gerenciamento dos gastos.",
          "en": "AWS Cost Explorer lets users explore costs and usage with filters, charts, and forecasts, helping identify trends and manage spending."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Cost Explorer fornece visualizações e análises dos custos e do uso da AWS ao longo do tempo, inclusive previsões, para ajudar a entender e gerenciar gastos. Budgets define limites e alertas, Trusted Advisor oferece verificações e CloudWatch monitora métricas operacionais.",
      "en": "AWS Cost Explorer provides visualizations and analysis of AWS costs and usage over time, including forecasts, to help users understand and manage spending. Budgets sets thresholds and alerts, Trusted Advisor provides checks, and CloudWatch monitors operational metrics."
    }
  },
  {
    "id": 87,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Proteção e segurança",
      "en": "Protection and security"
    },
    "description": {
      "pt-BR": "Uma aplicação recebe ataques SQL injection. Qual serviço ajuda a mitigá-los automaticamente?",
      "en": "An application receives SQL injection attacks. Which service helps mitigate them automatically?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS WAF",
          "en": "AWS WAF"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS WAF protege aplicações web ao inspecionar solicitações e aplicar regras, incluindo regras para bloquear padrões de injeção de Linguagem de Consulta Estruturada (SQL).",
          "en": "AWS WAF protects web applications by inspecting requests and applying rules, including rules that block Structured Query Language (SQL) injection patterns."
        }
      },
      {
        "title": {
          "pt-BR": "Elastic Load Balancing",
          "en": "Elastic Load Balancing"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Elastic Load Balancing distribui conexões ou solicitações entre destinos, como instâncias EC2; não inspeciona o conteúdo da aplicação para bloquear injeção SQL.",
          "en": "Elastic Load Balancing distributes connections or requests among targets such as Amazon Elastic Compute Cloud (EC2) instances; it does not inspect application content to block SQL injection."
        }
      },
      {
        "title": {
          "pt-BR": "Security Groups",
          "en": "Security Groups"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Os grupos de segurança controlam tráfego de entrada e saída associado a recursos, usando regras de rede; eles não analisam o conteúdo HTTP para identificar injeção SQL.",
          "en": "Security groups control inbound and outbound traffic associated with resources using network rules; they do not analyze HTTP content to identify SQL injection."
        }
      },
      {
        "title": {
          "pt-BR": "Network ACL",
          "en": "Network ACL"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "As Network ACLs filtram tráfego de entrada e saída no nível da sub-rede por regras de rede, mas não inspecionam solicitações web em busca de padrões de injeção de Linguagem de Consulta Estruturada (SQL).",
          "en": "Network ACLs filter inbound and outbound traffic at the subnet level using network rules, but do not inspect web requests for Structured Query Language (SQL) injection patterns."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS WAF inspeciona solicitações solicitações web e permite configurar regras gerenciadas ou personalizadas para detectar e bloquear padrões de injeção de Linguagem de Consulta Estruturada (SQL). Grupos de segurança e Network ACLs filtram tráfego de rede principalmente por endereço, protocolo e porta, enquanto o Elastic Load Balancing distribui tráfego entre destinos.",
      "en": "AWS WAF inspects web requests requests and lets users configure managed or custom rules to detect and block Structured Query Language (SQL) injection patterns. Security groups and network ACLs filter network traffic mainly by address, protocol, and port, while Elastic Load Balancing distributes traffic among targets."
    }
  },
  {
    "id": 88,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Armazenamento AWS",
      "en": "AWS storage"
    },
    "description": {
      "pt-BR": "Uma empresa quer que suas aplicações locais passem a usar armazenamento praticamente ilimitado na nuvem AWS por meio de um appliance instalado no próprio data center, sem reescrever as aplicações. Qual serviço atende a esse requisito?",
      "en": "A company wants its on-premises applications to use virtually unlimited AWS cloud storage through an appliance installed in its own data center, without rewriting the applications. Which service meets this requirement?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Snowball Edge",
          "en": "AWS Snowball Edge"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Snowball Edge é um dispositivo físico enviado pela AWS, usado principalmente para transferir grandes volumes de dados offline e executar computação na borda. Ele não é um appliance que mantém as aplicações locais acessando continuamente o armazenamento na nuvem.",
          "en": "AWS Snowball Edge is a physical device shipped by AWS, used mainly to move large volumes of data offline and run edge computing. It is not an appliance that keeps on-premises applications continuously accessing cloud storage."
        }
      },
      {
        "title": {
          "pt-BR": "AWS DataSync",
          "en": "AWS DataSync"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS DataSync automatiza e acelera a transferência de dados entre o ambiente local e serviços de armazenamento da AWS. É uma ferramenta de transferência e sincronização, não um appliance que faz as aplicações locais usarem o armazenamento na nuvem como se fosse local.",
          "en": "AWS DataSync automates and speeds up data transfer between on premises and AWS storage services. It is a transfer and synchronization tool, not an appliance that makes on-premises applications use cloud storage as if it were local."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EBS",
          "en": "Amazon EBS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Elastic Block Store (Amazon EBS) fornece volumes de armazenamento em bloco para instâncias do Amazon EC2. Ele atende cargas de trabalho na AWS e não é acessado por aplicações locais por meio de um appliance no data center.",
          "en": "Amazon Elastic Block Store (Amazon EBS) provides block storage volumes for Amazon EC2 instances. It serves workloads running in AWS and is not accessed by on-premises applications through an appliance in the data center."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Storage Gateway",
          "en": "AWS Storage Gateway"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Storage Gateway conecta um appliance de software local ao armazenamento baseado em nuvem, integrando de forma segura o ambiente local ao armazenamento da AWS. O appliance pode ser implantado como máquina virtual (VM) em VMware, Hyper-V ou Linux KVM, ou como instância do Amazon EC2, e há tipos como File Gateway, Volume Gateway e Tape Gateway. Assim, as aplicações locais continuam funcionando sem reescrita enquanto os dados ficam na nuvem.",
          "en": "AWS Storage Gateway connects an on-premises software appliance to cloud-based storage, securely integrating the on-premises environment with AWS storage. The appliance can be deployed as a virtual machine (VM) on VMware, Hyper-V or Linux KVM, or as an Amazon EC2 instance, and there are types such as File Gateway, Volume Gateway and Tape Gateway. This way, on-premises applications keep working without being rewritten while the data lives in the cloud."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Storage Gateway é o serviço híbrido que conecta um appliance local ao armazenamento da AWS, permitindo que as aplicações do data center usem a nuvem sem reescrita. O Snowball Edge move dados offline, o DataSync transfere e sincroniza dados e o Amazon Elastic Block Store (Amazon EBS) é armazenamento em bloco para Amazon EC2; nenhum deles oferece esse acesso contínuo por um appliance local.",
      "en": "AWS Storage Gateway is the hybrid service that connects an on-premises appliance to AWS storage, letting data center applications use the cloud without being rewritten. Snowball Edge moves data offline, DataSync transfers and synchronizes data and Amazon Elastic Block Store (Amazon EBS) is block storage for Amazon EC2; none of them offers this continuous access through a local appliance."
    }
  },
  {
    "id": 89,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Armazenamento AWS",
      "en": "AWS storage"
    },
    "description": {
      "pt-BR": "Qual serviço AWS fornece cache e armazenamento em memória?",
      "en": "Which AWS service provides in-memory caching and storage?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
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
          "pt-BR": "O Amazon DynamoDB é um banco de dados NoSQL gerenciado de chave-valor e documentos; não é o serviço dedicado de cache em memória desta opção.",
          "en": "Amazon DynamoDB is a managed NoSQL key-value and document database; it is not the dedicated in-memory caching service in this choice."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Timestream",
          "en": "Amazon Timestream"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Timestream é um banco de dados de séries temporais para dados que mudam ao longo do tempo; não fornece a função de cache em memória do ElastiCache.",
          "en": "Amazon Timestream is a time-series database for data that changes over time; it does not provide ElastiCache's in-memory caching role."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon RDS",
          "en": "Amazon RDS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon RDS facilita a configuração, operação e escalabilidade de bancos de dados relacionais; não é um serviço de cache em memória.",
          "en": "Amazon RDS makes it easier to set up, operate, and scale relational databases; it is not an in-memory caching service."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ElastiCache",
          "en": "Amazon ElastiCache"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon ElastiCache fornece caches e armazenamentos de dados em memória gerenciados, reduzindo a latência de acesso a dados usados com frequência.",
          "en": "Amazon ElastiCache provides managed in-memory caches and data stores, reducing access latency for frequently used data."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon ElastiCache oferece armazenamentos de dados em memória gerenciados, como caches compatíveis com Redis OSS e Memcached, para acesso de baixa latência. DynamoDB, Timestream e RDS são serviços de banco de dados com finalidades diferentes, não a oferta AWS específica de cache em memória desta lista.",
      "en": "Amazon ElastiCache provides managed in-memory data stores, including caches compatible with Redis OSS and Memcached, for low-latency access. DynamoDB, Timestream, and RDS are database services with different purposes, not the AWS-specific in-memory caching offering in this list."
    }
  },
  {
    "id": 90,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "IAM e identidades",
      "en": "IAM and identities"
    },
    "description": {
      "pt-BR": "Um usuário do IAM pertence a um grupo cuja política permite excluir objetos de um bucket do Amazon S3, mas outra política aplicada a esse usuário nega explicitamente essa mesma ação. O que acontece quando ele tenta excluir um objeto?",
      "en": "An IAM user belongs to a group whose policy allows deleting objects from an Amazon S3 bucket, but another policy applied to that user explicitly denies the same action. What happens when the user tries to delete an object?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "A exclusão é permitida, porque a permissão do grupo prevalece sobre a negação",
          "en": "The deletion is allowed, because the group permission takes precedence over the deny"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Não existe prioridade para permissões de grupo. Por padrão, toda requisição é negada implicitamente, uma permissão explícita (allow) libera a ação, e uma negação explícita (deny) em qualquer política aplicável substitui todas as permissões.",
          "en": "There is no priority for group permissions. By default every request is implicitly denied, an explicit allow permits the action, and an explicit deny in any applicable policy overrides all allows."
        }
      },
      {
        "title": {
          "pt-BR": "A exclusão é negada, porque uma negação explícita sempre se sobrepõe a qualquer permissão",
          "en": "The deletion is denied, because an explicit deny always overrides any allow"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Na avaliação de políticas do AWS Identity and Access Management (IAM), uma negação explícita (Effect Deny) sobrepõe qualquer permissão, venha ela de uma política do usuário, do grupo ou de outro tipo de política. Por isso a exclusão é negada, mesmo havendo uma permissão no grupo. Isso permite criar restrições firmes, como proibir uma ação sensível independentemente de outras permissões.",
          "en": "In AWS Identity and Access Management (IAM) policy evaluation, an explicit deny (Effect Deny) overrides any allow, whether it comes from a user policy, a group policy or another policy type. That is why the deletion is denied even though the group has an allow. This makes it possible to create firm restrictions, such as forbidding a sensitive action regardless of other permissions."
        }
      },
      {
        "title": {
          "pt-BR": "A exclusão é permitida, porque vale a política criada mais recentemente",
          "en": "The deletion is allowed, because the most recently created policy applies"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A data de criação da política não decide o resultado. A AWS avalia todas as políticas aplicáveis à requisição, e a presença de uma negação explícita é suficiente para negar a ação, independentemente de qual política é mais nova.",
          "en": "The policy creation date does not decide the outcome. AWS evaluates all policies that apply to the request, and the presence of an explicit deny is enough to deny the action, regardless of which policy is newer."
        }
      },
      {
        "title": {
          "pt-BR": "A exclusão é permitida, porque as permissões de grupos são avaliadas primeiro",
          "en": "The deletion is allowed, because group permissions are evaluated first"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Os grupos apenas servem para aplicar permissões a vários usuários de uma vez; não há ordem de avaliação que dê preferência a elas. Todas as políticas aplicáveis são consideradas, e a negação explícita prevalece.",
          "en": "Groups only serve to apply permissions to several users at once; there is no evaluation order that favors them. All applicable policies are considered, and the explicit deny prevails."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Na avaliação de políticas do IAM, toda requisição começa negada por padrão, uma permissão explícita a libera, mas uma negação explícita em qualquer política aplicável sempre prevalece. Por isso o usuário não consegue excluir o objeto, mesmo com a permissão vinda do grupo. Não há prioridade por grupo nem por data de criação da política.",
      "en": "In IAM policy evaluation, every request is denied by default, an explicit allow permits it, but an explicit deny in any applicable policy always prevails. That is why the user cannot delete the object, even with the permission coming from the group. There is no priority by group or by policy creation date."
    }
  },
  {
    "id": 91,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Proteção e segurança",
      "en": "Protection and security"
    },
    "description": {
      "pt-BR": "Uma empresa deseja verificar continuamente instâncias EC2 em busca de vulnerabilidades de software. Qual serviço?",
      "en": "A company wants to continuously scan EC2 instances for software vulnerabilities. Which service should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Detective",
          "en": "Amazon Detective"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Detective analisa dados de segurança para ajudar a investigar e visualizar possíveis causas de descobertas; não é o scanner de vulnerabilidades de software para EC2.",
          "en": "Amazon Detective analyzes security data to help investigate and visualize possible causes of findings; it is not the software vulnerability scanner for EC2."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Inspector verifica continuamente workloads compatíveis, incluindo instâncias EC2, em busca de vulnerabilidades de software e exposição de rede.",
          "en": "Amazon Inspector continuously scans supported workloads, including Amazon Elastic Compute Cloud (EC2) instances, for software vulnerabilities and network exposure."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Cognito",
          "en": "Amazon Cognito"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Cognito fornece recursos de autenticação, autorização e gerenciamento de usuários para aplicações; não analisa pacotes de software em instâncias EC2.",
          "en": "Amazon Cognito provides authentication, authorization, and user management capabilities for applications; it does not assess software packages on Amazon Elastic Compute Cloud (EC2) instances."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon GuardDuty detecta atividades potencialmente maliciosas usando fontes de dados e inteligência de ameaças; a verificação de vulnerabilidades de software é função do Inspector.",
          "en": "Amazon GuardDuty detects potentially malicious activity using data sources and threat intelligence; software vulnerability scanning is Inspector's role."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Inspector descobre e avalia vulnerabilidades de software e exposição de rede em instâncias do Amazon Elastic Compute Cloud (EC2) compatíveis, com verificações contínuas. Detective ajuda a investigar descobertas de segurança, Cognito gerencia identidade de usuários de aplicações e GuardDuty detecta ameaças, mas nenhum deles substitui a avaliação de vulnerabilidades do Inspector.",
      "en": "Amazon Inspector discovers and assesses software vulnerabilities and network exposure for supported Amazon Elastic Compute Cloud (EC2) instances, with continuous scanning. Detective helps investigate security findings, Cognito manages application user identity, and GuardDuty detects threats, but none replaces Inspector's vulnerability assessment."
    }
  },
  {
    "id": 92,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Proteção e segurança",
      "en": "Protection and security"
    },
    "description": {
      "pt-BR": "Uma aplicação precisa acessar um banco de dados, mas a empresa não quer senhas gravadas no código-fonte e deseja que a senha seja trocada automaticamente de tempos em tempos. Qual serviço deve usar?",
      "en": "An application needs to access a database, but the company does not want passwords hard-coded in the source code and wants the password to be rotated automatically from time to time. Which service should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
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
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Secrets Manager ajuda a gerenciar, recuperar e rotacionar credenciais de banco de dados, credenciais de aplicações, tokens OAuth, chaves de API e outros segredos durante todo o ciclo de vida. A aplicação substitui a senha gravada no código por uma chamada ao serviço em tempo de execução, e é possível configurar a rotação automática, reduzindo o risco de comprometimento sem precisar atualizar a aplicação.",
          "en": "AWS Secrets Manager helps you manage, retrieve and rotate database credentials, application credentials, OAuth tokens, API keys and other secrets throughout their lifecycles. The application replaces the hard-coded password with a call to the service at runtime, and automatic rotation can be configured, reducing the risk of compromise without having to update the application."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Key Management Service (AWS KMS)",
          "en": "AWS Key Management Service (AWS KMS)"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Key Management Service (AWS KMS) cria e controla chaves de criptografia. A documentação da AWS o indica para chaves de criptografia, não para armazenar e rotacionar senhas de banco de dados usadas por aplicações.",
          "en": "AWS Key Management Service (AWS KMS) creates and controls encryption keys. AWS documentation recommends it for encryption keys, not for storing and rotating database passwords used by applications."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Certificate Manager (ACM)",
          "en": "AWS Certificate Manager (ACM)"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Certificate Manager (ACM) provisiona e gerencia certificados TLS (Transport Layer Security) e chaves privadas associadas. Ele cuida de certificados, não de senhas de banco de dados.",
          "en": "AWS Certificate Manager (ACM) provisions and manages TLS (Transport Layer Security) certificates and their private keys. It handles certificates, not database passwords."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Identity and Access Management (IAM)",
          "en": "AWS Identity and Access Management (IAM)"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Identity and Access Management (IAM) controla quem acessa recursos da AWS e com quais permissões. É a recomendação para credenciais da AWS, e não o serviço que guarda e rotaciona a senha de um banco de dados.",
          "en": "AWS Identity and Access Management (IAM) controls who can access AWS resources and with which permissions. It is the recommendation for AWS credentials, not the service that stores and rotates a database password."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Secrets Manager armazena segredos como senhas de banco de dados e permite rotacioná-los automaticamente, eliminando credenciais fixas no código. O AWS KMS gerencia chaves de criptografia, o ACM gerencia certificados TLS e o IAM controla permissões de acesso à AWS; cada um cobre outro tipo de segredo ou controle.",
      "en": "AWS Secrets Manager stores secrets such as database passwords and lets you rotate them automatically, eliminating hard-coded credentials. AWS KMS manages encryption keys, ACM manages TLS certificates and IAM controls access permissions to AWS; each one covers a different kind of secret or control."
    }
  },
  {
    "id": 93,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Uma empresa deseja notificação quando atingir limite de custo específico. Quais ferramentas? (Duas.)",
      "en": "A company wants a notification when a specific cost threshold is reached. Which tools can be used? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Cost and Usage Report",
          "en": "AWS Cost and Usage Report"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Cost and Usage Report fornece dados detalhados de custo e uso para análise e exportação; sozinho, não é uma ferramenta de notificação imediata ao atingir um limite.",
          "en": "AWS Cost and Usage Report provides detailed cost and usage data for analysis and export; by itself, it is not an immediate notification tool for a reached threshold."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon SQS",
          "en": "Amazon SQS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Simple Queue Service (SQS) é um serviço de filas que desacopla componentes de aplicações por meio de mensagens; não monitora custos nem define alertas de cobrança.",
          "en": "Amazon Simple Queue Service (SQS) is a queue service that decouples application components through messages; it does not monitor costs or set billing alerts."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Budgets permite definir limites de custo e configurar notificações quando custos reais ou previstos se aproximam ou ultrapassam esses limites.",
          "en": "AWS Budgets lets users set cost thresholds and configure notifications when actual or forecasted costs approach or exceed them."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch pode gerar alarmes a partir de métricas de cobrança, como cobranças estimadas, e enviar notificações quando o limite configurado for atingido.",
          "en": "Amazon CloudWatch can create alarms from billing metrics, such as estimated charges, and send notifications when a configured threshold is reached."
        }
      },
      {
        "title": {
          "pt-BR": "Cost Explorer",
          "en": "Cost Explorer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Cost Explorer permite analisar e visualizar custos e uso, mas alertas ao atingir limites são configurados com AWS Budgets ou alarmes de cobrança do CloudWatch.",
          "en": "AWS Cost Explorer lets users analyze and visualize costs and usage, but threshold alerts are configured with AWS Budgets or CloudWatch billing alarms."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Budgets pode alertar quando custos previstos ou reais atingem limites definidos, e alarmes do Amazon CloudWatch também podem notificar com base em métricas de cobrança, após a ativação dos dados de cobrança correspondentes. O Cost and Usage Report fornece dados detalhados de cobrança, e o Cost Explorer analisa custos, mas não são as ferramentas de alerta por limite indicadas; o SQS é uma fila de mensagens.",
      "en": "AWS Budgets can alert when forecasted or actual costs reach defined thresholds, and Amazon CloudWatch alarms can also notify based on billing metrics after the relevant billing data is enabled. The Cost and Usage Report provides detailed billing data, and Cost Explorer analyzes costs, but they are not the threshold alert tools indicated; SQS is a message queue."
    }
  },
  {
    "id": 94,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Qual recurso registra tráfego de entrada e saída de interfaces de rede em VPC?",
      "en": "Which feature records inbound and outbound traffic for network interfaces in a VPC?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon CloudWatch Logs",
          "en": "Amazon CloudWatch Logs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch Logs armazena e permite consultar logs enviados por serviços e aplicações; o registro de metadados do tráfego de rede da VPC é feito por VPC Flow Logs.",
          "en": "Amazon CloudWatch Logs stores and lets users query logs sent by services and applications; VPC Flow Logs capture VPC network traffic metadata."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CloudTrail registra eventos e ações da conta, como chamadas de API; não registra fluxos de pacotes de entrada e saída das interfaces da VPC.",
          "en": "AWS CloudTrail records account events and actions such as API calls; it does not record packet flows to and from VPC interfaces."
        }
      },
      {
        "title": {
          "pt-BR": "VPC Flow Logs",
          "en": "VPC Flow Logs"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Os VPC Flow Logs capturam metadados sobre fluxos de tráfego IP associados a interfaces de rede, sub-redes ou VPCs, incluindo tráfego permitido e rejeitado.",
          "en": "VPC Flow Logs capture metadata about IP traffic flows associated with network interfaces, subnets, or VPCs, including allowed and rejected traffic."
        }
      },
      {
        "title": {
          "pt-BR": "IAM",
          "en": "IAM"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Identity and Access Management (IAM) gerencia identidades e permissões para acesso a recursos; não registra tráfego de rede da VPC.",
          "en": "AWS Identity and Access Management (IAM) manages identities and permissions for resource access; it does not record VPC network traffic."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Os VPC Flow Logs registram informações sobre o tráfego IP que entra e sai de interfaces de rede, sub-redes ou nuvens privadas virtuais (VPCs), incluindo tráfego aceito e rejeitado conforme a configuração. CloudWatch Logs armazena e consulta logs, CloudTrail registra atividade da conta e IAM controla acesso; nenhum deles é o recurso específico de captura de fluxo de tráfego da VPC.",
      "en": "VPC Flow Logs capture information about IP traffic going to and from network interfaces, subnets, or virtual private clouds (VPCs), including accepted and rejected traffic according to the configuration. CloudWatch Logs stores and queries logs, CloudTrail records account activity, and IAM controls access; none is the VPC-specific traffic flow capture feature."
    }
  },
  {
    "id": 95,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Armazenamento AWS",
      "en": "AWS storage"
    },
    "description": {
      "pt-BR": "Como proteger objetos S3 contra exclusão e substituição acidental?",
      "en": "How can S3 objects be protected against accidental deletion or overwriting?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Regras de ciclo de vida",
          "en": "Lifecycle rules"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Regras de ciclo de vida automatizam ações em objetos, como transição para outras classes de armazenamento ou expiração; não mantêm versões recuperáveis por si só.",
          "en": "Lifecycle rules automate actions on objects, such as transitions to other storage classes or expiration; they do not by themselves keep recoverable versions."
        }
      },
      {
        "title": {
          "pt-BR": "Versionamento",
          "en": "Versioning"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Com o versionamento habilitado, o S3 preserva versões anteriores e usa marcadores de exclusão, permitindo recuperar objetos substituídos ou removidos acidentalmente.",
          "en": "With versioning enabled, S3 preserves previous versions and uses delete markers, allowing accidentally overwritten or removed objects to be recovered."
        }
      },
      {
        "title": {
          "pt-BR": "Políticas de bucket",
          "en": "Bucket policies"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Políticas de bucket definem permissões de acesso ao bucket e aos objetos; elas não mantêm cópias anteriores de objetos substituídos.",
          "en": "Bucket policies define access permissions for a bucket and its objects; they do not keep prior copies of overwritten objects."
        }
      },
      {
        "title": {
          "pt-BR": "Criptografia do lado do servidor",
          "en": "Server-side encryption"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A criptografia do lado do servidor protege os dados em repouso, mas não impede a substituição nem fornece recuperação de versões anteriores.",
          "en": "Server-side encryption protects data at rest, but does not prevent overwriting or provide recovery of previous versions."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O versionamento do Amazon S3 mantém versões distintas de um objeto no mesmo bucket, permitindo recuperar uma versão anterior após substituição ou exclusão acidental. Regras de ciclo de vida automatizam transições e expirações, políticas controlam permissões e criptografia protege a confidencialidade, mas esses recursos não oferecem por si só o histórico de versões.",
      "en": "Amazon Simple Storage Service (S3) versioning keeps distinct versions of an object in the same bucket, allowing an earlier version to be recovered after accidental overwriting or deletion. Lifecycle rules automate transitions and expiration, policies control permissions, and encryption protects confidentiality, but those features do not by themselves provide version history."
    }
  },
  {
    "id": 96,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Qual opção de preço atende ao compromisso de uso contínuo de EC2 com menor custo? (Duas.)",
      "en": "Which pricing options suit continuous EC2 usage at a lower cost? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Dedicated Hosts",
          "en": "Dedicated Hosts"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Dedicated Hosts fornecem servidores físicos dedicados para atender requisitos de licenciamento, conformidade ou isolamento; não são a escolha geral de menor preço para uso contínuo comprometido.",
          "en": "Dedicated Hosts provide dedicated physical servers for licensing, compliance, or isolation requirements; they are not the general lower-price choice for committed continuous usage."
        }
      },
      {
        "title": {
          "pt-BR": "Reserved Instances",
          "en": "Reserved Instances"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Instâncias Reservadas oferecem desconto em relação ao preço On-Demand em troca de compromisso de uso por um prazo, adequando-se a necessidades previsíveis do Amazon Elastic Compute Cloud (EC2).",
          "en": "Reserved Instances offer a discount compared with On-Demand pricing in exchange for a term commitment, suiting predictable Amazon Elastic Compute Cloud (EC2) needs."
        }
      },
      {
        "title": {
          "pt-BR": "Savings Plans",
          "en": "Savings Plans"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Savings Plans reduzem preços em troca de compromisso com um valor de uso por hora durante um prazo, podendo se aplicar a uso elegível de EC2.",
          "en": "Savings Plans reduce prices in exchange for a commitment to a consistent amount of usage per hour over a term and can apply to eligible EC2 usage."
        }
      },
      {
        "title": {
          "pt-BR": "Spot Instances",
          "en": "Spot Instances"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Instâncias Spot usam capacidade EC2 excedente com desconto, mas podem ser interrompidas pela AWS e, por isso, não são ideais para uma carga contínua que exige disponibilidade previsível.",
          "en": "Spot Instances use discounted spare EC2 capacity, but AWS can interrupt them, so they are not ideal for continuous workloads requiring predictable availability."
        }
      },
      {
        "title": {
          "pt-BR": "On-Demand",
          "en": "On-Demand"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "On-Demand cobra pelo uso sem compromisso de longo prazo; sua flexibilidade não oferece o desconto por compromisso de uso contínuo das opções corretas.",
          "en": "On-Demand charges for usage without a long-term commitment; its flexibility does not provide the committed-use discount of the correct options."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Instâncias Reservadas e Savings Plans oferecem preços reduzidos em troca de um compromisso de uso por prazo definido, sendo apropriados para workloads contínuos e previsíveis. Spot pode ser interrompido quando a AWS precisa recuperar capacidade, On-Demand não exige compromisso e Dedicated Hosts atendem a requisitos de servidor físico dedicado, não são a opção geral de desconto por uso contínuo.",
      "en": "Reserved Instances and Savings Plans offer reduced pricing in exchange for a commitment over a defined term, making them suitable for continuous, predictable workloads. Spot can be interrupted when AWS needs the capacity, On-Demand requires no commitment, and Dedicated Hosts address dedicated physical server requirements rather than being the general discount option for continuous usage."
    }
  },
  {
    "id": 97,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual plataforma gratuita permite interagir com a comunidade AWS e encontrar respostas e artigos?",
      "en": "Which free platform lets users interact with the AWS community and find answers and articles?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS re:Post",
          "en": "AWS re:Post"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS re:Post permite fazer perguntas, compartilhar conhecimento e interagir com a comunidade AWS, além de pesquisar artigos e respostas.",
          "en": "AWS re:Post lets users ask questions, share knowledge, and interact with the AWS community, as well as search articles and answers."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Enterprise Support",
          "en": "AWS Enterprise Support"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Enterprise Support é um plano de suporte pago com orientação e assistência técnica; não é a plataforma gratuita de interação comunitária.",
          "en": "AWS Enterprise Support is a paid support plan with guidance and technical assistance; it is not the free community interaction platform."
        }
      },
      {
        "title": {
          "pt-BR": "AWS IQ",
          "en": "AWS IQ"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS IQ ajuda clientes a encontrar especialistas AWS para projetos e serviços profissionais, em vez de funcionar como fórum comunitário gratuito.",
          "en": "AWS IQ helps customers find AWS experts for projects and professional services rather than serving as a free community forum."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Knowledge Center",
          "en": "AWS Knowledge Center"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Knowledge Center oferece artigos com respostas e orientações para problemas comuns, mas não é principalmente um espaço de interação entre membros da comunidade.",
          "en": "AWS Knowledge Center provides articles with answers and guidance for common issues, but it is not primarily a place for community members to interact."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS re:Post é uma plataforma gratuita de perguntas e respostas e compartilhamento de conhecimento na qual usuários podem interagir com a comunidade AWS e consultar artigos. Enterprise Support é um plano pago de suporte, AWS IQ conecta clientes a especialistas para trabalho profissional e Knowledge Center reúne artigos de suporte sem ser a plataforma comunitária descrita.",
      "en": "AWS re:Post is a free question-and-answer and knowledge-sharing platform where users can interact with the AWS community and find articles. Enterprise Support is a paid support plan, AWS IQ connects customers with experts for professional work, and Knowledge Center provides support articles but is not the community platform described."
    }
  },
  {
    "id": 98,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Quais características correspondem às Network ACLs? (Duas.)",
      "en": "Which characteristics apply to Network ACLs? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Avaliam todas as regras antes de permitir tráfego",
          "en": "Evaluate all rules before allowing traffic"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "As regras da Network ACL são avaliadas em ordem numérica crescente; o processamento para na primeira regra que corresponde ao tráfego.",
          "en": "Network ACL rules are evaluated in ascending numerical order; processing stops at the first rule that matches the traffic."
        }
      },
      {
        "title": {
          "pt-BR": "Processam regras em ordem numérica crescente",
          "en": "Process rules in ascending numerical order"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A avaliação das regras não continua por todas elas antes de permitir tráfego: a primeira regra correspondente define se o tráfego será permitido ou negado.",
          "en": "The rules are not all evaluated before traffic is allowed: the first matching rule determines whether traffic is allowed or denied."
        }
      },
      {
        "title": {
          "pt-BR": "Operam no nível da instância",
          "en": "Operate at the instance level"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Network ACLs se aplicam a sub-redes; o controle associado diretamente às interfaces de rede das instâncias é feito por grupos de segurança.",
          "en": "Network ACLs apply to subnets; security groups provide the controls associated directly with instances' network interfaces."
        }
      },
      {
        "title": {
          "pt-BR": "São stateless",
          "en": "Are stateless"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Network ACLs são stateless, então regras de entrada e saída são avaliadas independentemente e o tráfego de resposta precisa ser permitido explicitamente.",
          "en": "Network ACLs are stateless, so inbound and outbound rules are evaluated independently and response traffic must be explicitly allowed."
        }
      },
      {
        "title": {
          "pt-BR": "São stateful",
          "en": "Are stateful"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Network ACLs não são stateful; esse comportamento caracteriza grupos de segurança, que acompanham conexões permitidas.",
          "en": "Network ACLs are not stateful; that behavior characterizes security groups, which track allowed connections."
        }
      }
    ],
    "explanation": {
      "pt-BR": "As Network ACLs são stateless e aplicadas no nível da sub-rede; suas regras são avaliadas em ordem numérica crescente, e a primeira regra correspondente determina a ação. Elas não avaliam todas as regras, não operam no nível da instância e, ao contrário dos grupos de segurança, não mantêm estado da conexão.",
      "en": "Network ACLs are stateless and applied at the subnet level; their rules are evaluated in ascending numerical order, and the first matching rule determines the action. They do not evaluate every rule, do not operate at the instance level, and, unlike security groups, do not track connection state."
    }
  },
  {
    "id": 99,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Onde adquirir software de terceiros para cargas de trabalho AWS?",
      "en": "Where can third-party software for AWS workloads be purchased?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS License Manager",
          "en": "AWS License Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS License Manager ajuda a gerenciar e controlar o uso de licenças de software; não é o catálogo para adquirir software de terceiros.",
          "en": "AWS License Manager helps manage and control software license usage; it is not the catalog for purchasing third-party software."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Marketplace",
          "en": "AWS Marketplace"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Marketplace oferece software e serviços de terceiros que podem ser descobertos e adquiridos para uso com workloads AWS.",
          "en": "AWS Marketplace offers third-party software and services that can be discovered and purchased for use with AWS workloads."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Resource Access Manager",
          "en": "AWS Resource Access Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Resource Access Manager compartilha recursos AWS específicos entre contas e organizações; não comercializa software de terceiros.",
          "en": "AWS Resource Access Manager shares specific AWS resources across accounts and organizations; it does not sell third-party software."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Managed Services",
          "en": "AWS Managed Services"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Managed Services fornece operação e gerenciamento de ambientes AWS conforme um modelo de serviço gerenciado; não é uma loja de software.",
          "en": "AWS Managed Services operates and manages AWS environments under a managed service model; it is not a software store."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Marketplace é um catálogo digital para descobrir, comprar, implantar e gerenciar software e serviços de terceiros para workloads AWS. License Manager acompanha licenças, Resource Access Manager compartilha recursos entre contas e AWS Managed Services oferece operações gerenciadas, não um mercado de software.",
      "en": "AWS Marketplace is a digital catalog for discovering, buying, deploying, and managing third-party software and services for AWS workloads. License Manager tracks licenses, Resource Access Manager shares resources across accounts, and AWS Managed Services provides managed operations rather than a software marketplace."
    }
  },
  {
    "id": 100,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Cloud Adoption Framework",
      "en": "AWS Cloud Adoption Framework"
    },
    "description": {
      "pt-BR": "Qual perspectiva AWS CAF garante que serviços em nuvem atendam a metas de desempenho e requisitos do negócio?",
      "en": "Which AWS CAF perspective ensures that cloud services meet performance goals and business requirements?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Plataforma",
          "en": "Platform"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A perspectiva Plataforma orienta a arquitetura e a implementação de plataformas tecnológicas em nuvem; a operação contínua e o suporte aos níveis de serviço pertencem à perspectiva Operações.",
          "en": "The Platform perspective guides the architecture and implementation of cloud technology platforms; ongoing operations and service-level support belong to the Operations perspective."
        }
      },
      {
        "title": {
          "pt-BR": "Governança",
          "en": "Governance"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A perspectiva Governança ajuda a dirigir e controlar a adoção da nuvem, incluindo risco, conformidade e gestão de portfólio; não é a perspectiva responsável pela operação cotidiana dos workloads.",
          "en": "The Governance perspective helps direct and control cloud adoption, including risk, compliance, and portfolio management; it is not the perspective responsible for day-to-day workload operations."
        }
      },
      {
        "title": {
          "pt-BR": "Operações",
          "en": "Operations"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A perspectiva Operações abrange monitoramento, suporte e gerenciamento dos workloads para manter o desempenho e cumprir os requisitos e níveis de serviço do negócio.",
          "en": "The Operations perspective covers monitoring, support, and workload management to maintain performance and meet business requirements and service levels."
        }
      },
      {
        "title": {
          "pt-BR": "Negócio",
          "en": "Business"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A perspectiva Negócio alinha a adoção da nuvem aos resultados e ao valor empresarial; a responsabilidade por executar e dar suporte aos serviços em produção é tratada por Operações.",
          "en": "The Business perspective aligns cloud adoption with business outcomes and value; responsibility for running and supporting services in production is addressed by Operations."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Na AWS Cloud Adoption Framework (CAF), a perspectiva Operações concentra-se em operar, monitorar e dar suporte a workloads para que atendam aos níveis de serviço e às necessidades do negócio. Negócio trata dos resultados de negócio, Plataforma aborda a arquitetura e os serviços de nuvem, e Governança orienta controle, risco e conformidade.",
      "en": "In the AWS Cloud Adoption Framework (CAF), the Operations perspective focuses on operating, monitoring, and supporting workloads so they meet service levels and business needs. Business addresses business outcomes, Platform covers cloud architecture and services, and Governance guides control, risk, and compliance."
    }
  },
  {
    "id": 101,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Aplicação em EC2 precisa acessar serviços AWS sem credenciais estáticas. Qual opção indicada?",
      "en": "An application on EC2 needs to access AWS services without static credentials. Which option is recommended?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Chaves hardcoded",
          "en": "Hard-coded keys"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Chaves de acesso gravadas diretamente no código podem vazar e exigem rotação manual; elas não oferecem a obtenção automática e temporária de credenciais de uma função IAM.",
          "en": "Access keys embedded directly in code can be exposed and require manual rotation; they do not provide the automatic, temporary credentials of an IAM role."
        }
      },
      {
        "title": {
          "pt-BR": "IAM Role via Instance Profile",
          "en": "IAM role through an instance profile"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Uma função IAM associada à instância por um perfil de instância fornece credenciais temporárias renovadas automaticamente, que a aplicação usa para acessar serviços AWS conforme as permissões concedidas.",
          "en": "An IAM role attached to the instance through an instance profile provides automatically refreshed temporary credentials that the application uses to access AWS services according to the granted permissions."
        }
      },
      {
        "title": {
          "pt-BR": "Usuário administrador root",
          "en": "Root administrator user"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O usuário root tem acesso amplo à conta e não deve ser usado por aplicações; conceder essas credenciais viola o princípio de privilégio mínimo.",
          "en": "The root user has broad account access and should not be used by applications; granting its credentials violates the principle of least privilege."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar access keys na aplicação",
          "en": "Configure access keys in the application"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Configurar access keys estáticas na aplicação cria credenciais que precisam ser armazenadas e rotacionadas com cuidado; uma função IAM na instância evita essa necessidade.",
          "en": "Configuring static access keys in the application creates credentials that must be stored and carefully rotated; an IAM role on the instance avoids that need."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Uma função do AWS Identity and Access Management (IAM) associada à instância por um perfil de instância fornece credenciais temporárias que a aplicação pode obter automaticamente, sem armazenar chaves estáticas. Chaves hardcoded, access keys configuradas na aplicação e credenciais root aumentam o risco e violam o princípio de privilégio mínimo.",
      "en": "An AWS Identity and Access Management (IAM) role attached to the instance through an instance profile provides temporary credentials that the application can obtain automatically without storing static keys. Hard-coded keys, access keys configured in the application, and root credentials increase risk and violate least privilege."
    }
  },
  {
    "id": 102,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Uma empresa possui licenças baseadas em núcleos físicos e pretende usar o modelo BYOL no EC2. Qual opção usar?",
      "en": "A company has licenses based on physical cores and plans to use the BYOL model on EC2. Which option should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Reserved Instances",
          "en": "Reserved Instances"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Reserved Instances são um modelo de cobrança (desconto por compromisso de 1 ou 3 anos), não um tipo de tenancy. Elas não dão visibilidade de sockets e núcleos físicos nem afinidade com um servidor, que são necessários para licenças por núcleo físico.",
          "en": "Reserved Instances are a billing model (1- or 3-year commitment discount), not a tenancy type. They give no visibility into physical sockets and cores or affinity to a server, which per-physical-core licenses require."
        }
      },
      {
        "title": {
          "pt-BR": "EC2 com tenancy default",
          "en": "EC2 with default tenancy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Com tenancy default, as instâncias rodam em hardware compartilhado com outros clientes e podem mudar de servidor físico. Não há como contar ou fixar núcleos físicos, então não é possível comprovar a conformidade de licenças BYOL (Bring Your Own License) baseadas em núcleos.",
          "en": "With default tenancy, instances run on hardware shared with other customers and may move between physical servers. You cannot count or pin physical cores, so BYOL (Bring Your Own License) compliance for core-based licenses cannot be demonstrated."
        }
      },
      {
        "title": {
          "pt-BR": "EC2 Dedicated Host",
          "en": "EC2 Dedicated Host"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Um EC2 Dedicated Host é um servidor físico totalmente dedicado a você. Ele expõe sockets e núcleos físicos e permite manter as instâncias no mesmo servidor, requisitos para usar licenças existentes por socket, núcleo ou VM (BYOL - Bring Your Own License), como Windows Server, SQL Server e Oracle, e comprovar conformidade. Integra-se ao AWS License Manager.",
          "en": "An EC2 Dedicated Host is a physical server fully dedicated to you. It exposes physical sockets and cores and lets you keep instances on the same server, which is required to use existing per-socket, per-core or per-VM licenses (BYOL - Bring Your Own License) such as Windows Server, SQL Server and Oracle, and to prove compliance. It integrates with AWS License Manager."
        }
      },
      {
        "title": {
          "pt-BR": "Capacity Reservation",
          "en": "Capacity Reservation"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Capacity Reservation apenas garante capacidade de computação em uma zona de disponibilidade. Ela não dedica um servidor físico a você nem expõe sockets/núcleos, portanto não atende requisitos de licenciamento BYOL (Bring Your Own License).",
          "en": "Capacity Reservation only guarantees compute capacity in an Availability Zone. It does not dedicate a physical server to you or expose sockets/cores, so it does not satisfy BYOL (Bring Your Own License) licensing requirements."
        }
      }
    ],
    "explanation": {
      "pt-BR": "BYOL (Bring Your Own License) é usar licenças de software que você já possui, como Windows Server, SQL Server ou Oracle, na AWS. Muitas dessas licenças são contadas por socket ou núcleo físico e exigem comprovar em qual servidor rodam. O EC2 Dedicated Host é um servidor físico dedicado a você, que expõe sockets e núcleos e mantém as instâncias no mesmo host, atendendo a esse requisito. Reserved Instances (desconto de cobrança), tenancy default (hardware compartilhado) e Capacity Reservation (apenas reserva de capacidade) não dão controle sobre o servidor físico.",
      "en": "BYOL (Bring Your Own License) means using software licenses you already own, such as Windows Server, SQL Server or Oracle, on AWS. Many of these are counted per physical socket or core and require showing which server they run on. An EC2 Dedicated Host is a physical server dedicated to you that exposes sockets and cores and keeps instances on the same host, meeting this requirement. Reserved Instances (billing discount), default tenancy (shared hardware) and Capacity Reservation (capacity only) give no control over the physical server."
    }
  },
  {
    "id": 103,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "No modelo compartilhado para EC2, qual tarefa é da AWS?",
      "en": "Under the shared responsibility model for EC2, which task is AWS's responsibility?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Atualizar sistema operacional",
          "en": "Update the operating system"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente é responsável por corrigir e atualizar o sistema operacional convidado da instância EC2; a AWS mantém a infraestrutura subjacente, não o software instalado nela.",
          "en": "The customer is responsible for patching and updating the EC2 instance's guest operating system; AWS maintains the underlying infrastructure, not the software installed on it."
        }
      },
      {
        "title": {
          "pt-BR": "Atualizar hardware físico",
          "en": "Update the physical hardware"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A AWS mantém e substitui os servidores físicos, o armazenamento e os equipamentos de rede que sustentam as instâncias EC2, como parte da segurança da nuvem.",
          "en": "AWS maintains and replaces the physical servers, storage, and networking equipment that underpin EC2 instances as part of security of the cloud."
        }
      },
      {
        "title": {
          "pt-BR": "Atualizar dados do usuário",
          "en": "Update user data"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Os dados inseridos pelo cliente na instância são responsabilidade do cliente, que define sua classificação, proteção e uso; a AWS fornece a infraestrutura onde são armazenados.",
          "en": "Data the customer puts on the instance is the customer's responsibility, including its classification, protection, and use; AWS provides the infrastructure on which it is stored."
        }
      },
      {
        "title": {
          "pt-BR": "Atualizar mecanismo de BD instalado na EC2",
          "en": "Update the database engine installed on EC2"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Quando o cliente instala um mecanismo de banco de dados em EC2, cabe a ele configurá-lo e aplicar atualizações. Esse gerenciamento não é feito pela AWS como ocorreria com aspectos gerenciados de um serviço de banco de dados gerenciado.",
          "en": "When a customer installs a database engine on EC2, the customer configures and patches it. AWS does not manage it as it would managed aspects of a managed database service."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No Amazon Elastic Compute Cloud (Amazon EC2), a AWS protege a infraestrutura subjacente, incluindo instalações e hardware físico. O cliente administra o sistema operacional convidado, os dados e os mecanismos de banco de dados que instala; portanto, essas atualizações não são responsabilidade da AWS.",
      "en": "With Amazon Elastic Compute Cloud (Amazon EC2), AWS protects the underlying infrastructure, including facilities and physical hardware. The customer manages the guest operating system, data, and database engines they install, so those updates are not AWS's responsibility."
    }
  },
  {
    "id": 104,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Identidade de aplicações",
      "en": "Application identity"
    },
    "description": {
      "pt-BR": "Uma empresa está criando um aplicativo web e móvel e quer adicionar cadastro e login de clientes, inclusive com contas de provedores como Google e Facebook, sem construir e manter um sistema de autenticação próprio. Qual serviço deve usar?",
      "en": "A company is building a web and mobile app and wants to add customer sign-up and sign-in, including with accounts from providers such as Google and Facebook, without building and maintaining its own authentication system. Which service should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS IAM Identity Center",
          "en": "AWS IAM Identity Center"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS IAM Identity Center oferece acesso centralizado de usuários corporativos (a força de trabalho) a várias contas AWS e aplicações. Ele não é voltado a cadastro e login dos clientes de um aplicativo público.",
          "en": "AWS IAM Identity Center provides centralized access for corporate users (the workforce) to multiple AWS accounts and applications. It is not aimed at sign-up and sign-in of the customers of a public app."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Cognito",
          "en": "Amazon Cognito"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Cognito é uma plataforma de identidade para aplicativos web e móveis: funciona como diretório de usuários, servidor de autenticação e serviço de autorização. Com os user pools, os usuários podem se cadastrar e entrar diretamente ou por provedores sociais, como Google e Apple, e por provedores corporativos. Assim, a empresa não precisa construir nem manter seu próprio sistema de login.",
          "en": "Amazon Cognito is an identity platform for web and mobile apps: it works as a user directory, an authentication server and an authorization service. With user pools, users can sign up and sign in directly or through social providers, such as Google and Apple, and through enterprise providers. This way, the company does not need to build or maintain its own sign-in system."
        }
      },
      {
        "title": {
          "pt-BR": "Usuários do IAM",
          "en": "IAM users"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Usuários do AWS Identity and Access Management (IAM) são identidades dentro de uma conta AWS, pensadas para pessoas e cargas de trabalho que acessam a AWS. Não são adequados para cadastrar e autenticar os clientes de um aplicativo, que podem ser milhares ou milhões.",
          "en": "AWS Identity and Access Management (IAM) users are identities inside an AWS account, meant for people and workloads that access AWS. They are not suited to registering and authenticating an app's customers, who can number in the thousands or millions."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Directory Service",
          "en": "AWS Directory Service"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Directory Service fornece diretórios gerenciados, como o Microsoft Active Directory, voltados a cargas de trabalho e usuários corporativos. Ele não é um diretório de clientes com cadastro e login para aplicativos web e móveis.",
          "en": "AWS Directory Service provides managed directories, such as Microsoft Active Directory, aimed at enterprise workloads and users. It is not a customer directory with sign-up and sign-in for web and mobile apps."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Cognito entrega cadastro, login e autenticação de usuários de aplicativos web e móveis, inclusive com provedores como Google e Facebook, sem que a empresa construa um sistema próprio. O IAM Identity Center atende a força de trabalho, os usuários do IAM são identidades da conta AWS e o AWS Directory Service oferece diretórios corporativos gerenciados.",
      "en": "Amazon Cognito provides sign-up, sign-in and authentication for web and mobile app users, including with providers such as Google and Facebook, without the company building its own system. IAM Identity Center serves the workforce, IAM users are AWS account identities and AWS Directory Service offers managed enterprise directories."
    }
  },
  {
    "id": 105,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Banco de dados e análise",
      "en": "Databases and analytics"
    },
    "description": {
      "pt-BR": "Uma empresa precisa migrar um banco de dados local para o Amazon RDS mantendo o banco de origem em uso durante a migração, replicando continuamente as alterações por meio de CDC. Qual serviço atende a esse requisito?",
      "en": "A company needs to migrate an on-premises database to Amazon RDS while keeping the source database in use during the migration, continuously replicating changes using CDC. Which service meets this requirement?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Application Migration Service",
          "en": "Application Migration Service"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Application Migration Service replica e migra servidores inteiros para a AWS, incluindo sistemas e aplicações. Ele não é o serviço voltado à migração e à replicação contínua de dados entre bancos usando CDC, que é função do AWS DMS. DMS (Database Migration Service, serviço de migração de banco de dados) é o serviço da AWS que move dados entre bancos de dados. CDC (Change Data Capture, captura de dados de alteração) é a técnica que identifica e replica continuamente as mudanças feitas no banco de origem.",
          "en": "AWS Application Migration Service replicates and migrates entire servers to AWS, including their systems and applications. It is not the service intended for migrating and continuously replicating data between databases using CDC, which is the job of AWS DMS. DMS (Database Migration Service) is the AWS service that moves data between databases. CDC (Change Data Capture) is the technique that identifies and continuously replicates the changes made to the source database."
        }
      },
      {
        "title": {
          "pt-BR": "Migration Evaluator",
          "en": "Migration Evaluator"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Migration Evaluator analisa ambientes locais para apoiar decisões e estimativas de migração. Ele não executa a migração nem mantém dados de bancos sincronizados com CDC, tarefas do AWS DMS. DMS (Database Migration Service, serviço de migração de banco de dados) é o serviço da AWS que move dados entre bancos de dados. CDC (Change Data Capture, captura de dados de alteração) é a técnica que identifica e replica continuamente as mudanças feitas no banco de origem.",
          "en": "Migration Evaluator analyzes on-premises environments to support migration decisions and estimates. It does not perform the migration or keep database data synchronized with CDC, which are jobs for AWS DMS. DMS (Database Migration Service) is the AWS service that moves data between databases. CDC (Change Data Capture) is the technique that identifies and continuously replicates the changes made to the source database."
        }
      },
      {
        "title": {
          "pt-BR": "Schema Conversion Tool",
          "en": "Schema Conversion Tool"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Schema Conversion Tool ajuda a converter esquemas e código de banco de dados quando há incompatibilidades entre mecanismos. Ele não move os dados nem replica alterações com CDC; isso é tarefa do AWS DMS. DMS (Database Migration Service, serviço de migração de banco de dados) é o serviço da AWS que move dados entre bancos de dados. CDC (Change Data Capture, captura de dados de alteração) é a técnica que identifica e replica continuamente as mudanças feitas no banco de origem.",
          "en": "AWS Schema Conversion Tool helps convert database schemas and code when engines are incompatible. It does not move the data or replicate changes with CDC; that is a task for AWS DMS. DMS (Database Migration Service) is the AWS service that moves data between databases. CDC (Change Data Capture) is the technique that identifies and continuously replicates the changes made to the source database."
        }
      },
      {
        "title": {
          "pt-BR": "AWS DMS",
          "en": "AWS DMS"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS DMS migra dados entre bancos de dados e usa CDC para capturar alterações feitas na origem durante e após a carga inicial. Isso permite manter o banco de origem em uso e o destino no Amazon RDS atualizado até a transição. DMS (Database Migration Service, serviço de migração de banco de dados) é o serviço da AWS que move dados entre bancos de dados. CDC (Change Data Capture, captura de dados de alteração) é a técnica que identifica e replica continuamente as mudanças feitas no banco de origem.",
          "en": "AWS DMS migrates data between databases and uses CDC to capture changes made at the source during and after the initial load. This lets the source database stay in use while the Amazon RDS target is kept up to date until cutover. DMS (Database Migration Service) is the AWS service that moves data between databases. CDC (Change Data Capture) is the technique that identifies and continuously replicates the changes made to the source database."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Database Migration Service (AWS DMS) migra bancos de dados e pode replicar alterações contínuas usando Change Data Capture (CDC), mantendo o destino atualizado durante a migração para o Amazon Relational Database Service (Amazon RDS). Application Migration Service migra servidores, Migration Evaluator avalia ambientes e Schema Conversion Tool converte esquemas; nenhum deles substitui o DMS para replicação de dados com CDC. DMS (Database Migration Service, serviço de migração de banco de dados) é o serviço da AWS que move dados entre bancos de dados. CDC (Change Data Capture, captura de dados de alteração) é a técnica que identifica e replica continuamente as mudanças feitas no banco de origem.",
      "en": "AWS Database Migration Service (AWS DMS) migrates databases and can replicate ongoing changes using Change Data Capture (CDC), keeping the target current during migration to Amazon Relational Database Service (Amazon RDS). Application Migration Service migrates servers, Migration Evaluator assesses environments, and Schema Conversion Tool converts schemas; none replaces DMS for data replication with CDC. DMS (Database Migration Service) is the AWS service that moves data between databases. CDC (Change Data Capture) is the technique that identifies and continuously replicates the changes made to the source database."
    }
  },
  {
    "id": 106,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual benefício AWS representa a possibilidade de implantar aplicações em diferentes geografias?",
      "en": "Which AWS benefit describes the ability to deploy applications across different geographic locations?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Segurança",
          "en": "Security"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Segurança abrange controles e recursos para proteger workloads e dados. Ela não designa a capacidade geográfica de distribuir aplicações entre regiões.",
          "en": "Security encompasses controls and features for protecting workloads and data. It does not refer to the geographic ability to distribute applications across Regions."
        }
      },
      {
        "title": {
          "pt-BR": "Economias de escala",
          "en": "Economies of scale"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Economias de escala decorrem da operação em grande escala da AWS, que pode reduzir custos unitários. Esse conceito não significa que uma aplicação possa ser implantada em diferentes geografias.",
          "en": "Economies of scale result from AWS operating at large scale, which can lower unit costs. This concept does not mean an application can be deployed across different geographies."
        }
      },
      {
        "title": {
          "pt-BR": "Alcance global",
          "en": "Global reach"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O alcance global permite usar regiões e infraestrutura distribuída da AWS para implantar aplicações mais perto de usuários em várias geografias. Essa é a característica descrita.",
          "en": "Global reach lets customers use AWS Regions and distributed infrastructure to deploy applications closer to users in multiple geographies. This is the characteristic described."
        }
      },
      {
        "title": {
          "pt-BR": "Elasticidade",
          "en": "Elasticidade"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Elasticidade permite aumentar ou reduzir recursos conforme a demanda muda. Ela trata do ajuste de capacidade, não da localização geográfica onde a aplicação pode ser implantada.",
          "en": "Elasticity allows resources to grow or shrink as demand changes. It concerns capacity adjustment, not the geographic locations where an application can be deployed."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Alcance global é o benefício de poder implantar aplicações e atender usuários em diferentes regiões geográficas usando a infraestrutura global da AWS. Segurança, economias de escala e elasticidade são benefícios distintos e não descrevem, por si sós, a distribuição geográfica da implantação.",
      "en": "Global reach is the benefit of being able to deploy applications and serve users across different geographic locations using AWS's global infrastructure. Security, economies of scale, and elasticity are distinct benefits and do not by themselves describe geographic deployment distribution."
    }
  },
  {
    "id": 107,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual ferramenta permite executar consultas interativas em logs do CloudWatch?",
      "en": "Which tool allows interactive queries on CloudWatch logs?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "EventBridge",
          "en": "EventBridge"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon EventBridge conecta aplicações usando barramentos e regras para encaminhar eventos a destinos. Ele não é o mecanismo para executar consultas interativas sobre logs do CloudWatch.",
          "en": "Amazon EventBridge connects applications using event buses and rules to route events to targets. It is not the mechanism for running interactive queries over CloudWatch logs."
        }
      },
      {
        "title": {
          "pt-BR": "Anomaly Detection",
          "en": "Anomaly Detection"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A detecção de anomalias do CloudWatch usa padrões de métricas para sinalizar comportamentos incomuns. Ela não permite formular consultas interativas sobre registros de log.",
          "en": "CloudWatch anomaly detection uses metric patterns to flag unusual behavior. It does not let users compose interactive queries over log records."
        }
      },
      {
        "title": {
          "pt-BR": "CloudWatch Logs Insights",
          "en": "CloudWatch Logs Insights"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O CloudWatch Logs Insights oferece uma linguagem e um editor de consultas para pesquisar, filtrar e agregar dados de logs. Assim, é possível investigar os eventos de forma interativa.",
          "en": "CloudWatch Logs Insights provides a query language and editor to search, filter, and aggregate log data. This enables interactive investigation of log events."
        }
      },
      {
        "title": {
          "pt-BR": "Log Streams",
          "en": "Log Streams"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um log stream é uma sequência de eventos de log de uma mesma origem dentro de um grupo de logs. Ele organiza os registros, mas não é uma ferramenta de consulta; essa função é do Logs Insights.",
          "en": "A log stream is a sequence of log events from the same source within a log group. It organizes records but is not a query tool; that function belongs to Logs Insights."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O CloudWatch Logs Insights permite consultar e analisar interativamente eventos armazenados em grupos de logs do Amazon CloudWatch. EventBridge encaminha eventos, detecção de anomalias identifica padrões incomuns e streams organizam eventos dentro de grupos de logs, mas não oferecem essa experiência de consulta interativa.",
      "en": "CloudWatch Logs Insights lets users interactively query and analyze events stored in Amazon CloudWatch log groups. EventBridge routes events, anomaly detection identifies unusual patterns, and streams organize events within log groups, but they do not provide this interactive query experience."
    }
  },
  {
    "id": 108,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Well-Architected e resiliência",
      "en": "Well-Architected and resilience"
    },
    "description": {
      "pt-BR": "Qual característica descreve alta disponibilidade?",
      "en": "Which characteristic describes high availability?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Aplicação continua acessível apesar de falhas",
          "en": "The application remains accessible despite failures"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Alta disponibilidade busca minimizar interrupções por meio de componentes redundantes e mecanismos de recuperação, para que a aplicação continue acessível durante falhas.",
          "en": "High availability aims to minimize interruptions through redundant components and recovery mechanisms so the application remains accessible during failures."
        }
      },
      {
        "title": {
          "pt-BR": "Implantar em qualquer região",
          "en": "Deploy in any Region"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Implantar em qualquer região descreve alcance e escolha de localização geográfica. Isso não garante por si só que uma aplicação continue acessível quando seus componentes falham.",
          "en": "Deploying in any Region describes geographic reach and location choice. It does not by itself ensure that an application remains accessible when its components fail."
        }
      },
      {
        "title": {
          "pt-BR": "Pagar por consumo",
          "en": "Pay as you go"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Pagar conforme o consumo é um modelo de cobrança da nuvem, no qual o custo varia com o uso. Ele não define a continuidade do serviço diante de falhas.",
          "en": "Paying as you go is a cloud billing model in which cost varies with usage. It does not define service continuity during failures."
        }
      },
      {
        "title": {
          "pt-BR": "Suporte 24h",
          "en": "24/7 support"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Suporte 24 horas descreve a disponibilidade de assistência técnica. Esse serviço de suporte não é uma propriedade de disponibilidade da aplicação em execução.",
          "en": "24/7 support describes the availability of technical assistance. This support service is not an availability property of the running application."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Alta disponibilidade significa manter uma aplicação acessível e operacional mesmo quando ocorrem falhas, normalmente com redundância e recuperação rápida. A possibilidade de escolher uma região, o modelo de cobrança por consumo e a disponibilidade de suporte são conceitos diferentes, não a definição de alta disponibilidade.",
      "en": "High availability means keeping an application accessible and operational despite failures, typically through redundancy and rapid recovery. The ability to choose a Region, pay based on consumption, and access support are different concepts, not the definition of high availability."
    }
  },
  {
    "id": 109,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Qual plano de suporte AWS oferece TAM designado tradicionalmente na certificação?",
      "en": "Which AWS Support plan has traditionally included a designated TAM for the certification exam?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Basic Support",
          "en": "Basic Support"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Basic Support oferece recursos básicos, documentação e acesso ao suporte para questões de conta e cobrança, sem um TAM designado.",
          "en": "Basic Support provides basic resources, documentation, and access to support for account and billing issues, without a designated TAM."
        }
      },
      {
        "title": {
          "pt-BR": "Developer Support",
          "en": "Developer Support"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Developer Support oferece orientação técnica para desenvolvimento e testes, mas não inclui o TAM designado associado tradicionalmente ao Enterprise Support.",
          "en": "Developer Support provides technical guidance for development and testing, but it does not include the designated TAM traditionally associated with Enterprise Support."
        }
      },
      {
        "title": {
          "pt-BR": "Business Support",
          "en": "Business Support"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Business Support oferece assistência técnica para workloads em produção e recursos de suporte ampliados. No modelo tradicional da certificação, ele não fornece o TAM dedicado indicado pela questão.",
          "en": "Business Support provides technical assistance for production workloads and expanded support features. In the traditional certification model, it does not provide the dedicated TAM specified by the question."
        }
      },
      {
        "title": {
          "pt-BR": "Enterprise Support",
          "en": "Enterprise Support"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Enterprise Support inclui tradicionalmente um TAM designado para compreender as necessidades da organização, oferecer orientação proativa e apoiar a resolução de questões complexas.",
          "en": "Enterprise Support has traditionally included a designated TAM to understand the organization's needs, provide proactive guidance, and help address complex issues."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Tradicionalmente, o Enterprise Support inclui um Technical Account Manager (TAM) designado, que oferece orientação proativa e ajuda a coordenar o suporte. Basic, Developer e Business dão acesso a diferentes níveis de suporte, mas não incluem esse TAM designado no modelo tradicional abordado pela questão.",
      "en": "Traditionally, Enterprise Support includes a designated Technical Account Manager (TAM) who provides proactive guidance and helps coordinate support. Basic, Developer, and Business provide different support levels but do not include that designated TAM in the traditional model addressed by the question."
    }
  },
  {
    "id": 110,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Segurança de dados no S3",
      "en": "S3 data security"
    },
    "description": {
      "pt-BR": "Um desenvolvedor tornou público, por engano, um bucket do Amazon S3 por meio de uma bucket policy. A equipe de segurança quer uma proteção que impeça o acesso público aos buckets da conta, mesmo que alguém altere políticas ou ACLs no futuro. Qual recurso deve usar?",
      "en": "A developer accidentally made an Amazon S3 bucket public through a bucket policy. The security team wants a safeguard that prevents public access to the account's buckets, even if someone changes policies or ACLs in the future. Which feature should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Criptografia do lado do servidor (SSE)",
          "en": "Server-side encryption (SSE)"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A criptografia do lado do servidor (SSE, Server-Side Encryption) protege os dados armazenados em repouso. Em um bucket público, o S3 descriptografa o objeto de forma transparente para quem tem permissão de leitura, então ela não impede o acesso público.",
          "en": "Server-side encryption (SSE) protects stored data at rest. In a public bucket, S3 transparently decrypts the object for anyone with read permission, so it does not prevent public access."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Macie",
          "en": "Amazon Macie"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Macie descobre e classifica dados sensíveis em buckets S3, como informações pessoais, e alerta sobre riscos. Ele identifica e informa, mas não bloqueia o acesso público aos buckets.",
          "en": "Amazon Macie discovers and classifies sensitive data in S3 buckets, such as personal information, and alerts about risks. It identifies and reports, but does not block public access to buckets."
        }
      },
      {
        "title": {
          "pt-BR": "S3 Block Public Access",
          "en": "S3 Block Public Access"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O S3 Block Public Access oferece configurações, aplicáveis a buckets, à conta inteira ou a toda a organização no AWS Organizations, que se sobrepõem a bucket policies, ACLs (Access Control Lists, listas de controle de acesso) e permissões de objeto que concederiam acesso público. Assim, mesmo que alguém altere uma política por engano, o S3 rejeita o acesso público. A AWS recomenda ativar as quatro configurações no nível da conta.",
          "en": "S3 Block Public Access provides settings, applicable to buckets, the whole account or an entire organization in AWS Organizations, that override bucket policies, ACLs (Access Control Lists) and object permissions that would grant public access. So even if someone changes a policy by mistake, S3 rejects public access. AWS recommends turning on all four settings at the account level."
        }
      },
      {
        "title": {
          "pt-BR": "IAM Access Analyzer para S3",
          "en": "IAM Access Analyzer for S3"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O IAM Access Analyzer para S3 avisa quais buckets estão acessíveis publicamente ou compartilhados com outras contas. Ele é uma ferramenta de detecção e análise: mostra o problema depois que ele existe, mas não impede nem bloqueia o acesso público.",
          "en": "IAM Access Analyzer for S3 warns which buckets are publicly accessible or shared with other accounts. It is a detection and analysis tool: it shows the problem after it exists, but does not prevent or block public access."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O S3 Block Public Access é o controle preventivo: impõe, no nível do bucket, da conta ou da organização, o bloqueio de acesso público e prevalece sobre bucket policies, ACLs (Access Control Lists) e permissões de objeto. A criptografia protege o conteúdo, o Amazon Macie apenas classifica dados sensíveis e o IAM Access Analyzer para S3 apenas detecta acessos públicos; nenhum deles impede que o bucket seja exposto.",
      "en": "S3 Block Public Access is the preventive control: it enforces, at the bucket, account or organization level, a block on public access that takes precedence over bucket policies, ACLs (Access Control Lists) and object permissions. Encryption protects the content, Amazon Macie only classifies sensitive data and IAM Access Analyzer for S3 only detects public access; none of them prevents the bucket from being exposed."
    }
  },
  {
    "id": 111,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Que ferramenta permite acessar recursos AWS diretamente pelo código da aplicação?",
      "en": "Which tool lets you access AWS resources directly from application code?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Console",
          "en": "AWS Console"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Console de Gerenciamento da AWS é uma interface gráfica usada por pessoas para configurar e administrar recursos. O código de uma aplicação usa SDKs ou APIs, não essa interface web.",
          "en": "The AWS Management Console is a graphical interface people use to configure and administer resources. Application code uses SDKs or APIs, not this web interface."
        }
      },
      {
        "title": {
          "pt-BR": "CodeDeploy",
          "en": "CodeDeploy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CodeDeploy automatiza implantações de aplicações em destinos compatíveis. Ele não fornece as bibliotecas que o código usa para chamar serviços AWS durante a execução.",
          "en": "AWS CodeDeploy automates application deployments to supported targets. It does not provide the libraries that code uses to call AWS services at runtime."
        }
      },
      {
        "title": {
          "pt-BR": "CodePipeline",
          "en": "CodePipeline"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CodePipeline automatiza etapas de entrega contínua, como compilar, testar e implantar aplicações. Essa orquestração de pipeline não é o mecanismo de acesso a recursos a partir do código.",
          "en": "AWS CodePipeline automates continuous delivery stages such as building, testing, and deploying applications. This pipeline orchestration is not the mechanism for accessing resources from code."
        }
      },
      {
        "title": {
          "pt-BR": "AWS SDKs",
          "en": "AWS SDKs"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Os SDKs oferecem bibliotecas específicas de linguagem que simplificam a autenticação e as chamadas às APIs dos serviços AWS. Assim, o próprio código da aplicação pode interagir com recursos AWS.",
          "en": "SDKs provide language-specific libraries that simplify authentication and calls to AWS service APIs. Application code can therefore interact with AWS resources directly."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Os AWS Software Development Kits (SDKs) fornecem bibliotecas e APIs para que o código da aplicação chame serviços AWS e acesse recursos de forma programática. O Console é uma interface gráfica, enquanto CodeDeploy e CodePipeline automatizam implantação e entrega; eles não são bibliotecas de acesso aos recursos dentro do código da aplicação.",
      "en": "AWS Software Development Kits (SDKs) provide libraries and APIs that let application code call AWS services and access resources programmatically. The Console is a graphical interface, while CodeDeploy and CodePipeline automate deployment and delivery; they are not libraries for accessing resources from application code."
    }
  },
  {
    "id": 112,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "AWS Cloud Adoption Framework",
      "en": "AWS Cloud Adoption Framework"
    },
    "description": {
      "pt-BR": "Qual capacidade está na perspectiva Operations do AWS CAF?",
      "en": "Which capability belongs to the Operations perspective of AWS CAF?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Identity and Access Management",
          "en": "Identity and Access Management"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Identity and Access Management (IAM) administra identidades e permissões e está relacionado à perspectiva Security do AWS CAF. Seu foco não é o gerenciamento operacional de desempenho e capacidade.",
          "en": "Identity and Access Management (IAM) manages identities and permissions and is associated with the AWS CAF Security perspective. Its focus is not operational performance and capacity management."
        }
      },
      {
        "title": {
          "pt-BR": "Product Management",
          "en": "Product Management"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Product Management ajuda a alinhar produtos e resultados de negócio e pertence à perspectiva Business do AWS CAF. Não é uma capacidade da perspectiva Operations.",
          "en": "Product Management helps align products and business outcomes and belongs to the AWS CAF Business perspective. It is not an Operations capability."
        }
      },
      {
        "title": {
          "pt-BR": "Performance and Capacity Management",
          "en": "Performance and Capacity Management"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Performance and Capacity Management monitora desempenho, demanda e capacidade para manter workloads eficientes e dimensionados adequadamente. Essa capacidade pertence à perspectiva Operations.",
          "en": "Performance and Capacity Management monitors performance, demand, and capacity to keep workloads efficient and appropriately sized. This capability belongs to the Operations perspective."
        }
      },
      {
        "title": {
          "pt-BR": "Application Portfolio Management",
          "en": "Application Portfolio Management"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Application Portfolio Management organiza e avalia o portfólio de aplicações e é uma capacidade da perspectiva Platform no AWS CAF. Ela não corresponde à capacidade operacional indicada.",
          "en": "Application Portfolio Management organizes and evaluates the application portfolio and is a capability of the AWS CAF Platform perspective. It is not the Operations capability specified."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No AWS Cloud Adoption Framework (AWS CAF), Performance and Capacity Management pertence à perspectiva Operations e trata de monitorar e otimizar desempenho e capacidade. Identity and Access Management está associado à perspectiva Security, Product Management à Business e Application Portfolio Management à Platform, não à capacidade Operations pedida.",
      "en": "In the AWS Cloud Adoption Framework (AWS CAF), Performance and Capacity Management belongs to the Operations perspective and concerns monitoring and optimizing performance and capacity. Identity and Access Management is associated with Security, Product Management with Business, and Application Portfolio Management with Platform, not the requested Operations capability."
    }
  },
  {
    "id": 113,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço se integra diretamente ao AWS WAF?",
      "en": "Which service integrates directly with AWS WAF?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Network Load Balancer",
          "en": "Network Load Balancer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Network Load Balancer opera na camada de transporte para encaminhar conexões TCP, UDP e TLS com alto desempenho. Ele não é o balanceador de aplicações que oferece a integração direta descrita com AWS WAF.",
          "en": "Network Load Balancer operates at the transport layer to route TCP, UDP, and TLS connections with high performance. It is not the application load balancer that provides the direct AWS WAF integration described."
        }
      },
      {
        "title": {
          "pt-BR": "Gateway Load Balancer",
          "en": "Gateway Load Balancer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Gateway Load Balancer facilita a implantação e o escalonamento de appliances virtuais de rede de terceiros. Ele não é o destino convencional para associar uma Web ACL do AWS WAF.",
          "en": "Gateway Load Balancer helps deploy and scale third-party virtual network appliances. It is not the conventional target for associating an AWS WAF web ACL."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Lambda",
          "en": "AWS Lambda"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Lambda executa código sem a administração de servidores e pode ser integrado a fluxos de aplicações. Ele não é o balanceador de camada de aplicação que se associa diretamente ao AWS WAF nesta questão.",
          "en": "AWS Lambda runs code without server management and can integrate into application workflows. It is not the application-layer load balancer directly associated with AWS WAF in this question."
        }
      },
      {
        "title": {
          "pt-BR": "Application Load Balancer",
          "en": "Application Load Balancer"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Application Load Balancer processa tráfego HTTP e HTTPS na camada de aplicação e oferece integração com o AWS WAF. Uma Web ACL pode filtrar solicitações antes que elas cheguem aos destinos da aplicação.",
          "en": "Application Load Balancer processes HTTP and HTTPS traffic at the application layer and integrates with AWS WAF. A web ACL can filter requests before they reach application targets."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Application Load Balancer (ALB) integra-se diretamente ao AWS Web Application Firewall (AWS WAF), que pode aplicar regras de segurança a solicitações HTTP e HTTPS recebidas. Network Load Balancer e Gateway Load Balancer atendem a outros padrões de tráfego e não são os load balancers indicados para essa integração direta; Lambda é um serviço de computação, não um balanceador compatível nesse contexto.",
      "en": "Application Load Balancer (ALB) integrates directly with AWS Web Application Firewall (AWS WAF), which can apply security rules to incoming HTTP and HTTPS requests. Network Load Balancer and Gateway Load Balancer serve other traffic patterns and are not the load balancers specified for this direct integration; Lambda is a compute service, not a compatible load balancer in this context."
    }
  },
  {
    "id": 114,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Modelo de responsabilidade compartilhada",
      "en": "Shared responsibility model"
    },
    "description": {
      "pt-BR": "No modelo de responsabilidade compartilhada quais tarefas são do cliente? (Duas.)",
      "en": "Under the shared responsibility model, which tasks are the customer's responsibility? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Criptografia do lado cliente",
          "en": "Client-side encryption"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Na criptografia do lado do cliente, o cliente criptografa os dados antes de enviá-los à AWS e controla as chaves e o processo de criptografia. Essa configuração dos dados é responsabilidade do cliente.",
          "en": "With client-side encryption, the customer encrypts data before sending it to AWS and controls the keys and encryption process. This data configuration is the customer's responsibility."
        }
      },
      {
        "title": {
          "pt-BR": "Integridade dos dados do cliente",
          "en": "Customer data integrity"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O cliente é responsável por manter a integridade dos dados que cria e armazena, incluindo controles e processos para evitar alterações indevidas. A AWS fornece a infraestrutura, mas não assume a gestão do conteúdo do cliente.",
          "en": "The customer is responsible for maintaining the integrity of data they create and store, including controls and processes to prevent improper changes. AWS provides the infrastructure but does not manage customer content."
        }
      },
      {
        "title": {
          "pt-BR": "Segurança do hardware regional",
          "en": "Regional hardware security"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A segurança do hardware físico nas regiões, como servidores e equipamentos de rede, é responsabilidade da AWS como parte da segurança da nuvem.",
          "en": "Security of physical hardware in Regions, such as servers and networking equipment, is AWS's responsibility as part of security of the cloud."
        }
      },
      {
        "title": {
          "pt-BR": "Segurança Edge Locations",
          "en": "Edge Location security"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A AWS protege a infraestrutura e a segurança física das Edge Locations distribuídas globalmente. O cliente configura como seus próprios recursos e dados usam esses serviços.",
          "en": "AWS protects the infrastructure and physical security of globally distributed Edge Locations. The customer configures how their own resources and data use these services."
        }
      },
      {
        "title": {
          "pt-BR": "Segurança da rede global",
          "en": "Global network security"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A AWS protege a rede global que conecta suas regiões e serviços. A configuração de redes virtuais e controles de tráfego dentro da conta continua sob responsabilidade do cliente.",
          "en": "AWS protects the global network connecting its Regions and services. Configuring virtual networks and traffic controls within an account remains the customer's responsibility."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No modelo de responsabilidade compartilhada, o cliente controla a criptografia que aplica antes de enviar dados à AWS e responde pela integridade dos próprios dados. A AWS protege a infraestrutura física regional, as Edge Locations e a rede global, portanto essas tarefas não são as duas responsabilidades do cliente.",
      "en": "Under the shared responsibility model, the customer controls encryption applied before sending data to AWS and is responsible for the integrity of their own data. AWS protects regional physical infrastructure, Edge Locations, and the global network, so those are not the two customer responsibilities."
    }
  },
  {
    "id": 115,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual mecanismo fornece autenticação programática via AWS CLI com chaves de longa duração?",
      "en": "Which mechanism provides programmatic authentication through the AWS CLI using long-term keys?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "SSH Keys",
          "en": "SSH Keys"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Chaves SSH autenticam conexões a sistemas, como o acesso a instâncias Linux, e não são credenciais de API da AWS para a CLI.",
          "en": "SSH keys authenticate connections to systems, such as access to Linux instances, and are not AWS API credentials for the CLI."
        }
      },
      {
        "title": {
          "pt-BR": "Políticas de senha",
          "en": "Password policies"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Políticas de senha estabelecem requisitos para senhas de usuários do IAM que entram por autenticação baseada em senha. Elas não autenticam chamadas programáticas da CLI com chaves de longa duração.",
          "en": "Password policies set requirements for IAM users' passwords when they sign in with password-based authentication. They do not authenticate programmatic CLI calls with long-term keys."
        }
      },
      {
        "title": {
          "pt-BR": "IAM Access Keys",
          "en": "IAM Access Keys"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "As chaves de acesso do IAM incluem um access key ID e uma secret access key e permitem assinar chamadas programáticas da CLI. São credenciais de longa duração quando não substituídas por credenciais temporárias, por isso devem ser protegidas e rotacionadas.",
          "en": "IAM access keys consist of an access key ID and a secret access key and can sign programmatic CLI requests. They are long-term credentials when not replaced by temporary credentials, so they must be protected and rotated."
        }
      },
      {
        "title": {
          "pt-BR": "IAM Policies",
          "en": "IAM Policies"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Políticas do IAM especificam quais ações e recursos uma identidade pode acessar. Elas autorizam solicitações, mas não são, por si sós, credenciais para autenticar a CLI.",
          "en": "IAM policies specify which actions and resources an identity may access. They authorize requests but are not, by themselves, credentials for authenticating the CLI."
        }
      }
    ],
    "explanation": {
      "pt-BR": "As chaves de acesso do AWS Identity and Access Management (IAM) são credenciais programáticas, compostas por um identificador e uma chave secreta, que a AWS Command Line Interface (AWS CLI) pode usar para autenticação. Chaves SSH servem normalmente para acesso a sistemas, políticas de senha regulam senhas e políticas do IAM definem permissões, mas nenhuma delas é a credencial de acesso programático descrita.",
      "en": "AWS Identity and Access Management (IAM) access keys are programmatic credentials consisting of an access key ID and a secret access key that the AWS Command Line Interface (AWS CLI) can use for authentication. SSH keys are typically for system access, password policies govern passwords, and IAM policies define permissions, but none is the programmatic access credential described."
    }
  },
  {
    "id": 116,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço cria e governa automaticamente uma landing zone AWS com múltiplas contas?",
      "en": "Which service automatically creates and governs a multi-account AWS landing zone?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Trusted Advisor",
          "en": "Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor analisa o ambiente AWS e oferece recomendações de práticas recomendadas, como otimização de custos e segurança. Ele não cria nem governa uma landing zone de múltiplas contas.",
          "en": "AWS Trusted Advisor analyzes an AWS environment and offers best-practice recommendations, such as cost and security optimizations. It does not create or govern a multi-account landing zone."
        }
      },
      {
        "title": {
          "pt-BR": "AWS RAM",
          "en": "AWS RAM"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS RAM permite compartilhar recursos AWS compatíveis entre contas e organizações. Ele não configura a estrutura de contas nem os controles de governança de uma landing zone.",
          "en": "AWS RAM lets customers share supported AWS resources across accounts and organizations. It does not configure the account structure or governance controls of a landing zone."
        }
      },
      {
        "title": {
          "pt-BR": "Control Tower",
          "en": "Control Tower"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Control Tower automatiza a configuração de uma landing zone com várias contas e aplica governança por meio de controles e práticas recomendadas. Isso atende à criação e à governança solicitadas.",
          "en": "AWS Control Tower automates the setup of a multi-account landing zone and applies governance through controls and best practices. This meets the requested creation and governance needs."
        }
      },
      {
        "title": {
          "pt-BR": "Security Hub",
          "en": "Security Hub"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Security Hub centraliza e prioriza descobertas de segurança de serviços e parceiros integrados. Ele apoia a postura de segurança, mas não cria nem governa a landing zone de contas.",
          "en": "AWS Security Hub centralizes and prioritizes security findings from integrated services and partners. It supports security posture but does not create or govern the account landing zone."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Control Tower configura uma landing zone de múltiplas contas e fornece governança contínua com controles e mecanismos de gerenciamento. Trusted Advisor recomenda melhorias, AWS Resource Access Manager (AWS RAM) compartilha recursos e Security Hub agrega descobertas de segurança; nenhum deles provisiona e governa essa landing zone.",
      "en": "AWS Control Tower sets up a multi-account landing zone and provides ongoing governance with controls and management capabilities. Trusted Advisor recommends improvements, AWS Resource Access Manager (AWS RAM) shares resources, and Security Hub aggregates security findings; none provisions and governs that landing zone."
    }
  },
  {
    "id": 117,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual capacidade do Amazon Rekognition?",
      "en": "What capability does Amazon Rekognition provide?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Detectar objetos nas imagens",
          "en": "Detect objects in images"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Rekognition analisa conteúdo visual e pode detectar objetos e cenas em imagens, retornando rótulos e informações relacionadas. Essa é uma capacidade central do serviço.",
          "en": "Amazon Rekognition analyzes visual content and can detect objects and scenes in images, returning labels and related information. This is a core capability of the service."
        }
      },
      {
        "title": {
          "pt-BR": "Redimensionar imagens em massa",
          "en": "Resize images in bulk"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Redimensionar imagens em massa é uma transformação de arquivos que pode ser feita com ferramentas de processamento de imagens ou código. O Rekognition analisa o conteúdo visual, não é um serviço de redimensionamento em lote.",
          "en": "Bulk image resizing is a file transformation that can be performed with image-processing tools or code. Rekognition analyzes visual content; it is not a bulk image-resizing service."
        }
      },
      {
        "title": {
          "pt-BR": "Agendar jobs genéricos",
          "en": "Schedule generic jobs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Agendar jobs genéricos é uma função de orquestração ou agendamento de tarefas, fornecida por ferramentas apropriadas para esse fim. O Rekognition oferece APIs de análise de imagens e vídeos, não um agendador genérico.",
          "en": "Scheduling generic jobs is an orchestration or task-scheduling function provided by tools designed for that purpose. Rekognition offers image and video analysis APIs, not a generic scheduler."
        }
      },
      {
        "title": {
          "pt-BR": "Adicionar marcas-d’água",
          "en": "Add watermarks"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Adicionar marcas-d'água altera os arquivos de imagem e requer uma ferramenta de edição ou processamento de mídia. O Rekognition pode analisar uma imagem, mas não é um serviço para inserir marcas-d'água.",
          "en": "Adding watermarks modifies image files and requires an editing or media-processing tool. Rekognition can analyze an image, but it is not a service for inserting watermarks."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Rekognition aplica visão computacional para analisar imagens e vídeos, incluindo a detecção de objetos e a atribuição de rótulos ao conteúdo visual. Redimensionar arquivos, agendar tarefas genéricas ou adicionar marcas-d'água são operações de processamento de mídia que não definem essa capacidade de análise do Rekognition.",
      "en": "Amazon Rekognition applies computer vision to analyze images and videos, including detecting objects and assigning labels to visual content. Resizing files, scheduling generic tasks, and adding watermarks are media-processing operations that do not describe Rekognition's analysis capability."
    }
  },
  {
    "id": 118,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual solução permite acesso remoto seguro a EC2 sem SSH público?",
      "en": "Which solution enables secure remote access to EC2 without public SSH?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "EC2 Key Pairs",
          "en": "EC2 Key Pairs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Pares de chaves do Amazon Elastic Compute Cloud (EC2) fornecem credenciais criptográficas para autenticação, normalmente em conexões SSH. Eles não eliminam a necessidade de conectividade de rede e de uma porta de gerenciamento acessível.",
          "en": "Amazon Elastic Compute Cloud (EC2) key pairs provide cryptographic credentials for authentication, commonly with Secure Shell (SSH) connections. They do not remove the need for network connectivity and an accessible management port."
        }
      },
      {
        "title": {
          "pt-BR": "IAM isoladamente",
          "en": "IAM alone"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Identity and Access Management (IAM) controla identidades e permissões para recursos e APIs da AWS. Sem um serviço de sessão, como o Session Manager, o IAM isoladamente não cria uma conexão remota com o sistema operacional da instância.",
          "en": "AWS Identity and Access Management (IAM) controls identities and permissions for AWS resources and APIs. Without a session service such as Session Manager, IAM alone does not establish a remote connection to the instance operating system."
        }
      },
      {
        "title": {
          "pt-BR": "Systems Manager Session Manager",
          "en": "Systems Manager Session Manager"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Session Manager, recurso do AWS Systems Manager, abre sessões de gerenciamento pela infraestrutura do Systems Manager e pode registrar a atividade. Com as permissões e o agente necessários, evita expor SSH publicamente ou administrar chaves SSH.",
          "en": "Session Manager, a feature of AWS Systems Manager, opens management sessions through Systems Manager infrastructure and can log session activity. With the required permissions and agent, it avoids publicly exposing SSH or managing SSH keys."
        }
      },
      {
        "title": {
          "pt-BR": "Network ACLs",
          "en": "Network ACLs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "As listas de controle de acesso à rede (Network ACLs) filtram tráfego de entrada e saída no nível da sub-rede. Elas podem restringir SSH, mas não fornecem o mecanismo de acesso remoto à instância.",
          "en": "Network access control lists (network ACLs) filter inbound and outbound traffic at the subnet level. They can restrict SSH, but they do not provide the mechanism for remotely accessing the instance."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Systems Manager Session Manager oferece acesso interativo e auditável às instâncias sem exigir portas SSH abertas nem um bastion host público. Pares de chaves, IAM isoladamente e Network ACLs não fornecem, por si sós, essa sessão de gerenciamento remoto.",
      "en": "AWS Systems Manager Session Manager provides interactive, auditable access to instances without requiring open SSH ports or a public bastion host. Key pairs, IAM by itself, and network ACLs do not independently provide this remote management session."
    }
  },
  {
    "id": 119,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço suporta faturamento consolidado de várias contas AWS?",
      "en": "Which service supports consolidated billing for multiple AWS accounts?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "QuickSight",
          "en": "QuickSight"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon QuickSight é um serviço de business intelligence para criar análises e visualizações a partir de dados. Ele não consolida a cobrança de várias contas AWS.",
          "en": "Amazon QuickSight is a business intelligence service for creating analyses and visualizations from data. It does not consolidate billing across AWS accounts."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Organizations",
          "en": "AWS Organizations"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Organizations permite administrar várias contas como um grupo e habilitar faturamento consolidado. Assim, os custos das contas vinculadas podem ser reunidos na conta de gerenciamento pagadora.",
          "en": "AWS Organizations lets multiple accounts be managed as a group and enables consolidated billing. Charges from linked accounts can therefore be combined under the management account that serves as payer."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Macie",
          "en": "Amazon Macie"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Macie ajuda a descobrir e proteger dados confidenciais, como informações de identificação pessoal, no Amazon Simple Storage Service (S3). Ele é um serviço de segurança, não de faturamento consolidado.",
          "en": "Amazon Macie helps discover and protect sensitive data, such as personally identifiable information, in Amazon Simple Storage Service (S3). It is a security service, not a consolidated billing service."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Budgets permite definir orçamentos e acompanhar custos, uso e alertas. Ele ajuda a monitorar gastos, mas não reúne as faturas de várias contas como o AWS Organizations.",
          "en": "AWS Budgets lets users set budgets and track costs, usage, and alerts. It helps monitor spending but does not combine invoices across accounts as AWS Organizations does."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Organizations permite reunir contas em uma organização e usar faturamento consolidado, com uma única conta pagadora para os custos das contas vinculadas. Os outros serviços listados tratam de análise, segurança de dados ou acompanhamento de orçamento, não de consolidação de faturas entre contas.",
      "en": "AWS Organizations lets accounts be grouped into an organization and use consolidated billing, with one payer account for charges from linked accounts. The other services listed address analytics, data security, or budget tracking rather than consolidating invoices across accounts."
    }
  },
  {
    "id": 120,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Banco de dados e análise",
      "en": "Databases and analytics"
    },
    "description": {
      "pt-BR": "Qual serviço fornece SQL analytics em escala sobre data warehouse?",
      "en": "Which service provides SQL analytics at scale on a data warehouse?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Neptune",
          "en": "Neptune"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Neptune é um banco de dados gerenciado otimizado para armazenar e consultar dados em grafo. Ele não é o data warehouse para análises SQL descrito.",
          "en": "Amazon Neptune is a managed database optimized for storing and querying graph data. It is not the data warehouse for SQL analytics described here."
        }
      },
      {
        "title": {
          "pt-BR": "RDS",
          "en": "RDS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Relational Database Service (RDS) facilita a configuração e a operação de bancos de dados relacionais para aplicações. Embora suporte SQL, não é o serviço de data warehouse analítico em escala oferecido pelo Redshift.",
          "en": "Amazon Relational Database Service (RDS) simplifies setting up and operating relational databases for applications. Although it supports SQL, it is not the large-scale analytical data warehouse service offered by Redshift."
        }
      },
      {
        "title": {
          "pt-BR": "Redshift",
          "en": "Redshift"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Redshift é um serviço de data warehouse gerenciado, criado para consultas analíticas SQL em escala sobre dados integrados de várias fontes. Isso o torna adequado para cargas analíticas, em vez de transações operacionais individuais.",
          "en": "Amazon Redshift is a managed data warehouse built for large-scale SQL analytics over data integrated from multiple sources. This makes it suitable for analytical workloads rather than individual operational transactions."
        }
      },
      {
        "title": {
          "pt-BR": "DynamoDB",
          "en": "DynamoDB"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon DynamoDB é um banco de dados NoSQL gerenciado, com modelos de chave-valor e documento e desempenho de baixa latência. Ele não oferece a função de data warehouse analítico relacional do Redshift.",
          "en": "Amazon DynamoDB is a managed NoSQL database with key-value and document models and low-latency performance. It does not provide Redshift's relational analytical data warehouse function."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Redshift é um data warehouse em nuvem que executa consultas SQL analíticas em grandes conjuntos de dados. Neptune é voltado a grafos, RDS a bancos relacionais operacionais e DynamoDB a dados NoSQL, portanto não são o serviço de data warehouse pedido.",
      "en": "Amazon Redshift is a cloud data warehouse that runs analytical SQL queries over large datasets. Neptune is designed for graph workloads, RDS for relational databases, and DynamoDB for NoSQL data, so they are not the requested data warehouse service."
    }
  },
  {
    "id": 121,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "IAM e identidades",
      "en": "IAM and identities"
    },
    "description": {
      "pt-BR": "Uma empresa deseja conceder a usuários de uma conta AWS acesso autorizado a recursos de outra conta. Qual recurso deve utilizar?",
      "en": "A company wants to grant users in one AWS account authorized access to resources in another account. Which resource should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "IAM Tag",
          "en": "IAM Tag"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Tags do IAM são rótulos (pares chave-valor) usados para organizar recursos e para controle de acesso baseado em atributos. Uma tag não concede permissões nem permite que usuários de outra conta acessem recursos; ela só classifica ou ajuda a filtrar o acesso.",
          "en": "IAM tags are labels (key-value pairs) used to organize resources and for attribute-based access control. A tag does not grant permissions or let users from another account access resources; it only classifies or helps filter access."
        }
      },
      {
        "title": {
          "pt-BR": "Função do IAM (IAM Role)",
          "en": "IAM role"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Uma função do IAM (IAM Role) é uma identidade com permissões que pode ser assumida por quem precisa dela, como usuários, aplicações ou serviços. Ela não tem senha nem chaves de acesso permanentes: ao assumi-la, a pessoa recebe credenciais de segurança temporárias. Por isso é o recurso indicado para delegar acesso entre contas: a conta que possui os recursos cria a função, define quais permissões ela tem e confia na outra conta; os usuários da outra conta assumem a função e acessam os recursos sem precisar de um usuário IAM nem de chaves de longo prazo na conta de destino.",
          "en": "An IAM role is an identity with permissions that can be assumed by anyone who needs it, such as users, applications or services. It has no permanent password or access keys: when assumed, it provides temporary security credentials. That makes it the right tool to delegate cross-account access: the account that owns the resources creates the role, defines its permissions and trusts the other account; users from the other account assume the role and reach the resources without needing an IAM user or long-term keys in the target account."
        }
      },
      {
        "title": {
          "pt-BR": "IAM Access Analyzer",
          "en": "IAM Access Analyzer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O IAM Access Analyzer é uma ferramenta de análise: identifica recursos compartilhados com entidades externas e acessos não intencionais. Ele detecta e audita acessos, mas não concede acesso entre contas.",
          "en": "IAM Access Analyzer is an analysis tool: it identifies resources shared with external entities and unintended access. It detects and audits access, but does not grant cross-account access."
        }
      },
      {
        "title": {
          "pt-BR": "Grupo IAM",
          "en": "IAM group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um grupo IAM é um conjunto de usuários IAM da mesma conta, usado para aplicar permissões a vários usuários de uma vez. Ele não pode ser usado como principal em uma política nem abrange outras contas, então não resolve o acesso entre contas.",
          "en": "An IAM group is a collection of IAM users in the same account, used to apply permissions to several users at once. It cannot be a principal in a policy and does not span accounts, so it does not solve cross-account access."
        }
      }
    ],
    "explanation": {
      "pt-BR": "A função do IAM (IAM Role) é o recurso correto para acesso entre contas: ela entrega credenciais temporárias a quem a assume, sem criar usuários nem chaves permanentes na conta de destino. IAM Tag apenas rotula recursos, IAM Access Analyzer apenas analisa e audita acessos, e o grupo IAM só reúne usuários de uma mesma conta; nenhum deles concede acesso a outra conta.",
      "en": "The IAM role is the right resource for cross-account access: it gives temporary credentials to whoever assumes it, without creating users or permanent keys in the target account. IAM tags only label resources, IAM Access Analyzer only analyzes and audits access, and an IAM group only gathers users within one account; none of them grants access to another account."
    }
  },
  {
    "id": 122,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "IAM e identidades",
      "en": "IAM and identities"
    },
    "description": {
      "pt-BR": "Qual serviço totalmente gerenciado auxilia na criação, teste e gerenciamento de imagens personalizadas para EC2?",
      "en": "Which fully managed service helps create, test, and manage custom EC2 images?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Elastic Beanstalk",
          "en": "AWS Elastic Beanstalk"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Elastic Beanstalk facilita a implantação e a operação de aplicações em linguagens e plataformas compatíveis. Ele gerencia recursos da aplicação, mas não cria e testa imagens de máquina personalizadas.",
          "en": "AWS Elastic Beanstalk simplifies deploying and operating applications on supported languages and platforms. It manages application resources, but does not build and test custom machine images."
        }
      },
      {
        "title": {
          "pt-BR": "EC2 Image Builder",
          "en": "EC2 Image Builder"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O EC2 Image Builder é um serviço gerenciado para automatizar pipelines de criação de imagens, aplicar configurações e executar testes antes de distribuir imagens personalizadas. Por isso, atende ao ciclo de criação, teste e gerenciamento solicitado.",
          "en": "EC2 Image Builder is a managed service for automating image-building pipelines, applying configurations, and running tests before distributing custom images. It therefore supports the requested creation, testing, and management lifecycle."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Machine Image (AMI)",
          "en": "Amazon Machine Image (AMI)"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma Amazon Machine Image (AMI) é um modelo que contém as informações necessárias para iniciar instâncias EC2. A AMI é o produto da criação de imagem, não o serviço gerenciado que automatiza sua criação e seus testes.",
          "en": "An Amazon Machine Image (AMI) is a template containing the information needed to launch EC2 instances. An AMI is the image artifact, not the managed service that automates its creation and testing."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Launch Wizard",
          "en": "AWS Launch Wizard"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Launch Wizard orienta o dimensionamento, a configuração e a implantação de aplicações empresariais na AWS. Ele não é uma ferramenta de pipeline para criar e testar imagens EC2 personalizadas.",
          "en": "AWS Launch Wizard guides the sizing, configuration, and deployment of enterprise applications on AWS. It is not a pipeline tool for building and testing custom EC2 images."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O EC2 Image Builder automatiza a criação, a validação, a distribuição e o gerenciamento de imagens de máquina personalizadas para uso com EC2. Elastic Beanstalk implanta aplicações, uma Amazon Machine Image é o artefato de imagem e Launch Wizard orienta implantações de aplicações empresariais.",
      "en": "EC2 Image Builder automates the creation, validation, distribution, and management of custom machine images for use with EC2. Elastic Beanstalk deploys applications, an Amazon Machine Image is the image artifact, and Launch Wizard guides deployments of enterprise applications."
    }
  },
  {
    "id": 123,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Uma aplicação monolítica será dividida em microsserviços para ganhar flexibilidade. Qual prática de arquitetura está sendo aplicada?",
      "en": "A monolithic application will be split into microservices for greater flexibility. Which architectural practice is being applied?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Implantar em várias regiões",
          "en": "Deploy across multiple Regions"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Implantar em várias regiões distribui recursos por regiões geográficas da AWS para melhorar disponibilidade, alcance ou recuperação de desastres. Isso não é o que caracteriza a divisão de um monólito em serviços independentes.",
          "en": "Deploying across multiple AWS Regions distributes resources geographically to improve availability, reach, or disaster recovery. That is not what characterizes splitting a monolith into independent services."
        }
      },
      {
        "title": {
          "pt-BR": "Integrar testes funcionais",
          "en": "Integrar testes funcionais"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Testes funcionais verificam se uma aplicação atende aos comportamentos e requisitos esperados. Eles ajudam a validar software, mas não reduzem por si sós as dependências entre seus componentes.",
          "en": "Functional tests verify that an application meets expected behaviors and requirements. They help validate software but do not by themselves reduce dependencies between its components."
        }
      },
      {
        "title": {
          "pt-BR": "Implementar dependências fracamente acopladas",
          "en": "Implement loosely coupled dependencies"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Dependências fracamente acopladas permitem que componentes se comuniquem por interfaces bem definidas sem depender dos detalhes internos uns dos outros. A decomposição em microsserviços aplica essa prática para que os serviços possam mudar e escalar com mais autonomia.",
          "en": "Loosely coupled dependencies let components communicate through well-defined interfaces without relying on one another's internal details. Decomposing an application into microservices applies this practice so services can change and scale more independently."
        }
      },
      {
        "title": {
          "pt-BR": "Automatizar a implantação",
          "en": "Automate deployments"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Automatizar implantações usa ferramentas e pipelines para publicar mudanças de software de forma repetível. Isso melhora o processo de entrega, mas não descreve a separação de responsabilidades do monólito em microsserviços.",
          "en": "Automating deployments uses tools and pipelines to release software changes repeatably. This improves the delivery process but does not describe separating a monolith's responsibilities into microservices."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Dividir um monólito em microsserviços reduz dependências rígidas entre componentes e permite que eles evoluam e sejam implantados com maior independência. Implantação em várias regiões, testes funcionais e automação podem ser práticas úteis, mas não descrevem essa mudança de acoplamento arquitetural.",
      "en": "Splitting a monolith into microservices reduces tight dependencies between components and lets them evolve and deploy more independently. Multi-Region deployment, functional testing, and automation can all be useful practices, but they do not describe this architectural change in coupling."
    }
  },
  {
    "id": 124,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Cloud Adoption Framework",
      "en": "AWS Cloud Adoption Framework"
    },
    "description": {
      "pt-BR": "Na jornada AWS CAF, em qual fase se identificam lacunas de capacidade por meio das perspectivas CAF?",
      "en": "In the AWS CAF journey, during which phase are capability gaps identified using the CAF perspectives?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Envision (Visualizar)",
          "en": "Envision"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Envision define e comunica a direção da transformação, conectando objetivos de negócio a resultados mensuráveis. A identificação de lacunas de capacidade por perspectiva é feita na fase Align.",
          "en": "Envision defines and communicates the direction of transformation by linking business objectives to measurable outcomes. Identifying capability gaps across the perspectives takes place in Align."
        }
      },
      {
        "title": {
          "pt-BR": "Scale (Escalar)",
          "en": "Scale"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Scale amplia iniciativas bem-sucedidas e os benefícios da transformação em toda a organização. Essa expansão vem depois da avaliação e do alinhamento das capacidades.",
          "en": "Scale expands successful initiatives and transformation benefits across the organization. This expansion follows the assessment and alignment of capabilities."
        }
      },
      {
        "title": {
          "pt-BR": "Launch (Lançar)",
          "en": "Launch"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Launch inicia ações para acelerar projetos-piloto e gerar valor de negócio. Não é a fase de avaliação organizacional que identifica lacunas de capacidade entre as perspectivas CAF.",
          "en": "Launch starts actions to accelerate pilot projects and deliver business value. It is not the organizational assessment phase that identifies capability gaps across the CAF perspectives."
        }
      },
      {
        "title": {
          "pt-BR": "Align (Alinhar)",
          "en": "Align"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Align avalia lacunas de capacidade, interdependências e prontidão organizacional nas perspectivas do AWS CAF. Essa análise ajuda a definir ações para alinhar a organização aos objetivos de transformação.",
          "en": "Align assesses capability gaps, interdependencies, and organizational readiness across the AWS CAF perspectives. This analysis helps define actions to align the organization with its transformation objectives."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Na fase Align da jornada AWS Cloud Adoption Framework (CAF), a organização avalia sua prontidão e identifica lacunas de capacidade usando as perspectivas do framework. Envision define objetivos e resultados, enquanto Launch e Scale se concentram em iniciar e expandir iniciativas de transformação.",
      "en": "In the Align phase of the AWS Cloud Adoption Framework (CAF) journey, an organization assesses its readiness and identifies capability gaps using the framework's perspectives. Envision defines objectives and outcomes, while Launch and Scale focus on starting and expanding transformation initiatives."
    }
  },
  {
    "id": 125,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Modelo de responsabilidade compartilhada",
      "en": "Shared responsibility model"
    },
    "description": {
      "pt-BR": "Quais são duas responsabilidades do cliente no modelo de responsabilidade compartilhada AWS?",
      "en": "What are two customer responsibilities under the AWS shared responsibility model?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Aplicar patches ao Amazon DynamoDB",
          "en": "Patch Amazon DynamoDB"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon DynamoDB é um serviço de banco de dados gerenciado; a AWS cuida da infraestrutura subjacente e da aplicação de patches no serviço. O cliente administra os dados e configurações, mas não aplica patches aos servidores do DynamoDB.",
          "en": "Amazon DynamoDB is a managed database service; AWS handles the underlying infrastructure and service patching. Customers manage their data and configuration, but do not patch DynamoDB servers."
        }
      },
      {
        "title": {
          "pt-BR": "Classificar os ativos e dados da empresa",
          "en": "Classify company assets and data"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Classificar ativos e dados, definir sua sensibilidade e determinar controles apropriados são responsabilidades do cliente. A AWS protege a infraestrutura da nuvem, mas o cliente decide como seus dados devem ser tratados.",
          "en": "Classifying assets and data, determining their sensitivity, and choosing appropriate controls are customer responsibilities. AWS secures the infrastructure of the cloud, but customers decide how their data should be handled."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar Security Groups",
          "en": "Configure Security Groups"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Security Groups são firewalls virtuais associados a recursos, como instâncias EC2, e suas regras são configuradas pelo cliente para controlar tráfego permitido. Essa configuração de segurança no ambiente AWS é responsabilidade do cliente.",
          "en": "Security groups are virtual firewalls associated with resources such as EC2 instances, and customers configure their rules to control allowed traffic. This security configuration in the AWS environment is the customer's responsibility."
        }
      },
      {
        "title": {
          "pt-BR": "Selecionar instâncias EC2 para executar Lambda",
          "en": "Select EC2 instances to run Lambda"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Lambda executa código em uma infraestrutura gerenciada sem exigir que o cliente escolha instâncias EC2 para hospedar cada função. Selecionar e manter essa infraestrutura não é uma tarefa do cliente ao usar Lambda.",
          "en": "AWS Lambda runs code on managed infrastructure without requiring customers to choose EC2 instances to host each function. Selecting and maintaining that infrastructure is not a customer task when using Lambda."
        }
      },
      {
        "title": {
          "pt-BR": "Escolher AZ de cada bucket S3",
          "en": "Choose an Availability Zone for each S3 bucket"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon S3 armazena objetos e gerencia automaticamente a distribuição dos dados entre zonas de disponibilidade dentro de uma região. Os buckets não são criados escolhendo manualmente uma zona de disponibilidade específica.",
          "en": "Amazon S3 stores objects and automatically manages data distribution across Availability Zones within a Region. Buckets are not created by manually selecting a specific Availability Zone."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No modelo de responsabilidade compartilhada, o cliente classifica seus dados e configura controles de rede como Security Groups; a AWS opera a infraestrutura e os serviços gerenciados, como DynamoDB. Lambda não exige que o cliente selecione instâncias EC2, e o Amazon S3 gerencia a redundância entre zonas de disponibilidade sem escolha de zona por bucket.",
      "en": "Under the shared responsibility model, the customer classifies its data and configures network controls such as security groups, while AWS operates the infrastructure and managed services such as DynamoDB. Lambda does not require customers to select EC2 instances, and Amazon S3 manages redundancy across Availability Zones without a per-bucket zone selection."
    }
  },
  {
    "id": 126,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Cloud Adoption Framework",
      "en": "AWS Cloud Adoption Framework"
    },
    "description": {
      "pt-BR": "Qual capacidade do AWS CAF pertence à perspectiva People (Pessoas)?",
      "en": "Which AWS CAF capability belongs to the People perspective?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Parceria estratégica",
          "en": "Strategic partnership"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Parceria estratégica trata do alinhamento e da colaboração com parceiros para apoiar resultados de negócio. Não é a capacidade de desenvolver fluência e competências de nuvem entre os profissionais.",
          "en": "Strategic partnership concerns aligning and collaborating with partners to support business outcomes. It is not the capability for developing cloud fluency and skills among personnel."
        }
      },
      {
        "title": {
          "pt-BR": "Fluência na nuvem",
          "en": "Cloud fluency"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Fluência na nuvem desenvolve a compreensão, as habilidades e a cultura necessárias para trabalhar efetivamente com tecnologias e práticas de nuvem. Por isso, essa capacidade pertence à perspectiva People.",
          "en": "Cloud fluency develops the understanding, skills, and culture needed to work effectively with cloud technologies and practices. This capability therefore belongs to the People perspective."
        }
      },
      {
        "title": {
          "pt-BR": "Arquitetura de dados",
          "en": "Data architecture"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Arquitetura de dados define como os dados são estruturados, integrados e governados para atender às necessidades da organização. É uma capacidade de tecnologia, não da perspectiva voltada a pessoas e competências.",
          "en": "Data architecture defines how data is structured, integrated, and governed to meet organizational needs. It is a technology capability, not one in the people-and-skills perspective."
        }
      },
      {
        "title": {
          "pt-BR": "Gestão de eventos",
          "en": "Event management"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Gestão de eventos organiza a identificação, a resposta e o acompanhamento de eventos operacionais. Essa atividade se relaciona à operação de serviços, não ao desenvolvimento da fluência em nuvem das equipes.",
          "en": "Event management organizes the identification, response, and tracking of operational events. This activity relates to service operations, not to building cloud fluency across teams."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Fluência na nuvem pertence à perspectiva People do AWS CAF, pois desenvolve conhecimento e habilidades para que as equipes adotem e usem a nuvem com eficácia. Parceria estratégica, arquitetura de dados e gestão de eventos são capacidades associadas a outras perspectivas ou áreas.",
      "en": "Cloud fluency belongs to the People perspective of the AWS CAF because it develops the knowledge and skills teams need to adopt and use the cloud effectively. Strategic partnership, data architecture, and event management are capabilities associated with other perspectives or areas."
    }
  },
  {
    "id": 127,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço gerenciado AWS é projetado para atividades ETL (extração, transformação e carregamento)?",
      "en": "Which managed AWS service is designed for ETL (extract, transform, load) activities?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Athena",
          "en": "Amazon Athena"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Athena é um serviço de consultas interativas que analisa dados no Amazon S3 usando SQL, sem exigir a criação de um servidor de banco de dados. Ele consulta dados existentes, mas não é o serviço ETL gerenciado pedido.",
          "en": "Amazon Athena is an interactive query service that analyzes data in Amazon S3 using SQL without requiring a database server. It queries existing data but is not the requested managed ETL service."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Snowball Edge",
          "en": "AWS Snowball Edge"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Snowball Edge é um dispositivo e serviço para transferir grandes volumes de dados e executar processamento em ambientes de borda ou desconectados. Não é a plataforma gerenciada de pipelines ETL para integração de dados.",
          "en": "AWS Snowball Edge is a device and service for transferring large volumes of data and running processing in edge or disconnected environments. It is not the managed ETL pipeline platform for data integration."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Glue",
          "en": "AWS Glue"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Glue é um serviço gerenciado de integração de dados que oferece recursos para catalogar, preparar e transformar dados em trabalhos de extração, transformação e carregamento (ETL). Ele foi projetado para esse tipo de fluxo de dados.",
          "en": "AWS Glue is a managed data integration service with capabilities for cataloging, preparing, and transforming data in extract, transform, and load (ETL) jobs. It is designed for this kind of data workflow."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon S3",
          "en": "Amazon S3"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Simple Storage Service (S3) é um serviço de armazenamento de objetos escalável e durável. Ele pode ser a origem ou o destino de um pipeline ETL, mas não realiza sozinho as transformações gerenciadas do Glue.",
          "en": "Amazon Simple Storage Service (S3) is a scalable, durable object storage service. It can be a source or destination for an ETL pipeline, but it does not perform Glue's managed transformations by itself."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Glue é um serviço de integração de dados gerenciado que permite descobrir, preparar, transformar e carregar dados por meio de pipelines ETL (extração, transformação e carregamento). Athena consulta dados, Snowball Edge auxilia transferências e processamento em borda, e S3 é armazenamento de objetos.",
      "en": "AWS Glue is a managed data integration service for discovering, preparing, transforming, and loading data through extract, transform, and load (ETL) pipelines. Athena queries data, Snowball Edge supports data transfer and edge processing, and S3 is object storage."
    }
  },
  {
    "id": 128,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Como gerenciar de modo centralizado as regras dos Security Groups em várias contas de uma organização AWS?",
      "en": "How can Security Group rules be centrally managed across multiple accounts in an AWS organization?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Detective",
          "en": "Amazon Detective"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Detective analisa dados de segurança para ajudar a investigar e visualizar possíveis causas de descobertas ou atividades suspeitas. Ele não distribui políticas de Security Groups entre contas.",
          "en": "Amazon Detective analyzes security data to help investigate and visualize possible causes of findings or suspicious activity. It does not distribute security group policies across accounts."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Firewall Manager",
          "en": "AWS Firewall Manager"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Firewall Manager permite administrar políticas de firewall de forma centralizada para várias contas e recursos da AWS Organizations, incluindo regras de Security Groups. Isso corresponde ao gerenciamento organizacional solicitado.",
          "en": "AWS Firewall Manager lets administrators centrally manage firewall policies across multiple AWS Organizations accounts and resources, including security group rules. This matches the requested organization-wide management."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon GuardDuty monitora fontes de dados e sinais para detectar ameaças e atividades potencialmente maliciosas nas contas AWS. Ele gera descobertas de segurança, mas não gerencia regras de Security Groups.",
          "en": "Amazon GuardDuty monitors data sources and signals to detect threats and potentially malicious activity in AWS accounts. It generates security findings but does not manage security group rules."
        }
      },
      {
        "title": {
          "pt-BR": "AWS WAF",
          "en": "AWS WAF"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Web Application Firewall (WAF) ajuda a proteger aplicações web filtrando solicitações HTTP e HTTPS conforme regras configuradas. Ele protege tráfego de aplicações web, não centraliza as regras de Security Groups da organização.",
          "en": "AWS Web Application Firewall (WAF) helps protect web applications by filtering HTTP and HTTPS requests according to configured rules. It protects web application traffic rather than centrally managing an organization's security group rules."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Firewall Manager centraliza a criação e aplicação de políticas de Security Groups em contas e recursos da organização AWS. Detective investiga atividades suspeitas, GuardDuty detecta ameaças e AWS WAF filtra solicitações web, sem administrar centralmente regras de Security Groups.",
      "en": "AWS Firewall Manager centralizes the creation and enforcement of security group policies across accounts and resources in an AWS organization. Detective investigates suspicious activity, GuardDuty detects threats, and AWS WAF filters web requests rather than centrally managing security group rules."
    }
  },
  {
    "id": 129,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Uma aplicação muito exigente em hardware precisa ser acessada por alunos com laptops simples. Qual serviço permite fornecer o aplicativo remotamente?",
      "en": "A resource-intensive application must be accessed by students using basic laptops. Which service can deliver the application remotely?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS AppSync",
          "en": "AWS AppSync"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS AppSync é um serviço gerenciado para criar APIs GraphQL e sincronizar dados entre aplicações e fontes de dados. Ele não transmite aplicações de desktop com uso intensivo de recursos para os usuários.",
          "en": "AWS AppSync is a managed service for building GraphQL APIs and synchronizing data between applications and data sources. It does not stream resource-intensive desktop applications to users."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon AppStream 2.0",
          "en": "Amazon AppStream 2.0"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon AppStream 2.0 entrega aplicações de desktop por streaming a partir da AWS, onde elas são executadas e renderizadas em infraestrutura gerenciada. Os alunos podem interagir com a aplicação sem que seus laptops simples precisem executar a carga localmente.",
          "en": "Amazon AppStream 2.0 streams desktop applications from AWS, where they run and are rendered on managed infrastructure. Students can use the application without their basic laptops having to run the workload locally."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon WorkLink",
          "en": "Amazon WorkLink"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon WorkLink fornece acesso seguro, a partir de dispositivos móveis, a sites e aplicações internas da empresa. Ele não foi projetado para transmitir aplicações de desktop exigentes a laptops.",
          "en": "Amazon WorkLink provides secure access to internal company websites and applications from mobile devices. It is not designed to stream demanding desktop applications to laptops."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Elastic Beanstalk",
          "en": "AWS Elastic Beanstalk"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Elastic Beanstalk facilita a implantação e a escalabilidade de aplicações web na AWS. Ele hospeda aplicações web, mas não oferece o streaming de aplicações de desktop do AppStream 2.0.",
          "en": "AWS Elastic Beanstalk simplifies deploying and scaling web applications on AWS. It hosts web applications but does not provide AppStream 2.0's desktop application streaming."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon AppStream 2.0 transmite aplicações de desktop aos usuários, enquanto a aplicação é executada em recursos gerenciados na AWS; assim, os laptops precisam apenas de um navegador compatível. AppSync cria APIs, WorkLink dá acesso móvel a sites internos e Elastic Beanstalk implanta aplicações web.",
      "en": "Amazon AppStream 2.0 streams desktop applications to users while the applications run on AWS-managed resources, so laptops need only a supported browser. AppSync builds APIs, WorkLink provides mobile access to internal websites, and Elastic Beanstalk deploys web applications."
    }
  },
  {
    "id": 130,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço é apropriado para armazenar e analisar grandes quantidades de eventos de séries temporais?",
      "en": "Which service is suitable for storing and analyzing large volumes of time-series data?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Timestream",
          "en": "Amazon Timestream"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Timestream é um banco de dados de séries temporais gerenciado para coletar, armazenar e analisar dados temporais em grande escala. Seus recursos de consultas e armazenamento são adequados a eventos com carimbo de data e hora.",
          "en": "Amazon Timestream is a managed time-series database for collecting, storing, and analyzing time-based data at scale. Its storage and query capabilities suit timestamped events."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon DocumentDB",
          "en": "Amazon DocumentDB"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon DocumentDB é um banco de dados de documentos gerenciado, compatível com cargas de trabalho do MongoDB. Seu modelo de documentos não é especializado em ingestão e análise de séries temporais em larga escala.",
          "en": "Amazon DocumentDB is a managed document database compatible with MongoDB workloads. Its document model is not specialized for large-scale time-series ingestion and analysis."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Neptune",
          "en": "Amazon Neptune"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Neptune é um banco de dados gerenciado otimizado para dados em grafo e consultas sobre relações entre entidades. Ele não é destinado a armazenar e analisar grandes fluxos de eventos temporais.",
          "en": "Amazon Neptune is a managed database optimized for graph data and queries over relationships between entities. It is not intended for storing and analyzing large streams of time-series events."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Forecast",
          "en": "Amazon Forecast"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Forecast é um serviço de previsão de séries temporais que usa dados históricos para estimar valores futuros. Ele produz previsões, mas não é o armazenamento gerenciado de séries temporais para grandes volumes de eventos.",
          "en": "Amazon Forecast is a time-series forecasting service that uses historical data to estimate future values. It produces forecasts but is not the managed time-series store for large volumes of events."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Timestream é um banco de dados gerenciado de séries temporais, feito para armazenar e consultar grandes volumes de dados temporais com escalabilidade. DocumentDB atende documentos, Neptune atende grafos e Forecast cria previsões a partir de dados temporais, mas não é o banco de séries temporais pedido.",
      "en": "Amazon Timestream is a managed time-series database built to store and query large volumes of time-based data at scale. DocumentDB serves document workloads, Neptune serves graph workloads, and Forecast creates predictions from time-series data rather than providing the requested time-series database."
    }
  },
  {
    "id": 131,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Uma EC2 numa sub-rede privada precisa baixar atualizações da internet sem aceitar conexões iniciadas pela internet. Qual serviço usar?",
      "en": "An EC2 instance in a private subnet needs to download updates from the internet without accepting connections initiated from the internet. Which service should be used?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "NAT Gateway",
          "en": "NAT Gateway"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Um NAT Gateway faz tradução de endereços de rede para permitir que recursos em uma sub-rede privada iniciem conexões com destinos externos, como servidores de atualização. O tráfego de resposta é permitido, mas conexões não solicitadas da internet não são iniciadas diretamente para essas instâncias.",
          "en": "A network address translation (NAT) gateway translates network addresses so resources in a private subnet can initiate connections to external destinations such as update servers. Return traffic is allowed, but unsolicited internet connections cannot be initiated directly to those instances."
        }
      },
      {
        "title": {
          "pt-BR": "VPC Endpoint",
          "en": "VPC Endpoint"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um endpoint de nuvem privada virtual (VPC) fornece conectividade privada entre uma VPC e serviços ou recursos compatíveis, como serviços da AWS. Ele não oferece acesso geral a destinos arbitrários na internet para baixar atualizações.",
          "en": "A virtual private cloud (VPC) endpoint provides private connectivity between a VPC and supported services or resources, such as AWS services. It does not provide general access to arbitrary internet destinations for downloading updates."
        }
      },
      {
        "title": {
          "pt-BR": "VPC Peering",
          "en": "VPC Peering"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O VPC Peering cria uma conexão de rede privada entre duas VPCs para permitir roteamento entre seus recursos, sujeito às regras de rede. Ele não atua como caminho de saída para a internet pública.",
          "en": "VPC peering creates a private network connection between two VPCs so their resources can route traffic to one another, subject to network rules. It does not act as an egress path to the public internet."
        }
      },
      {
        "title": {
          "pt-BR": "AWS PrivateLink",
          "en": "AWS PrivateLink"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS PrivateLink permite acessar serviços de forma privada por endpoints de interface, sem expor o tráfego à internet pública. Ele conecta consumidores a serviços específicos, não habilita acesso geral de saída à internet.",
          "en": "AWS PrivateLink provides private access to services through interface endpoints without exposing traffic to the public internet. It connects consumers to specific services rather than enabling general outbound internet access."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Um NAT Gateway permite que instâncias em uma sub-rede privada iniciem conexões de saída com a internet, sem aceitar conexões de entrada iniciadas na internet. Endpoints VPC fornecem acesso privado a serviços específicos, enquanto peering e PrivateLink conectam VPCs ou serviços privados, não oferecem saída geral para a internet.",
      "en": "A NAT Gateway lets instances in a private subnet initiate outbound connections to the internet without accepting inbound connections initiated from the internet. VPC endpoints provide private access to specific services, while peering and PrivateLink connect VPCs or private services rather than providing general internet egress."
    }
  },
  {
    "id": 132,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Armazenamento AWS",
      "en": "AWS storage"
    },
    "description": {
      "pt-BR": "Qual serviço AWS provê armazenamento gerenciado de arquivos acessível por protocolo SMB?",
      "en": "Which AWS service provides managed file storage accessible over the SMB protocol?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon EFS",
          "en": "Amazon EFS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Elastic File System (EFS) fornece armazenamento de arquivos elástico para workloads Linux que acessam o sistema de arquivos usando Network File System (NFS). Ele não oferece o compartilhamento SMB para clientes Windows descrito.",
          "en": "Amazon Elastic File System (EFS) provides elastic file storage for Linux workloads that access the file system using Network File System (NFS). It does not provide the SMB shares for Windows clients described here."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon FSx for Windows File Server",
          "en": "Amazon FSx for Windows File Server"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon FSx for Windows File Server fornece compartilhamentos de arquivos Windows gerenciados e compatíveis com o protocolo Server Message Block (SMB). Os clientes podem acessá-los como compartilhamentos de rede, atendendo ao requisito.",
          "en": "Amazon FSx for Windows File Server provides managed Windows file shares that support the Server Message Block (SMB) protocol. Clients can access them as network shares, meeting the requirement."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EBS",
          "en": "Amazon EBS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Elastic Block Store (EBS) fornece volumes de armazenamento em blocos que são anexados a instâncias EC2. Um volume de blocos não é, por si só, um compartilhamento de arquivos gerenciado acessível por SMB.",
          "en": "Amazon Elastic Block Store (EBS) provides block storage volumes that attach to EC2 instances. A block volume is not, by itself, a managed file share accessible over SMB."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon S3",
          "en": "Amazon S3"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Simple Storage Service (S3) armazena objetos em buckets e os disponibiliza por APIs e interfaces compatíveis. Esse modelo de armazenamento de objetos não fornece um sistema de arquivos SMB nativo como o FSx for Windows File Server.",
          "en": "Amazon Simple Storage Service (S3) stores objects in buckets and makes them available through APIs and compatible interfaces. This object storage model does not provide a native SMB file system like FSx for Windows File Server."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon FSx for Windows File Server oferece armazenamento de arquivos totalmente gerenciado e acessível por clientes Windows usando o protocolo Server Message Block (SMB). EFS usa Network File System (NFS), EBS fornece volumes de blocos e S3 armazena objetos, não compartilhamentos de arquivos SMB gerenciados.",
      "en": "Amazon FSx for Windows File Server provides fully managed file storage accessible to Windows clients over the Server Message Block (SMB) protocol. EFS uses Network File System (NFS), EBS provides block volumes, and S3 stores objects rather than managed SMB file shares."
    }
  },
  {
    "id": 133,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Para verificar tanto saúde geral dos serviços AWS quanto eventos que afetam especificamente a conta, quais ferramentas usar? (Duas.)",
      "en": "To check both overall AWS service health and events affecting a specific account, which tools should be used? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor avalia o ambiente AWS segundo práticas recomendadas em áreas como custo, segurança, desempenho e limites de serviço. Ele não é o painel para verificar saúde geral dos serviços nem eventos específicos da conta.",
          "en": "AWS Trusted Advisor evaluates an AWS environment against best practices in areas such as cost, security, performance, and service limits. It is not the dashboard for checking overall service health or account-specific events."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Service Catalog",
          "en": "AWS Service Catalog"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Service Catalog permite criar, organizar e controlar o acesso a produtos de infraestrutura aprovados para uso na AWS. Ele não monitora a saúde dos serviços nem comunica eventos operacionais da conta.",
          "en": "AWS Service Catalog lets organizations create, organize, and control access to approved infrastructure products for use on AWS. It does not monitor service health or report account operational events."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Service Health Dashboard",
          "en": "AWS Service Health Dashboard"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Service Health Dashboard exibe a disponibilidade e os eventos que afetam serviços e regiões da AWS de forma geral. Ele permite verificar a saúde ampla da infraestrutura da AWS.",
          "en": "The AWS Service Health Dashboard displays availability and events affecting AWS services and Regions overall. It provides a way to check the broad health of AWS infrastructure."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Systems Manager",
          "en": "AWS Systems Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Systems Manager ajuda a operar e automatizar recursos, incluindo gerenciamento de instâncias, parâmetros e operações. Não é o painel que resume incidentes gerais da AWS nem impactos de serviço personalizados à conta.",
          "en": "AWS Systems Manager helps operate and automate resources, including instance management, parameters, and operations. It is not the dashboard that summarizes general AWS incidents or account-specific service impacts."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Personal Health Dashboard",
          "en": "AWS Personal Health Dashboard"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Personal Health Dashboard apresenta alertas e eventos da AWS que podem afetar os serviços e recursos usados por uma conta específica. Ele complementa o painel de saúde geral com informações personalizadas à conta.",
          "en": "The AWS Personal Health Dashboard presents AWS alerts and events that may affect the services and resources used by a specific account. It complements the overall health dashboard with account-specific information."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Service Health Dashboard apresenta o estado geral dos serviços e regiões da AWS; o AWS Personal Health Dashboard mostra eventos e notificações relevantes para os serviços e recursos específicos da conta. Usadas em conjunto, as duas ferramentas distinguem incidentes gerais de impactos personalizados na conta.",
      "en": "The AWS Service Health Dashboard shows the overall status of AWS services and Regions; the AWS Personal Health Dashboard shows events and notifications relevant to the specific account's services and resources. Together, they distinguish general incidents from account-specific impacts."
    }
  },
  {
    "id": 134,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "AWS Well-Architected e resiliência",
      "en": "Well-Architected and resilience"
    },
    "description": {
      "pt-BR": "Uma instância de banco de dados RDS crítica deve ter alta disponibilidade e recuperação rápida (menos de cinco minutos). Qual solução?",
      "en": "A critical RDS database instance requires high availability and fast recovery (less than five minutes). Which solution should be used?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Implantação RDS Multi-AZ",
          "en": "RDS Multi-AZ deployment"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Uma implantação Amazon Relational Database Service (RDS) Multi-AZ mantém uma réplica em espera sincronizada em outra zona de disponibilidade e faz failover automático quando necessário. O failover costuma ocorrer em minutos, oferecendo alta disponibilidade e recuperação compatíveis com o requisito.",
          "en": "An Amazon Relational Database Service (RDS) Multi-AZ deployment maintains a synchronized standby in another Availability Zone and automatically fails over when needed. Failover typically occurs within minutes, providing high availability and recovery consistent with the requirement."
        }
      },
      {
        "title": {
          "pt-BR": "Snapshots frequentes no S3",
          "en": "Frequent snapshots to S3"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Snapshots do RDS são cópias de backup pontuais que podem ser usadas para restaurar um banco de dados. Restaurar um snapshot envolve criar ou recuperar uma instância e não proporciona o failover automático e rápido de uma implantação Multi-AZ.",
          "en": "RDS snapshots are point-in-time backups that can be used to restore a database. Restoring a snapshot involves creating or recovering an instance and does not provide the automatic, fast failover of a Multi-AZ deployment."
        }
      },
      {
        "title": {
          "pt-BR": "Réplica de leitura isolada",
          "en": "A standalone read replica"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma réplica de leitura recebe atualizações do banco de origem e pode atender consultas de leitura para aumentar a capacidade de leitura. Ela não substitui automaticamente a instância primária em todos os cenários como uma implantação Multi-AZ.",
          "en": "A read replica receives updates from a source database and can serve read queries to increase read capacity. It does not automatically replace the primary instance in all scenarios like a Multi-AZ deployment."
        }
      },
      {
        "title": {
          "pt-BR": "Template CloudFormation",
          "en": "CloudFormation template"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CloudFormation usa templates para provisionar e gerenciar infraestrutura como código. Um template pode descrever recursos de banco de dados, mas não fornece por si só redundância de banco nem failover rápido.",
          "en": "AWS CloudFormation uses templates to provision and manage infrastructure as code. A template can describe database resources, but does not itself provide database redundancy or fast failover."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Uma implantação Amazon RDS Multi-AZ mantém uma instância em espera sincronizada em outra zona de disponibilidade e oferece failover automático se a instância primária falhar, normalmente em minutos. Snapshots são usados para restauração, réplicas de leitura são voltadas principalmente à escala de leitura, e um template CloudFormation apenas provisiona recursos.",
      "en": "An Amazon RDS Multi-AZ deployment maintains a synchronized standby in another Availability Zone and provides automatic failover if the primary instance fails, typically within minutes. Snapshots are used for restoration, read replicas primarily scale reads, and a CloudFormation template only provisions resources."
    }
  }
];
