
//! Tusa basma olayı oldugu için bu anımasyonda mecburen bi js yapıcaz bu yuzden js klasörü oluşturduk. 
const body = document.querySelector("body");
//* ana ekran üzerindeyken klavyeden tuşa basıldıgını anlamak için body i seciyoruz.bu sekilde bize body ı getirmiş oluyor.

//* bize araba lazım. Arabayı duruma göre durdurucaz vs.
const car = document.querySelector(".car");
const ground = document.querySelector(".ground");

//** şimdi enter tusuna basıldıgında araba dursun ıstıyoruz veya enter tuşuna basıldıgında bir daha calıssın ıstıyoruz o yuzden body üzerinde key e basıldı mı bakmamız lazım. ✨o yuzden body ı sec body nın içerisinde addEventlistener ı tanımla klavye ye basıldı mı bak klavyeye basıldıysa bunu yakala bu sekilde bir arrow functın yazdık👇
// (e) parametre oluyor bu parametreye göre neter a basıldı mı yakalayabiliyoruz. 
body.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        if (!ground.classList.contains("right")) {
            ground.classList.add("right");
            car.classList.add("pop-up");

        } else {
            ground.classList.remove("right");
            car.classList.remove("pop-up");
        }
    }
})

// if'in içerisinde dedğimizde code enter a basıldıysa 