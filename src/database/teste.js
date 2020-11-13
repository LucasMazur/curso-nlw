const Database = require('./db.js');
const saveRepresentante = require('./saveRepresentante');

Database.then(async db => {
    // inserir na tabela 
     await saveRepresentante(db, {
        lat: "-23.7225827",
        lng: "-46.6938332",
        name: "Representante Y",
        about: "Esses são as descrições do representante Y",
        whatsapp: "5662356",
        images: [
            "https://images.unsplash.com/photo-1602486904530-b58549a094e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", 
            "https://images.unsplash.com/photo-1602718690159-a992682a086e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions: "Esas são as instruções do representante Y",
        opening_hours: "8h as 8h",
        open_on_weekends: "1"
     })
    //consultar dados na tabela
    const dbColector = await db.all("SELECT * FROM representantes")
    console.log(dbColector)

    //consultar somente 1 representante
    //const representante = await db.all('SELECT * FROM representantes WHERE id = "3"')
    //console.log(representante)

    //deletar dados da tabelas
    //await db.run('DELETE FROM representantes)
    // await db.run('DELETE FROM representantes WHERE id = "3"')

}) 