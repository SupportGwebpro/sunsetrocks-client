interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
}

export default function Modal({ isOpen, onClose, title, description }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[#000000cf] bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">{title}</h2>
                <p className="text-gray-700 text-center">{description}</p>
            </div>
        </div>
    );
}
