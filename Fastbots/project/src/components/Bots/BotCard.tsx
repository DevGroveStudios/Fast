import React from 'react';
import { Bot, MessageSquare, Users, MoreVertical, Play, Pause } from 'lucide-react';

interface BotCardProps {
  bot: {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'inactive' | 'training';
    conversations: number;
    users: number;
    lastActive: string;
    avatar?: string;
  };
}

export const BotCard: React.FC<BotCardProps> = ({ bot }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'training': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{bot.name}</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(bot.status)}`}>
              {bot.status}
            </span>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{bot.description}</p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <MessageSquare className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{bot.conversations}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{bot.users}</span>
          </div>
        </div>
        <span className="text-xs text-gray-500">Last active: {bot.lastActive}</span>
      </div>

      <div className="flex items-center space-x-2">
        <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          {bot.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span>{bot.status === 'active' ? 'Pause' : 'Activate'}</span>
        </button>
        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
          Edit
        </button>
      </div>
    </div>
  );
};