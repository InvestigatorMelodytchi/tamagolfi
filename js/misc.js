/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_78f6=["\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x61\x62\x73","\x50\x49","\x63\x6F\x73","\x73\x69\x6E","\x72\x6F\x75\x6E\x64","\x61\x74\x61\x6E\x32","\x73\x71\x72\x74","","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x70\x6C\x69\x63\x65","\x70\x6F\x77","\x77\x69\x6E\x64\x53\x70\x65\x65\x64","\x6F\x62\x6A\x48\x6F\x6C\x65","\x77\x69\x6E\x64\x44\x69\x72","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x63\x65\x69\x6C","\x79","\x73\x6F\x72\x74","\x4D\x41\x4D\x41\x54\x4F\x4D\x4F","\x47\x55\x52\x55\x47\x55\x52\x55"];function resetPlayers(){for(fI= 0;fI< 4;fI++){resetPlayer(fI)}}function resetPlayer(_0x911A){playerChar[_0x911A]=  -1;playerAi[_0x911A]= false;playerColor[_0x911A]= 0;playerScore[_0x911A]= 0}function checkForChar(_0x905A){for(fi= 0;fi< 4;fi++){if(playerChar[fi]== _0x905A){return (true)}};return (false)}function checkCharPlayer(_0x905A){for(fi= 0;fi< 4;fi++){if(playerChar[fi]== _0x905A){return (fi)}};return (-1)}function getUnselectedChar(){tRe=  -1;while(tRe==  -1|| checkForChar(tRe)){tRe= Math[_$_78f6[2]](Math[_$_78f6[0]]()* spr_player[_$_78f6[1]])};return (tRe)}function smallNegate(_0x911A){if(Math[_$_78f6[3]](_0x911A)< 0.00000000000001){return (0)}else {return (_0x911A)}}function cos(_0x911A){return (smallNegate(Math[_$_78f6[5]](_0x911A* (Math[_$_78f6[4]]/ 180))))}function sin(_0x911A){return (smallNegate(Math[_$_78f6[6]](_0x911A* (Math[_$_78f6[4]]/ 180))))}function xDir(_0x947A,_0x917A){return (cos(_0x917A)* _0x947A)}function yDir(_0x947A,_0x917A){return (-sin(_0x917A)* _0x947A)}function getBetween(_0x92BA,_0x92DA,_0x919A){return (_0x92BA+ ((_0x92DA- _0x92BA)* _0x919A))}function randomRange(_0x92BA,_0x92DA){return (_0x92BA+ Math[_$_78f6[7]](Math[_$_78f6[0]]()* (_0x92DA- _0x92BA)))}function randomMax(_0x925A){return (randomRange(0,_0x925A))}function valueBetween(_0x92BA,_0x965A,_0x92DA){return ((_0x965A>= _0x92BA&& _0x965A<= _0x92DA)|| (_0x965A>= _0x92DA&& _0x965A<= _0x92BA))}function calcDirection(_0x8F9A,_0x8FDA,_0x8FBA,_0x8FFA){tRe= Math[_$_78f6[8]](_0x8FFA- _0x8FDA,_0x8FBA- _0x8F9A)* (180/ Math[_$_78f6[4]]);if(tRe< 0){tRe= Math[_$_78f6[3]](tRe)}else {tRe= 360- tRe};return (tRe)}function calcDistance(_0x8F9A,_0x8FDA,_0x8FBA,_0x8FFA){return (Math[_$_78f6[9]](sqr(_0x8FBA- _0x8F9A)+ sqr(_0x8FFA- _0x8FDA)))}function sqr(_0x911A){return (_0x911A* _0x911A)}function getSec(_0x911A){return (Math[_$_78f6[7]](_0x911A* 60))}function mean(_0x92BA,_0x92DA){return ((_0x92BA+ _0x92DA)/ 2)}function exists(_0x941A){return (_0x941A!= undefined)}function getPlayers(){for(fI= 3;fI>= 0;fI--){if(playerChar[fI]>  -1){return (fI+ 1)}};return (0)}function keyArrayString(_0x911A){tRe= _$_78f6[10];for(fi= 0;fi< _0x911A[_$_78f6[1]];fi++){tRe+= gameLetterTable[_0x911A[fi]- 65]};return (tRe)}function selectColor(_0x905A,_0x927A){tAv= [0,1,2,3];for(fI= 3;fI>= 0;fI--){if(playerChar[fI]== _0x905A){tAv[_$_78f6[12]](tAv[_$_78f6[11]](playerColor[fI]),1)}};if(tAv[_$_78f6[11]](_0x927A)>  -1){return (_0x927A)}else {if(tAv[_$_78f6[1]]== 0){return (0)}else {return (tAv[0])}}}function median(_0x92BA,_0x92DA,_0x94FA){if(valueBetween(_0x92DA,_0x92BA,_0x94FA)){return (_0x92BA)}else {if(valueBetween(_0x92BA,_0x92DA,_0x94FA)){return (_0x92DA)}else {return (_0x94FA)}}}function mean(_0x92BA,_0x92DA){return ((_0x92BA+ _0x92DA)/ 2)}function restart(){TransGo( new ControlGolf())}function shortDecimal(_0x92FA,_0x90FA){return (Math[_$_78f6[7]](_0x92FA* Math[_$_78f6[13]](10,_0x90FA))/ Math[_$_78f6[13]](10,_0x90FA))}function wind(_0x969A,_0x967A){objControl[_$_78f6[15]][_$_78f6[14]]= _0x969A;objControl[_$_78f6[15]][_$_78f6[16]]= _0x967A}function getNumWidth(_0x92FA){return (_0x92FA[_$_78f6[17]]()[_$_78f6[1]]* 7)}function getEven(_0x92FA){return (Math[_$_78f6[2]](_0x92FA/ 2)== Math[_$_78f6[18]](_0x92FA/ 2))}function depthSort(_0x929A){_0x929A[_$_78f6[20]](function(_0x92BA,_0x92DA){return (_0x92BA[_$_78f6[19]]- _0x92DA[_$_78f6[19]])})}function charCode(_0x903A){switch(keyArrayString(_0x903A)){case _$_78f6[21]:return (12);case _$_78f6[22]:return (13);default:return (-1)}}