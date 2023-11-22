import React, { useEffect } from 'react'
import './price-list.css'
import './index.css'
import master from "./images/master.webp"
import gm from "./images/GM.webp"
import badak from "./images/badak.webp"
import lejen from "./images/Lejen.webp"
import mitik from "./images/Mitik.webp"
import honor from "./images/honor.webp"
import glory from "./images/glory.webp"
import immortal from "./images/immortal.webp"


export default function Price() {
  useEffect(() => {
    fetch('./data-price.json')
      .then(identifikasi => identifikasi.json())
      .then(data => {

        // judul
        document.getElementById('title').innerHTML = data.JUDUL;

        // bagian harga joki per bintang
        document.querySelector('#perBintang>h1').innerHTML = data.PerBintang.judul;
        document.querySelector('#perBintang>div>div:nth-child(1)>span').innerHTML = data.PerBintang.master;
        document.querySelector('#perBintang>div>div:nth-child(2)>span').innerHTML = data.PerBintang.grandmaster;
        document.querySelector('#perBintang>div>div:nth-child(3)>span').innerHTML = data.PerBintang.epic;
        document.querySelector('#perBintang>div>div:nth-child(4)>span').innerHTML = data.PerBintang.legend;
        document.querySelector('#perBintang>div>div:nth-child(5)>span').innerHTML = data.PerBintang.mythic;
        document.querySelector('#perBintang>div>div:nth-child(6)>span').innerHTML = data.PerBintang.honor;
        document.querySelector('#perBintang>div>div:nth-child(7)>span').innerHTML = data.PerBintang.glory;
        document.querySelector('#perBintang>div>div:nth-child(8)>span').innerHTML = data.PerBintang.immortal;

        // bagian harga joki per Tier
        document.querySelector('#perTier>h1').innerHTML = data.PerTier.judul;
        document.querySelector('#perTier>div>div:nth-child(1)>span').innerHTML = data.PerTier.master_gm;
        document.querySelector('#perTier>div>div:nth-child(2)>span').innerHTML = data.PerTier.gm_epic;
        document.querySelector('#perTier>div>div:nth-child(3)>span').innerHTML = data.PerTier.epic_legend;
        document.querySelector('#perTier>div>div:nth-child(4)>span').innerHTML = data.PerTier.legend_mythic;
        document.querySelector('#perTier>div>div:nth-child(5)>span').innerHTML = data.PerTier.grading_honor;
        document.querySelector('#perTier>div>div:nth-child(6)>span').innerHTML = data.PerTier.honor_glory;
        document.querySelector('#perTier>div>div:nth-child(7)>span').innerHTML = data.PerTier.glory_immortal;

        // mengarahkan ke whatsapp saat klik "order by whatsapp"
        document.getElementById('orderWA').addEventListener("click", () => {
          window.location.href = "https://api.whatsapp.com/send?phone=" + data.nomorWA;
        });
      })
  }, [])
  return (
    <>
      <section style={{ position: "fixed", left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgb(72, 72, 72)', zIndex: -999 }}></section>
      <h1 id="title" />
      {/* bagian harga naik rank per bintang */}
      {/* untuk mengganti harganya buka 'data-price.json' */}
      <section id="perBintang">
        <h1 />
        <div>
          <div>
            <img src={master} alt="master" />
            <h5>Master 1⭐</h5>
            <span />
          </div>
          <div>
            <img src={gm} alt="Grand Master" />
            <h5>GrandMaster 1⭐</h5>
            <span />
          </div>
          <div>
            <img src={badak} alt="Epic" />
            <h5>Epic 1⭐</h5>
            <span />
          </div>
          <div>
            <img src={lejen} alt="Legend" />
            <h5>Legend 1⭐</h5>
            <span />
          </div>
          <div>
            <img src={mitik} alt="Mythic" />
            <h5>Mythic 1⭐</h5>
            <span />
          </div>
          <div>
            <img src={honor} alt="Mythic Honor" />
            <h5>Honor 1⭐</h5>
            <span />
          </div>
          <div>
            <img src={glory} alt="Mythic Glory" />
            <h5>Glory 1⭐</h5>
            <span />
          </div>
          <div>
            <img src={immortal} alt="Mythic Immortal" />
            <h5>Immortal 1⭐</h5>
            <span />
          </div>
        </div>
      </section>
      {/* bagian harga naik per Tier, misal master ke gm */}
      <section id="perTier">
        <h1 />
        <div>
          <div>
            <img src={gm} alt="Grand Master" />
            <h5>Master ➔ GrandMaster</h5>
            <span />
          </div>
          <div>
            <img src={badak} alt="Epic" />
            <h5>GrandMaster ➔ Epic</h5>
            <span />
          </div>
          <div>
            <img src={lejen} alt="Legend" />
            <h5>Epic ➔ Legend</h5>
            <span />
          </div>
          <div>
            <img src={mitik} alt="Mythic" />
            <h5>Legend ➔ Mythic</h5>
            <span />
          </div>
          <div>
            <img src={honor} alt="Mythic Honor" />
            <h5>Grading ➔ Honor</h5>
            <span />
          </div>
          <div>
            <img src={glory} alt="Mythic Glory" />
            <h5>Honor ➔ Glory</h5>
            <span />
          </div>
          <div>
            <img src={immortal} alt="Mythic Immortal" />
            <h5>Glory ➔ Immortal</h5>
            <span />
          </div>
        </div>
      </section>
      {/* bagian order via whatsapp */}
      <section id="orderWA">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="5em"
            viewBox="0 0 448 512"
          >
            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <div>
            <h5>Order BY</h5>
            <h2>whatsapp</h2>
          </div>
        </div>
      </section>
      {/* tombol untuk kembali ke beranda */}
      <div id="backHome">
        <a href="../">
          <span>➔</span>Kembali
        </a>
      </div>
    </>

  )
}

