const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU226rRhT9laN5NTncbDCWUhWwwTa+ADY2dnVUDTBcbG6GwQ6O/FL1ob/QSHnoH/TT8gkVdqLkoec05QGNhmHtNWvttR9BmkUl0lANeo8gL6IjxKhZ4jpHoAekyvdRAQjgQQxBD0RT5NscJwTpCgqMCJeJwQ3xeLnk2doYulOmvZ0aOwm51ukeXAiQV04cuT8A3HJesBMfjFHYpcR019eZua+6c0anLdJYUJFDqvaqVXohm92DS4MIoyJKg0EeogQVMNZQrcOo+Bz9wwCTpjGUW4ERHrm8asfhYuyrWt6fVX4nFrsbxEBJpX2l/Bz9kYG0kN6mvC+uy8GB98KExbpQklN1nWcFv+pLu81es3fx6Ua/jIIUeSMPpTjC9ad1H8jO2llBYSbyZzSsyZyyWwqla7rZSQeT4d46nLg9fUYz9pO6H01tmFqBVFkUhAuKp5T60F5vVEkxTmtS7fLnmYRamlmsNx+J68Vbr+z/j+7G+KBMumfaMv3xOttNYGpEcjfeqHasGdTGLwRftNfacbr/pO6Fpneks2pkRovWTO6cuiVtVvH+3O3DwzGRu46cTVTWRjvjnT7EVfEjlvqmy2+8clcM0DlQtxsHri3nNJJ3/QWNg2zMb0eyPSITFeVkktDyw2I470jT3DDzAxvZa9Vk952RbPPtgzOpHoYD/cBJxv31RntUjzzQoy8EKFAQlbiAOMrS6x7LEgB6xwVyC4Sv8oIZ4rWlPtb7wd7ZVQnZ0ncly1sLiclhvKQ9EbEBF06smT+9BwTIi8xFZYm8YVTirKinqCxhgErQ++UbAVL0gG/GNeVYmgB+VJTYSqs8zqD35urbR+i6WZXiRZ26crNABehR79sI4ygNykbHKoWFG0ZHJIcQl6Dnw7hEFwJ46Bi5qMED9WElB2pIL369C2bhiNKPjBmfGsphlt6OIMHxHbrr3/EuJdy1Wd+9g2yXvet2WMT5juBSiAcEiF4z0/zzXQtPsmRUlNMuhI1OJT7qb/hU9BPFpYOrDTftUYE80MNFhQjgQHdf5ctsj9If4NJ6NSrMlrSomSEcc7I8ypYrQZO3o9MH3JunoPf4PqfkzGvwBIVXZ1umDQiQXFswam4utHmG6lIUK9A9uvtz+fXU6Ajz/GuKMCBACpvD4OX56a+vL89Pv315ef7z7y8vz09/NK/fv/zUlH71pQH1EIZRXIIekGdsxmxFaTD192RRqqo4CEQ5EMG7j2+BuDUcNVpKB96VR27SX9LuctOqS0hjsa+T/fPWpJVK29i6oLQC6/5fQEAPKJrTPyn1rB8sXAUP+DoZrwpSP2QiDcV2tHBb07ij8dxxLc0ntj0/FTqlTpLC0r1lzmhq/+wv0Om87XTY+ZaDrOm4HVm8b6rd+uljMZ0MO2Sb8l1KobzduKRWQX+n7o4mteE2cnxwtXnYX08jiT5qk3m8ToPhvm7ZNr2wqiG3DI7KuhygaizO6t1A1kxzYIWSeIvqdVTEryM6uobo8bX7/AhdJ96rMf/l33sOqAvxAeJ1hH6n1yRPHpxgxYrRcBxQgj1g9LJQsWOIZ/LUZSzPdKJEOZOmnyngcvlGgDyG2M+KBPRAmTgQECCGJRbfc7yMElRimOSgR/Ms12ZogWcJkNRini8wxG/xB2LzaJIILv8Aq/tVUhoIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

