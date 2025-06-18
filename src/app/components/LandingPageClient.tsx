"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Users, Clock, Shield } from 'lucide-react'
import { motion } from "framer-motion"
import Navigation from "./Navigation"
import Footer from "./Footer"
import styles from '@/app/page.module.css'
import Image from "next/image"

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
}


const LandingPageClient = () => {
    return (
        <div className={styles.container}>
            <Navigation />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <motion.div
                        className={styles.heroContent}
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                    >
                        <motion.h1
                            className={styles.heroTitle}
                            variants={fadeInUp}
                        >
                            Odkryj uroki Wieprza i Wisły z Wodną Pasją!
                        </motion.h1>
                        <motion.p
                            className={styles.heroSubtitle}
                            variants={fadeInUp}
                        >
                            Spływy kajakowe i wypożyczalnia sprzętu – Parchatka (okolice Kazimierza Dolnego i Puław)
                        </motion.p>
                        <motion.div
                            className={styles.heroButtons}
                            variants={fadeInUp}
                        >
                            <Link href={'/#kontakt'}>
                                <motion.button
                                    className={styles.primaryButton}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    🔹 Zarezerwuj spływ
                                </motion.button></Link>
                            <Link href="/trasy">
                                <motion.button
                                    className={styles.secondaryButton}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    🔹 Sprawdź trasy na Wieprzu i Wiśle
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={styles.heroImageContainer}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <motion.div
                            className={styles.heroImagePlaceholder}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className={styles.placeholderContent}>
                                <Image src={'/images/kajaki7.jpg'} width={1200} height={400} alt="Spływy kajakowe wisła oraz wieprz" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introduction}>
                <div className={styles.sectionContainer}>
                    <motion.div
                        className={styles.introContent}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <p className={styles.introText}>
                            Z nami poznasz uroki Wieprza – rzeki o nieskażonej przyrodzie, skarpach i dolinach (np. Łęczna,
                            Zawieprzyce, Lubartów), a także majestatycznej Wisły z widokiem na Janowiec, Kazimierz Dolny i Puławy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section className={styles.services}>
                <div className={styles.sectionContainer}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className={styles.sectionTitle}>Nasza Oferta</h2>
                    </motion.div>

                    <motion.div
                        className={styles.servicesGrid}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={scaleIn}>
                            <Card className={styles.serviceCard}>
                                <CardContent className={styles.serviceCardContent}>
                                    <div className={styles.serviceCardInner}>
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        >
                                            <Users className={styles.serviceIcon} />
                                        </motion.div>
                                        <h3 className={styles.serviceTitle}>Spływy Grupowe</h3>
                                        <p className={styles.serviceDescription}>
                                            Spływy jednodniowe i kilkudniowe – minimum 8 osób, opcja mobilna. Trasy tematyczne: rodzinne,
                                            szkolne, firmowe, integracyjne.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={scaleIn}>
                            <Card className={styles.serviceCard}>
                                <CardContent className={styles.serviceCardContent}>
                                    <div className={styles.serviceCardInner}>
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: -5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        >
                                            <Shield className={styles.serviceIcon} />
                                        </motion.div>
                                        <h3 className={styles.serviceTitle}>Profesjonalny Sprzęt</h3>
                                        <p className={styles.serviceDescription}>
                                            Kajaki jedno- i dwuosobowe, kapoki, wiosła, worki wodoszczelne. Wszystko w najwyższej jakości dla
                                            Twojego bezpieczeństwa.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={scaleIn}>
                            <Card className={styles.serviceCard}>
                                <CardContent className={styles.serviceCardContent}>
                                    <div className={styles.serviceCardInner}>
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        >
                                            <Clock className={styles.serviceIcon} />
                                        </motion.div>
                                        <h3 className={styles.serviceTitle}>Usługi Dodatkowe</h3>
                                        <p className={styles.serviceDescription}>
                                            Transport sprzętu i uczestników, wypożyczenie przewodnika/WOPR, catering, ognisko, miejsca noclegowe
                                            przy trasie.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing */}
            <section className={styles.pricing} id="cennik">
                <div className={styles.sectionContainer}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className={styles.sectionTitle}>Cennik</h2>
                    </motion.div>

                    <motion.div
                        className={styles.pricingTableContainer}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className={styles.pricingTable}>
                            <table className={styles.table}>
                                <thead className={styles.tableHeader}>
                                    <tr>
                                        <th className={styles.tableHeaderCell}>Usługa</th>
                                        <th className={styles.tableHeaderCell}>Cena (PLN)</th>
                                    </tr>
                                </thead>
                                <tbody className={styles.tableBody}>
                                    {[
                                        ["Kajak 1-osobowy (1 dzień)", "50–60"],
                                        ["Kajak 2-osobowy (1 dzień)", "60–70/osoba"],
                                        ["Spływ jednodniowy (Wieprz/Wisła)", "80–100/osoba"],
                                        ["Transport kajaka (dłuższe trasy)", "3–5 zł/km"],
                                        ["Przewodnik/WOPR", "150–200/dzień"],
                                        ["Wodoszczelny worek / kapok / wiosło", "w cenie wypożyczenia"]
                                    ].map(([service, price], index) => (
                                        <motion.tr
                                            key={index}
                                            className={styles.tableRow}
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                                        >
                                            <td className={styles.tableCell}>{service}</td>
                                            <td className={styles.tableCellPrice}>{price}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery */}
            <section className={styles.gallery}>
                <div className={styles.sectionContainer}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className={styles.sectionTitle}>Galeria</h2>
                    </motion.div>

                    <motion.div
                        className={styles.galleryGrid}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <motion.div
                                key={i}
                                className={styles.galleryItem}
                                variants={scaleIn}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <div className={styles.galleryPlaceholder}>
                                    <div className={styles.placeholderContent}>
                                        <Image src={`/images/kajaki${i}.jpg`} width={450} height={500} alt={i % 2 == 0 ? 'Wisła spływy kajakowe' : "Wieprz spływy kajakowe"} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" className={styles.contact}>
                <div className={styles.sectionContainer}>
                    <div
                        className={styles.sectionHeader}
                        // initial={{ opacity: 0, y: 50 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true, margin: "-100px" }}
                        // transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className={styles.sectionTitle}>Kontakt</h2>
                    </div>

                    <div className={styles.contactGrid}>
                        <div
                            className={styles.contactInfo}
                            // initial={{ opacity: 0, x: -50 }}
                            // whileInView={{ opacity: 1, x: 0 }}
                            // viewport={{ once: true, margin: "-100px" }}
                            // transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h3 className={styles.contactInfoTitle}>Informacje kontaktowe</h3>
                            <div className={styles.contactInfoList}>
                                <motion.div
                                    className={styles.contactInfoItem}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <MapPin className={styles.contactIcon} />
                                    <div className={styles.contactInfoText}>
                                        <p className={styles.contactInfoName}>Wodna Pasja – Kajaki</p>
                                        <p className={styles.contactInfoDetail}>Właściciel: Dariusz Marchocki</p>
                                        <p className={styles.contactInfoDetail}>Parchatka 21, 24‑120 Parchatka k. Kazimierza Dolnego</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className={styles.contactInfoItem}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Phone className={styles.contactIcon} />
                                    <div className={styles.contactInfoText}>
                                        <p className={styles.contactInfoDetail}>+48 668 481 266</p>
                                        <p className={styles.contactInfoDetail}>+48 668 480 786</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className={styles.contactInfoItem}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Mail className={styles.contactIcon} />
                                    <p className={styles.contactInfoDetail}>wodnapasja.kajaki@gmail.com</p>
                                </motion.div>
                            </div>

                            <div className={styles.operatingHours}>
                                <p className={styles.operatingHoursText}>
                                    <strong>Działamy:</strong> sezonowo – wiosna–lato, oferty na długi weekendy (Czerwiec), Dzień Dziecka
                                </p>
                            </div>
                        </div>

                        {/* <motion.div
              className={styles.contactForm}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className={styles.contactFormTitle}>Formularz kontaktowy</h3>
              <form className={styles.form}>
                {[
                  { label: "Imię", type: "text" },
                  { label: "E-mail", type: "email" },
                  { label: "Data", type: "date" },
                  { label: "Liczba osób", type: "number" }
                ].map((field, index) => (
                  <motion.div
                    key={field.label}
                    className={styles.formGroup}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <label className={styles.formLabel}>{field.label}</label>
                    <motion.input
                      type={field.type}
                      className={styles.formInput}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      {...(field.type === "number" ? { min: "1" } : {})}
                    />
                  </motion.div>
                ))}

                <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label className={styles.formLabel}>Trasa</label>
                  <motion.select
                    className={styles.formSelect}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <option>Wybierz trasę</option>
                    <option>Wieprz</option>
                    <option>Wisła</option>
                  </motion.select>
                </motion.div>

                <motion.button
                  type="submit"
                  className={styles.formSubmitButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Wyślij zapytanie
                </motion.button>
              </form>
            </motion.div> */}

                        <div className={styles.mapa}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4982.320708853937!2d21.994111466308226!3d51.363348719769185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47227c6740ba062f%3A0xb6fa8575dc8a536e!2sParchatka%2021a%2C%2024-120%20Parchatka!5e0!3m2!1spl!2spl!4v1750244233099!5m2!1spl!2spl" width="600" height="450" loading="lazy" ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default LandingPageClient;