import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import DOTS from "vanta/dist/vanta.dots.min.js";
import AOS from "aos";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { BiSolidGraduation } from "react-icons/bi";
import Lottie from "lottie-react";
import animation from '../assets/animations/ca.json'


function About() {
  const backref = useRef();
  const [backstate, setbackstate] = useState(0);

  useEffect(() => {
    AOS.init();
    if (!backstate) {
      setbackstate(
        DOTS({
          el: backref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          color2: 0x0,
          backgroundColor: 0xffffff,
          size: 2.2,
          spacing: 55.0,
          showLines: false,
        })  
      );
    }
  }, [backstate]);

  const items = [
    {
      contentStyle: { background: "#FFFFFF", color: "#000" },
      contentArrowStyle: {
        borderRight: "7px solid  rgb(0, 0, 0)",
      },
      date: "Sept 2023 - present",
      iconStyle: { background: "#FFFFFF", color: "#000" },
      icon: <MdWork />,
      profesi: "Full Stack Developer",
      lokasi: "PT. Horus Technology, Yogyakarta",
      tugas:
        "Bertugas membuat sistem ERP yang efisien, aman dan optimal. Membuat basis data, struktur tabel dan rest API untuk aplikasi web dan mobile. Mengelola dan membuat tampilan aplikasi website yang diintegrasikan dengan Back End. User training ERP System",
      stack: "Vue js (Javascript), Flask (Python), Postgresql, Pinia State, Jira, Trello",
    },
    {
      contentStyle: { background: "#FFFFFF", color: "#000" },
      contentArrowStyle: {
        borderRight: "7px solid  rgb(0, 0, 0)",
      },
      date: "Okt 2022 - Jan 2023",
      iconStyle: { background: "#FFFFFF", color: "#000" },
      icon: <MdWork />,
      profesi: "Full Stack Developer",
      lokasi: "Dealaja App, Yogyakarta",
      tugas:
        "Membuat sistem dan aplikasi jual beli berbasis android dan website, disini saya  berperan membuat backend sistem seperti struktur database, Rest API dan JWT. Saya juga bertugas membuat tampilan website untuk halaman admin yang menampilkan informasi jual beli",
      stack: "Express Js, React Js, Redux, MongoDB, JWT ",
    },
    {
      contentStyle: { background: "#FFFFFF", color: "#000" },
      contentArrowStyle: {
        borderRight: "7px solid  rgb(0, 0, 0)",
      },
      date: "Okt 2021 - Jan 2023",
      iconStyle: { background: "#FFFFFF", color: "#000" },
      icon: <MdWork />,
      profesi: "Front End Developer",
      lokasi: "Freelancer , Yogyakarta",
      tugas:
        "Saya bekerja sebagai freelancer yang bertugas membuat berbagai macam website mulai dari e-commerce, kasir, travel dan lain sebagainya. Selama mengerjakan proyek tersebut saya menggunakan beberapa bahasa pemrograman seperti PHP dan JavaScript dan juga menggunakan beberapa framework yang sudah ada seperti React Js, Vue Js, Laravel dan lain sebagainya.",

      stack: "React Js, Vue Js, Laravel (PHP),  MySQL, Postman",
    },
    {
      contentStyle: { background: "#FFFFFF", color: "#000" },
      contentArrowStyle: {
        borderRight: "7px solid  rgb(0, 0, 0)",
      },
      date: "Mar 2023 - Agust 2023 dan Mar 2022 - Agust 2022",
      iconStyle: { background: "#FFFFFF", color: "#000" },
      icon: <MdWork />,
      profesi: "Asisten Praktikum",
      lokasi: "Universitas Mercu Buana, Yogyakarta",
      tugas:
        "Disini saya bertindak sebagai asisten dosen selama satu semester untuk mata kuliah Praktikum Jaringan Komputer. Saya mengajar di 4 kelas dan mengajarkan tentang membuat jaringan LAN dengan Mikrotik.",

      stack: "Mikrotik, Winbox, Lan-Wan",
    },

    {
      contentStyle: { background: "#FFFFFF", color: "#000" },
      contentArrowStyle: {
        borderRight: "7px solid  rgb(0, 0, 0)",
      },
      date: "Mei 2018 - Feb 2019",
      iconStyle: { background: "#FFFFFF", color: "#000" },
      icon: <MdWork />,
      profesi: "Quality Control",
      lokasi: "PT. Intimkara, Maluku Utara",
      tugas:
        "Saya bekerja sebagai staf quality control di salah satu perusahaan kontraktor di Maluku Utara, PT.Intimkara. Dimana saya bertugas untuk menjaga dan menguji kualitas aspal atau beton sebelum dan selama proses produksi.",

      stack:
        "Kerja Sama, Tanggung Jawab, Menguji Mutu Material, Menjalankan dan memeriksa hasil uji di Lab",
    },
    {
      contentStyle: { background: "#1E1E1E", color: "#ffff" },
      contentArrowStyle: {
        borderRight: "7px solid  rgb(0, 0, 0)",
      },
      date: "2019 - 2023",
      iconStyle: { background: "#1E1E1E", color: "#ffff" },
      icon: <BiSolidGraduation />,
      profesi: "Universitas Mercu Buana Yogyakarta",
      lokasi: "IPK : 3.77/4.00",
      tugas: "D.I. Yogyakarta",
    },

    {
      contentStyle: { background: "#1E1E1E", color: "#ffff" },
      contentArrowStyle: {
        borderRight: "7px solid  rgb(0, 0, 0)",
      },
      date: "2015 - 2018",
      iconStyle: { background: "#1E1E1E", color: "#ffff" },
      icon: <BiSolidGraduation />,
      profesi: "Madrasah Aliyah Negeri Tana Toraja",
      tugas: "Tana Toraja, Sulawesi Selatan",
    },
  ];

  return (
    <>
      <section className="w-full h-full ">
        <div className="h-screen">
          <div
            ref={backref}
            className="w-full h-2/3 flex justify-center items-center"
          >
            <h2 className=" font-poppins text-4xl md:text-7xl ">About Section</h2>
          </div>
          <div className="h-1/3 p-10 flex justify-center font-poppins">
            <Lottie animationData={animation} className="w-5" />
          </div>
        </div>
        <div>
          <VerticalTimeline lineColor={"black"}>
            {items.map((e, i) => (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element"
                contentStyle={e.contentStyle}
                contentArrowStyle={e.contentArrowStyle}
                date={e.date}
                iconStyle={e.iconStyle}
                icon={e.icon}
              >
                <h3 className="vertical-timeline-element-title">{e.profesi}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {e.lokasi}
                </h4>
                <p>{e.tugas}</p>
                {e.stack && (
                  <div className="mt-2 flex gap-2 space-x-2 items-center font-poppins">
                    Skill : {e.stack}
                  </div>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0, 1, 0.5, 1] }}
      ></motion.div>

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.7, 0.1, 0.5, 1] }}
      ></motion.div>
    </>
  );
}

export default About;
