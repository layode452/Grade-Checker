//0-39 F
            // 40-44 E
            // 45-49 D
            // 50-59 C
            // 60-69 B
            // 70-100 A

function Check() {
    var score = document.getElementById('score').value
    
    if (score >= 0 && score < 40){
        document.getElementById('display').innerHTML = 'F-Fail'
    }else if (score >= 40 && score < 45 ){
        document.getElementById('display').innerHTML = 'E-Fair'
    }else if(score >= 45 && score < 50){
        document.getElementById('display').innerHTML = 'D-Pass'
    }else if(score >= 50 && score < 60){
        document.getElementById('display').innerHTML = 'C-Good'
    }else if(score >= 60 && score < 70){
        document.getElementById('display').innerHTML = 'B-Very Good'
    }else if(score >= 70 && score <= 100){
        document.getElementById('display').innerHTML = 'A-Excellent'
    }else if(score < 0){
        document.getElementById('display').innerHTML = 'No grade below 0'
    }else if(score > 100){
        document.getElementById('display').innerHTML = 'This is way above the normal grade'
    }
}