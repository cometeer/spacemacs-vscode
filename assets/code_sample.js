function downTheRabbitHole(growThisBig) {
  var theFullDeck = Array(growThisBig);
  var theHatter = Function('return this/4').call(2 * 2);
  var theMarchHare = Boolean('The frumious Bandersnatch!');

  var theVerdict = 'the white rabbit'.split(/the march hare/).slice(theHatter);

  //into the pool of tears...
  eval(theFullDeck.join('if (!theFullDeck[++theHatter]) {\
      theMarchHare = 1;\
      theVerdict.push(theHatter);\
      ' + theFullDeck.join('theFullDeck[++theMarchHare * theHatter]=true;') + '}')
  );

  return theVerdict;
}
