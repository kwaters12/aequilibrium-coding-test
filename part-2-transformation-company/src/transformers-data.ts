import { Allegiances } from './interfaces'

const autobotsNames = [
  "Optimus Prime",
  "Bumblebee",
  "Cliffjumper",
  "Wheeljack",
  "Prowl",
  "Jazz",
  "Sideswipe",
  "Ratchet",
  "Ironhide",
  "Hot Rod",
  "Springer",
  "Kup",
  "Ultra Magnus",
  "Blurr",
  "Arcee",
  "Wheelie",
  "Hound",
  "Mirage",
  "Trailbreaker",
  "Sunstreaker",
  "Bluestreak",
  "Tracks",
  "Grapple",
  "Red Alert",
  "Smokescreen",
  "Hoist",
  "Inferno",
  "Skids",
  "Windcharger",
  "Brawn",
  "Huffer",
  "Gears",
  "Warpath",
  "Seaspray",
  "Powerglide",
  "Beachcomber",
  "Cosmos",
  "Outback",
  "Pipes",
  "Swerve",
  "Tailgate",
  "Skyfire",
  "Blaster",
  "Perceptor",
  "Omega Supreme",
  "Devcon",
  "Alpha Trion",
  "Broadside",
  "Metroplex",
  "Sky Lynx",
  "Punch",
  "Sandstorm",
  "Beta",
  "Grimlock",
  "Slag",
  "Sludge",
  "Snarl",
  "Swoop",
  "Silverbolt",
  "Air Raid",
  "Slingshot",
  "Skydive",
  "Fireflight",
  "Superion",
  "Streetwise",
  "Groove",
  "First Aid",
  "Hot Spot",
  "Blades",
  "Defensor",
  "Elita One",
  "Chromia",
  "Firestar",
  "Moonracer",
  "Nosecone",
  "Lightspeed",
  "Strafe",
  "Scattershot",
  "Afterburner",
  "Computron",
  "Chase",
  "Freeway",
  "Goldbug",
  "Rollbar",
  "Searchlight",
  "Wideload",
  "Sureshot",
  "Pointblank",
  "Crosshairs",
  "Hardhead",
  "Chromedome",
  "Brainstorm",
  "Highbrow",
  "Cerebros",
  "Fortress Maximus",
  "Fastlane",
  "Wreck-Gar",
  "Junkyard",
  "Scrapheap",
  "Nancy"
]

const decepticonsNames = [
  "Megatron",
  "Predaking",
  "Soundwave",
  "Shockwave",
  "Skywarp",
  "Starscream",
  "Thundercracker",
  "Reflector",
  "Shrapnel",
  "Bombshell",
  "Kickback",
  "Hook",
  "Scrapper",
  "Bonecrusher",
  "Long Haul",
  "Scavenger",
  "Mixmaster",
  "Devastator",
  "Thrust",
  "Ramjet",
  "Dirge",
  "Trypticon",
  "Motormaster",
  "Drag Strip",
  "Dead End",
  "Breakdown",
  "Wildrider",
  "Menasor",
  "Brawl",
  "Swindle",
  "Blast Off",
  "Vortex",
  "Onslaught",
  "Bruticus",
  "Galvatron",
  "Cyclonus",
  "Scourge",
  "Sweeps",
  "Octane",
  "Blitzwing",
  "Astrotrain",
  "Sixshot",
  "Tantrum",
  "Rampage",
  "Headstrong",
  "Razorclaw",
  "Divebomb",
  "Runamuck",
  "Runabout",
  "Rippersnapper",
  "Blot",
  "Sinnertwin",
  "Cutthroat",
  "Hun-Gurrr",
  "Abominus",
  "Slugslinger",
  "Triggerhappy",
  "Misfire",
  "Scorponok",
  "Weirdwolf",
  "Skullcruncher",
  "Mindwipe",
  "Apeface",
  "Snapdragon",
  "Pounce"
]

export const TransformersData = {
  [Allegiances.AUTOBOTS]: autobotsNames.map(name => {
    return {
      name: name,
      allegiance: Allegiances.AUTOBOTS,
      strength: Math.floor(Math.random() * 10),
      intelligence: Math.floor(Math.random() * 10),
      speed: Math.floor(Math.random() * 10),
      endurance: Math.floor(Math.random() * 10),
      rank: Math.floor(Math.random() * 10),
      courage: Math.floor(Math.random() * 10),
      firepower: Math.floor(Math.random() * 10),
      skill: Math.floor(Math.random() * 10)
    }
  }),
  [Allegiances.DECEPTICONS]: decepticonsNames.map(name => {
    return {
      name: name,
      allegiance: Allegiances.DECEPTICONS,
      strength: Math.ceil(Math.random() * 10),
      intelligence: Math.ceil(Math.random() * 10),
      speed: Math.ceil(Math.random() * 10),
      endurance: Math.ceil(Math.random() * 10),
      rank: Math.ceil(Math.random() * 10),
      courage: Math.ceil(Math.random() * 10),
      firepower: Math.ceil(Math.random() * 10),
      skill: Math.ceil(Math.random() * 10)
    }
  })
}

