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
];