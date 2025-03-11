
import Navbar from "@/components/layout/Navbar";
import MessageList from "@/components/messages/MessageList";

const Messages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Messages</h1>
        
        <MessageList />
      </main>
    </div>
  );
};

export default Messages;
