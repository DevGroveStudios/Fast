import React, { useState } from 'react';
import { FlowBuilder } from '../components/Builder/FlowBuilder';
import { ArrowLeft, Save, Play, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BotBuilder: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('flow');

  const tabs = [
    { id: 'flow', name: 'Flow Builder', icon: Settings },
    { id: 'settings', name: 'Bot Settings', icon: Settings },
    { id: 'training', name: 'Training Data', icon: Settings },
    { id: 'preview', name: 'Preview', icon: Play }
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/bots')}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Bot Builder</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Create and configure your chatbot</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Play className="w-4 h-4" />
            <span>Test Bot</span>
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Configuration</h3>
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          {activeTab === 'flow' && <FlowBuilder />}
          {activeTab === 'settings' && (
            <div className="p-6 h-full overflow-y-auto">
              <div className="max-w-2xl space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Bot Configuration</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Bot Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter bot name"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Description
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe what this bot does"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Welcome Message
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Hello! How can I help you today?"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'training' && (
            <div className="p-6 h-full overflow-y-auto">
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Training Data</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Upload documents or add text to train your bot</p>
                
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">Drag and drop files here or click to upload</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    Choose Files
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'preview' && (
            <div className="p-6 h-full overflow-y-auto">
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Bot Preview</h3>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Your Bot</p>
                        <p className="text-xs text-green-500">Online</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 h-80 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
                          <p className="text-sm text-gray-900 dark:text-white">Hello! How can I help you today?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      />
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};