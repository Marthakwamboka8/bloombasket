import React, { useState } from "react";

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi 👋 I’m your shopping assistant. Ask me anything!" }
    ]);
    const [input, setInput] = useState("");
    const botReplies = {
        "hi": "Hey there 👋 Welcome to our flower shop 🌸 How can I help you today?",

        "hello": "Hello 😊 Looking for fresh flowers, bouquets, or gifts?",

        "flowers": "We offer roses 🌹, tulips 🌷, lilies 🌼, orchids 🌺, sunflowers 🌻, and many more beautiful flowers.",

        "rose": "Roses 🌹 are perfect for love, romance, anniversaries, and special gifts.",

        "tulip": "Tulips 🌷 are elegant flowers available in many colorful varieties.",

        "lily": "Lilies 🌼 are fragrant and perfect for celebrations and sympathy arrangements.",

        "orchid": "Orchids 🌺 are exotic flowers that make beautiful luxury gifts.",

        "sunflower": "Sunflowers 🌻 symbolize happiness, positivity, and warmth.",

        "bouquet": "We create beautiful bouquets 💐 for birthdays, weddings, graduations, and special occasions.",

        "wedding": "We provide wedding flower arrangements 💍 including bridal bouquets and decorations.",

        "birthday": "Birthday bouquets 🎉 are available in many styles and colors.",

        "delivery": "Yes 🚚 We offer flower delivery services to selected locations.",

        "price": "Flower prices 💵 vary depending on the type, size, and arrangement.",

        "care": "Keep flowers fresh 🌸 by changing water daily and placing them in a cool area.",

        "occasion": "We have flowers for anniversaries ❤️ birthdays 🎂 weddings 💍 sympathy 🕊️ and more.",

        "custom": "Yes ✨ You can request custom flower arrangements based on your favorite flowers and colors.",

        "cart": "Go to the Cart page 🛒 to see your selected flowers.",

        "checkout": "Click 'Proceed to Checkout' 💳 to complete your flower order.",

        "products": "Browse all available flowers and bouquets in the Products page 🌸",

        "default": "I can help with flowers 🌸 bouquets 💐 delivery 🚚 prices 💵 weddings 💍 and flower care 🌿"
    };

    const handleSend = () => {
        if (!input) return;

        const userMsg = { from: "user", text: input };
        setMessages(prev => [...prev, userMsg]);

        const key = input.toLowerCase();
        const reply = botReplies[key] || botReplies.default;

        setTimeout(() => {
            setMessages(prev => [...prev, { from: "bot", text: reply }]);
        }, 500);

        setInput("");
    };

    return (
        <>
            {/* FLOAT BUTTON */}
            <div
                onClick={() => setOpen(!open)}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    background: "black",
                    color: "white",
                    padding: "15px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    zIndex: 1000
                }}
            >
               <button className="flower-chat-btn">🌸 Chat with us</button>
            </div>

            {/* CHAT WINDOW */}
            {open && (
                <div style={{
                    position: "fixed",
                    bottom: "80px",
                    right: "20px",
                    width: "300px",
                    height: "400px",
                    background: "white",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 1000
                }}>

                    {/* messages */}
                    <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
                        {messages.map((msg, i) => (
                            <div key={i} style={{
                                textAlign: msg.from === "user" ? "right" : "left",
                                margin: "5px 0"
                            }}>
                                <span style={{
                                    background: msg.from === "user" ? "#007bff" : "#eee",
                                    color: msg.from === "user" ? "white" : "black",
                                    padding: "5px 10px",
                                    borderRadius: "10px",
                                    display: "inline-block"
                                }}>
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* input */}
                    <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask something..."
                            style={{ flex: 1, padding: "10px", border: "none" }}
                        />
                        <button onClick={handleSend} style={{ padding: "10px" }}>
                            Send
                        </button>
                    </div>

                </div>
            )}
        </>
    );
};

export default Chatbot;