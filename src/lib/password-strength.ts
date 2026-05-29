export interface PasswordValidation {
  score: 0 | 1 | 2 | 3 | 4;
  label: string;
  colorClass: string;
  errors: string[];
  isValid: boolean;
}

const MIN_LENGTH = 8;
const MAX_LENGTH = 128;

// Subset of common passwords — complements the HIBP check
const COMMON_PASSWORDS = new Set([
  "password", "password1", "password123", "12345678", "123456789",
  "qwerty123", "iloveyou", "admin123", "letmein", "welcome",
  "monkey", "dragon", "master", "sunshine", "princess",
  "qwertyui", "11111111", "00000000", "passw0rd", "abc12345",
  "baseball", "football", "superman", "batman", "trustno1",
]);

function computeScore(pwd: string): 0 | 1 | 2 | 3 | 4 {
  if (pwd.length < MIN_LENGTH) return 0;
  const types = [
    /[A-Z]/.test(pwd),
    /[a-z]/.test(pwd),
    /[0-9]/.test(pwd),
    /[^A-Za-z0-9]/.test(pwd),
  ].filter(Boolean).length;

  if (pwd.length >= 16 && types >= 3) return 4;
  if (pwd.length >= 12 && types >= 2) return 3;
  if (pwd.length >= 10 && types >= 2) return 2;
  return 1;
}

export function validatePassword(pwd: string): PasswordValidation {
  const errors: string[] = [];

  if (pwd.length < MIN_LENGTH) errors.push(`Mínimo ${MIN_LENGTH} caracteres`);
  if (pwd.length > MAX_LENGTH) errors.push(`Máximo ${MAX_LENGTH} caracteres`);
  if (COMMON_PASSWORDS.has(pwd.toLowerCase())) errors.push("Esta contraseña es demasiado común");

  const score = computeScore(pwd);

  const LABELS = ["Muy débil", "Débil", "Regular", "Buena", "Muy segura"];
  const COLORS = [
    "bg-red-500",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-lime-500",
    "bg-emerald-500",
  ];

  return {
    score,
    label: LABELS[score],
    colorClass: COLORS[score],
    errors,
    isValid: errors.length === 0,
  };
}

async function sha1Hex(message: string): Promise<string> {
  const buf = new TextEncoder().encode(message);
  const hashBuf = await crypto.subtle.digest("SHA-1", buf);
  return Array.from(new Uint8Array(hashBuf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

// k-anonymity range check — only the first 5 chars of the SHA-1 hash are sent.
// Fails open (returns false) on network error so as not to block registration.
export async function isPasswordBreached(password: string): Promise<boolean> {
  try {
    const hash = await sha1Hex(password);
    const prefix = hash.slice(0, 5);
    const suffix = hash.slice(5);

    const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
      headers: { "Add-Padding": "true" },
    });
    if (!res.ok) return false;

    const text = await res.text();
    return text.split("\n").some((line) => line.split(":")[0].trim() === suffix);
  } catch {
    return false;
  }
}
