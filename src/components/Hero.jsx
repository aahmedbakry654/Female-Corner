import React, { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';

import './Hero.css';

function Hero() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: 'Female Corner',
      subtitle: 'Since 2002 in Zagazig',
      paragraph:
        'An Egyptian brand established in 2002 that offered a wide range of women veiled wear which try to follow latest international fashion with producing good products in high quality and style for suiting all tastes with reasonable price.',
    },
    ar: {
      title: 'Female Corner',
      subtitle: 'منذ عام 2002 في الزقازيق',
      paragraph:
        'علامة تجارية مصرية أسست في عام 2002 تقدم مجموعة واسعة من الملابس النسائية المحجبة التي تحاول متابعة أحدث صيحات الموضة الدولية مع إنتاج منتجات جيدة بجودة عالية وأسلوب يناسب جميع الأذواق بأسعار معقولة.',
    },
  };

  const videos = [
    {
      id: 1,
      name: {
        en: 'Salah Salem Street, next to Al Nokhba Hospital',
        ar: 'صلاح سالم بجوار مستشفى النخبة',
      },
      videoUrl: '/vedio/vid1.mp4',
      poster: '/photo/photo1.jpg',
    },
    {
      id: 2,
      name: {
        en: 'Tolba Owaida Street, next to Tota',
        ar: 'شارع طلبه عويضه بجوار توته',
      },
      videoUrl: '/vedio/vid2.mp4',
      poster: '/photo/photo1.jpg',
    },
    {
      id: 3,
      name: {
        en: 'Tolba Owaida Street, in front of Alexandria Pizza',
        ar: 'شارع طلبه عويضه امام بيتزا اسكندريه',
      },
      videoUrl: '/vedio/vid3.mp4',
      poster: '/photo/photo1.jpg',
    },
    {
      id: 4,
      name: {
        en: 'Tolba Owaida Street, next to El-Rasheedy',
        ar: 'شارع طلبه عويضه بجوار الرشيدي',
      },
      videoUrl: '/vedio/vid4.mp4',
      poster: '/photo/photo1.jpg',
    },
  ];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <section className="hero">
      <div className="bg-orbits"></div>
      <div className="hero-content">
        <h1 className="hero-title">{content[language].title}</h1>
        <p className="hero-subparagraph">
          {content[language].subtitle}
        </p>

        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <div className="video-header">
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="video-link">
                  {video.name[language]}
                </a>
              </div>
              <div className="video-wrapper">
                <video
                  width="100%"
                  height="220px"
                  controls
                  preload="none"
                  poster={video.poster}
                  src={video.videoUrl}
                  title={video.name[language]}
                  loading="lazy"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-footer">
          <p className="hero-paragraph">{content[language].paragraph}</p>
          <button className="translate-button" onClick={toggleLanguage} aria-label="Toggle Language">
            <FaGlobe /> {language === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;