function hitung() {
  let jenisKelamin = document.getElementById("jk").value;
  let tinggiAyah = document.getElementById("tinggiAyah").value;
  let tinggiIbu = document.getElementById("tinggiIbu").value;
  let hasilHitung = document.getElementById("hasil");
  let box = document.querySelector(".box-notice");
  let textHasil = document.getElementById("hasil");
  let close = document.getElementById("oke");

  if (tinggiAyah == "" || tinggiIbu == "") {
    box.classList.toggle("active");
    textHasil.innerHTML = `Mohon isikan tinggi badan ayah dan ibu dengan benar!`;

    // menutup box popup dan mereset value di dalam input
    close.onclick = () => {
      box.classList.remove("active");
    };

    document.getElementById("tinggiAyah").value = "";
    document.getElementById("tinggiIbu").value = "";
  } else if (jenisKelamin == "cowok") {
    // rumus menghitung potensi tinggi anak bila si anak adalah cowok
    let rendah = (eval(tinggiIbu) + 13 + eval(tinggiAyah)) / 2 - 8.5;
    let tinggi = (eval(tinggiIbu) + 13 + eval(tinggiAyah)) / 2 + 8.5;

    box.classList.toggle("active");
    textHasil.innerHTML = `Perkiraan potensi tinggi anak anda adalah ${rendah} cm sampai ${tinggi} cm`;

    // menutup box popup hasil hitung dan mereset value di dalam input
    close.onclick = () => {
      box.classList.remove("active");
    };

    document.getElementById("tinggiAyah").value = "";
    document.getElementById("tinggiIbu").value = "";
  } else if (jenisKelamin == "cewek") {
    // rumus menghitung potensi tinggi anak bila si anak adalah cewek
    let rendah = (eval(tinggiAyah) - 13 + eval(tinggiIbu)) / 2 - 8.5;
    let tinggi = (eval(tinggiAyah) - 13 + eval(tinggiIbu)) / 2 + 8.5;

    box.classList.toggle("active");
    textHasil.innerHTML = `Perkiraan potensi tinggi anak anda adalah ${rendah} cm sampai ${tinggi} cm`;

    // menutup box popup hasil hitung dan mereset value di dalam input
    close.onclick = () => {
      box.classList.remove("active");
    };

    document.getElementById("tinggiAyah").value = "";
    document.getElementById("tinggiIbu").value = "";
  }
}
