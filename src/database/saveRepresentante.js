function saveRepresentante(db, representante) {
  return db.run(`
    INSERT INTO representantes (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "${representante.lat}",
        "${representante.lng}",
        "${representante.name}",
        "${representante.about}",
        "${representante.whatsapp}",
        "${representante.images}",
        "${representante.instructions}",
        "${representante.opening_hours}",
        "${representante.open_on_weekends}"
    );
`);
}

module.exports = saveRepresentante;
