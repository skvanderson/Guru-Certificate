const questoes =
   [
    {
        titulo: "Pergunta 01",
        descricao: "Qual serviço da AWS oferece suporte a uma arquitetura híbrida que oferece aos usuários a capacidade de estender a infraestrutura da AWS, os serviços da AWS, as APIs e as ferramentas para data centers, ambientes de co-localização ou instalações locais?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Fargate", correta: false},
            {titulo: "Zonas locais da AWS", correta: false},
            {titulo: "Postos avançados da AWS", correta: true},
            {titulo: "AWS Snowmobile", correta: false},
        ]
    },

    {
        titulo: "Pergunta 02",
        descricao: "Qual é o objetivo de ter um gateway de internet dentro de uma VPC?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Para impor restrições de largura de banda ao tráfego da Internet", correta: false},
            {titulo: "Para balancear a carga do tráfego da Internet em instâncias do Amazon EC2", correta: false},
            {titulo: "AWS Snowmobile", correta: false},
            {titulo: "Para permitir a comunicação entre a VPC e a internet", correta: true},
        ]
    },

    {
        titulo: "Pergunta 03",
        descricao: "Uma empresa farmacêutica opera sua infraestrutura em uma única região da AWS. A empresa tem milhares de VPCs em várias contas da AWS que deseja interconectar. Qual serviço ou recurso da AWS a empresa deve usar para ajudar a simplificar o gerenciamento e reduzir os custos operacionais? ",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "VPC endpoint", correta: false},
            {titulo: "Emparelhamento de VPC", correta: false},
            {titulo: "AWS Direct Connect", correta: false},
            {titulo: "AWS Transit Gateway", correta: true},
        ]
    },

    {
        titulo: "Pergunta 04",
        descricao: "Qual opção de recuperação de desastres é a MENOS cara?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Multisite", correta: false},
            {titulo: "Luz piloto", correta: false},
            {titulo: "Backup e restauração", correta: true},
            {titulo: "Espera quente", correta: false},
            
        ]
    },

    {
        titulo: "Pergunta 05",
        descricao: "De acordo com o modelo de responsabilidade compartilhada da AWS, qual responsabilidade um cliente tem ao usar o Amazon RDS para hospedar um bancode dados?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Gerenciar conexões com o banco de dados", correta: false},
            {titulo: "Aplicar patches de banco de dados secundários", correta: true},
            {titulo: "Projetar estratégias de criptografia em repouso", correta: false},
            {titulo: "Instalar o Microsoft SQL Server", correta: false},
            
            
        ]
    },

    {
        titulo: "Pergunta 06",
        descricao: "Qual tipo de armazenamento da AWS é efêmero e é excluído quando uma instância do Amazon EC2 é interrompida ou encerrada?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon S3", correta: false},
            {titulo: "Armazenamento de instâncias do Amazon EC2", correta: true},
            {titulo: "Sistema de arquivos elástico da Amazon (Amazon EFS)", correta: false},
            {titulo: "Loja de blocos elásticos da Amazon (Amazon EBS)", correta: false},
            
            
        ]
    },

    {
        titulo: "Pergunta 07",
        descricao: "Uma empresa deseja usar a Nuvem AWS para fornecer acesso seguro a aplicativos de desktop que estão sendo executados em um ambiente totalmente gerenciado. Qual serviço da AWS a empresa deve usar para atender a esse requisito?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Escudo AWS(AWS Shield)", correta: false},
            {titulo: "Amazon AppStream2.0  ", correta: true},
            {titulo: "Amazon S3", correta: false},
            {titulo: "Sincronização de aplicativo da AWS", correta: false},
            
            
        ]
    },

    {
        titulo: "Pergunta 08",
        descricao: "Usar o AWS Config para registrar, auditar e avaliar alterações nos recursos da AWS para permitir a rastreabilidade é um exemplo de qual pilar do AWS Well-Architected Framework?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Excelência operacional", correta: false},
            {titulo: "Otimização de custos", correta: false},
            {titulo: "Eficiência de desempenho", correta: false},
            {titulo: "Segurança", correta: true},
            
            
            
        ]
    },

    {
        titulo: "Pergunta 09",
        descricao: "Uma empresa está operando várias fábricas onde constrói produtos. A empresa precisa da capacidade de processar dados, armazenar dados e executar aplicativos com interdependências de sistema local que exigem baixa latência. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Lambda", correta: false},
            {titulo: "Postos avançados da AWS", correta: true},
            {titulo: "AWS Snowball Edge", correta: false},
            {titulo: "AWS IoT Greengrass", correta: false},
            
            
            
        ]
    },

    
    {
        titulo: "Pergunta 10",
        descricao: "Qual das opções a seguir é uma característica do usuário raiz da conta da AWS??",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "O usuário root é o único que pode acessar o Console de Gerenciamento da AWS.", correta: false},
            {titulo: "O usuário raiz é a primeira identidade de login disponível quando uma conta da AWS é criada.", correta: true},
            {titulo: "O usuário root tem uma senha que não pode ser alterada.", correta: false},
            {titulo: "O usuário root é o único usuário que pode ser configurado com autenticação multifator(MFA).", correta: false},
            
            
            
        ]
    },


    {
        titulo: "Pergunta 11",
        descricao: "Que tipo de banco de dados é o Amazon DynamoDB",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Gráfico", correta: false},
            {titulo: "Valor-chave", correta: true},
            {titulo: "Relacional", correta: false},
            {titulo: "Na memória", correta: false},
            
            
            
        ]
    },


    {
        titulo: "Pergunta 12",
        descricao: "Uma empresa quer eliminar a necessidade de adivinhar a capacidade da infraestrutura antes das implantações. A empresa também quer gastar seu orçamento em recursos de nuvem apenas à medida que a empresa usa os recursos.",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Economias de escala", correta: false},
            {titulo: "Preços pré-pagos", correta: true},
            {titulo: "Confiabilidade", correta: false},
            {titulo: "Alcance global", correta: false},
            
            
            
        ]
    },

    {
        titulo: "Pergunta 13",
        descricao: "Uma empresa está planejando executar um aplicativo de marketing global na Nuvem AWS. O aplicativo contará com vídeos que poderão ser visualizados pelos usuários. A empresa deve garantir que todos os usuários possam visualizar esses vídeos com baixa latência. Qual serviço da AWS a empresa deve usar para atender a esse requisito?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Elastic Load Balancing", correta: false},
            {titulo: "AWS Auto Scaling", correta: false},
            {titulo: "Fluxos de vídeo do Amazon Kinesis (Amazon Kinesis Video Streams)", correta: false},
            {titulo: "Amazon CloudFront", correta: true},
            
            
            
        ]
    },

    {
        titulo: "Pergunta 14",
        descricao: "Uma empresa está planejando executar um aplicativo de marketing global na Nuvem AWS. O aplicativo contará com vídeos que poderão ser visualizados pelos usuários. A empresa deve garantir que todos os usuários possam visualizar esses vídeos com baixa latência. Qual serviço da AWS a empresa deve usar para atender a esse requisito?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon GuardDuty", correta: false},
            {titulo: "AWS Shield", correta: true},
            {titulo: "AWS WAF", correta: false},
            {titulo: "Amazon Inspector", correta: false},
            
            
        ]
    },


    {
        titulo: "Pergunta 15",
        descricao: "Uma empresa deseja migrar seus aplicativos de seu data center local para uma VPC na Nuvem AWS. Esses aplicativos precisarão acessar recursos locais.",
        pergunta: "Quais ações atenderão a esses requisitos? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configure uma conexão do AWS Direct Connect entre o data center local e a AWS.", correta: true},
            {titulo: "Use o AWS Service Catalog para identificar uma lista de recursos locais que podem ser migrados.", correta: false},
            {titulo: "Use o Amazon CloudFront para restringir o acesso ao conteúdo estático da Web fornecido por meio dos servidores Web locais.", correta: false},
            {titulo: "Crie uma conexão VPN entre um dispositivo local e um gateway privado virtual na VPC.", correta: true},
            {titulo: "Use uma distribuição do Amazon CloudFront e configure-a para acelerar a entrega de conteúdo perto dos recursos locais.", correta: false},
        ]
    },


    {
        titulo: "Pergunta 16",
        descricao: "Uma empresa tem uma biblioteca de fitas físicas para armazenar backups de dados. A biblioteca de fitas está ficando sem espaço. A empresa precisa estender a capacidade da biblioteca de fitas para a Nuvem AWS. Qual serviço da AWS a empresa deve usar para atender a esse requisito?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon Elastic Block Store (Amazon EBS)", correta: false},
            {titulo: "AWS WAF", correta: false},
            {titulo: "AWS Storage Gateway", correta: true},
            {titulo: "Amazon Elastic File System (Amazon EFS)", correta: false},
            
            
        ]
    },

    {
        titulo: "Pergunta 17",
        descricao: "Uma empresa que tem várias unidades de negócios deseja gerenciar e governar centralmente seus ambientes da Nuvem AWS. A empresa quer automatizar a criação de contas da AWS, aplicar políticas de controle de serviço (SCPs) e simplificar os processos de faturamento. Qual serviço ou ferramenta da AWS a empresa deve usar para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Organizations", correta: true},
            {titulo: "AWS Trusted Advisor", correta: false},
            {titulo: "Cost Explorer", correta: false},
            {titulo: "AWS Budgets", correta: false},
            
            
        ]
    },

    {
        titulo: "Pergunta 18",
        descricao: "",
        pergunta: "Quais controles de TI a AWS e o cliente compartilham, de acordo com o modelo de responsabilidade compartilhada da AWS? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Criptografia de dados do aplicativo", correta: false},
            {titulo: "Reconhecimento e treinamento em nuvem", correta: true},
            {titulo: "Segurança de zona", correta: false},
            {titulo: "Gerenciamento de patches", correta: true},
            {titulo: "Controles físicos e ambientais", correta: false},
        ]
    },

    {
        titulo: "Pergunta 19",
        descricao: "Uma empresa precisa identificar a última vez que um usuário específico acessou o Console de Gerenciamento da AWS. Qual serviço da AWS fornecerá essas informações?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS CloudTrail", correta: true},
            {titulo: "Amazon GuardDuty", correta: false},
            {titulo: "Amazon Inspector", correta: false},
            {titulo: "Amazon Cognito", correta: false},
            
            
        ]
    },

    
    {
        titulo: "Pergunta 20",
        descricao: "Qual serviço da AWS é usado para fornecer criptografia para o Amazon EBS?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Gerenciador de sistemas da AWS", correta: false},
            {titulo: "Configuração da AWS", correta: false},
            {titulo: "Gerenciador de certificados da AWS", correta: false},
            {titulo: "AWS KMS", correta: true},
            
            
        ]
    },

    {
        titulo: "Pergunta 21",
        descricao: "Qual é a diferença entre o modelo de definição de preço da Nuvem AWS e o modelo tradicional de definição de preço de armazenamento local?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Não há custos operacionais de infraestrutura", correta: false},
            {titulo: "Os recursos da AWS não incorrem em custos", correta: false},
            {titulo: "Não há custos de licenciamento de software", correta: false},
            {titulo: "Não há compromissos de custos iniciais", correta: true},
            
            
        ]
    },

    {
        titulo: "Pergunta 22",
        descricao: "Uma empresa está migrando para o Amazon S3. A empresa precisa transferir 60 TB de dados de um data center local para a AWS em até 10 dias. Qual serviço da AWS a empresa deve usar para realizar essa migração?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon S3 Glacier", correta: false},
            {titulo: "AWS Database Migration Service (AWS DMS)", correta: false},
            {titulo: "AWS Snowball", correta: true},
            {titulo: "AWS Direct Connect", correta: false},
           
            
            
        ]
    },

    
    {
        titulo: "Pergunta 23",
        descricao: "",
        pergunta: "Em quais situações uma empresa deve criar um usuário do IAM em vez de uma função do IAM? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Quando a empresa precisa adicionar usuários a grupos do IAM", correta: false},
            {titulo: "Quando a empresa cria credenciais de acesso da AWS para indivíduos", correta: true},
            {titulo: "Quando a empresa cria um aplicativo executado em um celular que faz solicitações à AWS", correta: false},
            {titulo: "Quando um aplicativo executado em instâncias do Amazon EC2 requer acesso a outros serviços da AWS", correta: true},
            {titulo: "Quando os usuários são autenticados na rede corporativa e desejam usar a AWS sem precisar fazer login uma segunda vez", correta: false},
        ]
    },

    {
        titulo: "Pergunta 24",
        descricao: "Uma empresa está planejando uma implantação de infraestrutura na Nuvem AWS. Antes da implantação, a empresa quer uma estimativa de custo para executar a infraestrutura. Qual serviço ou recurso da AWS pode fornecer essas informações?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Explorador de Custos", correta: false},
            {titulo: "Relatório de custo e uso da AWS", correta: false},
            {titulo: "Calculadora de definição de preço da AWS ", correta: true},
            {titulo: "Consultor confiável da AWS", correta: false},
           
            
            
        ]
    },

    {
        titulo: "Pergunta 25",
        descricao: "",
        pergunta: "Quais serviços da AWS uma empresa deve usar para ler e gravar dados que mudam com frequência? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon Redshift", correta: false},
            {titulo: "Amazon S3 Glacier", correta: false},
            {titulo: "Amazon Elastic File System (Amazon EFS)", correta: true},
            {titulo: "AWS Snowball", correta: false},
            {titulo: "Amazon RDS", correta: true},
        ]
    },

    {
        titulo: "Pergunta 26",
        descricao: "Uma empresa está projetando suas cargas de trabalho da AWS para que os componentes possam ser atualizados regularmente e para que as alterações possam ser feitas em pequenos incrementos reversíveis. Qual pilar do AWS Well-Architected Framework é compatível com esse projeto?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Eficiência de desempenho", correta: false},
            {titulo: "Fiabilidade", correta: false},
            {titulo: "Excelência operacional", correta: true},
            {titulo: "Segurança", correta: false},
           
        ]
    },


    {
        titulo: "Pergunta 27",
        descricao: "Uma empresa deseja implementar a detecção de ameaças em sua infraestrutura da AWS. No entanto, a empresa não quer implantar software adicional. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon GuardDuty", correta: true},
            {titulo: "Amazon VPC", correta: false},
            {titulo: "AWS Direct Connect", correta: false},
            {titulo: "Amazon EC2", correta: false},
           
        ]
    },

    {
        titulo: "Pergunta 28",
        descricao: "Um usuário precisa determinar se os security groups de uma instância do Amazon EC2 foram modificados no último mês. Como o usuário pode ver se uma alteração foi feita?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Use o AWS CloudTrail para ver se o security group foi alterado.", correta: true},
            {titulo: "Use o AWS Identity and Access Management (IAM) para ver qual usuário ou função alterou o security group.", correta: false},
            {titulo: "Use o Amazon CloudWatch para ver se o security group foi alterado.", correta: false},
            {titulo: "Use o Amazon EC2 para ver se o security group foi alterado.", correta: false},
           
        ]
    },

    {
        titulo: "Pergunta 29",
        descricao: "Qual ferramenta ou recurso da AWS atua como um firewall de VPC no nível da sub-rede?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Gateway da Internet", correta: false},
            {titulo: "ACL de rede", correta: true},
            {titulo: "Espelhamento de tráfego", correta: false},
            {titulo: "Grupo de segurança", correta: false},
           
        ]
    },


    {
        titulo: "Pergunta 30",
        descricao: "Qual serviço ou recurso da AWS verifica as políticas de acesso e oferece recomendações acionáveis para ajudar os usuários a definir políticas seguras e funcionais?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Systems Manager", correta: false},
            {titulo: "AWS Trusted Advisor", correta: false},
            {titulo: "AWS Shield", correta: false},
            {titulo: "AWS IAM Access Analyzer", correta: true},
           
        ]
    },


    {
        titulo: "Pergunta 31",
        descricao: "Qual serviço da AWS usa pontos de presença?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS EKS", correta: false},
            {titulo: "AWS Global Accelerator", correta: true},
            {titulo: "AWS ELB", correta: false},
            {titulo: "Amazon Aurora", correta: false},
             
        ]
    },

    {
        titulo: "Pergunta 32",
        descricao: "Qual serviço ou ferramenta da AWS pode ser usado para capturar informações sobre tráfego de entrada e saída em uma Amazon VPC?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon Inspector", correta: false},
            {titulo: "NAT gateway", correta: false},
            {titulo: "VPC endpoint services", correta: false},
            {titulo: "VPC Flow Logs", correta: true},
            
        ]
    },

    {
        titulo: "Pergunta 33",
        descricao: "",
        pergunta: "Quais serviços da AWS usam pontos de presença globais? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Fargate", correta: false},
            {titulo: "Amazon CloudFront", correta: true},
            {titulo: "Amazon VPC", correta: false},
            {titulo: "Acelerador global da AWS", correta: true},
            {titulo: "Comprimento de onda da AWS", correta: false},
        ]
    },

    {
        titulo: "Pergunta 34",
        descricao: "Qual ferramenta de serviço da AWS ajuda a gerenciar centralmente o faturamento e permitir acesso controlado a recursos em contas da AWS?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Explorador de Custos", correta: false},
            {titulo: "Calculadora de preços AWS", correta: false},
            {titulo: "Organizações da AWS", correta: true},
            {titulo: "Gerenciamento de identidade e acesso da AWS (IAM)", correta: false},
          
            
        ]
    },

    {
        titulo: "Pergunta 35",
        descricao: "",
        pergunta: "Quais são algumas vantagens de usar instâncias do Amazon EC2 para hospedar aplicativos na Nuvem AWS em vez de no local? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "O EC2 inclui o gerenciamento de patches do sistema operacional.", correta: false},
            {titulo: "O EC2 se integra à Amazon VPC, ao AWS CloudTrail e ao AWS Identity and Access Management (IAM).", correta: true},
            {titulo: "O EC2 tem otimização automática de custos de armazenamento.", correta: false},
            {titulo: "O EC2 tem um acordo de nível de serviço (SLA) de 100%.", correta: false},
            {titulo: "O EC2 tem um modelo de precificação flexível e pré-pago.", correta: true},
        ]
    },

    {
        titulo: "Pergunta 36",
        descricao: "Uma empresa quer garantir que duas instâncias do Amazon EC2 estejam em data centers separados com latência mínima de comunicação entre os data centers. Como a empresa pode atender a esse requisito?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Coloque as instâncias do EC2 em duas regiões da AWS separadas conectadas com uma conexão de emparelhamento de VPC.", correta: false},
            {titulo: "Coloque as instâncias do EC2 em duas zonas de disponibilidade separadas na mesma região da AWS.", correta: true},
            {titulo: "Coloque uma instância do EC2 no local e a outra em uma região da AWS. Em seguida, conecte-os usando uma conexão VPN da AWS.", correta: false},
            {titulo: "Coloque ambas as instâncias do EC2 em um grupo de posicionamento para largura de banda dedicada.", correta: false},

        ]
    },

    {
        titulo: "Pergunta 37",
        descricao: "Uma empresa deseja realizar análise de sentimento nas mensagens de e-mail de atendimento ao cliente que recebe. A empresa quer identificar se o engajamento no atendimento ao cliente foi positivo ou negativo. Qual serviço da AWS a empresa deve usar para realizar essa análise?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon Comprehend", correta: true},
            {titulo: "Amazon Textract", correta: false},
            {titulo: "Amazon Rekognition", correta: false},
            {titulo: "Amazon Translate", correta: false},

        ]
    },


    {
        titulo: "Pergunta 38",
        descricao: "Uma grande empresa tem vários departamentos. Cada departamento tem sua própria conta da AWS. Cada departamento comprou instâncias reservadas do Amazon EC2. Alguns departamentos não usam todas as Instâncias Reservadas que compraram, e outros departamentos precisam de mais Instâncias Reservadas do que compraram. A empresa precisa gerenciar as contas da AWS para todos os departamentos para que os departamentos possam compartilhar as instâncias reservadas. Qual serviço ou ferramenta da AWS a empresa deve usar para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Organizations", correta: true},
            {titulo: "AWS Trusted Advisor", correta: false},
            {titulo: "AWS Systems Manager", correta: false},
            {titulo: "Cost Explorer", correta: false},

        ]
    },

    {
        titulo: "Pergunta 39",
        descricao: "Qual serviço da AWS pode ser usado para transformar texto em fala realista?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon Kendra", correta: false},
            {titulo: "Amazon Connect", correta: false},
            {titulo: "Amazon Rekognition", correta: false},
            {titulo: "Amazon Polly", correta: true},

        ]
    },

    {
        titulo: "Pergunta 40",
        descricao: "Qual dos itens a seguir atua como um firewall em nível de instância para controlar o acesso de entrada e saída?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Consultor confiável da AWS", correta: false},
            {titulo: "Lista de controle de acesso à rede", correta: false},
            {titulo: "Grupos de segurança", correta: true},
            {titulo: "Gateways privados virtuais", correta: false},
            

        ]
    },


    {
        titulo: "Pergunta 41",
        descricao: "Uma empresa de manufatura tem um aplicativo crítico que é executado em um local remoto que tem uma conexão lenta com a Internet. A empresa quer migrar a carga de trabalho para a AWS. O aplicativo é sensível à latência e interrupções na conectividade. A empresa quer uma solução que possa hospedar esse aplicativo com latência mínima. Qual serviço ou recurso da AWS a empresa deve usar para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Zonas de disponibilidade", correta: false},
            {titulo: "Postos avançados da AWS", correta: false},
            {titulo: "Zonas locais da AWS", correta: true},
            {titulo: "AWS wavelength", correta: false},
            

        ]
    },

    {
        titulo: "Pergunta 42",
        descricao: "Qual serviço da AWS pode ser usado para separar aplicativos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configuração da AWS", correta: false},
            {titulo: "Amazon Simple Email Service (Amazon SES)", correta: false},
            {titulo: "Amazon Simple Queue Service (Amazon SQS)", correta: true},
            {titulo: "Lote da AWS", correta: false},
            

        ]
    },

    {
        titulo: "Pergunta 43",
        descricao: "Uma empresa precisa estabelecer uma conexão entre duas VPCs. As VPCs estão localizadas em duas regiões diferentes da AWS. A empresa quer usar a infraestrutura existente das VPCs para essa conexão. Qual serviço ou recurso da AWS pode ser usado para estabelecer essa conexão?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "VPC endpoints", correta: false},
            {titulo: "AWS Client VPN", correta: false},
            {titulo: "VPC peering", correta: true},
            {titulo: "AWS Direct Connect", correta: false},
            

        ]
    },

    {
        titulo: "Pergunta 43",
        descricao: "Uma empresa precisa estabelecer uma conexão entre duas VPCs. As VPCs estão localizadas em duas regiões diferentes da AWS. A empresa quer usar a infraestrutura existente das VPCs para essa conexão. Qual serviço ou recurso da AWS pode ser usado para estabelecer essa conexão?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "VPC endpoints", correta: false},
            {titulo: "AWS Client VPN", correta: false},
            {titulo: "VPC peering", correta: true},
            {titulo: "AWS Direct Connect", correta: false},
            

        ]
    },

    {
        titulo: "Pergunta 44",
        descricao: "Qual serviço da AWS ajuda a proteger contra ataques DDoS?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon GuardDuty", correta: false},
            {titulo: "Amazon Detective", correta: false},
            {titulo: "Amazon Inspector", correta: false},
            {titulo: "AWS Shield", correta: true},
            

        ]
    },

    {
        titulo: "Pergunta 45",
        descricao: "",
        pergunta: "Uma empresa de varejo on-line tem picos sazonais de vendas várias vezes ao ano, principalmente em torno de feriados. A demanda é menor em outros momentos. A empresa tem dificuldade em prever o aumento da demanda de infraestrutura para cada estação. Quais vantagens de migrar para a Nuvem AWS MAIS beneficiaria a empresa?",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Cotas de serviço da AWS", correta: false},
            {titulo: "Preços pré-pagos", correta: true},
            {titulo: "Modelo de responsabilidade compartilhada da AWS", correta: false},
            {titulo: "Presença global", correta: false},
            {titulo: "Elasticidade", correta: true},
        ]
    },

    {
        titulo: "Pergunta 46",
        descricao: "Qual serviço da AWS permite que os usuários façam download de relatórios de segurança e conformidade sobre a infraestrutura da AWS sob demanda?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Artifact", correta: true},
            {titulo: "AWS Security Hub", correta: false},
            {titulo: "Amazon GuardDuty", correta: false},
            {titulo: "Amazon Inspector", correta: false},
            
        ]
    },
    
    {
        titulo: "Pergunta 47",
        descricao: "",
        pergunta: "Quais dos itens a seguir são componentes de uma conexão VPN site a site da AWS? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Gateway da Internet", correta: true},
            {titulo: "AWS Lamba", correta: false},
            {titulo: "AWS Policy", correta: false},
            {titulo: "AWS S3", correta: false},
            {titulo: "AWS Storage Gateway", correta: true},
        ]
    },

    {
        titulo: "Pergunta 48",
        descricao: "Qual é o escopo de uma VPC dentro da rede da AWS?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Uma VPC pode abranger todas as zonas de disponibilidade em uma região da AWS.", correta: true},
            {titulo: "Uma VPC deve abranger pelo menos dois pontos de presença em cada região da AWS.", correta: false},
            {titulo: "Uma VPC deve abranger pelo menos duas sub-redes em cada região da AWS.", correta: false},
            {titulo: "Uma VPC pode abranger todas as zonas de disponibilidade globalmente.", correta: false},
            
        ]
    },

    {
        titulo: "Pergunta 49",
        descricao: "Qual serviço ou recurso da AWS atua como um firewall para instâncias do Amazon EC2?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Grupo de segurança", correta: true},
            {titulo: "Interface de rede elástica", correta: false},
            {titulo: "Amazon VPC", correta: false},
            {titulo: "ACL de rede", correta: false},
            
            

        ]
    },

    {
        titulo: "Pergunta 50",
        descricao: "Uma empresa precisa processar simultaneamente centenas de solicitações de diferentes usuários. Qual combinação de serviços da AWS a empresa deve usar para criar uma solução operacionalmente eficiente?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Amplify e AWS AppSync", correta: false},
            {titulo: "Amazon Kinesis e Amazon Athena", correta: false},
            {titulo: "AWS Data Pipeline e Amazon EC2", correta: false},
            {titulo: "Amazon Simple Queue Service (Amazon SQS) e AWS Lambda", correta: true},
            

        ]
    },


    {
        titulo: "Pergunta 51",
        descricao: "",
        pergunta: "Uma empresa lançou uma instância do Amazon EC2 com a mais recente Amazon Linux 2 Amazon Machine Image (AMI). Quais ações um administrador de sistema pode tomar para se conectar à instância do EC2? (Escolha dois.) ",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Use o Gerenciador de sessões do AWS Systems Manager.", correta: true},
            {titulo: "Use Amazon EC2 Instance Connect.", correta: true},
            {titulo: "Use uma conexão RDP (Remote Desktop Protocol).", correta: false},
            {titulo: "Usar o Amazon Connect", correta: false},
            {titulo: "Usar o AWS Batch", correta: false},
            
        ]
    },

    {
        titulo: "Pergunta 52",
        descricao: "Uma empresa executa suas cargas de trabalho no local. A empresa quer prever o custo de execução de um grande aplicativo na AWS. Qual serviço ou ferramenta da AWS a empresa pode usar para obter essas informações?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Budgets", correta: false},
            {titulo: "AWS Trusted Advisor", correta: false},
            {titulo: "Cost Explorer", correta: false},
            {titulo: "AWS Pricing Calculator", correta: true},
            

        ]
    },


    {
        titulo: "Pergunta 53",
        descricao: "Uma empresa executa suas cargas de trabalho no local. A empresa quer prever o custo de execução de um grande aplicativo na AWS. Qual serviço ou ferramenta da AWS a empresa pode usar para obter essas informações?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Availability Zone", correta: true},
            {titulo: "AWS Region", correta: false},
            {titulo: "Edge location", correta: false},
            {titulo: "AWS Outposts", correta: false},
            
        ]
    },

    {
        titulo: "Pergunta 54",
        descricao: "Quais dos seguintes recursos são recursos da Amazon Virtual Private Cloud (Amazon VPC)?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Objetos; listas de controle de acesso (ACLs)", correta: false},
            {titulo: "Internet Gateway", correta: false},
            {titulo: "Políticas de acesso; Buckets", correta: false},
            {titulo: "Sub-redes; Gateways de Internet", correta: true},
            
        ]
    },

    {
        titulo: "Pergunta 55",
        descricao: "Quais dos seguintes recursos são recursos da Amazon Virtual Private Cloud (Amazon VPC)?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Controle de versão do S3", correta: true},
            {titulo: "Regras de ciclo de vida do S3", correta: false},
            {titulo: "Criptografia em trânsito e em repouso", correta: false},
            {titulo: "Log de acesso ao servidor", correta: false},

        ]
    },

    {
        titulo: "Pergunta 56",
        descricao: "Qual dos itens a seguir é um princípio de design recomendado para a arquitetura da Nuvem AWS?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Evite a arquitetura monolítica segmentando cargas de trabalho.", correta: true},
            {titulo: "Projete componentes fortemente acoplados.", correta: false},
            {titulo: "Faça grandes alterações em menos iterações para reduzir as chances de falha.", correta: false},
            {titulo: "Crie um único componente de aplicativo que possa lidar com toda a funcionalidade do aplicativo.", correta: false},

        ]
    },

    {
        titulo: "Pergunta 57",
        descricao: "Uma empresa precisa instalar um aplicativo em um contêiner do Docker.  Qual serviço da AWS elimina a necessidade de provisionar e gerenciar os hosts de contêiner?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon FSx para servidor de arquivos do Windows", correta: false},
            {titulo: "Amazon Elastic Container Service (Amazon ECS)", correta: false},
            {titulo: "AWS Fargate", correta: true},
            {titulo: "Amazon EC2", correta: false},

        ]
    },

    {
        titulo: "Pergunta 58",
        descricao: "Qual é a quantidade total por objeto para armazenamento oferecida pelo Amazon S3?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "100MB", correta: false},
            {titulo: "Ilimitado", correta: false},
            {titulo: "5 TB", correta: true},
            {titulo: "5 GB", correta: false},

        ]
    },

    {
        titulo: "Pergunta 59",
        descricao: "Uma empresa tem uma carga de trabalho que será executada continuamente por 1 ano. A carga de trabalho não pode tolerar interrupções de serviço. Qual opção de compra do Amazon EC2 será MAIS econômica?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Instâncias reservadas iniciais parciais", correta: false},
            {titulo: "Instâncias dedicadas", correta: false},
            {titulo: "Instâncias sob demanda", correta: false},
            {titulo: "Todas as instâncias reservadas iniciais", correta: true},

        ]
    },

    
    {
        titulo: "Pergunta 60",
        descricao: "Qual dos itens a seguir é um componente da infraestrutura global da AWS?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon Lightsail", correta: false},
            {titulo: "Regiões da AWS", correta: true},
            {titulo: "Amazon Alexa", correta: false},
            {titulo: "Organizações da AWS", correta: false},

        ]
    },


    {
        titulo: "Pergunta 61",
        descricao: "",
        pergunta: "Quais serviços ou recursos da AWS fornecem soluções de recuperação de desastres para instâncias do Amazon EC2? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Shield", correta: false},
            {titulo: "Amazon GuardDuty", correta: false},
            {titulo: "Reserved Instances", correta: false},
            {titulo: "EC2 Amazon Machine Images (AMIs)", correta: true},
            {titulo: "Amazon Elastic Block Store (Amazon EBS) snapshots", correta: true},
            
        ]
    },

    {
        titulo: "Pergunta 62",
        descricao: "",
        pergunta: "Uma grande organização tem uma única conta da AWS. Quais são as vantagens de reconfigurar a conta única em várias contas da AWS? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "O Amazon QuickSight oferece acesso a uma ferramenta de custo que fornece recomendações específicas do aplicativo para ambientes executados em várias contas.", correta: false},
            {titulo: "A transição de objetos do Amazon S3 para o Amazon S3 Glacier em contas separadas da AWS será mais barata.", correta: false},
            {titulo: "Permite o isolamento administrativo entre diferentes cargas de trabalho.", correta: true},
            {titulo: "Os descontos podem ser aplicados trimestralmente enviando casos no Console de Gerenciamento da AWS.", correta: false},
            {titulo: "Ter várias contas reduz os riscos associados a atividades maliciosas direcionadas a uma única conta.", correta: true},
            
        ]
    },

    {
        titulo: "Pergunta 63",
        descricao: "Uma empresa hospeda um aplicativo em uma instância do Amazon EC2. A instância do EC2 precisa acessar vários recursos da AWS, incluindo o Amazon S3 e o Amazon DynamoDB. Qual é a solução operacionalmente mais eficiente para delegar permissões?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Crie um usuário do IAM e use sua chave de acesso e chave de acesso secreta no aplicativo.", correta: false},
            {titulo: "Crie uma função do IAM com as permissões necessárias. Anexe a função à instância do EC2.", correta: true},
            {titulo: "Crie um usuário do IAM e use sua chave de acesso e chave de acesso secreta para criar um perfil da CLI na instância do EC2", correta: false},
            {titulo: "Crie uma função do IAM com as permissões necessárias. Anexe a função ao usuário administrativo do IAM.", correta: false},

        ]
    },

    {
        titulo: "Pergunta 64",
        descricao: "Uma empresa de varejo migrou recentemente seu site para a AWS. A empresa quer garantir que está protegida contra ataques de injeção de SQL. O site usa um Application Load Balancer para distribuir o tráfego para várias instâncias do Amazon EC2. Qual serviço ou recurso da AWS pode ser usado para criar uma regra personalizada que bloqueia ataques de injeção de SQL?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Grupos de segurança", correta: false},
            {titulo: "AWS WAF.", correta: true},
            {titulo: "ACLs de rede", correta: false},
            {titulo: "AWS Shield", correta: false},

        ]
    },

    {
        titulo: "Pergunta 65",
        descricao: "",
        pergunta: "Quais deveres são de responsabilidade de uma empresa que está usando o AWS Lambda? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Correção do sistema operacional", correta: false},
            {titulo: "A transição de objetos do Amazon S3 para o Amazon S3 Glacier em contas separadas da AWS será mais barata.", correta: false},
            {titulo: "Segurança dentro do código", correta: true},
            {titulo: "Escrita e atualização de código", correta: true},
            {titulo: "Atualização de Fimeware do equipamentos", correta: false},
            
            
        ]
    },




   ];