// // src/components/Modal.tsx
// // import { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Send } from "lucide-react";
// import Loader from "./Loader"; // <-- aapka Loader component import karo

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   formData: {
//     name: string;
//     email: string;
//     phone: string;
//     subject: string;
//     message: string;
//   };
//   errors: Record<string, string>;
//   loading: boolean;
//   handleSubmit: (e: React.FormEvent) => void;
//   handleInputChange: (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => void;
// }

// export default function Modal({
//   isOpen,
//   onClose,
//   formData,
//   errors,
//   loading,
//   handleSubmit,
//   handleInputChange,
// }: ModalProps) {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             className="w-full max-w-2xl bg-[#18202f] rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-8">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl text-white font-bold">Contact Us</h2>
//                 <button
//                   onClick={onClose}
//                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                   aria-label="Close modal"
//                 >
//                   <X className="h-6 w-6" />
//                 </button>
//               </div>

//               {/* ✅ Modal Form */}
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm text-white mb-2">
//                     Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white"
//                     placeholder="Your name"
//                   />
//                   {errors.name && (
//                     <p className="text-red-400 text-sm">{errors.name}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm text-white mb-2">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white"
//                     placeholder="your@company.com"
//                   />
//                   {errors.email && (
//                     <p className="text-red-400 text-sm">{errors.email}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-sm text-white mb-2">
//                     Phone *
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white"
//                     placeholder="e.g. +1 234 567 8901"
//                   />
//                   {errors.phone && (
//                     <p className="text-red-400 text-sm">{errors.phone}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-sm text-white mb-2">
//                     Subject *
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white"
//                     placeholder="Subject"
//                   />
//                   {errors.subject && (
//                     <p className="text-red-400 text-sm">{errors.subject}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm text-white mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={5}
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white resize-none"
//                     placeholder="Your message..."
//                   />
//                   {errors.message && (
//                     <p className="text-red-400 text-sm">{errors.message}</p>
//                   )}
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#a3e635] text-green-900 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg"
//                 >
//                   {loading ? (
//                     <Loader />
//                   ) : (
//                     <>
//                       <Send className="h-5 w-5" /> Send Message
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-[#0b1012] p-6 rounded-2xl shadow-2xl relative max-w-md w-full">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
