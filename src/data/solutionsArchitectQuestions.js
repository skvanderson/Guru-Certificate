// Questões originais de preparação SAA-C03: 6 segurança, 5 resiliência, 5 desempenho e 4 custos.
// Referências técnicas por questão; uma resposta correta para compatibilidade com o simulado.
export const solutionsArchitectQuestions = [
  {
    "id": 1,
    "domain": "secure",
    "title": {
      "pt-BR": "Segurança - Acesso S3 e KMS entre contas",
      "en": "Security - Cross-account S3 and KMS access"
    },
    "description": {
      "pt-BR": "Uma empresa mantém relatórios financeiros no prefixo fechamento/ de um bucket S3 na conta A, com Block Public Access e SSE-KMS usando uma chave gerenciada pelo cliente. Um job em EC2 na conta B deve ler somente esse prefixo com sua própria IAM role, sem assumir roles na conta A. Não há políticas de negação explícita. A equipe já concedeu s3:GetObject à role na conta B, mas recebe AccessDenied. A solução deve preservar o isolamento entre contas e o menor privilégio.",
      "en": "A company stores financial reports under the fechamento/ prefix of an S3 bucket in account A, with Block Public Access and SSE-KMS using a customer managed key. An EC2 job in account B must read only this prefix using its own IAM role, without assuming roles in account A. There are no explicit deny policies. The team has granted s3:GetObject to the role in account B but receives AccessDenied. The solution must preserve account isolation and least privilege."
    },
    "question": {
      "pt-BR": "Qual conjunto de permissões completa o acesso necessário?",
      "en": "Which set of permissions completes the required access?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Adicionar s3:GetObject e kms:Decrypt à role da conta B, mantendo as políticas do bucket e da chave restritas à conta A.",
          "en": "Add s3:GetObject and kms:Decrypt to the role in account B, keeping the bucket and key policies restricted to account A."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A política de identidade não basta para acesso entre contas. O bucket precisa autorizar a role externa e a chave KMS também deve permitir seu uso pela conta B.",
          "en": "An identity policy alone is insufficient for cross-account access. The bucket must authorize the external role, and the KMS key must also allow use by account B."
        }
      },
      {
        "title": {
          "pt-BR": "Autorizar a role B no bucket apenas para fechamento/*; permitir kms:Decrypt na key policy e na política IAM da role B, para a chave usada.",
          "en": "Authorize role B in the bucket only for fechamento/*; allow kms:Decrypt in both the key policy and role B IAM policy for the key in use."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "S3 e KMS avaliam autorizações separadamente. A bucket policy concede leitura entre contas no prefixo; a key policy e a política IAM da conta B autorizam a descriptografia com a chave específica.",
          "en": "S3 and KMS evaluate authorization separately. The bucket policy grants cross-account reads on the prefix; the key policy and account B IAM policy authorize decryption with the specific key."
        }
      },
      {
        "title": {
          "pt-BR": "Autorizar a role B no bucket e trocar SSE-KMS por SSE-S3 somente para novos uploads, sem modificar os relatórios existentes.",
          "en": "Authorize role B in the bucket and switch from SSE-KMS to SSE-S3 for new uploads only, leaving existing reports unchanged."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A troca da configuração padrão não recriptografa objetos existentes. Os relatórios atuais continuam dependendo da chave KMS e a alteração abandona o controle de criptografia exigido.",
          "en": "Changing default encryption does not re-encrypt existing objects. Current reports still depend on the KMS key, and the change abandons the required encryption control."
        }
      },
      {
        "title": {
          "pt-BR": "Conceder kms:Decrypt à role B na key policy e usar uma ACL pública de leitura para os objetos do prefixo.",
          "en": "Grant role B kms:Decrypt in the key policy and use a public-read ACL for objects in the prefix."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O acesso público viola o isolamento e é bloqueado pela configuração do bucket. Além disso, a conta externa precisa de autorização IAM para usar a chave, não apenas da key policy.",
          "en": "Public access violates isolation and is blocked by the bucket configuration. The external account also needs IAM authorization to use the key, not just the key policy."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Acesso entre contas exige avaliar as camadas S3 e KMS, restringindo recursos e principals em ambas. Uma permissão para ler o objeto não implica permissão para descriptografá-lo.",
      "en": "Cross-account access requires evaluating both S3 and KMS layers, restricting resources and principals in each. Permission to read an object does not imply permission to decrypt it."
    },
    "references": [
      "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html"
    ]
  },
  {
    "id": 2,
    "domain": "secure",
    "title": {
      "pt-BR": "Segurança - Guardrails em AWS Organizations",
      "en": "Security - AWS Organizations guardrails"
    },
    "description": {
      "pt-BR": "Uma organização possui dezenas de contas-membro em uma OU de produção. Auditorias identificaram que administradores locais podem interromper trilhas do CloudTrail ou excluí-las. A equipe central deve impedir essas ações em todas as contas dessa OU, inclusive por seus usuários root, sem remover as demais permissões administrativas. A trilha organizacional e suas permissões já estão configuradas. A restrição não precisa se aplicar à conta de gerenciamento.",
      "en": "An organization has dozens of member accounts in a production OU. Audits found that local administrators can stop or delete CloudTrail trails. The central team must prevent these actions throughout the OU, including by member-account root users, without removing other administrative permissions. The organization trail and its permissions are already configured. The restriction need not apply to the management account."
    },
    "question": {
      "pt-BR": "Qual controle central atende ao requisito?",
      "en": "Which central control meets the requirement?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Anexar uma permissions boundary que negue cloudtrail:StopLogging e cloudtrail:DeleteTrail a todas as roles administrativas.",
          "en": "Attach a permissions boundary denying cloudtrail:StopLogging and cloudtrail:DeleteTrail to all administrative roles."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Boundaries limitam identidades IAM às quais são anexadas. Elas não restringem o usuário root da conta nem asseguram cobertura automática de novas identidades na OU.",
          "en": "Boundaries limit the IAM identities to which they are attached. They do not restrict account root users or ensure automatic coverage of new identities in the OU."
        }
      },
      {
        "title": {
          "pt-BR": "Anexar uma SCP que permita apenas cloudtrail:StartLogging e cloudtrail:DescribeTrails à OU de produção.",
          "en": "Attach an SCP allowing only cloudtrail:StartLogging and cloudtrail:DescribeTrails to the production OU."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma allow list com apenas essas ações também limita operações administrativas de outros serviços. Isso não preserva as demais permissões necessárias à produção.",
          "en": "An allow list containing only these actions also limits administrative operations on other services. It does not preserve the other permissions required for production."
        }
      },
      {
        "title": {
          "pt-BR": "Criar uma regra AWS Config que detecte trilhas interrompidas e execute uma Lambda para reiniciá-las.",
          "en": "Create an AWS Config rule detecting stopped trails and run a Lambda to restart them."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Esse é um controle detectivo com remediação após o evento. Existe uma janela sem logging e a ação proibida ainda pode ocorrer; o requisito é prevenção.",
          "en": "This is a detective control with remediation after the event. A logging gap remains, and the prohibited action can still occur; the requirement is prevention."
        }
      },
      {
        "title": {
          "pt-BR": "Anexar à OU uma SCP com Deny para cloudtrail:StopLogging e cloudtrail:DeleteTrail, preservando as permissões efetivas das demais ações.",
          "en": "Attach an SCP with Deny for cloudtrail:StopLogging and cloudtrail:DeleteTrail to the OU, preserving effective permissions for other actions."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Deny da SCP limita as permissões nas contas-membro, inclusive root, e prevalece sobre AdministratorAccess. A SCP estabelece um limite; as políticas IAM continuam necessárias para conceder as ações permitidas.",
          "en": "The SCP deny limits permissions in member accounts, including root, and overrides AdministratorAccess. An SCP sets a boundary; IAM policies are still required to grant permitted actions."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Use guardrails preventivos na OU para restringir contas-membro. SCPs não concedem permissões e não restringem a conta de gerenciamento nem service-linked roles.",
      "en": "Use preventive OU guardrails to restrict member accounts. SCPs do not grant permissions and do not restrict the management account or service-linked roles."
    },
    "references": [
      "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html"
    ]
  },
  {
    "id": 3,
    "domain": "secure",
    "title": {
      "pt-BR": "Segurança - SaaS privado com CIDRs sobrepostos",
      "en": "Security - Private SaaS with overlapping CIDRs"
    },
    "description": {
      "pt-BR": "Um fornecedor oferece uma API TCP em uma VPC. Clientes de outras contas AWS, na mesma Região, precisam consumir apenas essa API por endereços privados. Várias VPCs dos clientes usam o mesmo CIDR da VPC do fornecedor. Não é permitido expor o serviço à internet, renumerar redes ou conceder conectividade geral entre as VPCs. O fornecedor deve aprovar quais clientes podem estabelecer a conexão.",
      "en": "A provider hosts a TCP API in a VPC. Customers in other AWS accounts in the same Region must consume only this API through private addresses. Several customer VPCs use the same CIDR as the provider VPC. Exposing the service to the internet, renumbering networks, or granting general VPC connectivity is prohibited. The provider must approve which customers may establish a connection."
    },
    "question": {
      "pt-BR": "Qual arquitetura atende a essas restrições com menor complexidade?",
      "en": "Which architecture meets these constraints with the least complexity?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Publicar um endpoint service com Network Load Balancer e AWS PrivateLink; autorizar principals e aceitar endpoints de interface dos clientes.",
          "en": "Publish an endpoint service with a Network Load Balancer and AWS PrivateLink; authorize principals and accept customer interface endpoints."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "PrivateLink expõe o serviço por interfaces privadas do consumidor sem rotear as redes completas. A sobreposição de CIDRs não impede esse modelo e o fornecedor controla permissões e aceitação de conexões.",
          "en": "PrivateLink exposes the service through private consumer interfaces without routing entire networks. Overlapping CIDRs do not prevent this model, and the provider controls permissions and connection acceptance."
        }
      },
      {
        "title": {
          "pt-BR": "Criar VPC peering com cada cliente e anunciar somente a rota do endereço privado do balanceador.",
          "en": "Create VPC peering with every customer and advertise only a route to the private load balancer address."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "VPC peering não permite CIDRs sobrepostos. Restringir a rota a um destino específico não elimina essa incompatibilidade de endereçamento.",
          "en": "VPC peering does not allow overlapping CIDRs. Restricting the route to a specific destination does not remove that addressing incompatibility."
        }
      },
      {
        "title": {
          "pt-BR": "Conectar todas as VPCs a um Transit Gateway com uma tabela de rotas compartilhada.",
          "en": "Connect all VPCs to a Transit Gateway with a shared route table."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um Transit Gateway não resolve automaticamente endereços sobrepostos. Essa solução também introduz conectividade de rede mais ampla do que a exposição isolada de uma API.",
          "en": "A Transit Gateway does not automatically resolve overlapping addresses. This solution also introduces broader network connectivity than isolated API exposure."
        }
      },
      {
        "title": {
          "pt-BR": "Publicar um ALB internet-facing, restringir os security groups aos IPs públicos dos clientes e exigir TLS.",
          "en": "Publish an internet-facing ALB, restrict security groups to customer public IPs, and require TLS."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "TLS e filtragem por IP não tornam o caminho privado. A API continuaria exposta por um endpoint público, contrariando uma restrição explícita.",
          "en": "TLS and IP filtering do not make the path private. The API would still be exposed through a public endpoint, violating an explicit constraint."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Escolha exposição de serviço, em vez de conectividade entre redes, quando o consumidor precisa apenas de uma API e os CIDRs se sobrepõem.",
      "en": "Choose service exposure rather than network connectivity when consumers need only one API and CIDRs overlap."
    },
    "references": [
      "https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-share-your-services.html"
    ]
  },
  {
    "id": 4,
    "domain": "secure",
    "title": {
      "pt-BR": "Segurança - Distribuição de conteúdo pago",
      "en": "Security - Paid content distribution"
    },
    "description": {
      "pt-BR": "Uma plataforma de cursos armazena vídeos segmentados e apostilas em um bucket S3 privado, criptografado com SSE-KMS. Cada assinante autenticado deve acessar centenas de arquivos de um curso durante uma hora. O player não pode modificar as URLs de cada segmento. O conteúdo deve ser entregue globalmente com cache, e usuários não podem contornar a autorização acessando diretamente o S3. A aplicação já verifica as assinaturas dos alunos.",
      "en": "A learning platform stores segmented videos and course documents in a private S3 bucket encrypted with SSE-KMS. Each authenticated subscriber must access hundreds of course files for one hour. The player cannot modify individual segment URLs. Content must be cached and delivered globally, and users must not bypass authorization through direct S3 access. The application already verifies student subscriptions."
    },
    "question": {
      "pt-BR": "Qual configuração atende a todos os requisitos?",
      "en": "Which configuration meets all requirements?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Usar CloudFront com OAC e liberar o cache behavior para todos; autenticar somente a página HTML que contém o player.",
          "en": "Use CloudFront with OAC and make the cache behavior public; authenticate only the HTML page containing the player."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "OAC protege a origem, mas não autoriza o espectador. URLs do CloudFront ainda permitiriam baixar vídeos sem assinatura se o cache behavior fosse público.",
          "en": "OAC protects the origin but does not authorize viewers. CloudFront URLs would still allow downloads without a subscription if the cache behavior were public."
        }
      },
      {
        "title": {
          "pt-BR": "Emitir uma URL pré-assinada do S3 para cada segmento e usar o endpoint de website do bucket como origem CloudFront.",
          "en": "Issue an S3 presigned URL for every segment and use the bucket website endpoint as the CloudFront origin."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "As URLs precisariam mudar em cada segmento. Além disso, o endpoint de website não suporta OAC e não atende ao modelo de origem privada exigido.",
          "en": "URLs would have to change for each segment. The website endpoint also does not support OAC and does not meet the required private-origin model."
        }
      },
      {
        "title": {
          "pt-BR": "Usar CloudFront com cookies assinados e política customizada para o caminho do curso, v?lida por uma hora; configurar OAC na origem S3 REST, bucket policy e key policy restritas à distribuição.",
          "en": "Use CloudFront signed cookies with a custom policy for the course path, valid for one hour; configure OAC on the S3 REST origin and restrict bucket and key policies to the distribution."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Cookies assinados autorizam vários arquivos sem alterar suas URLs. OAC com assinatura protege o acesso à origem; as políticas S3 e KMS permitem à distribuição ler os objetos privados e descriptografá-los.",
          "en": "Signed cookies authorize multiple files without changing their URLs. Signing OAC protects origin access; S3 and KMS policies allow the distribution to read and decrypt private objects."
        }
      },
      {
        "title": {
          "pt-BR": "Usar CloudFront com URLs assinadas por arquivo e OAC no S3 REST; deixar o player reutilizar as URLs originais sem parâmetros.",
          "en": "Use per-file CloudFront signed URLs and OAC on S3 REST; have the player reuse original URLs without parameters."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "URLs assinadas precisam carregar a assinatura exigida pelo behavior. Reutilizar URLs sem parâmetros não transmite essa autorização; cookies assinados satisfazem a restrição do player.",
          "en": "Signed URLs must carry the signature required by the behavior. Reusing URLs without parameters does not convey that authorization; signed cookies satisfy the player constraint."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Separe autorização do espectador e proteção da origem: cookies assinados controlam a sessão de acesso; OAC, bucket policy e key policy protegem o S3 privado.",
      "en": "Separate viewer authorization from origin protection: signed cookies control the access session; OAC, the bucket policy, and the key policy protect private S3 content."
    },
    "references": [
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html",
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html"
    ]
  },
  {
    "id": 5,
    "domain": "secure",
    "title": {
      "pt-BR": "Segurança - Rotação de credenciais do banco",
      "en": "Security - Database credential rotation"
    },
    "description": {
      "pt-BR": "Uma aplicação em ECS Fargate conecta-se a um RDS PostgreSQL privado. A senha do usuário da aplicação está embutida na imagem do contêiner e deve passar a ser rotacionada automaticamente a cada 30 dias. A equipe não quer reconstruir imagens nem redeployar todas as tasks a cada rotação. As tasks podem adaptar o código para buscar e atualizar credenciais em execução, e a função de rotação precisa alcançar o banco sem abrir acesso público.",
      "en": "An ECS Fargate application connects to a private RDS PostgreSQL database. Its application-user password is embedded in the container image and must be automatically rotated every 30 days. The team does not want to rebuild images or redeploy all tasks on each rotation. Tasks can change their code to retrieve and refresh credentials at runtime, and the rotation function must reach the database without opening public access."
    },
    "question": {
      "pt-BR": "Qual solução atende ao requisito com menor operação manual?",
      "en": "Which solution meets the requirement with the least manual operation?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Armazenar a senha no Parameter Store como SecureString e ativar uma política de expiração para atualizar automaticamente a senha no PostgreSQL.",
          "en": "Store the password as a Parameter Store SecureString and enable an expiration policy to automatically update the PostgreSQL password."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Expiração de parâmetro não realiza a troca da senha no banco. Criptografar o valor não implementa o fluxo de rotação sincronizado entre armazenamento e PostgreSQL.",
          "en": "Parameter expiration does not change the database password. Encrypting the value does not implement a coordinated rotation workflow between storage and PostgreSQL."
        }
      },
      {
        "title": {
          "pt-BR": "Usar Secrets Manager com rotação Lambda conectada à VPC; conceder acesso mínimo à task role e buscar o segredo em execução com cache e atualização.",
          "en": "Use Secrets Manager with VPC-connected Lambda rotation; grant the task role least-privilege access and retrieve the secret at runtime with caching and refresh."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A rotação atualiza o segredo e o banco. A task role evita credenciais AWS fixas e a leitura em execução permite obter a versão atual sem redeploy. Security groups devem permitir a comunicação da Lambda com o RDS.",
          "en": "Rotation updates both the secret and database. The task role avoids static AWS credentials, and runtime retrieval obtains the current version without redeployment. Security groups must allow Lambda-to-RDS communication."
        }
      },
      {
        "title": {
          "pt-BR": "Usar Secrets Manager com rotação, mas injetar o valor somente como variável de ambiente ao iniciar cada task Fargate.",
          "en": "Use Secrets Manager with rotation, but inject its value only as an environment variable when each Fargate task starts."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O valor injetado não é atualizado nas tasks em execução quando o segredo muda. Essa abordagem exige novas tasks para consumir a senha rotacionada.",
          "en": "The injected value is not refreshed in running tasks when the secret changes. This approach requires new tasks to consume the rotated password."
        }
      },
      {
        "title": {
          "pt-BR": "Criptografar a senha com uma chave KMS de rotação automática e manter o ciphertext na imagem do contêiner.",
          "en": "Encrypt the password with an automatically rotating KMS key and keep the ciphertext in the container image."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Rotacionar material da chave KMS não altera a senha PostgreSQL. O segredo permanece estático na imagem, mesmo que sua proteção criptográfica seja gerenciada.",
          "en": "Rotating KMS key material does not change the PostgreSQL password. The secret remains static in the image even if its cryptographic protection is managed."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Rotação de chaves e rotação de credenciais são operações distintas. Para evitar redeploy, a aplicação precisa consumir a credencial atual em execução.",
      "en": "Key rotation and credential rotation are different operations. To avoid redeployment, the application must consume the current credential at runtime."
    },
    "references": [
      "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html"
    ]
  },
  {
    "id": 6,
    "domain": "secure",
    "title": {
      "pt-BR": "Segurança - Retenção imutável de documentos",
      "en": "Security - Immutable document retention"
    },
    "description": {
      "pt-BR": "Uma instituição deve preservar versões de documentos por sete anos. Nenhum usuário, incluindo o root da conta AWS, pode excluir uma versão protegida ou reduzir sua retenção antes do prazo. Novas versões do mesmo documento podem ser gravadas sem alterar as anteriores. A solução precisa usar armazenamento gerenciado e permitir acesso eventual para auditorias. Os documentos continuarão criptografados, com acesso e ciclo de vida da chave protegidos separadamente.",
      "en": "An institution must preserve document versions for seven years. No user, including the AWS account root user, may delete a protected version or shorten its retention before the deadline. New versions of the same document may be written without modifying previous versions. The solution must use managed storage and support occasional audit access. Documents will remain encrypted, with key access and lifecycle protected separately."
    },
    "question": {
      "pt-BR": "Qual configuração implementa a imutabilidade exigida?",
      "en": "Which configuration implements the required immutability?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Habilitar S3 Versioning e Object Lock, com retenção padrão de sete anos em modo Compliance para as novas versões.",
          "en": "Enable S3 Versioning and Object Lock, with seven-year default retention in Compliance mode for new versions."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Compliance impede a exclusão de versões protegidas e a redução de sua retenção, inclusive pelo root. O bloqueio é por versão; novas versões podem ser criadas sem sobrescrever as protegidas.",
          "en": "Compliance prevents deletion of protected versions and shortening their retention, including by root. Locking applies per version; new versions can be created without overwriting protected ones."
        }
      },
      {
        "title": {
          "pt-BR": "Habilitar S3 Versioning e Object Lock em modo Governance, concedendo s3:BypassGovernanceRetention somente aos administradores.",
          "en": "Enable S3 Versioning and Object Lock in Governance mode, granting s3:BypassGovernanceRetention only to administrators."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Governance permite contornar a retenção com a permissão apropriada. O requisito proíbe esse bypass inclusive para administradores e root, tornando Compliance a escolha adequada.",
          "en": "Governance allows retention bypass with the appropriate permission. The requirement prohibits bypass even for administrators and root, making Compliance the suitable choice."
        }
      },
      {
        "title": {
          "pt-BR": "Habilitar Versioning e uma regra Lifecycle que expire versões não atuais depois de sete anos, sem Object Lock.",
          "en": "Enable Versioning and a Lifecycle rule expiring noncurrent versions after seven years, without Object Lock."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Versioning permite recuperar alterações, mas versões ainda podem ser excluídas permanentemente por usuários autorizados. Lifecycle agenda transições ou expiração; não estabelece retenção WORM.",
          "en": "Versioning allows recovery from changes, but authorized users can still permanently delete versions. Lifecycle schedules transitions or expiration; it does not establish WORM retention."
        }
      },
      {
        "title": {
          "pt-BR": "Habilitar Object Lock com legal hold e permitir que a equipe de auditoria remova o hold quando necessário.",
          "en": "Enable Object Lock with a legal hold and allow the audit team to remove the hold when necessary."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Legal hold não define um prazo fixo e pode ser removido por quem possui a permissão correspondente. Isoladamente, não garante sete anos de retenção irrevogável.",
          "en": "A legal hold does not define a fixed duration and can be removed by identities with the corresponding permission. Alone, it does not guarantee seven years of irrevocable retention."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Imutabilidade aplica-se às versões protegidas, não à proibição de novos uploads. Retenção Compliance deve ser planejada antes da gravação, pois não pode ser encurtada.",
      "en": "Immutability applies to protected versions, not to preventing new uploads. Compliance retention must be planned before writing because it cannot be shortened."
    },
    "references": [
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html"
    ]
  },
  {
    "id": 7,
    "domain": "resilient",
    "title": {
      "pt-BR": "Resiliência - Filas e processamento idempotente",
      "en": "Resilience - Queues and idempotent processing"
    },
    "description": {
      "pt-BR": "Uma aplicação recebe pedidos em uma fila SQS Standard, consumida por workers EC2 em duas AZs. Cada pedido leva entre 2 e 8 minutos, mas o visibility timeout é de 30 segundos. Em picos, dois workers processam o mesmo pedido e cobranças são duplicadas. Alguns pedidos com dados inválidos são tentados indefinidamente. A ordem global não importa, mas falhas transitórias devem ser recuperáveis sem perder pedidos.",
      "en": "An application receives orders in an SQS Standard queue consumed by EC2 workers in two AZs. Each order takes 2 to 8 minutes, but the visibility timeout is 30 seconds. During peaks, two workers process the same order and duplicate charges occur. Some invalid orders are retried indefinitely. Global ordering is irrelevant, but transient failures must be recoverable without losing orders."
    },
    "question": {
      "pt-BR": "Qual conjunto de alterações resolve as causas com maior robustez?",
      "en": "Which set of changes addresses the causes most robustly?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Ativar long polling e excluir cada mensagem imediatamente após recebê-la, antes de iniciar a cobrança.",
          "en": "Enable long polling and delete each message immediately after receipt, before starting the charge."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Long polling reduz respostas vazias, não duplicação. Excluir antes de concluir remove a possibilidade de retry: uma falha do worker pode perder o pedido.",
          "en": "Long polling reduces empty responses, not duplication. Deleting before completion removes retry capability: a worker failure can lose the order."
        }
      },
      {
        "title": {
          "pt-BR": "Trocar para SQS FIFO e manter o timeout de 30 segundos, confiando na deduplicação da fila para garantir uma única cobrança.",
          "en": "Switch to SQS FIFO and keep the 30-second timeout, relying on queue deduplication to guarantee a single charge."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Deduplicação de envio não torna efeitos externos exatamente uma vez. Uma mensagem pode ser reprocessada após expirar o timeout; cobrança ainda exige idempotência.",
          "en": "Send deduplication does not make external side effects exactly once. A message can be reprocessed after timeout expiration; charging still requires idempotency."
        }
      },
      {
        "title": {
          "pt-BR": "Ajustar ou renovar o visibility timeout durante o trabalho; cobrar com chave idempotente, excluir somente após sucesso e configurar DLQ com redrive policy.",
          "en": "Adjust or renew visibility timeout during processing; charge with an idempotency key, delete only after success, and configure a DLQ with a redrive policy."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Timeout compatível evita reentrega prematura; idempotência cobre retries e duplicatas residuais. Exclusão após sucesso preserva recuperação e a DLQ isola pedidos que excedem o limite de tentativas.",
          "en": "A suitable timeout avoids premature redelivery; idempotency covers retries and residual duplicates. Deleting after success preserves recovery, and the DLQ isolates orders exceeding the retry limit."
        }
      },
      {
        "title": {
          "pt-BR": "Aumentar a retenção da fila para 14 dias e escalar workers pela utilização média de CPU, sem alterar o processamento.",
          "en": "Increase queue retention to 14 days and scale workers by average CPU utilization without changing processing."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Retenção controla quanto tempo a mensagem pode permanecer na fila, não sua invisibilidade. Mais workers não corrigem timeout curto, cobranças não idempotentes ou mensagens inválidas.",
          "en": "Retention controls how long messages may stay in the queue, not their invisibility. More workers do not fix a short timeout, non-idempotent charges, or invalid messages."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Distingua retenção, invisibilidade e deduplicação. Confiabilidade do consumidor depende de confirmação após sucesso, idempotência e tratamento separado de falhas persistentes.",
      "en": "Distinguish retention, invisibility, and deduplication. Consumer reliability depends on acknowledgment after success, idempotency, and separate handling of persistent failures."
    },
    "references": [
      "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html"
    ]
  },
  {
    "id": 8,
    "domain": "resilient",
    "title": {
      "pt-BR": "Resiliência - Disponibilidade e leitura no RDS",
      "en": "Resilience - RDS availability and read scaling"
    },
    "description": {
      "pt-BR": "Uma aplicação usa RDS PostgreSQL Single-AZ. Deve recuperar automaticamente o serviço após a perda da AZ do banco. Relatórios analíticos provocam gargalo de leitura e podem aceitar até 30 segundos de atraso. A consulta de confirmação de uma compra, porém, precisa enxergar a escrita recém-confirmada. A equipe quer preservar o PostgreSQL e fazer apenas alterações pequenas no roteamento de consultas da aplicação.",
      "en": "An application uses Single-AZ RDS PostgreSQL. It must automatically recover service after losing the database AZ. Analytical reports create a read bottleneck and can tolerate up to 30 seconds of lag. A purchase confirmation query, however, must see the just-committed write. The team wants to retain PostgreSQL and make only small changes to application query routing."
    },
    "question": {
      "pt-BR": "Qual arquitetura combina corretamente disponibilidade e consistência?",
      "en": "Which architecture correctly combines availability and consistency?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Criar uma read replica em outra AZ, enviar todas as leituras para ela e promovê-la manualmente se o primário falhar.",
          "en": "Create a read replica in another AZ, send all reads to it, and manually promote it if the primary fails."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A promoção manual não atende à recuperação automática. Replicação assíncrona também pode atrasar a confirmação de compra que exige leitura imediata da escrita.",
          "en": "Manual promotion does not meet automatic recovery. Asynchronous replication can also delay purchase confirmation, which requires immediate visibility of the write."
        }
      },
      {
        "title": {
          "pt-BR": "Converter para um deployment Multi-AZ de instância RDS e executar os relatórios diretamente no standby síncrono.",
          "en": "Convert to an RDS Multi-AZ DB instance deployment and run reports directly on the synchronous standby."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O standby de um deployment Multi-AZ de instância não atende consultas de leitura. Essa configuração oferece failover, mas não descarrega os relatórios do primário.",
          "en": "The standby in a Multi-AZ DB instance deployment does not serve read queries. This configuration provides failover but does not offload reports from the primary."
        }
      },
      {
        "title": {
          "pt-BR": "Manter Single-AZ, habilitar backups automáticos e restaurar point-in-time para outra AZ quando um alarme detectar falha.",
          "en": "Keep Single-AZ, enable automated backups, and restore point-in-time into another AZ when an alarm detects failure."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Restauração cria outro banco e requer orquestração e redirecionamento. Não equivale a failover gerenciado; também não remove o gargalo de relatórios.",
          "en": "Restoration creates another database and requires orchestration and redirection. It is not managed failover and does not remove the reporting bottleneck."
        }
      },
      {
        "title": {
          "pt-BR": "Usar RDS Multi-AZ de inst?ncia para failover e uma read replica para relat?rios, com fallback ao prim?rio se o lag exceder 30 segundos; manter escritas e confirma??es no prim?rio.",
          "en": "Use an RDS Multi-AZ DB instance deployment for failover and a read replica for reports, falling back to the primary if lag exceeds 30 seconds; keep writes and confirmations on the primary."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Multi-AZ atende ? disponibilidade; a r?plica ass?ncrona descarrega relat?rios. O fallback trata atrasos acima da toler?ncia, enquanto confirma??es no prim?rio enxergam as escritas rec?m-confirmadas. Dimensione o prim?rio para absorver o fallback.",
          "en": "Multi-AZ addresses availability; the asynchronous replica offloads reports. Fallback handles lag beyond the tolerance, while confirmations on the primary see just-committed writes. Size the primary to absorb fallback traffic."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Alta disponibilidade e escala de leitura são requisitos distintos. Replicação assíncrona não garante um limite de lag, portanto monitore a tolerância operacional dos relatórios.",
      "en": "High availability and read scaling are separate requirements. Asynchronous replication does not guarantee a lag bound, so monitor the operational tolerance of reports."
    },
    "references": [
      "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html"
    ]
  },
  {
    "id": 9,
    "domain": "resilient",
    "title": {
      "pt-BR": "Resiliência - Estado compartilhado entre AZs",
      "en": "Resilience - Shared state across AZs"
    },
    "description": {
      "pt-BR": "Um portal Linux roda em um Auto Scaling group atrás de um ALB, em três AZs. Usuários autenticados perdem a sessão ao trocar de instância, e arquivos enviados desaparecem quando uma instância é terminada. O código exige um diretório POSIX compartilhado para uploads, com leitura e escrita simultâneas. A arquitetura deve tolerar a perda de uma AZ e permitir escala horizontal sem depender de afinidade com uma instância.",
      "en": "A Linux portal runs in an Auto Scaling group behind an ALB across three AZs. Authenticated users lose sessions when requests move to another instance, and uploaded files disappear when an instance terminates. The code requires a shared POSIX directory for uploads with concurrent reads and writes. The architecture must tolerate losing an AZ and scale horizontally without depending on instance affinity."
    },
    "question": {
      "pt-BR": "Qual mudança remove as dependências de estado local?",
      "en": "Which change removes local-state dependencies?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Ativar sticky sessions no ALB e manter sessões e uploads nos volumes EBS de cada instância, com snapshots diários.",
          "en": "Enable ALB sticky sessions and keep sessions and uploads on each instance EBS volume, with daily snapshots."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Afinidade reduz mudanças de instância, mas a falha ou substituição do target perde o acesso ao estado local. Snapshots não fornecem compartilhamento ativo nem continuidade da sessão.",
          "en": "Affinity reduces instance switching, but target failure or replacement loses access to local state. Snapshots do not provide active sharing or session continuity."
        }
      },
      {
        "title": {
          "pt-BR": "Persistir sessões em DynamoDB e uploads em EFS Regional, com mount targets nas AZs usadas e permissões NFS restritas aos servidores.",
          "en": "Persist sessions in DynamoDB and uploads in Regional EFS, with mount targets in the used AZs and NFS permissions restricted to application servers."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "DynamoDB remove a sessão da instância e EFS Regional fornece armazenamento POSIX compartilhado entre AZs. Targets de montagem nas AZs da aplicação permitem acesso sem prender os dados a um servidor.",
          "en": "DynamoDB removes sessions from individual instances, and Regional EFS provides shared POSIX storage across AZs. Mount targets in application AZs enable access without tying data to one server."
        }
      },
      {
        "title": {
          "pt-BR": "Usar EBS Multi-Attach para montar o mesmo volume em todas as instâncias nas três AZs e gravar sessões no volume.",
          "en": "Use EBS Multi-Attach to mount the same volume on every instance across the three AZs and store sessions on it."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "EBS Multi-Attach é limitado a instâncias na mesma AZ e exige coordenação de escrita apropriada. Não fornece um filesystem compartilhado regional para esse desenho.",
          "en": "EBS Multi-Attach is limited to instances in the same AZ and requires suitable write coordination. It does not provide a regional shared filesystem for this design."
        }
      },
      {
        "title": {
          "pt-BR": "Persistir sessões em DynamoDB e usar EFS One Zone com mount target único para todos os uploads.",
          "en": "Persist sessions in DynamoDB and use EFS One Zone with a single mount target for all uploads."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A sessão fica desacoplada, mas EFS One Zone concentra os arquivos em uma AZ. O armazenamento não atende à exigência de tolerar a perda dessa AZ.",
          "en": "Sessions become decoupled, but EFS One Zone concentrates files in one AZ. Storage does not meet the requirement to tolerate losing that AZ."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Uma camada de aplicação com Auto Scaling só é resiliente quando seu estado também sobrevive à substituição de instâncias e à falha de AZ.",
      "en": "An Auto Scaling application tier is resilient only when its state also survives instance replacement and AZ failure."
    },
    "references": [
      "https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html"
    ]
  },
  {
    "id": 10,
    "domain": "resilient",
    "title": {
      "pt-BR": "Resiliência - RTO e RPO na recuperação regional",
      "en": "Resilience - RTO and RPO in regional recovery"
    },
    "description": {
      "pt-BR": "Uma empresa mantém uma aplicação transacional em uma Região com Aurora e uma camada web em EC2. Para desastre regional, definiu RPO de até um minuto e RTO de até dez minutos. Testes mostram que criar a camada web do zero leva 25 minutos, enquanto expandir um ambiente já funcional leva três minutos. A empresa aceita uma Região secundária passiva, mas não quer pagar por duas instalações de capacidade total nem manter escritas simultâneas nas duas Regiões.",
      "en": "A company runs a transactional application in one Region with Aurora and an EC2 web tier. For regional disaster recovery, it requires an RPO of up to one minute and an RTO of up to ten minutes. Tests show that creating the web tier from scratch takes 25 minutes, while scaling an already functional environment takes three minutes. The company accepts a passive secondary Region but does not want two full-capacity deployments or concurrent writes in both Regions."
    },
    "question": {
      "pt-BR": "Qual estratégia oferece o melhor equilíbrio para os objetivos medidos?",
      "en": "Which strategy provides the best balance for the measured objectives?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Manter warm standby com web tier funcional reduzido e Aurora Global Database; monitorar lag e testar promoção, expansão e redirecionamento em um runbook.",
          "en": "Maintain warm standby with a reduced functional web tier and Aurora Global Database; monitor lag and test promotion, scaling, and traffic redirection in a runbook."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O ambiente já funcional evita os 25 minutos de criação. Replicação contínua permite RPO baixo, mas lag e tempo completo de recuperação precisam ser medidos; os objetivos não são garantidos automaticamente.",
          "en": "An already functional environment avoids the 25-minute creation time. Continuous replication enables low RPO, but lag and total recovery time must be measured; objectives are not automatically guaranteed."
        }
      },
      {
        "title": {
          "pt-BR": "Copiar snapshots do Aurora a cada hora e criar banco e servidores na Região secundária somente após o desastre.",
          "en": "Copy Aurora snapshots hourly and create the database and servers in the secondary Region only after a disaster."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Snapshots horários podem perder muito mais que um minuto de dados. A criação da camada web por si só excede o RTO, antes mesmo de restaurar o banco.",
          "en": "Hourly snapshots can lose much more than one minute of data. Creating the web tier alone exceeds the RTO, even before database restoration."
        }
      },
      {
        "title": {
          "pt-BR": "Usar pilot light com banco replicado, deixando a camada web ausente e criando-a a partir de CloudFormation no failover.",
          "en": "Use pilot light with a replicated database, leaving the web tier absent and creating it from CloudFormation during failover."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A replicação ajuda o RPO, mas os testes já demonstram que a criação web leva 25 minutos. Neste cenário, pilot light não atende ao RTO de dez minutos.",
          "en": "Replication helps the RPO, but tests already show web-tier creation takes 25 minutes. In this scenario, pilot light does not meet the ten-minute RTO."
        }
      },
      {
        "title": {
          "pt-BR": "Implantar duas Regiões active-active com capacidade total e aceitar escritas locais independentes em bancos sem replicação.",
          "en": "Deploy two full-capacity active-active Regions and accept independent local writes in databases without replication."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Além de exceder o custo e o modelo de escrita permitidos, bancos independentes não preservam as transações da Região perdida. Capacidade duplicada não substitui replicação de dados.",
          "en": "Besides exceeding the permitted cost and write model, independent databases do not preserve transactions from the lost Region. Duplicate capacity does not replace data replication."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Selecione DR a partir de RTO, RPO e tempos testados de recuperação. Warm standby mantém toda a aplicação operacional em escala reduzida e exige validação do runbook.",
      "en": "Select DR from RTO, RPO, and tested recovery timings. Warm standby keeps the entire application operational at reduced scale and requires runbook validation."
    },
    "references": [
      "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html"
    ]
  },
  {
    "id": 11,
    "domain": "resilient",
    "title": {
      "pt-BR": "Resiliência - Failover baseado na saúde da aplicação",
      "en": "Resilience - Application-aware failover"
    },
    "description": {
      "pt-BR": "Um serviço web possui stacks completas e já dimensionadas em duas Regiões. Apenas a Região primária deve receber tráfego enquanto estiver saudável. Um incidente deixou o ALB e o processo HTTP acessíveis, mas o banco indisponível; uma página estática de health check continuou retornando 200. Clientes usam DNS e aceitam o tempo de propagação associado ao TTL. A recuperação dos dados na Região secundária já é tratada por outro mecanismo.",
      "en": "A web service has complete, pre-scaled stacks in two Regions. Only the primary Region should receive traffic while healthy. An incident left the ALB and HTTP process reachable but the database unavailable; a static health-check page kept returning 200. Clients use DNS and accept TTL-related propagation time. Data recovery in the secondary Region is already handled by another mechanism."
    },
    "question": {
      "pt-BR": "Qual configuração deve controlar o redirecionamento de novas conexões?",
      "en": "Which configuration should control redirection of new connections?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Criar registros weighted no Route 53 com peso 100 para a primária e 100 para a secundária, sem health checks.",
          "en": "Create Route 53 weighted records with weight 100 for primary and 100 for secondary, without health checks."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Pesos iguais distribuem tráfego para ambas as Regiões mesmo sem falha. Sem avaliação de saúde, a primária com banco indisponível continua elegível.",
          "en": "Equal weights distribute traffic to both Regions even without failure. Without health evaluation, the primary with an unavailable database remains eligible."
        }
      },
      {
        "title": {
          "pt-BR": "Usar registros failover e verificar apenas se a porta TCP 443 do ALB primário aceita conexões.",
          "en": "Use failover records and check only whether TCP port 443 on the primary ALB accepts connections."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A porta pode permanecer acessível durante a falha da dependência. Esse teste confirma conectividade, não a capacidade de atender uma transação da aplicação.",
          "en": "The port can remain reachable during a dependency failure. This test confirms connectivity, not the ability to serve an application transaction."
        }
      },
      {
        "title": {
          "pt-BR": "Usar registros Route 53 failover primário/secundário e associar à primária um health check HTTPS de readiness que valide dependências essenciais.",
          "en": "Use primary/secondary Route 53 failover records and associate the primary with an HTTPS readiness health check validating essential dependencies."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Um teste de readiness representativo detecta a falha do banco e torna a primária inelegível. O DNS direciona novas resoluções à secundária; caches e conexões existentes não mudam instantaneamente.",
          "en": "A representative readiness test detects the database failure and makes the primary ineligible. DNS directs new resolutions to the secondary; caches and existing connections do not change instantly."
        }
      },
      {
        "title": {
          "pt-BR": "Usar registros latency sem health checks, esperando que a Região com banco indisponível apresente maior latência DNS.",
          "en": "Use latency records without health checks, expecting the Region with an unavailable database to have higher DNS latency."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Roteamento por latência não mede o sucesso das transações nem verifica o banco. Uma Região próxima pode continuar sendo selecionada apesar da falha lógica.",
          "en": "Latency routing does not measure transaction success or check the database. A nearby Region can remain selected despite the application-level failure."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Health checks devem representar prontidão para servir usuários, não somente processos ativos. Failover DNS depende também de TTL e comportamento dos clientes.",
      "en": "Health checks should represent readiness to serve users, not merely running processes. DNS failover also depends on TTL and client behavior."
    },
    "references": [
      "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html"
    ]
  },
  {
    "id": 12,
    "domain": "performance",
    "title": {
      "pt-BR": "Desempenho - Hot partition no DynamoDB",
      "en": "Performance - DynamoDB hot partition"
    },
    "description": {
      "pt-BR": "Um sistema ingere milhões de eventos em DynamoDB. A partition key atual é o dia no formato YYYY-MM-DD, e o timestamp é a sort key. Quase todas as escritas atingem o dia atual. Mesmo com capacidade agregada suficiente, há throttling em picos. Os relatórios consultam intervalos de tempo dentro de um dia e podem combinar os resultados de um número pequeno e fixo de consultas paralelas. Todos os eventos precisam ser preservados.",
      "en": "A system ingests millions of events into DynamoDB. Its current partition key is the day in YYYY-MM-DD format, and its sort key is the timestamp. Almost all writes target the current day. Despite sufficient aggregate capacity, throttling occurs during peaks. Reports query time ranges within a day and can merge results from a small fixed number of parallel queries. All events must be preserved."
    },
    "question": {
      "pt-BR": "Qual alteração trata a causa do gargalo mantendo consultas viáveis?",
      "en": "Which change addresses the bottleneck while keeping queries practical?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Adicionar DAX e manter as chaves atuais, usando o cache para absorver todas as escritas.",
          "en": "Add DAX and keep the existing keys, using the cache to absorb all writes."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "DAX beneficia sobretudo leituras e não elimina a concentração de escritas em uma chave quente. Os eventos ainda precisam ser persistidos na tabela.",
          "en": "DAX primarily benefits reads and does not eliminate concentrated writes to a hot key. Events still have to be persisted in the table."
        }
      },
      {
        "title": {
          "pt-BR": "Criar um GSI cuja partition key também seja o dia e passar a escrever os eventos diretamente no índice.",
          "en": "Create a GSI whose partition key is also the day and write events directly to the index."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Não se escreve diretamente em um GSI; ele é atualizado a partir da tabela. Repetir a chave de baixa cardinalidade ainda mantém a distribuição inadequada.",
          "en": "You cannot write directly to a GSI; it is updated from the table. Repeating the low-cardinality key still preserves the poor distribution."
        }
      },
      {
        "title": {
          "pt-BR": "Aumentar indefinidamente a capacidade provisionada da tabela e manter todas as escritas sob a mesma partition key.",
          "en": "Increase table provisioned capacity indefinitely and keep all writes under the same partition key."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Capacidade total maior não remove limites de uma distribuição concentrada. O enunciado informa que a capacidade agregada já basta; a causa é a chave quente.",
          "en": "More total capacity does not remove limits from concentrated distribution. The scenario states aggregate capacity is sufficient; the cause is the hot key."
        }
      },
      {
        "title": {
          "pt-BR": "Usar partition key dia#shard com sufixo distribuído pelo hash do ID do evento, manter timestamp e ID na sort key e consultar os shards do dia em paralelo.",
          "en": "Use day#shard as partition key with a suffix distributed by event-ID hash, keep timestamp and ID in the sort key, and query the day shards in parallel."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Write sharding distribui a carga entre várias chaves e preserva a ordenação temporal dentro de cada shard. O custo é fazer fan-out de consultas e mesclar resultados, tolerado pelo cenário.",
          "en": "Write sharding distributes load across several keys and preserves time ordering within each shard. The trade-off is query fan-out and result merging, which the scenario permits."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Projete partition keys para distribuir o tráfego efetivo, não apenas a quantidade de registros. Sharding exige planejar também a recuperação e a combinação dos dados.",
      "en": "Design partition keys to distribute actual traffic, not merely record count. Sharding also requires planning data retrieval and result merging."
    },
    "references": [
      "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html"
    ]
  },
  {
    "id": 13,
    "domain": "performance",
    "title": {
      "pt-BR": "Desempenho - Tempestade de conexões no Aurora",
      "en": "Performance - Aurora connection storm"
    },
    "description": {
      "pt-BR": "Uma API usa API Gateway, Lambda e Aurora PostgreSQL. Cada invocação abre uma conexão, executa uma transação curta e fecha a conexão. Picos de milhares de invocações causam exaustão de conexões, embora CPU e I/O do banco permaneçam moderados. A aplicação não utiliza estado persistente de sessão nem comandos que provoquem pinning. Deve preservar transações SQL e suportar a concorrência de entrada sem apenas rejeitar requisições.",
      "en": "An API uses API Gateway, Lambda, and Aurora PostgreSQL. Every invocation opens a connection, runs a short transaction, and closes the connection. Peaks of thousands of invocations exhaust connections while database CPU and I/O remain moderate. The application uses no persistent session state or statements that cause pinning. It must retain SQL transactions and support incoming concurrency rather than simply reject requests."
    },
    "question": {
      "pt-BR": "Qual alteração tem maior impacto com menor mudança arquitetural?",
      "en": "Which change has the greatest impact with the least architectural change?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Adicionar réplicas Aurora e direcionar todas as transações de escrita ao reader endpoint.",
          "en": "Add Aurora replicas and direct all write transactions to the reader endpoint."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O reader endpoint não é o destino apropriado para escritas. Réplicas podem descarregar leituras, mas não resolvem o padrão de criação de conexões no writer.",
          "en": "The reader endpoint is not the appropriate destination for writes. Replicas can offload reads but do not solve the writer connection-creation pattern."
        }
      },
      {
        "title": {
          "pt-BR": "Colocar Amazon RDS Proxy entre Lambda e Aurora, usar seu endpoint e configurar limites e timeouts do pool para a carga.",
          "en": "Place Amazon RDS Proxy between Lambda and Aurora, use its endpoint, and configure pool limits and timeouts for the workload."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O proxy reutiliza conexões ao banco e pode multiplexar transações curtas, reduzindo churn e conexões backend. O pool continua finito e requer dimensionamento; não aumenta a capacidade SQL ilimitadamente.",
          "en": "The proxy reuses database connections and can multiplex short transactions, reducing churn and backend connections. The pool remains finite and needs sizing; it does not create unlimited SQL capacity."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar provisioned concurrency nas funções Lambda e manter uma conexão nova para cada invocação.",
          "en": "Configure Lambda provisioned concurrency and keep opening a new connection for every invocation."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Provisioned concurrency reduz latência de inicialização das funções. Não implementa pooling compartilhado no banco e pode antecipar ainda mais a pressão de conexões.",
          "en": "Provisioned concurrency reduces function initialization latency. It does not implement shared database pooling and can bring connection pressure forward."
        }
      },
      {
        "title": {
          "pt-BR": "Reduzir reserved concurrency para um valor muito baixo e depender de respostas de throttling durante os picos.",
          "en": "Reduce reserved concurrency to a very low value and rely on throttling responses during peaks."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Limitar concorrência protege o banco, mas rejeita parte da carga que deve ser atendida. É um controle complementar, não a solução para reutilização de conexões exigida.",
          "en": "Limiting concurrency protects the database but rejects some traffic that must be served. It is a complementary control, not the required connection-reuse solution."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Identifique se o limite é computação, I/O, consultas ou conexões. Pooling é apropriado quando a carga SQL cabe no banco e a criação de conexões é o gargalo.",
      "en": "Identify whether the limit is compute, I/O, queries, or connections. Pooling fits when SQL workload fits the database and connection creation is the bottleneck."
    },
    "references": [
      "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html"
    ]
  },
  {
    "id": 14,
    "domain": "performance",
    "title": {
      "pt-BR": "Desempenho - Filesystem paralelo para HPC",
      "en": "Performance - Parallel filesystem for HPC"
    },
    "description": {
      "pt-BR": "Um laboratório executa simulações Linux em centenas de instâncias EC2. Os jobs leem simultaneamente um conjunto de dados de 80 TB armazenado no S3 e exigem filesystem POSIX com throughput agregado elevado e acesso paralelo de baixa latência. O software não pode ser reescrito para chamadas da API S3. O filesystem pode ser temporário, mas os resultados finais devem ser exportados ao S3 antes do encerramento do ambiente.",
      "en": "A laboratory runs Linux simulations on hundreds of EC2 instances. Jobs concurrently read an 80 TB dataset stored in S3 and require a POSIX filesystem with high aggregate throughput and low-latency parallel access. The software cannot be rewritten to use S3 API calls. The filesystem can be temporary, but final results must be exported to S3 before the environment is shut down."
    },
    "question": {
      "pt-BR": "Qual armazenamento melhor atende ao padrão de processamento?",
      "en": "Which storage best fits the processing pattern?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Usar FSx for Lustre dimensionado para a carga, associar o repositório S3 e executar exportação dos resultados antes de remover o filesystem.",
          "en": "Use FSx for Lustre sized for the workload, associate the S3 repository, and export results before removing the filesystem."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Lustre foi projetado para acesso paralelo de HPC e fornece interface POSIX. A associação ao S3 integra o conjunto de dados; exportação deve ser configurada ou executada e concluída antes de excluir o ambiente.",
          "en": "Lustre is designed for parallel HPC access and provides a POSIX interface. S3 association integrates the dataset; export must be configured or executed and completed before deleting the environment."
        }
      },
      {
        "title": {
          "pt-BR": "Usar um volume EBS gp3 único com Multi-Attach montado em centenas de instâncias em diferentes AZs.",
          "en": "Use one gp3 EBS volume with Multi-Attach mounted on hundreds of instances in different AZs."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "gp3 não suporta Multi-Attach, e volumes EBS são zonais. Mesmo volumes compatíveis com Multi-Attach não oferecem esse filesystem paralelo regional para centenas de clientes.",
          "en": "gp3 does not support Multi-Attach, and EBS volumes are zonal. Even Multi-Attach-compatible volumes do not provide this regional parallel filesystem for hundreds of clients."
        }
      },
      {
        "title": {
          "pt-BR": "Usar S3 File Gateway em uma única appliance para servir o dataset por NFS a todo o cluster HPC.",
          "en": "Use S3 File Gateway on a single appliance to serve the dataset over NFS to the entire HPC cluster."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "File Gateway atende integração de arquivos com S3, mas uma appliance concentra o caminho de dados. Não é a escolha especializada para throughput paralelo de centenas de workers HPC.",
          "en": "File Gateway supports file integration with S3, but one appliance concentrates the data path. It is not the specialized choice for parallel throughput across hundreds of HPC workers."
        }
      },
      {
        "title": {
          "pt-BR": "Copiar todo o dataset para instance store de uma única instância e compartilhá-lo por um servidor NFS autogerenciado.",
          "en": "Copy the entire dataset to one instance store and share it through a self-managed NFS server."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um servidor único limita throughput e exige operação e recuperação próprias. Seu armazenamento efêmero concentra risco e não oferece o filesystem paralelo gerenciado solicitado.",
          "en": "A single server limits throughput and requires self-managed operations and recovery. Ephemeral storage concentrates risk and does not provide the requested managed parallel filesystem."
        }
      }
    ],
    "explanation": {
      "pt-BR": "A escolha depende da semântica de acesso e do perfil de I/O. Integração com S3 não significa que resultados sejam persistidos automaticamente antes da exclusão.",
      "en": "Selection depends on access semantics and I/O profile. S3 integration does not mean results are automatically persisted before deletion."
    },
    "references": [
      "https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html"
    ]
  },
  {
    "id": 15,
    "domain": "performance",
    "title": {
      "pt-BR": "Desempenho - Streaming com consumidores independentes",
      "en": "Performance - Streaming with independent consumers"
    },
    "description": {
      "pt-BR": "Uma plataforma recebe eventos de milhares de sensores. Dois aplicativos devem processar todos os eventos independentemente: um detecta anomalias, outro calcula métricas em tempo quase real. É necessário reprocessar os últimos sete dias e preservar a ordem de eventos de cada sensor, sem exigir ordem global. A carga de cada consumidor não deve disputar o mesmo throughput de leitura. A distribuição de sensores entre as chaves pode ser balanceada.",
      "en": "A platform receives events from thousands of sensors. Two applications must independently process every event: one detects anomalies, the other calculates near-real-time metrics. The system must replay the last seven days and preserve event order per sensor without global ordering. Consumers must not compete for the same read throughput. Sensors can be balanced across keys."
    },
    "question": {
      "pt-BR": "Qual desenho atende ao processamento e à recuperação?",
      "en": "Which design meets processing and recovery requirements?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Usar uma fila SQS Standard compartilhada por ambos os aplicativos e aumentar a retenção para sete dias.",
          "en": "Use one SQS Standard queue shared by both applications and increase retention to seven days."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Consumidores de uma fila competem pelas mensagens em vez de receberem todos os eventos. Mensagens excluídas não ficam disponíveis para replay e a fila Standard não preserva a ordem por sensor.",
          "en": "Consumers of one queue compete for messages rather than each receiving every event. Deleted messages are unavailable for replay, and a Standard queue does not preserve per-sensor order."
        }
      },
      {
        "title": {
          "pt-BR": "Usar Amazon Data Firehose para entregar diretamente os mesmos eventos aos dois aplicativos com offsets independentes.",
          "en": "Use Amazon Data Firehose to deliver the same events directly to both applications with independent offsets."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Firehose é uma camada de entrega a destinos, não um log com consumidores arbitrários e offsets independentes. Esse desenho não oferece o replay e a leitura isolada solicitados.",
          "en": "Firehose is a delivery layer to destinations, not a log with arbitrary consumers and independent offsets. This design does not provide the required replay and isolated reads."
        }
      },
      {
        "title": {
          "pt-BR": "Usar Kinesis Data Streams com uma partition key constante, retenção padrão e dois consumidores compartilhando GetRecords.",
          "en": "Use Kinesis Data Streams with a constant partition key, default retention, and two consumers sharing GetRecords."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A chave constante concentra eventos; a retenção padrão não cobre sete dias. Consumidores com leitura compartilhada disputam throughput, contrariando a exigência de isolamento.",
          "en": "A constant key concentrates events; default retention does not cover seven days. Shared-read consumers compete for throughput, violating the isolation requirement."
        }
      },
      {
        "title": {
          "pt-BR": "Usar Kinesis Data Streams com partition key por sensor, retenção de sete dias e enhanced fan-out para cada aplicativo, com checkpoints próprios.",
          "en": "Use Kinesis Data Streams with a per-sensor partition key, seven-day retention, and enhanced fan-out for each application, with separate checkpoints."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O stream mantém eventos para replay; consumidores independentes têm throughput dedicado com enhanced fan-out. A chave agrupa eventos do sensor, desde que o produtor preserve sua ordem e o processamento respeite a sequência.",
          "en": "The stream retains events for replay; independent consumers get dedicated throughput with enhanced fan-out. The key groups sensor events, provided the producer preserves their order and processing respects the sequence."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para ordem por sensor, o produtor deve enviar sequencialmente e tratar retries sem reordenar. A partition key sozinha não corrige eventos já enviados fora de ordem.",
      "en": "For per-sensor ordering, the producer must send sequentially and handle retries without reordering. A partition key alone does not fix events already sent out of order."
    },
    "references": [
      "https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html",
      "https://docs.aws.amazon.com/streams/latest/dev/enhanced-consumers.html"
    ]
  },
  {
    "id": 16,
    "domain": "performance",
    "title": {
      "pt-BR": "Desempenho - Aplicação global TCP e UDP",
      "en": "Performance - Global TCP and UDP application"
    },
    "description": {
      "pt-BR": "Uma empresa opera um serviço interativo sobre TCP e UDP, sem HTTP, com servidores atrás de NLBs em duas Regiões. Clientes globais relatam variação de latência ao atravessar a internet. Parceiros exigem uma lista fixa de IPs públicos de destino, mesmo quando a Região que atende muda. A empresa quer direcionar novas conexões a endpoints saudáveis sem depender de alterações de DNS nos clientes. As duas Regiões já possuem capacidade e estado adequados.",
      "en": "A company runs an interactive TCP and UDP service, without HTTP, on servers behind NLBs in two Regions. Global clients report variable latency across the internet. Partners require a fixed list of public destination IPs even when the serving Region changes. The company wants new connections directed to healthy endpoints without relying on client DNS changes. Both Regions already have suitable capacity and state."
    },
    "question": {
      "pt-BR": "Qual serviço atende melhor aos requisitos de rede?",
      "en": "Which service best meets the network requirements?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Criar registros Route 53 latency para os NLBs e reduzir o TTL, usando seus endereços como lista fixa global.",
          "en": "Create Route 53 latency records for the NLBs and lower TTL, using their addresses as a fixed global list."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Route 53 escolhe respostas DNS, mas não fornece uma entrada anycast global fixa nem transporta o tráfego pela rede AWS. Mudanças continuam dependendo do comportamento de resolução dos clientes.",
          "en": "Route 53 selects DNS answers but does not provide a fixed global anycast entry or carry traffic over the AWS network. Changes still depend on client resolution behavior."
        }
      },
      {
        "title": {
          "pt-BR": "Colocar CloudFront na frente dos NLBs e desabilitar o cache para encaminhar os protocolos TCP e UDP.",
          "en": "Place CloudFront in front of the NLBs and disable caching to forward TCP and UDP protocols."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudFront atende distribuição de conteúdo baseada em HTTP/HTTPS; desabilitar cache não o transforma em proxy para protocolos TCP e UDP arbitrários.",
          "en": "CloudFront serves HTTP/HTTPS-based content distribution; disabling caching does not turn it into a proxy for arbitrary TCP and UDP protocols."
        }
      },
      {
        "title": {
          "pt-BR": "Usar AWS Global Accelerator com listener TCP/UDP e endpoint groups para os NLBs das duas Regiões.",
          "en": "Use AWS Global Accelerator with TCP/UDP listeners and endpoint groups for the NLBs in both Regions."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Global Accelerator oferece IPs anycast estáticos e encaminha tráfego pela rede global AWS a endpoints saudáveis. Atende aos protocolos e ao allowlisting sem exigir trocar os IPs dos clientes no failover.",
          "en": "Global Accelerator provides static anycast IPs and routes traffic over the AWS global network to healthy endpoints. It supports the protocols and allowlisting without requiring clients to change destination IPs during failover."
        }
      },
      {
        "title": {
          "pt-BR": "Usar S3 Transfer Acceleration para encaminhar os fluxos TCP e UDP aos servidores da Região mais próxima.",
          "en": "Use S3 Transfer Acceleration to forward TCP and UDP streams to servers in the nearest Region."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Transfer Acceleration acelera transferências de objetos S3, não tráfego genérico para NLBs. Não fornece o roteamento global para esse serviço interativo.",
          "en": "Transfer Acceleration accelerates S3 object transfers, not generic traffic to NLBs. It does not provide global routing for this interactive service."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Diferencie CDN HTTP, roteamento DNS e aceleração de transporte. IPs estáticos globais e suporte TCP/UDP tornam Global Accelerator apropriado para este cenário.",
      "en": "Distinguish HTTP CDN, DNS routing, and transport acceleration. Global static IPs and TCP/UDP support make Global Accelerator suitable here."
    },
    "references": [
      "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html"
    ]
  },
  {
    "id": 17,
    "domain": "cost",
    "title": {
      "pt-BR": "Custos - Arquivamento com prazo de recuperação",
      "en": "Cost - Archiving with a retrieval deadline"
    },
    "description": {
      "pt-BR": "Uma empresa grava arquivos de 100 MB no S3. Eles são consultados frequentemente nos primeiros 30 dias, depois quase nunca, mas devem ser mantidos por sete anos em armazenamento redundante entre AZs. Auditorias permitem iniciar uma recuperação assíncrona e aguardar até 24 horas antes do download. A empresa quer minimizar o custo de armazenamento após o primeiro mês e aceita custos de recuperação eventuais. A política de retenção já é tratada separadamente.",
      "en": "A company writes 100 MB files to S3. They are frequently accessed during the first 30 days and almost never afterward, but must be kept for seven years in storage redundant across AZs. Audits allow starting asynchronous restoration and waiting up to 24 hours before download. The company wants to minimize storage cost after the first month and accepts occasional retrieval costs. Retention enforcement is handled separately."
    },
    "question": {
      "pt-BR": "Qual política Lifecycle melhor se ajusta ao padrão descrito?",
      "en": "Which Lifecycle policy best fits this access pattern?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Manter S3 Standard por 30 dias e migrar para S3 Glacier Instant Retrieval durante os sete anos.",
          "en": "Keep S3 Standard for 30 days and transition to S3 Glacier Instant Retrieval for seven years."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Instant Retrieval atende acesso imediato, mas esse benefício não é exigido. Para acesso extremamente raro com espera de horas, Deep Archive permite otimizar mais o custo de armazenamento.",
          "en": "Instant Retrieval provides immediate access, but that benefit is not required. For extremely rare access with hours of waiting allowed, Deep Archive better optimizes storage cost."
        }
      },
      {
        "title": {
          "pt-BR": "Manter S3 Standard por 30 dias e migrar para S3 Glacier Deep Archive, usando recuperação Standard quando uma auditoria solicitar os dados.",
          "en": "Keep S3 Standard for 30 days and transition to S3 Glacier Deep Archive, using Standard retrieval when an audit requests data."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Deep Archive foi projetado para retenção longa e raríssimo acesso. Recuperação Standard costuma levar até cerca de 12 horas, compatível com a janela; sete anos supera sua duração mínima de armazenamento.",
          "en": "Deep Archive is designed for long retention and extremely rare access. Standard retrieval typically takes up to about 12 hours, fitting the window; seven years exceeds its minimum storage duration."
        }
      },
      {
        "title": {
          "pt-BR": "Manter S3 Standard por 30 dias e migrar para S3 One Zone-IA, pois a consulta será rara.",
          "en": "Keep S3 Standard for 30 days and transition to S3 One Zone-IA because access will be rare."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "One Zone-IA concentra dados em uma AZ e não atende à redundância exigida. Acesso infrequente não permite ignorar os requisitos de resiliência.",
          "en": "One Zone-IA stores data in one AZ and does not meet the required redundancy. Infrequent access does not permit ignoring resilience requirements."
        }
      },
      {
        "title": {
          "pt-BR": "Manter S3 Standard por 30 dias e migrar para S3 Glacier Deep Archive, usando exclusivamente recuperação Bulk para garantir entrega em 24 horas.",
          "en": "Keep S3 Standard for 30 days and transition to S3 Glacier Deep Archive, using only Bulk retrieval to guarantee delivery in 24 hours."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Bulk em Deep Archive pode levar até cerca de 48 horas, excedendo a janela permitida. A classe é adequada, mas o modo de recuperação escolhido não é.",
          "en": "Deep Archive Bulk retrieval can take up to about 48 hours, exceeding the allowed window. The class is suitable, but the selected retrieval mode is not."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Escolha classe e modo de recuperação juntos. Considere frequência, duração mínima, redundância e tempo de restauração, sem transformar prazos típicos em garantia absoluta.",
      "en": "Choose storage class and retrieval mode together. Consider frequency, minimum duration, redundancy, and restore time without treating typical timings as absolute guarantees."
    },
    "references": [
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html"
    ]
  },
  {
    "id": 18,
    "domain": "cost",
    "title": {
      "pt-BR": "Custos - Workers interrompíveis em EC2",
      "en": "Cost - Interruptible EC2 workers"
    },
    "description": {
      "pt-BR": "Uma empresa processa vídeos de forma assíncrona com workers EC2 que consomem SQS. Jobs são idempotentes, gravam checkpoints e podem ser retomados em outra instância. O prazo é de seis horas, com folga para interrupções. A carga sobe muito à noite e cai durante o dia. Há necessidade de uma pequena capacidade estável, mas o restante deve ter o menor custo possível. O software exige EC2 e funciona em várias famílias de instâncias.",
      "en": "A company processes videos asynchronously with EC2 workers consuming SQS. Jobs are idempotent, save checkpoints, and can resume on another instance. The deadline is six hours, with room for interruptions. Workload rises sharply at night and drops during the day. A small stable capacity is required, but the remainder should have the lowest practical cost. The software requires EC2 and supports several instance families."
    },
    "question": {
      "pt-BR": "Qual estratégia de capacidade é a mais apropriada?",
      "en": "Which capacity strategy is most appropriate?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Comprar Reserved Instances para o pico noturno inteiro e manter os workers ativos durante todo o dia.",
          "en": "Buy Reserved Instances for the entire nightly peak and keep workers active all day."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Comprometer-se com a capacidade de pico desperdiça gasto quando a fila está baixa. O desconto não elimina o custo de capacidade ociosa nem explora a tolerância a interrupções.",
          "en": "Committing to peak capacity wastes spend when the queue is low. The discount does not eliminate idle-capacity cost or exploit interruption tolerance."
        }
      },
      {
        "title": {
          "pt-BR": "Usar somente instâncias On-Demand grandes em uma AZ e escalar exclusivamente pela CPU média.",
          "en": "Use only large On-Demand instances in one AZ and scale exclusively by average CPU."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "On-Demand é adequado à base estável, mas não aproveita o desconto Spot na carga tolerante. Uma AZ reduz opções de capacidade e CPU isolada pode não representar o backlog.",
          "en": "On-Demand suits the stable baseline but misses Spot savings for interruption-tolerant work. One AZ reduces capacity options, and CPU alone may not represent backlog."
        }
      },
      {
        "title": {
          "pt-BR": "Usar uma única família Spot na AZ mais barata, excluir mensagens ao recebê-las e reiniciar jobs sem checkpoints.",
          "en": "Use one Spot family in the cheapest AZ, delete messages on receipt, and restart jobs without checkpoints."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma única pool aumenta risco de falta de capacidade. Excluir a mensagem antes do sucesso pode perder jobs, e descartar checkpoints desperdiça processamento durante interrupções.",
          "en": "One pool increases capacity-shortage risk. Deleting messages before success can lose jobs, and discarding checkpoints wastes processing during interruptions."
        }
      },
      {
        "title": {
          "pt-BR": "Usar ASG com base On-Demand e expansão Spot diversificada entre tipos e AZs, estratégia price-capacity-optimized e escala por backlog por worker; confirmar a mensagem após sucesso.",
          "en": "Use an ASG with an On-Demand baseline and diversified Spot expansion across types and AZs, price-capacity-optimized allocation, and backlog-per-worker scaling; acknowledge messages after success."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A base cobre a capacidade estável; Spot aproveita a tolerância a interrupções. Diversificação amplia pools, backlog relaciona escala ao trabalho pendente e checkpoints com confirmação após sucesso preservam recuperação.",
          "en": "The baseline covers stable capacity; Spot exploits interruption tolerance. Diversification expands pools, backlog ties scaling to pending work, and checkpoints with post-success acknowledgment preserve recovery."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Custo menor depende de a arquitetura suportar interrupções. Diversificação e processamento recuperável permitem usar Spot sem tratar suas instâncias como capacidade garantida.",
      "en": "Lower cost depends on the architecture supporting interruptions. Diversification and recoverable processing enable Spot without treating its instances as guaranteed capacity."
    },
    "references": [
      "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html"
    ]
  },
  {
    "id": 19,
    "domain": "cost",
    "title": {
      "pt-BR": "Custos - Tráfego privado de alto volume para S3",
      "en": "Cost - High-volume private traffic to S3"
    },
    "description": {
      "pt-BR": "Workers EC2 em subnets privadas de três AZs leem diariamente dezenas de terabytes de um bucket S3 na mesma Região. Todo o tráfego passa por um NAT Gateway em outra AZ, gerando custos de processamento NAT e transferência entre AZs. As instâncias ainda precisam acessar APIs públicas externas. Não há clientes on-premises nem de outras VPCs usando esse caminho. A empresa quer reduzir custos sem expor os workers ou tornar o bucket público.",
      "en": "EC2 workers in private subnets across three AZs read tens of terabytes daily from an S3 bucket in the same Region. All traffic passes through a NAT Gateway in another AZ, generating NAT processing and cross-AZ transfer charges. Instances still need external public API access. No on-premises or other-VPC clients use this path. The company wants lower costs without exposing workers or making the bucket public."
    },
    "question": {
      "pt-BR": "Qual alteração elimina o custo desnecessário do caminho para S3?",
      "en": "Which change eliminates the unnecessary S3-path cost?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Criar um gateway VPC endpoint para S3 e associá-lo às tabelas de rotas privadas, mantendo a rota NAT para destinos externos e as permissões IAM/bucket adequadas.",
          "en": "Create an S3 gateway VPC endpoint and associate it with private route tables, keeping the NAT route for external destinations and suitable IAM/bucket permissions."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A rota específica para S3 usa o gateway endpoint, sem cobrança adicional do endpoint e sem processar esses bytes no NAT. O acesso externo continua pela rota padrão; autorizações S3 permanecem necessárias.",
          "en": "The S3-specific route uses the gateway endpoint, with no additional endpoint charge and no NAT processing for those bytes. External access keeps using the default route; S3 authorization remains necessary."
        }
      },
      {
        "title": {
          "pt-BR": "Criar NAT Gateways em cada AZ e manter todo o tráfego S3 pela rota padrão desses gateways.",
          "en": "Create NAT Gateways in each AZ and keep all S3 traffic using their default routes."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "NAT por AZ pode reduzir transferência cruzada e melhorar disponibilidade, mas ainda cobra processamento do grande volume S3. Não elimina o custo evitável para esse destino.",
          "en": "Per-AZ NAT can reduce cross-AZ transfer and improve availability but still charges processing for the large S3 volume. It does not eliminate the avoidable cost for this destination."
        }
      },
      {
        "title": {
          "pt-BR": "Criar endpoints de interface para S3 em cada AZ sem avaliar um gateway endpoint.",
          "en": "Create S3 interface endpoints in every AZ without considering a gateway endpoint."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Endpoints de interface funcionam em cenários específicos, mas introduzem cobrança por hora e processamento. Para clientes apenas nessa VPC, o gateway endpoint atende com menor custo adicional.",
          "en": "Interface endpoints work in specific scenarios but introduce hourly and processing charges. For clients only in this VPC, a gateway endpoint meets the need at lower additional cost."
        }
      },
      {
        "title": {
          "pt-BR": "Substituir o NAT por um egress-only internet gateway e manter os workers e suas rotas usando somente IPv4.",
          "en": "Replace NAT with an egress-only internet gateway and keep workers and routes using IPv4 only."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Egress-only internet gateway atende saída IPv6, não substitui NAT para clientes IPv4. A mudança proposta também interromperia o acesso às APIs externas IPv4.",
          "en": "An egress-only internet gateway supports IPv6 egress, not NAT replacement for IPv4 clients. This change would also break access to external IPv4 APIs."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Otimize o caminho de dados, além do preço das instâncias. Gateway endpoints S3 são adequados ao tráfego regional da própria VPC; eles não substituem toda a saída internet.",
      "en": "Optimize the data path as well as instance pricing. S3 gateway endpoints fit regional traffic from the VPC itself; they do not replace all internet egress."
    },
    "references": [
      "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html"
    ]
  },
  {
    "id": 20,
    "domain": "cost",
    "title": {
      "pt-BR": "Custos - Compromisso flexível de computação",
      "en": "Cost - Flexible compute commitment"
    },
    "description": {
      "pt-BR": "Uma empresa tem gasto mínimo previsível de computação durante o próximo ano, mas pretende migrar parte das aplicações EC2 para Fargate e Lambda. As instâncias EC2 restantes podem mudar de família, tamanho e Região. A empresa deseja desconto sobre o gasto estável sem reservar capacidade nem restringir a arquitetura futura. Uso acima da base e cargas interrompíveis serão otimizados separadamente.",
      "en": "A company has predictable minimum compute spend for the next year but plans to migrate some EC2 applications to Fargate and Lambda. Remaining EC2 instances may change family, size, and Region. The company wants a discount on stable spend without reserving capacity or constraining future architecture. Usage above the baseline and interruptible workloads will be optimized separately."
    },
    "question": {
      "pt-BR": "Qual compromisso de compra melhor acompanha a mudança de arquitetura?",
      "en": "Which purchase commitment best accommodates the architecture change?"
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Comprar EC2 Instance Savings Plans para a família e Região atuais, cobrindo também a futura migração para Lambda e Fargate.",
          "en": "Buy EC2 Instance Savings Plans for the current family and Region, also covering future migration to Lambda and Fargate."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Esse plano é limitado à família EC2 e Região escolhidas e não cobre Fargate ou Lambda. Seu desconto não acompanha a flexibilidade solicitada.",
          "en": "This plan is limited to the chosen EC2 family and Region and does not cover Fargate or Lambda. Its discount does not follow the requested flexibility."
        }
      },
      {
        "title": {
          "pt-BR": "Comprar Standard Reserved Instances zonais para toda a base e considerar a reserva transferível automaticamente para Fargate.",
          "en": "Buy zonal Standard Reserved Instances for the whole baseline and assume the reservation automatically transfers to Fargate."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Reserved Instances EC2 não são créditos transferíveis para Fargate ou Lambda. Uma reserva zonal também adiciona vínculo de capacidade não solicitado.",
          "en": "EC2 Reserved Instances are not transferable credits for Fargate or Lambda. A zonal reservation also adds a capacity commitment that was not requested."
        }
      },
      {
        "title": {
          "pt-BR": "Comprar Compute Savings Plans com compromisso monetário por hora conservador baseado no gasto mínimo elegível previsto, por um ano.",
          "en": "Buy Compute Savings Plans with a conservative hourly monetary commitment based on forecast minimum eligible spend, for one year."
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Compute Savings Plans abrangem uso elegível de EC2, Fargate e Lambda com flexibilidade. O compromisso é pago mesmo quando não utilizado; dimensioná-lo pela base evita comprometer o gasto de pico.",
          "en": "Compute Savings Plans cover eligible EC2, Fargate, and Lambda usage with flexibility. The commitment is paid even when unused; sizing it to the baseline avoids committing to peak spend."
        }
      },
      {
        "title": {
          "pt-BR": "Criar On-Demand Capacity Reservations para EC2 e usá-las como desconto automático para EC2, Fargate e Lambda.",
          "en": "Create EC2 On-Demand Capacity Reservations and use them as an automatic discount for EC2, Fargate, and Lambda."
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Capacity Reservations reservam capacidade EC2 e não fornecem por si um desconto de preço nem cobertura para outros serviços. Reserva de capacidade e desconto são mecanismos distintos.",
          "en": "Capacity Reservations reserve EC2 capacity and do not by themselves provide a pricing discount or coverage for other services. Capacity reservation and discounting are separate mechanisms."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Associe o compromisso ao que é previsível: gasto elegível, não uma configuração que será alterada. Savings Plans não garantem capacidade disponível.",
      "en": "Tie commitment to what is predictable: eligible spend, not a configuration that will change. Savings Plans do not guarantee available capacity."
    },
    "references": [
      "https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html"
    ]
  }
];
