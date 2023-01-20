import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

 

const app = Fastify()
 

app.register(cors) //Fazendo isso, ele vai permitir que qualquer aplicação consuma os dados do back. Se eu quiser selecionar uam especifica, faço:
app.register(appRoutes)
// app.register(cors, {
//     origin: ['https://localhost:333']
// }) 
 

app.listen({
    port: 3333,
}) .then( () => {
    console.log('Servidor HTTP está rodando!')
})



