"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

const scaleIn = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

export default function GallerySlider() {
    return (
        <section className="bg-gradient-to-brvia-white via-white mb-25">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Galeria</h2> */}
                </motion.div>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="relative"
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {[4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19].map((i) => (
                                <CarouselItem key={i} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        variants={scaleIn}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className="h-full"
                                    >
                                        <div className="aspect-[4/3] relative overflow-hidden">
                                            <Image
                                                src={`/images/kajaki${i}.jpg`}
                                                width={450}
                                                height={500}
                                                alt={i % 2 === 0 ? "Wisła spływy kajakowe" : "Wieprz spływy kajakowe"}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="flex justify-center mt-8 gap-4">
                            <CarouselPrevious className="relative translate-y-0 left-0 bg-white/90 hover:bg-white border-2 border-blue-200 hover:border-blue-300 text-blue-600 hover:text-blue-700 shadow-lg hover:shadow-xl transition-all duration-200" />
                            <CarouselNext className="relative translate-y-0 right-0 bg-white/90 hover:bg-white border-2 border-blue-200 hover:border-blue-300 text-blue-600 hover:text-blue-700 shadow-lg hover:shadow-xl transition-all duration-200" />
                        </div>
                    </Carousel>
                </motion.div>
            </div>
        </section>
    )
}
