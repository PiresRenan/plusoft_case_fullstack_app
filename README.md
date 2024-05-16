# Projeto Plusoft - Desafio de Desenvolvimento

Este projeto foi desenvolvido como resposta ao desafio proposto pela empresa Plusoft, como um case de teste avaliativo. O objetivo era criar uma aplicação web que permitisse o cadastro, consulta, edição, remoção e pesquisa de dados, armazenando essas informações em um banco de dados, seguindo uma arquitetura bem definida e utilizando algum padrão de projeto. As decisões de arquitetura, escolha de frameworks e justificativas estão documentadas neste README.

## Instruções de Execução

1. **Clonagem do Repositório:**
   Para executar o programa, é necessário clonar este repositório em sua máquina local.

2. **Configuração do Ambiente:**
   - No diretório `dotenv_files`, crie um arquivo `.env` seguindo o mesmo template do arquivo `.env-example`.
   - No diretório raiz do projeto (que contém as pastas `backend`, `frontend`, `.gitignore` e `docker-compose.yml`), execute o comando de build utilizando Docker Compose:
     ```
     docker-compose up --build
     ```
   Esse comando criará três contêineres para a aplicação: um para o frontend, um para o backend e outro para o banco de dados PostgreSQL.

## Justificativas de Desenvolvimento

#### Estrutura Modularizada
O projeto foi meticulosamente dividido em componentes e módulos distintos, seguindo o princípio de responsabilidade única. Essa abordagem favorece a escalabilidade e a manutenção, permitindo que novos recursos sejam adicionados de forma isolada e com mínima interferência em outras partes do sistema.


### Backend
  - A adoção do padrão de arquitetura MVC (Model-View-Controller) no backend promove uma separação clara entre a lógica de negócios, a apresentação dos dados e a interação do usuário. Isso resulta em um código mais organizado, de fácil compreensão e manutenção. Sendo comumente empregada em aplicações que lidam com bancos de dados relacionais.
  - O Django foi selecionado como o framework para o desenvolvimento do backend desta aplicação devido a uma série de vantagens distintas:
    
    1. **Rapidez no Desenvolvimento:**
       Django é conhecido por sua sintaxe limpa e concisa, que permite aos desenvolvedores criar funcionalidades complexas com menos linhas de código. Isso acelera significativamente o processo de desenvolvimento, permitindo que novas features sejam implementadas de forma rápida e eficiente.

    2. **Excelente Desempenho:**
       Graças à sua arquitetura bem otimizada e à sua implementação eficiente de padrões de design, o Django oferece excelente desempenho mesmo em aplicações de grande escala. Sua capacidade de processar solicitações rapidamente e de forma eficiente contribui para uma experiência do usuário mais fluida e responsiva.

    3. **Lida com Grandes Quantidades de Dados:**
       O Django é particularmente robusto no manuseio de grandes volumes de dados. Sua integração perfeita com bancos de dados relacionais, como PostgreSQL, permite que a aplicação gerencie e manipule grandes conjuntos de dados de maneira eficaz. Isso é crucial para aplicações que exigem armazenamento e recuperação eficientes de informações.

    Além desses benefícios, o Django também oferece uma ampla gama de funcionalidades incorporadas, como autenticação de usuários, administração do painel de controle e segurança integrada, que aceleram o desenvolvimento e reduzem a necessidade de escrever código personalizado para tarefas comuns. Sua comunidade ativa e suporte contínuo garantem que os desenvolvedores tenham acesso a recursos e soluções para os desafios que possam encontrar durante o processo de desenvolvimento.
  - O ambiente foi configurado para utilizar variáveis de ambiente para credenciais e implementou-se a lógica JWT para autenticação, visando a segurança das credenciais. A implementação de autenticação JWT (JSON Web Token) no backend foi uma escolha estratégica para garantir a segurança das credenciais dos usuários. Esse método moderno de autenticação oferece um mecanismo seguro e escalável para gerenciar a identidade do usuário e controlar o acesso aos recursos da aplicação.

### Frontend

- Para o desenvolvimento do frontend desta aplicação, foram escolhidos os frameworks Vue e React devido às suas características distintas e complementares:

  1. **Vue.js:**
     Vue.js foi selecionado por sua simplicidade. Sua sintaxe intuitiva e abordagem gradual permitem que se criado interfaces de usuário complexas com facilidade. Vue oferece uma excelente documentação, uma comunidade ativa e uma vasta gama de plugins e bibliotecas que facilitam o desenvolvimento.

  2. **React:**
     React é amplamente reconhecido por sua eficiência e desempenho. Seu modelo de programação baseado em componentes oferece uma maneira poderosa e declarativa de criar interfaces de usuário interativas. Além disso, a utilização do React permite uma renderização eficiente do lado do cliente, resultando em uma experiência do usuário mais rápida e responsiva. O ecossistema do React é vasto, com uma grande variedade de ferramentas, como o React Router para navegação e o Redux para gerenciamento de estado, que complementam e estendem sua funcionalidade.

- A adoção da arquitetura de componentes no React promove a criação de códigos reutilizáveis e modularizados. Cada componente encapsula uma parte específica da interface do usuário, facilitando sua utilização em diferentes partes da aplicação sem a necessidade de duplicação de código. Isso promove a coesão e a consistência no design da interface do usuário, facilitando a manutenção e evolução do código ao longo do tempo.

- Essas escolhas de tecnologia foram fundamentais para garantir a construção de um frontend robusto, flexível e altamente interativo, capaz de oferecer uma experiência de usuário excepcional.

## Breve Resumo

O foco deste projeto não foi criar uma aplicação com uma miríade de funcionalidades, mas sim desenvolver uma aplicação limpa, eficiente e eficaz, explorando ferramentas que garantam essas características. A modularidade e definição clara da aplicação permitem a implementação de serviços adicionais conforme necessário. No estado atual, o software requer um usuário previamente registrado no banco de dados para acessar a aplicação e gerenciar notas.

