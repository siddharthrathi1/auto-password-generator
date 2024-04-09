import { randomBytes } from 'crypto';

export function generateRandomPassword(length: number): string {
  // Define the characters to be used in the password
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsLength = chars.length;

  // Generate random bytes using the crypto module
  const bytes = randomBytes(length);

  // Initialize an empty string to store the generated password
  let password = '';

  // Iterate over the length provided and generate a random character for each position
  for (let i = 0; i < length; ++i) {
    // Generate a random index based on the random bytes generated earlier
    // Modulo the random index with the length of the characters string to get a valid index
    const index = bytes.readUInt8(i) % charsLength;

    // Append the character at the calculated index to the password string
    password += chars[index];
  }

  // Return the generated password
  return password;
}
