'use strict';

let questions = [
  {
    id: 1,
    question: 'Do you make thoughtless remarks or accusations which you later regret?'
  },
  {
    id: 2,
    question: 'Is it hard on you when you fail?'
  },
  {
    id: 3,
    question: 'When others are getting rattled do you remain fairly composed?'
  },
  {
    id: 4,
    question: 'Do you find yourself being extra active for periods lasting several days?'
  },
  {
    id: 5,
    question: 'Do you browse through railway timetables, directories or dictionaries just for pleasure?'
  },
  {
    id: 6,
    question: 'Do you resent the efforts of others to tell you what to do?'
  },
  {
    id: 7,
    question: 'When asked to make a decision would you be swayed by your like or dislike of the personality involved?'
  },
  {
    id: 8,
    question: 'Is it normally hard for you to "own up and take the blame"?'
  },
  {
    id: 9,
    question: 'Do you intend two or less children your family even though your health and income will permit more?'
  },
  {
    id: 10,
    question: 'Do you have a small circle of close friends rather than a large number of friends and speaking acquaintances?'
  },
  {
    id: 11,
    question: 'Are your actions considered unpredictable by others?'
  },
  {
    id: 12,
    question: 'Do you often sing or whistle just for the fun of it?'
  },
  {
    id: 13,
    question: 'Do you get occasional twitches of your muscles when there is no logical reason for it?'
  },
  {
    id: 14,
    question: 'Does "everything" seem glorious to you even though you are aware of some things that should be changed?'
  },
  {
    id: 15,
    question: 'Would you prefer to be in a position where you did not have the responsibilities of making decisions?'
  },
  {
    id: 16,
    question: 'Would you rather give orders than take them?'
  },
  {
    id: 17,
    question: 'Do the affairs of other people interest you very much?'
  },
  {
    id: 18,
    question: 'Do you put quite a few depreciations of others into your conversation?'
  },
  {
    id: 19,
    question: 'Do you consider too much money is being spent on social security?'
  },
  {
    id: 20,
    question: 'Are you considered warm-hearted by your friends?'
  },
  {
    id: 21,
    question: 'Do you act impulsively rather than deliberately?'
  },
  {
    id: 22,
    question: 'Do you make efforts to get others to laugh or smile?'
  },
  {
    id: 23,
    question: 'Is your voice quite varied rather than calm?'
  },
  {
    id: 24,
    question: 'Can your world "cave in on you" without your being upset?'
  },
  {
    id: 25,
    question: 'Do you say little except in response?'
  },
  {
    id: 26,
    question: 'Are you strict in the matter of discipline rather than being easy going?'
  },
  {
    id: 27,
    question: 'Are you readily interested in other people\'s conversation?'
  },
  {
    id: 28,
    question: 'Do you refrain from complaining when the other person is late for an appointment?'
  },
  {
    id: 29,
    question: 'When hunting or fishing do you feel concern for the pain you inflict on game, live bait or fish?'
  },
  {
    id: 30,
    question: 'Do you find it easy to express your emotions?'
  },
  {
    id: 31,
    question: 'Are you generally careless of accepted rules for protecting your health?'
  },
  {
    id: 32,
    question: 'Are you sometimes considered by others a "spoil sport" or a "wet blanket"?'
  },
  {
    id: 33,
    question: 'When unexpected things happen do some of your muscles have jerking motions?'
  },
  {
    id: 34,
    question: 'Are you constantly happy even though there is no real reason for it?'
  },
  {
    id: 35,
    question: 'Do you speak slowly?'
  },
  {
    id: 36,
    question: 'Would you admit you were wrong just to keep the peace?'
  },
  {
    id: 37,
    question: 'Do you give a judgement only after looking at the pros and cons?'
  },
  {
    id: 38,
    question: 'Do you consider there are other people who are definitely unfriendly towards you and work against you?'
  },
  {
    id: 39,
    question: 'Are you normally considerate in your demands on your employees, relatives and friends?'
  },
  {
    id: 40,
    question: 'Do you have only a few people of whom you are really fond?'
  },
  {
    id: 41,
    question: 'Do you take reasonable precautions to prevent accidents?'
  },
  {
    id: 42,
    question: 'Do you speedily recover from the effects of bad news?'
  },
  {
    id: 43,
    question: 'Does the idea of talking in front of people make you nervous?'
  },
  {
    id: 44,
    question: 'Do you ever get a "dreamlike" feeling towards life when it all seems unreal?'
  },
  {
    id: 45,
    question: 'Do you "circulate around" at a social gathering?'
  },
  {
    id: 46,
    question: 'Do you often keep your opinions to yourself because they do not seem important enough to tell others?'
  },
  {
    id: 47,
    question: 'Do you sometimes think others are looking at you or talking about you, when they are really not doing so?'
  },
  {
    id: 48,
    question: 'When you criticize, do you at the same time try to encourage?'
  },
  {
    id: 49,
    question: 'If you saw an article in a shop which was obviously mistakenly marked lower than its correct price, would you try to get it at that price?'
  },
  {
    id: 50,
    question: 'Do some people consider you to be cheerful?'
  },
  {
    id: 51,
    question: 'Do you get into trouble occasionally?'
  },
  {
    id: 52,
    question: 'Does life seem worthwhile?'
  },
  {
    id: 53,
    question: 'Do you have a particular hate or fear?'
  },
  {
    id: 54,
    question: 'Do you spontaneously give things away even though you have a use for them?'
  },
  {
    id: 55,
    question: 'Do you prefer to be an onlooker rather than participate in any active sport?'
  },
  {
    id: 56,
    question: 'Are you so sure of yourself that you sometimes annoy others?'
  },
  {
    id: 57,
    question: 'Do you find it easy to be impartial?'
  },
  {
    id: 58,
    question: 'Do you completely condemn a person because he is a rival or opponent in some aspect of your relations to him?'
  },
  {
    id: 59,
    question: 'Have you a definitely set standard of courteous behavior in front of other members of your family?'
  },
  {
    id: 60,
    question: 'Does emotional music have quite an effect on you?'
  },
  {
    id: 61,
    question: 'Would you "buy on credit" with the hope that you can keep up payments?'
  },
  {
    id: 62,
    question: 'Do you often "sit and think" about death, sickness, pain and sorrow?'
  },
  {
    id: 63,
    question: 'Do you remain upset for some time following an accident or other disturbing incident?'
  },
  {
    id: 64,
    question: 'Do you hold onto things for which you have no real use?'
  },
  {
    id: 65,
    question: 'Can you "start the ball rolling" at a social gathering?'
  },
  {
    id: 66,
    question: 'Are you rather indifferent to maintaining the dignity of your job or place in life?'
  },
  {
    id: 67,
    question: 'When hearing a lecturer, do you sometimes experience the idea that the speaker is referring entirely to you?'
  },
  {
    id: 68,
    question: 'Do you give much time in your conversation to the criticism of people and things?'
  },
  {
    id: 69,
    question: 'Do you consider the good of all concerned rather than your own personal advantages?'
  },
  {
    id: 70,
    question: 'Are you openly appreciative of beautiful things?'
  },
  {
    id: 71,
    question: 'Do you make plans well in advance of an event and then carry them out?'
  },
  {
    id: 72,
    question: 'Do you often ponder on past misfortunes?'
  },
  {
    id: 73,
    question: 'Does "external noise" rarely interfere with your concentration?'
  },
  {
    id: 74,
    question: 'Do you sometimes give away articles which, strictly speaking, do not belong to you?'
  },
  {
    id: 75,
    question: 'Do you pay less attention to things going on around you than most people?'
  },
  {
    id: 76,
    question: 'Are you sometimes considered "overbearing "?'
  },
  {
    id: 77,
    question: 'Are you inclined to be jealous?'
  },
  {
    id: 78,
    question: 'Do you accept criticism easily without resentment?'
  },
  {
    id: 79,
    question: 'Do you consider the modern prisons without bars system "doomed to failure"?'
  },
  {
    id: 80,
    question: 'Do you greet people cordially?'
  },
  {
    id: 81,
    question: 'Do you tend to put off doing things and then discover that it is too late?'
  },
  {
    id: 82,
    question: 'Does the youth of today have more opportunity than that of a generation ago?'
  },
  {
    id: 83,
    question: 'Are you usually undisturbed by "noises off" when you are trying to rest?'
  },
  {
    id: 84,
    question: 'Do you throw things away only to discover that you need them later?'
  },
  {
    id: 85,
    question: 'Is it easy for you to get yourself started?'
  },
  {
    id: 86,
    question: 'Would you give up easily on a given course if it were causing you a considerable amount of inconvenience?'
  },
  {
    id: 87,
    question: 'Are there some things about yourself on which you are touchy?'
  },
  {
    id: 88,
    question: 'Do you rarely suspect the actions of others?'
  },
  {
    id: 89,
    question: 'When you see someone in pain are you sympathetic enough as to want to do something about it?'
  },
  {
    id: 90,
    question: 'Do you live the kind of life where you have only a few expressions of enthusiasm?'
  },
  {
    id: 91,
    question: 'Do you break out in more explosive words or actions than would be expected from the cause?'
  },
  {
    id: 92,
    question: 'Do you sometimes wonder if anyone really cares about you?'
  },
  {
    id: 93,
    question: 'Do you bite your fingernails or chew objects?'
  },
  {
    id: 94,
    question: 'Do you sometimes feel compelled to repeat some interesting item or habit?'
  },
  {
    id: 95,
    question: 'Are your interests and activities modified somewhat by someone elses?'
  },
  {
    id: 96,
    question: 'Do you turn down responsibility because you doubt your fitness to cope?'
  },
  {
    id: 97,
    question: 'Are you prejudiced in favor of your own school, college, club, team etc?'
  },
  {
    id: 98,
    question: 'If you have a disagreement, do you think as well of the person afterwards?'
  },
  {
    id: 99,
    question: 'If you were invading another country would you feel sympathetic towards conscientious objectors in this country?'
  },
  {
    id: 100,
    question: 'Is your facial expression varied rather than set?'
  },
  {
    id: 101,
    question: 'Can you be a stabilizing influence when others get panicky?'
  },
  {
    id: 102,
    question: 'Would it take a definite effort on your part to consider the subject of suicide?'
  },
  {
    id: 103,
    question: 'Do you ever get a single thought which hangs around for days?'
  },
  {
    id: 104,
    question: 'When you have an opinion can you simply state it without outlining how you arrived at it?'
  },
  {
    id: 105,
    question: 'Are you a slow eater?'
  },
  {
    id: 106,
    question: 'Would you consider yourself energetic in your attitude towards life?'
  },
  {
    id: 107,
    question: 'Are you scientific in your thinking?'
  },
  {
    id: 108,
    question: 'Is it hard to please you?'
  },
  {
    id: 109,
    question: 'Would you stop and find out whether a person needed help even though they had not directly asked for it?'
  },
  {
    id: 110,
    question: 'When passing a beautiful child do you avoid showing interest rather than looking and smiling?'
  },
  {
    id: 111,
    question: 'Do you pay your debts and keep your promises when it is possible?'
  },
  {
    id: 112,
    question: 'Does a minor failure on your part rarely trouble you?'
  },
  {
    id: 113,
    question: 'Do you sleep well?'
  },
  {
    id: 114,
    question: 'Do you sometimes feel that you talk too much?'
  },
  {
    id: 115,
    question: 'Do you prefer to take a passive role in any club or organization to which you belong?'
  },
  {
    id: 116,
    question: 'Do you seek to have your own way rather than being likely to give in to the wishes of others?'
  },
  {
    id: 117,
    question: 'Is your opinion influenced by looking at things from the standpoint of your education, experience or occupation?'
  },
  {
    id: 118,
    question: 'Do you usually criticize a film or show that you see or a book that you read?'
  },
  {
    id: 119,
    question: 'Would you use corporal punishment on a child aged 10 if it refused to obey you?'
  },
  {
    id: 120,
    question: 'Do you smile much?'
  },
  {
    id: 121,
    question: 'Do you often make tactless blunders?'
  },
  {
    id: 122,
    question: 'Do you remember illness or pain for some time?'
  },
  {
    id: 123,
    question: 'Do you ever get disturbed by the noise of the wind or a "house settling down"?'
  },
  {
    id: 124,
    question: 'Do you get very ill at ease in disordered surroundings?'
  },
  {
    id: 125,
    question: 'Provided the distance was not too great, would you still prefer to ride than walk?'
  },
  {
    id: 126,
    question: 'Do you try to convert others to your ideas about several subjects on which you are not an expert?'
  },
  {
    id: 127,
    question: 'Are personal interests unable to sway you from sound decisions?'
  },
  {
    id: 128,
    question: 'Do you get frustrated at not being able to do something, rather than finding a substitute activity or system?'
  },
  {
    id: 129,
    question: 'Have you made more than one loan which you were persuaded to do against your wishes and were never repaid?'
  },
  {
    id: 130,
    question: 'When recounting some amusing incident, can you easily imitate the mannerisms or the dialect in the original incident?'
  },
  {
    id: 131,
    question: 'Do you frequently take actions, even though you know your own good judgment would indicate otherwise?'
  },
  {
    id: 132,
    question: 'Do you often feel depressed?'
  },
  {
    id: 133,
    question: 'Are you aware of any habitual physical mannerisms such as pulling your hair, nose, ears and such like?'
  },
  {
    id: 134,
    question: 'Does disorder bother you so much that you feel you must take immediate and drastic action against it?'
  },
  {
    id: 135,
    question: 'Do you sometimes get quite exhilarated?'
  },
  {
    id: 136,
    question: 'Can you accept defeat easily without the necessity of "swallowing your disappointment"?'
  },
  {
    id: 137,
    question: 'Can you see things from someone else\'s point of view when you wish to?'
  },
  {
    id: 138,
    question: 'Do you rarely express your grievances?'
  },
  {
    id: 139,
    question: 'Are you in favor of color bar and class distinction?'
  },
  {
    id: 140,
    question: 'Would you rather be with adults all the time rather than with children part of the time?'
  },
  {
    id: 141,
    question: 'Can you quickly adapt to new conditions and situations even though they may be difficult?'
  },
  {
    id: 142,
    question: 'Are you sometimes completely unable to enter the spirit of things?'
  },
  {
    id: 143,
    question: 'Do some noises "set your teeth on edge?"'
  },
  {
    id: 144,
    question: 'Do you work in "spurts," being relatively inactive and then furiously active for a day or two?'
  },
  {
    id: 145,
    question: 'Do you frequently stay up late?'
  },
  {
    id: 146,
    question: 'Does the number of uncompleted jobs on hand bother you?'
  },
  {
    id: 147,
    question: 'When voting, do you study the candidates and issues, rather than voting the same party straight?'
  },
  {
    id: 148,
    question: 'Do you consider the best points of most people and only rarely speak slightingly of them?'
  },
  {
    id: 149,
    question: 'Do the "petty foibles" of others make you impatient?'
  },
  {
    id: 150,
    question: 'Do people enjoy being in your company?'
  },
  {
    id: 151,
    question: 'Do you usually carry out assignments promptly and systematically?'
  },
  {
    id: 152,
    question: 'Do you laugh or smile quite readily?'
  },
  {
    id: 153,
    question: 'Do children irritate you?'
  },
  {
    id: 154,
    question: 'Can you quietly watch another work, without feeling you must insist on helping when they indicate they would rather do it themselves?'
  },
  {
    id: 155,
    question: 'Are you less talkative than your associates?'
  },
  {
    id: 156,
    question: 'Are you definite and emphatic in voice and manner?'
  },
  {
    id: 157,
    question: 'Do you place too high an importance on your own interests and fields of knowledge in comparison to others?'
  },
  {
    id: 158,
    question: 'Do you suspect someone does not like you and criticizes you to others?'
  },
  {
    id: 159,
    question: 'Would you assist a fellow traveler rather than leave it to the officials?'
  },
  {
    id: 160,
    question: 'Are you cordial only to close friends, if at all?'
  },
  {
    id: 161,
    question: 'Do you quickly return to normal rather than being disturbed for a while after seeing a tragic movie or play?'
  },
  {
    id: 162,
    question: 'Does some inferiority make you feel sad?'
  },
  {
    id: 163,
    question: 'Is it easy for you to relax?'
  },
  {
    id: 164,
    question: 'When you really want to do something do you feel your desires are paramount to all opposition"?'
  },
  {
    id: 165,
    question: 'Do you attempt to "start things in your area"?'
  },
  {
    id: 166,
    question: 'Do you feel strongly convinced of the correctness of your opinions when in a controversy, excluding those subjects about which you are an expert?'
  },
  {
    id: 167,
    question: 'Do you find it annoying to have any criticism made of you, even though it is justified and from which you could profit?'
  },
  {
    id: 168,
    question: 'Having settled an argument, do you continue to feel disgruntled for a while?'
  },
  {
    id: 169,
    question: 'Would you stand by and fail to protect some animal from needless suffering?'
  },
  {
    id: 170,
    question: 'Do you give a kiss, hug, pat on the back or otherwise manifest pleasure in meeting friends you haven\'t seen for some time, rather than just being polite?'
  },
  {
    id: 171,
    question: 'Do you find it hard to get started on a task that needs to be done?'
  },
  {
    id: 172,
    question: 'Is the idea of death, or even reminders of death, abhorrent to you?'
  },
  {
    id: 173,
    question: 'Do you sometimes get so frightened or apprehensive that you have physical reactions?'
  },
  {
    id: 174,
    question: 'Do you find yourself "going off in all directions at once"?'
  },
  {
    id: 175,
    question: 'Could someone else consider that you were really active?'
  },
  {
    id: 176,
    question: 'Is your opinion of your abilities less than the facts warrant?'
  },
  {
    id: 177,
    question: 'Do your emotions sway your judgment much?'
  },
  {
    id: 178,
    question: 'If you lose an article do you get the idea that "someone must have stolen or mislaid it"?'
  },
  {
    id: 179,
    question: 'Are you opposed to the "probation system" for criminals?'
  },
  {
    id: 180,
    question: 'Are you friendly in voice, attitude and expression?'
  },
  {
    id: 181,
    question: 'Do you "stand up" well under difficult situations?'
  },
  {
    id: 182,
    question: 'Do you feel upset about the fate of war victims and political refugees?'
  },
  {
    id: 183,
    question: 'Do you spend much time on "needless worries"?'
  },
  {
    id: 184,
    question: 'Does life seem rather vague and unreal to you?'
  },
  {
    id: 185,
    question: 'Do you frequently find yourself "waiting" for something to happen instead of taking action?'
  },
  {
    id: 186,
    question: 'If you thought that someone was suspicious of you and your actions, would you tackle them on the subject, rather than leave them to work it out?'
  },
  {
    id: 187,
    question: 'In a disagreement do you find it hard to understand how the other person fails to see your side and thus agree with you?'
  },
  {
    id: 188,
    question: 'Do you spend very little if any time grumbling about the conditions of your work?'
  },
  {
    id: 189,
    question: 'Are you usually truthful to others?'
  },
  {
    id: 190,
    question: 'Do mere acquaintances appeal to you for aid or advice in their personal difficulties?'
  },
  {
    id: 191,
    question: 'Do you spend too freely in relation to your income?'
  },
  {
    id: 192,
    question: 'Do you sometimes feel that your age is against you (too young or too old)?'
  },
  {
    id: 193,
    question: 'Can you take a "calculated risk" without too much worry?'
  },
  {
    id: 194,
    question: 'Do you have spells of being sad and depressed rather than staying about the same level?'
  },
  {
    id: 195,
    question: 'Do others push you around?'
  },
  {
    id: 196,
    question: 'Do you tend to hide your feelings?'
  },
  {
    id: 197,
    question: 'Do you make allowances for your friends where with others you might judge more severely?'
  },
  {
    id: 198,
    question: 'Are you frequently dismayed by the actions of others not being able to understand their duplicity or stupidity?'
  },
  {
    id: 199,
    question: 'If you were involved in a slight car accident would you really take the trouble to see that any damage you did was made good?'
  },
  {
    id: 200,
    question: 'Do you consider you have many warm friends?'
  }
];

module.exports = questions;
