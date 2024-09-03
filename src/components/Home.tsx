import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
          ¡Welcome to Mesa Enterprice!
        </h1>
        <div className="bg-pink-500 shadow-lg rounded-lg p-6 mb-8">
          <p className="text-lg text-white mb-4">
            At Andrea Mesa, we believe in empowering individuals through the art of beauty and fashion. Our mission is to create a platform where creativity flourishes, diversity is celebrated, and every person can express their unique style with confidence.
          </p>
          <p className="text-lg text-white">
            We're more than just a brand; we're a community of passionate artists, models, and beauty enthusiasts who inspire and support each other. Join us on this exciting journey of self-expression and discover the transformative power of makeup, fashion and more.
          </p>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/jSjiwmseHAc"
            title="Andrea Mesa Welcome Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Featured Models Section */}
      <section className="py-12 px-10 bg-pink-500 mb-10 rounded-lg">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Featured Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Replace with actual model data */}
          {[1, 2, 3].map((model) => (
            <div key={model} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`/api/placeholder/400/300`}
                alt={`Model ${model}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Model Name {model}</h3>
                <p className="text-gray-600">Brief description of the model</p>
                <a href="#" className="mt-4 inline-flex items-center text-pink-600 hover:text-pink-700">
                  View Profile <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-pink-500 rounded-lg px-10">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Replace with actual product data */}
          {[1, 2, 3, 4].map((product) => (
            <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden px-10">
              <img
                src={`/api/placeholder/300/300`}
                alt={`Product ${product}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-pink-300">Product Name {product}</h3>
                <p className="text-gray-600 mb-2">Brief description of the product</p>
                <p className="text-pink-600 font-bold">$XX.XX</p>
                <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 bg-pink-500 rounded-lg mt-10 px-10 mb-10">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Upcoming Events</h2>
        <div className="space-y-4">
          {/* Replace with actual event data */}
          {[1, 2, 3].map((event) => (
            <div key={event} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-xl mb-2">Event Name {event}</h3>
              <p className="text-gray-600 mb-2">Date: XX/XX/XXXX</p>
              <p className="text-gray-600 mb-4">Location: Event Venue</p>
              <p className="text-gray-700">Brief description of the event and what to expect.</p>
              <a href="#" className="mt-4 inline-flex items-center text-pink-600 hover:text-pink-700">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-12 bg-pink-500 rounded-lg px-10">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-xl mb-4 text-gray-500">Empowerment</h3>
            <p className="text-gray-700">We believe in empowering individuals to express their unique beauty and style.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-xl mb-4 text-gray-500">Diversity</h3>
            <p className="text-gray-700">We celebrate diversity and inclusivity in all aspects of our brand.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-xl mb-4 text-gray-500">Innovation</h3>
            <p className="text-gray-700">We constantly strive for innovation in products and experiences.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;