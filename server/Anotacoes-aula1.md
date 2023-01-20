Node não enende ts, então é preciso instalar a biblioteca e ts <<<< npx tsc --init >>>> para o node conseguir ler

> npm i typescript -D // Dependencia de desenvolvimento 
> npx tsc --init // Com esse comando, vai ser criado o tscondig.json. É toda a config do TS no projeto. No projeto só vamos mudar o target para 'es2020'

> npm i tsx -D // Para conseguir rodar o código. Permite executar um arquivo do node com ts sem precisar converter nem nada. Para rodar, teriamos que digitar no terminal: tsx watch src/server.ts. Esse watch é pra ficar olhando caso sofra alteração e se sim, ele sera att.
Mas, para facilitra, vamos criar um script em package.json chamado dev e adicionado isso >> tsx src/server.ts. Então se eu rodar npm run dev, ele vai rodar o arquivo do servidor 


# o que é API Restful:
Ele prove recursos como: criar, atualizar, deletar e etc, usando rotas https


fastify: é parecido com o express, para criar rotas. 
> npm install fastify

> npm i -D prisma 
> npm i @prisma/client // Utiliza essa para acessar o banco de dados dentro da aplicação 


> npx prisma init --datasource-provider SQLite // Isso diz que quero usar o banco de dados do tipo SQLite

> npx prisma migrate dev // Ele vai ler o arquivo do prisma, com as tabelas. Isso acontece no momento que o comando é rodado. È como um controle de versao, a gente toda vez que executa diz o que foi feita e ele 'salva'. Ou seja, ele vai detectar tdasd as mudanças que a gente fez no arquivo e vai salvar, tipo em uma linha do tempo de commits, vamos precisar digitar o que fizemos, igual um commit. 

>npx prisma studio //para roddar o banco no computador
#ORM
Ex: Prisma;
Usamos para 'transcrever' js para ling de banco de dados 


Promisses no JS sao coisas que vao demorar pra acontecer

---- BUSCAR DEPOIS
Entendendo promisses
--- FIAP MANDAR EMAIL SOBRE ALURA


#Cross-Origin Resource Sharing (CORS) 
Ele diz quais aplicações vão poder usar os dados desse nosso back end. Se não for configurado, nenhuma app  conseguirá acessar ele. Por isso, é preciso confg ele. Para tanto, instalar o npm i @fastify/cors


-------------------------

#Aula 2


Criar outras tabelas e forenkeys no arquivo schema.prisma. Precisa de toda uma logica para criar e relacionar tabelas. Pensar se tais podem ser repetidas e se fazem sentido para nao criar atoa. 


Foi usado esse plugin para ver as tabelas de forma visual, diagramas. 
https://www.npmjs.com/package/prisma-erd-generator


> npm i -D prisma-erd-generator @mermaid-js/mermaid-cli

E isso voi colado no schema.prisma 
generator erd {
  provider = "prisma-erd-generator"
}

Depois de iunstalado e configurado é só rodar para criar o diagrama do banco de dados: 
> npx prisma generate 


#Populando a tebela
Cria um arquivo seed.ts na pasdta prisma e cola os dados de um user la: https://www.prisma.io/docs/guides/database/seed-database

Na verdade esse arquivo pode estar em qualquer lugar. Depois de popular é só rodar

npx prisma db seed
npx prisma studio




Fazer validação ~çao das rotas

> npm i zod //trabalha com essa validação 

> npm dayjs // usada para trabalhar datas