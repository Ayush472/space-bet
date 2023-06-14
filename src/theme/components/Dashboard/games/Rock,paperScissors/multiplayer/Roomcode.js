import React from "react";
import  Clipboard from "./icon/clipboard"
import "./../../../../../assets/css/Dashboard/rps game/rps multiplayer/room.css"
import ClipboardJS from "clipboard";
// export default function Roomcode({ code }) {
//     const handleCopyCode = () => {
//       if (navigator.clipboard) {
//         navigator.clipboard.writeText(code)
//           .then(() => {
//             console.log("Text copied to clipboard successfully");
//           })
//           .catch((err) => {
//             console.error("Failed to copy text: ", err);
//           });
//       } else {
//         // Fallback method for browsers that do not support the Clipboard API
//         const tempTextArea = document.createElement("textarea");
//         tempTextArea.value = code;
//         document.body.appendChild(tempTextArea);
//         tempTextArea.select();
//         document.execCommand("copy");
//         document.body.removeChild(tempTextArea);
//         console.log("Text copied to clipboard successfully");
//       }
//     };
  
//     return (
//       <div
//         className={code ? "roomcode active" : "roomcode"}
//         onClick={handleCopyCode}
//       >
//         <span className="code">{code ? code : "error"}</span>
//         <Clipboard className="icon" />
//       </div>
//     );
//   }
export default function Roomcode({ code }) {
  const handleCopyCode = () => {
    const clipboard = new ClipboardJS(".roomcode");
    clipboard.on("success", () => {
      console.log("Text copied to clipboard successfully");
      clipboard.destroy();
    });
    clipboard.on("error", () => {
      console.error("Failed to copy text to clipboard");
      clipboard.destroy();
    });
  };

  return (
    <div
      className={code ? "roomcode active" : "roomcode"}
      data-clipboard-text={code}
      onClick={handleCopyCode}
    >
      <span className="code">{code ? code : "error"}</span>
      <Clipboard className="icon" />
    </div>
  );
}
