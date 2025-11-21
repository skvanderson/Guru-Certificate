export const tutorials = [
  {
    id: 0,
    title: 'Como Criar uma Conta AWS - Guia Completo',
    difficulty: 'Iniciante',
    estimatedTime: '15-20 minutos',
    services: ['Conta AWS'],
    freeTier: 'Novo modelo AWS (após 15/07/2025): Novos clientes recebem $100 USD em créditos gratuitos ao criar uma conta AWS. É possível ganhar até $100 adicionais em créditos ao concluir atividades específicas. Além disso, mais de 30 serviços AWS oferecem limites mensais de uso gratuito (sempre gratuitos).',
    prerequisites: [
      'Endereço de e-mail válido',
      'Cartão de crédito ou débito válido',
      'Telefone celular para verificação',
      'Navegador web atualizado'
    ],
    steps: [
      {
        title: 'Acessar a Página de Inscrição',
        content: [
          'Acesse a página oficial do AWS Free Tier:',
          {
            type: 'link',
            url: 'https://aws.amazon.com/free'
          },
          'Ou visite diretamente: https://aws.amazon.com/pt/free',
          'Clique no botão "Criar conta gratuita" ou "Criar uma conta AWS".',
          {
            type: 'warning',
            title: 'Importante',
            text: 'Certifique-se de estar acessando o site oficial da AWS (aws.amazon.com) para evitar fraudes.'
          }
        ]
      },
      {
        title: 'Preencher Informações da Conta',
        content: [
          'Na primeira etapa, você precisará fornecer:',
          {
            type: 'list',
            items: [
              'Endereço de e-mail: Use um e-mail válido que você tenha acesso',
              'Senha da conta AWS: Crie uma senha forte (mínimo 8 caracteres, com letras maiúsculas, minúsculas, números e símbolos)',
              'Nome da conta AWS: Escolha um nome para identificar sua conta'
            ]
          },
          {
            type: 'code',
            value: 'Dica: Use um gerenciador de senhas para criar e armazenar uma senha segura.'
          },
          'Clique em "Verificar e continuar".',
          'Verifique seu e-mail e digite o código de verificação recebido.'
        ]
      },
      {
        title: 'Fornecer Informações Pessoais',
        content: [
          'Na segunda etapa, você precisa fornecer:',
          {
            type: 'list',
            items: [
              'Tipo de conta: Selecione "Pessoal" (para uso pessoal/estudos) ou "Profissional" (para empresas)',
              'Nome completo: Seu nome como aparece em documentos oficiais',
              'Número de telefone: Número válido para receber códigos de verificação',
              'País/região: Selecione seu país',
              'Endereço: Endereço completo de cobrança (necessário mesmo para conta gratuita)'
            ]
          },
          {
            type: 'warning',
            title: 'Observação',
            text: 'A AWS solicita informações pessoais para verificação de identidade e conformidade. Todas as informações são protegidas e usadas apenas para fins de verificação.'
          },
          'Preencha todos os campos e clique em "Criar conta e continuar".'
        ]
      },
      {
        title: 'Adicionar Método de Pagamento',
        content: [
          'Mesmo sendo uma conta gratuita, a AWS requer um método de pagamento válido:',
          {
            type: 'list',
            items: [
              'Cartão de crédito ou débito: Visa, Mastercard, American Express',
              'Informações do cartão: Número, data de validade, nome no cartão, CVV',
              'Endereço de cobrança: Confirme ou atualize o endereço de cobrança'
            ]
          },
          {
            type: 'warning',
            title: 'Importante sobre o Método de Pagamento',
            text: 'A AWS não cobrará nada durante os primeiros meses se você ficar dentro dos limites do Free Tier e dos créditos de $100 USD. O cartão é usado apenas para verificação de identidade e para cobrança FUTURA caso você exceda os limites gratuitos ou escolha serviços pagos. Você será notificado antes de qualquer cobrança.'
          },
          'Insira os dados do cartão e clique em "Verificar e adicionar".',
          'A AWS fará uma verificação prévia (autorização de $1 USD que é revertida imediatamente).'
        ]
      },
      {
        title: 'Verificação de Identidade por Telefone',
        content: [
          'A AWS solicitará verificação por telefone para segurança:',
          {
            type: 'list',
            items: [
              'Selecione o código do país',
              'Digite seu número de telefone',
              'Escolha o método: Chamada de voz ou SMS (texto)'
            ]
          },
          'Clique em "Enviar código".',
          'Você receberá um código de 6 dígitos.',
          'Digite o código no campo fornecido.',
          'Clique em "Verificar código".'
        ]
      },
      {
        title: 'Selecionar Plano de Suporte',
        content: [
          'A AWS oferece diferentes planos de suporte:',
          {
            type: 'list',
            items: [
              'Plano Básico (Gratuito): Recomendado para iniciantes. Inclui acesso à documentação, fóruns e suporte à cobrança.',
              'Plano Developer ($29/mês): Suporte técnico via e-mail durante horário comercial.',
              'Plano Business ($100/mês ou 3% da conta): Suporte 24/7 com garantia de tempo de resposta.'
            ]
          },
          {
            type: 'warning',
            title: 'Recomendação',
            text: 'Para começar, selecione o "Plano Básico" (gratuito). Você pode atualizar seu plano a qualquer momento.'
          },
          'Selecione "Plano Básico" e clique em "Finalizar inscrição".'
        ]
      },
      {
        title: 'Concluir a Inscrição',
        content: [
          'Após finalizar todas as etapas:',
          {
            type: 'list',
            items: [
              'Você será redirecionado para o console AWS',
              'Receberá um e-mail de confirmação da criação da conta',
              'Seus $100 USD em créditos estarão disponíveis imediatamente'
            ]
          },
          {
            type: 'code',
            value: 'Parabéns! Sua conta AWS foi criada com sucesso! 🎉'
          }
        ]
      },
      {
        title: 'Configurações Iniciais Recomendadas',
        content: [
          'Após criar sua conta, recomenda-se configurar:',
          {
            type: 'list',
            items: [
              'AWS Budgets: Configure alertas para monitorar seus gastos e evitar cobranças inesperadas',
              'Multi-Factor Authentication (MFA): Habilite autenticação de dois fatores para maior segurança',
              'IAM User: Crie um usuário IAM ao invés de usar a conta root para operações diárias',
              'Billing Alerts: Configure alertas de cobrança para ser notificado sobre uso de créditos'
            ]
          },
          {
            type: 'warning',
            title: 'Segurança',
            text: 'NUNCA compartilhe suas credenciais AWS. Use IAM users e roles para acesso programático. Ative MFA para todas as contas privilegiadas.'
          },
          {
            type: 'link',
            url: 'https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html'
          }
        ]
      },
      {
        title: 'Entendendo os Créditos AWS',
        content: [
          'Com o novo modelo (após 15/07/2025), você recebe:',
          {
            type: 'list',
            items: [
              '$100 USD em créditos iniciais: Disponível imediatamente ao criar a conta',
              'Até $100 adicionais: Ganhe créditos extras completando atividades específicas da AWS',
              'Serviços sempre gratuitos: Mais de 30 serviços com limites mensais permanentes, independente dos créditos'
            ]
          },
          {
            type: 'warning',
            title: 'Sobre os Créditos',
            text: 'Os créditos são aplicados automaticamente nas cobranças. Quando os créditos se esgotarem, você será cobrado conforme o uso. Monitore seus gastos regularmente no AWS Cost Explorer.'
          },
          'Para verificar seus créditos:',
          {
            type: 'list',
            items: [
              'Acesse AWS Billing Console',
              'Vá em "Credits" para ver o saldo disponível',
              'Use AWS Cost Explorer para monitorar o uso'
            ]
          },
          {
            type: 'link',
            url: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html'
          }
        ]
      }
    ],
    references: [
      {
        title: 'Documentação: Criando e ativando uma conta AWS',
        url: 'https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html'
      },
      {
        title: 'AWS Free Tier - Informações Oficiais',
        url: 'https://aws.amazon.com/free'
      },
      {
        title: 'Documentação: AWS Free Tier',
        url: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html'
      },
      {
        title: 'Segurança da Conta AWS',
        url: 'https://docs.aws.amazon.com/accounts/latest/reference/security.html'
      }
    ]
  },
  {
    id: 1,
    title: 'Criar um Site Estático com S3 e CloudFront',
    difficulty: 'Iniciante',
    estimatedTime: '30-45 minutos',
    services: ['S3', 'CloudFront'],
    freeTier: 'Compatível com créditos AWS ($100 USD iniciais): Este projeto utiliza serviços sempre gratuitos - S3 oferece 5GB de armazenamento e 20.000 requisições GET/mês permanentemente. CloudFront oferece 50GB de transferência de dados/mês. Custos adicionais são mínimos e cobertos pelos créditos iniciais. Consulte a documentação oficial para limites atuais.',
    prerequisites: [
      'Conta AWS ativa',
      'Arquivos HTML, CSS e JavaScript do seu site estático',
      'Conhecimento básico de navegação no console AWS'
    ],
    steps: [
      {
        title: 'Preparar os arquivos do site',
        content: [
          'Crie uma pasta local com todos os arquivos do seu site estático (HTML, CSS, JavaScript, imagens, etc.).',
          'Certifique-se de que o arquivo principal seja nomeado como index.html.',
          'Verifique se todos os caminhos relativos estão corretos.'
        ]
      },
      {
        title: 'Criar um bucket S3',
        content: [
          'Acesse o console AWS e navegue até o serviço S3.',
          'Clique em "Create bucket".',
          'Configure o bucket:',
          {
            type: 'list',
            items: [
              'Nome do bucket: escolha um nome único (ex: meu-site-estatico-2024)',
              'Região: escolha a região mais próxima aos seus usuários',
              'Bloquear todo o acesso público: desmarque esta opção',
              'Bloquear acesso público através de políticas de bucket: desmarque esta opção'
            ]
          },
          {
            type: 'warning',
            title: 'Atenção',
            text: 'Para hospedar um site estático, você precisa permitir acesso público ao bucket. Certifique-se de desabilitar o bloqueio de acesso público.'
          },
          'Role até o final e clique em "Create bucket".'
        ]
      },
      {
        title: 'Configurar o bucket para hospedagem de site estático',
        content: [
          'No bucket criado, vá para a aba "Properties".',
          'Role até a seção "Static website hosting" e clique em "Edit".',
          'Selecione "Enable" e configure:',
          {
            type: 'list',
            items: [
              'Index document: index.html',
              'Error document: index.html (ou uma página de erro personalizada)'
            ]
          },
          'Salve as alterações.',
          'Anote a URL do endpoint do site estático (será algo como: http://nome-do-bucket.s3-website-regiao.amazonaws.com).'
        ]
      },
      {
        title: 'Fazer upload dos arquivos',
        content: [
          'Na aba "Objects" do bucket, clique em "Upload".',
          'Arraste e solte todos os arquivos do seu site ou clique em "Add files".',
          'Importante: faça upload de todos os arquivos na raiz do bucket ou organize-os em pastas conforme sua estrutura.',
          'Clique em "Upload" e aguarde o término do processo.',
          {
            type: 'warning',
            title: 'Dica',
            text: 'Para sites grandes, considere usar o AWS CLI ou o AWS SDK para automatizar o upload.'
          }
        ]
      },
      {
        title: 'Configurar permissões do bucket',
        content: [
          'Vá para a aba "Permissions" do bucket.',
          'Na seção "Bucket policy", clique em "Edit" e adicione a seguinte política:',
          {
            type: 'code',
            value: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::nome-do-seu-bucket/*"
    }
  ]
}`
          },
          'Substitua "nome-do-seu-bucket" pelo nome real do seu bucket.',
          'Salve as alterações.'
        ]
      },
      {
        title: 'Configurar CloudFront (Opcional, mas recomendado)',
        content: [
          'Navegue até o serviço CloudFront no console AWS.',
          'Clique em "Create distribution".',
          'Configure a origem:',
          {
            type: 'list',
            items: [
              'Origin domain: selecione o endpoint do site estático do S3 (não o bucket diretamente)',
              'Name: será preenchido automaticamente',
              'Origin access: selecione "Public"'
            ]
          },
          'Configure o comportamento padrão:',
          {
            type: 'list',
            items: [
              'Viewer protocol policy: Redirect HTTP to HTTPS',
              'Allowed HTTP methods: GET, HEAD, OPTIONS',
              'Cache policy: CachingOptimized'
            ]
          },
          'Em "Default root object", digite: index.html',
          'Clique em "Create distribution".',
          'Aguarde o status mudar para "Deployed" (pode levar alguns minutos).',
          'Anote o Domain Name do CloudFront (ex: d1234567890.cloudfront.net).'
        ]
      },
      {
        title: 'Testar o site',
        content: [
          'Acesse a URL do CloudFront ou do S3 diretamente no navegador.',
          'Verifique se todas as páginas, imagens e recursos estão carregando corretamente.',
          'Teste em diferentes dispositivos e navegadores.',
          {
            type: 'link',
            url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html'
          }
        ]
      }
    ],
    references: [
      {
        title: 'Documentação: Hospedagem de site estático no S3',
        url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html'
      },
      {
        title: 'Documentação: CloudFront Getting Started',
        url: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html'
      },
      {
        title: 'Documentação: Amazon S3 - Preços e Limites',
        url: 'https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all'
      }
    ]
  },
  {
    id: 2,
    title: 'Construir uma Aplicação de Blog com AWS Lambda e DynamoDB',
    difficulty: 'Intermediário',
    estimatedTime: '1-2 horas',
    services: ['Lambda', 'DynamoDB', 'API Gateway'],
    freeTier: 'Compatível com créditos AWS ($100 USD iniciais): Lambda oferece 1 milhão de requisições/mês sempre gratuito. DynamoDB oferece 25GB de armazenamento sempre gratuito. API Gateway oferece 1 milhão de chamadas/mês sempre gratuito. Custos adicionais são cobertos pelos seus créditos iniciais. Consulte a documentação oficial para limites atuais.',
    prerequisites: [
      'Conta AWS ativa',
      'Conhecimento básico de JavaScript/Node.js ou Python',
      'AWS CLI configurado (opcional, mas recomendado)',
      'Editor de código'
    ],
    steps: [
      {
        title: 'Criar tabela DynamoDB',
        content: [
          'Acesse o console AWS e navegue até DynamoDB.',
          'Clique em "Create table".',
          'Configure a tabela:',
          {
            type: 'list',
            items: [
              'Table name: BlogPosts',
              'Partition key: postId (String)',
              'Sort key: createdAt (Number) - opcional, mas recomendado para ordenação'
            ]
          },
          'Em "Table settings", selecione "Customize settings".',
          'Configure a capacidade:',
          {
            type: 'list',
            items: [
              'Read/write capacity mode: On-demand (recomendado para economizar créditos)',
              'Ou escolha "Provisioned" com 5 unidades de leitura e escrita'
            ]
          },
          'Clique em "Create table".'
        ]
      },
      {
        title: 'Criar função Lambda para listar posts',
        content: [
          'Navegue até AWS Lambda no console.',
          'Clique em "Create function".',
          'Configure:',
          {
            type: 'list',
            items: [
              'Function name: listBlogPosts',
              'Runtime: Node.js 20.x ou Python 3.11',
              'Architecture: x86_64'
            ]
          },
          'Clique em "Create function".',
          'No editor de código, substitua o código padrão por:',
          {
            type: 'code',
            value: `// Node.js
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const params = {
        TableName: 'BlogPosts',
        Limit: 10
    };
    
    try {
        const result = await dynamodb.scan(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result.Items)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};`
          },
          'Ou em Python:',
          {
            type: 'code',
            value: `# Python
import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('BlogPosts')

def lambda_handler(event, context):
    try:
        response = table.scan(Limit=10)
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps(response['Items'])
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }`
          },
          'Role até "Execution role" e clique em "Edit".',
          'Selecione "Create a new role from AWS policy templates".',
          'Nome da role: BlogLambdaRole',
          'Política: "Amazon DynamoDB full access" (ou crie uma política mais restritiva).',
          'Clique em "Save".'
        ]
      },
      {
        title: 'Criar função Lambda para criar posts',
        content: [
          'Crie uma nova função Lambda chamada "createBlogPost".',
          'Use o mesmo runtime e configuração da função anterior.',
          'Substitua o código por:',
          {
            type: 'code',
            value: `// Node.js
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    
    const params = {
        TableName: 'BlogPosts',
        Item: {
            postId: uuidv4(),
            title: body.title,
            content: body.content,
            author: body.author,
            createdAt: Date.now()
        }
    };
    
    try {
        await dynamodb.put(params).promise();
        return {
            statusCode: 201,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'Post created successfully', post: params.Item })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};`
          },
          'Nota: Para usar uuid, você precisará adicionar a dependência. No Lambda, use o pacote crypto nativo ou instale via camada.',
          'Configure a mesma role de execução da função anterior.'
        ]
      },
      {
        title: 'Configurar API Gateway',
        content: [
          'Navegue até API Gateway no console AWS.',
          'Clique em "Create API" e selecione "REST API".',
          'Configure:',
          {
            type: 'list',
            items: [
              'Protocol: REST',
              'Create new API: New API',
              'API name: BlogAPI',
              'Endpoint Type: Regional'
            ]
          },
          'Clique em "Create API".'
        ]
      },
      {
        title: 'Criar recursos e métodos na API',
        content: [
          'No painel da API, clique em "Actions" > "Create Resource".',
          'Nome do recurso: posts',
          'Clique em "Create Resource".',
          'Com o recurso /posts selecionado, clique em "Actions" > "Create Method".',
          'Selecione "GET" e clique no checkmark.',
          'Configure:',
          {
            type: 'list',
            items: [
              'Integration type: Lambda Function',
              'Use Lambda Proxy integration: Marque esta opção',
              'Lambda Function: listBlogPosts'
            ]
          },
          'Clique em "Save" e confirme a permissão.',
          'Repita o processo para criar um método POST no mesmo recurso, usando a função createBlogPost.'
        ]
      },
      {
        title: 'Habilitar CORS',
        content: [
          'Selecione o recurso /posts.',
          'Clique em "Actions" > "Enable CORS".',
          'Deixe as configurações padrão e clique em "Enable CORS and replace existing CORS headers".',
          'Confirme a substituição.'
        ]
      },
      {
        title: 'Implantar a API',
        content: [
          'Clique em "Actions" > "Deploy API".',
          'Configure:',
          {
            type: 'list',
            items: [
              'Deployment stage: [New Stage]',
              'Stage name: prod',
              'Stage description: Production stage'
            ]
          },
          'Clique em "Deploy".',
          'Anote a URL de invocação da API (ex: https://abc123.execute-api.regiao.amazonaws.com/prod).'
        ]
      },
      {
        title: 'Testar a aplicação',
        content: [
          'Use uma ferramenta como Postman, curl ou o próprio console do API Gateway para testar:',
          {
            type: 'list',
            items: [
              'GET /posts - deve retornar uma lista vazia inicialmente',
              'POST /posts - crie um post enviando JSON com title, content e author'
            ]
          },
          {
            type: 'code',
            value: `// Exemplo de requisição POST
curl -X POST https://sua-api-url/prod/posts \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Meu Primeiro Post",
    "content": "Conteúdo do post aqui...",
    "author": "Seu Nome"
  }'`
          },
          {
            type: 'link',
            url: 'https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html'
          }
        ]
      }
    ],
    references: [
      {
        title: 'Documentação: AWS Lambda Getting Started',
        url: 'https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html'
      },
      {
        title: 'Documentação: DynamoDB Developer Guide',
        url: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/'
      },
      {
        title: 'Documentação: API Gateway Developer Guide',
        url: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/'
      }
    ]
  },
  {
    id: 3,
    title: 'Implantar um Aplicativo Serverless com AWS Amplify',
    difficulty: 'Iniciante',
    estimatedTime: '45-60 minutos',
    services: ['Amplify', 'Cognito', 'AppSync'],
    freeTier: 'Compatível com créditos AWS ($100 USD iniciais): Amplify oferece 1.000 minutos de build/mês sempre gratuito e 15GB de armazenamento/mês. Cognito oferece 50.000 usuários ativos mensais (MAUs) sempre gratuito. Use seus créditos para funcionalidades adicionais. Consulte a documentação oficial para limites atuais.',
    prerequisites: [
      'Conta AWS ativa',
      'Node.js e npm instalados',
      'Git instalado',
      'Aplicativo React, Vue, Angular ou Next.js (ou use o template do Amplify)'
    ],
    steps: [
      {
        title: 'Instalar AWS Amplify CLI',
        content: [
          'Abra o terminal e instale o Amplify CLI globalmente:',
          {
            type: 'code',
            value: 'npm install -g @aws-amplify/cli'
          },
          'Configure o Amplify CLI:',
          {
            type: 'code',
            value: 'amplify configure'
          },
          'Siga as instruções para:',
          {
            type: 'list',
            items: [
              'Fazer login na AWS',
              'Selecionar a região',
              'Criar um usuário IAM (ou usar um existente)',
              'Configurar as credenciais'
            ]
          }
        ]
      },
      {
        title: 'Preparar o projeto',
        content: [
          'Navegue até a pasta do seu projeto front-end.',
          'Se você não tem um projeto, crie um novo:',
          {
            type: 'code',
            value: `# Para React
npx create-react-app meu-app
cd meu-app

# Para Vue
npm create vue@latest meu-app
cd meu-app

# Para Next.js
npx create-next-app@latest meu-app
cd meu-app`
          },
          'Instale as dependências do Amplify:',
          {
            type: 'code',
            value: 'npm install aws-amplify'
          }
        ]
      },
      {
        title: 'Inicializar o Amplify no projeto',
        content: [
          'No diretório do projeto, execute:',
          {
            type: 'code',
            value: 'amplify init'
          },
          'Responda às perguntas:',
          {
            type: 'list',
            items: [
              'Enter a name for the project: meu-app',
              'Initialize a new environment: Yes',
              'Select your default editor: Seu editor preferido',
              'Choose the type of app: javascript',
              'What javascript framework: react (ou vue, angular, etc.)',
              'Source Directory Path: src',
              'Distribution Directory Path: build (ou dist)',
              'Build Command: npm run-script build',
              'Start Command: npm run-script start',
              'Do you want to use an AWS profile? Yes'
            ]
          },
          'Isso criará uma pasta amplify/ no seu projeto.'
        ]
      },
      {
        title: 'Adicionar autenticação (opcional, mas recomendado)',
        content: [
          'Adicione autenticação ao projeto:',
          {
            type: 'code',
            value: 'amplify add auth'
          },
          'Selecione as opções:',
          {
            type: 'list',
            items: [
              'Do you want to use the default authentication and security configuration? Default configuration',
              'How do you want users to be able to sign in? Username',
              'Do you want to configure advanced settings? No'
            ]
          },
          'Isso configurará o Amazon Cognito para autenticação.'
        ]
      },
      {
        title: 'Adicionar API (opcional)',
        content: [
          'Para adicionar uma API GraphQL ou REST:',
          {
            type: 'code',
            value: 'amplify add api'
          },
          'Escolha:',
          {
            type: 'list',
            items: [
              'Please select from one of the below mentioned services: GraphQL ou REST',
              'Siga as instruções para configurar a API'
            ]
          },
          {
            type: 'warning',
            title: 'Nota',
            text: 'Para projetos simples, você pode pular esta etapa e adicionar depois.'
          }
        ]
      },
      {
        title: 'Configurar o código do aplicativo',
        content: [
          'No arquivo principal do seu app (ex: src/index.js ou src/main.js), adicione:',
          {
            type: 'code',
            value: `import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);`
          },
          'O arquivo aws-exports.js será gerado automaticamente pelo Amplify.'
        ]
      },
      {
        title: 'Fazer push das mudanças',
        content: [
          'Depois de configurar tudo, faça push para a nuvem:',
          {
            type: 'code',
            value: 'amplify push'
          },
          'Isso criará todos os recursos na AWS.',
          'Aguarde a conclusão do processo.'
        ]
      },
      {
        title: 'Publicar o aplicativo',
        content: [
          'Para publicar o app, execute:',
          {
            type: 'code',
            value: 'amplify publish'
          },
          'Ou use o console do Amplify:',
          {
            type: 'list',
            items: [
              'Acesse o console AWS Amplify',
              'Clique em "New app" > "Host web app"',
              'Conecte seu repositório Git (GitHub, GitLab, Bitbucket)',
              'Configure as configurações de build',
              'Clique em "Save and deploy"'
            ]
          },
          'O Amplify criará automaticamente um domínio para seu app.',
          {
            type: 'link',
            url: 'https://docs.amplify.aws/react/getting-started/installation'
          }
        ]
      }
    ],
    references: [
      {
        title: 'Documentação: Amplify Getting Started',
        url: 'https://docs.amplify.aws/react/getting-started/installation'
      },
      {
        title: 'Amplify CLI Reference',
        url: 'https://docs.amplify.aws/cli/'
      },
      {
        title: 'AWS Amplify Console',
        url: 'https://console.aws.amazon.com/amplify/'
      }
    ]
  },
  {
    id: 4,
    title: 'Criar um Bot de Conversação com Lex e Lambda',
    difficulty: 'Intermediário',
    estimatedTime: '1-2 horas',
    services: ['Lex', 'Lambda'],
    freeTier: 'Compatível com créditos AWS ($100 USD iniciais): Lex oferece limites no modelo sempre gratuito (consulte documentação para valores atuais). Lambda oferece 1 milhão de requisições/mês sempre gratuito. Uso adicional consome créditos. Consulte a documentação oficial para limites atuais.',
    prerequisites: [
      'Conta AWS ativa',
      'Conhecimento básico de Python ou Node.js',
      'Compreensão básica de intenções e slots em chatbots'
    ],
    steps: [
      {
        title: 'Criar função Lambda para lógica do bot',
        content: [
          'Acesse AWS Lambda no console.',
          'Clique em "Create function".',
          'Configure:',
          {
            type: 'list',
            items: [
              'Function name: LexBotHandler',
              'Runtime: Python 3.11 ou Node.js 20.x',
              'Architecture: x86_64'
            ]
          },
          'Clique em "Create function".',
          'Substitua o código por um exemplo básico:',
          {
            type: 'code',
            value: `# Python
def lambda_handler(event, context):
    intent_name = event['currentIntent']['name']
    slots = event['currentIntent']['slots']
    
    if intent_name == 'OrderPizza':
        pizza_type = slots.get('PizzaType')
        pizza_size = slots.get('PizzaSize')
        
        response = {
            'dialogAction': {
                'type': 'Close',
                'fulfillmentState': 'Fulfilled',
                'message': {
                    'contentType': 'PlainText',
                    'content': f'Seu pedido de {pizza_size} {pizza_type} foi registrado!'
                }
            }
        }
        return response
    
    return {
        'dialogAction': {
            'type': 'Close',
            'fulfillmentState': 'Fulfilled',
            'message': {
                'contentType': 'PlainText',
                'content': 'Desculpe, não entendi.'
            }
        }
    }`
          }
        ]
      },
      {
        title: 'Criar bot no Amazon Lex',
        content: [
          'Navegue até Amazon Lex no console AWS.',
          'Clique em "Create" e selecione "Custom bot".',
          'Configure o bot:',
          {
            type: 'list',
            items: [
              'Bot name: MeuBot',
              'Output voice: None (para texto) ou escolha uma voz',
              'Session timeout: 5 minutos',
              'IAM role: Crie uma nova role ou use existente',
              'COPPA: No (a menos que seja para crianças)'
            ]
          },
          'Clique em "Create".'
        ]
      },
      {
        title: 'Criar intenção',
        content: [
          'No bot criado, clique em "Add intent" > "Create intent".',
          'Nome da intenção: OrderPizza',
          'Clique em "Add".',
          'Configure os exemplos de utterances (o que o usuário pode dizer):',
          {
            type: 'list',
            items: [
              'Quero pedir uma pizza',
              'Gostaria de uma pizza grande',
              'Quero uma pizza média de calabresa',
              'Fazer pedido de pizza'
            ]
          },
          'Adicione cada utterance e clique em "Add utterance".'
        ]
      },
      {
        title: 'Configurar slots (parâmetros)',
        content: [
          'Na seção "Slots", adicione os slots necessários:',
          {
            type: 'list',
            items: [
              'PizzaType (Tipo de pizza)',
              'PizzaSize (Tamanho da pizza)'
            ]
          },
          'Para cada slot:',
          {
            type: 'list',
            items: [
              'Clique em "Add slot"',
              'Nome: PizzaType',
              'Slot type: Escolha um tipo existente ou crie um novo',
              'Prompt: "Que tipo de pizza você gostaria?"',
              'Repita para PizzaSize com prompt: "Qual tamanho?"'
            ]
          },
          'Crie um Slot Type personalizado se necessário:',
          {
            type: 'list',
            items: [
              'Vá em "Slot types" no menu lateral',
              'Clique em "Add slot type"',
              'Nome: PizzaTypes',
              'Values: Calabresa, Margherita, Pepperoni, etc.'
            ]
          }
        ]
      },
      {
        title: 'Configurar fulfillment',
        content: [
          'Na seção "Fulfillment", selecione:',
          {
            type: 'list',
            items: [
              'AWS Lambda function',
              'Selecione a função LexBotHandler criada anteriormente',
              'Versão ou alias: $LATEST'
            ]
          },
          'Confirme a permissão quando solicitado.',
          'Marque "Return parameters to client" se necessário.'
        ]
      },
      {
        title: 'Configurar confirmação (opcional)',
        content: [
          'Na seção "Confirmation prompt", configure:',
          {
            type: 'list',
            items: [
              'Prompt: "Confirma seu pedido de {PizzaSize} {PizzaType}?"',
              'Decline response: "Pedido cancelado."'
            ]
          },
          'Isso adiciona uma etapa de confirmação antes de processar o pedido.'
        ]
      },
      {
        title: 'Construir e testar o bot',
        content: [
          'Clique em "Build" no canto superior direito.',
          'Aguarde a conclusão do build (pode levar alguns minutos).',
          'Após o build, vá para a aba "Test bot".',
          'Teste o bot digitando mensagens como:',
          {
            type: 'list',
            items: [
              '"Quero pedir uma pizza"',
              '"Gostaria de uma pizza grande de calabresa"'
            ]
          },
          'Verifique se o bot está coletando os slots corretamente.',
          'Teste o fulfillment chamando a função Lambda.'
        ]
      },
      {
        title: 'Publicar o bot',
        content: [
          'Após testar, clique em "Publish".',
          'Crie um alias (ex: PROD) e uma versão.',
          'Após publicar, você pode integrar o bot com:',
          {
            type: 'list',
            items: [
              'Facebook Messenger',
              'Slack',
              'Twilio SMS',
              'Sua própria aplicação via SDK'
            ]
          },
          {
            type: 'link',
            url: 'https://docs.aws.amazon.com/lex/latest/dg/getting-started.html'
          }
        ]
      }
    ],
    references: [
      {
        title: 'Documentação: Amazon Lex Getting Started',
        url: 'https://docs.aws.amazon.com/lex/latest/dg/getting-started.html'
      },
      {
        title: 'Tutorial: Building a Bot',
        url: 'https://docs.aws.amazon.com/lex/latest/dg/gs-bp.html'
      },
      {
        title: 'Integrating Lex with Lambda',
        url: 'https://docs.aws.amazon.com/lex/latest/dg/lambda.html'
      }
    ]
  },
  {
    id: 5,
    title: 'Configurar um Pipeline de CI/CD com AWS CodePipeline',
    difficulty: 'Intermediário',
    estimatedTime: '1-2 horas',
    services: ['CodePipeline', 'CodeBuild', 'CodeCommit/S3'],
    freeTier: 'Compatível com créditos AWS ($100 USD iniciais): CodePipeline, CodeBuild e CodeCommit oferecem limites no modelo sempre gratuito (consulte documentação). Para uso além dos limites sempre gratuitos, os custos serão cobertos pelos seus créditos. Consulte a documentação oficial para limites atuais.',
    prerequisites: [
      'Conta AWS ativa',
      'Repositório de código (GitHub, CodeCommit, ou S3)',
      'Aplicativo para fazer deploy',
      'Conhecimento básico de CI/CD'
    ],
    steps: [
      {
        title: 'Preparar o repositório de código',
        content: [
          'Certifique-se de que seu código está em um repositório Git.',
          'Opções:',
          {
            type: 'list',
            items: [
              'GitHub (mais comum)',
              'AWS CodeCommit',
              'Bitbucket',
              'S3 bucket com código zipado'
            ]
          },
          'Crie um arquivo buildspec.yml na raiz do projeto (para CodeBuild):',
          {
            type: 'code',
            value: `version: 0.2

phases:
  pre_build:
    commands:
      - echo Logging in to Amazon ECR...
      - echo Build started on \`date\`
  build:
    commands:
      - echo Building the application...
      - npm install
      - npm run build
  post_build:
    commands:
      - echo Build completed on \`date\`
artifacts:
  files:
    - '**/*'
  base-directory: build`
          },
          {
            type: 'warning',
            title: 'Nota',
            text: 'Ajuste o buildspec.yml conforme seu projeto (Node.js, Python, Java, etc.)'
          }
        ]
      },
      {
        title: 'Criar bucket S3 para artefatos (se necessário)',
        content: [
          'Se você não usar CodeCommit/GitHub, crie um bucket S3:',
          {
            type: 'list',
            items: [
              'Acesse S3 no console',
              'Crie um bucket para armazenar o código fonte',
              'Faça upload do código zipado'
            ]
          }
        ]
      },
      {
        title: 'Criar projeto no CodeBuild',
        content: [
          'Navegue até AWS CodeBuild no console.',
          'Clique em "Create build project".',
          'Configure o projeto:',
          {
            type: 'list',
            items: [
              'Project name: MeuProjetoBuild',
              'Description: Build para meu aplicativo'
            ]
          },
          'Na seção "Source":',
          {
            type: 'list',
            items: [
              'Source provider: GitHub, CodeCommit, ou S3',
              'Connect ao seu repositório',
              'Branch: main ou master'
            ]
          },
          'Na seção "Environment":',
          {
            type: 'list',
            items: [
              'Operating system: Ubuntu',
              'Runtime: Standard',
              'Image: aws/codebuild/standard:7.0 (ou a mais recente)',
              'Image version: Always use the latest',
              'Environment type: Linux',
              'Compute: 3 GB memory, 2 vCPUs (configure conforme necessário - custos serão cobertos pelos créditos)'
            ]
          },
          'Na seção "Buildspec":',
          {
            type: 'list',
            items: [
              'Use a buildspec file in the source code root directory'
            ]
          },
          'Clique em "Create build project".'
        ]
      },
      {
        title: 'Testar o build',
        content: [
          'No projeto CodeBuild criado, clique em "Start build".',
          'Aguarde a conclusão do build.',
          'Verifique os logs para garantir que está funcionando.',
          'Corrija qualquer erro no buildspec.yml se necessário.'
        ]
      },
      {
        title: 'Criar pipeline no CodePipeline',
        content: [
          'Navegue até AWS CodePipeline no console.',
          'Clique em "Create pipeline".',
          'Configure o Stage 1 - Source:',
          {
            type: 'list',
            items: [
              'Pipeline name: MeuPipeline',
              'Service role: Create new service role (ou use existente)',
              'Source provider: GitHub, CodeCommit, ou S3',
              'Connect ao repositório e selecione o branch'
            ]
          },
          'Clique em "Next".'
        ]
      },
      {
        title: 'Configurar Stage 2 - Build',
        content: [
          'Na etapa Build:',
          {
            type: 'list',
            items: [
              'Build provider: AWS CodeBuild',
              'Project name: Selecione o projeto criado anteriormente',
              'Build type: Single build'
            ]
          },
          'Clique em "Next".'
        ]
      },
      {
        title: 'Configurar Stage 3 - Deploy (opcional)',
        content: [
          'Você pode adicionar uma etapa de deploy para:',
          {
            type: 'list',
            items: [
              'Amazon S3 (para sites estáticos)',
              'Elastic Beanstalk',
              'ECS',
              'Lambda',
              'Ou pular esta etapa se não precisar de deploy automático'
            ]
          },
          'Para S3:',
          {
            type: 'list',
            items: [
              'Deploy provider: Amazon S3',
              'Bucket: Selecione ou crie um bucket',
              'Extract file before deploy: Marque se o build gerar um zip'
            ]
          },
          'Clique em "Next".'
        ]
      },
      {
        title: 'Revisar e criar',
        content: [
          'Revise todas as configurações.',
          'Clique em "Create pipeline".',
          'O pipeline será executado automaticamente pela primeira vez.',
          'Aguarde a conclusão de todas as etapas.'
        ]
      },
      {
        title: 'Configurar trigger automático',
        content: [
          'O pipeline já está configurado para executar automaticamente quando houver mudanças no repositório.',
          'Para testar:',
          {
            type: 'list',
            items: [
              'Faça uma mudança no código',
              'Faça commit e push para o repositório',
              'O pipeline deve iniciar automaticamente'
            ]
          },
          'Você pode também executar manualmente clicando em "Release change".',
          {
            type: 'link',
            url: 'https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html'
          }
        ]
      }
    ],
    references: [
      {
        title: 'Documentação: CodePipeline User Guide',
        url: 'https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html'
      },
      {
        title: 'Documentação: CodeBuild User Guide',
        url: 'https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html'
      },
      {
        title: 'Buildspec Reference',
        url: 'https://docs.aws.amazon.com/codebuild/latest/userguide/buildspec.html'
      }
    ]
  },
  {
    id: 6,
    title: 'Hospedar um Aplicativo Web em um Servidor EC2',
    difficulty: 'Intermediário',
    estimatedTime: '1-2 horas',
    services: ['EC2'],
    freeTier: '⚠️ CUSTO COM CRÉDITOS: EC2 tem custos que consumirão seus créditos. No novo modelo, instâncias EC2 são cobradas conforme uso (aproximadamente $0.01-0.05/hora para t3.micro). Use seus $100 USD de créditos com moderação. Considere parar instâncias quando não estiver usando. Consulte a documentação oficial para preços atuais.',
    prerequisites: [
      'Conta AWS ativa',
      'Conhecimento básico de Linux',
      'Aplicativo web pronto para deploy',
      'Cliente SSH (para Linux/Mac) ou PuTTY (para Windows)'
    ],
    steps: [
      {
        title: 'Criar par de chaves (Key Pair)',
        content: [
          'Acesse EC2 no console AWS.',
          'No menu lateral, clique em "Key Pairs" (em "Network & Security").',
          'Clique em "Create key pair".',
          'Configure:',
          {
            type: 'list',
            items: [
              'Name: meu-keypair',
              'Key pair type: RSA',
              'Private key file format: .pem (para Linux/Mac) ou .ppk (para Windows/PuTTY)'
            ]
          },
          'Clique em "Create key pair".',
          {
            type: 'warning',
            title: 'Importante',
            text: 'Salve o arquivo .pem em local seguro. Você não poderá baixá-lo novamente!'
          },
          'No Linux/Mac, ajuste as permissões:',
          {
            type: 'code',
            value: 'chmod 400 meu-keypair.pem'
          }
        ]
      },
      {
        title: 'Criar Security Group',
        content: [
          'No menu lateral do EC2, clique em "Security Groups".',
          'Clique em "Create security group".',
          'Configure:',
          {
            type: 'list',
            items: [
              'Name: web-server-sg',
              'Description: Security group para servidor web'
            ]
          },
          'Adicione regras de entrada (Inbound rules):',
          {
            type: 'list',
            items: [
              'Type: SSH, Port: 22, Source: My IP (ou 0.0.0.0/0 para qualquer IP - não recomendado para produção)',
              'Type: HTTP, Port: 80, Source: 0.0.0.0/0',
              'Type: HTTPS, Port: 443, Source: 0.0.0.0/0'
            ]
          },
          'Clique em "Create security group".'
        ]
      },
      {
        title: 'Lançar instância EC2',
        content: [
          'No console EC2, clique em "Instances" > "Launch instance".',
          'Configure o nome:',
          {
            type: 'list',
            items: [
              'Name: meu-servidor-web'
            ]
          },
          'Selecione a AMI (Amazon Machine Image):',
          {
            type: 'list',
            items: [
              'Escolha "Amazon Linux 2023" (recomendado)',
              'Ou Ubuntu Server (opção popular)'
            ]
          },
          'Selecione o tipo de instância:',
          {
            type: 'list',
            items: [
              't2.micro ou t3.micro (menor custo, aproximadamente $0.01-0.05/hora)',
              '⚠️ ATENÇÃO: EC2 tem custos que consumirão seus créditos. Desligue a instância quando não estiver usando.'
            ]
          },
          'Configure o Key pair:',
          {
            type: 'list',
            items: [
              'Selecione o key pair criado anteriormente'
            ]
          },
          'Configure Network settings:',
          {
            type: 'list',
            items: [
              'VPC: default (ou crie uma nova)',
              'Subnet: escolha uma subnet',
              'Auto-assign Public IP: Enable',
              'Security group: Selecione o security group criado'
            ]
          },
          'Configure Storage:',
          {
            type: 'list',
            items: [
              'Volume size: 8 GB (EBS tem custo adicional de aproximadamente $0.10/GB/mês - monitore seus créditos)',
              'Volume type: gp3 (recomendado)'
            ]
          },
          'Clique em "Launch instance".'
        ]
      },
      {
        title: 'Conectar à instância via SSH',
        content: [
          'Aguarde a instância estar no estado "Running".',
          'Selecione a instância e anote o "Public IPv4 address".',
          'Conecte via SSH:',
          {
            type: 'code',
            value: 'ssh -i meu-keypair.pem ec2-user@SEU-IP-PUBLICO'
          },
          {
            type: 'warning',
            title: 'Nota',
            text: 'Para Ubuntu, use "ubuntu" ao invés de "ec2-user". Para Amazon Linux 2, use "ec2-user".'
          },
          'Se for a primeira conexão, confirme adicionando ao known_hosts.'
        ]
      },
      {
        title: 'Atualizar o sistema',
        content: [
          'Após conectar, atualize os pacotes:',
          {
            type: 'code',
            value: `# Para Amazon Linux
sudo yum update -y

# Para Ubuntu
sudo apt update && sudo apt upgrade -y`
          }
        ]
      },
      {
        title: 'Instalar servidor web',
        content: [
          'Instale o Apache ou Nginx:',
          {
            type: 'code',
            value: `# Apache (Amazon Linux)
sudo yum install httpd -y
sudo systemctl start httpd
sudo systemctl enable httpd

# Ou Nginx
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx`
          },
          'Para Ubuntu:',
          {
            type: 'code',
            value: `sudo apt install apache2 -y
sudo systemctl start apache2
sudo systemctl enable apache2`
          },
          'Teste acessando o IP público no navegador. Você deve ver a página padrão do servidor web.'
        ]
      },
      {
        title: 'Fazer deploy da aplicação',
        content: [
          'Há várias formas de fazer deploy:',
          {
            type: 'list',
            items: [
              'SCP/SFTP para copiar arquivos',
              'Git para clonar repositório',
              'Docker (se sua app usar containers)'
            ]
          },
          'Exemplo com Git:',
          {
            type: 'code',
            value: `# Instalar Git
sudo yum install git -y

# Clonar repositório
cd /var/www/html
sudo git clone https://github.com/seu-usuario/seu-repo.git

# Ou copiar arquivos via SCP (do seu computador local)
scp -i meu-keypair.pem -r ./meu-app/* ec2-user@SEU-IP:/var/www/html/`
          },
          'Ajuste as permissões:',
          {
            type: 'code',
            value: 'sudo chown -R apache:apache /var/www/html'
          }
        ]
      },
      {
        title: 'Configurar domínio (opcional)',
        content: [
          'Se você tem um domínio, configure um registro A no DNS apontando para o IP público da instância.',
          {
            type: 'warning',
            title: 'Importante',
            text: 'IPs públicos do EC2 mudam quando a instância é parada. Considere usar Elastic IP para ter um IP fixo.'
          },
          'Para Elastic IP:',
          {
            type: 'list',
            items: [
              'No console EC2, vá em "Elastic IPs"',
              'Clique em "Allocate Elastic IP address"',
              'Selecione a instância e associe o IP'
            ]
          },
          {
            type: 'link',
            url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html'
          }
        ]
      }
    ],
    references: [
      {
        title: 'Documentação: EC2 Getting Started',
        url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html'
      },
      {
        title: 'Guia: Conectar à instância Linux',
        url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html'
      },
      {
        title: 'Documentação: Amazon EC2 - Preços e Limites',
        url: 'https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc'
      }
    ]
  },
  {
    id: 7,
    title: 'Implementar um Servidor de E-mail com Amazon SES',
    difficulty: 'Intermediário',
    estimatedTime: '45-60 minutos',
    services: ['SES'],
    freeTier: 'Compatível com créditos AWS ($100 USD iniciais): SES oferece limites no modelo sempre gratuito (consulte documentação para valores atuais no sandbox e produção). E-mails enviados além dos limites sempre gratuitos consumirão créditos. Consulte a documentação oficial para limites atuais.',
    prerequisites: [
      'Conta AWS ativa',
      'Domínio próprio (opcional, mas recomendado)',
      'Conhecimento básico de programação (Python, Node.js, etc.)',
      'Instância EC2 (opcional, mas terá custos que consumirão créditos)'
    ],
    steps: [
      {
        title: 'Verificar identidade de e-mail (Sandbox Mode)',
        content: [
          'Acesse Amazon SES no console AWS.',
          'Na região escolhida (ex: us-east-1), vá em "Verified identities".',
          'Clique em "Create identity".',
          'Escolha o tipo:',
          {
            type: 'list',
            items: [
              'Email address: Para testar com um único e-mail',
              'Domain: Para usar seu domínio (recomendado para produção)'
            ]
          },
          'Para e-mail:',
          {
            type: 'list',
            items: [
              'Digite seu endereço de e-mail',
              'Clique em "Create identity"',
              'Verifique o e-mail recebido e clique no link'
            ]
          },
          {
            type: 'warning',
            title: 'Sandbox Mode',
            text: 'No modo sandbox, você só pode enviar para e-mails verificados. Para produção, solicite a saída do sandbox.'
          }
        ]
      },
      {
        title: 'Verificar domínio (opcional, mas recomendado)',
        content: [
          'Se você tem um domínio, verifique-o:',
          {
            type: 'list',
            items: [
              'Escolha "Domain" ao criar identidade',
              'Digite seu domínio (ex: meudominio.com)',
              'SES fornecerá registros DNS para adicionar',
              'Adicione os registros TXT e CNAME no seu provedor DNS',
              'Aguarde a verificação (pode levar algumas horas)'
            ]
          },
          'Isso permite enviar de qualquer e-mail @seu-dominio.com.'
        ]
      },
      {
        title: 'Solicitar saída do Sandbox (para produção)',
        content: [
          'Para enviar para qualquer e-mail, solicite a saída do sandbox:',
          {
            type: 'list',
            items: [
              'No console SES, vá em "Account dashboard"',
              'Clique em "Request production access"',
              'Preencha o formulário explicando o uso',
              'Aguarde aprovação (geralmente 24 horas)'
            ]
          },
          {
            type: 'warning',
            title: 'Importante',
            text: 'Enquanto estiver no sandbox, você só pode enviar para e-mails verificados.'
          }
        ]
      },
      {
        title: 'Configurar credenciais SMTP (opcional)',
        content: [
          'Para usar SMTP tradicional, crie credenciais:',
          {
            type: 'list',
            items: [
              'Vá em "SMTP settings"',
              'Clique em "Create SMTP credentials"',
              'IAM user name: ses-smtp-user',
              'Baixe as credenciais (você não poderá vê-las novamente)'
            ]
          },
          'Anote o Server name e as credenciais.'
        ]
      },
      {
        title: 'Criar função Lambda para enviar e-mail (método recomendado)',
        content: [
          'Crie uma função Lambda:',
          {
            type: 'list',
            items: [
              'Nome: SendEmailFunction',
              'Runtime: Python 3.11 ou Node.js 20.x'
            ]
          },
          'Código Python:',
          {
            type: 'code',
            value: `import boto3
import json

ses = boto3.client('ses')

def lambda_handler(event, context):
    # Parse do evento
    body = json.loads(event['body']) if 'body' in event else event
    
    try:
        response = ses.send_email(
            Source='seu-email@seu-dominio.com',  # E-mail verificado
            Destination={
                'ToAddresses': [body['to']]
            },
            Message={
                'Subject': {
                    'Data': body['subject'],
                    'Charset': 'UTF-8'
                },
                'Body': {
                    'Text': {
                        'Data': body['message'],
                        'Charset': 'UTF-8'
                    },
                    'Html': {
                        'Data': body.get('html', body['message']),
                        'Charset': 'UTF-8'
                    }
                }
            }
        )
        return {
            'statusCode': 200,
            'body': json.dumps({
                'messageId': response['MessageId'],
                'message': 'Email sent successfully'
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }`
          },
          'Configure a role da Lambda com permissão SES:',
          {
            type: 'list',
            items: [
              'Adicione a política "AmazonSESFullAccess" (ou crie uma política mais restritiva)'
            ]
          }
        ]
      },
      {
        title: 'Testar envio de e-mail',
        content: [
          'Teste via console AWS:',
          {
            type: 'list',
            items: [
              'No console SES, vá em "Send test email"',
              'Preencha: From (e-mail verificado), To (e-mail verificado no sandbox), Subject, Body',
              'Clique em "Send test email"'
            ]
          },
          'Ou teste via Lambda:',
          {
            type: 'code',
            value: `# Teste local ou via API Gateway
{
  "to": "destinatario@email.com",
  "subject": "Teste de Email",
  "message": "Este é um e-mail de teste do Amazon SES",
  "html": "<h1>Este é um e-mail de teste</h1>"
}`
          }
        ]
      },
      {
        title: 'Configurar API Gateway (opcional)',
        content: [
          'Para expor a Lambda via API REST:',
          {
            type: 'list',
            items: [
              'Crie uma API REST no API Gateway',
              'Crie um método POST',
              'Integre com a função Lambda',
              'Habilite CORS',
              'Implante a API'
            ]
          },
          'Agora você pode chamar a API de qualquer aplicação.'
        ]
      },
      {
        title: 'Monitorar e configurar',
        content: [
          'Monitore o uso:',
          {
            type: 'list',
            items: [
              'Vá em "Sending statistics" para ver métricas',
              'Configure "Reputation metrics" para monitorar bounces e complaints',
              'Configure "Configuration sets" para tracking avançado'
            ]
          },
          'Configure bounce e complaint handling:',
          {
            type: 'list',
            items: [
              'Crie um SNS topic para receber notificações',
              'Configure ações automáticas'
            ]
          },
          {
            type: 'link',
            url: 'https://docs.aws.amazon.com/ses/latest/dg/send-email.html'
          }
        ]
      }
    ],
    references: [
      {
        title: 'Documentação: Amazon SES Developer Guide',
        url: 'https://docs.aws.amazon.com/ses/latest/dg/'
      },
      {
        title: 'Tutorial: Sending Email',
        url: 'https://docs.aws.amazon.com/ses/latest/dg/send-email.html'
      },
      {
        title: 'Moving Out of the Amazon SES Sandbox',
        url: 'https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html'
      }
    ]
  },
  {
    id: 8,
    title: 'Criar uma API RESTful com API Gateway e Lambda',
    difficulty: 'Intermediário',
    estimatedTime: '1-2 horas',
    services: ['API Gateway', 'Lambda', 'DynamoDB'],
    freeTier: 'Compatível com créditos AWS ($100 USD iniciais): API Gateway, Lambda e DynamoDB oferecem limites no modelo sempre gratuito (1M chamadas/mês, 1M requisições/mês, 25GB armazenamento). Uso além desses limites consumirá seus créditos. Consulte a documentação oficial para limites atuais.',
    prerequisites: [
      'Conta AWS ativa',
      'Conhecimento básico de REST APIs',
      'Conhecimento básico de JavaScript/Node.js ou Python',
      'Editor de código'
    ],
    steps: [
      {
        title: 'Criar tabela DynamoDB',
        content: [
          'Acesse DynamoDB no console AWS.',
          'Clique em "Create table".',
          'Configure:',
          {
            type: 'list',
            items: [
              'Table name: Users',
              'Partition key: userId (String)',
              'Settings: On-demand (recomendado para Free Tier)'
            ]
          },
          'Clique em "Create table".'
        ]
      },
      {
        title: 'Criar função Lambda para GET (listar)',
        content: [
          'Crie uma função Lambda chamada "getUsers".',
          'Runtime: Node.js 20.x ou Python 3.11',
          'Código Node.js:',
          {
            type: 'code',
            value: `const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        const params = {
            TableName: 'Users'
        };
        
        const result = await dynamodb.scan(params).promise();
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                users: result.Items,
                count: result.Items.length
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};`
          },
          'Configure a role com permissões DynamoDB.'
        ]
      },
      {
        title: 'Criar função Lambda para GET por ID',
        content: [
          'Crie função "getUserById":',
          {
            type: 'code',
            value: `const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const userId = event.pathParameters.userId;
    
    try {
        const params = {
            TableName: 'Users',
            Key: {
                userId: userId
            }
        };
        
        const result = await dynamodb.get(params).promise();
        
        if (!result.Item) {
            return {
                statusCode: 404,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ error: 'User not found' })
            };
        }
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result.Item)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};`
          }
        ]
      },
      {
        title: 'Criar função Lambda para POST (criar)',
        content: [
          'Crie função "createUser":',
          {
            type: 'code',
            value: `const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    
    const user = {
        userId: uuidv4(),
        name: body.name,
        email: body.email,
        createdAt: new Date().toISOString()
    };
    
    try {
        const params = {
            TableName: 'Users',
            Item: user
        };
        
        await dynamodb.put(params).promise();
        
        return {
            statusCode: 201,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};`
          }
        ]
      },
      {
        title: 'Criar função Lambda para PUT (atualizar)',
        content: [
          'Crie função "updateUser":',
          {
            type: 'code',
            value: `const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const userId = event.pathParameters.userId;
    const body = JSON.parse(event.body);
    
    try {
        const params = {
            TableName: 'Users',
            Key: { userId: userId },
            UpdateExpression: 'set #name = :name, email = :email',
            ExpressionAttributeNames: {
                '#name': 'name'
            },
            ExpressionAttributeValues: {
                ':name': body.name,
                ':email': body.email
            },
            ReturnValues: 'ALL_NEW'
        };
        
        const result = await dynamodb.update(params).promise();
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result.Attributes)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};`
          }
        ]
      },
      {
        title: 'Criar função Lambda para DELETE',
        content: [
          'Crie função "deleteUser":',
          {
            type: 'code',
            value: `const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const userId = event.pathParameters.userId;
    
    try {
        const params = {
            TableName: 'Users',
            Key: { userId: userId }
        };
        
        await dynamodb.delete(params).promise();
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ message: 'User deleted successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};`
          }
        ]
      },
      {
        title: 'Criar API no API Gateway',
        content: [
          'Acesse API Gateway no console.',
          'Clique em "Create API" > "REST API" > "Build".',
          'Configure:',
          {
            type: 'list',
            items: [
              'Protocol: REST',
              'Create new API: New API',
              'API name: UsersAPI',
              'Endpoint Type: Regional'
            ]
          },
          'Clique em "Create API".'
        ]
      },
      {
        title: 'Configurar recursos e métodos',
        content: [
          'Crie o recurso /users:',
          {
            type: 'list',
            items: [
              'Actions > Create Resource',
              'Resource Name: users',
              'Resource Path: /users',
              'Enable API Gateway CORS: Sim'
            ]
          },
          'Crie métodos no recurso /users:',
          {
            type: 'list',
            items: [
              'GET: Integre com getUsers',
              'POST: Integre com createUser'
            ]
          },
          'Crie recurso /users/{userId}:',
          {
            type: 'list',
            items: [
              'Resource Path: /users/{userId}',
              'Crie métodos: GET (getUserById), PUT (updateUser), DELETE (deleteUser)'
            ]
          },
          'Para cada método, marque "Use Lambda Proxy integration".'
        ]
      },
      {
        title: 'Habilitar CORS',
        content: [
          'Selecione o recurso /users.',
          'Actions > Enable CORS.',
          'Deixe as configurações padrão.',
          'Clique em "Enable CORS and replace existing CORS headers".',
          'Repita para /users/{userId}.'
        ]
      },
      {
        title: 'Implantar a API',
        content: [
          'Actions > Deploy API.',
          'Configure:',
          {
            type: 'list',
            items: [
              'Deployment stage: [New Stage]',
              'Stage name: prod',
              'Stage description: Production'
            ]
          },
          'Clique em "Deploy".',
          'Anote a Invoke URL.'
        ]
      },
      {
        title: 'Testar a API',
        content: [
          'Teste os endpoints:',
          {
            type: 'code',
            value: `# GET /users
curl https://sua-api-url/prod/users

# POST /users
curl -X POST https://sua-api-url/prod/users \\
  -H "Content-Type: application/json" \\
  -d '{"name": "João Silva", "email": "joao@email.com"}'

# GET /users/{userId}
curl https://sua-api-url/prod/users/USER_ID

# PUT /users/{userId}
curl -X PUT https://sua-api-url/prod/users/USER_ID \\
  -H "Content-Type: application/json" \\
  -d '{"name": "João Santos", "email": "joao.santos@email.com"}'

# DELETE /users/{userId}
curl -X DELETE https://sua-api-url/prod/users/USER_ID`
          },
          {
            type: 'link',
            url: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html'
          }
        ]
      }
    ],
    references: [
      {
        title: 'Documentação: API Gateway Developer Guide',
        url: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/'
      },
      {
        title: 'Tutorial: Building a REST API',
        url: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html'
      },
      {
        title: 'Lambda Integration with API Gateway',
        url: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html'
      }
    ]
  },
  {
    id: 9,
    title: 'Realizar Análise de Dados com Amazon Redshift',
    difficulty: 'Avançado',
    estimatedTime: '2-3 horas',
    services: ['Redshift'],
    freeTier: '⚠️ ALTO CUSTO - USE CRÉDITOS COM CUIDADO: Redshift tem custos significativos que consumirão seus créditos rapidamente. No novo modelo, considere Redshift Serverless que cobra por uso (aproximadamente $0.375/RPU-hora). Para este tutorial, monitore cuidadosamente seus gastos. Consulte a documentação oficial para preços atuais.',
    prerequisites: [
      'Conta AWS ativa',
      'Conhecimento de SQL',
      'Dados para análise (ou use dados de exemplo)',
      'Cliente SQL (DBeaver, pgAdmin, ou AWS Query Editor)'
    ],
    steps: [
      {
        title: 'Preparar dados de exemplo',
        content: [
          'Para este tutorial, vamos usar dados de exemplo.',
          'Crie um bucket S3 com dados CSV:',
          {
            type: 'list',
            items: [
              'Crie arquivos CSV com dados de vendas, usuários, etc.',
              'Faça upload para um bucket S3',
              'Anote o caminho S3 (ex: s3://meu-bucket/dados/vendas.csv)'
            ]
          },
          'Ou use dados públicos da AWS:',
          {
            type: 'list',
            items: [
              's3://aws-samples-us-east-1/redshift-examples/'
            ]
          }
        ]
      },
      {
        title: 'Criar cluster Redshift (ou usar Serverless)',
        content: [
          {
            type: 'warning',
            title: 'Custo',
            text: 'Redshift tem custos. Para testes, considere Redshift Serverless que cobra apenas pelo uso.'
          },
          'Opção 1: Redshift Serverless (recomendado para testes):',
          {
            type: 'list',
            items: [
              'Acesse Redshift no console',
              'Clique em "Create workgroup"',
              'Configure:',
              'Workgroup name: analytics-workgroup',
              'Namespace: analytics-namespace',
              'Base capacity: 32 RPU (Redshift Processing Units)',
              'Clique em "Create"'
            ]
          },
          'Opção 2: Cluster provisionado (mais custo):',
          {
            type: 'list',
            items: [
              'Cluster identifier: analytics-cluster',
              'Node type: dc2.large (menor custo)',
              'Number of nodes: 1',
              'Master username: admin',
              'Master password: (crie uma senha forte)',
              'Database name: analytics'
            ]
          }
        ]
      },
      {
        title: 'Configurar Security Group',
        content: [
          'Crie um security group para Redshift:',
          {
            type: 'list',
            items: [
              'Type: Redshift',
              'Port: 5439',
              'Source: Seu IP ou VPC'
            ]
          },
          'Associe ao cluster.'
        ]
      },
      {
        title: 'Conectar ao Redshift',
        content: [
          'Use o Query Editor v2 no console AWS:',
          {
            type: 'list',
            items: [
              'Acesse Redshift > Query Editor v2',
              'Conecte ao seu cluster ou workgroup',
              'Ou use um cliente externo como DBeaver'
            ]
          },
          'String de conexão:',
          {
            type: 'code',
            value: 'host=seu-cluster.regiao.redshift.amazonaws.com\nport=5439\ndatabase=analytics\nuser=admin\npassword=sua-senha'
          }
        ]
      },
      {
        title: 'Criar schema e tabelas',
        content: [
          'Crie um schema:',
          {
            type: 'code',
            value: 'CREATE SCHEMA IF NOT EXISTS analytics;'
          },
          'Crie tabelas para seus dados:',
          {
            type: 'code',
            value: `CREATE TABLE analytics.vendas (
    id INTEGER,
    data_venda DATE,
    produto VARCHAR(100),
    quantidade INTEGER,
    valor DECIMAL(10,2),
    cliente_id INTEGER
);`
          }
        ]
      },
      {
        title: 'Carregar dados do S3',
        content: [
          'Crie uma role IAM com permissões S3 e Redshift:',
          {
            type: 'list',
            items: [
              'IAM > Roles > Create role',
              'Selecione Redshift',
              'Adicione políticas: AmazonS3ReadOnlyAccess',
              'Associe ao cluster'
            ]
          },
          'Carregue dados:',
          {
            type: 'code',
            value: `COPY analytics.vendas
FROM 's3://meu-bucket/dados/vendas.csv'
IAM_ROLE 'arn:aws:iam::ACCOUNT:role/RedshiftS3Role'
CSV
IGNOREHEADER 1
DELIMITER ',';`
          },
          'Substitua ACCOUNT pelo seu account ID.'
        ]
      },
      {
        title: 'Executar análises',
        content: [
          'Exemplos de queries analíticas:',
          {
            type: 'code',
            value: `-- Vendas por produto
SELECT produto, SUM(valor) as total_vendas
FROM analytics.vendas
GROUP BY produto
ORDER BY total_vendas DESC;

-- Vendas por mês
SELECT 
    DATE_TRUNC('month', data_venda) as mes,
    SUM(valor) as total
FROM analytics.vendas
GROUP BY mes
ORDER BY mes;

-- Top 10 clientes
SELECT 
    cliente_id,
    SUM(valor) as total_gasto
FROM analytics.vendas
GROUP BY cliente_id
ORDER BY total_gasto DESC
LIMIT 10;`
          }
        ]
      },
      {
        title: 'Criar views e materialized views',
        content: [
          'Crie views para consultas frequentes:',
          {
            type: 'code',
            value: `CREATE VIEW analytics.vendas_resumo AS
SELECT 
    produto,
    COUNT(*) as num_vendas,
    SUM(valor) as total,
    AVG(valor) as media
FROM analytics.vendas
GROUP BY produto;`
          },
          'Materialized views (para performance):',
          {
            type: 'code',
            value: `CREATE MATERIALIZED VIEW analytics.vendas_mensais AS
SELECT 
    DATE_TRUNC('month', data_venda) as mes,
    produto,
    SUM(valor) as total
FROM analytics.vendas
GROUP BY mes, produto;`
          }
        ]
      },
      {
        title: 'Conectar com ferramentas de BI',
        content: [
          'Redshift pode ser conectado a:',
          {
            type: 'list',
            items: [
              'Amazon QuickSight',
              'Tableau',
              'Power BI',
              'Jupyter Notebooks'
            ]
          },
          'Para QuickSight:',
          {
            type: 'list',
            items: [
              'Acesse QuickSight',
              'Add data source > Redshift',
              'Configure conexão',
              'Crie visualizações'
            ]
          },
          {
            type: 'link',
            url: 'https://docs.aws.amazon.com/redshift/latest/dg/getting-started.html'
          }
        ]
      }
    ],
    references: [
      {
        title: 'Documentação: Amazon Redshift Getting Started',
        url: 'https://docs.aws.amazon.com/redshift/latest/dg/getting-started.html'
      },
      {
        title: 'Redshift SQL Reference',
        url: 'https://docs.aws.amazon.com/redshift/latest/dg/c_SQL_reference.html'
      },
      {
        title: 'Loading Data from S3',
        url: 'https://docs.aws.amazon.com/redshift/latest/dg/t_Loading-data-from-S3.html'
      }
    ]
  },
  {
    id: 10,
    title: 'Implementar um Pipeline de Dados com AWS Glue e S3',
    difficulty: 'Avançado',
    estimatedTime: '2-3 horas',
    services: ['Glue', 'S3'],
    freeTier: 'Compatível com créditos AWS ($100 USD iniciais): Glue e S3 oferecem limites no modelo sempre gratuito (consulte documentação para valores atuais). Processamento adicional além dos limites sempre gratuitos consumirá créditos. Consulte a documentação oficial para limites atuais.',
    prerequisites: [
      'Conta AWS ativa',
      'Conhecimento básico de Python',
      'Dados em formato CSV, JSON, ou Parquet',
      'Compreensão básica de ETL (Extract, Transform, Load)'
    ],
    steps: [
      {
        title: 'Preparar dados de origem',
        content: [
          'Crie buckets S3 para organizar os dados:',
          {
            type: 'list',
            items: [
              'Bucket para dados brutos: meu-bucket-raw',
              'Bucket para dados processados: meu-bucket-processed',
              'Bucket para dados transformados: meu-bucket-transformed'
            ]
          },
          'Faça upload de dados de exemplo:',
          {
            type: 'list',
            items: [
              'Crie arquivos CSV com dados (ex: vendas.csv, clientes.csv)',
              'Faça upload para s3://meu-bucket-raw/input/',
              'Estrutura recomendada: s3://bucket/input/ano/mes/dia/arquivo.csv'
            ]
          }
        ]
      },
      {
        title: 'Criar Glue Database',
        content: [
          'Acesse AWS Glue no console.',
          'No menu lateral, clique em "Databases".',
          'Clique em "Add database".',
          'Configure:',
          {
            type: 'list',
            items: [
              'Database name: analytics_db',
              'Description: Database para dados analíticos'
            ]
          },
          'Clique em "Create database".'
        ]
      },
      {
        title: 'Criar Glue Crawler',
        content: [
          'O Crawler vai descobrir o schema dos dados automaticamente.',
          'Clique em "Crawlers" > "Add crawler".',
          'Configure:',
          {
            type: 'list',
            items: [
              'Crawler name: raw-data-crawler',
              'Description: Crawler para dados brutos'
            ]
          },
          'Na etapa "Add a data store":',
          {
            type: 'list',
            items: [
              'Data store: S3',
              'Include path: s3://meu-bucket-raw/input/',
              'Exclude pattern: (deixe vazio)'
            ]
          },
          'Na etapa "Add another data store": Selecione "No".',
          'Na etapa "Choose an IAM role":',
          {
            type: 'list',
            items: [
              'Create an IAM role: AWSGlueServiceRole',
              'Ou use uma role existente com permissões S3 e Glue'
            ]
          },
          'Na etapa "Create a schema for each S3 path": Selecione "Create a single schema for all S3 paths".',
          'Na etapa "Target database": Selecione analytics_db.',
          'Na etapa "Configure the crawler\'s output":',
          {
            type: 'list',
            items: [
              'Table prefix: raw_ (opcional)'
            ]
          },
          'Revise e clique em "Finish".'
        ]
      },
      {
        title: 'Executar o Crawler',
        content: [
          'Selecione o crawler criado.',
          'Clique em "Run crawler".',
          'Aguarde a conclusão (pode levar alguns minutos).',
          'Verifique as tabelas criadas:',
          {
            type: 'list',
            items: [
              'Vá em "Tables" no menu lateral',
              'Você deve ver tabelas criadas automaticamente',
              'Clique em uma tabela para ver o schema descoberto'
            ]
          }
        ]
      },
      {
        title: 'Criar Glue Job para ETL',
        content: [
          'Clique em "ETL Jobs" > "Add job".',
          'Configure:',
          {
            type: 'list',
            items: [
              'Name: transform-data-job',
              'IAM Role: AWSGlueServiceRole',
              'Type: Spark',
              'Glue version: 4.0',
              'Language: Python 3',
              'This job runs: A new script to be authored by you'
            ]
          },
          'Clique em "Next" > "Save job and edit script".'
        ]
      },
      {
        title: 'Escrever script ETL',
        content: [
          'No editor de scripts, substitua o código por:',
          {
            type: 'code',
            value: `import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job

## @params: [JOB_NAME]
args = getResolvedOptions(sys.argv, ['JOB_NAME'])

sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args['JOB_NAME'], args)

# Ler dados da tabela criada pelo crawler
datasource = glueContext.create_dynamic_frame.from_catalog(
    database="analytics_db",
    table_name="raw_vendas",  # Substitua pelo nome da sua tabela
    transformation_ctx="datasource"
)

# Aplicar transformações
# Exemplo: Filtrar dados, adicionar colunas, etc.
def transform_data(record):
    # Adicionar coluna calculada
    record["valor_total"] = record["quantidade"] * record["preco_unitario"]
    return record

mapped_datasource = Map.apply(
    frame=datasource,
    f=transform_data,
    transformation_ctx="mapped_datasource"
)

# Converter para DataFrame Spark para operações mais complexas
df = mapped_datasource.toDF()

# Exemplo de transformação: Agrupar por produto
df_transformed = df.groupBy("produto").agg({
    "valor_total": "sum",
    "quantidade": "sum"
}).withColumnRenamed("sum(valor_total)", "total_vendas") \\
  .withColumnRenamed("sum(quantidade)", "total_quantidade")

# Converter de volta para DynamicFrame
dynamic_frame = DynamicFrame.fromDF(df_transformed, glueContext, "dynamic_frame")

# Escrever dados transformados no S3
datasink = glueContext.write_dynamic_frame.from_options(
    frame=dynamic_frame,
    connection_type="s3",
    connection_options={
        "path": "s3://meu-bucket-processed/output/"
    },
    format="parquet",  # Parquet é mais eficiente que CSV
    transformation_ctx="datasink"
)

job.commit()`
          },
          'Ajuste os nomes das tabelas e buckets conforme seu caso.'
        ]
      },
      {
        title: 'Configurar job properties',
        content: [
          'Na aba "Job details":',
          {
            type: 'list',
            items: [
              'Worker type: G.1X (2 vCPU, 8 GB RAM) - menor custo',
              'Number of workers: 2 (ajuste conforme necessário - custos serão cobertos pelos créditos)',
              'Job timeout: 60 minutos'
            ]
          },
          'Na aba "Security configuration, script libraries, and job parameters":',
          {
            type: 'list',
            items: [
              'Job parameters: Adicione se necessário',
              'Python library path: Para bibliotecas customizadas'
            ]
          }
        ]
      },
      {
        title: 'Executar o job',
        content: [
          'Salve o script.',
          'Clique em "Run job".',
          'Aguarde a conclusão (pode levar alguns minutos).',
          'Monitore na aba "Runs":',
          {
            type: 'list',
            items: [
              'Status: Running, Succeeded, ou Failed',
              'Verifique os logs em caso de erro'
            ]
          }
        ]
      },
      {
        title: 'Verificar dados transformados',
        content: [
          'Acesse o bucket S3 de destino:',
          {
            type: 'list',
            items: [
              's3://meu-bucket-processed/output/',
              'Verifique se os arquivos Parquet foram criados'
            ]
          },
          'Crie um novo crawler para os dados transformados:',
          {
            type: 'list',
            items: [
              'Crawler name: processed-data-crawler',
              'Data store: s3://meu-bucket-processed/output/',
              'Target database: analytics_db',
              'Table prefix: processed_'
            ]
          },
          'Execute o crawler para criar tabelas dos dados transformados.'
        ]
      },
      {
        title: 'Agendar o job (opcional)',
        content: [
          'Para executar automaticamente:',
          {
            type: 'list',
            items: [
              'Vá em "Triggers" > "Add trigger"',
              'Trigger type: Scheduled',
              'Schedule: cron(0 2 * * ? *) - executa diariamente às 2h',
              'Target: Selecione seu job',
              'Clique em "Add trigger"'
            ]
          },
          {
            type: 'link',
            url: 'https://docs.aws.amazon.com/glue/latest/dg/getting-started.html'
          }
        ]
      }
    ],
    references: [
      {
        title: 'Documentação: AWS Glue Developer Guide',
        url: 'https://docs.aws.amazon.com/glue/latest/dg/getting-started.html'
      },
      {
        title: 'Tutorial: Building ETL Jobs',
        url: 'https://docs.aws.amazon.com/glue/latest/dg/tutorial-etl.html'
      },
      {
        title: 'Glue PySpark API Reference',
        url: 'https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api.html'
      }
    ]
  }
];

