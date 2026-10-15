# Backend e ranking compartilhado

O projeto agora usa uma API Node.js com SQLite para contas, sessões, histórico e ranking. O banco é criado automaticamente. Não é necessário contratar um banco externo para executar localmente.

## Backend na internet

A versão para hospedagem Sites fica em `server/cloud`, com banco D1 persistente e API compatível com o frontend. O servidor Node/SQLite continua disponível para desenvolvimento local.

Origem configurada: `https://guru-certificate-api.robustgnat5.chatgpt.site`.

O `vercel.json` encaminha `/api/*` para essa origem antes de servir o React. Assim, a publicação do frontend com essa configuração usa o backend compartilhado, sem precisar expor credenciais no navegador ou definir `REACT_APP_API_URL`. Se já existir essa variável na hospedagem, remova-a ou aponte-a para a origem acima.

Contas e resultados locais não são enviados para o banco hospedado automaticamente. A versão hospedada usa PBKDF2/SHA-256 com salt aleatório para senhas; a versão Node usa scrypt. As contas dos dois ambientes são independentes.

O código hospedado mantém o histórico restrito à sessão e deixa o ranking público. Os resultados pendentes só sincronizam quando a pessoa entra na conta correspondente. As migrações D1 estão em `server/cloud/drizzle` e são aplicadas na publicação. Não crie tabelas durante requisições.

Para validar o código da API hospedada:

```powershell
cd server/cloud
npm test
npm run build
npm run validate
```

A pasta `sites/` é um checkout separado de publicação e está ignorada pelo Git principal. O código de manutenção e a identificação da hospedagem ficam em `server/cloud`; não copie metadados Git ou credenciais desse checkout para o repositório principal.

## Executar no computador

Requisito: Node.js 22.13 ou superior. Validado com Node.js 22.21.

```powershell
npm ci
npm run server
```

Em outro terminal:

```powershell
npm start
```

Abra `http://localhost:3000`. O servidor de desenvolvimento encaminha `/api` para a porta 3001. Cadastre duas contas: finalize um simulado com a primeira e abra o ranking com a segunda. A segunda conta vê os resultados mesmo sem ter feito um simulado. Visitantes também podem consultar o ranking.

## Executar o site e a API juntos

```powershell
npm run build
npm run server
```

Abra `http://localhost:3001`. Esse processo serve o build React e a API. Para comparação entre dispositivos pela internet, hospede esse serviço em um servidor Node com HTTPS e **disco persistente**, mantendo uma única instância que acesse o banco.

Variáveis de ambiente do servidor:

| Nome | Padrão | Uso |
| --- | --- | --- |
| `PORT` | `3001` | Porta HTTP |
| `DATABASE_PATH` | `server/data/guru.sqlite` | Caminho do banco em disco persistente |
| `ALLOWED_ORIGIN` | não definido | Origem exata do frontend, caso esteja em outro domínio |

O servidor lê as variáveis do ambiente do processo. No PowerShell, por exemplo: `$env:DATABASE_PATH='D:\dados\guru.sqlite'` antes de `npm run server`.

Há também um `Dockerfile` que compila e serve o projeto:

```sh
docker build -t guru-certificate .
docker run --name guru-certificate -p 3001:3001 -v guru-data:/data guru-certificate
```

Configure HTTPS no proxy da hospedagem. Preserve o volume `/data` em atualizações. Para backup simples e consistente, pare o serviço antes de copiar o banco e seus arquivos auxiliares; depois reinicie-o. Não publique o arquivo SQLite no frontend ou no Git.

### Manter o frontend na Vercel

A configuração atual da Vercel publica somente arquivos estáticos. O novo servidor precisa de uma hospedagem Node com disco persistente; não use o SQLite no armazenamento temporário de funções serverless.

No build do frontend, defina `REACT_APP_API_URL=https://seu-backend.example.com`. No servidor, defina `ALLOWED_ORIGIN=https://seu-site.example.com`. A URL da API não deve terminar em `/api`. Recompile o frontend após alterar essa variável. Se servir tudo pelo mesmo processo Node, deixe ambas sem definir.

## Dados anteriores

Contas e resultados da versão antiga continuam nas chaves antigas do navegador, mas **não são importados automaticamente** para o banco compartilhado. É necessário cadastrar uma conta no novo backend e realizar os próximos simulados conectado. Isso evita publicar histórico local ou atribuí-lo a outra pessoa sem validação. Não há estudantes fictícios no ranking.

As contas novas usam hash de senha com salt e scrypt. A API retorna somente os dados públicos da classificação; e-mail, hash e token não aparecem no ranking. O histórico exige uma sessão válida e pertence ao usuário autenticado. A sessão expira em 30 dias e o logout a revoga. O token fica no navegador, portanto mantenha o site protegido contra scripts não confiáveis e use HTTPS.

Se o envio falhar, o resultado fica em uma fila local vinculada à conta. Ao abrir o perfil ou ranking conectado à mesma conta, o envio é tentado novamente, com identificador estável para evitar duplicação. Não limpe os dados do navegador antes de sincronizar.

Os percentuais são recalculados no servidor a partir dos acertos e do total. Este é um ranking de estudo: a contagem de acertos ainda é informada pelo cliente, sem fiscalização de prova ou proteção contra adulteração por um usuário técnico. A aplicação não oferece recuperação de senha nem verificação de e-mail nesta versão.

## Verificação

```sh
npm run test:server
npm test -- --watchAll=false --runInBand
npm run build
```

O teste de integração cria um banco temporário e verifica duas contas independentes, ranking público, filtros, melhor nota, rejeição de resultados inválidos, isolamento do histórico, reenvio sem duplicação, login/logout e persistência após reiniciar o servidor.
