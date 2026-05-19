// Centrale WhatsApp/contact helpers
export const PHONE_RAW = "31611879789"; // landcode + nummer (zonder leading 0)
export const PHONE_DISPLAY = "+31 6 11 87 97 89";
export const PHONE_TEL = "+31611879789";
export const EMAIL = "info@adabmoves.nl";

const base = `https://wa.me/${PHONE_RAW}`;

export function waLink(message: string) {
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  generic: waLink("Salam aleikum, ik wil graag meer weten over jullie aanbod."),
  community: waLink(
    "Salam aleikum, ik wil mijn kind inschrijven bij de ADAB MOVES community.",
  ),
  question: waLink("Salam aleikum, ik heb een vraag over ADAB MOVES."),
  school: waLink(
    "Salam aleikum, wij zijn een school en willen graag een gesprek over jullie aanbod.",
  ),
  event: waLink(
    "Salam aleikum, wij willen graag een event/ADAB Day organiseren — kunnen we sparren?",
  ),
};
