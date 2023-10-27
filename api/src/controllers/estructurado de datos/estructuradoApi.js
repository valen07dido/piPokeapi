function EstructureadoApi(data) {
  const { name, height, types, sprites, stats, weight } = data;
  const img = sprites.other["official-artwork"].front_default;
  const type = types[0].type.name;
  let estadisticas = stats.reduce((obj, estadistica) => {
    obj[estadistica.stat.name] = estadistica.base_stat;
    return obj;
  }, {});
  const vida = estadisticas.hp;
  const ataque = estadisticas.attack;
  const defensa = estadisticas.defense;
  const velocidad = estadisticas.speed;
  const pokemon = {
    name,
    height,
    type,
    img,
    vida,
    ataque,
    defensa,
    velocidad,
    weight,
  };
  return pokemon
}

module.exports=EstructureadoApi