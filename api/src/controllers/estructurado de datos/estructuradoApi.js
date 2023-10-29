function EstructuradoApi(data) {
  const { id, name, height, types, sprites, stats, weight } = data;
  // const img = sprites.other["official-artwork"].front_default
  const image = sprites.other.home.front_default;
  const tipos = [];
  types.forEach((type) => {
    tipos.push(type.type.name);
  });
  let estadisticas = stats.reduce((obj, estadistica) => {
    obj[estadistica.stat.name] = estadistica.base_stat;
    return obj;
  }, {});
  const vida = estadisticas.hp;
  const ataque = estadisticas.attack;
  const defensa = estadisticas.defense;
  const velocidad = estadisticas.speed;
  const pokemon = {
    id,
    name,
    height,
    tipos,
    image,
    vida,
    ataque,
    defensa,
    velocidad,
    weight,
  };
  return pokemon;
}

module.exports = EstructuradoApi;
