"use client";
import React, { useState, useRef } from 'react';

const ArtGallery = ({ id }: { id?: string }) => {
    const artPieces = [
        { title: 'Fragmented Motion', image: '/ArtImages/art1.jpg', description: 'This pastel drawing on tinted paper depicts a dynamic human figure in motion, created with expressive and energetic strokes. The figure appears to be wearing headphones or headgear, with a strong sense of movement in the limbs. The use of warm and cool colors, along with loose lines, gives a feeling of fluidity and emotion.' },
        { title: 'Chaos in Patterns', image: '/ArtImages/art2.jpg', description: 'This triptych consists of three abstract pieces filled with dense, angular black lines. The composition resembles a chaotic network of marks, possibly created with ink or charcoal on paper. The repetition and overlapping of the lines create a sense of rhythm, movement, and intensity, evoking themes of complexity and disorder within structure.' },
        { title: 'Calligraphic Chaos', image: '/ArtImages/art3.jpg', description: 'TThis painting depicts a gathering of figures with exaggerated and distorted features, creating a sense of unease and psychological tension. The disjointed composition and unsettling expressions suggest themes of social anxiety, alienation, and inner turmoil. The detached head in the foreground could represent a suppressed or fragmented aspect of the collective psyche. The artist\'s use of muted colors and rough brushstrokes contributes to the overall feeling of discord and unease' },
        { title: 'Gilded Assembly', image: '/ArtImages/art4.jpg', description: 'This painting presents a group of figures rendered in stylized forms and rich golden tones. The figures are arranged in a theatrical composition, with their poses and gestures suggesting a complex narrative. The use of gold adds a sense of grandeur and mystery to the scene. The architectural elements in the background contribute to the overall sense of formality and ritual. The relationship between the figures is ambiguous, but their interactions suggest themes of power, status, and social dynamics.' },
        { title: 'Comfort in Distress', image: '/ArtImages/art5.jpg', description: 'This painting depicts two figures, one comforting the other in a moment of apparent sadness or distress. The artist uses expressive brushstrokes and a somber color palette to convey a sense of empathy and emotional connection. The figures appear vulnerable and authentic in their expressions of grief and support. The composition is simple and direct, focusing on the emotional bond between the two individuals. The work could be interpreted as a celebration of human compassion and the importance of offering solace in times of need.' },
        { title: 'Unfolding Identity', image: '/ArtImages/art6.jpg', description: 'This painting features a highly abstract composition that seems to hint at a portrait. The artist employs a range of geometric shapes and vibrant colors to create a dynamic and visually stimulating image. The composition is divided into distinct areas, with a prominent figure-like shape on the left and more chaotic elements on the right. The eye-like form suggests a human presence, while the other shapes and lines create a sense of visual puzzle. The artwork could be interpreted as an exploration of identity, perception, or the fragmentation of form.'}
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
            <div id="art" style={{ padding: "20px" }}>
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
