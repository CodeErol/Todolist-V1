var girilen, secilen;
var eklenen, btnTamamla, btnSil, sonuc;

function listeyeEkle() {
  girilen = document.getElementById("todoİnput").value;

  if (girilen != "") {
    eklenen = document.createElement("li");
    document.getElementById("todoList").appendChild(eklenen);
    eklenen.innerHTML = girilen;

    btnTamamla = document.createElement("img");
    eklenen.appendChild(btnTamamla);
    btnTamamla.setAttribute("src", "silme.png");
    btnTamamla.setAttribute("id", "resimSil");
    btnTamamla.addEventListener("click", sil);

    btnSil = document.createElement("img");
    eklenen.appendChild(btnSil);
    btnSil.setAttribute("src", "indir.jpg");
    btnSil.setAttribute("id", "resimEkle");
    btnSil.addEventListener("click", yükle);
  } else alert("Lütfen görev giriniz.");
}

function sil() {
  sonuc = event.currentTarget.parentNode;
  sonuc.remove();
}

function yükle() {
  alert("TEBRİKLER GÖREVİ TAMAMLADINIZ.");
  btnSil = event.currentTarget.parentNode;
  btnSil.remove();
}
