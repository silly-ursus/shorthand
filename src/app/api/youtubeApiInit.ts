const {google} = require('googleapis');

// Each API may support multiple versions. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.

// Enter into Netlify, alternatively check GH settings
// For ENV variables
const blogger = google.blogger({
  version: 'v3',
  auth: 'YOUR API KEY'
});

const params = {
  blogId: '3213900'
};

// get the blog details
blogger.blogs.get(params)
  .then(res => {
    console.log(`The blog url is ${res.data.url}`);
  })
  .catch(error => {
    console.error(error);
  });