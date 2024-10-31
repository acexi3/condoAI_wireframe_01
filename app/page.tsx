// app/page.tsx for the CondoAI Platform Manager protype
"use client";

import React, { useState } from "react";
import type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardContentProps,
  ButtonProps,
  InputProps,
  FolderItemProps,
} from "../types";
import {
  Search,
  Upload,
  MessageSquare,
  File,
  Lock,
  FileText,
  Users,
  Home,
  Settings,
  Folder,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Shield,
  Building,
  User,
  ScrollText,
  Bell,
  Wrench,
} from "lucide-react";

// Base Components
const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>
);

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => (
  <div className="p-4 border-b">{children}</div>
);

const CardTitle: React.FC<CardTitleProps> = ({ children }) => (
  <h2 className="text-xl font-semibold">{children}</h2>
);

const CardContent: React.FC<CardContentProps> = ({ children }) => (
  <div className="p-4">{children}</div>
);

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Input: React.FC<InputProps> = ({ className = "", prefix, ...props }) => (
  <div className="relative">
    {prefix && (
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        {prefix}
      </div>
    )}
    <input
      className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        prefix ? "pl-10" : ""
      } ${className}`}
      {...props}
    />
  </div>
);

// Folder Components
const FolderItem: React.FC<FolderItemProps> = ({
  folder,
  isExpanded,
  toggleFolder,
}) => {
  return (
    <div className="mb-2 w-full">
      <Button
        variant="ghost"
        className="w-full justify-start p-2 hover:bg-gray-100 text-left"
        onClick={() => toggleFolder(folder.id)}
      >
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 mr-2" />
        ) : (
          <ChevronRight className="h-4 w-4 mr-2" />
        )}
        {folder.icon}
        <span className="ml-2">{folder.name}</span>
      </Button>

      {isExpanded && (
        <div className="ml-8 space-y-1 mt-1">
          {folder.subfolders.map((subfolder) => (
            <Button
              key={subfolder}
              variant="ghost"
              className="w-full justify-start p-2 text-sm text-gray-600 hover:bg-gray-100 text-left"
            >
              <Folder className="h-4 w-4 mr-2" />
              <span>{subfolder}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Components
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-2xl font-bold text-blue-900">CondoAI</h1>
          <Button variant="outline">Login</Button>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              AI-Powered Condominium Management
            </h2>
            <p className="text-gray-600 mb-6">
              Streamline your condo operations with intelligent document
              management, automated meeting minutes, and instant access to vital
              information.
            </p>
            <Button className="mr-4">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>

          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Login to Condo.AI Platform Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input type="email" placeholder="Email" className="w-full" />
                <Input
                  type="password"
                  placeholder="Password"
                  className="w-full"
                />
                <Button className="w-full">Sign In</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const DocumentLibrary: React.FC = () => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["manager"]);

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folderId)
        ? prev.filter((f) => f !== folderId)
        : [...prev, folderId]
    );
  };

  const folderStructure = [
    {
      id: "manager",
      name: "Property Manager",
      icon: <User className="h-4 w-4" />,
      subfolders: [
        "Contracts",
        "Communications",
        "Reports",
        "Financial Records",
      ],
    },
    {
      id: "auditor",
      name: "Auditor",
      icon: <ScrollText className="h-4 w-4" />,
      subfolders: ["Financial Statements", "Bank Records", "Audits"],
    },
    {
      id: "accounting",
      name: "Accounting",
      icon: <BookOpen className="h-4 w-4" />,
      subfolders: ["Invoices", "Budget", "Financial Reports"],
    },
    {
      id: "board",
      name: "Board of Directors",
      icon: <Shield className="h-4 w-4" />,
      subfolders: ["Meeting Minutes", "Policies", "Strategic Plans"],
    },
    {
      id: "owners",
      name: "Owners",
      icon: <Home className="h-4 w-4" />,
      subfolders: ["Declaration", "Bylaws", "Rules", "AGM Minutes"],
    },
    {
      id: "residents",
      name: "Residents",
      icon: <Building className="h-4 w-4" />,
      subfolders: ["Rules", "Amenity Information", "Notices"],
    },
    {
      id: "security",
      name: "Concierge/Security",
      icon: <Bell className="h-4 w-4" />,
      subfolders: ["Access Logs", "Incident Reports", "Procedures"],
    },
    {
      id: "superintendent",
      name: "Superintendent",
      icon: <Wrench className="h-4 w-4" />,
      subfolders: ["Maintenance Logs", "Inspection Reports"],
    },
    {
      id: "contractors",
      name: "Maintenance Contractors",
      icon: <Wrench className="h-4 w-4" />,
      subfolders: ["Service Records", "Work Orders", "Equipment Manuals"],
    },
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="w-full flex flex-col space-y-4">
          <CardTitle>Document Library</CardTitle>
          <Input
            placeholder="Search documents..."
            className="w-full max-w-md"
            prefix={<Search className="h-4 w-4 text-gray-400" />}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2 max-w-4xl">
          {folderStructure.map((folder) => (
            <FolderItem
              key={folder.id}
              folder={folder}
              isExpanded={expandedFolders.includes(folder.id)}
              toggleFolder={toggleFolder}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const DocumentDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed w-64 h-full bg-white border-r p-4">
        <div className="text-xl font-bold mb-8">CondoAI</div>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" /> Documents
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <MessageSquare className="mr-2 h-4 w-4" /> Chat
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" /> Users
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Document Upload Card */}
          <Card>
            <CardHeader>
              <CardTitle>Mint & Store Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600">
                  Drag and drop files or click to upload
                </p>
                <Button className="mt-4">Select Files</Button>
              </div>
              <div className="mt-4">
                <Button className="w-full">
                  <Lock className="mr-2 h-4 w-4" />
                  Mint to Blockchain
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Board Meeting Minutes",
                  "Annual Budget",
                  "Declaration Amendment",
                ].map((doc) => (
                  <div
                    key={doc}
                    className="flex items-center p-2 hover:bg-gray-50 rounded"
                  >
                    <File className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <p className="text-sm text-gray-500 mb-2">
                  Have a question about your documents?
                </p>
                <Button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Ask Condo.AI a question
                </Button>
              </div>
            </CardContent>
          </Card>

          <DocumentLibrary />
        </div>
      </div>
    </div>
  );
};

// Continuing from the ChatInterface component...

const ChatInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed w-64 h-full bg-white border-r p-4">
        <div className="text-xl font-bold mb-8">CondoAI Chat</div>
        <div className="mb-4">
          <Input
            placeholder="Search conversations"
            className="w-full"
            prefix={<Search className="h-4 w-4" />}
          />
        </div>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            New Chat
          </Button>
          <div className="text-sm text-gray-500 mt-4">Recent Chats</div>
          {["Rules & Regulations", "Maintenance Request", "Board Meeting"].map(
            (chat) => (
              <Button
                key={chat}
                variant="ghost"
                className="w-full justify-start text-sm"
              >
                {chat}
              </Button>
            )
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="ml-64 h-screen flex flex-col">
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-lg p-4 max-w-[80%]">
                <p>Hello! How can I help you with condominium matters today?</p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-end">
              <div className="bg-white border rounded-lg p-4 max-w-[80%]">
                <p>
                  Can you tell me about the pet restrictions in our building?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-4">
          <div className="max-w-3xl mx-auto flex gap-4">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<
    "landing" | "dashboard" | "chat"
  >("landing");

  const screens = {
    landing: <LandingPage />,
    dashboard: <DocumentDashboard />,
    chat: <ChatInterface />,
  };

  return (
    <div className="relative">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button onClick={() => setCurrentScreen("landing")}>Landing</Button>
        <Button onClick={() => setCurrentScreen("dashboard")}>Dashboard</Button>
        <Button onClick={() => setCurrentScreen("chat")}>Chat</Button>
      </div>
      {screens[currentScreen]}
    </div>
  );
};

export default App;
