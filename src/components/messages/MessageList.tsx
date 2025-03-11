
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Send } from "lucide-react";

// Mock message data
const messages = [
  {
    id: 1,
    sender: "Sarah",
    content: "I'm at the library, will be home by 5pm",
    timestamp: "2:30 PM",
    avatar: "",
  },
  {
    id: 2,
    sender: "You",
    content: "Ok, thanks for letting me know. Do you need a ride?",
    timestamp: "2:32 PM",
    avatar: "",
    isCurrentUser: true,
  },
  {
    id: 3,
    sender: "Sarah",
    content: "No, I'll take the bus. See you at home!",
    timestamp: "2:35 PM",
    avatar: "",
  },
  {
    id: 4,
    sender: "You",
    content: "Sounds good, stay safe!",
    timestamp: "2:37 PM",
    avatar: "",
    isCurrentUser: true,
  },
];

const MessageList = () => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // In a real app, this would send a message to the backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <Card className="flex flex-col h-[600px]">
      <CardHeader className="pb-4 border-b">
        <div className="flex justify-between items-center">
          <CardTitle>Messages</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="text" placeholder="Search messages..." className="pl-8" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto p-0">
        <div className="p-4 space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.isCurrentUser ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${message.isCurrentUser ? "flex-row-reverse" : ""}`}>
                {!message.isCurrentUser && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={message.avatar} alt={message.sender} />
                    <AvatarFallback className="bg-safehaven-100 text-safehaven-800 text-xs">
                      {message.sender.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <div className={`rounded-lg px-3 py-2 mb-1 ${
                    message.isCurrentUser 
                      ? "bg-safehaven-600 text-white" 
                      : "bg-muted text-foreground"
                  }`}>
                    {message.content}
                  </div>
                  <div className={`text-xs text-muted-foreground ${message.isCurrentUser ? "text-right" : ""}`}>
                    {message.isCurrentUser ? "You" : message.sender}, {message.timestamp}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input 
            placeholder="Type your message..." 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button type="submit" size="icon" disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default MessageList;
