"use client";
import React, { useState, useRef } from 'react';

const ArtGallery = () => {
    const artPieces = [
        { title: 'Fragmented Motion', image: '/ArtImages/art1.jpg', description: 'This pastel drawing on tinted paper depicts a dynamic human figure in motion, created with expressive and energetic strokes. The figure appears to be wearing headphones or headgear, with a strong sense of movement in the limbs. The use of warm and cool colors, along with loose lines, gives a feeling of fluidity and emotion.' },
        { title: 'Chaos in Patterns', image: '/ArtImages/art2.jpg', description: 'This triptych consists of three abstract pieces filled with dense, angular black lines. The composition resembles a chaotic network of marks, possibly created with ink or charcoal on paper. The repetition and overlapping of the lines create a sense of rhythm, movement, and intensity, evoking themes of complexity and disorder within structure.' },
        { title: 'Fragmented Dance', image: '/ArtImages/art3.jpg', description: 'This artwork features a collection of figures, abstractly rendered and interwoven. The predominant colors are yellows, blues, and browns. The style suggests a blend of cubism and surrealism. The composition evokes a sense of movement and perhaps a hidden narrative, encouraging interpretation.' },
        { title: 'Shared Burden', image: '/ArtImages/art4.jpg', description: 'This piece portrays two figures in a somber, emotional embrace. The figures are depicted with exaggerated features and visible emotion. The color palette is muted, contributing to the somber mood. The title "Shared Burden" reflects the apparent weight of emotion and empathy between the subjects.' },
        { title: 'The Gathering', image: '/ArtImages/art5.jpg', description: 'This painting depicts a group of figures with distorted and expressive features, set against a muted background. The varied expressions suggest a range of emotions and intentions among the individuals. The overall composition implies a moment of collective activity or observation.' },
        { title: 'The Council', image: '/ArtImages/art6.jpg', description: 'This painting presents a composition of several abstracted figures. The figures are rendered with a mix of angular and curved shapes, and are distinguished by colors such as yellow, black, and white. There is a clear suggestion of interactions between the figures. The background features a blend of light blue and brown shades, with a hint of architectural forms. The overall impression is that of a gathering or assembly, perhaps with ritualistic or ceremonial undertones.'}
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollToIndex = (index: number) => {
        setCurrentIndex(index);
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: index * scrollRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const nextSlide = () => {
        scrollToIndex((currentIndex + 1) % artPieces.length);
    };

    const prevSlide = () => {
        scrollToIndex((currentIndex - 1 + artPieces.length) % artPieces.length);
    };

    const handleImageClick = (index: number) => {
        setZoomedIndex(zoomedIndex === index ? null : index);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "2em", marginBottom: "20px", textAlign: "center" }}>Cincinnati Art Gallery</h1>
            
            <div style={{ position: 'relative', maxWidth: '1200px', margin: 'auto' }}>
                <button onClick={prevSlide} style={arrowStyle('left')}>&#10094;</button>
                <button onClick={nextSlide} style={arrowStyle('right')}>&#10095;</button>
                
                <div 
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        overflowX: 'hidden',
                        scrollSnapType: 'x mandatory',
                    }}
                >
                    {artPieces.map((piece, index) => (
                        <div
                            key={index}
                            style={{
                                flex: '0 0 100%',
                                scrollSnapAlign: 'start',
                                padding: '15px',
                            }}
                        >
                            <img
                                src={piece.image}
                                alt={piece.title}
                                onClick={() => handleImageClick(index)}
                                style={{
                                    width: '100%',
                                    height: '400px',
                                    objectFit: 'contain',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    ...(zoomedIndex === index ? {
                                        position: 'fixed',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '90%',
                                        height: '90%',
                                        zIndex: 1000,
                                        backgroundColor: 'rgba(0,0,0,0.8)',
                                    } : {})
                                }}
                            />
                            <h2 style={{ marginTop: "10px", fontSize: "1.5em", textAlign: "center" }}>{piece.title}</h2>
                            <p style={{ fontSize: "1em", color: "#555", marginTop: "10px", textAlign: "justify" }}>
                                {piece.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                {artPieces.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        style={{
                            cursor: 'pointer',
                            height: '20px',
                            width: '20px',
                            margin: '0 5px',
                            backgroundColor: currentIndex === index ? '#000' : '#bbb',
                            borderRadius: '50%',
                            display: 'inline-block',
                        }}
                    />
                ))}
            </div>

            {zoomedIndex !== null && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        zIndex: 999,
                    }}
                    onClick={() => setZoomedIndex(null)}
                />
            )}
        </div>
    );
};

const arrowStyle = (direction: 'left' | 'right') => ({
    position: 'absolute' as const,
    top: '50%',
    [direction]: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '18px',
    cursor: 'pointer',
    zIndex: 2,
});

export default ArtGallery;
