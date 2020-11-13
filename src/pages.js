const Database = require('./database/db');
const saveRepresentante = require('./database/saveRepresentante')

module.exports = {
    index(req, res) {
        return res.render('index')
    },

    async representante(req, res) {
        const id = req.query.id

        try{
            const db = await Database;
            const results = await db.all(`SELECT * FROM representantes WHERE id = "${id}"`)
            const representante = results[0]

            representante.images = representante.images.split(',')
            representante.firstImage = representante.images[0]

            if (representante.open_on_weekends == "0") {
                representante.open_on_weekends = false
            } else {
                representante.open_on_weekends = true
            }

            return res.render('representante', {representante: representante})

        } catch(error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },

    async representantes(req, res) {
        try {
            const db = await Database;
            const representantes = await db.all("SELECT * FROM representantes")
            return res.render('representantes', { representantes })
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },

    createRepresentante(req, res) {
        return res.render('create-representante')
    },

    async saveRepresentante(req, res) {
        const fields = req.body
        //validar se todos os campos estão preenchdidos
        if(Object.values(fields).includes('')) {
            return res.send("Todos os campos devem ser preenchidos")
        }

        try {
            // salvar um representante
            const db = await Database;
            await saveRepresentante(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends
        })
            //redirecionando
            return res.redirect('/representantes')
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')            
        }
    }
}