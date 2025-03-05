"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from 'next/image';

export function Hero() {
    return (
        <div className="w-full bg-[url('/hero.jpg')] bg-center bg-no-repeat bg-cover bg-fixed">
            <div className="my-14 px-2 py-10 bg-black bg-opacity-40">
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className=" flex flex-col items-center justify-center">
                        <h1 className="text-[60px] font-bold text-center text-white md:text-[90px] xl:text-[140px]">
                            Kadosh
                        </h1>
                    </div>
                    <div className="mb-10 font-light text-[20px] md:text-[40px] xl:text-[60px] text-white">
                        <p className="border-b-2">
                            Uniformes Médicos
                        </p>
                    </div>
                    {/* Image Hero */}
                    <Image src="/logo-w.svg" alt="hero_image_logo" width={500} height={500} className="float my-10 " />
                </motion.div>
            </div>
        </div>
    );
}
