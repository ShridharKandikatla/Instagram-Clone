/**
 *
 * @author Anass Ferrak aka " TheLordA " <an.ferrak@gmail.com>
 * GitHub repo: https://github.com/TheLordA/Instagram-Web-App-MERN-Stack-Clone
 *
 */

/**
 *  This File will Contains all Constants Used in the whole
 *  Client Code In order to make it more Cleaner
 */

// This is the config used in order to send
// our token with Axios requests
export const config = (jwt) => {
  return {
    headers: {
      Authorization: 'Bearer ' + jwt,
    },
  };
};

/**
 * EndPoints of the API used in the code
 */

// CreatePost Screen
export const CREATE_POST_URL = `https://instagram-clone-qrc9.onrender.com/createpost`;

// Home Screen
export const ALL_POST_URL = `https://instagram-clone-qrc9.onrender.com/allpost`;

// Login Screen
export const LOGIN_URL = `https://instagram-clone-qrc9.onrender.com/signin`;

// NewPassword Screen
export const NEW_PWD_URL = `https://instagram-clone-qrc9.onrender.com/new-pwd`;

// Profile Screen
export const MY_POST_URL = `https://instagram-clone-qrc9.onrender.com/mypost`;
export const MY_BOOKMARKS_URL = `https://instagram-clone-qrc9.onrender.com/bookmarks`;

// ResetPassword Screen
export const RESET_PWD_URL = `https://instagram-clone-qrc9.onrender.com/reset-pwd`;

// SignUp Screen
export const SIGNUP_URL = `https://instagram-clone-qrc9.onrender.com/signup`;

// SubscribePosts Screen
export const SUB_POST_URL = `https://instagram-clone-qrc9.onrender.com/subspost`;
