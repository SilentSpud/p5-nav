export interface Answer {
  text: string;
  gloomy: Reaction | ReactionLevel;
  irritable: Reaction | ReactionLevel;
  timid: Reaction | ReactionLevel;
  upbeat: Reaction | ReactionLevel;
}
export interface Reaction {
  unconfirmed?: boolean;
  rate: ReactionLevel;
}
export enum ReactionLevel {
  Bad = 0,
  Neutral = 1,
  OK = 2,
  Good = 3
}
export interface NegotiationList {
  [question: string]: Answer[];
}

const Negotiations: NegotiationList = {
  "A bad rep spreads like wildfire. If I were you, I'd quit all this nonsense. What's the point?": [
    {
      text: "You're right.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I don't care.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "I don't know any other way.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "After all, isn't it not pitiable when one denies one's own feelings?": [
    {
      text: "It is a difficult topic.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "But the outcome is clear.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's mature to admit defeat.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    }
  ],
  "After confronting me like this... Are you that kind of human too?": [
    {
      text: "You've got a point.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "So what?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's not my style.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Ah, it's a shame. If I'd taken this seriously from the start, I wouldn't be in this sorry state.": [
    {
      text: "Then get serious now.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Making excuses?",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I wasn't trying either.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    }
  ],
  "Ah, so I suppose you commit such extreme acts because you know you won't be punished harshly...": [
    {
      text: "I'm sorry.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Age doesn't matter.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "This isn't extreme.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    }
  ],
  "Ain't people your age suppose'ta be out on dates and stuff instead?": [
    {
      text: "Right after this, kid.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Such a rude little boy...",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Dating's not important.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    }
  ],
  "And if that's the case, why don't you just stop this futile endeavor? It's meaningless...": [
    {
      text: "You have a point there...",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I can't stop.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'll find meaning in it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Are all the kids these days doin' stuff like this?": [
    {
      text: "Yeah, we sure are.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No, I thought this up myself.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.OK,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Want to join in?",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Are you bored?": [
    {
      text: "Yes, I'm bored.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm actually pretty busy.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I never thought about it.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Are you fighting to help or protect the world or something?": [
    {
      text: "That's right.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I won't tell you.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It pays the bills.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "As far as you're concerned, what kind of person was I to you?": [
    {
      text: "My rival.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Nobody, really.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It doesn't matter.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "...But be-hee-fore all that, let's enjoy a little chat, ho!": [
    {
      text: "All right, I suppose.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "There's no need for that.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "[...]",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "But before you do, do something funny. What can you do?": [
    {
      text: "Impressions.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Making funny faces.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Nothing.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "But is it fair to the others if I find this happiness, leaving them all in the dust?": [
    {
      text: "I think it's fine.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What's wrong with that?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You're too self-conscious.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "But I've been around the block, so I know--there's something else you want from me, isn't there?": [
    {
      text: "Nope.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I just love the elderly.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I just want you to die happy.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "But I've got a catch phrase that I'm famous for.": [
    {
      text: "Hee-ho!",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "Hee-haw!",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Personaaa!",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "But this way of life in this world is all I've ever known.": [
    {
      text: "It's not meaningless.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "There are other ways to live.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "You had a good run.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "But what if I ripped your body apart? ...What color blood would come pouring out?": [
    {
      text: "Red.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "Green.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I don't bleed or cry.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Bad,
      timid: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Can you sacrifice yourself in order to demonstrate your adoration of our Father?": [
    {
      text: "I can.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I can't.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't adore him.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Can you sacrifice yourself in order to demonstrate your veneration of our Father?": [
    {
      text: "I can certainly try.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No can do.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What's veneration?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Care to explain yourself? I certainly hope you have a good reason for this boorish treatment.": [
    {
      text: "That would take a while.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "There's no need to explain.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Just shut up...",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    }
  ],
  "C'mon, what's with the mask? Kinda cringy, don'tcha think?": [
    {
      text: "Sure is.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Shut up...",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I'm secretly a kid.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "Confess your sins.": [
    {
      text: "I apologize.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I think... I was wrong.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No chance.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Could this be what humans call a proposal...?": [
    {
      text: "I'm surprised you knew.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "No, it's not.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's a myth.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Couldn't ya at least make me a cup of tea or somethin'? Hell, that'd be real polite.": [
    {
      text: "So sorry.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "Brew your own.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm not known for being polite.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    }
  ],
  "Did I just see your hand shaking? Isn't your guilt tormenting you?": [
    {
      text: "It's just a chill.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Yeah, I can't take it...",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Shut up.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Did I... lose?": [
    {
      text: "Yup...",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Not sure yet.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Nah, you totally won.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    }
  ],
  "Didn't you feel like that when you were a kid, too?": [
    {
      text: "It's not so bad-olescent.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Being a kid is tough.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "I don't remember.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Do you have a dish you're good at?": [
    {
      text: "Fried rice.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Mystery meat.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "What are you saying?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Do you have a lot of friends? Ever feel like the things they do are annoying?": [
    {
      text: "Sometimes.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "No.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I have no friends.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "Do you know what I speak of?": [
    {
      text: "Sin...?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Please tell me.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I've done nothing wrong.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Do you seek friendly competition with a beloved neighbor? Or have you come to destroy a hated foe?": [
    {
      text: "You're a beloved neighbor.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "You're a loathsome foe.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You sound preachy.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Do you think they really mean it all the time?": [
    {
      text: "Yes.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No, but they say it anyway.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm cuter than most kids.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Doesn't what you're doing bother your conscience?": [
    {
      text: "Now that you mention it...",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "...Nope",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm past such things.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Don't take this the wrong way, but man... Bein' a carefree kid sure must be nice.": [
    {
      text: "I want to be a kid forever.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I prefer being an adult.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I wish I was still a baby.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Don't you think expecting your would-be victim to be receptive to your words is unreasonable?": [
    {
      text: "I do.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't think its unfair.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Don't fret about it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "Don't you think it's sad that slang and sayings can grow old and get outdated?": [
    {
      text: "That is sad.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't think so.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That just proves you're old.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "For you to force me to prostrate myself, as one who only seeks your well-being... Is there anything more irrational?": [
    {
      text: "My apologies.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't want salvation.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Shut up.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Guess what I want you to read me before you tuck me into bed!": [
    {
      text: "An animal book",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "A story about a Yakuza",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I have no idea",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Had I known things would turn like this, I'd wish I had found the courage to ask that girl out...": [
    {
      text: "It's not too late.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "You never had a chance.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'll make sure she's happy.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Have you made an appointment, ho?": [
    {
      text: "I have.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "That's not it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Just tell me what you know.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "...Heed my words. I am not the one you should detest.": [
    {
      text: "You're right.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's absurd.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I'll be the judge of that.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Hell, I got all sortsa girls lined up if you're into that.": [
    {
      text: "Really?",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "You're trying way too hard.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.OK,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.OK
    },
    {
      text: "I'm not interested.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Bad
    }
  ],
  "Hey. Aren't you hungry? Can we take a break and go eat somewhere?": [
    {
      text: "What're we getting?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Yeah.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Now's not the time.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "Hey, how about this? If you don't shoot me, then I'll kiss you. Not a bad deal, right?": [
    {
      text: "Not a bad idea.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I don't want a kiss.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Have some self-respect.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    }
  ],
  "Hey, if I don't die here, what do you think I'll be like in the future?": [
    {
      text: "A fashionable older woman.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "I can't measure that.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "Living in darkness.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Hey, if ya got any medicine, lend me some. One of them painkillers...": [
    {
      text: "Are you okay?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I have some antacids.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "That won't change anything?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Hey, if you got any medicine, lend me some. They're supposed ta work miracles, right...?": [
    {
      text: "Are you OK?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What kind of medicine?",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That won't change anything?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Hey, is my hair flat? Does it look weird?": [
    {
      text: "It looks cute.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's weird looking.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Who cares?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Hey, let's play a game! Guess what I wanna eat!": [
    {
      text: "Hamburgers.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Humans.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Shut up.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Hey, mister, will you give me a yummy snack to eat?": [
    {
      text: "Later.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No way.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What would you like?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.OK
    }
  ],
  "Hey. So whaddya feel when you think about the future?": [
    {
      text: "An average level of happiness.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Live fast, die young.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Nothing.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.OK
    }
  ],
  "Hey, sonny if somethin's been botherin' you. I'm willin' ta give you a listen.": [
    {
      text: "My relationships...",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I smell sweaty.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I have no worries.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "...Hey, there's no need for all this, right? Let's drop the drama and just go get something to eat. The thought has crossed your mind, hasn't it? Come on, where would you take me?":
    [
      {
        text: "An expensive French restaurant.",
        gloomy: ReactionLevel.Bad,
        irritable: ReactionLevel.Neutral,
        timid: ReactionLevel.Neutral,
        upbeat: ReactionLevel.Neutral
      },
      {
        text: "A busy ramen joint.",
        gloomy: ReactionLevel.Neutral,
        irritable: ReactionLevel.Neutral,
        timid: ReactionLevel.Neutral,
        upbeat: ReactionLevel.Neutral
      },
      {
        text: "Where would you like to go?",
        gloomy: ReactionLevel.Good,
        irritable: ReactionLevel.Neutral,
        timid: ReactionLevel.Neutral,
        upbeat: ReactionLevel.Neutral
      }
    ],
  "Hey. Why aren't ya at school?": [
    {
      text: "It's after school.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I don't feel like going.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    },
    {
      text: "I actually finished school.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Honestly, aren't I, like, a way better girl than those idols?": [
    {
      text: "You're more unique.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Not really...",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Who cares about idols?",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "How about we live together? What kind of place do you want to live in?": [
    {
      text: "I can't live with you.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Next to a convenience store.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "What are you talking about?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "How 'bout we have an interview? You're the winner, after all. I'll listen to whatever you gotta say.": [
    {
      text: "I feel great.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I want to aim higher.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "Fighting is pointless.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Bad
    }
  ],
  "How 'bout you, sonny? What kinda trip do you wanna take?": [
    {
      text: "A luxury cruise.",
      gloomy: ReactionLevel.Bad,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Don't want to go anywhere.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "A trip to hell.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "How 'bout you? You wanna get married someday?": [
    {
      text: "I do.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "I don't.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "That's impossible.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    }
  ],
  "How can you do such terrible things to a cute hee-ho like me!?": [
    {
      text: "I'm sorry.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Now that you mention it...",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "...Cute?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "How did I lose to you? I mean... I win when it comes to looks, ho.": [
    {
      text: "You're right.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "No, I do.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "It's all about heart.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "How did you find out about me, ho?": [
    {
      text: "Some flyers.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "A speciatly site.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Word of mouth.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    }
  ],
  "Humans always want either an autograph or a self-hee, ho. Which is it, ho?": [
    {
      text: "I want an autograph.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I want a photo.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Give me your credit card.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    }
  ],
  "Humans talk over drinks, right? How 'bout it? Hell, let me buy ya a round, sonny.": [
    {
      text: "Quit messing around.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "You're really paying?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm a minor.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    }
  ],
  "I also have loved ones who would miss me. You do catch my meaning, yes?": [
    {
      text: "I do now.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "That doesn't matter.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm always alone.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I can't sadden my fans, ho. ...You catch my drift, don't you?": [
    {
      text: "I'm rooting for you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Tell me.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You have no fans.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I coulda been a star...": [
    {
      text: "A star?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "That's not happening.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Are you giving up?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    }
  ],
  "I don't hate you. No, I don't feel that way at all...": [
    {
      text: "Is that so?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Too late.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Then let's hold hands.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    }
  ],
  "I fear neither death, nor you.": [
    {
      text: "In your situation?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "You're tough.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Don't push yourself.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    }
  ],
  "...I gotta ask. How do you work out?": [
    {
      text: "I don't really train.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I just have a knack for it.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "At a gym from hell.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "I guess women are really more social these days, finding so many fun things to do outside the home.": [
    {
      text: "That's so true.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Men are social too.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Is that so?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I insist you surrender yourself to the authorities.": [
    {
      text: "This is a misunderstanding.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I apologize.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "You've got the wrong idea.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "I know when I'm gettin' all sweaty. I'm glistenin', ain't I?": [
    {
      text: "Like a disco ball.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "Not at all.",
      gloomy: ReactionLevel.Bad,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Why does that matter?",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.OK
    }
  ],
  "I lost. Here I lay, at your feet, at your mercy. Just what do you want from me?": [
    {
      text: "Give me something.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "Grovel before me.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "I don't know.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I mean, how does it feel to wave your gun at an enemy who's completely lost the will to fight?": [
    {
      text: "It's not bad.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "...I could get used to it.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "It pains my heart...",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I need to recover, ho. Don't you feel that way too?": [
    {
      text: "Yeah, sometimes.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Battle is what soothes me.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Quit whining.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I occasionally wish to pamper myself as a reward for working hard. How would you do that?": [
    {
      text: "Relax at home.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "Go impulse shopping.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Don't be so selfish.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I suppose it makes no difference if you kill me or if I die just a little bit later, dearie.": [
    {
      text: "That's right",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That isn't true",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's still a long ways off",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I suppose that's why I feel so confused, child. After all, why am I being treated like this?": [
    {
      text: "Because you resisted.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "It can't be helped.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Holidays don't matter.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  'I suppose this "real world" where you come from must be fairly boring.': [
    {
      text: "You're right.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It keeps me busy.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "It's better than here.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "I think dying alone isn't so bad dearie, but isn't living alone in the first place the real tragedy?": [
    {
      text: "I don't think so.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Maybe you're right.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Being alone is a luxury.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  'I think the way you\'re treating me is "overfamiliar." I think...': [
    {
      text: "We are friends.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "What's wrong with that?",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's because you're cute.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I wanted to go on vacation, too, before all this happened...": [
    {
      text: "That's too bad.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "What are you getting at?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "You have a boyfriend?",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "I wish I could see what kind of parents raised you to run loose and wreak havoc like this.": [
    {
      text: "I'll introduce you to them later.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I won't show you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Leave my parents out of this.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I wish they would leave us old people alone. After all, it's not like we have much time left.": [
    {
      text: "I agree.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Speak for yourself.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "There's an aging boom...",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I wonder how things might have been between us if cicumstances were different somehow.": [
    {
      text: "We wouldn't have been enemies.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "We'd have gotten married.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Nothing would've changed.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    }
  ],
  "I wonder how things might have been between us if circumstances had been different somehow?": [
    {
      text: "We would have dated.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "We'd have gotten married.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Nothing would've changed.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I wonder if it's about time I quit this job.": [
    {
      text: "Hang in there.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's a good idea.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "And then what?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I wonder if us speaking together like this now means that we are somehow connected...": [
    {
      text: "It could be.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No way.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.OK
    },
    {
      text: "It's fate.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I would never have accepted this task if I knew it would involve this sort of suffering.": [
    {
      text: "That's a pity...",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Uninformed choices are bad.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Complaining won't help.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "If so, then won't you overlook this? Let's make a deal...": [
    {
      text: "All right.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "A deal with the enemy?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I can't trust you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "If that's the plan, well, you better make sure I'm satisfied.": [
    {
      text: "Don't toy with me.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Bad
    },
    {
      text: "You're not making sense.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "What would you like?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    }
  ],
  "If that's true, then I don't think there's any real point in killing me...": [
    {
      text: "Of course, there's a point.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You're right",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Then who's the real enemy?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "If yer gonna kill me, do me a solid and make it quick.": [
    {
      text: "Aren't you scared?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I'll have some more fun first.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I won't make you suffer.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    }
  ],
  "If you ask me, it's a lot more fun ta go chasin' after younger ladies, but...": [
    {
      text: "This is true.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's not very fun.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You dirty old man.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "If you capture me, what you going to do to me?": [
    {
      text: "Take pride in capturing you",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Use you to decorate the hall",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Nothing.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    }
  ],
  'If your girlfriend asked if you wanted to have dinner with "everybody", what you you say?': [
    {
      text: "Sure.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm busy.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What are you talking about?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  'If your girlfriend asked if you were free to have dinner with her "friends", what would you say?': [
    {
      text: "Sure.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm busy.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "What are you talking about?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "If your parents could see you now, I'm sure it would break their hearts...": [
    {
      text: "You might be right...",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "This doesn't involve them.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Actually, they'd rejoice.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "I'll go out with you just for today if there are no strings attached.": [
    {
      text: "If it pleases you.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "No strings attached?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I've got enough on my plate...",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "I'm a super popular Shadow, you hee-know. My fans won't just sit around and take this, ho.": [
    {
      text: "Please forgive me.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Fans?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "So what?",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I'm busy, ho. It's tough being so popular.": [
    {
      text: "You do sound busy.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Your popularity won't last.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Who cares?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    }
  ],
  "I'm inclined to turn you down, but if you still wish to speak, I will perhaps consider it.": [
    {
      text: "You have nothing I want.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Do you have time?",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Bad,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    },
    {
      text: "Don't turn me down.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    }
  ],
  "I'm just putting this out there, but you wouldn't treat me this way if I were younger, right? ...It's true, isn't it?": [
    {
      text: "It's not true.",
      gloomy: ReactionLevel.Bad,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Maybe.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Cougars are all the rage now.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "...I'm not going to go easy on you for doing something like this, you know...": [
    {
      text: "I'm sorry.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    },
    {
      text: "Prepare for the worst.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "How much do you want?",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    }
  ],
  "I'm not the one you should want to shoot...": [
    {
      text: "You've got a point there...",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Not necessarily.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Anyone will do.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I'm sure a miracle's gonna happen to me, right?": [
    {
      text: "Miracles don't exist.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'd be jealous if it did.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I'm waiting.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "I'm sure there're other people in the world who'd irritate you more. C'mon, tell me.": [
    {
      text: "Older people trying to look young.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    },
    {
      text: "No one bothers me.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I hate everyone.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I'm thinking that maybe I can be more grandmotherly. How can I go ahead and do that for you?": [
    {
      text: "Make me a homemade meal.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Scold me every so often.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You don't have to do anything.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I'm tired of being a kid. Didn't you feel that way when you were little, too?": [
    {
      text: "Sure did.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Not really.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I want to be a kid forever.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    }
  ],
  "I'm well-connected, okay? I know some people that are pretty complicated.": [
    {
      text: "I want to meet them.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Complicated...?",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Liar.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "In the end, killin' me's just a waste of yer time and energy. You get what I'm sayin', right?": [
    {
      text: "When you put it that way...",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's not a waste.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Enemies must be eliminated.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Is it because I'm not acting mature enough? Like, what the heck makes someone mature, anyway?": [
    {
      text: "Being old enough to drink.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "Paying your own rent.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Questioning maturity.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "Is it 'cause I wasn't a \"good kid\"?": [
    {
      text: "Yes.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It has nothing to do with this.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    }
  ],
  "Is it just me, or does something stink?": [
    {
      text: "It's just you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's coming from you.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I smell a lie.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Is it not a breeding ground for impudent humans? How do you view this world of yours?": [
    {
      text: "Full of corrupt adults.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Plenty of places to shop.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Looks normal to me.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Is it not possible for this series of events involving you and me to be attributed to that?": [
    {
      text: "Fair enough.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "That is incorrect.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.OK,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "What are you talking about?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Is it okay if I get mad right now?": [
    {
      text: "Do it.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Please don't.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You're so cute.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Is it only for men? Where did you get it?": [
    {
      text: "Do you want it?",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Internet shopping.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's not available for sale.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Is it scary to get a shot? Does it make you cry, mister?": [
    {
      text: "I cry like a baby.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I endure it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "I like shots.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Is there a reason why I just can't beat you?": [
    {
      text: "I'm younger, that's all.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I've totally got girl power.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Figure it out yourself.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Is there really any benefit for me if I joined with you?": [
    {
      text: "I think there is.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.OK
    },
    {
      text: "I can't promise that.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's a matter of feeling.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Isn't that just like when a human woman gets married and moves in with her husband?": [
    {
      text: "That's right.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "No.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I love someone else.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Isn't that kinda... outdated thinking? ": [
    {
      text: "Sorry. ",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's for your own good. ",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's timeless. ",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "It is to become aware of the gaze of our Father, who watches over you with loving grace.": [
    {
      text: "I don't understand.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I feel his gaze.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I prefer a harsher stare.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "It look like you corner me... But how me know this not trick? How me know you really winning?": [
    {
      text: "Because it's the truth.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's a lie.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't know.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "It seems the Son of Man have denounced the word of our father. Tell me, what worth have you found?": [
    {
      text: "I noticed.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I can survive alone.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Find it for me.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "It'd prolly be a big downer if the birthday boy didn't show to his party, sooo...": [
    {
      text: "Happy birthday.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I had no idea.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "This'll be your deathday too.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "It's cliched, but we could talk about life... Ask each other things like what sort of girls we're into...": [
    {
      text: "I like older women.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "No preference.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I like men.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "...It's fine. Do as you please.": [
    {
      text: "I need your help.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Lick my boots.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Are you sure it's fine?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "It's hard to tell under the mask, but... you're actually handsome, aren't you?": [
    {
      text: "How did you know?",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No, not all.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I look ok, I guess.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.OK,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "It's no fun going home when only my annoying mom and dad are there.": [
    {
      text: "Parents are annoying.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "You should love your parents.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Why not come to my place?",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "It's pretty rude, man.": [
    {
      text: "No it isn't.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.OK,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "It's part of my face.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "My apologies.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    }
  ],
  "I've been projecting a \"don't speak to me\" aura towards you.": [
    {
      text: "I noticed.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: 'I didn\'t feel an "aura".',
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "But we may never meet again.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "I've heard that love can bloom anywhere, even on a battlefield. Don't you think that's possible?": [
    {
      text: "Can it?",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Definitely not.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What are you saying?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Just thinkin' about hierarchy, you should be showin' me a little more respect, shouldn't you?": [
    {
      text: "You're right, Senpai.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    },
    {
      text: "I never thought about it.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I prefer mutual respect.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    }
  ],
  'Know how they say, "Be kind ta yer elders"? Has no one ever taught ya that?': [
    {
      text: "Someone did once.",
      gloomy: ReactionLevel.Bad,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I don't care.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "I don't want to grow old.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Good
    }
  ],
  "Let me hear you utter words of repentance.": [
    {
      text: "Sorry.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: '"Words of repentance."',
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Not sorry.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Life's nothing but pain anyways. Just do whatever you want.": [
    {
      text: "You should have stayed home.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You won't die easily.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Don't get desperate.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Man, I'm about ta be a victim of that too. Hell, does this country even have a future?": [
    {
      text: "It does.",
      gloomy: ReactionLevel.Bad,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "Don't expect it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "The elderly have bad manners.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Maybe I should try something new! I don't want to fall into mediocrity, ho...": [
    {
      text: "You're fine as is.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Your act is a bit stale...",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Time for a makeover.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "...Maybe I'll call the police. Maybe I'll tell 'em that you were worse than you actually were!": [
    {
      text: "Call them. I dare you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Please don't.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "It was self-defense.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Maybe kids got spanked a long time ago, but people don't do that anymore, right?": [
    {
      text: "I didn't know that.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "You need a good spanking.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Some things are timeless.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    }
  ],
  "Me am really in soup, now. Do what you want. Me am ready if you want grill me, so...": [
    {
      text: "I'll make you into soup.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I don't want to eat you.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'll mince you.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Me guessing you have power that me not have. But what is it...?": [
    {
      text: "Academics.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Empathy.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Girl power.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "Me not curse you, but me curse your commander! Me curse the one who order you...!": [
    {
      text: "This was my choice.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "Fighting me is bad luck.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Just try to escape.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Me not understand in what way you superior to me...": [
    {
      text: "Youthfulness.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Cuteness.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Luckiness.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Me really want to eat something.": [
    {
      text: "Do not mock me.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Same goes for me",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Want to order something?",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.OK,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    }
  ],
  "Me want to ask some recommendations, so me can at least imagine.": [
    {
      text: "Bread soaked in coffee.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    },
    {
      text: "I don't have any.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "Hunger is the best ingredient.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  'Me want you to give me some nice "words of compassion"-as my rival- as me pass away...!': [
    {
      text: "Die in peace.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Why show mercy to my enemy?",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "...I got nothing.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "My chest is beating so fast. What is this feeling?": [
    {
      text: "Are you alright?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You're making it up.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's love.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  'My horoscope said I was going to have "relationship difficulties" today.': [
    {
      text: "Looks like it came true.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's just a horoscope.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "How is your luck in romance?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "My only choice now... is to retire, ho.": [
    {
      text: "That's too far.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "What are your plans?",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You had a good run...",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Name a calamity that you can bear.": [
    {
      text: "Make it crowded where I shop.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Give me violence.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No calamities, please.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    }
  ],
  "No matter the crime, humans treat it more lightly if the perpetrator is a minor, do they not?": [
    {
      text: "That's not true.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Age doesn't matter.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "This isn't extreme.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Now, people don't even know who lives next door to them. Shouldn't we know our neighbors better?": [
    {
      text: "It's saddening.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't really think about it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Privacy is important.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Oh, they're so self-assured that they'll be so successful in the future. Are you like that, child?": [
    {
      text: "That's right.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's not true.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What's wrong with that?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Ooh, what if this leaves a scar and it's permanent?": [
    {
      text: "Sorry...",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Just get plastic surgery.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'll take responsibility.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    }
  ],
  "Out of respect for our Father, let us take a moment's respite...": [
    {
      text: "If you want to.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What do you want to say?",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I'm a minor.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Seriously, cosplaying in a place like this? Are you just bored outta your mind?": [
    {
      text: "I am.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.OK,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm actually very busy.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    },
    {
      text: "Shut up!",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    }
  ],
  "She said, \"I'll buy it for you on the way home,\" but she didn't but it for me! Isn't that not fair?": [
    {
      text: "It's unfair.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "It's your fault for being tricked.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Be more persistent.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "She said, \"I'll buy it for you on the way home,\" but she didn't buy it for me! That's SO unfair, right?!": [
    {
      text: "That's not unfair.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's your fault for being tricked.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "I'll buy it for you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "...So, I'm sorry, but can I go and fix my bangs first?": [
    {
      text: "Quit joking around.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You're fine as you are.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's pointless.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "So... I'm sorry, but can I go and fix my bangs first? ": [
    {
      text: "Quit joking around.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You're fine as you are.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's pointless.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "So me am going to haunt you for the rest of your life. Me always right behind you...": [
    {
      text: "That would be troublesome.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I could carry that weight.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't get it...",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "...So uh, instead of killin' me, you started chattin' with me... You tryin' to get somethin' from me?": [
    {
      text: "Yup.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "No... Nothing at all...",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Dance for me!",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "...So? What's going to happen to me now?": [
    {
      text: "You'll be killed.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What do you want to happen?",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "It's a secret.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "So who're you tryin' to impress with that mask?": [
    {
      text: "Nobody.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Shuddup...",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "I'm actually still young...",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "So why me in this situation right now? Why me at your mercy?": [
    {
      text: "Times have changed.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Humans are powerful.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "This is a difficult topic...",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    }
  ],
  "So... You enjoy teasing older women like this?": [
    {
      text: "I had no intention. ",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It is fun, actually.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "I'm serious.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Some old people refuse to make use of special seats reserved for the elderly. What do you think of that?": [
    {
      text: "No problem with it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "They shouldn't push themselves.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "They must be young inside.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Somethin' bad happen in yer life or somethin', sonny?": [
    {
      text: "It's not like that.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I got bad luck.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Shut up.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.OK,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    }
  ],
  "Something about people putting honey on cucumbers to feel like they're eating fancy cantaloupe?": [
    {
      text: "I follow those tips.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's depressing.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Never heard of that.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Sorry, but I want you to go hee-home now. I'm already feeling so tired and weary, ho...": [
    {
      text: "Sorry.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "No.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You go home.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Taking that into consideration, do you still want me?": [
    {
      text: "That's right.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I didn't think that far.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "The feelings will come.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  'Tell me, what does "equal footing" mean to you?': [
    {
      text: "Not talking down to people.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "Sharing household chores.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Splitting all the costs.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "That power, it originates from our Father. Thus, is it not reasonable to repay him for the favor?": [
    {
      text: "I never considered it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "This power is all mine.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't know.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "That's wack, man. Maybe you should get your head checked out.": [
    {
      text: "I probably should.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Now way.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm going feral!",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    }
  ],
  "The truth is... You're a good person, aren't you?": [
    {
      text: "I get that a lot.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Actually... I'm bad.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Are you mocking me?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "The way you treat me, though, is giving me mixed messages. How to you really feel about me?": [
    {
      text: "You're beautiful.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "You're scary.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Nothing in particular.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    }
  ],
  "There something you want say to me, right?": [
    {
      text: "I want you.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Not really.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Let me touch your paw.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "They always give the guy a katsudon! You got anything like that for me!?": [
    {
      text: "Katsudon, coming right up.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm the interrogator here.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I have nothing for you.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    }
  ],
  "They wear sleeveless shirts in the winter, right? What do you think about that, dearie?": [
    {
      text: "It's what's in.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "They miss seasonal changes.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't care.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Think carefully. I am not the one you should detest.": [
    {
      text: "You're right.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "[...]",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "[...]",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Think carefully. I cannot be destroyed. Desist form this pointlessness.": [
    {
      text: "What are you talking about?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's absurd.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Then I desist.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "This is all some kind of TV thing, hee-ho! Where's the camera?": [
    {
      text: "Wow, you got me.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    },
    {
      text: "What's all this now?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "This is real.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    }
  ],
  'This is that "domestic violins" thing, right?': [
    {
      text: 'That\'s "domestic violence."',
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "What? No, you're wrong...",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Um, are things okay at home?",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Bad,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    }
  ],
  "To tell you the hee-truth, this is all an act, ho. What do you think I'm really like, ho?": [
    {
      text: "I can't image it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Don't care.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You're fine as is.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "To view me as an enemy is to incur our Father's wrath. Man's future rests in your hands.": [
    {
      text: "Leave the future to me.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I need your guidance.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't get it.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Today I have what you humans call a girl's night out.": [
    {
      text: "Quit messing with me.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "Should I go instead?",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Girls...?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "...Um, this has been buggin' me for a while, but... Is it me, or does something stink?": [
    {
      text: "It's just you.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "It's coming from you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "I smell a lie.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "...Um, why're you going' for me? Ain't there worse people out there? What kind of guys piss you off?": [
    {
      text: "Slow walkers.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Loud talkers...",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Nobody.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    }
  ],
  "...Very well. In the place of our Father, I shall listen to your complaints.": [
    {
      text: "Why can't we end war?",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No complaints here.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "I can't get a girlfriend.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Vow that you will use that power in the name of our Father.": [
    {
      text: "I'll think about it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No need to be so dramatic.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I decline.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Well, I need to see myself home soon... ": [
    {
      text: "Just go home.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What do you mean?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Don't lie to me.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Well, I'm still here... That guy is really keeping me waiting.": [
    {
      text: "Life isn't like fairy tales.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Just wait a little longer.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You'll never meet him.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "We'll just say you win. So can we stop this?": [
    {
      text: "I feel bad.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I don't agree with this.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Everyone wins.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Well, quite frankly... No one wants you here. You do understand that, right?": [
    {
      text: "I know.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I didn't know that.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Who cares?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "What are we gonna do, huh?": [
    {
      text: "Tag.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Let's play a video game.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Cruise for chicks.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "What did I do to deserve this?": [
    {
      text: "It's karma for your evil deeds.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Don't play the victim.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Nothing in particular.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "What did you want, coming all the way to a place like this?": [
    {
      text: "A thrilling adventure.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "A treasure hunt.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "Slaughter.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "What do ya usually eat?": [
    {
      text: "Curry.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "All sorts of things.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.OK
    },
    {
      text: "Protein.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "What do you hope to accomplish by injuring me further...?": [
    {
      text: "More sleep.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Popularity.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "There's no end if I start.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "What do you think about humans showing pictures of their baby to others?": [
    {
      text: "It's cute.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm not interested.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What are you talking about?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "What has brought you to a place like this? What are you seeking?": [
    {
      text: "An adventure.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Nothing, really.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "A killing spree.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "What if I was a human? Then, what you're doing... well, it'd be a criminal act!": [
    {
      text: "That's true...",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "That can't be true.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's irrelevant.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "What in the hell are ya tryin' ta tell me, anyway?": [
    {
      text: "You're going to die.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Why do we fight?",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I don't really know...",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.OK
    }
  ],
  "What is irritating you so much?": [
    {
      text: "Rotten adults.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Egotistical women.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm not irritated.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.OK,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    }
  ],
  'What kinda "fate" do ya think there is in this meetin\' between me and you?': [
    {
      text: "Fate brought us together.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "There is no such thing.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.OK
    },
    {
      text: "I want to end this fate.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  'What kinda "hospitality" will you show me at the end of my life?': [
    {
      text: "You won't suffer long.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "A coupon for a massage by me.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'll quietly be at your side.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "What kinda guys piss you off?": [
    {
      text: "Pissy guys.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Guys with no sense of humor. ",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I never get mad. ",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    }
  ],
  "What should I wear?": [
    {
      text: "A High School Outfit.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "A Kimono.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Don't wear anything.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    }
  ],
  "What was that, anyway?": [
    {
      text: "A love letter.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "A threat letter.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "A coupon.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    }
  ],
  "What was... the cause of my defeat?": [
    {
      text: "Your lack of resolve.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Just bad luck.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm not telling.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "What you thinking now?": [
    {
      text: "How to negotiate..",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Nothing.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "How can I get popular?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "What're you gonna tell your kids about this shit?": [
    {
      text: "It was a hard-fought battle.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It was an easy win.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'll forget it happened.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "What's gonna happen to me?": [
    {
      text: "I'll make mincemeat of you.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'll play nice.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'll be your dominatrix.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "What's it like to be all kissy face with somebody?": [
    {
      text: "It's incredible...",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "I shouldn't tell you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Ask your parents.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "What's wrong with the way I look, huh?": [
    {
      text: "You tempt people.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    },
    {
      text: "You're ugly.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Nothing's wrong.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    }
  ],
  "When I was young, I could make anyone back off-if they were smart enough-with just my glare.": [
    {
      text: "That's so neat.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm just that good.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "You've grown old.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "When it came right down to it, you couldn't do anything to me!": [
    {
      text: "I could.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.OK
    },
    {
      text: "How could you tell?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "What do you want me to do?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    }
  ],
  "When you eat curry, mister, what do you like to add?": [
    {
      text: "Soy sauce.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    },
    {
      text: "Worcestershire sauce.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't add anything.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    }
  ],
  "When you were little, what did you wanna be when you grow up?": [
    {
      text: "A pro athlete.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I had no dream.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    },
    {
      text: "A winner in society.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    }
  ],
  "Where do babies come from?": [
    {
      text: "Storks deliver them.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Ask your parents.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "The love between two people.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    }
  ],
  "Where should I go? I want something yummy, ho!": [
    {
      text: "A place with no wait.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "A place with western toilets.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "You won't survive.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Who the blazes do you think you are?": [
    {
      text: "I feel bad about that.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm ME!",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I don't owe you an answer.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    }
  ],
  "Why did you come to this dangerous place? Isn't it safer in the real world?": [
    {
      text: "I've got business here.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm here for the loot.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Just 'cause.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  'Why do they like "making out"?': [
    {
      text: "How should I know?",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I can't tell you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    },
    {
      text: "Ask your parents.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Why have you decided to be more communicative with me?": [
    {
      text: "Your looks.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "You seemed useful.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "No particular reason.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Why you come all the way here?": [
    {
      text: "For a treasure hunt.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "For girls.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I just felt like it.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.OK
    }
  ],
  "Why you fight and put yourself in harm's way?": [
    {
      text: "I want to get stronger.",
      gloomy: ReactionLevel.Bad,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Because I see an enemy.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      upbeat: ReactionLevel.OK
    },
    {
      text: "I don't actually know.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.OK
    }
  ],
  "Why you keep trampling here? What you humans thinking?": [
    {
      text: "I'm sorry.",
      gloomy: ReactionLevel.Bad,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Should I take off my shoes?",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Shut up.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.OK
    }
  ],
  "Why you not care for me like that? Why you treat me like this, then?": [
    {
      text: "You look scary.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I want to cherish you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "You're not a beast.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    }
  ],
  "Why you wear mask to fight, anyway?": [
    {
      text: "I care about my looks.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "It keeps my foes' blood off.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "That's what I want to know.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Why're you so desperate?": [
    {
      text: "I don't want to die.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "There's something I must do.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "I want girls to like me.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "Won't you just leave me be?": [
    {
      text: "Fine, I will.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Good,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Bad
    },
    {
      text: "I can't just leave you.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.OK,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "Is that reverse psychology?",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Would you be willing to spend time and money to see people you haven't contacted for years?": [
    {
      text: "I suppose so.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Sounds like a drag.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No one invites me to reunions.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "Would you do to anyone else what you're doing to me now?": [
    {
      text: "I sure would.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No, I wouldn't.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "This is a special exception.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "Wouldn't your girlfriend get jealous if she could see us?": [
    {
      text: "No need to worry.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's only bad if I get caught.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "I don't have a girlfriend.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "Y'know, if I'm gonna be killed, I'd rather be offed by a beautiful, classy lady.": [
    {
      text: "Sorry.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "You don't get to be picky.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's all the same.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "...Y'know what I'm gettin' at, right? Ya think ya could let me go see my girl?": [
    {
      text: "Nope.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'll consider it.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "What kind of girl is she?",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "You better enjoy and be drunk on victory while you can. It not last long.": [
    {
      text: "I'll just keep winning.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You're just a sore loser.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I can't drink, I'm underage.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You carry a gun because you think it'll make you more popular with the girls?": [
    {
      text: "That's right.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    },
    {
      text: "It won't?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "It's for self-improvement.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    }
  ],
  "You didn't stray from the path or get lost?": [
    {
      text: "I downloaded an app.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "Well, I got a little lost.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't remember.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You do realize it's useless to go waving that thing around aimlessly?": [
    {
      text: "I know.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Don't act so tough.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Not as useless as you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You do understand that we are here because of people like you, right?": [
    {
      text: "I never thought of that.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I understand.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Bad,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    },
    {
      text: "What do you mean?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.OK,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    }
  ],
  "You given much thought, what if you go to place where you could die at any moment?": [
    {
      text: "I've thought about it.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I don't want kids.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.OK,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "I'm not comfortable with this.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.OK
    }
  ],
  "You go back to your mother's arms. You need take nap now.": [
    {
      text: "I'm not that young.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm not sleepy.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "After I'm done with this.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    }
  ],
  "You had something you lost, and you not know how important it was until after it gone, right?": [
    {
      text: "My pal who switched schools.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "My ex-girlfriend...",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Quiet, I'm killing you now.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You have appeared to test my adoration of our Father. Yes, you are... the Tempter": [
    {
      text: "You got me.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You're mistaken.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Are you okay?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You have wishes you not can let go of, even after you die?": [
    {
      text: "Everyone's happiness.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "A grand funeral.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I won't die.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.OK
    }
  ],
  "You, however are talking to me right here. Are you the exception to this rule?": [
    {
      text: "I'm not special.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "That's right.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      upbeat: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      }
    },
    {
      text: "I have ulterior motives.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "You knocked me down, and now my goddamn watch is broken!": [
    {
      text: "My apologies.",
      gloomy: ReactionLevel.Bad,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "Like I care.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Bad,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: 'You should "watch" your mouth.',
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  "You know, a mascot's life isn't hee-easy. Are you sure you could handle all the adversity, ho?": [
    {
      text: "I'm ready for it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "What kind of adversity?",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "You're a mascot?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You know, if I were to whip something up for you, what would you want?": [
    {
      text: "Meat and potatoes.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "I don't need homemade food.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Can you actually cook?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    }
  ],
  "You know, if you're willin' to let this go... I'll make it worth your while.": [
    {
      text: "Worth my while?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "No, thanks.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "I already get enough, actually.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "You must be one of those delinquents I hear about. Do you have poor grades in school?": [
    {
      text: "I'm a straight-A student.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "They're not great...",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "At least I'm popular.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You new? Did you get hee-hired, ho?": [
    {
      text: "Yeah! Nice you meetcha!",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm a transfer student.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "No.",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You not worry you get in trouble if those groups hear what you are doing to me?": [
    {
      text: "That's true.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I don't mind.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.OK
    },
    {
      text: "It's for love.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "You were so sure of yourself, so it's embarrassing now to admit you're struggling here. Right?": [
    {
      text: "That's right.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "No.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Don't make fun of me.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You, who reside in that world of the almighty, what is it that has beleaguered you so?": [
    {
      text: "Omnipotent?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm not beleaguered.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "There's someone I want to save.",
      gloomy: ReactionLevel.Neutral,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "You will receive punishment for treating me this way, mark my words.": [
    {
      text: "I'm sorry.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "I'm prepared for the worst.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "How much do you want?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Bad,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Good
    }
  ],
  "You'd have no idea I was about to use my ultimate move.": [
    {
      text: "For real!?",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      timid: ReactionLevel.Good,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    },
    {
      text: "That's worrying... ",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "...Try me.",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You'll have a bleak future if you spend too much time running around pretending to be a phantom thief.": [
    {
      text: "Thank you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "Don't worry about it.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "It's worth it.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.OK,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You'll probably break down in tears when you see my angry face. I'm a real monstrosity, ho!": [
    {
      text: "That's scary...",
      gloomy: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    },
    {
      text: "I would never cry.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    },
    {
      text: "I want to see your fury.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      }
    }
  ],
  "You're a big bully! don't you think that's \"immature\"?": [
    {
      text: "Now that you mention it...",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: {
        rate: ReactionLevel.Good,
        unconfirmed: true
      },
      upbeat: ReactionLevel.Good
    },
    {
      text: "No, I don't think so.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm not mature anyway.",
      gloomy: ReactionLevel.Good,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    }
  ],
  "You're hitting on me, right? Don't you think you're totally doing it wrong?": [
    {
      text: "Nothing wrong about it.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "What's the right way, then?",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm not hitting on you.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You're lucky it was just me. You can't do anything like this in the real world, right?": [
    {
      text: "That's right.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I choose my targets carefully.",
      gloomy: ReactionLevel.OK,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I'm serious about this.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You're showing off your strength to me, aren't you? I total-hee read your mind, ho.": [
    {
      text: "You're misunderstanding.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "The hell are you saying?",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "Make me your apprentice.",
      gloomy: {
        rate: ReactionLevel.OK,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: ReactionLevel.Neutral
    }
  ],
  "You're s'posed to go easy on kids! Are you stupid? Do you go to school and get stupid grades?": [
    {
      text: "I'm smart.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "I'm good at PE.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "Shut up.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.OK
    }
  ],
  "You're violatin' the weapons code or whatever, man.": [
    {
      text: "I didn't know.",
      gloomy: ReactionLevel.Good,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.OK
    },
    {
      text: "It's for self-defense.",
      gloomy: ReactionLevel.Bad,
      irritable: ReactionLevel.Good,
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Bad
    },
    {
      text: "Pretty cool, huh?",
      gloomy: ReactionLevel.OK,
      irritable: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      timid: ReactionLevel.OK,
      upbeat: ReactionLevel.Good
    }
  ],
  " ...You've come from some other company to scout me-hee out. There's no mistaking it, ho!": [
    {
      text: "You got me.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Good,
      upbeat: ReactionLevel.Good
    },
    {
      text: "It's a misunderstanding.",
      gloomy: ReactionLevel.Neutral,
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Bad,
      upbeat: ReactionLevel.Neutral
    },
    {
      text: "I've come to finish you off.",
      gloomy: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      },
      irritable: ReactionLevel.Neutral,
      timid: ReactionLevel.Neutral,
      upbeat: {
        rate: ReactionLevel.Bad,
        unconfirmed: true
      }
    }
  ]
};
export default Negotiations;
