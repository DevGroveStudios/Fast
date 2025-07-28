import React from 'react';
import { StatsCard } from '../components/Dashboard/StatsCard';
import { QuickActions } from '../components/Dashboard/QuickActions';
import { OverviewSection } from '../components/Dashboard/OverviewSection';
import { MessageSquare, Users, Bot, TrendingUp } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Messages',
      value: '12,543',
      change: '+12%',
      changeType: 'positive' as const,
      icon: MessageSquare
    },
    {
      title: 'Active Bots',
      value: '8',
      change: '+2',
      changeType: 'positive' as const,
      icon: Bot
    },
    {
      title: 'Users Engaged',
      value: '2,847',
      change: '+8%',
      changeType: 'positive' as const,
      icon: Users
    },
    {
      title: 'Success Rate',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: TrendingUp
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening with your bots.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions />
        
        <OverviewSection />
      </div>
    </div>
  );
};