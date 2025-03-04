"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Banners() {
    return (
        <div className="mb-20 rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
            <h1 className="mb-20 font-bold text-center text-[35px] text-slate-600 md:text-[60px] xl:text-[90px]">
                ¿ Convencido ?
            </h1>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "Vístete con comodidad y estilo, porque tu trabajo merece lo mejor. ¡Descubre los uniformes Kadosh!",
        name: "Uniformes médicos",
        title: "KADOSH",
    },
    {
        quote:
            "Más que un uniforme, una prenda diseñada para tu confort y profesionalismo. ¡Compra Kadosh hoy!",
        name: "Uniformes médicos",
        title: "KADOSH",
    },
    {
        quote: "Larga jornada, gran desempeño. Kadosh te acompaña con uniformes que cuidan de ti mientras cuidas de los demás.",
        name: "Uniformes médicos",
        title: "KADOSH",
    },
    {
        quote:
            "La calidad que buscas, el diseño que necesitas. ¡Haz de Kadosh tu opción para uniformes médicos!",
        name: "Uniformes médicos",
        title: "KADOSH",
    },
    {
        quote:
            "Con Kadosh, cada día de trabajo es más cómodo y estilizado. ¡Equípate con lo mejor para tu labor!",
        name: "Uniformes médicos",
        title: "KADOSH",
    },
    {
        quote:
            "Para los que cuidan de todos, nosotros cuidamos de su comodidad. Compra ahora tus uniformes Kadosh.",
        name: "Uniformes médicos",
        title: "KADOSH",
    },
    {
        quote:
            "Uniformes pensados para tu bienestar. Con Kadosh, la calidad y el diseño se encuentran al servicio de tu profesión.",
        name: "Uniformes médicos",
        title: "KADOSH",
    },
    {
        quote:
            "Diseño, confort y resistencia en cada prenda. Kadosh: la elección inteligente para tu uniforme médico.",
        name: "Uniformes médicos",
        title: "KADOSH",
    },
    {
        quote:
            "¿Buscas durabilidad y elegancia? Los uniformes Kadosh están hechos para ti. ¡Haz tu pedido hoy!",
        name: "Uniformes médicos",
        title: "KADOSH",
    },
    {
        quote:
            "Tu trabajo exige lo mejor. Nosotros también. ¡Compra tu uniforme Kadosh y siente la diferencia!",
        name: "Uniformes médicos",
        title: "KADOSH",
    },
];
