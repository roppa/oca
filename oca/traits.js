'use strict';

const columnList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const traits = {
  '---+++++++': 'Neurotic. Stuck heavily with past losses. Frequently abandoned in childhood.',
  '-++-++++++': 'Extremely unstable, unreliable and impulsive.',
  '-+-+++-+++': 'Angry outbursts. Temper.',
  '---+++----': 'Capricious, irresponsible, self-centred, inverted on all dynamics. A potential murderer.',
  '+-++++++++': 'Actively dispersed.',
  '-++++++++-': 'There is an indication that a you could be in a passive aggressive environment where your reality is cut and you cannot communicate because it will be twisted and used against him.',
  '+++++++-++': 'Perfectionist.',
  '++--++++++': 'Apprehension and anxiety.',
  '++-++++-++': 'Feelings of inferiority.',
  '++++-+++++': 'Riding a manic - glee of insanity.',
  '+++-+++-++': 'Present time problem.',
  '++++-+++++': 'Can\'t withhold. Compulsive.',
  '++++-++---': 'Doesn\'t grant beingness.',
  '++++--+++-': 'Hormone deficiency. May need medical treatment.',
  '+++++--+++': 'If remainder of the graph is reasonable, the person may be on drugs or alcohol or being heavily suppressed.',
  '+++++-+-++': 'Lacks initiative.',
  '++++++-+++': 'Affectionate disposition.',
  '++++++---+': 'Paranoid and psychotic. Very much effect. Lacking in accord and self-centred.',
  '++++++--++': 'Hard to get along with.',
  '++++++-++-': 'Introverted. Self-centred.',
  '+++++++++-': 'Propitiation.',
};

const generateKey = percentileObject => {
  let key = '';
  columnList
    .forEach(index => {
      if (!(index in percentileObject)) {
        throw new Error('Invalid percentile object');
      }

      key += (percentileObject[index] < 0) ? '-' : '+';
    });
  return key;
};

const getTrait = percentileObject => {

  let key = '';

  if (typeof percentileObject !== 'object') {
    throw new Error('You must pass a valid percentile object');
  }

  return traits[generateKey(percentileObject)] || 'Could not find trait';

};

module.exports = getTrait;

// TRAITS: 
//
// TRAIT A
//
// PLUS: STABLE. ORIENTED STANDARDS.
//
// 1. High standards. Knows what he wants and how he wants things to be.
// 2. Makes plans and carries them out.
// 3. Can change mind easily, but on own determinism.
// 4. Deliberate in actions, but good judge of situations and therefore mostly
// tactful and remains out of serious trouble.
// 5. Does things systematically.
// 6. Adapts readily.
// 7. Keeps promises where possible.
// 8. Is stable and therefore a steadying influence.
// 9. Starts easily.
// 10. Not put out for long by any upsets - quickly returns to normal.
// 11. Not easily swayed by others.
// 12. Good self mastery.
// 13. Good concentration.
// 14. Good stable data level - knows the rules of the game.
//
// MINUS: UNSTABLE. DISPERSED. IMPULSIVE.
//
// 1. No stable data on which to make decisions - does not know the rules of
// the game.
// 2. Confused.
// 3. Poor concentration.
// 4. At -60 or below, individual is hypnotic and body can be monitored without
// change of mind. All insane very low on this.
// 5. Out of control.
// 6. Impulsive in actions. Gets into trouble a lot as does things without thinking.
// 7. Careless about things - money, health, possessions.
// 8. Hard to get started.
// 9. Tactless.
// 10. Never keeps promises.
// 11. Not a good judge of situations.
// 12. Easily upset.
// 13. Never plans things and carries them out.
// 14. Doesn't follow directions - can't duplicate.
//
// TRAIT B
//
// PLUS: HAPPY.
// 1. Cheerful, satisfied.
// 2. Is achieving goals.
// 3. Feeling of well-being.
// 4. Can join in the fun or not as he wishes.
// 5. Not a spoil sport.
// 6. Recovers rapidly from bad news.
// 7. Finds life worth living.
// 8. Doesn't usually suffer from bad dreams or nightmares.
// 9. Considers there is plenty of opportunity.
// 10. Likes others to be happy.
// 11. Smiling disposition.
//
// MINUS: DEPRESSED. UNHAPPY.
//
// 1. Goals not well aligned or is not making the ones he has.
// 2. Disturbed by failures and dwells on them.
// 3. Damaging in all business and social relationships.
// 4. A wet blanket - a spoil sport.
// 5. Doesn't recover from bad news rapidly.
// 6. Has bad dreams.
// 7. Life is not worth while.
// 8. Can't join in the fun at his own wish.
// 9. Feels inferior.
// 10. Glum - sad at times.
// 11. Ponders on past misfortunes and illnesses.
// 12. Considers there is not much opportunity.
//
// TRAIT C
//
// PLUS: COMPOSED.
// 1. Relaxed. Not a worrying type.
// 2. Calm.
// 3. Good body tone.
// 4. Good voice control.
// 5. No phobias.
// 6. Not easily surprised.
// 7. Steady.
// 8. Sleeps well.
// 9. Not easily distracted.
// 10. Returns to normal quickly after an upset.
// 11. No nervous habits.
// 12. Good muscular control.
//
// MINUS: NERVOUS. SCATTERED.
//
// 1. A worrier.
// 2. Tense - doesn't easily relax.
// 3. Phobias.
// 4. Stuck thoughts.
// 5. Easily frightened.
// 6. Nervous habits.
// 7. No voice control.
// 8. Easily distracted.
// 9. Environment acts as a threat - feels there is something going on which he
// is not able to control.
// 10. Increased fatigue from applying effort.
// 11. Doesn't easily return to normal after upsets.
//
// TRAIT D
//
// PLUS: PERSONABLE. CERTAINTY LEVEL. CONSISTENT.
// 1. Reliable.
// 2. Good certainty on self.
// 3. Even temperament.
// 4. Consistent - not impulsive.
// 5. Can withhold.
// 6. Responsible.
// 7. Aware of values.
// 8. Can reason logically.
// 9. Knows what he is doing.
//
// MINUS: UNCERTAIN. IMPULSIVE. INCONSISTENT.
//
// 1. Unable to withhold.
// 2. Compulsive.
// 3. Unreliable.
// 4. Unpredictable.
// 5. Impulsive.
// 6. Changeable without reason.
// 7. Only sporadic liveliness.
// 8. Inconsistent.
// 9. Lacks certainty.
// 10. Constantly happy without there being any reason for it.
//
// TRAIT E
//
// PLUS: ACTIVE. IN MOTION.
// 1. Energetic.
// 2. Will take responsibility.
// 3. Has initiative.
// 4. Attentive.
// 5. Has plenty to do. Full days and always on the go.
// 6. Lively.
// 7. Has a wide variety of interests and activities.
// 8. Not pushed around by others - will take action.
//
// MINUS: STOPPED. REACTIVELY RETARDED.
//
// 1. Passive. Lazy. A plodder.
// 2. Lacks initiative.
// 3. Few interests and activities.
// 4. Quiet - reserved.
// 5. Hard to get started.
// 6. Pushed around.
// 7. A waiter.
// 8. Avoids responsibility.
// 9. Not much to do - days not full.
//
// TRAIT F
//
// PLUS: CAPABLE. OVERT. AGGRESSIVE.
// 1. Willing to cause things.
// 2. Self-assured.
// 3. Does something instead of resigning himself to the situation.
// 4. Emphatic.
// 5. Dominant.
// 6. Overt.
// 7. Has good idea of own capabilities.
// 8. Free about expressing opinions and feelings.
// 9. Maintains poise.
//
// MINUS: INHIBITED.
//
// 1. Unwilling to cause things.
// 2. Meek.
// 3. Doubts own fitness and runs himself down.
// 4. Covert.
// 5. Easily dominated.
// 6. Hides feelings.
// 7. Has been stopped many times.
// 8. Keeps opinions to self.
//
// TRAIT G
//
// PLUS: RESPONSIBLE. OBJECTIVE. CAUSE.
// 1. Extroverted.
// 2. Can admit cause and not blame.
// 3. Able to see what he has caused.
// 4. Can see others' points of view.
// 5. Makes sound decisions.
// 6. Not prejudiced.
// 7. Impartial.
// 8. Not jealous.
// 9. Able to make an independent decision based on facts.
// 10. Capacity for initiative - sees something needs doing and does it.
// 11. Logical and scientific.
//
// MINUS: IRRESPONSIBLE. SUBJECTIVE. BEING EFFECT.
//
// 1. Introverted.
// 2. Prejudiced.
// 3. Highly self-centred - may think others are working against him.
// 4. Has touchy points.
// 5. Makes unsound decisions based on emotions and not facts.
// 6. No initiative.
// 7. Avoids responsibility.
// 8. Resented by others and damages relationships with other dynamics.
//
// TRAIT H
//
// PLUS: LOGICAL REASONING. APPRECIATION.
// 1. Understanding.
// 2. Not hard to please.
// 3. Thinks well of most people.
// 4. Not suspicious.
// 5. Pleasant.
// 6. Can criticise but is also able to accept.
// 7. Accepts others as they are, although he has a good reality on them.
// 8. If he cannot do what he wants, he finds a substitute.
//
// MINUS: CAPACITY FOR ERROR. HYPERCRITICAL.
//
// 1. Not easily able to estimate others.
// 2. Invalidative.
// 3. Critical of others and their actions - goes to great length to invalidate
// others' best efforts.
// 4. Suspicious of others.
// 5. Intolerant.
// 6. Tactless.
// 7. Resented by others and resents others.
// 8. Has automatic attack mechanism (often suppressed).
// 9. Cannot accept others readily.
// 10. Annoyed if he cannot do what he wants to.
// 11. A grumbler.
//
// TRAIT I
//
// PLUS: APPRECIATIVE. EMPATHY.
// 1. Friendly.
// 2. Courteous.
// 3. Truthful.
// 4. Warmly responsive to the needs of others.
// 5. Able to see how others feel in a situation.
// 6. Considerate towards others.
//
// MINUS: LACK OF ACCORD. COLD.
//
// 1. Hard boiled.
// 2. Cannot make friends easily.
// 3. Not courteous. Impolite.
// 4. Deceitful.
// 5. No idea of the realities of others.
// 6. Not concerned with others' feelings.
// 7. Not considerate in demand on others.
// 8. Not aware or concerned with how others fare.
// 9. Feels that some people don't deserve assistance.
// 10. Uses punishment.
// 11. Cynical.
//
// TRAIT J
//
// PLUS: COMMUNICATION LEVEL.
// 1. Expressively warm-hearted.
// 2. Friendly.
// 3. Cheerful.
// 4. Good in company.
// 5. Plenty of friends and acquaintances.
// 6. Affectionate.
// 7. Cordial.
// 8. Free in expressing feelings and opinions.
//
// MINUS: WITHDRAWN.
//
// 1. Individuated.
// 2. Introverted.
// 3. Poor in company.
// 4. Not many friends and acquaintances.
// 5. Not affectionate.
// 6. Hides feelings.
// 7. Not cordial.
