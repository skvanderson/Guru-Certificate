const questoes =
   [
    {
        titulo: "Pergunta 01",
        descricao: "Uma empresa implementou uma estratégia de múltiplas contas na AWS ultilizando o AWS ControlTower. A Empresa forneceu contas AWS individuas para cada um de seus desenvolvedores. A empresa desja implementar controles para limitar os custos de recursos AWS que os desenvolvedores posssam gerar. Qual solução atenderá a esse requisito com menor esforço operacional",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Instruir cada desenvolvedor a marcar todos os seus recursos com uma tag que tenha uma chave de Cost Center e um valor com o nome do desenvolvedor. Usar a regra gerenciada do AWS Config required-tags para verificar a tag. Criar uma função AWS Lambda para encerrar recursos que não possuem a tag. Configurar o AWS Cost Explorer para enviar um relatório diário a cada desenvolvedor para monitorar seus gastos.", correta: false},
            {titulo: "Usar o AWS Cost Explorer para monitorar e relatar os custos de cada conta de desenvolvedor. Configurar o Cost Explorer para enviar um relatório diário a cada desenvolvedor para monitorar seus gastos. Usar a AWS Cost Anomaly Detection para detectar gastos anômalos e fornecer alertas.", correta: false},
            {titulo: "Usar AWS Budgets para estabelecer orçamentos para cada conta de desenvolvedor. Configurar alertas de orçamento para valores reais e previstos para notificar os desenvolvedores quando excederem ou estiverem prestes a exceder seu orçamento designado. Usar ações do AWS Budgets para aplicar uma política DenyAll à função IAM do desenvolvedor para impedir que recursos adicionais sejam lançados quando o orçamento designado for atingido.'", correta: true},
            {titulo: "Usar o AWS Service Catalog para permitir que os desenvolvedores lancem recursos dentro de uma faixa de custo limitada. Criar funções AWS Lambda em cada conta AWS para parar recursos em execução no final de cada dia de trabalho.", correta: false},
        ]
    },

    {
        titulo: "Pergunta 02",
        descricao: "Uma empresa está desenvolvendo um aplicativo de bate-papo que será implantado na AWS. O aplicativo armazena mensagens usando um modelo de dados de chave-valor. Os grupos de usuários geralmente leem mensagens várias vezes. Um arquiteto de soluções deve selecionar uma solução de baco de dados que seja escalável para uma alta taxa de leitura e entrre de mensagens com latência de microssegundos. Qual Soulução de de banco de dados atenderá a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Implante o Amazon Neptune com Amazon Elasticache para Memcached.", correta: false},
            {titulo: "Implante o Amazon Aurora com Amazon Elasticache para Memcached.", correta: false},
            {titulo: "Implante o Amazon Neptune com réplica do Amazon para lidar com pares de chaves.", correta: false},
            {titulo: "Implante o Amazon DynamoDB com DynamoDB Acecelerator(DAX.", correta: true},
        ]
    },

    {
        titulo: "Pergunta 03",
        descricao: "Um arquiteto de soluções deve projetar uma solução para garantir que todos os volumes Amazon EBS recém-criados sejam criptografados por padrão. A solução também deve impedir a criação de volumes EBS não criptografados. Qual solução atenderá a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configure os atributos da conta EC2 para sempre criptografar novos volumes EBS.", correta: false},
            {titulo: "Use o AWS Config. Configure o identificador encrypted-volumes. Aplique a chave padrão do AWS Key Management Service (AWS KMS)", correta: true},
            {titulo: "Configure o AWS Systems Manager para criar cópias criptografadas dos volumes EBS. Reconfigure as instâncias EC2 para usar os volumes criptografados.", correta: false},
            {titulo: "Crie uma chave gerenciada pelo cliente no AWS Key Management Service (AWS KMS). Configure o AWS Migration Hub para usar a chave quando a empresa migrar workloads.", correta: false},
        ]
    },

    {
        titulo: "Pergunta 04",
        descricao: "Uma empresa de comércio eletrônico quer coletar dados de clickstream dos usuários a partir do site da empresa para análise em tempo real. O site experimenta padrões de tráfego flutuantes ao longo do dia. A empresa precisa de uma solução escalável que possa se adaptar a diferentes níveis de tráfego. Qual solução atenderá a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Use o Amazon Kinesis Data Firehose para capturar os dados de clickstream. Use o AWS Glue para processar os dados em tempo real.e", correta: false},
            {titulo: "Use o Amazon Managed Service for Apache Flink (anteriormente conhecido como Amazon Kinesis Data Analytics) para capturar os dados de clickstream. Use o AWS Lambda para processar os dados em tempo real.", correta: false},
            {titulo: "Use um fluxo de dados no Amazon Kinesis Data Streams em modo on-demand para capturar os dados de clickstream. Use o AWS Lambda para processar os dados em tempo real.", correta: true},
            {titulo: "Use o Amazon Kinesis Video Streams para capturar os dados de clickstream. Use o AWS Glue para processar os dados em tempo real.t", correta: false},
            
        ]
    },

    {
        titulo: "Pergunta 05",
        descricao: "Uma empresa global executa suas cargas de trabalho na AWS. A aplicação da empresa usa buckets do Amazon S3 em várias regiões da AWS para armazenamento e análise de dados sensíveis. A empresa armazena milhões de objetos em vários buckets do S3 diariamente. A empresa deseja identificar todos os buckets do S3 que não têm versionamento habilitado. Qual solução atenderá a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Usar o Amazon S3 Storage Lens para identificar todos os buckets do S3 que não têm versionamento habilitado em todas as regiões.", correta: true},
            {titulo: "Configurar um evento do AWS CloudTrail que tenha uma regra para identificar todos os buckets do S3 que não têm versionamento habilitado em todas as regiões.", correta: false},
            {titulo: "Habilitar o IAM Access Analyzer para o S3 para identificar todos os buckets do S3 que não têm versionamento habilitado em todas as regiões.", correta: false},
            {titulo: "Criar um S3 Multi-Region Access Point para identificar todos os buckets do S3 que não têm versionamento habilitado em todas as regiões.", correta: false},
            
            
        ]
    },

    {
        titulo: "Pergunta 06",
        descricao: "Uma empresa precisa otimizar os custos de armazenamento do Amazon S3 para uma aplicação que gera muitos arquivos que não podem ser recriados. Cada arquivo tem aproximadamente 5 MB e é armazenado no armazenamento padrão do Amazon S3. A empresa deve armazenar os arquivos por 4 anos antes que possam ser excluídos. Os arquivos devem estar imediatamente acessíveis. Os arquivos são frequentemente acessados nos primeiros 30 dias após a criação do objeto, mas raramente são acessados após os primeiros 30 dias. Qual solução atenderá a esses requisitos de forma MAIS econômica?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Criar uma política de ciclo de vida do S3 para mover os arquivos para o S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 dias após a criação do objeto. Excluiros arquivos 4 anos após a criação do objeto.", correta: false},
            {titulo: "Criar uma política de ciclo de vida do S3 para mover os arquivos para o S3 Standard-Infrequent Access (S3 Standard-IA) 30 dias após a criação do objeto. Excluir os arquivos 4 anos após a criação do objeto.", correta: false},
            {titulo: "Criar uma política de ciclo de vida do S3 para mover os arquivos para o S3 Glacier Instant Retrieval 30 dias após a criação do objeto. Excluir os arquivos 4 anos após a criação do objeto.", correta: true},
            {titulo: "Criar uma política de ciclo de vida do S3 para arquivar e realocar-los para o S3 Strandard.", correta: false},
            
        ]
    },

    {
        titulo: "Pergunta 07",
        descricao: "Uma empresa executa sua aplicação de armazenamento crítico na nuvem AWS. A aplicação usa o Amazon S3 em duas regiões da AWS. A empresa deseja que a aplicação envie dados de usuários remotos para o bucket S3 mais próximo sem congestionamento da rede pública. A empresa também quer que a aplicação faça failover com o mínimo de gerenciamento do Amazon S3.",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Implementar um design ativo-ativo entre as duas regiões. Configurar a aplicação para usar os endpoints regionais do S3 mais próximos do usuário.", correta: false},
            {titulo: "Usar uma configuração ativo-passivo com pontos de acesso Multi-Region do S3. Criar um endpoint global para cada uma das regiões.", correta: false},
            {titulo: "Configurar o Amazon S3 para usar pontos de acesso Multi-Region em uma configuração ativo-ativo com um único endpoint global. Configurar a replicação entre regiões do S3.", correta: true},
            {titulo: "Enviar dados dos usuários para os endpoints regionais do S3 mais próximos do usuário. Configurar uma regra de replicação entre contas do S3 para manter os buckets S3 sincronizados.", correta: false},
            
    
        ]
    },

    {
        titulo: "Pergunta 08",
        descricao: "Uma empresa está migrando um data center de sua localização on-premises para a AWS. A empresa tem várias aplicações legadas que estão hospedadas em servidores virtuais individuais. Não é possível fazer alterações nos designs das aplicações. Cada servidor virtual individual atualmente é executado como sua própria instância EC2. Um arquiteto de soluções precisa garantir que as aplicações sejam confiáveis e tolerantes a falhas após a migração para a AWS. As aplicações serão executadas em instâncias Amazon EC2. Qual solução atenderá a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Criar uma Imagem de Máquina da Amazon (AMI) de cada instância da aplicação. Lançar duas novas instâncias EC2 a partir da AMI. Colocar cada instância EC2 em uma Zona de Disponibilidade separada. Configurar um Network Load Balancer que tenha as instâncias EC2 como alvos.", correta: true},
            {titulo: "Criar um grupo de Auto Scaling com um mínimo de uma e um máximo de uma instância. Criar uma Imagem de Máquina da Amazon (AMI) de cada instância da aplicação. Usar a AMI para criar instâncias EC2 no grupo de Auto Scaling. Configurar um Application Load Balancer na frente do grupo de Auto Scaling.", correta: false},
            {titulo: "Usar o AWS Backup para criar um backup horário da instância EC2 que hospeda cada aplicação. Armazenar o backup no Amazon S3 em uma Zona de Disponibilidade separada. Configurar um processo de recuperação de desastres para restaurar a instância EC2 para cada aplicação a partir do seu backup mais recente.", correta: false},
            {titulo: "Usar o AWS Mitigation Hub Refactor Spaces para migrar cada aplicação da instância EC2. Dividir a funcionalidade de cada aplicação em componentes individuais. Hospedar cada aplicação no Amazon Elastic Container Service (Amazon ECS) com um tipo de lançamento AWS Fargate.", correta: false},
            
            
            
            
        ]
    },

    {
        titulo: "Pergunta 09",
        descricao: "Uma empresa quer isolar suas cargas de trabalho criando uma conta AWS para cada carga de trabalho. A empresa precisa de uma solução que gerencie centralmente os componentes de rede para as cargas de trabalho. A solução também deve criar contas com controles de segurança automáticos (guardrails). Qual solução atenderá a esses requisitos com o MENOR esforço operacional?. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Usar o AWS Control Tower para implantar contas. Criar uma conta de rede que tenha uma VPC com sub-redes privadas e sub-redes públicas. Usar o AWS Resource Access Manager (AWS RAM) para compartilhar as sub-redes com as contas de carga de trabalho.", correta: false},
            {titulo: "Usar o AWS Control Tower para implantar contas. Implantar uma VPC com Natgateway e em cada conta de carga de trabalho. Configurar cada VPC para rotear através de uma VPC de inspeção usando um attachment de transit gateway.", correta: false},
            {titulo: "Usar o AWS Organizations para implantar contas. Implantar uma VPC em cada conta de carga de trabalho. Configurar cada VPC para rotear através de uma VPC de inspeção usando um attachment de transit gateway.", correta: false},
            {titulo: "Usar o AWS Organizations para implantar contas. Criar uma conta de rede que tenha uma VPC com sub-redes privadas e sub-redes públicas. Usar o AWS Resource Access Manager (AWS RAM) para compartilhar as sub-redes com as contas de carga de trabalho.", correta: true},
            
            
            
        ]
    },

    
    {
        titulo: "Pergunta 10",
        descricao: "Uma empresa hospeda um site em instâncias Amazon EC2 por trás de um Application Load Balancer (ALB). O site serve conteúdo estático. O tráfego do site está aumentando. A empresa quer minimizar os custos de hospedagem do site. Qual solução atenderá a esses requisitos? A. Mover o site para um bucket do Amazon S3. Configurar uma distribuição do Amazon CloudFront para o bucket S3.",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Mover o site para um bucket do Amazon S3. Configurar um cluster do Amazon ElastiCache para o bucket S3.", correta: false},
            {titulo: "Mover o site para o AWS Amplify. Configurar um ALB para resolver o site Amplify.", correta: false},
            {titulo: "Mover o site para um bucket do Amazon S3. Configurar uma distribuição do Amazon CloudFront para o bucket S3.", correta: true},
            {titulo: "Mover o site para o AWS Amplify. Configurar instâncias EC2 para armazenar em cache do site.", correta: false},
            
            
            
        ]
    },


    {
        titulo: "Pergunta 11",
        descricao: "Uma empresa está implementando uma solução de armazenamento compartilhado para uma aplicação de mídia que a empresa hospeda na AWS. A empresa precisa da capacidade de usar clientes SMB para acessar os dados armazenados. Qual solução atenderá a esses requisitos com o MENOR esforço administrativo?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Criar um AWS Storage Gateway Volume Gateway. Criar um compartilhamento dearquivos que use o protocolo de cliente necessário. Conectar o servidor deaplicação ao compartilhamento de arquivos.", correta: false},
            {titulo: "Criar um AWS Storage Gateway Tape Gateway. Configurar as fitas para usar o Amazon S3. Conectar o servidor de aplicação ao Tape Gateway.", correta: false},
            {titulo: "Criar uma instância Amazon EC2 Windows. Instalar e configurar um papel decompartilhamento de arquivos Windows na instância. Conectar o servidor deaplicação ao compartilhamento de arquivos.", correta: false},
            {titulo: "Criar um sistema de arquivos Amazon FSx for Windows File Server.Conectar o servidor de aplicação ao sistema de arquivos.", correta: true},
            
            
            
        ]
    },


    {
        titulo: "Pergunta 12",
        descricao: "Uma empresa está projetando a estratégia de recuperação de desastres (DR) para sua aplicação de produção. A aplicação é suportada por um banco de dados MySQL em um cluster Amazon Aurora na região us-east-1. A empresa escolheu a região us-west-1 como sua região de DR. O objetivo de ponto de recuperação (RPO) da empresa é de 5 minutos e o objetivo de tempo de recuperação (RTO) é de 20 minutos. A empresa deseja minimizar as mudanças de configuração. Qual solução atenderá a esses requisitos com a MAIOR eficiência operacional?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Converter o cluster Aurora em um banco de dados global Aurora. Configurar o failover gerenciado.", correta: true},
            {titulo: "Criar uma réplica de leitura Aurora em us-west-1 semelhante em tamanho à instância de escrita do cluster Aurora MySQL da aplicação de produção.", correta: false},
            {titulo: "Criar um novo cluster Aurora em us-west-1 com replicação entre regiões.", correta: false},
            {titulo: "Criar um novo cluster Aurora em us-west-1. Usar o AWS Database Migration Service (AWS DMS) para sincronizar ambos os clusters.", correta: false},
            
            
            
        ]
    },

    {
        titulo: "Pergunta 13",
        descricao: "Uma empresa executa um trabalho crítico de análise de dados toda semana antes do primeiro dia útil. O trabalho requer pelo menos 1 hora para completar a análise. O trabalho é stateful e não pode tolerar interrupções. A empresa precisa de uma solução para executar o trabalho na AWS. Qual solução atenderá a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configurar o trabalho para ser executado em uma função AWS Lambda. Criar uma regra agendada no Amazon EventBridge para invocar a função Lambda.", correta: false},
            {titulo: "Configurar um grupo de Auto Scaling de instâncias Amazon EC2 Spot que executam o Amazon Linux. Configurar uma entrada crontab nas instâncias para executar a análise.", correta: false},
            {titulo: "Criar um contêiner para o trabalho. Agendar o trabalho para ser executado como uma tarefa AWS Fargate em um cluster Amazon Elastic Container Service (Amazon ECS) usando o Amazon EventBridge Scheduler.", correta: true},
            {titulo: "Configurar uma tarefa AWS DataSync para executar o trabalho. Configurar uma expressão cron para executar a tarefa em um cronograma.", correta: false},
            
            
            
            
        ]
    },

    {
        titulo: "Pergunta 14",
        descricao: "Uma empresa está migrando cinco aplicações locais para VPCs na AWS Cloud. Cada aplicação está atualmente implantada em redes virtuais isoladas no local e deve ser implantada de forma semelhante na AWS Cloud. As aplicações precisam acessar uma VPC de serviços compartilhados. Todas as aplicações devem ser capazes de se comunicar entre si. Se a migração for bem-sucedida, a empresa repetirá o processo de migração para mais de 100 aplicações. Qual solução atenderá a esses requisitos com o MENOR esforço administrativo?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Implementar uma conexão AWS Direct Connect entre as VPCs das aplicações ea VPC de serviços compartilhados. Adicionar rotas das VPCs das aplicações emsuas sub-redes para a VPC de serviços compartilhados e das sub-redes da VPC deserviços compartilhados para as VPCs das aplicações.", correta: false},
            {titulo: "Implementar um transit gateway com associações entre o transit gateway e as VPCs das aplicações e a VPC de serviços compartilhados. Adicionar rotas entre as VPCs das aplicações em suas sub-redes e das VPCs das aplicações para a VPC de serviços compartilhados através do transit gateway.", correta: true},
            {titulo: "Implementar conexões de peering VPC entre as VPCs das aplicações e a VPCde serviços compartilhados. Adicionar rotas entre as VPCs das aplicações em suassub-redes para a VPC de serviços compartilhados através da conexão de peering.", correta: false},
            {titulo: "Implementar túneis VPN entre as VPCs das aplicações e a VPC de serviços compartilhados. Adicionar rotas entre as VPCs das aplicações em suas sub-redespara a VPC de serviços compartilhados.", correta: false},
            
            
        ]
    },


    {
        titulo: "Pergunta 15",
        descricao: "",
        pergunta: "Uma empresa utiliza um banco de dados Microsoft SQL Server. As aplicações da empresa estão conectadas ao banco de dados. A empresa quer migrar para um banco de dados Amazon Aurora PostgreSQL com mudanças mínimas no código da aplicação. Qual combinação de etapas atenderá a esses requisitos? (Escolha duas.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Habilite o Babelfish no Aurora PostgreSQL para executar as consultas SQL das aplicações.", correta: true},
            {titulo: "Use a AWS Schema Conversion Tool (AWS SCT) para reescrever as consultas SQL nas aplicações.", correta: false},
            {titulo: "Use o Amazon RDS Proxy para conectar as aplicações ao Aurora PostgreSQL.", correta: false},
            {titulo: "Migre o esquema do banco de dados e os dados usando a AWS Schema Conversion Tool (AWS SCT) e o AWS Database Migration Service (AWS DMS).", correta: true},
            {titulo: "Use o AWS Database Migration Service (AWS DMS) para reescrever as consultas SQL nas aplicações.", correta: false},
        ]
    },


    {
        titulo: "Pergunta 16",
        descricao: "Uma empresa executa cargas de trabalho na AWS Cloud. A empresa deseja coletar centralmente dados de segurança para avaliar a segurança em toda a empresa e melhorar a proteção das cargas de trabalho. Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento? Qual serviço da AWS a empresa deve usar para atender a esse requisito?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configurar um data lake no AWS Lake Formation. Utilizar crawlers do AWS Glue para ingestão dos dados de segurança no data lake.", correta: false},
            {titulo: "Configurar uma função AWS Lambda para coletar os dados de segurança no formato .csv. Fazer upload dos dados para um bucket do Amazon S3.)", correta: false},
            {titulo: "Configurar uma instância de replicação do AWS Database Migration Service(AWS DMS) para carregar os dados de segurança em um cluster do Amazon RDS.", correta: false},
            {titulo: "Configurar um data lake no Amazon Security Lake para coletar os dados de segurança. Fazer upload dos dados para um bucket do Amazon S3.", correta: true},
            
            
        ]
    },

    {
        titulo: "Pergunta 17",
        descricao: "Uma empresa está migrando suas cargas de trabalho para a AWS. A empresa possui dados sensíveis e críticos em bancos de dados relacionais no local que rodam em instâncias SQL Server. A empresa deseja usar a AWS Cloud para aumentar a segurança e reduzir a sobrecarga operacional para os bancos de dados. Qual solução atenderá a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: " Migrar os bancos de dados para instâncias Amazon EC2. Utilizar uma chave gerenciada pela AWS Key Management Service (AWS KMS) para criptografia.", correta: false},
            {titulo: "AWS Organizations", correta: true},
            {titulo: "Migrar os dados para um bucket do Amazon S3. Utilizar o Amazon Macie para garantir a segurança dos dados.", correta: false},
            {titulo: "Migrar os bancos de dados para uma tabela do Amazon DynamoDB. Utilizar o Amazon CloudWatch Logs para garantir a segurança dos dados.", correta: false},
            
            
        ]
    },

    {
        titulo: "Pergunta 18",
        descricao: "",
        pergunta: "Uma empresa deseja usar o Amazon Elastic Container Service (Amazon ECS) para executar sua aplicação local em um ambiente híbrido. A aplicação atualmente é executada em containers no local. A empresa precisa de uma solução de container única que possa escalar em um ambiente local, híbrido ou na nuvem. A empresa deve executar novos contêineres de aplicação na AWS Cloud e deve usar um balanceador de carga para tráfego HTTP. Quais combinações de ações atenderão a esses requisitos? (Escolha duas.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configurar um cluster ECS que use o tipo de lançamento AWS Fargate. Usar Fargate para os containers de aplicação tanto na nuvem quanto no local.", correta: false},
            {titulo: "Configurar um cluster ECS que use o tipo de lançamento AWS Fargate para os containers de aplicação na nuvem. Usar um tipo de lançamento externo Amazon ECS Anywhere para os containers de aplicação no local.", correta: true},
            {titulo: "Configurar um Network Load Balancer para serviços ECS na nuvem.", correta: false},
            {titulo: "Configurar um Application Load Balancer para serviços ECS na nuvem.", correta: true},
            {titulo: "Configurar um cluster ECS que use o tipo de lançamento Amazon EC2 para os containers de aplicação na nuvem. Usar Amazon ECS Anywhere com um tipo de lançamento AWS Fargate para os containers de aplicação no local.", correta: false},
        ]
    },

    {
        titulo: "Pergunta 19",
        descricao: "Uma empresa deseja migrar uma aplicação para a AWS. A empresa quer aumentar a disponibilidade atual da aplicação. A empresa deseja utilizar o AWS WAF na arquitetura da aplicação. Qual solução atenderá a esses requisitos",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Criar um grupo de Auto Scaling que contenha várias instâncias Amazon EC2 que hospedam a aplicação em duas Zonas de Disponibilidade. Configurar um Application Load Balancer (ALB) e definir o grupo de Auto Scaling como o alvo. Conectar um WAF ao ALB.", correta: true},
            {titulo: "Criar um grupo de colocação em cluster que contenha várias instâncias Amazon EC2 que hospedam a aplicação. Configurar um Application Load Balancer e definir as instâncias EC2 como os alvos. Conectar um WAF ao grupo de colocação.", correta: false},
            {titulo: "Criar duas instâncias Amazon EC2 que hospedam a aplicação em duas Zonas de Disponibilidade. Configurar as instâncias EC2 como os alvos de um Application Load Balancer (ALB). Conectar um WAF ao ALB.", correta: false},
            {titulo: "Criar um grupo de Auto Scaling que contenha várias instâncias Amazon EC2 que hospedam a aplicação em duas Zonas de Disponibilidade. Configurar umApplication Load Balancer (ALB) e definir o grupo de Auto Scaling como o alvo. Conectar um WAF ao grupo de Auto Scaling.", correta: false},
            
        ]
    },

    
    {
        titulo: "Pergunta 20",
        descricao: "Uma empresa gerencia um data lake em um bucket do Amazon S3 ao qual numerosas aplicações têm acesso. O bucket S3 contém um prefixo único para cada aplicação. A empresa deseja restringir cada aplicação ao seu prefixo específico e ter controle granular sobre os objetos sob cada prefixo. Qual solução atenderá a esses requisitos com o MENOR overhead operacional?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Replicar os objetos no bucket S3 para novos buckets S3 para cada aplicação.Criar pontos de acesso dedicados do S3 para cada aplicação.", correta: false},
            {titulo: "Replicar os objetos no bucket S3 para novos buckets S3 para cada aplicação.Criar regras de replicação por prefixo.", correta: false},
            {titulo: "Criar um trabalho de Operações em Lote do S3 para definir as permissões ACL para cada objeto no bucket S3.", correta: false},
            {titulo: "Criar pontos de acesso dedicados do S3 e políticas de ponto de acessopara cada aplicação.", correta: true},
            
            
        ]
    },

    {
        titulo: "Pergunta 21",
        descricao: "Uma empresa possui uma aplicação que os clientes usam para fazer upload de imagens para um bucket do Amazon S3. Todas as noites, a empresa lança um Amazon EC2 Spot Fleet que processa todas as imagens recebidas naquele dia. O processamento de cada imagem leva 2 minutos e requer 512 MB de memória. Um arquiteto de soluções precisa alterar a aplicação para processar as imagens quando elas são carregadas. Qual alteração atenderá a esses requisitos de forma mais econômica?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Usar Notificações de Evento do S3 para escrever uma mensagem com detalhesda imagem em uma fila do Amazon Simple Queue Service (Amazon SQS). Configurar uma instância EC2 Reserved Instance para ler as mensagens da fila e processar as imagens.", correta: false},
            {titulo: "Usar Notificações de Evento do S3 para publicar uma mensagem com detalhes da imagem em um tópico do Amazon Simple Notification Service (Amazon SNS). Configurar uma instância de contêiner no Amazon Elastic Container Service (Amazon ECS) para se inscrever no tópico e processar as imagens.", correta: false},
            {titulo: "Usar Notificações de Evento do S3 para publicar uma mensagem com detalhes da imagem em um tópico do Amazon Simple Notification Service (Amazon SNS). Configurar uma aplicação AWS Elastic Beanstalk para se inscrever no tópico e processar as imagens.", correta: false},
            {titulo: "Usar Notificações de Evento do S3 para escrever uma mensagem com detalhes da imagem em uma fila do Amazon Simple Queue Service (Amazon SQS). Configurar uma função AWS Lambda para ler as mensagens da fila e processar as imagens.", correta: true},
            
            
        ]
    },

    {
        titulo: "Pergunta 22",
        descricao: "Uma empresa possui um aplicativo de negócios local que gera centenas de arquivos todos os dias. Esses arquivos são armazenados em um compartilhamento de arquivos SMB e requerem uma conexão de baixa latência com os servidores de aplicativos. Uma nova política da empresa exige que todos os arquivos gerados pelo aplicativo sejam copiados para a AWS. Já existe uma conexão VPN para a AWS. A equipe de desenvolvimento de aplicativos não tem tempo para fazer as modificações de código necessárias para mover o aplicativo para a AWS. Qual serviço um arquiteto de soluções deve recomendar para permitir que o aplicativo copie arquivos para a AWS?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon Elastic File System (Amazon EFS)", correta: false},
            {titulo: "AWS Snowball", correta: false},
            {titulo: "Amazon FSx for Windows File Server", correta: false},
            {titulo: " AWS Storage Gateway", correta: true},
        ]
    },

    
    {
        titulo: "Pergunta 23",
        descricao: "",
        pergunta: "Um arquiteto de soluções está implantando um aplicativo de análise de documentos usando um bucket S3 para armazenamento de documentos. O design da infraestrutura precisa prevenir a exclusão acidental de documentos e também manter todas as versões anteriores dos documentos. Os documentos precisam ser acessíveis pelos usuários do aplicativo para que possam baixar, fazer upload e atualizar os documentos. Quais das seguintes ações devem ser tomadas para atender a esses requisitos? (Escolha duas.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Ativar uma ACL de bucket de leitura somente", correta: false},
            {titulo: "Ativar exclusão com MFA no bucket.", correta: true},
            {titulo: "Ativar a versão no bucket.", correta: true},
            {titulo: "Quando a empresa precisa adicionar usuários a grupos do IAM", correta: false},
            {titulo: "Criptografar o bucket usando o AWS KMS", correta: false},
        ]
    },

    {
        titulo: "Pergunta 24",
        descricao: "Uma grande organização empresarial está revisando uma migração recente de um aplicativo de três camadas para uma VPC. A equipe de segurança descobriu que o princípio do menor privilégio não está sendo aplicado às regras de entrada e saída dos grupos de segurança do Amazon EC2 entre as diferentes camadas do aplicativo. Como o princípio do menor privilégio pode ser melhor implementado neste cenário?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Criar regras de grupo de segurança usando o ID da instância como origem ou destino.", correta: false},
            {titulo: "Criar regras de grupo de segurança usando os blocos CIDR da VPC como origem ou destino.", correta: false},
            {titulo: "Criar regras de grupo de segurança usando o ID do grupo de segurança como origem ou destino.", correta: true},
            {titulo: "Criar regras de grupo de segurança usando os blocos CIDR da sub-rede como origem ou destino.", correta: false},
           
            
            
        ]
    },

    {
        titulo: "Pergunta 25",
        descricao: "",
        pergunta: "Uma grande empresa deseja criar um aplicativo de recursos humanos que armazenará os dados dos funcionários em um relacionamento estruturado hierarquicamente. A empresa precisa de uma solução altamente eficiente e com baixa latência para lidar com o grande volume de consultas esperado para os dados dos funcionários. A solução deve proteger quaisquer dados sensíveis dos funcionários. A empresa também precisa receber notificações mensais por e-mail se houver alguma informação financeira sensível presente nos dados dos funcionários armazenados. Qual combinação de etapas um arquiteto de soluções deve tomar para atender a esses requisitos? (Escolha duas.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Usar o Amazon Redshift para armazenar os dados dos funcionários em hierarquias. Descarregar os dados para o Amazon S3 todo mês.", correta: false},
            {titulo: "Configurar o Amazon Macie para a conta da AWS. Integrar o Macie com o Amazon EventBridge para enviar eventos mensais para a AWS Lambda.", correta: false},
            {titulo: "Usar o Amazon DynamoDB para armazenar os dados dos funcionários em hierarquias. Exportar os dados para o Amazon S3 todo mês.", correta: true},
            {titulo: "Usar o Amazon Athena para analisar os dados dos funcionários no Amazon S3. Integrar o Athena com o Amazon QuickSight para publicar painéis de análise e compartilhar os painéis com os usuários.", correta: false},
            {titulo: "Configurar o Amazon Macie para a conta da AWS. Integrar o Macie com o Amazon EventBridge para enviar notificações mensais por meio de uma assinatura do Amazon Simple Notification Service (Amazon SNS).", correta: true},
        ]
    },

    {
        titulo: "Pergunta 26",
        descricao: "Uma organização está implementando novas políticas de retenção de dados para todos os seus bancos de dados que rodam em instâncias do Amazon RDS. A organização precisa reter backups diários por um mínimo de 2 anos. Esses backups devem ser consistentes e disponíveis para restaurar os bancos de dados, se necessário. Qual opção um arquiteto de soluções deve recomendar para atender a esses requisitos com o mínimo esforço operacional?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Criar um cofre de backup no AWS Backup para reter os backups do RDS. Criar um novo plano de backup com uma programação diária e um período de expiração de 2 anos após a criação. Atribuir as instâncias do RDS ao plano de backup.", correta: true},
            {titulo: "Configurar uma janela de backup para as instâncias do RDS para snapshots diários. Atribuir uma política de retenção de snapshots de 2 anos para cada instância do RDS. Usar o Amazon Data Lifecycle Manager (Amazon DLM) para agendar as exclusões de snapshots.", correta: false},
            {titulo: "Configurar logs de transações do banco de dados para serem automaticamente salvos no Amazon CloudWatch Logs com uma expiração.", correta: false},
            {titulo: "Configurar uma tarefa de replicação do AWS Database Migration Service (AWS DMS). Implantar uma instância de replicação e configurar uma tarefa de captura de dados de mudança (CDC) para transmitir as mudanças do banco de dados para o Amazon S3 como destino. Configurar políticas de ciclo de vida do S3 para excluir ossnapshots após 2 anos.", correta: false},
           
        ]
    },


    {
        titulo: "Pergunta 27",
        descricao: "Uma empresa de mídia fornece um site dinâmico a partir de um pool de instâncias do Amazon EC2, com um Application Load Balancer (ALB) na frente. O site precisa oferecer suporte a clientes ao redor do mundo em vários idiomas. A arquitetura do site está rodando na região us-east-2 e está apresentando alta latência de requisição para usuários que estão em outras partes do mundo. O site precisa processar solicitações com baixa latência, independentemente da localização do usuário final. Devido a preocupações orçamentárias, a empresa de mídia não quer construir sua arquitetura atual em várias regiões. Qual opção você recomendaria para satisfazer esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configurar uma distribuição do Amazon CloudFront com o ALB como origem. Configurar as configurações de comportamento de cache para fazer cache com base no cabeçalho de solicitação HTTP Accept-Language", correta: true},
            {titulo: "Substituir a arquitetura existente por um site que seja servido a partir de umbucket do Amazon S3. Configurar uma distribuição do Amazon CloudFront com o bucket do S3 como origem. Configurar as configurações de comportamento de cache para fazer cache com base no cabeçalho de solicitação Accept-Language.", correta: false},
            {titulo: "Criar uma API do Amazon API Gateway que está integrada com o ALB. Configurar a API para usar o tipo de integração HTTP. Configurar um estágio do API Gateway para habilitar o cache da API com base no cabeçalho de solicitação Accept-Language.", correta: false},
            {titulo: "Iniciar uma instância do EC2 em cada região adicional e configurar o NGINX para atuar como servidor de cache para essa região. Colocar todas as instâncias do EC2 e o ALB atrás de um conjunto de registros do Amazon Route 53 com uma política de roteamento de geolocalizaçã", correta: false},
           
        ]
    },

    {
        titulo: "Pergunta 28",
        descricao: "Uma empresa executa uma aplicação web simples que está implantada em instâncias do Amazon EC2 na sub-rede privada de uma VPC. Um Balanceador de Carga de Aplicação, configurado nas sub-redes públicas, direciona o tráfego web para as instâncias do EC2 dos servidores de aplicação web. A empresa deseja implementar novas medidas de segurança para restringir o tráfego de entrada do ALB para as instâncias do EC2, ao mesmo tempo em que impede o acesso de qualquer outra origem dentro ou fora da sub-rede privada das instâncias do EC2. Qual opção melhor atende a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configure uma rota em uma tabela de rotas para direcionar o tráfego da internet para os endereços IP privados das instâncias do EC2.", correta: false},
            {titulo: "Mova as instâncias do EC2 para a sub-rede pública. Dê às instâncias do EC2 um conjunto de endereços IP elásticos.", correta: false},
            {titulo: "Configure o grupo de segurança para o ALB para permitir qualquer tráfego TCP em qualquer porta.", correta: false},
            {titulo: "Configure o grupo de segurança para as instâncias do EC2 para permitir apenas o tráfego que vem do grupo de segurança para o ALB.", correta: true},
        ]
    },

    {
        titulo: "Pergunta 29",
        descricao: "Uma startup está migrando servidores web baseados em Linux de sua localização no escritório para a AWS. Os servidores web devem acessar arquivos em um armazenamento de arquivos compartilhado para algumas imagens do site. A empresa não pode fazer alterações na aplicação. Como arquiteto de soluções, qual ação melhor atenderia a esses requisitos",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configurar uma distribuição Amazon CloudFront com um bucket Amazon S3como origem.", correta: false},
            {titulo: "Criar um sistema de arquivos do Amazon Elastic File System (Amazon EFS). Montar o sistema de arquivos do EFS em todos os servidores web.", correta: true},
            {titulo: "Criar um bucket Amazon S3 Standard com acesso aos servidores web.", correta: false},
            {titulo: "Configurar um volume Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp3). Montar o volume EBS em todos os servidores web.", correta: false},
           
        ]
    },


    {
        titulo: "Pergunta 30",
        descricao: "Uma companhia de seguros possui uma solução de backup de volumes local que atingiu o fim do seu período de garantia e eles estão preocupados com o risco de falha dessa antiga solução de armazenamento de hardware. A empresa deseja utilizar a AWS como parte de uma nova solução de backup. Eles gostariam de manter o acesso local a todos os dados, ao mesmo tempo em que garantem que estejam copiados na AWS. A empresa deseja garantir que os dados enviados para a AWS sejam transferidos de forma segura e que quaisquer novos dados armazenados localmente sejam automaticamente copiados de forma segura para a AWS. Qual solução atende a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Utilize o AWS Snowball para migrar dados da solução local para o Amazon S3. Configure sistemas locais para montar o endpoint S3 do Snowball para fornecer acesso local aos dados.", correta: false},
            {titulo: "Utilize o AWS Snowball Edge para migrar dados da solução local para o Amazon S3. Utilize a interface de arquivo do Snowball Edge para fornecer sistemas locais com acesso local aos dados.", correta: false},
            {titulo: "Utilize o AWS Storage Gateway e configure um gateway de volume em cache. Execute o appliance de software do Storage Gateway localmente e configure uma porcentagem dos dados para serem armazenados em cache localmente. Monte os volumes de armazenamento do gateway para fornecer acesso local aos dados.", correta: false},
            {titulo: "Utilize o AWS Storage Gateway e configure um gateway de volume armazenado. Execute o appliance de software do Storage Gateway localmente e mapeie os volumes de armazenamento do gateway para o armazenamento local. Monte os volumes de armazenamento do gateway para fornecer acesso local aos dados.", correta: true},
           
        ]
    },


    {
        titulo: "Pergunta 31",
        descricao: "Uma equipe de desenvolvimento criou uma nova aplicação que está sendo executada em instâncias Amazon EC2 dentro de uma VPC de desenvolvimento. Um engenheiro de nuvem precisa criar uma nova VPC dentro da mesma conta para alguns novos recursos compartilhados. A nova VPC será associada à VPC de desenvolvimento. O bloco CIDR da VPC para a VPC de desenvolvimento é 192.168.47.0/24. Um novo bloco CIDR é necessário para a nova VPC a ser criada. O bloco CIDR deve ser válido para uma conexão de VPC peering com a VPC de desenvolvimento. Qual é o MENOR bloco CIDR que atende a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "192.168.48/24", correta: false},
            {titulo: "10.0.1.0/28", correta: true},
            {titulo: "172.31.100.0/30", correta: false},
            {titulo: "172.31.100.0/30", correta: false},
             
        ]
    },

    {
        titulo: "Pergunta 32",
        descricao: "Uma empresa de desenvolvimento de aplicativos móveis está executando uma aplicação comercial importante em instâncias EC2 que fazem parte de um grupo de destino associado a um Balanceador de Carga de Aplicativos. As instâncias EC2 são executadas em um grupo de dimensionamento automático e têm conectividade de rede com uma instância de banco de dados Amazon RDS. A equipe de gerenciamento da empresa levantou preocupações com o design atual, uma vez que as instâncias EC2 e a instância de banco de dados estão todas dentro de uma única Zona de Disponibilidade. O arquiteto de soluções da empresa precisa atualizar o design atual para usar uma segunda Zona de Disponibilidade. Qual opção tornará a aplicação comercial importante altamente disponível?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Provisione uma sub-rede em cada Zona de Disponibilidade. Configure o grupo de dimensionamento automático para distribuir as instâncias EC2 em ambas as Zonas de Disponibilidade. Configure a instância de banco de dados com conexões para cada rede", correta: false},
            {titulo: "Provisione duas sub-redes que se estendem por ambas as Zonas de Disponibilidade. Configure o grupo de dimensionamento automático para distribuir as instâncias EC2 em ambas as Zonas de Disponibilidade. Configure a instância de banco de dados com conexões para cada rede.", correta: false},
            {titulo: "Provisione uma sub-rede em cada Zona de Disponibilidade. Configure o grupo de dimensionamento automático para distribuir as instâncias EC2 em ambas as Zonas de Disponibilidade. Configure a instância de banco de dados para implantação Multi-AZ", correta: false},
            {titulo: "Provisione uma sub-rede que se estenda por ambas as Zonas de Disponibilidade. Configure o grupo de dimensionamento automático para distribuir as instâncias EC2 em ambas as Zonas de Disponibilidade. Configure a instância de banco de dados para implantação Multi-AZ.", correta: true},
            
        ]
    },

    {
        titulo: "Pergunta 33",
        descricao: "",
        pergunta: "Uma empresa tem um servidor web em execução em uma instância do Amazon EC2 em uma sub-rede pública com um endereço IP elástico. O grupo de segurança padrão é atribuído à instância do EC2. A Network ACL padrão foi modificada para bloquear todo o tráfego. Um arquiteto de soluções precisa tornar o servidor web acessível de qualquer lugar na porta 443. Qual combinação de etapas realizará essa tarefa? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Crie um grupo de segurança com uma regra para permitir a porta TCP 443 para o destino 0.0.0.0/0.", correta: false},
            {titulo: "Atualize a rede ACL para permitir a porta TCP 443 da fonte 0.0.0.0/0.", correta: true},
            {titulo: "Atualize a Network ACL para permitir a porta TCP de entrada/saída 443 da origem 0.0.0.0/0 e para o destino 0.0.0.0/0.", correta: false},
            {titulo: "Crie um grupo de segurança com uma regra para permitir a porta TCP 443 da fonte 0.0.0.0/0.", correta: true},
            {titulo: "Atualize a rede ACL para permitir a porta TCP de entrada 443 da origem 0.0.0.0/0 e a porta TCP de saída 32768-65535 para o destino 0.0.0.0/0.", correta: false},
        ]
    },

    {
        titulo: "Pergunta 34",
        descricao: "Uma empresa de pesquisa genética precisa migrar 25 TB de dados de um servidor de arquivos Windows local para o Amazon FSx for Windows File Server. A empresa atualmente possui um link de rede de 1 Gbps para a localização do escritório, que é compartilhado entre várias equipes. A empresa está buscando recomendações para um serviço de migração de dados que maximize o desempenho da transferência de dados, mas que seja capaz de controlar a largura de banda da transferência de dados para que as atividades diárias das equipes não sejam negativamente impactadas pela transferência de dados. Devido a razões de conformidade e outros motivos comerciais, a migração de dados só pode ser realizada de segunda a sexta-feira da próxima semana e deve ser concluída dentro desta janela de manutenção planejada. Qual solução AWS atenderia melhor a esses requisitos e completaria a migração de dados na janela planejada?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Data Sync", correta: true},
            {titulo: "AWS Transfer Family", correta: false},
            {titulo: "Amazon FSx File Gateway", correta: false},
            {titulo: "AWS Snowcone", correta: false},
          
            
        ]
    },

    {
        titulo: "Pergunta 35",
        descricao: "",
        pergunta: "Uma empresa precisa armazenar documentos contratuais. Um contrato dura 5 anos. Durante o período de um ano, a empresa deve garantir que os documentos não possam ser substituídos ou excluídos. A empresa precisa criptografar os documentos em repouso e alternar as chaves de criptografia automaticamente todos os anos. Qual combinação de etapas um arquiteto de soluções deve seguir para atender a esses requisitos com a MENOS sobrecarga operacional? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Use criptografia do lado do servidor com chaves de criptografia gerenciadas do Amazon S3 (SSE-S3). Configure a rotação de chaves.", correta: false},
            {titulo: "Use a criptografia do lado do servidor com chaves fornecidas (importadas) pelo cliente do AWS Key Management Service (AWS KMS). Configure a rotação de chaves.", correta: true},
            {titulo: "Usar criptografia do lado do servidor com chaves gerenciadas pelo cliente do AWS Key Management Service (AWS KMS). Configure a rotação de chaves.", correta: false},
            {titulo: "O EC2 tem um acordo de nível de serviço (SLA) de 100%.", correta: false},
            {titulo: "Armazene os documentos no Amazon S3. Use o S3 Object Lock no modo de conformidad", correta: true},
        ]
    },

    {
        titulo: "Pergunta 36",
        descricao: "Um varejista online estabeleceu um novo site de recuperação de desastres em uma região AWS diferente. A empresa precisa sincronizar os dados atualmente armazenados em um serviço de sistema de arquivos de rede gerenciado pela Amazon entre as duas regiões. Qual solução permitirá uma cópia somente leitura dos dados em uma região AWS diferente para atender aos requisitos de recuperação de desastres com o MENOR overhead operacional?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Use AWS DMS", correta: false},
            {titulo: "Configure um servidor SFTP no EC2", correta: false},
            {titulo: "Use dispositivos AWS Snowball", correta: false},
            {titulo: "Use Amazon EFS Replication", correta: true},

        ]
    },

    {
        titulo: "Pergunta 37",
        descricao: "Uma empresa que executa principalmente seus servidores de aplicação local decidiu migrar para a AWS. A empresa quer minimizar a necessidade de escalar seu armazenamento baseado em iSCSI localmente. Somente os dados que foram acessados recentemente precisam permanecer armazenados localmente. Qual solução AWS a empresa deve usar para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Storage Gateway Volume Gateway cached volumes", correta: true},
            {titulo: "AWS Storage Gateway Volume Gateway stored volumes", correta: false},
            {titulo: "AWS Storage Gateway Tape Gateway", correta: false},
            {titulo: "Amazon S3 File Gateway", correta: false},

        ]
    },


    {
        titulo: "Pergunta 38",
        descricao: "Uma empresa vende dados de pesquisa para clientes que realizam análise de aprendizado de máquina sobre eles. Os dados estão na forma de grandes arquivos parquet armazenados em um bucket Amazon S3 na região us-west-1. A empresa permite que os clientes de pesquisa comprem acesso aos conjuntos de dados por meio de um portal online. O portal da web é dimensionado em várias instâncias Amazon EC2 atrás de um Balanceador de Carga de Aplicações. Após a conclusão de uma transação de compra de conjunto de dados, os clientes recebem uma URL assinada do S3 que permite o acesso ao conjunto de dados. Os usuários de pesquisa estão distribuídos pela América do Norte e Austrália. A empresa está buscando soluções para reduzir os custos de transferência de rede, sem introduzir mais latência ou desacelerar o desempenho do download do conjunto de dados para seus clientes. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Modifique a aplicação web para habilitar o streaming dos conjuntos de dados para os usuários finais. Configure a aplicação web para ler os dados do bucket S3 existente. Implemente o controle de acesso diretamente na aplicação", correta: false},
            {titulo: "Configure um segundo bucket S3 na região eu-central-1 com replicação entre regiões do S3 entre os buckets. Direcione as solicitações dos clientes para a região mais próxima. Continue a usar URLs assinadas do S3 para controle de acesso.", correta: false},
            {titulo: "Implemente uma distribuição do Amazon CloudFront com o bucket S3 existente como a origem. Direcione as solicitações dos clientes para a URL do CloudFront. Mude para URLs assinadas do CloudFront para controle de acesso.", correta: true},
            {titulo: "Configure o S3 Transfer Acceleration no bucket S3 existente. Direcione as solicitações dos clientes para o endpoint do S3 Transfer Acceleration. Continue a usar URLs assinadas do S3 para controle de acesso.", correta: false},

        ]
    },

    {
        titulo: "Pergunta 39",
        descricao: "Uma empresa de mídia está desenvolvendo um aplicativo móvel que será hospedado na AWS. As projeções de crescimento da empresa indicam que eles precisam escalar para atender 5 milhões de usuários nos próximos 6 meses. É necessária uma plataforma de aplicativo móvel onde clientes autorizados possam assistir ao conteúdo de mídia da empresa em seus dispositivos móveis. Qual opção atenderia melhor a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Publique o conteúdo em um bucket público do Amazon S3. Use chaves do AWS Key Management Service (AWS KMS) para transmitir o conteúdo.", correta: false},
            {titulo: "Configure uma VPN IPsec entre o aplicativo móvel e o ambiente AWS para transmitir o conteúdo.", correta: false},
            {titulo: "Configure o AWS Client VPN entre o aplicativo móvel e o ambiente AWS para transmitir o conteúdo.", correta: false},
            {titulo: "Use o Amazon CloudFront. Forneça URLs assinadas para transmitir o conteúdo.", correta: true},

        ]
    },

    {
        titulo: "Pergunta 40",
        descricao: "A pequena organização startup tem um banco de dados MySQL localizado nas instalações utilizado pelo seu departamento de recursos humanos. O banco de dados é normalmente utilizado apenas a cada duas semanas para atividades de folha de pagamento. Embora o banco de dados não seja usado com frequência pela equipe de RH, eles precisam que o banco de dados tenha o mínimo de tempo de inatividade para que transações automatizadas importantes possam ocorrer. Um novo administrador de banco de dados está sugerindo migrar esse banco de dados para a AWS. Devido ao crescimento esperado da empresa e às demandas transacionais mais pesadas neste banco de dados para futuros requisitos de recursos humanos, eles prefeririam não escolher um tipo específico de instância, já que o tamanho necessário é muito difícil de prever neste momento, e gostariam de evitar qualquer sobrecarga operacional no futuro para mudar os tipos de instância. Que serviço o arquiteto de soluções da empresa deve recomendar ao administrador de banco de dados para este cenário?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Amazon Aurora MySQL", correta: false},
            {titulo: "Amazon RDS for MySQL", correta: false},
            {titulo: "Amazon Aurora Serverless for MySQL", correta: true},
            {titulo: "Amazon Aurora FlexEngine", correta: false},
            

        ]
    },


    {
        titulo: "Pergunta 41",
        descricao: "Um prédio de armazém possui leitores de crachá de entrada em todos os pontos de acesso em toda a instalação. Quando os crachás de acesso são escaneados, os dispositivos leitores enviam uma mensagem de evento baseada em JSON via HTTPS para registrar quem tentou acessar pontos de entrada específicos no prédio. Como arquiteto de soluções, você deve projetar uma solução robusta para processar esses payloads de mensagem JSON dos sensores. A alta disponibilidade da solução é crítica. Os eventos de acesso ao ponto de entrada devem estar disponíveis para a equipe de segurança da empresa analisar. Qual arquitetura de design de solução o arquiteto de soluções deve recomendar?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Lançar uma instância Amazon EC2 para servir como ponto de extremidade HTTPS e para processar as mensagens. Configure a instância EC2 para salvar os resultados em um bucket do Amazon S3.", correta: false},
            {titulo: "Usar o Amazon Route 53 para direcionar mensagens de sensores recebidas para uma função AWS Lambda. Configure a função Lambda para processar as mensagens e salvar os resultados em uma tabela Amazon DynamoDB.", correta: false},
            {titulo: "Criar um ponto de extremidade HTTPS no Amazon API Gateway. Configurar o ponto de extremidade do API Gateway para invocar uma função AWS Lambda para processar as mensagens e salvar os resultados em uma tabela Amazon DynamoDB.", correta: true},
            {titulo: "Criar um endpoint VPC gateway para o Amazon S3. Configurar uma conexão VPN de Site-to-Site da rede da instalação para a VPC para que os dados do sensor possam ser gravados diretamente em um bucket do S3 através do endpoint VPC.", correta: false},
            

        ]
    },

    {
        titulo: "Pergunta 42",
        descricao: "Uma empresa implantou um aplicativo sem servidor que invoca uma função do AWS Lambda quando novos documentos são carregados em um bucket do Amazon S3. O aplicativo usa a função Lambda para processar os documentos. Após uma recente campanha de marketing, a empresa percebeu que o aplicativo não processava muitos dos documentos. O que um arquiteto de soluções deve fazer para melhorar a arquitetura desse aplicativo?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configurar uma política de replicação de bucket do S3. Organize os documentos no bucket do S3 para processamento posterior.", correta: false},
            {titulo: "Defina o valor de tempo limite do tempo de execução da função Lambda para 15 minutos.", correta: false},
            {titulo: "Criar uma fila Amazon Simple Queue Service (AmazonSQS). Envie as solicitações para a fila. Configure a fila como uma fonte de eventos para o Lambda.", correta: true},
            {titulo: "Implantar uma função Lambda adicional. Equilibre a carga do processamento dos documentos nas duas funções do Lambda.", correta: false},
            

        ]
    },

    

    {
        titulo: "Pergunta 43",
        descricao: `
        Um administrador do Amazon EC2 criou a seguinte política associada a um grupo IAM contendo vários usuários:
        
        {
    "Version": "2023-08-28",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "ec2:TerminateInstances",
            "Resource": "*",
            "Condition": {
                "IpAddress": {
                    "aws:SourceIp": "10.100.100.0/24"
                }
            }
        },
        {
            "Effect": "Deny",
            "Action": "ec2:*",
            "Resource": "*",
            "Condition": {
                "StringNotEquals": {
                    "ec2:Region": "us-east-1"
                }
            }
        }
    ]
}

        Qual solução atenderá a esses requisitos?
    `,
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "os usuários podem encerrar uma instância do EC2 na região us-east-1 quando o IP de origem do usuário for 10.100.100.254", correta: false},
            {titulo: "Os usuários não podem encerrar uma instância do EC2 com o endereço IP 10.100.100.1 na região us-east-1.", correta: false},
            {titulo: "Os usuários podem encerrar uma instância do EC2 com o endereço IP 10.100.100.1 na região us-east-1.", correta: true},
            {titulo: "Os usuários podem encerrar uma instância do EC2 em qualquer região da AWS, exceto us-east-1.", correta: false},
            

        ]
    },

    {
        titulo: "Pergunta 44",
        descricao: "Um aplicativo executado em uma instância do Amazon EC2 na VPC-A precisa acessar arquivos em outra instância do EC2 na VPC-B. Ambas as VPCs estão em contas separadas da AWS. O administrador de rede precisa projetar uma solução para configurar o acesso seguro à instância do EC2 na VPC-B da VPC-A. A conectividade não deve ter um único ponto de falha ou problemas de largura de banda. Qual solução atenderá a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Conecte um gateway privado virtual à VPC-B e configure o roteamento da VPC-A.", correta: false},
            {titulo: "Configure VPC gateway endpoints para a instância do EC2 em execução na VPC-B.", correta: false},
            {titulo: "Crie uma interface virtual privada (VIF) para a instância do EC2 em execução na VPC-B e adicione as rotas apropriadas da VPC-A.", correta: false},
            {titulo: "Configure uma conexão de emparelhamento de VPC entre VPC-A e VPC-B.", correta: true},
            

        ]
    },

    {
        titulo: "Pergunta 45",
        descricao: "",
        pergunta: "Uma empresa precisa criar um cluster do Amazon Elastic Kubernetes Service (Amazon EKS) para hospedar um aplicativo de streaming de mídia digital. O cluster EKS usará um grupo de nós gerenciados com suporte de volumes do Amazon Elastic Block Store (Amazon EBS) para armazenamento. A empresa deve criptografar todos os dados em repouso usando uma chave gerenciada pelo cliente armazenada no AWS Key Management Service (AWS KMS). Qual combinação de ações atenderá a esse requisito com a MENOS sobrecarga operacional? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Crie o cluster EKS. Crie uma função do IAM que tenha uma política que conceda permissão à chave gerenciada pelo cliente. Associe a função ao cluster EKS.", correta: false},
            {titulo: "Use um plug-in do Kubernetes que usa a chave gerenciada pelo cliente para executar a criptografia de dados.", correta: true},
            {titulo: "Após a criação do cluster EKS, localize os volumes EBS. Ative a criptografia usando a chave gerenciada pelo cliente.", correta: false},
            {titulo: "Habilite a criptografia EBS por padrão na região da AWS onde o cluster EKS será criado. Selecione a chave gerenciada pelo cliente como a chave padrão.", correta: false},
            {titulo: " Após a criação do cluster EKS, localize os volumes EBS. Ative a criptografia usando a chave gerenciada pelo cliente.", correta: true},
        ]
    },

    {
        titulo: "Pergunta 46",
        descricao: "Uma empresa está usando o Amazon CloudFront com seu site. A empresa habilitou o log na distribuição do CloudFront e os logs são salvos em um dos buckets do Amazon S3 da empresa. A empresa precisa realizar análises avançadas nos logs e construir visualizações. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Use consultas SQL padrão no AmazonAthena para analisar os logs do Cloud Front no bucket S3. Visualize os resultados com o AWS Glue.", correta: true},
            {titulo: "Use consultas SQL padrão no Amazon Athena para analisar os logs do CloudFront no bucket do S3. Visualize os resultados com o Amazon QuickSight.", correta: false},
            {titulo: "Use consultas SQL padrão no Amazon DynamoDB para analisar os logs do CloudFront no bucket do S3. Visualize os resultados com o Amazon QuickSight.", correta: false},
            {titulo: "Use consultas SQL padrão no Amazon DynamoDB para analisar os logs do CloudFront no bucket do S3. Visualize os resultados com o AWS Glue", correta: false},
            
        ]
    },
    
    {
        titulo: "Pergunta 47",
        descricao: "",
        pergunta: "Uma empresa migrou recentemente seu aplicativo da web para a AWS hospedando novamente o aplicativo em instâncias do Amazon EC2 em uma única região da AWS. A empresa deseja redesenhar sua arquitetura de aplicativos para ser altamente disponível e tolerante a falhas. O tráfego deve atingir todas as instâncias do EC2 em execução aleatoriamente. Qual combinação de etapas a empresa deve seguir para atender estes requisitos? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Iniciar quatro instâncias do EC2: duas instâncias em uma zona de disponibilidade e duas instâncias em outra zona de disponibilidade.", correta: true},
            {titulo: "Iniciar três instâncias do EC2: duas instâncias em uma zona de disponibilidade e uma instância em outra zona de disponibilidade.", correta: false},
            {titulo: "Criar uma política de roteamento de resposta de vários valores do Amazon Route 53.", correta: false},
            {titulo: "Crie uma política de roteamento de failover do Amazon Route 53", correta: false},
            {titulo: "Criar uma política de roteamento ponderada do Amazon Route 53.", correta: true},
        ]
    },

    {
        titulo: "Pergunta 48",
        descricao: "Um aplicativo é executado em instâncias do Amazon EC2 em sub-redes privadas. O aplicativo precisa acessar uma tabela do Amazon DynamoDB. Qual é a maneira MAIS segura de acessar a tabela, garantindo que o tráfego não saia da rede AWS??",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Use um VPC endpoint para DynamoDB.", correta: true},
            {titulo: "Use um gateway NAT em uma sub-rede pública.", correta: false},
            {titulo: "Use o gateway de internet conectado ao VPC.", correta: false},
            {titulo: "Use um gateway NAT em uma sub-rede pública.", correta: false},
            
        ]
    },

    {
        titulo: "Pergunta 49",
        descricao: "Uma empresa está hospedando um aplicativo da web na AWS usando uma única instância do Amazon EC2 que armazena documentos carregados pelo usuário em um volume do Amazon EBS. Para melhor escalabilidade e disponibilidade, a empresa duplicou a arquitetura e criou uma segunda instância EC2 e volume EBS em outra zona de disponibilidade, colocando ambos atrás de um Application Load Balancer. Depois de concluir essa alteração, os usuários relataram que, cada vez que atualizavam o site, podiam ver um subconjunto de seus documentos ou outro, mas nunca todos os documentos ao mesmo tempo. O que um arquiteto de soluções deve propor para garantir que os usuários vejam todos os seus documentos de uma só vez?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Copie os dados para que ambos os volumes do EBS contenham todos os documentos./li>", correta: false},
            {titulo: "Configure o Application Load Balancer para enviar a solicitação para ambos os servidores. Devolva cada documento do servidor correto.", correta: false},
            {titulo: "Configure o Application Load Balancer para direcionar um usuário ao servidor com os documentos.", correta: false},
            {titulo: "Copie os dados de ambos os volumes do EBS para o Amazon EFS. Modifique o aplicativo para salvar novos documentos no Amazon EFS.", correta: true},
            
            

        ]
    },

    {
        titulo: "Pergunta 50",
        descricao: "Uma empresa migrou recentemente um sistema de processamento de mensagens para a AWS. O sistema recebe mensagens em uma fila ActiveMQ em execução em uma instância do Amazon EC2. As mensagens são processadas por um aplicativo consumidor em execução no Amazon EC2. O aplicativo do consumidor processa as mensagens e grava os resultados em um banco de dados MySQL em execução no Amazon EC2. A empresa deseja que esta aplicação seja altamente disponível com baixa complexidade operacional. Qual arquitetura oferece a MAIOR disponibilidade?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Use o Amazon MQ com agentes ativos/em espera configurados em duas zonas de disponibilidade. Adicione uma instância EC2 de consumidor adicional em outra zona de disponibilidade. Replique o banco de dados MySQL para outra zona de disponibilidade", correta: false},
            {titulo: "Use o Amazon MQ com agentes ativos/em espera configurados em duas zonas de disponibilidade. Adicione um grupo de Auto Scaling para as instâncias EC2 do consumidor em duas zonas de disponibilidade. Use o Amazon RDS for MySQL com Multi-AZ ativado", correta: false},
            {titulo: "Adicionar um segundo servidor ActiveMQ a outra zona de disponibilidade. Adicione uma instância EC2 de consumidor adicional em outra zona de disponibilidade. Replique o banco de dados MySQL para outra zona de disponibilidade", correta: false},
            {titulo: "Use o Amazon MQ com agentes ativos/em espera configurados em duas zonas de disponibilidade. Adicione uma instância EC2 de consumidor adicional em outra zona de disponibilidade. Use o Amazon RDS for MySQL com Multi-AZ ativado", correta: true},
            {titulo: "Configure o Amazon Guard Duty para bloquear automaticamente os invasores", correta: false},

        ]
    },


    {
        titulo: "Pergunta 51",
        descricao: "",
        pergunta: "Um arquiteto de soluções deve projetar uma infraestrutura altamente disponível para um site. O site é alimentado por servidores web do Windows que são executados em instâncias do Amazon EC2. O arquiteto de soluções deve implementar uma solução que possa mitigar um ataque DDoS em grande escala originado de milhares de endereços IP. O tempo de inatividade não é aceitável para o site. Quais ações o arquiteto de soluções deve tomar para proteger o site de tal ataque? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Use o AWS Shield Advanced para interromper o ataque DDoS", correta: true},
            {titulo: "Use uma função do AWS Lambda para adicionar automaticamente endereços IP do invasor às ACLs de rede VPC", correta: true},
            {titulo: "Use instâncias spot do EC2 em um grupo de Auto Scaling com uma política de escalabilidade de rastreamento de destino definida para 80% de utilização da CPU", correta: false},
            {titulo: "Configure o site para usar o Amazon Cloud Front para conteúdo estático e dinâmico", correta: false},
            {titulo: "Configure o Amazon Guard Duty para bloquear automaticamente os invasores", correta: false},
            
        ]
    },

    {
        titulo: "Pergunta 52",
        descricao: "Uma empresa tem um aplicativo em execução em instâncias do Amazon EC2. Um arquiteto de soluções padronizou a empresa em uma determinada família de instâncias e vários tamanhos de instâncias com base nas necessidades atuais da empresa. A empresa deseja maximizar a economia de custos para a aplicação nos próximos 3 anos. A empresa precisa ser capaz de alterar a família de instâncias e os tamanhos nos próximos 6 meses com base na popularidade e no uso do aplicativo. Qual solução atenderá a esses requisitos com a MELHOR relação custo-benefício?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Plano de economia de computação", correta: false},
            {titulo: "Instâncias reservadas padrão", correta: false},
            {titulo: "Instâncias reservadas zonais", correta: false},
            {titulo: "Plano de economia de instância EC2", correta: true},
            

        ]
    },


    {
        titulo: "Pergunta 53",
        descricao: "Uma empresa deseja migrar seu aplicativo local para a AWS. O aplicativo produz arquivos de saída que variam em tamanho de dezenas de gigabytes a centenas de terabytes. Os dados do aplicativo devem ser armazenados em uma estrutura de sistema de arquivos padrão. A empresa deseja uma solução que escale automaticamente, seja altamente disponível e exija uma sobrecarga operacional mínima. Qual solução atenderá a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Migrar o aplicativo para ser executado como contêineres no Amazon Elastic Kubernetes Service (Amazon EKS). Use o Amazon Elastic Block Store (Amazon EBS) para armazenamento.", correta: true},
            {titulo: "Migrar o aplicativo para instâncias do Amazon EC2 em um grupo Multi-AZ Auto Scaling. Use o Amazon Elastic File System (Amazon EFS) para armazenamento.", correta: false},
            {titulo: "Migre o aplicativo para ser executado como contêineres no Amazon Elastic Container Service (Amazon ECS). Use o Amazon S3 para armazenamento.", correta: false},
            {titulo: "Migrar o aplicativo para instâncias do Amazon EC2 em um grupo Multi-AZ Auto Scaling. Use o Amazon Elastic Block Store (Amazon EBS) para armazenamento.", correta: false},
            
        ]
    },

    {
        titulo: "Pergunta 54",
        descricao: "Uma empresa usa o Amazon API Gateway para executar um gateway privado com dois APls REST na mesma VPC. O serviço BuyStock RESTfulweb chama o serviço CheckFunds RESTfulweb para garantir que fundos suficientes estejam disponíveis antes que uma ação possa ser comprada. A empresa notou nos logs de fluxo do VPC que o serviço BuyStock RESTfulweb chama o serviço CheckFunds RESTfulweb pela Internet em vez de pelo VPC. Um arquiteto de soluções deve implementar uma solução para que os APls se comuniquem por meio da VPC. Qual solução atenderá a esses requisitos com o MENOS mudanças no código?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Adicione um cabeçalho X-API-Key no cabeçalho HTTP para autorização.", correta: false},
            {titulo: "Adicione uma fila Amazon Simple Queue Service (Amazon SQS) entre os dois APls REST.", correta: false},
            {titulo: "Use um endpoint de gateway.", correta: false},
            {titulo: "Use um endpoint de interface.", correta: true},
            
        ]
    },

    {
        titulo: "Pergunta 55",
        descricao: "Como parte do planejamento orçamentário, a gerência deseja um relatório dos itens faturados da AWS listados por usuário. Os dados serão usados para criar orçamentos de departamento. Um arquiteto de soluções precisa determinar a maneira mais eficiente de obter essas informações de relatório. Qual solução atende a esses requisitos??",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Execute uma consulta com o Amazon Athena para gerar o relatório.", correta: false},
            {titulo: "Crie um relatório no Explorador de custos (Cost Explorer) e baixe o relatório.", correta: true},
            {titulo: "Modifique um orçamento de custo no AWS Budgets para alertar com o Amazon Simple Email Service (Amazon SES).", correta: false},
            {titulo: "Acesse os detalhes da fatura no painel de cobrança e baixe a fatura.", correta: false},

        ]
    },

    {
        titulo: "Pergunta 56",
        descricao: "Uma empresa executa várias cargas de trabalho do Windows na AWS. Os funcionários da empresa usam compartilhamentos de arquivos do Windows hospedados em duas instâncias do Amazon EC2. Os compartilhamentos de arquivos sincronizam dados entre si e mantêm cópias duplicadas. A empresa deseja uma solução de armazenamento altamente disponível e durável que preserve como os usuários atualmente acessam os arquivos. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Estenda o ambiente de compartilhamento de arquivos para o Amazon Elastic File System (Amazon EFS) com uma configuração Multi-AZ. Migre todos os dados para o Amazon EFS.", correta: false},
            {titulo: "Migre todos os dados para o Amazon S3. Configure a autenticação do IAM para que os usuários acessem os arquivos.", correta: false},
            {titulo: "Estenda o ambiente de compartilhamento de arquivos para o Amazon FSx for Windows File Server com uma configuração Multi-AZ. Migre todos os dados para o FSx for Windows File Server.", correta: true},
            {titulo: "Configurar um Amazon S3 File Gateway. Monte o S3 File Gateway nas instâncias existentes do EC2.", correta: false},

        ]
    },

    {
        titulo: "Pergunta 57",
        descricao: "Um arquiteto de soluções precisa armazenar com segurança um nome de usuário e senha de banco de dados que um aplicativo usa para acessar uma instância de banco de dados do Amazon RDS. O aplicativo que acessa o banco de dados é executado em uma instância do Amazon EC2. O arquiteto de soluções deseja criar um parâmetro seguro no armazenamento de parâmetros do AWS Systems Manager. O que o arquiteto de soluções deve fazer para atender a esse requisito?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Crie uma relação de confiança do IAM entre o parâmetro Parameter Store e a instância do EC2. Especifique o Amazon RDS como principal na política de confiança.", correta: false},
            {titulo: "Crie uma política IAM que permita acesso de leitura ao parâmetro Parameter Store. Permita o acesso Decrypt a uma chave do AWS Key Management Service (AWS KMS) usada para criptografar o parâmetro. Atribua esta política do IAM à instância do EC2.", correta: false},
            {titulo: "Crie uma função do IAM que tenha acesso de leitura ao parâmetro Parameter Store. Permita o acesso Decrypt a uma chave do AWS Key Management Service (AWS KMS) usada para criptografar o parâmetro. Atribua esta função do IAM à instância do EC2.", correta: true},
            {titulo: "Crie uma relação de confiança do IAM entre a instância de banco de dados e a instância do EC2. Especifique o Systems Manager como principal na política de confiança.", correta: false},

        ]
    },

    {
        titulo: "Pergunta 58",
        descricao: "Uma empresa está executando uma carga de trabalho de processamento de transações online (OLTP) na AWS. Essa carga de trabalho usa uma instância de banco de dados Amazon RDS não criptografada em uma implantação Multi-AZ. Snapshot diários do banco de dados são obtidos dessa instância. O que um arquiteto de soluções deve fazer para garantir que o banco de dados e os snapshot sejam sempre criptografados no futuro?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Copie os snapshot para um bucket do Amazon S3 criptografado usando criptografia no lado do servidor com chaves gerenciadas (SSE-KMS) do AWS Key Management Service (AWS KMS).", correta: false},
            {titulo: "Copie os snapshots e habilite a criptografia usando o AWS Key Management Service (AWS KMS). Restaure o snapshot criptografado para uma instância de banco de dados existente.", correta: false},
            {titulo: "Crie um novo volume criptografado do Amazon Elastic Block Store (Amazon EBS) e copie os snapshots para ele. Habilite a criptografia na instância de banco de dados.", correta: false},
            {titulo: "Criptografe uma cópia do snapshot de banco de dados mais recente. Substitua a instância de banco de dados existente restaurando o snapshot criptografado.", correta: true},

        ]
    },

    {
        titulo: "Pergunta 59",
        descricao: "Um site de uma empresa usa um armazenamento de instância do Amazon EC2 para seu catálogo de itens. A empresa deseja garantir que o catálogo esteja altamente disponível e armazenado em um local durável. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Mova o catálogo para o Amazon ElastiCache for Redis", correta: true},
            {titulo: "Mova o catálogo para um sistema de arquivos Amazon Elastic File System (Amazon EFS).", correta: false},
            {titulo: "Implante uma instância EC2 maior com um armazenamento de instância maior", correta: false},
            {titulo: "Mova o catálogo do armazenamento de instâncias para o Amazon S3 Glacier Deep Archive", correta: false},
        ]
    },

    
    {
        titulo: "Pergunta 60",
        descricao: "Uma empresa tem um aplicativo da Web de produção no qual os usuários carregam documentos por meio de uma interface da Web ou de um aplicativo móvel. De acordo com um novo requisito regulamentar. novos documentos não podem ser modificados ou excluídos depois de armazenados. O que um arquiteto de soluções deve fazer para atender a esse requisito?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Armazene os documentos carregados em um volume do Amazon Elastic File System (Amazon EFS). Acesse os dados montando o volume no modo somente leitura.", correta: false},
            {titulo: "Armazene os documentos carregados em um bucket do Amazon S3 com S3 Versioning e S3 Object Lock ativados.", correta: true},
            {titulo: "Armazene os documentos carregados em um bucket do Amazon S3. Configure uma política de ciclo de vida do S3 para arquivar os documentos periodicamente.", correta: false},
            {titulo: "Armazene os documentos carregados em um bucket do Amazon S3 com o S3 Versioning ativado. Configure uma ACL para restringir todo o acesso a somente leitura.", correta: false},

        ]
    },


    {
        titulo: "Pergunta 61",
        descricao: "",
        pergunta: "Uma empresa de mídia social permite que os usuários carreguem imagens em seu site. O site é executado em instâncias do Amazon EC2. Durante as solicitações de upload, o site redimensiona as imagens para um tamanho padrão e armazena as imagens redimensionadas no Amazon S3. Os usuários estão enfrentando solicitações de upload lentas para o site. A empresa precisa reduzir o acoplamento dentro do aplicativo e melhorar o desempenho do site. Um arquiteto de soluções deve projetar o processo operacionalmente mais eficiente para uploads de imagens. Qual combinação de ações o arquiteto de soluções deve realizar para atender a esses requisitos? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configure o aplicativo para carregar imagens no S3 Glacier.", correta: false},
            {titulo: "Crie uma regra Amazon EventBridge (Amazon CloudWatch Events) que invoque uma função AWS Lambda em uma programação para redimensionar o upload de imagens.", correta: false},
            {titulo: "Configure o aplicativo para carregar imagens no S3 Glacier.", correta: false},
            {titulo: "Configure o servidor web para carregar as imagens originais no Amazon S3.", correta: true},
            {titulo: "Configurar notificações de eventos S3 para invocar uma função AWS Lambda quando uma imagem é carregada. Use a função para redimensionar a imagem.", correta: true},
            
        ]
    },

    {
        titulo: "Pergunta 62",
        descricao: "",
        pergunta: "Uma empresa implantou um banco de dados no Amazon RDS para MySQL. Devido ao aumento de transações, a equipe de suporte do banco de dados está relatando leituras lentas na instância de banco de dados e recomenda adicionar uma réplica de leitura. Qual combinação de ações um arquiteto de soluções deve realizar antes de implementar essa mudança? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Escolha uma prioridade de failover para a instância de banco de dados de origem", correta: false},
            {titulo: "Crie uma tabela global e especifique as regiões da AWS onde a tabela estará disponível", correta: false},
            {titulo: "Habilite a replicação binlog no nó primário RDS", correta: true},
            {titulo: "Permitir que transações de longa duração sejam concluídas na instância de banco de dados de origem", correta: false},
            {titulo: "Habilite backups automáticos na instância de origem definindo o período de retenção de backup para um valor diferente de 0", correta: true},
            
        ]
    },

    {
        titulo: "Pergunta 63",
        descricao: "Uma empresa hospeda um data lake na AWS. O data lake consiste em dados no Amazon S3 e no Amazon RDS para PostgreSQL. A empresa precisa de uma solução de relatórios que forneça visualização de dados e inclua todas as fontes de dados no data lake. Somente a equipe de gerenciamento da empresa deve ter acesso total a todas as visualizações. O restante da empresa deve ter apenas acesso limitado. Qual solução atenderá a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Crie uma tabela e um crawler do AWS Glue para os dados no Amazon S3. Use o AmazonAthena Federated Query para acessar dados no Amazon RDS for PostgreSQL. Gere relatórios usando o AmazonAthena. Publique os relatórios no Amazon S3. Use as políticas de bucket do S3 para limitar o acesso aos relatórios.", correta: false},
            {titulo: "Crie uma análise no Amazon QuickSight. Conecte todas as fontes de dados e crie novos conjuntos de dados. Publique painéis para visualizar os dados. Compartilhe os painéis com os usuários e grupos apropriados.", correta: true},
            {titulo: "Crie uma análise no Amazon QuickSight. Conecte todas as fontes de dados e crie novos conjuntos de dados. Publique painéis para visualizar os dados. Compartilhe os painéis com as funções apropriadas do IAM.", correta: false},
            {titulo: "Criar uma tabela e crawler do AWS Glue para os dados no Amazon S3. Crie um trabalho de extração, transformação e carregamento (ETL) do AWS Glue para produzir relatórios. Publique os relatórios no Amazon S3. Use as políticas de bucket do S3 para limitar o acesso aos relatórios.", correta: false},

        ]
    },

    {
        titulo: "Pergunta 64",
        descricao: "Uma empresa armazena dados confidenciais em um banco de dados Amazon Aurora PostgreSQL na região ap-southeast-3. O banco de dados é criptografado com uma chave gerenciada pelo cliente AWS Key Management Service (AWS KMS). A empresa foi adquirida recentemente e deve compartilhar com segurança um backup do banco de dados com a conta da AWS da empresa adquirente em ap-southeast-3. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Crie um snapshot do banco de dados. Copie o snapshot para um novo snapshot não criptografado. Compartilhe o novo snapshot com a conta da AWS da empresa adquirente.", correta: false},
            {titulo: "Crie um snapshot do banco de dados. Adicione a conta da AWS da empresa adquirente à política de chaves do KMS. Compartilhe o snapshot com a conta da AWS da empresa adquirente.", correta: true},
            {titulo: "Crie um snapshot de banco de dados que use uma chave KMS gerenciada pela AWS diferente. Adicione a conta da AWS da empresa adquirente ao alias de chave KMS. Compartilhe o snapshot com a conta da AWS da empresa adquirente.", correta: false},
            {titulo: "Crie um snapshot do banco de dados. Copie o snapshot para um novo snapshot não criptografado. Compartilhe o novo snapshot com a conta da AWS da empresa adquirente.", correta: false},

        ]
    },

    {
        titulo: "Pergunta 65",
        descricao: "",
        pergunta: "Uma empresa tem uma arquiterua de aplicativos de duas camadas que é executada em sub-redes públicas e privadas. As instâncias do EC2 que executam o aplicativoweb estão na sub-rede pública e uma instância EC2 para o banco de dados está sendo executada na sub-rde privada. As instâncias do aplicativo web e o banco são executados em uma única zona de disponibilidade(AZ). Que combinação de etadas um arquiteto de soluções deve adotar para fornecer alta disponibilidade para essa arquitetura? (Selecione Duas).",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Crie novas sub-redes públicas e privadas na mesma AZ para facilitar a administração.", correta: false},
            {titulo: "Adicione as instâncias de aplicativos Web existente a um grupo de Auto Scaling por trás de um application Load Balancer", correta: false},
            {titulo: "Crie novas sub-redes públicas e privadas na mesma VPC, cada umaa em uma nova AZ. Crie uma instância de banco de dados Multi-AZ do Amazon RDF nas sub-redes privadas. Migre o contéudo do banco de dados antigo para a nova instância do banco de dados.", correta: true},
            {titulo: "Crie um grupo do amazon EC2 Auto Scaling e do Application Load Balancer que abranja várias AZs para as instâncias de aplicatiovos WEB", correta: true},
            {titulo: "Crie novas Sub-Redes públicas e privadas em uma nova AZ. Crie um banco de dados usando uma instância do EC2 na sub-rede pública na nova AZ. Migue o conteúdo do banco de dados antigo para o novo banco de dados.", correta: false},
            
            
        ]
    },




   ];