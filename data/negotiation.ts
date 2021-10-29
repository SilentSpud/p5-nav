export interface Answer {
  text: string
  gloomy: Reaction | ReactionLevel | number;
  irritable: Reaction | ReactionLevel | number;
  timid: Reaction | ReactionLevel | number;
  upbeat: Reaction | ReactionLevel | number;
};
export interface Reaction {
  unconfirmed: boolean;
  rate: ReactionLevel | number;
}
export enum ReactionLevel {
  Bad = 0,
  Neutral = 1,
  OK = 2,
  Good = 3
}
export interface NegotiationList {
  [question: string]: Answer[]
}

const Negotiations: NegotiationList = {
  "A bad rep spreads like wildfire. If I were you, I'd quit all this nonsense. What's the point?":
    [
      {
        text: "You're right.",
        gloomy: 2,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 3,
        upbeat: 3,
      },
      {
        text: "I don't care.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "I don't know any other way.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: {
          rate: 0,
          unconfirmed: true,
        },
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
    ],
  "After all, isn't it not pitiable when one denies one's own feelings?": [
    {
      text: "It is a difficult topic.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "But the outcome is clear.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "It's mature to admit defeat.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
  ],
  "After confronting me like this... Are you that kind of human too?": [
    {
      text: "You've got a point.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "So what?",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "That's not my style.",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Ah, it's a shame. If I'd taken this seriously from the start, I wouldn't be in this sorry state.":
    [
      {
        text: "Then get serious now.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 2,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Making excuses?",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I wasn't trying either.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 2,
        timid: 3,
        upbeat: 3,
      },
    ],
  "Ah, so I suppose you commit such extreme acts because you know you won't be punished harshly...":
    [
      {
        text: "I'm sorry.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 3,
        upbeat: 1,
      },
      {
        text: "Age doesn't matter.",
        gloomy: 3,
        irritable: 1,
        timid: 2,
        upbeat: 1,
      },
      {
        text: "This isn't extreme.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: {
          rate: 2,
          unconfirmed: true,
        },
        upbeat: 3,
      },
    ],
  "Ain't people your age suppose'ta be out on dates and stuff instead?": [
    {
      text: "Right after this, kid.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Such a rude little boy...",
      gloomy: 1,
      irritable: 2,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "Dating's not important.",
      gloomy: 3,
      irritable: 3,
      timid: 3,
      upbeat: 3,
    },
  ],
  "And if that's the case, why don't you just stop this futile endeavor? It's meaningless...":
    [
      {
        text: "You have a point there...",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I can't stop.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I'll find meaning in it.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
    ],
  "Are all the kids these days doin' stuff like this?": [
    {
      text: "Yeah, we sure are.",
      gloomy: 0,
      irritable: 3,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "No, I thought this up myself.",
      gloomy: 2,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 2,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "Want to join in?",
      gloomy: 2,
      irritable: 0,
      timid: 3,
      upbeat: 1,
    },
  ],
  "Are you bored?": [
    {
      text: "Yes, I'm bored.",
      gloomy: 1,
      irritable: 2,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I'm actually pretty busy.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "I never thought about it.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Are you fighting to help or protect the world or something?": [
    {
      text: "That's right.",
      gloomy: 1,
      irritable: 1,
      timid: {
        rate: 2,
        unconfirmed: true,
      },
      upbeat: 1,
    },
    {
      text: "I won't tell you.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "It pays the bills.",
      gloomy: 0,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "As far as you're concerned, what kind of person was I to you?": [
    {
      text: "My rival.",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "Nobody, really.",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 0,
      timid: 0,
      upbeat: 1,
    },
    {
      text: "It doesn't matter.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 2,
      timid: 2,
      upbeat: 1,
    },
  ],
  "...But be-hee-fore all that, let's enjoy a little chat, ho!": [
    {
      text: "All right, I suppose.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "There's no need for that.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "[...]",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "But before you do, do something funny. What can you do?": [
    {
      text: "Impressions.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Making funny faces.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "Nothing.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "But is it fair to the others if I find this happiness, leaving them all in the dust?":
    [
      {
        text: "I think it's fine.",
        gloomy: 1,
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "What's wrong with that?",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "You're too self-conscious.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "But I've been around the block, so I know--there's something else you want from me, isn't there?":
    [
      {
        text: "Nope.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I just love the elderly.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "I just want you to die happy.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 0,
        timid: 1,
        upbeat: 1,
      },
    ],
  "But I've got a catch phrase that I'm famous for.": [
    {
      text: "Hee-ho!",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
    {
      text: "Hee-haw!",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "Personaaa!",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "But this way of life in this world is all I've ever known.": [
    {
      text: "It's not meaningless.",
      gloomy: 3,
      irritable: 3,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "There are other ways to live.",
      gloomy: 3,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 2,
    },
    {
      text: "You had a good run.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "But what if I ripped your body apart? ...What color blood would come pouring out?":
    [
      {
        text: "Red.",
        gloomy: 1,
        irritable: 3,
        timid: 3,
        upbeat: 0,
      },
      {
        text: "Green.",
        gloomy: 1,
        irritable: 1,
        timid: 0,
        upbeat: 3,
      },
      {
        text: "I don't bleed or cry.",
        gloomy: 3,
        irritable: 0,
        timid: {
          rate: 0,
          unconfirmed: true,
        },
        upbeat: 1,
      },
    ],
  "Can you sacrifice yourself in order to demonstrate your adoration of our Father?":
    [
      {
        text: "I can.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I can't.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I don't adore him.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
    ],
  "Can you sacrifice yourself in order to demonstrate your veneration of our Father?":
    [
      {
        text: "I can certainly try.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "No can do.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "What's veneration?",
        gloomy: 1,
        irritable: 2,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Care to explain yourself? I certainly hope you have a good reason for this boorish treatment.":
    [
      {
        text: "That would take a while.",
        gloomy: 3,
        irritable: 0,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "There's no need to explain.",
        gloomy: 3,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: {
          rate: 0,
          unconfirmed: true,
        },
        upbeat: 1,
      },
      {
        text: "Just shut up...",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 2,
      },
    ],
  "C'mon, what's with the mask? Kinda cringy, don'tcha think?": [
    {
      text: "Sure is.",
      gloomy: 3,
      irritable: 2,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "Shut up...",
      gloomy: 3,
      irritable: 0,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "I'm secretly a kid.",
      gloomy: 2,
      irritable: 3,
      timid: 2,
      upbeat: 3,
    },
  ],
  "Confess your sins.": [
    {
      text: "I apologize.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I think... I was wrong.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "No chance.",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
  ],
  "Could this be what humans call a proposal...?": [
    {
      text: "I'm surprised you knew.",
      gloomy: 0,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "No, it's not.",
      gloomy: 0,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "That's a myth.",
      gloomy: 1,
      irritable: 0,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Couldn't ya at least make me a cup of tea or somethin'? Hell, that'd be real polite.":
    [
      {
        text: "So sorry.",
        gloomy: 1,
        irritable: 2,
        timid: 3,
        upbeat: 0,
      },
      {
        text: "Brew your own.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "I'm not known for being polite.",
        gloomy: 3,
        irritable: 3,
        timid: 1,
        upbeat: 0,
      },
    ],
  "Did I just see your hand shaking? Isn't your guilt tormenting you?": [
    {
      text: "It's just a chill.",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Yeah, I can't take it...",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Shut up.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Did I... lose?": [
    {
      text: "Yup...",
      gloomy: 2,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 2,
    },
    {
      text: "Not sure yet.",
      gloomy: 3,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Nah, you totally won.",
      gloomy: 0,
      irritable: 3,
      timid: 3,
      upbeat: 3,
    },
  ],
  "Didn't you feel like that when you were a kid, too?": [
    {
      text: "It's not so bad-olescent.",
      gloomy: 3,
      irritable: 2,
      timid: 2,
      upbeat: 1,
    },
    {
      text: "Being a kid is tough.",
      gloomy: 2,
      irritable: 3,
      timid: 3,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "I don't remember.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Do you have a dish you're good at?": [
    {
      text: "Fried rice.",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "Mystery meat.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "What are you saying?",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Do you have a lot of friends? Ever feel like the things they do are annoying?":
    [
      {
        text: "Sometimes.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 3,
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "No.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I have no friends.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
    ],
  "Do you know what I speak of?": [
    {
      text: "Sin...?",
      gloomy: 1,
      irritable: 0,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Please tell me.",
      gloomy: 1,
      irritable: 2,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "I've done nothing wrong.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Do you seek friendly competition with a beloved neighbor? Or have you come to destroy a hated foe?":
    [
      {
        text: "You're a beloved neighbor.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 3,
      },
      {
        text: "You're a loathsome foe.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "You sound preachy.",
        gloomy: 1,
        irritable: 0,
        timid: 1,
        upbeat: 3,
      },
    ],
  "Do you think they really mean it all the time?": [
    {
      text: "Yes.",
      gloomy: 1,
      irritable: 3,
      timid: 2,
      upbeat: 1,
    },
    {
      text: "No, but they say it anyway.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "I'm cuter than most kids.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "Doesn't what you're doing bother your conscience?": [
    {
      text: "Now that you mention it...",
      gloomy: 3,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "...Nope",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I'm past such things.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Don't take this the wrong way, but man... Bein' a carefree kid sure must be nice.":
    [
      {
        text: "I want to be a kid forever.",
        gloomy: 0,
        irritable: 2,
        timid: 1,
        upbeat: 2,
      },
      {
        text: "I prefer being an adult.",
        gloomy: 2,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I wish I was still a baby.",
        gloomy: 2,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
    ],
  "Don't you think expecting your would-be victim to be receptive to your words is unreasonable?":
    [
      {
        text: "I do.",
        gloomy: 2,
        irritable: 3,
        timid: 2,
        upbeat: 1,
      },
      {
        text: "I don't think its unfair.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Don't fret about it.",
        gloomy: 1,
        irritable: 1,
        timid: 3,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
    ],
  "Don't you think it's sad that slang and sayings can grow old and get outdated?":
    [
      {
        text: "That is sad.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I don't think so.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "That just proves you're old.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "For you to force me to prostrate myself, as one who only seeks your well-being... Is there anything more irrational?":
    [
      {
        text: "My apologies.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I don't want salvation.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Shut up.",
        gloomy: 1,
        irritable: 0,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Guess what I want you to read me before you tuck me into bed!": [
    {
      text: "An animal book",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 0,
    },
    {
      text: "A story about a Yakuza",
      gloomy: 1,
      irritable: 0,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I have no idea",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Had I known things would turn like this, I'd wish I had found the courage to ask that girl out...":
    [
      {
        text: "It's not too late.",
        gloomy: 3,
        irritable: 1,
        timid: 3,
        upbeat: 0,
      },
      {
        text: "You never had a chance.",
        gloomy: 0,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I'll make sure she's happy.",
        gloomy: 2,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Have you made an appointment, ho?": [
    {
      text: "I have.",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "That's not it.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Just tell me what you know.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "...Heed my words. I am not the one you should detest.": [
    {
      text: "You're right.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "That's absurd.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "I'll be the judge of that.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Hell, I got all sortsa girls lined up if you're into that.": [
    {
      text: "Really?",
      gloomy: 2,
      irritable: 0,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "You're trying way too hard.",
      gloomy: 0,
      irritable: 2,
      timid: {
        rate: 2,
        unconfirmed: true,
      },
      upbeat: 2,
    },
    {
      text: "I'm not interested.",
      gloomy: 3,
      irritable: 3,
      timid: 0,
      upbeat: 0,
    },
  ],
  "Hey. Aren't you hungry? Can we take a break and go eat somewhere?": [
    {
      text: "What're we getting?",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "Yeah.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "Now's not the time.",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
  ],
  "Hey, how about this? If you don't shoot me, then I'll kiss you. Not a bad deal, right?":
    [
      {
        text: "Not a bad idea.",
        gloomy: 2,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "I don't want a kiss.",
        gloomy: 0,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Have some self-respect.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: {
          rate: 0,
          unconfirmed: true,
        },
      },
    ],
  "Hey, if I don't die here, what do you think I'll be like in the future?": [
    {
      text: "A fashionable older woman.",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "I can't measure that.",
      gloomy: 1,
      irritable: 1,
      timid: 2,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
    {
      text: "Living in darkness.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Hey, if ya got any medicine, lend me some. One of them painkillers...": [
    {
      text: "Are you okay?",
      gloomy: 3,
      irritable: 1,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "I have some antacids.",
      gloomy: 0,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "That won't change anything?",
      gloomy: 3,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Hey, if you got any medicine, lend me some. They're supposed ta work miracles, right...?":
    [
      {
        text: "Are you OK?",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "What kind of medicine?",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "That won't change anything?",
        gloomy: 3,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Hey, is my hair flat? Does it look weird?": [
    {
      text: "It looks cute.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "It's weird looking.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Who cares?",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Hey, let's play a game! Guess what I wanna eat!": [
    {
      text: "Hamburgers.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Humans.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Shut up.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Hey, mister, will you give me a yummy snack to eat?": [
    {
      text: "Later.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "No way.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "What would you like?",
      gloomy: 1,
      irritable: 2,
      timid: 2,
      upbeat: 2,
    },
  ],
  "Hey. So whaddya feel when you think about the future?": [
    {
      text: "An average level of happiness.",
      gloomy: 1,
      irritable: 3,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "Live fast, die young.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Nothing.",
      gloomy: 3,
      irritable: 1,
      timid: 2,
      upbeat: 2,
    },
  ],
  "Hey, sonny if somethin's been botherin' you. I'm willin' ta give you a listen.":
    [
      {
        text: "My relationships...",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 3,
        upbeat: 1,
      },
      {
        text: "I smell sweaty.",
        gloomy: 1,
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: {
          rate: 3,
          unconfirmed: true,
        },
        upbeat: 1,
      },
      {
        text: "I have no worries.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "...Hey, there's no need for all this, right? Let's drop the drama and just go get something to eat. The thought has crossed your mind, hasn't it? Come on, where would you take me?":
    [
      {
        text: "An expensive French restaurant.",
        gloomy: 0,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "A busy ramen joint.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Where would you like to go?",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Hey. Why aren't ya at school?": [
    {
      text: "It's after school.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "I don't feel like going.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 3,
    },
    {
      text: "I actually finished school.",
      gloomy: 1,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 3,
    },
  ],
  "Honestly, aren't I, like, a way better girl than those idols?": [
    {
      text: "You're more unique.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Not really...",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Who cares about idols?",
      gloomy: 3,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
  ],
  "How about we live together? What kind of place do you want to live in?": [
    {
      text: "I can't live with you.",
      gloomy: 0,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Next to a convenience store.",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "What are you talking about?",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "How 'bout we have an interview? You're the winner, after all. I'll listen to whatever you gotta say.":
    [
      {
        text: "I feel great.",
        gloomy: 1,
        irritable: 3,
        timid: 0,
        upbeat: 3,
      },
      {
        text: "I want to aim higher.",
        gloomy: 1,
        irritable: 3,
        timid: {
          rate: 2,
          unconfirmed: true,
        },
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "Fighting is pointless.",
        gloomy: 3,
        irritable: 1,
        timid: 3,
        upbeat: 0,
      },
    ],
  "How 'bout you, sonny? What kinda trip do you wanna take?": [
    {
      text: "A luxury cruise.",
      gloomy: 0,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Don't want to go anywhere.",
      gloomy: 3,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
    {
      text: "A trip to hell.",
      gloomy: 2,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
  ],
  "How 'bout you? You wanna get married someday?": [
    {
      text: "I do.",
      gloomy: 2,
      irritable: 3,
      timid: 1,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
    {
      text: "I don't.",
      gloomy: 1,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 0,
      upbeat: 0,
    },
    {
      text: "That's impossible.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 0,
    },
  ],
  "How can you do such terrible things to a cute hee-ho like me!?": [
    {
      text: "I'm sorry.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "Now that you mention it...",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
    {
      text: "...Cute?",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "How did I lose to you? I mean... I win when it comes to looks, ho.": [
    {
      text: "You're right.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "No, I do.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "It's all about heart.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "How did you find out about me, ho?": [
    {
      text: "Some flyers.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "A speciatly site.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "Word of mouth.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
  ],
  "Humans always want either an autograph or a self-hee, ho. Which is it, ho?":
    [
      {
        text: "I want an autograph.",
        gloomy: 2,
        irritable: 1,
        timid: {
          rate: 2,
          unconfirmed: true,
        },
        upbeat: 1,
      },
      {
        text: "I want a photo.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 3,
        upbeat: 2,
      },
      {
        text: "Give me your credit card.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: {
          rate: 0,
          unconfirmed: true,
        },
      },
    ],
  "Humans talk over drinks, right? How 'bout it? Hell, let me buy ya a round, sonny.":
    [
      {
        text: "Quit messing around.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 0,
        upbeat: 0,
      },
      {
        text: "You're really paying?",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "I'm a minor.",
        gloomy: 3,
        irritable: 3,
        timid: 1,
        upbeat: 0,
      },
    ],
  "I also have loved ones who would miss me. You do catch my meaning, yes?": [
    {
      text: "I do now.",
      gloomy: 0,
      irritable: 1,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "That doesn't matter.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I'm always alone.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "I can't sadden my fans, ho. ...You catch my drift, don't you?": [
    {
      text: "I'm rooting for you.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Tell me.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "You have no fans.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "I coulda been a star...": [
    {
      text: "A star?",
      gloomy: 3,
      irritable: 2,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "That's not happening.",
      gloomy: 1,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Are you giving up?",
      gloomy: 3,
      irritable: 2,
      timid: 3,
      upbeat: 3,
    },
  ],
  "I don't hate you. No, I don't feel that way at all...": [
    {
      text: "Is that so?",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Too late.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Then let's hold hands.",
      gloomy: 1,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 3,
    },
  ],
  "I fear neither death, nor you.": [
    {
      text: "In your situation?",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "You're tough.",
      gloomy: 1,
      irritable: 3,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "Don't push yourself.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 2,
    },
  ],
  "...I gotta ask. How do you work out?": [
    {
      text: "I don't really train.",
      gloomy: 3,
      irritable: 3,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "I just have a knack for it.",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 0,
    },
    {
      text: "At a gym from hell.",
      gloomy: 1,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 2,
      upbeat: 3,
    },
  ],
  "I guess women are really more social these days, finding so many fun things to do outside the home.":
    [
      {
        text: "That's so true.",
        gloomy: 1,
        irritable: 3,
        timid: 3,
        upbeat: 1,
      },
      {
        text: "Men are social too.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Is that so?",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "I insist you surrender yourself to the authorities.": [
    {
      text: "This is a misunderstanding.",
      gloomy: 2,
      irritable: 3,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "I apologize.",
      gloomy: 0,
      irritable: 0,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "You've got the wrong idea.",
      gloomy: 3,
      irritable: 2,
      timid: 2,
      upbeat: 3,
    },
  ],
  "I know when I'm gettin' all sweaty. I'm glistenin', ain't I?": [
    {
      text: "Like a disco ball.",
      gloomy: 2,
      irritable: 3,
      timid: 3,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
    {
      text: "Not at all.",
      gloomy: 0,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Why does that matter?",
      gloomy: 3,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 2,
      upbeat: 2,
    },
  ],
  "I lost. Here I lay, at your feet, at your mercy. Just what do you want from me?":
    [
      {
        text: "Give me something.",
        gloomy: 1,
        irritable: 3,
        timid: 3,
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "Grovel before me.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 0,
      },
      {
        text: "I don't know.",
        gloomy: 3,
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
    ],
  "I mean, how does it feel to wave your gun at an enemy who's completely lost the will to fight?":
    [
      {
        text: "It's not bad.",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "...I could get used to it.",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "It pains my heart...",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 3,
        upbeat: 1,
      },
    ],
  "I need to recover, ho. Don't you feel that way too?": [
    {
      text: "Yeah, sometimes.",
      gloomy: 1,
      irritable: 1,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 1,
    },
    {
      text: "Battle is what soothes me.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Quit whining.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "I occasionally wish to pamper myself as a reward for working hard. How would you do that?":
    [
      {
        text: "Relax at home.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 3,
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "Go impulse shopping.",
        gloomy: 1,
        irritable: 2,
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
      {
        text: "Don't be so selfish.",
        gloomy: 3,
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
    ],
  "I suppose it makes no difference if you kill me or if I die just a little bit later, dearie.":
    [
      {
        text: "That's right",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "That isn't true",
        gloomy: 0,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "That's still a long ways off",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "I suppose that's why I feel so confused, child. After all, why am I being treated like this?":
    [
      {
        text: "Because you resisted.",
        gloomy: 1,
        irritable: 3,
        timid: {
          rate: 2,
          unconfirmed: true,
        },
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "It can't be helped.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Holidays don't matter.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  'I suppose this "real world" where you come from must be fairly boring.': [
    {
      text: "You're right.",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 2,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "It keeps me busy.",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "It's better than here.",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "I think dying alone isn't so bad dearie, but isn't living alone in the first place the real tragedy?":
    [
      {
        text: "I don't think so.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Maybe you're right.",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Being alone is a luxury.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
    ],
  'I think the way you\'re treating me is "overfamiliar." I think...': [
    {
      text: "We are friends.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "What's wrong with that?",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "It's because you're cute.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "I wanted to go on vacation, too, before all this happened...": [
    {
      text: "That's too bad.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "What are you getting at?",
      gloomy: 3,
      irritable: 2,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "You have a boyfriend?",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "I wish I could see what kind of parents raised you to run loose and wreak havoc like this.":
    [
      {
        text: "I'll introduce you to them later.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 2,
        timid: 3,
        upbeat: 1,
      },
      {
        text: "I won't show you.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Leave my parents out of this.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "I wish they would leave us old people alone. After all, it's not like we have much time left.":
    [
      {
        text: "I agree.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 2,
      },
      {
        text: "Speak for yourself.",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "There's an aging boom...",
        gloomy: 3,
        irritable: 1,
        timid: 0,
        upbeat: 1,
      },
    ],
  "I wonder how things might have been between us if cicumstances were different somehow.":
    [
      {
        text: "We wouldn't have been enemies.",
        gloomy: 2,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "We'd have gotten married.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Nothing would've changed.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 2,
      },
    ],
  "I wonder how things might have been between us if circumstances had been different somehow?":
    [
      {
        text: "We would have dated.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "We'd have gotten married.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Nothing would've changed.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "I wonder if it's about time I quit this job.": [
    {
      text: "Hang in there.",
      gloomy: 0,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "That's a good idea.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "And then what?",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "I wonder if us speaking together like this now means that we are somehow connected...":
    [
      {
        text: "It could be.",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 2,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "No way.",
        gloomy: 2,
        irritable: 3,
        timid: 2,
        upbeat: 2,
      },
      {
        text: "It's fate.",
        gloomy: 3,
        irritable: 2,
        timid: 1,
        upbeat: 1,
      },
    ],
  "I would never have accepted this task if I knew it would involve this sort of suffering.":
    [
      {
        text: "That's a pity...",
        gloomy: 2,
        irritable: 0,
        timid: 3,
        upbeat: 1,
      },
      {
        text: "Uninformed choices are bad.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "Complaining won't help.",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 0,
        timid: 1,
        upbeat: 1,
      },
    ],
  "If so, then won't you overlook this? Let's make a deal...": [
    {
      text: "All right.",
      gloomy: 1,
      irritable: 3,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "A deal with the enemy?",
      gloomy: 3,
      irritable: 1,
      timid: 2,
      upbeat: 1,
    },
    {
      text: "I can't trust you.",
      gloomy: 1,
      irritable: 0,
      timid: 2,
      upbeat: 1,
    },
  ],
  "If that's the plan, well, you better make sure I'm satisfied.": [
    {
      text: "Don't toy with me.",
      gloomy: 3,
      irritable: 3,
      timid: {
        rate: 2,
        unconfirmed: true,
      },
      upbeat: 0,
    },
    {
      text: "You're not making sense.",
      gloomy: 1,
      irritable: 2,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "What would you like?",
      gloomy: 1,
      irritable: 0,
      timid: 3,
      upbeat: 3,
    },
  ],
  "If that's true, then I don't think there's any real point in killing me...":
    [
      {
        text: "Of course, there's a point.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "You're right",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Then who's the real enemy?",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "If yer gonna kill me, do me a solid and make it quick.": [
    {
      text: "Aren't you scared?",
      gloomy: 3,
      irritable: 3,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "I'll have some more fun first.",
      gloomy: 0,
      irritable: 3,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "I won't make you suffer.",
      gloomy: 3,
      irritable: 2,
      timid: 3,
      upbeat: 2,
    },
  ],
  "If you ask me, it's a lot more fun ta go chasin' after younger ladies, but...":
    [
      {
        text: "This is true.",
        gloomy: 2,
        irritable: 3,
        timid: 3,
        upbeat: 1,
      },
      {
        text: "That's not very fun.",
        gloomy: 2,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 2,
        upbeat: 1,
      },
      {
        text: "You dirty old man.",
        gloomy: 3,
        irritable: 1,
        timid: 2,
        upbeat: 3,
      },
    ],
  "If you capture me, what you going to do to me?": [
    {
      text: "Take pride in capturing you",
      gloomy: 2,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Use you to decorate the hall",
      gloomy: 2,
      irritable: 0,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Nothing.",
      gloomy: 3,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
  ],
  'If your girlfriend asked if you wanted to have dinner with "everybody", what you you say?':
    [
      {
        text: "Sure.",
        gloomy: 1,
        irritable: 2,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "I'm busy.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "What are you talking about?",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  'If your girlfriend asked if you were free to have dinner with her "friends", what would you say?':
    [
      {
        text: "Sure.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "I'm busy.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 2,
      },
      {
        text: "What are you talking about?",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "If your parents could see you now, I'm sure it would break their hearts...":
    [
      {
        text: "You might be right...",
        gloomy: 0,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "This doesn't involve them.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Actually, they'd rejoice.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
    ],
  "I'll go out with you just for today if there are no strings attached.": [
    {
      text: "If it pleases you.",
      gloomy: 2,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 3,
    },
    {
      text: "No strings attached?",
      gloomy: 3,
      irritable: 1,
      timid: 2,
      upbeat: 3,
    },
    {
      text: "I've got enough on my plate...",
      gloomy: 1,
      irritable: 3,
      timid: 2,
      upbeat: 3,
    },
  ],
  "I'm a super popular Shadow, you hee-know. My fans won't just sit around and take this, ho.":
    [
      {
        text: "Please forgive me.",
        gloomy: 2,
        irritable: 1,
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
      {
        text: "Fans?",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "So what?",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "I'm busy, ho. It's tough being so popular.": [
    {
      text: "You do sound busy.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Your popularity won't last.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Who cares?",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 2,
    },
  ],
  "I'm inclined to turn you down, but if you still wish to speak, I will perhaps consider it.":
    [
      {
        text: "You have nothing I want.",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 3,
        timid: 1,
        upbeat: 2,
      },
      {
        text: "Do you have time?",
        gloomy: 2,
        irritable: 0,
        timid: {
          rate: 2,
          unconfirmed: true,
        },
        upbeat: 3,
      },
      {
        text: "Don't turn me down.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 3,
        upbeat: 2,
      },
    ],
  "I'm just putting this out there, but you wouldn't treat me this way if I were younger, right? ...It's true, isn't it?":
    [
      {
        text: "It's not true.",
        gloomy: 0,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: {
          rate: 3,
          unconfirmed: true,
        },
        upbeat: 1,
      },
      {
        text: "Maybe.",
        gloomy: 3,
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
      {
        text: "Cougars are all the rage now.",
        gloomy: 2,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
    ],
  "...I'm not going to go easy on you for doing something like this, you know...":
    [
      {
        text: "I'm sorry.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: {
          rate: 0,
          unconfirmed: true,
        },
      },
      {
        text: "Prepare for the worst.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 1,
        timid: {
          rate: 3,
          unconfirmed: true,
        },
        upbeat: 1,
      },
      {
        text: "How much do you want?",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: {
          rate: 0,
          unconfirmed: true,
        },
      },
    ],
  "I'm not the one you should want to shoot...": [
    {
      text: "You've got a point there...",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Not necessarily.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Anyone will do.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 0,
      timid: 1,
      upbeat: 1,
    },
  ],
  "I'm sure a miracle's gonna happen to me, right?": [
    {
      text: "Miracles don't exist.",
      gloomy: 0,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I'd be jealous if it did.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "I'm waiting.",
      gloomy: 1,
      irritable: 1,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
  ],
  "I'm sure there're other people in the world who'd irritate you more. C'mon, tell me.":
    [
      {
        text: "Older people trying to look young.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 2,
        upbeat: 3,
      },
      {
        text: "No one bothers me.",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: 3,
        upbeat: 1,
      },
      {
        text: "I hate everyone.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
    ],
  "I'm thinking that maybe I can be more grandmotherly. How can I go ahead and do that for you?":
    [
      {
        text: "Make me a homemade meal.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Scold me every so often.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "You don't have to do anything.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "I'm tired of being a kid. Didn't you feel that way when you were little, too?":
    [
      {
        text: "Sure did.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Not really.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I want to be a kid forever.",
        gloomy: 1,
        irritable: 1,
        timid: {
          rate: 2,
          unconfirmed: true,
        },
        upbeat: 1,
      },
    ],
  "I'm well-connected, okay? I know some people that are pretty complicated.": [
    {
      text: "I want to meet them.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Complicated...?",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Liar.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "In the end, killin' me's just a waste of yer time and energy. You get what I'm sayin', right?":
    [
      {
        text: "When you put it that way...",
        gloomy: 1,
        irritable: 0,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "It's not a waste.",
        gloomy: 1,
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Enemies must be eliminated.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
    ],
  "Is it because I'm not acting mature enough? Like, what the heck makes someone mature, anyway?":
    [
      {
        text: "Being old enough to drink.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "Paying your own rent.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Questioning maturity.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
    ],
  "Is it 'cause I wasn't a \"good kid\"?": [
    {
      text: "Yes.",
      gloomy: 2,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "No.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "It has nothing to do with this.",
      gloomy: 3,
      irritable: 0,
      timid: 1,
      upbeat: 0,
    },
  ],
  "Is it just me, or does something stink?": [
    {
      text: "It's just you.",
      gloomy: 1,
      irritable: 2,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "It's coming from you.",
      gloomy: 0,
      irritable: 0,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I smell a lie.",
      gloomy: 3,
      irritable: 1,
      timid: 0,
      upbeat: 1,
    },
  ],
  "Is it not a breeding ground for impudent humans? How do you view this world of yours?":
    [
      {
        text: "Full of corrupt adults.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Plenty of places to shop.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Looks normal to me.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Is it not possible for this series of events involving you and me to be attributed to that?":
    [
      {
        text: "Fair enough.",
        gloomy: 3,
        irritable: 1,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "That is incorrect.",
        gloomy: 2,
        irritable: 2,
        timid: 2,
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "What are you talking about?",
        gloomy: 3,
        irritable: 2,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Is it okay if I get mad right now?": [
    {
      text: "Do it.",
      gloomy: 0,
      irritable: 3,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "Please don't.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "You're so cute.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Is it only for men? Where did you get it?": [
    {
      text: "Do you want it?",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "Internet shopping.",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "It's not available for sale.",
      gloomy: 0,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Is it scary to get a shot? Does it make you cry, mister?": [
    {
      text: "I cry like a baby.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I endure it.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "I like shots.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Is there a reason why I just can't beat you?": [
    {
      text: "I'm younger, that's all.",
      gloomy: 0,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I've totally got girl power.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "Figure it out yourself.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Is there really any benefit for me if I joined with you?": [
    {
      text: "I think there is.",
      gloomy: 1,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 2,
    },
    {
      text: "I can't promise that.",
      gloomy: 3,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "It's a matter of feeling.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "Isn't that just like when a human woman gets married and moves in with her husband?":
    [
      {
        text: "That's right.",
        gloomy: 2,
        irritable: 1,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "No.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I love someone else.",
        gloomy: 2,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Isn't that kinda... outdated thinking? ": [
    {
      text: "Sorry. ",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "It's for your own good. ",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "It's timeless. ",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "It is to become aware of the gaze of our Father, who watches over you with loving grace.":
    [
      {
        text: "I don't understand.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I feel his gaze.",
        gloomy: 1,
        irritable: 2,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "I prefer a harsher stare.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
    ],
  "It look like you corner me... But how me know this not trick? How me know you really winning?":
    [
      {
        text: "Because it's the truth.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "It's a lie.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I don't know.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "It seems the Son of Man have denounced the word of our father. Tell me, what worth have you found?":
    [
      {
        text: "I noticed.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I can survive alone.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Find it for me.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "It'd prolly be a big downer if the birthday boy didn't show to his party, sooo...":
    [
      {
        text: "Happy birthday.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 3,
        upbeat: 3,
      },
      {
        text: "I had no idea.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "This'll be your deathday too.",
        gloomy: 3,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
    ],
  "It's cliched, but we could talk about life... Ask each other things like what sort of girls we're into...":
    [
      {
        text: "I like older women.",
        gloomy: 2,
        irritable: 3,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "No preference.",
        gloomy: 3,
        irritable: 1,
        timid: 2,
        upbeat: 2,
      },
      {
        text: "I like men.",
        gloomy: 1,
        irritable: 2,
        timid: 1,
        upbeat: 1,
      },
    ],
  "...It's fine. Do as you please.": [
    {
      text: "I need your help.",
      gloomy: 1,
      irritable: 2,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "Lick my boots.",
      gloomy: 2,
      irritable: 3,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Are you sure it's fine?",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "It's hard to tell under the mask, but... you're actually handsome, aren't you?":
    [
      {
        text: "How did you know?",
        gloomy: 1,
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "No, not all.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: {
          rate: 3,
          unconfirmed: true,
        },
        upbeat: 1,
      },
      {
        text: "I look ok, I guess.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 2,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
    ],
  "It's no fun going home when only my annoying mom and dad are there.": [
    {
      text: "Parents are annoying.",
      gloomy: 3,
      irritable: 3,
      timid: {
        rate: 2,
        unconfirmed: true,
      },
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "You should love your parents.",
      gloomy: 1,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Why not come to my place?",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "It's pretty rude, man.": [
    {
      text: "No it isn't.",
      gloomy: 2,
      irritable: 3,
      timid: 2,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
    {
      text: "It's part of my face.",
      gloomy: 2,
      irritable: 3,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "My apologies.",
      gloomy: 3,
      irritable: 2,
      timid: 3,
      upbeat: 2,
    },
  ],
  "I've been projecting a \"don't speak to me\" aura towards you.": [
    {
      text: "I noticed.",
      gloomy: 2,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: 'I didn\'t feel an "aura".',
      gloomy: 1,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 2,
      upbeat: 0,
    },
    {
      text: "But we may never meet again.",
      gloomy: 1,
      irritable: 0,
      timid: 2,
      upbeat: 3,
    },
  ],
  "I've heard that love can bloom anywhere, even on a battlefield. Don't you think that's possible?":
    [
      {
        text: "Can it?",
        gloomy: 2,
        irritable: 1,
        timid: 3,
        upbeat: 1,
      },
      {
        text: "Definitely not.",
        gloomy: 2,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "What are you saying?",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Just thinkin' about hierarchy, you should be showin' me a little more respect, shouldn't you?":
    [
      {
        text: "You're right, Senpai.",
        gloomy: 2,
        irritable: 1,
        timid: 3,
        upbeat: {
          rate: 0,
          unconfirmed: true,
        },
      },
      {
        text: "I never thought about it.",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I prefer mutual respect.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 3,
        timid: 2,
        upbeat: 1,
      },
    ],
  'Know how they say, "Be kind ta yer elders"? Has no one ever taught ya that?':
    [
      {
        text: "Someone did once.",
        gloomy: 0,
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: 3,
        upbeat: 2,
      },
      {
        text: "I don't care.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 0,
      },
      {
        text: "I don't want to grow old.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 0,
        upbeat: 3,
      },
    ],
  "Let me hear you utter words of repentance.": [
    {
      text: "Sorry.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: '"Words of repentance."',
      gloomy: 1,
      irritable: 0,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Not sorry.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Life's nothing but pain anyways. Just do whatever you want.": [
    {
      text: "You should have stayed home.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "You won't die easily.",
      gloomy: 1,
      irritable: 1,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 1,
    },
    {
      text: "Don't get desperate.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Man, I'm about ta be a victim of that too. Hell, does this country even have a future?":
    [
      {
        text: "It does.",
        gloomy: 0,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "Don't expect it.",
        gloomy: 1,
        irritable: 0,
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
      {
        text: "The elderly have bad manners.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
    ],
  "Maybe I should try something new! I don't want to fall into mediocrity, ho...":
    [
      {
        text: "You're fine as is.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 1,
        timid: {
          rate: 3,
          unconfirmed: true,
        },
        upbeat: 1,
      },
      {
        text: "Your act is a bit stale...",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Time for a makeover.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "...Maybe I'll call the police. Maybe I'll tell 'em that you were worse than you actually were!":
    [
      {
        text: "Call them. I dare you.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "Please don't.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "It was self-defense.",
        gloomy: 2,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Maybe kids got spanked a long time ago, but people don't do that anymore, right?":
    [
      {
        text: "I didn't know that.",
        gloomy: 1,
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
      {
        text: "You need a good spanking.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Some things are timeless.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: {
          rate: 0,
          unconfirmed: true,
        },
      },
    ],
  "Me am really in soup, now. Do what you want. Me am ready if you want grill me, so...":
    [
      {
        text: "I'll make you into soup.",
        gloomy: 2,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "I don't want to eat you.",
        gloomy: 2,
        irritable: 3,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "I'll mince you.",
        gloomy: 3,
        irritable: 0,
        timid: 1,
        upbeat: 3,
      },
    ],
  "Me guessing you have power that me not have. But what is it...?": [
    {
      text: "Academics.",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 2,
      upbeat: 1,
    },
    {
      text: "Empathy.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "Girl power.",
      gloomy: 1,
      irritable: 1,
      timid: 2,
      upbeat: 3,
    },
  ],
  "Me not curse you, but me curse your commander! Me curse the one who order you...!":
    [
      {
        text: "This was my choice.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 0,
      },
      {
        text: "Fighting me is bad luck.",
        gloomy: 0,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Just try to escape.",
        gloomy: 3,
        irritable: 3,
        timid: 0,
        upbeat: 1,
      },
    ],
  "Me not understand in what way you superior to me...": [
    {
      text: "Youthfulness.",
      gloomy: 2,
      irritable: 3,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "Cuteness.",
      gloomy: 0,
      irritable: 0,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Luckiness.",
      gloomy: 3,
      irritable: 0,
      timid: 2,
      upbeat: 1,
    },
  ],
  "Me really want to eat something.": [
    {
      text: "Do not mock me.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Same goes for me",
      gloomy: 1,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Want to order something?",
      gloomy: 0,
      irritable: 2,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 3,
    },
  ],
  "Me want to ask some recommendations, so me can at least imagine.": [
    {
      text: "Bread soaked in coffee.",
      gloomy: 0,
      irritable: 1,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 3,
    },
    {
      text: "I don't have any.",
      gloomy: 3,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 0,
    },
    {
      text: "Hunger is the best ingredient.",
      gloomy: 2,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
  ],
  'Me want you to give me some nice "words of compassion"-as my rival- as me pass away...!':
    [
      {
        text: "Die in peace.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 3,
      },
      {
        text: "Why show mercy to my enemy?",
        gloomy: 0,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "...I got nothing.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "My chest is beating so fast. What is this feeling?": [
    {
      text: "Are you alright?",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "You're making it up.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "It's love.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  'My horoscope said I was going to have "relationship difficulties" today.': [
    {
      text: "Looks like it came true.",
      gloomy: 1,
      irritable: 2,
      timid: 2,
      upbeat: 1,
    },
    {
      text: "It's just a horoscope.",
      gloomy: 1,
      irritable: 3,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "How is your luck in romance?",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
  ],
  "My only choice now... is to retire, ho.": [
    {
      text: "That's too far.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
    {
      text: "What are your plans?",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "You had a good run...",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Name a calamity that you can bear.": [
    {
      text: "Make it crowded where I shop.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Give me violence.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "No calamities, please.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 0,
    },
  ],
  "No matter the crime, humans treat it more lightly if the perpetrator is a minor, do they not?":
    [
      {
        text: "That's not true.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Age doesn't matter.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "This isn't extreme.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Now, people don't even know who lives next door to them. Shouldn't we know our neighbors better?":
    [
      {
        text: "It's saddening.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I don't really think about it.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Privacy is important.",
        gloomy: 1,
        irritable: 2,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Oh, they're so self-assured that they'll be so successful in the future. Are you like that, child?":
    [
      {
        text: "That's right.",
        gloomy: 1,
        irritable: 3,
        timid: 3,
        upbeat: 1,
      },
      {
        text: "That's not true.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "What's wrong with that?",
        gloomy: 3,
        irritable: 0,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Ooh, what if this leaves a scar and it's permanent?": [
    {
      text: "Sorry...",
      gloomy: 3,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Just get plastic surgery.",
      gloomy: 3,
      irritable: 1,
      timid: 0,
      upbeat: 3,
    },
    {
      text: "I'll take responsibility.",
      gloomy: 3,
      irritable: 3,
      timid: 3,
      upbeat: 3,
    },
  ],
  "Out of respect for our Father, let us take a moment's respite...": [
    {
      text: "If you want to.",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "What do you want to say?",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 2,
    },
    {
      text: "I'm a minor.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Seriously, cosplaying in a place like this? Are you just bored outta your mind?":
    [
      {
        text: "I am.",
        gloomy: 2,
        irritable: 2,
        timid: {
          rate: 2,
          unconfirmed: true,
        },
        upbeat: 3,
      },
      {
        text: "I'm actually very busy.",
        gloomy: 3,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 3,
        upbeat: {
          rate: 0,
          unconfirmed: true,
        },
      },
      {
        text: "Shut up!",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 0,
      },
    ],
  "She said, \"I'll buy it for you on the way home,\" but she didn't but it for me! Isn't that not fair?":
    [
      {
        text: "It's unfair.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "It's your fault for being tricked.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Be more persistent.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "She said, \"I'll buy it for you on the way home,\" but she didn't buy it for me! That's SO unfair, right?!":
    [
      {
        text: "That's not unfair.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "It's your fault for being tricked.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 0,
      },
      {
        text: "I'll buy it for you.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "...So, I'm sorry, but can I go and fix my bangs first?": [
    {
      text: "Quit joking around.",
      gloomy: 1,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
    {
      text: "You're fine as you are.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "That's pointless.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "So... I'm sorry, but can I go and fix my bangs first? ": [
    {
      text: "Quit joking around.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "You're fine as you are.",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "That's pointless.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "So me am going to haunt you for the rest of your life. Me always right behind you...":
    [
      {
        text: "That would be troublesome.",
        gloomy: 0,
        irritable: 0,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I could carry that weight.",
        gloomy: 1,
        irritable: {
          rate: 0,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I don't get it...",
        gloomy: 3,
        irritable: 0,
        timid: 1,
        upbeat: 1,
      },
    ],
  "...So uh, instead of killin' me, you started chattin' with me... You tryin' to get somethin' from me?":
    [
      {
        text: "Yup.",
        gloomy: 1,
        irritable: 1,
        timid: 3,
        upbeat: 2,
      },
      {
        text: "No... Nothing at all...",
        gloomy: 3,
        irritable: 3,
        timid: 0,
        upbeat: 1,
      },
      {
        text: "Dance for me!",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 3,
      },
    ],
  "...So? What's going to happen to me now?": [
    {
      text: "You'll be killed.",
      gloomy: 0,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "What do you want to happen?",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "It's a secret.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "So who're you tryin' to impress with that mask?": [
    {
      text: "Nobody.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: {
        rate: 2,
        unconfirmed: true,
      },
      upbeat: 1,
    },
    {
      text: "Shuddup...",
      gloomy: 1,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: {
        rate: 0,
        unconfirmed: true,
      },
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
    {
      text: "I'm actually still young...",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
  ],
  "So why me in this situation right now? Why me at your mercy?": [
    {
      text: "Times have changed.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Humans are powerful.",
      gloomy: 1,
      irritable: 3,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "This is a difficult topic...",
      gloomy: 3,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: {
        rate: 2,
        unconfirmed: true,
      },
      upbeat: 3,
    },
  ],
  "So... You enjoy teasing older women like this?": [
    {
      text: "I had no intention. ",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "It is fun, actually.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "I'm serious.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Some old people refuse to make use of special seats reserved for the elderly. What do you think of that?":
    [
      {
        text: "No problem with it.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "They shouldn't push themselves.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "They must be young inside.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
    ],
  "Somethin' bad happen in yer life or somethin', sonny?": [
    {
      text: "It's not like that.",
      gloomy: 3,
      irritable: 3,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "I got bad luck.",
      gloomy: 2,
      irritable: 0,
      timid: 2,
      upbeat: 3,
    },
    {
      text: "Shut up.",
      gloomy: 3,
      irritable: 2,
      timid: 2,
      upbeat: {
        rate: 0,
        unconfirmed: true,
      },
    },
  ],
  "Something about people putting honey on cucumbers to feel like they're eating fancy cantaloupe?":
    [
      {
        text: "I follow those tips.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "It's depressing.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Never heard of that.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Sorry, but I want you to go hee-home now. I'm already feeling so tired and weary, ho...":
    [
      {
        text: "Sorry.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "No.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "You go home.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Taking that into consideration, do you still want me?": [
    {
      text: "That's right.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I didn't think that far.",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "The feelings will come.",
      gloomy: 1,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
  ],
  'Tell me, what does "equal footing" mean to you?': [
    {
      text: "Not talking down to people.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 0,
    },
    {
      text: "Sharing household chores.",
      gloomy: 1,
      irritable: 2,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Splitting all the costs.",
      gloomy: 3,
      irritable: 2,
      timid: 1,
      upbeat: 3,
    },
  ],
  "That power, it originates from our Father. Thus, is it not reasonable to repay him for the favor?":
    [
      {
        text: "I never considered it.",
        gloomy: 1,
        irritable: 2,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "This power is all mine.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I don't know.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "That's wack, man. Maybe you should get your head checked out.": [
    {
      text: "I probably should.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 2,
    },
    {
      text: "Now way.",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: {
        rate: 2,
        unconfirmed: true,
      },
      upbeat: 1,
    },
    {
      text: "I'm going feral!",
      gloomy: 1,
      irritable: 1,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
  ],
  "The truth is... You're a good person, aren't you?": [
    {
      text: "I get that a lot.",
      gloomy: 2,
      irritable: 3,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Actually... I'm bad.",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Are you mocking me?",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "The way you treat me, though, is giving me mixed messages. How to you really feel about me?":
    [
      {
        text: "You're beautiful.",
        gloomy: 1,
        irritable: 1,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "You're scary.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Nothing in particular.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 2,
      },
    ],
  "There something you want say to me, right?": [
    {
      text: "I want you.",
      gloomy: 2,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Not really.",
      gloomy: 3,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Let me touch your paw.",
      gloomy: 2,
      irritable: 2,
      timid: 1,
      upbeat: 3,
    },
  ],
  "They always give the guy a katsudon! You got anything like that for me!?": [
    {
      text: "Katsudon, coming right up.",
      gloomy: 1,
      irritable: 2,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "I'm the interrogator here.",
      gloomy: 3,
      irritable: 3,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "I have nothing for you.",
      gloomy: 3,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 2,
    },
  ],
  "They wear sleeveless shirts in the winter, right? What do you think about that, dearie?":
    [
      {
        text: "It's what's in.",
        gloomy: 1,
        irritable: 0,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "They miss seasonal changes.",
        gloomy: 1,
        irritable: 1,
        timid: {
          rate: 3,
          unconfirmed: true,
        },
        upbeat: 1,
      },
      {
        text: "I don't care.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Think carefully. I am not the one you should detest.": [
    {
      text: "You're right.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "[...]",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "[...]",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Think carefully. I cannot be destroyed. Desist form this pointlessness.": [
    {
      text: "What are you talking about?",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "That's absurd.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Then I desist.",
      gloomy: 1,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 3,
    },
  ],
  "This is all some kind of TV thing, hee-ho! Where's the camera?": [
    {
      text: "Wow, you got me.",
      gloomy: 1,
      irritable: 1,
      timid: 2,
      upbeat: 3,
    },
    {
      text: "What's all this now?",
      gloomy: 3,
      irritable: 1,
      timid: 3,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "This is real.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 0,
        unconfirmed: true,
      },
    },
  ],
  'This is that "domestic violins" thing, right?': [
    {
      text: 'That\'s "domestic violence."',
      gloomy: 3,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "What? No, you're wrong...",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Um, are things okay at home?",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 0,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 3,
    },
  ],
  "To tell you the hee-truth, this is all an act, ho. What do you think I'm really like, ho?":
    [
      {
        text: "I can't image it.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Don't care.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "You're fine as is.",
        gloomy: 3,
        irritable: 1,
        timid: 3,
        upbeat: 1,
      },
    ],
  "To view me as an enemy is to incur our Father's wrath. Man's future rests in your hands.":
    [
      {
        text: "Leave the future to me.",
        gloomy: 2,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I need your guidance.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I don't get it.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Today I have what you humans call a girl's night out.": [
    {
      text: "Quit messing with me.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 0,
    },
    {
      text: "Should I go instead?",
      gloomy: 0,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Girls...?",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "...Um, this has been buggin' me for a while, but... Is it me, or does something stink?":
    [
      {
        text: "It's just you.",
        gloomy: 3,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
      {
        text: "It's coming from you.",
        gloomy: 1,
        irritable: 0,
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
      {
        text: "I smell a lie.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "...Um, why're you going' for me? Ain't there worse people out there? What kind of guys piss you off?":
    [
      {
        text: "Slow walkers.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Loud talkers...",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: {
          rate: 3,
          unconfirmed: true,
        },
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
      {
        text: "Nobody.",
        gloomy: 1,
        irritable: 1,
        timid: {
          rate: 3,
          unconfirmed: true,
        },
        upbeat: 1,
      },
    ],
  "...Very well. In the place of our Father, I shall listen to your complaints.":
    [
      {
        text: "Why can't we end war?",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "No complaints here.",
        gloomy: 1,
        irritable: 2,
        timid: 1,
        upbeat: 0,
      },
      {
        text: "I can't get a girlfriend.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
    ],
  "Vow that you will use that power in the name of our Father.": [
    {
      text: "I'll think about it.",
      gloomy: 1,
      irritable: 2,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "No need to be so dramatic.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "I decline.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Well, I need to see myself home soon... ": [
    {
      text: "Just go home.",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
    {
      text: "What do you mean?",
      gloomy: 1,
      irritable: 1,
      timid: {
        rate: 2,
        unconfirmed: true,
      },
      upbeat: 1,
    },
    {
      text: "Don't lie to me.",
      gloomy: 1,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
  ],
  "Well, I'm still here... That guy is really keeping me waiting.": [
    {
      text: "Life isn't like fairy tales.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Just wait a little longer.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "You'll never meet him.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "We'll just say you win. So can we stop this?": [
    {
      text: "I feel bad.",
      gloomy: 2,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 2,
    },
    {
      text: "I don't agree with this.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Everyone wins.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "Well, quite frankly... No one wants you here. You do understand that, right?":
    [
      {
        text: "I know.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I didn't know that.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "Who cares?",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "What are we gonna do, huh?": [
    {
      text: "Tag.",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "Let's play a video game.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Cruise for chicks.",
      gloomy: 1,
      irritable: 2,
      timid: 1,
      upbeat: 3,
    },
  ],
  "What did I do to deserve this?": [
    {
      text: "It's karma for your evil deeds.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "Don't play the victim.",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "Nothing in particular.",
      gloomy: 1,
      irritable: 1,
      timid: 0,
      upbeat: 1,
    },
  ],
  "What did you want, coming all the way to a place like this?": [
    {
      text: "A thrilling adventure.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "A treasure hunt.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 0,
    },
    {
      text: "Slaughter.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "What do ya usually eat?": [
    {
      text: "Curry.",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 2,
    },
    {
      text: "All sorts of things.",
      gloomy: 3,
      irritable: 3,
      timid: {
        rate: 2,
        unconfirmed: true,
      },
      upbeat: 2,
    },
    {
      text: "Protein.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "What do you hope to accomplish by injuring me further...?": [
    {
      text: "More sleep.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Popularity.",
      gloomy: 1,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
    {
      text: "There's no end if I start.",
      gloomy: 1,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
  ],
  "What do you think about humans showing pictures of their baby to others?": [
    {
      text: "It's cute.",
      gloomy: 2,
      irritable: 1,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 1,
    },
    {
      text: "I'm not interested.",
      gloomy: 3,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "What are you talking about?",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "What has brought you to a place like this? What are you seeking?": [
    {
      text: "An adventure.",
      gloomy: 2,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Nothing, really.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "A killing spree.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "What if I was a human? Then, what you're doing... well, it'd be a criminal act!":
    [
      {
        text: "That's true...",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "That can't be true.",
        gloomy: 2,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "That's irrelevant.",
        gloomy: 3,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
    ],
  "What in the hell are ya tryin' ta tell me, anyway?": [
    {
      text: "You're going to die.",
      gloomy: 3,
      irritable: 3,
      timid: 2,
      upbeat: 2,
    },
    {
      text: "Why do we fight?",
      gloomy: 3,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 3,
    },
    {
      text: "I don't really know...",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 2,
      upbeat: 2,
    },
  ],
  "What is irritating you so much?": [
    {
      text: "Rotten adults.",
      gloomy: 2,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Egotistical women.",
      gloomy: 1,
      irritable: 0,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "I'm not irritated.",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 2,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 1,
    },
  ],
  'What kinda "fate" do ya think there is in this meetin\' between me and you?':
    [
      {
        text: "Fate brought us together.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 2,
      },
      {
        text: "There is no such thing.",
        gloomy: 3,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: {
          rate: 3,
          unconfirmed: true,
        },
        upbeat: 2,
      },
      {
        text: "I want to end this fate.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 3,
      },
    ],
  'What kinda "hospitality" will you show me at the end of my life?': [
    {
      text: "You won't suffer long.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "A coupon for a massage by me.",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I'll quietly be at your side.",
      gloomy: 1,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
  ],
  "What kinda guys piss you off?": [
    {
      text: "Pissy guys.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Guys with no sense of humor. ",
      gloomy: 1,
      irritable: 1,
      timid: 2,
      upbeat: 3,
    },
    {
      text: "I never get mad. ",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 0,
    },
  ],
  "What should I wear?": [
    {
      text: "A High School Outfit.",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "A Kimono.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "Don't wear anything.",
      gloomy: 1,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
  ],
  "What was that, anyway?": [
    {
      text: "A love letter.",
      gloomy: 2,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "A threat letter.",
      gloomy: 3,
      irritable: 3,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "A coupon.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
  ],
  "What was... the cause of my defeat?": [
    {
      text: "Your lack of resolve.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "Just bad luck.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "I'm not telling.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "What you thinking now?": [
    {
      text: "How to negotiate..",
      gloomy: 1,
      irritable: 3,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "Nothing.",
      gloomy: 3,
      irritable: 2,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "How can I get popular?",
      gloomy: 1,
      irritable: 0,
      timid: 2,
      upbeat: 3,
    },
  ],
  "What're you gonna tell your kids about this shit?": [
    {
      text: "It was a hard-fought battle.",
      gloomy: 1,
      irritable: 3,
      timid: {
        rate: 2,
        unconfirmed: true,
      },
      upbeat: 1,
    },
    {
      text: "It was an easy win.",
      gloomy: 0,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I'll forget it happened.",
      gloomy: 1,
      irritable: 1,
      timid: 2,
      upbeat: 3,
    },
  ],
  "What's gonna happen to me?": [
    {
      text: "I'll make mincemeat of you.",
      gloomy: 0,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I'll play nice.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 0,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I'll be your dominatrix.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "What's it like to be all kissy face with somebody?": [
    {
      text: "It's incredible...",
      gloomy: 3,
      irritable: 0,
      timid: 1,
      upbeat: 0,
    },
    {
      text: "I shouldn't tell you.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Ask your parents.",
      gloomy: 0,
      irritable: 3,
      timid: 1,
      upbeat: 3,
    },
  ],
  "What's wrong with the way I look, huh?": [
    {
      text: "You tempt people.",
      gloomy: 3,
      irritable: 2,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 3,
    },
    {
      text: "You're ugly.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "Nothing's wrong.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 0,
    },
  ],
  "When I was young, I could make anyone back off-if they were smart enough-with just my glare.":
    [
      {
        text: "That's so neat.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I'm just that good.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "You've grown old.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "When it came right down to it, you couldn't do anything to me!": [
    {
      text: "I could.",
      gloomy: 1,
      irritable: 3,
      timid: 2,
      upbeat: 2,
    },
    {
      text: "How could you tell?",
      gloomy: 3,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "What do you want me to do?",
      gloomy: 3,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
  ],
  "When you eat curry, mister, what do you like to add?": [
    {
      text: "Soy sauce.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 3,
    },
    {
      text: "Worcestershire sauce.",
      gloomy: 1,
      irritable: 1,
      timid: {
        rate: 0,
        unconfirmed: true,
      },
      upbeat: 1,
    },
    {
      text: "I don't add anything.",
      gloomy: 1,
      irritable: 1,
      timid: {
        rate: 0,
        unconfirmed: true,
      },
      upbeat: 1,
    },
  ],
  "When you were little, what did you wanna be when you grow up?": [
    {
      text: "A pro athlete.",
      gloomy: 1,
      irritable: 3,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "I had no dream.",
      gloomy: 1,
      irritable: 0,
      timid: 1,
      upbeat: {
        rate: 0,
        unconfirmed: true,
      },
    },
    {
      text: "A winner in society.",
      gloomy: 1,
      irritable: 1,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 3,
    },
  ],
  "Where do babies come from?": [
    {
      text: "Storks deliver them.",
      gloomy: 1,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Ask your parents.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "The love between two people.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 2,
      timid: 3,
      upbeat: 3,
    },
  ],
  "Where should I go? I want something yummy, ho!": [
    {
      text: "A place with no wait.",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "A place with western toilets.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "You won't survive.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Who the blazes do you think you are?": [
    {
      text: "I feel bad about that.",
      gloomy: 2,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "I'm ME!",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 0,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "I don't owe you an answer.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 0,
    },
  ],
  "Why did you come to this dangerous place? Isn't it safer in the real world?":
    [
      {
        text: "I've got business here.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I'm here for the loot.",
        gloomy: 1,
        irritable: 2,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "Just 'cause.",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  'Why do they like "making out"?': [
    {
      text: "How should I know?",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I can't tell you.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 0,
        unconfirmed: true,
      },
    },
    {
      text: "Ask your parents.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
  ],
  "Why have you decided to be more communicative with me?": [
    {
      text: "Your looks.",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "You seemed useful.",
      gloomy: 2,
      irritable: 3,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "No particular reason.",
      gloomy: 3,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: 1,
    },
  ],
  "Why you come all the way here?": [
    {
      text: "For a treasure hunt.",
      gloomy: 2,
      irritable: 3,
      timid: 3,
      upbeat: 0,
    },
    {
      text: "For girls.",
      gloomy: 2,
      irritable: 0,
      timid: 2,
      upbeat: 3,
    },
    {
      text: "I just felt like it.",
      gloomy: 3,
      irritable: 2,
      timid: 0,
      upbeat: 2,
    },
  ],
  "Why you fight and put yourself in harm's way?": [
    {
      text: "I want to get stronger.",
      gloomy: 0,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Because I see an enemy.",
      gloomy: 1,
      irritable: 3,
      timid: {
        rate: 0,
        unconfirmed: true,
      },
      upbeat: 2,
    },
    {
      text: "I don't actually know.",
      gloomy: 3,
      irritable: 1,
      timid: 0,
      upbeat: 2,
    },
  ],
  "Why you keep trampling here? What you humans thinking?": [
    {
      text: "I'm sorry.",
      gloomy: 0,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 3,
    },
    {
      text: "Should I take off my shoes?",
      gloomy: 2,
      irritable: 0,
      timid: 2,
      upbeat: 3,
    },
    {
      text: "Shut up.",
      gloomy: 3,
      irritable: 3,
      timid: 0,
      upbeat: 2,
    },
  ],
  "Why you not care for me like that? Why you treat me like this, then?": [
    {
      text: "You look scary.",
      gloomy: 2,
      irritable: 3,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "I want to cherish you.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "You're not a beast.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 2,
    },
  ],
  "Why you wear mask to fight, anyway?": [
    {
      text: "I care about my looks.",
      gloomy: 1,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "It keeps my foes' blood off.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "That's what I want to know.",
      gloomy: 3,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
  ],
  "Why're you so desperate?": [
    {
      text: "I don't want to die.",
      gloomy: 3,
      irritable: 2,
      timid: 3,
      upbeat: 3,
    },
    {
      text: "There's something I must do.",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 3,
      timid: 3,
      upbeat: 0,
    },
    {
      text: "I want girls to like me.",
      gloomy: 1,
      irritable: 0,
      timid: 2,
      upbeat: 3,
    },
  ],
  "Won't you just leave me be?": [
    {
      text: "Fine, I will.",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 3,
      timid: {
        rate: 2,
        unconfirmed: true,
      },
      upbeat: 0,
    },
    {
      text: "I can't just leave you.",
      gloomy: 0,
      irritable: 2,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
    {
      text: "Is that reverse psychology?",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 0,
      timid: 1,
      upbeat: 3,
    },
  ],
  "Would you be willing to spend time and money to see people you haven't contacted for years?":
    [
      {
        text: "I suppose so.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Sounds like a drag.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "No one invites me to reunions.",
        gloomy: 1,
        irritable: 0,
        timid: 1,
        upbeat: 1,
      },
    ],
  "Would you do to anyone else what you're doing to me now?": [
    {
      text: "I sure would.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "No, I wouldn't.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 3,
      upbeat: 0,
    },
    {
      text: "This is a special exception.",
      gloomy: 2,
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
  ],
  "Wouldn't your girlfriend get jealous if she could see us?": [
    {
      text: "No need to worry.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "It's only bad if I get caught.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "I don't have a girlfriend.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
  ],
  "Y'know, if I'm gonna be killed, I'd rather be offed by a beautiful, classy lady.":
    [
      {
        text: "Sorry.",
        gloomy: 1,
        irritable: 1,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "You don't get to be picky.",
        gloomy: 2,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "It's all the same.",
        gloomy: 3,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
    ],
  "...Y'know what I'm gettin' at, right? Ya think ya could let me go see my girl?":
    [
      {
        text: "Nope.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I'll consider it.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 3,
        upbeat: 3,
      },
      {
        text: "What kind of girl is she?",
        gloomy: 3,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 2,
        upbeat: 3,
      },
    ],
  "You better enjoy and be drunk on victory while you can. It not last long.": [
    {
      text: "I'll just keep winning.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "You're just a sore loser.",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 0,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I can't drink, I'm underage.",
      gloomy: 1,
      irritable: 0,
      timid: 0,
      upbeat: 1,
    },
  ],
  "You carry a gun because you think it'll make you more popular with the girls?":
    [
      {
        text: "That's right.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 3,
        timid: 2,
        upbeat: 3,
      },
      {
        text: "It won't?",
        gloomy: 3,
        irritable: 1,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "It's for self-improvement.",
        gloomy: 3,
        irritable: 3,
        timid: {
          rate: 3,
          unconfirmed: true,
        },
        upbeat: 3,
      },
    ],
  "You didn't stray from the path or get lost?": [
    {
      text: "I downloaded an app.",
      gloomy: 1,
      irritable: 3,
      timid: 3,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "Well, I got a little lost.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I don't remember.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 0,
      upbeat: 1,
    },
  ],
  "You do realize it's useless to go waving that thing around aimlessly?": [
    {
      text: "I know.",
      gloomy: 1,
      irritable: 1,
      timid: 3,
      upbeat: 1,
    },
    {
      text: "Don't act so tough.",
      gloomy: 1,
      irritable: 2,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Not as useless as you.",
      gloomy: 1,
      irritable: 0,
      timid: 1,
      upbeat: 1,
    },
  ],
  "You do understand that we are here because of people like you, right?": [
    {
      text: "I never thought of that.",
      gloomy: 1,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 3,
    },
    {
      text: "I understand.",
      gloomy: 3,
      irritable: 2,
      timid: 0,
      upbeat: {
        rate: 0,
        unconfirmed: true,
      },
    },
    {
      text: "What do you mean?",
      gloomy: 1,
      irritable: 2,
      timid: 2,
      upbeat: {
        rate: 0,
        unconfirmed: true,
      },
    },
  ],
  "You given much thought, what if you go to place where you could die at any moment?":
    [
      {
        text: "I've thought about it.",
        gloomy: 2,
        irritable: 1,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "I don't want kids.",
        gloomy: 1,
        irritable: {
          rate: 3,
          unconfirmed: true,
        },
        timid: 2,
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "I'm not comfortable with this.",
        gloomy: 3,
        irritable: 1,
        timid: 2,
        upbeat: 2,
      },
    ],
  "You go back to your mother's arms. You need take nap now.": [
    {
      text: "I'm not that young.",
      gloomy: 3,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I'm not sleepy.",
      gloomy: 3,
      irritable: 1,
      timid: 1,
      upbeat: 2,
    },
    {
      text: "After I'm done with this.",
      gloomy: 0,
      irritable: 2,
      timid: 3,
      upbeat: 3,
    },
  ],
  "You had something you lost, and you not know how important it was until after it gone, right?":
    [
      {
        text: "My pal who switched schools.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 2,
        timid: 3,
        upbeat: 1,
      },
      {
        text: "My ex-girlfriend...",
        gloomy: 0,
        irritable: 0,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "Quiet, I'm killing you now.",
        gloomy: 3,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 1,
      },
    ],
  "You have appeared to test my adoration of our Father. Yes, you are... the Tempter":
    [
      {
        text: "You got me.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "You're mistaken.",
        gloomy: 0,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Are you okay?",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "You have wishes you not can let go of, even after you die?": [
    {
      text: "Everyone's happiness.",
      gloomy: 2,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: {
        rate: 2,
        unconfirmed: true,
      },
    },
    {
      text: "A grand funeral.",
      gloomy: 1,
      irritable: 1,
      timid: 0,
      upbeat: 3,
    },
    {
      text: "I won't die.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 3,
      timid: 0,
      upbeat: 2,
    },
  ],
  "You, however are talking to me right here. Are you the exception to this rule?":
    [
      {
        text: "I'm not special.",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 2,
      },
      {
        text: "That's right.",
        gloomy: 1,
        irritable: 1,
        timid: {
          rate: 0,
          unconfirmed: true,
        },
        upbeat: {
          rate: 2,
          unconfirmed: true,
        },
      },
      {
        text: "I have ulterior motives.",
        gloomy: 1,
        irritable: 2,
        timid: 2,
        upbeat: 3,
      },
    ],
  "You knocked me down, and now my goddamn watch is broken!": [
    {
      text: "My apologies.",
      gloomy: 0,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: 2,
    },
    {
      text: "Like I care.",
      gloomy: {
        rate: 0,
        unconfirmed: true,
      },
      irritable: 3,
      timid: 0,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: 'You should "watch" your mouth.',
      gloomy: 2,
      irritable: 2,
      timid: 2,
      upbeat: 3,
    },
  ],
  "You know, a mascot's life isn't hee-easy. Are you sure you could handle all the adversity, ho?":
    [
      {
        text: "I'm ready for it.",
        gloomy: 1,
        irritable: 1,
        timid: {
          rate: 2,
          unconfirmed: true,
        },
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
      {
        text: "What kind of adversity?",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "You're a mascot?",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "You know, if I were to whip something up for you, what would you want?": [
    {
      text: "Meat and potatoes.",
      gloomy: 2,
      irritable: 1,
      timid: 3,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "I don't need homemade food.",
      gloomy: 1,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "Can you actually cook?",
      gloomy: 3,
      irritable: 0,
      timid: 1,
      upbeat: 0,
    },
  ],
  "You know, if you're willin' to let this go... I'll make it worth your while.":
    [
      {
        text: "Worth my while?",
        gloomy: 3,
        irritable: 1,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "No, thanks.",
        gloomy: 2,
        irritable: 3,
        timid: 1,
        upbeat: 0,
      },
      {
        text: "I already get enough, actually.",
        gloomy: 0,
        irritable: 3,
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
    ],
  "You must be one of those delinquents I hear about. Do you have poor grades in school?":
    [
      {
        text: "I'm a straight-A student.",
        gloomy: 1,
        irritable: 3,
        timid: 1,
        upbeat: 2,
      },
      {
        text: "They're not great...",
        gloomy: 3,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "At least I'm popular.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "You new? Did you get hee-hired, ho?": [
    {
      text: "Yeah! Nice you meetcha!",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 3,
    },
    {
      text: "I'm a transfer student.",
      gloomy: 1,
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "No.",
      gloomy: {
        rate: 3,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
  ],
  "You not worry you get in trouble if those groups hear what you are doing to me?":
    [
      {
        text: "That's true.",
        gloomy: 1,
        irritable: 0,
        timid: 3,
        upbeat: 1,
      },
      {
        text: "I don't mind.",
        gloomy: 3,
        irritable: 3,
        timid: 1,
        upbeat: 2,
      },
      {
        text: "It's for love.",
        gloomy: 2,
        irritable: 0,
        timid: 1,
        upbeat: 3,
      },
    ],
  "You were so sure of yourself, so it's embarrassing now to admit you're struggling here. Right?":
    [
      {
        text: "That's right.",
        gloomy: 1,
        irritable: 1,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "No.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Don't make fun of me.",
        gloomy: 3,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
    ],
  "You, who reside in that world of the almighty, what is it that has beleaguered you so?":
    [
      {
        text: "Omnipotent?",
        gloomy: 1,
        irritable: 0,
        timid: 1,
        upbeat: 3,
      },
      {
        text: "I'm not beleaguered.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "There's someone I want to save.",
        gloomy: 1,
        irritable: {
          rate: 2,
          unconfirmed: true,
        },
        timid: 1,
        upbeat: 3,
      },
    ],
  "You will receive punishment for treating me this way, mark my words.": [
    {
      text: "I'm sorry.",
      gloomy: 3,
      irritable: 2,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "I'm prepared for the worst.",
      gloomy: 0,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "How much do you want?",
      gloomy: 1,
      irritable: 0,
      timid: 1,
      upbeat: 3,
    },
  ],
  "You'd have no idea I was about to use my ultimate move.": [
    {
      text: "For real!?",
      gloomy: 3,
      irritable: {
        rate: 2,
        unconfirmed: true,
      },
      timid: 3,
      upbeat: {
        rate: 3,
        unconfirmed: true,
      },
    },
    {
      text: "That's worrying... ",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 1,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "...Try me.",
      gloomy: 2,
      irritable: {
        rate: 3,
        unconfirmed: true,
      },
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 1,
    },
  ],
  "You'll have a bleak future if you spend too much time running around pretending to be a phantom thief.":
    [
      {
        text: "Thank you.",
        gloomy: 1,
        irritable: 2,
        timid: 1,
        upbeat: 0,
      },
      {
        text: "Don't worry about it.",
        gloomy: 3,
        irritable: 3,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "It's worth it.",
        gloomy: 1,
        irritable: 2,
        timid: 1,
        upbeat: 1,
      },
    ],
  "You'll probably break down in tears when you see my angry face. I'm a real monstrosity, ho!":
    [
      {
        text: "That's scary...",
        gloomy: {
          rate: 3,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: {
          rate: 0,
          unconfirmed: true,
        },
      },
      {
        text: "I would never cry.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: {
          rate: 0,
          unconfirmed: true,
        },
      },
      {
        text: "I want to see your fury.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: {
          rate: 3,
          unconfirmed: true,
        },
      },
    ],
  "You're a big bully! don't you think that's \"immature\"?": [
    {
      text: "Now that you mention it...",
      gloomy: {
        rate: 2,
        unconfirmed: true,
      },
      irritable: 1,
      timid: {
        rate: 3,
        unconfirmed: true,
      },
      upbeat: 3,
    },
    {
      text: "No, I don't think so.",
      gloomy: 0,
      irritable: 3,
      timid: 1,
      upbeat: 1,
    },
    {
      text: "I'm not mature anyway.",
      gloomy: 3,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 1,
      upbeat: {
        rate: 0,
        unconfirmed: true,
      },
    },
  ],
  "You're hitting on me, right? Don't you think you're totally doing it wrong?":
    [
      {
        text: "Nothing wrong about it.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "What's the right way, then?",
        gloomy: 3,
        irritable: 1,
        timid: 0,
        upbeat: 1,
      },
      {
        text: "I'm not hitting on you.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "You're lucky it was just me. You can't do anything like this in the real world, right?":
    [
      {
        text: "That's right.",
        gloomy: 0,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "I choose my targets carefully.",
        gloomy: 2,
        irritable: 1,
        timid: 0,
        upbeat: 1,
      },
      {
        text: "I'm serious about this.",
        gloomy: 1,
        irritable: 1,
        timid: 0,
        upbeat: 1,
      },
    ],
  "You're showing off your strength to me, aren't you? I total-hee read your mind, ho.":
    [
      {
        text: "You're misunderstanding.",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "The hell are you saying?",
        gloomy: 1,
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
      {
        text: "Make me your apprentice.",
        gloomy: {
          rate: 2,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: 1,
      },
    ],
  "You're s'posed to go easy on kids! Are you stupid? Do you go to school and get stupid grades?":
    [
      {
        text: "I'm smart.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 3,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "I'm good at PE.",
        gloomy: 3,
        irritable: 1,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "Shut up.",
        gloomy: 1,
        irritable: 1,
        timid: 0,
        upbeat: 2,
      },
    ],
  "You're violatin' the weapons code or whatever, man.": [
    {
      text: "I didn't know.",
      gloomy: 3,
      irritable: 1,
      timid: 3,
      upbeat: 2,
    },
    {
      text: "It's for self-defense.",
      gloomy: 0,
      irritable: 3,
      timid: 2,
      upbeat: 0,
    },
    {
      text: "Pretty cool, huh?",
      gloomy: 2,
      irritable: {
        rate: 0,
        unconfirmed: true,
      },
      timid: 2,
      upbeat: 3,
    },
  ],
  " ...You've come from some other company to scout me-hee out. There's no mistaking it, ho!":
    [
      {
        text: "You got me.",
        gloomy: 1,
        irritable: 1,
        timid: 3,
        upbeat: 3,
      },
      {
        text: "It's a misunderstanding.",
        gloomy: 1,
        irritable: 1,
        timid: 0,
        upbeat: 1,
      },
      {
        text: "I've come to finish you off.",
        gloomy: {
          rate: 0,
          unconfirmed: true,
        },
        irritable: 1,
        timid: 1,
        upbeat: {
          rate: 0,
          unconfirmed: true,
        },
      },
    ],
};
export default Negotiations;