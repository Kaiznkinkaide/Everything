let Hero = (heroName, heroPower, heroEnemy) => {

    let name = `Mein:e Lieblingsheld:in ist: ${heroName}`
    let power = `Er/sie hat die Fähigkeit: ${heroPower}`
    let enemy = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}`
    console.log(name, power,enemy);
}

Hero(`Daniel`, `KLUK sein`, `Affenkarussel`)