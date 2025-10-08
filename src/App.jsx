/*
Update: Replace placeholder data with actual profile information from Iqbal Nafis.
*/

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Linkedin } from "lucide-react";

const accent = "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700";

const profile = {
  name: "Iqbal Nafis",
  title: "Programmer | Software Developer",
  location: "Bandung, Indonesia",
  bio:
    "Mahasiswa D3 Manajemen Informatika Universitas Nasional Pasim Bandung dengan pengalaman magang di bidang hardware serta aktif dalam organisasi pendidikan. Memiliki keahlian dalam web development, manajemen database, dan pemrograman logika. Terbiasa mengajar pemula dalam pemrograman serta memiliki kemampuan komunikasi dan kerja sama tim yang baik.",
  avatar: "/image.png",
  avatarAlt: "Foto Iqbal Nafis",
  contacts: {
    github: "https://github.com/IQBALNAFIS1310",
    linkedin: "https://www.linkedin.com/in/iqbal-nafis-263a73372/",
    email: "iqbalnafis487@gmail.com",
    phone: "+62 852-7131-9905",
    website: "https://iqneforev.my",
  },
};

const skills = [
  { name: "ASP.NET Core Web & RestAPI (C#)", level: 90 },
  { name: "Node.js", level: 70 },
  { name: "JavaScript", level: 90 },
  { name: "C Language", level: 95 },
  { name: "HTML / CSS", level: 95 },
  { name: "React.js", level: 80 },
  { name: "UI/UX", level: 80 },
  { name: "MySQL", level: 80 },
  { name: "PostgreSQL", level: 70 },
  { name: "Bahasa Indonesia (Mahir)", level: 95 },
  { name: "Bahasa Inggris (Sedang)", level: 80 },
];

const pengalaman = [
  {
    id: 1,
    title: "Program Beasiswa PUB (2024 - 2025)",
    desc:
      "Divisi Pendidikan dan Pelatihan: Merancang dan melaksanakan program pembelajaran, memberikan pelatihan pemrograman dasar (HTML, CSS, JS, MySQL, C), dan mengkoordinasikan kegiatan edukasi.",
    tags: ["Teaching", "Programming", "Leadership"],
    link: "#",
  },
  {
    id: 2,
    title: "Teknisi Hardware (Magang, 2024 - 2025)",
    desc:
      "Membantu perawatan dan perbaikan perangkat komputer dan jaringan, instalasi software, troubleshooting dasar, serta mendukung tim IT dalam pemeliharaan hardware.",
    tags: ["Hardware", "Troubleshooting", "Networking"],
    link: "#",
  },
  {
    id: 3,
    title: "Pelatihan PUB",
    desc:
      "Materi: Dasar Logika & Algoritma (C), Struktur Data (C), Basis Data (MySQL), Fundamental Front-End (HTML, CSS, JavaScript), Fundamental Back-End (C#), Git & GitHub, Back-End Lanjutan (C#).",
    tags: ["C", "MySQL", "JavaScript", "C#", "Git"],
    link: "#",
  },
];

// Daftar proyek asli
const projects = [
  {
    id: 1,
    title: "Profil Rumah Makan dan Sistem Informasi",
    desc: "Aplikasi Profile Rumah Makan Sekaligus Sistem Transaksi dan Keuangan",
    tags: ["React", "Supabase", "Tailwind", "Routed"],
    image: "/Rumah-Makan.png",
    link: "https://github.com/IQBALNAFIS1310/rm-jaso-mande",
    visit: "https://rm-jaso-mande.vercel.app/",
  },
  {
    id: 2,
    title: "IQNEFO | MOVIE",
    desc: "Aplikasi web untuk melihat daftar movie bioskop dengan api TMDB",
    tags: ["React", "Supabase", "Tailwind", "TMDB", "Routed"],
    image: "/iqnefo-movies.png",
    link: "https://github.com/IQBALNAFIS1310/IQNEFO-MOVIE",
    visit: "https://iqnefo-moviecom.vercel.app",
  },
];

// Variants animasi
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SkillBar({ name, level }) {
  return (
    <motion.div
      variants={itemFade}
      className="w-full"
    >
      <div className="flex justify-between mb-1 text-sm">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`h-full ${accent}`}
        />
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-slate-100 antialiased">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* HERO */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(180deg, rgba(15,23,42,0.6), rgba(2,6,23,0.6))" }}
        >
          <div className="grid gap-8 md:grid-cols-3 items-center">
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                {profile.name}
              </h2>
              <p className="text-blue-300 font-medium mb-4">{profile.title} — {profile.location}</p>
              <p className="text-slate-300 max-w-2xl mx-auto md:mx-0">{profile.bio}</p>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                {[{
                  href: profile.contacts.github, icon: Github, label: "GitHub"
                }, {
                  href: profile.contacts.linkedin, icon: Linkedin, label: "LinkedIn"
                }, {
                  href: `mailto:${profile.contacts.email}`, icon: Mail, label: "Email"
                }].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-slate-700 transition"
                  >
                    <Icon size={16} /> {label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 text-sm text-slate-400">
                <p>📞 {profile.contacts.phone}</p>
                <p>🌐 <a href={profile.contacts.website} target="_blank" rel="noreferrer" className="underline">{profile.contacts.website}</a></p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-blue-800 to-slate-800 p-1"
              >
                <div className="w-full h-full rounded-xl overflow-hidden border border-slate-800">
                  <img
                    src={profile.avatar}
                    alt={profile.avatarAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* SKILLS */}
        <motion.section
          className="mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Keahlian</h3>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {skills.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </motion.div>
        </motion.section>

        {/* PENGALAMAN */}
        <motion.section
          className="mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Pengalaman</h3>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {pengalaman.map((p) => (
              <motion.div
                key={p.id}
                variants={itemFade}
                className="p-5 rounded-2xl bg-gray-800/50 border border-slate-700"
              >
                <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                <p className="text-slate-300 mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded bg-gray-700/50">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6">Sertifikat Pelatihan</h3>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { title: "Logika Algoritma C", date: "Sep 2023", provider: "PUB" },
              { title: "Fundamental C# & .NET Desktop Development", date: "Jul 2024", provider: "PUB" },
              { title: "Web Fundamentals (HTML, CSS, JavaScript)", date: "May 2024", provider: "PUB" },
              { title: "React.js Fundamentals", date: "May 2025", provider: "PUB" },
              { title: "Database MySQL & SQLyog", date: "Jan 2024", provider: "PUB" },
              { title: "C# ASP.NET Core Web & API", date: "Oct 2024", provider: "PUB" },
              { title: "Data Structures C", date: "Jan 2024", provider: "PUB" },
            ].map((cert, i) => (
              <motion.div
                key={i}
                variants={itemFade}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl bg-gray-800/60 border border-slate-700 shadow-lg p-5 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-300">🎓 {cert.title}</h4>
                  <p className="text-slate-400 text-sm">{cert.provider} — {cert.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6">Penghargaan</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Instructor Recognition – Web Fundamentals (HTML, CSS, JavaScript)",
              "Instructor Recognition – Logika & Algoritma (C Language)",
              "Instructor Recognition – Data Structure",
            ].map((award, i) => (
              <motion.div
                key={i}
                variants={itemFade}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl bg-gradient-to-br from-blue-900/60 to-slate-800/60 border border-slate-700 p-5 shadow-lg"
              >
                <h4 className="font-semibold text-lg text-blue-300">🏆 {award}</h4>
                <p className="text-slate-400 text-sm mt-2">Beasiswa PUB</p>
              </motion.div>
            ))}
          </div>
        </motion.section>


        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6">Pengalaman Organisasi</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              variants={itemFade}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-gray-800/60 border border-slate-700 p-5 shadow-lg"
            >
              <h4 className="text-lg font-semibold mb-2 text-blue-300">👥 Divisi Pendidikan PUB</h4>
              <p className="text-slate-300 text-sm">
                Sep 2024 – Aug 2025 <br />
                Mengajar logika algoritma, C, struktur data, MySQL, HTML, CSS, JavaScript,
                serta fundamental C# desktop app.
              </p>
            </motion.div>
          </div>
        </motion.section>


        {/* PROJECTS */}
        <motion.section
          className="mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Projek Saya</h3>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {projects.map((p) => (
              <motion.div
                key={p.id}
                variants={itemFade}
                className="rounded-2xl overflow-hidden bg-gray-800/50 border border-slate-700 shadow-lg"
              >
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                  <p className="text-slate-300 mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-400 mb-3">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded bg-gray-700/50">{tag}</span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    <Github size={16} /> Lihat di GitHub
                  </a>
                  <br />
                  <a
                    href={p.visit}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    Kunjungi
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <footer className="text-center text-slate-500 text-sm py-6">
          © {new Date().getFullYear()} {profile.name} — IQNEFO
        </footer>
      </main>
    </div>
  );
}
