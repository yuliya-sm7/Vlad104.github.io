let button = document.getElementById('confirm');
console.log(button);
button.addEventListener('click', confirmMsg);

function confirmMsg() {
    location.href = "https://www.youtube.com/watch?v=nd_CYqU7VGA";
    return confirm("Заявка на исполнение желания подана. Для осуществления требуется явиться с копиями паспорта, прописки и СНИЛСа 16.01.2019 с 9:00 до 18:00 по адресу г.Москва, Измайловский пр-т 73А. А пока отдыхайте..");
}