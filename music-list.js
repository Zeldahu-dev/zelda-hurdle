const allTags = ["Battle", "Town", "Dungeon", "Event", "Character", "Area", "Other"];

var musicNameList = [
    // The Legend of Zelda
    // https://soundcloud.com/zelda-soundtracks/sets/legend-of-zelda-nes
    {
        id: 0,
        name: "Death Mountain - The Legend of Zelda",
        tags: ["Dungeon"],
    },
    // Outer Wilds
    // https://soundcloud.com/andrewprahlow/sets/outer-wilds-original-soundtrack
    {
        id: 1,
        name: "Timber Hearth - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 2,
        name: "Outer Wilds - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 3,
        name: "The Museum - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 4,
        name: "Space - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 5,
        name: "Castaways - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 6,
        name: "The Sun Station - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 7,
        name: "Main Title - Outer Wilds",
        tags: ["Other"],
    },
    {
        id: 8,
        name: "The Search - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 9,
        name: "The Uncertainty Principle - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 10,
        name: "End Times - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 11,
        name: "22 Minutes - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 12,
        name: "The Nomai - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 13,
        name: "The Ash Twin Project - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 14,
        name: "Dark Bramble - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 15,
        name: "Giants Deep - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 16,
        name: "Nomai Ruins - Outer Wilds",
        tags: ["Dungeon"],
    },
    {
        id: 17,
        name: "Final Voyage - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 18,
        name: "The Ancient Glade - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 19,
        name: "Curiosity - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 20,
        name: "Travelers - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 21,
        name: "Let There Be Light - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 22,
        name: "14.3 Billion Years - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 23,
        name: "Morning - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 24,
        name: "Campfire Song Pre Alpha - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 25,
        name: "Into the Wilds Reveal Trailer - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 26,
        name: "Arrow of Time Gameplay Trailer - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 27,
        name: "We Have Liftoff Launch Trailer - Outer Wilds",
        tags: ["Event"],
    },
    {
        id: 28,
        name: "A Terrible Fate - Outer Wilds",
        tags: ["Event"],
    },
    // Outer Wilds: Echoes of the Eye
    // https://soundcloud.com/andrewprahlow/sets/outer-wilds-echoes-of-the-eye
    {
        id: 29,
        name: "Into Shadow - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 30,
        name: "The River - Outer Wilds: Echoes of the Eye",
        tags: ["Area"],
    },
    {
        id: 31,
        name: "Rivers End - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 32,
        name: "The First Seekers - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 33,
        name: "The Premonition - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 34,
        name: "Strange Flames - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 35,
        name: "A Dream of Home - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 36,
        name: "Eternal Halls - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 37,
        name: "Elegy for the Rings - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 38,
        name: "The Forbidden Archives - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 39,
        name: "Test Chamber Three - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 40,
        name: "Sealed Away - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 41,
        name: "Fear and Ashes - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 42,
        name: "The Lost Waltz - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 43,
        name: "Dark Passage - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 44,
        name: "Into the Vault - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 45,
        name: "Secret Ways - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 46,
        name: "The Sound of Water - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 47,
        name: "Echoes of the Eye - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 48,
        name: "Departure - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 49,
        name: "Travelers Encore - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 50,
        name: "End of the Wilds - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    {
        id: 51,
        name: "Postlude - Outer Wilds: Echoes of the Eye",
        tags: ["Event"],
    },
    // Ultrakill
    // https://soundcloud.com/sexballs/sets/ultrakill-infinite-hyperdeath-act-1-ost
    {
        id: 52,
        name: "The Fire Is Gone - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 53,
        name: "Into the Fire - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 54,
        name: "Unstoppable Force - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 55,
        name: "Cerberus - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 56,
        name: "A Thousand Greetings - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 57,
        name: "A Shattered Illusion - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 58,
        name: "A Complete and Utter Destruction Of The Senses - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 59,
        name: "Sanctuary in the Garden Of The Mind- Ultrakill",
        tags: ["Event"],
    },
    {
        id: 60,
        name: "Castle Vein - Ultrakill",
        tags: ["Area"],
    },
    {
        id: 61,
        name: "Debussy, Clair De Lune - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 62,
        name: "Versus - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 63,
        name: "Cold Winds - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 64,
        name: "Requiem - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 65,
        name: "Panic Betrayer - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 66,
        name: "In the Presence of a King - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 67,
        name: "Guts - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 68,
        name: "Glory - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 69,
        name: "Bach, Bwv 639, I Call to You Lord Jesus Christ - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 70,
        name: "Divine Intervention - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 71,
        name: "Disgrace, Humiliation - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 72,
        name: "Take Care - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 73,
        name: "Meganeko, The Cyber Grind - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 74,
        name: "The Spinal Staircase - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 75,
        name: "Chaos - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 76,
        name: "Order - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 77,
        name: "Sunshine Mirage - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 78,
        name: "Insert Disc 2 - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 79,
        name: "Dune Eternal - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 80,
        name: "Sands of Tide - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 81,
        name: "Dancer in the Darkness - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 82,
        name: "Duel (Versus Reprise) - Ultrakill",
        tags: ["Battle"],
    },
    {
        id: 83,
        name: "Deep Blue - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 84,
        name: "He Is the Light in My Darkness - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 85,
        name: "Death Odyssey - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 86,
        name: "Death Odyssey Aftermath - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 87,
        name: "The Abyss and the Serpent - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 88,
        name: "Chord of the Crooked Saints - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 89,
        name: "Altars of Apostasy - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 90,
        name: "Fallen Angel - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 91,
        name: "The Death of Gods Will - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 92,
        name: "Silence. Introspection. - Ultrakill",
        tags: ["Event"],
    },
    {
        id: 93,
        name: "Beethoven, 7th Symphony 2nd Movement 'Allegreto' - Ultrakill",
        tags: ["Event"],
    },
];