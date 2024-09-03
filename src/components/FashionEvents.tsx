import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from '@react-native-community/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define interfaces for our data structures
interface Model {
  id: number;
  name: string;
  image: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  models: Model[];
  images: string[];
}

// Mock data (replace with API call later)
const mockEvents: Event[] = [
  {
    id: 1,
    title: "Summer Gala 2024",
    date: "2024-07-15",
    time: "19:00",
    location: "Grand Plaza Hotel, New York",
    description: "Our annual summer showcase featuring the latest in haute couture and ready-to-wear collections.",
    models: [
      { id: 1, name: "Alice Johnson", image: "/api/placeholder/100/100" },
      { id: 2, name: "Bob Smith", image: "/api/placeholder/100/100" },
    ],
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300"],
  },
  {
    id: 2,
    title: "Autumn Fashion Week",
    date: "2024-09-22",
    time: "14:00",
    location: "Metropolitan Museum, Paris",
    description: "Experience the cutting-edge trends for the upcoming autumn season in this week-long extravaganza.",
    models: [
      { id: 3, name: "Carol Davis", image: "/api/placeholder/100/100" },
      { id: 4, name: "David Brown", image: "/api/placeholder/100/100" },
    ],
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300"],
  },
  // Add more mock events as needed
];

const FashionEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(mockEvents);

  useEffect(() => {
    // Fetch events from API and update state
    // setEvents(fetchedEvents);
  }, []);

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pink-500 p-2 rounded-full"
        onClick={onClick}
      >
        <ChevronLeft className="text-white" />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pink-500 p-2 rounded-full"
        onClick={onClick}
      >
        <ChevronRight className="text-white" />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-pink-500 mb-8">Upcoming Fashion Events</h1>
      <Slider {...settings}>
        {events.map((event) => (
          <div key={event.id} className="px-4">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-48" src={event.images[0]} alt={event.title} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-pink-500 font-semibold">{event.date}</div>
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-white">{event.title}</h2>
                  <p className="mt-2 text-gray-300">{event.description}</p>
                  <div className="mt-4 flex items-center text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="mt-2 flex items-center text-gray-400">
                    <Clock size={16} className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">Participating Models</h3>
                <div className="flex space-x-4">
                  {event.models.map((model) => (
                    <div key={model.id} className="flex items-center">
                      <img className="h-10 w-10 rounded-full mr-2" src={model.image} alt={model.name} />
                      <span className="text-gray-300">{model.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 py-4">
                <h3 className="text-lg font-semibold text-white mb-2">Event Gallery</h3>
                <div className="grid grid-cols-3 gap-4">
                  {event.images.map((image, index) => (
                    <img key={index} className="h-32 w-full object-cover rounded" src={image} alt={`Event image ${index + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FashionEvents;