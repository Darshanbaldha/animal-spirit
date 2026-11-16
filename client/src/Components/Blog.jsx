import React from "react";
import penguinImage from "../assets/penguin.jpg";
import elephantImage from "../assets/elephant-1.jpg";
import hyenaImage from "../assets/hyena.jpg";
import gorillaImage from "../assets/gorilla.jpg";
import tigerImage from "../assets/tiger.jpg";
import pandaImage from "../assets/panda.jpg";
import zebraImage from "../assets/zebra.jpg";
import crocodileImage from "../assets/crocodile.jpg";

const articles = [
    {
        image: penguinImage,
        title: "The Fascinating World of Penguins",
        date: "July 8, 2024",
        author: "John Doe",
        description: "Penguins are remarkable birds built for life in the water. Their streamlined bodies and powerful flippers help them swim with speed, while their close colonies offer warmth and protection in challenging environments."
    },
    {
        image: elephantImage,
        title: "Majestic Giants: A Tribute to Elephants",
        date: "July 7, 2024",
        author: "Jane Smith",
        description: "Elephants combine great strength with remarkable sensitivity. They live in close family groups, communicate through a range of sounds and gestures, and play important roles in the ecosystems they inhabit."
    },
    {
        image: hyenaImage,
        title: "Hyenas: Beyond the Misunderstood Laugh",
        date: "July 6, 2024",
        author: "Alex Johnson",
        description: "Hyenas are intelligent and highly social carnivores. Their calls, including the familiar giggle of spotted hyenas, are part of a complex communication system used within their clans."
    },
    {
        image: gorillaImage,
        title: "Gorillas: Nature's Gentle Giants",
        date: "July 5, 2024",
        author: "Emily Brown",
        description: "Gorillas live in close family groups and communicate through sounds, gestures, and expressions. Protecting their forest habitats is essential for the future of these great apes."
    },
    {
        image: tigerImage,
        title: "Inside the World of the Bengal Tiger",
        date: "July 4, 2024",
        author: "Michael Green",
        description: "Bengal tigers are powerful predators with individually unique stripe patterns. They depend on healthy forests, grasslands, and prey populations to survive in the wild."
    },
    {
        image: pandaImage,
        title: "Giant Pandas and Their Bamboo Forests",
        date: "July 3, 2024",
        author: "Sophia Wilson",
        description: "Giant pandas are instantly recognizable for their black-and-white coats. Bamboo makes up most of their diet, which is why protecting mountain bamboo forests is so important."
    },
    {
        image: zebraImage,
        title: "Why Every Zebra Has a Unique Stripe Pattern",
        date: "July 2, 2024",
        author: "Daniel Lee",
        description: "A zebra's stripe pattern is as distinctive as a fingerprint. Zebras travel in social groups and are well adapted to the open grasslands and savannas of Africa."
    },
    {
        image: crocodileImage,
        title: "Crocodiles: Ancient Survivors of the Wild",
        date: "July 1, 2024",
        author: "Olivia Martin",
        description: "Crocodiles are ancient reptiles with powerful jaws and highly effective senses. They are important predators in freshwater habitats and help maintain balance in their ecosystems."
    }
];

export default function Blog() {
    return (
        <main className="bg-gray-100">
            <div className="container mx-auto p-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-center">Welcome to Our Blog</h1>
                    <p className="text-gray-600 text-center mt-2">
                        Discover wildlife stories, animal facts, and the importance of conservation
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article) => (
                        <article key={article.title} className="bg-white rounded-lg shadow-md p-6">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="mb-4 rounded-lg w-full h-64 object-cover transition transform hover:scale-105 duration-300 ease-in-out"
                                loading="lazy"
                            />
                            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                            <p className="text-gray-600 mb-2">
                                Published on {article.date} by {article.author}
                            </p>
                            <p className="text-gray-700 leading-relaxed">{article.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
