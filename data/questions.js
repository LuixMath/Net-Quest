window.QUESTIONS = [
  {
    "id": 1,
    "question": "Qual é uma característica da Internet?",
    "options": [
      {
        "key": "a",
        "text": "Ela não é governada centralmente."
      },
      {
        "key": "b",
        "text": "Ela usa apenas endereços físicos."
      },
      {
        "key": "c",
        "text": "Ela usa endereçamento IP privado."
      },
      {
        "key": "d",
        "text": "Ela é localizada em locais geográficos específicos."
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "Pense na Internet como uma “rede de redes”, formada por muitas organizações independentes.",
    "explanation": "A Internet não possui um único órgão que controle toda a sua operação. Ela é formada por redes autônomas interconectadas, operadas por diferentes organizações, que cooperam por meio de padrões e protocolos comuns.",
    "category": "Fundamentos"
  },
  {
    "id": 2,
    "question": "Qual é a finalidade do processo de roteamento?",
    "options": [
      {
        "key": "a",
        "text": "Encapsular dados usados para comunicação em uma rede"
      },
      {
        "key": "b",
        "text": "Selecionar os caminhos usados para direcionar o tráfego para as redes de destino"
      },
      {
        "key": "c",
        "text": "Converter um nome de URL em um endereço IP"
      },
      {
        "key": "d",
        "text": "Fornecer transferência segura de arquivos pela Internet"
      },
      {
        "key": "e",
        "text": "Encaminhar tráfego com base em endereços MAC"
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Roteamento está ligado à escolha de caminhos entre redes.",
    "explanation": "Roteamento é o processo de selecionar caminhos para que pacotes cheguem às redes de destino. O encaminhamento usa a decisão de rota para enviar cada pacote ao próximo salto apropriado.",
    "category": "Fundamentos"
  },
  {
    "id": 3,
    "question": "Qual dispositivo deve ser usado para permitir que um host se comunique com outro host em uma rede diferente?",
    "options": [
      {
        "key": "a",
        "text": "Switch"
      },
      {
        "key": "b",
        "text": "Hub"
      },
      {
        "key": "c",
        "text": "Roteador"
      },
      {
        "key": "d",
        "text": "Host"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "Para sair da rede local e alcançar outra rede, o host precisa de um dispositivo de Camada 3.",
    "explanation": "O roteador opera na Camada 3 e interliga redes diferentes. Um switch comum encaminha quadros dentro da mesma LAN; o roteador permite alcançar outra rede.",
    "category": "Fundamentos"
  },
  {
    "id": 4,
    "question": "Um usuário doméstico está procurando uma conexão ISP que forneça transmissão digital de alta velocidade por linhas telefônicas comuns. Qual tipo de conexão ISP deve ser usado?",
    "options": [
      {
        "key": "a",
        "text": "DSL"
      },
      {
        "key": "b",
        "text": "Discada"
      },
      {
        "key": "c",
        "text": "Satélite"
      },
      {
        "key": "d",
        "text": "Modem Celular"
      },
      {
        "key": "e",
        "text": "Modem a Cabo"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "A sigla dessa tecnologia significa Digital Subscriber Line.",
    "explanation": "DSL (Digital Subscriber Line) fornece acesso digital de alta velocidade usando o par de cobre da linha telefônica. Diferentemente da conexão discada, ela foi projetada para banda larga e operação contínua.",
    "category": "Fundamentos"
  },
  {
    "id": 5,
    "question": "Uma empresa está expandindo seus negócios para outros países. Todas as filiais devem permanecer conectadas à sede corporativa o tempo todo. Qual tecnologia de rede é necessária para atender a esse requisito?",
    "options": [
      {
        "key": "a",
        "text": "LAN"
      },
      {
        "key": "b",
        "text": "MAN"
      },
      {
        "key": "c",
        "text": "WAN"
      },
      {
        "key": "d",
        "text": "WLAN"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "A rede precisa cobrir grandes distâncias geográficas e interligar filiais.",
    "explanation": "WAN (Wide Area Network) interliga redes em grandes áreas geográficas, como cidades, estados ou países. É a categoria adequada para manter filiais internacionais conectadas à matriz.",
    "category": "Fundamentos"
  },
  {
    "id": 6,
    "question": "Qual processo básico é usado para selecionar o melhor caminho para o encaminhamento de dados?",
    "options": [
      {
        "key": "a",
        "text": "roteamento"
      },
      {
        "key": "b",
        "text": "comutação"
      },
      {
        "key": "c",
        "text": "endereçamento"
      },
      {
        "key": "d",
        "text": "encapsulamento"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "“Melhor caminho” é uma expressão típica do processo que usa tabelas e protocolos de rotas.",
    "explanation": "Roteamento compara rotas e seleciona o melhor caminho conforme métricas e informações da tabela de roteamento. Comutação, por outro lado, costuma tratar do encaminhamento local de quadros em LANs.",
    "category": "Fundamentos"
  },
  {
    "id": 7,
    "question": "Qual é o termo geral usado para descrever um dado em qualquer camada de um modelo de rede?",
    "options": [
      {
        "key": "a",
        "text": "quadro"
      },
      {
        "key": "b",
        "text": "pacote"
      },
      {
        "key": "c",
        "text": "unidade de dados do protocolo"
      },
      {
        "key": "d",
        "text": "segmento"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "Procure o nome genérico que vale para qualquer camada, não apenas para Ethernet, IP ou TCP.",
    "explanation": "PDU significa Protocol Data Unit, ou unidade de dados do protocolo. É o termo genérico; em camadas específicas a PDU recebe nomes como segmento, pacote e quadro.",
    "category": "Fundamentos"
  },
  {
    "id": 8,
    "question": "Qual protocolo é responsável por controlar o tamanho dos segmentos e a taxa na qual os segmentos são trocados entre um cliente web e um servidor web?",
    "options": [
      {
        "key": "a",
        "text": "TCP"
      },
      {
        "key": "b",
        "text": "IP"
      },
      {
        "key": "c",
        "text": "HTTP"
      },
      {
        "key": "d",
        "text": "Ethernet"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "O protocolo de transporte confiável controla fluxo e segmentação.",
    "explanation": "TCP é o protocolo de transporte confiável que segmenta dados e usa mecanismos de controle de fluxo. Ele pode ajustar quanto dado fica em trânsito entre cliente e servidor.",
    "category": "Fundamentos"
  },
  {
    "id": 9,
    "question": "Um administrador de rede está solucionando problemas de conectividade em um servidor. Usando um testador, o administrador percebe que os sinais gerados pela placa de rede do servidor estão distorcidos e não podem ser utilizados. Em qual camada do modelo OSI o erro é categorizado?",
    "options": [
      {
        "key": "a",
        "text": "camada de apresentação"
      },
      {
        "key": "b",
        "text": "camada de rede"
      },
      {
        "key": "c",
        "text": "camada física"
      },
      {
        "key": "d",
        "text": "camada de enlace de dados"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "Sinal elétrico/óptico/radioelétrico deformado é um problema do nível mais baixo do OSI.",
    "explanation": "A Camada Física trata da transmissão dos bits como sinais elétricos, ópticos ou de rádio. Se os sinais estão distorcidos e inutilizáveis, o problema é classificado nessa camada.",
    "category": "Fundamentos"
  },
  {
    "id": 10,
    "question": "Qual dispositivo desempenha a função de determinar o caminho que as mensagens devem percorrer através das inter-redes?",
    "options": [
      {
        "key": "a",
        "text": "um roteador"
      },
      {
        "key": "b",
        "text": "um firewall"
      },
      {
        "key": "c",
        "text": "um servidor web"
      },
      {
        "key": "d",
        "text": "um modem DSL"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "O dispositivo que interliga redes consulta rotas para decidir o próximo salto.",
    "explanation": "Roteadores analisam informações de Camada 3 e tabelas de roteamento para decidir por onde a mensagem deve seguir entre redes.",
    "category": "Fundamentos"
  },
  {
    "id": 11,
    "question": "Quais são os dois critérios usados para ajudar a selecionar um meio de rede entre vários meios de rede? (Escolha dois.)",
    "options": [
      {
        "key": "a",
        "text": "os tipos de dados que precisam ser priorizados"
      },
      {
        "key": "b",
        "text": "o custo dos dispositivos finais utilizados na rede"
      },
      {
        "key": "c",
        "text": "a distância que o meio selecionado pode transportar um sinal com sucesso"
      },
      {
        "key": "d",
        "text": "o número de dispositivos intermediários instalados na rede"
      },
      {
        "key": "e",
        "text": "o ambiente onde o meio selecionado será instalado"
      }
    ],
    "answers": [
      "c",
      "e"
    ],
    "required": 2,
    "hint": "Ao escolher um meio, pense em alcance físico e no local onde o cabo/rádio será instalado.",
    "explanation": "Dois critérios centrais são a distância máxima em que o meio mantém o sinal utilizável e o ambiente de instalação. Fontes de interferência, umidade, uso externo e infraestrutura física podem influenciar a escolha.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 12,
    "question": "Quais são as duas afirmações que descrevem os dispositivos intermediários? (Escolha dois.)",
    "options": [
      {
        "key": "a",
        "text": "Os dispositivos intermediários geram conteúdo de dados."
      },
      {
        "key": "b",
        "text": "Os dispositivos intermediários alteram o conteúdo de dados."
      },
      {
        "key": "c",
        "text": "Os dispositivos intermediários direcionam o caminho dos dados."
      },
      {
        "key": "d",
        "text": "Os dispositivos intermediários conectam hosts individuais à rede."
      },
      {
        "key": "e",
        "text": "Os dispositivos intermediários iniciam o processo de encapsulamento."
      }
    ],
    "answers": [
      "c",
      "d"
    ],
    "required": 2,
    "hint": "Dispositivos intermediários ficam entre hosts: conectam e encaminham, não criam o conteúdo do usuário.",
    "explanation": "Dispositivos intermediários, como switches e roteadores, conectam hosts à infraestrutura e direcionam o caminho dos dados. O conteúdo é criado/consumido nos dispositivos finais.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 13,
    "question": "Quais são as duas funções dos dispositivos finais em uma rede? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "Eles originam os dados que fluem pela rede."
      },
      {
        "key": "b",
        "text": "Eles direcionam os dados por caminhos alternativos em caso de falhas de link."
      },
      {
        "key": "c",
        "text": "Eles filtram o fluxo de dados para aumentar a segurança."
      },
      {
        "key": "d",
        "text": "Eles são a interface entre os humanos e a rede de comunicação."
      },
      {
        "key": "e",
        "text": "Eles fornecem o canal pelo qual a mensagem da rede trafega."
      }
    ],
    "answers": [
      "a",
      "d"
    ],
    "required": 2,
    "hint": "Dispositivos finais são a origem/destino da comunicação e a interface do usuário com a rede.",
    "explanation": "Dispositivos finais, como PCs e smartphones, originam ou recebem dados e servem de interface entre as pessoas/aplicações e a rede. O encaminhamento por rotas alternativas é tarefa de dispositivos intermediários.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 14,
    "question": "Qual área da rede uma equipe de TI de uma faculdade provavelmente teria que redesenhar como resultado direto de muitos alunos trazerem seus próprios tablets e smartphones para a escola para acessar os recursos escolares?",
    "options": [
      {
        "key": "a",
        "text": "extranet"
      },
      {
        "key": "b",
        "text": "intranet"
      },
      {
        "key": "c",
        "text": "LAN com fio"
      },
      {
        "key": "d",
        "text": "LAN sem fio"
      },
      {
        "key": "e",
        "text": "WAN sem fio"
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "Tablets e smartphones normalmente entram pela infraestrutura sem fio do campus.",
    "explanation": "Com muitos dispositivos móveis, a infraestrutura que precisa crescer é a WLAN (LAN sem fio): mais cobertura, capacidade de rádio, pontos de acesso e planejamento de canais.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 15,
    "question": "Um funcionário de uma filial está criando uma cotação para um cliente. Para fazer isso, o funcionário precisa acessar informações confidenciais de preços de servidores internos na matriz. Que tipo de rede o funcionário acessaria?",
    "options": [
      {
        "key": "a",
        "text": "uma intranet"
      },
      {
        "key": "b",
        "text": "a Internet"
      },
      {
        "key": "c",
        "text": "uma extranet"
      },
      {
        "key": "d",
        "text": "uma rede local"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "Informações internas e confidenciais de uma organização pertencem à rede privada corporativa.",
    "explanation": "Uma intranet é a rede privada usada dentro de uma organização. Mesmo acessada remotamente por uma filial, ela continua oferecendo recursos internos restritos aos usuários autorizados.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 16,
    "question": "Quais duas opções de conexão fornecem uma conexão de Internet de alta largura de banda sempre ativa para computadores em um escritório doméstico? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "celular"
      },
      {
        "key": "b",
        "text": "DSL"
      },
      {
        "key": "c",
        "text": "satélite"
      },
      {
        "key": "d",
        "text": "cabo"
      },
      {
        "key": "e",
        "text": "telefone discado"
      }
    ],
    "answers": [
      "b",
      "d"
    ],
    "required": 2,
    "hint": "Procure duas tecnologias residenciais cabeadas de banda larga e conexão contínua.",
    "explanation": "DSL e cabo são opções clássicas de banda larga fixa sempre ativa para residências/escritórios domésticos. A conexão discada não é de alta largura de banda nem permanece ativa da mesma forma.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 17,
    "question": "Quais são as duas opções de conexão à Internet que não exigem a instalação de cabos físicos no prédio? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "DSL"
      },
      {
        "key": "b",
        "text": "celular"
      },
      {
        "key": "c",
        "text": "satélite"
      },
      {
        "key": "d",
        "text": "discado"
      },
      {
        "key": "e",
        "text": "linha dedicada alugada"
      }
    ],
    "answers": [
      "b",
      "c"
    ],
    "required": 2,
    "hint": "Quais opções chegam ao prédio sem exigir um cabo do provedor até o imóvel?",
    "explanation": "Celular e satélite podem fornecer o enlace de acesso sem instalar um cabo físico do provedor no prédio. DSL, discado e linha dedicada dependem de uma ligação física.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 18,
    "question": "Qual termo descreve o estado de uma rede quando a demanda pelos recursos da rede excede a capacidade disponível?",
    "options": [
      {
        "key": "a",
        "text": "convergência"
      },
      {
        "key": "b",
        "text": "congestionamento"
      },
      {
        "key": "c",
        "text": "otimização"
      },
      {
        "key": "d",
        "text": "sincronização"
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Quando entra mais tráfego do que a infraestrutura consegue atender, forma-se uma fila e a rede satura.",
    "explanation": "Congestionamento ocorre quando a demanda de tráfego excede temporariamente a capacidade dos enlaces/roteadores. Isso aumenta filas, atraso e pode causar perdas.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 19,
    "question": "Qual expressão define com precisão o termo largura de banda?",
    "options": [
      {
        "key": "a",
        "text": "um método para limitar o impacto de uma falha de hardware ou software na rede"
      },
      {
        "key": "b",
        "text": "uma medida da capacidade de transporte de dados da mídia"
      },
      {
        "key": "c",
        "text": "um estado em que a demanda pelos recursos da rede excede a capacidade disponível"
      },
      {
        "key": "d",
        "text": "um conjunto de técnicas para gerenciar a utilização dos recursos da rede"
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Largura de banda é capacidade, não necessariamente o que foi realmente transferido.",
    "explanation": "Largura de banda descreve a capacidade de transporte de dados de um meio ou enlace. Ela é diferente do throughput, que representa a taxa efetivamente alcançada.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 20,
    "question": "Quais são as duas funções dos dispositivos intermediários em uma rede? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "Eles são a principal fonte e provedores de informações e serviços para os dispositivos finais."
      },
      {
        "key": "b",
        "text": "Eles executam aplicativos que oferecem suporte à colaboração para negócios."
      },
      {
        "key": "c",
        "text": "Eles formam a interface entre a rede humana e a rede de comunicação subjacente."
      },
      {
        "key": "d",
        "text": "Eles direcionam os dados por caminhos alternativos quando há uma falha de link."
      },
      {
        "key": "e",
        "text": "Eles filtram o fluxo de dados com base nas configurações de segurança."
      }
    ],
    "answers": [
      "d",
      "e"
    ],
    "required": 2,
    "hint": "Equipamentos intermediários podem desviar caminhos em falhas e aplicar políticas de segurança.",
    "explanation": "Dispositivos intermediários podem redirecionar tráfego quando um enlace falha e também filtrar pacotes/quadros segundo políticas de segurança. Produzir conteúdo é função dos sistemas finais.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 21,
    "question": "O que é a Internet?",
    "options": [
      {
        "key": "a",
        "text": "É uma rede baseada na tecnologia Ethernet."
      },
      {
        "key": "b",
        "text": "Ela fornece acesso à rede para dispositivos móveis."
      },
      {
        "key": "c",
        "text": "Ela fornece conexões por meio de redes globais interconectadas."
      },
      {
        "key": "d",
        "text": "É uma rede privada para uma organização com conexões LAN e WAN."
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "Não pense em uma única tecnologia de acesso: Internet é a interconexão global de muitas redes.",
    "explanation": "A Internet é uma rede de redes: muitas redes públicas e privadas interconectadas globalmente, usando a família de protocolos TCP/IP para comunicação.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 22,
    "question": "Que tipo de tráfego de rede requer QoS?",
    "options": [
      {
        "key": "a",
        "text": "e-mail"
      },
      {
        "key": "b",
        "text": "compras online"
      },
      {
        "key": "c",
        "text": "videoconferência"
      },
      {
        "key": "d",
        "text": "wiki"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "QoS é mais importante quando atraso e variação de atraso prejudicam a experiência em tempo real.",
    "explanation": "Videoconferência é sensível a atraso, jitter e perda. QoS ajuda a priorizar esse tráfego em relação a aplicações menos sensíveis ao tempo, como e-mail.",
    "category": "Acesso & desempenho"
  },
  {
    "id": 23,
    "question": "Qual método pode ser usado por dois computadores para garantir que os pacotes não sejam descartados devido ao envio rápido e excessivo de dados?",
    "options": [
      {
        "key": "a",
        "text": "encapsulamento"
      },
      {
        "key": "b",
        "text": "controle de fluxo"
      },
      {
        "key": "c",
        "text": "método de acesso"
      },
      {
        "key": "d",
        "text": "tempo limite de resposta"
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "O receptor precisa impedir que o emissor envie mais rápido do que ele consegue processar.",
    "explanation": "Controle de fluxo evita que o emissor envie dados mais rapidamente do que o receptor consegue receber/processar. Em TCP, a janela de recepção participa desse mecanismo.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 24,
    "question": "Qual processo é usado para colocar uma mensagem dentro de outra para transferência da origem para o destino?",
    "options": [
      {
        "key": "a",
        "text": "controle de acesso"
      },
      {
        "key": "b",
        "text": "decodificação"
      },
      {
        "key": "c",
        "text": "encapsulamento"
      },
      {
        "key": "d",
        "text": "controle de fluxo"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "Cada camada coloca informações próprias ao redor dos dados recebidos da camada superior.",
    "explanation": "Encapsulamento acontece quando uma camada recebe dados da camada superior e adiciona suas próprias informações de controle, formando uma nova PDU para transmissão.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 25,
    "question": "Um cliente web está enviando uma solicitação de uma página web para um servidor web. Da perspectiva do cliente, qual é a ordem correta da pilha de protocolos usada para preparar a solicitação para transmissão?",
    "options": [
      {
        "key": "a",
        "text": "HTTP, IP, TCP, Ethernet"
      },
      {
        "key": "b",
        "text": "HTTP, TCP, IP, Ethernet"
      },
      {
        "key": "c",
        "text": "Ethernet, TCP, IP, HTTP"
      },
      {
        "key": "d",
        "text": "Ethernet, IP, TCP, HTTP"
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Comece na aplicação e desça: aplicação → transporte → internet/rede → acesso à rede.",
    "explanation": "Ao enviar uma página, a solicitação nasce em HTTP; é entregue ao TCP, depois ao IP e finalmente encapsulada em Ethernet para o enlace local.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 26,
    "question": "Qual afirmação está correta sobre protocolos de rede?",
    "options": [
      {
        "key": "a",
        "text": "Os protocolos de rede definem o tipo de hardware utilizado e como ele é montado em racks."
      },
      {
        "key": "b",
        "text": "Eles definem como as mensagens são trocadas entre a origem e o destino."
      },
      {
        "key": "c",
        "text": "Todos eles funcionam na camada de acesso à rede TCP/IP."
      },
      {
        "key": "d",
        "text": "Eles são necessários apenas para a troca de mensagens entre dispositivos em redes remotas."
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Protocolos são regras de comunicação: formato, ordem e tratamento das mensagens.",
    "explanation": "Protocolos de rede definem regras para que origem e destino troquem mensagens de forma compreensível: formato, ordem, significado e ações diante de eventos.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 27,
    "question": "Qual afirmação é verdadeira sobre os modelos TCP/IP e OSI?",
    "options": [
      {
        "key": "a",
        "text": "A camada de transporte TCP/IP e a camada 4 OSI fornecem serviços e funções semelhantes."
      },
      {
        "key": "b",
        "text": "A camada de acesso à rede TCP/IP tem funções semelhantes às da camada de rede OSI."
      },
      {
        "key": "c",
        "text": "A camada 7 OSI e a camada de aplicação TCP/IP fornecem funções idênticas."
      },
      {
        "key": "d",
        "text": "As três primeiras camadas OSI descrevem serviços gerais que também são fornecidos pela camada de internet TCP/IP."
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "Compare as funções, não apenas os nomes, das camadas de transporte nos dois modelos.",
    "explanation": "A camada de transporte do TCP/IP e a Camada 4 do OSI exercem funções equivalentes, como comunicação fim a fim e uso de TCP/UDP no modelo TCP/IP.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 28,
    "question": "Qual é a vantagem de usar padrões para desenvolver e implementar protocolos?",
    "options": [
      {
        "key": "a",
        "text": "Um protocolo específico só pode ser implementado por um fabricante."
      },
      {
        "key": "b",
        "text": "Produtos de diferentes fabricantes podem interoperar com sucesso."
      },
      {
        "key": "c",
        "text": "Diferentes fabricantes são livres para aplicar requisitos diferentes ao implementar um protocolo."
      },
      {
        "key": "d",
        "text": "Os padrões oferecem flexibilidade para que os fabricantes criem dispositivos que atendam a requisitos exclusivos."
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Padrões existem para permitir que implementações de fabricantes diferentes “falem a mesma língua”.",
    "explanation": "Padrões comuns permitem interoperabilidade. Equipamentos e softwares de fabricantes diferentes conseguem trocar dados porque seguem a mesma especificação.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 29,
    "question": "O que são protocolos proprietários?",
    "options": [
      {
        "key": "a",
        "text": "Protocolos desenvolvidos por organizações privadas para operar em hardware de qualquer fornecedor"
      },
      {
        "key": "b",
        "text": "Protocolos que podem ser usados livremente por qualquer organização ou fornecedor"
      },
      {
        "key": "c",
        "text": "Protocolos desenvolvidos por organizações que têm controle sobre sua definição e operação"
      },
      {
        "key": "d",
        "text": "Um conjunto de protocolos conhecido como conjunto de protocolos TCP/IP"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "“Proprietário” significa que uma organização controla a especificação e sua evolução.",
    "explanation": "Um protocolo proprietário é definido e controlado por uma organização que decide sua especificação e evolução. Isso contrasta com padrões abertos desenvolvidos por organizações de padronização/comunidade.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 30,
    "question": "Qual é a vantagem de dispositivos de rede usarem protocolos de padrão aberto?",
    "options": [
      {
        "key": "a",
        "text": "As comunicações de rede se limitam à transferência de dados entre dispositivos do mesmo fornecedor."
      },
      {
        "key": "b",
        "text": "Um host cliente e um servidor executando sistemas operacionais diferentes podem trocar dados com sucesso."
      },
      {
        "key": "c",
        "text": "O acesso à Internet pode ser controlado por um único ISP em cada mercado."
      },
      {
        "key": "d",
        "text": "A concorrência e a inovação são limitadas a tipos específicos de produtos."
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Padrões abertos evitam aprisionamento a um único fabricante.",
    "explanation": "Protocolos abertos permitem que sistemas operacionais e equipamentos diferentes interoperem. A comunicação não fica restrita a um único fornecedor.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 31,
    "question": "Quais três camadas do modelo OSI são comparáveis em função à camada de aplicação do modelo TCP/IP? (Escolha três.)",
    "options": [
      {
        "key": "a",
        "text": "aplicação"
      },
      {
        "key": "b",
        "text": "apresentação"
      },
      {
        "key": "c",
        "text": "sessão"
      },
      {
        "key": "d",
        "text": "transporte"
      },
      {
        "key": "e",
        "text": "enlace de dados"
      },
      {
        "key": "f",
        "text": "física"
      },
      {
        "key": "g",
        "text": "rede"
      }
    ],
    "answers": [
      "a",
      "b",
      "c"
    ],
    "required": 3,
    "hint": "No TCP/IP, três camadas superiores do OSI são agrupadas em uma só.",
    "explanation": "A camada de aplicação do TCP/IP reúne as funções de Aplicação, Apresentação e Sessão do OSI. Por isso, as três alternativas corretas são essas camadas superiores.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 32,
    "question": "Em qual camada do modelo OSI um endereço lógico seria encapsulado?",
    "options": [
      {
        "key": "a",
        "text": "camada física"
      },
      {
        "key": "b",
        "text": "camada de enlace de dados"
      },
      {
        "key": "c",
        "text": "camada de rede"
      },
      {
        "key": "d",
        "text": "camada de transporte"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "Endereço lógico é o endereço IP.",
    "explanation": "Endereços lógicos são endereços IP, adicionados na Camada de Rede (Camada 3). A Camada 2 usa endereços físicos, como MAC.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 33,
    "question": "Qual formato de PDU é usado quando bits são recebidos do meio de rede pela placa de rede de um host?",
    "options": [
      {
        "key": "a",
        "text": "arquivo"
      },
      {
        "key": "b",
        "text": "quadro"
      },
      {
        "key": "c",
        "text": "pacote"
      },
      {
        "key": "d",
        "text": "segmento"
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Quando a placa de rede recebe os bits e os interpreta na Camada 2, a PDU é um quadro.",
    "explanation": "A placa de rede recebe bits na Camada 1 e os interpreta como um quadro na Camada 2. Portanto, a PDU tratada nesse ponto é o quadro.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 34,
    "question": "Qual PDU é processada quando um computador host está desencapsulando uma mensagem na camada de transporte do modelo TCP/IP?",
    "options": [
      {
        "key": "a",
        "text": "bits"
      },
      {
        "key": "b",
        "text": "quadro"
      },
      {
        "key": "c",
        "text": "pacote"
      },
      {
        "key": "d",
        "text": "segmento"
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "Na camada de transporte, a PDU normalmente recebe o nome de segmento.",
    "explanation": "Ao desencapsular na camada de transporte, o host processa a PDU de transporte: o segmento. Em camadas inferiores aparecem pacote, quadro e bits.",
    "category": "Protocolos & camadas"
  },
  {
    "id": 35,
    "question": "Qual endereço uma placa de rede usa ao decidir se aceita um quadro?",
    "options": [
      {
        "key": "a",
        "text": "endereço IP de origem"
      },
      {
        "key": "b",
        "text": "endereço MAC de origem"
      },
      {
        "key": "c",
        "text": "endereço IP de destino"
      },
      {
        "key": "d",
        "text": "endereço MAC de destino"
      },
      {
        "key": "e",
        "text": "endereço Ethernet de origem"
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "A placa de rede decide sobre um quadro olhando o endereço físico de destino.",
    "explanation": "A NIC verifica o endereço MAC de destino do quadro para decidir se ele é destinado a ela (ou a um endereço de broadcast/multicast que deva aceitar).",
    "category": "Protocolos & camadas"
  },
  {
    "id": 36,
    "question": "O que é indicado pelo termo vazão (throughput)?",
    "options": [
      {
        "key": "a",
        "text": "a taxa de transferência de dados garantida oferecida por um ISP"
      },
      {
        "key": "b",
        "text": "a capacidade de um determinado meio de transportar dados"
      },
      {
        "key": "c",
        "text": "a quantidade de dados utilizáveis transferidos pelo meio"
      },
      {
        "key": "d",
        "text": "a quantidade de bits transferidos pelo meio em um determinado período"
      },
      {
        "key": "e",
        "text": "o tempo que uma mensagem leva para chegar do remetente ao destinatário"
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "Throughput é a taxa realmente observada de bits atravessando o meio ao longo do tempo.",
    "explanation": "Throughput é a quantidade/taxa de bits efetivamente transferidos pelo meio em um intervalo de tempo. Não é a capacidade teórica máxima; essa ideia está associada à largura de banda.",
    "category": "Meios & Ethernet"
  },
  {
    "id": 37,
    "question": "Um administrador de rede percebe que um cabeamento Ethernet recém-instalado está transportando sinais de dados corrompidos e distorcidos. O novo cabeamento foi instalado no teto, próximo a lâmpadas fluorescentes e equipamentos elétricos. Quais dois fatores podem interferir no cabeamento de cobre e resultar em distorção de sinal e corrupção de dados? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "EMI"
      },
      {
        "key": "b",
        "text": "diafonia (crosstalk)"
      },
      {
        "key": "c",
        "text": "RFI"
      },
      {
        "key": "d",
        "text": "atenuação de sinal"
      },
      {
        "key": "e",
        "text": "extensão do cabeamento"
      }
    ],
    "answers": [
      "a",
      "c"
    ],
    "required": 2,
    "hint": "Lâmpadas fluorescentes e equipamentos elétricos são fontes clássicas de interferência eletromagnética/radiofrequência.",
    "explanation": "Equipamentos elétricos e lâmpadas fluorescentes podem gerar EMI (interferência eletromagnética) e RFI (interferência de radiofrequência), degradando sinais em cobre.",
    "category": "Meios & Ethernet"
  },
  {
    "id": 38,
    "question": "Qual característica descreve a diafonia?",
    "options": [
      {
        "key": "a",
        "text": "a distorção do sinal de rede causada por iluminação fluorescente"
      },
      {
        "key": "b",
        "text": "a distorção das mensagens transmitidas por sinais transportados por fios adjacentes"
      },
      {
        "key": "c",
        "text": "o enfraquecimento do sinal de rede em cabos longos"
      },
      {
        "key": "d",
        "text": "a perda do sinal sem fio em distâncias excessivas do ponto de acesso"
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Diafonia acontece quando o sinal de um par de fios interfere em outro par adjacente.",
    "explanation": "Diafonia (crosstalk) é a interferência produzida quando sinais de fios/pares adjacentes se acoplam e distorcem a transmissão.",
    "category": "Meios & Ethernet"
  },
  {
    "id": 39,
    "question": "Qual técnica é usada com cabos UTP para ajudar a proteger contra interferência de sinal causada por diafonia?",
    "options": [
      {
        "key": "a",
        "text": "torcer os fios em pares"
      },
      {
        "key": "b",
        "text": "envolver os pares de fios com uma blindagem de alumínio"
      },
      {
        "key": "c",
        "text": "envolver os cabos em uma capa plástica flexível"
      },
      {
        "key": "d",
        "text": "terminar o cabo com conectores aterrados especiais"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "O próprio nome “par trançado” revela a técnica usada para cancelar interferências.",
    "explanation": "No UTP, os condutores são torcidos em pares. A geometria da torção ajuda a cancelar interferências induzidas e reduz a diafonia.",
    "category": "Meios & Ethernet"
  },
  {
    "id": 40,
    "question": "Qual é uma das vantagens de usar cabeamento de fibra óptica em vez de cabeamento de cobre?",
    "options": [
      {
        "key": "a",
        "text": "Geralmente é mais barato que cabeamento de cobre."
      },
      {
        "key": "b",
        "text": "Pode ser instalado em curvas acentuadas."
      },
      {
        "key": "c",
        "text": "É mais fácil de terminar e instalar do que cabeamento de cobre."
      },
      {
        "key": "d",
        "text": "É capaz de transportar sinais muito mais longe do que cabos de cobre."
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "Fibra sofre baixa atenuação e pode cobrir distâncias maiores.",
    "explanation": "Fibra óptica pode alcançar distâncias muito maiores porque transporta luz e apresenta baixa atenuação, além de ser imune a interferências eletromagnéticas.",
    "category": "Meios & Ethernet"
  },
  {
    "id": 41,
    "question": "Por que dois fios de fibra óptica são usados para uma única conexão de fibra óptica?",
    "options": [
      {
        "key": "a",
        "text": "Os dois fios permitem que os dados trafeguem por distâncias maiores sem degradação."
      },
      {
        "key": "b",
        "text": "Eles impedem que a diafonia cause interferência na conexão."
      },
      {
        "key": "c",
        "text": "Eles aumentam a velocidade de transmissão dos dados."
      },
      {
        "key": "d",
        "text": "Eles permitem conectividade full-duplex."
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "Em muitas conexões de fibra, um fio transmite e o outro recebe ao mesmo tempo.",
    "explanation": "Dois fios permitem full-duplex: em uma implementação típica, um caminho é usado para transmissão e o outro para recepção simultânea.",
    "category": "Meios & Ethernet"
  },
  {
    "id": 42,
    "question": "Qual camada do modelo OSI é responsável por especificar o método de encapsulamento usado para tipos específicos de mídia?",
    "options": [
      {
        "key": "a",
        "text": "aplicação"
      },
      {
        "key": "b",
        "text": "transporte"
      },
      {
        "key": "c",
        "text": "enlace de dados"
      },
      {
        "key": "d",
        "text": "físico"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "O formato de quadro e o acesso ao meio são responsabilidades da Camada 2.",
    "explanation": "A Camada de Enlace de Dados define como pacotes são encapsulados em quadros para um meio específico e como o acesso ao meio é controlado.",
    "category": "Meios & Ethernet"
  },
  {
    "id": 43,
    "question": "Quais são os dois serviços executados pela camada de enlace de dados do modelo OSI? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "Criptografa pacotes de dados."
      },
      {
        "key": "b",
        "text": "Determina o caminho para encaminhar os pacotes."
      },
      {
        "key": "c",
        "text": "Aceita pacotes da Camada 3 e os encapsula em quadros."
      },
      {
        "key": "d",
        "text": "Fornece controle de acesso à mídia e realiza detecção de erros."
      },
      {
        "key": "e",
        "text": "Monitora a comunicação da Camada 2 construindo uma tabela de endereços MAC."
      }
    ],
    "answers": [
      "c",
      "d"
    ],
    "required": 2,
    "hint": "A Camada 2 recebe pacotes da Camada 3 e os transforma em quadros, além de controlar acesso ao meio/erros.",
    "explanation": "A camada de enlace recebe pacotes da Camada 3 e os encapsula em quadros. Ela também implementa controle de acesso ao meio e mecanismos de detecção de erros do quadro.",
    "category": "Meios & Ethernet"
  },
  {
    "id": 44,
    "question": "Qual método de transferência de dados permite que informações sejam enviadas e recebidas simultaneamente?",
    "options": [
      {
        "key": "a",
        "text": "full duplex"
      },
      {
        "key": "b",
        "text": "half duplex"
      },
      {
        "key": "c",
        "text": "multiplex"
      },
      {
        "key": "d",
        "text": "simplex"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "“Duplex” indica direção; procure a opção que permite os dois sentidos ao mesmo tempo.",
    "explanation": "Full duplex permite transmitir e receber ao mesmo tempo. Half duplex alterna o sentido; simplex trabalha apenas em um sentido.",
    "category": "Meios & Ethernet"
  },
  {
    "id": 45,
    "question": "Qual é a definição de largura de banda?",
    "options": [
      {
        "key": "a",
        "text": "a medida de dados utilizáveis transferidos em um determinado período de tempo"
      },
      {
        "key": "b",
        "text": "a velocidade com que os bits trafegam na rede"
      },
      {
        "key": "c",
        "text": "a medida da transferência de bits através do meio físico em um determinado período de tempo"
      },
      {
        "key": "d",
        "text": "a quantidade de dados que pode fluir de um lugar para outro em um determinado período de tempo"
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "A definição correta fala em capacidade de transportar dados por unidade de tempo.",
    "explanation": "Largura de banda é a capacidade de um enlace/meio de transportar dados em determinado período, normalmente expressa em bits por segundo.",
    "category": "Meios & Ethernet"
  },
  {
    "id": 46,
    "question": "Qual afirmação descreve a Ethernet?",
    "options": [
      {
        "key": "a",
        "text": "Ela define o tipo de LAN mais comum no mundo."
      },
      {
        "key": "b",
        "text": "É o padrão obrigatório das Camadas 1 e 2 para comunicação na Internet."
      },
      {
        "key": "c",
        "text": "Ela define um modelo padrão usado para descrever como as redes funcionam."
      },
      {
        "key": "d",
        "text": "Ela conecta vários sites, como roteadores localizados em diferentes países."
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "Ethernet é a tecnologia LAN cabeada predominante.",
    "explanation": "Ethernet é a tecnologia de LAN mais difundida. Ela define padrões de Camada 1 e Camada 2 para redes locais, mas não é uma exigência para todos os enlaces da Internet.",
    "category": "Meios & Ethernet"
  },
  {
    "id": 47,
    "question": "Qual característica da camada de rede no modelo OSI permite o transporte de pacotes para vários tipos de comunicação entre vários hosts?",
    "options": [
      {
        "key": "a",
        "text": "o desencapsulamento de cabeçalhos de camadas inferiores"
      },
      {
        "key": "b",
        "text": "a seleção de caminhos e o direcionamento de pacotes para o destino"
      },
      {
        "key": "c",
        "text": "a capacidade de operar independentemente dos dados transportados em cada pacote"
      },
      {
        "key": "d",
        "text": "a capacidade de gerenciar o transporte de dados entre processos em execução nos hosts"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "A camada de rede deve transportar pacotes sem depender do conteúdo da aplicação.",
    "explanation": "IP consegue carregar dados de diferentes aplicações porque a camada de rede trata o pacote sem depender do conteúdo que ele transporta. Isso permite múltiplos tipos de comunicação sobre a mesma infraestrutura.",
    "category": "IP & transporte"
  },
  {
    "id": 48,
    "question": "Quais são as duas características do IP? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "não requer uma conexão ponta a ponta dedicada"
      },
      {
        "key": "b",
        "text": "opera independentemente do meio de rede"
      },
      {
        "key": "c",
        "text": "retransmite pacotes em caso de erros"
      },
      {
        "key": "d",
        "text": "remonta pacotes fora de ordem na ordem correta no receptor"
      },
      {
        "key": "e",
        "text": "garante a entrega dos pacotes"
      }
    ],
    "answers": [
      "a",
      "b"
    ],
    "required": 2,
    "hint": "IP é sem conexão e independente da tecnologia de enlace usada por baixo.",
    "explanation": "IP é um protocolo sem conexão e funciona independentemente do meio de rede de Camada 2. Ele oferece melhor esforço: não garante entrega, ordenação nem retransmissão.",
    "category": "IP & transporte"
  },
  {
    "id": 49,
    "question": "Quando um protocolo sem conexão está em uso em uma camada inferior do modelo OSI, como os dados ausentes são detectados e retransmitidos, se necessário?",
    "options": [
      {
        "key": "a",
        "text": "Confirmações sem conexão são usadas para solicitar retransmissão."
      },
      {
        "key": "b",
        "text": "Protocolos orientados à conexão de camada superior rastreiam os dados recebidos e podem solicitar retransmissão dos protocolos de nível superior no host remetente."
      },
      {
        "key": "c",
        "text": "Protocolos IP da camada de rede gerenciam as sessões de comunicação se os serviços de transporte orientados à conexão não estiverem disponíveis."
      },
      {
        "key": "d",
        "text": "O processo de entrega de melhor esforço garante que todos os pacotes enviados sejam recebidos."
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "A confiabilidade pode ser fornecida por um protocolo de camada superior, como TCP.",
    "explanation": "Uma camada inferior sem conexão pode perder dados; a confiabilidade é tratada, quando necessária, por protocolos de camada superior orientados à conexão, como TCP, que acompanham o recebimento e solicitam retransmissões.",
    "category": "IP & transporte"
  },
  {
    "id": 50,
    "question": "Quais duas características estão associadas às sessões UDP? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "Os dispositivos de destino recebem tráfego com atraso mínimo."
      },
      {
        "key": "b",
        "text": "Os segmentos de dados transmitidos são rastreados."
      },
      {
        "key": "c",
        "text": "Os dispositivos de destino remontam as mensagens e as passam para um aplicativo."
      },
      {
        "key": "d",
        "text": "Os dados recebidos não são confirmados."
      },
      {
        "key": "e",
        "text": "Os pacotes de dados não confirmados são retransmitidos."
      }
    ],
    "answers": [
      "a",
      "d"
    ],
    "required": 2,
    "hint": "UDP reduz sobrecarga: não confirma recebimento e favorece baixa latência.",
    "explanation": "UDP não usa confirmações nem retransmissões próprias, reduzindo atraso e sobrecarga. Isso o torna apropriado quando baixa latência importa mais do que recuperar cada unidade perdida.",
    "category": "IP & transporte"
  },
  {
    "id": 51,
    "question": "Um dispositivo host precisa enviar um grande arquivo de vídeo pela rede enquanto fornece comunicação de dados para outros usuários. Qual recurso permitirá que diferentes fluxos de comunicação ocorram simultaneamente, sem que um único fluxo de dados utilize toda a largura de banda disponível?",
    "options": [
      {
        "key": "a",
        "text": "tamanho da janela"
      },
      {
        "key": "b",
        "text": "multiplexação"
      },
      {
        "key": "c",
        "text": "números de porta"
      },
      {
        "key": "d",
        "text": "confirmações"
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Vários fluxos compartilhando a mesma comunicação é a ideia de multiplexação.",
    "explanation": "Multiplexação permite que vários fluxos/aplicações compartilhem simultaneamente os recursos de transporte e rede, em vez de um único fluxo monopolizar a comunicação.",
    "category": "IP & transporte"
  },
  {
    "id": 52,
    "question": "A camada de aplicação do modelo TCP/IP executa as funções de quais três camadas do modelo OSI? (Escolha três.)",
    "options": [
      {
        "key": "a",
        "text": "física"
      },
      {
        "key": "b",
        "text": "sessão"
      },
      {
        "key": "c",
        "text": "rede"
      },
      {
        "key": "d",
        "text": "apresentação"
      },
      {
        "key": "e",
        "text": "enlace de dados"
      },
      {
        "key": "f",
        "text": "transporte"
      },
      {
        "key": "g",
        "text": "aplicação"
      }
    ],
    "answers": [
      "b",
      "d",
      "g"
    ],
    "required": 3,
    "hint": "TCP/IP reúne sessão, apresentação e aplicação do OSI em sua camada de aplicação.",
    "explanation": "A aplicação TCP/IP incorpora as funções que o OSI separa em sessão, apresentação e aplicação. As demais camadas possuem correspondências diferentes na pilha.",
    "category": "IP & transporte"
  },
  {
    "id": 53,
    "question": "Qual camada no modelo TCP/IP é usada para formatar, compactar e criptografar dados?",
    "options": [
      {
        "key": "a",
        "text": "interconexão de redes"
      },
      {
        "key": "b",
        "text": "sessão"
      },
      {
        "key": "c",
        "text": "apresentação"
      },
      {
        "key": "d",
        "text": "aplicação"
      },
      {
        "key": "e",
        "text": "acesso à rede"
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "No TCP/IP, tarefas que o OSI separa em apresentação ficam dentro da camada de aplicação.",
    "explanation": "No modelo TCP/IP, formatação, compactação e criptografia ficam agrupadas na camada de aplicação, embora o OSI associe essas funções à camada de apresentação.",
    "category": "IP & transporte"
  },
  {
    "id": 54,
    "question": "Quais são duas características da camada de aplicação do modelo TCP/IP? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "responsabilidade pelo endereçamento lógico"
      },
      {
        "key": "b",
        "text": "responsabilidade pelo endereçamento físico"
      },
      {
        "key": "c",
        "text": "criação e manutenção de sessões entre os aplicativos de origem e destino"
      },
      {
        "key": "d",
        "text": "mais próximo do usuário final"
      },
      {
        "key": "e",
        "text": "estabelecimento do tamanho da janela"
      }
    ],
    "answers": [
      "c",
      "d"
    ],
    "required": 2,
    "hint": "Pense em tudo que está mais perto do software do usuário e das sessões de aplicação.",
    "explanation": "A camada de aplicação fica mais próxima do usuário final e inclui funções de aplicativos e de gerenciamento de sessões. Endereçamento lógico/físico e tamanho de janela pertencem a outras camadas.",
    "category": "IP & transporte"
  },
  {
    "id": 55,
    "question": "Quais são os dois tipos de tráfego que exigem entrega sensível a atrasos? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "e-mail"
      },
      {
        "key": "b",
        "text": "web"
      },
      {
        "key": "c",
        "text": "FTP"
      },
      {
        "key": "d",
        "text": "voz"
      },
      {
        "key": "e",
        "text": "vídeo"
      }
    ],
    "answers": [
      "d",
      "e"
    ],
    "required": 2,
    "hint": "Voz e vídeo em tempo real perdem qualidade quando o atraso cresce.",
    "explanation": "Voz e vídeo são tráfegos em tempo real e sensíveis a atraso e jitter. E-mail, web e FTP toleram melhor variações de entrega.",
    "category": "IP & transporte"
  },
  {
    "id": 56,
    "question": "Que tipo de ameaça à rede visa impedir que usuários autorizados acessem recursos?",
    "options": [
      {
        "key": "a",
        "text": "ataques DoS"
      },
      {
        "key": "b",
        "text": "ataques de acesso"
      },
      {
        "key": "c",
        "text": "ataques de reconhecimento"
      },
      {
        "key": "d",
        "text": "exploração de confiança"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "O objetivo de DoS é negar disponibilidade do serviço a usuários legítimos.",
    "explanation": "Ataques de negação de serviço (DoS) tentam esgotar ou indisponibilizar recursos, impedindo que usuários legítimos consigam acessar o serviço.",
    "category": "IP & transporte"
  },
  {
    "id": 57,
    "question": "Qual serviço define os protocolos e tecnologias que implementam a transmissão de pacotes de voz em uma rede IP?",
    "options": [
      {
        "key": "a",
        "text": "VoIP"
      },
      {
        "key": "b",
        "text": "NAT"
      },
      {
        "key": "c",
        "text": "DHCP"
      },
      {
        "key": "d",
        "text": "QoS"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "A sigla significa Voice over IP.",
    "explanation": "VoIP (Voice over IP) reúne protocolos e tecnologias para transportar voz em pacotes sobre redes IP. QoS pode ajudar a priorizar a voz, mas não é o serviço de voz em si.",
    "category": "IP & transporte"
  },
  {
    "id": 58,
    "question": "O que é feito com um pacote IP antes de ser transmitido pelo meio físico?",
    "options": [
      {
        "key": "a",
        "text": "Ele é marcado com informações que garantem uma entrega confiável."
      },
      {
        "key": "b",
        "text": "Ele é segmentado em partes individuais menores."
      },
      {
        "key": "c",
        "text": "Ele é encapsulado em um segmento TCP."
      },
      {
        "key": "d",
        "text": "Ele é encapsulado em um quadro da Camada 2."
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "Antes do meio físico, o pacote IP precisa ser colocado dentro de uma PDU de Camada 2.",
    "explanation": "Antes de chegar ao meio físico, o pacote IP de Camada 3 é encapsulado em um quadro de Camada 2 apropriado à tecnologia local, como Ethernet ou Wi‑Fi.",
    "category": "IP & transporte"
  },
  {
    "id": 59,
    "question": "Qual tipo de meio de comunicação é usado com uma conexão LAN sem fio?",
    "options": [
      {
        "key": "a",
        "text": "Fibra"
      },
      {
        "key": "b",
        "text": "Ondas de rádio"
      },
      {
        "key": "c",
        "text": "Micro-ondas"
      },
      {
        "key": "d",
        "text": "UTP"
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Wi‑Fi transmite pelo ar usando radiofrequência.",
    "explanation": "Uma WLAN usa ondas de rádio para transmitir dados sem fio. Fibra e UTP são meios guiados por cabo.",
    "category": "IP & transporte"
  },
  {
    "id": 60,
    "question": "Além do comprimento do cabo, quais são os dois fatores que podem interferir na comunicação transmitida por cabos UTP? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "diafonia"
      },
      {
        "key": "b",
        "text": "largura de banda"
      },
      {
        "key": "c",
        "text": "tamanho da rede"
      },
      {
        "key": "d",
        "text": "técnica de modulação de sinal"
      },
      {
        "key": "e",
        "text": "interferência eletromagnética"
      }
    ],
    "answers": [
      "a",
      "e"
    ],
    "required": 2,
    "hint": "UTP pode sofrer interferência de outros pares e de fontes eletromagnéticas externas.",
    "explanation": "Além da distância, UTP é afetado por diafonia entre pares e por interferência eletromagnética externa. A torção dos pares ajuda a reduzir esses efeitos.",
    "category": "IP & transporte"
  },
  {
    "id": 61,
    "question": "Se os dados estiverem sendo enviados por uma rede sem fio, depois se conectarem a uma rede Ethernet e, eventualmente, a uma conexão DSL, qual cabeçalho será substituído cada vez que os dados trafegarem por um dispositivo de infraestrutura de rede?",
    "options": [
      {
        "key": "a",
        "text": "Camada 3"
      },
      {
        "key": "b",
        "text": "enlace de dados"
      },
      {
        "key": "c",
        "text": "físico"
      },
      {
        "key": "d",
        "text": "Camada 4"
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Ao trocar de tecnologia de enlace, o quadro muda; o pacote IP pode continuar o mesmo ao longo do caminho.",
    "explanation": "Cada tecnologia de enlace usa seu próprio cabeçalho de Camada 2. Quando um roteador recebe e encaminha o pacote por outro enlace, remove o quadro anterior e cria um novo.",
    "category": "IP & transporte"
  },
  {
    "id": 62,
    "question": "Quais informações importantes são examinadas no cabeçalho do quadro Ethernet por um dispositivo da Camada 2 para encaminhar os dados?",
    "options": [
      {
        "key": "a",
        "text": "endereço MAC de origem"
      },
      {
        "key": "b",
        "text": "endereço IP de origem"
      },
      {
        "key": "c",
        "text": "endereço MAC de destino"
      },
      {
        "key": "d",
        "text": "tipo de Ethernet"
      },
      {
        "key": "e",
        "text": "endereço IP de destino"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "Um switch de Camada 2 encaminha quadros com base no endereço físico de destino.",
    "explanation": "Um dispositivo de Camada 2, como um switch Ethernet, consulta principalmente o endereço MAC de destino para decidir em qual porta encaminhar o quadro.",
    "category": "IP & transporte"
  },
  {
    "id": 63,
    "question": "Quais são os três serviços fornecidos pela camada de transporte? (Escolha três.)",
    "options": [
      {
        "key": "a",
        "text": "controle de fluxo"
      },
      {
        "key": "b",
        "text": "criptografia de dados"
      },
      {
        "key": "c",
        "text": "determinação do caminho"
      },
      {
        "key": "d",
        "text": "estabelecimento da conexão"
      },
      {
        "key": "e",
        "text": "recuperação de erros"
      },
      {
        "key": "f",
        "text": "transmissão de bits"
      },
      {
        "key": "g",
        "text": "representação de dados"
      }
    ],
    "answers": [
      "a",
      "d",
      "e"
    ],
    "required": 3,
    "hint": "Transporte oferece mecanismos fim a fim como conexão, fluxo e recuperação de erros.",
    "explanation": "A camada de transporte pode fornecer estabelecimento de conexão, controle de fluxo e recuperação de erros. Roteamento é Camada 3, criptografia/representação ficam nas camadas superiores e bits pertencem à física.",
    "category": "IP & transporte"
  },
  {
    "id": 64,
    "question": "Uma transmissão de televisão pela Internet utiliza UDP. O que acontece quando parte da transmissão não é entregue ao destino?",
    "options": [
      {
        "key": "a",
        "text": "Uma mensagem de falha na entrega é enviada ao host de origem."
      },
      {
        "key": "b",
        "text": "A parte da transmissão de televisão que foi perdida é reenviada."
      },
      {
        "key": "c",
        "text": "A transmissão inteira é reenviada."
      },
      {
        "key": "d",
        "text": "A transmissão continua sem a parte perdida."
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "UDP não garante retransmissão; aplicações em tempo real normalmente seguem adiante.",
    "explanation": "UDP não oferece retransmissão confiável. Se um pedaço de uma transmissão ao vivo se perde, a aplicação normalmente continua com os próximos dados para preservar o tempo real.",
    "category": "IP & transporte"
  },
  {
    "id": 65,
    "question": "Quais duas camadas do modelo OSI são consideradas incluídas na camada superior da pilha de protocolos TCP/IP? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "internet"
      },
      {
        "key": "b",
        "text": "rede"
      },
      {
        "key": "c",
        "text": "apresentação"
      },
      {
        "key": "d",
        "text": "sessão"
      },
      {
        "key": "e",
        "text": "transporte"
      }
    ],
    "answers": [
      "c",
      "d"
    ],
    "required": 2,
    "hint": "Na pilha TCP/IP, sessão e apresentação estão dentro da camada de aplicação.",
    "explanation": "Sessão e apresentação são camadas do OSI cujas funções ficam agregadas à camada de aplicação do TCP/IP. “Internet” e “transporte” são camadas separadas da pilha TCP/IP.",
    "category": "IP & transporte"
  },
  {
    "id": 66,
    "question": "Qual é uma característica de uma rede tolerante a falhas?",
    "options": [
      {
        "key": "a",
        "text": "uma rede que protege informações confidenciais contra acesso não autorizado"
      },
      {
        "key": "b",
        "text": "uma rede que pode se expandir rapidamente para oferecer suporte a novos usuários e aplicativos sem afetar o desempenho do serviço entregue aos usuários existentes"
      },
      {
        "key": "c",
        "text": "uma rede que suporta um mecanismo para gerenciar o congestionamento e garantir a entrega confiável de conteúdo a todos os usuários"
      },
      {
        "key": "d",
        "text": "uma rede que se recupera rapidamente quando ocorre uma falha e depende de redundância para limitar o impacto de uma falha"
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "Tolerância a falhas depende de redundância e recuperação rápida.",
    "explanation": "Uma rede tolerante a falhas usa redundância e caminhos alternativos para continuar operando ou se recuperar rapidamente quando um componente falha.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 67,
    "question": "Qual é a vantagem de usar um protocolo definido por um padrão aberto?",
    "options": [
      {
        "key": "a",
        "text": "Uma empresa pode monopolizar o mercado."
      },
      {
        "key": "b",
        "text": "O protocolo só pode ser executado em equipamentos de um fornecedor específico."
      },
      {
        "key": "c",
        "text": "Um protocolo de padrão aberto não é controlado ou regulamentado por organizações de padronização."
      },
      {
        "key": "d",
        "text": "Ele incentiva a competição e promove escolhas."
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "Padrões abertos favorecem interoperabilidade, competição e mais opções.",
    "explanation": "Padrões abertos reduzem dependência de um fornecedor e facilitam interoperabilidade, competição e escolha de produtos.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 68,
    "question": "Quais são os dois benefícios de usar um modelo de rede em camadas? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "Auxilia no projeto do protocolo."
      },
      {
        "key": "b",
        "text": "Acelera a entrega de pacotes."
      },
      {
        "key": "c",
        "text": "Impede que os projetistas criem seu próprio modelo."
      },
      {
        "key": "d",
        "text": "Impede que a tecnologia em uma camada afete outras camadas."
      },
      {
        "key": "e",
        "text": "Garante que um dispositivo em uma camada possa funcionar na camada imediatamente superior."
      }
    ],
    "answers": [
      "a",
      "d"
    ],
    "required": 2,
    "hint": "Camadas isolam mudanças tecnológicas e ajudam a modularizar o projeto dos protocolos.",
    "explanation": "O modelo em camadas modulariza o projeto dos protocolos e isola mudanças: uma tecnologia pode evoluir em uma camada sem exigir que todas as demais sejam redesenhadas.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 69,
    "question": "Quais são as duas camadas do modelo OSI que têm a mesma funcionalidade que duas camadas do modelo TCP/IP? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "enlace de dados"
      },
      {
        "key": "b",
        "text": "rede"
      },
      {
        "key": "c",
        "text": "física"
      },
      {
        "key": "d",
        "text": "sessão"
      },
      {
        "key": "e",
        "text": "transporte"
      }
    ],
    "answers": [
      "b",
      "e"
    ],
    "required": 2,
    "hint": "Transporte corresponde diretamente nos dois modelos; rede OSI corresponde à Internet no TCP/IP.",
    "explanation": "A Camada de Rede do OSI corresponde funcionalmente à camada Internet do TCP/IP; a Camada de Transporte corresponde diretamente à camada de transporte TCP/IP.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 70,
    "question": "Qual é uma característica do cabeamento UTP?",
    "options": [
      {
        "key": "a",
        "text": "cancelamento"
      },
      {
        "key": "b",
        "text": "revestimento"
      },
      {
        "key": "c",
        "text": "imunidade a riscos elétricos"
      },
      {
        "key": "d",
        "text": "trança de cobre trançado ou folha metálica"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "UTP combate interferência por cancelamento obtido com pares trançados.",
    "explanation": "Uma característica essencial do UTP é o cancelamento de interferência obtido pela torção dos pares. Ele não utiliza blindagem metálica como requisito do UTP.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 71,
    "question": "Quais são as duas características do cabo de fibra óptica? (Escolha duas.)",
    "options": [
      {
        "key": "a",
        "text": "Não é afetado por EMI ou RFI."
      },
      {
        "key": "b",
        "text": "Cada par de cabos é envolto em folha metálica."
      },
      {
        "key": "c",
        "text": "Combina as técnicas de cancelamento, blindagem e torção para proteger os dados."
      },
      {
        "key": "d",
        "text": "Normalmente contém 4 pares de fios de fibra óptica."
      },
      {
        "key": "e",
        "text": "É mais caro do que o cabeamento UTP."
      }
    ],
    "answers": [
      "a",
      "e"
    ],
    "required": 2,
    "hint": "Fibra é imune a EMI/RFI, mas costuma ter custo maior que UTP.",
    "explanation": "Fibra óptica não é afetada por EMI/RFI e, em geral, custa mais do que UTP considerando cabo, transceptores/terminação e instalação.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 72,
    "question": "Quais informações são adicionadas durante o encapsulamento na Camada 3 do OSI?",
    "options": [
      {
        "key": "a",
        "text": "MAC de origem e destino"
      },
      {
        "key": "b",
        "text": "Protocolo de aplicação de origem e destino"
      },
      {
        "key": "c",
        "text": "Número da porta de origem e destino"
      },
      {
        "key": "d",
        "text": "Endereço IP de origem e destino"
      }
    ],
    "answers": [
      "d"
    ],
    "required": 1,
    "hint": "A Camada 3 acrescenta endereços lógicos de origem e destino.",
    "explanation": "Na Camada 3, o pacote recebe os endereços IP de origem e destino. Endereços MAC são adicionados na Camada 2; números de porta pertencem à Camada 4.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 73,
    "question": "Quais são os dois serviços fornecidos pela camada de rede OSI? (Escolha dois.)",
    "options": [
      {
        "key": "a",
        "text": "Realização de detecção de erros"
      },
      {
        "key": "b",
        "text": "Roteamento de pacotes em direção ao destino"
      },
      {
        "key": "c",
        "text": "Encapsulamento de PDUs da camada de transporte"
      },
      {
        "key": "d",
        "text": "Posicionamento de quadros na mídia"
      },
      {
        "key": "e",
        "text": "Detecção de colisão"
      }
    ],
    "answers": [
      "b",
      "c"
    ],
    "required": 2,
    "hint": "A camada de rede encapsula dados do transporte em pacotes e os roteia até o destino.",
    "explanation": "A camada de rede encapsula PDUs da camada de transporte em pacotes e executa roteamento/encaminhamento em direção ao destino.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 74,
    "question": "Quais são as duas tarefas da camada de apresentação? (Escolha dois.)",
    "options": [
      {
        "key": "a",
        "text": "Compressão"
      },
      {
        "key": "b",
        "text": "Endereçamento"
      },
      {
        "key": "c",
        "text": "Criptografia"
      },
      {
        "key": "d",
        "text": "Controle de sessão"
      },
      {
        "key": "e",
        "text": "Autenticação"
      }
    ],
    "answers": [
      "a",
      "c"
    ],
    "required": 2,
    "hint": "Apresentação cuida da representação dos dados, incluindo compressão e criptografia.",
    "explanation": "A camada de apresentação prepara a representação dos dados, podendo realizar compressão e criptografia. Controle de sessão pertence à camada de sessão.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 75,
    "question": "Como a qualidade de serviço ajuda uma rede a suportar uma ampla gama de aplicações e serviços?",
    "options": [
      {
        "key": "a",
        "text": "Limitando o impacto de uma falha de rede"
      },
      {
        "key": "b",
        "text": "Permitindo a recuperação rápida de falhas de rede"
      },
      {
        "key": "c",
        "text": "Fornecendo mecanismos para gerenciar o tráfego de rede congestionado"
      },
      {
        "key": "d",
        "text": "Fornecendo a capacidade da rede de crescer para acomodar novos usuários"
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "QoS classifica/prioriza tráfego para lidar melhor com congestionamento e requisitos de serviço.",
    "explanation": "QoS fornece mecanismos para classificar, priorizar e gerenciar tráfego quando há congestionamento, preservando melhor aplicações com requisitos de atraso/largura de banda.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 76,
    "question": "Qual camada é responsável pelo roteamento de mensagens através de uma inter-rede no modelo TCP/IP?",
    "options": [
      {
        "key": "a",
        "text": "internet"
      },
      {
        "key": "b",
        "text": "transporte"
      },
      {
        "key": "c",
        "text": "acesso à rede"
      },
      {
        "key": "d",
        "text": "sessão"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "No TCP/IP, roteamento entre redes é função da camada Internet.",
    "explanation": "No modelo TCP/IP, a camada Internet trata do endereçamento IP e do roteamento de pacotes entre redes.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 77,
    "question": "Qual afirmação descreve com precisão um processo de encapsulamento TCP/IP quando um PC envia dados para a rede?",
    "options": [
      {
        "key": "a",
        "text": "Os dados são enviados da camada de internet para a camada de acesso à rede."
      },
      {
        "key": "b",
        "text": "Os pacotes são enviados da camada de acesso à rede para a camada de transporte."
      },
      {
        "key": "c",
        "text": "Os segmentos são enviados da camada de transporte para a camada de internet."
      },
      {
        "key": "d",
        "text": "Os quadros são enviados da camada de acesso à rede para a camada de internet."
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "Ao descer a pilha, a PDU de transporte (segmento) é entregue à camada Internet.",
    "explanation": "Na encapsulação de envio, dados descem a pilha: a camada de transporte cria segmentos e os entrega à camada Internet, que os encapsula em pacotes IP.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 78,
    "question": "Qual procedimento é usado para reduzir o efeito de diafonia em cabos de cobre?",
    "options": [
      {
        "key": "a",
        "text": "Exigir conexões de aterramento adequadas"
      },
      {
        "key": "b",
        "text": "Torcer pares de fios de circuitos opostos"
      },
      {
        "key": "c",
        "text": "Envolver o feixe de fios com blindagem metálica"
      },
      {
        "key": "d",
        "text": "Projetar uma infraestrutura de cabos para evitar interferência de diafonia"
      },
      {
        "key": "e",
        "text": "Evitar curvas acentuadas durante a instalação"
      }
    ],
    "answers": [
      "b"
    ],
    "required": 1,
    "hint": "Pares trançados geram cancelamento de campos e reduzem diafonia.",
    "explanation": "Torcer condutores de circuitos opostos ajuda os campos eletromagnéticos induzidos a se cancelar, reduzindo a diafonia em cabos de cobre.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 79,
    "question": "Durante o processo de encapsulamento, o que ocorre na camada de enlace de dados para um PC conectado a uma rede Ethernet?",
    "options": [
      {
        "key": "a",
        "text": "Um endereço IP é adicionado."
      },
      {
        "key": "b",
        "text": "O endereço lógico é adicionado."
      },
      {
        "key": "c",
        "text": "O endereço físico é adicionado."
      },
      {
        "key": "d",
        "text": "O número da porta do processo é adicionado."
      }
    ],
    "answers": [
      "c"
    ],
    "required": 1,
    "hint": "Na Ethernet, a Camada 2 acrescenta endereços físicos MAC ao quadro.",
    "explanation": "Na Ethernet, a Camada 2 cria o quadro e acrescenta endereços físicos MAC. Endereço IP é Camada 3 e número de porta é Camada 4.",
    "category": "Arquitetura & revisão"
  },
  {
    "id": 80,
    "question": "Qual é o processo de divisão de um fluxo de dados em partes menores antes da transmissão?",
    "options": [
      {
        "key": "a",
        "text": "Segmentação"
      },
      {
        "key": "b",
        "text": "Encapsulamento"
      },
      {
        "key": "c",
        "text": "Codificação"
      },
      {
        "key": "d",
        "text": "Controle de fluxo"
      }
    ],
    "answers": [
      "a"
    ],
    "required": 1,
    "hint": "Dividir um fluxo grande em unidades menores na origem é segmentação.",
    "explanation": "Segmentação divide um fluxo de dados em partes menores antes da transmissão. Isso facilita transporte, multiplexação e recuperação de partes específicas em protocolos confiáveis.",
    "category": "Arquitetura & revisão"
  }
];
window.STUDY_BLOCKS = [[46, 43, 23, 14, 10, 61, 32, 60, 9, 18], [58, 30, 48, 80, 67, 19, 33, 68, 35, 49], [20, 47, 64, 54, 12, 69, 17, 25, 41, 45], [53, 74, 36, 39, 11, 37, 63, 6, 38, 4], [55, 72, 66, 27, 15, 22, 5, 3, 70, 34], [71, 65, 24, 76, 28, 62, 29, 31, 73, 77], [13, 51, 40, 57, 79, 16, 56, 44, 2, 42], [21, 78, 7, 59, 75, 50, 8, 1, 52, 26]];
window.VIDEOS = [
  {
    "id": "1.1",
    "title": "Introduction — What is the Internet",
    "url": "https://www.youtube.com/watch?v=74sEFYBBRAY"
  },
  {
    "id": "1.2",
    "title": "The network edge",
    "url": "https://www.youtube.com/watch?v=k8NmM-hImBU"
  },
  {
    "id": "1.3",
    "title": "The network core",
    "url": "https://www.youtube.com/watch?v=f1nUcCdQJ8Y"
  },
  {
    "id": "1.4",
    "title": "Performance",
    "url": "https://www.youtube.com/watch?v=hm1y4LsphQQ"
  },
  {
    "id": "1.5",
    "title": "Layering, encapsulation",
    "url": "https://www.youtube.com/watch?v=IZ_PnVXtMeY",
    "featured": true
  },
  {
    "id": "1.6",
    "title": "Networks Under Attack",
    "url": "https://www.youtube.com/watch?v=yukwBqSwAkg"
  },
  {
    "id": "1.7",
    "title": "History of Computer Networking + Chapter 1 wrap-up",
    "url": "https://www.youtube.com/watch?v=l4q8iuqbuiQ"
  },
  {
    "id": "Extra",
    "title": "Who Controls the Internet?",
    "url": "https://www.youtube.com/watch?v=xrd4hD_9fS8"
  }
];
window.GLOSSARY = [
  {
    "term": "Internet",
    "def": "Rede de redes interconectadas globalmente que se comunica usando protocolos comuns, especialmente a família TCP/IP."
  },
  {
    "term": "Roteamento",
    "def": "Processo de selecionar caminhos e encaminhar pacotes entre redes até o destino."
  },
  {
    "term": "Encapsulamento",
    "def": "Técnica em que uma camada recebe dados da camada superior e os coloca dentro da sua própria PDU, adicionando informações de controle."
  },
  {
    "term": "PDU",
    "def": "Protocol Data Unit: nome genérico para a unidade de dados tratada por uma camada; pode ser segmento, pacote, quadro ou bits."
  },
  {
    "term": "TCP",
    "def": "Protocolo de transporte orientado à conexão, com mecanismos de confiabilidade, controle de fluxo e recuperação de perdas."
  },
  {
    "term": "UDP",
    "def": "Protocolo de transporte sem conexão, com pouca sobrecarga e sem confirmação/retransmissão próprias."
  },
  {
    "term": "IP",
    "def": "Protocolo da camada Internet/rede que oferece entrega de melhor esforço, sem conexão, e endereçamento lógico."
  },
  {
    "term": "Ethernet",
    "def": "Tecnologia de rede local amplamente usada, com padrões de camada física e enlace de dados."
  },
  {
    "term": "Endereço MAC",
    "def": "Endereço físico de Camada 2 usado para identificar interfaces no enlace local."
  },
  {
    "term": "Endereço IP",
    "def": "Endereço lógico de Camada 3 usado para identificar origem e destino entre redes."
  },
  {
    "term": "Largura de banda",
    "def": "Capacidade de transporte de dados de um meio/enlace por unidade de tempo."
  },
  {
    "term": "Throughput",
    "def": "Taxa de bits que efetivamente atravessa o meio em determinado período."
  },
  {
    "term": "Congestionamento",
    "def": "Situação em que a demanda de tráfego excede a capacidade disponível da rede ou do roteador."
  },
  {
    "term": "Controle de fluxo",
    "def": "Mecanismo que limita a velocidade de envio para que o receptor consiga acompanhar."
  },
  {
    "term": "Full duplex",
    "def": "Comunicação em que dados podem ser enviados e recebidos simultaneamente nos dois sentidos."
  },
  {
    "term": "Diafonia (crosstalk)",
    "def": "Interferência em que sinais de fios ou pares adjacentes distorcem a transmissão."
  },
  {
    "term": "EMI / RFI",
    "def": "Interferências eletromagnética e de radiofrequência que podem degradar sinais em cabos de cobre."
  },
  {
    "term": "UTP",
    "def": "Cabo de par trançado sem blindagem; a torção ajuda a cancelar interferências e reduzir diafonia."
  },
  {
    "term": "Fibra óptica",
    "def": "Meio que transporta luz, alcança grandes distâncias e é imune a EMI/RFI."
  },
  {
    "term": "QoS",
    "def": "Mecanismos para classificar e priorizar tráfego, úteis em congestionamento e em aplicações sensíveis a atraso."
  },
  {
    "term": "VoIP",
    "def": "Conjunto de tecnologias e protocolos para transportar voz em pacotes sobre redes IP."
  },
  {
    "term": "DoS",
    "def": "Ataque de negação de serviço que busca impedir usuários legítimos de acessar recursos."
  },
  {
    "term": "Multiplexação",
    "def": "Compartilhamento do transporte/rede por múltiplos fluxos de comunicação ao mesmo tempo."
  },
  {
    "term": "Segmentação",
    "def": "Divisão de um fluxo de dados em partes menores antes da transmissão."
  },
  {
    "term": "WAN",
    "def": "Rede de longa distância usada para interligar redes em áreas geográficas amplas."
  },
  {
    "term": "WLAN",
    "def": "LAN sem fio, normalmente baseada em tecnologias Wi‑Fi/802.11."
  }
];
