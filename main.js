predection_1=""


Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot()
{
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';  
});

}
console.log('ml5 version_ ',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Dd9zAvift/model.json',modelLoaded);
function modelLoaded()
{
console.log("modelLoaded");
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is"+prediction_1;
    var utterthis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterthis);
}

function check()
{
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResults);
}

function gotResults(error,results)
{
if(error)
{
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    prediction=results[0].label;
    
    speak();
    if(results[0].label=="victory")
    {
        document.getElementById("update_emoji").innerHTML="&#9996;";
    }
    if(results[0].label=="thumbs up")
    {
        document.getElementById("update_emoji").innerHTML="&#128077;";
    }
    if(results[0].label=="loose")
    {
        document.getElementById("update_emoji").innerHTML="&#128078;";
    }
    if(results[0].label=="hii")
    {
        document.getElementById("update_emoji").innerHTML="&#128400;";
    }
     
}

}