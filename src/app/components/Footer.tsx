"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"
import styles from "./Footer.module.css"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          {/* Logo and Company Info */}
          <motion.div
            className={styles.footerBrand}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className={styles.footerLogo}>
              <motion.div
                className={styles.footerLogoContainer}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className={styles.footerLogoImage}>
                  <div className={styles.footerLogoPlaceholder}>
                    <Image src={'/images/logo.jpg'} width={70} height={70} alt="spływy kajakowe - wodna pasja"/>
                  </div>
                </div>
                <div className={styles.footerLogoText}>
                  <h3 className={styles.footerLogoTitle}>Wodna Pasja</h3>
                  <p className={styles.footerLogoSubtitle}>Kajaki</p>
                </div>
              </motion.div>
            </Link>
            <p className={styles.footerDescription}>
              Profesjonalne spływy kajakowe i wypożyczalnia sprzętu w malowniczej Parchatce. Odkryj uroki Wieprza i
              Wisły z nami!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h4 className={styles.footerSectionTitle}>Szybkie linki</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/" className={styles.footerLink}>
                  <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    Strona główna
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/trasy" className={styles.footerLink}>
                  <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    Trasy kajakowe
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/#kontakt" className={styles.footerLink}>
                  <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    Kontakt
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/#cennik" className={styles.footerLink}>
                  <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    Cennik
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="regulamin.pdf" target="blank" className={styles.footerLink}>
                  <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    Regulamin
                  </motion.span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h4 className={styles.footerSectionTitle}>Kontakt</h4>
            <div className={styles.footerContactList}>
              <motion.div
                className={styles.footerContactItem}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <MapPin className={styles.footerContactIcon} />
                <div>
                  <p className={styles.footerContactText}>Parchatka 21</p>
                  <p className={styles.footerContactText}>24‑120 Parchatka</p>
                </div>
              </motion.div>
              <motion.div
                className={styles.footerContactItem}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Phone className={styles.footerContactIcon} />
                <div>
                  <p className={styles.footerContactText}>+48 668 481 266</p>
                  <p className={styles.footerContactText}>+48 668 480 786</p>
                </div>
              </motion.div>
              <motion.div
                className={styles.footerContactItem}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Mail className={styles.footerContactIcon} />
                <p className={styles.footerContactText}>wodnapasja.kajaki@gmail.com</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h4 className={styles.footerSectionTitle}>Śledź nas</h4>
            <div className={styles.socialLinks}>
              <motion.a
                href="https://www.facebook.com/profile.php?id=61559743689949#"
                className={styles.socialLink}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              {/* <motion.a
                href="#"
                className={styles.socialLink}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className={styles.socialLink}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </motion.a> */}
            </div>
            <p className={styles.socialDescription}>Obserwuj nasze przygody i najnowsze oferty!</p>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className={styles.footerBottomContent}>
            <p className={styles.footerCopyright}>© {currentYear} Wodna Pasja – Kajaki. Wszystkie prawa zastrzeżone.</p>
            <div className={styles.footerBottomLinks}>
              {/* <Link href="#" className={styles.footerBottomLink}>
                Polityka prywatności
              </Link>
              <Link href="#" className={styles.footerBottomLink}>
                Regulamin
              </Link> */}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
