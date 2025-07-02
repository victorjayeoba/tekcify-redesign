"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const SuccessStories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      name: 'Admon',
      quote: "Binx AI transformed how I manage my content creation workflow",
      story: "As a digital nomad and content creator, I needed a tool that could keep up with my fast-paced workflow. Binx AI became my virtual assistant, helping me brainstorm content ideas, analyze trends, and even generate image descriptions.",
      features: [
        '50% reduction in content planning time',
        'Increased engagement by 75%',
        'Seamless WhatsApp integration for on-the-go content creation',
      ],
      avatar: 'https://tekcify.com/assets/sarah.svg', // Placeholder image
    },
    {
      name: 'John Clement',
      quote: "Pdfx.chat revolutionized how I handle research papers",
      story: "Managing hundreds of research papers and extracting key information was always a challenge. Pdfx.chat's AI-powered analysis and summarization capabilities have made it possible to process papers more efficiently and create study materials for my students.",
      features: [
        '80% faster document analysis',
        'Automated quiz generation for students',
        'Enhanced research collaboration',
      ],
      avatar: 'https://tekcify.com/assets/henry.svg', // Placeholder image, you can replace this
    },
    // Add more testimonials here
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-[#7C3AED]">Success Stories</span>
          </div>
          <br/>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#302260] via-purple-primary to-[#562EA7] inline-block text-transparent bg-clip-text">
            Real Stories, Real Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Tekcify is transforming businesses worldwide
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div className="flex-[0_0_100%] min-w-0" key={index}>
                  <div className="bg-white pb-10 pl-15  rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-purple-100/50 h-[400px] rounded-xl p-8 flex items-center justify-center">
                      <div className="bg-green-200  rounded-full p-2">
                        <Image
                          src={testimonial.avatar}
                          alt={`${testimonial.name}'s avatar`}
                          width={300}
                          height={400}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div className='p-8 pl-2'>
                      <p className="text-2xl font-medium italic text-gray-600 mb-6">
                        &quot;{testimonial.quote}&quot; <span className="text-lg not-italic text-gray-500">~ {testimonial.name}</span>
                      </p>
                      <p className="text-gray-600 mb-6">{testimonial.story}</p>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Most Loved Features</h4>
                        <ul className="space-y-2">
                          {testimonial.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button onClick={scrollPrev} className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={scrollNext} className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'w-4 bg-purple-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories; 