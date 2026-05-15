import React, { useState } from 'react';

const creativeWorks = [
  {
    title: 'Digital Paintings',
    image: '/creative-works/digital-paintings/avthar.png',
    description: 'A collection of my digital paintings.',
    type: 'digital-paintings',
  },
  {
    title: 'Scribbles',
    image: '/scribbles/Scribble-Woman with Violin.png',
    description: 'A collection of my random pen and digital scribbles.',
    type: 'scribbles',
  },
  {
    title: 'Stories in Motion',
    image: '/video/sqr-jml.png',
    description: 'A collection of my animation stories..',
    type: 'video',
  },
  {
    title: 'Illustrations',
    image: '/illustrations/story-book-01.png',
    description: 'A collection of my illustration works.',
    type: 'illustrations',
  },
];

const digitalPaintingImages = [
  '/creative-works/digital-paintings/avthar.png',
  '/creative-works/digital-paintings/Calvin and Hobbes-01.png',
  '/creative-works/digital-paintings/Calvin and Hobbes-02.png',
  '/creative-works/digital-paintings/Calvin and Hobbes-03.png',
];

const scribbleImages = [
  '/scribbles/Scribble-Woman with Violin.png',
  '/scribbles/Scribble-Soccor.png',
  '/scribbles/stray-dogs.jpg',
  '/scribbles/indians.jpg',
];
const illustrationsImages = [
  '/illustrations/story-book-01.png',
  '/illustrations/story-book-02.png',
  '/illustrations/story-book-03.png',
  '/illustrations/story-book-04.png',
  '/illustrations/presentation-illustration-00.png',
  '/illustrations/presentation-illustration-01.png',
];

const videoStories = [
  {
    vimeoId: '39095436',
    title: 'SQR JMKL',
    thumbnail: 'https://i.vimeocdn.com/video/263684595-640.jpg',
    type: 'vimeo',
  },
  {
    youtubeId: 'uFqdKgqHskY',
    title: 'Stories in Motion: YouTube Sample',
    thumbnail: 'https://img.youtube.com/vi/uFqdKgqHskY/hqdefault.jpg',
    type: 'youtube',
  },
  {
    youtubeId: 'QNsk0gBgg9s',
    title: 'Stories in Motion: Another YouTube Video',
    thumbnail: 'https://img.youtube.com/vi/QNsk0gBgg9s/hqdefault.jpg',
    type: 'youtube',
  },
];

export default function CreativeWorks() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalType, setModalType] = useState(null); // 'digital-paintings', 'scribbles', 'video'
  const [videoIndex, setVideoIndex] = useState(0);

  const openModal = (type, idx = 0) => {
    setModalType(type);
    setModalIndex(idx);
    setModalOpen(true);
    if (type === 'video') setVideoIndex(idx);
  };
  const closeModal = () => setModalOpen(false);
  const showPrev = () => {
    if (modalType === 'digital-paintings') {
      setModalIndex((i) => (i === 0 ? digitalPaintingImages.length - 1 : i - 1));
    } else if (modalType === 'scribbles') {
      setModalIndex((i) => (i === 0 ? scribbleImages.length - 1 : i - 1));
    } else if (modalType === 'illustrations') {
      setModalIndex((i) => (i === 0 ? illustrationsImages.length - 1 : i - 1));
    } else if (modalType === 'video') {
      setVideoIndex((i) => (i === 0 ? videoStories.length - 1 : i - 1));
    }
  };
  const showNext = () => {
    if (modalType === 'digital-paintings') {
      setModalIndex((i) => (i === digitalPaintingImages.length - 1 ? 0 : i + 1));
    } else if (modalType === 'scribbles') {
      setModalIndex((i) => (i === scribbleImages.length - 1 ? 0 : i + 1));
    } else if (modalType === 'illustrations') {
      setModalIndex((i) => (i === illustrationsImages.length - 1 ? 0 : i + 1));
    } else if (modalType === 'video') {
      setVideoIndex((i) => (i === videoStories.length - 1 ? 0 : i + 1));
    }
  };

  let modalImages = [];
  if (modalType === 'digital-paintings') modalImages = digitalPaintingImages;
  if (modalType === 'scribbles') modalImages = scribbleImages;
  if (modalType === 'illustrations') modalImages = illustrationsImages;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-neutral-900 mb-8">Creative Works</h1>
      <p className="text-lg text-neutral-600 mb-12">
        A collection of my random creative explorations: digital paintings, scribbles, and more.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {creativeWorks.map((work, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
            onClick={
              work.type === 'digital-paintings'
                ? () => openModal('digital-paintings', 0)
                : work.type === 'scribbles'
                ? () => openModal('scribbles', 0)
                : work.type === 'video'
                ? () => openModal('video', 0)
                : work.type === 'illustrations'
                ? () => openModal('illustrations', 0)
                : undefined
            }
          >
            <div className="aspect-[4/3] bg-neutral-100 flex items-start justify-center overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className="object-cover w-full h-full max-h-full max-w-full"
                style={{ aspectRatio: '4/3' }}
                onError={e => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="font-semibold text-neutral-900 text-lg mb-2">{work.title}</h2>
              <p className="text-neutral-600 text-sm flex-1">{work.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Digital Paintings, Scribbles, and Video Stories */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative bg-white rounded-xl shadow-lg max-w-5xl w-full p-8 flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-neutral-500 hover:text-neutral-900 text-2xl"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            {modalType === 'video' ? (
              <>
                <div className="flex flex-col md:flex-row gap-8 w-full items-start">
                  <div className="flex flex-col gap-4 w-full md:w-1/3 max-h-[60vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-100">
                    {videoStories.map((video, idx) => (
                      <div
                        key={video.vimeoId || video.youtubeId}
                        className={`rounded-lg border cursor-pointer overflow-hidden transition-all ${videoIndex === idx ? 'border-blue-500 ring-2 ring-blue-200' : 'border-neutral-200 hover:border-blue-400'}`}
                        onClick={() => setVideoIndex(idx)}
                      >
                        <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover" />
                        <div className="p-2 text-sm text-neutral-700 font-medium truncate">{video.title}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full aspect-video max-w-2xl">
                      {videoStories[videoIndex].type === 'vimeo' ? (
                        <iframe
                          src={`https://player.vimeo.com/video/${videoStories[videoIndex].vimeoId}`}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          allowFullScreen
                          title={videoStories[videoIndex].title}
                          className="w-full h-full rounded-lg"
                          style={{ minHeight: 320 }}
                        ></iframe>
                      ) : (
                        <iframe
                          src={`https://www.youtube.com/embed/${videoStories[videoIndex].youtubeId}`}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          allowFullScreen
                          title={videoStories[videoIndex].title}
                          className="w-full h-full rounded-lg"
                          style={{ minHeight: 320 }}
                        ></iframe>
                      )}
                    </div>
                    <div className="mt-4 text-neutral-700 text-base font-medium">
                      {videoStories[videoIndex].title}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-6 w-full justify-center">
                  <button onClick={showPrev} className="text-3xl px-3 py-2 text-neutral-400 hover:text-neutral-700">&#8592;</button>
                  <img
                    src={modalImages[modalIndex]}
                    alt={`${modalType === 'digital-paintings' ? 'Digital Painting' : 'Scribble'} ${modalIndex + 1}`}
                    className="max-h-[80vh] max-w-[80vw] rounded shadow-lg"
                    style={{ background: '#eee' }}
                  />
                  <button onClick={showNext} className="text-3xl px-3 py-2 text-neutral-400 hover:text-neutral-700">&#8594;</button>
                </div>
                <div className="mt-6 text-neutral-700 text-base">
                  {`Image ${modalIndex + 1} of ${modalImages.length}`}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
