import { decryptData } from "../../utils/crypto/aes.gcm";
import { jsonParse } from "../../utils/jsonConverter/jsonConverter";
import { getSession } from "../../utils/storage/session";

export const axiosRequestInterseptors = async (config) => {
  const controller = new AbortController();
  config.signal = controller.signal;
  config.abortController = controller;

  /* 
   todo headers and authantication 
   */
  // localde kayıtlı olan token değeri alınacak ve header da eklenecek
  // localde bir token kayıtlı değil ise hata fırlatılacak

  const sessionValue = getSession("auth");

  if (sessionValue) {
    const encryptedData = jsonParse(sessionValue);
    // Normalde user olarak tanımlama yapmanız gerekmez, bu işlemler sessionda tutulan token değerini almak için kullanılacak
    const strUser = await decryptData(encryptedData);
    const user = jsonParse(strUser);
    config.headers = config.headers || {};
    config.headers.Authorization = `Barer ${user.token}`;
  }

  return config;
};

export const axiosRequestError = (error) => {
  return Promise.reject(error);
};
