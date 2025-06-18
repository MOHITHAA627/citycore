import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  BarChart3, 
  FileText, 
  MessageSquare, 
  Calendar, 
  Search,
  Bell,
  Settings,
  Menu,
  X,
  ArrowRight,
  Target,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Globe,
  Database,
  Share2,
  Zap,
  Plus,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  MapPin,
  DollarSign,
  Activity,
  Briefcase,
  Shield,
  Truck,
  Wrench,
  Wifi,
  Home,
  TreePine,
  Droplets,
  Car,
  Building,
  HardHat,
  Lightbulb,
  Phone,
  Mail,
  Calendar as CalendarIcon,
  User,
  Star,
  Award,
  Bookmark,
  Flag,
  Heart,
  ThumbsUp,
  MessageCircle,
  Send,
  Paperclip,
  Video,
  Mic,
  MoreHorizontal
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'projects', label: 'Projects', icon: Target },
    { id: 'departments', label: 'Departments', icon: Building2 },
    { id: 'resources', label: 'Resources', icon: Database },
    { id: 'planning', label: 'Planning', icon: Calendar },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'documents', label: 'Documents', icon: FileText },
  ];

  const departments = [
    { 
      id: 1,
      name: 'Public Works', 
      status: 'active', 
      projects: 12, 
      budget: '₹45L',
      color: 'from-purple-500 to-purple-700',
      borderColor: 'border-purple-400',
      icon: HardHat,
      description: 'Infrastructure development and maintenance'
    },
    { 
      id: 2,
      name: 'Water Supply', 
      status: 'active', 
      projects: 8, 
      budget: '₹32L',
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-400',
      icon: Droplets,
      description: 'Water distribution and quality management'
    },
    { 
      id: 3,
      name: 'Transportation', 
      status: 'planning', 
      projects: 15, 
      budget: '₹67L',
      color: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-400',
      icon: Car,
      description: 'Traffic management and public transport'
    },
    { 
      id: 4,
      name: 'Urban Planning', 
      status: 'active', 
      projects: 6, 
      budget: '₹28L',
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-400',
      icon: Building,
      description: 'City development and zoning'
    },
    { 
      id: 5,
      name: 'Waste Management', 
      status: 'review', 
      projects: 9, 
      budget: '₹22L',
      color: 'from-pink-500 to-rose-600',
      borderColor: 'border-pink-400',
      icon: Truck,
      description: 'Waste collection and recycling'
    },
    { 
      id: 6,
      name: 'IT & Digital', 
      status: 'active', 
      projects: 4, 
      budget: '₹18L',
      color: 'from-indigo-500 to-purple-600',
      borderColor: 'border-indigo-400',
      icon: Wifi,
      description: 'Digital infrastructure and e-governance'
    },
  ];

  const crossDepartmentalProjects = [
    {
      id: 1,
      name: 'Smart Traffic Management System',
      departments: ['Transportation', 'IT & Digital'],
      budget: '₹25L',
      timeline: '6 months',
      progress: 75,
      status: 'Implementation',
      statusColor: 'bg-emerald-500',
      description: 'AI-powered traffic optimization with real-time monitoring'
    },
    {
      id: 2,
      name: 'Integrated Water Distribution Network',
      departments: ['Water Supply', 'Public Works'],
      budget: '₹40L',
      timeline: '12 months',
      progress: 30,
      status: 'Planning',
      statusColor: 'bg-amber-500',
      description: 'Smart water distribution with IoT sensors and leak detection'
    },
    {
      id: 3,
      name: 'Digital Waste Collection Optimization',
      departments: ['Waste Management', 'IT & Digital'],
      budget: '₹15L',
      timeline: '4 months',
      progress: 90,
      status: 'Review',
      statusColor: 'bg-blue-500',
      description: 'Route optimization and real-time tracking for waste collection'
    },
  ];

  const stats = [
    { label: 'Active Projects', value: '54', change: '+12% this month', color: 'from-emerald-400 to-teal-600', icon: Target },
    { label: 'Departments', value: '12', change: 'All active', color: 'from-blue-400 to-indigo-600', icon: Building2 },
    { label: 'Total Budget', value: '₹2.3Cr', change: '85% allocated', color: 'from-violet-400 to-purple-600', icon: DollarSign },
    { label: 'Shared Resources', value: '128', change: '+8% this week', color: 'from-amber-400 to-orange-600', icon: Share2 },
  ];

  const sharedResources = {
    dataRepositories: [
      { name: 'Citizen Demographics Database', status: 'Available', icon: Users, color: 'text-cyan-400' },
      { name: 'Infrastructure Asset Registry', status: 'Available', icon: Building, color: 'text-green-400' },
      { name: 'Budget & Financial Records', status: 'Restricted', icon: DollarSign, color: 'text-orange-400' },
      { name: 'Geographic Information System', status: 'Available', icon: MapPin, color: 'text-purple-400' },
    ],
    equipment: [
      { name: 'Construction Equipment Pool', status: 'Available', count: 15, icon: HardHat },
      { name: 'Vehicle Fleet Management', status: 'Available', count: 42, icon: Car },
      { name: 'IT Infrastructure Sharing', status: 'Available', count: 8, icon: Wifi },
      { name: 'Specialized Machinery', status: 'Available', count: 23, icon: Wrench },
      { name: 'Emergency Response Resources', status: 'Available', count: 12, icon: Shield },
    ]
  };

  const features = [
    {
      title: 'Unified Data Hub',
      description: 'Centralized repository for all departmental data with real-time synchronization and secure access controls.',
      icon: Database,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      title: 'Cross-Department Collaboration',
      description: 'Seamless communication channels between departments with shared workspaces and collaborative tools.',
      icon: Users,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Synchronized Planning',
      description: 'Coordinate project timelines across departments with automatic conflict detection and resolution.',
      icon: Calendar,
      color: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with live metrics, performance indicators and predictive insights.',
      icon: BarChart3,
      color: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Secure & Compliant',
      description: 'Government-grade security with role-based access control and compliance with Indian data protection laws.',
      icon: Shield,
      color: 'from-rose-500 to-pink-600'
    },
    {
      title: 'Rapid Implementation',
      description: 'Quick deployment with pre-configured templates and automated setup for Indian municipal governance.',
      icon: Zap,
      color: 'from-amber-500 to-orange-600'
    },
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { bg: 'bg-emerald-500', text: 'Active' },
      planning: { bg: 'bg-amber-500', text: 'Planning' },
      review: { bg: 'bg-blue-500', text: 'Review' },
      inactive: { bg: 'bg-gray-500', text: 'Inactive' }
    };
    const config = statusConfig[status] || statusConfig.inactive;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${config.bg}`}>
        {config.text}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">CitySync Platform</h1>
                  <p className="text-xs text-white/80">Inter-departmental Cooperation & Resource Management</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-white text-sm font-medium">Mumbai Municipal Corporation</span>
              </div>
              <button className="bg-slate-800 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-slate-700 transition-colors">
                <User className="h-4 w-4" />
                <span>Admin Panel</span>
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === item.id
                        ? 'border-white text-white'
                        : 'border-transparent text-white/70 hover:text-white hover:border-white/50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-8 w-8 text-white/90" />
                      <TrendingUp className="h-5 w-5 text-white/70" />
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-white/90 font-medium">{stat.label}</div>
                    <div className="text-xs text-white/70 mt-2">{stat.change}</div>
                  </div>
                );
              })}
            </div>

            {/* Cross-Departmental Projects */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-slate-800 flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-xl">
                    <Share2 className="h-7 w-7 text-white" />
                  </div>
                  <span>Cross-Departmental Projects</span>
                </h2>
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Plus className="h-5 w-5" />
                  <span>New Project</span>
                </button>
              </div>

              <div className="space-y-6">
                {crossDepartmentalProjects.map((project) => (
                  <div key={project.id} className="bg-white/70 rounded-xl p-6 border border-slate-200/50 hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{project.name}</h3>
                        <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-slate-500">
                          <div className="flex items-center space-x-2">
                            <Building2 className="h-4 w-4 text-indigo-500" />
                            <span className="font-medium">{project.departments.join(', ')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-emerald-500" />
                            <span className="font-medium">{project.budget}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-amber-500" />
                            <span className="font-medium">{project.timeline}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${project.statusColor} shadow-md`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-6">
                        <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                          <span className="font-medium">Progress</span>
                          <span className="font-bold">{project.progress}% Complete</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500 shadow-sm"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
                Powerful Features for <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Smart Cities</span>
              </h2>
              <p className="text-slate-600 text-center mb-10 max-w-3xl mx-auto text-lg">
                Comprehensive tools designed specifically for Indian municipal governance and inter-departmental coordination
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="bg-white/70 rounded-xl p-6 border border-slate-200/50 hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                      <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-xl w-fit mb-6 shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'departments' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-slate-800">Department Overview</h1>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg transition-all">
                <Share2 className="h-5 w-5" />
                <span>Share Resources</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept) => {
                const Icon = dept.icon;
                return (
                  <div key={dept.id} className={`bg-gradient-to-br ${dept.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${dept.borderColor}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      {getStatusBadge(dept.status)}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{dept.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                        <span className="text-sm text-white/80">Active Projects</span>
                        <span className="text-2xl font-bold">{dept.projects}</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                        <span className="text-sm text-white/80">Budget Allocated</span>
                        <span className="text-2xl font-bold">{dept.budget}</span>
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-slate-800">Shared Resources & Data</h1>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg transition-all">
                <Plus className="h-5 w-5" />
                <span>Add Resource</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Data Repositories */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-white/50 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">Data Repositories</h2>
                </div>
                
                <div className="space-y-4">
                  {sharedResources.dataRepositories.map((repo, index) => {
                    const Icon = repo.icon;
                    return (
                      <div key={index} className="bg-white/70 rounded-lg p-4 border border-slate-200/50 hover:bg-white/90 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Icon className={`h-5 w-5 ${repo.color}`} />
                            <span className="text-slate-800 font-medium">{repo.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              repo.status === 'Available' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                            }`}>
                              {repo.status}
                            </span>
                            <button className="text-cyan-500 hover:text-cyan-700">
                              <Share2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Equipment & Resources */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-white/50 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">Equipment & Resources</h2>
                </div>
                
                <div className="space-y-4">
                  {sharedResources.equipment.map((equipment, index) => {
                    const Icon = equipment.icon;
                    return (
                      <div key={index} className="bg-white/70 rounded-lg p-4 border border-slate-200/50 hover:bg-white/90 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Icon className="h-5 w-5 text-emerald-600" />
                            <div>
                              <span className="text-slate-800 font-medium block">{equipment.name}</span>
                              <span className="text-slate-500 text-xs">{equipment.count} units available</span>
                            </div>
                          </div>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                            Available
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'overview' && activeTab !== 'departments' && activeTab !== 'resources' && (
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-white/50 text-center shadow-lg">
            <div className="text-slate-800">
              <h2 className="text-3xl font-bold mb-4">
                {navigationItems.find(item => item.id === activeTab)?.label}
              </h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                This section is under development. The {navigationItems.find(item => item.id === activeTab)?.label.toLowerCase()} module will provide comprehensive tools for inter-departmental coordination and city management.
              </p>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Coming Soon
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;