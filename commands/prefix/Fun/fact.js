const discord = require("discord.js");

module.exports = {
    config: {
        name: "fact", // Name of Command
        description: "pokoknya kasih fakta dunia tapi bahasa Inggris", // Command Description
        usage: "pap fact" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
        var facts = [
      "The world’s oldest wooden wheel has been around for more than 5,000 years.",
      "Though less common than earthquakes, the moon actually has moonquakes, too. That's right. Moonquakes. Pretty much everyone is interested in space, so this is always a good fact to pull out.",
      "You actually lose a large percentage of your taste buds while on an airplane. This might explain a lot about those less-than-stellar in-flight meals, or why you find yourself craving the saltiest foods while in the sky.",
      "Bees can sting other bees — usually if they feel threatened or are protecting their territory. In other words, you're not the only one who's scared of getting stung",
      "Most people know dolphins have incredible sonar abilities. But did you know they were studied as war tools during the Cold War? They really are as smart as people say they are. There are dozens of dolphin-specific fun facts out there, actually.",
      "Like humans, koalas actually have unique individual fingerprints. If you place a koala and human finger print side by side, they're actually pretty hard to differentiate.",
      "Brendan Fraser almost died while filming The Mummy (he passed out while filming a scene). Pretty scary, right?",
      "Will Ferrell consumed so much sugar while filming Elf that he actually became physically ill. If you've seen the famous spaghetti scene, then you can probably understand why.",
      "The Hollywood sign in Los Angeles once said Hollywoodland but was changed in 1949.",
      "The most expensive film ever made was Pirates of the Caribbean, which cost more than 375 million dollars to create. For reference, the average budget for a big studio movie is around $65 million.",
      "Buzz Lightyear's original name is Lunar Larry. Doesn't have quite the same ring to it, right?",
      "Iceland grows 5 centimeters per year because of its moving tectonic plates. Another Iceland fun fact: More than 60% of the country's population lives in its capital city.",
      "Russia has a whopping 11 time zones within the country, which gives you an idea of just how large it is.",
      "The place that has more caves than any other place on earth? Kentucky. Surprising, right? Maybe worth adding to your next vacation list.",
      "The Sahara Desert can reach up to 136 degrees. Its average temperature is actually about 100 degrees Fahrenheit, so it's pretty much always hot.",
      "Australia is wider than the moon — 600km wider, to be exact.",
      "Vatican City is actually the smallest country in the world at only .2 miles wide.",
      "There are more people in California than Canada, despite the fact that Canada is more than 2,000 percent larger in size than California.",
      "The closest state in the United States to Africa is Maine, which juts out further east into the Atlantic than most people realize.",
      "Russia has more surface area than Pluto. Seem impossible? Just think of those 11 time zones.",
      "The heart of a shrimp is located in its head. Weird, yet kind of cool. Also weird: Shrimp have an open circulatory system, so their organs just float in blood.",
      "Slugs have not one, not two, not three... but four noses. They don't work like human noses do, exactly. Instead, they sense chemicals, sounds, lights, and more.",
      "It takes a sloth two to four weeks to digest food. They actually have the slowest metabolic system of any mammal.",
      "Just like human babies suck their thumbs, baby elephants sometimes suck on their trunks. They can also stand within 20 minutes of birth (though they can't see for a while, and instead sense their mothers through sound and smell).",
      "Crows can recognize human faces — and remember them for their entire lives. They've also been known to leave gifts for humans.",
      "There is only one country on earth without mosquitoes: Iceland. Its low temperatures make it impossible for the pest to breed.",
      "The name of a group of lemurs is (wait for it) a conspiracy. Really. This is because they often work together in their social groups to outsmart prey.",
      "Believe it or not, wombats' poop is cube-shaped. This apparently has to do with their digestive process and various bodily contractions. The more you know.",
      "A little gross, but also kind of funny: Lobsters pee out of their faces. Even more interesting, they do this as a way to attract mates.",
      "Ready to have your mind blown? A blind chameleon can still adjust to the colors of its environment. The way it changes colors is because of its special cells, not eyesight.",
      "Freddie Mercury has a pretty memorable smile. But did you know it's because he had four extra teeth in his upper jaw? Yup. That's why Rami Malek had to wear prosthetic teeth while working on Bohemian Rhapsody.",
      "Clocking in at 1,560 words, Rap God by Eminem is the song with the most words. Imagine trying to memorize all of that.",
      "The world's longest concert lasted 453 hours, though there is also a 639-year-long concert that is currently happening, according to the Washington Post.",
      "It takes 70 different pieces of wood to make up a violin, explaining why some of them are so expensive (one even sold for $16 million). Talk about a potentially very expensive hobby.",
      "All clownfish are born male. That explains Marlin and Nemo. They have the ability to change their sex later on.",
      "A group of porcupines is called a prickle. How fitting. The animal is also known as a quill pig in Latin, which is kind of cute.",
      "Abraham Lincoln, who was famously tall at 6'4, was also a successful competitive wrestler.",
      "Finland has more saunas than cars. Sounds like a pretty great place. In fact, it's consistently ranked as one of the happiest countries in the world, which makes sense.",
      "Gatorade was invented at the University of Florida, named after the mascot of the school, the Gators. The university receives 20 percent of the profits from the beverage.",
      "Volleyball and basketball were both invented in Massachusetts.",
      "The heaviest onion ever grown was 18 pounds and was grown in England. That's a toddler-sized onion.",
      "Contrary to what you might think, Canada actually eats more macaroni and cheese than any other place. Belgium east the most fries. Germany eats the most bread.",
      "The famous Sesame Street character Cookie Monster’s real name is Sid. And Captain Crunch? His full name is Captain Horatio Magellan Crunch. Naturally.",
      "If you play tennis at Wimbledon, swearing is not allowed. Therefore, judges have to learn swearwords in different languages in order to enforce the rules. Not the least fun job in the world, we'd say.",
      "Mushrooms can glow in the dark. In fact, there are more than 70 varieties of mushrooms that do this. There are also 70-80 varieties of mushrooms that are poisonous to eat.",
      "Since 1962, the official sport of Maryland has been jousting.",
      "According to the Guinness World Records, the world's heaviest watermelon weighed 350 pounds. Imagine trying to slice up that bad boy for a summer picnic.",
      "Ketchup was once sold as medicine to treat diarrhea and indigestion. The treatment did not, in fact, work.",
      "In Switzerland, it's illegal to own just one guinea pig because they crave social interaction so much. In their natural habitat, they live in groups and are very communicative.",
      "Seven percent of American adults think chocolate milk comes from brown cows (spoiler: It does not).",
      "Bananas are curved because of how they grow — toward the sun. Also, technically speaking, they're actually defined as a type of berry.",
      "The oldest living animal is reportedly a Seychelles giant tortoise named Jonathan. He is 190.",
      "Only 5% of the ocean has been explored. The intense pressure at the deepest depths of the ocean makes it virtually impossible to navigate.",
      "Saint Lucia is the only country in the world named after a woman.",
      "The British royal family isn't allowed to play Monopoly because it gets too competitive. The Queen also has only one nail polish color.",
      "There's an island in Japan that is only inhabited by bunnies. And, yes, you can visit there if you want.",
      "The Supreme Court has its own private basketball court called the highest court in the land. Pretty clever, if you ask us. It also features a full gym.",
      "More people are killed by vending machines than sharks. Also, more than 90% of shark attacks are on males.",
      "There's a town in Norway called Hell. Ironically, it never gets very warm there at all. In fact, the temperature regularly dips below zero degrees.",
      "If you put together all the time of characters sitting in silence in Twilight, it would amount to 26 minutes. Vampires really are that dramatic.",
      "Dolly Parton once entered a Dolly Parton lookalike contest ... and lost. Even better, she lost to a drag queen. True to Dolly style, she tells the story often.",
      "Jennifer Lawrence has a tattoo that says H2O on her hand to remind her to drink water. Whatever works, right?",
      "Ryan Gosling was almost in the Backstreet Boys. Like many other '90s boy and girl band members, Gosling was a member of the Mickey Mouse Club.",
      "Jennifer Aniston was almost a Saturday Night Live cast member — yes, before Friends. She turned down the role because she had heard the environment at SNL was not good toward women.",
      "When Lady Gaga went to NYU, a group of students started a Facebook group about how she would never be famous. Guess the joke is really, really on them now, huh?",
      "Jamie Lee Curtis is Jake Gyllenhaal's godmother. His parents are both directors and screenwriters, so he's always been closely connected to the industry.",
      "Pop star Lorde has an Instagram account where she rates onion rings from around the world. Because why not?",
      "Lana del Rey's real name is Lizzy Grant. She says she chose the name because she wanted something that sounded sort of exotic and reminded me of like the seaside on the Floridian coast.",
      "Strawberries are not actually berries. They're actually a multiple fruit which consists of many tiny individual fruits embedded in a fleshy receptacle according to the Carnegie Museum, which is kind of a disturbing way to describe a strawberry but accurate nonetheless.",
      "Avocados technically are berries, though.",
      "You can actually hear rhubarb grow — it pops! This is because of how fast it grows — up to an inch per day. It also can squeak and make other noises.",
      "You can eat the labels on fruit. They're totally edible much of the time... they just might not taste that good. Still probably a good idea to peel them off first.",
      "Until 2011, anything lower than 11% ABV was not legally considered alcohol.",
      "Green, yellow, and red bell peppers might look like different versions of the same vegetable, but they're not!",
      "White chocolate isn't actually chocolate at all. It's mostly cocoa butter, sugar, and lecithin.",
      "Honey will never go bad, so that's one less thing you have to throw out when you clean out your pantry. You also don't have to refrigerate it.",
      "Carrots were originally purple, not orange. You can still find delicious purple carrots around, though, even though they're not the most popular version.",
      "If you put grapes in the microwave, they will explode. There are also more than 8,000 different varieties of grapes, believe it or not.",
      "Nutmeg can be hallucinogenic if consumed in large quantities. You would have to eat at least two teaspoons or more to feel any effects, though.",
      "Raspberries are actually a member of the rose family. So are apples, pears, and plums.",
      "Broccoli contains more protein than a lot of meats, including steak. Just another reason to add the green vegetable to your menu sometime soon.",
      "Pistachios are technically fruits. Think of them as the opposite of a peach. Instead of throwing out the pit and eating the flesh, we do the opposite with pistachios.",
      "SPAM actually stands for spiced ham. It's been around since 1937.",
      "Most countries don't refrigerate their eggs. In the US, they are considered a perishable item and therefore have to be refrigerated, but they have a surprisingly long shelf life.",
      "Whether you realize it or not, you blink around 20 times per minute. You can blink up to 5 times per second if you try, which makes the eyes the fastest muscle in the body.",
      "Earwax is technically a form of sweat. Bet that's one fun fact you kind of wish you didn't know now.",
      "Over the course of an average lifetime, most people will spend an entire year sitting on the toilet.",
      "You're taller in the morning than at night. This is because over the course of the day our cartilage compresses and makes us a bit shorter.",
      "The average adult human has 2000-4000 taste buds and despite what you may have been taught, they are not visible to the human eye. Those bumps on your tongue are what the taste buds are on, but those aren't actually the taste buds themselves.",
      "Humans are the only animals on earth with chins. The scariest part is that no one knows why this is.",
      "On average, hair grows about 6 inches per year. As we age, some of these hair follicles stop producing hair, which is why hair loss and balding is common in older people.",
      "Blushing is caused by a rush of adrenaline. It's also genetic, so if you're prone to it, it's likely one of your parents is, too.",
      "Every two weeks, another language or dialect goes extinct. There is a language in Nigeria that is currently only spoken by four living individuals.",
      "The Australian Aboriginal language of Paakantyi is only currently spoken by anywhere from 2 to 24 people.",
      "There are more than 200 languages that have been invented just for television or movies.",
      "Dogs' sense of smell is 40 times more powerful than humans' — they have 300 million olfactory receptors.",
      "Dogs also have something called neophilia, which means they are attracted to new and interesting odors. This might explain a lot about why your daily walks with your dog take longer some days than others.",
      "Dogs can also breathe and smell simultaneously, unlike humans (have you ever tried to breathe while inhaling through your nose?).",
      "Dogs have a dominant paw like humans have a dominant left or right hand. Can you tell if your dog is left-pawed or right-pawed?",
      "Dogs' noses are like human fingerprints; each one is unique.",
      "Dolphins literally sleep with one eye open because only one of their brain hemispheres sleeps at a time. The left eye closes when the right half of the brain sleeps, and vice versa.",
      "Originally, vacuum cleaners were horse-drawn. The horse-drawn buggy would announce to all your neighbors that you were having a special treatment done. Great advertising!",
      "Alfred Hitchcock was scared of... eggs. Let's all be thankful he didn't create a horror film about eggs.",
      "Umbrellas were once only used by women. They've also been around in some form since 500 BC",
    ];
    await message.channel.send(facts[Math.floor(Math.random() * facts.length)]);
      
    },
};
