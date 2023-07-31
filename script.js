const currencyFirst=document.getElementById('currencyFirst');
const currencySecond=document.getElementById('currencySecond');
const count=document.getElementById('count');
const equal=document.getElementById('equal');
const exchangeRate=document.getElementById('exchangeRate');
//currencyFirst para birimlerini içinde bulunduran is değerimiz çekiyoruz
//currencySecond yine para birimleri var fakat burda kaç birim olucağını giriceğimiz kısmı çekiyoruz
//count bara miktar 1 2 3 vb girdiğimiz input
//equal para mikraının karşılık geldiği döviz kuru
//exchangeRate altta kuru direk yazan kısım



updateRate();
//updateRate adında bir fonksiyon tanımlıyorum
//aşağıda updateRate fonksiyon olarak tanımlıyorum
//değişken tanımladığımız için `` açıyoruz
//https://app.exchangerate-api.com/dashboard (USD kısmını almıyoruz) sitesindeki Example Request basıyoruz
//böylece api ye istek atma işlemini yapıcaz
function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/91301d55a5f5f5f447f2d266/latest/${currencyFirst.
    value}`
    ).then((res)=>res.json()).then((data)=>{
        console.log(data);
        const rate =data.conversion_rates[currencySecond.value];

        exchangeRate.textContent=`1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`

        equal.textContent = (count.value * rate).toFixed(2);
    });
}
//currencyFirst.value diyerek seçmiş olduğum değişkene erişmiş olucam
//then ile dönen datayı json a çevirmem lazım data ya res dedik res.lson a çeviricez
//console da şuan dataya erişimimiz var
//para birimini değiştridiğimde datanın tekrar tetiklenmesi lazım
//güncel oranımız rate console da tutulan conversion_rateste tutuluyor kur data sı
//seçiyorum [hangi değere dönüştürmek istiyorum] currencySecond kur karşılı yazıyor yani buna dönüştürmek istiyorum
//count kurla çarpılacak sayı değerinin girildiği yer
//equal sonucun geliceği yer .textContent yazılacağı
//count.value ile count değeri ile rate bana gelen değer kur çarpılacak
//.toFixed(2) virgülden sonra kaç basamak göreceğimi belirliyorum
//exchangeRate altta kuru yazan yazı textContent ile basıyoruz
//data rate currencyFirst girilen kur `` değişken atıyoruz tabiiçinde
//currencySecond tl değeri

currencyFirst.addEventListener('change',updateRate);
currencySecond.addEventListener('change',updateRate);
count.addEventListener('input',updateRate);
//change eventini çağırıyorum
//değiştiğinde updateRatenin tetiklenme işlemini yaptık
//currencySecond tetiklendiğinde aynı mantıkta updateRate ye giricek
//inputun içerisindeki yer değiştiğinde de tetiklenmesini istiyorum 
//change değil input eventini ekliyorum yani inputun içerisindeki yer değiştiğinde tekrar
//updateRate in çağırılmasını istiyorum yeniden hesaplanmaısını istiyorum
