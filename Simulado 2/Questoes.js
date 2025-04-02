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
    // ... Continue with the rest of the questions in the same format
];