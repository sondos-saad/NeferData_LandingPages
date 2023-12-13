import{ MdOutlineDone} from 'react-icons/md'
import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { 
  "role": "system",
   "content": "Explain all concept like a Professor in Biochemistry"
}
//flex gap-5 flex-wrap lg:flex-nowrap justify-center
//w-4/5 md:2/5 lg:w-2/6

function PriceChatGPT(){
    const [messages, setMessages] = useState([
        {
          message: "Hello, I'm ChatGPT! Ask me anything!",
          sentTime: "just now",
          sender: "ChatGPT"
        }
      ]);
      const [isTyping, setIsTyping] = useState(false);
    
      const handleSend = async (message) => {
        const newMessage = {
          message: message,
          direction: 'outgoing',
          sender: "user"
        };
    
        const newMessages = [...messages, newMessage];
        
        setMessages(newMessages);
    
        // Initial system message to determine ChatGPT functionality
        // How it responds, how it talks, etc.
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
      };
    
      async function processMessageToChatGPT(chatMessages) {
        
        let apiMessages = chatMessages.map((messageObject) => {
          let role = "";
          if (messageObject.sender === "ChatGPT") {
            role = "assistant";
          } else {
            role = "user";
          }
          return { role: role, content: messageObject.message}
        });
    
    
        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act. 
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            systemMessage,  // The system message DEFINES the logic of our chatGPT
            ...apiMessages // The messages from our chat with ChatGPT
          ]
        }
    
        await fetch("https://api.openai.com/v1/chat/completions", 
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apiRequestBody)
        }).then((data) => {
          return data.json();
        }).then((data) => {
          console.log(data);
          setMessages([...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }]);
          setIsTyping(false);
        });
      }
    return(
        <>
        
            <div className="h-screen w-screen bg-gray-200 md:p-10 flex items-center justify-center">
                <div className=" w-full h-full ">
                    <h1 className="text-center text-5xl mb-5"> Pricing with chatGPT</h1>
                    <p className="text-center text-2xl text-gray-600 mb-20 ">Pay as you go, scale instantly, or upgrade anytime for advanced features and capabilities.</p>
                    <div className="bg-sky-100 w-full  rounded-3xl px-5   ">
                        
                        <div className="w-full grid gap-5 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 justify-center">
                            <div className="py-5    rounded-3xl ">
                                <h4 className="text-lg tracking-wider  text-slate-600 mb-2">Standerd</h4>
                                <h1 className="text-6xl mb-2 tracking-wider text-bold ">Free</h1>
                                <span className=" inline-block mb-4">always</span>
                                <div className="flex items-center  gap-1 mb-2 ">
                                    <MdOutlineDone className="text-sky-500 text-xl  "/>
                                    <p className=" tracking-wide text-gray-700 text-sm text-bold">AI-powered email filter.</p>
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    <MdOutlineDone className="text-sky-500 text-xl "/>
                                    <p className=" tracking-wide text-gray-700 text-sm text-bold">Snack-sized company insights.</p>
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    <MdOutlineDone className="text-sky-500 text-xl "/>
                                    <p className=" tracking-wide text-gray-700 text-sm text-bold">SaaS product discovery.</p>
                                </div>
                                <div className="bg-sky-500 p-2  lg:mt-7 mb-2 text-center rounded-l-full border-2 border-solid border-sky-500 text-white hover:text-black hover:bg-white  duration-500 ">
                                    <button className="text-lg ">Create Account</button>
                                </div>
                            </div>
                            <div className="bg-sky-200   px-5 py-5 rounded-3xl  lg:-translate-y-9">
                                <h4 className="text-lg tracking-wider  text-slate-600 mb-2">Self-hosted</h4>
                                <h1 className="text-6xl mb-2 tracking-wider text-bold ">Free</h1>
                                <span className=" inline-block mb-4">always</span>
                                <div className="flex items-center gap-1 mb-2">
                                    <MdOutlineDone className="text-sky-500 text-xl "/>
                                    <p className=" tracking-wide text-gray-700 text-sm text-bold">All features of Standard plus:</p>
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    <MdOutlineDone className="text-sky-500 text-xl "/>
                                    <p className=" tracking-wide text-gray-700 text-sm text-bold">Full data protection of your environment.</p>
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    <MdOutlineDone className="text-sky-500 text-xl "/>
                                    <p className=" tracking-wide text-gray-700 text-sm text-bold">Compatible with on-prem, private & public cloud.</p>
                                </div>
                                <div className="bg-sky-500 p-2 mt-10 text-center rounded-l-full border-2 border-solid border-sky-500 text-white hover:text-black hover:bg-white  duration-500 ">
                                    <button className="text-lg ">Try Now</button>
                                </div>
                            </div>
                            <div className="bg-sky-300   px-5 py-5 rounded-3xl lg:-translate-y-9">
                                <h4 className="text-lg tracking-wider  text-slate-600 mb-2">Enterprise</h4>
                                <h1 className="text-6xl mb-2 tracking-wider text-bold ">$ 5.99</h1>
                                <span className=" inline-block mb-4">per user per month</span>
                                <div className="flex items-center gap-1 mb-2">
                                    <MdOutlineDone className="text-sky-500 text-xl "/>
                                    <p className=" tracking-wide text-gray-700 text-sm text-bold">All features of Standard plus:</p>
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    <MdOutlineDone className="text-sky-500 text-xl "/>
                                    <p className=" tracking-wide text-gray-700 text-sm text-bold">Full data protection & privacy.</p>
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    <MdOutlineDone className="text-sky-500 text-xl "/>
                                    <p className=" tracking-wide text-gray-700 text-sm text-bold">Dedicated & isolated instance in our cloud.</p>
                                </div>
                                <div className="bg-sky-500 p-2 mt-14 text-center rounded-l-full border-2 border-solid border-sky-500 text-white hover:text-black hover:bg-white  duration-500 ">
                                    <button className="text-lg ">Purchase Now</button>
                                </div>
                            </div>
                            <div className="bg-white   h-96 px-5 py-5 rounded-3xl lg:-translate-y-9">
                                <div  className=" h-full w-full ">
                                    <MainContainer>
                                        <ChatContainer>       
                                            <MessageList 
                                            scrollBehavior="smooth" 
                                            typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                                            >
                                            {messages.map((message, i) => {
                                                return <Message key={i} model={message} style={message.sender === "ChatGPT" ? { textAlign: "left" } : {}} />
                                            })}
                                            </MessageList>
                                            <MessageInput placeholder="Type message here" onSend={handleSend} />        
                                        </ChatContainer>
                                    </MainContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </>
   
    )    
}
export default PriceChatGPT;
