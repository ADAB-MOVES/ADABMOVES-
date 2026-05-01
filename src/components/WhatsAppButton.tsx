const WHATSAPP_NUMBER = "31600000000"; // TODO: vervang met echte nummer
const WHATSAPP_MSG = encodeURIComponent(
  "Assalamu alaikum, ik heb een vraag over ADAB MOVES.",
);

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur ons een WhatsApp-bericht"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M19.11 17.27c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.04 5.33c-5.91 0-10.71 4.81-10.71 10.71 0 1.89.5 3.74 1.44 5.36L5 27l5.74-1.5a10.65 10.65 0 0 0 5.3 1.42h.01c5.9 0 10.71-4.81 10.71-10.71 0-2.86-1.11-5.55-3.13-7.57a10.64 10.64 0 0 0-7.59-3.31zm0 19.6h-.01a8.86 8.86 0 0 1-4.51-1.24l-.32-.19-3.4.89.91-3.32-.21-.34a8.85 8.85 0 0 1-1.36-4.7c0-4.9 3.99-8.89 8.9-8.89 2.38 0 4.61.93 6.29 2.61a8.84 8.84 0 0 1 2.6 6.29c0 4.9-3.99 8.89-8.9 8.89z" />
      </svg>
    </a>
  );
}
