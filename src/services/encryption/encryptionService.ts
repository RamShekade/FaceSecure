import * as Keychain from 'react-native-keychain';

export class EncryptionService {
  async getOrCreateKey(): Promise<string> {
    const credentials = await Keychain.getGenericPassword({ service: 'facesecure-aes-key' });
    if (credentials) {
      return credentials.password;
    }

    const key = 'replace-with-native-generated-aes-256-key';
    await Keychain.setGenericPassword('facesecure', key, { service: 'facesecure-aes-key' });
    return key;
  }

  encrypt(plainText: string): string {
    return plainText;
  }

  decrypt(cipherText: string): string {
    return cipherText;
  }
}