export interface NegotiationAnswer {
  text: string;
  gloomy: NegotiationReaction | NegotiationReactions;
  irritable: NegotiationReaction | NegotiationReactions;
  timid: NegotiationReaction | NegotiationReactions;
  upbeat: NegotiationReaction | NegotiationReactions;
}
export interface NegotiationReaction {
  unconfirmed?: boolean;
  rate: NegotiationReactions;
}
export enum NegotiationReactions {
  Bad = 0,
  Neutral = 1,
  OK = 2,
  Good = 3
}
export interface NegotiationList {
  [question: string]: NegotiationAnswer[];
}

const Negotiations: NegotiationList = {
  "A bad rep spreads like wildfire. If I were you, I'd quit all this nonsense. What's the point?": [
    {
      text: "You're right.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I don't care.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "I don't know any other way.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "After all, isn't it not pitiable when one denies one's own feelings?": [
    {
      text: "It is a difficult topic.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "But the outcome is clear.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's mature to admit defeat.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    }
  ],
  "After confronting me like this... Are you that kind of human too?": [
    {
      text: "You've got a point.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "So what?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's not my style.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Ah, it's a shame. If I'd taken this seriously from the start, I wouldn't be in this sorry state.": [
    {
      text: "Then get serious now.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Making excuses?",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I wasn't trying either.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Ah, so I suppose you commit such extreme acts because you know you won't be punished harshly...": [
    {
      text: "I'm sorry.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Age doesn't matter.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "This isn't extreme.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    }
  ],
  "Ain't people your age suppose'ta be out on dates and stuff instead?": [
    {
      text: "Right after this, kid.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Such a rude little boy...",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Dating's not important.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    }
  ],
  "And if that's the case, why don't you just stop this futile endeavor? It's meaningless...": [
    {
      text: "You have a point there...",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I can't stop.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'll find meaning in it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Are all the kids these days doin' stuff like this?": [
    {
      text: "Yeah, we sure are.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No, I thought this up myself.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.OK,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Want to join in?",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Are you bored?": [
    {
      text: "Yes, I'm bored.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm actually pretty busy.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I never thought about it.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Are you fighting to help or protect the world or something?": [
    {
      text: "That's right.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I won't tell you.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It pays the bills.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "As far as you're concerned, what kind of person was I to you?": [
    {
      text: "My rival.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Nobody, really.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It doesn't matter.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "...But be-hee-fore all that, let's enjoy a little chat, ho!": [
    {
      text: "All right, I suppose.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "There's no need for that.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "[...]",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "But before you do, do something funny. What can you do?": [
    {
      text: "Impressions.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Making funny faces.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Nothing.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "But is it fair to the others if I find this happiness, leaving them all in the dust?": [
    {
      text: "I think it's fine.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What's wrong with that?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You're too self-conscious.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "But I've been around the block, so I know--there's something else you want from me, isn't there?": [
    {
      text: "Nope.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I just love the elderly.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I just want you to die happy.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "But I've got a catch phrase that I'm famous for.": [
    {
      text: "Hee-ho!",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "Hee-haw!",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Personaaa!",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "But this way of life in this world is all I've ever known.": [
    {
      text: "It's not meaningless.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "There are other ways to live.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "You had a good run.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "But what if I ripped your body apart? ...What color blood would come pouring out?": [
    {
      text: "Red.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "Green.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I don't bleed or cry.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Bad,
      timid: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Can you sacrifice yourself in order to demonstrate your adoration of our Father?": [
    {
      text: "I can.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I can't.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't adore him.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Can you sacrifice yourself in order to demonstrate your veneration of our Father?": [
    {
      text: "I can certainly try.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No can do.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What's veneration?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Care to explain yourself? I certainly hope you have a good reason for this boorish treatment.": [
    {
      text: "That would take a while.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "There's no need to explain.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Just shut up...",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    }
  ],
  "C'mon, what's with the mask? Kinda cringy, don'tcha think?": [
    {
      text: "Sure is.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Shut up...",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I'm secretly a kid.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Confess your sins.": [
    {
      text: "I apologize.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I think... I was wrong.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No chance.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Could this be what humans call a proposal...?": [
    {
      text: "I'm surprised you knew.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "No, it's not.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's a myth.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Couldn't ya at least make me a cup of tea or somethin'? Hell, that'd be real polite.": [
    {
      text: "So sorry.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "Brew your own.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm not known for being polite.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "Did I just see your hand shaking? Isn't your guilt tormenting you?": [
    {
      text: "It's just a chill.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Yeah, I can't take it...",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Shut up.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Did I... lose?": [
    {
      text: "Yup...",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Not sure yet.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Nah, you totally won.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Didn't you feel like that when you were a kid, too?": [
    {
      text: "It's not so bad-olescent.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Being a kid is tough.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "I don't remember.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Do you have a dish you're good at?": [
    {
      text: "Fried rice.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Mystery meat.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "What are you saying?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Do you have a lot of friends? Ever feel like the things they do are annoying?": [
    {
      text: "Sometimes.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "No.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I have no friends.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "Do you know what I speak of?": [
    {
      text: "Sin...?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Please tell me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I've done nothing wrong.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Do you seek friendly competition with a beloved neighbor? Or have you come to destroy a hated foe?": [
    {
      text: "You're a beloved neighbor.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "You're a loathsome foe.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You sound preachy.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Do you think they really mean it all the time?": [
    {
      text: "Yes.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No, but they say it anyway.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm cuter than most kids.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Doesn't what you're doing bother your conscience?": [
    {
      text: "Now that you mention it...",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "...Nope",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm past such things.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Don't take this the wrong way, but man... Bein' a carefree kid sure must be nice.": [
    {
      text: "I want to be a kid forever.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I prefer being an adult.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I wish I was still a baby.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Don't you think expecting your would-be victim to be receptive to your words is unreasonable?": [
    {
      text: "I do.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't think its unfair.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Don't fret about it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "Don't you think it's sad that slang and sayings can grow old and get outdated?": [
    {
      text: "That is sad.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't think so.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That just proves you're old.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "For you to force me to prostrate myself, as one who only seeks your well-being... Is there anything more irrational?": [
    {
      text: "My apologies.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't want salvation.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Shut up.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Guess what I want you to read me before you tuck me into bed!": [
    {
      text: "An animal book",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "A story about a Yakuza",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I have no idea",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Had I known things would turn like this, I'd wish I had found the courage to ask that girl out...": [
    {
      text: "It's not too late.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "You never had a chance.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'll make sure she's happy.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Have you made an appointment, ho?": [
    {
      text: "I have.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "That's not it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Just tell me what you know.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "...Heed my words. I am not the one you should detest.": [
    {
      text: "You're right.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's absurd.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I'll be the judge of that.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Hell, I got all sortsa girls lined up if you're into that.": [
    {
      text: "Really?",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "You're trying way too hard.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.OK,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I'm not interested.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "Hey. Aren't you hungry? Can we take a break and go eat somewhere?": [
    {
      text: "What're we getting?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Yeah.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Now's not the time.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "Hey, how about this? If you don't shoot me, then I'll kiss you. Not a bad deal, right?": [
    {
      text: "Not a bad idea.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I don't want a kiss.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Have some self-respect.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    }
  ],
  "Hey, if I don't die here, what do you think I'll be like in the future?": [
    {
      text: "A fashionable older woman.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "I can't measure that.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "Living in darkness.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Hey, if ya got any medicine, lend me some. One of them painkillers...": [
    {
      text: "Are you okay?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I have some antacids.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "That won't change anything?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Hey, if you got any medicine, lend me some. They're supposed ta work miracles, right...?": [
    {
      text: "Are you OK?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What kind of medicine?",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That won't change anything?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Hey, is my hair flat? Does it look weird?": [
    {
      text: "It looks cute.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's weird looking.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Who cares?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Hey, let's play a game! Guess what I wanna eat!": [
    {
      text: "Hamburgers.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Humans.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Shut up.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Hey, mister, will you give me a yummy snack to eat?": [
    {
      text: "Later.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No way.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What would you like?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.OK
    }
  ],
  "Hey. So whaddya feel when you think about the future?": [
    {
      text: "An average level of happiness.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Live fast, die young.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Nothing.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.OK
    }
  ],
  "Hey, sonny if somethin's been botherin' you. I'm willin' ta give you a listen.": [
    {
      text: "My relationships...",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I smell sweaty.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I have no worries.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "...Hey, there's no need for all this, right? Let's drop the drama and just go get something to eat. The thought has crossed your mind, hasn't it? Come on, where would you take me?":
    [
      {
        text: "An expensive French restaurant.",
        gloomy: NegotiationReactions.Bad,
        irritable: NegotiationReactions.Neutral,
        timid: NegotiationReactions.Neutral,
        upbeat: NegotiationReactions.Neutral
      },
      {
        text: "A busy ramen joint.",
        gloomy: NegotiationReactions.Neutral,
        irritable: NegotiationReactions.Neutral,
        timid: NegotiationReactions.Neutral,
        upbeat: NegotiationReactions.Neutral
      },
      {
        text: "Where would you like to go?",
        gloomy: NegotiationReactions.Good,
        irritable: NegotiationReactions.Neutral,
        timid: NegotiationReactions.Neutral,
        upbeat: NegotiationReactions.Neutral
      }
    ],
  "Hey. Why aren't ya at school?": [
    {
      text: "It's after school.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I don't feel like going.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I actually finished school.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Honestly, aren't I, like, a way better girl than those idols?": [
    {
      text: "You're more unique.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Not really...",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Who cares about idols?",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "How about we live together? What kind of place do you want to live in?": [
    {
      text: "I can't live with you.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Next to a convenience store.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "What are you talking about?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "How 'bout we have an interview? You're the winner, after all. I'll listen to whatever you gotta say.": [
    {
      text: "I feel great.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I want to aim higher.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "Fighting is pointless.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "How 'bout you, sonny? What kinda trip do you wanna take?": [
    {
      text: "A luxury cruise.",
      gloomy: NegotiationReactions.Bad,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Don't want to go anywhere.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "A trip to hell.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "How 'bout you? You wanna get married someday?": [
    {
      text: "I do.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "I don't.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "That's impossible.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "How can you do such terrible things to a cute hee-ho like me!?": [
    {
      text: "I'm sorry.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Now that you mention it...",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "...Cute?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "How did I lose to you? I mean... I win when it comes to looks, ho.": [
    {
      text: "You're right.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "No, I do.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "It's all about heart.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "How did you find out about me, ho?": [
    {
      text: "Some flyers.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "A speciatly site.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Word of mouth.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    }
  ],
  "Humans always want either an autograph or a self-hee, ho. Which is it, ho?": [
    {
      text: "I want an autograph.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I want a photo.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Give me your credit card.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    }
  ],
  "Humans talk over drinks, right? How 'bout it? Hell, let me buy ya a round, sonny.": [
    {
      text: "Quit messing around.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "You're really paying?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm a minor.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "I also have loved ones who would miss me. You do catch my meaning, yes?": [
    {
      text: "I do now.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "That doesn't matter.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm always alone.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I can't sadden my fans, ho. ...You catch my drift, don't you?": [
    {
      text: "I'm rooting for you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Tell me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You have no fans.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I coulda been a star...": [
    {
      text: "A star?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "That's not happening.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Are you giving up?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    }
  ],
  "I don't hate you. No, I don't feel that way at all...": [
    {
      text: "Is that so?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Too late.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Then let's hold hands.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    }
  ],
  "I fear neither death, nor you.": [
    {
      text: "In your situation?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "You're tough.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Don't push yourself.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    }
  ],
  "...I gotta ask. How do you work out?": [
    {
      text: "I don't really train.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I just have a knack for it.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "At a gym from hell.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "I guess women are really more social these days, finding so many fun things to do outside the home.": [
    {
      text: "That's so true.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Men are social too.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Is that so?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I insist you surrender yourself to the authorities.": [
    {
      text: "This is a misunderstanding.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I apologize.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "You've got the wrong idea.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "I know when I'm gettin' all sweaty. I'm glistenin', ain't I?": [
    {
      text: "Like a disco ball.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "Not at all.",
      gloomy: NegotiationReactions.Bad,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Why does that matter?",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.OK
    }
  ],
  "I lost. Here I lay, at your feet, at your mercy. Just what do you want from me?": [
    {
      text: "Give me something.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "Grovel before me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "I don't know.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I mean, how does it feel to wave your gun at an enemy who's completely lost the will to fight?": [
    {
      text: "It's not bad.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "...I could get used to it.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "It pains my heart...",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I need to recover, ho. Don't you feel that way too?": [
    {
      text: "Yeah, sometimes.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Battle is what soothes me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Quit whining.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I occasionally wish to pamper myself as a reward for working hard. How would you do that?": [
    {
      text: "Relax at home.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "Go impulse shopping.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Don't be so selfish.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I suppose it makes no difference if you kill me or if I die just a little bit later, dearie.": [
    {
      text: "That's right",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That isn't true",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's still a long ways off",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I suppose that's why I feel so confused, child. After all, why am I being treated like this?": [
    {
      text: "Because you resisted.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "It can't be helped.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Holidays don't matter.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  'I suppose this "real world" where you come from must be fairly boring.': [
    {
      text: "You're right.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It keeps me busy.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "It's better than here.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "I think dying alone isn't so bad dearie, but isn't living alone in the first place the real tragedy?": [
    {
      text: "I don't think so.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Maybe you're right.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Being alone is a luxury.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  'I think the way you\'re treating me is "overfamiliar." I think...': [
    {
      text: "We are friends.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "What's wrong with that?",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's because you're cute.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I wanted to go on vacation, too, before all this happened...": [
    {
      text: "That's too bad.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "What are you getting at?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "You have a boyfriend?",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "I wish I could see what kind of parents raised you to run loose and wreak havoc like this.": [
    {
      text: "I'll introduce you to them later.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I won't show you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Leave my parents out of this.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I wish they would leave us old people alone. After all, it's not like we have much time left.": [
    {
      text: "I agree.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Speak for yourself.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "There's an aging boom...",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I wonder how things might have been between us if cicumstances were different somehow.": [
    {
      text: "We wouldn't have been enemies.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "We'd have gotten married.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Nothing would've changed.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    }
  ],
  "I wonder how things might have been between us if circumstances had been different somehow?": [
    {
      text: "We would have dated.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "We'd have gotten married.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Nothing would've changed.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I wonder if it's about time I quit this job.": [
    {
      text: "Hang in there.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's a good idea.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "And then what?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I wonder if us speaking together like this now means that we are somehow connected...": [
    {
      text: "It could be.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No way.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "It's fate.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I would never have accepted this task if I knew it would involve this sort of suffering.": [
    {
      text: "That's a pity...",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Uninformed choices are bad.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Complaining won't help.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "If so, then won't you overlook this? Let's make a deal...": [
    {
      text: "All right.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "A deal with the enemy?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I can't trust you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "If that's the plan, well, you better make sure I'm satisfied.": [
    {
      text: "Don't toy with me.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "You're not making sense.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "What would you like?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    }
  ],
  "If that's true, then I don't think there's any real point in killing me...": [
    {
      text: "Of course, there's a point.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You're right",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Then who's the real enemy?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "If yer gonna kill me, do me a solid and make it quick.": [
    {
      text: "Aren't you scared?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I'll have some more fun first.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I won't make you suffer.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    }
  ],
  "If you ask me, it's a lot more fun ta go chasin' after younger ladies, but...": [
    {
      text: "This is true.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's not very fun.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You dirty old man.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "If you capture me, what you going to do to me?": [
    {
      text: "Take pride in capturing you",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Use you to decorate the hall",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Nothing.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  'If your girlfriend asked if you wanted to have dinner with "everybody", what you you say?': [
    {
      text: "Sure.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm busy.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What are you talking about?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  'If your girlfriend asked if you were free to have dinner with her "friends", what would you say?': [
    {
      text: "Sure.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm busy.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "What are you talking about?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "If your parents could see you now, I'm sure it would break their hearts...": [
    {
      text: "You might be right...",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "This doesn't involve them.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Actually, they'd rejoice.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "I'll go out with you just for today if there are no strings attached.": [
    {
      text: "If it pleases you.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "No strings attached?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I've got enough on my plate...",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "I'm a super popular Shadow, you hee-know. My fans won't just sit around and take this, ho.": [
    {
      text: "Please forgive me.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Fans?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "So what?",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I'm busy, ho. It's tough being so popular.": [
    {
      text: "You do sound busy.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Your popularity won't last.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Who cares?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    }
  ],
  "I'm inclined to turn you down, but if you still wish to speak, I will perhaps consider it.": [
    {
      text: "You have nothing I want.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Do you have time?",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Bad,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Don't turn me down.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    }
  ],
  "I'm just putting this out there, but you wouldn't treat me this way if I were younger, right? ...It's true, isn't it?": [
    {
      text: "It's not true.",
      gloomy: NegotiationReactions.Bad,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Maybe.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Cougars are all the rage now.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "...I'm not going to go easy on you for doing something like this, you know...": [
    {
      text: "I'm sorry.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    },
    {
      text: "Prepare for the worst.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "How much do you want?",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    }
  ],
  "I'm not the one you should want to shoot...": [
    {
      text: "You've got a point there...",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Not necessarily.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Anyone will do.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I'm sure a miracle's gonna happen to me, right?": [
    {
      text: "Miracles don't exist.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'd be jealous if it did.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I'm waiting.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "I'm sure there're other people in the world who'd irritate you more. C'mon, tell me.": [
    {
      text: "Older people trying to look young.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "No one bothers me.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I hate everyone.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I'm thinking that maybe I can be more grandmotherly. How can I go ahead and do that for you?": [
    {
      text: "Make me a homemade meal.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Scold me every so often.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You don't have to do anything.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I'm tired of being a kid. Didn't you feel that way when you were little, too?": [
    {
      text: "Sure did.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Not really.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I want to be a kid forever.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "I'm well-connected, okay? I know some people that are pretty complicated.": [
    {
      text: "I want to meet them.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Complicated...?",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Liar.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "In the end, killin' me's just a waste of yer time and energy. You get what I'm sayin', right?": [
    {
      text: "When you put it that way...",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's not a waste.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Enemies must be eliminated.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Is it because I'm not acting mature enough? Like, what the heck makes someone mature, anyway?": [
    {
      text: "Being old enough to drink.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "Paying your own rent.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Questioning maturity.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "Is it 'cause I wasn't a \"good kid\"?": [
    {
      text: "Yes.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It has nothing to do with this.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "Is it just me, or does something stink?": [
    {
      text: "It's just you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's coming from you.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I smell a lie.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Is it not a breeding ground for impudent humans? How do you view this world of yours?": [
    {
      text: "Full of corrupt adults.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Plenty of places to shop.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Looks normal to me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Is it not possible for this series of events involving you and me to be attributed to that?": [
    {
      text: "Fair enough.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "That is incorrect.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.OK,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "What are you talking about?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Is it okay if I get mad right now?": [
    {
      text: "Do it.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Please don't.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You're so cute.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Is it only for men? Where did you get it?": [
    {
      text: "Do you want it?",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Internet shopping.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's not available for sale.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Is it scary to get a shot? Does it make you cry, mister?": [
    {
      text: "I cry like a baby.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I endure it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "I like shots.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Is there a reason why I just can't beat you?": [
    {
      text: "I'm younger, that's all.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I've totally got girl power.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Figure it out yourself.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Is there really any benefit for me if I joined with you?": [
    {
      text: "I think there is.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I can't promise that.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's a matter of feeling.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Isn't that just like when a human woman gets married and moves in with her husband?": [
    {
      text: "That's right.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "No.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I love someone else.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Isn't that kinda... outdated thinking? ": [
    {
      text: "Sorry. ",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's for your own good. ",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's timeless. ",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "It is to become aware of the gaze of our Father, who watches over you with loving grace.": [
    {
      text: "I don't understand.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I feel his gaze.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I prefer a harsher stare.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "It look like you corner me... But how me know this not trick? How me know you really winning?": [
    {
      text: "Because it's the truth.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's a lie.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't know.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "It seems the Son of Man have denounced the word of our father. Tell me, what worth have you found?": [
    {
      text: "I noticed.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I can survive alone.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Find it for me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "It'd prolly be a big downer if the birthday boy didn't show to his party, sooo...": [
    {
      text: "Happy birthday.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I had no idea.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "This'll be your deathday too.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "It's cliched, but we could talk about life... Ask each other things like what sort of girls we're into...": [
    {
      text: "I like older women.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "No preference.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I like men.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "...It's fine. Do as you please.": [
    {
      text: "I need your help.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Lick my boots.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Are you sure it's fine?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "It's hard to tell under the mask, but... you're actually handsome, aren't you?": [
    {
      text: "How did you know?",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No, not all.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I look ok, I guess.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.OK,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "It's no fun going home when only my annoying mom and dad are there.": [
    {
      text: "Parents are annoying.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "You should love your parents.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Why not come to my place?",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "It's pretty rude, man.": [
    {
      text: "No it isn't.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.OK,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "It's part of my face.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "My apologies.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    }
  ],
  "I've been projecting a \"don't speak to me\" aura towards you.": [
    {
      text: "I noticed.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: 'I didn\'t feel an "aura".',
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "But we may never meet again.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "I've heard that love can bloom anywhere, even on a battlefield. Don't you think that's possible?": [
    {
      text: "Can it?",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Definitely not.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What are you saying?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Just thinkin' about hierarchy, you should be showin' me a little more respect, shouldn't you?": [
    {
      text: "You're right, Senpai.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    },
    {
      text: "I never thought about it.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I prefer mutual respect.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  'Know how they say, "Be kind ta yer elders"? Has no one ever taught ya that?': [
    {
      text: "Someone did once.",
      gloomy: NegotiationReactions.Bad,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I don't care.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "I don't want to grow old.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Let me hear you utter words of repentance.": [
    {
      text: "Sorry.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: '"Words of repentance."',
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Not sorry.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Life's nothing but pain anyways. Just do whatever you want.": [
    {
      text: "You should have stayed home.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You won't die easily.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Don't get desperate.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Man, I'm about ta be a victim of that too. Hell, does this country even have a future?": [
    {
      text: "It does.",
      gloomy: NegotiationReactions.Bad,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "Don't expect it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "The elderly have bad manners.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Maybe I should try something new! I don't want to fall into mediocrity, ho...": [
    {
      text: "You're fine as is.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Your act is a bit stale...",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Time for a makeover.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "...Maybe I'll call the police. Maybe I'll tell 'em that you were worse than you actually were!": [
    {
      text: "Call them. I dare you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Please don't.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "It was self-defense.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Maybe kids got spanked a long time ago, but people don't do that anymore, right?": [
    {
      text: "I didn't know that.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "You need a good spanking.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Some things are timeless.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    }
  ],
  "Me am really in soup, now. Do what you want. Me am ready if you want grill me, so...": [
    {
      text: "I'll make you into soup.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I don't want to eat you.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'll mince you.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Me guessing you have power that me not have. But what is it...?": [
    {
      text: "Academics.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Empathy.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Girl power.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Me not curse you, but me curse your commander! Me curse the one who order you...!": [
    {
      text: "This was my choice.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "Fighting me is bad luck.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Just try to escape.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Me not understand in what way you superior to me...": [
    {
      text: "Youthfulness.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Cuteness.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Luckiness.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Me really want to eat something.": [
    {
      text: "Do not mock me.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Same goes for me",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Want to order something?",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.OK,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    }
  ],
  "Me want to ask some recommendations, so me can at least imagine.": [
    {
      text: "Bread soaked in coffee.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I don't have any.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "Hunger is the best ingredient.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  'Me want you to give me some nice "words of compassion"-as my rival- as me pass away...!': [
    {
      text: "Die in peace.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Why show mercy to my enemy?",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "...I got nothing.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "My chest is beating so fast. What is this feeling?": [
    {
      text: "Are you alright?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You're making it up.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's love.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  'My horoscope said I was going to have "relationship difficulties" today.': [
    {
      text: "Looks like it came true.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's just a horoscope.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "How is your luck in romance?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "My only choice now... is to retire, ho.": [
    {
      text: "That's too far.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "What are your plans?",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You had a good run...",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Name a calamity that you can bear.": [
    {
      text: "Make it crowded where I shop.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Give me violence.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No calamities, please.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "No matter the crime, humans treat it more lightly if the perpetrator is a minor, do they not?": [
    {
      text: "That's not true.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Age doesn't matter.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "This isn't extreme.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Now, people don't even know who lives next door to them. Shouldn't we know our neighbors better?": [
    {
      text: "It's saddening.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't really think about it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Privacy is important.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Oh, they're so self-assured that they'll be so successful in the future. Are you like that, child?": [
    {
      text: "That's right.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's not true.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What's wrong with that?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Ooh, what if this leaves a scar and it's permanent?": [
    {
      text: "Sorry...",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Just get plastic surgery.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'll take responsibility.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Out of respect for our Father, let us take a moment's respite...": [
    {
      text: "If you want to.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What do you want to say?",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I'm a minor.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Seriously, cosplaying in a place like this? Are you just bored outta your mind?": [
    {
      text: "I am.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.OK,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm actually very busy.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    },
    {
      text: "Shut up!",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "She said, \"I'll buy it for you on the way home,\" but she didn't but it for me! Isn't that not fair?": [
    {
      text: "It's unfair.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "It's your fault for being tricked.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Be more persistent.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "She said, \"I'll buy it for you on the way home,\" but she didn't buy it for me! That's SO unfair, right?!": [
    {
      text: "That's not unfair.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's your fault for being tricked.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "I'll buy it for you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "...So, I'm sorry, but can I go and fix my bangs first?": [
    {
      text: "Quit joking around.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You're fine as you are.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's pointless.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "So... I'm sorry, but can I go and fix my bangs first? ": [
    {
      text: "Quit joking around.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You're fine as you are.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's pointless.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "So me am going to haunt you for the rest of your life. Me always right behind you...": [
    {
      text: "That would be troublesome.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I could carry that weight.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't get it...",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "...So uh, instead of killin' me, you started chattin' with me... You tryin' to get somethin' from me?": [
    {
      text: "Yup.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "No... Nothing at all...",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Dance for me!",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "...So? What's going to happen to me now?": [
    {
      text: "You'll be killed.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What do you want to happen?",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "It's a secret.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "So who're you tryin' to impress with that mask?": [
    {
      text: "Nobody.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Shuddup...",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "I'm actually still young...",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "So why me in this situation right now? Why me at your mercy?": [
    {
      text: "Times have changed.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Humans are powerful.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "This is a difficult topic...",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    }
  ],
  "So... You enjoy teasing older women like this?": [
    {
      text: "I had no intention. ",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It is fun, actually.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "I'm serious.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Some old people refuse to make use of special seats reserved for the elderly. What do you think of that?": [
    {
      text: "No problem with it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "They shouldn't push themselves.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "They must be young inside.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Somethin' bad happen in yer life or somethin', sonny?": [
    {
      text: "It's not like that.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I got bad luck.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Shut up.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.OK,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    }
  ],
  "Something about people putting honey on cucumbers to feel like they're eating fancy cantaloupe?": [
    {
      text: "I follow those tips.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's depressing.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Never heard of that.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Sorry, but I want you to go hee-home now. I'm already feeling so tired and weary, ho...": [
    {
      text: "Sorry.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "No.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You go home.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Taking that into consideration, do you still want me?": [
    {
      text: "That's right.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I didn't think that far.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "The feelings will come.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  'Tell me, what does "equal footing" mean to you?': [
    {
      text: "Not talking down to people.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "Sharing household chores.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Splitting all the costs.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "That power, it originates from our Father. Thus, is it not reasonable to repay him for the favor?": [
    {
      text: "I never considered it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "This power is all mine.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't know.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "That's wack, man. Maybe you should get your head checked out.": [
    {
      text: "I probably should.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Now way.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm going feral!",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    }
  ],
  "The truth is... You're a good person, aren't you?": [
    {
      text: "I get that a lot.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Actually... I'm bad.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Are you mocking me?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "The way you treat me, though, is giving me mixed messages. How to you really feel about me?": [
    {
      text: "You're beautiful.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "You're scary.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Nothing in particular.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    }
  ],
  "There something you want say to me, right?": [
    {
      text: "I want you.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Not really.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Let me touch your paw.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "They always give the guy a katsudon! You got anything like that for me!?": [
    {
      text: "Katsudon, coming right up.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm the interrogator here.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I have nothing for you.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    }
  ],
  "They wear sleeveless shirts in the winter, right? What do you think about that, dearie?": [
    {
      text: "It's what's in.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "They miss seasonal changes.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't care.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Think carefully. I am not the one you should detest.": [
    {
      text: "You're right.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "[...]",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "[...]",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Think carefully. I cannot be destroyed. Desist form this pointlessness.": [
    {
      text: "What are you talking about?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's absurd.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Then I desist.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "This is all some kind of TV thing, hee-ho! Where's the camera?": [
    {
      text: "Wow, you got me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "What's all this now?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "This is real.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    }
  ],
  'This is that "domestic violins" thing, right?': [
    {
      text: 'That\'s "domestic violence."',
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "What? No, you're wrong...",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Um, are things okay at home?",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Bad,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    }
  ],
  "To tell you the hee-truth, this is all an act, ho. What do you think I'm really like, ho?": [
    {
      text: "I can't image it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Don't care.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You're fine as is.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "To view me as an enemy is to incur our Father's wrath. Man's future rests in your hands.": [
    {
      text: "Leave the future to me.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I need your guidance.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't get it.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Today I have what you humans call a girl's night out.": [
    {
      text: "Quit messing with me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "Should I go instead?",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Girls...?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "...Um, this has been buggin' me for a while, but... Is it me, or does something stink?": [
    {
      text: "It's just you.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "It's coming from you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "I smell a lie.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "...Um, why're you going' for me? Ain't there worse people out there? What kind of guys piss you off?": [
    {
      text: "Slow walkers.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Loud talkers...",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Nobody.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "...Very well. In the place of our Father, I shall listen to your complaints.": [
    {
      text: "Why can't we end war?",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No complaints here.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "I can't get a girlfriend.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Vow that you will use that power in the name of our Father.": [
    {
      text: "I'll think about it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No need to be so dramatic.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I decline.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Well, I need to see myself home soon... ": [
    {
      text: "Just go home.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What do you mean?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Don't lie to me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Well, I'm still here... That guy is really keeping me waiting.": [
    {
      text: "Life isn't like fairy tales.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Just wait a little longer.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You'll never meet him.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "We'll just say you win. So can we stop this?": [
    {
      text: "I feel bad.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I don't agree with this.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Everyone wins.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Well, quite frankly... No one wants you here. You do understand that, right?": [
    {
      text: "I know.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I didn't know that.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Who cares?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "What are we gonna do, huh?": [
    {
      text: "Tag.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Let's play a video game.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Cruise for chicks.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "What did I do to deserve this?": [
    {
      text: "It's karma for your evil deeds.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Don't play the victim.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Nothing in particular.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "What did you want, coming all the way to a place like this?": [
    {
      text: "A thrilling adventure.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "A treasure hunt.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "Slaughter.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "What do ya usually eat?": [
    {
      text: "Curry.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "All sorts of things.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Protein.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "What do you hope to accomplish by injuring me further...?": [
    {
      text: "More sleep.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Popularity.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "There's no end if I start.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "What do you think about humans showing pictures of their baby to others?": [
    {
      text: "It's cute.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm not interested.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What are you talking about?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "What has brought you to a place like this? What are you seeking?": [
    {
      text: "An adventure.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Nothing, really.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "A killing spree.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "What if I was a human? Then, what you're doing... well, it'd be a criminal act!": [
    {
      text: "That's true...",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "That can't be true.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's irrelevant.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "What in the hell are ya tryin' ta tell me, anyway?": [
    {
      text: "You're going to die.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Why do we fight?",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I don't really know...",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.OK
    }
  ],
  "What is irritating you so much?": [
    {
      text: "Rotten adults.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Egotistical women.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm not irritated.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.OK,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    }
  ],
  'What kinda "fate" do ya think there is in this meetin\' between me and you?': [
    {
      text: "Fate brought us together.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "There is no such thing.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I want to end this fate.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  'What kinda "hospitality" will you show me at the end of my life?': [
    {
      text: "You won't suffer long.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "A coupon for a massage by me.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'll quietly be at your side.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "What kinda guys piss you off?": [
    {
      text: "Pissy guys.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Guys with no sense of humor. ",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I never get mad. ",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "What should I wear?": [
    {
      text: "A High School Outfit.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "A Kimono.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Don't wear anything.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    }
  ],
  "What was that, anyway?": [
    {
      text: "A love letter.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "A threat letter.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "A coupon.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    }
  ],
  "What was... the cause of my defeat?": [
    {
      text: "Your lack of resolve.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Just bad luck.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm not telling.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "What you thinking now?": [
    {
      text: "How to negotiate..",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Nothing.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "How can I get popular?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "What're you gonna tell your kids about this shit?": [
    {
      text: "It was a hard-fought battle.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It was an easy win.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'll forget it happened.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "What's gonna happen to me?": [
    {
      text: "I'll make mincemeat of you.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'll play nice.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'll be your dominatrix.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "What's it like to be all kissy face with somebody?": [
    {
      text: "It's incredible...",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "I shouldn't tell you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Ask your parents.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "What's wrong with the way I look, huh?": [
    {
      text: "You tempt people.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    },
    {
      text: "You're ugly.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Nothing's wrong.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "When I was young, I could make anyone back off-if they were smart enough-with just my glare.": [
    {
      text: "That's so neat.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm just that good.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "You've grown old.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "When it came right down to it, you couldn't do anything to me!": [
    {
      text: "I could.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "How could you tell?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "What do you want me to do?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    }
  ],
  "When you eat curry, mister, what do you like to add?": [
    {
      text: "Soy sauce.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Worcestershire sauce.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't add anything.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "When you were little, what did you wanna be when you grow up?": [
    {
      text: "A pro athlete.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I had no dream.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    },
    {
      text: "A winner in society.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    }
  ],
  "Where do babies come from?": [
    {
      text: "Storks deliver them.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Ask your parents.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "The love between two people.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Where should I go? I want something yummy, ho!": [
    {
      text: "A place with no wait.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "A place with western toilets.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "You won't survive.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Who the blazes do you think you are?": [
    {
      text: "I feel bad about that.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm ME!",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I don't owe you an answer.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "Why did you come to this dangerous place? Isn't it safer in the real world?": [
    {
      text: "I've got business here.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm here for the loot.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Just 'cause.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  'Why do they like "making out"?': [
    {
      text: "How should I know?",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I can't tell you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    },
    {
      text: "Ask your parents.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Why have you decided to be more communicative with me?": [
    {
      text: "Your looks.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "You seemed useful.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "No particular reason.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Why you come all the way here?": [
    {
      text: "For a treasure hunt.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "For girls.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I just felt like it.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.OK
    }
  ],
  "Why you fight and put yourself in harm's way?": [
    {
      text: "I want to get stronger.",
      gloomy: NegotiationReactions.Bad,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Because I see an enemy.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I don't actually know.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.OK
    }
  ],
  "Why you keep trampling here? What you humans thinking?": [
    {
      text: "I'm sorry.",
      gloomy: NegotiationReactions.Bad,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Should I take off my shoes?",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Shut up.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.OK
    }
  ],
  "Why you not care for me like that? Why you treat me like this, then?": [
    {
      text: "You look scary.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I want to cherish you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "You're not a beast.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    }
  ],
  "Why you wear mask to fight, anyway?": [
    {
      text: "I care about my looks.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "It keeps my foes' blood off.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "That's what I want to know.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Why're you so desperate?": [
    {
      text: "I don't want to die.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "There's something I must do.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "I want girls to like me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Won't you just leave me be?": [
    {
      text: "Fine, I will.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Good,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "I can't just leave you.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.OK,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "Is that reverse psychology?",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Would you be willing to spend time and money to see people you haven't contacted for years?": [
    {
      text: "I suppose so.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Sounds like a drag.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No one invites me to reunions.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "Would you do to anyone else what you're doing to me now?": [
    {
      text: "I sure would.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No, I wouldn't.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "This is a special exception.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "Wouldn't your girlfriend get jealous if she could see us?": [
    {
      text: "No need to worry.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's only bad if I get caught.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "I don't have a girlfriend.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "Y'know, if I'm gonna be killed, I'd rather be offed by a beautiful, classy lady.": [
    {
      text: "Sorry.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "You don't get to be picky.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's all the same.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "...Y'know what I'm gettin' at, right? Ya think ya could let me go see my girl?": [
    {
      text: "Nope.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'll consider it.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "What kind of girl is she?",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "You better enjoy and be drunk on victory while you can. It not last long.": [
    {
      text: "I'll just keep winning.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You're just a sore loser.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I can't drink, I'm underage.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You carry a gun because you think it'll make you more popular with the girls?": [
    {
      text: "That's right.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "It won't?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "It's for self-improvement.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    }
  ],
  "You didn't stray from the path or get lost?": [
    {
      text: "I downloaded an app.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "Well, I got a little lost.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't remember.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You do realize it's useless to go waving that thing around aimlessly?": [
    {
      text: "I know.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Don't act so tough.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Not as useless as you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You do understand that we are here because of people like you, right?": [
    {
      text: "I never thought of that.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I understand.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Bad,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    },
    {
      text: "What do you mean?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.OK,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    }
  ],
  "You given much thought, what if you go to place where you could die at any moment?": [
    {
      text: "I've thought about it.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I don't want kids.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.OK,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "I'm not comfortable with this.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.OK
    }
  ],
  "You go back to your mother's arms. You need take nap now.": [
    {
      text: "I'm not that young.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm not sleepy.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "After I'm done with this.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    }
  ],
  "You had something you lost, and you not know how important it was until after it gone, right?": [
    {
      text: "My pal who switched schools.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "My ex-girlfriend...",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Quiet, I'm killing you now.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You have appeared to test my adoration of our Father. Yes, you are... the Tempter": [
    {
      text: "You got me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You're mistaken.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Are you okay?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You have wishes you not can let go of, even after you die?": [
    {
      text: "Everyone's happiness.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "A grand funeral.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I won't die.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.OK
    }
  ],
  "You, however are talking to me right here. Are you the exception to this rule?": [
    {
      text: "I'm not special.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "That's right.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      upbeat: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      }
    },
    {
      text: "I have ulterior motives.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "You knocked me down, and now my goddamn watch is broken!": [
    {
      text: "My apologies.",
      gloomy: NegotiationReactions.Bad,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "Like I care.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Bad,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: 'You should "watch" your mouth.',
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  "You know, a mascot's life isn't hee-easy. Are you sure you could handle all the adversity, ho?": [
    {
      text: "I'm ready for it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "What kind of adversity?",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "You're a mascot?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You know, if I were to whip something up for you, what would you want?": [
    {
      text: "Meat and potatoes.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "I don't need homemade food.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Can you actually cook?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    }
  ],
  "You know, if you're willin' to let this go... I'll make it worth your while.": [
    {
      text: "Worth my while?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "No, thanks.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "I already get enough, actually.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "You must be one of those delinquents I hear about. Do you have poor grades in school?": [
    {
      text: "I'm a straight-A student.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "They're not great...",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "At least I'm popular.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You new? Did you get hee-hired, ho?": [
    {
      text: "Yeah! Nice you meetcha!",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm a transfer student.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "No.",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You not worry you get in trouble if those groups hear what you are doing to me?": [
    {
      text: "That's true.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I don't mind.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "It's for love.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "You were so sure of yourself, so it's embarrassing now to admit you're struggling here. Right?": [
    {
      text: "That's right.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "No.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Don't make fun of me.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You, who reside in that world of the almighty, what is it that has beleaguered you so?": [
    {
      text: "Omnipotent?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm not beleaguered.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "There's someone I want to save.",
      gloomy: NegotiationReactions.Neutral,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "You will receive punishment for treating me this way, mark my words.": [
    {
      text: "I'm sorry.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "I'm prepared for the worst.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "How much do you want?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Bad,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Good
    }
  ],
  "You'd have no idea I was about to use my ultimate move.": [
    {
      text: "For real!?",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      timid: NegotiationReactions.Good,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    },
    {
      text: "That's worrying... ",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "...Try me.",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You'll have a bleak future if you spend too much time running around pretending to be a phantom thief.": [
    {
      text: "Thank you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "Don't worry about it.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "It's worth it.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.OK,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You'll probably break down in tears when you see my angry face. I'm a real monstrosity, ho!": [
    {
      text: "That's scary...",
      gloomy: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    },
    {
      text: "I would never cry.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    },
    {
      text: "I want to see your fury.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      }
    }
  ],
  "You're a big bully! don't you think that's \"immature\"?": [
    {
      text: "Now that you mention it...",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: {
        rate: NegotiationReactions.Good,
        unconfirmed: true
      },
      upbeat: NegotiationReactions.Good
    },
    {
      text: "No, I don't think so.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm not mature anyway.",
      gloomy: NegotiationReactions.Good,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    }
  ],
  "You're hitting on me, right? Don't you think you're totally doing it wrong?": [
    {
      text: "Nothing wrong about it.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "What's the right way, then?",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm not hitting on you.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You're lucky it was just me. You can't do anything like this in the real world, right?": [
    {
      text: "That's right.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I choose my targets carefully.",
      gloomy: NegotiationReactions.OK,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I'm serious about this.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You're showing off your strength to me, aren't you? I total-hee read your mind, ho.": [
    {
      text: "You're misunderstanding.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "The hell are you saying?",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "Make me your apprentice.",
      gloomy: {
        rate: NegotiationReactions.OK,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: NegotiationReactions.Neutral
    }
  ],
  "You're s'posed to go easy on kids! Are you stupid? Do you go to school and get stupid grades?": [
    {
      text: "I'm smart.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "I'm good at PE.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "Shut up.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.OK
    }
  ],
  "You're violatin' the weapons code or whatever, man.": [
    {
      text: "I didn't know.",
      gloomy: NegotiationReactions.Good,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.OK
    },
    {
      text: "It's for self-defense.",
      gloomy: NegotiationReactions.Bad,
      irritable: NegotiationReactions.Good,
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Bad
    },
    {
      text: "Pretty cool, huh?",
      gloomy: NegotiationReactions.OK,
      irritable: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      timid: NegotiationReactions.OK,
      upbeat: NegotiationReactions.Good
    }
  ],
  " ...You've come from some other company to scout me-hee out. There's no mistaking it, ho!": [
    {
      text: "You got me.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Good,
      upbeat: NegotiationReactions.Good
    },
    {
      text: "It's a misunderstanding.",
      gloomy: NegotiationReactions.Neutral,
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Bad,
      upbeat: NegotiationReactions.Neutral
    },
    {
      text: "I've come to finish you off.",
      gloomy: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      },
      irritable: NegotiationReactions.Neutral,
      timid: NegotiationReactions.Neutral,
      upbeat: {
        rate: NegotiationReactions.Bad,
        unconfirmed: true
      }
    }
  ]
};
export default Negotiations;
