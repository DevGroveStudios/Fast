import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, MessageSquare, Clock, Target } from 'lucide-react';

export const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    {
      title: 'Total Conversations',
      value: '12,543',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: MessageSquare,
      color: 'bg-blue-500'
    },
    {
      title: 'Unique Users',
      value: '2,847',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Avg Response Time',
      value: '1.2s',
      change: '-0.3s',
      changeType: 'positive' as const,
      icon: Clock,
      color: 'bg-yellow-500'
    },
    {
      title: 'Goal Completion',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: Target,
      color: 'bg-purple-500'
    }
  ];

  const chartData = [
    { day: 'Mon', conversations: 1200, users: 340 },
    { day: 'Tue', conversations: 1450, users: 420 },
    { day: 'Wed', conversations: 1100, users: 380 },
    { day: 'Thu', conversations: 1800, users: 520 },
    { day: 'Fri', conversations: 2100, users: 640 },
    { day: 'Sat', conversations: 1600, users: 480 },
    { day: 'Sun', conversations: 1300, users: 390 }
  ];

  const botPerformance = [
    { name: 'Customer Support Bot', conversations: 4200, satisfaction: 4.8, responseTime: '0.8s' },
    { name: 'Sales Assistant', conversations: 3100, satisfaction: 4.6, responseTime: '1.2s' },
    { name: 'FAQ Bot', conversations: 2800, satisfaction: 4.4, responseTime: '0.5s' },
    { name: 'Lead Qualifier', conversations: 2444, satisfaction: 4.7, responseTime: '1.5s' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">Track your bot performance and user engagement</p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="24h">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 ${metric.color} rounded-xl`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm font-medium ${
                metric.changeType === 'positive' 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversation Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Conversation Trends</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {chartData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-t relative" style={{ height: '200px' }}>
                  <div 
                    className="bg-blue-500 rounded-t absolute bottom-0 w-full transition-all duration-500"
                    style={{ height: `${(data.conversations / 2500) * 100}%` }}
                  ></div>
                  <div 
                    className="bg-green-500 rounded-t absolute bottom-0 w-1/2 transition-all duration-500"
                    style={{ height: `${(data.users / 700) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">{data.day}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Conversations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Users</span>
            </div>
          </div>
        </div>

        {/* Top Performing Bots */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Bot Performance</h3>
          <div className="space-y-4">
            {botPerformance.map((bot, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">{bot.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{bot.conversations.toLocaleString()} conversations</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{bot.satisfaction}</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{bot.responseTime} avg</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Engagement Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Peak Hours</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Most active between 2-4 PM</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">User Retention</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">68% return within 7 days</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Conversion Rate</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">24% complete desired actions</p>
          </div>
        </div>
      </div>
    </div>
  );
};