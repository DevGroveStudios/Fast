import React from 'react';
import { Plus, Zap, Settings, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  const actions = [
    {
      name: 'Create New Bot',
      description: 'Build a new chatbot from scratch',
      icon: Plus,
      action: () => navigate('/bots/builder'),
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'Quick Setup',
      description: 'Get started with templates',
      icon: Zap,
      action: () => navigate('/bots'),
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      name: 'View Analytics',
      description: 'Check your bot performance',
      icon: BarChart3,
      action: () => navigate('/analytics'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'Settings',
      description: 'Configure your workspace',
      icon: Settings,
      action: () => navigate('/settings'),
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.name}
            onClick={action.action}
            className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 text-left"
          >
            <div className={`p-2 rounded-lg ${action.color} text-white`}>
              <action.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{action.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};