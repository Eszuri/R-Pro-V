import React, { useEffect } from 'react'
import "./index.css"
import gm from "./images/GM.webp"
import badak from "./images/badak.webp"
import lejen from "./images/Lejen.webp"
import mitik from "./images/Mitik.webp"
import aldog from "./images/ml.jpg"
import people from "./images/people.webp"
import chat from "./images/chat.jpg"




export default function App() {

  // variabel
  const navPrice = document.getElementById('navPrice');
  const navPembeli = document.getElementById('navPembeli');
  const navTesti = document.getElementById('navTesti');
  const navKeunggulan = document.getElementById('navKeunggulan');
  const navOrderNow = document.getElementById('navOrderNow');
  const readMore = document.querySelector(".readMore");
  // const tahun = document.getElementById('year');
  const tahun = new Date().getFullYear();
  useEffect(() => {
    let angkaNol_1 = 0;
    let angkaNol_2 = 0;
    const jumlahJokiTerselesaikan = 500;
    const succesOrder = document.getElementById('succesOrder');
    const pelanggan = document.getElementById('pelanggan');
    const jumlahPelangganTetap = 250;

    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      if (isInViewport(succesOrder)) {
        setInterval(function () {
          angkaNol_1++, angkaNol_2++;
          succesOrder.innerText = angkaNol_1;
          pelanggan.innerText = angkaNol_2;
          if (angkaNol_1 == jumlahJokiTerselesaikan) {
            angkaNol_1--;
          };
          if (angkaNol_2 == jumlahPelangganTetap) {
            angkaNol_2--;
          };
        }, 50);
      } else {
        // jangan lakukan apa apa
      }
    } handleScroll();
    window.addEventListener('scroll', handleScroll);


  })
  function closeNavigasi() {
    const navigasiAtas = document.getElementById("navTop");
    const navigasiBawah = document.getElementById("navBott");
    const tutupNavigasi = document.getElementById("closeNav");
    const btnSwitch = document.getElementById("checkbox");
    navigasiAtas.style.height = "0", navigasiBawah.style.height = "0", tutupNavigasi.style.transform = "rotate(360deg)", btnSwitch.checked = !1
  }

  return (
    <>
      {/* navbar */}
      <section className="nav">
        <h1 onClick={() => { window.scrollTo(0, 0); }}>Joki Mlbb</h1>
        <div className="navSM">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 448 512"
            >
              {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 448 512"
            >
              {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 448 512"
            >
              {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" />
            </svg>
          </a>
        </div>
        <div className="navBtn">
          <input type="checkbox" id="checkbox" onClick={() => {
            const navigasiAtas = document.getElementById("navTop");
            const navigasiBawah = document.getElementById("navBott");
            const tutupNavigasi = document.getElementById("closeNav");
            const btnSwitch = document.getElementById("checkbox");
            navigasiAtas.style.height = "25%";
            navigasiBawah.style.height = "75%";
            tutupNavigasi.style.transform = "rotate(0deg)";
            btnSwitch.checked = true;
          }} />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1" />
            <div className="bars" id="bar2" />
            <div className="bars" id="bar3" />
          </label>
        </div>
      </section>
      {/* navbar End*/}
      {/* navigasi */}
      <div className="setengah setengahAtas" id="navTop">
        <h1 id="closeNav" style={{ cursor: "pointer" }} onClick={() => {
          const navigasiAtas = document.getElementById("navTop");
          const navigasiBawah = document.getElementById("navBott");
          const tutupNavigasi = document.getElementById("closeNav");
          const btnSwitch = document.getElementById("checkbox");
          navigasiAtas.style.height = "0";
          navigasiBawah.style.height = "0";
          tutupNavigasi.style.transform = "rotate(360deg)";
          btnSwitch.checked = false;
        }}>
          ╳
        </h1>
        <h1>Navigasi</h1>
        <hr />
      </div>
      <div className="setengah setengahBawah" id="navBott">
        <h3 id="navPrice" onClick={() => {
          document.querySelector('.price').scrollIntoView();
          closeNavigasi();
        }}>Daftar Harga</h3>
        <h3 id="navPembeli" onClick={() => {
          document.querySelector('.buy').scrollIntoView();
          closeNavigasi();
        }}>jumlah pembeli</h3>
        <h3 id="navTesti" onClick={() => {
          document.querySelector('.testimoni').scrollIntoView();
          closeNavigasi();
        }}>Testimoni</h3>
        <h3 id="navKeunggulan" onClick={() => {
          document.querySelector('.keunggulan').scrollIntoView();
          closeNavigasi();
        }}>Kelebihan Jasa Joki Kami</h3>
        <h3 id="navOrderNow" onClick={() => {
          document.querySelector('.last').scrollIntoView();
          closeNavigasi();
        }}>Ayo Order Sekarang!</h3>
      </div>
      {/* navigasi End deskripsi singkat */}
      <section className="desc">
        <h1>
          Jasa Joki <br />
          Mobile Legend
        </h1>
        <img src={aldog} alt="ini hanya sample" />
        <p>
          Menyediakan Jasa Joki Mobile Legend <br /> dengan harga murah dan
          terjangkau yang langsung dikerjakan oleh seorang pro player
        </p>
      </section>
      {/* deskripsi singkat End */}
      {/* bagian daftar harga */}
      <section className="price">
        <h1>Daftar Harga</h1>
        <br />
        <div className="priceList">
          <div>
            <h1>Master ➔ GM</h1>
            <img src={gm} alt="badak" />
            <h3>Rp 99.999</h3>
          </div>
          <div>
            <h1>GM ➔ Epic</h1>
            <img src={badak} alt="badak" />
            <h3>Rp 99.999</h3>
          </div>
          <div>
            <h1>Epic ➔ Legend</h1>
            <img src={lejen} alt="badak" />
            <h3>Rp 99.999</h3>
          </div>
          <div>
            <h1>Legend ➔ Mytic</h1>
            <img src={mitik} alt="badak" />
            <h3>Rp 99.999</h3>
          </div>
        </div>
        <div className="readMore" onClick={() => { location.href = "/price-list/index.html" }}>
          <span>tampilkan harga lainnya</span>
          <span>➔</span>
        </div>
      </section>
      {/* bagian daftar harga End*/}
      {/* bagian jumlah orang beli jasa joki */}
      <section className="buy">
        <div>
          <h3>Joki yg terselesaikan</h3>
          <br />
          <span id="succesOrder">0</span>
        </div>
        <div>
          <h3>
            Pelanggan <br />
            Tetap
          </h3>
          <br />
          <span id="pelanggan">0</span>
        </div>
      </section>
      {/* bagian jumlah orang beli jasa joki End */}
      {/* bagian testimoni */}
      <section className="testimoni">
        <h1>Bukti Testimoni</h1>
        <div>
          <a href={chat}>
            <img src={chat} />
          </a>
          <a href={chat}>
            <img src={chat} />
          </a>
          <a href={chat}>
            <img src={chat} />
          </a>
          <a href={chat}>
            <img src={chat} />
          </a>
          <a href={chat}>
            <img src={chat} />
          </a>
          <a href={chat}>
            <img src={chat} />
          </a>
        </div>
      </section>
      {/* bagian testimoni End */}
      {/* bagian keunggulan dan kelebihan jasa joki ini */}
      <section className="keunggulan">
        <h1>Kelebihan Jasa Joki Kami</h1>
        <span>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
              </svg>
            </span>
            <h1>Proses Cepat</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              suscipit?
            </p>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
              </svg>
            </span>
            <h1>
              Aman <span style={{ fontFamily: "Verdana" }}>&amp;</span> Terpercaya
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              suscipit?
            </p>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
              </svg>
            </span>
            <h1>Harga Murah</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              suscipit?
            </p>
          </div>
        </span>
      </section>
      {/* bagian keunggulan dan kelebihan jasa joki ini End*/}
      {/* bagian Terakhir */}
      <section className="last">
        <div>
          <p>
            ga ada waktu buat push rank atau sudah push rank tapi kalah terus?
            Gunakan jasa joki kami! Raih kenaikan rank tanpa kesulitan.Ayo buruan
            Order Sekarang
          </p>
          <a href="#">Order Sekarang</a>
        </div>
        <img src={people} alt="orang bingung" />
      </section>
      {/* bagian Terakhir End*/}
      {/* bagian footer */}
      <footer>
        <span style={{ fontFamily: "Arial" }}>©</span> 2018 - {tahun}
        <br />
        Jasa Joki Mobile Legend Terbaik
      </footer>
    </>

  )
}
