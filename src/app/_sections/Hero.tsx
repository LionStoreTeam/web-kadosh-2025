"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from 'next/image';

export function Hero() {
    return (
        <div className="w-full">
            <div className="my-14">
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
                    <div className="bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
                        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-slate-600 relative z-20">
                            Bienvenidos
                        </h1>
                    </div>
                    <div className="font-light text-[20px] md:text-4xl dark:text-neutral-200 ">
                        Calidad y Estilo en Uniformes Médicos
                    </div>
                    {/* Image Hero */}
                    <Image src="/logo.svg" alt="hero_image_logo" width={500} height={500} className="float my-10" />
                </motion.div>
            </div>
        </div>
    );
}
