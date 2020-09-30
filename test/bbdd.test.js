const { createFilm, getFilmDetail, getFilmsDetail, updateFilm, deleteFilm } = require('../bbdd')


//-----------------------------------------------------------------------
// C_CREAR UN DOCUMENTO__TEST
//-----------------------------------------------------------------------
test('Comprobar que crea una película', () => {
    let film={
        ID: 2,
        title: "American Beauty",
        poster:"https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        director:"James Cameron",
        genre: "Drama",
        country:"USA",
        year:1999,
        runtime:"122 min",
        actors:"Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
        plot:"A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
        awards:"Won 5 Oscars. Another 106 wins & 102 nominations.",
        score:"8.3",
    }
    expect(createFilm(film)).not.toBe(undefined)
  })
  test('Comprobar que puede tener un campo vacío de los permitidos (runtime)', () => {
    let film={
        ID:"6",
        title: "American Beauty",
        poster:"https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        director:"James Cameron",
        genre: "Drama",
        country:"USA",
        year:1999,
        runtime:"",
        actors:"Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
        plot:"A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
        awards:"Won 5 Oscars. Another 106 wins & 102 nominations.",
        score:"8.3",
    }
    expect(createFilm(film)).not.toBe(undefined)
  })
//------------------------------------------------------------------------
// R_LEER UN DOCUMENTO__TEST
//------------------------------------------------------------------------
test('Comprobar que lee una película', () => {
  let film={
      ID: 2,
      title: "American Beauty",
      poster:"https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      director:"James Cameron",
      genre: "Drama",
      country:"USA",
      year:1999,
      runtime:"122 min",
      actors:"Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
      plot:"A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
      awards:"Won 5 Oscars. Another 106 wins & 102 nominations.",
      score:"8.3",
  }
  expect(getFilmDetail(film)).not.toBe(undefined)
})
//------------------------------------------------------------------------
// R_LEER MUCHOS DOCUMENTOS__TEST
//------------------------------------------------------------------------
test('Comprobar que lee muchas películas', () => {
  let film={
      ID: 2,
      title: "American Beauty",
      poster:"https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      director:"James Cameron",
      genre: "Drama",
      country:"USA",
      year:1999,
      runtime:"122 min",
      actors:"Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
      plot:"A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
      awards:"Won 5 Oscars. Another 106 wins & 102 nominations.",
      score:"8.3",
  }
  expect(getFilmsDetail()).not.toBe(undefined)
})
//------------------------------------------------------------------------
// U_ACTUALIZAR UNO__TEST
//------------------------------------------------------------------------
test('Comprobar que actualiza una película', () => {
  let film={
      ID: 2,
      title: "American Beauty",
      poster:"https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      director:"James Cameron",
      genre: "Drama",
      country:"USA",
      year:1999,
      runtime:"122 min",
      actors:"Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
      plot:"A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
      awards:"Won 5 Oscars. Another 106 wins & 102 nominations.",
      score:"8.3",
  }
  expect(updateFilm(film, 2)).not.toBe(undefined)
})
//------------------------------------------------------------------------
// D_BORRAR UNO__TEST
//------------------------------------------------------------------------
test('Comprobar que actualiza una película', () => {
  let film={
      ID: 2,
      title: "American Beauty",
      poster:"https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      director:"James Cameron",
      genre: "Drama",
      country:"USA",
      year:1999,
      runtime:"122 min",
      actors:"Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
      plot:"A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
      awards:"Won 5 Oscars. Another 106 wins & 102 nominations.",
      score:"8.3",
  }
  expect(deleteFilm(film)).not.toBe(undefined)
})