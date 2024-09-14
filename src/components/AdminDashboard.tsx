import React, { useState } from 'react';

import ModelsManagement from './ModelsManagement';
import { Product } from '../tsthings.ts/Product';

import { FashionEvent } from '../DATA/EventsData';
// Mock data imports
import mockEvents from '../DATA/EventsData';
import { Media } from '../DATA/mediaData';
import mockProducts from '../DATA/productsData';
import mockModels from '../DATA/ModelsData';
import { media } from '../DATA/mediaData';
import { Model } from './Home';

interface Member {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  joinDate: string;
}

const mockMembers: Member[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', joinDate: '2024-01-15' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', joinDate: '2024-02-20' },
];

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'events' | 'models' | 'products' | 'media' | 'members'>('events');
  const [events, setEvents] = useState<FashionEvent[]>(mockEvents);
  const [models, setModels] = useState<Model[]>(mockModels);
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [mediaItems, setMediaItems] = useState<Media[]>(media);
  const [members, setMembers] = useState<Member[]>(mockMembers);

  const handleDelete = (id: number) => {
    switch (activeTab) {
      case 'events':
        setEvents(events.filter(event => event.id !== id));
        break;
      case 'models':
        setModels(models.filter(model => model.id !== id));
        break;
      case 'products':
        setProducts(products.filter(product => product.id !== id));
        break;
      case 'media':
        setMediaItems(mediaItems.filter(item => item.id !== id));
        break;
      case 'members':
        setMembers(members.filter(member => member.id !== id));
        break;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'events':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Events</h2>
            {events.map(event => (
              <div key={event.id} className="bg-white p-4 rounded-lg shadow-md mb-4 text-stone-900">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p>{event.date} at {event.time}</p>
                <p>{event.location}</p>
                <button onClick={() => handleDelete(event.id)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            ))}
          </div>
        );
      case 'models':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Models</h2>
            {models.map(model => (
              <div key={model.id} className="bg-white p-4 rounded-lg shadow-md mb-4 text-stone-900">
                <h3 className="text-xl font-semibold">{model.name}</h3>
                <p>Age: {model.age}, Height: {model.height}</p>
                <button onClick={() => handleDelete(model.id)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            ))}
          </div>
        );
      case 'products':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            {products.map(product => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md mb-4 text-stone-900">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <button onClick={() => handleDelete(product.id)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            ))}
          </div>
        );
      case 'media':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Media</h2>
            {mediaItems.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-4 text-stone-900">
                <h3 className="text-xl font-semibold">{item.title || 'Untitled'}</h3>
                <p>Type: {item.type}</p>
                <button onClick={() => handleDelete(item.id)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            ))}
          </div>
        );
      case 'members':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Members</h2>
            {members.map(member => (
              <div key={member.id} className="bg-white p-4 rounded-lg shadow-md mb-4 text-stone-900">
                <h3 className="text-xl font-semibold">{member.firstName} {member.lastName}</h3>
                <p>Email: {member.email}</p>
                <p>Joined: {member.joinDate}</p>
                <button onClick={() => handleDelete(member.id)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-8 font-sans">
      <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">Admin Dashboard</h1>
      <div className="flex mb-6">
        {['events', 'models', 'products', 'media', 'members'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`mr-2 px-4 py-2 rounded-t-lg font-semibold ${
              activeTab === tab ? 'bg-pink-600 text-white' : 'bg-pink-200 text-pink-800'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;