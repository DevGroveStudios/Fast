import React, { useState } from 'react';
import { BotCard } from '../components/Bots/BotCard';
import { Search, Plus, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Bots: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const bots = [
    {
      id: '1',
      name: 'Customer Support Bot',
      description: 'Handles customer inquiries and support tickets automatically',
      status: 'active' as const,
      conversations: 1250,
      users: 340,
      lastActive: '2 minutes ago'
    },
    {
      id: '2',
      name: 'Sales Assistant',
      description: 'Helps customers with product information and sales process',
      status: 'active' as const,
      conversations: 890,
      users: 210,
      lastActive: '1 hour ago'
    },
    {
      id: '3',
      name: 'FAQ Bot',
      description: 'Answers frequently asked questions about products and services',
      status: 'inactive' as const,
      conversations: 456,
      users: 120,
      lastActive: '2 days ago'
    },
    {
      id: '4',
      name: 'Lead Qualifier',
      description: 'Qualifies leads and schedules meetings with sales team',
      status: 'training' as const,
      conversations: 0,
      users: 0,
      lastActive: 'Never'
    }
  ];

  const filteredBots = bots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bot.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || bot.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Bots</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage and configure your chatbots</p>
        </div>
        <button
          onClick={() => navigate('/bots/builder')}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create Bot</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search bots..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="training">Training</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
};