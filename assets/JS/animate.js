var working_light_index=0;
var number_of_lights=7;
var move="RIGHT";

var myInterval=null;

function updateLightOrder(){
    $(".div-01").removeClass("light_on1");
    $(".div-01").removeClass("light_on2");

    $(".div-01").eq(working_light_index).addClass("light_on1");

    if (move==="RIGHT"){
        if (working_light_index!==0) $(".div-01").eq(working_light_index-1).addClass("light_on2");

        ++working_light_index;
        if (working_light_index>number_of_lights-2){
            move="LEFT";
        }
    }else {
        $(".div-01").eq(working_light_index+1).addClass("light_on2");
        --working_light_index;
        if (working_light_index===0){
            move="RIGHT";
        }
    }
}
$("#start").on("click",() =>{
    myInterval=setInterval(updateLightOrder,50);
    $("#audio")[0].play();
});
$("#stop").on("click", () => {
    myInterval = clearInterval(myInterval);
    $("#audio")[0].pause();
});