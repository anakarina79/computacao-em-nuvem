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
  }
];