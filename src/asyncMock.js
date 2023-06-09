const cards = [

    /*COMMON CARDS*/
    {
        id: '1',
        name:
        {
            english: 'Duress',
            spanish: 'Coacción'

        },
        rarity: 'Comunes',
        englishRarity: 'Common',
        cardType:{
            english: 'Sorcery',
            spanish: 'Conjuro'
        },
        description:
            {
                english: 'Target opponent reveals his or her hand. You choose a noncreature, nonland card from it. That player discards that card.',
                spanish: 'El oponente objetivo revela su mano. Puedes elegir una carta que no sea criatura o tierra. El jugador descarta esa carta.'
            },
        price: 0.32,
        img: 'https://i.ibb.co/bRhh4R4/duress.png',
        stock: 50,
        blackMana: 1,
        blueMana: 0,
        greenMana: 0,
        redMana: 0,
        whiteMana: 0,
        colorlessMana: 0,

    },

    {
        id: '2',
        name:
        {
            english: 'Abrade',
            spanish: 'Erosionar'

        },
        rarity: 'Comunes',
        englishRarity: 'Common',
        cardType:{
            english: 'Instant',
            spanish: 'Instantáneo'
        },
        description:
        {   english: `Chose one:
            • Abrade deals 3 damage to target creature.
            • Destroy target artifact.`,
            spanish: `Elige uno:
            • Abrade le hace 3 de daño a la criatura objetivo.
            • Destruye el artefacto objetivo.`
        },
        price: 0.39,
        img: 'https://i.ibb.co/BK6TgGg/abrade.png',
        stock: 50,
        blackMana: 0,
        blueMana: 0,
        greenMana: 0,
        redMana: 1,
        whiteMana: 0,
        colorlessMana: 1,

    },

    {
        id: '3',
        name:
        {
            english: 'Disdainful Stroke',
            spanish: 'Golpe altanero'

        },
        rarity: 'Comunes',
        englishRarity: 'Common',
        cardType:{
            english: 'Instant',
            spanish: 'Instantáneo'
        },
        description:{
            english: 'Counter target spell with converted mana cost 4 or greater.',
            spanish: 'Contrarresta el hechizo objetivo con maná convertido 4 o mayor.'
        },
        price: 0.30,
        img: 'https://i.ibb.co/prqwZyw/disdainful-stroke.png',
        stock: 50,
        blackMana: 0,
        blueMana: 1,
        greenMana: 0,
        redMana: 0,
        whiteMana: 0,
        colorlessMana: 1,

    },

    {
        id: '4',
        name:
        {
            english: 'Negate',
            spanish: 'Negar'

        },
        rarity: 'Comunes',
        englishRarity: 'Common',
        cardType:{
            english: 'Instant',
            spanish: 'Instantáneo'
        },
        description:{
            english: 'Counter target noncreature spell.',
            spanish: 'Contrarresta el hechizo objetivo que no sea de criatura.'
        },
        price: 0.25,
        img: 'https://i.ibb.co/4SJQkCW/negate.png',
        stock: 50,
        blackMana: 0,
        blueMana: 1,
        greenMana: 0,
        redMana: 0,
        whiteMana: 0,
        colorlessMana: 1,

    },



    /*UNCOMMON CARDS*/
    {
        id: '5',
        name:
        {
            english: 'Go for the Throat',
            spanish: 'Golpe a la garganta'

        },
        rarity: 'Poco Comunes',
        englishRarity: 'Uncommon',
        cardType:{
            english: 'Instant',
            spanish: 'Instantáneo'
        },
        description:{
            english: 'Destroy target nonartifact creature.',
            spanish: 'Destruye la criatura objetivo que no sea artefacto.'
        },
        price: 0.61,
        img: 'https://i.ibb.co/c2BmQgy/go-for-the-throat.png',
        stock: 50,
        blackMana: 1,
        blueMana: 0,
        greenMana: 0,
        redMana: 0,
        whiteMana: 0,
        colorlessMana: 1,

    },

    {
        id: '6',
        name:
        {
            english: 'Cut Down',
            spanish: 'Destrizar'

        },
        rarity: 'Poco Comunes',
        englishRarity: 'Uncommon',
        cardType:{
            english: 'Instant',
            spanish: 'Instantáneo'
        },
        description:{
            english: 'Destroy target creature with total power and toughness 5 or less.',
            spanish: 'Destruye la criatura objetivo con fuerza y resistencia totales de 5 o menos.'
        },
        price: 0.78,
        img: 'https://i.ibb.co/b64DS4D/cut-down.png',
        stock: 50,
        blackMana: 1,
        blueMana: 0,
        greenMana: 0,
        redMana: 0,
        whiteMana: 0,
        colorlessMana: 0,

    },

    {
        id: '7',
        name:
        {
            english: 'Corpse Appraiser',
            spanish: 'Tasador de cadáveres'

        },
        rarity: 'Poco Comunes',
        englishRarity: 'Uncommon',
        cardType:{
            english: 'Creature - Vampire Rogue',
            spanish: 'Criatura - Bribón Vampiro'
        },
    
        description:{
            english: 'When Corpse Appraiser enters the battlefield, exile up to one target creature card from a graveyard. If a card is put into the exile this way, look at the top three cards of your library, then put one of those cards into your hand and the rest into your graveyard.',
            spanish: 'Cuando el Tasador de cadáveres entre al campo de batalla, exilia hasta una carta de criatura objetivo de un cementerio. Si una carta va al exilio de esta manera, mira las tres primeras cartas de tu biblioteca, luego pon una de ellas en tu mano y el resto en tu cementerio'
        },
        price: 0.22,
        img: 'https://i.ibb.co/THWcKVb/corpse-appraiser.png',
        stock: 50,
        blackMana: 1,
        blueMana: 1,
        greenMana: 0,
        redMana: 1,
        whiteMana: 0,
        colorlessMana: 0,

    },

    {
        id: '8',
        name:
        {
            english: 'Bloodtithe Harvester',
            spanish: 'Cosechador de diezmos de sangre'

        },
        rarity: 'Poco Comunes',
        englishRarity: 'Uncommon',
        cardType:{
            english: 'Creature - Vampire',
            spanish: 'Criatura - Vampiro'
       },
        description:{
            english: `When Bloodthite Harvester enters the battlefield, create a Blood Token.
            {T}, Sacrifice Bloodtithe Harvester: Target creature gets -X/-X until the end of turn, where X is twice the number of Blood tokens you control. Activate only as a sorcery`,
            spanish: `Cuando el Cosechador de diezmos de sangre entre al campo de batalla, crea una ficha de Sangre.
            {T}, Sacrificar el Cosechador de diezmos de sangre: La criatura objetivo obtiene -X/-X hasta el final del turno, donde X es el doble de la cantidad de fichas de Sangre que controlas. Activa esto solo como un conjuro.`
        },
        price: 0.94,
        spanishDescription: '',
        img: 'https://i.ibb.co/M9TFMvy/bloodtithe-harvester.png',
        stock: 50,
        blackMana: 1,
        blueMana: 0,
        greenMana: 0,
        redMana: 1,
        whiteMana: 0,
        colorlessMana: 0,

    },

    /*RARE CARDS*/

    

    {
        id: '9',
        name:
        {
            english: 'Reckoner Bankbuster',
            spanish: 'Destruyebancos criminal'

        },
        rarity: 'Raras',
        englishRarity: 'Rare',
        cardType:{
            english: 'Artifact - Vehicle',
            spanish: 'Artefacto - Vehiculo'
        },
        description:{
            english: `Reckoner Bankbuster enters the battlefield with three charge counters on it.
            {2}, {T}, Remove a charge counter from Reckoner Bankbuster: Draw a card. Then if there are no charge counters on Reckoner Bankbuster, create a Treasure token and a 1/1 colorless Pilot creature token with "This creature crews Vehicles as though its power were 2 greater."
            Crew 3`,
            spanish: `El Destruyebancos criminal entra al campo de batalla con ters contadores de carga sobre él.
            {2}, {T}, Remover un contador de carga del Destruyebancos criminal: Roba una carta. Luego, si no hay ningún contador de carga sobre el Destruyebancos criminal, crea una ficha de Tesoro y una ficha de criatura Piloto incolora 1/1 con "Esta criatura tripula Vehículos como si su fuerza fuese de 2 más".
            Tripular 3.`
        },
        price: 4.00,
        img: 'https://i.ibb.co/kcKLJ1t/reckoner-bankbuster.png',
        stock: 50,
        blackMana: 0,
        blueMana: 0,
        greenMana: 0,
        redMana: 0,
        whiteMana: 0,
        colorlessMana: 2,

    },

    {
        id: '10',
        name:
        {
            english: 'Fable of the Mirror-Breaker',
            spanish: 'Fábula del rompe espejos'

        },
        rarity: 'Raras',
        englishRarity: 'Rare',
        cardType:{
            english: 'Enchantment - Saga',
            spanish: 'Encantamiento - Saga'
        },
        description:{
            english: `(As this Saga enters and after your draw step, add a lore counter.)
            I — Create a 2/2 red Goblin Shaman creature token with "Whenever this creature attacks, create a Treasure token."
            II — You may discard up to two cards. If you do, draw that many cards.
            III — Exile this Saga, then return it to the battlefield transformed under your control.`,
            spanish: `(En cuanto esta Saga entre, y después de tu paso de robar, agrega un contador de sabiduría. Sacrifícala después de III.)
            I — Crea una ficha de criatura Chamán Trasgo roja 2/2 con "Siempre que esta criatura ataque, crea una ficha de tesoro".
            II — Puedes descartar hasta dos cartas. Si lo haces, roba esa misma cantidad de cartas.
            III — Exilia esta Saga, luego regrésala al campo de batalla transformada bajo tu control.`
        },
        price: 24.00,
        img: 'https://i.ibb.co/vqHQbKc/fable-of-the-mirror-breaker.png',
        stock: 50,
        blackMana: 0,
        blueMana: 0,
        greenMana: 0,
        redMana: 1,
        whiteMana: 0,
        colorlessMana: 2,

    },

    {
        id: '11',
        name:
        {
            english: "Brotherhood's End",
            spanish: 'Fin de la hermandad'

        },
        rarity: 'Raras',
        englishRarity: 'Rare',
        cardType:{
            english: 'Sorcery',
            spanish: 'Conjuro'
        },
        description:{
            english: `Choose one:
            • Brotherhood's End deals 3 damage to each creature and each planeswalker.
            • Destroy all artifacts with mana value 3 or less.`,
            spanish: `Elige uno:
            • El Fin de la hermandad hace 3 puntos de daño a cada criatura y a cada planeswalker.
            • Destruye todos los artefactos con valor de maná 3 o menos.`
        },
        price: 6.12,
        img: 'https://i.ibb.co/nDJcqxQ/brotherhoods-end.png',
        stock: 50,
        blackMana: 0,
        blueMana: 0,
        greenMana: 0,
        redMana: 2,
        whiteMana: 0,
        colorlessMana: 1,

    },

    {
        id: '12',
        name:
        {
            english: 'Unlicensed Hearse',
            spanish: 'Vehículo fúnebre sin licencia'

        },
        rarity: 'Raras',
        englishRarity: 'Rare',
        cardType:{
            english: 'Artifact - Vehicle',
            spanish: 'Artefacto - Vehículo'
        },
        description:{
            english: `{T}: Exile up to two target cards from a single graveyard.
            Unlicensed Hearse's power and toughness are each equal to the number of cards exiled with it.
            Crew 2`,
            spanish: `{T}: Exilia hasta dos cartas objetivo de un mismo cementerio.
            Tanto la fuerza como la resistencia del Vehículo fúnebre sin licensia son iguales a la cantidad de cartas exiliadas con él
            Tripular 2.`
        },
        price: 11.07,
        img: 'https://i.ibb.co/gdv0qNr/unlicensed-hearse.png',
        stock: 50,
        blackMana: 0,
        blueMana: 0,
        greenMana: 0,
        redMana: 0,
        whiteMana: 0,
        colorlessMana: 2,

    },

    /*MYTHIC RARE CARDS*/

    {
        id: '13',
        name:
        {
            english: 'Sheoldred, the Apocalypse',
            spanish: 'Sheoldred, el Apocalipsis'

        },
        rarity: 'Raras Míticas',
        englishRarity: 'Mythic Rare',
        cardType:{
            english: 'Legendary Creature — Phyrexian Praetor',
            spanish: 'Criatura Legendaria - Magistrado Pirexiano'
        },
        description:{
            english: `Deathtouch
            Whenever you draw a card, you gain 2 life.
            Whenever an opponent draws a card, they lose 2 life.`,
            spanish: `Toque mortal.
            Siempre que robes una carta, ganas 2 vidas.
            Siempre que un oponente robe una carta, pierde 2 vidas.`
        },
        price: 72.22,
        img: 'https://i.ibb.co/34hG1y0/sheoldred-the-apocalypse.jpg',
        stock: 50,
        blackMana: 2,
        blueMana: 0,
        greenMana: 0,
        redMana: 0,
        whiteMana: 0,
        colorlessMana: 2,

    },

    {
        id: '14',
        name:
        {
            english: 'The Wandering Emperor',
            spanish: 'La emperatriz errante'

        },
        rarity: 'Raras Míticas',
        englishRarity: 'Mythic Rare',
        cardType:{
            english: 'Legendary Planeswalker',
            spanish: 'Planeswalker Legendario'
        },
        description:{
            english:`Flash
            As long as The Wandering Emperor entered the battlefield this turn, you may activate her loyalty abilities any time you could cast an instant.
            +1: Put a +1/+1 counter on up to one target creature. It gains first strike until end of turn.
            −1: Create a 2/2 white Samurai creature token with vigilance.
            −2: Exile target tapped creature. You gain 2 life.`,
            spanish: `Destello
            Mientras La emperatriz errante haya entrado al campo de batalla este turno, puedes activar sus habilidades de lealtad en cualquier momento en que pudieras lanzar un instantáneo.
            +1: Pon un contador +1/+1 sobre hasta una criatura objetivo, gana la habilidad de dañar primero hasta el final del turno.
            −1: Crea una ficha de criatura Samurái blanca 2/2 con la habilidad de vigilancia.
            −2: Exilia la criatura girada objetivo. Ganas 2 vidas.`
        },
        price: 23.62,
        img: 'https://i.ibb.co/fD8g1s7/the-wandering-emperor.png',
        stock: 50,
        blackMana: 0,
        blueMana: 0,
        greenMana: 0,
        redMana: 0,
        whiteMana: 2,
        colorlessMana: 2,

    },

    {
        id: '15',
        name:
        {
            english: 'Liliana of the Veil',
            spanish: 'Liliana del Velo'

        },
        rarity: 'Raras Míticas',
        englishRarity: 'Mythic Rare',
        cardType:{
            english: 'Legendary Planeswalker — Liliana',
            spanish: 'Planeswalker Legendario - Liliana'
        },
        description:{
            english:`+1: Each player discards a card.
            −2: Target player sacrifices a creature.
            −6: Separate all permanents target player controls into two piles. That player sacrifices all permanents in the pile of their choice.`,
            spanish: `+1: Cada jugador descarta una carta.
            −2: El jugador objetivo sacrifica una criatura.
            −6: Separa todos los permanentes que controla el jugador objetivo en dos montones. Ese jugador sacrifica todos los permanentes del montón que elija.`
        },
        price: 20.10,
        img: 'https://i.ibb.co/cc12JzX/liliana-of-the-veil.png',
        stock: 50,
        blackMana: 2,
        blueMana: 0,
        greenMana: 0,
        redMana: 0,
        whiteMana: 0,
        colorlessMana: 1,

    },

    {
        id: '16',
        name:
        {
            english: 'Sanctuary Warden',
            spanish: 'Guarda del santuario'

        },
        rarity: 'Raras Míticas',
        englishRarity: 'Mythic Rare',
        cardType:{
            english: 'Creature — Angel Soldier',
            spanish: 'Criatura - Soldado Ángel'
        },
        description:{
            english: `Flying
            Sanctuary Warden enters the battlefield with two shield counters on it.
            Whenever Sanctuary Warden enters the battlefield or attacks, you may remove a counter from a creature or planeswalker you control. If you do, draw a card and create a 1/1 green and white Citizen creature token.`,
            spanish: `Vuela.
            La Guarda del santuario entra al campo de batalla con dos contadores de escudo sobre ella. Siempre que la Guarda del santuario entre al campo de batalla o ataque, puedes remover un contador de una criatura o planeswalker que controlas. Si lo haces, roba una carta y crea una ficha de criatura Ciudadano verde y blanca 1/1`
        },
        price: 1.64,
        img: 'https://i.ibb.co/Jd58zyW/sanctuary-warden.png',
        stock: 50,
        blackMana: 0,
        blueMana: 0,
        greenMana: 0,
        redMana: 0,
        whiteMana: 2,
        colorlessMana: 4,

    }

]



export const getCards = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cards);
        }, 750)
    })
}

export const getCardById = (cardId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cards.find(card => card.id === cardId))
        }, 750)
    })
}

export const getCardBySearchName = (name) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const foundCard = cards.find(card => (card.name.english.toLowerCase().includes(name.toLowerCase())))
            
            if(foundCard!==undefined){
                resolve(foundCard)
            } else{
                resolve("not found")
            }
        }, 750)
    })
}


export const getCardByRarity = (rarityId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cards.filter(card => card.rarity === rarityId))
        }, 750)
    })
}