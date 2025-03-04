"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
    {
        title: "Nuestra Historia",
        description:
            "Kadosh nace en 2020 con la visión de la enfermera Vianey Mayanin Colin Cortez, originaria del estado de Morelos. Con una profunda comprensión de las necesidades del personal de salud, Kadosh fue creada para ofrecer uniformes médicos que no solo aseguren comodidad, sino que también promuevan un diseño funcional y profesional para quienes cuidan de nuestra salud.",
        content: (
            <div className="h-full w-full p-6 flex items-center justify-center text-white">
                <Image
                    src="/logo-w.svg"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Lo que Nos Hace Únicos",
        description:
            "En Kadosh, no solo nos enfocamos en la calidad, sino también en el bienestar y la confianza de quienes usan nuestros productos. Nuestros uniformes están diseñados para proporcionar confort durante largas jornadas laborales, sin sacrificar estilo ni funcionalidad. Trabajamos para garantizar que cada prenda sea una extensión del profesionalismo que caracteriza al personal de salud.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://images.pexels.com/photos/4227114/pexels-photo-4227114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Compromiso Local",
        description:
            "Ubicados en el corazón de Morelos, nos enorgullece poder ofrecer nuestros productos en las principales áreas de Cuernavaca, Temixco, Jiutepec, Emiliano Zapata y Cuautla. Nuestra misión es brindar soluciones accesibles y de alta calidad para quienes están al frente del cuidado médico, apoyando con uniformes que reflejan el compromiso y la dedicación del sector.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://cdn.prod.website-files.com/66de2022d72eb33f2727d561/66fb331e8f5527b4c95fdcad_palaciodecortez.png"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];
export function About() {
    return (
        <div className="w-full">
            <StickyScroll content={content} />
        </div>
    );
}

