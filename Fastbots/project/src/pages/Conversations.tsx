import React, { useState } from 'react';
import { Search, Filter, MessageSquare, User, Clock, MoreVertical } from 'lucide-react';

interface Conversation {
  id: string;
  user: {
    name: string;
    avatar: string;
    email: string;
  };
  bot: string;
  lastMessage: string;
  timestamp: string;
  status: 'active' | 'resolved' | 'pending';
  messageCount: number;
  channel: 'web' | 'slack' | 'email' | 'discord';
}

export const Conversations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);

  const conversations: Conversation[] = [
    {
      id: '1',
      user: {
        name: 'Sarah Johnson',
        avatar: 'SJ',
        email: 'sarah.johnson@email.com'
      },
      bot: 'Customer Support Bot',
      lastMessage: 'Thank you for your help! The issue is now resolved.',
      timestamp: '2 minutes ago',
      status: 'resolved',
      messageCount: 12,
      channel: 'web'
    },
    {
      id: '2',
      user: {
        name: 'Mike Chen',
        avatar: 'MC',
        email: 'mike.chen@company.com'
      },
      bot: 'Sales Assistant',
      lastMessage: 'Can you provide more details about the enterprise plan?',
      timestamp: '15 minutes ago',
      status: 'active',
      messageCount: 8,
      channel: 'slack'
    },
    {
      id: '3',
      user: {
        name: 'Emily Davis',
        avatar: 'ED',
        email: 'emily.davis@startup.io'
      },
      bot: 'FAQ Bot',
      lastMessage: 'I need help with integration setup.',
      timestamp: '1 hour ago',
      status: 'pending',
      messageCount: 3,
      channel: 'email'
    },
    {
      id: '4',
      user: {
        name: 'Alex Rodriguez',
        avatar: 'AR',
        email: 'alex.r@techcorp.com'
      },
      bot: 'Lead Qualifier',
      lastMessage: 'What are your pricing options for small teams?',
      timestamp: '2 hours ago',
      status: 'active',
      messageCount: 15,
      channel: 'discord'
    },
    {
      id: '5',
      user: {
        name: 'Lisa Wang',
        avatar: 'LW',
        email: 'lisa.wang@agency.com'
      },
      bot: 'Customer Support Bot',
      lastMessage: 'The bot helped me find exactly what I was looking for.',
      timestamp: '3 hours ago',
      status: 'resolved',
      messageCount: 6,
      channel: 'web'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      case 'resolved': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getChannelColor = (channel: string) => {
    switch (channel) {
      case 'web': return 'bg-blue-500';
      case 'slack': return 'bg-purple-500';
      case 'email': return 'bg-red-500';
      case 'discord': return 'bg-indigo-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredConversations = conversations.filter(conversation => {
    const matchesSearch = conversation.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conversation.bot.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conversation.lastMessage.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || conversation.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Conversations</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor and manage all bot conversations</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
              <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {conversations.filter(c => c.status === 'active').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg">
              <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {conversations.filter(c => c.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
              <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Resolved</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {conversations.filter(c => c.status === 'resolved').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
              <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Messages</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {conversations.reduce((sum, c) => sum + c.messageCount, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search conversations..."
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
            <option value="pending">Pending</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      {/* Conversations List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer ${
                selectedConversation === conversation.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
              }`}
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">{conversation.user.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {conversation.user.name}
                      </h3>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(conversation.status)}`}>
                        {conversation.status}
                      </span>
                      <div className={`w-2 h-2 ${getChannelColor(conversation.channel)} rounded-full`}></div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{conversation.user.email}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Bot: {conversation.bot}</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">{conversation.lastMessage}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{conversation.timestamp}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{conversation.messageCount} messages</p>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};