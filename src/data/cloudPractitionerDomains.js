// Domínios oficiais do exame AWS Certified Cloud Practitioner (CLF-C02)
export const cloudPractitionerDomains = [
  {
    slug: 'cloud-concepts',
    weight: '24%',
    name: { 'pt-BR': 'Conceitos de Nuvem', en: 'Cloud Concepts' },
    description: {
      'pt-BR': 'Benefícios da nuvem AWS, princípios de design, estratégias de migração e economia da nuvem.',
      en: 'Benefits of the AWS Cloud, design principles, migration strategies, and cloud economics.'
    }
  },
  {
    slug: 'security-compliance',
    weight: '30%',
    name: { 'pt-BR': 'Segurança e Conformidade', en: 'Security and Compliance' },
    description: {
      'pt-BR': 'Modelo de responsabilidade compartilhada, governança, gerenciamento de acesso (IAM) e recursos de segurança.',
      en: 'Shared responsibility model, governance, access management (IAM), and security resources.'
    }
  },
  {
    slug: 'cloud-technology-services',
    weight: '34%',
    name: { 'pt-BR': 'Tecnologia e Serviços na Nuvem', en: 'Cloud Technology and Services' },
    description: {
      'pt-BR': 'Métodos de implantação, infraestrutura global e os principais serviços de computação, armazenamento, banco de dados e rede.',
      en: 'Deployment methods, global infrastructure, and the core compute, storage, database, and networking services.'
    }
  },
  {
    slug: 'billing-pricing-support',
    weight: '12%',
    name: { 'pt-BR': 'Faturamento, Precificação e Suporte', en: 'Billing, Pricing, and Support' },
    description: {
      'pt-BR': 'Modelos de precificação, ferramentas de gerenciamento de custos e planos de suporte da AWS.',
      en: 'Pricing models, cost management tools, and AWS Support plans.'
    }
  }
];
