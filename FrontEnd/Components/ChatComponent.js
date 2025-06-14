// import { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { io } from 'socket.io-client';
// import { localhost } from '../Utils/constant';

// const ChatComponent = () => {
//   const socketRef = useRef(null);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
// const {recruiterId,status,userid,jobapplication_id}=useParams();
//   const roomId =userid // replace with jobApplicationId or unique room
// const [isTyping, setIsTyping] = useState(false);
 

//   useEffect(() => {
//     socketRef.current = io(localhost, {
//       withCredentials: true,
//     });
//      socketRef.current.emit("join-room", userid);


//      socketRef.current.on("previous-messages", (messages) => {
//     setMessages(messages); // Load all old messages
//   });
//    socketRef.current.on("user-typing", (data) => {
    
//         setIsTyping(true);
//         // hide typing after 2 sec
//         setTimeout(() => setIsTyping(false), 2000);
  
//     });
   
//     // ✅ Listen for incoming messages
//     socketRef.current.on('receive-message', (data) => {
      
//       setMessages((prev) => [...prev, { content: data, sender: 'other' }]);
//     });

       
  
//     return () => {
//       socketRef.current.disconnect();
//     };
//   }, []);
//  const handleChange = (e) => {
//     setInput(e.target.value);
//     if (socketRef.current) {
//       socketRef.current.emit("user-typing", userid);
//     }
//   };
//   // ✅ Send message
//   const sendMessage = () => {
//     if (input.trim() === '') return;

//     // Show your own message
//     setMessages((prev) => [...prev, { content: input, sender: 'you' }]);

//     // Emit to backend
//   //   room: jobApplicationId,  ✅ 
//   // content: messageText,   ✅ 
//   // senderId: recruiterOrUserId,    
//   // receiverId: otherPartyId,    recruiter
// console.log( roomId ,input,userid,recruiterId)
//  socketRef.current.emit("send-message", {
//   room: roomId,
//       message: input,
//   senderId: userid,
//   receiverId: recruiterId,
// });
//     // socketRef.current.emit('send-message', {
//     //   room: roomId,
//     //   message: input,

      
//     // });



//     setInput('');
//   };

//  return (
//     <div className="max-w-md w-full mx-auto p-4 min-h-screen flex flex-col">
//       <h3 className="text-2xl font-semibold mb-4 text-center">💬 Simple Chat</h3>

//       {/* ✅ Scrollable chat box */}
//       <div
//         className="flex-1 bg-gray-100 p-4 rounded-lg shadow-inner overflow-y-auto mb-4"
//         style={{ maxHeight: "400px", minHeight: "300px" }}
 
//       >
//         {messages.length === 0 ? (
//           <p className="text-center text-gray-500">No messages yet.</p>
//         ) : (
//           messages.map((msg, idx) => (
//             <div
//               key={idx}
//               className={`mb-2 flex ${
//                 msg.senderId === userid ? "justify-end" : "justify-start"
//               }`}
//             >
//               <span
//                 className={`inline-block px-4 py-2 max-w-xs break-words rounded-lg text-sm ${
//                   msg.senderId === userid
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-300 text-gray-900"
//                 }`}
//               >
//                 {msg.content}
//               </span>
//             </div>
//           ))
//         )}
//       </div>

//       {/* ✅ Input and button */}
//       <div className="flex w-full">
//         <input
//           value={input}
//           onChange={handleChange}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           placeholder="Type a message..."
//           className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import { localhost } from '../Utils/constant';

const ChatComponent = () => {
  const socketRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const { recruiterId, userid } = useParams();
  const roomId = userid; // or jobapplication_id if rooms are job-based

  useEffect(() => {
    // ✅ Connect to socket
    socketRef.current = io(localhost, { withCredentials: true });

    // ✅ Join room
    socketRef.current.emit('join-room', roomId);

    // ✅ Load previous messages
    socketRef.current.on('previous-messages', (loadedMessages) => {
      setMessages(loadedMessages);
    });

    // ✅ Listen for typing
    socketRef.current.on('user-typing', () => {
      setIsTyping(true);

      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    });

    // ✅ Listen for new messages
    socketRef.current.on('receive-message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    // ✅ Cleanup
    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, [roomId]);

  const handleChange = (e) => {
    setInput(e.target.value);
    socketRef.current.emit('user-typing', roomId);
  };

  const sendMessage = () => {
    if (input.trim() === '') return;

    const messageData = {
      room: roomId,
      message: input,
      senderId: userid,
      receiverId: recruiterId,
    };

    // ✅ Emit to backend
    socketRef.current.emit('send-message', messageData);

    // ✅ Show locally
    setMessages((prev) => [...prev, messageData]);
    setInput('');
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 min-h-screen flex flex-col">
      <h3 className="text-2xl font-semibold mb-4 text-center">💬 Simple Chat</h3>

      <div
        className="flex-1 bg-gray-100 p-4 rounded-lg shadow-inner overflow-y-auto mb-4"
        style={{ maxHeight: '400px', minHeight: '300px' }}
      >
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">No messages yet.</p>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 flex ${
                msg.senderId === userid ? 'justify-end' : 'justify-start'
              }`}
            >
              <span
                className={`inline-block px-4 py-2 max-w-xs break-words rounded-lg text-sm ${
                  msg.senderId === userid
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-300 text-gray-900'
                }`}
              >
                {msg.message || msg.content}
              </span>
            </div>
          ))
        )}
        {isTyping && (
          <p className="text-sm italic text-gray-500 mt-2">Typing...</p>
        )}
      </div>

      <div className="flex w-full">
        <input
          value={input}
          onChange={handleChange}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
