

let btn = document.querySelector("#btn");


btn.addEventListener('click', function () {

    try {
        let height_val = document.getElementById('height').value;

        let weight_val = document.getElementById('weight').value;

        if (height_val==0 || height_val<0) {
            
            alert("plese enter your valid height value")
        }

        if (weight_val==0 || weight_val<0) {
            
            alert("plese enter your valid weight value")
        }


        // formula to calculate bmi

        let bmi = weight_val / (height_val / 100 * height_val / 100)

        var bmio = (bmi.toFixed(2));

        document.getElementById("result").innerHTML = "Your BMI is " + bmio;
    } catch (error) {

        alert("500 some thing wront in our app")

    }

})