import React from 'react';
import { TrendingUp, TrendingDown, Activity, Clock } from 'lucide-react';

export const OverviewSection: React.FC = () => {
  const metrics = [
    {
      title: 'Response Time',
      value: '1.2s',
      change: '-0.3s',
      changeType: 'positive' as const,
      trend: [65, 70, 68, 75, 72, 78, 74, 80, 76, 82, 79, 85]
    },
    {
      title: 'Success Rate',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive' as const,
      trend: [88, 89, 91, 90, 92, 91, 93, 92, 94, 93, 95, 94]
    },
    {
      title: 'Active Sessions',
      value: '247',
      change: '+12',
      changeType: 'positive' as const,
      trend: [200, 210, 205, 220, 215, 230, 225, 240, 235, 250, 245, 247]
    },
    {
      title: 'Error Rate',
      value: '2.1%',
      change: '-0.5%',
      changeType: 'positive' as const,
      trend: [3.2, 3.0, 2.8, 2.9, 2.6, 2.4, 2.5, 2.3, 2.2, 2.1, 2.0, 2.1]
    }
  ];

  const recentEvents = [
    {
      id: 1,
      type: 'success',
      message: 'Customer Support Bot resolved 15 tickets',
      time: '2 minutes ago',
      icon: TrendingUp
    },
    {
      id: 2,
      type: 'info',
      message: 'New user registered and started conversation',
      time: '5 minutes ago',
      icon: Activity
    },
    {
      id: 3,
      type: 'warning',
      message: 'Sales Bot response time increased',
      time: '12 minutes ago',
      icon: Clock
    },
    {
      id: 4,
      type: 'success',
      message: 'Integration with Slack completed successfully',
      time: '1 hour ago',
      icon: TrendingUp
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-100 dark:bg-green-900/50 dark:text-green-400';
      case 'warning': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-400';
      case 'error': return 'text-red-600 bg-red-100 dark:bg-red-900/50 dark:text-red-400';
      default: return 'text-blue-600 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-400';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">System Overview</h2>
        <p className="text-gray-600 dark:text-gray-400">Real-time performance metrics and system health</p>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.title}</h3>
              <div className={`p-1 rounded ${
                metric.changeType === 'positive' 
                  ? 'bg-green-100 dark:bg-green-900/50' 
                  : 'bg-red-100 dark:bg-red-900/50'
              }`}>
                {metric.changeType === 'positive' ? (
                  <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-600 dark:text-red-400" />
                )}
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                <p className={`text-xs ${
                  metric.changeType === 'positive' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {metric.change}
                </p>
              </div>
              <div className="w-16 h-8">
                <svg className="w-full h-full" viewBox="0 0 64 32">
                  <polyline
                    fill="none"
                    stroke={metric.changeType === 'positive' ? '#10B981' : '#EF4444'}
                    strokeWidth="2"
                    points={metric.trend.map((value, i) => `${i * 6},${32 - (value / 100) * 32}`).join(' ')}
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentEvents.map((event) => (
            <div key={event.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-full ${getEventColor(event.type)}`}>
                <event.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white font-medium">{event.message}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};