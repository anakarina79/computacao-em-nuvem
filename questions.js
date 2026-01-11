const questions = [
 {
    "enunciado": "Nuvem privada, nuvem comunitária, nuvem pública e nuvem híbrida são modelos de implantação que compõem a computação em nuvem.",
    "correta": "C",
    "tema": "Modelos de Implantação",
    "justificativa": "Esta é a classificação clássica do NIST para modelos de implantação. [1] Analogia: Pense na implantação como 'quem pode usar a casa': Privada (sua casa), Pública (hotel/parque), Comunitária (clube de sócios) e Híbrida (você tem sua casa, mas aluga um quarto de hotel quando recebe muitas visitas)."
  },
  {
    "enunciado": "Ao comitê de segurança da informação compete supervisionar a aplicação do ato normativo sobre o uso seguro de computação em nuvem.",
    "correta": "E",
    "tema": "Legislação e Governança (IN GSI)",
    "justificativa": "Segundo a norma, a função do Comitê de Segurança geralmente é estratégica e deliberativa (definir regras), e não operacional (supervisionar o dia a dia da aplicação técnica). A supervisão direta cabe às áreas executivas de TI ou Segurança da Informação. [2]"
  },
  {
    "enunciado": "Definir os requisitos criptográficos mínimos para o armazenamento de dados e informações, custodiados pela administração pública federal, em soluções de computação em nuvem é competência do comitê de segurança da informação.",
    "correta": "C",
    "tema": "Legislação e Governança (IN GSI)",
    "justificativa": "Correto. O Comitê estabelece as 'regras do jogo' (governança), incluindo o nível de segurança e criptografia exigidos para proteger os dados governamentais na nuvem. [3]"
  },
  {
    "enunciado": "A Instrução Normativa GSI n.º 5 estabelece que a transferência de sistemas estruturantes para um provedor de serviço de nuvem seja realizada nos modelos de implementação de nuvem pública, ou de nuvem híbrida, vinculada à infraestrutura local de cada órgão ou entidade.",
    "correta": "E",
    "tema": "Legislação e Governança (IN GSI)",
    "justificativa": "A norma impõe restrições severas a sistemas estruturantes/críticos. Geralmente, não se obriga o uso de nuvem pública para sistemas críticos; pelo contrário, priorizam-se ambientes com maior controle (privados ou com requisitos de isolamento rígidos), e não a nuvem pública aberta como regra mandatória. [4]"
  },
  {
    "enunciado": "No armazenamento de dados em nuvem, a escalabilidade de recursos pode ser automática, conforme a demanda.",
    "correta": "C",
    "tema": "Características da Nuvem",
    "justificativa": "Isso define a **Elasticidade Rápida**. O sistema percebe o aumento de carga e adiciona recursos (RAM, CPU, Disco) sem intervenção humana. Analogia: Uma caixa d'água que aumenta de tamanho sozinha quando começa a chover muito. [5]"
  },
  {
    "enunciado": "O armazenamento de dados em nuvem pública garante total controle físico dos dados pelo usuário, o que melhora a segurança da informação.",
    "correta": "E",
    "tema": "Nuvem Pública",
    "justificativa": "Na nuvem pública, você perde justamente o controle físico. Você não sabe em qual rack ou HD seu dado está. A segurança é lógica (criptografia, acesso), mas o controle físico é do provedor (AWS, Azure, Google). [6]"
  },
  {
    "enunciado": "No modelo de computação em nuvem SaaS (software as a service), o consumidor tem controle sobre a infraestrutura de rede, os servidores e o sistema operacional, sendo responsável pela instalação, configuração e manutenção das aplicações fornecidas pelo provedor.",
    "correta": "E",
    "tema": "Modelos de Serviço (SaaS)",
    "justificativa": "No SaaS (ex: Gmail, Office 365), o usuário é apenas um consumidor. Ele não gerencia nada abaixo da aplicação. Quem cuida da rede, servidor e instalação é o provedor. [7]"
  },
  {
    "enunciado": "O armazenamento de dados em nuvem elimina os riscos de segurança que normalmente ocorrem em ambientes tradicionais, como ameaças internas, violação e perda de dados, phishing, malware, ataques DDoS e APIs vulneráveis.",
    "correta": "E",
    "tema": "Segurança na Nuvem",
    "justificativa": "A nuvem não elimina riscos; ela os transforma ou compartilha. Phishing, roubo de credenciais e ataques DDoS continuam existindo e podem ser até mais perigosos, pois o acesso é via internet. A responsabilidade pela segurança dos dados continua sendo do cliente. [8]"
  },
  {
    "enunciado": "Computação em nuvem é uma plataforma ou estilo de computação que permite acesso remoto a recursos compartilhados de forma dinâmica e escalável, geralmente via Internet.",
    "correta": "C",
    "tema": "Definição de Nuvem",
    "justificativa": "Definição correta. Envolve pool de recursos (compartilhamento), acesso via rede (remoto) e elasticidade (dinâmica/escalável). [9]"
  },
  {
    "enunciado": "Na computação em nuvem do tipo software como serviço, o provedor oferece infraestrutura e ferramentas, permitindo ao cliente desenvolver e gerenciar suas próprias aplicações.",
    "correta": "E",
    "tema": "Modelos de Serviço (PaaS vs SaaS)",
    "justificativa": "A descrição dada ('oferecer ferramentas para desenvolver') refere-se ao **PaaS** (Plataforma como Serviço). No SaaS, o software já está pronto e o cliente apenas usa. Analogia: PaaS é a cozinha equipada para você cozinhar; SaaS é o prato pronto servido no restaurante. [10]"
  },
  {
    "enunciado": "O serviço de armazenamento em nuvem permite salvar arquivos, bancos de dados e outras informações em servidores remotos tal que a acessibilidade e a escalabilidade são vantagens frente aos dispositivos de armazenamento local.",
    "correta": "C",
    "tema": "Armazenamento em Nuvem",
    "justificativa": "Armazenamento local (seu HD) é limitado e fixo. Na nuvem, você acessa de qualquer lugar (acessibilidade) e pode aumentar o espaço infinitamente (escalabilidade) pagando pelo uso. [11]"
  },
  {
    "enunciado": "A nuvem privada é um ambiente de nuvem que combina vários benefícios de computação em nuvem, mas não oferece elasticidade devido à natureza de sua concepção.",
    "correta": "E",
    "tema": "Nuvem Privada",
    "justificativa": "Nuvens privadas **oferecem** elasticidade, pois usam virtualização. A diferença é que a elasticidade é limitada à quantidade total de hardware que a empresa comprou, enquanto na pública o limite parece infinito. [12]"
  },
  {
    "enunciado": "Dos modelos de serviços em nuvem, o SaaS (software as a service) é aquele que fornece aos usuários o controle do nível mais baixo dos recursos de computação na nuvem.",
    "correta": "E",
    "tema": "Modelos de Serviço (Hierarquia)",
    "justificativa": "O nível mais baixo (controle de hardware virtual, CPU, RAM) é o **IaaS** (Infraestrutura). O SaaS é o nível mais alto (abstração total). [12]"
  },
  {
    "enunciado": "Na computação em nuvem, os recursos de computação ficam hospedados em um data center remoto e são disponibilizados à medida que são utilizados.",
    "correta": "C",
    "tema": "Conceitos Básicos",
    "justificativa": "Conceito de provisionamento sob demanda e localização transparente. Você usa a 'torneira' da computação sem precisar ter a 'caixa d'água' em casa. [13]"
  },
  {
    "enunciado": "Uma vez que o serviço da ANVISA que permite emitir o certificado internacional de vacinação está disponível na Web, é correto concluir que o site da ANVISA está hospedado na nuvem através de um serviço de PaaS (platform as a service).",
    "correta": "E",
    "tema": "Classificação de Serviços",
    "justificativa": "Não se pode concluir o modelo de *hospedagem* (IaaS, PaaS ou on-premise) apenas olhando o site. Além disso, para o usuário cidadão, o serviço web funcional (emitir certificado) assemelha-se a um SaaS (consumo de software). A afirmação é categórica demais sem evidências técnicas. [14]"
  },
  {
    "enunciado": "A computação em nuvem permite o compartilhamento remoto de servidores (hardwares), aplicações (softwares) e ferramentas de tecnologia da informação, por exemplo, bancos de dados, provendo transparência de acesso e de localização.",
    "correta": "C",
    "tema": "Resource Pooling",
    "justificativa": "Define o conceito de *Resource Pooling* (Pool de Recursos) e *Location Independence*. O usuário não sabe onde está o dado fisicamente, apenas acessa o serviço lógico. [15]"
  },
  {
    "enunciado": "Dropbox e Google Drive são repositórios públicos que permitem a transferência de arquivos entre computadores, via Internet, utilizando os protocolos ARP e ICMP.",
    "correta": "E",
    "tema": "Protocolos de Rede",
    "justificativa": "Dropbox e Google Drive operam na Camada de Aplicação, usando principalmente **HTTP/HTTPS**. ARP (resolução de endereço MAC) e ICMP (Ping/diagnóstico) são protocolos de infraestrutura de rede de baixo nível e não transportam arquivos de usuário. [16]"
  },
  {
    "enunciado": "O Excel 365, que faz parte do Microsoft Office 365, constitui um exemplo de aplicação do modelo PaaS (plataforma como serviço) na cloud computing.",
    "correta": "E",
    "tema": "SaaS vs PaaS",
    "justificativa": "O Office 365 (agora Microsoft 365) é o exemplo clássico de **SaaS**. O usuário consome o software final (planilha), não uma plataforma para desenvolver novos softwares. [17]"
  },
  {
    "enunciado": "Em comparação com o IaaS, o SaaS é a modalidade de computação em nuvem que oferece menos recursos; nela são ofertadas ao usuário somente soluções fundamentais de computação e de armazenamento sob demanda.",
    "correta": "E",
    "tema": "SaaS vs IaaS",
    "justificativa": "A definição dada ('soluções fundamentais de computação e armazenamento') refere-se ao **IaaS**. O SaaS oferece a solução *mais completa* (o software inteiro pronto), não menos recursos. [18]"
  },
  {
    "enunciado": "As nuvens privadas sempre oferecem menos escalabilidade em comparação com a infraestrutura local, uma vez que elas são recursos de computação em nuvem usados exclusivamente por uma única empresa.",
    "correta": "E",
    "tema": "Nuvem Privada vs Local",
    "justificativa": "Uma nuvem privada é *geralmente* mais escalável e eficiente que uma infraestrutura local tradicional (bare metal) devido à virtualização e automação. O erro está em dizer que ela é menos escalável que o local tradicional. Ela é menos escalável que a *Nuvem Pública*. [19]"
  },
  {
    "enunciado": "Na PaaS (plataforma como um serviço), as organizações não precisam gerenciar a infraestrutura de hardware e de sistemas operacionais.",
    "correta": "C",
    "tema": "PaaS",
    "justificativa": "No PaaS, o provedor entrega o ambiente de execução (Runtime, Middleware, OS). A responsabilidade do cliente começa apenas na Aplicação e nos Dados. [20]"
  },
  {
    "enunciado": "Uma nuvem híbrida é um ambiente de computação misto onde aplicativos são executados usando uma combinação de computação, armazenamento e serviços em diferentes ambientes, tais como nuvens públicas e privadas e data centers.",
    "correta": "C",
    "tema": "Nuvem Híbrida",
    "justificativa": "Híbrido exige a combinação de dois ou mais tipos de nuvem (ex: Privada + Pública) com tecnologia que permita a portabilidade de dados e aplicações entre elas. [21]"
  },
{
    "enunciado": "No modelo IaaS, as redes, o armazenamento, os servidores e a virtualização são de responsabilidade do fornecedor de serviços de nuvem, enquanto no PaaS o cliente é responsável apenas pelos dados e aplicações.",
    "correta": "C",
    "tema": "Modelos de Serviço (Responsabilidade)",
    "justificativa": "Esta é a divisão clássica de responsabilidades. IaaS entrega o hardware virtualizado; PaaS entrega a plataforma de desenvolvimento. Analogia: IaaS é alugar o terreno e a estrutura; PaaS é alugar a casa mobiliada, onde você só traz suas roupas (dados/apps)."
  },
  {
    "enunciado": "Segurança, integração e padronização são considerados três dos itens mais desafiadores para a implementação da computação em nuvem.",
    "correta": "C",
    "tema": "Desafios da Nuvem",
    "justificativa": "Integrar sistemas legados com a nuvem e garantir que a segurança siga os padrões da empresa são as maiores barreiras de entrada. Analogia: Mudar de casa é fácil, difícil é fazer os móveis antigos caberem na planta nova e garantir que a fechadura seja segura."
  },
  {
    "enunciado": "Uma das características do armazenamento em nuvem é a elasticidade, ou seja, o usuário pode aumentar e diminuir a escala verticalmente ou horizontalmente, conforme a demanda, e pagar apenas pelo que usa.",
    "correta": "C",
    "tema": "Elasticidade",
    "justificativa": "Elasticidade é a capacidade de adaptação dinâmica. Analogia: É como uma conta de luz: você consome mais no verão (ar condicionado) e paga mais, consome menos no inverno e paga menos, sem precisar trocar a fiação da casa."
  },
  {
    "enunciado": "Se um arquivo da Área de Trabalho for colocado na nuvem, ele ficará disponível apenas no computador onde foi salvo originalmente.",
    "correta": "E",
    "tema": "Armazenamento em Nuvem",
    "justificativa": "A principal vantagem da nuvem é a ubiquidade. O arquivo fica disponível em qualquer dispositivo com acesso à internet (solução de armazenamento online)."
  },
  {
    "enunciado": "O Gmail é um exemplo de aplicação em nuvem (SaaS), pois o sistema de gerenciamento de emails fica armazenado nos servidores do prestador do serviço.",
    "correta": "C",
    "tema": "Exemplos de SaaS",
    "justificativa": "Webmail é o exemplo clássico de SaaS. Você usa o serviço sem instalar servidor de email. Analogia: É como usar o correio; você não precisa ter caminhões de entrega, apenas coloca a carta na caixa."
  },
  {
    "enunciado": "O Microsoft Office 365 não dispõe de aplicações em nuvem, sendo possível utilizar apenas softwares instalados localmente.",
    "correta": "E",
    "tema": "Office 365",
    "justificativa": "O Office 365 oferece versões web (Word Online, Excel Online) que rodam inteiramente no navegador, caracterizando SaaS."
  },
  {
    "enunciado": "Para compartilhar arquivos entre uma delegacia e agentes em campo de forma sincronizada, a contratação de serviços como Google Drive ou Dropbox é uma solução tecnicamente viável.",
    "correta": "C",
    "tema": "Ferramentas de Nuvem",
    "justificativa": "Essas ferramentas são desenhadas para sincronização e acesso remoto a arquivos."
  },
  {
    "enunciado": "Uma das principais características da computação em nuvem é a elasticidade: uma empresa pode usar os recursos de acordo com a sua demanda, inclusive aumentando ou diminuindo, dinamicamente, a sua capacidade computacional.",
    "correta": "C",
    "tema": "Elasticidade",
    "justificativa": "Definição correta de elasticidade. Permite evitar o superdimensionamento (pagar por servidores ociosos) ou subdimensionamento (sistema lento)."
  },
  {
    "enunciado": "O modelo de computação em nuvem que permite aos usuários finais acessar uma suíte de escritório na Web é denominado IaaS.",
    "correta": "E",
    "tema": "SaaS",
    "justificativa": "Suítes de escritório (software pronto para uso) são **SaaS** (Software as a Service). IaaS seria alugar a máquina virtual para instalar o Office nela."
  },
  {
    "enunciado": "Uma característica própria dos serviços de armazenamento de dados em nuvem é a mobilidade facilitada para o usuário.",
    "correta": "C",
    "tema": "Benefícios da Nuvem",
    "justificativa": "A nuvem desvincula o dado do dispositivo físico. Analogia: Seu dinheiro está no banco (nuvem), não no colchão (local), então você pode sacar em qualquer caixa eletrônico."
  },
  {
    "enunciado": "O tipo de computação em nuvem no qual as ferramentas de desenvolvimento (web-based) são compartilhadas para criar novas aplicações é o PaaS.",
    "correta": "C",
    "tema": "PaaS",
    "justificativa": "PaaS fornece o ambiente de desenvolvimento (middleware, runtime). É a 'oficina' alugada para o programador."
  },
  {
    "enunciado": "No modelo SaaS, as atividades do provedor são essencialmente desenvolver e testar aplicações para o cliente hospedar.",
    "correta": "E",
    "tema": "SaaS",
    "justificativa": "No SaaS, o provedor *entrega* a aplicação pronta para uso, não apenas o desenvolvimento. O provedor hospeda e gerencia tudo."
  },
  {
    "enunciado": "Ao utilizar armazenamento na nuvem, o usuário tem a garantia absoluta de que seus arquivos serão recuperados em caso de perda, pois a nuvem faz backup diário obrigatório de tudo.",
    "correta": "E",
    "tema": "Backup e Responsabilidade",
    "justificativa": "Embora provedores tenham redundância, a responsabilidade pelos dados (e backups de versões anteriores ou deletadas acidentalmente) muitas vezes é compartilhada ou requer configuração extra. Não existe 'garantia absoluta' sem contrato específico."
  },
  {
    "enunciado": "O gerenciamento de serviços em nuvem refere-se apenas à redução de custos, não envolvendo a coordenação da infraestrutura.",
    "correta": "E",
    "tema": "Gerenciamento de Nuvem",
    "justificativa": "O gerenciamento envolve orquestração, segurança, performance e provisionamento, muito além do custo."
  },
  {
    "enunciado": "Identifica-se Software como Serviço (SaaS) quando um provedor oferece um ambiente onde usuários podem *construir* e disponibilizar aplicativos.",
    "correta": "E",
    "tema": "SaaS vs PaaS",
    "justificativa": "Construir aplicativos = **PaaS**. Usar aplicativos prontos = **SaaS**."
  },
  {
    "enunciado": "A PaaS oferece o mais alto nível de controle de gerenciamento sobre os recursos de TI (como hardware e rede) na nuvem.",
    "correta": "E",
    "tema": "Controle na Nuvem",
    "justificativa": "O nível mais alto de controle sobre a infraestrutura está no **IaaS**. No PaaS, o hardware é abstraído."
  },
  {
    "enunciado": "Uma desvantagem da cloud computing é a inflexibilidade no provisionamento, sendo impossível ajustar a escala durante o contrato.",
    "correta": "E",
    "tema": "Elasticidade",
    "justificativa": "A maior vantagem da nuvem é justamente a flexibilidade e a elasticidade para ajustar recursos a qualquer momento."
  },
  {
    "enunciado": "Microsoft Office 365 e Google Docs são exemplos de SaaS (Software como Serviço).",
    "correta": "C",
    "tema": "Exemplos de SaaS",
    "justificativa": "Correto. São softwares consumidos via navegador/assinatura."
  },
  {
    "enunciado": "Uma VPN não pode ser utilizada para prover segurança no acesso a um serviço do tipo PaaS na nuvem pública.",
    "correta": "E",
    "tema": "Segurança e Redes",
    "justificativa": "VPNs são frequentemente usadas para criar túneis seguros entre a empresa e os serviços de nuvem (PaaS ou IaaS)."
  },
  {
    "enunciado": "PaaS é o tipo de cloud computing que permite a utilização de uma aplicação final na Web, como o Google Docs.",
    "correta": "E",
    "tema": "SaaS vs PaaS",
    "justificativa": "Google Docs é produto final = SaaS. PaaS é para criar o Google Docs."
  },
  {
    "enunciado": "O serviço medido (Measured Service) permite que o uso de recursos seja monitorado e controlado, fornecendo transparência para provedor e consumidor.",
    "correta": "C",
    "tema": "Características NIST",
    "justificativa": "É a característica de 'pay-per-use'. Analogia: Hidrômetro da casa, que mede exatamente quanta água você usou."
  },
  {
    "enunciado": "A característica de os recursos de computação do provedor serem agrupados para atender a vários consumidores (multi-tenant) é chamada de elasticidade.",
    "correta": "E",
    "tema": "Resource Pooling",
    "justificativa": "Isso se chama **Pool de Recursos** (Resource Pooling). Elasticidade é sobre aumentar/diminuir capacidade."
  },
 {
    "enunciado": "O fornecimento de mais área de armazenamento em tempo real para uma empresa que atingiu sua capacidade ilustra o conceito de elasticidade rápida.",
    "correta": "C",
    "tema": "Elasticidade",
    "justificativa": "A capacidade de escalar recursos (como disco) instantaneamente conforme a necessidade é a definição de elasticidade rápida."
  },
  {
    "enunciado": "Gmail e Microsoft Office 365 são exemplos de Plataforma como Serviço (PaaS).",
    "correta": "E",
    "tema": "Classificação de Serviços",
    "justificativa": "São exemplos de **SaaS**. O usuário final consome o serviço de email/edição, não a plataforma de programação."
  },
  {
    "enunciado": "Uma característica da computação em nuvem é a elasticidade rápida, que permite provisionar recursos independentemente da sua localização geográfica.",
    "correta": "E",
    "tema": "Localização de Dados",
    "justificativa": "A elasticidade provisiona recursos, mas a localização (Região) é uma escolha arquitetural importante e fixa (latência, leis de dados). Você não provisiona 'sem saber onde', você escolhe a região."
  },
  {
    "enunciado": "A computação em nuvem exige acesso exclusivo via servidores, não permitindo o uso de dispositivos clientes como smartphones.",
    "correta": "E",
    "tema": "Amplo Acesso à Rede",
    "justificativa": "Uma das características essenciais é o **Amplo Acesso à Rede** (Broad Network Access), que permite acesso por celulares, tablets, laptops e workstations."
  },
  {
    "enunciado": "O Microsoft Office 365, acessado via Web com assinatura mensal, é denominado SaaS.",
    "correta": "C",
    "tema": "SaaS",
    "justificativa": "Modelo de subscrição para uso de software = SaaS."
  },
  {
    "enunciado": "O aumento ou a redução rápida na capacidade de recursos computacionais, como processador sob demanda, é uma característica de serviços de cloud computing.",
    "correta": "C",
    "tema": "Elasticidade",
    "justificativa": "Isso é o coração da nuvem: pagar apenas pela CPU que você precisa naquele momento."
  },
  {
    "enunciado": "O provisionamento para aumento de recursos como memória RAM é uma característica exclusiva de um ambiente PaaS, não ocorrendo no IaaS.",
    "correta": "E",
    "tema": "IaaS vs PaaS",
    "justificativa": "Aumentar RAM/CPU é uma função típica de **IaaS** (escalar a máquina virtual). No PaaS, isso geralmente é automático ou abstraído."
  },
  {
    "enunciado": "A computação na nuvem possibilita que aplicações executadas em servidores isolados sejam migradas para um ambiente de larga escala com uso elástico de recursos.",
    "correta": "C",
    "tema": "Migração para Nuvem",
    "justificativa": "A nuvem permite que aplicações 'presas' em servidores físicos ganhem escala global."
  },
  {
    "enunciado": "Uma nuvem pode tanto armazenar arquivos pessoais de um usuário (como fotos) quanto hospedar a intranet corporativa de uma organização.",
    "correta": "C",
    "tema": "Versatilidade da Nuvem",
    "justificativa": "A nuvem atende desde o usuário doméstico (Google Photos) até grandes empresas (Intranets no SharePoint/Azure)."
  },
  {
    "enunciado": "A computação em nuvem é melhor aplicada quando várias aplicações e recursos precisam ser usados remotamente como se estivessem no computador local.",
    "correta": "C",
    "tema": "Conceito de Uso",
    "justificativa": "A nuvem oferece a experiência de uso local (performance, disponibilidade) através da rede."
  },
  {
    "enunciado": "Segundo o NIST, o autosserviço sob demanda é uma característica essencial da nuvem, permitindo que o usuário provisione recursos sem interação humana com o provedor.",
    "correta": "C",
    "tema": "Autosserviço",
    "justificativa": "O usuário clica em um portal e o servidor é criado. Não é necessário ligar para o suporte da Amazon/Google."
  },
  {
    "enunciado": "O OneDrive permite o armazenamento em nuvem, acesso remoto e sincronização entre dispositivos como computadores e celulares.",
    "correta": "C",
    "tema": "OneDrive",
    "justificativa": "Funções primárias do OneDrive: Armazenar, Sincronizar, Acessar de qualquer lugar."
  },
  {
    "enunciado": "No OneDrive, se um arquivo é compartilhado com permissão de 'Visualizar', o destinatário está, por padrão, impedido de baixá-lo ou imprimi-lo.",
    "correta": "E",
    "tema": "Permissões OneDrive",
    "justificativa": "A permissão 'Visualizar' geralmente permite ler, baixar e imprimir. Para impedir o download, é necessário ativar configurações específicas de proteção (IRM/Block Download)."
  },
  {
    "enunciado": "O compartilhamento de arquivos no OneDrive pode ser restrito a usuários específicos, garantindo controle sobre quem visualiza ou edita.",
    "correta": "C",
    "tema": "Segurança OneDrive",
    "justificativa": "É possível compartilhar via link público ou via convite direto para um email específico (mais seguro)."
  },
  {
    "enunciado": "O OneDrive é o aplicativo da Microsoft que permite realizar backup automático de pastas do Windows (Área de Trabalho, Documentos, Imagens).",
    "correta": "C",
    "tema": "Backup OneDrive",
    "justificativa": "O recurso 'Backup de Pasta do PC' do OneDrive sincroniza essas pastas de perfil automaticamente para a nuvem."
  },
  {
    "enunciado": "Para utilizar o OneDrive de forma sincronizada no Windows, é necessário ter uma conta Microsoft (pessoal, corporativa ou estudante) configurada.",
    "correta": "C",
    "tema": "Requisitos OneDrive",
    "justificativa": "A autenticação é obrigatória para vincular o espaço em nuvem ao dispositivo."
  },
  {
    "enunciado": "O OneDrive permite selecionar quais pastas específicas da nuvem serão sincronizadas para o computador local, economizando espaço.",
    "correta": "C",
    "tema": "Sincronização Seletiva",
    "justificativa": "Você pode escolher baixar apenas as pastas de trabalho e deixar as fotos pessoais apenas na nuvem."
  },
  {
    "enunciado": "Arquivos pessoais armazenados no OneDrive não podem ser compartilhados com outros usuários por motivos de segurança.",
    "correta": "E",
    "tema": "Compartilhamento",
    "justificativa": "O compartilhamento é uma funcionalidade nativa, mesmo para arquivos pessoais."
  },
  {
    "enunciado": "O Microsoft Office 365 utiliza o modelo IaaS para apresentar sua interface web.",
    "correta": "E",
    "tema": "Office 365",
    "justificativa": "Office 365 é **SaaS**. O usuário não vê a infraestrutura (IaaS) por trás."
  },
  {
    "enunciado": "Ao usar o OneDrive, é criada uma pasta local no computador que espelha o conteúdo da nuvem.",
    "correta": "C",
    "tema": "Funcionamento OneDrive",
    "justificativa": "Essa é a pasta de sincronização padrão do cliente OneDrive no Windows."
  },
  {
    "enunciado": "Ao compartilhar um arquivo via OneDrive com a opção de link, o destinatário recebe um acesso direto ao arquivo na nuvem, sem que o arquivo seja anexado ao email.",
    "correta": "C",
    "tema": "Compartilhamento Eficiente",
    "justificativa": "Evita duplicidade de arquivos e lotação da caixa de entrada. Todos editam o mesmo arquivo (single source of truth)."
  },
  {
    "enunciado": "A plataforma de desenvolvimento e execução de aplicativos em nuvem da Microsoft chama-se Azure.",
    "correta": "C",
    "tema": "Microsoft Azure",
    "justificativa": "Azure é o concorrente da AWS e Google Cloud, oferecendo IaaS, PaaS e SaaS."
  },
 {
    "enunciado": "Para disponibilizar um arquivo do Google Drive para outro usuário, deve-se utilizar a opção 'Compartilhar'.",
    "correta": "C",
    "tema": "Google Drive",
    "justificativa": "O botão 'Compartilhar' permite definir permissões de leitor, comentarista ou editor."
  },
  {
    "enunciado": "Se um arquivo em uma pasta compartilhada do Google Drive for excluído por um editor (não proprietário), ele é removido da visualização de todos os usuários.",
    "correta": "C",
    "tema": "Colaboração em Nuvem",
    "justificativa": "Em pastas compartilhadas, a exclusão afeta a todos, embora o arquivo possa ir para a lixeira ou ficar órfão dependendo de quem é o dono real."
  },
  {
    "enunciado": "Para compartilhar um arquivo no Google Docs, é obrigatório que o destinatário tenha uma conta Gmail.",
    "correta": "E",
    "tema": "Google Docs",
    "justificativa": "É possível compartilhar via 'Link para qualquer pessoa com o link' (visitante), permitindo acesso sem conta Google."
  },
  {
    "enunciado": "A fórmula correta para média no Google Planilhas (versão em inglês ou universal) é =AVERAGE(intervalo) ou =MÉDIA(intervalo) na versão em português.",
    "correta": "C",
    "tema": "Google Planilhas",
    "justificativa": "As funções de planilha seguem o padrão do Excel, adaptadas ao idioma."
  },
  {
    "enunciado": "No Google Sala de Aula, o perfil de professor permite postar avisos no mural e convidar responsáveis, mas não permite alterar o perfil de um aluno para professor.",
    "correta": "C",
    "tema": "Google Classroom",
    "justificativa": "Perfis são definidos administrativamente ou na criação. Um aluno não vira professor na mesma turma facilmente."
  },
  {
    "enunciado": "O ícone de 'T' cortado ou 'Tx' no Google Docs refere-se à função de 'Limpar formatação'.",
    "correta": "C",
    "tema": "Edição de Texto",
    "justificativa": "Remove negrito, itálico, fontes e cores, retornando ao texto padrão."
  },
  {
    "enunciado": "O Google Drive oferece 150 GB de espaço gratuito para armazenamento.",
    "correta": "E",
    "tema": "Limites Gratuitos",
    "justificativa": "O plano gratuito padrão do Google é de **15 GB** (compartilhado entre Drive, Gmail e Fotos)."
  },
  {
    "enunciado": "Google Scholar é a ferramenta voltada para pesquisa em bases de dados científicas e acadêmicas.",
    "correta": "C",
    "tema": "Ferramentas Google",
    "justificativa": "Foca em artigos, teses e livros, filtrando resultados não acadêmicos."
  },
  {
    "enunciado": "Para entrar em uma reunião do Google Meet como convidado, deve-se clicar em 'Pedir para participar'.",
    "correta": "C",
    "tema": "Google Meet",
    "justificativa": "Medida de segurança para evitar invasões (Zoombombing) em reuniões privadas."
  },
  {
    "enunciado": "Dropbox é um exemplo de solução de armazenamento de arquivos em nuvem.",
    "correta": "C",
    "tema": "Exemplos de Cloud Storage",
    "justificativa": "Concorrente do Google Drive e OneDrive, focado em sync de arquivos."
  },
  {
    "enunciado": "No modelo IaaS, o usuário pode instalar e executar qualquer tipo de software, como sistemas operacionais e aplicações, sobre os recursos computacionais oferecidos.",
    "correta": "C",
    "tema": "Definição de IaaS",
    "justificativa": "IaaS é como alugar um computador em branco (bare metal ou VM). Você instala o Windows/Linux e o que mais quiser."
  },
  {
    "enunciado": "No modelo PaaS, as camadas de aplicações e de dados são gerenciadas pelo provedor de serviços.",
    "correta": "E",
    "tema": "Responsabilidade PaaS",
    "justificativa": "No PaaS, o provedor gerencia o SO e o Middleware. O **Cliente** gerencia a Aplicação e os Dados."
  },
  {
    "enunciado": "Na nuvem pública, os recursos computacionais são compartilhados entre clientes, e o controle físico das instâncias e máquinas virtuais é delegado ao provedor.",
    "correta": "C",
    "tema": "Nuvem Pública",
    "justificativa": "O provedor é o dono do hardware ('dono do prédio'). O cliente aluga o uso."
  },
  {
    "enunciado": "Uma vantagem da nuvem privada é seu baixo custo em relação a um datacenter comum, pois a contratada paga pelo gerenciamento.",
    "correta": "E",
    "tema": "Custo Nuvem Privada",
    "justificativa": "Nuvem privada geralmente tem **alto custo** inicial (CAPEX) pois a empresa precisa comprar e manter os servidores (ou pagar caro por servidores dedicados exclusivos)."
  },
  {
    "enunciado": "O 'bare metal' caracteriza-se como um servidor físico dedicado a um único cliente, com total controle da infraestrutura.",
    "correta": "C",
    "tema": "Bare Metal",
    "justificativa": "É o oposto de máquina virtual compartilhada. É o 'ferro puro' só para você. Alta performance, sem vizinhos barulhentos."
  },
  {
    "enunciado": "A rápida elasticidade na nuvem acarreta maiores custos fixos para os usuários, pois o provedor deve manter recursos disponíveis.",
    "correta": "E",
    "tema": "Benefício da Elasticidade",
    "justificativa": "A elasticidade permite pagar *menos*, pois você desliga recursos quando não usa. O custo de manter disponibilidade ociosa é diluído pelo provedor entre milhões de clientes."
  },
  {
    "enunciado": "O modelo de nuvem híbrida é sinônimo de Multicloud (uso de múltiplos provedores públicos).",
    "correta": "E",
    "tema": "Híbrida vs Multicloud",
    "justificativa": "**Híbrida** = Privada + Pública (interligadas). **Multicloud** = AWS + Azure (duas públicas diferentes)."
  },
  {
    "enunciado": "Comparado aos demais modelos, o IaaS é considerado o mais básico, fornecendo acesso a recursos fundamentais de computação e armazenamento.",
    "correta": "C",
    "tema": "Camadas da Nuvem",
    "justificativa": "IaaS é a base da pirâmide. PaaS fica em cima do IaaS, e SaaS em cima do PaaS."
  },
  {
    "enunciado": "O autoatendimento sob demanda (NIST) implica que o consumidor necessita de interação humana com o provedor para provisionar recursos.",
    "correta": "E",
    "tema": "Autosserviço",
    "justificativa": "A definição é justamente o oposto: provisionar *sem* interação humana (automático)."
  },
  {
    "enunciado": "Os quatro modelos de implantação de nuvem segundo o NIST são: pública, privada, comunitária e híbrida.",
    "correta": "C",
    "tema": "NIST - Implantação",
    "justificativa": "Classificação padrão da indústria."
  },
  {
    "enunciado": "Na nuvem comunitária, a infraestrutura é disponibilizada ao público em geral.",
    "correta": "E",
    "tema": "Nuvem Comunitária",
    "justificativa": "Comunitária é restrita a um grupo específico de organizações com interesses comuns (ex: bancos, órgãos de saúde). Público em geral = Nuvem Pública."
  },
 {
    "enunciado": "No modelo IaaS, o provedor de nuvem é responsável pela gestão completa dos sistemas operacionais e aplicações.",
    "correta": "E",
    "tema": "Responsabilidade IaaS",
    "justificativa": "No IaaS, o **cliente** instala e gerencia o Sistema Operacional e as Aplicações. O provedor só garante que a máquina ligue (hardware/energia)."
  },
  {
    "enunciado": "A nuvem pública apresenta custos de implementação mais baixos e economia de escala se comparada à nuvem privada.",
    "correta": "C",
    "tema": "Economia de Nuvem",
    "justificativa": "Na pública, você não compra servidores (CAPEX zero), apenas aluga (OPEX). A economia de escala do provedor barateia o custo unitário."
  },
  {
    "enunciado": "Em uma nuvem privada, os recursos são sempre compartilhados entre diferentes clientes externos para reduzir custos.",
    "correta": "E",
    "tema": "Nuvem Privada",
    "justificativa": "Nuvem privada é de uso **exclusivo** de uma única organização. Não há compartilhamento com clientes externos."
  },
  {
    "enunciado": "O modelo PaaS fornece uma plataforma completa, eliminando a necessidade de o cliente configurar a infraestrutura básica (servidores, rede).",
    "correta": "C",
    "tema": "Vantagem PaaS",
    "justificativa": "Permite focar apenas no código da aplicação. Analogia: Focar na receita do bolo sem precisar construir o forno."
  },
  {
    "enunciado": "SaaS é um modelo de entrega onde o aplicativo é acessado via Internet, geralmente por navegador.",
    "correta": "C",
    "tema": "Definição SaaS",
    "justificativa": "Exemplos: Netflix, Spotify, Gmail, Salesforce."
  },
  {
    "enunciado": "Máquinas virtuais e contêineres são idênticos em funcionamento e isolamento.",
    "correta": "E",
    "tema": "VM vs Container",
    "justificativa": "VMs virtualizam o hardware (têm seu próprio SO completo). Contêineres virtualizam o SO (compartilham o kernel do host), sendo mais leves."
  },
  {
    "enunciado": "Uma nuvem privada do tipo VPC (Virtual Private Cloud) pode ser instalada dentro de um provedor de nuvem pública.",
    "correta": "C",
    "tema": "VPC",
    "justificativa": "VPC é um pedaço isolado logicamente dentro da nuvem pública (AWS/Azure) que se comporta como uma rede privada."
  },
  {
    "enunciado": "No modelo IaaS, a camada do sistema operacional é gerenciada pelo provedor de serviços.",
    "correta": "E",
    "tema": "IaaS",
    "justificativa": "Repetindo o conceito chave: IaaS = Cliente cuida do SO."
  },
  {
    "enunciado": "Serviço sob demanda, pool de recursos e elasticidade rápida são características essenciais da computação em nuvem.",
    "correta": "C",
    "tema": "NIST Essencial",
    "justificativa": "São os pilares que diferenciam 'Cloud' de um simples Data Center tradicional."
  },
  {
    "enunciado": "No PaaS, o provedor gerencia a infraestrutura, mas o cliente é responsável pelo sistema operacional e middleware.",
    "correta": "E",
    "tema": "PaaS",
    "justificativa": "No PaaS, o provedor gerencia o SO e o Middleware. O cliente só traz o Código/App."
  },
  {
    "enunciado": "A computação em nuvem privada permite que recursos sejam utilizados por várias organizações diferentes (público geral).",
    "correta": "E",
    "tema": "Nuvem Privada",
    "justificativa": "Privada = Uso exclusivo de UMA organização."
  },
  {
    "enunciado": "A escalabilidade automática (Auto-scaling) permite ajustar recursos dinamicamente conforme a demanda.",
    "correta": "C",
    "tema": "Auto-scaling",
    "justificativa": "Mecanismo técnico que viabiliza a elasticidade."
  },
  {
    "enunciado": "As vantagens da computação em nuvem incluem a agilidade para colocar novas aplicações no ar e testar pilotos sem risco.",
    "correta": "C",
    "tema": "Agilidade de Negócio",
    "justificativa": "Falhe rápido, inove rápido. Não precisa esperar 6 meses para comprar um servidor para testar uma ideia."
  },
  {
    "enunciado": "Nuvem pública é aquela em que os recursos dedicados a uma organização estão fisicamente isolados (hardware dedicado) daqueles de outras empresas.",
    "correta": "E",
    "tema": "Nuvem Pública",
    "justificativa": "Na pública, o hardware é **compartilhado** (multitenancy). O isolamento é lógico (software), não físico."
  },
  {
    "enunciado": "Escalabilidade é a capacidade de um sistema se adaptar à carga de trabalho, criando um ambiente elástico.",
    "correta": "C",
    "tema": "Escalabilidade vs Elasticidade",
    "justificativa": "Embora tecnicamente distintos (capacidade vs automação), nesse contexto a questão considera correto o vínculo entre adaptar-se à carga e elasticidade."
  },
  {
    "enunciado": "O auto-scaling ajusta a capacidade computacional conforme a necessidade, mas pode aumentar custos se não houver controle adequado.",
    "correta": "C",
    "tema": "Risco do Auto-scaling",
    "justificativa": "Se o código tiver um loop infinito ou sofrer um ataque DDoS, o auto-scaling pode criar milhares de servidores e gerar uma conta milionária."
  },
  {
    "enunciado": "Na arquitetura serverless, o custo é baseado no tempo de execução e na quantidade de recursos consumidos pelas funções, e não por servidores ligados.",
    "correta": "C",
    "tema": "Serverless",
    "justificativa": "Você paga por milissegundos de execução. Se a função não roda, você paga zero."
  },
  {
    "enunciado": "Edge computing (computação de borda) localiza o processamento perto de onde as informações são produzidas ou consumidas.",
    "correta": "C",
    "tema": "Edge Computing",
    "justificativa": "Reduz latência. Exemplo: Processar dados de um carro autônomo no próprio carro ou na antena 5G, não num servidor em outro continente."
  },
  {
    "enunciado": "A Edge Computing Platform (ECP) oferece latência reduzida, pois as operações de rede levam menos tempo.",
    "correta": "C",
    "tema": "Vantagem Edge",
    "justificativa": "Menor distância física = Menor tempo de resposta."
  },
  {
    "enunciado": "Em ambientes de nuvem pública, a responsabilidade pela configuração segura dos recursos acima da virtualização (como SO e dados) é do cliente.",
    "correta": "C",
    "tema": "Responsabilidade Compartilhada",
    "justificativa": "O provedor protege a nuvem (físico); o cliente protege o que está *na* nuvem."
  },
  {
    "enunciado": "No modelo SaaS, o consumidor compra a aplicação e a infraestrutura é responsabilidade do provedor.",
    "correta": "C",
    "tema": "SaaS",
    "justificativa": "Modelo de consumo de software final."
  },
  {
    "enunciado": "O armazenamento de objetos (Object Storage) utiliza uma estrutura plana com dados, metadados e um identificador exclusivo, sendo ideal para dados não estruturados.",
    "correta": "C",
    "tema": "Object Storage",
    "justificativa": "Exemplo: Amazon S3. Diferente de sistemas de arquivos (pastas), é ideal para guardar milhões de fotos, vídeos ou backups."
  },
  {
    "enunciado": "A computação em nuvem permite que usuários acessem recursos sem necessidade de conexão com a Internet, armazenando tudo localmente.",
    "correta": "E",
    "tema": "Conceito de Nuvem",
    "justificativa": "Nuvem *exige* rede (Internet ou link dedicado) para acessar os recursos remotos."
  },
  {
    "enunciado": "Para empresas que desejam controlar totalmente o hardware e o sistema operacional, o modelo PaaS é o mais recomendado.",
    "correta": "E",
    "tema": "Escolha de Modelo",
    "justificativa": "Para controle total do SO, usa-se **IaaS**. Para controle do Hardware, usa-se **Bare Metal** ou Private Cloud."
  },
 {
    "enunciado": "Ao se adicionar um evento como um gatilho HTTP ou de fila à função lambda, o serverless exige que toda a infraestrutura, como endpoints no API gateway, já esteja provisionada.",
    "correta": "E",
    "tema": "Serverless",
    "justificativa": "A grande vantagem do Serverless é que a infraestrutura é provisionada automaticamente sob demanda. O desenvolvedor define o gatilho, e o provedor aloca os recursos necessários para responder, sem pré-provisionamento manual."
  },
  {
    "enunciado": "Em um modelo de entrega de nuvem SaaS, o consumidor compra uma aplicação ou mais, e a infraestrutura é de responsabilidade do provedor dessa nuvem.",
    "correta": "C",
    "tema": "SaaS",
    "justificativa": "No SaaS, o cliente compra o 'uso' do software. Tudo o que está embaixo (servidores, redes, storage) é problema do provedor."
  },
  {
    "enunciado": "O armazenamento de objetos (Object Storage) utiliza uma estrutura simples com dados, metadados e um identificador exclusivo para cada objeto.",
    "correta": "C",
    "tema": "Tipos de Armazenamento",
    "justificativa": "Diferente do sistema de arquivos (pastas), o Object Storage (ex: S3) guarda arquivos num 'balde' plano, etiquetados com metadados ricos, ideal para grandes volumes de dados não estruturados."
  },
  {
    "enunciado": "Uma das características do modelo de computação em nuvem é a capacidade de adaptação dinâmica, que possibilita a expansão ou redução dos recursos conforme a necessidade do usuário.",
    "correta": "C",
    "tema": "Elasticidade",
    "justificativa": "Adaptação dinâmica = Elasticidade. É a capacidade de esticar e encolher a infraestrutura conforme a carga."
  },
  {
    "enunciado": "A computação em nuvem permite que os usuários acessem recursos computacionais sob demanda, sem a necessidade de conexão com a Internet, pois os dados e serviços são armazenados localmente nos dispositivos.",
    "correta": "E",
    "tema": "Conceito de Nuvem",
    "justificativa": "A definição fundamental de nuvem exige acesso via rede (geralmente Internet). Se está tudo local e offline, é computação tradicional, não nuvem."
  },
  {
    "enunciado": "Em serviços de nuvem, a utilização de plataforma como serviço (PaaS) é mais recomendada para empresas que desejem controlar totalmente o hardware e o sistema operacional utilizados.",
    "correta": "E",
    "tema": "PaaS vs IaaS",
    "justificativa": "Para controle total do SO e Hardware, usa-se **IaaS** ou Bare Metal. O PaaS abstrai o SO para facilitar o desenvolvimento."
  },
  {
    "enunciado": "A infraestrutura como serviço (IaaS) oferece aos usuários recursos computacionais virtuais como servidores, armazenamento e redes, mas o gerenciamento do sistema operacional fica sob responsabilidade do cliente.",
    "correta": "C",
    "tema": "Responsabilidade IaaS",
    "justificativa": "O provedor entrega a máquina virtual 'vazia'. Instalar, configurar e atualizar o Windows/Linux (SO) é responsabilidade do cliente."
  },
  {
    "enunciado": "O modelo de computação em nuvem no qual as aplicações, os dados e o sistema operacional são, geralmente, gerenciados pelo próprio usuário é conhecido como IaaS (infraestrutura como serviço).",
    "correta": "C",
    "tema": "Definição de IaaS",
    "justificativa": "Confirmando o conceito: Se você gerencia o SO e o App, você está no modelo IaaS."
  },
  {
    "enunciado": "Uma vantagem da arquitetura serverless é a escalabilidade automática.",
    "correta": "C",
    "tema": "Serverless",
    "justificativa": "O desenvolvedor não configura 'quantos servidores' precisa. O código escala de 0 a 1000 execuções automaticamente conforme os eventos chegam."
  },
  {
    "enunciado": "A característica da nuvem pública que permite o escalonamento rápido de recursos sem afetar as cargas de trabalho da nuvem privada é denominada cloud bursting.",
    "correta": "C",
    "tema": "Cloud Bursting",
    "justificativa": "Técnica híbrida onde uma aplicação roda na nuvem privada e 'transborda' (burst) para a pública apenas quando há picos de tráfego."
  },
  {
    "enunciado": "No Amazon Elastic Compute Cloud (EC2) da AWS, as instâncias especializadas em desempenho são aquelas conhecidas como otimizadas.",
    "correta": "C",
    "tema": "Instâncias AWS",
    "justificativa": "Existem famílias de instâncias: Uso Geral, Otimizadas para Computação, Otimizadas para Memória, etc."
  },
  {
    "enunciado": "Quando os recursos são dinamicamente reconfigurados para se ajustarem a uma carga de trabalho variável, caracteriza-se a elasticidade ou elasticidade rápida da computação em nuvem.",
    "correta": "C",
    "tema": "Elasticidade",
    "justificativa": "Reconfiguração dinâmica baseada em carga = Elasticidade."
  },
  {
    "enunciado": "A nuvem pública é um tipo de computação em nuvem oferecido apenas por órgãos públicos.",
    "correta": "E",
    "tema": "Nuvem Pública",
    "justificativa": "Nuvem pública refere-se à disponibilidade para o público geral, oferecida por empresas comerciais (AWS, Microsoft, Google), e não à propriedade estatal."
  },
  {
    "enunciado": "O componente middleware é gerenciado pelo cliente no IaaS e no PaaS, enquanto no SaaS esse componente é gerenciado pelo provedor de serviços de nuvem.",
    "correta": "E",
    "tema": "Middleware",
    "justificativa": "No **PaaS**, o middleware é gerenciado pelo **provedor**, não pelo cliente. O cliente só foca na aplicação."
  },
  {
    "enunciado": "De forma geral, pode-se dizer que toda nuvem se torna privada quando a TI subjacente é dedicada e o cliente tem acesso totalmente isolado a ela.",
    "correta": "C",
    "tema": "Nuvem Privada",
    "justificativa": "A essência da nuvem privada é a exclusividade (single-tenant). Se o hardware é dedicado apenas a você, é um ambiente privado."
  },
  {
    "enunciado": "As equipes de segurança têm visibilidade limitada das cargas de trabalho executadas em ofertas de serviços de nuvem privada, o que dificulta garantir a proteção.",
    "correta": "E",
    "tema": "Segurança Nuvem Privada",
    "justificativa": "Na nuvem privada, a organização tem **controle total** e visibilidade completa da infraestrutura, facilitando a auditoria e proteção."
  },
  {
    "enunciado": "A técnica de load balance (balanceamento de carga) é uma das estratégias possíveis de se estabelecer a implementação de alta disponibilidade em uma infraestrutura de nuvem.",
    "correta": "C",
    "tema": "Alta Disponibilidade (HA)",
    "justificativa": "O balanceador distribui o tráfego entre vários servidores. Se um falhar, ele envia para os outros, garantindo que o serviço continue no ar."
  },
  {
    "enunciado": "A aquisição de subscrições em serviços em nuvem requer investimentos em infraestrutura e na contratação de especialistas para gerenciá-las.",
    "correta": "E",
    "tema": "CAPEX vs OPEX",
    "justificativa": "A nuvem elimina o investimento inicial em infraestrutura (CAPEX). Você paga assinatura/uso (OPEX). Não é necessário comprar hardware."
  },
  {
    "enunciado": "A fim de proporcionar mais disponibilidade em relação aos recursos de uma zona, recursos regionais são implantados de forma redundante em várias zonas de uma região.",
    "correta": "C",
    "tema": "Regiões e Zonas",
    "justificativa": "Para proteger contra a queda de um Data Center (Zona), espalha-se o serviço por várias Zonas dentro da mesma Região."
  },
  {
    "enunciado": "Em ambientes de nuvem privada, a segurança é executada por provedores de serviços de nuvem com servidores compartilhados por vários locatários.",
    "correta": "E",
    "tema": "Nuvem Privada",
    "justificativa": "Nuvem privada não tem compartilhamento com 'vários locatários' externos (multi-tenancy público). Ela é de uso exclusivo."
  },
  {
    "enunciado": "O gerenciamento de acesso e identidade (IAM) na nuvem inclui recursos como interface de controle de acesso único, segurança aprimorada e controle de acesso em nível de recurso.",
    "correta": "C",
    "tema": "IAM",
    "justificativa": "IAM permite definir quem (identidade) pode fazer o quê (acesso) em qual recurso específico (granularidade)."
  },
  {
    "enunciado": "A segurança da nuvem é composta de categorias como: segurança de dados, gerenciamento de acesso e identidade, governança, retenção de dados e compliance jurídico.",
    "correta": "C",
    "tema": "Pilares da Segurança",
    "justificativa": "A segurança na nuvem é holística, abrangendo desde a proteção técnica do dado até a conformidade legal."
  },
  {
    "enunciado": "Na modalidade IaaS, o sistema operacional e as aplicações instaladas podem ser controlados pelo próprio usuário.",
    "correta": "C",
    "tema": "IaaS",
    "justificativa": "O usuário é o administrador do sistema (root/admin) na VM."
  },
  {
    "enunciado": "Uma nuvem é considerada híbrida quando é utilizada por duas ou mais organizações sem vínculo entre si.",
    "correta": "E",
    "tema": "Definição Híbrida",
    "justificativa": "Isso descreve nuvem Pública ou Comunitária. Híbrida exige a mistura de tipos de implantação (Privada + Pública)."
  },
  {
    "enunciado": "A modalidade PaaS é indicada para desenvolvedores de aplicações que operam na nuvem, pois oferece um ambiente de desenvolvimento de software.",
    "correta": "C",
    "tema": "PaaS",
    "justificativa": "PaaS entrega o ambiente pronto para codar, testar e implantar (Runtime, SDKs, Bancos de Dados gerenciados)."
  },
{
    "enunciado": "No modelo de IaaS, o usuário tem controle sobre sistemas operacionais, armazenamentos e aplicativos implantados, além do controle limitado de componentes de firewalls de host.",
    "correta": "C",
    "tema": "Controle IaaS",
    "justificativa": "Além do SO, o usuário configura o firewall da própria máquina (ex: iptables, Windows Firewall) e grupos de segurança da rede virtual."
  },
  {
    "enunciado": "A computação em nuvem fornece recurso de provisionamento ilimitado, ou seja, a capacidade da máquina pode aumentar ou diminuir automaticamente.",
    "correta": "E",
    "tema": "Recursos Ilimitados?",
    "justificativa": "A elasticidade dá a *ilusão* de recursos infinitos, mas eles são finitos. Além disso, a palavra 'ilimitado' é tecnicamente incorreta em exames rigorosos, embora a capacidade seja vasta."
  },
  {
    "enunciado": "A nuvem privada compreende uma infraestrutura de computação em nuvem operada e quase sempre gerenciada pela organização cliente, podendo ser gerenciada por terceiros.",
    "correta": "C",
    "tema": "Gestão Nuvem Privada",
    "justificativa": "Privada define o *uso* (exclusivo). A gestão pode ser interna (TI da empresa) ou terceirizada (Outsourcing)."
  },
  {
    "enunciado": "A nuvem pública pode ser gerenciada e operada por uma ou mais organizações da comunidade, por organização acadêmica ou governamental.",
    "correta": "E",
    "tema": "Nuvem Pública vs Comunitária",
    "justificativa": "Se é gerida por organizações de uma 'comunidade' para fins comuns, é **Nuvem Comunitária**, não Pública."
  },
  {
    "enunciado": "Na computação em nuvem, sistemas de becape separados, em máquinas diferentes, fornecem uma camada adicional de segurança e confiabilidade, sendo de responsabilidade do usuário a configuração desse recurso.",
    "correta": "E",
    "tema": "Backup na Nuvem",
    "justificativa": "Questão sutil. Em muitos serviços gerenciados (SaaS/PaaS), o backup é intrínseco e automático, não exigindo configuração do usuário. A generalização do erro pode estar na obrigatoriedade da responsabilidade do usuário em todos os casos."
  },
  {
    "enunciado": "Uma das formas de se implementar alta disponibilidade em computação em nuvem é empregar a virtualização de máquinas, de modo a permitir que um hardware defeituoso seja substituído transparentemente por outro.",
    "correta": "C",
    "tema": "Virtualização e HA",
    "justificativa": "Se o servidor físico queima, a virtualização (Live Migration) move a VM para outro servidor físico sem desligar o sistema."
  },
  {
    "enunciado": "Os discos permanentes zonais residem em zonas; para anexar um desses discos a uma instância, os dois recursos precisam estar na mesma zona.",
    "correta": "C",
    "tema": "Restrições Zonais",
    "justificativa": "Latência e física. Um cabo não pode conectar um HD em SP a um Servidor no RJ com performance de disco local. Eles devem estar no mesmo Data Center (Zona)."
  },
  {
    "enunciado": "Cabe ao cliente do provedor de serviços em nuvem estabelecer as normas e os procedimentos que devem compor as políticas de segurança desses serviços para fins de controle de acesso ao sistema.",
    "correta": "E",
    "tema": "Responsabilidade Segurança",
    "justificativa": "As políticas de segurança da *infraestrutura* são definidas pelo provedor. O cliente define apenas as políticas do seu próprio acesso/dados."
  },
  {
    "enunciado": "Antes de se enviar informações confidenciais a uma instância de máquina virtual, é preciso verificar a identidade da instância.",
    "correta": "C",
    "tema": "Segurança de Instância",
    "justificativa": "Evita ataques de 'Man-in-the-middle' ou conexão a instâncias comprometidas/falsas."
  },
  {
    "enunciado": "O serviço oferecido ao usuário que consiste num conjunto de recursos computacionais básicos (processamento, armazenamento, redes) sobre os quais pode ser instalado qualquer software é o IaaS.",
    "correta": "C",
    "tema": "Definição IaaS",
    "justificativa": "Definição de livro texto para Infraestrutura como Serviço."
  },
  {
    "enunciado": "A infraestrutura como serviço (IaaS) oferece o nível mais alto de controle sobre os recursos de TI, sendo o mais semelhante aos recursos tradicionais de TI no local.",
    "correta": "C",
    "tema": "Controle IaaS",
    "justificativa": "É o modelo mais próximo de 'ter um servidor no rack', mas virtualizado."
  },
  {
    "enunciado": "Em computação em nuvem, a escalabilidade atende às demandas repentinas na carga de trabalho por um pequeno período, enquanto a elasticidade atende a um aumento estático da carga de trabalho.",
    "correta": "E",
    "tema": "Escalabilidade vs Elasticidade",
    "justificativa": "Conceitos invertidos ou confusos. Elasticidade é dinâmica (sobe e desce rápido). Escalabilidade é a capacidade de crescer (planejado ou não)."
  },
  {
    "enunciado": "Na computação em nuvem, as plataformas de front-end contêm a infraestrutura do cliente, como recursos de computação, armazenamento e mecanismos de segurança.",
    "correta": "E",
    "tema": "Front vs Back",
    "justificativa": "A infraestrutura pesada (servidores, storage) fica no **Back-end** (lado do provedor). O Front-end é a interface do usuário."
  },
  {
    "enunciado": "Na computação em nuvem, uma região envolve a disponibilização de uma coleção de recursos em uma localização geográfica que pode afetar a latência.",
    "correta": "C",
    "tema": "Regiões",
    "justificativa": "Escolher a região (ex: Brasil vs EUA) afeta a velocidade (latência) e a soberania dos dados."
  },
  {
    "enunciado": "Na plataforma como serviço (PaaS), os clientes são responsáveis por proteger tudo que está relacionado ao sistema operacional.",
    "correta": "E",
    "tema": "Segurança PaaS",
    "justificativa": "No PaaS, o provedor protege o SO. O cliente protege a aplicação e os dados."
  },
  {
    "enunciado": "SASE (Secure Access Service Edge) é uma arquitetura de rede que possui o acesso à rede zero-trust, verificando identidades antes de conceder acesso.",
    "correta": "C",
    "tema": "SASE",
    "justificativa": "Tendência moderna de segurança que une rede (SD-WAN) e segurança (Zero Trust) na borda."
  },
  {
    "enunciado": "O modelo onde o usuário apenas usa a aplicação, sendo o provedor responsável pela criação, operação e segurança do ambiente, é o SaaS.",
    "correta": "C",
    "tema": "SaaS",
    "justificativa": "Software as a Service: Software como produto final."
  },
  {
    "enunciado": "No modelo PaaS, o provedor de serviços é responsável pelos níveis de Rede, Armazenamento, Servidores, Virtualização, Sistema Operacional, Middleware e Runtime.",
    "correta": "C",
    "tema": "Camadas PaaS",
    "justificativa": "O provedor gerencia tudo até o Runtime. O cliente assume a partir dos Dados e Aplicação."
  },
  {
    "enunciado": "O modelo que oferece um ambiente sob demanda para desenvolvimento, teste e gerenciamento de aplicativos é o PaaS.",
    "correta": "C",
    "tema": "Objetivo PaaS",
    "justificativa": "Foco no ciclo de vida do desenvolvimento de software."
  },
  {
    "enunciado": "Em um fail over manual planejado, a réplica secundária qualificada faz a transição para a função primária depois que a réplica primária se torna indisponível.",
    "correta": "E",
    "tema": "Failover",
    "justificativa": "Se é 'planejado', geralmente é uma troca de papel (switchover), não uma reação a uma falha (failover). Além disso, a automação é desejada na nuvem."
  },
  {
    "enunciado": "Serviço sob demanda, amplo acesso aos serviços de rede, pool de recursos, elasticidade rápida e medição de serviços são características essenciais da nuvem.",
    "correta": "C",
    "tema": "5 Características NIST",
    "justificativa": "Decoreba essencial: On-demand, Network Access, Resource Pooling, Elasticity, Measured Service."
  },
  {
    "enunciado": "SaaS é um modelo de serviço em nuvem que tem a capacidade de oferecer uma infraestrutura de processamento e armazenamento transparente sem que o usuário tenha controle da infraestrutura física.",
    "correta": "E",
    "tema": "Definição SaaS",
    "justificativa": "SaaS oferece **software**, não 'infraestrutura de processamento'. A infraestrutura existe, mas a oferta é o aplicativo."
  },
  {
    "enunciado": "Ainda que se faça a opção pelo armazenamento de dados em nuvem, é necessária a realização regular de backup, para evitar a perda de dados.",
    "correta": "E",
    "tema": "Backup em Nuvem (CESPE)",
    "justificativa": "Segundo a banca, o armazenamento em nuvem já possui redundância e mecanismos de proteção intrínsecos que mitigam a necessidade do backup *tradicional* manual pelo usuário da mesma forma que no local."
  },
  {
    "enunciado": "Ao se armazenar determinado arquivo em uma nuvem computacional pública, o acesso a esse arquivo passa a ser feito por meio da Internet.",
    "correta": "C",
    "tema": "Acesso Nuvem Pública",
    "justificativa": "O meio de transporte padrão para nuvem pública é a Internet."
  },
  {
    "enunciado": "No PaaS, o usuário tem como responsabilidade instalar, gerenciar e monitorar os serviços para operações de infraestrutura de TI.",
    "correta": "E",
    "tema": "PaaS Responsabilidade",
    "justificativa": "O usuário NÃO gerencia infraestrutura no PaaS. O provedor faz isso."
  },
{
    "enunciado": "Tratando-se de SaaS, o provedor é responsável por provisionar e fornecer ferramentas de desenvolvimento.",
    "correta": "E",
    "tema": "SaaS vs PaaS",
    "justificativa": "Ferramentas de desenvolvimento são fornecidas no **PaaS**. SaaS fornece aplicativos finais."
  },
  {
    "enunciado": "Em se tratando de IaaS, cabe ao provedor instalar e gerenciar o aplicativo de software em uma infraestrutura em nuvem.",
    "correta": "E",
    "tema": "IaaS Responsabilidade",
    "justificativa": "No IaaS, o **cliente** instala e gerencia o aplicativo. O provedor só dá o hardware virtual."
  },
  {
    "enunciado": "Nuvem pública é caracterizada pela composição de duas ou mais nuvens que permanecem entidades únicas.",
    "correta": "E",
    "tema": "Definição Híbrida",
    "justificativa": "Essa descrição ('composição de duas ou mais...') refere-se à **Nuvem Híbrida**."
  },
  {
    "enunciado": "Nuvem híbrida é aquela compartilhada por diversas organizações ou por uma federação de nuvens privadas pertencentes a entidades com mesmos fins.",
    "correta": "E",
    "tema": "Definição Comunitária",
    "justificativa": "Essa descrição refere-se à **Nuvem Comunitária**."
  },
  {
    "enunciado": "A nuvem privada é aquela operada exclusivamente para uma organização, gerenciada por terceiros.",
    "correta": "C",
    "tema": "Gestão Terceirizada Privada",
    "justificativa": "Nuvem privada pode ser gerenciada pela própria empresa ou por um terceiro (outsourcing), desde que o uso seja exclusivo."
  },
  {
    "enunciado": "Os três objetivos de cibersegurança — confidencialidade, integridade e disponibilidade — são particularmente relevantes para a computação em nuvem.",
    "correta": "C",
    "tema": "Tríade CIA",
    "justificativa": "A base da segurança da informação se aplica totalmente à nuvem."
  },
  {
    "enunciado": "A elasticidade é um benefício comum para nuvens públicas e privadas, diferentemente da alta disponibilidade, a qual compõe apenas a nuvem privada.",
    "correta": "E",
    "tema": "Alta Disponibilidade",
    "justificativa": "Alta disponibilidade (HA) é um benefício chave também da nuvem **Pública** (e até mais fácil de obter lá)."
  },
  {
    "enunciado": "A escalabilidade linear e a utilização on-demand são componentes da elasticidade.",
    "correta": "C",
    "tema": "Elasticidade Componentes",
    "justificativa": "Elasticidade implica crescer linearmente conforme a demanda (on-demand)."
  },
  {
    "enunciado": "O gerenciamento de identidade no contexto de nuvem se concentra em definir quem pode acessar o recurso por meio da especificação de permissões.",
    "correta": "C",
    "tema": "IAM",
    "justificativa": "Definição correta de Identity and Access Management."
  },
  {
    "enunciado": "Zonas de disponibilidade em uma arquitetura em nuvem são grupos separados de datacenters dentro de determinada região.",
    "correta": "C",
    "tema": "Definição Zonas",
    "justificativa": "Região > Zonas > Datacenters."
  },
  {
    "enunciado": "Zonas de disponibilidade proporcionam aos clientes a capacidade de operar aplicativos com alta disponibilidade e com tolerância a falhas.",
    "correta": "C",
    "tema": "Benefício Zonas",
    "justificativa": "Se um datacenter pega fogo (falha de zona), a aplicação roda no outro datacenter da mesma região."
  },
  {
    "enunciado": "As zonas têm conexões de rede de muita largura de banda com outras zonas na mesma região, sendo uma coleção de zonas conhecida como regiões.",
    "correta": "C",
    "tema": "Interconexão Zonas",
    "justificativa": "Alta velocidade entre zonas permite replicação de dados síncrona."
  },
  {
    "enunciado": "Os usuários são responsáveis pela privacidade dos seus dados na nuvem; os provedores são responsáveis apenas por proteger a coleta e o processamento.",
    "correta": "E",
    "tema": "Responsabilidade Privacidade",
    "justificativa": "A responsabilidade é compartilhada, mas o provedor tem obrigações contratuais e legais de proteger a infraestrutura que armazena os dados, não apenas a coleta."
  },
  {
    "enunciado": "Uma zona de disponibilidade pode conter várias regiões.",
    "correta": "E",
    "tema": "Hierarquia Nuvem",
    "justificativa": "Hierarquia Invertida. Uma **Região** contém várias **Zonas**. O mundo contém Regiões."
  },
  {
    "enunciado": "No modelo PaaS, a infraestrutura é invisível para o desenvolvedor, que pode configurar suas aplicações e o ambiente utilizado por elas.",
    "correta": "C",
    "tema": "Visibilidade PaaS",
    "justificativa": "O desenvolvedor não vê servidores/rede, mas configura o ambiente da app (versão do Java/Python, variáveis de ambiente)."
  },
  {
    "enunciado": "O custo da nuvem pública pode ser considerado variável, pois depende do acordo de utilização, e pode ser definido de forma prévia.",
    "correta": "C",
    "tema": "Custo Nuvem",
    "justificativa": "Modelo OPEX (custo operacional variável) previsível via contratos ou calculadoras."
  },
  {
    "enunciado": "Como a nuvem é pública, a infraestrutura é fornecida por meio de recursos compartilhados e com acesso à Internet.",
    "correta": "C",
    "tema": "Características Nuvem Pública",
    "justificativa": "Compartilhamento (multitenancy) e acesso web são fundamentais."
  },
  {
    "enunciado": "No modelo PaaS, o usuário gerencia as aplicações e os dados, e o provedor gerencia os servidores, runtime, middleware, o armazenamento e networking.",
    "correta": "C",
    "tema": "Divisão PaaS",
    "justificativa": "Divisão correta de responsabilidades."
  },
  {
    "enunciado": "Em computação em nuvem, o serviço sob demanda exige que o contrato de fornecimento de serviço seja alterado conforme inclusão ou exclusão de servidores.",
    "correta": "E",
    "tema": "Serviço Sob Demanda",
    "justificativa": "Sob demanda significa **sem** burocracia. Você cria e deleta servidores via portal/API sem ligar para o comercial para mudar o contrato."
  },
  {
    "enunciado": "Computação em nuvem é um modelo em que recursos computacionais configuráveis podem ser alocados e liberados rapidamente com mínimo esforço e interação com o provedor.",
    "correta": "C",
    "tema": "Definição NIST",
    "justificativa": "Definição formal e correta do NIST."
  },
  {
    "enunciado": "Entre os requisitos mínimos para o gerenciamento da nuvem (Governo), inclui-se a obrigação de o órgão elaborar processo de tratamento de incidentes junto ao provedor.",
    "correta": "C",
    "tema": "Governança Cloud",
    "justificativa": "A gestão de incidentes deve ser integrada entre cliente (órgão) e provedor."
  },
  {
    "enunciado": "O modelo de computação em nuvem híbrida é aquele em que há oferta combinada de serviços de computação de nuvens privadas e de nuvens públicas.",
    "correta": "C",
    "tema": "Nuvem Híbrida",
    "justificativa": "Combinação de Privada + Pública."
  },
  {
    "enunciado": "As nuvens públicas podem ser utilizadas por qualquer usuário, não havendo necessidade de pagamento por sua utilização.",
    "correta": "E",
    "tema": "Custo Nuvem Pública",
    "justificativa": "Pública refere-se ao acesso aberto, não à gratuidade. A maioria dos serviços é paga (Pay-as-you-go)."
  },
  {
    "enunciado": "Em cloud computing, o resultado de um serviço é tangível, uma vez que sua execução e seu consumo são materializados.",
    "correta": "E",
    "tema": "Intangibilidade",
    "justificativa": "Serviços de nuvem são **intangíveis** (virtuais). Você não toca no servidor ou no software."
  },
  {
    "enunciado": "No modelo PaaS, o sistema operacional é gerenciado pelo provedor de serviços.",
    "correta": "C",
    "tema": "Gestão SO PaaS",
    "justificativa": "No PaaS, você não tem acesso root ao SO para manutenção; o provedor cuida de patches e updates."
  },
{
    "enunciado": "Suítes de escritório, como o Microsoft 365, são exemplos do modelo SaaS (software as a service), pois o usuário utiliza um software fornecido pelo provedor do serviço.",
    "correta": "C",
    "tema": "Modelos de Serviço (SaaS)",
    "justificativa": "Correto. No SaaS, o cliente consome a aplicação final (como Word ou Excel online) sem gerenciar nada da infraestrutura subjacente [1]. Analogia: É como pedir uma pizza pronta (SaaS); você só come, não precisa ter o forno ou fazer a massa."
  },
  {
    "enunciado": "O recurso Amazon Virtual Private Cloud (VPC) é a ferramenta primária responsável por proteger dados confidenciais armazenados no AWS S3 através de descoberta automática.",
    "correta": "E",
    "tema": "AWS Security",
    "justificativa": "A VPC isola redes, mas não protege intrinsecamente o *conteúdo* confidencial de dados no S3 contra vazamento ou classificação. O S3 é um serviço global, fora da VPC por padrão. A ferramenta de proteção de dados sensíveis é o Macie [2]."
  },
  {
    "enunciado": "O AWS Identity and Access Management (IAM) é o recurso específico para descobrir e proteger dados confidenciais (PII) dentro do AWS S3.",
    "correta": "E",
    "tema": "AWS Security",
    "justificativa": "O IAM gerencia *quem* pode acessar o quê (permissões), mas não analisa o conteúdo dos arquivos para classificar dados confidenciais [2]."
  },
  {
    "enunciado": "O Amazon Macie é o recurso que protege dados confidenciais armazenados no AWS S3, utilizando aprendizado de máquina para descobrir e proteger dados sensíveis.",
    "correta": "C",
    "tema": "AWS Security",
    "justificativa": "Macie é um serviço de segurança de dados que usa machine learning para descobrir dados confidenciais (como cartões de crédito) no S3 [2]. Analogia: O Macie é o cão farejador que cheira suas malas (Buckets) procurando itens proibidos ou sensíveis."
  },
  {
    "enunciado": "A função principal do AWS Lambda é avaliar serviços, frameworks e modelos de base de inteligência artificial e machine learning.",
    "correta": "E",
    "tema": "AWS Lambda",
    "justificativa": "Avaliar modelos de IA/ML refere-se a serviços como Amazon Bedrock ou SageMaker. O Lambda é um serviço de computação (FaaS) [3]."
  },
  {
    "enunciado": "A responsabilidade principal do AWS Lambda é criar e executar servidores virtuais na nuvem.",
    "correta": "E",
    "tema": "AWS Lambda vs EC2",
    "justificativa": "Criar servidores virtuais é função do **Amazon EC2**. O Lambda é *serverless*; você executa código *sem* criar servidores [3]."
  },
  {
    "enunciado": "O AWS Lambda é responsável por executar código sem a necessidade de provisionar ou gerenciar servidores.",
    "correta": "C",
    "tema": "AWS Lambda",
    "justificativa": "Definição correta de FaaS (Function as a Service). Você sobe o código e a AWS roda quando necessário [3]. Analogia: É como um táxi; você entra e anda (executa), não precisa comprar o carro nem fazer manutenção nele (servidor)."
  },
  {
    "enunciado": "O objetivo da funcionalidade Duet AI no Google Cloud Code é receber assistência com tecnologia de IA diretamente no ambiente de desenvolvimento integrado (IDE).",
    "correta": "C",
    "tema": "Google Cloud Code",
    "justificativa": "O Duet AI atua como um assistente de codificação (code completion, chat) dentro da IDE [4]."
  },
  {
    "enunciado": "O Cloud Code do Google Cloud tem como principal funcionalidade configurar APIs a partir de um gerenciador de bibliotecas, sem recursos de assistência por IA.",
    "correta": "E",
    "tema": "Google Cloud Code",
    "justificativa": "Embora gerencie APIs, o foco da questão e da ferramenta Duet AI é a assistência inteligente ao desenvolvedor, e não apenas configuração de bibliotecas [4]."
  },
  {
    "enunciado": "O SaaS diferencia-se do PaaS por ter o foco em distribuir soluções de software prontas, independentemente da infraestrutura de TI.",
    "correta": "C",
    "tema": "SaaS vs PaaS",
    "justificativa": "SaaS entrega o software pronto para uso final (ex: Gmail). PaaS entrega ferramentas para *criar* software [5]."
  },
  {
    "enunciado": "O IaaS é considerado um serviço de PaaS incrementado por sistemas operacionais que rodam diretamente da nuvem e ferramentas analytics.",
    "correta": "E",
    "tema": "Hierarquia de Nuvem",
    "justificativa": "Conceito invertido. O IaaS é a base (infra). O PaaS é que é o 'incremento' sobre o IaaS, adicionando runtime e middleware. O IaaS não é um PaaS melhorado; é um nível inferior de abstração [6]."
  },
  {
    "enunciado": "O IaaS permite que a maioria das tarefas ligadas a gerenciamento e manutenção de data center e infraestrutura física seja abstraída e disponibilizada como serviço.",
    "correta": "C",
    "tema": "IaaS",
    "justificativa": "No IaaS, você não cuida do ar-condicionado, energia ou racks (físico), mas gerencia o SO e as redes virtuais [6]."
  },
  {
    "enunciado": "No modelo de nuvem pública, o cliente não precisa adquirir infraestrutura física nem fazer sua manutenção, pois isso é responsabilidade do fornecedor.",
    "correta": "C",
    "tema": "Nuvem Pública",
    "justificativa": "O CAPEX (custo de capital/compra) é substituído por OPEX (custo operacional/aluguel). O hardware é do provedor [7]."
  },
  {
    "enunciado": "O modelo de nuvem híbrida é utilizado por organizações para ganhar flexibilidade, combinando infraestrutura local e nuvem pública.",
    "correta": "C",
    "tema": "Nuvem Híbrida",
    "justificativa": "Permite manter dados críticos on-premise (privada) e usar a nuvem pública para transbordo ou processamento pesado [8]."
  },
  {
    "enunciado": "O modelo de nuvem privada é frequentemente preferido por órgãos governamentais por não estar disponível para uso geral, oferecendo maior controle.",
    "correta": "C",
    "tema": "Nuvem Privada",
    "justificativa": "A exclusividade da nuvem privada atende a requisitos rígidos de segurança e soberania de dados comuns no governo [8]."
  },
  {
    "enunciado": "A plataforma de front-end na arquitetura de computação em nuvem inclui componentes como servidores e armazenamento de dados.",
    "correta": "E",
    "tema": "Arquitetura Cloud (Front vs Back)",
    "justificativa": "Servidores e armazenamento ficam no **Back-end** (lado da nuvem). O Front-end é o lado do cliente [9]."
  },
  {
    "enunciado": "O 'thin client' (cliente magro) é um exemplo de componente utilizado na plataforma front-end da arquitetura de computação em nuvem.",
    "correta": "C",
    "tema": "Front-end Cloud",
    "justificativa": "O front-end é a interface de acesso (navegador, app mobile, thin client) usada pelo usuário para conectar à nuvem [10]."
  },
  {
    "enunciado": "O AWS S3 armazena objetos de forma redundante, em diversos dispositivos e em no mínimo três zonas de disponibilidade.",
    "correta": "C",
    "tema": "AWS S3 Durabilidade",
    "justificativa": "O S3 Standard replica dados automaticamente em no mínimo 3 AZs (Zonas de Disponibilidade) para garantir 99,999999999% de durabilidade [11]."
  },
  {
    "enunciado": "A dificuldade de migração de dados e cargas de trabalho entre concorrentes de nuvem (lock-in) pode gerar custos altos e incompatibilidades.",
    "correta": "C",
    "tema": "Vendor Lock-in",
    "justificativa": "O aprisionamento tecnológico (Vendor Lock-in) ocorre quando APIs proprietárias dificultam sair de um provedor (ex: AWS) para outro (ex: Azure) [11]."
  },
  {
    "enunciado": "IaaS, PaaS e SaaS são os três tipos principais de provedores de serviços de nuvem.",
    "correta": "C",
    "tema": "Modelos de Serviço",
    "justificativa": "Classificação padrão do NIST para modelos de serviço [11]."
  },
  {
    "enunciado": "No deploy em nuvem, a característica 'pool de recursos' é a que garante que os recursos possam ser provisionados e liberados para escalabilidade.",
    "correta": "E",
    "tema": "Características NIST",
    "justificativa": "A característica descrita ('provisionar e liberar para escalabilidade') refere-se à **Elasticidade Rápida**. 'Pool de recursos' refere-se ao compartilhamento de hardware entre vários clientes (multitenancy) [12]."
  },
  {
    "enunciado": "O Microsoft Azure Cloud Services é um exemplo de PaaS que oferece ambiente para execução de aplicações escaláveis.",
    "correta": "C",
    "tema": "Azure PaaS",
    "justificativa": "Azure Cloud Services (clássico) e App Service são PaaS, onde a Microsoft gerencia o SO e o usuário foca na aplicação [13]."
  },
  {
    "enunciado": "A infraestrutura como serviço (IaaS) permite o uso de aplicativos baseados em nuvem como email e calendário do Microsoft Office 365.",
    "correta": "E",
    "tema": "SaaS vs IaaS",
    "justificativa": "Office 365 (email, calendário) é **SaaS** (Software), não IaaS. IaaS seria alugar a máquina virtual para instalar um servidor de email [14]."
  },
  {
    "enunciado": "A característica de serviço sob demanda garante que recursos possam ser acessados por clientes a partir de qualquer plataforma (celulares, tablets).",
    "correta": "E",
    "tema": "Características NIST",
    "justificativa": "O acesso por várias plataformas refere-se ao **Amplo Acesso à Rede** (Broad Network Access). Serviço sob demanda refere-se à capacidade de contratar sem falar com humanos [14]."
  },
  {
    "enunciado": "Em uma solução SaaS, o usuário pode desenvolver e gerenciar aplicações sem criar a infraestrutura.",
    "correta": "E",
    "tema": "SaaS vs PaaS",
    "justificativa": "Desenvolver e gerenciar aplicações é função do **PaaS**. No SaaS, o usuário apenas *usa* a aplicação pronta [15]."
  },
{
    "enunciado": "Uma vantagem do banco de dados em nuvem gerenciado é o ajuste automático de disponibilidade e escalabilidade.",
    "correta": "C",
    "tema": "Banco de Dados Gerenciado",
    "justificativa": "Serviços como Amazon RDS ou Azure SQL automatizam backups, patches e escala, otimizando o desempenho e reduzindo a carga administrativa [37]."
  },
  {
    "enunciado": "A configuração de um ambiente multicloud com diferentes regiões geográficas é considerada o maior desafio para conformidade regulatória (compliance).",
    "correta": "C",
    "tema": "Desafios Multicloud",
    "justificativa": "Leis de proteção de dados (como LGPD/GDPR) exigem saber exatamente onde o dado está. Espalhar dados por múltiplas nuvens e países torna a auditoria e conformidade complexas [38]."
  },
  {
    "enunciado": "A solução hiperconvergente da Nutanix converge toda a pilha do data center, incluindo computação, armazenamento e virtualização.",
    "correta": "C",
    "tema": "Hiperconvergência (HCI)",
    "justificativa": "HCI (Hyper-Converged Infrastructure) elimina silos de hardware, unificando servidores e storage via software. Nutanix é líder nisso [39]."
  },
  {
    "enunciado": "A nuvem privada de uma organização pode ser gerenciada por um provedor de serviços (terceirizado), desde que os recursos não sejam compartilhados publicamente.",
    "correta": "C",
    "tema": "Nuvem Privada Gerenciada",
    "justificativa": "Privada define a *exclusividade* do uso, não necessariamente quem aperta os parafusos. Um terceiro pode gerir sua nuvem privada [40]."
  },
  {
    "enunciado": "No modelo PaaS, o sistema operacional é necessariamente controlado pelo usuário.",
    "correta": "E",
    "tema": "PaaS",
    "justificativa": "No PaaS, o SO é controlado pelo provedor. O usuário controla a aplicação [41]."
  },
  {
    "enunciado": "Na nuvem, o backup dos dados pode ser especificado por um software cliente, caracterizando o modelo de armazenamento como serviço (STaaS ou BaaS).",
    "correta": "C",
    "tema": "Backup em Nuvem",
    "justificativa": "Soluções de backup que enviam dados para a nuvem (ex: AWS S3, Azure Backup) são formas de Storage as a Service [42]."
  },
  {
    "enunciado": "Um modelo de computação em nuvem caracteriza-se essencialmente por apresentar serviço mensurado (measured service).",
    "correta": "C",
    "tema": "Características NIST",
    "justificativa": "Serviço medido é uma das 5 características essenciais. Você paga pelo que usa (pay-as-you-go) [43]."
  },
  {
    "enunciado": "A disponibilização de serviços web é a única característica essencial da computação em nuvem.",
    "correta": "E",
    "tema": "Conceito de Nuvem",
    "justificativa": "Existem outras 4 características (Elasticidade, Autosserviço, etc.). Apenas ter um serviço web não faz dele uma nuvem [43]."
  },
  {
    "enunciado": "Quando se implanta uma aplicação e suas bibliotecas sem gerenciar rede ou sistema operacional, utiliza-se o modelo IaaS.",
    "correta": "E",
    "tema": "PaaS vs IaaS",
    "justificativa": "Se você *não* gerencia o SO, não é IaaS. A descrição encaixa em **PaaS** [44]."
  },
  {
    "enunciado": "Uma organização que usa nuvem pública e uma nuvem privada exclusiva com tecnologia padronizada implementa o modelo híbrido.",
    "correta": "C",
    "tema": "Nuvem Híbrida",
    "justificativa": "O uso conjunto e integrado de Pública + Privada define o modelo Híbrido [45]."
  },
  {
    "enunciado": "O controle automático para escalar rapidamente e reduzir o uso de recursos como CPU e memória caracteriza a rápida elasticidade.",
    "correta": "C",
    "tema": "Elasticidade",
    "justificativa": "Escalar para cima e para baixo automaticamente = Elasticidade [46]."
  },
  {
    "enunciado": "A falha dentro de um datacenter que permite manter a operação em outro conjunto de recursos no mesmo datacenter (ou local próximo logicamente separado) refere-se à Zona de Disponibilidade.",
    "correta": "C",
    "tema": "Zonas de Disponibilidade",
    "justificativa": "Embora a questão original seja um pouco confusa na formulação geográfica, o conceito de isolamento de falhas dentro de uma região é atendido pelas Zonas de Disponibilidade (Availability Zones) [47]."
  },
  {
    "enunciado": "Na abordagem IaaS, o usuário é responsável pelas Aplicações, Dados, Runtime e Middleware, enquanto o fornecedor gerencia Virtualização e Storage.",
    "correta": "C",
    "tema": "Responsabilidade Compartilhada (IaaS)",
    "justificativa": "O corte no IaaS ocorre no Sistema Operacional. O usuário assume do SO para cima (o que inclui Middleware e Runtime na visão de algumas bancas/diagramas específicos como o apresentado na questão original) [48]."
  },
  {
    "enunciado": "Na abordagem IaaS, o usuário não precisa manter o sistema operacional, pois isso é garantido pelo provedor.",
    "correta": "E",
    "tema": "Responsabilidade IaaS",
    "justificativa": "No IaaS, a manutenção (patches, updates) do SO é responsabilidade crítica do **usuário** [49]."
  },
  {
    "enunciado": "Na abordagem PaaS, o usuário tem responsabilidade somente quanto a Aplicações e Dados.",
    "correta": "C",
    "tema": "Responsabilidade PaaS",
    "justificativa": "No PaaS, o provedor entrega a plataforma (SO, Middleware, Runtime). O usuário traz apenas o código (App) e os dados [50]."
  },
{
    "enunciado": "Na abordagem IaaS, o usuário é responsável por gerenciar Aplicações, Dados, Runtime, Middleware e Sistema Operacional, enquanto o fornecedor gerencia o Armazenamento e a Virtualização.",
    "correta": "C",
    "tema": "Responsabilidade Compartilhada (IaaS)",
    "justificativa": "Esta é a definição padrão de IaaS. O provedor entrega a 'caixa' (hardware + virtualização) e o usuário cuida de todo o software dentro dela, desde o Windows/Linux (SO) até o código final."
  },
  {
    "enunciado": "Assim como na PaaS, na abordagem IaaS há necessidade de o usuário manter e atualizar os produtos de software, incluindo o sistema operacional.",
    "correta": "E",
    "tema": "IaaS vs PaaS",
    "justificativa": "No PaaS, o usuário **não** mantém o sistema operacional; isso é função do provedor. Apenas no IaaS o usuário cuida do SO. A comparação 'assim como' torna a questão errada."
  },
  {
    "enunciado": "Na abordagem PaaS, o usuário tem responsabilidade somente quanto a Aplicações e Dados.",
    "correta": "C",
    "tema": "Responsabilidade PaaS",
    "justificativa": "O PaaS abstrai toda a infraestrutura subjacente (SO, Middleware, Runtime), deixando o desenvolvedor focado apenas no código (App) e nas informações (Data)."
  },
  {
    "enunciado": "Em computação em nuvem, quando uma organização monta e fornece serviços para outras empresas (clientes externos), ela está utilizando o modelo de nuvem pública.",
    "correta": "C",
    "tema": "Nuvem Pública",
    "justificativa": "Nuvem Pública é aquela onde o provedor vende serviços para o público geral ou diversas empresas externas, via internet."
  },
  {
    "enunciado": "Na computação em nuvem, quando o gerenciamento do espaço em disco e do sistema operacional é de responsabilidade do provedor, e o usuário apenas consome a aplicação, o serviço é SaaS.",
    "correta": "C",
    "tema": "SaaS",
    "justificativa": "Se o provedor cuida de tudo (Infra + SO + App), é Software as a Service. O usuário é apenas um consumidor do serviço final."
  },
  {
    "enunciado": "O PaaS é o modelo que disponibiliza ambiente de desenvolvimento e implantação completa, permitindo ao usuário criar aplicativos sem gerenciar a infraestrutura subjacente.",
    "correta": "C",
    "tema": "Definição PaaS",
    "justificativa": "PaaS é a 'oficina' na nuvem. Oferece as ferramentas para construir software sem precisar construir o prédio da oficina."
  },
  {
    "enunciado": "A arquitetura cloud native caracteriza-se pela adoção de práticas como microsserviços, contêineres e automação para aplicativos executados na nuvem.",
    "correta": "C",
    "tema": "Cloud Native",
    "justificativa": "Aplicações nativas da nuvem são desenhadas para serem desacopladas (microsserviços), portáveis (contêineres) e elásticas desde o nascimento."
  },
  {
    "enunciado": "O modelo IaaS fornece componentes de infraestrutura onde o usuário deve necessariamente contratar um grupo de recursos por um tempo fixo que precisar, sem flexibilidade.",
    "correta": "E",
    "tema": "IaaS e Elasticidade",
    "justificativa": "O erro está na rigidez ('contratar pelo tempo que precisar' em oposição à demanda dinâmica). O IaaS é caracterizado pelo pagamento por uso (pay-as-you-go) e elasticidade, não necessariamente por contratos de tempo fixo para grupos de recursos."
  },
  {
    "enunciado": "O modelo PaaS permite que novas soluções sejam desenvolvidas, sendo necessário ao usuário configurar os itens de infraestrutura física.",
    "correta": "E",
    "tema": "PaaS",
    "justificativa": "No PaaS, o usuário **não** configura infraestrutura física (servidores, rede). Ele apenas configura a aplicação."
  },
  {
    "enunciado": "Um dos grandes benefícios do modelo SaaS é a possibilidade de o usuário acessar seu conteúdo de interesse pela Internet, geralmente via navegador.",
    "correta": "C",
    "tema": "Acesso SaaS",
    "justificativa": "A ubiquidade (acesso de qualquer lugar) é a marca registrada do SaaS."
  },
  {
    "enunciado": "Para ser classificada como nuvem, os recursos devem ser agrupados para atender a vários consumidores (multi-tenant) e acessíveis via rede.",
    "correta": "C",
    "tema": "Características NIST",
    "justificativa": "Resource Pooling (Multitenancy) e Broad Network Access são características essenciais segundo o NIST."
  },
  {
    "enunciado": "No modelo IaaS, o provedor do serviço é responsável por proteger os dados dos clientes.",
    "correta": "E",
    "tema": "Segurança IaaS",
    "justificativa": "Modelo de Responsabilidade Compartilhada: No IaaS, o provedor protege a infraestrutura (o 'muro' do data center). O cliente é o único responsável por proteger seus dados (criptografia, backup, acesso)."
  },
  {
    "enunciado": "Uma nuvem pública oferece escalabilidade praticamente infinita e recursos compartilhados por organizações e indivíduos.",
    "correta": "C",
    "tema": "Nuvem Pública",
    "justificativa": "A escala massiva dos grandes provedores (AWS, Azure) dá a ilusão de recursos infinitos para o usuário final."
  },
  {
    "enunciado": "A diferença entre nuvem pública e privada é que a privada deve necessariamente ser operada e gerida pela própria organização proprietária.",
    "correta": "E",
    "tema": "Gestão Nuvem Privada",
    "justificativa": "Uma nuvem privada pode ser gerenciada por terceiros (Outsourcing). O que define ser privada é a exclusividade de uso, não quem administra."
  },
  {
    "enunciado": "A elasticidade oferece às organizações a possibilidade de diminuir ou aumentar as capacidades computacionais de forma dinâmica.",
    "correta": "C",
    "tema": "Elasticidade",
    "justificativa": "Conceito core da nuvem: acompanhar a demanda em tempo real."
  },
  {
    "enunciado": "A escalabilidade horizontal significa tornar um componente maior ou mais rápido (ex: aumentar CPU) para lidar com uma carga maior.",
    "correta": "E",
    "tema": "Escalabilidade Vertical vs Horizontal",
    "justificativa": "Aumentar o tamanho do componente (mais CPU/RAM) é escalabilidade **Vertical** (Scale Up). Horizontal (Scale Out) é adicionar *mais* máquinas."
  },
  {
    "enunciado": "A escolha de uma solução de IaC (Infraestrutura como Código) com abordagem declarativa tem como desvantagem a necessidade de um administrador qualificado.",
    "correta": "C",
    "tema": "IaC",
    "justificativa": "Ferramentas declarativas (como Terraform) exigem conhecimento específico da linguagem (HCL) e do estado desejado, demandando profissionais qualificados."
  },
  {
    "enunciado": "Em um ambiente de nuvem, a replicação de dados em regiões distintas é feita automaticamente por padrão por qualquer serviço de nuvem para garantir disponibilidade.",
    "correta": "E",
    "tema": "Replicação Regional",
    "justificativa": "A maioria dos serviços (como EC2 ou EBS) é zonal por padrão. A replicação para outra *Região* (Geo-redundância) geralmente exige configuração explícita e custo adicional, não é automática para tudo."
  },
  {
    "enunciado": "Uma zona de disponibilidade é composta por um conjunto de datacenters que não são compartilhados com outras zonas de disponibilidade.",
    "correta": "C",
    "tema": "Isolamento de Zonas",
    "justificativa": "Cada Zona (AZ) é fisicamente distinta e isolada das outras (energia, refrigeração próprias) para evitar falha em cascata."
  },
  {
    "enunciado": "Para definir a região que será utilizada na nuvem, deve-se observar regras de conformidade e latência.",
    "correta": "C",
    "tema": "Escolha de Região",
    "justificativa": "Leis de soberania de dados (onde o dado pode morar) e a distância do usuário (velocidade) são os fatores principais."
  },
  {
    "enunciado": "O critério decisivo para definir a distribuição geográfica de datacenters de uma mesma zona de disponibilidade é a possibilidade de ocorrência de desastres naturais.",
    "correta": "E",
    "tema": "Zona vs Região",
    "justificativa": "Zonas dentro de uma mesma região estão próximas (km de distância), então compartilham riscos de grandes desastres naturais (furacão, terremoto). O critério para desastres naturais define a separação entre **Regiões**, não Zonas."
  },
  {
    "enunciado": "Para proteger arquivos de exclusão acidental no Amazon S3, deve-se ativar o recurso de versionamento no bucket.",
    "correta": "C",
    "tema": "AWS S3 Versionamento",
    "justificativa": "O versionamento mantém o histórico. Se você deletar um arquivo, ele apenas coloca um 'marcador de exclusão', permitindo restaurar a versão anterior."
  },
  {
    "enunciado": "Quando a infraestrutura está em nuvem, o nível de redundância correspondente a falhas em zonas de disponibilidade é considerado o nível 3.",
    "correta": "C",
    "tema": "Níveis de Redundância",
    "justificativa": "Geralmente classifica-se: 1-Disco/Host, 2-Rack/Switch, 3-Datacenter/Zona, 4-Região."
  },
  {
    "enunciado": "Para ser considerada computação em nuvem, uma implementação deve atender a cinco requisitos do NIST: amplo acesso à rede, autoatendimento, pool de recursos, elasticidade rápida e serviço medido.",
    "correta": "C",
    "tema": "NIST 5 Características",
    "justificativa": "São os 5 pilares fundamentais que definem Cloud Computing."
  },
  {
    "enunciado": "O armazenamento de objetos usa uma estrutura simples com metadados e um identificador exclusivo para cada objeto, ao invés de uma árvore de diretórios hierárquica.",
    "correta": "C",
    "tema": "Object Storage",
    "justificativa": "Diferença chave entre Object Storage (S3) e Block/File Storage. Ideal para dados não estruturados."
  },
{
    "enunciado": "O IaaS é o serviço de computação em nuvem que utiliza um modelo de pagamento por demanda (pay-per-use), onde o cliente paga apenas pelo que utiliza.",
    "correta": "C",
    "tema": "Características IaaS",
    "justificativa": "O modelo OPEX (despesa operacional) variável é a base do IaaS. Analogia: Como a conta de luz, você paga pelo consumo, não pela instalação da usina [1]."
  },
  {
    "enunciado": "No modelo PaaS, o cliente deve se preocupar com a camada de infraestrutura física e virtualização.",
    "correta": "E",
    "tema": "Benefício PaaS",
    "justificativa": "No PaaS, a infraestrutura é abstraída. O cliente foca apenas na aplicação. Quem cuida da 'infra' é o provedor [2]."
  },
  {
    "enunciado": "Escalabilidade é a característica de redimensionamento automatizado e instantâneo de recursos em tempo real de acordo com a demanda.",
    "correta": "E",
    "tema": "Escalabilidade vs Elasticidade",
    "justificativa": "A definição dada (tempo real, automatizado, instantâneo, sob demanda) refere-se à **Elasticidade**. Escalabilidade geralmente refere-se à capacidade planejada de crescimento do sistema a longo prazo [3]."
  },
  {
    "enunciado": "Uma diferença entre nuvens privadas e públicas é que as privadas utilizam uma infraestrutura compartilhada com o público geral.",
    "correta": "E",
    "tema": "Nuvem Privada",
    "justificativa": "Nuvem Privada utiliza infraestrutura **dedicada/exclusiva** para uma organização, não compartilhada com o público [4]."
  },
  {
    "enunciado": "Com o uso de IaC (Infraestrutura como Código), ainda é necessário fazer ajustes manuais frequentes no gerenciamento de servidores após a implantação.",
    "correta": "E",
    "tema": "Objetivo IaC",
    "justificativa": "O objetivo da IaC é justamente automatizar tudo e evitar a configuração manual (que gera inconsistências). Se você precisa ajustar manualmente, a IaC falhou ou está mal implementada [5]."
  },
  {
    "enunciado": "A plataforma de front-end na arquitetura de nuvem contém a infraestrutura pesada, como armazenamento e mecanismos de segurança.",
    "correta": "E",
    "tema": "Arquitetura Cloud",
    "justificativa": "Armazenamento, servidores e segurança ficam no **Back-end** (lado do provedor). Front-end é a interface do usuário (cliente) [6]."
  },
  {
    "enunciado": "IaC refere-se ao provisionamento da infraestrutura por meio de códigos e controle de versão, substituindo processos manuais.",
    "correta": "C",
    "tema": "Definição IaC",
    "justificativa": "Permite tratar a infraestrutura como software (versioanamento, testes, repetição) [7]."
  },
  {
    "enunciado": "Uma nuvem pública possibilita que o consumidor provisione recursos de rede e sub-redes para seus servidores.",
    "correta": "C",
    "tema": "Nuvem Pública (VPC)",
    "justificativa": "Mesmo na nuvem pública, o usuário cria redes virtuais privadas (VPCs, Subnets) para isolar seus recursos logicamente [7]."
  },
  {
    "enunciado": "A elasticidade rápida é a característica que permite que recursos sejam provisionados e liberados automaticamente conforme a necessidade.",
    "correta": "C",
    "tema": "Elasticidade",
    "justificativa": "Pilar fundamental da nuvem: crescer e diminuir sob demanda [8]."
  },
  {
    "enunciado": "Serviços de armazenamento de objetos (como S3) permitem que arquivos sejam replicados em diferentes localidades ou países.",
    "correta": "C",
    "tema": "Re-replicação S3",
    "justificativa": "Recursos como Cross-Region Replication (CRR) permitem copiar dados automaticamente entre buckets em regiões geográficas diferentes para redundância [9]."
  },
  {
    "enunciado": "Segundo o NIST, a computação em nuvem fornece um pool compartilhado de recursos de computação *não configuráveis*.",
    "correta": "E",
    "tema": "Definição NIST",
    "justificativa": "A definição correta é um pool de recursos **configuráveis** (redes, servidores, armazenamento, etc.) [10]."
  },
  {
    "enunciado": "No IaaS, o provedor gerencia toda a infraestrutura e também executa o software que fornece componentes como banco de dados e middleware.",
    "correta": "E",
    "tema": "IaaS vs PaaS",
    "justificativa": "Se o provedor gerencia o Banco de Dados e Middleware, trata-se de **PaaS**. No IaaS, o provedor só entrega a VM; o cliente instala o DB e Middleware [11]."
  },
  {
    "enunciado": "Service as a Software (SaaS) é um modelo de serviço definido pelo NIST.",
    "correta": "E",
    "tema": "Sigla SaaS",
    "justificativa": "A sigla significa **Software as a Service** (Software como Serviço), e não 'Service as a Software' [12]."
  },
  {
    "enunciado": "Google ApiGee é fornecido exclusivamente nas modalidades PaaS e IaaS.",
    "correta": "E",
    "tema": "Classificação de Serviço",
    "justificativa": "ApiGee é uma plataforma de gerenciamento de API, geralmente consumida como PaaS ou SaaS, mas a questão aponta erro na classificação restritiva ou na inclusão de IaaS pura para essa ferramenta específica [13]."
  },
  {
    "enunciado": "Na Plataforma como Serviço (PaaS), as aplicações são hospedadas na nuvem e acessadas via navegador, sendo voltadas para o usuário final como um produto pronto (ex: editor de texto).",
    "correta": "E",
    "tema": "PaaS vs SaaS",
    "justificativa": "A descrição refere-se ao **SaaS**. PaaS é voltado para desenvolvedores (criar apps), não para usuários finais consumirem apps prontos [14]."
  },
  {
    "enunciado": "No modelo IaaS, o consumidor é responsável pelo gerenciamento do sistema operacional e suas configurações.",
    "correta": "C",
    "tema": "Responsabilidade IaaS",
    "justificativa": "Correto. O provedor entrega o hardware virtual, o cliente administra o SO (root/admin) [14]."
  },
  {
    "enunciado": "Na computação em nuvem, a ideia de 'Grid Computing' (Grade) é sinônimo, onde computadores resolvem um único problema específico.",
    "correta": "E",
    "tema": "Grid vs Cloud",
    "justificativa": "Grid foca em usar muitos computadores para uma tarefa massiva (ex: quebrar senha, cálculo climático). Nuvem foca em oferecer recursos para *vários* usuários com *várias* tarefas diferentes [15]."
  },
  {
    "enunciado": "Design, desenvolvimento e testes são serviços típicos de uma infraestrutura SaaS.",
    "correta": "E",
    "tema": "SaaS vs PaaS",
    "justificativa": "Essas são atividades de desenvolvimento, suportadas pelo **PaaS**. SaaS é o consumo do software já pronto [16]."
  },
  {
    "enunciado": "O serviço AWS S3 suporta armazenamento de arquivos e criação de versões (versionamento) de cada arquivo armazenado.",
    "correta": "C",
    "tema": "AWS S3",
    "justificativa": "O S3 é um Object Store com suporte nativo a versionamento para proteção de dados [17]."
  },
  {
    "enunciado": "A elasticidade na nuvem gera a expectativa de fornecer recursos em qualquer quantidade e a qualquer momento rapidamente.",
    "correta": "C",
    "tema": "Elasticidade",
    "justificativa": "É a promessa de capacidade 'infinita' e instantânea sob demanda [18]."
  },
  {
    "enunciado": "A computação em nuvem é uma instância direta da computação autônoma, onde sistemas se autogerenciam completamente sem intervenção humana.",
    "correta": "E",
    "tema": "Conceitos de Nuvem",
    "justificativa": "Embora tenha automação, a nuvem não é sinônimo de computação autônoma total. Ainda exige configuração, gerenciamento e arquitetura por parte dos humanos [19]."
  },
  {
    "enunciado": "Disponibilidade, capacidade e desempenho são indicadores essenciais na entrega de soluções em nuvem.",
    "correta": "C",
    "tema": "KPIs de Nuvem",
    "justificativa": "São as métricas fundamentais de SLA e qualidade de serviço [20]."
  },
  {
    "enunciado": "A computação em nuvem geralmente aumenta o TCO (Total Cost of Ownership) e piora o ROI (Return on Investment).",
    "correta": "E",
    "tema": "Economia da Nuvem",
    "justificativa": "O objetivo da nuvem é **reduzir** o TCO (trocando CAPEX por OPEX e eliminando gestão de hardware) e **melhorar** o ROI [21]."
  },
  {
    "enunciado": "O aumento da disponibilidade dos serviços é um dos benefícios da adoção da computação em nuvem.",
    "correta": "C",
    "tema": "Disponibilidade",
    "justificativa": "Devido à redundância nativa e infraestrutura distribuída dos provedores [21]."
  },
  {
    "enunciado": "Serviços com demanda variável, como e-commerce, beneficiam-se da nuvem por evitar servidores ociosos em épocas de baixa utilização.",
    "correta": "C",
    "tema": "Elasticidade e Custo",
    "justificativa": "Evita o 'over-provisioning' (comprar servidor para a Black Friday e deixá-lo parado o resto do ano) [22]."
  },
  {
    "enunciado": "A migração de IaaS para SaaS não acarreta mudanças significativas na gestão de recursos.",
    "correta": "E",
    "tema": "Gestão IaaS vs SaaS",
    "justificativa": "Acarreta mudança total. No IaaS você gerencia SO, patches, middleware. No SaaS você não gerencia nada técnico, apenas o uso. A carga operacional muda drasticamente [23]."
  },
  {
    "enunciado": "A divisão em regiões e zonas permite que, em caso de desastre natural em uma região, outro data center assuma o serviço, aumentando a disponibilidade.",
    "correta": "C",
    "tema": "Disaster Recovery",
    "justificativa": "Conceito de Geo-redundância. Se a região 'Leste dos EUA' for atingida por um furacão, a região 'Oeste dos EUA' pode assumir [24]."
  },
  {
    "enunciado": "Em serviços de nuvem, as contas de usuários são criadas apenas para a empresa contratante, e não para cada usuário individualmente.",
    "correta": "E",
    "tema": "IAM",
    "justificativa": "As boas práticas (IAM) exigem contas individuais para cada usuário para permitir auditoria e controle de acesso granular (quem fez o quê) [25]."
  },
  {
    "enunciado": "A garantia de segurança na nuvem exige que o cliente instale firewalls físicos e balanceadores de carga na sua própria infraestrutura local.",
    "correta": "E",
    "tema": "Segurança em Nuvem",
    "justificativa": "Na nuvem, utiliza-se firewalls virtuais (Security Groups, WAF) e Load Balancers fornecidos como serviço pelo provedor, não hardware local no cliente [26]."
  },
{
    "enunciado": "A migração do provimento de um serviço de computação em nuvem, de IaaS para SaaS, não acarreta mudanças significativas na gestão de recursos.",
    "correta": "E",
    "tema": "Migração IaaS para SaaS",
    "justificativa": "A mudança é drástica. No IaaS, a equipe de TI gerencia SO, patches e middleware. No SaaS, toda essa gestão técnica desaparece, restando apenas a gestão do uso/acesso da aplicação. Ocorre uma transferência massiva de responsabilidade operacional para o provedor."
  },
  {
    "enunciado": "A divisão da nuvem em regiões e zonas aumenta a disponibilidade; caso ocorra um desastre natural em uma região, outro data center do provedor pode assumir os serviços.",
    "correta": "C",
    "tema": "Regiões e Zonas",
    "justificativa": "Esta é a base da recuperação de desastres (Disaster Recovery). Regiões distintas são isoladas geograficamente para que um furacão na Flórida não afete a operação na Virgínia."
  },
  {
    "enunciado": "Se o preço de um serviço de servidores virtuais for calculado apenas com base no sistema operacional utilizado, a definição do preço está bem dimensionada.",
    "correta": "E",
    "tema": "Precificação em Nuvem",
    "justificativa": "O custo de uma VM depende de múltiplos fatores além do SO (Licença): Quantidade de vCPU, memória RAM, tamanho e tipo do disco (SSD/HDD), tráfego de rede e tempo de uso."
  },
  {
    "enunciado": "Em serviços de computação em nuvem, as contas de usuários devem ser criadas apenas para a empresa contratante (conta genérica) e não para cada usuário individualmente.",
    "correta": "E",
    "tema": "IAM (Gestão de Identidade)",
    "justificativa": "Prática de segurança ruim. O princípio da não-repudiação e auditoria exige que cada pessoa tenha sua própria identidade (usuário) para saber exatamente quem fez o quê."
  },
  {
    "enunciado": "A garantia de segurança na nuvem demanda que o cliente instale firewalls físicos e balanceadores de carga na sua própria infraestrutura de TI local para proteger a nuvem.",
    "correta": "E",
    "tema": "Segurança em Nuvem",
    "justificativa": "Na nuvem, utilizam-se appliances virtuais (WAF, Security Groups, Load Balancers como serviço) fornecidos pelo provedor. Não faz sentido técnico ou econômico usar hardware local para filtrar tráfego que já está no data center do provedor."
  },
  {
    "enunciado": "No modelo IaaS, o provedor é responsável pela segurança fundamental do ambiente (física/infraestrutura), enquanto o usuário é responsável pela segurança de sua rede virtual e do que for construído sobre ela.",
    "correta": "C",
    "tema": "Responsabilidade Compartilhada",
    "justificativa": "O provedor protege a nuvem (o prédio, os cabos); o cliente protege o que está na nuvem (o SO, os dados, as portas abertas)."
  },
  {
    "enunciado": "Um aplicativo de edição de textos acessado via navegador, onde usuários colaboram e o histórico é salvo na nuvem, descreve o modelo PaaS.",
    "correta": "E",
    "tema": "SaaS vs PaaS",
    "justificativa": "Isso descreve o **SaaS** (Software as a Service), como o Google Docs ou Office 365. PaaS seria o ambiente para *criar* esse editor de texto."
  },
  {
    "enunciado": "O serviço de backup é restrito aos modelos IaaS e PaaS, pois no SaaS não há como personalizar recursos de hardware para realizar cópias.",
    "correta": "E",
    "tema": "Backup em SaaS",
    "justificativa": "SaaS também possui backup (geralmente gerido pelo provedor ou via exportação de dados). A incapacidade de mexer no hardware não impede a cópia lógica dos dados."
  },
  {
    "enunciado": "Computação em nuvem é uma estratégia onde recursos de TI altamente escaláveis são fornecidos como serviço para vários clientes externos via Internet.",
    "correta": "C",
    "tema": "Definição de Nuvem",
    "justificativa": "Definição precisa que abrange escalabilidade, modelo de serviço e acesso remoto."
  },
  {
    "enunciado": "Os serviços de nuvem são classificados em nuvem pública, privada, sob demanda e grade.",
    "correta": "E",
    "tema": "Modelos de Implantação",
    "justificativa": "'Sob demanda' é uma característica, e 'Grade' (Grid) é um conceito anterior/distinto. Os modelos de implantação corretos são: Pública, Privada, Híbrida e Comunitária."
  },
  {
    "enunciado": "A arquitetura de cloud computing é considerada descentralizada, pois suas aplicações são executadas em ambientes distintos.",
    "correta": "E",
    "tema": "Centralização vs Descentralização",
    "justificativa": "A nuvem é baseada em data centers massivos e **centralizados** (embora distribuídos regionalmente) que provêm recursos virtualizados. A computação em Grade (Grid) é que é descentralizada."
  },
  {
    "enunciado": "A computação em nuvem oferece infraestrutura elástica para sistemas sem necessidade de customizações nas aplicações.",
    "correta": "E",
    "tema": "Adaptação para Nuvem",
    "justificativa": "Para aproveitar a elasticidade real, as aplicações frequentemente precisam ser refatoradas ou customizadas (ex: tornarem-se stateless), não é sempre 'plug-and-play'."
  },
  {
    "enunciado": "Em comparação aos modelos IaaS, a implantação do modelo PaaS exige um investimento inicial menor em infraestrutura.",
    "correta": "C",
    "tema": "Custo PaaS vs IaaS",
    "justificativa": "No PaaS, você não gasta tempo/dinheiro configurando servidores, redes e SOs (setup de infraestrutura), o que reduz o custo inicial de implantação comparado ao IaaS."
  },
  {
    "enunciado": "Uma pequena empresa pode hospedar seu sistema em nuvem pública sem custo, pois toda nuvem pública é gratuita.",
    "correta": "E",
    "tema": "Nuvem Pública",
    "justificativa": "Nuvem pública refere-se ao acesso compartilhado, não à gratuidade. A maioria cobra por uso (Pay-as-you-go)."
  },
  {
    "enunciado": "Uma nuvem privada permite que a organização controle o seu próprio ambiente, incluindo seus dados.",
    "correta": "C",
    "tema": "Nuvem Privada",
    "justificativa": "O maior benefício da nuvem privada é o controle total e exclusivo sobre a infraestrutura e governança de dados."
  },
  {
    "enunciado": "Na computação em nuvem, o repositório de recursos de TI pode ser provisionado e escalado mediante acesso via rede.",
    "correta": "C",
    "tema": "Provisionamento",
    "justificativa": "Acesso via rede (Network Access) é o meio pelo qual se consome e controla a nuvem."
  },
  {
    "enunciado": "As aplicações do modelo SaaS devem utilizar banco de dados separado para que os dados de cada empresa fiquem isolados.",
    "correta": "E",
    "tema": "SaaS Multitenancy",
    "justificativa": "No SaaS, é comum o uso de bancos de dados compartilhados (Multi-tenant) onde o isolamento dos dados entre clientes é feito via software (Logic Isolation), e não necessariamente com um DB físico separado para cada um."
  },
  {
    "enunciado": "No modelo IaaS, as máquinas virtuais persistentes utilizam discos virtuais para armazenamento de dados após seu desligamento.",
    "correta": "C",
    "tema": "Persistência IaaS",
    "justificativa": "O armazenamento em bloco (ex: EBS, Azure Disk) persiste independentemente do estado de energia da VM."
  },
  {
    "enunciado": "Uma premissa do PaaS é a oferta das mesmas funcionalidades para todos os usuários para garantir estabilidade.",
    "correta": "E",
    "tema": "Flexibilidade PaaS",
    "justificativa": "O PaaS oferece ferramentas flexíveis para que cada desenvolvedor crie funcionalidades *diferentes*. A padronização rígida de funcionalidade final é característica do SaaS."
  },
  {
    "enunciado": "No modelo SaaS, as aplicações podem oferecer interfaces customizadas para cada cliente.",
    "correta": "C",
    "tema": "Customização SaaS",
    "justificativa": "Embora o núcleo seja o mesmo, o SaaS permite customizações de interface (branding, cores, dashboards) e configurações de fluxo de trabalho."
  },
  {
    "enunciado": "Quando um sistema não possui nenhuma característica incompatível com a computação em nuvem, ele é classificado como 'Cloud Ready' (Pronto para a nuvem).",
    "correta": "C",
    "tema": "Migração (Cloud Ready)",
    "justificativa": "Significa que pode ser migrado e rodar na nuvem (provavelmente em IaaS) sem grandes refatorações, mas talvez ainda não seja 'Cloud Native'."
  },
  {
    "enunciado": "No modelo IaaS, o consumidor gerencia a infraestrutura de nuvem subjacente.",
    "correta": "E",
    "tema": "Responsabilidade IaaS",
    "justificativa": "O consumidor gerencia o SO e as aplicações. Quem gerencia a infraestrutura subjacente (hardware, hypervisor) é o provedor."
  },
  {
    "enunciado": "O modelo que fornece servidores, armazenamento e ferramentas pré-montadas para desenvolver, testar e entregar aplicativos é o PaaS.",
    "correta": "C",
    "tema": "Definição PaaS",
    "justificativa": "O foco em fornecer ferramentas de ciclo de vida de software (desenvolver, testar) define a Plataforma como Serviço."
  },
  {
    "enunciado": "Para um gestor que precisa de webmail sem gerenciar sistemas operacionais subjacentes, o modelo mais adequado é o IaaS.",
    "correta": "E",
    "tema": "Webmail (SaaS)",
    "justificativa": "Webmail (Gmail, Outlook) é **SaaS**. Se usar IaaS, terá que gerenciar o SO e instalar o servidor de email manualmente."
  },
  {
    "enunciado": "No modelo PaaS, o fornecimento e o gerenciamento do processamento físico e do ambiente de hospedagem são de responsabilidade exclusiva do provedor, sem envolvimento do usuário na configuração.",
    "correta": "E",
    "tema": "Configuração PaaS",
    "justificativa": "Embora o provedor gerencie o hardware, no PaaS o usuário frequentemente configura o ambiente de hospedagem da aplicação (ex: escolhe versão do runtime, define regras de escala, variáveis de ambiente). Não é uma 'caixa preta' total como no SaaS."
  },
 {
    "enunciado": "A categoria de nuvem pública é caracterizada por oferecer serviços (IaaS, PaaS, SaaS) em data centers de um provedor que vende acesso tarifado para outras empresas.",
    "correta": "C",
    "tema": "Nuvem Pública",
    "justificativa": "A nuvem pública é definida pelo modelo de negócio onde a infraestrutura pertence ao provedor e é vendida como serviço para o público em geral ou empresas [1]."
  },
  {
    "enunciado": "No modelo IaaS, o cliente deve instalar e configurar por conta própria recursos como compiladores, banco de dados e o sistema operacional.",
    "correta": "C",
    "tema": "Responsabilidade IaaS",
    "justificativa": "No IaaS, o provedor entrega o hardware virtualizado ('metal'). O cliente é responsável por instalar e manter todo o software, incluindo o SO e ferramentas de desenvolvimento [2]."
  },
  {
    "enunciado": "Na Plataforma como Serviço (PaaS), os desenvolvedores podem criar aplicativos sem se preocupar com o gerenciamento da infraestrutura subjacente de servidores.",
    "correta": "C",
    "tema": "PaaS",
    "justificativa": "O principal valor do PaaS é abstrair a complexidade do hardware e SO, permitindo foco total no código da aplicação [3]."
  },
  {
    "enunciado": "No Microsoft Azure, o arquivo 'ServiceConfiguration.cscfg' é utilizado para definir o número de instâncias para cada função do serviço e impressões digitais de certificados.",
    "correta": "C",
    "tema": "Microsoft Azure (Arquivos de Configuração)",
    "justificativa": "Este arquivo XML específico armazena as configurações que podem ser alteradas sem redeploy do serviço, como contagem de instâncias [4]."
  },
  {
    "enunciado": "Para utilizar um certificado digital em uma instância de função no Microsoft Azure, deve-se carregar o arquivo .pfx (que contém a chave privada).",
    "correta": "C",
    "tema": "Microsoft Azure (Segurança)",
    "justificativa": "Para que a aplicação possa decriptar tráfego SSL/TLS ou autenticar-se, ela precisa do certificado completo, incluindo a chave privada, comumente no formato .pfx [5]."
  },
  {
    "enunciado": "O Visual Studio é o ambiente de desenvolvimento integrado (IDE) disponibilizado pela Microsoft para criar aplicativos para o Azure.",
    "correta": "C",
    "tema": "Ferramentas Microsoft",
    "justificativa": "Visual Studio possui integração nativa profunda com o Azure para deploy e debug [6]."
  },
  {
    "enunciado": "Computação elástica refere-se à capacidade de alocar dinamicamente recursos para suportar cargas de trabalho variáveis.",
    "correta": "C",
    "tema": "Elasticidade",
    "justificativa": "É a habilidade de expandir (scale out) ou reduzir (scale in) automaticamente conforme o tráfego aumenta ou diminui [7]."
  },
  {
    "enunciado": "Nuvem pública é definida como aquela operada exclusivamente por um ente público (governo) para atender instituições governamentais.",
    "correta": "E",
    "tema": "Nuvem Pública vs Privada/Gov",
    "justificativa": "Nuvem pública refere-se ao acesso aberto ao público geral/mercado (ex: AWS, Google). Uma nuvem operada pelo governo para o governo seria uma nuvem privada ou comunitária governamental [8]."
  },
  {
    "enunciado": "A infraestrutura SaaS executa apenas aplicativos disponibilizados pelo provedor de serviços.",
    "correta": "C",
    "tema": "SaaS",
    "justificativa": "No SaaS, o cliente não implanta seus próprios softwares; ele usa o software que o provedor disponibilizou (ex: Salesforce, Gmail) [9]."
  },
  {
    "enunciado": "Um risco da computação em nuvem é a desperimetrização, onde sistemas na nuvem ultrapassam os limites físicos da organização, cruzando fronteiras de segurança tradicionais.",
    "correta": "C",
    "tema": "Segurança (Desperimetrização)",
    "justificativa": "Com a nuvem, o perímetro de segurança não é mais a borda da rede física da empresa (firewall local), mas sim a identidade e o acesso, tornando a segurança mais complexa [9]."
  },
  {
    "enunciado": "O hypervisor controla o disco rígido para garantir que o acesso seja feito exclusivamente por uma única máquina virtual, impedindo o compartilhamento.",
    "correta": "E",
    "tema": "Virtualização (Hypervisor)",
    "justificativa": "O papel do hypervisor é justamente permitir o *compartilhamento* seguro de recursos físicos (como disco) entre múltiplas VMs simultâneas, e não garantir uso exclusivo físico [10]."
  },
  {
    "enunciado": "Na IaaS, a precificação de instâncias 'transientes' (spot) pode sofrer forte influência de custos e interrupções, pois não há garantia de disponibilidade futura.",
    "correta": "C",
    "tema": "Instâncias Spot/Transientes",
    "justificativa": "Essas instâncias usam capacidade ociosa do provedor a preços baixos, mas o provedor pode retomá-las a qualquer momento se precisar do hardware, exigindo que a aplicação saiba lidar com interrupções [11]."
  },
  {
    "enunciado": "Em um ambiente multicloud, ferramentas de orquestração podem gerenciar recursos de infraestrutura distribuídos em diversos provedores.",
    "correta": "C",
    "tema": "Multicloud",
    "justificativa": "Orquestradores de nuvem (como Kubernetes ou Terraform) visam unificar a gestão de recursos disparatados em múltiplas nuvens [12]."
  },
  {
    "enunciado": "A elasticidade manual é realizada por meio de APIs disparadas manualmente pelos usuários ao monitorar o sistema.",
    "correta": "E",
    "tema": "Elasticidade Automática",
    "justificativa": "Elasticidade, no conceito estrito de nuvem, refere-se à automação baseada em métricas (triggers). Disparo manual é possível, mas a definição de 'elasticidade' busca a reação automática à demanda [13]."
  },
  {
    "enunciado": "Uma região de nuvem é um subconjunto dentro de uma zona de disponibilidade.",
    "correta": "E",
    "tema": "Hierarquia Região vs Zona",
    "justificativa": "A hierarquia é o oposto: Uma **Região** (ex: Norte da Virgínia) contém múltiplas **Zonas de Disponibilidade** (AZs). Uma Zona não contém Regiões [14]."
  },
  {
    "enunciado": "Uma nuvem híbrida é a separação lógica de uma parte de uma nuvem pública para uso privado.",
    "correta": "E",
    "tema": "Nuvem Híbrida",
    "justificativa": "Separar uma parte da nuvem pública é o conceito de VPC (Virtual Private Cloud). Nuvem Híbrida exige a conexão entre dois ambientes distintos: um privado (on-premise) e um público [15]."
  },
  {
    "enunciado": "Infrastructure as Code (IaC) utiliza código descritivo de alto nível para automatizar o provisionamento de TI.",
    "correta": "C",
    "tema": "IaC",
    "justificativa": "IaC (ex: Terraform, CloudFormation) permite definir a infraestrutura em arquivos de texto (código) para automação e versionamento [16]."
  },
  {
    "enunciado": "A infraestrutura física de uma nuvem privada deve obrigatoriamente estar localizada dentro da rede interna e instalações da própria organização.",
    "correta": "E",
    "tema": "Nuvem Privada (Localização)",
    "justificativa": "Uma nuvem privada pode ser hospedada externamente (Off-premise) por um provedor terceiro, desde que o uso seja *exclusivo* daquela organização [17]."
  },
  {
    "enunciado": "PaaS é a infraestrutura indicada para desenvolvimento de aplicações em nuvem, oferecendo recursos de ciclo de vida (DevOps).",
    "correta": "C",
    "tema": "Uso de PaaS",
    "justificativa": "PaaS fornece o ecossistema completo (banco de dados, runtimes, pipelines de deploy) ideal para desenvolvedores [18]."
  },
  {
    "enunciado": "O modelo Serverless caracteriza-se pela ausência de gerenciamento de infraestrutura pelo usuário e dimensionamento automático por consumo.",
    "correta": "C",
    "tema": "Serverless",
    "justificativa": "Serverless não significa 'sem servidores' (eles existem), mas sim que o usuário não os gerencia. O custo é baseado na execução precisa (tempo/memória) [18]."
  },
  {
    "enunciado": "As aplicações do modelo SaaS devem sempre utilizar bancos de dados fisicamente separados para cada cliente.",
    "correta": "E",
    "tema": "SaaS Multitenancy",
    "justificativa": "Aplicações SaaS modernas frequentemente usam bancos de dados compartilhados (multitenant) com isolamento lógico (ID do cliente na tabela) para eficiência de custos, não necessariamente isolamento físico [19]."
  },
{
    "enunciado": "No Hyper-V, a funcionalidade 'Cluster Shared Volume' permite flexibilidade no uso de armazenamento compartilhado entre máquinas virtuais.",
    "correta": "C",
    "tema": "Virtualização (Hyper-V)",
    "justificativa": "O CSV (Cluster Shared Volume) permite que múltiplos nós em um cluster leiam e gravem no mesmo volume LUN simultaneamente, facilitando a migração ao vivo (Live Migration)."
  },
  {
    "enunciado": "A estratégia de migração para nuvem onde a carga de trabalho é movida com o mínimo de modificações possíveis (apenas o necessário para rodar) é chamada de 'lift-and-shift'.",
    "correta": "C",
    "tema": "Estratégias de Migração",
    "justificativa": "Lift-and-shift (Rehosting) é pegar a aplicação como está no data center local e jogá-la na nuvem (geralmente em IaaS) sem reescrever o código."
  },
  {
    "enunciado": "Se um órgão decide gerenciar o sistema operacional e aplicativos, enquanto o provedor gerencia a infraestrutura de back-end (armazenamento, rede, virtualização), o modelo escolhido é o SaaS.",
    "correta": "E",
    "tema": "Responsabilidade Compartilhada",
    "justificativa": "Se o cliente gerencia o Sistema Operacional, o modelo é **IaaS**. No SaaS, o cliente não tem acesso ao SO."
  },
  {
    "enunciado": "A estratégia de migração 'improve-and-move' envolve modernizar a carga de trabalho durante a migração para aprimorar o desempenho e utilizar recursos nativos da nuvem.",
    "correta": "C",
    "tema": "Estratégias de Migração",
    "justificativa": "Diferente do lift-and-shift, aqui há uma refatoração ou otimização (Replatforming/Refactoring) para aproveitar benefícios da nuvem (PaaS, elasticidade) durante o processo de mudança."
  },
  {
    "enunciado": "Nuvem comunitária refere-se necessariamente à composição de duas ou mais nuvens que se mantêm como entidades individuais ligadas por tecnologia padronizada.",
    "correta": "E",
    "tema": "Nuvem Comunitária vs Híbrida",
    "justificativa": "A definição dada (composição de duas nuvens distintas ligadas por tecnologia) refere-se à **Nuvem Híbrida**. Nuvem Comunitária é uma infraestrutura compartilhada por organizações com interesses comuns (ex: missão, segurança)."
  },
  {
    "enunciado": "Uma organização que possui serviços em seu data center privado e em duas nuvens públicas distintas possui uma arquitetura de nuvem híbrida.",
    "correta": "C",
    "tema": "Nuvem Híbrida",
    "justificativa": "A coexistência e operação integrada entre nuvem Privada e Pública define o modelo Híbrido."
  },
  {
    "enunciado": "A nuvem pública, por ser acessível via internet, é caracterizada por ser livre e aberta (gratuita) para qualquer cidadão.",
    "correta": "E",
    "tema": "Nuvem Pública",
    "justificativa": "Pública refere-se à disponibilidade de acesso ao mercado geral, não à gratuidade. A maioria é paga (tarifada por uso)."
  },
  {
    "enunciado": "O cluster de servidores físicos é o componente central e único viabilizador da computação em nuvem, dispensando a virtualização.",
    "correta": "E",
    "tema": "Virtualização vs Cluster",
    "justificativa": "A **Virtualização** é a tecnologia habilitadora central da nuvem, permitindo o compartilhamento de recursos (pool) e elasticidade. Apenas clusterizar servidores físicos (sem virtualização) é uma técnica antiga de HPC/HA, mas não define a nuvem moderna."
  },
  {
    "enunciado": "A ideia central da computação em nuvem é possibilitar que aplicações de data centers isolados rodem na Internet em larga escala com uso elástico de recursos.",
    "correta": "C",
    "tema": "Conceito de Nuvem",
    "justificativa": "A nuvem traz a escala da web e a elasticidade para as aplicações corporativas."
  },
  {
    "enunciado": "Nuvens públicas proveem espaço ilimitado em servidores que reúnem as informações de todos os seus usuários sem segregação.",
    "correta": "E",
    "tema": "Segurança e Limites",
    "justificativa": "O espaço não é tecnicamente 'ilimitado' (embora pareça), e os dados dos usuários são segregados logicamente (multitenancy) para garantir privacidade. Eles não são simplesmente 'reunidos' sem controle."
  },
  {
    "enunciado": "Na nuvem privada, os riscos e definições da organização permanecem intactos, pois os recursos são provisionados para uso exclusivo daquela organização.",
    "correta": "C",
    "tema": "Nuvem Privada",
    "justificativa": "Por ser exclusiva, a nuvem privada mantém a governança e o perfil de risco similar ao do data center tradicional, com maior controle."
  },
  {
    "enunciado": "O modelo onde o provedor entrega software (código comum) consumido por muitos clientes (um para muitos), gerenciando hardware e segurança, é o SaaS.",
    "correta": "C",
    "tema": "SaaS",
    "justificativa": "Software as a Service é o modelo de entrega 'um para muitos' da aplicação final."
  },
  {
    "enunciado": "Google Drive e Office 365 são exemplos de soluções IaaS (Infraestrutura como Serviço).",
    "correta": "E",
    "tema": "Exemplos SaaS",
    "justificativa": "Drive e Office 365 são softwares finais para o usuário, logo, são **SaaS**. IaaS seria alugar a VM para instalar o Office (o que não é o caso)."
  },
  {
    "enunciado": "OpenNebula e OpenStack são soluções tecnológicas utilizadas para implementar Infraestrutura como Serviço (IaaS).",
    "correta": "C",
    "tema": "Ferramentas IaaS",
    "justificativa": "OpenStack e OpenNebula são plataformas de software livre para criar e gerenciar nuvens (privadas ou públicas) no modelo IaaS."
  },
  {
    "enunciado": "Uma característica essencial de uma nuvem pública segundo o NIST é a elasticidade rápida.",
    "correta": "C",
    "tema": "NIST Características",
    "justificativa": "Rapid Elasticity é uma das 5 características essenciais."
  },
  {
    "enunciado": "A migração para a nuvem pode ser feita via replicação, onde dados são copiados entre um servidor local e um servidor na nuvem.",
    "correta": "C",
    "tema": "Migração e Replicação",
    "justificativa": "Cenário comum em nuvens híbridas ou backup/DR: replicação contínua de dados."
  },
  {
    "enunciado": "Se uma organização usa duas infraestruturas de cloud privadas separadas geograficamente, ela possui uma nuvem híbrida.",
    "correta": "E",
    "tema": "Definição Híbrida",
    "justificativa": "Ter duas nuvens privadas é apenas ter 'Multi-site Private Cloud'. Para ser **Híbrida**, é obrigatório ter a conexão entre tipos diferentes (Pública + Privada)."
  },
  {
    "enunciado": "Uma infraestrutura como serviço (IaaS) permite implantar aplicativos sem a necessidade de provisionar recursos de rede, armazenamento e processamento.",
    "correta": "E",
    "tema": "IaaS vs PaaS",
    "justificativa": "No IaaS, você **precisa** provisionar e configurar CPU, RAM, Disco e Rede. O modelo que dispensa essa configuração de baixo nível é o PaaS ou Serverless."
  },
  {
    "enunciado": "Projetos que envolvem virtualização de servidores e cloud computing são classificados como projetos de infraestrutura tecnológica.",
    "correta": "C",
    "tema": "Classificação de Projetos",
    "justificativa": "Cloud e virtualização compõem a base (o alicerce) da TI, portanto, infraestrutura."
  },
];