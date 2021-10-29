export interface Requirements {
  story?: boolean;
  trueEnding?: boolean;
  date?: string;
  courage?: number | "max";
  charm?: number | "max";
  proficiency?: number | "max";
  kindness?: number | "max";
  knowledge?: number | "max";
}
export interface Benefit {
  rank: number | "max" | "royal";
  description: string;
}
export interface Question {
  [answerText: string]: Answer;
}
export interface Answer {
  points?: number;
  romance?: boolean;
  bad?: boolean;
  end?: boolean;
}
export interface RankMetadata {
  requirements?: Requirements;
  unlock?: string;
  romance?: boolean;
}

export interface Rank {
  [questionNumber: string]: Question | RankMetadata;
  meta?: RankMetadata;
}

export interface Confidant {
  character: string;
  benefits: {
    [name: string]: Benefit;
  };
  questions: {
    [rank: string]: Rank;
  };
}
export interface ConfidantList {
  [name: string]: Confidant;
}
const Confidants: ConfidantList = {
  chariot: {
    character: "Ryuji Sakamoto",
    benefits: {
      "Baton Pass": {
        rank: 2,
        description: "Allows you to pass your turn over to other Baton Pass users after 1 More."
      },
      "Follow Up": {
        rank: 3,
        description: "Chance to perform a follow-up attack if Joker’s attack does not down the enemy."
      },
      "Punk Talk": {
        rank: 4,
        description: "Chance to step in after Shadow negotiation fails, allowing a retry."
      },
      "Harisen Recovery": {
        rank: 6,
        description: "Chance to cure status ailments inflicted upon party members."
      },
      "Insta-kill": {
        rank: 7,
        description: "Chance to instantly win a battle after a successful ambush."
      },
      Endure: {
        rank: 8,
        description: "Chance to withstand an otherwise fatal attack with 1 HP remaining."
      },
      Protect: {
        rank: 9,
        description: "Chance to shield Joker from an otherwise fatal attack."
      },
      "Second Awakening": {
        rank: "max",
        description: "Transforms his Persona into a mythological trickster."
      }
    },
    questions: {
      "2": {
        "1": {
          "I'm counting on you.": {
            points: 3
          },
          "You seem pretty excited.": {
            points: 3
          },
          "Help with what?": {
            points: 2
          }
        },
        "2": {
          "What about them?": {},
          "And then you punched him?": {}
        },
        "3": {
          "Do you want to go back?": {
            points: 2
          },
          "Do you regret it?": {
            points: 2
          }
        },
        followup: {
          "You're already fast enough.": {
            points: 2
          },
          "Are your legs okay?": {
            points: 2
          },
          "It's never too late, man.": {
            points: 2
          }
        }
      },
      "3": {
        "1": {
          "Let's not fight.": {
            points: 2
          },
          "Want to train with us?": {},
          "It's nice to meet you.": {}
        },
        "2": {
          "Calm down, Ryuji.": {
            points: 3
          },
          "Just endure it.": {
            points: 2
          },
          "I'll shut them up.": {}
        },
        followup: {
          "I can't exactly blame you.": {
            points: 2
          },
          "Violence is not the answer.": {},
          "Yeah, that'd be best.": {}
        }
      },
      "4": {
        "1": {
          "Nakaoka?": {},
          "Are you worried about him?": {
            points: 2
          },
          "Just leave him be.": {}
        },
        "2": {
          "But you're doing great.": {
            points: 3
          },
          "It's not so bad.": {
            points: 2
          },
          "I know how you feel.": {
            points: 3
          }
        }
      },
      "5": {
        "1": {
          "A towel?": {
            points: 2
          },
          "Protein powder?": {
            points: 3
          }
        },
        "2": {
          "You seem conflicted.": {
            points: 2
          },
          "Do you want to rejoin?": {
            points: 2
          },
          "You're done with them, right?": {}
        },
        "3": {
          "So he's short?": {
            points: 2
          },
          "So he's an asshole?": {
            points: 3
          }
        },
        followup: {
          "Don't worry. I gotcha.": {
            points: 2
          },
          "I haven't agreed to anything.": {},
          "Fine, but you're buying ramen.": {}
        }
      },
      "6": {
        "1": {
          "Let's stay here.": {
            points: 2
          },
          "How about Protein Lovers?": {
            points: 2
          },
          "We can train at my place.": {
            points: 3
          }
        },
        "2": {
          "You guys should trust Nakaoka.": {
            points: 3
          },
          "This is no time for arguing.": {
            points: 3
          }
        },
        "3": {
          "Absolutely.": {
            points: 3
          },
          "More or less.": {
            points: 3
          },
          "Not in the slightest.": {}
        },
        "4": {
          "I don't get it.": {},
          "Can you explain that?": {}
        },
        "5": {
          "...Huh?": {},
          "I really don't understand.": {}
        },
        followup: {
          "Sounds like you two were close.": {},
          "Just like you.": {},
          "So he should've punched back?": {
            points: 2
          }
        }
      },
      "7": {
        "1": {
          "Should we change his heart?": {},
          "Let's talk to Takeishi.": {
            points: 3
          }
        },
        "2": {
          "I think it's cool, Ryuji.": {
            points: 3
          },
          "Wait, what?": {
            points: 2
          }
        },
        followup: {
          "Never know until you try": {
            points: 2
          },
          "It's out of our hands.": {},
          "We'll use force if we have to.": {}
        }
      },
      "8": {
        "1": {
          "What if they start fighting?": {},
          "I doubt they'll believe you.": {}
        },
        "2": {
          "Things turned out for the best.": {
            points: 3
          },
          "You deserved it.": {
            points: 3
          }
        },
        "3": {
          "All I did was watch.": {
            points: 3
          },
          "Are you gonna pay me back?": {
            points: 2
          }
        },
        "4": {
          "But I was just standing here...": {
            points: 2
          },
          "You weren't cool though.": {
            points: 3
          }
        },
        followup: {
          "You did a great job.": {},
          "So. Closed case?": {
            points: 2
          },
          "We make a good team too.": {}
        }
      },
      "9": {
        "1": {
          "Are you satisfied now?": {
            points: 3
          },
          "Not Running?": {
            points: 2
          }
        },
        "2": {
          "What did you say?": {
            points: 2
          },
          "Do you have any time for that?": {
            points: 2
          },
          "Don't do it.": {
            points: 3
          }
        },
        "3": {
          "You're Right.": {
            points: 3
          },
          "I never realized that.": {
            points: 3
          }
        },
        "4": {
          "I agree.": {
            points: 2
          },
          "Be more specific.": {},
          "And where is this place?": {}
        },
        followup: {
          "Congratulations.": {
            points: 2
          },
          "Got him under control, how?": {},
          "Better watch out for them.": {
            points: 2
          }
        }
      },
      max: {
        "1": {
          "I'm looking forward to it.": {
            points: 3
          },
          "We can't lose either.": {
            points: 3
          }
        },
        "2": {
          "You're welcome.": {},
          "It's all because of you.": {}
        }
      }
    }
  },
  councillor: {
    character: "Takuto Maruki",
    benefits: {
      "Detox X": {
        rank: 2,
        description: "When Joker is inflicted with an ailment, he may recover immediately."
      },
      Flow: {
        rank: 3,
        description: "Chance to receive the effects of Charge and Concentrate at the start of battle."
      },
      Mindfulness: {
        rank: 5,
        description: "Chance to restore Joker’s SP when it is low."
      },
      "Flow Boost": {
        rank: 7,
        description: "Raises the chance of Flow succeeding."
      },
      "Detox DX": {
        rank: 9,
        description: "Raises the chance of Detox X succeeding."
      }
    },
    questions: {
      "2": {
        "1": {
          "Didn't have much choice.": {},
          "We made a deal.": {
            points: 2
          },
          "I'm a little nervous.": {
            points: 2
          }
        },
        "2": {
          "It's in the past.": {},
          "I'm doing okay now.": {},
          "So much for privacy.": {}
        },
        "3": {
          "But it sounds right.": {
            points: 3
          },
          "Yep.": {
            points: 2
          },
          "Kinda creeping me out here.": {}
        },
        "4": {
          "So... what?": {},
          "I'll need more details.": {},
          "Uh...": {}
        },
        "5": {
          "Well, okay.": {
            points: 2
          },
          "Better make it worth it.": {},
          "Why me, though?": {}
        }
      },
      "3": {
        "1": {
          "So they have, huh?": {
            points: 2
          },
          "You worry too much.": {},
          "Thanks to you, probably.": {
            points: 2
          }
        },
        "2": {
          "Of course.": {
            points: 2
          },
          "Yeah, for our deal.": {
            points: 2
          },
          "I forgot.": {}
        },
        "3": {
          "When someone betrays me.": {},
          "When I lie.": {},
          "When I get punched.": {}
        },
        "4": {
          "That one seems necessary": {
            points: 2
          },
          "We'd be better off without it.": {},
          "It's a seed for new loves.": {
            points: 2
          }
        },
        "5": {
          "Did that help?": {
            points: 2
          },
          "Don't worry about it.": {
            points: 2
          }
        },
        followup: {
          "Good work over there.": {
            points: 2
          },
          "So you're actually working?": {},
          "Getting to your research now?": {}
        }
      },
      "4": {
        "1": {
          "Where's this coming from?": {},
          "What are you talking about?": {}
        },
        "2": {
          "I know, right...?": {
            points: 3
          },
          "It's not the worst.": {},
          "Talk about a reward.": {
            points: 2
          }
        },
        "3": {
          "That'd be great.": {
            points: 2
          },
          "Is that possible?": {},
          "Is that what you're researching?": {
            points: 3
          }
        },
        "4": {
          "......": {},
          "Are you okay?": {}
        },
        "5": {
          "That's a grand plan.": {
            points: 2
          },
          "You're so kind.": {
            points: 2
          }
        },
        "6": {
          "That sounds fun.": {
            points: 3
          },
          'I\'m not the "free labor" type.': {},
          "Nope.": {}
        },
        followup: {
          "I'm completely fine.": {
            points: 2
          },
          "It's part of our deal, so...": {
            points: 2
          },
          "I'm struggling, to be honest.": {}
        }
      },
      "5": {
        "1": {
          "This looks great!": {
            points: 3
          },
          "How old do you think I am?": {},
          "I could just take cash...": {
            points: 2
          }
        },
        "2": {
          "The one-cookie container.": {},
          "The ten-cookie container.": {},
          "It was a tie.": {}
        },
        "3": {
          "I never considered that.": {},
          "They're getting played.": {
            points: 2
          },
          "You know, you're right.": {
            points: 3
          }
        },
        "4": {
          "My senses lied to me!": {
            points: 2
          },
          "Hey, as long as it tastes good.": {
            points: 2
          },
          "It's a little scary.": {}
        },
        "5": {
          'Not "truth" exactly...': {},
          "I guess so.": {
            points: 2
          },
          "I don't know.": {}
        },
        followup: {
          "I really don't mind.": {
            points: 2
          },
          "Come on, man.": {},
          "It was thought-provoking.": {
            points: 2
          }
        }
      },
      "6": {
        "1": {
          "You wanted to talk?": {},
          "Another cup?": {
            points: 2
          },
          "We've got curry, too.": {
            points: 2
          }
        },
        "2": {
          "I can do that.": {
            points: 3
          },
          "It's a deal.": {
            points: 2
          },
          "I'm not up for this...": {}
        },
        "3": {
          "Isn't that enough?": {},
          "You need more than that?": {}
        },
        "4": {
          "So what CAN we do?": {},
          "It's a hard question...": {},
          "So give up.": {
            points: 2
          }
        },
        "5": {
          "All hearts share some things.": {},
          "What if they're connected?": {}
        },
        "6": {
          "Calm down.": {},
          "Where's this coming from?": {},
          "Cognitive pscience?": {}
        },
        followup: {
          "Calm down.": {
            points: 2
          },
          "What's going on?": {
            points: 2
          },
          "Heavy breathing? Pervert.": {}
        }
      },
      "7": {
        "1": {
          "You really are dedicated.": {
            points: 3
          },
          "Are they even relevant?": {
            points: 3
          },
          "Are you a fan?": {
            points: 3
          }
        },
        "2": {
          "No idea.": {
            points: 3
          },
          "As in, removing them?": {
            points: 3
          },
          "How about you Maruki?": {
            points: 3
          }
        },
        "3": {
          "The change of heart...?": {
            points: 3
          },
          "......": {
            points: 3
          }
        },
        "4": {
          "I have no clue.": {
            points: 3
          },
          "Sounds pretty far-fetched.": {
            points: 3
          },
          "It's intriguing.": {
            points: 3
          }
        }
      },
      "8": {
        "1": {
          "I'm good on cookies, thanks.": {
            points: 2
          },
          "What do you mean?": {
            points: 3
          },
          "Thanks, but I should get going.": {}
        },
        "2": {
          "Ooh, really?": {
            points: 3
          },
          "Can you afford that?": {
            points: 2
          },
          "Sorry, I prefer sushi.": {
            points: 2
          }
        },
        "3": {
          "Thanks for the food!": {
            points: 3
          },
          "Self-control much?": {},
          "This is quite the spread.": {
            points: 2
          }
        },
        "4": {
          "I'm his pupil.": {
            points: 2
          },
          "It's complicated.": {},
          "We've made a deal.": {
            points: 3
          }
        },
        "5": {
          "Congratulations.": {
            points: 3
          },
          "Way to go.": {
            points: 3
          }
        },
        "6": {
          "I sure do.": {
            points: 3
          },
          "Let's celebrate.": {
            points: 3
          }
        },
        "7": {
          "She's a girlfriend of yours?": {},
          "Who's Rumi?": {},
          "Should I leave you two to talk?": {}
        },
        followup: {
          "He's a good friend.": {
            points: 2
          },
          "Learn some independence.": {},
          "You'll get the tab next time.": {}
        }
      },
      "9": {
        "1": {
          "Yeah.": {},
          "Kind of.": {}
        },
        "2": {
          "Kind of sad...": {
            points: 3
          },
          "Is our deal over?": {
            points: 2
          },
          "Well... take care of yourself.": {
            points: 2
          }
        }
      },
      max: {
        meta: {
          requirements: {
            story: true
          }
        }
      }
    }
  },
  death: {
    character: "Tae Takemi",
    benefits: {
      Rejuvenation: {
        rank: 1,
        description: "Increases the selection of healing items at the clinic."
      },
      Sterilization: {
        rank: 3,
        description: "Adds more healing items to the clinic."
      },
      Immunization: {
        rank: 5,
        description: "Adds support items to the inventory at the clinic."
      },
      Discount: {
        rank: 7,
        description: "Decreases the price for all items sold at the clinic."
      },
      Resuscitation: {
        rank: "max",
        description: "Increase the selection of revival items at the clinic."
      }
    },
    questions: {
      "1": {
        followup: {
          "Fine by me.": {
            points: 1
          },
          "Please go easy on me.": {
            points: 3
          },
          "So many pretty lights...": {
            points: 1
          }
        }
      },
      "2": {
        "1": {
          "I have a bad heart.": {
            points: 2
          },
          "We're on a date.": {},
          "I know my rights.": {}
        },
        "2": {
          "I agree.": {
            points: 2
          },
          "Harassment?": {},
          "The Plague?": {}
        },
        meta: {
          requirements: {
            courage: 2
          }
        },
        followup: {
          "I'm totally fine.": {
            points: 2
          },
          "I feel lightheaded": {},
          "I think I have superpowers": {
            points: 2
          }
        }
      },
      "3": {
        "1": {
          "What was that about?": {},
          "Was that an emergency?": {}
        },
        "2": {
          "A medical error?": {},
          "What do you mean?": {}
        },
        "3": {
          "I don't mind.": {
            points: 2
          },
          "Is it true?": {},
          "I need the medicine.": {
            points: 2
          }
        },
        followup: {
          "Of course not.": {
            points: 2
          },
          "I don't think I did...": {},
          "Have you?": {}
        }
      },
      "4": {
        "1": {
          "You'll be OK.": {},
          "Dr. Takemi will help.": {
            points: 2
          }
        },
        "2": {
          "You seem happy.": {
            points: 3
          },
          "You're so kind.": {
            points: 2
          },
          "Why free?": {
            points: 2
          }
        },
        followup: {
          "I'll reflect on my mistakes": {
            points: 2
          },
          "But she ended up okay.": {},
          "Punish me more.": {}
        }
      },
      "5": {
        "1": {
          "They trust you.": {},
          "Was it really your fault?": {}
        },
        "2": {
          "I had no idea.": {},
          "It's not too late.": {}
        },
        "3": {
          "That's good.": {
            points: 3
          },
          "When will it be done?": {
            points: 2
          },
          "... “Probably”?": {}
        },
        followup: {
          "About Miwa-chan?": {
            points: 2
          },
          "About Oyamada?": {},
          "About Crawford-Ende's?": {}
        }
      },
      "6": {
        "1": {
          "Well, someone's popular.": {},
          "You seem annoyed.": {},
          "Did something happen?": {}
        },
        "2": {
          "Having fun?": {},
          "You ARE a genius.": {}
        },
        "3": {
          "You're a masochist.": {},
          "It suits you.": {
            points: 3
          },
          "You're not honest.": {
            points: 2
          }
        },
        followup: {
          "You can count on me.": {
            points: 2
          },
          "I think I'm at my limit...": {},
          "Anything for you.": {
            points: 2
          }
        }
      },
      "7": {
        "1": {
          "This is harassment.": {
            points: 2
          },
          "She's a great doctor.": {
            points: 2
          },
          "Please be quiet.": {
            points: 2
          }
        },
        "2": {
          "Don't lose hope.": {},
          "Let's ask for details.": {},
          "......": {}
        },
        "3": {
          "Just rest for today.": {
            points: 2
          },
          "Anything I can do?": {
            points: 2
          },
          "Let's retaliate.": {}
        },
        "4": {
          "It was inevitable.": {},
          "We all do sometimes.": {
            points: 3
          },
          "I'm glad you did.": {
            points: 2
          }
        }
      },
      "8": {
        "1": {
          "Miwa-chan is alive.": {},
          "Oyamada lied to you.": {}
        },
        "2": {
          "You should hurry.": {
            points: 2
          },
          "Let's get to work, doctor.": {
            points: 3
          },
          "It's not over yet.": {
            points: 3
          }
        },
        "3": {
          "It's for Miwa-chan": {
            points: 3
          },
          "It's for my exams.": {
            points: 2
          },
          "It's for you.": {
            points: 3
          }
        },
        followup: {
          "I'll be cheering you on.": {
            points: 2
          },
          "Don't burn yourself out.": {},
          "Anything else I can do.": {
            points: 2
          }
        }
      },
      "9": {
        "1": {
          "Don't worry about it.": {
            points: 2
          },
          "It was for my exams.": {
            points: 2
          },
          "It was rough.": {
            points: 3
          }
        },
        "2": {
          "That's troubling.": {},
          "And your patients?": {}
        },
        "3": {
          "I wanted to see you.": {
            romance: true
          },
          "It was for my exams.": {
            end: true
          }
        },
        "4": {
          "I love you.": {
            points: 2,
            romance: true
          },
          "What do you think?": {
            end: true
          }
        },
        "5": {
          "It isn't a joke.": {
            points: 3,
            romance: true
          },
          "That sounds good.": {}
        },
        followup: {
          "It's true love.": {},
          "So did you.": {
            points: 2
          },
          "I've always loved you.": {}
        }
      },
      "7.5": {
        "1": {
          "What about Miwa-chan?": {},
          "You OK with this?": {}
        },
        "2": {
          "Don't give up.": {},
          "Anything you can do?": {},
          "I'm your ally.": {
            points: 2
          }
        },
        "3": {
          "You gonna run away?": {},
          "And your patients?": {}
        },
        "4": {
          "What's his full name?": {},
          "Tell me about him.": {}
        },
        "5": {
          "I won't do anything.": {},
          "It's for my research.": {}
        },
        meta: {
          requirements: {
            charm: 4
          }
        }
      },
      max: {
        "1": {
          "Uh, what?": {},
          "Is that a joke?": {}
        },
        "2": {
          "It's a coincidence.": {},
          "I wonder...": {
            points: 2
          },
          "So what if it's true?": {}
        },
        "3": {
          "What kind?": {
            points: 2
          },
          "Yes, please.": {
            points: 3
          }
        },
        meta: {
          romance: true
        }
      }
    }
  },
  devil: {
    character: "Ichiko Ohya",
    benefits: {
      "Rumor-filled Scoop": {
        rank: 1,
        description: "Lessens security level increases, and decreases security level more overnight."
      },
      "Shocking Scoop": {
        rank: 4,
        description: "Delivers the same effect as Rumor-filled Scoop, but to greater effect."
      },
      "Outrageous Scoop": {
        rank: 7,
        description: "Delivers the same effects as Rumor-filled Scoop, but to incredible effect."
      },
      "Legendary Scoop": {
        rank: "max",
        description: "Security level will not increase, and will drop to zero overnight."
      }
    },
    questions: {
      "1": {
        followup: {
          Thanks: {},
          "Sounds like a good time.": {},
          "Doing what?": {}
        }
      },
      "2": {
        "1": {
          "Why do you ask?": {},
          "I don't.": {},
          "Mishima might...": {
            points: 2
          }
        },
        "2": {
          "Worth...?": {},
          "What about their justice?": {}
        },
        "3": {
          "I like the atmosphere.": {},
          "It's for the article.": {
            points: 2
          },
          "Tell me about that incident.": {}
        }
      },
      "3": {
        "1": {
          "Minors couldn't do that stuff.": {},
          "You might be right.": {},
          "You shouldn't make assumptions.": {
            points: 2
          }
        },
        "2": {
          "What's the difference?": {},
          "I'm sure you are.": {}
        },
        "3": {
          "Why not change careers?": {},
          "Maybe you should quit.": {}
        },
        "4": {
          "What was she accused of?": {},
          "What happened?": {},
          "She was falsely accused?": {
            points: 2
          }
        }
      },
      "4": {
        "1": {
          "What's this about?": {},
          "She hasn't done anything wrong.": {}
        },
        "2": {
          "Of course we are.": {
            points: 2
          },
          "Don't tell anybody.": {
            points: 2
          }
        },
        "3": {
          "Our movie is about to start.": {},
          "That's enough.": {},
          "We're dating. Seriously.": {}
        },
        followup: {
          "Leave it to me.": {
            points: 2
          },
          "That was our deal.": {
            points: 2
          },
          "Anything for my girlfriend.": {}
        }
      },
      "5": {
        "1": {
          "Because of your investigation?": {},
          "Because of your incident?": {},
          "Are you sure we're the same?": {}
        },
        "2": {
          "I'm curious.": {},
          "You can trust me.": {}
        },
        "3": {
          "What was the cause of death?": {},
          "Who killed him?": {}
        },
        "4": {
          "That sounds like defamation.": {
            points: 2
          },
          "That's unforgivable.": {
            points: 3
          },
          "How's your search going?": {}
        },
        followup: {
          "I don't mind.": {
            points: 2
          },
          "As long as I'm compensated.": {},
          "I did the same to you.": {}
        }
      },
      "6": {
        "1": {
          "Did something bad happen?": {},
          "Having trouble at work?": {}
        },
        "2": {
          "He must not like you.": {
            points: 2
          },
          "Did he find out?": {}
        },
        "3": {
          "Do you have evidence of that?": {},
          "You should trust in her.": {
            points: 2
          },
          "You might be right.": {}
        },
        "4": {
          "That's the spirit": {
            points: 2
          },
          "You're a great journalist.": {
            points: 2
          },
          "What about your quota?": {}
        },
        followup: {
          "Glad to hear that.": {},
          "Don't work yourself to death.": {},
          "I'll dig up some more for you.": {
            points: 2
          }
        }
      },
      "7": {
        "1": {
          "What was that about?": {},
          "Could it be...?": {}
        },
        "2": {
          "Calm down.": {
            points: 2
          },
          "Don't let him provoke you.": {
            points: 3
          },
          "Let's think of another way.": {
            points: 3
          }
        },
        "3": {
          "You should work on that.": {
            points: 2
          },
          "You're charming as you are.": {
            points: 3
          }
        },
        followup: {
          "That's the spirit.": {
            points: 2
          },
          "Sounds tough.": {},
          "Don't strain yourself.": {}
        }
      },
      "8": {
        "1": {
          "He reflected on his actions.": {},
          "Aren't you happy?": {}
        },
        "2": {
          "Did I? Can't remember.": {},
          "Uh, nope.": {}
        },
        "3": {
          "I'm glad to hear that.": {},
          "Thank god.": {}
        },
        "4": {
          "That's not like you.": {
            points: 3
          },
          "You need pursue the truth.": {
            points: 3
          },
          "I'll go with you.": {
            points: 3
          }
        },
        followup: {
          "Good luck.": {
            points: 2
          },
          "Be careful.": {
            points: 2
          },
          "Grab a souvenir for me.": {}
        }
      },
      "9": {
        "1": {
          "Are you OK?": {},
          "Did you learn the truth?": {}
        },
        "2": {
          "What are you going to do?": {},
          "You're not giving up, are you?": {
            points: 2
          }
        },
        "3": {
          "I can't leave you.": {
            points: 3
          },
          "I want to help.": {
            points: 3
          },
          "I need those articles.": {}
        },
        "4": {
          "Of course not.": {},
          "No way.": {}
        },
        "5": {
          "I took it seriously.": {
            romance: true
          },
          "I didn't take it seriously.": {
            end: true
          }
        },
        "6": {
          "I love you, Ichiko.": {
            romance: true
          },
          "I'm just kidding.": {}
        },
        followup: {
          "I wanted to hear your voice.": {
            points: 2
          },
          "Please don't dump me.": {
            points: 2
          },
          "IloveyouIloveyouIloveyou.": {}
        }
      },
      "7.5": {
        "1": {
          "Like what?": {},
          "You seem tired.": {
            points: 2
          },
          "So... I have a pet cat...": {}
        },
        "2": {
          "What's the chief's name?": {},
          "Tell me more about him.": {}
        }
      },
      max: {
        "1": {
          "You're really earnest.": {
            points: 2
          },
          "Is that entertainment?": {
            points: 3
          },
          "You don't need my info?": {}
        },
        "2": {
          "I'm glad to hear that.": {
            points: 3
          },
          "I'll read the next issue.": {
            points: 3
          }
        },
        "3": {
          "So you knew all along?": {},
          "It's just a coincidence.": {},
          "Lala's the real phantom thief.": {}
        },
        "4": {
          "It's up to you.": {
            points: 3
          },
          "I want to go to your place.": {
            points: 3
          }
        },
        meta: {
          romance: true
        }
      }
    }
  },
  emperor: {
    character: "Yusuke Kitagawa",
    benefits: {},
    questions: {
      "1": {
        followup: {
          "Thanks.": {
            points: 2
          },
          "I'll try not to.": {
            points: 2
          },
          "I'll be asking a lot.": {
            points: 3
          }
        }
      },
      "2": {
        "1": {
          "It's novel.": {
            points: 2
          },
          "It's enigmatic.": {
            points: 2
          },
          "...What is it?": {}
        },
        "2": {
          "I can't wait.": {
            points: 3
          },
          "I hope you're right.": {
            points: 3
          },
          "Will people like it?": {}
        },
        followup: {
          "You're already doing enough.": {
            points: 2
          },
          "I'm looking forward to it.": {},
          "Will you really?": {}
        }
      },
      "3": {
        "1": {
          "That was harsh.": {},
          "What a dick.": {},
          "Don't let it bother you.": {
            points: 2
          }
        },
        "2": {
          "Stop exaggerating.": {},
          "This is just the beginning.": {},
          "Stand up.": {}
        },
        "3": {
          "You're really giving up?": {
            points: 2
          },
          "This isn't like you.": {
            points: 3
          },
          "Stand up, Ysuke.": {}
        },
        "4": {
          "How exactly?": {
            points: 2
          },
          "That's the spirit.": {
            points: 2
          }
        },
        followup: {
          "That's the spirit.": {
            points: 2
          },
          "You're taking this too far.": {},
          "That's all?": {}
        }
      },
      "4": {
        "1": {
          "What are we doing here?": {},
          "Why are we in a boat?": {
            points: 2
          },
          "I should bring a girl here.": {
            points: 2
          }
        },
        "2": {
          "Love comes in all forms.": {
            points: 3
          },
          "Maybe you should train more.": {
            points: 2
          },
          "You have a wild imagination.": {}
        },
        followup: {
          "Don't get discouraged.": {
            points: 2
          },
          "Just keep drawing.": {},
          "You lack love yourself.": {}
        }
      },
      "5": {
        "1": {
          "Make me beautiful.": {},
          "I dunno if I can do it...": {
            points: 2
          },
          "Do you want me to strip?": {
            points: 3
          }
        },
        "2": {
          "I'm sure you will.": {
            points: 3
          },
          "It doesn't look like it.": {
            points: 3
          },
          "Do you want to give up?": {
            points: 2
          }
        },
        followup: {
          "Don't overthink it.": {},
          "You have to keep drawing.": {},
          "There's still hope.": {
            points: 2
          }
        }
      },
      "6": {
        "1": {
          "It feels nostalgic.": {
            points: 2
          },
          "Why are we here again?": {},
          "Are you going in?": {}
        },
        "2": {
          "We should get it fixed.": {},
          "Let's force it open.": {}
        },
        "3": {
          "Are you OK?": {},
          "You're not looking so good.": {}
        },
        "4": {
          "Maybe he was sympathetic.": {
            points: 3
          },
          "He somehow knew you had skill.": {
            points: 2
          },
          "I couldn't possibly tell you.": {
            points: 3
          }
        },
        meta: {
          requirements: {
            proficiency: 4
          }
        },
        followup: {
          "He had a certain dignity.": {
            points: 2
          },
          "He seems reliable.": {},
          "I'm not sure.": {}
        }
      },
      "7": {
        "1": {
          "That's a great name.": {},
          "What do you mean?": {
            points: 2
          },
          "Handsome...?": {}
        },
        "2": {
          "The truth is within you.": {
            points: 3
          },
          "Money is important.": {}
        },
        followup: {
          "Calm down.": {
            points: 2
          },
          "It's not a crime to enjoy sushi.": {
            points: 2
          },
          "Let's go again sometime.": {}
        }
      },
      "8": {
        "1": {
          "Scenery is always nice.": {},
          "I'd say Morgana.": {},
          "It has to be Ann.": {
            points: 2
          }
        },
        "2": {
          "What's wrong with that?": {
            points: 2
          },
          "The same applies to everyone.": {},
          "You've really grown, Yusuke.": {
            points: 3
          }
        }
      },
      "9": {
        "1": {
          "Her love for her son.": {
            points: 3
          },
          "The pain of separation.": {
            points: 3
          },
          "I don't know.": {
            points: 2
          }
        },
        "2": {
          "You've really changed, Yusuke.": {
            points: 3
          },
          "That's a great idea.": {
            points: 2
          },
          "It won't be easy.": {}
        }
      },
      max: {
        "1": {
          "It turned out well.": {},
          "So you added hope?": {}
        },
        "2": {
          "You provoked Yusuke on purpose?": {},
          "Are you scheming something?": {}
        },
        "3": {
          "“He”?": {},
          "Do you mean Madarame?": {}
        },
        "4": {
          "He was a good man deep down.": {
            points: 3
          },
          "That was another aspect of him.": {
            points: 3
          }
        },
        "5": {
          "Yeah...": {},
          "You're stranger, Yusuke.": {},
          "Are you sure about this?": {}
        }
      }
    }
  },
  empress: {
    character: "Haru Okumura",
    benefits: {
      Cultivation: {
        rank: 1,
        description: "Allows you to grow vegetables with Haru on the Shujin Academy rooftop."
      },
      "Baton Pass": {
        rank: 2,
        description: "Allows you to pass your turn over to other Baton Pass users after 1 More."
      },
      "Follow Up": {
        rank: 3,
        description: "Chance to perform a follow-up attack if Joker’s attack does not down the enemy.."
      },
      "Celebrity Talk": {
        rank: 4,
        description: "Chance to step in after Shadow negotiation fails, allowing a retry."
      },
      "Bumper Crop": {
        rank: 5,
        description: "Increases the total vegetable yield for a single harvest."
      },
      "Harisen Recovery": {
        rank: 6,
        description: "Chance to cure status ailments inflicted upon party members."
      },
      "Soil Improvement": {
        rank: 7,
        description: "Decreases the total amount of time it takes to cultivate vegetables."
      },
      Endure: {
        rank: 8,
        description: "Chance to withstand an otherwise fatal attack with 1 HP remaining."
      },
      Protect: {
        rank: 9,
        description: "Chance to shield Joker from an otherwise fatal attack."
      },
      "Second Awakening": {
        rank: "max",
        description: "Transforms her Persona into a mythological trickster."
      }
    },
    questions: {
      "1": {
        followup: {
          "Sounds good.": {
            points: 2
          },
          "That was our deal.": {
            points: 3
          },
          "Thanks. I'm counting on you.": {
            points: 2
          }
        }
      },
      "2": {
        "1": {
          "You like coffee?": {
            points: 3
          },
          "Are you opening a café?": {
            points: 3
          },
          "Are you starting a farm?": {
            points: 3
          }
        },
        "2": {
          "What do you mean?": {},
          "So you won't accept his offer?": {},
          "He sounds suspicious.": {
            points: 3
          }
        },
        "3": {
          "This is a complex issue.": {
            points: 3
          },
          "You might be wrong.": {
            points: 3
          },
          "Maybe you should fire him.": {
            points: 3
          }
        },
        meta: {
          requirements: {
            proficiency: "max"
          }
        },
        followup: {
          "Moonlight Carrot.": {
            points: 3
          },
          "Sun Tomato.": {
            points: 3
          },
          "Jewel Melon.": {
            points: 3
          }
        }
      },
      "3": {
        "1": {
          "A phantom thief wouldn't worry.": {
            points: 2
          },
          "They won't find out.": {
            points: 3
          },
          "It'll be OK, I promise.": {
            points: 3
          }
        },
        "2": {
          "“I don't want to go with you.”": {
            points: 3
          },
          "“I'm afraid of flying.”": {},
          "“We should break up.”": {}
        },
        "3": {
          "I have.": {
            points: 3
          },
          "Not yet.": {
            points: 3
          },
          "Too many times to count.": {
            points: 3
          }
        },
        followup: {
          "Smart response.": {
            points: 3
          },
          "Sounds like a hassle.": {},
          "Which friend?": {}
        }
      },
      "4": {
        "1": {
          "That's pricey.": {
            points: 3
          },
          "What a rip-off.": {},
          "It must be amazing.": {
            points: 3
          }
        },
        "2": {
          "I can't let you do that.": {
            points: 3
          },
          "Let me cover the bill.": {
            points: 3
          },
          "Kthx.": {
            points: 3
          }
        },
        "3": {
          "You mean... poop!?": {
            points: 3
          },
          "I can taste the elephant.": {
            points: 3
          },
          "Excuse me while I vomit.": {
            points: 3
          }
        },
        "4": {
          "Hands off my cat.": {},
          "I'd rather not think about it.": {},
          "Let's ask him.": {
            points: 3
          }
        },
        "5": {
          "He seemed nice enough.": {},
          "He was a little sketchy.": {},
          "I'm not really sure.": {
            points: 3
          }
        },
        followup: {
          "I don't mind.": {},
          "It was rather intriguing.": {},
          "Let's get coffee again sometime.": {
            points: 3
          }
        }
      },
      "5": {
        "1": {
          "Trust who you want to trust.": {},
          "Somebody's telling the truth.": {
            points: 3
          },
          "Trust no one.": {
            points: 3
          }
        },
        "2": {
          "Are you really considering it?": {},
          "You can't give in.": {},
          "There has to be another way.": {
            points: 3
          }
        },
        "3": {
          "That doesn't matter now.": {
            points: 3
          },
          "You didn't have a choice.": {},
          "I don't think so.": {
            points: 3
          }
        },
        followup: {
          "Are you okay?": {},
          "We're all here for you.": {},
          "Pinch yourself.": {
            points: 3
          }
        }
      },
      "6": {
        "1": {
          "That's fascinating": {
            points: 3
          },
          "You're so studious.": {
            points: 3
          },
          "Can you make some for me?": {
            points: 3
          }
        },
        "2": {
          "I had no idea.": {
            points: 3
          },
          "That's a surprise.": {},
          "I could've guessed that.": {}
        },
        "3": {
          "You might be right.": {},
          "That would be bad.": {
            points: 3
          },
          "Black like coffee?": {
            points: 3
          }
        },
        "4": {
          "You don't need to apologize.": {},
          "That guy is horrible.": {}
        },
        "5": {
          "You're not powerless.": {},
          "Be strong, Haru.": {
            points: 3
          }
        },
        followup: {
          "You can talk to me anytime.": {
            points: 3
          },
          "Let him say what he wants.": {
            points: 3
          },
          "Wanna run away together?": {}
        }
      },
      "7": {
        "1": {
          "You look exhausted.": {},
          "Don't overwork yourself.": {},
          "Let's go see the nurse.": {}
        },
        "2": {
          "That sounds really tough...": {
            points: 3
          },
          "You should ask some employees.": {},
          "What do you want to do?": {
            points: 3
          }
        },
        "3": {
          "What does Takakura-san think?": {
            points: 3
          },
          "There has to be a way.": {
            points: 3
          },
          "You should tell him that.": {
            points: 3
          }
        },
        "4": {
          "That's the spirit.": {
            points: 3
          },
          "You can do it, Haru.": {
            points: 3
          }
        },
        followup: {
          "Don't relax yet.": {},
          "I'll always have your back.": {
            points: 3
          },
          'So what\'s this "magic item"?': {}
        }
      },
      "8": {
        "1": {
          "The soil?": {
            points: 3
          },
          "The planters?": {},
          "That beetle over there?": {}
        },
        "2": {
          "It'll help him understand you.": {
            points: 3
          },
          "He's going to love it.": {
            points: 3
          },
          "He might not like it.": {
            points: 3
          }
        },
        "3": {
          "I'll be cheering for you.": {
            points: 3
          },
          "You're amazing, Haru.": {
            points: 3
          },
          "Are you sure you can do it?": {
            points: 3
          }
        },
        followup: {
          "You can understand them?": {},
          "It's in your nature to nurture.": {
            points: 3
          },
          "I want some too.": {
            points: 3
          }
        }
      },
      "9": {
        "1": {
          "Don't forget to breathe.": {},
          "Believe in yourself.": {},
          "I'm here for you, Haru.": {}
        },
        "2": {
          "I'm sure you'll do great.": {
            points: 3
          },
          "It'll be fine.": {
            points: 3
          },
          "Give it all you've got, Haru.": {
            points: 3
          }
        },
        "3": {
          "You're very welcome.": {
            points: 3
          },
          "You did amazing.": {
            points: 3
          },
          "Do I get a reward?": {}
        },
        "4": {
          "He saw us as good friends.": {},
          "I like you too, Haru.": {
            romance: true
          }
        },
        followup: {
          "What're you up to?": {},
          "I wanted to hear your voice.": {
            points: 3
          },
          "I miss you.": {
            points: 3
          }
        }
      },
      max: {
        "1": {
          "Will things be OK?": {},
          "That's good to hear.": {
            points: 3
          },
          "You've done great, Haru.": {
            points: 3
          }
        },
        "2": {
          "I'm sure you'll succeed.": {
            points: 3
          },
          "This won't be easy.": {
            points: 3
          },
          "It all comes down to flavor.": {
            points: 3
          }
        },
        "3": {
          "If you want.": {},
          "Probably not.": {},
          "It's hard work, you know.": {}
        },
        "4": {
          "I'm glad too.": {
            points: 3
          },
          "Don't deny yourself.": {
            points: 3
          },
          "Just my teammate?": {
            points: 3
          }
        },
        meta: {
          romance: true
        }
      }
    }
  },
  faith: {
    character: "Kasumi Yoshizawa",
    benefits: {
      Tumbling: {
        rank: 2,
        description: "Allows you to avoid being surround by enemies in Palaces"
      },
      "Chaines Hook": {
        rank: 4,
        description: "Allows you to ambush from a distance by attacking with the grappling hook."
      },
      "Follow Up": {
        rank: 6,
        description: "Chance to perform a follow-up attack if Joker’s attack does not down the enemy."
      },
      "Fitness Talk": {
        rank: 6,
        description: "If negotiation with any kind of Shadow fails, you can try again."
      },
      "Harisen Recovery": {
        rank: 7,
        description: "Chance to cure status ailments inflicted upon party members."
      },
      Endure: {
        rank: 8,
        description: "Chance to withstand an otherwise fatal attack with 1 HP remaining."
      },
      Protect: {
        rank: 9,
        description: "Chance to shield Joker from an otherwise fatal attack."
      },
      "Second Awakening": {
        rank: "max",
        description: "Transforms Person into a mythological trickster."
      },
      "Second Awakening R": {
        rank: "royal",
        description: "Fuse with the mythological Trickster, awakening its true power."
      }
    },
    questions: {
      "2": {
        "1": {
          "We're just getting started.": {
            points: 2
          },
          "Go easy on me.": {},
          "I'm so done with this.": {
            points: 2
          }
        },
        "2": {
          "Next time, then.": {
            points: 2
          },
          "You doing okay?": {},
          "Lucky for me...": {}
        },
        "3": {
          "I see.": {},
          "So now...?": {}
        },
        "4": {
          "No problem.": {},
          "You sure?": {},
          "Uh, romantically?": {}
        },
        "5": {
          "Leave it to me.": {},
          "Let's give it a try.": {},
          "Then follow my lead.": {}
        },
        followup: {
          "Impressive.": {
            points: 2
          },
          "Gotta push through it.": {},
          "You did eat eventually, right?": {}
        }
      },
      "3": {
        "1": {
          "Making bento?": {
            points: 3
          },
          "Potluck parties?": {},
          '"This" being...?': {}
        },
        "2": {
          "I'm touched!": {
            points: 2
          },
          "It looks delicious.": {
            points: 2
          },
          "Let's see if it's good...": {}
        },
        "3": {
          "Is that all for you?": {
            points: 3
          },
          "That seems a little much.": {
            points: 2
          },
          "What IS that?": {}
        },
        "4": {
          "This tastes like...": {},
          "It's definitely unique.": {
            points: 2
          },
          "It's... greeeaaat...": {}
        },
        "5": {
          "Not exactly.": {},
          "Is there a third option...?": {}
        },
        "6": {
          "Calm down.": {},
          "You're going to get it now?": {}
        },
        "7": {
          "This works fine as is.": {},
          "I'm enjoying this.": {},
          "Let's just eat.": {}
        },
        "8": {
          "You could try again sometime?": {
            points: 3
          },
          "It happens.": {
            points: 3
          },
          "Just keep at it.": {
            points: 3
          }
        },
        "9": {
          "That sounds right.": {},
          "Maybe...": {}
        }
      },
      "4": {
        "1": {
          "You have bad eyesight?": {},
          "You're looking to buy?": {
            points: 2
          },
          "I have enough glasses.": {}
        },
        "2": {
          "A pretty modern look.": {
            points: 3
          },
          "Not my style.": {},
          "I look so aloof in these.": {
            points: 2
          }
        },
        "3": {
          "Do they suit your dad, though? =0": {},
          "I'm not so sure...": {}
        },
        "4": {
          "Of course.": {
            points: 2
          },
          "Let's keep going.": {
            points: 2
          },
          "Sure, whatever.": {}
        },
        "5": {
          "Trust your instincts.": {},
          "Don't overthink it.": {}
        },
        "6": {
          "Good choice.": {
            points: 2
          },
          "I'm sure he'll love it.": {}
        },
        "7": {
          "It's part of our deal.": {},
          "Not a problem at all.": {},
          "I expect compensation.": {}
        },
        "8": {
          "Everyone deals with that.": {
            points: 2
          },
          "That's your slump talking.": {}
        },
        "9": {
          "Good luck.": {},
          "We'll work at it together.": {
            points: 2
          },
          "No rush, though.": {}
        },
        followup: {
          "I'm glad to hear that.": {
            points: 2
          },
          "You should be more confident.": {
            points: 2
          },
          "Of course he is.": {}
        }
      },
      "5": {
        "1": {
          "It's a surprise, yea.": {
            points: 2
          },
          "Not at all.": {},
          "What are you scheming?": {}
        },
        "2": {
          "This seems kind of sudden.": {},
          "If I'm just watching...": {}
        },
        "3": {
          "It's a good idea.": {
            points: 2
          },
          "Go ahead. I'll watch.": {
            points: 3
          },
          "Maybe stick to gymnastics.": {}
        },
        "4": {
          "Don't give up.": {},
          "Just don't lose hope.": {},
          "You can beat this, right?": {}
        },
        "5": {
          "Congratulations.": {
            points: 3
          },
          "I saw!": {
            points: 3
          },
          "How's that feel?": {
            points: 2
          }
        },
        "6": {
          "That's important.": {
            points: 3
          },
          "Don't forget how that feels.": {
            points: 2
          }
        },
        "7": {
          "Nicely done.": {},
          "It's not over yet.": {}
        },
        followup: {
          "Swimming.": {
            points: 3
          },
          "Running.": {
            points: 2
          },
          "Gymnastics.": {
            points: 3
          }
        }
      },
      "6": {
        "1": {
          "It wasn't on purpose.": {},
          "What could you have done?": {},
          "At least you realize it now.": {}
        },
        "2": {
          "Don't beat yourself up.": {},
          "What'll you do now?": {},
          "Calm down.": {}
        },
        "3": {
          "You two were close, then.": {},
          "Those must be good memories.": {},
          "All for ice cream, huh?": {}
        },
        "4": {
          "... That IS genius.": {},
          "How old was she again?": {}
        },
        "5": {
          "She cared about you.": {},
          "Sounds like tough training.": {}
        },
        "6": {
          "Why?": {},
          "I can imagine.": {}
        },
        "7": {
          "It must have been hard.": {},
          "What about Kasumi's feelings?": {},
          "Sounds like running away.": {}
        },
        "8": {
          "You have to accept it.": {},
          "Try not to think about it.": {},
          "So what happens now?": {}
        },
        "9": {
          "I will.": {},
          "I can manage that.": {},
          "If it's part of the deal.": {}
        },
        meta: {
          requirements: {
            trueEnding: true
          }
        },
        followup: {
          "Do you want to run away?": {},
          "You have to face it.": {
            points: 3
          },
          "So what if it is?": {
            points: 3
          }
        }
      },
      "7": {
        "1": {
          "Maybe.": {},
          "Who Knows?": {},
          "Were you frustrated?": {}
        },
        "2": {
          "Is she scary?": {},
          "Is she strict?": {}
        },
        "3": {
          "You okay?": {
            points: 3
          },
          "That was a big sigh.": {},
          "She's a real taskmaster.": {}
        },
        "4": {
          "That isn't true.": {
            points: 3
          },
          "You need more confidence.": {},
          "That's just a mental block.": {}
        },
        "5": {
          "It'll be like a duet.": {},
          "You'll become stronger.": {}
        },
        "6": {
          "Of course.": {
            points: 3
          },
          "I could watch you forever.": {
            points: 3
          },
          "Another love confession?": {
            points: 3
          }
        },
        followup: {
          "I was internally screaming.": {},
          "Yeah, it was a breeze.": {},
          "I love a good challenge.": {
            points: 3
          }
        }
      },
      "8": {
        "1": {
          "Walk up to Sumire.": {
            points: 3
          },
          "Watch her from a distance.": {},
          "Slowly walk away.": {}
        },
        "2": {
          "Look at yourself.": {},
          "You're just standing out.": {}
        },
        "3": {
          "Try to stay positive.": {
            points: 3
          },
          "I'm here for you.": {
            points: 3
          },
          "It'll work out.": {
            points: 3
          }
        },
        "4": {
          "What is it?": {},
          "......": {}
        },
        "5": {
          "You started it.": {},
          "What, I can't look at you?": {}
        },
        "6": {
          "It looks great.": {
            points: 3
          },
          "You look really cute.": {
            points: 3
          },
          "I'm in love.": {
            points: 3
          }
        },
        "7": {
          "Did I help?": {},
          "You found your answer?": {}
        },
        "8": {
          "I see...": {},
          "So that's how it was.": {}
        },
        "9": {
          "That's how it should be.": {
            points: 3
          },
          "Sounds like progress.": {
            points: 3
          }
        },
        followup: {
          "The airsoft shop.": {},
          "The resale shop.": {
            points: 3
          },
          "Online.": {
            points: 3
          }
        }
      },
      "9": {
        "1": {
          "It's no problem.": {
            points: 3
          },
          "We'll call it holiday hours.": {
            points: 3
          }
        },
        "2": {
          "Definitely.": {
            points: 3
          },
          "Of course.": {
            points: 3
          }
        },
        "3": {
          "Of course I do.": {
            points: 3
          },
          "Vaguely...": {},
          "What about it?": {}
        },
        "4": {
          "I know you did.": {
            points: 3
          },
          "You're not worthless.": {
            points: 3
          },
          "This is a new beginning.": {
            points: 3
          }
        },
        "5": {
          "What's going on?": {},
          "There's something else?": {},
          "Go ahead.": {
            points: 3
          }
        },
        "6": {
          "What?": {},
          "In luh?": {}
        },
        "7": {
          "Let's stay friends, okay?": {},
          "I love you too.": {
            romance: true
          }
        },
        "8": {
          "Calm down.": {
            points: 3
          },
          "Take your time.": {
            points: 3
          }
        },
        "9": {
          "So? Any different?": {
            points: 3
          },
          "You are so red right now.": {
            points: 3
          },
          "You're so cute.": {
            points: 3
          }
        },
        followup: {
          "Get used to it.": {
            points: 3
          },
          "Should I hang up...?": {},
          "That's just how it is.": {}
        }
      },
      max: {
        "1": {
          "You look radiant today.": {},
          "Now I'm getting nervous.": {}
        },
        "2": {
          "It's all Sumire.": {},
          "Just watch.": {}
        },
        "3": {
          "Calm down.": {},
          "Don't rush it.": {}
        },
        "4": {
          "You must be happy.": {},
          "I'm so relieved.": {},
          "It's only natural, Sumire.": {}
        },
        "5": {
          "And that is...?": {
            points: 3
          },
          "What do you mean?": {
            points: 3
          },
          "Is it someone you love?": {
            points: 3
          }
        },
        "6": {
          "And there's more to come.": {},
          "You were amazing out there.": {}
        },
        "7": {
          "I'll stop if you want.": {},
          "I feel the same way.": {},
          "I don't want to let you go.": {}
        },
        meta: {
          romance: true
        },
        followup: {
          "I'm counting on you.": {
            points: 3
          },
          "Don't get ahead of yourself.": {
            points: 3
          },
          "We're our world's champions.": {
            points: 3
          }
        }
      }
    }
  },
  fortune: {
    character: "Chihaya Mifune",
    benefits: {
      "Lucky Reading": {
        rank: 1,
        description: "Temporarily increases the growth rate of a selected social stat."
      },
      "Money Reading": {
        rank: 3,
        description: "Temporarily increases money earned from battle."
      },
      "Fate Reading": {
        rank: 5,
        description: "Provides a preview of some abilities for a Confidant of your choice."
      },
      "Affinity Reading": {
        rank: 7,
        description: "Deepens your bond with a Confidant of your choice."
      },
      "Special Fate Reading": {
        rank: "max",
        description: "Provides a preview of all abilities for a Confidant of your choice."
      }
    },
    questions: {
      "1": {
        meta: {
          unlock:
            "This is rather straightforward but does take some time before things begin rolling. You will need to visit Chihaya three times in Shinjuku before she gives you a Mementos Request. After completing this, go see her once more for the first rank of the Fortune Confidant to unlock."
        },
        followup: {
          "I'll be there.": {
            points: 3
          },
          "Such a hassle.": {
            points: 1
          },
          "You're pretty extreme...": {
            points: 1
          }
        }
      },
      "2": {
        "1": {
          "Suggest she gives up.": {
            bad: true
          },
          "Change her boss's heart.": {
            bad: true
          },
          "Encourage her.": {}
        },
        "2": {
          "Hrahhh!": {
            bad: true
          },
          "Overturn your fate!": {},
          "Fight the power!": {
            bad: true
          }
        },
        "3": {
          "You're so stubborn": {},
          "Open your mind to change.": {
            points: 2
          }
        },
        followup: {
          "Of course I am.": {
            points: 2
          },
          "And if I am?": {},
          "Are you stalking me?": {}
        }
      },
      "3": {
        "1": {
          "Go for the money.": {
            bad: true
          },
          "Follow his heart.": {},
          "Chase a promotion.": {
            bad: true
          }
        },
        "2": {
          "Thieves may steal her away.": {},
          "Marriage kills individuality.": {
            bad: true
          },
          "She'll be sad if you break it off.": {
            bad: true
          }
        },
        "3": {
          "I'm not, sorry.": {},
          "Who knows...?": {}
        }
      },
      "4": {
        "1": {
          "You're only realizing that now?": {},
          "Do you want to test it again?": {}
        },
        "2": {
          "Strengthen your will.": {
            points: 2
          },
          "I don't know.": {},
          "Trust in yourself.": {
            points: 3
          }
        },
        "3": {
          "Tell me more.": {},
          "That sounds so peaceful.": {}
        },
        "4": {
          "...The chairman?": {},
          "I'm not sure I follow.": {}
        },
        "5": {
          "I think it'll work.": {},
          "It all depends on you.": {}
        },
        followup: {
          "I'm glad to hear that.": {},
          "I didn't do much.": {
            points: 2
          },
          "Tell me more about your home.": {}
        }
      },
      "5": {
        "1": {
          "You're such a hard worker.": {
            points: 3
          },
          "What about divine power?": {},
          "You must have lots of free time.": {
            points: 2
          }
        },
        "2": {
          "But what?": {},
          "Did you spend it all?": {}
        },
        "3": {
          "Who was he?": {},
          "Maiden?": {},
          "Are you in trouble?": {}
        }
      },
      "6": {
        "1": {
          "I like fortune-telling.": {},
          "She's really cool.": {},
          "I'm doing research for school.": {}
        },
        "2": {
          "...Maiden of Relief?": {},
          "This has to be a joke.": {}
        },
        "3": {
          "This guy's sketchy.": {},
          "Leave her alone.": {}
        },
        "4": {
          "What's a Maiden of Relief?": {},
          "Who thinks you're a monster?": {},
          "You're just Chihaya to me.": {
            points: 3
          }
        },
        followup: {
          "No need to strain yourself.": {},
          "Be honest with yourself.": {
            points: 2
          },
          "We'll work on it together.": {}
        }
      },
      "7": {
        "1": {
          "You're not wrong about that.": {},
          "You shouldn't have tricked them.": {
            points: 2
          },
          "I don't think so.": {
            points: 3
          }
        },
        followup: {
          "Are you gonna be okay?": {
            points: 2
          },
          "Be careful.": {
            points: 2
          },
          "So the Maiden's taking action.": {}
        }
      },
      "8": {
        "1": {
          "I had no idea.": {
            points: 2
          },
          "I know.": {
            points: 3
          }
        },
        "2": {
          "I'm glad to hear that.": {
            points: 3
          },
          "That's some good luck.": {
            points: 3
          },
          "It's because you're strong.": {
            points: 3
          }
        },
        "3": {
          "Why do you ask?": {},
          "Hell yeah I am.": {
            points: 3
          }
        },
        followup: {
          "You give me too much credit.": {},
          "It was all your own will.": {
            points: 2
          },
          "I knew it would happen.": {}
        }
      },
      "9": {
        "1": {
          "You really don't understand.": {},
          "Listen to what Chihaya's saying.": {}
        },
        "2": {
          "Do you regret what you did?": {},
          "Well, fate can be changed.": {
            points: 3
          },
          "That's all in the past now.": {
            points: 2
          }
        },
        "3": {
          "I like having my fortune read.": {},
          "So I can be with you.": {
            romance: true
          }
        },
        followup: {
          "I wanted to hear your voice too.": {
            points: 2
          },
          "Oh, you didn't mean it...?": {},
          ".....": {}
        }
      },
      "7.5": {
        "1": {
          "How so?": {},
          "What have you found?": {}
        },
        "2": {
          "Tell me his name.": {},
          "What's Fukurai's first name?": {}
        },
        "3": {
          "I can't tell you.": {},
          "Don't worry about it.": {}
        }
      },
      max: {
        "1": {
          "You've never been here?": {},
          "It wasn't that far away.": {}
        },
        "2": {
          "I support you.": {
            points: 3
          },
          "You have strong convictions.": {
            points: 3
          }
        },
        "3": {
          "I wonder if you're right...": {},
          "So what if I am the Trickster?": {},
          "You're pretty sharp.": {}
        },
        "4": {
          "It's not a problem.": {},
          "Are you worried about me?": {},
          "What does it mean?": {}
        },
        "5": {
          "Thank you, Chihaya.": {},
          "That's really reassuring.": {}
        },
        "6": {
          "I don't care about that.": {
            points: 2
          },
          "It's actually pretty cute.": {
            points: 3
          }
        },
        "7": {
          "I was hoping you'd say that.": {},
          "I don't want to go home.": {}
        },
        meta: {
          romance: true
        }
      }
    }
  },
  hanged: {
    character: "Munehisa Iwai",
    benefits: {
      "Starter Customization": {
        rank: 1,
        description: "Allows you to customize guns to improve their performance."
      },
      "Medium Customization": {
        rank: 3,
        description: "Allows you to customize mid-grade guns."
      },
      Discount: {
        rank: 5,
        description: "Decreases the cost of gun customization."
      },
      "Expert Customization": {
        rank: 7,
        description: "Allows you to customize high-grade guns."
      },
      "Ace Customization": {
        rank: "max",
        description: "Allows you to customize special-grade guns."
      }
    },
    questions: {
      "1": {
        meta: {
          requirements: {
            courage: 4
          }
        },
        followup: {
          "Leave it to me.": {
            points: 1
          },
          "As long as it's safe...": {
            points: 1
          },
          "So what's my first job?": {
            points: 3
          }
        }
      },
      "2": {
        "1": {
          "Maybe I should call him.": {},
          "... Iwai seems sick.": {}
        },
        "2": {
          "Nothing in particular.": {},
          "I was daydreaming, sorry.": {}
        },
        "3": {
          "Who was that guy?": {},
          "What should I do now?": {
            points: 2
          },
          "How's your cold?": {
            points: 2
          }
        }
      },
      "3": {
        "1": {
          "I know how it feels.": {},
          "Is it seriously that hard?": {}
        },
        "2": {
          "I always knew you were a thug.": {
            points: 3
          },
          "Oh. I, uh... have to go.": {},
          "Y-Yakuza!?": {
            points: 2
          }
        },
        "3": {
          "Not really.": {},
          "No, I like that stuff.": {},
          "We made a deal, didn't we?": {
            points: 3
          }
        },
        "4": {
          "Is that one of your customers?": {},
          "Why are you being so mean?": {}
        }
      },
      "4": {
        "1": {
          "Iwai.": {},
          "I can't tell you.": {},
          "It's none of your business.": {}
        },
        "2": {
          "What was that about?": {},
          "So that was Tsuda?": {},
          "What did he mean, “sell” him?": {}
        },
        "3": {
          "Hong Kong mafia.": {},
          "A 100 million yen deal.": {}
        },
        "4": {
          "Give it your all.": {},
          "You two should play nice.": {
            points: 2
          },
          "Where's my reward.": {
            points: 3
          }
        },
        followup: {
          "I agree.": {
            points: 2
          },
          "Is that a threat?": {},
          "What's the issue?": {}
        }
      },
      "5": {
        "1": {
          "Why not?": {},
          "You shouldn't lie to your son.": {}
        },
        "2": {
          "You're so kind, Iwai.": {},
          "You're pathetic.": {
            points: 3
          },
          "You should call the cops.": {}
        },
        "3": {
          "That's right.": {
            points: 2
          },
          "Don't make assumptions.": {},
          "I'll stick around for the guns.": {
            points: 3
          }
        },
        followup: {
          "You're right.": {
            points: 2
          },
          "Is it really all for Kaoru?": {},
          "Well, you got this.": {}
        }
      },
      "6": {
        "1": {
          "Why would he say that?": {},
          "No, nothing even close.": {}
        },
        "2": {
          "He definitely does.": {},
          "You should ask him.": {}
        },
        "3": {
          "Our futures.": {
            points: 2
          },
          "Girls.": {
            points: 3
          },
          "That's a secret.": {
            points: 3
          }
        },
        "4": {
          "Right.": {
            points: 2
          },
          "You should tell him, Iwai.": {},
          "You should buy us something.": {
            points: 3
          }
        },
        followup: {
          "He's my age, so it comes easier.": {
            points: 2
          },
          "All I did was listen to him.": {
            points: 2
          },
          "It's part of the job.": {}
        }
      },
      "7": {
        "1": {
          "Not at all.": {},
          "Absolutely.": {
            points: 3
          },
          "I guess he likes guns?": {
            points: 2
          }
        },
        "2": {
          "That's horrible.": {},
          "He's clever.": {
            points: 3
          },
          "What a crafty bastard.": {
            points: 2
          }
        },
        "3": {
          "Is Tsuda seriously dangerous?": {},
          "Are you going alone?": {}
        },
        followup: {
          "Bring it on.": {
            points: 2
          },
          "I'm worried...": {},
          "So what's our first move?": {}
        }
      },
      "8": {
        "1": {
          "It's not impossible.": {},
          "I dunno.": {
            points: 2
          },
          "He's matured.": {}
        },
        "2": {
          "I'm back, baby.": {
            points: 2
          },
          "I guess I could consider it.": {
            points: 3
          },
          "If you pay me well.": {
            points: 3
          }
        },
        followup: {
          "Understood.": {
            points: 2
          },
          "You worry too much.": {},
          "Now let's catch him off-guard.": {}
        }
      },
      "9": {
        "1": {
          "That's great news.": {
            points: 2
          },
          "I feel bad for him.": {},
          "Are you sure he's alive?": {
            points: 3
          }
        },
        "2": {
          "Who's Masa?": {},
          "Will Karou be OK?": {}
        },
        "3": {
          "We should hurry.": {},
          "Let's close up shop.": {}
        },
        "4": {
          "What's your goal here, Masa?": {},
          "Cut the bullshit.": {}
        },
        "5": {
          "Tell him the truth.": {
            points: 3
          },
          "You need to trust your son.": {
            points: 3
          }
        },
        "6": {
          "Karou is really strong-willed.": {
            points: 3
          },
          "He gets that maturity from you.": {
            points: 2
          },
          "He's a cool kid, huh?": {
            points: 3
          }
        },
        followup: {
          "Like father, like son.": {
            points: 2
          },
          "Gecko bonds go beyond blood.": {
            points: 2
          },
          "Why not newts?": {}
        }
      },
      "7.5": {
        "1": {
          "It most definitely was.": {
            points: 2
          },
          "I did it all for Iwai.": {
            points: 3
          },
          "Actually, it's been fun.": {}
        },
        "2": {
          "I will.": {
            points: 2
          },
          "I want to help you.": {
            points: 2
          },
          "I can't.": {}
        },
        "3": {
          "What's his full name?": {},
          "Tell me his name.": {}
        },
        meta: {
          requirements: {
            courage: "max"
          }
        }
      },
      max: {
        "1": {
          "It's up to you now, Iwai.": {
            points: 3
          },
          "Kaoru won't lose.": {
            points: 3
          },
          "Iwai's kind of slow.": {}
        },
        "2": {
          "I couldn't leave him.": {},
          "It was for the special menu.": {}
        },
        "3": {
          "It's a coincidence.": {},
          "Should we close up?": {},
          "What if you're right?": {
            points: 2
          }
        }
      }
    }
  },
  hermit: {
    character: "Futaba Sakura",
    benefits: {
      "Moral Support": {
        rank: 1,
        description: "Chance to cast Kaja or party-healing magic during battle."
      },
      "Mementos Scan": {
        rank: 2,
        description: "Chance to fully map the floor of Mementos when entering that floor."
      },
      "Position Hack": {
        rank: 4,
        description: "Chance to instantly Hold Up enemies when starting a battle."
      },
      "Active Support": {
        rank: 6,
        description: "Moral Support may now Charge or recover SP."
      },
      "Treasure Reboot": {
        rank: 7,
        description: "Chance to revive search objects in the area after battle."
      },
      "Emergency Shift": {
        rank: 9,
        description: "Chance to swap current party with backups when 2 or more people are KO’d."
      },
      "Final Guard": {
        rank: "max",
        description: "Chance to nullify a fatal attack to a current party member."
      },
      "Second Awakening": {
        rank: "max",
        description: "Transforms her Persona into a mythological trickster."
      }
    },
    questions: {
      "2": {
        "1": {
          "That wouldn't solve anything.": {},
          "That's a great idea.": {
            points: 2
          }
        },
        "2": {
          "If we work together.": {
            points: 3
          },
          "Want me to help?": {
            points: 2
          },
          "I don't know.": {}
        },
        "3": {
          "Sounds good to me.": {},
          "Can you tell me again?": {}
        },
        meta: {
          requirements: {
            kindness: 4
          }
        },
        followup: {
          "I bet it will.": {
            points: 2
          },
          "I'm not sure.": {},
          "Why not ask him directly?": {}
        }
      },
      "3": {
        "1": {
          "I what?": {},
          "So you're OK?": {},
          "I was about to come find you.": {
            points: 3
          }
        },
        "2": {
          "Good to see you again.": {
            points: 3
          },
          "You're the one who appeared.": {
            points: 2
          },
          "You need to be more careful.": {}
        },
        followup: {
          "It'll only get tougher.": {},
          "You will.": {},
          "We'll both do our best.": {
            points: 2
          }
        }
      },
      "4": {
        "1": {
          "Nope.": {
            points: 2
          },
          "Let's do this together.": {
            points: 3
          },
          "If you want.": {}
        },
        "2": {
          "No, you're talented.": {},
          "I bet they were just surprised.": {}
        },
        "3": {
          "Not at all.": {
            points: 2
          },
          "Everyone does it.": {
            points: 2
          },
          "I think it's cute.": {
            points: 3
          }
        },
        followup: {
          "We'll take it slow.": {
            points: 2
          },
          "You need more training.": {},
          "I'll help you anytime.": {
            points: 2
          }
        }
      },
      "5": {
        "1": {
          "He's in my class.": {},
          "Friend might be a bit much.": {}
        },
        "2": {
          "I think you're right.": {
            points: 3
          },
          "No.": {},
          "Your... what?": {
            points: 2
          }
        },
        "3": {
          "What's an NPC?": {
            points: 2
          },
          "Savage.": {},
          "He's the protagonist.": {
            points: 3
          }
        },
        followup: {
          "You did great.": {
            points: 2
          },
          "That's nothing special.": {},
          "Ding! Level up!": {}
        }
      },
      "6": {
        "1": {
          "Were you happy?": {
            points: 2
          },
          "That must have been a shock.": {
            points: 3
          },
          "How did you react?": {}
        },
        "2": {
          "You didn't know any better.": {
            points: 2
          },
          "Did you apologize to her?": {},
          "Sounds like it was her fault.": {}
        },
        "3": {
          "Understood.": {},
          "Someone's pushy today.": {}
        },
        followup: {
          "Are you running away again?": {
            points: 2
          },
          "Let's calm down first.": {},
          "I'm right here with you.": {}
        }
      },
      "7": {
        "1": {
          "What horrible parents.": {
            points: 2
          },
          "We have to put a stop to this.": {
            points: 2
          },
          "Strange... how?": {}
        },
        "2": {
          "I'll do it, for you.": {
            points: 3
          },
          "We'll show them the truth.": {
            points: 3
          },
          "Give me some time.": {
            points: 2
          }
        }
      },
      "8": {
        "1": {
          "That's incredible.": {
            points: 3
          },
          "I'm glad to hear that.": {
            points: 3
          },
          "Did you stutter at all?": {
            points: 2
          }
        },
        "2": {
          "You worked really hard too.": {
            points: 3
          },
          "You're making me blush...": {
            points: 2
          },
          "Do I get a reward?": {}
        },
        "3": {
          "Fine by me.": {},
          "That's all?": {}
        },
        followup: {
          "Congrats.": {
            points: 2
          },
          "You've still got more.": {},
          "Want more pats?": {
            points: 2
          }
        }
      },
      "9": {
        "1": {
          "You've really matured.": {
            points: 3
          },
          "What if you get bullied again?": {
            points: 2
          }
        },
        "2": {
          "That doesn't sound healthy...": {},
          "Are you OK, Futaba?": {
            points: 3
          },
          "You're imagining things.": {
            points: 2
          }
        },
        "3": {
          "If you want.": {
            points: 2
          },
          "No way.": {
            points: 2
          },
          "You're giving up?": {}
        },
        "4": {
          "Because we're teammates.": {
            end: true
          },
          "Because I love you.": {
            romance: true
          }
        },
        "5": {
          "I would like that / If that's OK with you.": {},
          "Um, Hello? / Is something wrong?": {},
          "Earth to Futaba? / Are you still alive?": {}
        },
        followup: {
          "Instant yakisoba.": {},
          "Morgana.": {},
          "Do I really have to say it?": {
            points: 2
          }
        }
      },
      max: {
        "1": {
          "What are you talking about?": {},
          "Don't worry about it.": {},
          "...Pardoned?": {}
        },
        "2": {
          "Mission complete.": {},
          "Nice job, Futaba.": {},
          "You did great.": {}
        },
        "3": {
          "I know.": {},
          "I don't mind.": {},
          "I like being close.": {}
        },
        "4": {
          "What's wrong.": {},
          "Come closer.": {}
        },
        "5": {
          "Take your time.": {
            points: 3
          },
          "You can do this.": {
            points: 3
          },
          "We'll do it together.": {
            points: 3
          }
        },
        "6": {
          "You can't lose to her.": {
            points: 3
          },
          "Do you want a job too?": {
            points: 2
          }
        },
        "7": {
          "I honor my promises.": {},
          "Just keep it cheap.": {},
          "You remember that?": {}
        },
        "8": {
          "I'm counting on you.": {},
          "That's a lot of pressure.": {}
        },
        "9": {
          "You already have that right.": {
            points: 3
          },
          "Took you long enough to ask.": {
            points: 3
          },
          "I want that right too.": {
            points: 3
          }
        },
        meta: {
          romance: true
        }
      }
    }
  },
  hierophant: {
    character: "Sojiro Sakura",
    benefits: {
      "Coffee Basics": {
        rank: 1,
        description: "Allows you to make coffee which slightly restores SP to one ally."
      },
      "Leblanc Curry": {
        rank: 4,
        description: "Allows you to make curry that slightly restores SP to all allies."
      },
      "Coffee Mastery": {
        rank: 6,
        description: "Allows you to make coffee which greatly restores SP to one ally."
      },
      "Curry Tips": {
        rank: 9,
        description: "Allows you to make curry that moderately restores SP to all allies."
      },
      "Curry Master": {
        rank: "max",
        description: "Allows you to make curry that greatly restores SP to all allies."
      }
    },
    questions: {
      "1": {
        followup: {
          "Got it.": {
            points: 3
          },
          "That was our deal.": {
            points: 2
          },
          "It's the least I can do.": {
            points: 2
          }
        }
      },
      "2": {
        "1": {
          "Making coffee.": {
            points: 2
          },
          "Hitting on girls.": {},
          "No idea.": {}
        },
        "2": {
          "Who was he?": {},
          "That guy seemed suspicious.": {
            points: 2
          },
          "Who's the “her” he mentioned?": {}
        },
        "3": {
          "I want the ladies to love me.": {
            points: 2
          },
          "I don't care about that stuff.": {}
        },
        followup: {
          "Got it.": {
            points: 2
          },
          "Give me a break.": {},
          "Why'd you call my cell?": {}
        }
      },
      "3": {
        "1": {
          "Medium-fine.": {
            points: 2
          },
          "Coarse.": {},
          "Anything goes.": {}
        },
        "2": {
          "Is it a date?": {},
          "Is it trouble??": {
            points: 2
          },
          "You don't want my help anymore?": {}
        },
        followup: {
          "I'm ready to work.": {
            points: 2
          },
          "Go easy on me.": {},
          "Thank you in advance.": {
            points: 2
          }
        }
      },
      "4": {
        "1": {
          "Tell me more.": {
            points: 3
          },
          "That sounds tough...": {},
          "It all tastes the same to me.": {}
        },
        "2": {
          "Run for help": {},
          "Call Sojiro's phone": {
            points: 3
          },
          "Kick the man out": {}
        },
        followup: {
          "Understood.": {
            points: 2
          },
          "I'm kind of nervous...": {},
          "I'll kick him out.": {}
        }
      },
      "5": {
        "1": {
          "It wasn't bad.": {
            points: 2
          },
          "Nothing special.": {},
          "I think I'm addicted!": {
            points: 3
          }
        },
        "2": {
          "She was like Futaba?": {
            points: 2
          },
          "She wasn't normal, huh?": {
            points: 3
          },
          "So that's why you're a bachelor?": {}
        },
        "3": {
          "It really paid off in the end.": {
            points: 2
          },
          "Almost brings a tear to my eye.": {},
          "So much history...": {}
        },
        meta: {
          requirements: {
            date: "8/22"
          }
        },
        followup: {
          "Sounds good to me.": {},
          "She needs a balanced diet.": {
            points: 2
          },
          "There's always instant noodles.": {}
        }
      },
      "6": {
        "1": {
          "I admire it.": {},
          "I'm not impressed.": {},
          "To each his own.": {
            points: 2
          }
        },
        "2": {
          "You're wrong.": {
            points: 2
          },
          "I'm sorry.": {},
          "Shut your mouth.": {
            points: 3
          }
        },
        "3": {
          "Saving Futaba was no mistake.": {
            points: 2
          },
          "Just cut your ties with him.": {}
        },
        followup: {
          "Is she okay?": {},
          "Try to relax.": {},
          "If I can help somehow...": {
            points: 3
          }
        }
      },
      "7": {
        "1": {
          "You might be right.": {
            points: 3
          },
          "That's not true.": {},
          "They're still delicious.": {}
        },
        "2": {
          "Are you alright?": {},
          "Have you calmed down?": {},
          "Do you want to talk?": {}
        },
        "3": {
          "Let's talk to him.": {},
          "You should tell him that.": {},
          "You guys are one awkward duo.": {}
        },
        meta: {
          requirements: {
            kindness: "max"
          }
        },
        followup: {
          "I'm truly glad.": {},
          "You're welcome.": {},
          "Feel like a real dad now?": {
            points: 3
          }
        }
      },
      "8": {
        "1": {
          "You want my suggestion?": {
            points: 2
          },
          "Something with curry.": {
            points: 3
          },
          "I can't decide!": {}
        },
        "2": {
          "I didn't do anything wrong.": {},
          "I was just protecting Futaba.": {
            points: 3
          },
          "Sorry.": {}
        }
      },
      "9": {
        "1": {
          "It's great.": {
            points: 3
          },
          "He's a bit of a nag.": {
            points: 3
          }
        },
        "2": {
          "Are you crying?": {},
          "You have a great daughter.": {
            points: 3
          },
          "Congrats.": {
            points: 3
          }
        },
        followup: {
          "You did great.": {
            points: 3
          },
          "Futaba did great.": {
            points: 3
          },
          "You two were already family.": {
            points: 2
          }
        }
      },
      max: {
        "1": {
          "For what?": {},
          "Mass?": {},
          "I'm not interested.": {}
        },
        "2": {
          "Good for you.": {
            points: 3
          },
          "Thank you.": {
            points: 3
          }
        }
      }
    }
  },
  justice: {
    character: "Goro Akechi",
    benefits: {
      "Sleuthing Instinct": {
        rank: 2,
        description: "Chance to reveal one enemy affinity at the start of battle."
      },
      "Smooth Talk": {
        rank: 4,
        description: "If negotiation with a god-like Shadow fails, you can try again."
      },
      "Sleuthing Mastery": {
        rank: 6,
        description: "Chance to reveal all of one enemy’s affinities at the start of battle."
      },
      "Follow Up": {
        rank: 6,
        description: "Chance to perform a follow-up attack if Joker’s attack does not down the enemy."
      },
      "Harisen Recovery": {
        rank: 7,
        description: "Chance to cure status ailments inflicted upon party members."
      },
      Endure: {
        rank: "max",
        description: "Chance to withstand an otherwise fatal attack with 1 HP remaining."
      },
      Protect: {
        rank: "max",
        description: "Chance to shield Joker from an otherwise fatal attack."
      },
      "Second Awakening R": {
        rank: "royal",
        description: "Fuse with the mythological Trickster, awakening its true power."
      }
    },
    questions: {
      "2": {
        "1": {
          "You always seem so busy.": {
            points: 2
          },
          "Do you have no friends?": {}
        },
        "2": {
          "Is that your win?": {},
          "Not bad.": {}
        },
        "3": {
          "Shoot very carefully.": {
            points: 2
          },
          "I'll go for a power shot.": {
            points: 2
          }
        },
        "4": {
          "You used your right hand.": {},
          "...Aren't you left-handed?": {}
        },
        "5": {
          "Maybe i'll be a detective.": {
            points: 2
          },
          "No holding back next time.": {
            points: 2
          },
          "I see a lot of things.": {
            points: 3
          }
        },
        followup: {
          "Sure.": {},
          "I'll think about it.": {},
          "As rivals?": {
            points: 2
          }
        }
      },
      "3": {
        "1": {
          "Got a sweet tooth, huh?": {},
          "Come here often?": {}
        },
        "2": {
          "Should've figured.": {
            points: 3
          },
          "Your life must be so hard.": {
            points: 2
          },
          "I can shoo them away...": {}
        },
        "3": {
          "You've done nothing wrong.": {},
          "Why the rush?": {}
        },
        "4": {
          "How about we find out?": {},
          "Come here a sec.": {}
        },
        "5": {
          "You looked great.": {},
          "It was a necessary evil.": {},
          "I should've taken a picture.": {}
        },
        meta: {
          requirements: {
            charm: 3
          }
        },
        followup: {
          "That was careless, huh?": {},
          "Wasn't it fun?": {
            points: 2
          },
          "I can always dress you up again.": {}
        }
      },
      "4": {
        "1": {
          "What kind of place is this?": {},
          "This looks shady...": {}
        },
        "2": {
          "Do they have coffee?": {
            points: 2
          },
          "But I'm underage.": {},
          "Now this is my kind of club.": {
            points: 3
          }
        },
        "3": {
          "Any recommendations?": {
            points: 3
          },
          "Anything's fine by me.": {
            points: 2
          },
          "An ice-cold beer for me.": {}
        },
        "4": {
          "It's a great place.": {
            points: 2
          },
          "I feel a bit nervous.": {}
        },
        "5": {
          "A run-down cafe.": {},
          "A shop with great coffee.": {},
          "I live there, actually.": {}
        },
        "6": {
          "Pretty frequently.": {
            points: 3
          },
          "I can use a microwave.": {
            points: 3
          },
          "All I need is curry.": {
            points: 2
          }
        },
        followup: {
          "What are you talking about?": {},
          "I kinda get it.": {
            points: 2
          },
          "You really are having fun.": {}
        }
      },
      "5": {
        "1": {
          "All the time.": {},
          "I'm not great at them.": {},
          "Have you played any?": {}
        },
        "2": {
          "Are you used to gunplay?": {
            points: 2
          },
          "You took that seriously, huh.": {}
        },
        "3": {
          "You wanted to be a hero?": {
            points: 3
          },
          "Very interesting.": {
            points: 2
          },
          "Hard to imagine.": {}
        },
        "4": {
          "Sticking to your justice.": {},
          "Doing what people want.": {},
          "Neither, really.": {}
        },
        followup: {
          "You did fine.": {
            points: 2
          },
          "You've got a long way to go.": {
            points: 2
          },
          "You were getting cocky.": {
            points: 2
          }
        }
      },
      "6": {
        "1": {
          "So relaxing...": {
            points: 2
          },
          "Seeing you here is weird.": {},
          "A while, huh?": {
            points: 3
          }
        },
        "2": {
          "That was horrible of her.": {},
          "... You've been through a lot.": {
            points: 2
          }
        },
        "3": {
          "This is nothing.": {
            points: 3
          },
          "I'll stay until you're ready.": {
            points: 3
          },
          "Are YOU okay?": {
            points: 2
          }
        },
        "4": {
          "Same.": {
            points: 3
          },
          "I'm just fine.": {},
          "Guess I win.": {
            points: 2
          }
        },
        "5": {
          "Because we get along.": {
            points: 2
          },
          "Because we're similar.": {
            points: 2
          }
        },
        "6": {
          "I think you're right.": {
            points: 3
          },
          "I don't know about that.": {},
          "Can I put my clothes on?": {
            points: 2
          }
        },
        followup: {
          "True.": {},
          "They'd probably love it.": {},
          "My bad, I guess.": {
            points: 2
          }
        }
      },
      "7": {
        "1": {
          "Yeah, it's convoluted.": {
            points: 2
          },
          "That's why it's so fun.": {
            points: 3
          }
        },
        "2": {
          "The psychotic breakdowns.": {},
          "What're you getting at?": {}
        },
        "3": {
          "I've made up my mind.": {},
          "I won't miss my shot.": {}
        },
        "4": {
          "It's thanks to you.": {
            points: 2
          },
          "I couldn't let myself lose.": {
            points: 3
          }
        },
        "5": {
          "But we're teammates now.": {},
          "Wnat to join us?": {}
        },
        "6": {
          "I'll think about it.": {},
          "I'm not doing that.": {},
          "You're my rival.": {}
        },
        meta: {
          requirements: {
            knowledge: 4
          }
        },
        followup: {
          "Do I?": {},
          "I don't know.": {},
          "We're rivals, aren't we?": {
            points: 2
          }
        }
      },
      "8": {
        "1": {
          "What'd you want to discuss?": {},
          "Why are we in Mementos?": {}
        },
        "2": {
          "I thought you meant in pool.": {},
          "You want to fight?": {},
          "But why, though?": {}
        },
        "3": {
          "All right.": {},
          "Let's do this.": {}
        },
        "4": {
          "Are you satisfied?": {},
          "Was that all you got?": {},
          "Do you want to keep going?": {}
        },
        "5": {
          "I'd say the same for you.": {},
          "The feeling mutual.": {}
        },
        "6": {
          "I definitely wouldn't lose.": {
            points: 3
          },
          "I don't know.": {},
          "Probably.": {}
        },
        "7": {
          "Same here.": {},
          "Really hate losing, don't you.": {
            points: 3
          }
        },
        "8": {
          "I accept.": {},
          "Let me think about it.": {}
        }
      },
      "9": {
        meta: {
          requirements: {
            story: true
          }
        }
      },
      max: {
        meta: {
          requirements: {
            story: true
          }
        }
      }
    }
  },
  lovers: {
    character: "Ann Takamaki",
    benefits: {
      "Baton Pass": {
        rank: 1,
        description: "Allows you to pass your turn over to other Baton Pass users after 1 More."
      },
      "Girl Talk": {
        rank: 2,
        description: "Chance to step in after Shadow negotiation fails with a female Shadow, allowing a retry."
      },
      "Follow Up": {
        rank: 3,
        description: "Chance to perform a follow-up attack if Joker’s attack does not down the enemy."
      },
      "Crocodile Tears": {
        rank: 5,
        description: "Chance to force enemies to ask for less during negotiations."
      },
      "Harisen Recovery": {
        rank: 6,
        description: "Chance to cure status ailments inflicted upon party members."
      },
      "Sexy Technique": {
        rank: 7,
        description: "Chance to seduce the enemy during negotiation and steer discussion."
      },
      Endure: {
        rank: 8,
        description: "Chance to withstand an otherwise fatal attack with 1 HP remaining."
      },
      Protect: {
        rank: 9,
        description: "Chance to shield Joker from an otherwise fatal attack."
      },
      "Second Awakening": {
        rank: "max",
        description: "Transforms her Persona into a mythological trickster."
      }
    },
    questions: {
      "2": {
        "1": {
          "Are you feeling better now?": {
            points: 3
          },
          "She's so strong.": {
            points: 3
          },
          "So are you friends again?": {
            points: 2
          }
        },
        "2": {
          "You can't blame yourself.": {
            points: 2
          },
          "You might be right.": {
            points: 3
          }
        },
        "3": {
          "It was no big deal.": {
            points: 2
          },
          "I couldn't just ignore you.": {
            points: 3
          }
        },
        "4": {
          "I'll help.": {
            points: 3
          },
          "Let's find it together.": {
            points: 3
          }
        },
        meta: {
          requirements: {
            kindness: 2
          }
        },
        followup: {
          "Of course, You're my teammate.": {
            points: 2
          },
          "Leave it to me.": {
            points: 2
          },
          "The no-refills thing again?": {
            points: 2
          }
        }
      },
      "3": {
        "1": {
          "How's that?": {},
          "You're amazing.": {}
        },
        "2": {
          "What kind of stuff...?": {},
          "That's your training...?": {},
          "I don't get it.": {}
        },
        "3": {
          "You're stupid.": {},
          "You're an airhead.": {},
          "You're... unique.": {}
        },
        "4": {
          "You're a hard worker.": {},
          "That response was annoying.": {},
          "Can we stop yet?": {}
        },
        "5": {
          "I like you.": {
            points: 2
          },
          "I love you.": {
            points: 2
          },
          "Can we stop yet?": {
            points: 3
          }
        },
        "6": {
          "Listen to me.": {},
          "This won't help your heart.": {},
          "You're a genius...": {}
        },
        "7": {
          "You're right.": {},
          "You finally get it.": {}
        },
        "8": {
          "That's odd.": {
            points: 2
          },
          "Has that happened to you?": {
            points: 3
          }
        },
        "9": {
          "Are you lonely?": {},
          "That freedom sounds nice.": {
            points: 2
          }
        },
        followup: {
          "Could be.": {
            points: 2
          },
          "You're so self-conscious.": {},
          "Was she a child model?": {}
        }
      },
      "4": {
        "1": {
          "I know what you mean.": {
            points: 3
          },
          "I'm not sure I follow.": {},
          "That comes down to you.": {
            points: 2
          }
        },
        "2": {
          "That was mean of her.": {
            points: 2
          },
          "That's hilarious.": {
            points: 3
          },
          "Was she right?": {}
        },
        "3": {
          "Tell me.": {
            points: 3
          },
          "I'm afraid to know.": {
            points: 2
          },
          "...Who?": {}
        },
        "4": {
          "Good idea.": {
            points: 3
          },
          "How exactly?": {
            points: 2
          }
        },
        "5": {
          "That's not going to work.": {},
          "You haven't learned anything.": {},
          "Good luck with that.": {
            points: 3
          }
        },
        followup: {
          "I train everyday.": {
            points: 2
          },
          "Not really.": {},
          "I carry Morgana in my bag.": {
            points: 2
          }
        }
      },
      "5": {
        "1": {
          "Maybe.": {},
          "Give it up.": {
            points: 2
          }
        },
        "2": {
          "You're outmatched.": {},
          "She's amazing, huh...": {
            points: 2
          }
        },
        "3": {
          "It had grace.": {
            points: 2
          },
          "She'd be a great Phantom Thief.": {}
        },
        "4": {
          "So how do you do it?": {},
          "Tell me more.": {}
        },
        "5": {
          "I figured that much.": {},
          "I mean, that's why it's “fake.”": {}
        }
      },
      "6": {
        "1": {
          "It seems that way.": {
            points: 3
          },
          "That's such a simple solution.": {},
          "If it's a friend, yeah.": {
            points: 2
          }
        },
        "2": {
          "How so?": {},
          "Was she working hard?": {},
          "Was she in pain?": {}
        },
        "3": {
          "You're not weak.": {},
          "It's because you're kind.": {}
        },
        "4": {
          "Comfort her.": {
            points: 3
          },
          "Listen to what she has to say.": {
            points: 2
          },
          "Show her your own strength.": {
            points: 3
          }
        },
        followup: {
          "Someone's motivated.": {
            points: 2
          },
          "I'll cheer you on.": {
            points: 2
          },
          "You gonna be okay?": {}
        }
      },
      "7": {
        "1": {
          "It's a trap!": {},
          "She admires you.": {
            points: 2
          }
        },
        "2": {
          "So she could show you up.": {},
          "Because you're a natural beauty.": {}
        },
        "3": {
          "Cheer up.": {},
          "Please don't cry.": {}
        },
        "4": {
          "You already are one.": {},
          "Go get ‘em, tiger.": {
            points: 2
          },
          "What about your action movies...?": {}
        },
        followup: {
          "You got this.": {
            points: 2
          },
          "Don't strain yourself.": {},
          "Trying to be like Mika?": {}
        }
      },
      "8": {
        "1": {
          "That's a lot of work...": {},
          "You have some real guts.": {
            points: 3
          },
          "You're beautiful as is.": {
            points: 2
          }
        },
        "2": {
          "There's no doubt in my mind.": {
            points: 3
          },
          "I hope so.": {
            points: 3
          },
          "Good luck finding it.": {
            points: 3
          }
        },
        "3": {
          "Good advice.": {},
          "You're so dumb, Ryuji...": {}
        },
        "4": {
          "She'll be happy to hear that.": {
            points: 3
          },
          "I'm sure she already knows.": {
            points: 3
          }
        },
        followup: {
          "That's probably it.": {
            points: 2
          },
          "I wonder.": {},
          "You can ask her yourself.": {
            points: 2
          }
        }
      },
      "9": {
        "1": {
          "It's dangerous up here.": {},
          "Step away from the ledge.": {},
          "Why did you want to come here?": {}
        },
        "2": {
          "And?": {},
          "She's gone, isn't she?": {}
        },
        "3": {
          "Hang in there.": {
            points: 3
          },
          "I believe in you, Ann.": {
            points: 3
          }
        },
        "4": {
          "You have me.": {
            romance: true
          },
          "You have the others.": {
            end: true
          }
        },
        "5": {
          "You said “I love you.”": {},
          "I didn't hear you.": {}
        },
        followup: {
          "Of course.": {
            points: 2
          },
          "I'm yours forever.": {
            points: 2
          },
          "That's up to you.": {}
        }
      },
      max: {
        "1": {
          "You really gave it your all.": {
            points: 3
          },
          "You still have a ways to go.": {
            points: 2
          },
          "Everyone was complimenting you.": {
            points: 3
          }
        },
        "2": {
          "That's so embarrassing.": {
            points: 2
          },
          "I'll be there with you.": {
            points: 3
          },
          "You can do it, Ann.": {
            points: 3
          }
        },
        "3": {
          "What's wrong?": {},
          "It's just the two of us.": {}
        },
        "4": {
          "Of course.": {
            points: 3
          },
          "Anything for you.": {
            points: 3
          }
        },
        "5": {
          "I will.": {},
          "I already am.": {}
        },
        "6": {
          "Of course.": {},
          "I should be asking you that.": {}
        },
        "7": {
          "Couples?": {},
          "Just Once?": {}
        },
        meta: {
          romance: true
        }
      }
    }
  },
  moon: {
    character: "Yuuki Mishima",
    benefits: {
      "Mishima’s Support": {
        rank: 1,
        description: "Allows backup members to earn EXP."
      },
      "Mishima’s Enthusiasm": {
        rank: 3,
        description: "Increases EXP earned from battle."
      },
      "Mishima’s Desperation": {
        rank: 5,
        description: "Increases EXP earned by backup members."
      },
      Phanboy: {
        rank: 7,
        description: "Greatly increases EXP earned from battle."
      },
      "Salvation Wish": {
        rank: "max",
        description: "Allows backup members to earn the same EXP as current party members.."
      }
    },
    questions: {
      "2": {
        "1": {
          "I don't understand.": {},
          "...Phan-Site?": {}
        },
        "2": {
          "You've done good, kid.": {
            points: 3
          },
          "That sounds pretty tough.": {},
          "Is this really necessary?": {}
        },
        "3": {
          "Uh, strategic... what?": {},
          "Sounds cool.": {
            points: 3
          },
          "You're really hyped for this.": {
            points: 2
          }
        },
        followup: {
          "Nice hustle, image manager.": {
            points: 2
          },
          "Calm down.": {},
          "All-nighters can mess you up.": {}
        }
      },
      "3": {
        "1": {
          "I've never heard that before.": {},
          "Great idea.": {
            points: 3
          },
          "I'm already taken.": {
            points: 2
          }
        },
        "2": {
          "I'm worried about this...": {},
          "We're part of... The Phandom?": {
            points: 2
          },
          "Let's tell them the truth.": {
            points: 2
          }
        },
        "3": {
          "It's not your fault.": {
            points: 2
          },
          "Don't overwork yourself.": {},
          "I can't trust anyone anymore...": {}
        },
        followup: {
          "Of course.": {
            points: 2
          },
          "Really?": {
            points: 2
          },
          "You'll get it right next time.": {
            points: 2
          }
        }
      },
      "4": {
        "1": {
          "Steak sounds good.": {
            points: 3
          },
          "Some nice organic veggies.": {},
          "I love desserts.": {
            points: 2
          }
        },
        "2": {
          "You're amazing.": {
            points: 2
          },
          "That sounds like a scam.": {},
          "Stop this at once.": {}
        },
        "3": {
          "You're right.": {},
          "Of course it would.": {},
          "Maybe we can keep it.": {}
        },
        followup: {
          "Yup.": {
            points: 2
          },
          "That's one way to view it.": {},
          "You'll get better ideas.": {
            points: 2
          }
        }
      },
      "5": {
        "1": {
          "Why was it so expensive?": {
            points: 2
          },
          "It looks almost real.": {},
          "Is it for me?": {
            points: 3
          }
        },
        "2": {
          "That's a good idea.": {
            points: 2
          },
          "Are you sure that's necessary?": {},
          "Don't do anything stupid.": {}
        },
        followup: {
          "All right.": {
            points: 2
          },
          "I expect great things.": {},
          "... Did something happen.": {}
        }
      },
      "6": {
        "1": {
          "Just tell me already.": {
            points: 2
          },
          "I'm not interested.": {},
          "You sure are fired up...": {
            points: 2
          }
        },
        "2": {
          "Calm yourself.": {},
          "Rumors are wrong all the time...": {
            points: 2
          },
          "It's none of your business.": {}
        },
        "3": {
          "Why?": {},
          "I didn't ask for that.": {}
        },
        "4": {
          "Is that right...?": {},
          "Absolutely. Nice job.": {
            points: 2
          }
        }
      },
      "7": {
        "1": {
          "I don't wanna change his heart.": {},
          "Let's cancel the request.": {}
        },
        "2": {
          "Stop worrying about fame.": {},
          "You still care about fame?": {}
        },
        "3": {
          "I'm sure there is.": {
            points: 2
          },
          "I hope so.": {},
          "Maybe the Phan-Site?": {
            points: 3
          }
        },
        followup: {
          "Kind of worrying...": {
            points: 2
          },
          "Be careful.": {},
          "It's your time to shine.": {
            points: 2
          }
        }
      },
      "8": {
        "1": {
          "I'm not leaving.": {
            points: 3
          },
          "You should run too.": {
            points: 2
          },
          "What are you going to do?": {}
        },
        "2": {
          "You're just gonna take that?": {
            points: 2
          },
          "Believe in yourself.": {
            points: 2
          },
          "They're the real losers.": {
            points: 2
          }
        },
        "3": {
          "Totally.": {
            points: 2
          },
          "You were super cool.": {
            points: 3
          },
          "Wait, that was all an act?": {
            points: 3
          }
        },
        followup: {
          "You'll be fine.": {
            points: 2
          },
          "Calm down.": {},
          "You've got this, man.": {
            points: 2
          }
        }
      },
      "9": {
        "1": {
          "You, dead as a doornail.": {},
          "You showed some real courage.": {
            points: 3
          },
          "I'm glad you're still alive.": {
            points: 2
          }
        },
        "2": {
          "Something like that.": {},
          "Exactly.": {}
        },
        "3": {
          "Don't use our real names.": {},
          "This came out of nowhere.": {},
          "I can't wait to watch it.": {}
        },
        "4": {
          "Meh.": {},
          "What about a parfait instead?": {},
          "I'm feeling steak, actually.": {}
        },
        followup: {
          "The sparkle in your eye.": {
            points: 2
          },
          ".....": {},
          "Your hair?": {}
        }
      },
      "6.5": {
        "1": {
          "And what exactly will we win?": {
            points: 2
          },
          "You're so reliable.": {
            points: 3
          },
          "Chill out, dude.": {}
        },
        "2": {
          "Sounds pretty twisted.": {
            points: 2
          },
          "By changing their hearts?": {},
          "You really need to chill.": {
            points: 2
          }
        },
        "3": {
          "Fun...?": {},
          "This isn't like you.": {},
          "You're worrying me.": {}
        },
        "4": {
          "We very well might.": {},
          "Are you feeling guilty?": {}
        },
        "5": {
          "Let's go.": {},
          "This is the only way...": {}
        },
        "6": {
          "You're riding our coattails.": {},
          "Would that really satisfy you?": {}
        },
        "7": {
          "Do it yourself.": {},
          "We're leaving.": {},
          "There's no need.": {}
        }
      },
      max: {
        "1": {
          "Did you find your answer?": {},
          "Were you scared stiff?": {}
        },
        "2": {
          "That was courageous.": {
            points: 3
          },
          "But you were afraid.": {
            points: 2
          }
        },
        "3": {
          "I didn't do anything.": {},
          "Nobody stole your heart.": {},
          "You changed yourself.": {}
        },
        "4": {
          "I'm sure you will.": {},
          "Make it a bestseller.": {},
          "You have to write it first.": {}
        }
      }
    }
  },
  priestess: {
    character: "Makoto Niijima",
    benefits: {
      "Shadow Calculus": {
        rank: 1,
        description: "Allows you to see skills and potential item drops on the analysis screen."
      },
      "Baton Pass": {
        rank: 2,
        description: "Allows you to pass your turn over to other Baton Pass users after 1 More."
      },
      "Brainiac Talk": {
        rank: 3,
        description: "Chance to step in after Shadow negotiation fails, allowing a retry."
      },
      "Follow Up": {
        rank: 4,
        description: "Chance to perform a follow-up attack if Joker’s attack does not down the enemy."
      },
      "Harisen Recovery": {
        rank: 6,
        description: "Chance to cure status ailments inflicted upon party members."
      },
      "Shadow Factorization": {
        rank: 7,
        description: "Allows you to see Null, Repel, and Drain when highlighting a target in battle."
      },
      Endure: {
        rank: 8,
        description: "Chance to withstand an otherwise fatal attack with 1 HP remaining."
      },
      Protect: {
        rank: 9,
        description: "Chance to shield Joker from an otherwise fatal attack."
      },
      "Second Awakening": {
        rank: "max",
        description: "Transforms her Persona into a mythological trickster."
      }
    },
    questions: {
      "1": {
        meta: {
          requirements: {
            knowledge: 3
          }
        },
        followup: {
          "Let's go again sometime.": {
            points: 2
          },
          "It's a new you.": {
            points: 1
          },
          "The red-light district next": {
            points: 3
          }
        }
      },
      "2": {
        "1": {
          "You're very well informed.": {
            points: 2
          },
          "Have you ever been here?": {},
          "Stay close to me.": {}
        },
        "2": {
          "You should have known better.": {
            points: 2
          },
          "That was dangerous.": {
            points: 3
          },
          "You get flustered easily, huh?": {}
        },
        "3": {
          "Why is it called a salon?": {},
          "What kind of place is that?": {}
        },
        followup: {
          "Couldn't agree more.": {
            points: 2
          },
          "He just wouldn't give up.": {},
          "Let's actually go in next time.": {}
        }
      },
      "3": {
        "1": {
          "You have the wrong idea.": {
            points: 2
          },
          "So what if we were together?": {},
          "It's none of your business.": {}
        },
        "2": {
          "Don't let it get to you.": {
            points: 2
          },
          "You can change.": {
            points: 3
          },
          "Beep boop.": {}
        },
        followup: {
          "Sounds like you two get along.": {
            points: 2
          },
          "Buchimaru-kun?": {},
          "Okay, calm down.": {}
        }
      },
      "4": {
        "1": {
          "That's unlike you.": {
            points: 2
          },
          "Is Thieves work distracting you?": {},
          "I'm sure you did better than me.": {}
        },
        "2": {
          "Eiko?": {},
          "...Who?": {}
        },
        "3": {
          "Don't you have goals?": {},
          "What about college?": {},
          "What do you mean?": {}
        },
        "4": {
          "Why do you use it?": {
            points: 3
          },
          "That's adorable.": {
            points: 2
          },
          "You're not very ladylike...": {}
        },
        "5": {
          "Do you still want to pursue it?": {},
          "I like a woman in uniform.": {
            points: 2
          },
          "It's an amazing goal.": {
            points: 3
          }
        }
      },
      "5": {
        "1": {
          "Are you jealous of them?": {},
          "That's annoying.": {
            points: 2
          },
          "He sounds suspicious.": {
            points: 3
          }
        },
        "2": {
          "I got this.": {
            points: 3
          },
          "Why do I have to do it?": {},
          "Only if I can take it seriously.": {
            points: 2
          }
        },
        followup: {
          "Fist! Of! Justice!": {},
          "Report him to the police.": {},
          "Try to reach out to her.": {
            points: 2
          }
        }
      },
      "6": {
        "1": {
          "We just started.": {
            points: 2
          },
          "We're fighting right now.": {},
          "Love comes in many forms.": {
            points: 3
          }
        },
        "2": {
          "Don't be so pushy.": {},
          "Back off.": {},
          "Here, have my number instead.": {}
        },
        "3": {
          "No, you're being considerate.": {},
          "You worry too much.": {},
          "Probably a little.": {}
        },
        meta: {
          requirements: {
            charm: "max"
          }
        },
        followup: {
          "Tell him you're on a date.": {
            points: 2
          },
          "You're allowed to ignore him.": {},
          "Fire the same thing back.": {}
        }
      },
      "7": {
        "1": {
          "Do you think he likes you?": {},
          "Does Eiko know about this?": {}
        },
        "2": {
          "Probably a little.": {},
          "You watch too many soap operas.": {},
          "He's definitely suspicious.": {}
        },
        "3": {
          "Who was their leader?": {},
          "What gang was it?": {}
        },
        "4": {
          "That's a horrible story.": {
            points: 3
          },
          "Was it tough without him??": {
            points: 2
          },
          "He was a noble man.": {
            points: 3
          }
        },
        "5": {
          "That's admirable.": {
            points: 3
          },
          "I'm sure he was happy.": {
            points: 3
          }
        },
        "6": {
          "Do you have an answer?": {
            points: 2
          },
          "You can figure that out now.": {
            points: 2
          }
        },
        "7": {
          "I'm game if you are.": {
            points: 2
          },
          "What are you going to say?": {},
          "Refuse her, please.": {
            points: 2
          }
        },
        followup: {
          "Of course..": {
            points: 2
          },
          "I guess so.": {},
          "It's the role I always hoped for.": {
            points: 2
          }
        }
      },
      "8": {
        "1": {
          "He says that to all his girls.": {
            points: 2
          },
          "That's how he ropes you in.": {
            points: 2
          },
          "I'm not sure.": {}
        },
        "2": {
          "Absolutely.": {
            points: 3
          },
          "What are we going to do?": {
            points: 2
          },
          "Eh, she deserves him.": {
            points: 2
          }
        }
      },
      "9": {
        "1": {
          "Get away from her!": {
            points: 3
          },
          "Your fight's with me.": {
            points: 3
          },
          "I'm calling the cops.": {
            points: 3
          }
        },
        "2": {
          "We should get out of here.": {
            points: 2
          },
          "Follow me.": {
            points: 2
          }
        },
        "3": {
          "It looked like it hurt.": {},
          "That was the right move.": {
            points: 2
          },
          "You really smacked her.": {}
        },
        "4": {
          "I'm a regular here.": {
            points: 3
          },
          "It's a popular meeting spot.": {
            points: 3
          },
          "Not as much as you.": {
            points: 2
          }
        },
        "5": {
          "You'll find someone someday.": {
            points: 3,
            end: true
          },
          "I'll be your study partner.": {
            romance: true
          }
        },
        "6": {
          "I do.": {
            points: 3,
            romance: true
          },
          "That's not what I meant.": {}
        },
        followup: {
          "I'd do anything for you.": {
            points: 2
          },
          "Were you scared?": {},
          "No big deal.": {
            points: 2
          }
        }
      },
      max: {
        "1": {
          "That's incredible.": {
            points: 2
          },
          "Your slap worked wonders.": {},
          "I'm so relieved.": {}
        },
        "2": {
          "Are you stressing over exams?": {
            points: 2
          },
          "Back to studying?": {},
          "For your sister?": {}
        },
        "3": {
          "Police commissioner?": {},
          "That sounds difficult.": {
            points: 2
          },
          "Why did you choose that?": {}
        },
        "4": {
          "What an admirable goal.": {
            points: 3
          },
          "That's an amazing dream.": {
            points: 2
          },
          "Your father would be proud.": {
            points: 3
          }
        },
        "5": {
          "Haha, yea.": {},
          "It's not funny at all.": {},
          "Just be careful, OK?": {
            points: 2
          }
        },
        "6": {
          "What's wrong?": {},
          "Do you want to study?": {}
        },
        meta: {
          romance: true
        }
      }
    }
  },
  star: {
    character: "Hifumi Togo",
    benefits: {
      "Koma Sabaki": {
        rank: 1,
        description: "Allows you to swap current party with backup members during Joker’s turn."
      },
      Uchikomi: {
        rank: 3,
        description: "Chance for a follow-up by a backup member if Joker downs an enemy."
      },
      "Kakoi Kuzushi": {
        rank: 5,
        description: "Allows you to attempt to escape, even when surrounded by the enemy."
      },
      Narikin: {
        rank: 7,
        description: "Earn double money if a battle is won in 1 turn after a successful ambush."
      },
      Touryou: {
        rank: 9,
        description: "Decreases turn delay to zero, allowing you to instantly escape battle."
      },
      "Togo System": {
        rank: "max",
        description: "Allows you to swap current party with backup members during anyone’s turn."
      }
    },
    questions: {
      "1": {
        meta: {
          requirements: {
            charm: 3
          }
        },
        followup: {
          "Sure.": {
            points: 1
          },
          "I guess we can.": {
            points: 1
          },
          "Lucky me.": {
            points: 2
          }
        }
      },
      "2": {
        "1": {
          "That's interesting.": {
            points: 2
          },
          "I like that attitude change.": {},
          "It's a bit scary.": {}
        },
        "2": {
          "Have confidence in yourself.": {},
          "Don't worry about them.": {}
        },
        "3": {
          "When is it coming out?": {},
          "You're, like, an idol.": {},
          "But you don't want to, right?": {
            points: 2
          }
        }
      },
      "3": {
        "1": {
          "Describes you perfectly.": {
            points: 2
          },
          "No, I didn't.": {},
          "That's quite the headline.": {}
        },
        "2": {
          "You don't enjoy it?": {},
          "Having a difficult time?": {
            points: 2
          },
          "You should just decline.": {}
        },
        followup: {
          "Bring it on.": {
            points: 2
          },
          "Don't worry about it.": {},
          "This is part of our deal too.": {}
        }
      },
      "4": {
        "1": {
          "I don't mind.": {
            points: 2
          },
          "She has a bad vibe.": {},
          "Must've been the katsu curry.": {
            points: 2
          }
        },
        "2": {
          "They're ridiculous.": {},
          "They're cool.": {
            points: 2
          },
          "Never heard of them.": {}
        },
        followup: {
          "I'd love to.": {
            points: 2
          },
          "If our schedules match up.": {},
          "Where shall we go next?": {
            points: 2
          }
        }
      },
      "5": {
        "1": {
          "You're not allowed to date?": {},
          "She's scary.": {
            points: 2
          },
          "Accomplish things?": {}
        },
        "2": {
          "You don't like the attention?": {},
          "You should stop then.": {
            points: 2
          },
          "Have you told your mother?": {}
        },
        followup: {
          "No worries.": {},
          "You've got a lot to deal with...": {
            points: 2
          },
          "Why do you have to apologize?": {}
        }
      },
      "6": {
        "1": {
          "You'll be famous.": {},
          "Is that frustrating?": {
            points: 2
          },
          "The media is scary.": {}
        },
        "2": {
          "Do you still like shogi?": {
            points: 2
          },
          "Is that what you want to do?": {},
          "Do what you love.": {
            points: 2
          }
        },
        followup: {
          "You think so?": {},
          "You're imagining things.": {
            points: 2
          },
          "Confess your sins, my child.": {}
        }
      },
      "7": {
        "1": {
          "That's almost a relief.": {
            points: 2
          },
          "Don't let your guard down.": {},
          "It may come down to luck.": {
            points: 3
          }
        },
        "2": {
          "Give it your all.": {
            points: 2
          },
          "I believe in you.": {
            points: 3
          },
          "Idols are cool too.": {}
        }
      },
      "8": {
        "1": {
          "Maybe...": {
            points: 2
          },
          "You're overthinking it.": {},
          "I'm glad her heart changed.": {
            points: 3
          }
        },
        "2": {
          "Lose what?": {},
          "What're you talking about?": {}
        },
        followup: {
          "I support it.": {
            points: 2
          },
          "You should really rethink this.": {},
          "It's certainly admirable.": {}
        }
      },
      "9": {
        "1": {
          "Give it all you go.": {
            points: 2
          },
          "Do you feel confident?": {},
          "You can do it.": {}
        },
        "2": {
          "It was a good effort.": {},
          "You'll win next time.": {},
          "A very queenly decision.": {
            points: 3
          }
        },
        "3": {
          "I want to become stronger.": {
            end: true
          },
          "I want to stay by your side.": {
            romance: true
          }
        },
        "4": {
          "I want us to date.": {
            romance: true
          },
          "We'll be friends forever.": {}
        },
        followup: {
          "Anything for you.": {
            points: 2
          },
          "It was all a big coincidence.": {
            points: 2
          },
          "It was love at first sight.": {
            points: 2
          }
        }
      },
      "7.5": {
        "1": {
          "What do you mean?": {},
          "I don't understand.": {}
        },
        "2": {
          "That won't work.": {
            points: 2
          },
          "That's a great strategy.": {},
          "Do you intend to lose?": {}
        },
        "3": {
          "Let's make her reconsider.": {},
          "Let's do something about it.": {}
        },
        "4": {
          "What's your mother's name?": {},
          "Tell me her name.": {}
        },
        meta: {
          requirements: {
            knowledge: "max"
          }
        }
      },
      max: {
        "1": {
          "That's rough.": {
            points: 2
          },
          "You'll triumph in the end.": {
            points: 3
          },
          "Just don't lose.": {
            points: 3
          }
        },
        "2": {
          "You can do it.": {},
          "That's reassuring.": {}
        },
        "3": {
          "So you know.": {},
          "What do you mean?": {},
          "We do.": {}
        },
        "4": {
          "Thank you.": {},
          "That's reassuring.": {}
        },
        "5": {
          "What's wrong?": {},
          "Are you nervous?": {}
        },
        meta: {
          romance: true
        }
      }
    }
  },
  sun: {
    character: "Toranosuke Yoshida",
    benefits: {
      Diplomacy: {
        rank: 2,
        description: "Occasionally asks for more money or items during negotiations."
      },
      Fundraising: {
        rank: 3,
        description: "Allows you to ask for large amounts of money during negotiations."
      },
      Manipulation: {
        rank: 5,
        description: "Occasionally raises the chances of an enemy giving you a rare item."
      },
      "Mind Control": {
        rank: 8,
        description: "Occasionally lets you skip negotiation when attempting to obtain a Persona."
      },
      "Charismatic Speech": {
        rank: "max",
        description: "Allows you to form contracts with higher-level Shadows."
      }
    },
    questions: {
      "1": {
        meta: {
          unlock:
            "First you will need to go to Shibuya's Underground Walkway and grab a job pamphlet that becomes available very early on in the campaign. Take the job for Beef Bowl Shop which will be available at night and requires you to remember who ordered what. Yoshida will drop by the Beef Bowl Shop after his speech. After two nights of doing this job, Yoshida will interact with you and give you the ability to help him with his campaign at Station Square."
        },
        followup: {
          "Of course.": {
            points: 1
          },
          "If I must.": {},
          "Let me write this down.": {
            points: 3
          }
        }
      },
      "2": {
        "1": {
          "I want to change the world.": {},
          "I want to improve my speech.": {
            points: 2
          },
          "I'm not sure...": {}
        },
        "2": {
          "One with conviction.": {
            points: 2
          },
          "A popular one.": {},
          "I don't know yet.": {
            points: 2
          }
        },
        "3": {
          "That was helpful.": {
            points: 2
          },
          "I knew that already.": {},
          "What I want to accomplish?": {}
        },
        followup: {
          "It was helpful.": {
            points: 2
          },
          "Somewhat.": {},
          "It changed my whole outlook.": {
            points: 2
          }
        }
      },
      "3": {
        "1": {
          "Yes, Mr. Yoshida told me.": {},
          "No, and I don't care.": {}
        },
        "2": {
          "His message.": {
            points: 2
          },
          "No His speaking skills.": {
            points: 2
          },
          "It's hard to say.": {}
        },
        followup: {
          "I will.": {},
          "I'm not sure I get it.": {},
          "You think I'll ever find it?": {
            points: 2
          }
        }
      },
      "4": {
        "1": {
          "Stop interrupting him.": {},
          "You're annoying the audience.": {},
          "Just shut up and listen.": {}
        },
        "2": {
          "Yep.": {},
          "What do you think?": {}
        },
        "3": {
          "The ex-convict has a point.": {},
          "Listen to what he has to say.": {},
          "So what if he's No-Good Tora?": {}
        },
        "4": {
          "I couldn't help myself.": {
            points: 2
          },
          "I just spoke the truth.": {}
        },
        followup: {
          "I will.": {
            points: 2
          },
          "I'm not sure I can.": {},
          "Can't forget your roots.": {
            points: 2
          }
        }
      },
      "5": {
        "1": {
          "I think so.": {
            points: 2
          },
          "Don't let your guard down.": {},
          "The media doesn't matter.": {
            points: 3
          }
        }
      },
      "6": {
        "1": {
          "I'm for them.": {
            points: 2
          },
          "I'm against them.": {},
          "I don't really care.": {
            points: 3
          }
        },
        "2": {
          "I'd decline.": {
            points: 3
          },
          "I'd take the offer.": {},
          "I'd leave it to chance.": {
            points: 2
          }
        },
        followup: {
          "I'll keep this in mind.": {
            points: 2
          },
          "Lose sight of who I am?": {},
          "You make quite a case.": {
            points: 2
          }
        }
      },
      "7": {
        "1": {
          "You should decline.": {
            points: 2
          },
          "That's a sweet deal.": {},
          "I wasn't paying attention.": {}
        },
        "2": {
          "He's not No-Good Tora.": {},
          "Call him Mr. Yoshida.": {},
          "He'll get elected this time.": {}
        },
        "3": {
          "That's not for you to decide.": {},
          "Maybe...": {},
          "I still believe in him.": {}
        }
      },
      "8": {
        "1": {
          "Are you going to do it?": {},
          "Don't do it.": {},
          "That's a difficult decision.": {
            points: 2
          }
        },
        "2": {
          "Stick to your beliefs.": {
            points: 3
          },
          "Clear your name.": {},
          "Get elected.": {}
        },
        "3": {
          "What good would that do?": {},
          "So what if you're right?": {},
          "......": {}
        },
        followup: {
          "I'll never foget that.": {
            points: 2
          },
          "It's tougher than it seems.": {
            points: 2
          },
          "......": {}
        }
      },
      "9": {
        "1": {
          "Do your best.": {
            points: 3
          },
          "Break a leg.": {},
          "I'm getting nervous.": {
            points: 2
          }
        },
        "2": {
          "What are you talking about?": {},
          "You had a change of heart.": {
            points: 2
          },
          "......": {}
        }
      },
      max: {
        "1": {
          "Your true self was revealed.": {
            points: 3
          },
          "You're going to be popular.": {
            points: 2
          },
          "Don't let your guard down.": {
            points: 3
          }
        }
      }
    }
  },
  temperance: {
    character: "Sadayo Kawakami",
    benefits: {
      "Slack Off": {
        rank: 1,
        description: "Allows you to perform various activities in Kawakami’s class."
      },
      Housekeeping: {
        rank: 3,
        description: "Allows you to request Kawakami to make coffee or do laundry for you."
      },
      "Free Time": {
        rank: 5,
        description: "Gain free time in other teachers’ classes with Kawakami’s help."
      },
      "Super Housekeeping": {
        rank: 7,
        description: "Allows you to request Kawakami to make curry or infiltration tools for you."
      },
      "Special Massage": {
        rank: "max",
        description: "Request a massage after going into the Metaverse, letting you go out at night."
      }
    },
    questions: {
      "1": {
        meta: {
          unlock:
            "After completing the second dungeon, you will receive a scene a couple days later with Yuuki and Ryuji regarding a maid call-service. You will be able to do this at night by talking to Yuuki in Shibuya. After this nighttime event, approach Kawakami at school the next day where she's getting an ear full from Ms. Chouno. Help her out of this situation and she will give you a number to call at night from the phone at the Leblanc Cafe that will begin the Temperance storyline."
        },
        followup: {
          "Yeah, I get it.": {
            points: 3
          },
          "I will if you will.": {
            points: 2
          },
          "Please stop talking like that.": {
            points: 2
          }
        }
      },
      "2": {
        "1": {
          "It does.": {
            points: 2
          },
          "I feel nothing.": {},
          "I'll tell your boss.": {}
        },
        "2": {
          "I can't say I wasn't...": {},
          "Absolutely not!": {
            points: 2
          },
          "What kind of weird things?": {}
        },
        "3": {
          "You need money?": {},
          "What's it for?": {}
        },
        "4": {
          "Are you scolding me?": {},
          "This is all for you.": {},
          "I requested you.": {}
        },
        followup: {
          "You have the wrong number": {},
          "Uh, what the hell?": {},
          "Is this the hard sell?": {
            points: 2
          }
        }
      },
      "3": {
        "1": {
          "Yeah, they do.": {
            points: 2
          },
          "Do some real cooking.": {
            points: 2
          },
          "Can I have a different maid.": {}
        },
        "2": {
          "I was curious.": {},
          "So I could slack off in class.": {},
          "I wanted to see you.": {}
        },
        "3": {
          "Your sister's bills, right?": {},
          "I'll request you more often.": {
            points: 3
          },
          "You're really blunt.": {}
        },
        "4": {
          "You have it rough.": {},
          "Are they expensive?": {},
          "Don't overdo it.": {}
        },
        followup: {
          "Thanks.": {
            points: 2
          },
          "I'll work hard at it.": {},
          "You're not in character.": {}
        }
      },
      "4": {
        "1": {
          "That would be great.": {},
          "What are you scheming?": {}
        },
        "2": {
          "How rude.": {
            points: 2
          },
          "No surprise there.": {},
          "How old ARE you?": {}
        },
        "3": {
          "Yes, you do.": {
            points: 2
          },
          "You're pushing it.": {},
          "You need to love yourself.": {
            points: 3
          }
        },
        "4": {
          "I already knew that.": {},
          "Why did you lie to me?": {},
          "You're a bad teacher.": {}
        }
      },
      "5": {
        "1": {
          "It's fun.": {
            points: 2
          },
          "I want to know more.": {},
          "Who's the Master here?": {
            points: 2
          }
        },
        "2": {
          "How Terrible...": {
            points: 2
          },
          "It was inevitable.": {},
          "So, did you stop?": {
            points: 2
          }
        },
        "3": {
          "It's not your fault.": {},
          "It was bad luck.": {},
          "It's no one's fault.": {}
        },
        "4": {
          "You OK with that?": {},
          "Guardians, huh...": {}
        },
        "5": {
          "It's too late now.": {},
          "What about our deal?": {},
          "I want see you again.": {}
        },
        followup: {
          "Curry is all I eat.": {},
          "You get bored of the taste.": {},
          "You want some?": {
            points: 2
          }
        }
      },
      "6": {
        "1": {
          "You just got here.": {},
          "Want to rest a bit?": {
            points: 2
          },
          "Give me back my money.": {}
        },
        "2": {
          "Are you all right?": {
            points: 3
          },
          "Have you see a doctor?": {
            points: 2
          },
          "You should go home.": {
            points: 3
          }
        },
        "3": {
          "Are you OK?": {},
          "Don't overdo it.": {}
        },
        followup: {
          "I'll be fine.": {},
          "Nah, too lazy.": {},
          "How are you feeling, though?": {
            points: 2
          }
        }
      },
      "7": {
        "1": {
          "Don't strain yourself.": {
            points: 2
          },
          "Don't lie.": {},
          "Don't pay them.": {
            points: 3
          }
        },
        "2": {
          "Sister company?": {},
          "Can you make a lot there?": {},
          "Think this through more.": {
            points: 3
          }
        },
        "3": {
          "That's the wrong choice.": {},
          "Isn't there another way?": {},
          "Just rest for now.": {}
        }
      },
      "8": {
        "1": {
          "That's the wrong decision.": {},
          "Please reconsider.": {},
          "Is this really what you want?": {
            points: 3
          }
        },
        "2": {
          "You're running away.": {
            points: 2
          },
          "If that's what you decided.": {
            points: 3
          },
          "I need my teacher.": {}
        },
        "3": {
          "Try to remember": {},
          "That's your answer.": {},
          "Take a look at yourself.": {}
        },
        "4": {
          "Are you going to give up?": {},
          "Mistakes can be fixed.": {}
        },
        "5": {
          "Be confident in your answer.": {
            points: 3
          },
          "That's the right choice.": {
            points: 3
          },
          "You're asking a student?": {
            points: 3
          }
        },
        "6": {
          "I want to protect you.": {
            points: 3
          },
          "That's reassuring.": {
            points: 3
          }
        },
        followup: {
          "You're welcome.": {
            points: 2
          },
          "So much for being a maid.": {
            points: 2
          },
          "I'll do anything for you.": {
            points: 2
          }
        }
      },
      "9": {
        "1": {
          "Nonsense.": {
            points: 3
          },
          "You may be right.": {},
          "Aren't you old already...?": {}
        },
        "2": {
          "What a bummer.": {
            points: 3
          },
          "Thank you for your service.": {
            points: 3
          }
        },
        "3": {
          "Not really.": {
            points: 2,
            end: true
          },
          "I want to keep seeing you.": {
            points: 2,
            romance: true
          }
        },
        "4": {
          "Got it.": {
            points: 2,
            end: true
          },
          "I mean what I say.": {
            romance: true
          }
        },
        "5": {
          "I'm a master; you're a maid.": {},
          "I'm a man; you're a woman.": {
            romance: true
          }
        }
      },
      "8.5": {
        "1": {
          "We're talking here.": {},
          "You know it, lady.": {}
        },
        "2": {
          "You can't give up.": {},
          "But you were so determined.": {}
        },
        "3": {
          "What are their names again?": {},
          "I need their names.": {}
        }
      },
      max: {
        "1": {
          "...Really?": {},
          "I see.": {},
          "That's too bad...": {}
        },
        "2": {
          "It doesn't matter.": {},
          "That's the best part.": {}
        },
        "3": {
          "We won't get caught.": {},
          "Don't worry about it.": {},
          "You're so responsible.": {}
        },
        "4": {
          "What are you talking about?": {},
          "When did you realize?": {}
        },
        "5": {
          "You got me.": {},
          "You have no proof.": {},
          "...So what if I am?": {}
        },
        "6": {
          "That sounds promising.": {
            points: 3
          },
          "I'll make sure of it.": {
            points: 3
          }
        },
        "7": {
          "I want to rely on you.": {
            points: 3
          },
          "I want you to rely on me.": {
            points: 3
          }
        },
        meta: {
          romance: true
        }
      }
    }
  },
  tower: {
    character: "Shinya Oda",
    benefits: {
      "Down Shot": {
        rank: 1,
        description: "Allows you to use all rounds to down one enemy."
      },
      "Bullet Bail": {
        rank: 2,
        description: "Chance to enter a gun-based All-out Attack after a successful ambush."
      },
      "Warning Shot": {
        rank: 3,
        description: "Able to scare enemies in negotiation to make it easier to obtain a Persona."
      },
      "Ammo Pouch": {
        rank: 5,
        description: "Increases the maximum number of bullets you can carry."
      },
      "Cheap Shot": {
        rank: 6,
        description: "Decreases the total number of bullets used to carry out a Down Shot."
      },
      "Electric Slug": {
        rank: 8,
        description: "Increases the damage inflicted by Bullet Hell."
      },
      "Oda Special": {
        rank: "max",
        description: "Allows Joker’s gun attacks to ignore resistances and hit the enemy."
      }
    },
    questions: {
      "1": {
        meta: {
          unlock:
            "Early into September you will get a Request from Yuuki regarding someone at the arcades. Travel to the Shibuya arcades and talk to one of the men there to obtain some information regarding a cheater. After this, venturing into Mementos and try to complete the Request. Because this individual is cheating, you'll be unable to land a hit on him. Retreat and from here you will need to go to the arcades in Akihabara and meet Shinya Oda to begin his storyline."
        },
        followup: {
          "Sure.": {
            points: 1
          },
          "Do we have to?": {
            points: 1
          },
          "Call me when it's game time.": {
            points: 2
          }
        }
      },
      "2": {
        "1": {
          "Sorry...": {
            points: 2
          },
          "Don't compare me to you.": {
            points: 3
          },
          "Praise would be encouraging.": {}
        },
        "2": {
          "Let's go.": {},
          "What a rude employee.": {
            points: 2
          },
          "Something bothering you?": {}
        },
        "3": {
          "Are they strong?": {},
          "Do you admire them?": {
            points: 2
          }
        },
        "4": {
          "So do I.": {
            points: 3
          },
          "They're more than strong.": {},
          "I'll let them know.": {
            points: 3
          }
        },
        followup: {
          "I'll work hard.": {
            points: 2
          },
          "If I feel like it.": {},
          "So then I can beat you?": {
            points: 2
          }
        }
      },
      "3": {
        "1": {
          "Did something happen?": {},
          "Let's go eat.": {},
          "Are you fasting?": {}
        },
        "2": {
          "OK.": {},
          "I'm not down with that.": {},
          "Let me think about it.": {}
        },
        "3": {
          "Are they bullying you?": {},
          "Sounds like fun?": {},
          "You shouldn't waste food.": {}
        },
        "4": {
          "That's the spirit.": {
            points: 2
          },
          "Want to learn martial arts?": {},
          "You really love your mom.": {}
        },
        followup: {
          "Sure.": {
            points: 2
          },
          "If our schedules line up.": {},
          "Any food requests?": {}
        }
      },
      "4": {
        "1": {
          "Calm down.": {},
          "You're being a sore loser.": {},
          "Yeah, you tell him!": {
            points: 2
          }
        },
        "2": {
          "Don't get so worked up.": {},
          "Get your revenge.": {
            points: 2
          },
          "Pros are amazing, huh?": {}
        }
      },
      "5": {
        "1": {
          "It was pretty weird.": {
            points: 3
          },
          "It happens.": {},
          "He must've rigged it.": {
            points: 3
          }
        },
        "2": {
          "You think you have a chance?": {},
          "I'm sure you can do it.": {
            points: 2
          },
          "Don't get so worked up.": {}
        },
        "3": {
          "Are you going to give up?": {
            points: 2
          },
          "You need a new strategy.": {
            points: 3
          }
        },
        followup: {
          "I'll be cheering you on.": {
            points: 2
          },
          "You're a sharp kid.": {},
          "Think you can take him?": {
            points: 2
          }
        }
      },
      "6": {
        "1": {
          "I can pay for myself.": {},
          "If you insist.": {},
          "Do you have enough?": {}
        },
        "2": {
          "You should return the money.": {},
          "You're acting like one.": {}
        },
        "3": {
          "That's good.": {
            points: 2
          },
          "I believe in you.": {
            points: 3
          }
        },
        "4": {
          "A little bit.": {},
          "Not at all.": {
            points: 3
          },
          "I'm worried about you.": {}
        },
        followup: {
          "Of course I won't.": {
            points: 2
          },
          "That's up to you.": {},
          "I'm your big brother, right?": {}
        }
      },
      "7": {
        "1": {
          "I haven't done anything.": {},
          "Calm down.": {},
          "Bad influence?": {}
        },
        "2": {
          "Take it easy on him.": {},
          "Think about his feelings.": {}
        },
        "3": {
          "Bring it on, lady.": {},
          "I haven't done anything.": {},
          "That wouldn't be good.": {}
        },
        "4": {
          "What's your mom's name?": {},
          "Tell me about your mom.": {}
        }
      },
      "8": {
        "1": {
          "She's out to control.": {},
          "No, she's not.": {
            points: 2
          },
          "Is that what you think?": {
            points: 2
          }
        },
        "2": {
          "It'll all work out.": {
            points: 2
          },
          "I can't guarantee it.": {},
          "Believe in them.": {
            points: 3
          }
        },
        "3": {
          "Is that too much for you?": {},
          "Way to step up.": {}
        },
        "4": {
          "Let's save her.": {
            points: 3
          },
          "That's admirable.": {
            points: 3
          }
        }
      },
      "9": {
        "1": {
          "I'm glad to hear that.": {
            points: 3
          },
          "That's hard to believe.": {},
          "Thank the Phantom Thieves.": {
            points: 2
          }
        },
        "2": {
          "A little bit, yea.": {
            points: 2
          },
          "No, that makes sense.": {
            points: 3
          },
          "It means you've matured.": {
            points: 3
          }
        },
        "3": {
          "He wants to win at all costs.": {
            points: 2
          },
          "He's too lazy to practice.": {},
          "I wouldn't know...": {}
        },
        followup: {
          "Your wish came true.": {
            points: 2
          },
          "You really think It was them?": {
            points: 2
          },
          "You did a great job too.": {
            points: 2
          }
        }
      },
      max: {
        "1": {
          "Thanks to my hard work.": {
            points: 2
          },
          "Thanks to my teacher.": {
            points: 3
          }
        },
        "2": {
          "You got your revenge.": {},
          "You made things right.": {
            points: 3
          },
          "You made new friends.": {
            points: 3
          }
        },
        "3": {
          "I'll let you in.": {},
          "Ask them yourself.": {}
        }
      }
    }
  }
};
export default Confidants;
