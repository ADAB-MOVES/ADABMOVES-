// Centrale WhatsApp/contact helpers
export const PHONE_RAW = "31611879789"; // landcode + nummer (zonder leading 0)
export const PHONE_DISPLAY = "+31 6 11 87 97 89";
export const PHONE_TEL = "+31611879789";
export const EMAIL = "adabmoves@gmail.com";

const base = `https://wa.me/${PHONE_RAW}`;

export function waLink(message: string) {
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  generic: waLink("Hallo, ik wil graag meer weten over ADAB MOVES."),
  community: waLink(
    "Hallo, ik wil mijn kind inschrijven bij de ADAB MOVES multisport-community.",
  ),
  question: waLink("Hallo, ik heb een vraag over ADAB MOVES."),
  school: waLink(
    "Hallo, wij zijn een school en willen graag een gesprek over jullie aanbod.",
  ),
  event: waLink(
    "Hallo, wij willen graag een sportdag of event organiseren — kunnen we sparren?",
  ),
};
