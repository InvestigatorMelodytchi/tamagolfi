/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_df40=["\x6C\x65\x6E\x67\x74\x68","\x68\x6F\x6C\x65\x4F\x62\x73","\x6F\x62\x6A\x48\x6F\x6C\x65","\x48\x69\x74","\x78","\x79","\x73\x68\x72\x6F\x6F\x6D\x54\x79\x70\x65","\x73\x68\x72\x6F\x6F\x6D\x54\x69\x63\x6B","\x7A","\x62\x61\x6C\x6C\x53\x70\x65\x65\x64","\x53\x65\x74","\x42\x6F\x75\x6E\x63\x65","\x44\x72\x61\x77"];function ObsCollision(_0x13EAB){for(fi= 0;fi< objControl[_$_df40[2]][_$_df40[1]][_$_df40[0]];fi++){if(objControl[_$_df40[2]][_$_df40[1]][fi][_$_df40[3]](_0x13EAB)){return (true)}};return (false)}function ObsMushroom(_0x13C98,_0x13CD3,_0x14A6C){this[_$_df40[4]]= _0x13C98* 32;this[_$_df40[5]]= 80+ (_0x13CD3* 32);this[_$_df40[6]]= _0x14A6C;this[_$_df40[7]]= 0;this[_$_df40[3]]= function(_0x13EAB){tD= calcDistance(this[_$_df40[4]]+ 16,this[_$_df40[5]]+ 16,_0x13EAB[_$_df40[4]],_0x13EAB[_$_df40[5]]);tR= calcDirection(this[_$_df40[4]]+ 16,this[_$_df40[5]]+ 16,_0x13EAB[_$_df40[4]],_0x13EAB[_$_df40[5]]);if(valueBetween(this[_$_df40[4]],_0x13EAB[_$_df40[4]],this[_$_df40[4]]+ 32)&& valueBetween(this[_$_df40[5]],_0x13EAB[_$_df40[5]],this[_$_df40[5]]+ 32)&& _0x13EAB[_$_df40[8]]>=  -24&& this[_$_df40[7]]<= 0){if(tD>= 16- (_0x13EAB[_$_df40[9]]+ 0.5)){_0x13EAB[_$_df40[10]]((this[_$_df40[4]]+ 16)+ xDir(15,tR),(this[_$_df40[5]]+ 16)+ yDir(15,tR),_0x13EAB[_$_df40[8]])}else {_0x13EAB[_$_df40[10]](_0x13EAB[_$_df40[4]],_0x13EAB[_$_df40[5]],-25)};if(this[_$_df40[6]]== 1){_0x13EAB[_$_df40[11]](2.5,180,-2.5)}else {if(this[_$_df40[6]]== 2){_0x13EAB[_$_df40[11]](2.5,0,-2.5)}else {_0x13EAB[_$_df40[11]](1,calcDirection(0,0,_0x13EAB[_$_df40[4]]- (this[_$_df40[4]]+ 16),0),-2.5)}};playSound(snd_gen_bounce);this[_$_df40[7]]= 30;return (true)}else {return (false)}};this[_$_df40[12]]= function(_0x13C98){drawSprite(spr_golf_mushroom,this[_$_df40[6]],0,this[_$_df40[4]]- _0x13C98,this[_$_df40[5]]- 16);if(this[_$_df40[7]]> 0){this[_$_df40[7]]--}}}