"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import styles from "@/app/page.module.css"

// Animation variants matching your existing ones
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
}

// Sample reviews data - replace with your actual Google Reviews
const reviews = [
  {
    id: 1,
    name: "Renata Esss",
    rating: 5,
    date: "2 tygodnie temu",
    text: "Świetnie się bawiliśmy ! Trasa z Janowca do Puław, mimo moich początkowych obaw, okazała się prosta i niezwykle przyjemna. Spływ Wisłą był okazją do podziwiania pięknych krajobrazów, postuj na ognisko i płyniemy dalej . Zakończenie spływu w Porcie Marina w Puławach było bardzo wygodne. Zdecydowanie polecam każdemu, kto szuka niezapomnianych wrażeń na wodzie 🙂",
    avatar: "KM",
  },
  {
    id: 2,
    name: "Agnieszka Sanecka",
    rating: 5,
    date: "2 tygodnie temu",
    text: "Mieliśmy przyjemność skorzystać z usług Wodna Pasja – Kajaki podczas spływu kajakowego na rzece Wieprz i jesteśmy absolutnie zachwyceni! Kajaki były nowe, wygodne i świetnie przygotowane – widać, że właściciele dbają o sprzęt na najwyższym poziomie. Obsługa przemiła, bardzo pomocna i w pełni profesjonalna – wszystko dokładnie wyjaśnione, trasa dobrana idealnie do naszych potrzeb. Cała organizacja dopięta na ostatni guzik. Na zakończenie spływu czekała na nas dodatkowa niespodzianka – klimatyczne ognisko, które było idealnym zwieńczeniem dnia. Super atmosfera, integracja i wspólne pieczenie kiełbasek sprawiły, że ten dzień na długo zostanie w naszej pamięci. Z czystym sumieniem polecam Wodną Pasję – Kajaki każdemu, kto szuka niezapomnianej przygody na wodzie. Na pewno jeszcze wrócimy!",
    avatar: "KM",
  },
  {
    id: 3,
    name: "Edyta Grudzińska",
    rating: 5,
    date: "2 tygodnie temu",
    text: "Spływy kajakowe z ,,Wodną Pasją'' po rzece Wieprz to świetny sposób na aktywny wypoczynek oraz okazja spędzenia wspólnego czasu z super ekipą.Trasa oferuje piękne widoki. Natomiast sprzęt, który proponują właściciele jest nowy i zadbany. Dzięki temu spływy te są idealne. Gorąco polecam!😊",
    avatar: "KM",
  },
  {
    id: 4,
    name: "GOran",
    rating: 5,
    date: "2 tygodnie temu",
    text: 'Świetna organizacja. Zadbane, czyste i wygodne kajaki. Jeśli spływ to tylko z "Wodną Pasją" i z mega pozytywnie zakręconą Szefową :) Serdecznie polecam!',
    avatar: "KM",
  },
  {
    id: 5,
    name: "Monika Grodzicka",
    rating: 5,
    date: "2 tygodnie temu",
    text: "Gospodarze imprezy super daje 10, spływ rewelacja daje 10. Super super super. Dziękuję Wam bardzo . Jesteście naprawdę w git. Buziaki",
    avatar: "KM",
  },
  {
    id: 6,
    name: "Patrycja Mrowiec",
    rating: 5,
    date: "2 tygodnie temu",
    text: "Bardzo polecam☺️ Organizacja całego spływu była na najwyższym poziomie. Od momentu rezerwacji, przez komunikację przed wyjazdem, aż po sam spływ, wszystko przebiegało sprawnie i bezproblemowo. Właściciele firmy bardzo sympatyczni i pomocni. Kajaki i sprzęt dodatkowy w idealnym stanie.",
    avatar: "KM",
  },



  {
    id: 7,
    name: "Kacper Mrowiec",
    rating: 5,
    date: "2 tygodnie temu",
    text: "Świetna przygoda na Wieprzu! Kajaki w doskonałym stanie, bardzo mili i pomocni Właściciele. Wszystko zorganizowane sprawnie i bez stresu. Idealny sposób na relaks w pięknych okolicznościach przyrody. Gorąco polecam!",
    avatar: "KM",
  },
  {
    id: 8,
    name: "Ola Klimek",
    rating: 5,
    date: "1 miesiąc temu",
    text: "Super przygoda, dobra organizacja, sprzęt nowy i czysty, ładna trasa, a po dotarciu na metę ognisko z kiełbaskami. Polecam gorąco! 😊",
    avatar: "OK",
  },
  {
    id: 9,
    name: "Marta Ojdana",
    rating: 5,
    date: "3 tygodnie temu",
    text: "Świetna zabawa i relaks na wodzie! Wodna Pasja – Kajaki to fantastyczne miejsce na aktywny wypoczynek! Kajaki w doskonałym stanie, czyste i wygodne. Obsługa bardzo miła, pomocna i dobrze zorganizowana wszystko przebiegało sprawnie . Trasa spokojna, piękne widoki .Na pewno wrócimy! Z całego serca polecam każdemu, kto chce spędzić czas w naturze i dobrze się bawić!",
    avatar: "KW",
  },
  {
    id: 10,
    name: "Piotr Zieliński",
    rating: 5,
    date: "2 miesiące temu",
    text: "Profesjonalne podejście do klienta, doskonała znajomość tras i bezpieczeństwo na pierwszym miejscu. Spływ grupowy dla naszej firmy był strzałem w dziesiątkę!",
    avatar: "PZ",
  },
  {
    id: 11,
    name: "Agnieszka Stepniak-Łuczywek",
    rating: 5,
    date: "1 miesiąc temu",
    text: "Serdecznie polecam te firmę. Super nowe czyste kajaki, wspaniała obsługa. Świetne centy, a na koniec spływu mieliśmy zorganizowane ognisko.",
    avatar: "ASŁ",
  },
  {
    id: 12,
    name: "Kamila Kobiałka",
    rating: 5,
    date: "3 tygodnie temu",
    text: "Gorąco polecamy! Właściciele przygotowali wszystko na tip top. To był nasz pierwszy spływ i na pewno nie ostatni. Nowe kajaki, wyposażone w dodatkowe miejsce dla dziecka. Spędziliśmy rodzinny czas w pieknych okolicznościach przyrody.",
    avatar: "KK",
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
      ))}
    </div>
  )
}

const ReviewsSection = () => {
  return (
    <section
      className={styles.services}
      style={{ background: "linear-gradient(135deg,rgb(230, 232, 245) 0%,rgb(240, 249, 255) 50%,rgb(254, 224, 224) 100%)" }}
    >
      <div className={styles.sectionContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={styles.sectionTitle}>Opinie Naszych Klientów</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-1">
              <StarRating rating={5} />
              <span className="text-lg font-semibold text-gray-700 ml-2">5.0</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">Oparte na 127 opiniach Google</span>
          </div>
        </motion.div>

        {/* Horizontal Carousel */}
        <motion.div
          className="mt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div variants={scaleIn} custom={index} className="h-full">
                    <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                      <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                        <div className="space-y-3 sm:space-y-4 flex-1">
                          {/* Header with avatar and info */}
                          <div className="flex items-start gap-2 sm:gap-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0">
                              {review.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 truncate text-sm sm:text-base">
                                {review.name}
                              </h4>
                              <div className="flex items-center gap-2 mt-1">
                                <StarRating rating={review.rating} />
                              </div>
                              {/* <p className="text-xs text-gray-500 mt-1">{review.date}</p> */}
                            </div>
                          </div>

                          {/* Quote icon */}
                          <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 opacity-50" />

                          {/* Review text */}
                          <p className="text-gray-700 leading-relaxed text-xs sm:text-sm flex-1">{review.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-8" />
            <CarouselNext className="hidden sm:flex -right-4 lg:-right-8" />
          </Carousel>
        </motion.div>

        {/* Carousel indicators for mobile */}
        <div className="flex justify-center mt-6 sm:hidden">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(reviews.length / 1) }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-300" />
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <motion.a
            href="https://www.google.com/maps/place/Wodna+Pasja+-+Kajaki/@51.3635873,21.9967359,17z/data=!3m1!4b1!4m6!3m5!1s0x7d3ebec33104419:0xdac1ae61e27a7fc!8m2!3d51.363584!4d21.9993108!16s%2Fg%2F11y4tfmg92?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.primaryButton} inline-block`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            📍 Zobacz wszystkie opinie na Google Maps
          </motion.a>
          <p className="text-gray-600 mt-3 text-sm">Podziel się swoją opinią o naszych spływach kajakowych!</p>
        </motion.div>
      </div>
    </section>
  )
}

export default ReviewsSection
