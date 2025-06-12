"use client";

import { useState } from "react";

interface MessageItemProps {
  name: string;
  isClicked: boolean;
  isOpen: boolean;
  onClick: () => void;
  onClose: () => void;
  mediaUrl?: string;
  mediaType?: "audio" | "video";
}

interface Message {
  id: string;
  name: string;
  mediaUrl?: string;
  mediaType?: "audio" | "video";
}

interface MessageItemProps {
  name: string;
  isClicked: boolean;
  onClick: () => void;
  mediaUrl?: string;
  mediaType?: "audio" | "video";
}

const MessageItem: React.FC<MessageItemProps> = ({
  name,
  isClicked,
  isOpen,
  onClose,
  onClick,
  mediaUrl,
  mediaType,
}) => {
  return (
    <div className="relative w-full max-w-md ">
      <div
        className="bg-white rounded-3xl px-6 py-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow flex items-center justify-between w-full"
        onClick={onClick}
      >
        <div className="flex-1">
          <h3
            className={`text-gray-900 ${
              isClicked ? "font-normal" : "font-bold"
            }`}
          >
            {name}
          </h3>
          <p
            className={`text-gray-600 text-sm flex items-center gap-1 ${
              isClicked ? "font-normal" : "font-bold"
            }`}
          >
            {isClicked ? "Press to replay" : "You've got a message!"}{" "}
            {isClicked ? "🩷" : "💝"}
          </p>
        </div>

        <div className="flex-shrink-0 ml-4">
          {isClicked ? (
            <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-violet-600"
              >
                <polygon points="5,3 19,12 5,21" fill="currentColor" />
              </svg>
            </div>
          ) : (
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          )}
        </div>
      </div>

      {isOpen && mediaUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-4xl z-50"
          >
            &times;
          </button>
          <div className="bg-white rounded-xl overflow-hidden w-full max-w-sm shadow-lg">
            {mediaType === "audio" ? (
              <audio controls className="w-full">
                <source src={mediaUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            ) : (
              <video controls className="w-full h-auto" playsInline>
                <source src={mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const BirthdayMessages: React.FC = () => {
  const [clickedMessages, setClickedMessages] = useState<
    Record<string, boolean>
  >({});
  const [openMessageId, setOpenMessageId] = useState<string | null>(null);

  const handleMessageClick = (id: string): void => {
    setClickedMessages((prev) => ({
      ...prev,
      [id]: true, // Mark as clicked forever
    }));
    setOpenMessageId(id); // Open the modal
  };

  const handleCloseModal = () => {
    setOpenMessageId(null);
  };

  const messages: Message[] = [
    {
      id: "fer",
      name: "Fer",
      mediaUrl: "/media/ferAudio.mp3",
      mediaType: "audio",
    },
    {
      id: "ma",
      name: "Ma",
      mediaUrl: "/media/maVideo.mp4",
      mediaType: "video",
    },
    {
      id: "lucas",
      name: "Lucas",
      mediaUrl: "/media/lucasAudio.mp3",
      mediaType: "audio",
    },
    {
      id: "emily",
      name: "Emily",
      mediaUrl: "/media/emilyVideo.mp4",
      mediaType: "video",
    },
    {
      id: "evelyn",
      name: "Evelyn",
      mediaUrl: "/media/evelynAudio.mp3",
      mediaType: "audio",
    },
    {
      id: "mareline",
      name: "Mareline",
      mediaUrl: "/media/marelineAudio.mp3",
      mediaType: "audio",
    },
    {
      id: "gaby",
      name: "Gaby",
      mediaUrl: "/media/gabyVideo.mp4",
      mediaType: "video",
    },
    {
      id: "amber",
      name: "Amber",
      mediaUrl: "/media/amberVideo.mp4",
      mediaType: "video",
    },
  ];

  return (
    <div className="w-full">
      <div className="pt-10 p-4 space-y-3 mb-8">
        {messages.map((msg) => (
          <MessageItem
            key={msg.id}
            name={msg.name}
            isClicked={clickedMessages[msg.id] || false}
            isOpen={openMessageId === msg.id}
            onClick={() => handleMessageClick(msg.id)}
            onClose={handleCloseModal}
            mediaUrl={msg.mediaUrl}
            mediaType={msg.mediaType}
          />
        ))}
      </div>
    </div>
  );
};

export default BirthdayMessages;
