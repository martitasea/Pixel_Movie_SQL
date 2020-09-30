const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "",
  connectionLimit: 5,
  database: "moviedb",
});
const bodyParser = require("body-parser");
//-----------------------------------------------------------------------
// C_CREAR UN DOCUMENTO
//-----------------------------------------------------------------------
exports.createFilm = async (film) => {
  let conn;
  try {
    conn = await pool.getConnection();
    var res = await conn.query(
      "INSERT INTO peliculas (title, poster, director, genre, country, year, runtime, actors, plot, awards, score) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [
        film.title,
        film.poster,
        film.director,
        film.genre,
        film.country,
        film.year,
        film.runtime,
        film.actors,
        film.plot,
        film.awards,
        film.score,
      ]
    );
    return res;
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};
//------------------------------------------------------------------------
// R_LEER UN DOCUMENTO
//------------------------------------------------------------------------
exports.getFilmDetail = async (titulo) => {
  try {
    conn = await pool.getConnection();
    const res = await conn.query("SELECT * FROM peliculas WHERE title=(?);", [
      titulo,
    ]);
    return res[0];
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};
//------------------------------------------------------------------------
// R_LEER MUCHOS
//------------------------------------------------------------------------
exports.getFilmsDetail = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query("SELECT * FROM peliculas");
    return res;
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};
//------------------------------------------------------------------------
// U_ACTUALIZAR UNO
//------------------------------------------------------------------------
exports.updateFilm = async (film, id) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(
      "UPDATE peliculas SET title=(?), poster=(?), director=(?), genre=(?), country=(?), year=(?), runtime=(?), actors=(?), plot=(?), awards=(?), score=(?) WHERE ID=(?)",
      [
        film.title,
        film.poster,
        film.director,
        film.genre,
        film.country,
        film.year,
        film.runtime,
        film.actors,
        film.plot,
        film.awards,
        film.score,
        id,
      ]
    );
    return res;
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};
//------------------------------------------------------------------------
// D_BORRAR UNO
//------------------------------------------------------------------------
exports.deleteFilm = async (nameFilm) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query("DELETE FROM peliculas WHERE title=(?)", [
      nameFilm,
    ]);
    return res[0];
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};
