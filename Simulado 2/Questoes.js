const questoes = [
    {
        titulo: {
            'pt-BR': "Pergunta 01",
            'en': "Question 01"
        },
        descricao: {
            'pt-BR': "Uma empresa implementou uma estratégia de múltiplas contas na AWS ultilizando o AWS ControlTower. A Empresa forneceu contas AWS individuas para cada um de seus desenvolvedores. A empresa desja implementar controles para limitar os custos de recursos AWS que os desenvolvedores posssam gerar. Qual solução atenderá a esse requisito com menor esforço operacional",
            'en': "A company implemented a multi-account strategy in AWS using AWS Control Tower. The company provided individual AWS accounts for each of its developers. The company wants to implement controls to limit AWS resource costs that developers can generate. Which solution will meet this requirement with the least operational effort?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Instruir cada desenvolvedor a marcar todos os seus recursos com uma tag que tenha uma chave de Cost Center e um valor com o nome do desenvolvedor. Usar a regra gerenciada do AWS Config required-tags para verificar a tag. Criar uma função AWS Lambda para encerrar recursos que não possuem a tag. Configurar o AWS Cost Explorer para enviar um relatório diário a cada desenvolvedor para monitorar seus gastos.",
                    'en': "Instruct each developer to tag all their resources with a Cost Center key and a value with the developer's name. Use the AWS Config managed rule required-tags to verify the tag. Create an AWS Lambda function to terminate resources without the tag. Configure AWS Cost Explorer to send a daily report to each developer to monitor their spending."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar o AWS Cost Explorer para monitorar e relatar os custos de cada conta de desenvolvedor. Configurar o Cost Explorer para enviar um relatório diário a cada desenvolvedor para monitorar seus gastos. Usar a AWS Cost Anomaly Detection para detectar gastos anômalos e fornecer alertas.",
                    'en': "Use AWS Cost Explorer to monitor and report costs for each developer account. Configure Cost Explorer to send a daily report to each developer to monitor their spending. Use AWS Cost Anomaly Detection to detect anomalous spending and provide alerts."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar AWS Budgets para estabelecer orçamentos para cada conta de desenvolvedor. Configurar alertas de orçamento para valores reais e previstos para notificar os desenvolvedores quando excederem ou estiverem prestes a exceder seu orçamento designado. Usar ações do AWS Budgets para aplicar uma política DenyAll à função IAM do desenvolvedor para impedir que recursos adicionais sejam lançados quando o orçamento designado for atingido.",
                    'en': "Use AWS Budgets to set budgets for each developer account. Configure budget alerts for actual and forecasted values to notify developers when they exceed or are about to exceed their designated budget. Use AWS Budgets actions to apply a DenyAll policy to the developer's IAM role to prevent additional resources from being launched when the designated budget is reached."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar o AWS Service Catalog para permitir que os desenvolvedores lancem recursos dentro de uma faixa de custo limitada. Criar funções AWS Lambda em cada conta AWS para parar recursos em execução no final de cada dia de trabalho.",
                    'en': "Use AWS Service Catalog to allow developers to launch resources within a limited cost range. Create AWS Lambda functions in each AWS account to stop running resources at the end of each workday."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 02",
            'en': "Question 02"
        },
        descricao: {
            'pt-BR': "Uma empresa está desenvolvendo um aplicativo de bate-papo que será implantado na AWS. O aplicativo armazena mensagens usando um modelo de dados de chave-valor. Os grupos de usuários geralmente leem mensagens várias vezes. Um arquiteto de soluções deve selecionar uma solução de baco de dados que seja escalável para uma alta taxa de leitura e entrre de mensagens com latência de microssegundos. Qual Soulução de de banco de dados atenderá a esses requisitos?",
            'en': "A company is developing a chat application that will be deployed on AWS. The application stores messages using a key-value data model. User groups typically read messages multiple times. A solutions architect must select a database solution that is scalable for high read and write message rates with microsecond latency. Which database solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Implante o Amazon Neptune com Amazon Elasticache para Memcached.",
                    'en': "Deploy Amazon Neptune with Amazon ElastiCache for Memcached."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Implante o Amazon Aurora com Amazon Elasticache para Memcached.",
                    'en': "Deploy Amazon Aurora with Amazon ElastiCache for Memcached."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Implante o Amazon Neptune com réplica do Amazon para lidar com pares de chaves.",
                    'en': "Deploy Amazon Neptune with Amazon replica to handle key pairs."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Implante o Amazon DynamoDB com DynamoDB Acecelerator(DAX.",
                    'en': "Deploy Amazon DynamoDB with DynamoDB Accelerator (DAX)."
                },
                correta: true
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 03",
            'en': "Question 03"
        },
        descricao: {
            'pt-BR': "Uma empresa está desenvolvendo um aplicativo web que será implantado na AWS. O aplicativo precisa armazenar dados de usuário e preferências. Um arquiteto de soluções deve selecionar uma solução de banco de dados que seja escalável e mantenha a consistência dos dados. Qual solução de banco de dados atenderá a esses requisitos?",
            'en': "A company is developing a web application that will be deployed on AWS. The application needs to store user data and preferences. A solutions architect must select a database solution that is scalable and maintains data consistency. Which database solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon DynamoDB com consistência eventual.",
                    'en': "Use Amazon DynamoDB with eventual consistency."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS com MySQL.",
                    'en': "Use Amazon RDS with MySQL."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon Redshift.",
                    'en': "Use Amazon Redshift."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon Neptune.",
                    'en': "Use Amazon Neptune."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 04",
            'en': "Question 04"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de backup para seus dados críticos na AWS. O sistema deve ser automatizado, confiável e econômico. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a backup system for their critical data in AWS. The system must be automated, reliable, and cost-effective. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar AWS Backup com Amazon S3.",
                    'en': "Use AWS Backup with Amazon S3."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon Glacier para armazenamento de longo prazo.",
                    'en': "Use Amazon Glacier for long-term storage."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EBS snapshots manualmente.",
                    'en': "Use Amazon EBS snapshots manually."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon S3 com lifecycle policies.",
                    'en': "Use Amazon S3 with lifecycle policies."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 05",
            'en': "Question 05"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de monitoramento para suas aplicações na AWS. O sistema deve coletar métricas, gerar alertas e permitir visualização dos dados. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a monitoring system for their applications in AWS. The system must collect metrics, generate alerts, and allow data visualization. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon CloudWatch com dashboards personalizados.",
                    'en': "Use Amazon CloudWatch with custom dashboards."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar AWS Config para monitoramento.",
                    'en': "Use AWS Config for monitoring."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon Inspector para monitoramento.",
                    'en': "Use Amazon Inspector for monitoring."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar AWS Systems Manager para monitoramento.",
                    'en': "Use AWS Systems Manager for monitoring."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 06",
            'en': "Question 06"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de autenticação e autorização para suas aplicações na AWS. O sistema deve ser seguro, escalável e fácil de manter. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement an authentication and authorization system for their applications in AWS. The system must be secure, scalable, and easy to maintain. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Cognito para autenticação e autorização.",
                    'en': "Use Amazon Cognito for authentication and authorization."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar AWS IAM para autenticação e autorização.",
                    'en': "Use AWS IAM for authentication and authorization."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon GuardDuty para autenticação e autorização.",
                    'en': "Use Amazon GuardDuty for authentication and authorization."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar AWS WAF para autenticação e autorização.",
                    'en': "Use AWS WAF for authentication and authorization."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 07",
            'en': "Question 07"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de CDN para distribuir conteúdo estático globalmente. O sistema deve ser de baixa latência e alto desempenho. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a CDN system to distribute static content globally. The system must have low latency and high performance. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon CloudFront com Amazon S3.",
                    'en': "Use Amazon CloudFront with Amazon S3."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon Route 53 para distribuição de conteúdo.",
                    'en': "Use Amazon Route 53 for content distribution."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar AWS Global Accelerator para distribuição de conteúdo.",
                    'en': "Use AWS Global Accelerator for content distribution."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon S3 com transfer acceleration.",
                    'en': "Use Amazon S3 with transfer acceleration."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 08",
            'en': "Question 08"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de pagamentos na AWS. O sistema deve ser seguro, compatível com PCI DSS e altamente disponível. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a payment processing system in AWS. The system must be secure, PCI DSS compliant, and highly available. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar AWS Payment Cryptography com Amazon RDS.",
                    'en': "Use AWS Payment Cryptography with Amazon RDS."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon DynamoDB para armazenamento de dados de pagamento.",
                    'en': "Use Amazon DynamoDB for payment data storage."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon S3 para armazenamento de dados de pagamento.",
                    'en': "Use Amazon S3 for payment data storage."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon Redshift para processamento de pagamentos.",
                    'en': "Use Amazon Redshift for payment processing."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 09",
            'en': "Question 09"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de análise de dados em tempo real na AWS. O sistema deve processar grandes volumes de dados e gerar insights rapidamente. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time data analytics system in AWS. The system must process large volumes of data and generate insights quickly. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Kinesis com Amazon EMR.",
                    'en': "Use Amazon Kinesis with Amazon EMR."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon Redshift para análise em tempo real.",
                    'en': "Use Amazon Redshift for real-time analysis."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon Athena para análise em tempo real.",
                    'en': "Use Amazon Athena for real-time analysis."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon QuickSight para análise em tempo real.",
                    'en': "Use Amazon QuickSight for real-time analysis."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 10",
            'en': "Question 10"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de machine learning na AWS. O sistema deve treinar modelos e fazer previsões em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a machine learning system in AWS. The system must train models and make predictions in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon SageMaker com endpoints em tempo real.",
                    'en': "Use Amazon SageMaker with real-time endpoints."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon Comprehend para machine learning.",
                    'en': "Use Amazon Comprehend for machine learning."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition para machine learning.",
                    'en': "Use Amazon Rekognition for machine learning."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon Polly para machine learning.",
                    'en': "Use Amazon Polly for machine learning."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 11",
            'en': "Question 11"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens na AWS. O sistema deve ser capaz de redimensionar, otimizar e armazenar imagens de forma eficiente. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement an image processing system in AWS. The system must be able to resize, optimize, and store images efficiently. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon S3 com Amazon Lambda para processamento de imagens.",
                    'en': "Use Amazon S3 with Amazon Lambda for image processing."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com EBS para processamento de imagens.",
                    'en': "Use Amazon EC2 with EBS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 12",
            'en': "Question 12"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de vídeos na AWS. O sistema deve ser capaz de transcodificar vídeos em diferentes formatos e qualidades. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a video processing system in AWS. The system must be able to transcode videos into different formats and qualities. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Elastic Transcoder com Amazon S3.",
                    'en': "Use Amazon Elastic Transcoder with Amazon S3."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com FFmpeg para transcodificação.",
                    'en': "Use Amazon EC2 with FFmpeg for transcoding."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de vídeos.",
                    'en': "Use Amazon ECS for video processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de vídeos.",
                    'en': "Use Amazon RDS for video storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 13",
            'en': "Question 13"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de áudio na AWS. O sistema deve ser capaz de converter texto em fala e fala em texto. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement an audio processing system in AWS. The system must be able to convert text to speech and speech to text. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Polly para texto em fala e Amazon Transcribe para fala em texto.",
                    'en': "Use Amazon Polly for text-to-speech and Amazon Transcribe for speech-to-text."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de áudio.",
                    'en': "Use Amazon EC2 with audio libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de áudio.",
                    'en': "Use Amazon ECS for audio processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de áudio.",
                    'en': "Use Amazon RDS for audio storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 14",
            'en': "Question 14"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de documentos na AWS. O sistema deve ser capaz de extrair texto e dados estruturados de documentos. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a document processing system in AWS. The system must be able to extract text and structured data from documents. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Textract com Amazon S3.",
                    'en': "Use Amazon Textract with Amazon S3."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com OCR.",
                    'en': "Use Amazon EC2 with OCR."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de documentos.",
                    'en': "Use Amazon ECS for document processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de documentos.",
                    'en': "Use Amazon RDS for document storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 15",
            'en': "Question 15"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de linguagem natural na AWS. O sistema deve ser capaz de analisar sentimentos e extrair entidades de textos. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a natural language processing system in AWS. The system must be able to analyze sentiments and extract entities from texts. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Comprehend para análise de texto.",
                    'en': "Use Amazon Comprehend for text analysis."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas NLP.",
                    'en': "Use Amazon EC2 with NLP libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de texto.",
                    'en': "Use Amazon ECS for text processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de texto.",
                    'en': "Use Amazon RDS for text storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 16",
            'en': "Question 16"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de reconhecimento facial na AWS. O sistema deve ser capaz de detectar e reconhecer faces em imagens. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a facial recognition system in AWS. The system must be able to detect and recognize faces in images. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition para reconhecimento facial.",
                    'en': "Use Amazon Rekognition for facial recognition."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 17",
            'en': "Question 17"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de fala em tempo real na AWS. O sistema deve ser capaz de transcrever áudio em texto em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time speech processing system in AWS. The system must be able to transcribe audio to text in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Transcribe com streaming.",
                    'en': "Use Amazon Transcribe with streaming."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de áudio.",
                    'en': "Use Amazon EC2 with audio libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de áudio.",
                    'en': "Use Amazon ECS for audio processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de áudio.",
                    'en': "Use Amazon RDS for audio storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 18",
            'en': "Question 18"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de documentos PDF na AWS. O sistema deve ser capaz de extrair texto e dados estruturados de PDFs. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a PDF document processing system in AWS. The system must be able to extract text and structured data from PDFs. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Textract com Amazon S3 para PDFs.",
                    'en': "Use Amazon Textract with Amazon S3 for PDFs."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas PDF.",
                    'en': "Use Amazon EC2 with PDF libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de PDFs.",
                    'en': "Use Amazon ECS for PDF processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de PDFs.",
                    'en': "Use Amazon RDS for PDF storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 19",
            'en': "Question 19"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de reconhecimento de objetos na AWS. O sistema deve ser capaz de detectar e classificar objetos em imagens. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement an object recognition system in AWS. The system must be able to detect and classify objects in images. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition para detecção de objetos.",
                    'en': "Use Amazon Rekognition for object detection."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 20",
            'en': "Question 20"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de reconhecimento de texto na AWS. O sistema deve ser capaz de extrair texto de imagens. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement an optical character recognition system in AWS. The system must be able to extract text from images. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Textract para extração de texto de imagens.",
                    'en': "Use Amazon Textract for text extraction from images."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas OCR.",
                    'en': "Use Amazon EC2 with OCR libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 21",
            'en': "Question 21"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a content moderation system in AWS. The system must be able to detect inappropriate content in images. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition para moderação de conteúdo.",
                    'en': "Use Amazon Rekognition for content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 22",
            'en': "Question 22"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de texto em tempo real na AWS. O sistema deve ser capaz de extrair texto de imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time text detection system in AWS. The system must be able to extract text from images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Textract com streaming para detecção de texto em tempo real.",
                    'en': "Use Amazon Textract with streaming for real-time text detection."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas OCR.",
                    'en': "Use Amazon EC2 with OCR libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 23",
            'en': "Question 23"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de rostos em tempo real na AWS. O sistema deve ser capaz de detectar rostos em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time face detection system in AWS. The system must be able to detect faces in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para detecção de rostos em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time face detection."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 24",
            'en': "Question 24"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de objetos em tempo real na AWS. O sistema deve ser capaz de detectar objetos em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time object detection system in AWS. The system must be able to detect objects in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para detecção de objetos em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time object detection."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 25",
            'en': "Question 25"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 26",
            'en': "Question 26"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 27",
            'en': "Question 27"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 28",
            'en': "Question 28"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 29",
            'en': "Question 29"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 30",
            'en': "Question 30"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 31",
            'en': "Question 31"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 32",
            'en': "Question 32"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 33",
            'en': "Question 33"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 34",
            'en': "Question 34"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 35",
            'en': "Question 35"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 36",
            'en': "Question 36"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 37",
            'en': "Question 37"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 38",
            'en': "Question 38"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 39",
            'en': "Question 39"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 40",
            'en': "Question 40"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 41",
            'en': "Question 41"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 42",
            'en': "Question 42"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 43",
            'en': "Question 43"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 44",
            'en': "Question 44"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 45",
            'en': "Question 45"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 46",
            'en': "Question 46"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 47",
            'en': "Question 47"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 48",
            'en': "Question 48"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 49",
            'en': "Question 49"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 50",
            'en': "Question 50"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 51",
            'en': "Question 51"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 52",
            'en': "Question 52"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 53",
            'en': "Question 53"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 54",
            'en': "Question 54"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 55",
            'en': "Question 55"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 56",
            'en': "Question 56"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 57",
            'en': "Question 57"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 58",
            'en': "Question 58"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 59",
            'en': "Question 59"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 60",
            'en': "Question 60"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 61",
            'en': "Question 61"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 62",
            'en': "Question 62"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 63",
            'en': "Question 63"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 64",
            'en': "Question 64"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {
                titulo: {
                    'pt-BR': "Usar Amazon Rekognition com streaming para moderação de conteúdo em tempo real.",
                    'en': "Use Amazon Rekognition with streaming for real-time content moderation."
                },
                correta: true
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon EC2 com bibliotecas de visão computacional.",
                    'en': "Use Amazon EC2 with computer vision libraries."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon ECS para processamento de imagens.",
                    'en': "Use Amazon ECS for image processing."
                },
                correta: false
            },
            {
                titulo: {
                    'pt-BR': "Usar Amazon RDS para armazenamento de imagens.",
                    'en': "Use Amazon RDS for image storage."
                },
                correta: false
            }
        ]
    },
    {
        titulo: {
            'pt-BR': "Pergunta 65",
            'en': "Question 65"
        },
        descricao: {
            'pt-BR': "Uma empresa precisa implementar um sistema de processamento de imagens de detecção de moderação de conteúdo em tempo real na AWS. O sistema deve ser capaz de detectar conteúdo inadequado em imagens em tempo real. Qual solução atenderá a esses requisitos?",
            'en': "A company needs to implement a real-time content moderation system in AWS. The system must be able to detect inappropriate content in images in real-time. Which solution will meet these requirements?"
        },
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
    }
    // ... Continue with questions 61-65 in the same format
];