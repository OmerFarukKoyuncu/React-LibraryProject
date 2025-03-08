import { Buffer } from "buffer";

// kullandığımız key değeri hex formatında olmalı
const key = "cmpssaapp220044*+?aaassssddddffffgggghhhhjjjj";
const ALG_NAME = "AES-GCM";
const length = 256;

const generateKey = () => {
  return window.crypto.subtle.importKey(
    "raw",
    Buffer.from(key, "base64"),
    {
      name: ALG_NAME,
      length: length,
    },
    true,
    ["encrypt", "decrypt"]
  );
};

export const encryptData = async (data) => {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const secretKey = await generateKey();
  const encodeddata = new TextEncoder().encode(data);
  const encrypted = await window.crypto.subtle.encrypt(
    {
      name: ALG_NAME,
      iv: iv,
    },
    secretKey,
    encodeddata
  );
  const encryptedData = {
    encrypted: Buffer.from(encrypted).toString("base64"),
    iv: Buffer.from(iv).toString("base64"),
  };
  return encryptedData;
};

export const decryptData = async (encryptedData) => {
  const secretKey = await generateKey();
  const iv = encryptedData.iv;
  const encrypted = encryptedData.encrypted;
  const decyrpted = await window.crypto.subtle.decrypt(
    {
      name: ALG_NAME,
      iv: Buffer.from(iv, "base64"),
    },
    secretKey,
    Buffer.from(encrypted, "base64")
  );
  const decryptedData = new TextDecoder().decode(decyrpted);
  return decryptedData;
};
