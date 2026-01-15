// Import artwork images
import aMossyCaress from "@/assets/artworks/a_mossy_caress.png";
import adorn from "@/assets/artworks/adorn.png";
import allowedTransitions from "@/assets/artworks/allowed_transitions.png";
import almostQueen from "@/assets/artworks/almost_queen.png";
import amourCestLaCecite from "@/assets/artworks/amour_cest_la_cecite.png";
import bigBlue from "@/assets/artworks/big_blue.png";
import blur from "@/assets/artworks/blur.png";
import burst from "@/assets/artworks/burst.png";
import chasingDaizes from "@/assets/artworks/chasing_daizes.png";
import contrasted from "@/assets/artworks/contrasted.png";
import dannyRobotEmoji from "@/assets/artworks/danny_robot_and_emoji.png";
import deTodasLasFlores from "@/assets/artworks/de_todas_las_flores.png";
import delayedNotDenied from "@/assets/artworks/delayed_not_denied.png";
import dualDuel from "@/assets/artworks/dual_duel.png";
import emergence from "@/assets/artworks/emergence.png";
import enFuego from "@/assets/artworks/en_fuego.png";
import eyesMetWithYours from "@/assets/artworks/eyes_met_with_yours.png";
import flower from "@/assets/artworks/flower.png";
import flowersTalk from "@/assets/artworks/flowers_talk.png";
import fork from "@/assets/artworks/fork.png";
import givingTree from "@/assets/artworks/giving_tree.png";
import goree from "@/assets/artworks/goree.png";
import identity from "@/assets/artworks/identity.png";
import ifOnlyForAMoment from "@/assets/artworks/if_only_for_a_moment.png";
import interdimensionalBeing1 from "@/assets/artworks/interdimensional_being_1.png";
import juvenile from "@/assets/artworks/juvenile.png";
import komainu from "@/assets/artworks/komainu.png";
import lightAndShadowNo198 from "@/assets/artworks/light_and_shadow_no_128.png";
import lightAndShadowNo225 from "@/assets/artworks/light_and_shadow_no_225.png";
import loveBirds from "@/assets/artworks/love_birds.png";
import tagWall from "@/assets/artworks/tag_wall.png";
import towardsFruition2 from "@/assets/artworks/towards_fruition_2.png";
import transparenciesInTime from "@/assets/artworks/transparencies_in_time.png";
import microWorldCarrier from "@/assets/artworks/micro_world_carrier.png";
import mindMatters from "@/assets/artworks/mind_matters.png";
import misAmichisMeCuidan from "@/assets/artworks/mis_amichis_me_cuidan.png";
import money from "@/assets/artworks/money.png";
import myMothersNature from "@/assets/artworks/my_mothers_nature.png";
import nippleCalendar from "@/assets/artworks/nipple_calendar.png";
import no02 from "@/assets/artworks/no._02.png";
import no03 from "@/assets/artworks/no._03.png";
import nostalgia from "@/assets/artworks/nostalgia.png";
import notTheOneOrTwo from "@/assets/artworks/not_the_one_or_the_two.png";
import onna from "@/assets/artworks/onna.png";
import peachEyesGirl from "@/assets/artworks/peach_eyes_girl.png";
import probing from "@/assets/artworks/probing.png";
import pureEther from "@/assets/artworks/pure_ether.png";
import rainbowDeep from "@/assets/artworks/rainbow_deep.png";
import rebirth from "@/assets/artworks/rebirth.png";
import recuerdosDeEnsueno from "@/assets/artworks/recuerdos_de_ensueno.png";
import recycled from "@/assets/artworks/recycled.png";
import reflections from "@/assets/artworks/reflections.png";
import rootsOfRebirth from "@/assets/artworks/roots_of_rebirth.png";
import sideEffects from "@/assets/artworks/ranger_side_effects.png";
import stayOnTheSand from "@/assets/artworks/stay_on_the_sand_deepwater_horizon.png";
import theIntersection from "@/assets/artworks/fates.png";
import stranger from "@/assets/artworks/stranger.png";
import tatsu from "@/assets/artworks/tatsu.png";
import theDreamGuardian from "@/assets/artworks/the_dream_guardian.png";
import theFates from "@/assets/artworks/the_fates.png";
import theKids from "@/assets/artworks/the_kids.png";
import theRightAnswer from "@/assets/artworks/the_right_answer.png";
import theStreetsHaveForgottenMe from "@/assets/artworks/the_streets_have_forgotten_me.png";
import theStreetsHaveForgottenMe2 from "@/assets/artworks/the_streets_have_forgotten_me_2.png";
import theTreeOfAfro from "@/assets/artworks/the_tree_of_afro.png";
import shadowPeople from "@/assets/artworks/shadow_people.png";
import somebodyHelpTheBees from "@/assets/artworks/somebody_help_the_bees.png";
import spiritOfTheDragonGod from "@/assets/artworks/spirit_of_the_dragon_god.png";
import stalker from "@/assets/artworks/stalker.png";
import stareIntoTheEyes from "@/assets/artworks/stare_into_they_eyes_of_death_shotgun_barrel.png";
import transmissionOfBecoming from "@/assets/artworks/transmission_of_becoming.png";
import turn1 from "@/assets/artworks/turn_1.png";
import turn2 from "@/assets/artworks/turn_2.png";
import untitled from "@/assets/artworks/untitled.png";
import whereIsMyHome from "@/assets/artworks/where_is_my_home.png";

export interface Artwork {
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  price: string;
  description: string;
  image?: string;
}

export interface Artist {
  name: string;
  bio: string;
  artworks: Artwork[];
}

export const artists: Artist[] = [
  {
    name: "13 God",
    bio: `Najah Westbrook—also known as 13 God (Knowledge Understood)—is a multidisciplinary artist, movement alchemist, and community builder whose work bridges ancestral wisdom with contemporary expression. Born in Baltimore and based in Atlanta, she creates multisensory portals shaped through painting, drawing, sculpture, and embodied practices including yoga, Taoist flow, Brazilian Jiu Jitsu, and climbing. Her art moves like invocation and meditation, rooted in Black feminine power, mythic storytelling, and cultural memory.

A multicultural Black woman of British, Guyanese, and Southern lineage, Najah carries a kaleidoscope of histories that inform her visual language. Her creations emerge from the marrow of lived experience—from the sacred silence between breaths, from the infinite void that births form into being. Each brushstroke and sculpted curve becomes a living altar, an offering to the ancestors who walk with her, whisper through her, and shape the rhythm of her hands.

A graduate of Morgan State University and a proud member of Sigma Gamma Rho Sorority, Inc., Najah extends her practice beyond the studio into community engagement, workshops, and public art. Through projects like Yujir, she explores spiritual technologies, archetypal selfhood, and the liminal spaces between nature, culture, and the unseen.

Her work is not merely aesthetic—it is legacy, meditation, and memory. It is a celebration of complexity, contradiction, and connection. Najah creates art that uplifts, challenges, and endures. May all who have eyes to see, behold; and all who have hearts to feel, be uplifted.`,
    artworks: [
      {
        title: "Pure Ether",
        year: "2025",
        medium: "Acrylic/oil on canvas",
        dimensions: '30"x24"',
        price: "$12,000",
        description: "A riot of faces, fragments, and fury. This piece doesn't ask to be understood, it dares you to feel.",
        image: pureEther
      },
      {
        title: "Transmission of Becoming",
        year: "2025",
        medium: "Oil/acrylic on canvas",
        dimensions: '16"x20"',
        price: "$9,000",
        description: "A dreamscape posted like a warning, like a prayer. The central figure burns from the crown—flame, signal, transmission. Around them, distorted faces echo the ancestors, the watchers, the ones who know.",
        image: transmissionOfBecoming
      }
    ]
  },
  {
    name: "Arielle Labra Campos (Medus)",
    bio: "",
    artworks: [
      {
        title: "The dream guardian",
        year: "2025",
        medium: "Paper photos, tattoo stencils, acrylic, posca markers on canvas",
        dimensions: '12"x16"',
        price: "$400",
        description: "Our brains are capable of storing/holding so many dreams and memories from our day to day and lives. With humans relying more and more on technology and AI pushing its way through our lives. Who's going to protect our dreams and memories? Are we going to give in and let technology take over?",
        image: theDreamGuardian
      },
      {
        title: "Mis amichis me cuidan",
        year: "2025",
        medium: "Magazines, paper photos, film, posca markers on cardstock",
        dimensions: '8.5"x11"',
        price: "$80",
        description: "My friendships have been the strongest and most reliable connections/relationships I've had and I trust them with my life. Growing up as a marginalized human in a very hostile world, I've learned that my friends will keep me more safe and will take better care of me than the institutions set up by governments that don't have their best interest in their people.",
        image: misAmichisMeCuidan
      },
      {
        title: "Recuerdos de Ensueño",
        year: "2025",
        medium: "Paper photos, tattoo stencils, posca markers on canvas",
        dimensions: '8"x8"',
        price: "$100",
        description: "It's always when you're having the most fun and life feels smooth and easy that time just flies by, it's easy to just get carried away and float in the sea of life. But it's important to stop for a minute to remember and acknowledge the life experiences we go through.",
        image: recuerdosDeEnsueno
      }
    ]
  },
  {
    name: "Aya Borucki",
    bio: "Aya Borucki is a Seattle based illustrator, printmaker, and comics artist from New England. They are often inspired by the landscape, plants, and animals surrounding them. Their work follows themes of queer identity, nature and humor, while incorporating stylistic traditions from their Japanese heritage.",
    artworks: [
      {
        title: "Onna",
        year: "2025",
        medium: "3 color woodcut",
        dimensions: '14"x20"',
        price: "$120",
        description: "Onna 女 (woman) is a piece made in the footsteps of 春画 (Shunga), erotic Japanese woodblock prints that were illegally sold under shogunate rule and were popular during the Edo period. Here, we see a modernized and queered intimate scene, using three ink colors to create an array of fabrics that cloak the figures. Limited edition of 14, in two colorways.",
        image: onna
      },
      {
        title: "Juvenile",
        year: "2025",
        medium: "Watercolor, colored pencils, pen",
        dimensions: '8"x10"',
        price: "$300",
        description: "Juvenile explores what it means to be young, queer, and growing into something that cannot be defined by man or womanhood. Deer are both revered by the Buddha, seen as pests, and are a reminder that change is constant, in the growth of antlers and changing of coats.",
        image: juvenile
      }
    ]
  },
  {
    name: 'Cecelia "Mousy DeVilla" DeLeon',
    bio: 'Cecelia "Mousy DeVilla" DeLeon is a multidisciplinary artist based in South King County, known for her brightly colored works that explore themes of social justice, the divine feminine and a surrealism type vibe.',
    artworks: [
      {
        title: "Burst",
        year: "2025",
        medium: "Mixed Media, Paper mask, Acrylic paint, faux rhinestones, glitter",
        dimensions: '16"x20"',
        price: "$500",
        description: "",
        image: burst
      }
    ]
  },
  {
    name: "Danny Farra",
    bio: "Danny Farra is a Syrian-American artist and designer based in Seattle. Inspired by Islamic art, Black American and Arabic music, and accessible design. Style can be called geometric expressionism. As a colorblind creative, he tends to emphasize contrast in his work. Farra is outspoken about the global injustices being witnessed, especially the occupation of Palestine. He works as a digital product designer specializing in accessibility.",
    artworks: [
      {
        title: "😠+🤖",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '24"x36"',
        price: "$500",
        description: `This artwork explores the tension between order and disruption. While the bold border and geometric shapes imply a controlled, designed environment, the splattered ink and drips suggest a break in the system.

On the left, a large solid yellow circle scarred with a bold black streak next to a splatter (which looks like an angry emoji). The artist uses saturated "mop" style markers, allowing the ink to pool within the felt nib before slamming it into the canvas. This contrasts with the rigid, target-like precision of the red square on the right. Both are centered in a bold silver decorated frame and a cosmic background of neon dots on a black canvas.`,
        image: dannyRobotEmoji
      },
      {
        title: "🥀",
        year: "2025",
        medium: "Mixed media on paper",
        dimensions: '18"x24"',
        price: "$500",
        description: `This vibrant work captures the artist's signature style of abstract, geometric, and high-contrast compositions. The piece pulses with an improvisational energy that feels like a visual jam session, layering bold textures and playful iconography.

At the heart of the piece is a recurring flower doodle, which is a swooping, fun shape to draw. The center has a classic digital "profile" icon of a person in a window. The piece is detailed with circular white dots and a contiguous set of written Arabic-inspired I'jām (square dots).`,
        image: flower
      }
    ]
  },
  {
    name: "Himanshi Sharma",
    bio: "I am the oldest daughter of Indian parents. I have grown up in the US and India and Seattle is home right now. My art sort of encompasses this in between of growing up and finding your place in the world while also understanding that who you are is something dynamic. My inspiration usually comes from real life objects and that to me represent a realization or represent a feeling.",
    artworks: [
      {
        title: "Almost Queen",
        year: "2024",
        medium: "Acrylic on Canvas",
        dimensions: '8"x10"',
        price: "NFS",
        description: "In the momentum of reaching your potential and desperately trying to move to the next checkpoint, sometimes you should stop and appreciate where you are. Some changes aren't reversible.",
        image: almostQueen
      },
      {
        title: "Recycled",
        year: "2024",
        medium: "Acrylic on Canvas",
        dimensions: '11"x14"',
        price: "$300",
        description: "One person's trash, another person's treasure. I find the way light reflects over crushed metal beautiful.",
        image: recycled
      },
      {
        title: "Money",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '20"x20"',
        price: "$400",
        description: "A common experience growing up was to stay far away from a hotel mini fridge. Just a reminder, you can choose what your luxuries are and what you don't care about.",
        image: money
      },
      {
        title: "The Right Answer",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '8"x10"',
        price: "$150",
        description: "Sometimes you just have to choose.",
        image: theRightAnswer
      },
      {
        title: "Delayed not Denied",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '16"x20"',
        price: "$400",
        description: "There is a possibility that being late can save you from some of the worst things and also put you right on time for the best things. So just enjoy the view while you wait.",
        image: delayedNotDenied
      }
    ]
  },
  {
    name: "Jayden Ju",
    bio: `Jayden Ju is a young artist whose work explores imagination as a living world. Through bold forms, intuitive movement, and layered color, Jayden transforms inner thoughts into visual stories that feel playful, mysterious, and expansive.
Each painting invites viewers to slow down, look closely, and enter a space where curiosity leads the way.`,
    artworks: [
      {
        title: "Micro-World Carrier",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '48"x60"',
        price: "NFS",
        description: `By Jayden Ju, age 9

This painting shows a powerful creature carrying many tiny worlds within its body. Each section holds its own shapes, stories, and patterns, showing how imagination can turn one form into many ideas. Through bold colors and playful details, Jayden explores how even small worlds can hold big stories.`,
        image: microWorldCarrier
      }
    ]
  },
  {
    name: "Jose Trejo Maya",
    bio: "",
    artworks: [
      {
        title: "Transparencies in Time",
        year: "2025",
        medium: "Films",
        dimensions: '42.5"x11"',
        price: "$777",
        description: "",
        image: transparenciesInTime
      }
    ]
  },
  {
    name: "Kyle Melendez Daigre",
    bio: "A native of Seattle, Kyle Melendez Daigre began his artistic journey in early childhood, motivated by both his older sister's creative abilities and a healthy supply of cartoons, games and comics. Inspired by the wondrous landscape of the Pacific Northwest and a love for animals, he explores combinations of fantasy, mischief and vibrancy within his work primarily through characters and creatures. At 15, Kyle became the youngest exhibiting artist and volunteer with the Onyx Fine Arts Collective, regularly participating in group and juried exhibitions. He later graduated from Art Center College of Design with a Bachelor of Fine Arts in Illustration, showcasing a body of work that combined both his love for the natural world and fascination with storytelling for animation. When not creating, Kyle can be found taking walks around the city perusing comics in local shops or exploring public transportation routes.",
    artworks: [
      {
        title: "Tatsu",
        year: "2025",
        medium: "Acrylic and colored pencil on wood panel",
        dimensions: '12"x12"x1"',
        price: "$250",
        description: "One of the most common translations of the Japanese word 'Tatsu' is dragon, which is the subject of this painting. I have a long standing interest in mythological creatures, often choosing to depict them in my work.",
        image: tatsu
      },
      {
        title: "The Kid",
        year: "2025",
        medium: "Acrylic on wood panel",
        dimensions: '16"x20"x1.5"',
        price: "$275",
        description: "This piece, to me, raises questions surrounding identity and intention. Who is this kid? What does he want? These questions can be interpreted in many different ways, but regardless of what the answers may be, there is an uneasiness in the presentation of the unknown that I wanted to capture here.",
        image: theKids
      },
      {
        title: "Komainu",
        year: "2025",
        medium: "Acrylic on wood panel",
        dimensions: '12"x12"x1"',
        price: "$250",
        description: "Komainu are lion-like creatures that are often found standing guard outside of the entrances of sacred places like shrines and temples, protecting them against evil beings and spirits from trying to enter. The choice to depict this creature stems from my interest in Japanese folklore and myth.",
        image: komainu
      },
      {
        title: "Stalker",
        year: "2025",
        medium: "Acrylic on wood panel",
        dimensions: '12"x12"x1"',
        price: "$250",
        description: `This piece started as an exercise with color, later evolving into the scene of a jaguar silently stalking from a tree. Who or what the cat is after can be left up to interpretation, but my goal was to portray a sense of eerie concentration and the feeling of "being watched".`,
        image: stalker
      }
    ]
  },
  {
    name: "Lidia Ochoa",
    bio: "I'm Lidia, a post-christian-deconstruction ex-gifted student who is obsessed with themes of identity, the inner world, and how it influences the way we engage with the outer one. My work features faceless figures to tell stories about the turbulent and contemplative pilgrimage to self-acceptance.",
    artworks: [
      {
        title: "Emergence",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '16"x20"',
        price: "$350",
        description: "Emergence is an ode to every human who steps into the world everyday boldly and fully themselves. It is my attempt to capture my admiration of uniqueness and authenticity. I am blown away and inspired to embody that same energy - fearlessness.",
        image: emergence
      },
      {
        title: "Identity",
        year: "2024",
        medium: "Oil on Canvas",
        dimensions: '16"x20"',
        price: "$350",
        description: "Who am I beyond all the external noise? Can I find myself past all of my internal noise? Is there a place where I can truly find stillness, where I can reconnect with the source of my existence and be grounded. Do I even desire to see myself as an individual in space or is peace found in relinquishing that...",
        image: identity
      },
      {
        title: "Stranger",
        year: "2025",
        medium: "Acrylic on Canvas Board",
        dimensions: '14"x18"',
        price: "$300",
        description: "Everyone we pass by on the street has a story and a journey they have traveled to arrive at that point in space and time. I am a stranger, you are a stranger, and that our paths cross is a miracle. Sometimes it takes getting bonked in the head to remember that.",
        image: stranger
      },
      {
        title: "Nostalgia",
        year: "2024",
        medium: "Colored Pencil on Paper",
        dimensions: '6"x6"',
        price: "$80",
        description: "For a time when I knew myself.",
        image: nostalgia
      },
      {
        title: "Contrasted",
        year: "2024",
        medium: "Oil on Canvas",
        dimensions: '11"x14"',
        price: "$80",
        description: "You know that feeling when you look in the mirror and you are somewhat confused to see your reflection is not what you expected?",
        image: contrasted
      },
      {
        title: "Reflections",
        year: "2019",
        medium: "Oil on Canvas",
        dimensions: '24"x36"',
        price: "$1,500",
        description: "Reflection is a self portrait centered on my relationship with my hair and the religious fundamentalism that I was raised within. Fear of hellfire and all that jazz. Fear that my very sense of self was somehow an unforgivable sin. These reflections stay with me, although I am stronger in my identity than ever before.",
        image: reflections
      }
    ]
  },
  {
    name: "Lola Reinhardt",
    bio: `Lola Reinhardt, born and raised in Seattle, Washington, is an interdisciplinary photographer and visual artist / researcher. Her work exists in both the physical and digital realms, as she prioritizes a balance between hands-on creation and the pixels. Currently she is obsessed with photographing her creative partnerships and local arts events, curating local diy gallery shows, and crafting hangable assemblages using found antique objects layered with her charcoal drawings. Lola takes inspiration from visual details in PNW flora and fauna, pastel colors palettes, and antique ornamental design found in daily life. Recently she printed her first photo book titled Growth from Decay consisting of an Iphone photography collection of mosses, lichens and structural decay being overtaken by such. She has also begun work on a new collaborative magazine titled Rented which documents the home interiors of Seattle artists and shares her love of the city's historic architecture.`,
    artworks: [
      {
        title: "My Mothers Nature",
        year: "2024",
        medium: "Digital photography, artist made frame from local lichen, vintage ribbon",
        dimensions: '10"x8"',
        price: "NFS",
        description: "Remembering how to live with, not against, the natural world. This is what we must pass on.",
        image: myMothersNature
      },
      {
        title: "A Mossy Caress",
        year: "2024",
        medium: "Digital photography, artist made frame from local lichen, vintage ribbon",
        dimensions: '10"x8"',
        price: "NFS",
        description: "",
        image: aMossyCaress
      }
    ]
  },
  {
    name: "Marie Guilloto-Stuppard",
    bio: `Marie Guilloto-Stuppard is a self-taught visual artist whose work explores memory, identity, and transformation through a deeply personal lens shaped by her Caribbean heritage. Rooted in storytelling and cultural reflection, her practice examines the intersection of history, strength, vulnerability, and how beauty can emerge from what is often overlooked or discarded.

Working primarily in acrylics, Marie creates richly layered, textured compositions that invite introspection and connection. Her intuitive process is guided by an instinctive "pull" rather than a predetermined plan; embraces experimentation, imperfection, and spontaneity. In her work, she frequently incorporates unconventional materials and transforms them into powerful visual narratives on memory, identity, cultural history, and purpose.

Marie's work challenges viewers to look beyond the surface, step out of their comfort zone, and embrace new ways of perceiving themselves and challenge their long-held beliefs and the stories they tell.`,
    artworks: [
      {
        title: "Gorée",
        year: "2025",
        medium: "Acrylic",
        dimensions: '12"x12"',
        price: "$2,950",
        description: "Gorée is an island off the coast of Senegal where the kidnapped and taken people were loaded on to ships heading for the Americas where they were sold into slavery. The figures in the piece realize what is happening and are determined not to bend to the will of their captors and survive the horrors ahead.",
        image: goree
      },
      {
        title: "En Fuego",
        year: "2025",
        medium: "Acrylic",
        dimensions: '30"x40"',
        price: "$4,200",
        description: "Apocalyptic fire as beauty, rebirth and catharsis.",
        image: enFuego
      },
      {
        title: "Shadow People",
        year: "2025",
        medium: "Acrylic",
        dimensions: '36"x36"',
        price: "$4,500",
        description: "I simply let the piece guide me where it wants me to go. Often times, the ancestors appear, I select the most vocal and pull them to the surface of the piece, where they can see you see them.",
        image: shadowPeople
      },
      {
        title: "Untitled",
        year: "2025",
        medium: "Mixed Media",
        dimensions: '12"x36"',
        price: "$3,200",
        description: "Guided by the pull of the ancestors, you select your journey.",
        image: untitled
      }
    ]
  },
  {
    name: "Myra Mura",
    bio: `Myra Mura is an interdisciplinary experience designer and artist who creates immersive puzzle experiences, sculptural works, and moments of shared discovery. Born to Japanese and Egyptian immigrants, she is shaped by the meeting of two distinct cultures – an enduring curiosity about how different worlds, ideas, and people can come together and unfold into connection.

Rooted in curiosity and craft, her practice bridges cultures, disciplines, and emotions. She builds experiences that feel universal – where anyone, regardless of language, can step inside, explore, and feel a spark of recognition. Her voice is curious, transformative, and connected – imbued with passion, emotion, and a sense of care that invites people to play, notice, and belong.`,
    artworks: [
      {
        title: "Dual / Duel",
        year: "2025",
        medium: "Mixed media: plastic masks, tissue paper, string, sand, and adhesive on canvas",
        dimensions: '25"x12"',
        price: "$150",
        description: "Dual / Duel is inspired by my experience growing up Japanese and Egyptian. Living between cultures often meant holding two identities at once, while feeling claimed by neither. This work explores that tension, where holding two identities can feel like an internal conflict, and living with both requires conscious effort.",
        image: dualDuel
      }
    ]
  },
  {
    name: "Nathaly Lerma",
    bio: `Nathaly Lerma is a Mexican-American artist from the border cities of Ciudad Juarez, Chihuahua, MX, and El Paso, TX. While in college, she was under the mentorship of her uncle and renown Mexican artist Carlos Estrada-Vega, as well as artist Julia Hitchcock. Under Hitchcock's teaching, she developed a passion for charcoal and figurative drawing, as well as an appreciation for the inclusion of fine arts in STEAM. Mostly a self-taught artist, she is finding her artistic style and voice by utilizing various mediums. In 2023, she opened her art studio, Flor de Cactus Studio. She has produced works for the award winning podcast, "The Lost Women of Science," the Highline Heritage Museum, and the non-profit organization Intentionalist (Seattle, WA). Currently, she's working on a professional certificate by the University of California at San Diego on "Art and the Creative Process." She seeks to use art to elevate her culture, her community, and womanhood in her art practice.`,
    artworks: [
      {
        title: "De Todas las Flores",
        year: "2025",
        medium: "Metallic Watercolors & Acrylic on Canvas",
        dimensions: '11"x14"',
        price: "$100",
        description: "",
        image: deTodasLasFlores
      },
      {
        title: "Peach Eyes Girl",
        year: "2025",
        medium: "Acrylic on printed paper",
        dimensions: '9"x12"',
        price: "$325",
        description: "",
        image: peachEyesGirl
      }
    ]
  },
  {
    name: "NGENIOUS",
    bio: "Ngenious is a Seattle-based visual artist known for immersive, abstract art exploring themes of nature, life, and humanity, often blending mediums like acrylics and charcoal.",
    artworks: [
      {
        title: "SOURCE MATERIAL",
        year: "2025",
        medium: "Acrylic | Charcoal",
        dimensions: '4"x4"',
        price: "$60",
        description: "A visual tribute to the balance of love, generosity, and sacrifice. Adding voice to the topic of the relationship between giving and taking.",
        image: givingTree
      },
      {
        title: "FLOWERS TALK",
        year: "2025",
        medium: "Acrylic | Charcoal",
        dimensions: '24"x36"',
        price: "$400",
        description: "Speaking on the human experience and the circle of life. A point in existence where happiness, satisfaction and positive emotions are met.",
        image: flowersTalk
      },
      {
        title: "MIND MATTERS",
        year: "2025",
        medium: "Acrylic | Charcoal",
        dimensions: '4"x4"',
        price: "$70",
        description: "Exploring usual themes of life and nature. This means more than sitting with oneself but more about creating space to observe thoughts and emotions without judgement.",
        image: mindMatters
      },
      {
        title: "DIMENSIONAL BEING No.1",
        year: "2025",
        medium: "Acrylic | Charcoal",
        dimensions: '24"x18"',
        price: "$200",
        description: "For we shape ourselves in non-linear ways. Overlapping forms to suggest parts we gain through the years through experiences blend together. Bright contrast evokes the energy of change, perpetually rebuilding oneself over time.",
        image: interdimensionalBeing1
      },
      {
        title: "BIG BLUE",
        year: "2025",
        medium: "Acrylic | Charcoal",
        dimensions: '4"x4"',
        price: "$60",
        description: "Love for the earth, sea, trees, and bees.",
        image: bigBlue
      }
    ]
  },
  {
    name: "Ning Wan",
    bio: `Born to a 1st generation Chinese-Taiwanese immigrant father and 4th generation Chinese American mother, I draw upon my lived experiences as a "mixed generation" Chinese American - and as a queer/trans person - to create work that dispels the harmful, unattainable idea of the "ideal Asian American." Deeply interested in Chinese lore and its depictions (or lack thereof) in today's Western hemisphere, I incorporate esoteric mythological motifs in a contemporary painting style to highlight the alienated and largely invisible experience of the modern Chinese American.

In my mixed media practice, I combine traditional Chinese calligraphy materials like sumi ink and handmade mulberry papers with wood panels and oil paint to demonstrate mixed media material usage as another axis for "hybrid" identity expression. Breaking from traditional calligraphy mounting methods, I collage successive layers of translucent mulberry paper, creating varying levels of opacity and obscuration of ink writing and painted imagery - in effect, mirroring both the externally and self-imposed obfuscation of the Asian American psyche.

My work channels my philosophy that there is no one way to be Asian American, or Chinese American. By emphasizing ancient lore, my work stresses the vast breadth of Chinese culture and history, suggesting to viewers that inheritance and identity is then what we choose to make of it, what we choose to keep alive. Altogether, my work as commentary on Chinese American heritage and legacy is part of a larger effort to challenge the blanket confines that US imperialism imposes on racial minorities through umbrella nomenclature and cultural erasure.`,
    artworks: [
      {
        title: "Probing",
        year: "2025",
        medium: "Oil paint, sumi ink, calligraphy paper, masa paper, wood board",
        dimensions: '10"x8"x1.5"',
        price: "$250",
        description: "Probing emphasizes the disparity in my language ability between English and Mandarin, symbolizing the practical and emotional difficulty of talking about trauma with my family. In English, I can say so much more with nuance and intellect; in Mandarin, my words are reduced to simple, awkward sentences. There's so much I want to say to the people I love the most, and yet it's where my ability to communicate is the weakest.",
        image: probing
      }
    ]
  },
  {
    name: "Olivia S. Barlow",
    bio: "Olivia Barlow is a contemporary oil painter born in Beaumont, TX, and based in Seattle, WA. She is a student of the Kang-O'Higgins Atelier at Gage Academy of Art. Olivia takes inspiration from personal experiences, her background in advanced STEM subjects, horror movies, and mother nature. Her Louisiana Creole roots bring an air of mystery to her work, resulting in a stimulating mix of hyper-surreal imagery and bold, flowing colors.",
    artworks: [
      {
        title: "Stay on the Sand/Deepwater Horizon",
        year: "2025",
        medium: "Oil on recycled canvas and frame",
        dimensions: '18"x24"',
        price: "$3,700",
        description: "I grew up in Southeast Texas about 30 minutes from the Gulf of Mexico. I thought it was further away because we rarely visited the beach. The Deepwater Horizon oil spill in 2010 poisoned our gulf, and deceased Portugese man o' war laid scattered along the shoreline. My dad told us to stay on the sand, and avoid the jellyfish.",
        image: stayOnTheSand
      },
      {
        title: "Somebody Help the Bees",
        year: "2025",
        medium: "Oil on canvas",
        dimensions: '24"x24"',
        price: "$3,000",
        description: "The bees have been in trouble since I was a little girl. Apparently bee saving efforts have been too focused on honeybees, and other plenty of other bee species' are still endangered. Is somebody helping the bees? Is it our turn now?",
        image: somebodyHelpTheBees
      },
      {
        title: "The Intersection",
        year: "2025",
        medium: "Oil on Canvas",
        dimensions: '24"x30"',
        price: "$4,300",
        description: "The Matron, The Jester, The Politician, and Me.",
        image: theIntersection
      }
    ]
  },
  {
    name: "Pheora",
    bio: "Pheora has been painting since the age of 15. Her art is inspired by the black community and life experiences. She paints only when inspired. It took her 13 years to paint 7-pieces, part of an 8-piece collection, but 2.5 years later, she still hasn't painted the 8th piece yet because she hasn't found inspiration.",
    artworks: [
      {
        title: "The Tree of Afro",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '36"x48"',
        price: "$4,500",
        description: '"The Tree of Afro" was created to showcase the beauty, light, and life that come from living authentically. The work is rooted in self-acceptance, honoring the power of embracing oneself as naturally born. It reflects the idea that true beauty grows when we accept who we are at our core.',
        image: theTreeOfAfro
      },
      {
        title: "Rainbow Deep",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '36"x48"',
        price: "$4,500",
        description: '"Rainbow Deep" was created to celebrate the beauty and diversity of nature. The work acts as a mirror, reflecting the presence of every individual and emphasizing the unity found within diversity.',
        image: rainbowDeep
      }
    ]
  },
  {
    name: "Ranger Liu",
    bio: `Ranger Liu (they/them; b. 2000) is an interdisciplinary artist and astrophysicist interested in cross-applying the truth-making methodologies of science and art to bridge the gap between "objective" and "subjective" knowledge. Their creative practice explores how abstract theory, such as math, physics, astronomy, and linguistics, can be repurposed to communicate lived experience. They frequently use their experience as a queer and trans Chinese-American as source material, creating autotheoretic works spanning sonic, visual, and sculptural composition and performance. Ranger was born in Manhattan and raised in Cleveland, Ohio. They hold an MFA in Design and Technology from Parsons School of Design and BA degrees in Astrophysics and Computer Science from Columbia University. They currently live and work in Seattle, Washington, where they are pursuing a PhD in Astronomy at the University of Washington. Their work has been exhibited and published nationally.`,
    artworks: [
      {
        title: "Side Effects May Include",
        year: "2022",
        medium: "Photo, testosterone gel boxes, testosterone gel tubes",
        dimensions: '16"x24"',
        price: "$250 (open edition)",
        description: "A sculptural representation of my experience of social and medical transition during my first year on testosterone. The armor, made out of testosterone gel boxes and gel tubes, reflects a self-chosen physical imposition on my body that bestows protection but also restriction.",
        image: sideEffects
      },
      {
        title: "Nipple Calendar",
        year: "2023",
        medium: "Cast concrete, plywood, thread, chest-binding tape",
        dimensions: '24"x36"x2"',
        price: "NFS",
        description: "A sculptural tracking of the days I taped my chest and the methods I used over the course of a few weeks in October 2023.",
        image: nippleCalendar
      },
      {
        title: "Allowed Transitions",
        year: "2025",
        medium: "Zine, cardstock, notebook paper, pen, Chinese knotting cord",
        dimensions: '3.75"x4.25"',
        price: "NFS",
        description: "A zine using quantum electron transitions as a metaphor for gender transition in the current American political landscape.",
        image: allowedTransitions
      }
    ]
  },
  {
    name: "Raziel Grisaffi",
    bio: "Raziel Grisaffi is a queer Seattle-based artist whose work engages a wide variety of media and themes. Their current works explores man-made highways and roads and asks viewers to engage in a non-traditional kind of landscape.",
    artworks: [
      {
        title: "Blur",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '10"x10"',
        price: "$200",
        description: "",
        image: blur
      },
      {
        title: "Fork",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '10"x10"',
        price: "$200",
        description: "",
        image: fork
      },
      {
        title: "Turn (#2)",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '10"x10"',
        price: "$200",
        description: "",
        image: turn2
      },
      {
        title: "Turn (#1)",
        year: "2025",
        medium: "Acrylic on Canvas",
        dimensions: '10"x10"',
        price: "$200",
        description: "",
        image: turn1
      },
      {
        title: "The Fates",
        year: "2025",
        medium: "Oil on panel",
        dimensions: '30"x60"',
        price: "$2,500",
        description: "",
        image: theFates
      }
    ]
  },
  {
    name: "Salenna Green",
    bio: "Salenna Green (she/they) is a Black, queer creative who explores multiple mediums. Today, these include dance, writing, theater, photography, production and watercolor. Her captivating photographs have been featured in galleries in Seattle and Bellevue. With a background in performance art, Salenna has been on the stage since they were 12 and has performed at Seattle Pride, Folk Life, the Fremont Solstice Parade, Langston and more. Salenna's art is inspired by their lived experience in community, by nature and by love.",
    artworks: [
      {
        title: "Not the one or Two",
        year: "2025",
        medium: "Multimedia",
        dimensions: '20"x24"',
        price: "$10,000",
        description: "This work reaches in two directions. It is an expansion of my artistic practice, allowing me to explore sustainable art by recycling my photography prints and reimagining them as a new expression, as well as calling back to the memories of my childhood, African American culture, growing up in a big family and the bonds that are created in childhood and nurtured into adulthood.",
        image: notTheOneOrTwo
      }
    ]
  },
  {
    name: "Sami",
    bio: "I'm a creative little maniac: love all mediums: in living practice of my craft: learning from love & wildcrafting my musings and daydreams. My work is rooted in emotion, curiosity, the stories of my friends/family, language and food. I create for the underappreciated, the passionate, and everyone/thing in between.",
    artworks: [
      {
        title: "Eyes Met With Yours",
        year: "2025",
        medium: "Acrylic on Wood",
        dimensions: "2'x4'",
        price: "NFS",
        description: "",
        image: eyesMetWithYours
      }
    ]
  },
  {
    name: "Sasha Tai",
    bio: `Sasha Tai is a 19 year-old self-taught painter originally from Redmond, Washington.
Sasha Tai's extensive body of gallery-level paintings were "discovered" when post-pandemic she was still experiencing feelings of isolation from the pandemic. She was encouraged by a friend to try painting at Redmond's Centro Cultural Mexicano which she discovered to be a welcoming place and found a sense of community. While painting there the Executive Director of Centro, Angie Hinojos noticed Sasha's deeply emotional painting style and highly developed painting technique. So Ms. Hinojos asked Sasha if she had completed other paintings and Sasha responded that she had completed many. This is how Sasha Tai first exhibited publicly with a solo exhibition displaying 22 of her completed works.
In 2024 Sasha successfully landed a spot to exhibit her oil painting titled Rain Cycle in Bellevue Art Museum's annual "20 under 20" art competition.
Since that time she has exhibited her pieces at various galleries in Seattle and on the Eastside. This summer she also exhibited two of her oil paintings in the Edmonds Arts Festival Gallery.
Sasha continues to develop her artistry by attending Cornish College of the Arts at Seattle University this fall as a 2nd year Fine Arts student.`,
    artworks: [
      {
        title: "Spirit of the Dragon God",
        year: "2025",
        medium: "Oil on Canvas",
        dimensions: '16"x20"',
        price: "NFS",
        description: `My mother, the subject of this painting, is a Hakka chinese woman. The Hakka originated in the Yellow River Valley, a place known as China's "cradle of human civilization." "Spirit of the Dragon God," is based on the folklore of the Hakka Dragon God, a being that is believed to embody the earth itself, with its flesh and bones being made of rocks and soil and its veins taking the form of three rivers. The belief of the Dragon God encouraged the Hakka people to develop a harmonious relationship with the environment, careful not to disturb or exploit its precious resources.`,
        image: spiritOfTheDragonGod
      },
      {
        title: "Roots of Rebirth",
        year: "2024",
        medium: "Oil on Canvas",
        dimensions: '14"x16"',
        price: "$4,100",
        description: `The idea for "Roots of Rebirth," originated from the ancient Japanese forestry practice of "Daisugi," or the process of growing trees out of other trees. Giving new life to something that was believed to be at its end was the main inspiration, symbolizing how at our roots we possess something that gives us the strength to keep moving through any challenge we may face. The healing process is slow yet fruitful, much like growing a tree.`,
        image: rootsOfRebirth
      }
    ]
  },
  {
    name: "Saya Tipton",
    bio: "I am a senior at Grant High School in Portland, Oregon. The amazing communities that surround me keeps me inspired and feeling creative. I play on the Grant High School varsity water polo team, as well as the varsity swim team. I am heavily involved in Choir, as a member of the most selective chamber choir at GHS. Choral music has a huge influence on my art.",
    artworks: [
      {
        title: "stare into the eyes of death, shotgun barrel",
        year: "2025",
        medium: "Gouache, paper",
        dimensions: '12"x9"',
        price: "$40",
        description: "",
        image: stareIntoTheEyes
      },
      {
        title: "Where is my home",
        year: "2025",
        medium: "Gouache, paper",
        dimensions: '12"x9"',
        price: "$60",
        description: "",
        image: whereIsMyHome
      }
    ]
  },
  {
    name: "Sloane Miller 'SloMilli'",
    bio: `Sloane Miller is a Seattle-born multidisciplinary artist and designer whose work draws from personal experience and cultural observation. She is inspired by the act of transmuting everyday hardship into storytelling—using art as a way to process, transform, and give deeper meaning to the challenges that shape us.

Primarily working in digital art, informed by her background in graphic design, Sloane creates visually rich dreamscapes that invite viewers to look beyond the surface and uncover the narratives within. Her practice also extends into collaboration and community-focused projects, curating events and building shared creative experiences across music, cultural spaces, and collective making.`,
    artworks: [
      {
        title: "L'Amour C'est La Cécité",
        year: "2025",
        medium: "Digital Illustration (Giclee Print)",
        dimensions: '18"x36"',
        price: "$350",
        description: "",
        image: amourCestLaCecite
      }
    ]
  },
  {
    name: "Sony Purba",
    bio: "",
    artworks: [
      {
        title: "Rebirth",
        year: "2025",
        medium: "Ink, Acrylic, and Charcoal on Canvas",
        dimensions: '36"x24"',
        price: "$1,700",
        description: "This image is a representation of how I have been growing and morphing intentionally after some big shifts that happened & are still happening in my life. Mitigating the emotional ups and downs through so many changes, tough decisions, relationships challenges, fear of the unknown, among other gazillion crazy things that are happening right now. Though I'm still learning and figuring things out, I have never felt more alive.",
        image: rebirth
      }
    ]
  },
  {
    name: "Suneeva Saldanha",
    bio: `Suneeva Saldanha uses imagery as a preferred mode of communication and an integral aspect of self-expression. Born in Virajpet, Kodagu and raised in Bengaluru, flora and fauna of the Western Ghats in South India have imprinted into their visual language. Often intertwining surreal elements with floral imagery to explore the profound connection between nature and the human psyche, Saldanha aims to evoke emotions and convey symbolic meanings in dreamlike, fantastical scenes.

Influenced by Indian miniature style, Saldanha's works are detailed with structural organic forms that are rooted in cultural nuances. The geometrically repetitive structures are tied to the practice of creating the element over and over again as a meditative outlet.

Saldanha pursued animation studies and worked as an art facilitator before settling in Seattle as a full time artist.`,
    artworks: [
      {
        title: "No.03",
        year: "2025",
        medium: "Acrylic on paper",
        dimensions: "25''x19''",
        price: "$1,490",
        description: "",
        image: no03
      },
      {
        title: "Love Birds",
        year: "2025",
        medium: "Acrylic on paper",
        dimensions: "12.5''x10.5''",
        price: "$850",
        description: "",
        image: loveBirds
      },
      {
        title: "Towards Fruition 02",
        year: "2025",
        medium: "Acrylic on paper",
        dimensions: "14''x16''",
        price: "$700",
        description: "",
        image: towardsFruition2
      },
      {
        title: "no.02",
        year: "2025",
        medium: "Acrylic on paper",
        dimensions: '12"x8"',
        price: "$700",
        description: "",
        image: no02
      }
    ]
  },
  {
    name: "Wynonna Susilo",
    bio: `Wynonna Susilo was born in Indonesia, spent a few years in Singapore before immigrating to the U.S. She has a Bachelor's degree in Fine Arts and worked as a product designer, graphic designer, and photographer in Chicago for a few years. During this time, she had a solo art exhibition that featured her love for Batik, derived from her Indonesian heritage, and her newfound interest in linocut on paper and clay.

In 2018, she pivoted her career after learning about art therapy, where she could merge her love for art, her passion for mental health, and the intersection between art and healing. After completing her Master's degree in Art Therapy and Clinical Counseling, Wynonna shifted her focus to provide art therapy to cancer patients, contributing to the Art Therapy program at Loyola Medical Center in Chicago.

She moved to Seattle in 2020, bringing her art therapy knowledge and skills to serve community members in need as a mental health practitioner. After a hiatus, Wynonna is returning to the art scene in 2025 and has created new works that have been selected into various exhibitions around Seattle and is currently working on expanding her portfolio.`,
    artworks: [
      {
        title: "The Streets Have Forgotten Me",
        year: "2025",
        medium: "Charcoal",
        dimensions: '19.5"x24"',
        price: "$350",
        description: "The streets have forgotten me is a series of charcoal drawings that explore the complex experience of acculturation through the urban landscape of Singapore. Viewed through a personal lens, the works weave together the familiar places of the city with Batik patterns drawn from my Indonesian heritage—symbolizing the interplay between one's cultural identity, one's environment, and its ever-changing relationship. These drawings were inspired by my return to Singapore, a place I once called home, only to find myself feeling like a stranger within it. The dissonance between memory and present reality carried with it a quiet grief: the ache of lost familiarity, the pain of being othered, and the bittersweet negotiation of self in the face of assimilation. Through these drawings, I confront the fragility of belonging, and the quiet resilience of identity that persists in the spaces between.",
        image: theStreetsHaveForgottenMe
      },
      {
        title: "The Streets Have Forgotten Me II",
        year: "2025",
        medium: "Charcoal",
        dimensions: '19.5"x24"',
        price: "$350",
        description: "",
        image: theStreetsHaveForgottenMe2
      }
    ]
  },
  {
    name: "Yaz Williams",
    bio: "",
    artworks: [
      {
        title: "Pushin' Daizes",
        year: "2024",
        medium: "Oil pastels, acrylic paints, soft pastel colored pencils, acrylic paint pens, and gouache",
        dimensions: '24"x18"',
        price: "NFS",
        description: "",
        image: chasingDaizes
      },
      {
        title: "Adorn",
        year: "2024",
        medium: "Mixed/multi-media artwork: acrylic paint, watercolor pigments, fiber glass beads, watercolor and mixed media planet, recycled materials, canvas panel, and watercolor and soft pastel colored pencils",
        dimensions: '16"x20"',
        price: "$250",
        description: "",
        image: adorn
      },
      {
        title: "If Only for a Moment",
        year: "2024",
        medium: "Found materials (cloth and wooden panel), acrylic paints and paint pens, and ink",
        dimensions: '48"x48"',
        price: "$2,700",
        description: "",
        image: ifOnlyForAMoment
      }
    ]
  },
  {
    name: "Yumi Bancon",
    bio: `I was born in Tokyo in 1946, lives and worked in Paris during 1972-1999, came back to Tokyo in 1999, actually live and work in Kanagawa, Japan. Since 1986, I held 14 solo exhibitions in Paris, Tokyo, Kyoto, New York. Since 1990 up to 2025, Participated 6 groups shows in Paris, in Tokyo, in Osaka and in Wakayama. In 2005, I have participated 5th Biennale of Contemporary Art in Florence, and 12th International Collage Salon in Paris.

In the theme of 'Light & Shadow', which has been the base of artworks since the beginning of the Art History, I present mixed-media artworks using photos in which I find the extraordinary in the ordinary, and the beauty in decay.`,
    artworks: [
      {
        title: "Light & Shadow no. 198",
        year: "2025",
        medium: "Photo, braided paper, paper, glue, cardboard",
        dimensions: '21" x 16"',
        price: "$800",
        description: '"Light & Shadow" has been the base of artworks since the beginning of Art History. I chose this theme to cover the mixed-media artworks of photos, in which I find the extraordinary in the ordinary, and the beauty in decay. I used braided papers as accent.',
        image: lightAndShadowNo198
      },
      {
        title: "Light & Shadow no. 225",
        year: "2025",
        medium: "Photo, paper, braided paper, glue, cardboard",
        dimensions: '17" x 12"',
        price: "$800",
        description: "",
        image: lightAndShadowNo225
      }
    ]
  }
];

// Tag Wall - displayed separately at bottom of page
export const tagWallArtwork = {
  title: "Tag Wall",
  artist: "Yaz Williams",
  description: "Interactive artwork: come to Slip Gallery to leave your own unique mark!",
  image: tagWall
};
