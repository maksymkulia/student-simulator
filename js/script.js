var VFood = 100;
var VHealth = 100;
var VStudy = 100;
var VMood = 100;
var VRespect = 100;
var VMoney = 500;

var ValueDays = 60;
var ValueSemester = 1;
var ValueCourse = 1;
var ValueMoves = 3;
var ValHW = 0;

var DeadCountFo = 0;
var DeadCountHl = 0;
var DeadCountSt = 0;
var DeadCountMo = 0;

var TechValFo;
var TechValHl;
var TechValSt;
var TechValMo;

$(document).ready(function(){
	EchoVals();
});
	
function ChangeTab(Tab){
	$('#Fo').css('display', 'none');
	$('#H').css('display', 'none');
	$('#M').css('display', 'none');
	$('#W').css('display', 'none');
	$('#S').css('display', 'none');
	$('#R').css('display', 'none');
	$('#Fr').css('display', 'none');
	$('#G').css('display', 'none');
	$('#B').css('display', 'none');
	
	$('#'+Tab).css('display', 'block');
}
function CountVals(Food, Health, Study, Mood, Respect, Money, HW){
	if ((VMoney + Money) < 0){alert('No Money!'); return;}
	if ((VRespect + Respect) < 0){alert('No Respect!'); return;}
	VFood = VFood + Food;
	if(VFood>100){VFood = 100; DeadCountFo=0;}
	if(VFood<=0){
		VFood = 0; DeadCountFo = DeadCountFo + 1; 
		if(DeadCountFo>3){
		alert('You are dead!'); return;} 
		if(DeadCountFo<=3){
		TechValFo = 4 - DeadCountFo;
		alert('You need FOOD or you will die in '+TechValFo+' moves!');}
		}
	if(VFood>0){DeadCountFo=0;}
	VHealth = VHealth + Health;
	if(VHealth>100){VHealth = 100; DeadCountHl=0;}
	if(VHealth<=0){
		VHealth = 0; DeadCountHl = DeadCountHl + 1; 
		if(DeadCountHl>3){
		alert('You are dead!'); return;} 
		if(DeadCountHl<=3){
		TechValHl = 4 - DeadCountHl;
		alert('You need HEALTH or you will die in '+TechValHl+' moves!');}
	}
	if(VHealth>0){DeadCountHl=0;}
	VStudy = VStudy + Study;
	if(VStudy>100){VStudy = 100; DeadCountSt=0;}
	if(VStudy<=0){
		VStudy = 0; DeadCountSt = DeadCountSt + 1; 
		if(DeadCountSt>3){
		alert('You expelled from the university!'); return;} 
		if(DeadCountSt<=3){
		TechValSt = 4 - DeadCountSt;
		alert('You need STUDY or you will be expelled from the university in '+TechValSt+' moves!');}
	}
	if(VStudy>0){DeadCountSt=0;}
	VMood = VMood + Mood;
	if(VMood>100){VMood = 100; DeadCountMo=0;}
	if(VMood<=0){
		VMood = 0; DeadCountMo = DeadCountMo + 1; 
		if(DeadCountMo>3){
		alert('You are dead!'); return;} 
		if(DeadCountMo<=3){
		TechValMo = 4 - DeadCountMo;
		alert('You need MOOD or you will die in '+TechValMo+' moves!');}
	}
	if(VMood>0){DeadCountMo=0;}
	VRespect = VRespect + Respect;
	VMoney = VMoney + Money;
	ValHW = ValHW +HW;
	if(ValHW<0){ValHW = 0;}
	ValueMoves = ValueMoves - 1;
	if(ValueMoves<1){
	ValueMoves = 3; ValueDays = ValueDays - 1; ValHW = ValHW + rand(2,3);
		if(ValueDays<1){
		ValueDays = 60; ValueSemester = ValueSemester + 1;
			if(ValueSemester>2){
			ValueSemester = 1; ValueCourse = ValueCourse + 1;
				if(ValueCourse>5){
				alert('END OF GAME!');
				}
			}
		}
	}
	EchoVals();
}
function EchoVals(){
	$('#ValMoney').html(VMoney);
	$('#ValRespect').html(VRespect);
	$('#VFood').html(VFood);
	$('#VHealth').html(VHealth);
	$('#VMood').html(VMood);
	$('#VStudy').html(VStudy);
	
	$('#ValueCourse').html(ValueCourse);
	$('#ValueMoves').html(ValueMoves);
	$('#ValueSemester').html(ValueSemester);
	$('#ValueDays').html(ValueDays);
	$('#ValHW').html(ValHW);
	
	$('#TestFo').html(DeadCountFo);
	$('#TestMo').html(DeadCountMo);
	$('#TestHl').html(DeadCountHl);
	$('#TestSt').html(DeadCountSt);
	
	
}
function rand(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}