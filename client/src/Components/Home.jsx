import React from "react";
import lionImage from "../assets/lion.jpg";
import leopardImage from "../assets/leopard.jpg";
import tigerImage from "../assets/tiger-1.jpg";
import pumaImage from "../assets/puma.jpg";
import elephantImage from "../assets/elephant.jpg";
import deerImage from "../assets/deer.jpg";

const animals = [
    {
        image: lionImage,
        name: "King of the Jungle",
        description: "Lions are majestic big cats known for their strength, courage, and close-knit social groups called prides."
    },
    {
        image: leopardImage,
        name: "Master of Stealth",
        description: "Leopards are adaptable hunters with beautiful spotted coats, excellent climbing skills, and remarkable agility."
    },
    {
        image: tigerImage,
        name: "The Striped Giant",
        description: "Tigers are the largest wild cats, recognized by their distinctive stripes and powerful presence."
    },
    {
        image: pumaImage,
        name: "Mountain Ghost",
        description: "Pumas are athletic and quiet big cats that thrive in a wide range of habitats across the Americas."
    },
    {
        image: elephantImage,
        name: "Gentle Giant",
        description: "Elephants are highly intelligent animals with strong family bonds, excellent memories, and expressive communication."
    },
    {
        image: deerImage,
        name: "Grace of the Forest",
        description: "Deer are graceful mammals known for their speed, alert senses, and ability to adapt to different environments."
    }
];

export default function Home() {
    return (
        <main className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-800 transition duration-500 transform hover:scale-105">
                        Explore Beautiful Animals
                    </h1>
                    <p className="text-lg mt-2 text-gray-600 transition duration-500 transform hover:scale-105">
                        Discover the beauty, diversity, and wonder of wildlife
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {animals.map((animal) => (
                        <article
                            key={animal.name}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out"
                        >
                            <img
                                src={animal.image}
                                alt={animal.name}
                                className="w-full h-64 object-cover"
                                loading="lazy"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {animal.name}
                                </h2>
                                <p className="text-gray-700">{animal.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
