const questions = [
{
  enunciado: "Computação em nuvem é um modelo que permite acesso sob demanda a recursos computacionais compartilhados.",
  correta: "C",
  tema: "Conceito de Computação em Nuvem",
  justificativa: "É como usar energia elétrica: você consome quando precisa, sem se preocupar com a usina."
},
{
  enunciado: "Na computação em nuvem, os recursos computacionais são dedicados exclusivamente a um único usuário.",
  correta: "E",
  tema: "Conceito de Computação em Nuvem",
  justificativa: "O modelo é baseado em compartilhamento, não exclusividade."
},
{
  enunciado: "O modelo de computação em nuvem permite rápida elasticidade dos recursos.",
  correta: "C",
  tema: "Elasticidade",
  justificativa: "É como um elástico: cresce e encolhe conforme a necessidade."
},
{
  enunciado: "Elasticidade e escalabilidade são conceitos idênticos na computação em nuvem.",
  correta: "E",
  tema: "Elasticidade",
  justificativa: "Escalabilidade é capacidade de crescer; elasticidade é crescer e reduzir rapidamente."
},
{
  enunciado: "O autosserviço sob demanda permite que o usuário provisione recursos sem interação humana com o provedor.",
  correta: "C",
  tema: "Características Essenciais da Nuvem",
  justificativa: "É como pedir um serviço por aplicativo, sem falar com atendente."
},
{
  enunciado: "O autosserviço sob demanda exige autorização manual do provedor a cada solicitação.",
  correta: "E",
  tema: "Características Essenciais da Nuvem",
  justificativa: "A essência é justamente a autonomia do usuário."
},
{
  enunciado: "O amplo acesso à rede é uma característica essencial da computação em nuvem.",
  correta: "C",
  tema: "Características Essenciais da Nuvem",
  justificativa: "Os serviços devem ser acessíveis de qualquer lugar, como sites na internet."
},
{
  enunciado: "A computação em nuvem restringe o acesso aos recursos apenas a redes internas.",
  correta: "E",
  tema: "Características Essenciais da Nuvem",
  justificativa: "O acesso é amplo e via rede, não restrito localmente."
},
{
  enunciado: "O pool de recursos permite que múltiplos consumidores compartilhem a infraestrutura do provedor.",
  correta: "C",
  tema: "Pool de Recursos",
  justificativa: "Funciona como um prédio com vários moradores usando a mesma infraestrutura."
},
{
  enunciado: "No pool de recursos, o cliente sabe exatamente onde seus dados estão fisicamente localizados.",
  correta: "E",
  tema: "Pool de Recursos",
  justificativa: "A localização física é abstrata para o usuário."
},
{
  enunciado: "A medição de serviços permite que o uso de recursos seja monitorado e cobrado conforme consumo.",
  correta: "C",
  tema: "Serviço Medido",
  justificativa: "É o modelo de conta de luz: paga-se pelo que se usa."
},
{
  enunciado: "Na computação em nuvem, o custo é fixo independentemente do uso.",
  correta: "E",
  tema: "Serviço Medido",
  justificativa: "O pagamento é variável conforme o consumo."
},
{
  enunciado: "O modelo IaaS fornece infraestrutura como serviço, incluindo servidores, redes e armazenamento.",
  correta: "C",
  tema: "IaaS",
  justificativa: "É como alugar o terreno e construir sua própria casa."
},
{
  enunciado: "No modelo IaaS, o provedor é responsável pela aplicação e pelos dados do cliente.",
  correta: "E",
  tema: "IaaS",
  justificativa: "Essas responsabilidades são do cliente."
},
{
  enunciado: "O modelo PaaS fornece uma plataforma para desenvolvimento e implantação de aplicações.",
  correta: "C",
  tema: "PaaS",
  justificativa: "É como receber a cozinha pronta para apenas cozinhar."
},
{
  enunciado: "No modelo PaaS, o usuário gerencia o sistema operacional subjacente.",
  correta: "E",
  tema: "PaaS",
  justificativa: "O sistema operacional é gerenciado pelo provedor."
},
{
  enunciado: "O modelo SaaS disponibiliza aplicações completas ao usuário final.",
  correta: "C",
  tema: "SaaS",
  justificativa: "É como usar um aplicativo pronto, sem instalar nem manter."
},
{
  enunciado: "No modelo SaaS, o usuário é responsável pela manutenção da infraestrutura.",
  correta: "E",
  tema: "SaaS",
  justificativa: "Toda a infraestrutura é responsabilidade do provedor."
},
{
  enunciado: "A nuvem pública é disponibilizada para uso aberto pelo público em geral.",
  correta: "C",
  tema: "Modelos de Implantação",
  justificativa: "É como um serviço aberto a qualquer pessoa ou empresa."
},
{
  enunciado: "A nuvem pública é exclusiva de uma única organização.",
  correta: "E",
  tema: "Modelos de Implantação",
  justificativa: "Essa é a característica da nuvem privada."
},
{
  enunciado: "A nuvem privada é destinada ao uso exclusivo de uma organização.",
  correta: "C",
  tema: "Modelos de Implantação",
  justificativa: "Funciona como um prédio corporativo exclusivo."
},
{
  enunciado: "A nuvem privada elimina completamente o compartilhamento de recursos.",
  correta: "E",
  tema: "Modelos de Implantação",
  justificativa: "Pode haver compartilhamento interno entre setores."
},
{
  enunciado: "A nuvem híbrida combina dois ou mais modelos de implantação distintos.",
  correta: "C",
  tema: "Nuvem Híbrida",
  justificativa: "É como usar casa própria e hotel conforme a necessidade."
},
{
  enunciado: "Na nuvem híbrida, não há integração entre os ambientes.",
  correta: "E",
  tema: "Nuvem Híbrida",
  justificativa: "A integração é justamente a essência do modelo híbrido."
},
{
  enunciado: "Segundo o NIST, a computação em nuvem é definida por um conjunto de características essenciais.",
  correta: "C",
  tema: "NIST SP 800-145",
  justificativa: "O NIST funciona como a referência técnica que define o modelo."
},
{
  enunciado: "A computação em nuvem permite provisionamento rápido de recursos com mínimo esforço de gerenciamento.",
  correta: "C",
  tema: "Características Essenciais da Nuvem",
  justificativa: "É como ligar um serviço instantaneamente, sem precisar montar toda a estrutura antes."
},
{
  enunciado: "O provisionamento rápido elimina a necessidade de planejamento de capacidade.",
  correta: "E",
  tema: "Características Essenciais da Nuvem",
  justificativa: "Mesmo com rapidez, é preciso planejar para evitar custos excessivos e má utilização."
},
{
  enunciado: "A escalabilidade vertical consiste em aumentar ou reduzir recursos dentro do mesmo servidor.",
  correta: "C",
  tema: "Escalabilidade",
  justificativa: "É como trocar o motor de um carro para ganhar mais potência."
},
{
  enunciado: "A escalabilidade horizontal envolve adicionar ou remover instâncias de servidores.",
  correta: "C",
  tema: "Escalabilidade",
  justificativa: "Funciona como adicionar mais caixas ao supermercado para atender mais clientes."
},
{
  enunciado: "A escalabilidade horizontal depende exclusivamente de hardware físico local.",
  correta: "E",
  tema: "Escalabilidade",
  justificativa: "Na nuvem, novas instâncias podem ser criadas virtualmente sob demanda."
},
{
  enunciado: "A elasticidade permite ajuste automático de recursos conforme a carga de trabalho.",
  correta: "C",
  tema: "Elasticidade",
  justificativa: "É como um termostato que ajusta a temperatura sozinho."
},
{
  enunciado: "Elasticidade é sinônimo de alta disponibilidade.",
  correta: "E",
  tema: "Elasticidade",
  justificativa: "Elasticidade trata de ajuste de capacidade; disponibilidade trata de continuidade do serviço."
},
{
  enunciado: "Alta disponibilidade busca manter serviços operacionais mesmo diante de falhas.",
  correta: "C",
  tema: "Alta Disponibilidade",
  justificativa: "É como ter gerador em hospital para evitar interrupção."
},
{
  enunciado: "A alta disponibilidade elimina totalmente o risco de indisponibilidade.",
  correta: "E",
  tema: "Alta Disponibilidade",
  justificativa: "Ela reduz riscos, mas não elimina totalmente falhas."
},
{
  enunciado: "A redundância é técnica utilizada para aumentar a disponibilidade em ambientes de nuvem.",
  correta: "C",
  tema: "Redundância",
  justificativa: "Ter componentes duplicados é como levar guarda-chuva reserva."
},
{
  enunciado: "A redundância aumenta a vulnerabilidade dos sistemas em nuvem.",
  correta: "E",
  tema: "Redundância",
  justificativa: "Ela aumenta a resiliência, não a vulnerabilidade."
},
{
  enunciado: "O balanceamento de carga distribui requisições entre múltiplos recursos.",
  correta: "C",
  tema: "Balanceamento de Carga",
  justificativa: "É dividir o peso para ninguém ficar sobrecarregado."
},
{
  enunciado: "O balanceamento de carga é incompatível com ambientes em nuvem.",
  correta: "E",
  tema: "Balanceamento de Carga",
  justificativa: "Na verdade, é amplamente utilizado e facilitado pela nuvem."
},
{
  enunciado: "A virtualização é tecnologia fundamental para viabilizar a computação em nuvem.",
  correta: "C",
  tema: "Virtualização",
  justificativa: "Ela permite dividir um recurso físico em vários ambientes virtuais."
},
{
  enunciado: "A computação em nuvem depende exclusivamente de virtualização tradicional.",
  correta: "E",
  tema: "Virtualização",
  justificativa: "Também utiliza contêineres e outras tecnologias."
},
{
  enunciado: "Contêineres permitem empacotar aplicações com suas dependências.",
  correta: "C",
  tema: "Contêineres",
  justificativa: "É como levar tudo pronto em uma mala."
},
{
  enunciado: "Contêineres substituem completamente as máquinas virtuais em qualquer cenário.",
  correta: "E",
  tema: "Contêineres",
  justificativa: "Eles coexistem; cada tecnologia tem usos específicos."
},
{
  enunciado: "O modelo de cobrança pay-as-you-go é característico da computação em nuvem.",
  correta: "C",
  tema: "Modelo de Cobrança",
  justificativa: "Paga-se conforme o consumo, como em serviços públicos."
},
{
  enunciado: "No modelo pay-as-you-go, o custo é independente do uso real dos recursos.",
  correta: "E",
  tema: "Modelo de Cobrança",
  justificativa: "O custo varia conforme o uso efetivo."
},
{
  enunciado: "A computação em nuvem pode reduzir custos operacionais para as organizações.",
  correta: "C",
  tema: "Benefícios da Nuvem",
  justificativa: "Reduz gastos com infraestrutura própria e manutenção."
},
{
  enunciado: "A adoção da nuvem sempre reduz custos, independentemente do uso.",
  correta: "E",
  tema: "Benefícios da Nuvem",
  justificativa: "Uso inadequado pode aumentar custos."
},
{
  enunciado: "A nuvem favorece a agilidade no desenvolvimento e implantação de soluções.",
  correta: "C",
  tema: "Agilidade",
  justificativa: "Permite testar e lançar rapidamente novas soluções."
},
{
  enunciado: "A computação em nuvem dificulta a inovação tecnológica.",
  correta: "E",
  tema: "Agilidade",
  justificativa: "Na prática, a nuvem acelera a inovação."
},
{
  enunciado: "A automação é recurso amplamente utilizado em ambientes de computação em nuvem.",
  correta: "C",
  tema: "Automação",
  justificativa: "Automatizar é reduzir trabalho manual e erros."
},
{
  enunciado: "A automação em nuvem elimina completamente a necessidade de intervenção humana.",
  correta: "E",
  tema: "Automação",
  justificativa: "A automação reduz, mas não elimina totalmente a intervenção humana."
},
{
  enunciado: "A computação em nuvem pode contribuir para a continuidade de negócios por meio de redundância e recuperação de desastres.",
  correta: "C",
  tema: "Continuidade de Negócios",
  justificativa: "É como ter um plano B automático: se um local falha, outro assume."
},
{
  enunciado: "A recuperação de desastres em nuvem elimina a necessidade de planejamento prévio.",
  correta: "E",
  tema: "Continuidade de Negócios",
  justificativa: "A nuvem facilita, mas não dispensa planejamento e testes."
},
{
  enunciado: "A computação em nuvem pode apoiar estratégias de backup e restauração de dados.",
  correta: "C",
  tema: "Backup e Recuperação",
  justificativa: "Guardar cópias na nuvem é como ter cópias das chaves em local seguro."
},
{
  enunciado: "O backup em nuvem dispensa políticas de retenção de dados.",
  correta: "E",
  tema: "Backup e Recuperação",
  justificativa: "Sem política de retenção, não se sabe por quanto tempo manter as cópias."
},
{
  enunciado: "A segurança da informação em nuvem envolve responsabilidades compartilhadas entre provedor e cliente.",
  correta: "C",
  tema: "Segurança em Nuvem",
  justificativa: "É uma casa em condomínio: algumas responsabilidades são do prédio, outras do morador."
},
{
  enunciado: "No modelo de responsabilidade compartilhada, o provedor é responsável por toda a segurança.",
  correta: "E",
  tema: "Segurança em Nuvem",
  justificativa: "O cliente também tem deveres, como gestão de acessos e dados."
},
{
  enunciado: "O controle de acesso é medida essencial para proteger recursos em nuvem.",
  correta: "C",
  tema: "Controle de Acesso",
  justificativa: "Controlar acesso é como trancar portas e distribuir chaves corretamente."
},
{
  enunciado: "O controle de acesso em nuvem é irrelevante, pois os dados ficam no provedor.",
  correta: "E",
  tema: "Controle de Acesso",
  justificativa: "Mesmo na nuvem, acessos indevidos podem causar grandes danos."
},
{
  enunciado: "A criptografia pode ser utilizada para proteger dados armazenados e em trânsito na nuvem.",
  correta: "C",
  tema: "Criptografia",
  justificativa: "Criptografar é como escrever mensagens em código para evitar leitura indevida."
},
{
  enunciado: "A criptografia elimina totalmente o risco de vazamento de dados.",
  correta: "E",
  tema: "Criptografia",
  justificativa: "Ela reduz riscos, mas não elimina falhas humanas ou de configuração."
},
{
  enunciado: "O gerenciamento de identidades é componente essencial da segurança em nuvem.",
  correta: "C",
  tema: "Gerenciamento de Identidades",
  justificativa: "Saber quem é quem evita que qualquer pessoa entre onde não deve."
},
{
  enunciado: "O gerenciamento de identidades é responsabilidade exclusiva do provedor de nuvem.",
  correta: "E",
  tema: "Gerenciamento de Identidades",
  justificativa: "O cliente define usuários, perfis e permissões."
},
{
  enunciado: "A computação em nuvem pode facilitar a conformidade com normas e padrões de segurança.",
  correta: "C",
  tema: "Conformidade",
  justificativa: "Provedores oferecem certificações que ajudam no cumprimento de normas."
},
{
  enunciado: "A adoção da nuvem garante automaticamente a conformidade regulatória.",
  correta: "E",
  tema: "Conformidade",
  justificativa: "A conformidade depende também de configurações e processos do cliente."
},
{
  enunciado: "A localização dos dados pode ser relevante para questões legais e regulatórias.",
  correta: "C",
  tema: "Localização de Dados",
  justificativa: "É como saber em qual país está o cofre: a lei aplicável pode mudar."
},
{
  enunciado: "Na nuvem, a localização dos dados é sempre irrelevante do ponto de vista legal.",
  correta: "E",
  tema: "Localização de Dados",
  justificativa: "Leis de proteção de dados podem exigir localização específica."
},
{
  enunciado: "A computação em nuvem pode apoiar iniciativas de governo digital.",
  correta: "C",
  tema: "Governo Digital",
  justificativa: "A nuvem permite escalar serviços públicos digitais rapidamente."
},
{
  enunciado: "A nuvem é incompatível com a prestação de serviços públicos digitais.",
  correta: "E",
  tema: "Governo Digital",
  justificativa: "Ela é, na prática, uma das principais viabilizadoras."
},
{
  enunciado: "O uso de APIs facilita a integração de serviços em ambientes de nuvem.",
  correta: "C",
  tema: "Integração de Sistemas",
  justificativa: "APIs funcionam como tomadas padrão para conectar sistemas."
},
{
  enunciado: "APIs dificultam a interoperabilidade entre sistemas em nuvem.",
  correta: "E",
  tema: "Integração de Sistemas",
  justificativa: "Elas existem justamente para facilitar a comunicação."
},
{
  enunciado: "A computação em nuvem pode apoiar práticas DevOps.",
  correta: "C",
  tema: "DevOps e Nuvem",
  justificativa: "A nuvem acelera integração, testes e entregas contínuas."
},
{
  enunciado: "DevOps é incompatível com ambientes de computação em nuvem.",
  correta: "E",
  tema: "DevOps e Nuvem",
  justificativa: "DevOps e nuvem se complementam."
},
{
  enunciado: "A observabilidade em nuvem permite monitorar desempenho e disponibilidade dos serviços.",
  correta: "C",
  tema: "Observabilidade",
  justificativa: "É como painel de carro: mostra se algo está fora do normal."
},
{
  enunciado: "A observabilidade é dispensável em ambientes altamente automatizados.",
  correta: "E",
  tema: "Observabilidade",
  justificativa: "Mesmo automatizado, é preciso monitorar para detectar falhas."
},
{
  enunciado: "A computação em nuvem favorece a adoção de arquiteturas baseadas em microsserviços.",
  correta: "C",
  tema: "Arquitetura de Microsserviços",
  justificativa: "A nuvem oferece flexibilidade ideal para serviços pequenos e independentes."
},
{
  enunciado: "Arquiteturas em nuvem favorecem a adoção de microsserviços por permitirem independência entre componentes.",
  correta: "C",
  tema: "Arquitetura em Nuvem",
  justificativa: "É como dividir uma fábrica em pequenas oficinas independentes: cada uma funciona e evolui sem parar as outras."
},
{
  enunciado: "Microsserviços exigem que todas as partes do sistema sejam implantadas simultaneamente.",
  correta: "E",
  tema: "Arquitetura de Microsserviços",
  justificativa: "A ideia é justamente permitir implantações independentes e frequentes."
},
{
  enunciado: "A computação em nuvem facilita a adoção de arquiteturas orientadas a serviços (SOA).",
  correta: "C",
  tema: "SOA e Nuvem",
  justificativa: "A nuvem fornece o ambiente ideal para serviços reutilizáveis e integrados."
},
{
  enunciado: "Arquiteturas SOA e microsserviços são conceitos idênticos.",
  correta: "E",
  tema: "SOA e Microsserviços",
  justificativa: "Microsserviços são uma evolução do SOA, mas não são iguais."
},
{
  enunciado: "A portabilidade é característica desejável em soluções de computação em nuvem.",
  correta: "C",
  tema: "Portabilidade",
  justificativa: "É como poder trocar de operadora sem mudar de telefone."
},
{
  enunciado: "A portabilidade elimina completamente o risco de dependência de fornecedor.",
  correta: "E",
  tema: "Portabilidade",
  justificativa: "Ela reduz, mas não elimina totalmente o vendor lock-in."
},
{
  enunciado: "O vendor lock-in ocorre quando há dependência excessiva de um único provedor de nuvem.",
  correta: "C",
  tema: "Vendor Lock-in",
  justificativa: "É como usar peças exclusivas de um fabricante: trocar fica difícil."
},
{
  enunciado: "O uso de padrões abertos pode mitigar o risco de vendor lock-in.",
  correta: "C",
  tema: "Vendor Lock-in",
  justificativa: "Padrões abertos funcionam como conectores universais."
},
{
  enunciado: "A computação em nuvem inviabiliza estratégias multicloud.",
  correta: "E",
  tema: "Multicloud",
  justificativa: "A multicloud utiliza múltiplos provedores justamente com base na nuvem."
},
{
  enunciado: "A estratégia multicloud pode aumentar resiliência e flexibilidade.",
  correta: "C",
  tema: "Multicloud",
  justificativa: "É como não depender de um único fornecedor para itens essenciais."
},
{
  enunciado: "A nuvem pode ser utilizada para processamento de grandes volumes de dados.",
  correta: "C",
  tema: "Big Data e Nuvem",
  justificativa: "A elasticidade da nuvem é ideal para cargas variáveis de dados."
},
{
  enunciado: "O processamento de Big Data é incompatível com ambientes em nuvem.",
  correta: "E",
  tema: "Big Data e Nuvem",
  justificativa: "A nuvem é amplamente usada para Big Data."
},
{
  enunciado: "Serviços de computação em nuvem podem apoiar soluções de inteligência artificial.",
  correta: "C",
  tema: "IA e Nuvem",
  justificativa: "A nuvem fornece poder computacional sob demanda para treinar modelos."
},
{
  enunciado: "A inteligência artificial exige obrigatoriamente infraestrutura on-premises.",
  correta: "E",
  tema: "IA e Nuvem",
  justificativa: "A nuvem é uma das principais plataformas para IA."
},
{
  enunciado: "A computação em nuvem pode contribuir para a sustentabilidade ao otimizar o uso de recursos.",
  correta: "C",
  tema: "Sustentabilidade",
  justificativa: "Compartilhar recursos reduz desperdício, como carona em vez de vários carros."
},
{
  enunciado: "A adoção da nuvem sempre aumenta o consumo energético.",
  correta: "E",
  tema: "Sustentabilidade",
  justificativa: "O uso eficiente pode reduzir impacto ambiental."
},
{
  enunciado: "O monitoramento de custos é prática essencial em ambientes de computação em nuvem.",
  correta: "C",
  tema: "Gestão de Custos",
  justificativa: "Sem controle, o modelo sob demanda pode gerar gastos inesperados."
},
{
  enunciado: "Em nuvem, o controle de custos é responsabilidade exclusiva do provedor.",
  correta: "E",
  tema: "Gestão de Custos",
  justificativa: "O cliente deve acompanhar e gerenciar seu consumo."
},
{
  enunciado: "A computação em nuvem favorece experimentação e inovação rápida.",
  correta: "C",
  tema: "Inovação",
  justificativa: "Testar novas ideias na nuvem é como prototipar rapidamente sem grandes investimentos."
},
{
  enunciado: "A nuvem dificulta a realização de testes e experimentos.",
  correta: "E",
  tema: "Inovação",
  justificativa: "Ela reduz barreiras para testar e descartar rapidamente."
},
{
  enunciado: "A governança em nuvem busca alinhar uso dos recursos aos objetivos da organização.",
  correta: "C",
  tema: "Governança em Nuvem",
  justificativa: "Governar é garantir que a nuvem seja usada com propósito e controle."
},
{
  enunciado: "A governança em nuvem se resume à contratação do provedor.",
  correta: "E",
  tema: "Governança em Nuvem",
  justificativa: "Envolve políticas, controles, riscos e acompanhamento contínuo."
},
{
  enunciado: "A computação em nuvem pode ser utilizada tanto no setor privado quanto no setor público.",
  correta: "C",
  tema: "Adoção da Nuvem",
  justificativa: "A nuvem é modelo tecnológico, não restrito a um setor."
},
{
  enunciado: "A adoção da nuvem pelo setor público é vedada por questões de segurança.",
  correta: "E",
  tema: "Adoção da Nuvem",
  justificativa: "Com controles adequados, a nuvem é amplamente utilizada no setor público."
},
{
  enunciado: "A computação em nuvem deve ser avaliada considerando riscos, benefícios e requisitos legais.",
  correta: "C",
  tema: "Avaliação e Adoção",
  justificativa: "Adotar nuvem é decisão estratégica, como escolher onde morar: exige análise."
},

];