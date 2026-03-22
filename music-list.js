const allTags = ["Battle", "Town", "Dungeon", "Event", "Character", "Area", "Other"];

var musicNameList = [
    // The Legend of Zelda
    // https://soundcloud.com/zelda-soundtracks/sets/legend-of-zelda-nes
    {
        id: 0,
        name: "Death Mountain - The Legend of Zelda",
        tags: ["Dungeon"],
    },
    {
        id: 1,
        name: "Dungeon - The Legend of Zelda",
        tags: ["Dungeon"],
    },
    {
        id: 2,
        name: "Overworld - The Legend of Zelda",
        tags: ["Area"],
    },
    {
        id: 3,
        name: "Intro/Main Theme - The Legend of Zelda",
        tags: ["Other"],
    },
    {
        id: 4,
        name: "Ending Theme - The Legend of Zelda",
        tags: ["Other"],
    },
    {
        id: 5,
        name: "Menu/Game Over - The Legend of Zelda",
        tags: ["Other", "Event"],
    },
    // The Adventure of Link
    // https://soundcloud.com/zhtotk2
    {
        id: 6,
        name: "Battle Theme - The Adventure of Link",
        tags: ["Battle"],
    },
    {
        id: 7,
        name: "Boss Battle - The Adventure of Link",
        tags: ["Battle"],
    },
    {
        id: 8,
        name: "Dark Link Battle - The Adventure of Link",
        tags: ["Battle"],
    },
    {
        id: 9,
        name: "Ending Theme - The Adventure of Link",
        tags: ["Other"],
    },
    {
        id: 10,
        name: "Staff Credits - The Adventure of Link",
        tags: ["Other"],
    },
    {
        id: 11,
        name: "Great Palace - The Adventure of Link",
        tags: ["Dungeon"],
    },
    {
        id: 12,
        name: "Inside a House - The Adventure of Link",
        tags: ["Area", "Town"],
    },
    {
        id: 13,
        name: "Overworld - The Adventure of Link",
        tags: ["Area"],
    },
    {
        id: 14,
        name: "Palace - The Adventure of Link",
        tags: ["Dungeon"],
    },
    {
        id: 15,
        name: "Title Screen/Prologue - The Adventure of Link",
        tags: ["Other"],
    },
    {
        id: 16,
        name: "Town - The Adventure of Link",
        tags: ["Town"],
    },
    //// A Link to the Past
    // https://soundcloud.com/anderouspi/sets/the-legend-of-zelda-a-link-to-the-past
    // https://soundcloud.com/mrz-474347263
    // https://soundcloud.com/treeman02
    {
        id: 17,
        name: "Cave - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 18,
        name: "Forest of Mystery (Lost Woods) - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 19,
        name: "Hyrule Castle - A Link to the Past",
        tags: ["Dungeon"],
    },
    {
        id: 20,
        name: "Overworld - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 21,
        name: "Princess Zelda's Rescue - A Link to the Past",
        tags: ["Event", "Character"],
    },
    {
        id: 22,
        name: "Dark World - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 23,
        name: "Beautiful Hyrule (Ending Theme) - A Link to the Past",
        tags: ["Other"],
    },
    {
        id: 24,
        name: "Boss Battle - A Link to the Past",
        tags: ["Battle"],
    },
    {
        id: 25,
        name: "Soldier's Chase - A Link to the Past",
        tags: ["Battle", "Event"],
    },
    {
        id: 26,
        name: "Dark Dungeon - A Link to the Past",
        tags: ["Dungeon"],
    },
    {
        id: 27,
        name: "Death Mountain/Forest - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 28,
        name: "File Select/Fairy's Fountain - A Link to the Past",
        tags: ["Area", "Other"],
    },
    {
        id: 29,
        name: "Fortune Teller - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 30,
        name: "Ganon Battle - A Link to the Past",
        tags: ["Battle"],
    },
    {
        id: 31,
        name: "Guessing-Game House - A Link to the Past",
        tags: ["Area", "Town"],
    },
    {
        id: 32,
        name: "Sanctuary - A Link to the Past",
        tags: ["Area"],
    },
    {
        id: 33,
        name: "Kakariko Village - A Link to the Past",
        tags: ["Town"],
    },
    {
        id: 34,
        name: "Dungeon - A Link to the Past",
        tags: ["Dungeon"],
    },
    {
        id: 35,
        name: "Maiden's Rescue - A Link to the Past",
        tags: ["Event"],
    },
    {
        id: 36,
        name: "Time of the Falling Rain - A Link to the Past",
        tags: ["Area", "Event"],
    },
    {
        id: 37,
        name: "A Rabbit in the Dark World - A Link to the Past",
        tags: ["Area", "Event"],
    },
    {
        id: 38,
        name: "Ganon - A Link to the Past",
        tags: ["Character", "Event"],
    },
    {
        id: 39,
        name: "Prologue Theme - Seal of the Seven Maidens - A Link to the Past",
        tags: ["Other"],
    },
    {
        id: 40,
        name: "Triforce Room - A Link to the Past",
        tags: ["Area", "Event"],
    },
    {
        id: 41,
        name: "Title Theme - A Link to the Past",
        tags: ["Other"],
    },
    {
        id: 42,
        name: "Staff Credits - A Link to the Past",
        tags: ["Other"],
    },
    // Link's Awakening
    // https://soundcloud.com/kevhann/sets/disc-3-gb-the-legend-of-zelda-links-awakening-ost-rare-4-disc-switchgb
    // https://soundcloud.com/kevhann/sets/disc-4-gb-the-legend-of-zelda-links-awakening-ost-rare-4-disc-switchgb
    {
        id: 43,
        name: "Prologue Theme - Link's Awakening",
        tags: ["Other", "Event"],
    },
    {
        id: 44,
        name: "Opening/Title Theme - Link's Awakening",
        tags: ["Other", "Event"],
    },
    {
        id: 45,
        name: "Name Entry - Link's Awakening",
        tags: ["Other"],
    },
    {
        id: 46,
        name: "Waking Up at Talin's House - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 47,
        name: "Owl - Link's Awakening",
        tags: ["Event", "Character"],
    },
    {
        id: 48,
        name: "Overworld - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 49,
        name: "Mabe Village - Link's Awakening",
        tags: ["Town"],
    },
    {
        id: 50,
        name: "Mysterious Forest - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 51,
        name: "Guardian Acorn - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 52,
        name: "Shop - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 53,
        name: "Fairy's Fountain - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 54,
        name: "Trendy Game - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 55,
        name: "Inside a House - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 56,
        name: "Ballad of the Wind Fish (Marin) - Link's Awakening",
        tags: ["Event", "Character"],
    },
    {
        id: 57,
        name: "Cave - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 58,
        name: "Level 1 - Tail Cave - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 59,
        name: "Underground Passage - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 60,
        name: "Mini Boss Battle - Link's Awakening",
        tags: ["Battle"],
    },
    {
        id: 61,
        name: "Boss Battle - Link's Awakening",
        tags: ["Battle"],
    },
    {
        id: 62,
        name: "Victory Fanfare - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 63,
        name: "Rescue Bow Wow Mission - Link's Awakening",
        tags: ["Event", "Battle"],
    },
    {
        id: 64,
        name: "Mr. Write's House - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 65,
        name: "Telephone Booth - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 66,
        name: "Level 2 - Bottle Grotto - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 67,
        name: "Richard's Villa - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 68,
        name: "Kiki's Gratitude - Link's Awakening",
        tags: ["Event", "Character"],
    },
    {
        id: 69,
        name: "Kanalet Castle - Link's Awakening",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 70,
        name: "Level 3 - Key Cave - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 71,
        name: "Chased by Bees - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 72,
        name: "Animal Village - Link's Awakening",
        tags: ["Town"],
    },
    {
        id: 73,
        name: "Christine's House - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 74,
        name: "Dream Shrine - Link's Awakening",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 75,
        name: "Ballad of the Wind Fish (Shore) - Link's Awakening",
        tags: ["Event", "Area"],
    },
    {
        id: 76,
        name: "Ballad of the Wind Fish - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 77,
        name: "Tal Tal Heights - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 78,
        name: "Level 4 - Angler's Tunnel - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 79,
        name: "Manbo's Mambo - Link's Awakening",
        tags: ["Event", "Character"],
    },
    {
        id: 80,
        name: "House by the Cove - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 81,
        name: "Under the Bridge - Link's Awakening",
        tags: ["Area"],
    },
    {
        id: 82,
        name: "Level 5 - Catfish's Maw - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 83,
        name: "The Frog's Song of Soul - Link's Awakening",
        tags: ["Event", "Character"],
    },
    {
        id: 84,
        name: "Southern Face Shrine - Link's Awakening",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 85,
        name: "Level 6 - Face Shrine - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 86,
        name: "Color Dungeon - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 87,
        name: "Cucco House - Link's Awakening",
        tags: ["Area", "Town"],
    },
    {
        id: 88,
        name: "Level 7 - Eagle's Tower - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 89,
        name: "Turtle Rock Battle - Link's Awakening",
        tags: ["Battle"],
    },
    {
        id: 90,
        name: "Level 8 - Turtle Rock - Link's Awakening",
        tags: ["Dungeon"],
    },
    {
        id: 91,
        name: "Rapid's Ride - Link's Awakening",
        tags: ["Event", "Area"],
    },
    {
        id: 92,
        name: "Ballad of the Wind Fish (Instruments) - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 93,
        name: "Wind Fish's Egg - Link's Awakening",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 94,
        name: "Shadow Nightmare - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 95,
        name: "Shadow Nightmare Battle - Link's Awakening",
        tags: ["Battle"],
    },
    {
        id: 96,
        name: "Victory Fanfare (Shadow Nightmare) - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 97,
        name: "Epilogue Theme (Koholint Island Disappears) - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 98,
        name: "Staff Credits - Link's Awakening",
        tags: ["Other"],
    },
    {
        id: 99,
        name: "Game Over - Link's Awakening",
        tags: ["Other", "Event"],
    },
    {
        id: 100,
        name: "Name Entry (Totakeke) - Link's Awakening",
        tags: ["Other"],
    },
    {
        id: 101,
        name: "Name Entry (Zelda) - Link's Awakening",
        tags: ["Other"],
    },
    {
        id: 102,
        name: "Sword Search on the Beach - Link's Awakening",
        tags: ["Area", "Event"],
    },
    {
        id: 103,
        name: "Ascent / The Wind Fish - Link's Awakening",
        tags: ["Event"],
    },
    {
        id: 104,
        name: "Name Entry (Lolo) - Link's Awakening",
        tags: ["Other"],
    },
    {
        id: 105,
        name: "Name Entry (Moyse) - Link's Awakening",
        tags: ["Other"],
    },
    // Ocarina of Time
    // https://soundcloud.com/ocarina-of-time-ost/sets/ocarina-of-time-ost
    // https://soundcloud.com/moi666007/sets/tloz-oot
    {
        id: 106,
        name: "Title Theme - Ocarina of Time",
        tags: ["Other"],
    },
    {
        id: 107,
        name: "Ganondorf (Entrance) - Ocarina of Time",
        tags: ["Character", "Event"],
    },
    {
        id: 108,
        name: "Great Deku Tree - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 109,
        name: "Navi the Fairy - Ocarina of Time",
        tags: ["Event", "Character"],
    },
    {
        id: 110,
        name: "Inside a House - Ocarina of Time",
        tags: ["Area", "Town"],
    },
    {
        id: 111,
        name: "Kokiri Forest - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 112,
        name: "Shop - Ocarina of Time",
        tags: ["Area", "Town"],
    },
    {
        id: 113,
        name: "Kaepora Gaebora - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 114,
        name: "Shooting Gallery - Ocarina of Time",
        tags: ["Area", "Town"],
    },
    {
        id: 115,
        name: "Hyrule Market - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 116,
        name: "Hyrule Castle Courtyard - Ocarina of Time",
        tags: ["Area", "Town"],
    },
    {
        id: 117,
        name: "Kakariko Village - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 118,
        name: "Zelda's Lullaby - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 119,
        name: "Lon Lon Ranch - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 120,
        name: "Mini Game - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 121,
        name: "Goron City - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 122,
        name: "File Select/Fairy's Fountain - Ocarina of Time",
        tags: ["Area", "Other"],
    },
    {
        id: 123,
        name: "Middle Boss Battle - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 124,
        name: "Potion Shop - Ocarina of Time",
        tags: ["Area", "Town"],
    },
    {
        id: 125,
        name: "Lost Woods - Ocarina of Time",
        tags: ["Area"],
    },
    {
        id: 126,
        name: "Dodongo Boss Battle - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 127,
        name: "Temple of Time - Ocarina of Time",
        tags: ["Area"],
    },
    {
        id: 128,
        name: "Dodongo's Cavern - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 129,
        name: "Zora's Domain - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 130,
        name: "Inside Jabu Jabu's Belly - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 131,
        name: "Chamber of the Sages - Ocarina of Time",
        tags: ["Area", "Event"],
    },
    {
        id: 132,
        name: "Ganondorf - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 133,
        name: "Sheik - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 134,
        name: "Boss Battle - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 135,
        name: "The Legend of Hyrule - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 136,
        name: "Inside the Great Deku Tree - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 137,
        name: "Battle - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 138,
        name: "Shadow Temple - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 139,
        name: "Requiem of Spirit - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 140,
        name: "Gerudo Valley - Ocarina of Time",
        tags: ["Area"],
    },
    {
        id: 141,
        name: "Water Temple - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 142,
        name: "Spirit Temple - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 143,
        name: "Ice Cavern - Ocarina of Time",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 144,
        name: "Bolero of Fire - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 145,
        name: "Serenade of Water - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 146,
        name: "Prelude of Light - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 147,
        name: "Forest Temple - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 148,
        name: "Ingo - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 149,
        name: "Windmill Hut/Song of Storms - Ocarina of Time",
        tags: ["Area", "Event", "Town"],
    },
    {
        id: 150,
        name: "Kakariko Village (Orchestra) - Ocarina of Time",
        tags: ["Town"],
    },
    {
        id: 151,
        name: "Minuet of Forest - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 152,
        name: "Horse Race - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 153,
        name: "Koume and Kotake - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 154,
        name: "Meeting Again with Zelda - Ocarina of Time",
        tags: ["Character"],
    },
    {
        id: 155,
        name: "Ganon's Castle Bridge - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 156,
        name: "Ganon's Castle - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 157,
        name: "Ganon's Tower - Ocarina of Time",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 158,
        name: "Ganondorf Battle - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 159,
        name: "Escape from Ganon's Castle - Ocarina of Time",
        tags: ["Event", "Area"],
    },
    {
        id: 160,
        name: "Ganon Battle (Final Battle) - Ocarina of Time",
        tags: ["Battle"],
    },
    {
        id: 161,
        name: "Seal of the Seven Sages - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 162,
        name: "Zelda's Last Good-bye - Ocarina of Time",
        tags: ["Event", "Character"],
    },
    {
        id: 163,
        name: "End Credits - Ocarina of Time",
        tags: ["Other"],
    },
    {
        id: 164,
        name: "Hyrule Field - Ocarina of Time",
        tags: ["Area"],
    },
    {
        id: 165,
        name: "Nocturne of Shadow - Ocarina of Time",
        tags: ["Event"],
    },
    {
        id: 166,
        name: "End Credits (3DS) - Ocarina of Time",
        tags: ["Other"],
    },
    {
        id: 167,
        name: "Fire Temple - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 168,
        name: "Fire Temple (Beta version) - Ocarina of Time",
        tags: ["Dungeon"],
    },
    {
        id: 169,
        name: "Trailer Theme - Riders of Doom - Ocarina of Time",
        tags: ["Other"],
    },
    {
        id: 170,
        name: "Lon Lon Ranch (Orchestra) - Ocarina of Time",
        tags: ["Town"],
    },
    // Majora's Mask
    // https://soundcloud.com/code-masterv/sets/the-legend-of-zelda-majoras-mask
    // https://soundcloud.com/tas-runs/sets/majoras-mask-japanese-ost
    {
        id: 171,
        name: "Title Theme - Majora's Mask",
        tags: ["Other"],
    },
    {
        id: 172,
        name: "Opening Theme - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 173,
        name: "Chase - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 174,
        name: "Cave - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 175,
        name: "Majora - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 176,
        name: "Clock Tower - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 177,
        name: "Happy Mask Salesman - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 178,
        name: "Clock Town - First Day - Majora's Mask",
        tags: ["Town"],
    },
    {
        id: 179,
        name: "Mayor's Meeting - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 180,
        name: "Milk Bar - Majora's Mask",
        tags: ["Area", "Town"],
    },
    {
        id: 181,
        name: "Clock Town - Second Day - Majora's Mask",
        tags: ["Town"],
    },
    {
        id: 182,
        name: "Kamaro - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 183,
        name: "Swordsman's School - Majora's Mask",
        tags: ["Area", "Town"],
    },
    {
        id: 184,
        name: "Clock Town - Third Day - Majora's Mask",
        tags: ["Town"],
    },
    {
        id: 185,
        name: "Keaton - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 186,
        name: "Rosa Sisters - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 187,
        name: "Final Hours - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 188,
        name: "Astral Observatory - Majora's Mask",
        tags: ["Area", "Town"],
    },
    {
        id: 189,
        name: "Song of Healing - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 190,
        name: "Termina Field - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 191,
        name: "Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 192,
        name: "Southern Swamp - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 193,
        name: "Boat Cruise - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 194,
        name: "Deku Palace - Majora's Mask",
        tags: ["Area", "Town"],
    },
    {
        id: 195,
        name: "Sonata of Awakening - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 196,
        name: "Woodfall Temple - Majora's Mask",
        tags: ["Dungeon"],
    },
    {
        id: 197,
        name: "Middle Boss Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 198,
        name: "Calling the Four Giants - Majora's Mask",
        tags: ["Event", "Character"],
    },
    {
        id: 199,
        name: "Oath to Order - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 200,
        name: "Goron Lullaby - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 201,
        name: "Snowhead Temple - Majora's Mask",
        tags: ["Dungeon"],
    },
    {
        id: 202,
        name: "Boss Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 203,
        name: "Goron Race - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 204,
        name: "Frog Song - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 205,
        name: "Ghosts Raid - Majora's Mask",
        tags: ["Event", "Battle"],
    },
    {
        id: 206,
        name: "Cremia - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 207,
        name: "Great Bay Coast - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 208,
        name: "Pirate Fortress - Majora's Mask",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 209,
        name: "Zora Band - Piano Practice - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 210,
        name: "Zora Band - Bass & Guitar Session - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 211,
        name: "Zora Band - Piano Solo - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 212,
        name: "New Wave Bossa Nova - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 213,
        name: "Great Bay Temple - Majora's Mask",
        tags: ["Dungeon"],
    },
    {
        id: 214,
        name: "Ballad of the Wind Fish - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 215,
        name: "Sharp's Curse - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 216,
        name: "Music Box House - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 217,
        name: "Elegy of Emptiness - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 218,
        name: "Stone Tower Temple - Majora's Mask",
        tags: ["Dungeon"],
    },
    {
        id: 219,
        name: "Stone Tower Temple (Inverted) - Majora's Mask",
        tags: ["Dungeon"],
    },
    {
        id: 220,
        name: "The Moon Decends - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 221,
        name: "Majora's Mask Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 222,
        name: "Majora's Incarnate Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 223,
        name: "Majora's Wrath Battle - Majora's Mask",
        tags: ["Battle"],
    },
    {
        id: 224,
        name: "Epilogue Theme (The Moon Disappears) - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 225,
        name: "Epilogue Theme (The Giants Exit) - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 226,
        name: "End Credits - Majora's Mask",
        tags: ["Other"],
    },
    {
        id: 227,
        name: "Zora Band - Bass Practice - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 228,
        name: "Zora Band - Drums Practice - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 229,
        name: "Happy Reunion - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 230,
        name: "Ikana Valley - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 231,
        name: "Ikana's Ancient Castle - Majora's Mask",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 232,
        name: "Mikau - Majora's Mask",
        tags: ["Character"],
    },
    {
        id: 233,
        name: "Snow Mountain - Majora's Mask",
        tags: ["Area"],
    },
    {
        id: 234,
        name: "Bremen March - Majora's Mask",
        tags: ["Event"],
    },
    {
        id: 235,
        name: "The Indigo-Go's - Majora's Mask",
        tags: ["Event", "Character"],
    },
    {
        id: 236,
        name: "Trailer Intro Theme - Majora's Mask",
        tags: ["Other"],
    },
    // Oracle of Ages/Seasons
    // https://soundcloud.com/oraclo-gazpacho/sets/the-legend-of-zelda-oracle-of
    {
        id: 237,
        name: "Temple of Seasons - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 238,
        name: "Inside a House - Oracle of Ages/Seasons",
        tags: ["Area", "Town"],
    },
    {
        id: 239,
        name: "Game Over - Oracle of Ages/Seasons",
        tags: ["Event", "Other"],
    },
    {
        id: 240,
        name: "Veran - Oracle of Ages/Seasons",
        tags: ["Character"],
    },
    {
        id: 241,
        name: "Final Confrontation - Oracle of Ages/Seasons",
        tags: ["Event", "Battle"],
    },
    {
        id: 242,
        name: "The Room of Rites - Oracle of Ages/Seasons",
        tags: ["Area", "Event"],
    },
    {
        id: 243,
        name: "Maku Tree - Oracle of Ages/Seasons",
        tags: ["Character", "Event"],
    },
    {
        id: 244,
        name: "Sadness - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 245,
        name: "Secret Maze on the Sea of No Returns - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 246,
        name: "Darkness Spreads - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 247,
        name: "The Pirates - Oracle of Ages/Seasons",
        tags: ["Character", "Area"],
    },
    {
        id: 248,
        name: "A Date with Rosa - Oracle of Ages/Seasons",
        tags: ["Event", "Character"],
    },
    {
        id: 249,
        name: "Epilogue Theme - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 250,
        name: "Ending Theme - Oracle of Ages/Seasons",
        tags: ["Other"],
    },
    {
        id: 251,
        name: "Staff Credits - Oracle of Ages/Seasons",
        tags: ["Other"],
    },
    {
        id: 252,
        name: "Maple - Oracle of Ages/Seasons",
        tags: ["Character"],
    },
    {
        id: 253,
        name: "Rush for Maple's Items - Oracle of Ages/Seasons",
        tags: ["Event", "Character"],
    },
    {
        id: 254,
        name: "Boss Battle - Oracle of Ages/Seasons",
        tags: ["Battle"],
    },
    {
        id: 255,
        name: "Dark Dragon/Spider Veran Battle - Oracle of Ages/Seasons",
        tags: ["Battle"],
    },
    {
        id: 256,
        name: "Twinrova Battle - Oracle of Ages/Seasons",
        tags: ["Battle"],
    },
    {
        id: 257,
        name: "Ganon Battle - Oracle of Ages/Seasons",
        tags: ["Battle"],
    },
    {
        id: 258,
        name: "Zelda Awakens - Oracle of Ages/Seasons",
        tags: ["Event", "Character"],
    },
    {
        id: 259,
        name: "Great Moblin Keep - Oracle of Ages/Seasons",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 260,
        name: "Windmill Hut/Song of Storms - Oracle of Ages/Seasons",
        tags: ["Area", "Town"],
    },
    {
        id: 261,
        name: "Goron Mountain - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 262,
        name: "Intro Theme: Two Quests of the Triforce - Oracle of Ages/Seasons",
        tags: ["Other", "Event"],
    },
    {
        id: 263,
        name: "Ominous Message/Northern Peak - Oracle of Ages/Seasons",
        tags: ["Event", "Area"],
    },
    {
        id: 264,
        name: "Overworld (Past) - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 265,
        name: "Temple of Seasons - Ruins - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 266,
        name: "Tokay Island - Oracle of Ages/Seasons",
        tags: ["Area", "Town"],
    },
    {
        id: 267,
        name: "Tarm Ruins/Lost Woods - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 268,
        name: "Ambi's Palace - Oracle of Ages/Seasons",
        tags: ["Area", "Town"],
    },
    {
        id: 269,
        name: "Trouble on the Raft! - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 270,
        name: "Nayru's Song - Oracle of Ages/Seasons",
        tags: ["Character"],
    },
    {
        id: 271,
        name: "Dancing with Din - Oracle of Ages/Seasons",
        tags: ["Character"],
    },
    {
        id: 272,
        name: "Lynna City - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 273,
        name: "Lynna Village (Past) - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 274,
        name: "Horon Village - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 275,
        name: "Hide 'n' Seek - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 276,
        name: "Zora Village - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 277,
        name: "Sunken Village - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 278,
        name: "Level 0 (Ages) - Maku Road - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 279,
        name: "Level 1 (Ages) - Spirit's Grave - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 280,
        name: "Level 2 (Ages) - Wing Dungeon - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 281,
        name: "Level 3 (Ages) - Moonlit Grotto - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 282,
        name: "Level 4 (Ages) - Skull Dungeon - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 283,
        name: "Level 5 (Ages) - Crown Dungeon - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 284,
        name: "Level 6 (Ages) - Mermaid Cave - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 285,
        name: "Level 7 (Ages) - Jabu Jabu's Belly - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 286,
        name: "Level 8 (Ages) - Ancient Tomb - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 287,
        name: "Level 0 (Seasons) - Hero's Cave - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 288,
        name: "Level 1 (Seasons) - Gnarled Root Dungeon - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 289,
        name: "Level 2 (Seasons) - Snake's Remains - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 290,
        name: "Level 3 (Seasons) - Poison Moth's Lair - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 291,
        name: "Level 4 (Seasons) - Dancing Dragon Dungeon - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 292,
        name: "Level 5 (Seasons) - Unicorn's Cave - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 293,
        name: "Level 6 (Seasons) - Ancient Ruins - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 294,
        name: "Level 7 (Seasons) - Explorer's Crypt - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 295,
        name: "Level 8 (Seasons) - Sword & Shield Maze - Oracle of Ages/Seasons",
        tags: ["Dungeon"],
    },
    {
        id: 296,
        name: "Under the Sea - Oracle of Ages/Seasons",
        tags: ["Event", "Area"],
    },
    {
        id: 297,
        name: "That PopularSubrosian Dance - Oracle of Ages/Seasons",
        tags: ["Event"],
    },
    {
        id: 298,
        name: "Symmetry City - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 299,
        name: "Symmetry City (Past) - Oracle of Ages/Seasons",
        tags: ["Town"],
    },
    {
        id: 300,
        name: "Ralph - Oracle of Ages/Seasons",
        tags: ["Character"],
    },
    {
        id: 301,
        name: "Subrosian House - Oracle of Ages/Seasons",
        tags: ["Town", "Area"],
    },
    {
        id: 302,
        name: "Tokay's House - Oracle of Ages/Seasons",
        tags: ["Town", "Area"],
    },
    {
        id: 303,
        name: "The Black Tower - Oracle of Ages/Seasons",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 304,
        name: "Fairy Forest - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 305,
        name: "Samasa Desert - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 306,
        name: "Castle of Despair - Oracle of Ages/Seasons",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 307,
        name: "Sunken Pirate Ship - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    {
        id: 308,
        name: "Subrosia - Oracle of Ages/Seasons",
        tags: ["Area"],
    },
    // Four Swords
    {
        id: 309,
        name: "Game Select/Ending Theme - Four Swords",
        tags: ["Other"],
    },
    {
        id: 310,
        name: "File Select/Great Fairy - Four Swords",
        tags: ["Other", "Area"],
    },
    {
        id: 311,
        name: "Labyrinth - Four Swords",
        tags: ["Dungeon"],
    },
    {
        id: 312,
        name: "Talus Cave - Four Swords",
        tags: ["Area"],
    },
    {
        id: 313,
        name: "Sea of Trees - Four Swords",
        tags: ["Area"],
    },
    {
        id: 314,
        name: "Death Mountain - Four Swords",
        tags: ["Area"],
    },
    {
        id: 315,
        name: "Vaati's Palace - Four Swords",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 316,
        name: "Boss Battle - Four Swords",
        tags: ["Battle"],
    },
    {
        id: 317,
        name: "Game Over - Four Swords",
        tags: ["Event"],
    },
    {
        id: 318,
        name: "Vaati Battle - Four Swords",
        tags: ["Battle"],
    },
    {
        id: 319,
        name: "Chamber of Insight - Four Swords",
        tags: ["Area"],
    },
    {
        id: 320,
        name: "Rupee Fever - Four Swords",
        tags: ["Event"],
    },
    {
        id: 321,
        name: "Battle - Four Swords",
        tags: ["Battle"],
    },
    {
        id: 322,
        name: "Prologue Theme - Four Swords",
        tags: ["Other", "Event"],
    },
    {
        id: 323,
        name: "The Four Links - Four Swords",
        tags: ["Event", "Character"],
    },
    {
        id: 324,
        name: "Title Theme - Four Swords",
        tags: ["Other"],
    },
    {
        id: 325,
        name: "Princess Zelda - Four Swords",
        tags: ["Character"],
    },
    {
        id: 326,
        name: "Trap Room - Four Swords",
        tags: ["Event", "Battle"],
    },
    {
        id: 327,
        name: "Title Theme (Anniversary) - Four Swords",
        tags: ["Other"],
    },
    // The Wind Waker
    // https://soundcloud.com/user-405995293/sets/the-legend-of-zelda-the-wind-1
    {
        id: 328,
        name: "File Select - The Wind Waker",
        tags: ["Other"],
    },
    {
        id: 329,
        name: "The Legendary Hero - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 330,
        name: "Outset Island - The Wind Waker",
        tags: ["Town"],
    },
    {
        id: 331,
        name: "Inside a House - The Wind Waker",
        tags: ["Area", "Town"],
    },
    {
        id: 332,
        name: "Orca's House - The Wind Waker",
        tags: ["Area", "Town"],
    },
    {
        id: 333,
        name: "Sword Training - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 334,
        name: "Beedle's Shop - The Wind Waker",
        tags: ["Area", "Character"],
    },
    {
        id: 335,
        name: "Mysterious Giant Bird - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 336,
        name: "Outset Island Forest - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 337,
        name: "Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 338,
        name: "Encounter with Tetra - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 339,
        name: "Aryll's Kidnapping - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 340,
        name: "Grandma - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 341,
        name: "Departure - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 342,
        name: "Pirate Ship - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 343,
        name: "Pirate Ship - Inside - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 344,
        name: "Forsaken Fortress - Infiltration - The Wind Waker",
        tags: ["Area", "Event"],
    },
    {
        id: 345,
        name: "Forsaken Fortress - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 346,
        name: "Aryll's Reunion/Giant Bird Trap - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 347,
        name: "King of Red Lions - The Wind Waker",
        tags: ["Character", "Event"],
    },
    {
        id: 348,
        name: "Windfall Island - The Wind Waker",
        tags: ["Town"],
    },
    {
        id: 349,
        name: "Potion Shop - The Wind Waker",
        tags: ["Area", "Town"],
    },
    {
        id: 350,
        name: "Dawn - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 351,
        name: "The Great Sea - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 352,
        name: "Maritime Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 353,
        name: "Maritime Boss Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 354,
        name: "Cave/Shrine - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 355,
        name: "To Hyrule - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 356,
        name: "Dragon Roost Island - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 357,
        name: "Dragon Roost Cavern - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 358,
        name: "Mini Boss Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 359,
        name: "Gohma Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 360,
        name: "Gohma Battle - Second Phase - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 361,
        name: "Victory Fanfare - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 362,
        name: "Forest Haven - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 363,
        name: "Forest Haven - Inside - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 364,
        name: "Great Deku Tree - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 365,
        name: "Forbidden Woods - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 366,
        name: "Kalle Demos Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 367,
        name: "Kalle Demos Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 368,
        name: "Korok Ceremony - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 369,
        name: "Song of the Korok Ceremony - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 370,
        name: "The Great Sea is Cursed - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 371,
        name: "Jabun - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 372,
        name: "Tower of the Gods Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 373,
        name: "Tower of the Gods - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 374,
        name: "Gohdan Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 375,
        name: "Gohdan Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 376,
        name: "Sealed Hyrule Castle - The Wind Waker",
        tags: ["Event", "Area"],
    },
    {
        id: 377,
        name: "Hyrule Castle - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 378,
        name: "Phantom Ganon Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 379,
        name: "Aryll's Rescue - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 380,
        name: "Aryll's Rescue/To the Tower - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 381,
        name: "Escape the Tower - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 382,
        name: "Helmaroc King Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 383,
        name: "Ganondorf - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 384,
        name: "Hyrule King - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 385,
        name: "Zelda Awakens - The Wind Waker",
        tags: ["Character", "Event"],
    },
    {
        id: 386,
        name: "Princess Zelda - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 387,
        name: "Fairy's Fountain - The Wind Waker",
        tags: ["Area"],
    },
    {
        id: 388,
        name: "Fairy Queen - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 389,
        name: "Sage Laruto - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 390,
        name: "Medli's Awakening - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 391,
        name: "Boat Game - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 392,
        name: "Earth Temple - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 393,
        name: "Jalhalla Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 394,
        name: "Jalhalla Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 395,
        name: "Medli's Prayer - The Wind Waker",
        tags: ["Character", "Event"],
    },
    {
        id: 396,
        name: "Sage Fado - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 397,
        name: "Makar's Awakening - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 398,
        name: "Wind Temple - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 399,
        name: "Molgera Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 400,
        name: "Molgera Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 401,
        name: "Makar's Prayer - The Wind Waker",
        tags: ["Character", "Event"],
    },
    {
        id: 402,
        name: "Ghost Ship - The Wind Waker",
        tags: ["Event", "Area"],
    },
    {
        id: 403,
        name: "Hero of the Winds - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 404,
        name: "Ganon's Tower - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 405,
        name: "Gohma Battle (Ganon's Tower) - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 406,
        name: "Gohma Battle - Second Phase (Ganon's Tower) - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 407,
        name: "Kalle Demos Battle (Ganon's Tower) - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 408,
        name: "Jalhalla Battle (Ganon's Tower) - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 409,
        name: "Phantom Ganon's Maze - The Wind Waker",
        tags: ["Dungeon"],
    },
    {
        id: 410,
        name: "Molgera Battle (Ganon's Tower) - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 411,
        name: "Puppet Ganon Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 412,
        name: "Gohma Appears - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 413,
        name: "Puppet Ganon Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 414,
        name: "Puppet Ganon Spider Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 415,
        name: "Puppet Ganon Snake Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 416,
        name: "Puppet Ganon Death - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 417,
        name: "Ganondorf - Before the Showdown - The Wind Waker",
        tags: ["Event"],
    },
    {
        id: 418,
        name: "Ganondorf Battle - The Wind Waker",
        tags: ["Battle"],
    },
    {
        id: 419,
        name: "Hyrule King - Farewell - The Wind Waker",
        tags: ["Event", "Character"],
    },
    {
        id: 420,
        name: "Staff Credits - The Wind Waker",
        tags: ["Other"],
    },
    {
        id: 421,
        name: "Aryll - The Wind Waker",
        tags: ["Character"],
    },
    {
        id: 422,
        name: "Demo Trailer - The Wind Waker",
        tags: ["Other"],
    },
    {
        id: 423,
        name: "Demo Trailer 2 - The Wind Waker",
        tags: ["Other"],
    },
    {
        id: 424,
        name: "Title Theme - The Wind Waker",
        tags: ["Other"],
    },
    // The Wind Waker HD
    // https://soundcloud.com/user-405995293/sets/the-legend-of-zelda-the-wind-1
    {
        id: 425,
        name: "File Select - The Wind Waker HD",
        tags: ["Other"],
    },
    {
        id: 426,
        name: "Outset Island - The Wind Waker HD",
        tags: ["Town"],
    },
    {
        id: 427,
        name: "Grandma - The Wind Waker HD",
        tags: ["Character"],
    },
    {
        id: 428,
        name: "Pirate Ship - The Wind Waker HD",
        tags: ["Area"],
    },
    {
        id: 429,
        name: "Forsaken Fortress - The Wind Waker HD",
        tags: ["Area"],
    },
    {
        id: 430,
        name: "Windfall Island - The Wind Waker HD",
        tags: ["Town"],
    },
    {
        id: 431,
        name: "Gohma Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 432,
        name: "Gohma Battle - Second Phase - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 433,
        name: "Phantom Ganon Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 434,
        name: "Helmaroc King Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 435,
        name: "Fairy's Fountain - The Wind Waker HD",
        tags: ["Area"],
    },
    {
        id: 436,
        name: "Molgera Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 437,
        name: "Puppet Ganon Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 438,
        name: "Puppet Ganon Spider Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    {
        id: 439,
        name: "Puppet Ganon Snake Battle - The Wind Waker HD",
        tags: ["Battle"],
    },
    // Four Swords Adventures
    // https://soundcloud.com/treeman02/sets/selection-four-swords
    {
        id: 440,
        name: "Title Theme - Four Swords Adventures",
        tags: ["Other"],
    },
    {
        id: 441,
        name: "File Select/Fairy's Fountain - Four Swords Adventures",
        tags: ["Other", "Area"],
    },
    {
        id: 442,
        name: "Intro - Old Legend - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 443,
        name: "Intro - Dark Clouds - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 444,
        name: "Intro - Shade - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 445,
        name: "Field/Lake Hylia - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 446,
        name: "Inside a House - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 447,
        name: "Mini Boss Battle - Four Swords Adventures",
        tags: ["Battle"],
    },
    {
        id: 448,
        name: "Cave - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 449,
        name: "Fortune Teller - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 450,
        name: "Shadow Link Battle - Four Swords Adventures",
        tags: ["Battle"],
    },
    {
        id: 451,
        name: "Tingle - Four Swords Adventures",
        tags: ["Character"],
    },
    {
        id: 452,
        name: "Overworld - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 453,
        name: "Dungeon - Four Swords Adventures",
        tags: ["Dungeon"],
    },
    {
        id: 454,
        name: "Hyrule Castle - Four Swords Adventures",
        tags: ["Dungeon"],
    },
    {
        id: 455,
        name: "Boss Battle - Four Swords Adventures",
        tags: ["Battle"],
    },
    {
        id: 456,
        name: "Crystal Room - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 457,
        name: "Maiden's Rescue - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 458,
        name: "Guessing-Game House - Four Swords Adventures",
        tags: ["Area", "Town"],
    },
    {
        id: 459,
        name: "Village of the Blue Maiden (Mystery) - Four Swords Adventures",
        tags: ["Town"],
    },
    {
        id: 460,
        name: "Village of the Blue Maiden - Four Swords Adventures",
        tags: ["Town"],
    },
    {
        id: 461,
        name: "Temple - Four Swords Adventures",
        tags: ["Dungeon"],
    },
    {
        id: 462,
        name: "Tower of Flames - Four Swords Adventures",
        tags: ["Dungeon"],
    },
    {
        id: 463,
        name: "Overworld (Rain) - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 464,
        name: "Horse Boost - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 465,
        name: "Hyrule Castle (Return) - Four Swords Adventures",
        tags: ["Dungeon"],
    },
    {
        id: 466,
        name: "Graveyard - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 467,
        name: "Inside a House (Dark) - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 468,
        name: "Woods - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 469,
        name: "Desert - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 470,
        name: "Snow Field - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 471,
        name: "Zelda's Rescue - Four Swords Adventures",
        tags: ["Event", "Character"],
    },
    {
        id: 472,
        name: "Skies - Four Swords Adventures",
        tags: ["Area"],
    },
    {
        id: 473,
        name: "Ganon/Palace of Winds - Four Swords Adventures",
        tags: ["Dungeon", "Event", "Character"],
    },
    {
        id: 474,
        name: "Escape - Four Swords Adventures",
        tags: ["Event"],
    },
    {
        id: 475,
        name: "Ganon Battle - Four Swords Adventures",
        tags: ["Battle"],
    },
    {
        id: 476,
        name: "Staff Credits - Four Swords Adventures",
        tags: ["Other"],
    },
    {
        id: 477,
        name: "Zelda's Lullaby - Four Swords Adventures",
        tags: ["Area", "Event", "Character"],
    },
    {
        id: 478,
        name: "Inside a House/Kakariko Village (Unused) - Four Swords Adventures",
        tags: ["Area", "Town"],
    },
    {
        id: 479,
        name: "Map - Four Swords Adventures",
        tags: ["Area", "Other"],
    },
    // The Minish Cap
    // https://soundcloud.com/cow-ravine/sets/legend-of-zelda-minish-cap-ost
    // https://soundcloud.com/user-411498138/sets/the-legend-of-zelda-the-minish
    {
        id: 480,
        name: "Introduction - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 481,
        name: "Picori Festival - The Minish Cap",
        tags: ["Event", "Town"],
    },
    {
        id: 482,
        name: "Princess Zelda - The Minish Cap",
        tags: ["Character"],
    },
    {
        id: 483,
        name: "Vaati Attacks - The Minish Cap",
        tags: ["Character", "Event"],
    },
    {
        id: 484,
        name: "Vaati - The Minish Cap",
        tags: ["Character"],
    },
    {
        id: 485,
        name: "Minish Woods - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 486,
        name: "Cucco Chase! - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 487,
        name: "Ezlo - The Minish Cap",
        tags: ["Character"],
    },
    {
        id: 488,
        name: "Boss Battle - The Minish Cap",
        tags: ["Battle"],
    },
    {
        id: 489,
        name: "Elemental Sanctuary - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 490,
        name: "Cave of Flames - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 491,
        name: "Mt. Crenel - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 492,
        name: "Ezlo's Flashback - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 493,
        name: "Into the Skies - The Minish Cap",
        tags: ["Area", "Event"],
    },
    {
        id: 494,
        name: "Wind Ruins - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 495,
        name: "Royal Crypt - The Minish Cap",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 496,
        name: "Palace of Winds - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 497,
        name: "Temple of Droplets - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 498,
        name: "Hurry! - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 499,
        name: "Dark Hyrule Castle - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 500,
        name: "Vaati Battle - The Minish Cap",
        tags: ["Battle"],
    },
    {
        id: 501,
        name: "Vaati's Wrath Battle - The Minish Cap",
        tags: ["Battle"],
    },
    {
        id: 502,
        name: "Great Fairy's Fountain - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 503,
        name: "Hyrule Castle - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 504,
        name: "Hyrule Town - The Minish Cap",
        tags: ["Town"],
    },
    {
        id: 505,
        name: "Hyrule Field - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 506,
        name: "Minish Village - The Minish Cap",
        tags: ["Town"],
    },
    {
        id: 507,
        name: "Cave - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 508,
        name: "Danger!/Battle - The Minish Cap",
        tags: ["Event", "Battle"],
    },
    {
        id: 509,
        name: "Blade Brothers Dojo - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 510,
        name: "Cloud Tops - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 511,
        name: "Lost Woods (Unused) - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 512,
        name: "File Select - The Minish Cap",
        tags: ["Other"],
    },
    {
        id: 513,
        name: "Inside a House - The Minish Cap",
        tags: ["Area", "Town"],
    },
    {
        id: 514,
        name: "Royal Valley - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 515,
        name: "Deepwood Shrine - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 516,
        name: "Mini Boss Battle - The Minish Cap",
        tags: ["Battle"],
    },
    {
        id: 517,
        name: "Fairy's Fountain - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 518,
        name: "Element Appears - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 519,
        name: "Castor Wilds - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 520,
        name: "Mt. Crenel Summit - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 521,
        name: "Fortress of Winds - The Minish Cap",
        tags: ["Dungeon"],
    },
    {
        id: 522,
        name: "Mole Mitts Cave - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 523,
        name: "Secret Castle Passage - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 524,
        name: "Witch's Hut - The Minish Cap",
        tags: ["Area"],
    },
    {
        id: 525,
        name: "Zelda Awakens - The Minish Cap",
        tags: ["Character", "Event"],
    },
    {
        id: 526,
        name: "Destroyed Hyrule - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 527,
        name: "Game Over - The Minish Cap",
        tags: ["Event"],
    },
    {
        id: 528,
        name: "Staff Credits - The Minish Cap",
        tags: ["Other"],
    },
    // Twilight Princess
    // https://soundcloud.com/formidable-782415076/sets/the-legend-of-zelda-twilight-princess-ost
    {
        id: 529,
        name: "Title Theme - Twilight Princess",
        tags: ["Other"],
    },
    {
        id: 530,
        name: "Orchestra Piece #1 - Twilight Princess",
        tags: ["Other"],
    },
    {
        id: 531,
        name: "Orchestra Piece #2 - Twilight Princess",
        tags: ["Other"],
    },
    {
        id: 532,
        name: "File Select/Great Fairy's Fountain - Twilight Princess",
        tags: ["Other", "Area"],
    },
    {
        id: 533,
        name: "Opening - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 534,
        name: "Meet Ilia - Twilight Princess",
        tags: ["Character", "Event"],
    },
    {
        id: 535,
        name: "Ordon Village - Twilight Princess",
        tags: ["Town"],
    },
    {
        id: 536,
        name: "Ordon Ranch - Twilight Princess",
        tags: ["Area", "Town"],
    },
    {
        id: 537,
        name: "Herd Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 538,
        name: "Inside a House - Twilight Princess",
        tags: ["Area", "Town"],
    },
    {
        id: 539,
        name: "Shop - Twilight Princess",
        tags: ["Area", "Town"],
    },
    {
        id: 540,
        name: "Ways of the Sword - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 541,
        name: "Battle (Part 1) - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 542,
        name: "Battle (Part 2) - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 543,
        name: "Cave - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 544,
        name: "Departure - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 545,
        name: "Ilia - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 546,
        name: "Enter the Darkness - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 547,
        name: "Link's Transformation - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 548,
        name: "Midna - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 549,
        name: "Twilight - Twilight Princess",
        tags: ["Event", "Area"],
    },
    {
        id: 550,
        name: "Twilit Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 551,
        name: "Meet Princess Zelda - Twilight Princess",
        tags: ["Character", "Event"],
    },
    {
        id: 552,
        name: "Succumbed to Twilight - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 553,
        name: "Beast in the Village - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 554,
        name: "Shadow Beast Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 555,
        name: "Spirit's Lament - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 556,
        name: "Chosen Hero - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 557,
        name: "Faron Woods - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 558,
        name: "Hidden Skill Training - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 559,
        name: "Forest Temple - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 560,
        name: "Ooccoo - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 561,
        name: "Ook Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 562,
        name: "Diababa Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 563,
        name: "Diababa Battle - Second Phase - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 564,
        name: "Victory Fanfare - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 565,
        name: "Boss Defeated - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 566,
        name: "Light Spirit - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 567,
        name: "Out Children Taken - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 568,
        name: "Hyrule Field - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 569,
        name: "Hyrule Field (Night) - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 570,
        name: "Postman - Twilight Princess",
        tags: ["Character", "Event"],
    },
    {
        id: 571,
        name: "Scared - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 572,
        name: "Link Will Save Us - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 573,
        name: "On Fire! - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 574,
        name: "Song of Healing - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 575,
        name: "Kakariko is Saved - Twilight Princess",
        tags: ["Event", "Town"],
    },
    {
        id: 576,
        name: "To the Mountains - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 577,
        name: "Kakariko Village - Twilight Princess",
        tags: ["Town"],
    },
    {
        id: 578,
        name: "Sanctuary - Twilight Princess",
        tags: ["Area", "Town"],
    },
    {
        id: 579,
        name: "Graveyard - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 580,
        name: "Death Mountain - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 581,
        name: "Epona Appears - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 582,
        name: "Rodeo Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 583,
        name: "Sumo Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 584,
        name: "King Bulblin Appears - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 585,
        name: "King Bulblin Attacks - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 586,
        name: "King Bulblin Horse Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 587,
        name: "King Bulblin Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 588,
        name: "Victory Fanfare (King Bulblin) - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 589,
        name: "Courage - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 590,
        name: "Goron Mines - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 591,
        name: "Yeti Love - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 592,
        name: "Mini-Boss Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 593,
        name: "Fyrus Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 594,
        name: "Save Ilia - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 595,
        name: "River Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 596,
        name: "Twilit Cargo Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 597,
        name: "Queen Rutela - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 598,
        name: "Requiem of Spirit - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 599,
        name: "Shadow Insect Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 600,
        name: "The Legend of Hyrule - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 601,
        name: "Lake Hylia - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 602,
        name: "Fyer's Cannon - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 603,
        name: "Falbi's House - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 604,
        name: "Hyrule Castle Town - Twilight Princess",
        tags: ["Town"],
    },
    {
        id: 605,
        name: "STAR Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 606,
        name: "Agitha's Castle - Twilight Princess",
        tags: ["Area", "Character"],
    },
    {
        id: 607,
        name: "Fortune Teller - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 608,
        name: "Escort the Horse Cart - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 609,
        name: "Prince Ralis is Saved - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 610,
        name: "Lakebed Temple - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 611,
        name: "Deku Toad Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 612,
        name: "Morpheel Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 613,
        name: "Morpheel Battle - Second Phase - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 614,
        name: "Zant - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 615,
        name: "Light and Darkness - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 616,
        name: "Midna's Lament - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 617,
        name: "Zelda's Sacrifice - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 618,
        name: "Prelude of Light - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 619,
        name: "Sacred Grove - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 620,
        name: "Statue Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 621,
        name: "Get Master Sword - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 622,
        name: "Song of Heroes - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 623,
        name: "Palace of Twilight - Twilight Princess",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 624,
        name: "Gerudo Desert - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 625,
        name: "Arbiter's Grounds - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 626,
        name: "Death Sword Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 627,
        name: "Stallord Appears - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 628,
        name: "Stallord Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 629,
        name: "The Sages - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 630,
        name: "The Demon Thief - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 631,
        name: "Fishing Hit! - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 632,
        name: "Rollgoal Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 633,
        name: "Zora's Domain - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 634,
        name: "Snowpeak - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 635,
        name: "Ballad of Gales - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 636,
        name: "Snowpeak Ruins - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 637,
        name: "Blizzeta Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 638,
        name: "Blizzeta Battle - Second Phase - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 639,
        name: "Sled Game - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 640,
        name: "Temple of Time - Chamber of Stone - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 641,
        name: "Temple of Time - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 642,
        name: "Armogohma Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 643,
        name: "Armogohma Battle - Second Phase - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 644,
        name: "Hidden Village - Twilight Princess",
        tags: ["Area"],
    },
    {
        id: 645,
        name: "Ballad of Twilight - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 646,
        name: "Ilia's Memory Restored - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 647,
        name: "Jovani's House - Twilight Princess",
        tags: ["Area", "Event"],
    },
    {
        id: 648,
        name: "Malo Mart - Twilight Princess",
        tags: ["Area", "Town"],
    },
    {
        id: 649,
        name: "Cannon Repair - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 650,
        name: "City in the Sky - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 651,
        name: "Argorok Appears - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 652,
        name: "Argorok Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 653,
        name: "Mirror of Twilight - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 654,
        name: "Phantom Zant Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 655,
        name: "Zant's Fate - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 656,
        name: "Zant Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 657,
        name: "Fused Shadows Returned - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 658,
        name: "Hyrule Castle - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 659,
        name: "The Resistance - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 660,
        name: "Hyrule Castle Tower - Twilight Princess",
        tags: ["Dungeon"],
    },
    {
        id: 661,
        name: "Meet Ganondorf - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 662,
        name: "Puppet Zelda Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 663,
        name: "Ganon Appears - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 664,
        name: "Ganon Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 665,
        name: "Zelda Awakens - Twilight Princess",
        tags: ["Event", "Character"],
    },
    {
        id: 666,
        name: "Midna's Sacrifice - Twilight Princess",
        tags: ["Event"],
    },
    {
        id: 667,
        name: "Zelda's Lullaby - Twilight Princess",
        tags: ["Character"],
    },
    {
        id: 668,
        name: "Horseback Ganondorf Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 669,
        name: "Ganondorf Battle - Twilight Princess",
        tags: ["Battle"],
    },
    {
        id: 670,
        name: "Staff Credits - Twilight Princess",
        tags: ["Other"],
    },
    {
        id: 671,
        name: "Trailer Theme (Hyrule Field March) - Twilight Princess",
        tags: ["Other"],
    },
    {
        id: 672,
        name: "Fishing Hole - Twilight Princess",
        tags: ["Area"],
    },
    // Phantom Hourglass
    // https://soundcloud.com/oui-oui-baguette89
    {
        id: 673,
        name: "Oshus, King of the Oceans - Phantom Hourglass",
        tags: ["Character"],
    },
    {
        id: 674,
        name: "The Virtue of a Hero (Ending Theme) - Phantom Hourglass",
        tags: ["Other"],
    },
    {
        id: 675,
        name: "Island - Phantom Hourglass",
        tags: ["Town"],
    },
    {
        id: 676,
        name: "Ocean King - Phantom Hourglass",
        tags: ["Character"],
    },
    {
        id: 677,
        name: "Storyteller's Memories - Tetra and the Pirates - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 678,
        name: "Jolene - Phantom Hourglass",
        tags: ["Character", "Event"],
    },
    {
        id: 679,
        name: "Storyteller's Memories - Dark King Ganon - Phantom Hourglass",
        tags: ["Event", "Character"],
    },
    {
        id: 680,
        name: "Bellum - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 681,
        name: "Attack Dirge - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 682,
        name: "Astrid - Phantom Hourglass",
        tags: ["Character"],
    },
    {
        id: 683,
        name: "Inside a House - Phantom Hourglass",
        tags: ["Area", "Town"],
    },
    {
        id: 684,
        name: "The Great Sea - Phantom Hourglass",
        tags: ["Area"],
    },
    {
        id: 685,
        name: "Dark Memories - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 686,
        name: "Goron House - Phantom Hourglass",
        tags: ["Area", "Town"],
    },
    {
        id: 687,
        name: "Phantom Chase - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 688,
        name: "Phantom Linebeck Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 689,
        name: "Set Sail for Adventure (Title Theme) - Phantom Hourglass",
        tags: ["Other"],
    },
    {
        id: 690,
        name: "Storyteller's Memories - Hero of the Winds - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 691,
        name: "Storyteller's Memories - Outset Island - Phantom Hourglass",
        tags: ["Event", "Area"],
    },
    {
        id: 692,
        name: "Storyteller's Memories - Zelda's Lullaby - Phantom Hourglass",
        tags: ["Event", "Character"],
    },
    {
        id: 693,
        name: "Storyteller's Memories - Departure - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 694,
        name: "Pirate Ship - Phantom Hourglass",
        tags: ["Area"],
    },
    {
        id: 695,
        name: "Dungeon - Phantom Hourglass",
        tags: ["Dungeon"],
    },
    {
        id: 696,
        name: "Linebeck - Phantom Hourglass",
        tags: ["Character"],
    },
    {
        id: 697,
        name: "Magic in the Air - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 698,
        name: "Sands of Time - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 699,
        name: "Island Life - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 700,
        name: "Oshus, King of the Oceans (Return) - Phantom Hourglass",
        tags: ["Character"],
    },
    {
        id: 701,
        name: "Zelda's Lullaby - Phantom Hourglass",
        tags: ["Event", "Character"],
    },
    {
        id: 702,
        name: "Dark Waters - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 703,
        name: "File Select - Phantom Hourglass",
        tags: ["Other"],
    },
    {
        id: 704,
        name: "Beedle's Shop - Phantom Hourglass",
        tags: ["Area", "Character"],
    },
    {
        id: 705,
        name: "Big Monsters of the Sea - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 706,
        name: "Cave - Phantom Hourglass",
        tags: ["Area"],
    },
    {
        id: 707,
        name: "Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 708,
        name: "Uncharted Territory - Phantom Hourglass",
        tags: ["Area"],
    },
    {
        id: 709,
        name: "Goron Village - Phantom Hourglass",
        tags: ["Town"],
    },
    {
        id: 710,
        name: "Ghost Ship - Phantom Hourglass",
        tags: ["Area", "Event"],
    },
    {
        id: 711,
        name: "Chasing the Ghost Ship - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 712,
        name: "Sword Training - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 713,
        name: "Jolene Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 714,
        name: "Tropical Slacking - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 715,
        name: "Bellum Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 716,
        name: "Dread of Sorrow - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 717,
        name: "Time Stopped - Phantom Hourglass",
        tags: ["Event"],
    },
    {
        id: 718,
        name: "Ghost Ship Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 719,
        name: "Boss Battle - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 720,
        name: "A Battle Across the World - Phantom Hourglass",
        tags: ["Battle"],
    },
    {
        id: 721,
        name: "Ranked Amongst the World's Best - Phantom Hourglass",
        tags: ["Event"],
    },
    // Spirit Tracks
    // https://soundcloud.com/haden-carter/sets/the-legend-of-zelda-spirit
    // https://soundcloud.com/oui-oui-baguette89
    {
        id: 722,
        name: "Opening Theme - Spirit Tracks",
        tags: ["Other"],
    },
    {
        id: 723,
        name: "File Select - Spirit Tracks",
        tags: ["Other"],
    },
    {
        id: 724,
        name: "Aboda Village - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 725,
        name: "Final Exam - Spirit Tracks",
        tags: ["Event", "Area"],
    },
    {
        id: 726,
        name: "Castle Town - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 727,
        name: "Stealthy Zelda - Spirit Tracks",
        tags: ["Event", "Character"],
    },
    {
        id: 728,
        name: "Byrne - Spirit Tracks",
        tags: ["Character"],
    },
    {
        id: 729,
        name: "Realm Overworld - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 730,
        name: "In the Fields - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 731,
        name: "Tower of Spirits: Entrance - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 732,
        name: "Tower of Spirits: Staircase - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 733,
        name: "Tower of Spirits: Dungeon - Spirit Tracks",
        tags: ["Dungeon"],
    },
    {
        id: 734,
        name: "Troubled Realm - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 735,
        name: "Sanctuary - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 736,
        name: "Underwater - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 737,
        name: "Fire/Sand Temples - Spirit Tracks",
        tags: ["Dungeon"],
    },
    {
        id: 738,
        name: "Byrne Comes to the Rescue - Spirit Tracks",
        tags: ["Event", "Character"],
    },
    {
        id: 739,
        name: "Facing the Demon Train - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 740,
        name: "Colde & Malladus Battle - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 741,
        name: "The Unenterable Body - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 742,
        name: "Before the Final Battle - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 743,
        name: "The Sacred Duet - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 744,
        name: "Final Battle - Malladus - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 745,
        name: "Staff Credits - Spirit Tracks",
        tags: ["Other"],
    },
    {
        id: 746,
        name: "Anouki Village - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 747,
        name: "Dark Train Approaching - Spirit Tracks",
        tags: ["Event", "Battle"],
    },
    {
        id: 748,
        name: "Final Battle - Protecting Zelda - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 749,
        name: "Forest/Snow/Ocean Temples - Spirit Tracks",
        tags: ["Dungeon"],
    },
    {
        id: 750,
        name: "Goron Village - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 751,
        name: "Lost Woods - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 752,
        name: "Papuchia Village - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 753,
        name: "Tank/Pirates Attack - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 754,
        name: "The Dark Realm - Spirit Tracks",
        tags: ["Area"],
    },
    {
        id: 755,
        name: "The Force Gem Awakens - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 756,
        name: "Boss Battle - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 757,
        name: "Boss Battle 2 - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 758,
        name: "Mini Boss Battle - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 759,
        name: "Hyrule Castle - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 760,
        name: "Introduction (Old Legends) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 761,
        name: "Princess Zelda - Spirit Tracks",
        tags: ["Character"],
    },
    {
        id: 762,
        name: "Mystery in the Castle - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 763,
        name: "Tower of Spirits Destroyed - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 764,
        name: "Chancellor Cole - Spirit Tracks",
        tags: ["Character"],
    },
    {
        id: 765,
        name: "Alfonzo vs Byrne - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 766,
        name: "Ghost Zelda - Spirit Tracks",
        tags: ["Character"],
    },
    {
        id: 767,
        name: "The Spirit Flute - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 768,
        name: "Panicking Zelda - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 769,
        name: "Zelda Possesses a Phantom - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 770,
        name: "Battle on Tracks - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 771,
        name: "Selecting a Rail Route - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 772,
        name: "Whittleton Village - Spirit Tracks",
        tags: ["Town"],
    },
    {
        id: 773,
        name: "Battle - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 774,
        name: "Key-Masters Chase - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 775,
        name: "Sword Training - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 776,
        name: "Restoring the Spirit Tracks - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 777,
        name: "Great-Eye in the Dark - Spirit Tracks",
        tags: ["Event", "Battle"],
    },
    {
        id: 778,
        name: "Snurgle Battle (Stolen Keys) - Spirit Tracks",
        tags: ["Battle", "Event"],
    },
    {
        id: 779,
        name: "Resurrection of Malladus - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 780,
        name: "Lokomo Song: Gage (Forest) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 781,
        name: "Lokomo Song: Steem (Snow) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 782,
        name: "Lokomo Song: Carben (Ocean) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 783,
        name: "Lokomo Song: Embrose (Fire) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 784,
        name: "Lokomo Song: Rael (Sand) - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 785,
        name: "Zelda's Dashed Hopes - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 786,
        name: "Battle Mode: Battle! - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 787,
        name: "Battle Mode: Phantoms! - Spirit Tracks",
        tags: ["Battle"],
    },
    {
        id: 788,
        name: "Malladus Revival is Complete - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 789,
        name: "Byrne's Sacrifice - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 790,
        name: "Malladus Transformation - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 791,
        name: "Saying Goodbye - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 792,
        name: "Epilogue - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 793,
        name: "Battle Mode: Results - Spirit Tracks",
        tags: ["Event"],
    },
    {
        id: 794,
        name: "Battle Mode: Linebeck Remix - Spirit Tracks",
        tags: ["Event"],
    },
    // Skyward Sword
    // https://soundcloud.com/extrapolation/sets/skyward-sword-ost
    // https://soundcloud.com/sunniea-416990841/sets/skyward-sword-full-ost
    {
        id: 795,
        name: "Ballad of the Goddess - Skyward Sword",
        tags: ["Other"],
    },
    {
        id: 796,
        name: "File Select - Skyward Sword",
        tags: ["Other"],
    },
    {
        id: 797,
        name: "Overture - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 798,
        name: "Link's Nightmare - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 799,
        name: "Knight's Academy - Skyward Sword",
        tags: ["Town", "Area"],
    },
    {
        id: 800,
        name: "Skyloft - Skyward Sword",
        tags: ["Town"],
    },
    {
        id: 801,
        name: "Legend of the Goddess - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 802,
        name: "Inside a House - Skyward Sword",
        tags: ["Area", "Town"],
    },
    {
        id: 803,
        name: "Ballad of the Goddess ~Zelda Solo~ - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 804,
        name: "Zelda - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 805,
        name: "Groose - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 806,
        name: "Groose's Insolence - Skyward Sword",
        tags: ["Character", "Event"],
    },
    {
        id: 807,
        name: "Groose's Daze - Skyward Sword",
        tags: ["Character", "Event"],
    },
    {
        id: 808,
        name: "Cave - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 809,
        name: "Preparation - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 810,
        name: "Crimson Loftwing - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 811,
        name: "Leaping from the Clouds - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 812,
        name: "Loftwing Training - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 813,
        name: "Loftwing Race - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 814,
        name: "Romance in the Air - Skyward Sword",
        tags: ["Event", "Character"],
    },
    {
        id: 815,
        name: "Blessing of the Goddess - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 816,
        name: "Tension - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 817,
        name: "Gaepora's Lament - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 818,
        name: "Chasing Fi - Skyward Sword",
        tags: ["Event", "Character"],
    },
    {
        id: 819,
        name: "Fi - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 820,
        name: "Lady of the Sealed Grounds - Skyward Sword",
        tags: ["Event", "Character"],
    },
    {
        id: 821,
        name: "Bazaar - Skyward Sword",
        tags: ["Area", "Town"],
    },
    {
        id: 822,
        name: "Exploring the Skies - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 823,
        name: "Skyloft (Piano Arrange) - Skyward Sword",
        tags: ["Town"],
    },
    {
        id: 824,
        name: "Sealed Grounds - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 825,
        name: "Sealed Temple - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 826,
        name: "The Kikwis - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 827,
        name: "Faron Woods - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 828,
        name: "Enemy Attacks - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 829,
        name: "Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 830,
        name: "Bucha, Kikwi Elder - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 831,
        name: "Entering a Dungeon - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 832,
        name: "Skyview Temple - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 833,
        name: "Mini Boss Battle (Stalfos/Stalmaster) - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 834,
        name: "Ghirahim - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 835,
        name: "Demon Lord Ghirahim Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 836,
        name: "Temple Spring - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 837,
        name: "Dance of the Godesses - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 838,
        name: "The Lumpy Pumpkin - Skyward Sword",
        tags: ["Area", "Town"],
    },
    {
        id: 839,
        name: "Bamboo Island - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 840,
        name: "Batreaux Introduction - Skyward Sword",
        tags: ["Character", "Event"],
    },
    {
        id: 841,
        name: "Eldin Volcano - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 842,
        name: "The Mogmas - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 843,
        name: "Mogma Mines - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 844,
        name: "Tubert's Cave - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 845,
        name: "Thrill Digger - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 846,
        name: "Earth Temple - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 847,
        name: "Mini Boss Battle (Lizalfos/Magmanos/Moldorm) - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 848,
        name: "Rolling Rock Escape - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 849,
        name: "Scaldera & Tentalus Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 850,
        name: "Memories of Zelda - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 851,
        name: "Lanayru Desert - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 852,
        name: "Lanayru Desert (Past) - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 853,
        name: "Lanayru Mining Facility - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 854,
        name: "Lanayru Mining Facility (Past) - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 855,
        name: "Disrupted Ritual - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 856,
        name: "A Sudden Crashlanding - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 857,
        name: "Fire Sanctuary - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 858,
        name: "Ballad of the Goddess ~Harp~ - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 859,
        name: "Scrapper - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 860,
        name: "Isle of Songs - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 861,
        name: "Farore's Courage - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 862,
        name: "Farore's Silent Realm - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 863,
        name: "Inside the Great Tree - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 864,
        name: "Lake Floria - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 865,
        name: "Guardians Pursuit - Skyward Sword",
        tags: ["Event", "Battle"],
    },
    {
        id: 866,
        name: "Sacred Dragons - Skyward Sword",
        tags: ["Character", "Event"],
    },
    {
        id: 867,
        name: "Ancient Cistern - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 868,
        name: "Koloktos & Moldarach Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 869,
        name: "Skydiving at Fun Fun Island - Skyward Sword",
        tags: ["Area", "Event"],
    },
    {
        id: 870,
        name: "Lake Floria (Underwater) - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 871,
        name: "Sealing the Imprisoned - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 872,
        name: "The Imprisoned Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 873,
        name: "Bug Heaven - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 874,
        name: "Nayru's Wisdom - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 875,
        name: "Nayru's Silent Realm - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 876,
        name: "Lanayru Sand Sea - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 877,
        name: "Sailing the Sand Sea - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 878,
        name: "Minecart Ride - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 879,
        name: "Pirate Stronghold - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 880,
        name: "Sandship - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 881,
        name: "Sandship (Inside) - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 882,
        name: "Din's Power - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 883,
        name: "Din's Silent Realm - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 884,
        name: "Volcano Summit - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 885,
        name: "Guld, Mogma Elder - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 886,
        name: "Mogma Underground Chase - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 887,
        name: "Demon Lord Ghirahim Battle 2 - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 888,
        name: "The Imprisoned Battle 2 - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 889,
        name: "Groosenator - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 890,
        name: "Dejected Groose - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 891,
        name: "Temple of Hylia - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 892,
        name: "Great Spirit of the Skies Levias Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 893,
        name: "Bilocyte Battle - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 894,
        name: "The Imprisoned Battle 3 - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 895,
        name: "Faron Woods (Underwater) - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 896,
        name: "Tadtones Underwater Hunt - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 897,
        name: "Eldin Volcano (Infiltration) - Skyward Sword",
        tags: ["Area", "Event"],
    },
    {
        id: 898,
        name: "Song of the Hero - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 899,
        name: "Goddess' Silent Realm - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 900,
        name: "Sky Keep - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 901,
        name: "Peace - Isle of the Goddess - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 902,
        name: "Hordes of Darkness - Skyward Sword",
        tags: ["Battle", "Event"],
    },
    {
        id: 903,
        name: "Demon Lord Ghirahim Battle 3 - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 904,
        name: "Demise - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 905,
        name: "Demon King Demise Battle ~Rising~ - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 906,
        name: "Demon King Demise Battle ~Finale~ - Skyward Sword",
        tags: ["Battle"],
    },
    {
        id: 907,
        name: "Peace - Link's Return - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 908,
        name: "Fi's Farewell - Skyward Sword",
        tags: ["Event", "Character"],
    },
    {
        id: 909,
        name: "Eternal Gratitude ~Fi~ - Skyward Sword",
        tags: ["Event", "Character"],
    },
    {
        id: 910,
        name: "The Master Sword is Sealed - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 911,
        name: "Staff Credits - Skyward Sword",
        tags: ["Other"],
    },
    {
        id: 912,
        name: "Batreaux - Skyward Sword",
        tags: ["Character"],
    },
    {
        id: 913,
        name: "Sky Islands - Skyward Sword",
        tags: ["Area"],
    },
    {
        id: 914,
        name: "The Pumpkin Song - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 915,
        name: "Pumpkin Harvest Game - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 916,
        name: "Ancient Cistern (Cave) - Skyward Sword",
        tags: ["Dungeon"],
    },
    {
        id: 917,
        name: "Cursed Bokoblins Chase - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 918,
        name: "Mini Game - Skyward Sword",
        tags: ["Event"],
    },
    {
        id: 919,
        name: "Zelda's Lullaby - Skyward Sword",
        tags: ["Character"],
    },
    // A Link Between Worlds
    // https://soundcloud.com/user-411498138/sets/the-legend-of-zelda-a-link
    // https://soundcloud.com/treeman02
    {
        id: 920,
        name: "Title Theme - A Link Between Worlds",
        tags: ["Other"],
    },
    {
        id: 921,
        name: "File Select - A Link Between Worlds",
        tags: ["Other"],
    },
    {
        id: 922,
        name: "Prologue - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 923,
        name: "Link's Nightmare - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 924,
        name: "Adventure Begins - A Link Between Worlds",
        tags: ["Event", "Area"],
    },
    {
        id: 925,
        name: "Hyrule Castle (First Visit) - A Link Between Worlds",
        tags: ["Area", "Town"],
    },
    {
        id: 926,
        name: "Princess Zelda - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 927,
        name: "Hyrule Overworld - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 928,
        name: "Anxious Sahasrahla - A Link Between Worlds",
        tags: ["Character", "Event"],
    },
    {
        id: 929,
        name: "Cave - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 930,
        name: "Crisis at the Sanctuary - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 931,
        name: "Sanctuary - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 932,
        name: "Yuga - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 933,
        name: "Ravio - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 934,
        name: "Kakariko Village - A Link Between Worlds",
        tags: ["Town"],
    },
    {
        id: 935,
        name: "Milk Bar - A Link Between Worlds",
        tags: ["Area", "Town"],
    },
    {
        id: 936,
        name: "Inside a House - A Link Between Worlds",
        tags: ["Area", "Town"],
    },
    {
        id: 937,
        name: "Mother Maiamai - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 938,
        name: "Dungeon - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 939,
        name: "Yuga Appears - A Link Between Worlds",
        tags: ["Character", "Event"],
    },
    {
        id: 940,
        name: "Boss Battle (Hyrule) - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 941,
        name: "Mini Boss Battle - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 942,
        name: "Yuga Battle (Eastern Palace) - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 943,
        name: "Irene - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 944,
        name: "Witch's Hut - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 945,
        name: "Oren's Trouble - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 946,
        name: "Queen Oren - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 947,
        name: "Ravio's Shop - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 948,
        name: "Fairy's Fountain - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 949,
        name: "Fortune Teller - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 950,
        name: "Death Mountain - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 951,
        name: "Final Battle - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 952,
        name: "Forest of Mystery (Lost Woods) - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 953,
        name: "Following the Poes in the Woods - A Link Between Worlds",
        tags: ["Event", "Area"],
    },
    {
        id: 954,
        name: "Hyrule Castle - A Link Between Worlds",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 955,
        name: "Yuga Battle (Hyrule Castle) - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 956,
        name: "Hilda - A Link Between Worlds",
        tags: ["Character"],
    },
    {
        id: 957,
        name: "Ganon Revival - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 958,
        name: "Lorule Overworld - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 959,
        name: "Thieves' Hideout - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 960,
        name: "Desert Palace - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 961,
        name: "Skull Woods - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 962,
        name: "Sneaking into the Dark Palace - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 963,
        name: "Dark Palace - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 964,
        name: "Ice Ruins - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 965,
        name: "Turtle Rock - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 966,
        name: "Octoball Derby - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 967,
        name: "Lorule Castle - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 968,
        name: "Yuga Ganon Battle - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 969,
        name: "Light Arrows - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 970,
        name: "Staff Credits - A Link Between Worlds",
        tags: ["Other"],
    },
    {
        id: 971,
        name: "Hyrule Footrace - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 972,
        name: "Treacherous Tower - A Link Between Worlds",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 973,
        name: "Escaping Thieves' Hideout - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 974,
        name: "Boss Battle (Lorule) - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 975,
        name: "Chamber of the Sages - A Link Between Worlds",
        tags: ["Area"],
    },
    {
        id: 976,
        name: "Swamp Palace - A Link Between Worlds",
        tags: ["Dungeon"],
    },
    {
        id: 977,
        name: "Dark Link Battle - A Link Between Worlds",
        tags: ["Battle"],
    },
    {
        id: 978,
        name: "Dark Link Battle (Result) - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 979,
        name: "Guessing-Game House - A Link Between Worlds",
        tags: ["Area", "Town"],
    },
    {
        id: 980,
        name: "Treacherous Tower (Victory) - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 981,
        name: "Link and Zelda's Wish - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 982,
        name: "The Story of Lorule - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 983,
        name: "Milk Bar - Zelda's Lullaby - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 984,
        name: "Milk Bar - Death Mountain - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 985,
        name: "Milk Bar - Ballad of the Goddess - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 986,
        name: "Milk Bar - Hilda - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 987,
        name: "Milk Bar - Kakariko Village - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 988,
        name: "Milk Bar - Lorule Overworld - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 989,
        name: "Milk Bar - Hyrule Castle - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 990,
        name: "Milk Bar - Thieves' Hideout - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 991,
        name: "Milk Bar - Lorule Castle - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 992,
        name: "Milk Bar - Hyrule Overworld - A Link Between Worlds",
        tags: ["Event"],
    },
    {
        id: 993,
        name: "Milk Bar - Ganon Battle - A Link Between Worlds",
        tags: ["Event"],
    },
    // Tri Force Heroes
    // https://soundcloud.com/trilliby-510875556/sets/the-legend-of-zelda-tri-force
    // https://soundcloud.com/oraclo-gazpacho
    // https://soundcloud.com/oui-oui-baguette89
    {
        id: 994,
        name: "Title Theme - Tri Force Heroes",
        tags: ["Other"],
    },
    {
        id: 995,
        name: "Our Story Begins - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 996,
        name: "Hytopia Town - Tri Force Heroes",
        tags: ["Town"],
    },
    {
        id: 997,
        name: "Madame Couture - Tri Force Heroes",
        tags: ["Character"],
    },
    {
        id: 998,
        name: "Daily Riches - Tri Force Heroes",
        tags: ["Area", "Town"],
    },
    {
        id: 999,
        name: "Miiverse Gallery - Tri Force Heroes",
        tags: ["Area", "Town"],
    },
    {
        id: 1000,
        name: "Sir Combsly - Tri Force Heroes",
        tags: ["Character"],
    },
    {
        id: 1001,
        name: "King Tuft - Tri Force Heroes",
        tags: ["Character"],
    },
    {
        id: 1002,
        name: "Hytopia Castle - Tri Force Heroes",
        tags: ["Area", "Town"],
    },
    {
        id: 1003,
        name: "Stage Select - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1004,
        name: "Woodlands - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1005,
        name: "Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1006,
        name: "Mini Boss Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1007,
        name: "Treasure Room - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1008,
        name: "Riverside - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1009,
        name: "Boss Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1010,
        name: "Volcano - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1011,
        name: "Hinox Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1012,
        name: "Ice Cavern - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1013,
        name: "Fortress - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1014,
        name: "Lady Maud - Tri Force Heroes",
        tags: ["Character"],
    },
    {
        id: 1015,
        name: "Lady's Pets Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1016,
        name: "Dunes - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1017,
        name: "Ruins - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1018,
        name: "Sky Realm - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1019,
        name: "Sky Temple - Tri Force Heroes",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 1020,
        name: "Lady Maud Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1021,
        name: "Lady Maud Battle - Second Phase - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1022,
        name: "Lifting the Curse - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1023,
        name: "Ending Theme - Tri Force Heroes",
        tags: ["Other"],
    },
    {
        id: 1024,
        name: "Den of Trials - Entrance - Tri Force Heroes",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 1025,
        name: "Den of Trials - Tri Force Heroes",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 1026,
        name: "Dark Links Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1027,
        name: "Treasure Room (Den of Trials) - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1028,
        name: "Arena - Tri Force Heroes",
        tags: ["Area"],
    },
    {
        id: 1029,
        name: "Arena Battle - Tri Force Heroes",
        tags: ["Battle"],
    },
    {
        id: 1030,
        name: "Arena Results - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1031,
        name: "Game Over - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1032,
        name: "Lucky Ball: Overworld (A Link to the Past) - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1033,
        name: "Lucky Ball: Ballad of the Goddess - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1034,
        name: "Lucky Ball: Ballad of the Wind Fish - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1035,
        name: "Lucky Ball: Clock Town - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1036,
        name: "Lucky Ball: Dark World - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1037,
        name: "Lucky Ball: Fairy's Fountain - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1038,
        name: "Lucky Ball: Realm Overworld - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1039,
        name: "Lucky Ball: Hyrule Field (Twilight Princess) - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1040,
        name: "Lucky Ball: Lon Lon Ranch - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1041,
        name: "Lucky Ball: Lorule Castle - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1042,
        name: "Lucky Ball: Lost Woods - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1043,
        name: "Lucky Ball: Skyloft - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1044,
        name: "Lucky Ball: Song of Storms - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1045,
        name: "Lucky Ball: The Great Sea - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1046,
        name: "Lucky Ball: Title Theme (The Wind Waker) - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1047,
        name: "Lucky Ball: Hilda - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1048,
        name: "Lucky Ball: Linebeck - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1049,
        name: "Lucky Ball: Madame Couture - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1050,
        name: "Lucky Ball: Mother Maiamai - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1051,
        name: "Lucky Ball: Title Theme (Tri Force Heroes) - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1052,
        name: "Lucky Ball: Yuga Battle - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1053,
        name: "Lucky Ball: Zelda's Lullaby - Tri Force Heroes",
        tags: ["Event"],
    },
    {
        id: 1054,
        name: "Lucky Ball: Fi - Tri Force Heroes",
        tags: ["Event"],
    },
    // Breath of the Wild
    // https://soundcloud.com/infiniteshadow23/sets/the-legend-of-zelda-breath-of
    {
        id: 1055,
        name: "Main Theme - Breath of the Wild",
        tags: ["Other"],
    },
    {
        id: 1056,
        name: "The Towers Rise - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1057,
        name: "Shrine - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1058,
        name: "Battle (Shrine) - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1059,
        name: "Mountains - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1060,
        name: "Stationary Guardian Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1061,
        name: "Temple of Time - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1062,
        name: "The Last King of Hyrule - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1063,
        name: "A King's Request - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1064,
        name: "Lynel / Yiga Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1065,
        name: "Shiekah Tower Activated - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1066,
        name: "Talus Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1067,
        name: "Kakariko Village - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1068,
        name: "Impa - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1069,
        name: "The 10 000 Year Old Legend - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1070,
        name: "Hateno Ancient Tech Lab - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1071,
        name: "Great Fairy's Fountain - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1072,
        name: "Field (Night) - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1073,
        name: "Kass - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1074,
        name: "Kass Quest - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1075,
        name: "Stables - Breath of the Wild",
        tags: ["Area", "Town"],
    },
    {
        id: 1076,
        name: "Riding (Night) - Breath of the Wild",
        tags: ["Event", "Area"],
    },
    {
        id: 1077,
        name: "Shrine: Blessing - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1078,
        name: "Hinox Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1079,
        name: "Seaside - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1080,
        name: "The Crazy Flower Lady - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1081,
        name: "Sidon - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1082,
        name: "Zora's Domain - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1083,
        name: "The Divine Beast of the Lake - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1084,
        name: "Attack on Vah Ruta - Breath of the Wild",
        tags: ["Battle", "Event"],
    },
    {
        id: 1085,
        name: "Sidon's Promise - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1086,
        name: "Divine Beast Vah Ruta - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1087,
        name: "Battle (Divine Beast) - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1088,
        name: "Blight Ganon Appears - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1089,
        name: "Waterblight Ganon Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1090,
        name: "Heart Container Appears - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1091,
        name: "Mipha - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1092,
        name: "The Champions Power - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1093,
        name: "Divine Beast Rising - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1094,
        name: "Snow Field - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1095,
        name: "Cave - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1096,
        name: "The Divine Beast of the Sky - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1097,
        name: "Rito Village - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1098,
        name: "Meeting Teba - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1099,
        name: "Rito Flight Range - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1100,
        name: "Flight Training - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1101,
        name: "Attack on Vah Medoh - Breath of the Wild",
        tags: ["Battle", "Event"],
    },
    {
        id: 1102,
        name: "Teba's Encouragement - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1103,
        name: "Divine Beast Vah Medoh - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1104,
        name: "Windblight Ganon Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1105,
        name: "Revali - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1106,
        name: "Mountain House - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1107,
        name: "Snowball Minigame - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1108,
        name: "Rito Sisters - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1109,
        name: "Death Mountain - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1110,
        name: "Goron Area - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1111,
        name: "Goron Humming - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1112,
        name: "The Divine Beast of the Volcano - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1113,
        name: "Goron City - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1114,
        name: "Abandoned North Mine - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1115,
        name: "Meeting Yunobo - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1116,
        name: "Attack on Vah Rudania - Breath of the Wild",
        tags: ["Battle", "Event"],
    },
    {
        id: 1117,
        name: "Yunobo's Opportunity - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1118,
        name: "Divine Beast Vah Rudania - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1119,
        name: "Fireblight Ganon Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1120,
        name: "Daruk - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1121,
        name: "Desert - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1122,
        name: "The Divine Beast of the Desert - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1123,
        name: "Kara Kara Bazaar - Breath of the Wild",
        tags: ["Town", "Area"],
    },
    {
        id: 1124,
        name: "Gerudo Town - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1125,
        name: "Meeting Riju - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1126,
        name: "Yiga Hideout - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1127,
        name: "Kohga - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1128,
        name: "Master Kohga Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1129,
        name: "Observation Post - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1130,
        name: "Attack on Vah Naboris - Breath of the Wild",
        tags: ["Battle", "Event"],
    },
    {
        id: 1131,
        name: "Riju's Trust - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1132,
        name: "Divine Beast Vah Naboris - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1133,
        name: "Thunderblight Ganon Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1134,
        name: "Urbosa - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1135,
        name: "Race Minigame - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1136,
        name: "Gerudo Race Award Ceremony - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1137,
        name: "Heat Test - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1138,
        name: "Molduga Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1139,
        name: "Ruins - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1140,
        name: "Labyrinth/Lost Woods - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1141,
        name: "Korok Forest - Breath of the Wild",
        tags: ["Area", "Town"],
    },
    {
        id: 1142,
        name: "Great Deku Tree - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1143,
        name: "Get Master Sword - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1144,
        name: "Akkala Ancient Tech Lab - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1145,
        name: "Possessed Dragon - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1146,
        name: "Dragons - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1147,
        name: "Omen of the Blood Moon - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1148,
        name: "Memory - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1149,
        name: "Silent Princess - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1150,
        name: "Father and Daughter - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1151,
        name: "Flee and Despair - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1152,
        name: "Zelda's Power Awakens - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1153,
        name: "Zelda's Wish - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1154,
        name: "Hyrule Castle Town Ruins - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1155,
        name: "Guardian Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1156,
        name: "Entering Hyrule Castle - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1157,
        name: "Hyrule Castle - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1158,
        name: "Calamity Ganon Appears - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1159,
        name: "The Divine Beasts Strike! - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1160,
        name: "Calamity Ganon Battle - Phase 1 - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1161,
        name: "Calamity Ganon Battle - Phase 2 - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1162,
        name: "Dark Beast Ganon Appears - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1163,
        name: "Dark Beast Ganon Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1164,
        name: "Do You Remember Me? - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1165,
        name: "Staff Credits - Breath of the Wild",
        tags: ["Other"],
    },
    {
        id: 1166,
        name: "Epilogue - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1167,
        name: "Lurelin Village - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1168,
        name: "Kilton - Breath of the Wild",
        tags: ["Character"],
    },
    {
        id: 1169,
        name: "Wedding at Tarrey Town - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1170,
        name: "Tarrey Town - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1171,
        name: "Canyon - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1172,
        name: "Hunting Minigame - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1173,
        name: "Horse God Malanya's Fountain - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1174,
        name: "Satori Mountain - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1175,
        name: "Gliding Minigame - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1176,
        name: "Trial of the Sword Completed - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1177,
        name: "Shrine Monument's Arise - Breath of the Wild",
        tags: ["Event", "Area"],
    },
    {
        id: 1178,
        name: "Shrine Monument - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1179,
        name: "Champion Mipha's Song - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1180,
        name: "Champion Revali's Song - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1181,
        name: "Champion Daruk's Song - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1182,
        name: "Champion Urbosa's Song - Breath of the Wild",
        tags: ["Event", "Character"],
    },
    {
        id: 1183,
        name: "Final Trial - Breath of the Wild",
        tags: ["Dungeon"],
    },
    {
        id: 1184,
        name: "Monk Maz Koshia Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    {
        id: 1185,
        name: "Princess Zelda and The Champions - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1186,
        name: "Framed Picture - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1187,
        name: "The Champion's Ballad - Breath of the Wild",
        tags: ["Event"],
    },
    {
        id: 1188,
        name: "Nintendo Switch Presentation - Breath of the Wild",
        tags: ["Other"],
    },
    {
        id: 1189,
        name: "Field - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1190,
        name: "Riding - Breath of the Wild",
        tags: ["Area"],
    },
    {
        id: 1191,
        name: "Zora's Domain (Night) - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1192,
        name: "Gerudo Town (Night) - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1193,
        name: "Rito Village (Night) - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1194,
        name: "Hateno Village (Night) - Breath of the Wild",
        tags: ["Town"],
    },
    {
        id: 1195,
        name: "Battle - Breath of the Wild",
        tags: ["Battle"],
    },
    // Tears of the Kingdom
    // https://soundcloud.com/infiniteshadow23/sets/legend-of-zelda-tears-of-the
    {
        id: 1196,
        name: "Prologue: Beneath Hyrule Castle - Tears of the Kingdom",
        tags: ["Event", "Area"],
    },
    {
        id: 1197,
        name: "Sky Island - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1198,
        name: "Temple of Time - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1199,
        name: "Encounter With Rauru - Tears of the Kingdom",
        tags: ["Character", "Event"],
    },
    {
        id: 1200,
        name: "Shrine of Light - Tears of the Kingdom",
        tags: ["Dungeon"],
    },
    {
        id: 1201,
        name: "Rauru's Guidance - Tears of the Kingdom",
        tags: ["Event", "Character"],
    },
    {
        id: 1202,
        name: "Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1203,
        name: "Rauru's Farewell - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1204,
        name: "You Must Find Me - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1205,
        name: "Skydiving - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1206,
        name: "Field - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1207,
        name: "Reunion With Purah - Tears of the Kingdom",
        tags: ["Event", "Character"],
    },
    {
        id: 1208,
        name: "Switch On - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1209,
        name: "Launch from the Tower - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1210,
        name: "Scanning Region - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1211,
        name: "Skydiving to the Depths - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1212,
        name: "Depths - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1213,
        name: "Lightroot - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1214,
        name: "Memories - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1215,
        name: "Skyview Tower - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1216,
        name: "Flux Construct Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1217,
        name: "Gloom Hands Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1218,
        name: "Lucky Clover Gazette - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1219,
        name: "Rito Village (During the Phenomenon) - Tears of the Kingdom",
        tags: ["Town", "Event"],
    },
    {
        id: 1220,
        name: "Tulin's Bow Taken - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1221,
        name: "Investigation to the Clouds - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1222,
        name: "Cumulonimbus Cloud - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1223,
        name: "Wind Temple - Tears of the Kingdom",
        tags: ["Dungeon"],
    },
    {
        id: 1224,
        name: "Colgera Appears - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1225,
        name: "Colgera Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1226,
        name: "Tulin - Tears of the Kingdom",
        tags: ["Character"],
    },
    {
        id: 1227,
        name: "The Phenomenon Disappears - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1228,
        name: "Gleeok Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1229,
        name: "Goron City (During the Phenomenon) - Tears of the Kingdom",
        tags: ["Town", "Event"],
    },
    {
        id: 1230,
        name: "YunoboCo HQ - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1231,
        name: "Yunobo (Clearly Not Himself) Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1232,
        name: "Moragia Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1233,
        name: "Fire Temple - Tears of the Kingdom",
        tags: ["Dungeon"],
    },
    {
        id: 1234,
        name: "Marbled Gohma Appears - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1235,
        name: "Marbled Gohma Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1236,
        name: "Yunobo - Tears of the Kingdom",
        tags: ["Character"],
    },
    {
        id: 1237,
        name: "Minecart Land Minigame - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1238,
        name: "Battle (Monster Campment) - Tears of the Kingdom",
        tags: ["Battle", "Event"],
    },
    {
        id: 1239,
        name: "Field (Night) - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1240,
        name: "Ball Toss Minigame - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1241,
        name: "Battle (Depths/Cave) - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1242,
        name: "Depths Abandoned Mine - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1243,
        name: "Furious Master Kohga - Tears of the Kingdom",
        tags: ["Event", "Character"],
    },
    {
        id: 1244,
        name: "Frox Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1245,
        name: "Shrine of Light: Blessing - Tears of the Kingdom",
        tags: ["Dungeon"],
    },
    {
        id: 1246,
        name: "Battle (Boss Bokoblin) - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1247,
        name: "Zora's Domain (During the Phenomenon) - Tears of the Kingdom",
        tags: ["Event", "Town"],
    },
    {
        id: 1248,
        name: "Purify the Sludge-Covered Statue - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1249,
        name: "Yona - Tears of the Kingdom",
        tags: ["Character"],
    },
    {
        id: 1250,
        name: "Mipha Court - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1251,
        name: "Reunion With Sidon - Tears of the Kingdom",
        tags: ["Event", "Character"],
    },
    {
        id: 1252,
        name: "Pristine Sanctum - Tears of the Kingdom",
        tags: ["Event", "Area"],
    },
    {
        id: 1253,
        name: "Sludge Like Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1254,
        name: "Ancient Zora Waterworks - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1255,
        name: "Approaching the Temple in the Sky - Tears of the Kingdom",
        tags: ["Event", "Area"],
    },
    {
        id: 1256,
        name: "Water Temple - Tears of the Kingdom",
        tags: ["Dungeon"],
    },
    {
        id: 1257,
        name: "Mucktorok Appears - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1258,
        name: "Mucktorok Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1259,
        name: "Sidon - Tears of the Kingdom",
        tags: ["Character"],
    },
    {
        id: 1260,
        name: "Dive Ceremony Minigame - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1261,
        name: "Shrine of Light: Before the Trial - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1262,
        name: "Battle (Shrine of Light) - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1263,
        name: "The Gerudo Assault - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1264,
        name: "Master Kohga Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1265,
        name: "Gerudo Town (During the Phenomenon) - Tears of the Kingdom",
        tags: ["Town", "Event"],
    },
    {
        id: 1266,
        name: "Gerudo Shelter - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1267,
        name: "Desert Ruins - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1268,
        name: "Kara Kara Bazaar Defense Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1269,
        name: "Gerudo Town Defense Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1270,
        name: "Queen Gibdo Appears - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1271,
        name: "Queen Gibdo Battle (Outside) - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1272,
        name: "Battle (Temple) - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1273,
        name: "Lightning Temple - Tears of the Kingdom",
        tags: ["Dungeon"],
    },
    {
        id: 1274,
        name: "Queen Gibdo Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1275,
        name: "Riju - Tears of the Kingdom",
        tags: ["Character"],
    },
    {
        id: 1276,
        name: "Lurelin Village (Restoration Feast) - Tears of the Kingdom",
        tags: ["Town", "Event"],
    },
    {
        id: 1277,
        name: "Lookout Landing (Shrouded in Dark Clouds) - Tears of the Kingdom",
        tags: ["Event", "Town"],
    },
    {
        id: 1278,
        name: "Hyrule Castle (Sky) - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1279,
        name: "Phantom Ganon Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1280,
        name: "Lookout Landing - Tears of the Kingdom",
        tags: ["Town"],
    },
    {
        id: 1281,
        name: "The World-Renowned Cece - Tears of the Kingdom",
        tags: ["Character"],
    },
    {
        id: 1282,
        name: "The Cece Hat - Tears of the Kingdom",
        tags: ["Event", "Character"],
    },
    {
        id: 1283,
        name: "The Mayoral Election - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1284,
        name: "Hateno School - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1285,
        name: "Hateno Ancient Tech Lab - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1286,
        name: "Thunderhead Isles - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1287,
        name: "Dragonhead Island - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1288,
        name: "Construct Factory - Tears of the Kingdom",
        tags: ["Dungeon"],
    },
    {
        id: 1289,
        name: "Zonai Pedestal - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1290,
        name: "Spirit Temple - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1291,
        name: "Seized Construct Appears - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1292,
        name: "Seized Construct Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1293,
        name: "Mineru - Tears of the Kingdom",
        tags: ["Character"],
    },
    {
        id: 1294,
        name: "Memories of The Imprisoning War - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1295,
        name: "Korok Forest (During the Phenomenon) - Tears of the Kingdom",
        tags: ["Town", "Event"],
    },
    {
        id: 1296,
        name: "Geoglyph - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1297,
        name: "Tears of the Dragon - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1298,
        name: "The Sword Held by the Dragon - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1299,
        name: "Got Master Sword - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1300,
        name: "Hyrule Castle Chasm - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1301,
        name: "Battle (Forgotten Foundation) - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1302,
        name: "Gloom's Lair - Tears of the Kingdom",
        tags: ["Area"],
    },
    {
        id: 1303,
        name: "The Demon King's Army - Tears of the Kingdom",
        tags: ["Event", "Battle"],
    },
    {
        id: 1304,
        name: "Demon King Ganondorf - Tears of the Kingdom",
        tags: ["Event", "Character"],
    },
    {
        id: 1305,
        name: "Demon King Ganondorf Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1306,
        name: "Demon King Ganondorf Battle - Tears of the Kingdom",
        tags: ["Battle", "Character"],
    },
    {
        id: 1307,
        name: "The Demon Dragon Appears - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1308,
        name: "Demon Dragon Battle - Tears of the Kingdom",
        tags: ["Battle"],
    },
    {
        id: 1309,
        name: "The Demon Dragon is Destroyed - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1310,
        name: "To Her Hand - Tears of the Kingdom",
        tags: ["Event"],
    },
    {
        id: 1311,
        name: "Oh, Link... I'm Home! (Zelda's Return) - Tears of the Kingdom",
        tags: ["Character", "Event"],
    },
    {
        id: 1312,
        name: "Main Theme - Tears of the Kingdom",
        tags: ["Other"],
    },
    {
        id: 1313,
        name: "Staff Credits - Tears of the Kingdom",
        tags: ["Other"],
    },
    // Echoes of Wisdom
    // https://soundcloud.com/infiniteshadow23/sets/the-legend-of-zelda-echoes-of
    {
        id: 1314,
        name: "Mysterious Dungeon - Echoes of Wisdom",
        tags: ["Dungeon", "Event"],
    },
    {
        id: 1315,
        name: "Escape the Rift - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1316,
        name: "Opening Title - Echoes of Wisdom",
        tags: ["Other", "Event"],
    },
    {
        id: 1317,
        name: "Hyrule Castle Town - Echoes of Wisdom",
        tags: ["Town"],
    },
    {
        id: 1318,
        name: "Hyrule Castle - Echoes of Wisdom",
        tags: ["Area", "Town"],
    },
    {
        id: 1319,
        name: "Unsettling Phenomenon - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1320,
        name: "A Rift Appears - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1321,
        name: "Tri - Echoes of Wisdom",
        tags: ["Character"],
    },
    {
        id: 1322,
        name: "Hyrule Castle Underground - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1323,
        name: "Suthorn Beach - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1324,
        name: "Overworld - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1325,
        name: "Suthorn Village - Echoes of Wisdom",
        tags: ["Town"],
    },
    {
        id: 1326,
        name: "Cave - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1327,
        name: "Lueburry's House - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1328,
        name: "Still World - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1329,
        name: "Battle - Echoes of Wisdom",
        tags: ["Event", "Battle"],
    },
    {
        id: 1330,
        name: "Suthorn Ruins - Echoes of Wisdom",
        tags: ["Dungeon"],
    },
    {
        id: 1331,
        name: "Echo Link Battle - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1332,
        name: "Swordfighter Form - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1333,
        name: "Seismic Talus Battle - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1334,
        name: "Stamp Guy - Echoes of Wisdom",
        tags: ["Event", "Character"],
    },
    {
        id: 1335,
        name: "Mango Rush - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1336,
        name: "Gerudo Town - Echoes of Wisdom",
        tags: ["Town"],
    },
    {
        id: 1337,
        name: "Celebration - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1338,
        name: "Gerudo Desert - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1339,
        name: "Gerudo Sanctum - Echoes of Wisdom",
        tags: ["Dungeon"],
    },
    {
        id: 1340,
        name: "Mogryph Battle - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1341,
        name: "Smoothie Shop - Echoes of Wisdom",
        tags: ["Event", "Area"],
    },
    {
        id: 1342,
        name: "Eastern Temple / Hidden Ruins - Echoes of Wisdom",
        tags: ["Dungeon"],
    },
    {
        id: 1343,
        name: "Jabul Waters / Zora River - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1344,
        name: "River Zora Village - Echoes of Wisdom",
        tags: ["Town"],
    },
    {
        id: 1345,
        name: "Acorn Gathering - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1346,
        name: "Sea Zora Village - Echoes of Wisdom",
        tags: ["Town"],
    },
    {
        id: 1347,
        name: "Danger! - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1348,
        name: "Boss Battle - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1349,
        name: "Jabul Ruins - Echoes of Wisdom",
        tags: ["Dungeon"],
    },
    {
        id: 1350,
        name: "Vocavor Battle - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1351,
        name: "Zora's Harmony - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1352,
        name: "Horse Race - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1353,
        name: "Fairy's Fountain - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1354,
        name: "Still Hyrule Castle - Echoes of Wisdom",
        tags: ["Dungeon"],
    },
    {
        id: 1355,
        name: "Echo Ganon Battle - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1356,
        name: "Faron Wetlands - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1357,
        name: "Deku Scrub Lockup - Echoes of Wisdom",
        tags: ["Event", "Area"],
    },
    {
        id: 1358,
        name: "Faron Temple - Echoes of Wisdom",
        tags: ["Dungeon"],
    },
    {
        id: 1359,
        name: "Gohma Battle - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1360,
        name: "Null Attacks - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1361,
        name: "King of Hyrule - Echoes of Wisdom",
        tags: ["Character"],
    },
    {
        id: 1362,
        name: "Kakariko Village - Echoes of Wisdom",
        tags: ["Town"],
    },
    {
        id: 1363,
        name: "Slumber Dojo - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1364,
        name: "Eldin Volcano - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1365,
        name: "Eldin Volcano Cave - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1366,
        name: "Goron City - Echoes of Wisdom",
        tags: ["Town"],
    },
    {
        id: 1367,
        name: "Hyrule Ranch - Echoes of Wisdom",
        tags: ["Town", "Area"],
    },
    {
        id: 1368,
        name: "Eldin Temple - Echoes of Wisdom",
        tags: ["Dungeon"],
    },
    {
        id: 1369,
        name: "Lava Escape - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1370,
        name: "Volvagia Battle - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1371,
        name: "Battle - Toride - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1372,
        name: "Overworld 2 - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1373,
        name: "Echo Zelda Battle - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1374,
        name: "Null Battle - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1375,
        name: "Null Battle - Second Phase - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1376,
        name: "Lanayru Temple - Echoes of Wisdom",
        tags: ["Dungeon"],
    },
    {
        id: 1377,
        name: "Null Battle - Final Third Phase - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1378,
        name: "Boss Appears - Echoes of Wisdom",
        tags: ["Event"],
    },
    {
        id: 1379,
        name: "Dampé - Echoes of Wisdom",
        tags: ["Character"],
    },
    {
        id: 1380,
        name: "Hebra Mountain - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1381,
        name: "Mount Lanayru Cave - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1382,
        name: "Skorchill Battle - Echoes of Wisdom",
        tags: ["Battle"],
    },
    {
        id: 1383,
        name: "Eternal Forest - Echoes of Wisdom",
        tags: ["Area"],
    },
    {
        id: 1384,
        name: "Staff Credits - Echoes of Wisdom",
        tags: ["Other"],
    },
    // Link's Awakening (Remake)
    // https://soundcloud.com/kevhann/sets/disc-1-switch-the-legend-of-zelda-links-awakening-ost-rare-4-disc-switchgb
    // https://soundcloud.com/kevhann/sets/disc-2-switch-the-legend-of-zelda-links-awakening-ost-rare-4-disc-switchgb
    {
        id: 1385,
        name: "Name Entry - Link's Awakening (Remake)",
        tags: ["Other"],
    },
    {
        id: 1386,
        name: "Waking Up at Tarin's House - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1387,
        name: "Owl - Link's Awakening (Remake)",
        tags: ["Character", "Event"],
    },
    {
        id: 1388,
        name: "Overworld - Link's Awakening (Remake)",
        tags: ["Area"],
    },
    {
        id: 1389,
        name: "Mabe Village - Link's Awakening (Remake)",
        tags: ["Town"],
    },
    {
        id: 1390,
        name: "Mysterious Forest - Link's Awakening (Remake)",
        tags: ["Area"],
    },
    {
        id: 1391,
        name: "Guardian Acorn - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1392,
        name: "Shop - Link's Awakening (Remake)",
        tags: ["Area", "Town"],
    },
    {
        id: 1393,
        name: "Fairy's Fountain - Link's Awakening (Remake)",
        tags: ["Area"],
    },
    {
        id: 1394,
        name: "Trendy Game - Link's Awakening (Remake)",
        tags: ["Area", "Town"],
    },
    {
        id: 1395,
        name: "Fishing Game - Link's Awakening (Remake)",
        tags: ["Area"],
    },
    {
        id: 1396,
        name: "Fishing Hit! - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1397,
        name: "Inside a House - Link's Awakening (Remake)",
        tags: ["Area", "Town"],
    },
    {
        id: 1398,
        name: "Ballad of the Wind Fish (Marin) - Link's Awakening (Remake)",
        tags: ["Character", "Event"],
    },
    {
        id: 1399,
        name: "Cave - Link's Awakening (Remake)",
        tags: ["Area"],
    },
    {
        id: 1400,
        name: "Level 1 - Tail Cave - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1401,
        name: "Underground Passage - Link's Awakening (Remake)",
        tags: ["Area"],
    },
    {
        id: 1402,
        name: "Mini Boss Battle - Link's Awakening (Remake)",
        tags: ["Battle"],
    },
    {
        id: 1403,
        name: "Boss Battle - Link's Awakening (Remake)",
        tags: ["Battle"],
    },
    {
        id: 1404,
        name: "Victory Fanfare - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1405,
        name: "Rescue Bow Wow Mission - Link's Awakening (Remake)",
        tags: ["Event", "Battle"],
    },
    {
        id: 1406,
        name: "Mr. Write's House - Link's Awakening (Remake)",
        tags: ["Town", "Area"],
    },
    {
        id: 1407,
        name: "Telephone Booth - Link's Awakening (Remake)",
        tags: ["Area", "Town"],
    },
    {
        id: 1408,
        name: "Level 2 - Bottle Grotto - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1409,
        name: "Mad Batter's Lair - Link's Awakening (Remake)",
        tags: ["Area", "Event"],
    },
    {
        id: 1410,
        name: "Richard's Villa - Link's Awakening (Remake)",
        tags: ["Area", "Town"],
    },
    {
        id: 1411,
        name: "Kiki's Gratitude - Link's Awakening (Remake)",
        tags: ["Character", "Event"],
    },
    {
        id: 1412,
        name: "Kanalet Castle - Link's Awakening (Remake)",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 1413,
        name: "Seashell Mansion - Link's Awakening (Remake)",
        tags: ["Area"],
    },
    {
        id: 1414,
        name: "Level 3 - Key Cavern - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1415,
        name: "Chased by Bees - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1416,
        name: "Animal Village - Link's Awakening (Remake)",
        tags: ["Town"],
    },
    {
        id: 1417,
        name: "Christine's House - Link's Awakening (Remake)",
        tags: ["Area", "Town"],
    },
    {
        id: 1418,
        name: "Dream Shrine - Link's Awakening (Remake)",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 1419,
        name: "Overworld (With Marin) - Link's Awakening (Remake)",
        tags: ["Event", "Area"],
    },
    {
        id: 1420,
        name: "Mysterious Forest (With Marin) - Link's Awakening (Remake)",
        tags: ["Event", "Area"],
    },
    {
        id: 1421,
        name: "Ballad of the Wind Fish (Shore) - Link's Awakening (Remake)",
        tags: ["Event", "Area"],
    },
    {
        id: 1422,
        name: "Ballad of the Wind Fish - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1423,
        name: "Level 4 - Angler's Tunnel - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1424,
        name: "Manbo's Mambo - Link's Awakening (Remake)",
        tags: ["Character", "Event"],
    },
    {
        id: 1425,
        name: "House by the Cove - Link's Awakening (Remake)",
        tags: ["Area"],
    },
    {
        id: 1426,
        name: "Under the Bridge - Link's Awakening (Remake)",
        tags: ["Area"],
    },
    {
        id: 1427,
        name: "Level 5 - Catfish's Maw - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1428,
        name: "The Frog's Song of Soul - Link's Awakening (Remake)",
        tags: ["Character", "Event"],
    },
    {
        id: 1429,
        name: "Southern Face Shrine - Link's Awakening (Remake)",
        tags: ["Dungeon", "Area"],
    },
    {
        id: 1430,
        name: "Level 6 - Face Shrine - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1431,
        name: "Color Dungeon - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1432,
        name: "Cucco House - Link's Awakening (Remake)",
        tags: ["Area", "Town"],
    },
    {
        id: 1433,
        name: "Level 7 - Eagle's Tower - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1434,
        name: "Turtle Rock Battle - Link's Awakening (Remake)",
        tags: ["Battle"],
    },
    {
        id: 1435,
        name: "Level 8 - Turtle Rock - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1436,
        name: "Rapid's Ride - Link's Awakening (Remake)",
        tags: ["Area", "Event"],
    },
    {
        id: 1437,
        name: "Rapid's Ride (Time Attack) - Link's Awakening (Remake)",
        tags: ["Area", "Event"],
    },
    {
        id: 1438,
        name: "Ballad of the Wind Fish (Instruments) - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1439,
        name: "Owl (Wind Fish's Egg) - Link's Awakening (Remake)",
        tags: ["Event", "Character"],
    },
    {
        id: 1440,
        name: "Wind Fish's Egg - Link's Awakening (Remake)",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 1441,
        name: "Shadow Nightmare - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1442,
        name: "Shadow Nightmare Battle - Link's Awakening (Remake)",
        tags: ["Battle"],
    },
    {
        id: 1443,
        name: "Shadow Nightmare Battle - Final Form - Link's Awakening (Remake)",
        tags: ["Battle"],
    },
    {
        id: 1444,
        name: "Victory Fanfare (Shadow Nightmare) - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1445,
        name: "Ascent / The Wind Fish - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1446,
        name: "Epilogue Theme (Koholint Island Disappears) - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1447,
        name: "Staff Credits - Link's Awakening (Remake)",
        tags: ["Other"],
    },
    {
        id: 1448,
        name: "Game Over - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1449,
        name: "Dampé's House - Link's Awakening (Remake)",
        tags: ["Area"],
    },
    {
        id: 1450,
        name: "Chamber Dungeon - Edit Mode - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1451,
        name: "Chamber Dungeon - Beginner - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1452,
        name: "Chamber Dungeon - Intermediate - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1453,
        name: "Chamber Dungeon - Advanced - Link's Awakening (Remake)",
        tags: ["Dungeon"],
    },
    {
        id: 1454,
        name: "Shadow Link Battle - Link's Awakening (Remake)",
        tags: ["Battle"],
    },
    {
        id: 1455,
        name: "Chamber Dungeon - Results - Link's Awakening (Remake)",
        tags: ["Event"],
    },
    {
        id: 1456,
        name: "Name Entry (Totakeke) - Link's Awakening (Remake)",
        tags: ["Other"],
    },
    {
        id: 1457,
        name: "Name Entry (Marin) - Link's Awakening (Remake)",
        tags: ["Other"],
    },
    {
        id: 1458,
        name: "Name Entry (Zelda) - Link's Awakening (Remake)",
        tags: ["Other"],
    },
    {
        id: 1459,
        name: "Title Theme - Link's Awakening (Remake)",
        tags: ["Other"],
    },
    {
        id: 1460,
        name: "Ballad of the Wind Fish (TV Commercial) - Link's Awakening (Remake)",
        tags: ["Other"],
    },
    {
        id: 1461,
        name: "Sword Search on the Beach - Link's Awakening (Remake)",
        tags: ["Area", "Event"],
    },
    // Hyrule Warriors
    // https://soundcloud.com/axelxion-733657012/sets/hyrule-warriors-legends-ost
    {
        id: 1462,
        name: "Main Theme - Hyrule Warriors",
        tags: ["Other"],
    },
    {
        id: 1463,
        name: "Inside a House - Battle Preparation - Hyrule Warriors",
        tags: ["Event"],
    },
    {
        id: 1464,
        name: "Hidden Skill Training - Chapter Intro - Hyrule Warriors",
        tags: ["Event"],
    },
    {
        id: 1465,
        name: "Hyrule Field 1 - Hyrule Warriors",
        tags: ["Area"],
    },
    {
        id: 1466,
        name: "Fairy's Fountain - Hyrule Warriors",
        tags: ["Event"],
    },
    {
        id: 1467,
        name: "Dodongo Boss Battle - Hyrule Warriors",
        tags: ["Battle"],
    },
    {
        id: 1468,
        name: "Zelda's Lullaby - Hyrule Warriors",
        tags: ["Character", "Event"],
    },
    {
        id: 1469,
        name: "Solidus Cave - Hyrule Warriors",
        tags: ["Area"],
    },
    {
        id: 1470,
        name: "Mysterious - Hyrule Warriors",
        tags: ["Event"],
    },
    {
        id: 1471,
        name: "In the Greenwood - Hyrule Warriors",
        tags: ["Area"],
    },
    {
        id: 1472,
        name: "Boss Battle - Hyrule Warriors",
        tags: ["Battle"],
    },
    {
        id: 1473,
        name: "Guilty Feeling - Hyrule Warriors",
        tags: ["Event"],
    },
    {
        id: 1474,
        name: "Eclipse of the Sun - Hyrule Warriors",
        tags: ["Area"],
    },
    {
        id: 1475,
        name: "Hammer of Stones - Hyrule Warriors",
        tags: ["Area"],
    },
    {
        id: 1476,
        name: "Sequence of Drops - Hyrule Warriors",
        tags: ["Area", "Dungeon"],
    },
    {
        id: 1477,
        name: "Twilight Field - Hyrule Warriors",
        tags: ["Area"],
    },
    {
        id: 1478,
        name: "Kakariko Village - Hyrule Warriors",
        tags: ["Town", "Area"],
    },
    {
        id: 1479,
        name: "Remnant of Twilight - Hyrule Warriors",
        tags: ["Area"],
    },
    {
        id: 1480,
        name: "Skyloft - Hyrule Warriors",
        tags: ["Area", "Town"],
    },
    {
        id: 1481,
        name: "Heart of the End - Hyrule Warriors",
        tags: ["Area"],
    },
    {
        id: 1482,
        name: "A Great Evil - Hyrule Warriors",
        tags: ["Event", "Battle"],
    },
    {
        id: 1483,
        name: "Kumite - Hyrule Warriors",
        tags: ["Event", "Battle"],
    },
    {
        id: 1484,
        name: "Face a Crisis - Hyrule Warriors",
        tags: ["Event", "Battle"],
    },
    {
        id: 1485,
        name: "Have a Talk - Hyrule Warriors",
        tags: ["Event"],
    },
    {
        id: 1486,
        name: "Under Siege - Hyrule Warriors",
        tags: ["Event", "Area"],
    },
    {
        id: 1487,
        name: "Bazaar - Hyrule Warriors",
        tags: ["Town", "Area"],
    },
    {
        id: 1488,
        name: "Psychostorm - Hyrule Warriors",
        tags: ["Area"],
    },
    {
        id: 1489,
        name: "Silent Guardians - Hyrule Warriors",
        tags: ["Area"],
    },
    {
        id: 1490,
        name: "Sandstream - Hyrule Warriors",
        tags: ["Area"],
    },
    {
        id: 1491,
        name: "Focal Line - Hyrule Warriors",
        tags: ["Event"],
    },
    {
        id: 1492,
        name: "Eclipse of the Moon - Hyrule Warriors",
        tags: ["Area", "Event"],
    },
    {
        id: 1493,
        name: "Eclipse of the Moon - Battle - Hyrule Warriors",
        tags: ["Event", "Area", "Battle"],
    },
    {
        id: 1494,
        name: "Eclipse of the World - Hyrule Warriors",
        tags: ["Event", "Area"],
    },
    {
        id: 1495,
        name: "Eclipse of the World - Battle - Hyrule Warriors",
        tags: ["Event", "Area", "Battle"],
    },
    {
        id: 1496,
        name: "Denouement - Hyrule Warriors",
        tags: ["Event"],
    },
    {
        id: 1497,
        name: "Hard Linked - Ending Theme - Hyrule Warriors",
        tags: ["Other"],
    },
    {
        id: 1498,
        name: "Adventure Map - Hyrule Warriors",
        tags: ["Area", "Event"],
    },
    {
        id: 1499,
        name: "Linkle - Hyrule Warriors",
        tags: ["Character", "Event"],
    },
    {
        id: 1500,
        name: "Title & Dragon Roost Remix - Hyrule Warriors",
        tags: ["Area", "Event"],
    },
    {
        id: 1501,
        name: "Molgera - Hyrule Warriors",
        tags: ["Area", "Dungeon", "Battle"],
    },
    {
        id: 1502,
        name: "Adventure Map - Tal Tal Heights - Hyrule Warriors",
        tags: ["Area", "Event"],
    },
    {
        id: 1503,
        name: "Adventure Map - Clock Town - Hyrule Warriors",
        tags: ["Area", "Event"],
    },
    {
        id: 1504,
        name: "Adventure Map - Lorule Field - Hyrule Warriors",
        tags: ["Area", "Event"],
    },
    {
        id: 1505,
        name: "Adventure Map - Realm Overworld - Hyrule Warriors",
        tags: ["Area", "Event"],
    },
    {
        id: 1506,
        name: "Adventure Map - The Cursed Sea - Hyrule Warriors",
        tags: ["Area", "Event"],
    },
    {
        id: 1507,
        name: "Adventure Map - The Great Sea - Hyrule Warriors",
        tags: ["Area", "Event"],
    },
    {
        id: 1508,
        name: "Adventure Map - Twilight Hyrule Field - Hyrule Warriors",
        tags: ["Area", "Event"],
    },
    // Hyrule Warriors: Age of Calamity
    // https://soundcloud.com/user-777918113/sets/hyrule-warriors-age-of
    {
        id: 1509,
        name: "Opening - Hyrule Warriors: Age of Calamity",
        tags: ["Other", "Event"],
    },
    {
        id: 1510,
        name: "Main Theme - Hyrule Warriors: Age of Calamity",
        tags: ["Other"],
    },
    {
        id: 1511,
        name: "Overlooking Hyrule - Prelude to Calamity - Hyrule Warriors: Age of Calamity",
        tags: ["Event", "Other"],
    },
    {
        id: 1512,
        name: "War Chronicles - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1513,
        name: "The Battle of Hyrule Field - Hyrule Warriors: Age of Calamity",
        tags: ["Battle", "Area"],
    },
    {
        id: 1514,
        name: "Guardian Menace - Hyrule Warriors: Age of Calamity",
        tags: ["Battle", "Event"],
    },
    {
        id: 1515,
        name: "Hold the Line - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1516,
        name: "Battle of Liberation - Hyrule Warriors: Age of Calamity",
        tags: ["Battle"],
    },
    {
        id: 1517,
        name: "Powerful Foe - Hyrule Warriors: Age of Calamity",
        tags: ["Battle"],
    },
    {
        id: 1518,
        name: "Imminent Threat - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1519,
        name: "Warriors of Hyrule - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1520,
        name: "A Battle's Conclusion - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1521,
        name: "Whimsical - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1522,
        name: "Royal Research Lab - Hyrule Warriors: Age of Calamity",
        tags: ["Area"],
    },
    {
        id: 1523,
        name: "An Uneasy Heart - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1524,
        name: "Overlooking Hyrule - Prelude to Calamity (Map) - Hyrule Warriors: Age of Calamity",
        tags: ["Area"],
    },
    {
        id: 1525,
        name: "Gallery / Records of War - Hyrule Warriors: Age of Calamity",
        tags: ["Area", "Event"],
    },
    {
        id: 1526,
        name: "The Calamity's Revival - Hyrule Warriors: Age of Calamity",
        tags: ["Battle", "Event"],
    },
    {
        id: 1527,
        name: "Mipha, the Zora Princess - Hyrule Warriors: Age of Calamity",
        tags: ["Character", "Battle"],
    },
    {
        id: 1528,
        name: "Daruk, the Goron Hero - Hyrule Warriors: Age of Calamity",
        tags: ["Character", "Battle"],
    },
    {
        id: 1529,
        name: "Revali, the Rito Warrior - Hyrule Warriors: Age of Calamity",
        tags: ["Character", "Battle"],
    },
    {
        id: 1530,
        name: "Urbosa, the Gerudo Chief - Hyrule Warriors: Age of Calamity",
        tags: ["Character", "Battle"],
    },
    {
        id: 1531,
        name: "Revali, Ace Archer & Aviator - Hyrule Warriors: Age of Calamity",
        tags: ["Character", "Battle"],
    },
    {
        id: 1532,
        name: "A Single Wish - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1533,
        name: "Astor, Prophet of Doom Battle - Hyrule Warriors: Age of Calamity",
        tags: ["Battle"],
    },
    {
        id: 1534,
        name: "Astor - Hyrule Warriors: Age of Calamity",
        tags: ["Character"],
    },
    {
        id: 1535,
        name: "A Quiet Moment - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1536,
        name: "Blades of the Yiga - Hyrule Warriors: Age of Calamity",
        tags: ["Area", "Battle", "Event"],
    },
    {
        id: 1537,
        name: "Crescendo - Hyrule Warriors: Age of Calamity",
        tags: ["Battle"],
    },
    {
        id: 1538,
        name: "Crescendo - Phase 2 - Hyrule Warriors: Age of Calamity",
        tags: ["Battle"],
    },
    {
        id: 1539,
        name: "Decisive Fight Against Calamity Ganon - Hyrule Warriors: Age of Calamity",
        tags: ["Battle"],
    },
    {
        id: 1540,
        name: "Desperate Situation - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1541,
        name: "Determination - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1542,
        name: "Disquiet - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1543,
        name: "Divine Beast Vah Medoh Looms - Hyrule Warriors: Age of Calamity",
        tags: ["Battle", "Event"],
    },
    {
        id: 1544,
        name: "Divine Beast Vah Naboris Looms - Hyrule Warriors: Age of Calamity",
        tags: ["Battle", "Event"],
    },
    {
        id: 1545,
        name: "Divine Beast Vah Rudania Looms - Hyrule Warriors: Age of Calamity",
        tags: ["Battle", "Event"],
    },
    {
        id: 1546,
        name: "Divine Beast Vah Ruta Looms - Hyrule Warriors: Age of Calamity",
        tags: ["Battle", "Event"],
    },
    {
        id: 1547,
        name: "Growing Sorrow - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1548,
        name: "Harbinger Ganon, Hatred and Malice Incarnate - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1549,
        name: "In Dire Need - Hyrule Warriors: Age of Calamity",
        tags: ["Event", "Battle"],
    },
    {
        id: 1550,
        name: "Intense Battle Against the Hinox - Hyrule Warriors: Age of Calamity",
        tags: ["Battle"],
    },
    {
        id: 1551,
        name: "Intense Battle Against the Molduga - Hyrule Warriors: Age of Calamity",
        tags: ["Battle"],
    },
    {
        id: 1552,
        name: "Intense Battle Against The Talus - Hyrule Warriors: Age of Calamity",
        tags: ["Battle"],
    },
    {
        id: 1553,
        name: "Master Kohga, Top Banana of The Yiga Clan - Hyrule Warriors: Age of Calamity",
        tags: ["Battle", "Character"],
    },
    {
        id: 1554,
        name: "Meditative Training - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1555,
        name: "Messenger from the Future - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1556,
        name: "Mortal Struggle Beneath a Blood Moon - Hyrule Warriors: Age of Calamity",
        tags: ["Event", "Battle"],
    },
    {
        id: 1557,
        name: "Overlooking Hyrule - After the Calamity - Hyrule Warriors: Age of Calamity",
        tags: ["Event", "Other"],
    },
    {
        id: 1558,
        name: "Overlooking Hyrule - Amid the Calamity - Hyrule Warriors: Age of Calamity",
        tags: ["Event", "Other"],
    },
    {
        id: 1559,
        name: "Push Forward - Hyrule Warriors: Age of Calamity",
        tags: ["Event", "Battle"],
    },
    {
        id: 1560,
        name: "Rescue Operation - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1561,
        name: "Romp Across the Battlefield - Hyrule Warriors: Age of Calamity",
        tags: ["Event", "Battle"],
    },
    {
        id: 1562,
        name: "End Credits - Hyrule Warriors: Age of Calamity",
        tags: ["Other"],
    },
    {
        id: 1563,
        name: "Searching the Lost Woods - Hyrule Warriors: Age of Calamity",
        tags: ["Area", "Event"],
    },
    {
        id: 1564,
        name: "Sooga, Right Hand of the Inverted Eye - Hyrule Warriors: Age of Calamity",
        tags: ["Character", "Battle"],
    },
    {
        id: 1565,
        name: "Terrako - Hyrule Warriors: Age of Calamity",
        tags: ["Character"],
    },
    {
        id: 1566,
        name: "The Knight Who Seals the Darkness - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1567,
        name: "With Power Awakened - Hyrule Warriors: Age of Calamity",
        tags: ["Event"],
    },
    {
        id: 1568,
        name: "Worlds Converge: Riju & Teba - Hyrule Warriors: Age of Calamity",
        tags: ["Event", "Battle"],
    },
    {
        id: 1569,
        name: "Worlds Converge: Sidon & Yunobo - Hyrule Warriors: Age of Calamity",
        tags: ["Event", "Battle"],
    },
    {
        id: 1570,
        name: "Zelda's Lullaby (Ancient Tune) - Hyrule Warriors: Age of Calamity",
        tags: ["Event", "Character"],
    },
];