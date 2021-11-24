import { Injectable } from "@angular/core";

@Injectable()
export class AlbumsService {
    private albums:Albums[] = [
        {
            posicion: "50",
            artista: "Jay-Z",
            album: "The Blueprint",
            bio: "With The Blueprint, Jay-Z took on anyone and everyone who wanted to sit on his throne, even the jesters. “Takeover,” one of rap’s most precise and unrelenting diss tracks, commits GBH on rappers Nas and Prodigy from Mobb Deep. When Hova isn’t taking shots at record executives, cops, critics, haters, biters, and his absent dad (and still, sadly, using the word “faggot”), he inches toward vulnerability on “Song Cry.” “Izzo (H.O.V.A.),” with dynamic production by Kanye West, gave him his first Top 10 single. Jay-Z elevates clever rhymes and innovations with an unmatched air of calm control and a cavalier confidence. Here’s the moral of the story, courtesy of “Takeover”: “You guys don’t want it with HOV.”",
            label: "Roc-A-Fella",
            ano: "2001",
            img: "assets/img/jay.jpg"
        },
        {
            posicion: "49",
            artista: "OutKast",
            album: "Aquemini",
            bio: "The title of OutKast’s third album is a made-up word that combines the star signs of Big Boi (Aquarius) and André 3000 (Gemini). Their music is about duality too, matching Big Boi’s imperative to “make the club get crunk” with André’s determination to “activate the left and right brain.” André was the virtuoso, clipping off compound rhymes with grace, while Big Boi’s more grounded flow and clear diction rooted their songs. Hits like “Rosa Parks” put the duo’s hometown “Hotlanta” on the rap map, and at a time when formulaic albums by Master P and Puff Daddy topped the charts, OutKast unleashed an explosive sound that used live musicianship, social commentary, and a heavy dose of deep funk to create the greatest record ever to come out of the Dirty South.",
            label: "Laface",
            ano: "1998",
            img: "assets/img/out.jpg"
        },
        {
            posicion: "48",
            artista: "Bob Marley and the Wailers",
            album: "Legend",
            bio: "Bob Marley said, “Reggae music too simple for [American musicians]. You must be inside of it, know what’s happening, and why you want to play this music. You don’t just run to play this music because you think you can make a million off it.” Ironically, this set of the late reggae idol’s greatest hits has sold in the millions. On a single disc, it captures everything that made him an international icon: his nuanced songcraft, his political message, and — of course — the universal soul he brought to Jamaican rhythm and Rastafarian spirituality in the gunfighter ballad “I Shot the Sheriff,” the comforting swing of “No Woman, No Cry,” and the holy promise of “Redemption Song.”",
            label: "Island",
            ano: "1984",
            img: "assets/img/bob.jpg"
        },
        {
            posicion: "47",
            artista: "Ramones",
            album: "Ramones",
            bio: "“Our early songs came out of our real feelings of alienation, isolation, frustration — the feelings everybody feels between 17 and 75,” said singer Joey Ramone. Clocking in at just 29 minutes, Ramones is a complete rejection of the spangled artifice of 1970s rock. The songs were fast and anti-social, just like the band: “Beat on the Brat,” “Blitzkrieg Bop,” “Now I Wanna Sniff Some Glue.” Guitarist Johnny Ramone refused to play solos — his jackhammer chords became the lingua franca of punk — and the whole record cost just more than $600 to make. But Joey’s leather-tender plea “I Wanna Be Your Boyfriend” showed that even punks need love.",
            label: "Sire",
            ano: "1976",
            img: "assets/img/ramones.jpg"
        },
        {
            posicion: "46",
            artista: "Paul Simon",
            album: "Graceland",
            bio: "Frustrated by the experience of writing good songs that didn’t come to life in the studio, Paul Simon set out “to make really good tracks,” as he later put it. “I thought, ‘I have enough songwriting technique that I can reverse this process and write this song after the tracks are made.’” Simon risked severe criticism by going to South Africa (then under apartheid) and working with the best musicians from the black townships. With the fluid energy and expertise of guitarist Ray Phiri and the vocal troupe Ladysmith Black Mambazo, Simon created an album about isolation and redemption that transcended world music to become the whole world’s soundtrack.",
            label: "Columbia",
            ano: "1986",
            img: "assets/img/paul.jpg"
        },
        {
            posicion: "45",
            artista: "Prince",
            album: "Sign O' the Times",
            bio: "He’d fired his band, and his latest movie, Under the Cherry Moon, had flopped; just three years after Purple Rain, Prince was in the market for a comeback. So he recorded one of the great albums of the Eighties. Times is best known for the apocalyptic title track, the brontosaurus funk of “Housequake,” and the gorgeous “If I Was Your Girlfriend.” Yet the simplest moments are unforgettable: the “Sweet Jane”-style guitar plea of “The Cross,” the Stax revamp on “Slow Love,” a jilted girl’s sadness in “I Could Never Take the Place of Your Man.” “I hate the word ‘experiment,’” Prince said. “It sounds like something you didn’t finish.” Here, he finished.",
            label: "Paisley Park/Warnes Bros.",
            ano: "1987",
            img: "assets/img/prince.jpg"
        },
        {
            posicion: "44",
            artista: "Nas",
            album: "Illmatic",
            bio: "Other rappers were harder and brasher, but nobody captured the creeping menace of life on the streets like this 20-year-old from New York’s Queensbridge projects. With lines like “I never sleep, ’cause sleep is the cousin of death,” Nas showed more poetic style than any MC since Rakim. His debut begins with the sound of a subway train, and for the next 39 minutes, he seems to visit every street corner from Queens to Brooklyn, detailing drug deals, escapism, persecution, prison life, and survival. Throughout, he displays a pure focus (there’s only one guest verse) and explosive dexterity; it’s one thing to say “I drop the ancient manifested hip-hop,” as he does in the first verse of “Memory Lane,” it’s another to back that up with a stunning, acrobatic second verse. Illmatic was an instant classic that never crossed over, which only deepened its myth with hip-hop heads.",
            label: "Columbia",
            ano: "1994",
            img: "assets/img/nas.jpg"
        },
        {
            posicion: "43",
            artista: "A Tribe Called Quest",
            album: "The Low End Theory",
            bio: "“We wanted the longevity of Earth, Wind, and Fire, and Prince, and people of that nature,” Phife Dawg told Rolling Stone. “We wanted to be known for full-length albums.” Other people connected the dots between hip-hop and jazz , but A Tribe Called Quest’s second album drew the entire picture. The sound is dominated by the low end of the title — they even recruited legendary jazz bassist Ron Carter (who’d worked with Thelonious Monk and Miles Davis). As Carter gets dope on the double bass, the Tribe discourse on matters ranging from the music industry (“Show Business”) to sexual politics (“The Infamous Date Rape”). Each time Q-Tip rhymes over Carter’s bass lines, the groove just gets deeper.",
            label: "Jive",
            ano: "1991",
            img: "assets/img/a.jpg"
        },
        {
            posicion: "42",
            artista: "Radiohead",
            album: "OK Computer",
            bio: "Radiohead recorded their third album in the mansion of actress Jane Seymour while she was filming Dr. Quinn, Medicine Woman. OK is where the band began pulling at its sound like taffy, seeing what happened, not worrying if it was still “rock.” What resulted is a slow, haunting album with unforgettable tracks such as “Karma Police.” Guitarist Jonny Greenwood said, “I got very excited at the prospect of doing string parts that didn’t sound like ‘Eleanor Rigby,’ which is what all string parts have sounded like for the past 30 years.… We used violins to make frightening white-noise stuff, like the last chord of ‘Climbing Up the Walls.’”",
            label: "Capitol",
            ano: "1997",
            img: "assets/img/radiohead.jpg"
        },
        {
            posicion: "41",
            artista: "The Rolling Stones",
            album: "Let It Bleed",
            bio: "The record kicks off with the terrifying “Gimme Shelter,” the song that came to symbolize not only the catastrophe of the Stones’ free show at Altamont but also the death of the utopian spirit of the 1960s. And the entire album burns with apocalyptic cohesion: the sex-mad desperation of “Live With Me”; the murderous blues of “Midnight Rambler”; Keith Richards’ lethal, biting guitar on “Monkey Man”; the epic moralism, with honky-tonk piano and massed vocal chorus, of “You Can’t Always Get What You Want,” which Mick Jagger wrote on acoustic guitar in his bedroom. “Somebody said that we could get the London Bach Choir,” Jagger recalled, “and we said, ‘That will be a laugh.'”",
            label: "ABKCO",
            ano: "1969",
            img: "assets/img/rolling.jpg"
        },
        {
            posicion: "40",
            artista: "David Bowie",
            album: "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
            bio: "This album documents one of the most elaborate self-mythologizing schemes in rock, as David Bowie created the glittery, messianic alter ego Ziggy Stardust (“well-hung and snow-white tan”). The glam rock Bowie made with guitarist Mick Ronson is an irresistible blend of sexy, campy pop and blues power, with enduring tracks like “Hang On to Yourself” and “Suffragette City.” The anthem “Ziggy Stardust” was one of rock’s earliest, and best, power ballads. “I consider myself responsible for a whole new school of pretensions,” Bowie said. “They know who they are. Don’t you, Elton? Just kidding. No, I’m not.”",
            label: "RCA",
            ano: "1972",
            img: "assets/img/david.jpg"
        },
        {
            posicion: "39",
            artista: "Talking Heads",
            album: "Remain in Light",
            bio: "David Byrne said Remain in Light “was done in bits and pieces, one instrument at a time.” The result was a New Wave masterpiece powered by Byrne’s revelation, as he put it on “The Great Curve,” that “the world moves on a woman’s hips.” It combined thrust of a P-Funk dance party, the ancient-to-the-future rhythm hypnosis of Nigerian funkmaster Fela Kuti, and the studied adventurousness of the album’s producer and Heads co-conspirator, Brian Eno. Remain in Light marked Talking Heads’ transformation from avatars of the punk avant-garde to polyrhythmic magicians with hit-single appeal. Just try not dancing to “Once in a Lifetime.”",
            label: "Sire",
            ano: "1980",
            img: "assets/img/talking.jpg"
        },
        {
            posicion: "38",
            artista: "Bob Dylan",
            album: "Blonde on Blonde",
            bio: "Rock’s ﬁrst studio double LP by a major artist was, as Bob Dylan declared in 1978, “the closest I ever got to the sound I hear in my head … that thin, that wild-mercury sound.” Blonde on Blonde was mainly recorded in Nashville with session pros (another rock first), who created an almost contradictory magniﬁcence: a tightly wound tension around Dylan’s quicksilver language and incisive singing in barrelhouse surrealism such as “Rainy Day Women #12 and 35” and “Stuck Inside of Mobile With the Memphis Blues Again.” Amid the frenzy, Dylan delivered some of his ﬁnest, clearest songs of comfort and desire: the sidelong beauty “Sad Eyed Lady of the Lowlands” and “I Want You,” the title of which Dylan almost used for the album.",
            label: "Columbia",
            ano: "1966",
            img: "assets/img/bobd.jpg"
        },
        {
            posicion: "37",
            artista: "Dr. Dre",
            album: "The Chronic",
            bio: "When George Clinton first heard hip-hop artists blending old records with new beats, he wasn’t too impressed. But then Dr. Dre turned samples of Clinton’s P-Funk sides into G-Funk, and Dr. Funkenstein approved, calling funk “the DNA of hip-hop and rap.” Dre had already taken gangsta rap to the mainstream with his earlier group, N.W.A, but on The Chronic, he funked up the rhymes with a smooth bass-heavy production style and the laid-back delivery of then-unknown rapper Snoop Doggy Dogg. When Dre and Snoop dropped “Nuthin’ But a ‘G’ Thang,” there was no getting out of the way.",
            label: "Deathrow",
            ano: "1992",
            img: "assets/img/dr.jpg"
        },
        {
            posicion: "36",
            artista: "Michael Jackson",
            album: "Off the Wall",
            bio: "“The ballads were what made Off the Wall a Michael Jackson album,” Jackson remembered of his big solo splash, which spun off four Top 10 hits and eclipsed the success of the Jackson 5. “I’d done ballads with [my] brothers, but they had never been too enthusiastic about them and did them more as a concession to me than anything else.” At the end of “She’s Out of My Life,” you can hear Jackson actually break down and cry in the studio. But the unstoppable dance tracks on Off the Wall remain classic examples of Jackson as a one-man disco inferno. “Don’t Stop ‘Til You Get Enough,” “Rock With You,” and “Burn This Disco Out” still get the party started today.",
            label: "Epic",
            ano: "1979",
            img: "assets/img/michael.jpg"
        },
        {
            posicion: "35",
            artista: "The Beatles",
            album: "Rubber Soul",
            bio: "Producer George Martin described Rubber Soul as “the first album to present a new, growing Beatles to the world,” and so it was. The first of what was to be a series of huge leaps forward with each new album, Rubber Soul opens with the comic character study “Drive My Car” and is suffused with Bob Dylan’s inﬂuence on “I’m Looking Through You,” “You Won’t See Me,” and “Norwegian Wood,” in which John Lennon sings about sex with a humor and candor unlike any rock & roller before and George Harrison lays down rock’s first sitar solo. Harrison called Rubber Soul “the best one we made,” because “we were suddenly hearing sounds that we weren’t able to hear before.”",
            label: "Parlophone",
            ano: "1965",
            img: "assets/img/beatles.jpg"
        },
        {
            posicion: "34",
            artista: "Stevie Wonder",
            album: "Innervisions",
            bio: "“We as a people are not interested in ‘baby, baby’ songs any more, there’s more to life than that,” Stevie Wonder said in 1972. With Innervisions, Wonder offered a landmark fusion of social realism and spiritual idealism; he brings expressive color and irresistible funk to his synth-based keyboards on “Too High” (a cautionary anti-drug song) and “Higher Ground” (which echoes Martin Luther King Jr.’s message of transcendence). The album’s centerpiece is “Living for the City,” a cinematic depiction of exploitation and injustice. “Innervisions gives my own perspective on what’s happening in my world,” Wonder said. “I think it is my most personal album. I don’t care if it sells only five copies.”",
            label: "Tamla/Motown",
            ano: "1973",
            img: "assets/img/stevie.jpg"
        },
        {
            posicion: "33",
            artista: "Amy Winehouse",
            album: "Back to Black",
            bio: "With her love of Sixties girl-group pop and her dark beehive, Amy Winehouse came across as a star from another time. But as a child of the Nineties, she also loved hip-hop and wrote openly about her splattered relationships and issues with drugs and alcohol. Her breakthrough second album (recorded in Brooklyn with co-producers Mark Ronson and Salaam Remi) marked the arrival of a resplendently damaged 21st-century torch singer. Tracks like the mildly pushy “You Know I’m No Good” and the sumptuous “Love Is a Loving Game” had an elegant, beguiling smudginess that avoided the wax-museum quality of so much retro soul. “My odds are stacked,” Winehouse sings. “I’ll go back to black.” Indeed, the pain and tumult in her voice was very real. Before her death in 2011, she left behind a tragically unfulfilled promise.",
            label: "Island",
            ano: "2006",
            img: "assets/img/amy.jpg"
        },
        {
            posicion: "32",
            artista: "Beyoncé",
            album: "Lemonade",
            bio: "“Nine times out of 10 I’m in my feelings,” Beyoncé announced on her heartbreak masterpiece, Lemonade. She dropped the album as a Saturday-night surprise, knocking the world sideways — her most expansive and personal statement, tapping into marital breakdown and the state of the nation. It was a different side than she’d shown before, raging over infidelity and jealousy, but reveling in the militant-feminist-funk strut of “Formation.” All over Lemonade she explores the betrayals of American blackness, claiming her place in all of America’s music traditions — she goes outlaw country on “Daddy Lessons,” she digs blues metal with Jack White on “Don’t Hurt Yourself,” she revamps the Yeah Yeah Yeahs on “Hold Up.” Ashes to ashes, dust to side chicks — all hail the queen.",
            label: "Parkwood/Columbia",
            ano: "2016",
            img: "assets/img/beyonce.jpg"
        },
        {
            posicion: "31",
            artista: "Miles Davis",
            album: "Kind of Blue",
            bio: "This painterly masterpiece is one of the most important, inﬂuential, and popular albums in jazz. At the time it was made, Kind of Blue was also a revolution all its own. Turning his back on standard chord progressions, trumpeter Miles Davis used modal scales as a starting point for composition and improvisation — breaking new ground with warmth, subtlety, and understatement in the thick of hard bop. Davis and his peerless band — bassist Paul Chambers, drummer Jimmy Cobb, pianist Bill Evans, and the titanic sax team of John Coltrane and Cannonball Adderley — soloed in uncluttered settings, typiﬁed by “melodic rather than harmonic variation,” as Davis put it. Two numbers, “All Blues” and “Freddie Freeloader” (the latter featuring Wynton Kelly at the ivories in place of Evans), are in 12-bar form, but Davis’ approach allowed his players a cool, new, collected freedom.",
            label: "Columbia",
            ano: "1959",
            img: "assets/img/miles.jpg"
        },
        {
            posicion: "30",
            artista: "Jimi Hendrix",
            album: "Are You Experienced",
            bio: "This is what Britain sounded like in late 1966 and early 1967: ablaze with rainbow blues, orchestral guitar feedback, and cosmic possibility. Jimi Hendrix’s incendiary guitar was historic in itself, the luminescent sum of his chitlin-circuit labors with Little Richard and the Isley Brothers and his melodic exploitation of amp howl. But it was the pictorial heat of songs like “Manic Depression” and “The Wind Cries Mary” that established the transcendent promise of psychedelia. Backed by drummer Mitch Mitchell and bassist Noel Redding, the guitarist made soul music for inner space. “It’s a collection of free feeling and imagination,” he said of the album. “Imagination is very important.” Widely assumed to be about an acid trip, “Purple Haze” had “nothing to do with drugs,” Hendrix insisted. “‘Purple Haze’ was all about a dream I had that I was walking under the sea.”",
            label: "Track",
            ano: "1967",
            img: "assets/img/jimi.jpg"
        },
        {
            posicion: "29",
            artista: "The Beatles",
            album: "White Album",
            bio: "They wrote the songs while on retreat with the Maharishi Mahesh Yogi in India, taking a break from the celebrity grind. As John Lennon later said, “We sat in the mountains eating lousy vegetarian food, and we wrote all these songs.” They came back with more great tunes than they could release. Lennon pursued his hard-edged vision in the cynical wit of “Sexy Sadie” and “Happiness Is a Warm Gun,” as well as the childlike yearning of “Julia” and “Dear Prudence.” Paul McCartney’s playful pop energy came through in “Martha My Dear” and his inversion of Chuck Berry’s American values, “Back in the U.S.S.R.” George Harrison’s spiritual yearning led him to “Long, Long, Long” and “While My Guitar Gently Weeps,” featuring a guest guitar solo from Eric Clapton. Even Ringo Starr contributes his ﬁrst original, the country-tinged “Don’t Pass Me By.” The Beatles tried a little of everything, and all their adventures paid off.",
            label: "Apple",
            ano: "1968",
            img: "assets/img/beatlesw.jpg"
        },
        {
            posicion: "28",
            artista: "D'Angelo",
            album: "Woodo",
            bio: "In the five years following the release of his 1995 debut, Brown Sugar, D’Angelo grew disillusioned with the genre that had just anointed him a rising star. “I don’t consider myself an R&B artist,” the then-26-year-old told Jet. “R&B is pop, that’s the new word for R&B.” In his quest to create something new, he looked to both the masters of soul (Marvin, Curtis, Stevie) and contemporary innovators (Lauryn, Erykah). The end result was Voodoo, a moving, inventive masterpiece that stands as the ultimate achievement of the neo-soul era. Crafted with producer and drummer Questlove, who called the LP a “vicarious fantasy,” Voodoo places Pink Floyd-style cosmic jams (“Playa Playa”) next to Prince-inspired erotica (“Untitled [How Does It Feel]”). “I’m just looking at Voodoo as just the beginning,” D’Angelo said at the time. “It took a while, but I’m on my way now.”",
            label: "EMI",
            ano: "2000",
            img: "assets/img/d.jpg"
        },
        {
            posicion: "27",
            artista: "Wu-Tang Clan",
            album: "Enter the Wu-Tang(36 Chambers)",
            bio: "The first Wu-Tang Clan album launched rap’s most dominant franchise by inventing a new sound built around a hectic panoply of voices and spare, raw beats. RZA, the group’s sonic mastermind, constructed the Wu’s homemade world, he said, from a mix of “Eastern philosophy picked up from kung-fu movies, watered-down Nation of Islam preaching picked up on the New York streets, and comic books.” On “C.R.E.A.M.,” “Protect Ya Neck,” and the non-metaphorical “Wu-Tang Clan Ain’t Nuthing ta F’ Wit,” RZA’s offbeat samples (Thelonious Monk, the Dramatics, fellow New Yorker Barbra Streisand) create a grounding for the group’s nine members, including future solo stars Ol’ Dirty Bastard, Raekwon, GZA, Ghostface Killah, and Method Man. Dr. Dre and Snoop Dogg had established L.A. as the center of hip-hop innovation and daring, but the Wu reclaimed the crown for the music’s birthplace.",
            label: "Loud",
            ano: "1993",
            img: "assets/img/wu.jpg"
        },
        {
            posicion: "26",
            artista: "Patti Smith",
            album: "Horses",
            bio: "From its first defiant line, “Jesus died for somebody’s sins, but not mine,” the opening shot in a bold reinvention of Van Morrison’s garage-rock classic “Gloria,” Patti Smith’s debut album was a declaration of mutiny, a statement of faith in the transfigurative powers of rock & roll. Horses made her the queen of punk (her CBGB buddy Tom Verlaine of Television co-wrote the Jim Morrison tribute “Break It Up”), but Smith cared more for the poetry in rock. She sought the visions and passions that connected Keith Richards and Rimbaud — and found them, with the intuitive assistance of a killer band (pianist Richard Sohl, guitarist Lenny Kaye, bassist Ivan Kral, and drummer Jay Dee Daugherty) and her friend Robert Mapplethorpe, who shot the cover portrait.  “The real thing,” Smith later said, “was to keep rock & roll in the hands of the people.”",
            label: "Arista",
            ano: "1975",
            img: "assets/img/patti.jpg"
        },
        {
            posicion: "25",
            artista: "Carole King",
            album: "Tapestry",
            bio: "For a decade, Carole King wrote pop songs with her then-husband, Gerry Goffin: hits such as Little Eva’s “The Loco-Motion” (Eva Boyd was the couple’s babysitter) and the Monkees’ “Pleasant Valley Sunday.” Then King’s friend James Taylor encouraged her to sing her own tunes. “He just made it look so easy,” she recalled. “So I did Tapestry in the same spirit.” She slowed down “Will You Love Me Tomorrow?” (originally a hit for the Shirelles in 1961), with Taylor and Joni Mithcell on background vocals, heightening the melancholy inside, while her warm, earnest singing brought out the sadness in “It’s Too Late” and the earthy joy on “I Feel the Earth Move.” As King later recalled, “I wasn’t in the same league vocally with Aretha Franklin, Joni Mitchell, Barbara Streisand. But I knew how to convey the mood and emotion of a song with honest, straight-from-the-heart interpretation.” The resulting collection of songs saw King remake herself as an artist and became one of the biggest-selling albums of all time, creating the reigning model for the 1970s female singer-songwriter.",
            label: "Sony",
            ano: "1971",
            img: "assets/img/carole.jpg"
        },
        {
            posicion: "24",
            artista: "The Beatles",
            album: "Sgt. Pepper's Lonely Hearts Club Band",
            bio: "For the Beatles, it was a decisive goodbye to screaming crowds, world tours, and assembly-line record making. “We were fed up with being Beatles,” Paul McCartney said decades later. “We were not boys, we were men … artists rather than performers.” Sgt. Pepper christened the Summer of Love with the lavish psychedelic daydream “Lucy in the Sky With Diamonds,” the jaunty Ringo Starr-sung communality anthem “With a Little Help From My Friends,” the album-closing multilayered masterwork, “A Day in the Life,” and the title track, which introduced the alter egos the Beatles had developed for the ambitious project. “It liberated you,” McCartney said. “You could do anything.” It is hard to imagine a more perfect setting for the Victorian jollity of John Lennon’s “Being for the Beneﬁt of Mr. Kite!” (inspired by an 1843 circus poster) or the sumptuous melancholy of McCartney’s “Fixing a Hole,” with its blend of antique shadows (a harpsichord played by the Beatles’ producer George Martin) and modern sunshine lead guitar executed with ringing precision by George Harrison). The Sgt. Pepper premise was a license to take their music in every direction — rock spent the rest of the Sixties trying to keep up.",
            label: "Capitol",
            ano: "1967",
            img: "assets/img/beatless.jpg"
        },
        {
            posicion: "23",
            artista: "The Velvet Underground",
            album: "The Velvet Underground and Nico",
            bio: "“We were trying to do a Phil Spector thing with as few instruments as possible,” John Cale, the classically trained pianist and viola player of the Velvet Underground, once said of this record. It was no idle boast. Much of what we take for granted in rock would not exist without this New York band or its seminal debut: the androgynous sexuality of glitter, punk’s raw noir, the blackened-riff howl of grunge and noise rock. It is a record of fearless breadth and lyrical depth. Singer-songwriter Lou Reed documented carnal desire and drug addiction with a pop wisdom he learned as a song-factory composer for Pickwick Records. Cale introduced the power of pulse and drone (from his work in early minimalism); guitarist Sterling Morrison and drummer Maureen Tucker played with tribal force; Nico, a German vocalist brieﬂy added to the band by manager Andy Warhol, brought an icy femininity to the heated ennui in Reed’s songs. Rejected as nihilistic by the love crowd in 1967, the Banana Album (so named for its Warhol-designed cover), is the most prophetic rock album ever made.",
            label: "Verve",
            ano: "1967",
            img: "assets/img/velvet.jpg"
        },
        {
            posicion: "22",
            artista: "The Notorious B.I.G.",
            album: "Ready to Die",
            bio: "The Notorious B.I.G. spread the love the Brooklyn way on his classic debut, introducing us to the most immediately likable voice in hip-hop history. “I made the record for New York, but I want the world to hear it,” he said. Ready to Die executive producer Sean “Puffy” Combs, who’d read about the fledgling Brooklyn rapper in The Source magazine, pushed his new discovery to leaven the stick-up-kid self-mythologizing of “Machine Gun Funk” and “Gimme the Loot” with inviting party-up pop like “Big Poppa” and the ecstatically playful origin story “Juicy.” But it was Biggie’s gift of gab, enormous personality, and sense of humor that made Ready to Die so wonderful — whether he was offering a 360-degree vision of the mean streets of Fort Greene on “Things Done Changed,” kicking it Bonnie and Clyde-style on “Me and My Bitch,” or delivering rags-to-riches brags like “Birthdays was the worst days/Now we sip champagne when we’re thirsty.” In the process, he changed rap forever. He ends the album with the dark prophecy of “Suicidal Thoughts.” As with Kurt Cobain, his tragic death while still in his twenties will always leave us wondering how far he might have gone.",
            label: "bad Boy",
            ano: "1994",
            img: "assets/img/notorious.jpg"
        },
        {
            posicion: "21",
            artista: "Bruce Springsteen",
            album: "Born to Run",
            bio: "Bruce Springsteen spent everything he had — patience, energy, studio time, the physical endurance of his E Street Band — to ensure that his third album was a masterpiece. His reputation as a perfectionist begins here: There are a dozen guitar overdubs on the title track alone. He was also spending money he didn’t have. Engineer Jimmy Iovine had to hide the mounting recording bills from the Columbia paymasters. “The album became a monster,” Springsteen told his biographer, Dave Marsh. “It just ate up everyone’s life.” But in making Born to Run, Springsteen was living out the central drama in the album’s tenement-love operas (“Backstreets,” “Jungleland”) and gun-the-engine rock & roll (“Thunder Road,” “Born to Run”): the fight to reconcile big dreams with crushing reality. He found it so hard to translate the sound in his head — the Jersey-bar dynamite of his live gigs, Phil Spector’s Wagnerian grandeur, the heartbreaking melodrama of Roy Orbison’s hits — that Springsteen nearly scrapped Born to Run for a straight-up concert album. But his make-or-break attention to detail — including the iconic cover photo of Springsteen leaning onto saxman Clarence Clemons, a perfect metaphor for Springsteen’s brotherly reliance on the E Street Band — assured the integrity of Born to Run’s success. In his determination to make a great album, Springsteen produced a timeless, inspiring record about the labors and glories of aspiring to greatness.",
            label: "Columbia",
            ano: "1975",
            img: "assets/img/bruce.jpg"
        },
        {
            posicion: "20",
            artista: "Radiohead",
            album: "Kid A",
            bio: "A new, uniquely fearless kind of rock record for a new, increasingly fearful century, Radiohead’s fourth album, released in October 2000, remains one of the more stunning sonic makeovers in music history. The band had the freedom to do whatever it wanted after its 1997 alt-rock breakthrough, OK Computer [see No. 42]. “Everyone expected us to become this U2 type of band, with that stadium credibility,” bassist Colin Greenwood said in 2001. Instead, frontman Thom Yorke gorged on albums by avant-techno innovator Aphex Twin and other artists on the Warp Records roster, inspiring him to put down his guitar and embrace the glacial beauty of abstract electronics, glitchy beats, and the challenge of free-form composition. “It was difficult for the others [in the band], ’cause when you’re working with a synthesizer it’s like there’s no connection,” Yorke said in 2017. What emerged was at once scary and enveloping, pitched between deep alienation and profound tenderness — from the womblike ambient flow of “Everything in Its Right Place” to the free-jazz implosion “The National Anthem” to the gizmo-groove paranoia of “Idioteque.” “I find it difficult to think of the path we’ve chosen as ‘rock music,’ ” Yorke told Rolling Stone in 2000. “Kid A is like getting a massive eraser out and starting again.”",
            label: "Parlophone",
            ano: "2000",
            img: "assets/img/radioheadk.jpg"
        },
        {
            posicion: "19",
            artista: "Kendrick Lamar",
            album: "To Pimp a Butterfly",
            bio: "Kendrick Lamar had already proven himself hip-hop’s boldest visionary — so by now, people expected greatness from him. But he topped himself with To Pimp a Butterfly — a sprawling, ambitious portrait of America and his dangerous place in it, with a host of jazz influences. “It’s a unique sound,” said longtime Lamar producer Mark “Sounwave” Spears. “Every producer I’ve ever met was sending me stuff [for the album], but there was a one-in-a-million chance you could send a beat that actually fit what we were doing.” As Lamar said when the album was released, “I pride myself on writing now rather than rapping. My passion is bringing storylines around and constructing a full body of work, rather than just a 16-bar verse.” “Alright” became a Black Lives Matter anthem, with “The Blacker the Berry” as the flip side. “How Much a Dollar Cost” is a haunting meditation on mortality, set to a Radiohead piano loop. And in “King Kunta,” K-Dot takes in the whole sweep of African American heartbreak, from the Middle Passage to the hood, from Richard Pryor to P-Funk. “You take a black kid out of Compton and put him in the limelight, and you find answers about yourself you never knew you were searching for,” Lamar said. “There’s some stuff in there, man. It’s a roller coaster. It builds.”",
            label: "TDE",
            ano: "2015",
            img: "assets/img/kendrick.jpg"
        },
        {
            posicion: "18",
            artista: "Bob Dylan",
            album: "Highway 61 Revisited",
            bio: "Bruce Springsteen has described the beginning of “Like a Rolling Stone,” the opening song on Bob Dylan’s Highway 61 Revisited, as the “snare shot that sounded like somebody’d kicked open the door to your mind.” In and of itself, “Like a Rolling Stone,” which was rumored to be about Andy Warhol acolyte Edie Sedgwick, forever altered the landscape of popular music — its “vomitiﬁc” lyrics (in Dylan’s memorable term), literary ambition, and sheer length (6:13) shattered limitations of every kind. But that was literally only the beginning. The rest of the album, recorded in a shocking six days, was just as revelatory. If anyone questioned whether or not Dylan had truly “gone electric,” the roaring rock & roll of “From a Buick 6” and “Tombstone Blues” — both powered by legendary guitarist Mike Bloomﬁeld of the Paul Butterﬁeld Blues Band — left no doubt. The album ends with “Desolation Row,” a swirling 11-minute surrealist night journey of indescribable power, a Hieronymus Bosch-like season in hell that, in retrospect, seems to foretell all the Sixties cataclysms to come. Not that Dylan wasn’t having fun all the while as well. The toy siren that opens the album’s title track was keyboardist’s Al Kooper’s playful way of policing the recording sessions for Highway 61 Revisited. “If anybody started using drugs anywhere,” he explained, “I’d walk into the opposite corner of the room and just go whooooooooo.”",
            label: "Columbia",
            ano: "1965",
            img: "assets/img/bobh.jpg"
        },
        {
            posicion: "17",
            artista: "Kanye West",
            album: "My Beautiful Dark Twisted Fantasy",
            bio: "Our relationship with Kanye West was still in its love-hate phase when he created the 21st century’s most awe-inspiring hip-hop masterpiece. It’s an album every bit as chaotic as he was at the time — from the creepy funk of “Gorgeous” to the crushing attack of “Hell of a Life.” After his Taylor Swift VMAs fiasco in 2009, West went into a kind of self-exile, eventually ending up in Hawaii, where he imported a huge group of collaborators who included Justin Vernon of Bon Iver, Nicki Minaj, and RZA. In all-night recording sessions, he’d ping between studios, sculpting his most maximalist music ever; “a song like ‘Power’ took 5,000 hours,” he later said, “like literally.” West pulled from everywhere — Elton John played on “All of the Lights,” and “Power” sampled prog-rockers King Crimson. West’s sense of his own grandiose ambitions bordered on the comical; during the writing process for the nine-minute “Runaway,” he famously told guest rapper Pusha T to add “more douchebag” to his verses. The resulting track opened with just a single, eerie piano note before building into a mountainous, anarchic tune that incorporated everything from a Rick James sample to a vocoder that evoked Robert Fripp’s guitar playing on Brian Eno albums. The sonic overkill was lavish, but the record hit so hard because he mixed megalomania with introspect; “You been puttin’ up wit’ my shit just way too long,” he rapped on “Runaway.” West later called Dark Fantasy an apology record.” Perhaps. In any case, that wisdom has proved fleeting.",
            label: "Roc-A-Fella",
            ano: "2010",
            img: "assets/img/kanye.jpg"
        },
        {
            posicion: "16",
            artista: "The Clash",
            album: "London Calling",
            bio: "Recorded in 1979 in London, which was then wrenched by surging unemployment and drug addiction, and released in America in January 1980, the dawn of an uncertain decade, London Calling is 19 songs of apocalypse fueled by an unbending faith in rock & roll to beat back the darkness. Produced with no-surrender energy by legendary Sixties studio madman Guy Stevens, the Clash’s third album sounds like a free-form radio broadcast from the end of the world, skidding from bleak punk (“London Calling”) to rampaging ska (“Wrong ’Em Boyo”) and disco resignation (“Lost in the Supermarket”). The album was made in dire straits too. Although the Clash ﬁred singles into the Britain’s Top 40 with machine-gun regularity, the band was heavily in debt and openly at war with its record company. Singer-guitarists Joe Strummer and Mick Jones, the Clash’s Lennon and McCartney, wrote together in Jones’ grandmother’s ﬂat, where he was living for lack of dough. “Joe, once he learned how to type, would bang the lyrics out at a high rate of good stuff,” Jones noted. “Then I’d be able to bang out some music while he was hitting the typewriter.” Stevens was on hand for inspiration. He threw chairs around the room “if he thought a track needed zapping up,” according to Strummer. The album ends with “Train in Vain,” a rousing song of ﬁdelity (originally unlisted on the back cover) that became the sound of triumph: the Clash’s ﬁrst Top 30 single in the U.S.",
            label: "CBS",
            ano: "1979",
            img: "assets/img/clash.jpg"
        },
        {
            posicion: "15",
            artista: "Public Enemy",
            album: "It Takes a Nation of Millions to Hold us Back",
            bio: "Loud, obnoxious, funky, avant-garde, political, uncompromising, hilarious – Public Enemy’s brilliant second album is all of these things — all at once. Chuck D booms intricate rhymes with a delivery inspired by sportscaster Marv Albert; sidekick Flavor Flav raps comic relief; and production team the Bomb Squad build mesmerizing, multilayered jams, pierced with shrieking sirens. The title and roiling force of “Bring the Noise” is truth in advertising. “If they’re calling my music ‘noise,’ ” said Chuck D, “if they’re saying that I’m really getting out of character being a black person in America, then fine – I’m bringing more noise.” Along with “Bring the Noise,” Nation classics like “Rebel Without a Pause” were conceived at Spectrum City in the band headquarters in Hempstead, New York. For “Rebel,” producer Hank Shocklee of the Bomb Squad looped a piercing sample of James Brown’s “The Grunt” with Brown’s “Funky Drummer” (“That song was like my milk,” said Shocklee). To write verses that could match such a sonic assault, Chuck locked himself in his house for 24 hours and emerged with broadsides like the media screed “Don’t Believe the Hype.” He wasn’t sure of the results until DMC, of Run-DMC, blasted it out of his Bronco on a Saturday night. Says Shocklee, “The whole block was grooving to it.”",
            label: "Def Jam",
            ano: "1988",
            img: "assets/img/public.jpg"
        },
        {
            posicion: "14",
            artista: "The Rolling Stones",
            album: "Exile on Main Street",
            bio: "A dirty whirl of basement blues and punk boogie, the Rolling Stones’ 1972 double LP was, according to Keith Richards, “maybe the best thing we did.” Indeed, inside its deliberately dense squall — Richards’ and Mick Taylor’s dogﬁght riffing, the lusty jump of the Bill Wyman–Charlie Watts rhythm engine, Mick Jagger’s caged-animal bark and burned-soul croon — is the Stones’ greatest album and Jagger and Richards’ deﬁnitive songwriting statement of outlaw pride and dedication to grit and cold-morning redemption. In the existential shuffle of “Tumbling Dice,” the ­exhausted country beauty of “Torn and Frayed,” and the whiskey-soaked church of “Shine a Light,” you literally hear the Stones in exile: working at Richards’ villa in the South of France, on the run from media censure, British drug police (Jagger and Richards had been busted and arrested before), and the U.K.’s then-onerous tax code. The music rattles with corrosive abandon but also swings with a clear purpose — unconditional survival — in “Rocks Off” and “All Down the Line.” As Richards explained, “The Stones don’t have a home anymore — hence the exile — but they can still keep it together. Whatever people throw at us, we can still duck, improvise, overcome.” Great example: Richards ­recorded his jubilant romp “Happy” with only producer Jimmy Miller on drums and sax man Bobby Keys, while waiting for the other Stones to turn up for work. Exile on Main Street is the band at its ﬁghting best, armed with the blues, playing to win.",
            label: "Rolling Stones Records",
            ano: "1972",
            img: "assets/img/rollinge.jpg"
        },
        {
            posicion: "13",
            artista: "Aretha Franklin",
            album: "I Never Loved a Man the Way I Love You",
            bio: "Aretha Franklin’s Atlantic debut is the place where gospel music collided with R&B and rock & roll and became soul. The Detroit-born preacher’s daughter was about $80,000 in debt to her previous label, Columbia, when Atlantic producer Jerry Wexler signed her in 1966. “I took her to church,” Wexler said, “sat her down at the piano, and let her be herself.” Recording with the best session men at FAME Studios in Muscle Shoals, Alabama, she promptly cut the album’s title hit, a slow-fire ballad of ferocious sexuality. The historic moment, of course, was her storefront-church makeover of Otis Redding’s “Respect,” which became Franklin’s first Number One pop single, prompting Redding to exclaim, “I just lost my song.” Soon, it would be the new marching anthem of the women’s and civil rights movements. “Women did, and still do, need equal rights,” Franklin said decades later. “We’re doing the same job, we expect the same pay, and the same respect.” She reinforced that feminism on “Do Right Woman, Do Right Man” and had the guts to wring more pathos from Sam Cooke’s civil rights anthem, “A Change Is Gonna Come,” than any other singer who has attempted that landmark song. Never Loved a Man began an unparalleled run of classic albums for Franklin; it’s the sound of the Queen of Soul claiming her crown.",
            label: "Atlantic",
            ano: "1967",
            img: "assets/img/aretha.jpg"
        },
        {
            posicion: "12",
            artista: "Michael Jackson",
            album: "Thriller",
            bio: "Michael Jackson towered over the Eighties the way no superstar before or since has dominated an era — not even Elvis or the Beatles. And Thriller is the reason why. Still in his early twenties, the R&B child star of the 1970s had ripened into a Technicolor soul man: a singer, dancer, and songwriter with incomparable crossover instincts. He and producer Quincy Jones established the something-for-everyone template of Thriller on 1979’s Off the Wall [see No. 36], on which Jackson captures the rare mania of his life — the applause and paranoia, the need for love and the fear of commitment — in a crisp fusion of pop hooks and dance beats. On Thriller, the pair heighten the sheen (the jaunty gloss of “The Girl Is Mine,” with a guest vocal by Paul McCartney), pump up the theater (the horror-movie spectacular “Thriller”), and deepen the funk. With its locomotive cadence and an acrobatic metal-guitar solo by Eddie Van Halen, “Beat It” was arguably the first industrial-disco Number One. It is hard now to separate Thriller from its commercial stature (Number One for 37 weeks, 33 million copies sold), the nightmarish tabloid celebrity that led to Jackson’s death, and the horrific revelations about him that have surfaced in recent years. But there was a time when we only knew Jackson as the King of Pop. This is it.",
            label: "Epic",
            ano: "1982",
            img: "assets/img/michaelt.jpg"
        },
        {
            posicion: "11",
            artista: "The Beatles",
            album: "Revolver",
            bio: "Revolver was the sound of the Beatles fully embracing the recording studio as a sonic canvas, free to pursue musical ideas and possibilities that would reshape rock forever. It speaks volumes that the first song the band worked on upon entering Abbey Road studios in April 1966 would have been impossible to replicate live — a swirl of hazy guitar, backward tape loops, kaleidoscopic drum tumble, and John Lennon’s voice recorded to sound like “the Dalai Lama singing from the highest mountaintop.” They titled it “The Void” and later renamed it “Tomorrow Never Knows.” “I was wondering how George Martin would take it,” Paul McCartney later recalled. Martin’s response: “Jolly interesting.” The Beatles’ lives were changing too: Lennon had taken LSD at this point, George Harrison was deepening his interest in Eastern mysticism, and McCartney was getting into avant-garde composition. All those influences came through here. Revolver wasn’t totally without precedent. The Beatles’ previous album, Rubber Soul [see No. 35], had a similar experimental introspect. Harrison once said Rubber Soul and Revolver “could be volume one and volume two.” But no band, including the Beatles, had tried anything like McCartney’s strikingly mature art song “Eleanor Rigby,” Lennon’s trippy tape-loop swirl “I’m Only Sleeping,” or Harrison’s “Taxman,” with its cutting groove and lyrics that took shots at British politicians. It made sense that the disappointing live shows the band played in the summer of 1966 would be their last. By the time Revolver came out, they’d already entered another world.",
            label: "Apple",
            ano: "1966",
            img: "assets/img/beatlesr.jpg"
        },
        {
            posicion: "10",
            artista: "Lauryn Hill",
            album: "The Miseducation of Lauryn Hill",
            bio: "“This is a very sexist industry,” Lauryn Hill told Essence magazine in 1998. “They’ll never throw the ‘genius’ title to a sister.” Though already a star as co-leader of the Fugees, with Wyclef Jean, she was hungry to express her own vision. “[I wanted to] write songs that lyrically move me and have the integrity of reggae and the knock of hip-hop and the instrumentation of classic soul,” the singer said of her debut album. She took control of the recording process, writing, producing, arranging, and helming sessions that included collaborators like pianist John Legend, still in college when he got the call to go out to New Jersey, where Hill was recording, and the pathfinding R&B artist D’Angelo. They shaped a sound that went from the money-hating banger “Lost Ones” to subtle, glorious, heartbreaking monuments such as “Ex-Factor” (reportedly about Wyclef Jean) and the swinging sermon “Doo Wop (That Thing).” For “I Used to Love Him,” Hill duetted with her hip-hop-soul forebear Mary J. Blige. Each song was driven by a clarity of vision and personal honesty that felt revelatory; in “To Zion,” she detailed her struggles as an ambitious professional and a new mom. Miseducation’s musical legacy is just as deep; at a time when pop was becoming increasingly slick and digitized in the go-go Nineties, here was an album that showed the commercial appeal of a rawer sound; “I wanna hear that thickness of sound,” Hill said. “You can’t get that from a computer, because a computer’s too perfect. But that human element, that’s what makes the hair on the back of my neck stand up. I love that.”",
            label: "Ruffhouse/Columbia",
            ano: "1998",
            img: "assets/img/lauryn.jpg"
        },
        {
            posicion: "9",
            artista: "Bob Dylan",
            album: "Blood on the Tracks",
            bio: "Bob Dylan once introduced this album’s opening song, “Tangled Up in Blue,” onstage as taking him 10 years to live and two years to write. It was, for him, a pointed reference to the personal crisis — the collapse of his marriage to Sara Lowndes — that at least partly inspired this album, Dylan’s best of the 1970s. In fact, he wrote all of these lyrically piercing, gingerly majestic folk-pop songs in two months, in mid-1974. He was so proud of them that he privately auditioned almost all of the album, from start to ﬁnish, for pals and peers, including Mike Bloomﬁeld, David Crosby, and Graham Nash, before cutting them in September — in just a week, with members of the bluegrass band Deliverance. But in December, Dylan played the record for his brother, David, in Minneapolis, who suggested recutting some songs with local musicians. The ﬁnal Blood was a mix of New York and Minneapolis tapes; the New York versions are slower, more pensive, while the Minneapolis versions are faster and wilder. Together, they frame the gritty anguish in Dylan’s vocals, as he rages through some of his most passionate, confessional songs — from adult breakup ballads like “You’re a Big Girl Now” and “If You See Her, Say Hello” to the sharp-tongued opprobrium of “Idiot Wind,” his greatest put-down song since “Like a Rolling Stone.” “A lot of people tell me they enjoyed that album,” Dylan said soon after it became an instant commercial and critical success. “It’s hard for me to relate to that — I mean, people enjoying that type of pain.” Yet Dylan had never turned so much pain into so much musical splendor.",
            label: "Columbia",
            ano: "1975",
            img: "assets/img/bobb.jpg"
        },
        {
            posicion: "8",
            artista: "Prince and the Revolution",
            album: "Purple Rain",
            bio: "“I think Purple Rain is the most avant-garde, ‘purple’ thing I’ve ever done,” Prince told Ebony in 1986. He was still a rising star with only a couple of hits when he got the audacious idea to make a movie based on his life, and make his next LP the movie’s soundtrack. When it was released in 1984, he became the first artist to have the Number One song, album, and movie in North America. But Purple Rain was so much more than a huge movie soundtrack: It was a testament to Prince’s dream of creating a utopian Top 40, a place where funk, psychedelia, heavy-metal shredding, huge ballads, and daring experimentalism could coexist. “Listening to Purple Rain now, it’s kind of like a Beatles album,” keyboardist Matt Fink of the Revolution told Rolling Stone shortly after Prince’s death in 2016. “Every song is just so brilliant in its own way — all so unique and different.” It’s an incredible balance of contradicting impulses — from the pornographic “Darling Nikki” to the sparkling innocence of “Take Me With You.” When Purple Rain director Albert Magnoli asked for a good song to back a montage sequence, Prince came in the next day with “When Doves Cry,” a stark, eccentric-sounding brokenhearted song that became his first Number One single. The title track was one of several songs recorded live at his hometown club, First Avenue, in Minneapolis (strings and overdubs were added later in the studio). It was inspired by Bob Seger, of all people — when Prince was touring behind 1999 [see No. 130] in 1983, Seger was playing many of the same markets. Prince didn’t understand the Midwestern rocker’s appeal, but decided to try a ballad in the Seger mode — the result may be the greatest rock ballad of all time.",
            label: "Warner Bros.",
            ano: "1984",
            img: "assets/img/princep.jpg"
        },
        {
            posicion: "7",
            artista: "Fleetwood Mac",
            album: "Rumours",
            bio: "With Rumours, Fleetwood Mac turned private turmoil into gleaming, melodic public art. The band’s two couples — bassist John McVie and singer-keyboard player Christine McVie, who were married; guitarist Lindsey Buckingham and vocalist Stevie Nicks, who were not — broke up during the protracted sessions for the album. As John later told Rolling Stone of the atmosphere during the making of Rumours, “Parties going on all over the house. Amazing. Terrifying. Huge amounts of illicit materials, yards and yards of this wretched stuff. Days and nights would just go on and on.” This frenzied, decadent vibe lent a highly charged, confessional aura to such songs as Buckingham’s “Go Your Own Way,” Nicks’ “Dreams,” Christine’s “Don’t Stop,” and the group-composed anthem to betrayal, “The Chain.” The band’s soap opera fueled its own intricate creative conversation; on “You Make Loving Fun,” Christine sang about her new boyfriend, the band’s lighting designer, as her ex John dutifully drives home the song with a sunny, funky bass line. To write “Dreams,” Nicks sat on a black velvet bed in a tiny room hidden deep in the Record Plant, where the band was recording, creating one of her most haunting songs in 10 minutes. “[In ‘Go Your Own Way’] Lindsey is saying go ahead and date other men and go live your crappy life, and [I’m] singing about the rain washing you clean,” Nicks said. “We were coming at it from opposite angles, but we were really saying the same exact thing.” The Mac’s catchy exposés, produced with California-sunshine polish, touched a nerve: Rumours became the sixth-best-selling album of all time.",
            label: "Warner Bros.",
            ano: "1977",
            img: "assets/img/fleetwood.jpg"
        },
        {
            posicion: "6",
            artista: "Nirvana",
            album: "Nevermind",
            bio: "An overnight-success story of the 1990s, Nirvana’s second album and its totemic ﬁrst single, “Smells Like Teen Spirit,” shot up from the Northwest underground — the nascent grunge scene in Seattle — to kick Michael Jackson’s Dangerous off the top of the Billboard charts and blow hair metal off the map. Few albums have had such an overpowering impact on a generation — a nation of teens suddenly turned punk — and such a catastrophic effect on its main creator. The weight of success led already-troubled singer-guitarist Kurt Cobain to take his own life in 1994. But his slashing riffs, corrosive singing, and deviously oblique writing — rammed home by the Zeppelin-via-Pixies might of bassist Krist Novoselic and drummer Dave Grohl — put warrior purity back in rock & roll. Lyrically, Cobain raged in code — shorthand grenades of inner tumult and self-loathing. His genius, though, in songs like “Lithium,” “Breed,” and “Teen Spirit” was the soft-loud tension he created between verse and chorus, restraint and assault. Cobain was a pop lover at heart — and a Beatlemaniac: Nevermind co-producer Butch Vig remembered hearing Cobain play John Lennon’s “Julia” at sessions. Cobain also fought to maintain his underground honor with songs like the scabrous punk purge “Territorial Pissings.” Ultimately, it was a losing battle, but it is part of this album’s enduring power. Vig recalled when Cobain was forced to overdub the guitar intro to “Teen Spirit” because he couldn’t nail it live with the band: “That pissed him off. He wanted to play [the song] live all the way through.”",
            label: "Geffen",
            ano: "1991",
            img: "assets/img/nirvana.jpg"
        },
        {
            posicion: "5",
            artista: "The Beatles",
            album: "Abbey Road",
            bio: "“It was a very happy record,” said producer George Martin, describing this album in The Beatles Anthology. “I guess it was happy because everybody thought it was going to be the last.” Indeed, Abbey Road — recorded in two months during the summer of 1969 — almost never got made at all. That January, the Beatles were on the verge of a breakup, exhausted and angry with one another after the disastrous sessions for the aborted Get Back LP, later salvaged as Let It Be [see No. 342]. Yet determined to go out with the same glory with which they had ﬁrst entranced the world at the start of the decade, the group reconvened at EMI’s Abbey Road Studios to make their most polished album: a collection of superb songs cut with an attention to reﬁned detail, then segued together (especially on Side Two) with conceptual force. There was no thematic link, other than the Beatles’ unique genius. John Lennon veered from the stormy metal of “I Want You (She’s So Heavy)” to the exquisite vocal sunrise of “Because.” Paul McCartney was saucy (“Oh! Darling”), silly (“Maxwell’s Silver Hammer”), and deliciously bitter (“You Never Give Me Your Money”). George Harrison proved his long-secret worth as a composer with “Something” (later covered by Frank Sinatra) and the folk-pop diamond “Here Comes the Sun,” written in his friend Eric Clapton’s garden after a grim round of business meetings. Lennon, McCartney, and Harrison reputedly sang more three-part harmonies here than on any other Beatles album. That warm feeling — a sense of an increasingly divided band warmly coming together as friends — may be one reason Abbey Road has become the most beloved Beatles album of all time.",
            label: "Apple",
            ano: "1969",
            img: "assets/img/beatlesa.jpg"
        },
        {
            posicion: "4",
            artista: "Stevie Wonder",
            album: "Songs in the Key of Life",
            bio: "Months before the recording sessions for Songs in the Key of Life ended, the musicians in Stevie Wonder’s band had T-shirts made up that proclaimed, “We’re almost finished.” It was the stock answer to casual fans and Motown executives and everybody who’d fallen in love with Wonder’s early-Seventies gems – 1972’s Talking Book, 1973’s Innervisions, and 1974’s Fulfillingness’ First Finale – and who had been waiting two years for the next chapter. “I believed there was a lot that needed to be said,” Wonder said. More, in fact, than he could fit onto a double album – also included was a bonus EP, a seven-inch single with four more songs from the sessions. Songs, released in 1976, encompasses an incredible range of life experiences – from the giddy joy of a baby in the bathtub (“Isn’t She Lovely,” featuring the cries and giggles of Wonder’s infant daughter Aisha Morris) through tributes to his musical heroes (“Sir Duke”) to dismay about the indifference of the wealthy (“Village Ghetto Land”). Wonder pulled from every imaginable musical source — the ecstatic “Sir Duke” references Duke Elington and Ella Fitzgerald, while “As” featured Herbie Hancock on Fender Rhodes. Though Wonder’s blindness meant he could record faster by memorizing lyrics, some songs had four or five intricate verses, so somebody had to prompt him. Often it was engineer John Fischbach, reading lines into the headphone mix just seconds before Wonder sang them. “He never got thrown off,” engineer John Fischbach told Rolling Stone years later. “His vocals had so much power.” The album’s mastery of many styles remains astonishing, but the feat might not have meant so much had Wonder not delivered some of his most impassioned political art as well, like the autobiographical “I Wish,” the takedown of wealthy complacency “Village Ghetto Land,” and, perhaps most movingly, “Black Man,” in which he runs down a funky list of global Afro-diasporic aspirations and heroes. Songs in the Key of Life linked all this together, in Wonder’s all-encompassing innervision.",
            label: "Tamla/Motown",
            ano: "1976",
            img: "assets/img/stevies.jpg"
        },
        {
            posicion: "3",
            artista: "Joni Mitchell",
            album: "Blue",
            bio: "In 1971, Joni Mitchell represented the West Coast feminine ideal — celebrated by Robert Plant as “a girl out there with love in her eyes and flowers in her hair” on Led Zeppelin’s “Goin’ to California.” It was a status that Mitchell hadn’t asked for and did not want: “I went, ‘Oh, my God, a lot of people are listening to me,’” she recalled in 2013. “’They better find out who they’re worshiping. Let’s see if they can take it. Let’s get real.’ So I wrote Blue.” From its smoky, introspective cover to its wholly unguarded approach to songwriting, Blue is the first time any major rock or pop artist had opened up so fully, producing what might be the ultimate breakup album and setting a still-unmatched standard for confessional poetry in pop music. Using acoustic instruments and her octave-leaping voice, Mitchell portrayed herself as a lonely painter, aching to make sense of all her heartbreak. She reflects on past relationships and encounters, including a chef from Crete (“Carey”) and rock luminaries like Graham Nash (“My Old Man”), Leonard Cohen (“A Case of You”), and James Taylor (“This Flight Tonight”), who lent a hand on a few tracks. Along with its romantic melancholy, Blue was the sound of a woman availing herself of the romantic and sexual freedom that was, until then, an exclusively male province in rock. The songs had such stark, emotional intensity that it shocked the men around her: “Kris Kristofferson said to me, ‘Oh, Joni. Save something for yourself.’ The vulnerability freaked them out.” On “Little Green,” she opens up about a baby she had given up for adoption, and on the staggering piano dirge “River,” she takes responsibility for a romance gone wrong, changing the scope of love songs forever: “I’m so hard to handle/I’m selfish, and I’m sad,” she laments. “Now I’ve gone and lost the best baby/That I ever had.” Mitchell continued to release excellent records throughout the Seventies, but Blue remains her masterpiece. “The Blue album, there’s hardly a dishonest note in the vocals,” she told Rolling Stone in 1979. “At that period of my life, I had no personal defenses. I felt like a cellophane wrapper on a pack of cigarettes. I felt like I had absolutely no secrets from the world, and I couldn’t pretend in my life to be strong. Or to be happy. But the advantage of it in the music was that there were no defenses there either.”",
            label: "Reprise",
            ano: "1971",
            img: "assets/img/joni.jpg"
        },
        {
            posicion: "2",
            artista: "The Beach Boys",
            album: "Pet Sounds",
            bio: "“Who’s gonna hear this shit?” Beach Boys singer Mike Love asked the band’s resident genius, Brian Wilson, in 1966, as Wilson played him the new songs he was working on. “The ears of a dog?” Confronted with his bandmate’s contempt, Wilson made lemonade of lemons. “Ironically,” he observed, “Mike’s barb inspired the album’s title.” Barking dogs – Wilson’s dog Banana among them, in fact – are prominent among the found sounds on the album. The Beatles made a point of echoing them on Sgt. Pepper’s Lonely Hearts Club Band – an acknowledgment that Pet Sounds was the inspiration for the Beatles’ masterpiece. That gesture actually completed a circle of inﬂuence: Wilson initially conceived of Pet Sounds as an effort to top the Beatles’ Rubber Soul. With its vivid orchestration, lyrical ambition, elegant pacing, and thematic coherence, Pet Sounds invented — and in several senses, perfected — the notion that an album could be more than the sum of its parts. When Wilson sang, “Wouldn’t it be nice if we were older,” on the album’s magnificent opening song, he wasn’t just imagining a love that could evolve past high school, he was suggesting a new grown-up identity for rock & roll music itself. Wilson made Pet Sounds without the rest of the band, using them only to ﬂesh out the vocal arrangements. He even considered putting the album out as a solo project, and the ﬁrst single, “Caroline, No,” was released under his own name. The personal nature of the songs, which Wilson co-wrote primarily with lyricist Tony Asher, further distinguished the album from the Beach Boys’ previous hits. Its luxurious sound conveys a heartbreaking wistfulness, as songs such as “I Just Wasn’t Made for These Times” and “I’m Waiting for the Day” bid farewell to the innocent world of the early Sixties. The album’s centerpiece is “God Only Knows,” arranged with harpsichord, horns, sleigh bells, and strings to create a spiritual feeling Wilson later compared to “being blind, but in being blind, you can see more. You close your eyes; you’re able to see a place or something that’s happening.” In the years to come, countless artists would live in his vision.",
            label: "Capitol",
            ano: "1966",
            img: "assets/img/beach.jpg"
        },
        {
            posicion: "1",
            artista: "Marvin Gaye",
            album: "What's Going On",
            bio: "Marvin Gaye’s masterpiece began as a reaction to police brutality. In May 1969, Renaldo “Obie” Benson, the Four Tops’ bass singer, watched TV coverage of hundreds of club-wielding cops breaking up the People’s Park, a protest hub in Berkeley. Aghast at the violence, Benson began to write a song with Motown lyricist Al Cleveland, trying to capture the confusion and pain of the times. He knew he had something big in his nascent version of “What’s Going On,” but the rest of the Four Tops weren’t interested, and Benson’s efforts to get Joan Baez to record it didn’t work out, either. But one of Motown’s biggest stars and greatest voices turned out to be more receptive. Gaye was in a dark and contemplative place, wounded by the death of his frequent duet partner Tammi Terrell, yearning to sing subtler and more substantive material, and mulling over his brother Frankie’s horrifying tales of his recent stint fighting in Vietnam. Gaye had been keeping busy writing for and producing a group called the Originals, and trying to figure out what was next. “I’d been stumbling around for an idea,” he told biographer David Ritz. “I knew there was more inside me. And that was something no record executive or producer could see. But I saw it. I knew I had to get out there.” After some hesitation, Gaye embraced “What’s Going On,” and with the help of arranger David Van De Pitte, crafted a version of the song that was jazzier and more sophisticated than any Motown recording to date, layering cinematic strings over James Jamerson’s supernaturally sinuous bass line and a polyrhythmic groove. Gaye unleashed one of his most spectacular vocal performances in a career full of them, scatting and improvising around the main melody. Motown Records founder Berry Gordy initially resisted releasing “What’s Going On,” telling Gaye that he thought scatting was out of date and protest lyrics were too commercially risky. But when the song became an instant hit, Gordy gave Gaye a single month to craft an album to accompany “What’s Going On.” Gaye more than rose to the challenge. “I work best under pressure and when I’m depressed,” he told the Detroit Free Press at the time. “The world’s never been as depressing as it is right now. We’re killing the planet, killing our young men in the streets, and going to war around the world. Human rights … that’s the theme.” What emerged was soul music’s first concept album, and one of the most important and influential LPs ever made. John Legend recently described it as “the voice of black America speaking out that we couldn’t always smile on cue for you.” Building it all around one finished song lent What’s Going On a musical and thematic through line. “What’s Happening Brother” assumes the voice of a Vietnam vet like Gaye’s brother, puzzled by a changing America and looking for work; “Mercy Mercy Me (The Ecology)” is a taut ode to the environment; “Flyin’ High (In the Friendly Sky)” takes on drug addiction. After What’s Going On, black musicians at Motown and elsewhere felt a new freedom to push the musical and political boundaries of their art. “When I was struggling for the right of the Motown artist to express himself,” Gaye said, “Stevie [Wonder] knew I was also struggling for him.” At the end of the final song on What’s Going On, the lament “Inner City Blues (Make Me Wanna Holler),” the music shifts back into a jazzier reprise of the title track. As the album fades out, the groove continues on. Five decades later, it still hasn’t stopped.",
            label: "Tamla/Motown",
            ano: "1971",
            img: "assets/img/marvin.jpg"
        },
      ];

    constructor() {
        
    }

    getAlbums(){
        return this.albums;
    }

    getAlbum(idx:number){
        return this.albums[idx];
    }

    buscarArtista(termino:string) {
        let artistaArr:Albums[] = [];
        termino = termino.toLowerCase();
        for( let i = 0; i < this.albums.length; i++ ){
            let artista = this.albums[i];
            let nombre = artista.artista.toLowerCase();
            if(nombre.indexOf(termino)>=0){
                artista.idx = i;
                artistaArr.push(artista)
            }
        }

        return artistaArr;
    }
}

export interface Albums{
    posicion: string;
    artista: string;
    album: string;
    bio: string;
    label: string;
    ano: string;
    img: string;
    idx?: number;
};