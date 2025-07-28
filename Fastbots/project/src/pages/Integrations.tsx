import React from 'react';
import { Slack, MessageSquare, Mail, Webhook, Plus } from 'lucide-react';

export const Integrations: React.FC = () => {
  const integrations = [
    {
      name: 'Slack',
      description: 'Connect your bots to Slack channels',
      icon: Slack,
      connected: true,
      color: 'bg-purple-500'
    },
    {
      name: 'Discord',
      description: 'Deploy bots to Discord servers',
      icon: MessageSquare,
      connected: false,
      color: 'bg-indigo-500'
    },
    {
      name: 'Email',
      description: 'Handle customer support via email',
      icon: Mail,
      connected: true,
      color: 'bg-red-500'
    },
    {
      name: 'Webhook',
      description: 'Custom webhook integrations',
      icon: Webhook,
      connected: false,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Integrations</h1>
        <p className="text-gray-600 dark:text-gray-400">Connect your bots to external platforms and services</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <div key={integration.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 ${integration.color} rounded-xl`}>
                <integration.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                integration.connected 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
              }`}>
                {integration.connected ? 'Connected' : 'Not Connected'}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{integration.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{integration.description}</p>
            
            <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
              integration.connected
                ? 'bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900/50 dark:text-red-300'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}>
              {integration.connected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};