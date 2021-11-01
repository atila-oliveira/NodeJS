const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 07 * * 1', function(){
    console.log('Executando tarefa1!', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel();
    console.log('Cancelando a tarefa 1')
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 07 //executa a regra às 7 horas
regra.second = 30 //executa a regra sempre que o segundo for 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})
