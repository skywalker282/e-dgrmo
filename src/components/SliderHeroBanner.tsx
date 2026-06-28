"use client";

import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderHeroBanner = () => {
  const { t } = useTranslation();

  // Define slider content with translation keys
  const sliderContent = [
    {
      image: "/Slider 1 Batiment du gouvernaurat.jpeg",
      titleKey: "slider-1-title",
      descriptionKey: "slider-1-description",
      ctaKey: "slider-1-cta",
    },
    {
      image: "/Slider 2 Batiment du Programe PDL 145 .jpg",
      titleKey: "slider-2-title",
      descriptionKey: "slider-2-description",
      ctaKey: "slider-2-cta",
    },
    {
      image: "/Slider 3 Traffic Maritime a Lisala.jpeg",
      titleKey: "slider-3-title",
      descriptionKey: "slider-3-description",
      ctaKey: "slider-3-cta",
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-dark-navy to-dark-charcoal text-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={false}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[70vh] md:h-[80vh]"
      >
        {sliderContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/80 to-dark-charcoal/60"></div>
              <div className="container-corporate px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-1 bg-accent-gold text-dark-charcoal font-semibold rounded-full text-sm mb-4">
                      {t("hero-badge")}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {t(slide.titleKey)}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                    {t(slide.descriptionKey)}
                  </p>
                  <div className="flex justify-center">
                    <button className="btn-primary">{t(slide.ctaKey)}</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHeroBanner;
