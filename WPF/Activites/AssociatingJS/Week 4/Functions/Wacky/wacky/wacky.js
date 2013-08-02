/* Malik Henry
	Joseph Dalton
	August 1, 2013
	Assignment: Functions

*/

//The Insult Generator

// This codes displays random insult words of threes. 




var wordBank = {

 word1 :['artless','bawdy','beslubbering','bootless','churlish','cockered','clouted','craven','currish','dankish','dissembling','droning','errant','fawning','fobbing','froward','frothy','gleeking','goatish','gorbellied','impertinent','infectious','jarring','loggerheaded','lumpish','mammering','mangled','mewling','paunchy','pribbling','puking','puny','qualling','rank','reeky','roguish','ruttish','saucy','spleeny','spongy','surly','tottering','unmuzzled','vain','venomed','villainous','warped','wayward','weedy','yeasty'],

 word2 :['weather-bitten','unchin-snouted','toad-spotted','tickle-brained','tardy-gaited','swag-bellied','spur-galled','sheep-biting','shard-borne','rump-fed','rude-growing','rough-hewn','reeling-ripe','pox-marked','pottle-deep','plume-plucked','onion-eyed','motley-minded','milk-livered','knotty-pated','ill-nurtured','ill-breeding','idle-headed','hell-hated','hedge-born','hasty-witted','half-faced','guts-griping','full-gorged','fool-born','folly-fallen','fly-bitten','flap-mouthed','fen-sucked','fat-kidneyed','elf-skinned','earth-vexing','dread-bolted','doghearted','dizzy-eyed','dismal-dreaming','crook-pated','common-kissing','clay-brained','clapper-clawed','boil-brained','beetle-headed','beef-witted','bat-fowling','base-court'],

 word3 :['apple-john','baggage','barnacle','bladder','boar-pig','bugbear','bum-bailey','canker-blossom','clack-dish','clotpole','coxcomb','codpiece','death-token','dewberry','flap-dragon','flax-wench','flirt-gill','foot-licker','fustilarian','giglet','gudgeon','haggard','harpy','hedge-pig','horn-beast','hugger-mugger','joithead','lewdster','lout','maggot-pie','malt-worm','mammet','measle','minnow','miscreant','moldwarp','mumble-news','nut-hook','pigeon-egg','pignut','puttock','pumpion','ratsbane','scut','skainsmate','strumpet','varlot','vassal','whey-face','wagtail']

}; //set up variable to hold the insult. 

var funnyInsults;
//set up and get a random word for each section of our insult

var word1 = wordBank.word1[[Math.floor(Math.random()*wordBank.word1.length)]]; // This variable includes the first bank of words to generate. 

var word2 = wordBank.word2[[Math.floor(Math.random()*wordBank.word2.length)]]; // This variable includes the second bank of words to generate.

var word3 = wordBank.word3[[Math.floor(Math.random()*wordBank.word3.length)]]; // This variable includes the third bank of words to generate.

//Creates the insults using the three variables previously. 
funnyInsults = 'You '+word1+' '+word2+' '+word3+'!'; // This includes the three variable to generate the insult.
alert(funnyInsults); // Shows the alert with the insult generated.
console.log(funnyInsults); //Prints out to the console the same in the alert box.
