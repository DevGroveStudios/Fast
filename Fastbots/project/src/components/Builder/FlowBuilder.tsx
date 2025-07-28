import React, { useState } from 'react';
import { Plus, MessageSquare, GitBranch, Settings, Trash2 } from 'lucide-react';

interface FlowNode {
  id: string;
  type: 'message' | 'condition' | 'action';
  title: string;
  content: string;
  x: number;
  y: number;
}

export const FlowBuilder: React.FC = () => {
  const [nodes, setNodes] = useState<FlowNode[]>([
    {
      id: '1',
      type: 'message',
      title: 'Welcome Message',
      content: 'Hello! How can I help you today?',
      x: 100,
      y: 100
    },
    {
      id: '2',
      type: 'condition',
      title: 'User Intent',
      content: 'Check user intent',
      x: 100,
      y: 250
    }
  ]);

  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const addNode = (type: FlowNode['type']) => {
    const newNode: FlowNode = {
      id: Date.now().toString(),
      type,
      title: `New ${type}`,
      content: '',
      x: Math.random() * 400 + 100,
      y: Math.random() * 300 + 100
    };
    setNodes([...nodes, newNode]);
  };

  const deleteNode = (id: string) => {
    setNodes(nodes.filter(node => node.id !== id));
    setSelectedNode(null);
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'message': return MessageSquare;
      case 'condition': return GitBranch;
      case 'action': return Settings;
      default: return MessageSquare;
    }
  };

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'message': return 'bg-blue-100 border-blue-300 dark:bg-blue-900/50 dark:border-blue-600';
      case 'condition': return 'bg-yellow-100 border-yellow-300 dark:bg-yellow-900/50 dark:border-yellow-600';
      case 'action': return 'bg-green-100 border-green-300 dark:bg-green-900/50 dark:border-green-600';
      default: return 'bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600';
    }
  };

  return (
    <div className="h-full flex">
      {/* Canvas */}
      <div className="flex-1 relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Toolbar */}
        <div className="absolute top-4 left-4 flex space-x-2 z-10">
          <button
            onClick={() => addNode('message')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Message</span>
          </button>
          <button
            onClick={() => addNode('condition')}
            className="flex items-center space-x-2 px-3 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-sm transition-colors"
          >
            <GitBranch className="w-4 h-4" />
            <span>Condition</span>
          </button>
          <button
            onClick={() => addNode('action')}
            className="flex items-center space-x-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span>Action</span>
          </button>
        </div>

        {/* Nodes */}
        {nodes.map((node) => {
          const Icon = getNodeIcon(node.type);
          return (
            <div
              key={node.id}
              className={`absolute w-48 p-4 border-2 rounded-lg cursor-move ${getNodeColor(node.type)} ${
                selectedNode === node.id ? 'ring-2 ring-blue-500' : ''
              }`}
              style={{ left: node.x, top: node.y }}
              onClick={() => setSelectedNode(node.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{node.title}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNode(node.id);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">{node.content}</p>
              
              {/* Connection points */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
            </div>
          );
        })}
      </div>

      {/* Properties Panel */}
      <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Properties</h3>
        
        {selectedNode ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Node Title
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={nodes.find(n => n.id === selectedNode)?.title || ''}
                onChange={(e) => {
                  setNodes(nodes.map(node => 
                    node.id === selectedNode 
                      ? { ...node, title: e.target.value }
                      : node
                  ));
                }}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Content
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={nodes.find(n => n.id === selectedNode)?.content || ''}
                onChange={(e) => {
                  setNodes(nodes.map(node => 
                    node.id === selectedNode 
                      ? { ...node, content: e.target.value }
                      : node
                  ));
                }}
              />
            </div>
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">Select a node to edit its properties</p>
        )}
      </div>
    </div>
  );
};